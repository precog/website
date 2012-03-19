(function(ctx, store) {
	var path      = '/demo/fastspring/';
	var API = ctx[store] = ctx[store] || {};

	var filterZeros = function(labels) { // set to zero the labels to hide
		return function(dp) {
			if(labels.indexOf(dp.label) < 0)
				 dp.value = 0;
			return dp;
		};
	};

	API.orders = function(selector, start, end, op, by, labels) {
		var query = "tx := load(//fs2/transactions) " +
"ftx := tx where tx.time >= ${start} & tx.time <= ${end}" +
"intersection('label) := " +
"    { " +
"        label : 'label, " +
"        value : sum(ftx.quantity${op} where ftx.${by} = 'label) " +
"    } " +
"intersection ";


		ReportGrid.pieChart(selector, {
			axes : ["label", "value"],
			load : ReportGrid.query
				.data({
					by : by == 'country' ? 'country' : 'product',
					op : op == 'count' ? '' : ' * ftx.usd',
					start : +start,
					end   : +end
				}).quirrel(query)
				.sortValue("label")
				.map(filterZeros(labels))
		});
	};

	API.ordersSeries = function(selector, periodicity, start, end, op, by, labels) {
		var query = "tx := load(//fs2/transactions) " +
"ftx := tx where tx.time >= ${start} & tx.time <= ${end}" +
"intersection('label, 'time) := " +
"    period := std::time::${period}(std::time::millisToISO(ftx.time, \"+00:00\")) " +
"    { " +
"        label : 'label, " +
"        time  : 'time, " +
"        value : sum(ftx.quantity${op} where ftx.${by} = 'label & period = 'time) " +
"    } " +
"intersection ";
		function pickPeriodF(p)
		{
			switch(p)
			{
				case "day"  : return 'date';
				case "month": return 'yearMonth';
				case "year" : return 'year';
			}
		}
		ReportGrid.barChart(selector, {
			axes : ["time:"+periodicity, "value"],
			load : ReportGrid.query
				.data({
					by : by == 'country' ? 'country' : 'product',
					op : op == 'count' ? '' : ' * ftx.usd',
					period : pickPeriodF(periodicity),
					start : +start,
					end   : +end
				}).quirrel(query)
				.map(filterZeros(labels))
				.split("label")
				.stackSort(function(a, b) {
					return ReportGrid.compare(a[0].label, b[0].label);
				})
				.sortValue("time")
				.mapValue("time", function(d) {
					var d = (""+d).split("-").join("/");
					return ReportGrid.date.snap(new Date(d), periodicity);
				})
				.renameFields({
					label : "label",
					time  : "time:" + periodicity,
					value : "value"
				}),
			options : {
				segmenton : "label",
				stacked : periodicity != "year",
				label : {
					datapointover : function(dp) {
						return dp.label + ": " + ReportGrid.format(dp.value) + " on " + ReportGrid.date.formatPeriodicity(dp["time:"+periodicity], periodicity);
					}
				},
				displayrules : true
			}
		});
	};

	API.salesFunnel = function(selector, start, end) {
		var qedirect = "tx := load(//fs2/visits) " +
"ftx := tx where tx.time >= ${start} & tx.time <= ${end}" +
"{ tail : \"direct access\", head : \"store visits\", count : count(ftx) - count(ftx.leadId) }";
		var qndirect = "tx := load(//fs2/visits) " +
"ftx := tx where tx.time >= ${start} & tx.time <= ${end}" +
"{ id : \"direct access\", count : count(ftx) - count(ftx.leadId) }";
		var qeothers = "tx := load(//fs2/visits) " +
"ftx := tx where tx.time >= ${start} & tx.time <= ${end}" +
"histogram('type) := " +
"    { " +
"        count : count(ftx where ftx.leadtype = 'type), " +
"        tail : 'type, " +
"        head : \"store visits\" " +
"    } " +
"histogram";
		var qnothers = "tx := load(//fs2/leads) " +
"ftx := tx where tx.time >= ${start} & tx.time <= ${end}" +
"histogram('type) := " +
"    { " +
"        count : count(ftx where ftx.leadtype = 'type), " +
"        id : 'type " +
"    } " +
"histogram";
		var qnvisits  = "tx := load(//fs2/visits) " +
"ftx := tx where tx.time >= ${start} & tx.time <= ${end}" +
"{ id : \"store visits\", count : count(ftx) }";
		var qesales  = "tx := load(//fs2/transactions) " +
"ftx := tx where tx.transaction = \"sale\" & tx.time >= ${start} & tx.time <= ${end}" +
"{ tail : \"store visits\", head : \"sales\", count : count(ftx) }";
		var qnsales  = "tx := load(//fs2/transactions) " +
"ftx := tx where tx.time >= ${start} & tx.time <= ${end} " +
"{ id : \"sales\", count : count(ftx) }";

		var range = { start : +start, end : +end };
		ReportGrid.sankey(selector, {
			axes : ["count"],
			load : ReportGrid.query
				.data(range).quirrel(qndirect).stackStore("qndirect").stackClear()
				.data(range).quirrel(qnsales).stackStore("qnsales").stackClear()
				.data(range).quirrel(qnvisits).stackStore("qnvisits").stackClear()
				.data(range).quirrel(qnothers).stackStore("qnothers").stackClear()
				.data(range).quirrel(qesales).stackStore("qesales").stackClear()
				.data(range).quirrel(qeothers).stackStore("qeothers").stackClear()
				.data(range).quirrel(qedirect).stackStore("qedirect").stackClear()
				.stackRetrieve("qndirect")
				.stackRetrieve("qnsales")
				.stackRetrieve("qnvisits")
				.stackRetrieve("qnothers")
				.stackRetrieve("qedirect")
				.stackRetrieve("qeothers")
				.stackRetrieve("qesales")
				.stackMerge()
				,
			options : {
			    displayexit : function(dp) {
			      return dp.id != "sales";
			    }
			}
		});

	};

	API.renewalFunnel = function(selector, start, end) {
		var qntotal = "tx := load(//fs2/transactions) " +
"ftx := tx where tx.time >= ${start} & tx.time <= ${end} " +
"{ id : \"total\", value : sum(ftx.quantity * ftx.usd) }";
		var qnupgrade = "tx := load(//fs2/transactions) " +
"ftx := tx where (tx.subscription = \"upgrade\" | tx.subscription = \"activated\") & tx.time >= ${start} & tx.time <= ${end} " +
"{ id : \"upgrade\", value : sum(ftx.quantity * ftx.usd) }";
		var qnrenewal = "tx := load(//fs2/transactions) " +
"ftx := tx where tx.transaction = \"rebill\" & tx.time >= ${start} & tx.time <= ${end} " +
"{ id : \"renewal\", value : sum(ftx.quantity * ftx.usd) }";
		var qeupgrade = "tx := load(//fs2/transactions) " +
"ftx := tx where (tx.subscription = \"upgrade\" | tx.subscription = \"activated\") & tx.time >= ${start} & tx.time <= ${end} " +
"{ tail : \"total\", head : \"upgrade\", value : sum(ftx.quantity * ftx.usd) }";
		var qerenewal = "tx := load(//fs2/transactions) " +
"ftx := tx where tx.transaction = \"rebill\" & tx.time >= ${start} & tx.time <= ${end} " +
"{ tail : \"total\", head : \"renewal\", value : sum(ftx.quantity * ftx.usd) }";

		var range = { start : +start, end : +end };
		ReportGrid.sankey(selector, {
			axes : ["value"],
			load : ReportGrid.query
				.data(range).quirrel(qntotal).stackStore("qntotal").stackClear()
				.data(range).quirrel(qnupgrade).stackStore("qnupgrade").stackClear()
				.data(range).quirrel(qnrenewal).stackStore("qnrenewal").stackClear()
				.data(range).quirrel(qeupgrade).stackStore("qeupgrade").stackClear()
				.data(range).quirrel(qerenewal).stackStore("qerenewal").stackClear()
				.stackRetrieve("qntotal")
				.stackRetrieve("qeupgrade")
				.stackRetrieve("qerenewal")
				.stackRetrieve("qnupgrade")
				.stackRetrieve("qnrenewal")
				.stackMerge()
				,
			options : {
			    displayexit : function(dp) {
			      return dp.id != "sales";
			    }
			}
		});

	};

	API.salesConversionsSeries = function(selector, periodicity, start, end) {
		var qsales = 'tx := load(//fs2/transactions) ' +
'ftx := tx where tx.transaction = "sale" & tx.time >= ${start} & tx.time <= ${end} ' +
'lx := load(//fs2/leads) ' +
'flx := lx where lx.time >= ${start} & lx.time <= ${end} ' +
'series(\'time) := ' +
'    ftx\' := ftx where std::time::date(std::time::millisToISO (ftx.time, "+00:00")) = \'time ' +
'    flx\' := flx where std::time::date(std::time::millisToISO (flx.time, "+00:00")) = \'time ' +
'    ftx\' ~ flx\' ' +
'        { ' +
'            time : \'time, ' +
'            value : 100 * count(ftx\') / count(flx\') ' +
'        } ' +
'series',
			qchurn = 'sx := load(//fs2/subscriptions) ' +
'fsx := sx where sx.time >= ${start} & sx.time <= ${end} ' +
'intersect(\'time) := ' +
'    tc\' := std::time::date(std::time::millisToISO (fsx.time, "+00:00")) ' +
'    tp\' := std::time::date(std::time::millisToISO (fsx.time-24*60*60000, "+00:00")) ' +
'    current\' := count(fsx where tc\' = \'time & (fsx.subscription = "deactivated" | fsx.subscription = "downgrade")) ' +
'    previous\' := count(fsx where tp\' = \'time & !(fsx.subscription = "deactivated" | fsx.subscription = "downgrade")) ' +
'    { ' +
'        time : \'time, ' +
'        value : previous\' / current\' ' +
'    } ' +
'intersect';

		ReportGrid.lineChart(selector, {
			axes : ["time:"+periodicity, "value"],
			load : ReportGrid.query
				.data({
					start : +start,
					end   : +end
				}).quirrel(qchurn)
				.setValue("label", "churn")
				.stackStore().stackClear()
				.data({
					start : +start,
					end   : +end
				}).quirrel(qsales)
				.setValue("label", "sales conversion rate")
				.stackRetrieve()
				.sortValue("time")
				.mapValue("time", function(d) {
					var d = (""+d).split("-").join("/");
					return ReportGrid.date.snap(new Date(d), periodicity);
				})
				.renameFields({
					label : "label",
					time  : "time:" + periodicity,
					value : "value"
				})
				,
			options : {
				segmenton : "label",
				effect : "dropshadow",
				displayrules : true,
				displayarea : true,
				symbol : ReportGrid.symbol("circle", 50)
			}
		});
	};

	API.countries = function(handler) {
		ReportGrid.query
			.quirrel("load(//fs2/transactions).country")
			.unique()
			.sort()
			.execute(handler);
	}

	API.products = function(handler) {
		ReportGrid.query
			.quirrel("load(//fs2/transactions).product")
			.unique()
			.sort()
			.execute(handler);
	}

	API.timeBoundaries = function(handler) {
		ReportGrid.query
			.quirrel("{ min : min(load(//fs2/transactions).time), max : max(load(//fs2/transactions).time) }")
			.execute(function(d) {
				handler(Date.fromTime(d[0].min), new Date(d[0].max));
			});
	}
})(window, "Q");
