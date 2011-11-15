(function(){
	var ENTRIES_PER_PAGE = 10,
		prodToken = "A3BC1539-E8A9-4207-BB41-3036EC2C6E6D",
		devToken  = "A3BC1539-E8A9-4207-BB41-3036EC2C6E6D",
		rg = ReportGrid;
	
	var tokenmanager = (function() {
		var map = {};
		return {
			getCurrent : function() { return rg.$.Config.tokenId },
			setCurrent : function(t) {
				rg.$.Config.tokenId = t;
				$('#curtoken').text(t);
				$(this).trigger('changed', t);
			},
			loadInfo : function(t, callback) {
				if(map[t])
				{
					callback(map[t]);
					return;
				}
				rg.token(t, function(r) {
					if(r) {
						map[t] = r;
					}
					callback(r);
				});
			}
		}
	})();

	var pathmanager = (function() {
		var _path = "/",
			_root = "/";

		var displayPath = function() {
			var el = $('#currentpath').html(""),
				root = $('<a href="#explorepanel">'+_root+'</a> '),
				sub = _path.substr(_root.length);
			el.append(root);
			root.bind("click", _root, function(e) {
				pathmanager.setCurrent(e.data);
			});
			if(sub.length > 0)
			{
				var cum = "";
				sub.split("/").map(function(part) {
					var segment = $('<a href="#explorepanel">'+part+'/</a> ');
					el.append(segment);
					segment.bind("click", cum + part, function(e) {
						pathmanager.setCurrent(e.data);
					});
					cum += part + "/";
				});
			}
		}

		var normPath = function(r) {
			r = (r = r.substr(0, 1) == '/' ? r.substr(1) : r).substr(-1) == '/' ? r.substr(0, r.length -1) : r;
			return "/" + r; 
		}

		var hide = function() { $('#explorepanel').css("display", "none") };
		var show = function() { $('#explorepanel').css("display", "block") };
	
		return {
			setPath : function(p) {
				if(null == p) {
					hide();
					return;
				}
				show();
				_path = _root = normPath(p);
				displayPath();
				$(this).trigger('changed', _path);
			},
			getCurrent : function() { return _path },
			setCurrent : function(p) {
				_path = normPath(p);
				displayPath();
				$(this).trigger('changed', _path);
			},
			navigate : function(sub) {
				var c = this.getCurrent(),
					p = (c == "/" ? "/" : c + "/") + sub;
				this.setCurrent(p);
			},
			loadPaths : function(p, callback) {
				rg.children(p, { type : 'path'}, callback)
			},
			loadEvents : function(p, callback) {
				rg.children(p, { type : 'property'}, callback)
			},
			loadProperties : function(p, event, callback) {
				rg.children(p, { property : event}, callback)
			}
		}
	})();

	var bindToken = function()
	{
		tokenmanager.setCurrent($(this).text());
		return false;
	}

	var fillTokenInfo = function(el, t, displayPath)
	{
		var el = $(el);
		el.html("loading ...");
		tokenmanager.loadInfo(t, function(info) {
			if(!info) {
				el.html("NO DATA LOADED");
				return;
			}

			var html = "";

			if(displayPath) {
				html += '<div class="path">path: <span class="value">'+info.path+'</span></div>';
			}

			var expiration = new Date(info.expires);
			html += '<div class="expiration">expires: ' + (isNaN(expiration.getTime()) ? 'never' : expiration.toDateString()) + '</div>';
			
			html += '<div class="limits">limits:<ul>';
			var limits = [];
			for(var key in info.limits) {
				limits.push(key+': <span class="value">'+info.limits[key]+'</span>');
			}
			html += '<li>' + limits.join(', </li><li>') + '</li>';
			html += '</ul></div>';

			html += '<div class="permissions">permissions:<ul>';
			var permissions = [];
			for(var key in info.permissions) {
				permissions.push(key+': <span class="value">'+info.permissions[key]+'</span>');
			}
			html += '<li>' + permissions.join(', </li><li> ') + '</li>';
			html += '</ul></div>';

			el.html(html);

		});
	}

	var displayTokenList = function(index)
	{
		function clear()
		{
			$("#tokenspagination").html("");
			$('#tokenslist').html("");

		}
		var list = $('#tokenslist');
		clear();
		rg.tokens(function(it) {
			function display(index)
			{
				list.html("");
				var max = Math.min((index + 1) * ENTRIES_PER_PAGE, it.length);
				for(var i = index * ENTRIES_PER_PAGE; i < max; i++)
				{
					var t = it[i],
						li = $('<li><div class="token">'+(i+1)+': <a href="#tokenpanel" class="token">'+t+'</a> <a href="#tokenpanel" class="delete">delete</a></div><div class="info"></div></li>');
					list.append(li);
					li.find('.token a.token').bind('click', bindToken);
					li.find('.token a.delete').bind('click', { token : t, page : index }, function(e){
						var t = e.data.token;
						if(!confirm("Are you sure you want to delete the token " + t + "?"))
							return;

						clear();
						rg.deleteToken(t, function() { displayTokenList(e.data.page); })
					});
					fillTokenInfo(li.find('.info'), t, true);
				}
			}

			var pages = Math.floor(it.length / ENTRIES_PER_PAGE) + 1,
				page_index = index < 0 ? pages - 1 : Math.max(0, Math.min(index, pages - 1));
			if(it.length > ENTRIES_PER_PAGE)
			{
				$("#tokenspagination").pagination(it.length, {
					callback : display,
					items_per_page : ENTRIES_PER_PAGE,
					current_page : page_index
				});
			}
			display(page_index);
		});
	}

	var pad2d = function(v) { return v < 10 ? "0" + v : v }
	var dateToString = function(d) {
		return d.getFullYear() + "-" + pad2d(1 + d.getMonth()) + "-" + pad2d(d.getDate());
	}

	var prepareTokenCreation = function(t)
	{
		$('#createtokenpanel').html("");
		tokenmanager.loadInfo(t, function(info)
		{
			if(!info || !info.permissions.share)
				return;

			try {
				$("#tokenform").validate({
					rules: {
						path		: { required: true, minlength : 1 },
						expires		: { required: false, date : true },
						order		: { required: true, digits : true, range : [1, info.limits.order] },
						limit		: { required: true, digits : true, range : [1, info.limits.limit] },
						depth		: { required: true, digits : true, range : [0, info.limits.depth] },
						tags		: { required: true, digits : true, range : [0, info.limits.tags] },
						lossless	: { required: true },
						rollup		: { required: true, digits : true, range : [0, info.limits.rollup] },
						read		: { required: true },
						write		: { required: true },
						share		: { required: true },
						explore		: { required: true }
					},
					messages: {
						path:		"Please enter a valid path",
						expires:	"Leave the field empty or put a valid date in the future",
						order: {
							required : "Please enter a valid Order value",
							min : "The minimum value is 1",
							max : "The maximum value is " + info.limits.order
						},
						limit: {
							required : "Please enter a valid Limit value",
							min : "The minimum value is 1",
							max : "The maximum value is " + info.limits.limit
						},
						depth: {
							required : "Please enter a valid Depth value",
							min : "The minimum value is 0",
							max : "The maximum value is " + info.limits.depth
						},
						tags: {
							required : "Please enter a valid Tags value",
							min : "The minimum value is 0",
							max : "The maximum value is " + info.limits.tags
						},
						lossless: "Please enter a valid value for Lossless",
						rollup: {
							required : "Please enter a valid Rollup value",
							min :	"The minimum value is 0",
							max : "The maximum value is " + info.limits.rollup
						},
						read:		"Please enter a valid value for Read",
						write:		"Please enter a valid value for Write",
						share:		"Please enter a valid value for Share",
						explore:	"Please enter a valid value for Explore"
					}
				});
			} catch(err) { }
			// set the form defaults

			// path
			$("#tokenform input[name=path]").val("/");
			// expires
			var d = new Date(info.expires);
			if(!isNaN(d.getTime()))
				$("#tokenform input[name=expires]").val(dateToString(d));
			// order
			$("#tokenform input[name=order]").val(info.limits.order).attr("max", info.limits.order);
			// limit
			$("#tokenform input[name=limit]").val(info.limits.limit).attr("max", info.limits.limit);
			// depth
			$("#tokenform input[name=depth]").val(info.limits.depth).attr("max", info.limits.depth);
			// tags
			$("#tokenform input[name=tags]").val(info.limits.tags).attr("max", info.limits.tags);
			// lossless
			$("#tokenform input[name=lossless]").attr("checked", info.limits.lossless).attr("disabled", !info.limits.lossless);
			// rollup
			$("#tokenform input[name=rollup]").val(info.limits.rollup).attr("max", info.limits.rollup);
			// read
			$("#tokenform input[name=read]").attr("checked", info.permissions.read).attr("disabled", !info.permissions.read);
			// write
			$("#tokenform input[name=write]").attr("checked", info.permissions.write).attr("disabled", !info.permissions.write);
			// share
			$("#tokenform input[name=share]").attr("checked", info.permissions.share).attr("disabled", !info.permissions.share);
			// explore
			$("#tokenform input[name=explore]").attr("checked", info.permissions.explore).attr("disabled", !info.permissions.explore);


			var el = $('#createtokenpanel').append('<a href="#tokenpanel">create sub-token</a>');
			el.click(function() {
				var maxWidth  = $(document).width();
				var maxHeight = $(document).height();

				$('#tokenoverlay').clearQueue().show().css({opacity: 0}).animate({opacity: 0.75})
				$('#tokenmenu').clearQueue().show();
			})
		});
	}

	var setupTokenCreation = function() {
		var hide = function() {
			$('#tokenoverlay').css({opacity: 0.75}).animate({opacity: 0}, function() { $(this).hide(); });
			$('#tokenmenu').hide();
		};
		$('#tokenoverlay').click(hide);

		$('#tokenpopupbutton').click(function(e) {
			e.preventDefault();
			
			var info = {
				path    : 	$('#tokenform input[name="path"]').val().trim(),
				expires : 	$('#tokenform input[name="expires"]').val().trim(),
				limits : {
					order    : 	parseInt($('#tokenform input[name="order"]').val()),
					limit    : 	parseInt($('#tokenform input[name="limit"]').val()),
					depth    : 	parseInt($('#tokenform input[name="depth"]').val()),
					tags     : 	parseInt($('#tokenform input[name="tags"]').val()),
					lossless : 	$('#tokenform input[name="lossless"]:checked').val() == "on",
					rollup   : 	parseInt($('#tokenform input[name="rollup"]').val())
				},
				permissions : {
					read    : 	$('#tokenform input[name="read"]:checked').val() == "on",
					write   : 	$('#tokenform input[name="write"]:checked').val() == "on",
					share   : 	$('#tokenform input[name="share"]:checked').val() == "on",
					explore : 	$('#tokenform input[name="explore"]:checked').val() == "on"
				}
			};

			var d = new Date(info.expires)
			if(info.expires == "" || isNaN(d.getTime()))
			{
				delete info.expires;
			} else {
				info.expires = d.getTime();
			}

			ReportGrid.newToken(info, function(s) {
				hide();
				displayTokenList(-1);
			}, function(_, e) {
				alert(e);
			});

			return false;
		});
	}

	var setupChildrenPathSelection = function() {
		$('#childpath').bind("change", function() {
			pathmanager.navigate($(this).val());
		})
		$('#parenttoken').bind("click", function(){
			tokenmanager.loadInfo(tokenmanager.getCurrent(), function(info) {
				if(!info || !info.parentTokenId)
					return;
				tokenmanager.setCurrent(info.parentTokenId);
			});
		})
	}

	var displayChildrenPath = function() {
		$('#childpath').css("display", "none");
		pathmanager.loadPaths(pathmanager.getCurrent(), function(children) {
			if(children.length == 0)
				return;
			var select = $('#childpath').css("display", "inline").html("<option></option>").css("display", "inline");
			for(var i = 0; i < children.length; i++)
				select.append('<option value="'+children[i]+'">'+children[i]+'</option>');
		});
	}

	var top = 10;

	var displayValues = function(event, property) {
		$('#valuepanel').css("display", "none");
		rg.propertyValues(pathmanager.getCurrent(), { property : event+"."+property, top : top + 1 }, function(values) {
			if(values.length == 0)
				return;
			$('#valuepanel').css("display", "block");
			var container = $('#values').html("");
			var rest = values.length > top;
			if(rest)
				values.pop();
			values
				.map(function(value, i) {
					if(i != 0)
						container.append(", ");
					var el = $('<span>'+value+'</span>');
					container.append(el);
					rg.propertyValueCount(pathmanager.getCurrent(), { property : event+"."+property, value : value }, function(count) {
						el.append(" ("+count+")");
					});
				})
			if(rest)
				container.append("<span> ...</span>");
		})
	};


	var displayProperties = function(event) {
		$('#propertypanel').css("display", "none");
		$('#valuepanel').css("display", "none");
		pathmanager.loadProperties(pathmanager.getCurrent(), event, function(properties) {
			if(properties.length == 0)
				return;
			$('#propertypanel').css("display", "block");
			var container = $('#properties').html("");
			properties
				.map(function(property) { return property.substr(0, 1) == '.' ? property.substr(1) : property})
				.map(function(property, i) {
					if(i != 0)
						container.append(", ");
					var el, c;
					if((c = property.substr(0,1)) != '~' && c != '#') {
						el = $('<a href="#explorepanel">'+property+'</a>');
						el.bind("click", function() { displayValues(event, property); })
					} else {
						el = $('<span>'+property+'</span>');
					}
					container.append(el);
					
				})
		})
	};

	var displayEvents = function() {
		$('#eventpanel').css("display", "none");
		$('#propertypanel').css("display", "none");
		$('#valuepanel').css("display", "none");
		pathmanager.loadEvents(pathmanager.getCurrent(), function(events) {
			if(events.length == 0)
				return;
			$('#eventpanel').css("display", "block");
			var container = $('#events').html("");
			events
				.map(function(event) { return event.substr(0, 1) == '.' ? event.substr(1) : event})
				.map(function(event, i) {
					if(i != 0)
						container.append(", ");
					var el = $('<a href="#explorepanel">'+event+'</a>');
					container.append(el);
					rg.propertyCount(pathmanager.getCurrent(), { property : event }, function(count) {
						el.append(" ("+count+")");
					});
					el.bind("click", function() { displayProperties(event); })
				})
		})
	}

	$(document).ready(function()
	{
		setupTokenCreation();
		setupChildrenPathSelection();
		// wire the list of tokens
		$(tokenmanager).bind('changed', function() { displayTokenList(0); });
		$(tokenmanager).bind('changed', function() { fillTokenInfo('#tokeninfo', tokenmanager.getCurrent()); })
		$(tokenmanager).bind('changed', function() { prepareTokenCreation(tokenmanager.getCurrent()); })
		$(tokenmanager).bind('changed', function() {
			$('#parenttoken').css("display", "none");
			tokenmanager.loadInfo(tokenmanager.getCurrent(), function(info) {
				if(!info || !info.parentTokenId)
					return;
				$('#parenttoken').css("display", "inline");
			})
		})

		$(tokenmanager).bind('changed', function() {
			pathmanager.setPath(null);
			tokenmanager.loadInfo(tokenmanager.getCurrent(), function(info) {
				if(!info || !info.parentTokenId || !info.permissions.explore)
					return;
				pathmanager.setPath(info.path);
			})
		});

		$(pathmanager).bind('changed', displayChildrenPath);
		$(pathmanager).bind('changed', displayEvents);

		// setup base ui
		tokenmanager.setCurrent($('#prodtoken').text(prodToken).click(bindToken).text());

		$('#devtoken').text(devToken).click(bindToken);
	})
})()
