var $_, $hxClasses = $hxClasses || {}, $estr = function() { return js.Boot.__string_rec(this,''); }
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	return proto;
}
var thx = thx || {}
if(!thx.collection) thx.collection = {}
thx.collection.Set = $hxClasses["thx.collection.Set"] = function() {
	this._v = [];
	this.length = 0;
}
thx.collection.Set.__name__ = ["thx","collection","Set"];
thx.collection.Set.ofArray = function(arr) {
	var set = new thx.collection.Set();
	var _g = 0;
	while(_g < arr.length) {
		var item = arr[_g];
		++_g;
		set.add(item);
	}
	return set;
}
thx.collection.Set.prototype = {
	length: null
	,_v: null
	,add: function(v) {
		this._v.remove(v);
		this._v.push(v);
		this.length = this._v.length;
	}
	,remove: function(v) {
		var t = this._v.remove(v);
		this.length = this._v.length;
		return t;
	}
	,exists: function(v) {
		var _g = 0, _g1 = this._v;
		while(_g < _g1.length) {
			var t = _g1[_g];
			++_g;
			if(t == v) return true;
		}
		return false;
	}
	,iterator: function() {
		return this._v.iterator();
	}
	,array: function() {
		return this._v.copy();
	}
	,toString: function() {
		return "{" + this._v.join(", ") + "}";
	}
	,__class__: thx.collection.Set
}
if(!thx.util) thx.util = {}
thx.util.Message = $hxClasses["thx.util.Message"] = function(message,params,param) {
	this.message = message;
	if(null == params) this.params = []; else this.params = params;
	if(null != param) this.params.push(param);
}
thx.util.Message.__name__ = ["thx","util","Message"];
thx.util.Message.prototype = {
	message: null
	,params: null
	,toString: function() {
		return Strings.format(this.message,this.params);
	}
	,translatef: function(translator) {
		return Strings.format(translator(this.message),this.params);
	}
	,translate: function(translator,domain) {
		if(null == domain) domain = translator.getDomain();
		var culture = thx.culture.Culture.get(domain);
		if(this.params.length == 1 && Std["is"](this.params[0],Int)) return Strings.format(translator.__(null,this.message,this.params[0],domain),this.params,null,culture); else return Strings.format(translator._(this.message,domain),this.params,null,culture);
	}
	,__class__: thx.util.Message
}
if(!thx.error) thx.error = {}
thx.error.Error = $hxClasses["thx.error.Error"] = function(message,params,param,pos) {
	thx.util.Message.call(this,message,params,param);
	this.pos = pos;
}
thx.error.Error.__name__ = ["thx","error","Error"];
thx.error.Error.__super__ = thx.util.Message;
thx.error.Error.prototype = $extend(thx.util.Message.prototype,{
	pos: null
	,inner: null
	,setInner: function(inner) {
		this.inner = inner;
		return this;
	}
	,toStringError: function(pattern) {
		var prefix = Strings.format(null == pattern?thx.error.Error.errorPositionPattern:pattern,[this.pos.className,this.pos.methodName,this.pos.lineNumber,this.pos.fileName,this.pos.customParams]);
		return prefix + this.toString();
	}
	,toString: function() {
		try {
			return Strings.format(this.message,this.params);
		} catch( e ) {
			var ps = this.pos.className + "." + this.pos.methodName + "(" + this.pos.lineNumber + ")";
			haxe.Log.trace("wrong parameters passed for pattern '" + this.message + "' at " + ps,{ fileName : "Error.hx", lineNumber : 42, className : "thx.error.Error", methodName : "toString"});
			return "";
		}
	}
	,__class__: thx.error.Error
});
thx.error.NullArgument = $hxClasses["thx.error.NullArgument"] = function(argumentName,message,posInfo) {
	if(null == message) message = "invalid null or empty argument '{0}' for method {1}.{2}()";
	thx.error.Error.call(this,message,[argumentName,posInfo.className,posInfo.methodName],posInfo,{ fileName : "NullArgument.hx", lineNumber : 16, className : "thx.error.NullArgument", methodName : "new"});
}
thx.error.NullArgument.__name__ = ["thx","error","NullArgument"];
thx.error.NullArgument.__super__ = thx.error.Error;
thx.error.NullArgument.prototype = $extend(thx.error.Error.prototype,{
	__class__: thx.error.NullArgument
});
var rg = rg || {}
if(!rg.svg) rg.svg = {}
if(!rg.svg.panel) rg.svg.panel = {}
rg.svg.panel.Layer = $hxClasses["rg.svg.panel.Layer"] = function(panel) {
	this.frame = (this.panel = panel).frame;
	var p = panel;
	p.addLayer(this);
	this.g = panel.g.append("svg:g");
	this.g.attr("class").string("layer");
	this._resize();
}
rg.svg.panel.Layer.__name__ = ["rg","svg","panel","Layer"];
rg.svg.panel.Layer.prototype = {
	panel: null
	,frame: null
	,g: null
	,width: null
	,height: null
	,customClass: null
	,addClass: function(name) {
		var me = this;
		name.split(" ").forEach(function(d,i) {
			me.g.classed().add(d);
		});
	}
	,removeClass: function(name) {
		this.g.classed().remove(name);
	}
	,toggleClass: function(name) {
		this.g.classed().toggle(name);
	}
	,_resize: function() {
		this.width = this.frame.width;
		this.height = this.frame.height;
		this.resize();
	}
	,resize: function() {
	}
	,destroy: function() {
		var p = this.panel;
		p.removeLayer(this);
		this.g.remove();
	}
	,setCustomClass: function(v) {
		if(null != this.customClass) this.g.classed().remove(this.customClass);
		this.g.classed().add(v);
		return this.customClass = v;
	}
	,__class__: rg.svg.panel.Layer
	,__properties__: {set_customClass:"setCustomClass"}
}
if(!rg.svg.layer) rg.svg.layer = {}
rg.svg.layer.TickmarksOrtho = $hxClasses["rg.svg.layer.TickmarksOrtho"] = function(panel,anchor) {
	rg.svg.panel.Layer.call(this,panel);
	this.anchor = anchor;
	this.displayMinor = true;
	this.displayMajor = true;
	this.displayLabel = true;
	this.displayAnchorLine = false;
	this.lengthMinor = 2;
	this.lengthMajor = 5;
	this.paddingMinor = 1;
	this.paddingMajor = 1;
	this.paddingLabel = 10;
	this.g.classed().add("tickmarks");
}
rg.svg.layer.TickmarksOrtho.__name__ = ["rg","svg","layer","TickmarksOrtho"];
rg.svg.layer.TickmarksOrtho.__super__ = rg.svg.panel.Layer;
rg.svg.layer.TickmarksOrtho.prototype = $extend(rg.svg.panel.Layer.prototype,{
	anchor: null
	,displayMinor: null
	,displayMajor: null
	,displayLabel: null
	,displayAnchorLine: null
	,lengthMinor: null
	,lengthMajor: null
	,paddingMinor: null
	,paddingMajor: null
	,paddingLabel: null
	,labelOrientation: null
	,labelAnchor: null
	,labelAngle: null
	,desiredSize: null
	,tickLabel: null
	,translate: null
	,x1: null
	,y1: null
	,x2: null
	,y2: null
	,x: null
	,y: null
	,axis: null
	,min: null
	,max: null
	,resize: function() {
		if(null == this.axis) return;
		if(this.displayAnchorLine) this.updateAnchorLine();
		this.redraw();
	}
	,update: function(axis,min,max) {
		this.axis = axis;
		this.min = min;
		this.max = max;
		this.redraw();
	}
	,updateAnchorLine: function() {
		var line = this.g.select("line.anchor-line");
		switch( (this.anchor)[1] ) {
		case 0:
			line.attr("x1")["float"](0).attr("y1")["float"](0).attr("x2")["float"](this.panel.frame.width).attr("y2")["float"](0);
			break;
		case 1:
			line.attr("x1")["float"](0).attr("y1")["float"](this.panel.frame.height).attr("x2")["float"](this.panel.frame.width).attr("y2")["float"](this.panel.frame.height);
			break;
		case 2:
			line.attr("x1")["float"](0).attr("y1")["float"](0).attr("x2")["float"](0).attr("y2")["float"](this.panel.frame.height);
			break;
		case 3:
			line.attr("x1")["float"](this.panel.frame.width).attr("y1")["float"](0).attr("x2")["float"](this.panel.frame.width).attr("y2")["float"](this.panel.frame.height);
			break;
		}
	}
	,maxTicks: function() {
		var size = (function($this) {
			var $r;
			switch( ($this.anchor)[1] ) {
			case 2:
			case 3:
				$r = $this.height;
				break;
			case 0:
			case 1:
				$r = $this.width;
				break;
			}
			return $r;
		}(this));
		return Math.round(size / 2.5);
	}
	,id: function(d,i) {
		return "" + d.getValue();
	}
	,redraw: function() {
		this.desiredSize = Math.max(this.paddingMinor + this.lengthMinor,this.paddingMajor + this.lengthMajor);
		var ticks = this.maxTicks(), data = this.axis.ticks(this.min,this.max,ticks);
		var tick = this.g.selectAll("g.tick").data(data,this.id.$bind(this));
		var enter = tick.enter().append("svg:g").attr("class").string("tick").attr("transform").stringf(this.translate);
		if(this.displayMinor) enter.filter(function(d,i) {
			return !d.major;
		}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf(this.tickClass.$bind(this));
		if(this.displayMajor) enter.filter(function(d,i) {
			return d.major;
		}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf(this.tickClass.$bind(this));
		if(this.displayLabel) enter.eachNode(this.createLabel.$bind(this));
		tick.update().attr("transform").stringf(this.translate);
		tick.exit().remove();
	}
	,createLabel: function(n,i) {
		var d = Reflect.field(n,"__data__");
		if(!d.getMajor()) return;
		var label = new rg.svg.widget.Label(thx.js.Dom.selectNode(n),false,false,false);
		label.setAnchor(this.labelAnchor);
		label.setOrientation(this.labelOrientation);
		var padding = this.paddingLabel;
		label.setText(null == this.tickLabel?d.getLabel():this.tickLabel(d.getValue()));
		switch( (this.anchor)[1] ) {
		case 0:
			label.place(0,padding,this.labelAngle);
			break;
		case 1:
			label.place(0,-padding,this.labelAngle);
			break;
		case 2:
			label.place(padding,0,this.labelAngle);
			break;
		case 3:
			label.place(-padding,0,this.labelAngle);
			break;
		}
		var s = (function($this) {
			var $r;
			switch( ($this.anchor)[1] ) {
			case 0:
			case 1:
				$r = label.getSize().height + padding;
				break;
			case 2:
			case 3:
				$r = label.getSize().width + padding;
				break;
			}
			return $r;
		}(this));
		if(s > this.desiredSize) this.desiredSize = s;
	}
	,initf: function() {
		switch( (this.anchor)[1] ) {
		case 0:
			this.translate = this.translateTop.$bind(this);
			this.x1 = this.x1Top.$bind(this);
			this.y1 = this.y1Top.$bind(this);
			this.x2 = this.x2Top.$bind(this);
			this.y2 = this.y2Top.$bind(this);
			break;
		case 1:
			this.translate = this.translateBottom.$bind(this);
			this.x1 = this.x1Bottom.$bind(this);
			this.y1 = this.y1Bottom.$bind(this);
			this.x2 = this.x2Bottom.$bind(this);
			this.y2 = this.y2Bottom.$bind(this);
			break;
		case 2:
			this.translate = this.translateLeft.$bind(this);
			this.x1 = this.x1Left.$bind(this);
			this.y1 = this.y1Left.$bind(this);
			this.x2 = this.x2Left.$bind(this);
			this.y2 = this.y2Left.$bind(this);
			break;
		case 3:
			this.translate = this.translateRight.$bind(this);
			this.x1 = this.x1Right.$bind(this);
			this.y1 = this.y1Right.$bind(this);
			this.x2 = this.x2Right.$bind(this);
			this.y2 = this.y2Right.$bind(this);
			break;
		}
		if(null == this.labelOrientation) {
			switch( (this.anchor)[1] ) {
			case 0:
			case 1:
				this.labelOrientation = rg.svg.widget.LabelOrientation.Orthogonal;
				break;
			case 2:
			case 3:
				this.labelOrientation = rg.svg.widget.LabelOrientation.Aligned;
				break;
			}
		} else if(null == this.labelAnchor) {
			var $e = (this.labelOrientation);
			switch( $e[1] ) {
			case 1:
				switch( (this.anchor)[1] ) {
				case 0:
				case 2:
					this.labelAnchor = rg.svg.widget.GridAnchor.Left;
					break;
				case 1:
				case 3:
					this.labelAnchor = rg.svg.widget.GridAnchor.Right;
					break;
				}
				break;
			case 2:
				switch( (this.anchor)[1] ) {
				case 0:
				case 2:
					this.labelAnchor = rg.svg.widget.GridAnchor.Top;
					break;
				case 1:
				case 3:
					this.labelAnchor = rg.svg.widget.GridAnchor.Bottom;
					break;
				}
				break;
			case 0:
				var a = $e[2];
				break;
			}
		}
		if(null == this.labelAnchor) {
			switch( (this.anchor)[1] ) {
			case 0:
				this.labelAnchor = rg.svg.widget.GridAnchor.Top;
				break;
			case 1:
				this.labelAnchor = rg.svg.widget.GridAnchor.Bottom;
				break;
			case 2:
				this.labelAnchor = rg.svg.widget.GridAnchor.Left;
				break;
			case 3:
				this.labelAnchor = rg.svg.widget.GridAnchor.Right;
				break;
			}
		}
		if(null == this.labelAngle) {
			switch( (this.anchor)[1] ) {
			case 0:
				this.labelAngle = 90;
				break;
			case 1:
				this.labelAngle = 90;
				break;
			case 2:
				this.labelAngle = 0;
				break;
			case 3:
				this.labelAngle = 0;
				break;
			}
		}
	}
	,init: function() {
		this.initf();
		if(this.displayAnchorLine) {
			this.g.append("svg:line").attr("class").string("anchor-line");
			this.updateAnchorLine();
		}
	}
	,t: function(x,y) {
		return "translate(" + x + "," + y + ")";
	}
	,translateTop: function(d,i) {
		return "translate(" + d.getDelta() * this.panel.frame.width + "," + 0 + ")";
	}
	,translateBottom: function(d,i) {
		return "translate(" + d.getDelta() * this.panel.frame.width + "," + this.panel.frame.height + ")";
	}
	,translateLeft: function(d,i) {
		return "translate(" + 0 + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
	}
	,translateRight: function(d,i) {
		return "translate(" + this.panel.frame.width + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
	}
	,x1Top: function(d,i) {
		return 0;
	}
	,x1Bottom: function(d,i) {
		return 0;
	}
	,x1Left: function(d,i) {
		return d.getMajor()?this.paddingMajor:this.paddingMinor;
	}
	,x1Right: function(d,i) {
		return -(d.getMajor()?this.paddingMajor:this.paddingMinor);
	}
	,y1Top: function(d,i) {
		return d.getMajor()?this.paddingMajor:this.paddingMinor;
	}
	,y1Bottom: function(d,i) {
		return -(d.getMajor()?this.paddingMajor:this.paddingMinor);
	}
	,y1Left: function(d,i) {
		return 0;
	}
	,y1Right: function(d,i) {
		return 0;
	}
	,x2Top: function(d,i) {
		return 0;
	}
	,x2Bottom: function(d,i) {
		return 0;
	}
	,x2Left: function(d,i) {
		return d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
	}
	,x2Right: function(d,i) {
		return -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
	}
	,y2Top: function(d,i) {
		return d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
	}
	,y2Bottom: function(d,i) {
		return -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
	}
	,y2Left: function(d,i) {
		return 0;
	}
	,y2Right: function(d,i) {
		return 0;
	}
	,tickClass: function(d,i) {
		return d.getMajor()?"major":null;
	}
	,__class__: rg.svg.layer.TickmarksOrtho
});
if(!rg.query) rg.query = {}
rg.query.BaseQuery = $hxClasses["rg.query.BaseQuery"] = function(delegate,first) {
	this._delegate = delegate;
	this._first = first;
	this._collected = [];
}
rg.query.BaseQuery.__name__ = ["rg","query","BaseQuery"];
rg.query.BaseQuery.delegateTransform = function(t) {
	return function(data,handler) {
		handler(t(data));
	};
}
rg.query.BaseQuery.prototype = {
	_first: null
	,_next: null
	,_delegate: null
	,_collected: null
	,data: function(handler) {
		return this.delegate(function(_,h) {
			handler(h);
		});
	}
	,cross: function(values) {
		return this.transform(rg.query.Transformers.cross(values));
	}
	,map: function(handler) {
		return this.transform(rg.query.Transformers.map(handler));
	}
	,audit: function(f) {
		return this.transform(function(d) {
			f(d);
			return d;
		});
	}
	,mapFields: function(o) {
		var pairs = Reflect.fields(o).map(function(d,_) {
			return { src : d, dst : Reflect.field(o,d)};
		});
		return this.map(function(src,_) {
			var out = { };
			var _g = 0;
			while(_g < pairs.length) {
				var pair = pairs[_g];
				++_g;
				out[pair.dst] = Reflect.field(src,pair.src);
			}
			return out;
		});
	}
	,transform: function(t) {
		return this.delegate(rg.query.BaseQuery.delegateTransform(t));
	}
	,delegate: function(d) {
		var query = this._createQuery(d,this._first);
		this._next = query;
		return query;
	}
	,each: function(f) {
		return this.delegate(function(data,handler) {
			var tot = data.length, pos = 0, results = [];
			var complete = function(i,r) {
				results[i] = r;
				if(++pos == tot) handler(Arrays.flatten(results));
			};
			var _g = 0;
			while(_g < tot) {
				var i = _g++;
				f(data[i],(function(f1,a1) {
					return function(a2) {
						return f1(a1,a2);
					};
				})(complete,i));
			}
		});
	}
	,filter: function(f) {
		return this.transform(rg.query.Transformers.filter(f));
	}
	,filterByFields: function(f) {
		return this.transform(rg.query.Transformers.filterByFields(f));
	}
	,sort: function(f) {
		return this.transform(rg.query.Transformers.sort(f));
	}
	,sortByField: function(field,reverse) {
		return this.sortByFields([field],reverse);
	}
	,sortByFields: function(fields,reverse) {
		reverse = null == reverse?false:reverse;
		return this.sort(function(a,b) {
			var r;
			var _g = 0;
			while(_g < fields.length) {
				var field = fields[_g];
				++_g;
				r = (reverse?-1:1) * Dynamics.compare(Reflect.field(a,field),Reflect.field(b,field));
				if(r != 0) return r;
			}
			return 0;
		});
	}
	,limit: function(offset,count) {
		if(null == count) {
			count = offset;
			offset = 0;
		}
		return this.transform(rg.query.Transformers.limit(offset,count));
	}
	,append: function(useAseSource) {
		var me = this;
		if(null == useAseSource) useAseSource = false;
		return this.transform(function(arr) {
			me._first._collected.push(arr);
			if(useAseSource) return arr; else return [{ }];
		});
	}
	,collect: function() {
		var me = this;
		return this.transform(function(arr) {
			var collected = me._first._collected.pop();
			return collected.concat(arr);
		});
	}
	,reverse: function() {
		return this.transform(rg.query.Transformers.reverse);
	}
	,accumulate: function(groupby,on,forproperty,atproperty) {
		var map = new Hash();
		var q = this.sortByFields([groupby,on]);
		return q.transform(function(data) {
			var v, f;
			data.forEach(function(dp,_) {
				v = map.get(f = "" + Reflect.field(dp,on));
				if(null == v) v = 0.0;
				dp[atproperty] = v;
				map.set(f,v + Reflect.field(dp,forproperty));
			});
			return data;
		});
	}
	,load: function(handler) {
		this._first.load(handler);
	}
	,_query: function(t) {
		return t;
	}
	,_createQuery: function(delegate,first) {
		return new rg.query.BaseQuery(delegate,first);
	}
	,toString: function() {
		return Type.getClassName(Type.getClass(this)).split(".").pop() + (" [next: " + (null != this._next) + ", delegate: " + (null != this._delegate) + "]");
	}
	,_this: function(q) {
		return q;
	}
	,__class__: rg.query.BaseQuery
}
rg.query.Query = $hxClasses["rg.query.Query"] = function() {
	rg.query.BaseQuery.call(this,null,this);
}
rg.query.Query.__name__ = ["rg","query","Query"];
rg.query.Query.create = function() {
	var start = new rg.query.Query(), query = start._createQuery(function(data,handler) {
		handler(data);
	},start);
	start._next = query;
	return query;
}
rg.query.Query.loadHandler = function(instance,handler) {
	var current = instance._next;
	var execute = (function($this) {
		var $r;
		var execute = null;
		execute = function(results) {
			if(null == current._next) {
				handler(results);
				return;
			}
			current = current._next;
			current._delegate(results,execute);
		};
		$r = execute;
		return $r;
	}(this));
	execute([{ }]);
}
rg.query.Query.__super__ = rg.query.BaseQuery;
rg.query.Query.prototype = $extend(rg.query.BaseQuery.prototype,{
	load: function(handler) {
		rg.query.Query.loadHandler(this,handler);
	}
	,__class__: rg.query.Query
});
var chx = chx || {}
if(!chx.crypt) chx.crypt = {}
chx.crypt.IBlockCipher = $hxClasses["chx.crypt.IBlockCipher"] = function() { }
chx.crypt.IBlockCipher.__name__ = ["chx","crypt","IBlockCipher"];
chx.crypt.IBlockCipher.prototype = {
	blockSize: null
	,encryptBlock: null
	,decryptBlock: null
	,__class__: chx.crypt.IBlockCipher
	,__properties__: {get_blockSize:"__getBlockSize"}
}
chx.crypt.RSAEncrypt = $hxClasses["chx.crypt.RSAEncrypt"] = function(nHex,eHex) {
	this.init();
	if(nHex != null) this.setPublic(nHex,eHex);
}
chx.crypt.RSAEncrypt.__name__ = ["chx","crypt","RSAEncrypt"];
chx.crypt.RSAEncrypt.__interfaces__ = [chx.crypt.IBlockCipher];
chx.crypt.RSAEncrypt.prototype = {
	n: null
	,e: null
	,blockSize: null
	,init: function() {
		this.n = null;
		this.e = 0;
	}
	,decryptBlock: function(enc) {
		throw "Not a private key";
		return null;
	}
	,encrypt: function(buf) {
		return this.doBufferEncrypt(buf,this.doPublic.$bind(this),new chx.crypt.PadPkcs1Type2(this.__getBlockSize()));
	}
	,encryptBlock: function(block) {
		var bsize = this.__getBlockSize();
		if(block.length != bsize) throw "bad block size";
		var biv = math.BigInteger.ofBytes(block,true);
		var biRes = this.doPublic(biv).toBytesUnsigned();
		var l = biRes.length;
		var i = 0;
		while(l > bsize) {
			if(biRes.b[i] != 0) throw new chx.lang.FatalException("encoded length was " + biRes.length);
			i++;
			l--;
		}
		if(i != 0) biRes = biRes.sub(i,l);
		if(biRes.length < bsize) {
			var bb = new BytesBuffer();
			l = bsize - biRes.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				bb.b.push(0);
			}
			bb.addBytes(biRes,0,biRes.length);
			biRes = bb.getBytes();
		}
		return biRes;
	}
	,encyptText: function(text,separator) {
		if(separator == null) separator = ":";
		return BytesUtil.toHex(this.encrypt(Bytes.ofString(text)),":");
	}
	,setPublic: function(nHex,eHex) {
		this.init();
		if(nHex == null || nHex.length == 0) throw new chx.lang.NullPointerException("nHex not set: " + nHex);
		if(eHex == null || eHex.length == 0) throw new chx.lang.NullPointerException("eHex not set: " + eHex);
		var s = BytesUtil.cleanHexFormat(nHex);
		this.n = math.BigInteger.ofString(s,16);
		if(this.n == null) throw 2;
		var ie = Std.parseInt("0x" + BytesUtil.cleanHexFormat(eHex));
		if(ie == null || ie == 0) throw 3;
		this.e = ie;
	}
	,verify: function(data) {
		return this.doBufferDecrypt(data,this.doPublic.$bind(this),new chx.crypt.PadPkcs1Type1(this.__getBlockSize()));
	}
	,doBufferEncrypt: function(src,f,pf) {
		var bs = this.__getBlockSize();
		var ts = bs - 11;
		var idx = 0;
		var msg = new BytesBuffer();
		while(idx < src.length) {
			if(idx + ts > src.length) ts = src.length - idx;
			var m = math.BigInteger.ofBytes(pf.pad(src.sub(idx,ts)),true);
			var c = f(m);
			var h = c.toBytesUnsigned();
			if((h.length & 1) != 0) msg.b.push(0);
			msg.add(h);
			idx += ts;
		}
		return msg.getBytes();
	}
	,doBufferDecrypt: function(src,f,pf) {
		var bs = this.__getBlockSize();
		var ts = bs - 11;
		var idx = 0;
		var msg = new BytesBuffer();
		while(idx < src.length) {
			if(idx + bs > src.length) bs = src.length - idx;
			var c = math.BigInteger.ofBytes(src.sub(idx,bs),true);
			var m = f(c);
			if(m == null) return null;
			var up = pf.unpad(m.toBytesUnsigned());
			if(up.length > ts) throw "block text length error";
			msg.add(up);
			idx += bs;
		}
		return msg.getBytes();
	}
	,doPublic: function(x) {
		return x.modPowInt(this.e,this.n);
	}
	,__getBlockSize: function() {
		if(this.n == null) return 0;
		return this.n.bitLength() + 7 >> 3;
	}
	,toString: function() {
		var sb = new StringBuf();
		sb.b[sb.b.length] = "Public:\n";
		sb.add("N:\t" + this.n.toHex() + "\n");
		sb.add("E:\t" + math.BigInteger.ofInt(this.e).toHex() + "\n");
		return sb.b.join("");
	}
	,__class__: chx.crypt.RSAEncrypt
	,__properties__: {get_blockSize:"__getBlockSize"}
}
chx.crypt.RSA = $hxClasses["chx.crypt.RSA"] = function(nHex,eHex,dHex) {
	chx.crypt.RSAEncrypt.call(this,null,null);
	this.init();
	if(nHex != null) this.setPrivate(nHex,eHex,dHex);
}
chx.crypt.RSA.__name__ = ["chx","crypt","RSA"];
chx.crypt.RSA.__interfaces__ = [chx.crypt.IBlockCipher];
chx.crypt.RSA.generate = function(B,E) {
	var rng = new math.prng.Random();
	var key = new chx.crypt.RSA();
	var qs = B >> 1;
	key.e = Std.parseInt(StringTools.startsWith(E,"0x")?E:"0x" + E);
	var ee = math.BigInteger.ofInt(key.e);
	while(true) {
		key.p = math.BigInteger.randomPrime(B - qs,ee,10,true,rng);
		key.q = math.BigInteger.randomPrime(qs,ee,10,true,rng);
		if(key.p.compare(key.q) <= 0) {
			var t = key.p;
			key.p = key.q;
			key.q = t;
		}
		var p1 = key.p.sub(math.BigInteger.getONE());
		var q1 = key.q.sub(math.BigInteger.getONE());
		var phi = p1.mul(q1);
		if(phi.gcd(ee).compare(math.BigInteger.getONE()) == 0) {
			key.n = key.p.mul(key.q);
			key.d = ee.modInverse(phi);
			key.dmp1 = key.d.mod(p1);
			key.dmq1 = key.d.mod(q1);
			key.coeff = key.q.modInverse(key.p);
			break;
		}
	}
	return key;
}
chx.crypt.RSA.__super__ = chx.crypt.RSAEncrypt;
chx.crypt.RSA.prototype = $extend(chx.crypt.RSAEncrypt.prototype,{
	d: null
	,p: null
	,q: null
	,dmp1: null
	,dmq1: null
	,coeff: null
	,init: function() {
		chx.crypt.RSAEncrypt.prototype.init.call(this);
		this.d = null;
		this.p = null;
		this.q = null;
		this.dmp1 = null;
		this.dmq1 = null;
		this.coeff = null;
	}
	,decrypt: function(buf) {
		return this.doBufferDecrypt(buf,this.doPrivate.$bind(this),new chx.crypt.PadPkcs1Type2(this.__getBlockSize()));
	}
	,decryptBlock: function(enc) {
		var c = math.BigInteger.ofBytes(enc,true);
		var m = this.doPrivate(c);
		if(m == null) throw "doPrivate error";
		var ba = m.toBytesUnsigned();
		if(ba.length < this.__getBlockSize()) {
			var b2 = Bytes.alloc(this.__getBlockSize());
			var _g1 = 0, _g = this.__getBlockSize() - ba.length + 1;
			while(_g1 < _g) {
				var i = _g1++;
				b2.b[i] = 0;
			}
			b2.blit(this.__getBlockSize() - ba.length,ba,0,ba.length);
			ba = b2;
		} else while(ba.length > this.__getBlockSize()) {
			var cnt = ba.length - this.__getBlockSize();
			var _g = 0;
			while(_g < cnt) {
				var i = _g++;
				if(ba.b[i] != 0) throw "decryptBlock length error";
			}
			ba = ba.sub(cnt,this.__getBlockSize());
		}
		return ba;
	}
	,decryptText: function(hexString) {
		return this.decrypt(BytesUtil.ofHex(BytesUtil.cleanHexFormat(hexString)));
	}
	,sign: function(content) {
		return this.doBufferEncrypt(content,this.doPrivate.$bind(this),new chx.crypt.PadPkcs1Type1(this.__getBlockSize()));
	}
	,setPrivate: function(N,E,D) {
		this.init();
		chx.crypt.RSAEncrypt.prototype.setPublic.call(this,N,E);
		if(D != null && D.length > 0) {
			var s = BytesUtil.cleanHexFormat(D);
			this.d = math.BigInteger.ofString(s,16);
		} else throw "Invalid RSA private key";
	}
	,setPrivateEx: function(N,E,D,P,Q,DP,DQ,C) {
		this.init();
		this.setPrivate(N,E,D);
		if(P != null && Q != null) {
			this.p = math.BigInteger.ofString(BytesUtil.cleanHexFormat(P),16);
			this.q = math.BigInteger.ofString(BytesUtil.cleanHexFormat(Q),16);
			this.dmp1 = null;
			this.dmq1 = null;
			this.coeff = null;
			if(DP != null) this.dmp1 = math.BigInteger.ofString(BytesUtil.cleanHexFormat(DP),16);
			if(DQ != null) this.dmq1 = math.BigInteger.ofString(BytesUtil.cleanHexFormat(DQ),16);
			if(C != null) this.coeff = math.BigInteger.ofString(BytesUtil.cleanHexFormat(C),16);
			this.recalcCRT();
		} else throw "Invalid RSA private key ex";
	}
	,recalcCRT: function() {
		if(this.p != null && this.q != null) {
			if(this.dmp1 == null) this.dmp1 = this.d.mod(this.p.sub(math.BigInteger.getONE()));
			if(this.dmq1 == null) this.dmq1 = this.d.mod(this.q.sub(math.BigInteger.getONE()));
			if(this.coeff == null) this.coeff = this.q.modInverse(this.p);
		}
	}
	,doPrivate: function(x) {
		if(this.p == null || this.q == null) return x.modPow(this.d,this.n);
		var xp = x.mod(this.p).modPow(this.dmp1,this.p);
		var xq = x.mod(this.q).modPow(this.dmq1,this.q);
		while(xp.compare(xq) < 0) xp = xp.add(this.p);
		return xp.sub(xq).mul(this.coeff).mod(this.p).mul(this.q).add(xq);
	}
	,toString: function() {
		var sb = new StringBuf();
		sb.add(chx.crypt.RSAEncrypt.prototype.toString.call(this));
		sb.b[sb.b.length] = "Private:\n";
		sb.add("D:\t" + this.d.toHex() + "\n");
		if(this.p != null) sb.add("P:\t" + this.p.toHex() + "\n");
		if(this.q != null) sb.add("Q:\t" + this.q.toHex() + "\n");
		if(this.dmp1 != null) sb.add("DMP1:\t" + this.dmp1.toHex() + "\n");
		if(this.dmq1 != null) sb.add("DMQ1:\t" + this.dmq1.toHex() + "\n");
		if(this.coeff != null) sb.add("COEFF:\t" + this.coeff.toHex() + "\n");
		return sb.b.join("");
	}
	,__class__: chx.crypt.RSA
});
if(!thx.js) thx.js = {}
thx.js.Access = $hxClasses["thx.js.Access"] = function(selection) {
	this.selection = selection;
}
thx.js.Access.__name__ = ["thx","js","Access"];
thx.js.Access.getData = function(d) {
	return Reflect.field(d,"__data__");
}
thx.js.Access.setData = function(d,v) {
	d["__data__"] = v;
}
thx.js.Access.emptyHtmlDom = function(v) {
	return { __data__ : v};
}
thx.js.Access.eventName = function(event) {
	return "__on" + event;
}
thx.js.Access.getEvent = function(d,event) {
	return Reflect.field(d,"__on" + event);
}
thx.js.Access.hasEvent = function(d,event) {
	return null != Reflect.field(d,"__on" + event);
}
thx.js.Access.addEvent = function(d,event,listener) {
	d["__on" + event] = listener;
}
thx.js.Access.removeEvent = function(d,event) {
	Reflect.deleteField(d,"__on" + event);
}
thx.js.Access.setTransition = function(d,id) {
	if(Reflect.hasField(d,"__transition__")) Reflect.field(d,"__transition__").owner = id; else d["__transition__"] = { owner : id};
}
thx.js.Access.getTransition = function(d) {
	return Reflect.field(d,"__transition__");
}
thx.js.Access.resetTransition = function(d) {
	Reflect.deleteField(d,"__transition__");
}
thx.js.Access.prototype = {
	selection: null
	,_that: function() {
		return this.selection;
	}
	,__class__: thx.js.Access
}
thx.js.AccessClassed = $hxClasses["thx.js.AccessClassed"] = function(selection) {
	thx.js.Access.call(this,selection);
}
thx.js.AccessClassed.__name__ = ["thx","js","AccessClassed"];
thx.js.AccessClassed.getRe = function(name) {
	return new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
}
thx.js.AccessClassed.__super__ = thx.js.Access;
thx.js.AccessClassed.prototype = $extend(thx.js.Access.prototype,{
	toggle: function(name) {
		if(this.exists(name)) this.remove(name); else this.add(name);
		return this.selection;
	}
	,exists: function(name) {
		return this.selection.firstNode(function(node) {
			var list = node.classList;
			if(null != list) return list.contains(name);
			var cls = node.className;
			var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
			var bv = cls.baseVal;
			return re.match(null != bv?bv:cls);
		});
	}
	,remove: function(name) {
		this.selection.eachNode((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})(this._remove.$bind(this),name));
		return this.selection;
	}
	,_remove: function(name,node,i) {
		var list = node.classList;
		if(null != list) {
			list.remove(name);
			return;
		}
		var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
		var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
		clsv = Strings.collapse(re.replace(clsv," "));
		if(clsb) cls.baseVal = clsv; else node.className = clsv;
	}
	,add: function(name) {
		this.selection.eachNode((function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})(this._add.$bind(this),name));
		return this.selection;
	}
	,_add: function(name,node,i) {
		var list = node.classList;
		if(null != list) {
			list.add(name);
			return;
		}
		var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
		var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
		if(!re.match(clsv)) {
			clsv = Strings.collapse(clsv + " " + name);
			if(clsb) cls.baseVal = clsv; else node.className = clsv;
		}
	}
	,get: function() {
		var node = this.selection.node(), list = node.classList;
		if(null != list) return Ints.range(list.length).map(function(_,i) {
			return list.item(i);
		}).join(" ");
		var cls = node.className, clsb = null != cls.baseVal;
		if(clsb) return cls.baseVal; else return cls;
	}
	,__class__: thx.js.AccessClassed
});
thx.js.AccessDataClassed = $hxClasses["thx.js.AccessDataClassed"] = function(selection) {
	thx.js.AccessClassed.call(this,selection);
}
thx.js.AccessDataClassed.__name__ = ["thx","js","AccessDataClassed"];
thx.js.AccessDataClassed.__super__ = thx.js.AccessClassed;
thx.js.AccessDataClassed.prototype = $extend(thx.js.AccessClassed.prototype,{
	removef: function(v) {
		var f = this._remove.$bind(this);
		this.selection.eachNode(function(node,i) {
			var c = v(Reflect.field(node,"__data__"),i);
			if(null != c) f(c,node,i);
		});
		return this.selection;
	}
	,addf: function(v) {
		var f = this._add.$bind(this);
		this.selection.eachNode(function(node,i) {
			var c = v(Reflect.field(node,"__data__"),i);
			if(null != c) f(c,node,i);
		});
		return this.selection;
	}
	,__class__: thx.js.AccessDataClassed
});
if(!rg.graph) rg.graph = {}
rg.graph.Graphs = $hxClasses["rg.graph.Graphs"] = function() { }
rg.graph.Graphs.__name__ = ["rg","graph","Graphs"];
rg.graph.Graphs.crossings = function(a,b) {
	var map = new Hash(), c = 0;
	var _g1 = 0, _g = b.length;
	while(_g1 < _g) {
		var i = _g1++;
		map.set(b[i].vertex,i);
	}
	if(a.length <= 1 || b.length <= 1) return c;
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		var n1 = a[i];
		var _g2 = 0, _g3 = n1.edgesp;
		while(_g2 < _g3.length) {
			var dst1 = _g3[_g2];
			++_g2;
			var p1 = map.get(dst1);
			if(null == p1) continue;
			var _g5 = i + 1, _g4 = a.length;
			while(_g5 < _g4) {
				var j = _g5++;
				var n2 = a[j];
				var _g6 = 0, _g7 = n2.edgesp;
				while(_g6 < _g7.length) {
					var dst2 = _g7[_g6];
					++_g6;
					var p2 = map.get(dst2);
					if(p2 < p1) c++;
				}
			}
		}
	}
	return c;
}
rg.graph.Graphs.layoutCrossings = function(a) {
	var tot = 0;
	var _g1 = 0, _g = a.length - 1;
	while(_g1 < _g) {
		var i = _g1++;
		tot += rg.graph.Graphs.crossings(a[i],a[i + 1]);
	}
	return tot;
}
rg.graph.Graphs.toMap = function(layout) {
	var map = new Hash();
	var _g1 = 0, _g = layout.length;
	while(_g1 < _g) {
		var i = _g1++;
		var _g3 = 0, _g2 = layout[i].length;
		while(_g3 < _g2) {
			var j = _g3++;
			map.set(layout[i][j].vertex,layout[i][j]);
		}
	}
	return map;
}
rg.graph.Graphs.toVertices = function(layout) {
	var result = [];
	var _g1 = 0, _g = layout.length;
	while(_g1 < _g) {
		var i = _g1++;
		var _g3 = 0, _g2 = layout[i].length;
		while(_g3 < _g2) {
			var j = _g3++;
			result.push(layout[i][j].vertex);
		}
	}
	return result;
}
rg.graph.Graphs.toEdges = function(layout) {
	var result = [];
	var _g1 = 0, _g = layout.length;
	while(_g1 < _g) {
		var i = _g1++;
		var _g3 = 0, _g2 = layout[i].length;
		while(_g3 < _g2) {
			var j = _g3++;
			var v = layout[i][j].vertex;
			var _g4 = 0, _g5 = layout[i][j].edgesp;
			while(_g4 < _g5.length) {
				var c = _g5[_g4];
				++_g4;
				result.push({ a : v, b : c});
			}
		}
	}
	return result;
}
rg.graph.Graphs.findMaxPositiveOverNegative = function(graph) {
	var n = null, l = 0;
	var $it0 = graph.iterator();
	while( $it0.hasNext() ) {
		var node = $it0.next();
		var diff = node.edgesp.length - node.edgesn.length;
		if(null == n || l < diff) {
			n = node;
			l = diff;
		}
	}
	return n;
}
rg.graph.Graphs.isSink = function(node) {
	return node.edgesp.length == 0 && node.edgesn.length > 0;
}
rg.graph.Graphs.isSource = function(node) {
	return node.edgesn.length == 0 && node.edgesp.length == 0;
}
rg.graph.Graphs.findSink = function(graph) {
	var $it0 = graph.iterator();
	while( $it0.hasNext() ) {
		var node = $it0.next();
		if(node.edgesp.length == 0 && node.edgesn.length > 0) return node;
	}
	return null;
}
rg.graph.Graphs.findSource = function(graph) {
	var $it0 = graph.iterator();
	while( $it0.hasNext() ) {
		var node = $it0.next();
		if(node.edgesn.length == 0 && node.edgesp.length > 0) return node;
	}
	return null;
}
rg.graph.Graphs.findAllIsolated = function(graph) {
	var isolated = [];
	var $it0 = graph.iterator();
	while( $it0.hasNext() ) {
		var node = $it0.next();
		if(node.edgesn.length == 0 && node.edgesp.length == 0) isolated.push(node);
	}
	return isolated;
}
rg.graph.Graphs.addConnection = function(graph,a,b) {
	var path = rg.graph.Graphs.findPath(graph,b,a);
	if(null != path && path.every(function(v,i) {
		return i == 0 || i == path.length - 1 || rg.graph.Graphs.isDummy(v);
	})) {
		path.reverse();
		rg.graph.Graphs.addConnections(graph,path);
	} else rg.graph.Graphs.addConnections(graph,[a,b]);
}
rg.graph.Graphs.addConnections = function(graph,arr) {
	var _g1 = 0, _g = arr.length - 1;
	while(_g1 < _g) {
		var i = _g1++;
		var a = arr[i], b = arr[i + 1];
		graph.get(a).edgesp.push(b);
		graph.get(b).edgesp.push(a);
	}
}
rg.graph.Graphs.reverseConnection = function(graph,a,b) {
	var path = rg.graph.Graphs.findPath(graph,a,b);
	haxe.Log.trace("REVERSING " + a + ", " + b,{ fileName : "Graphs.hx", lineNumber : 168, className : "rg.graph.Graphs", methodName : "reverseConnection"});
	haxe.Log.trace(path,{ fileName : "Graphs.hx", lineNumber : 169, className : "rg.graph.Graphs", methodName : "reverseConnection"});
	if(null == path) return false;
	var _g1 = 0, _g = path.length - 1;
	while(_g1 < _g) {
		var i = _g1++;
		var a1 = path[i], b1 = path[i + 1], na = graph.get(a1), nb = graph.get(b1);
		na.edgesp.remove(b1);
		na.edgesn.push(b1);
		nb.edgesn.remove(a1);
		nb.edgesp.push(a1);
	}
	return true;
}
rg.graph.Graphs.findPath = function(graph,a,b) {
	var traveled = new thx.collection.Set(), paths = [], t, r;
	var traverse = (function($this) {
		var $r;
		var traverse = null;
		traverse = function(path,n) {
			var totraverse = [];
			var _g = 0, _g1 = n.edgesn;
			while(_g < _g1.length) {
				var parent = _g1[_g];
				++_g;
				if(parent == a) return path.concat([a]); else if(rg.graph.Graphs.isSource(t = graph.get(parent))) continue; else totraverse.push((function(f,a1,a2) {
					return function() {
						return f(a1,a2);
					};
				})(traverse,path.concat([parent]),t));
			}
			var _g = 0;
			while(_g < totraverse.length) {
				var t1 = totraverse[_g];
				++_g;
				if(null != (r = t1())) return r;
			}
			return null;
		};
		$r = traverse;
		return $r;
	}(this));
	var p = traverse([b],graph.get(b));
	if(null == p) return null;
	p.reverse();
	return p;
}
rg.graph.Graphs.isDummy = function(v) {
	return v.substr(0,1) == "#";
}
rg.graph.Graphs.createDummy = function(a,b,lvl) {
	return "#" + ++rg.graph.Graphs.id;
}
rg.graph.Graphs.removeNode = function(graph,node) {
	graph.remove(node.vertex);
}
rg.graph.Graphs.addNode = function(graph,node) {
	graph.set(node.vertex,node);
}
rg.graph.Graphs.clone = function(graph) {
	var o = new Hash();
	var $it0 = graph.iterator();
	while( $it0.hasNext() ) {
		var node = $it0.next();
		rg.graph.Graphs.addNode(o,{ vertex : node.vertex, edgesn : node.edgesn.copy(), edgesp : node.edgesp.copy()});
	}
	return o;
}
rg.graph.Graphs.empty = function(graph) {
	return Hashes.count(graph) == 0;
}
rg.graph.Graphs.count = function(graph) {
	return Hashes.count(graph);
}
rg.graph.Graphs.prototype = {
	__class__: rg.graph.Graphs
}
if(!rg.app) rg.app = {}
if(!rg.app.charts) rg.app.charts = {}
rg.app.charts.JSBridge = $hxClasses["rg.app.charts.JSBridge"] = function() { }
rg.app.charts.JSBridge.__name__ = ["rg","app","charts","JSBridge"];
rg.app.charts.JSBridge.log = function(msg) {
	var c = (window.console && window.console.warn) || alert;
	c(msg);
}
rg.app.charts.JSBridge.getInternetExplorerVersion = function() {
	var rv = -1.0;
	if(js.Lib.window.navigator.appName == "Microsoft Internet Explorer") {
		var ua = js.Lib.window.navigator.userAgent;
		var re = new EReg("MSIE ([0-9]{1,}[\\.0-9]{0,})","");
		if(re.match(ua) != null) rv = Std.parseFloat(re.matched(1));
	}
	return rv;
}
rg.app.charts.JSBridge.main = function() {
	var msiev = rg.app.charts.JSBridge.getInternetExplorerVersion();
	if(msiev >= 0 && msiev < 9) return;
	var r = (typeof ReportGrid == 'undefined') ? (ReportGrid = {}) : ReportGrid;
	var app = new rg.app.charts.App();
	r.viz = function(el,options,type) {
		var copt = rg.app.charts.JSBridge.chartopt(options,type);
		copt.options.a = false;
		rg.app.charts.MVPOptions.complete(copt,function(opt) {
			app.visualization(rg.app.charts.JSBridge.select(el),opt);
		});
	};
	r.barChart = function(el,options) {
		return r.viz(el,options,"barchart");
	};
	r.funnelChart = function(el,options) {
		return r.viz(el,options,"funnelchart");
	};
	r.geo = function(el,options) {
		return r.viz(el,options,"geo");
	};
	r.heatGrid = function(el,options) {
		return r.viz(el,options,"heatgrid");
	};
	r.leaderBoard = function(el,options) {
		return r.viz(el,options,"leaderboard");
	};
	r.lineChart = function(el,options) {
		return r.viz(el,options,"linechart");
	};
	r.pieChart = function(el,options) {
		return r.viz(el,options,"piechart");
	};
	r.pivotTable = function(el,options) {
		return r.viz(el,options,"pivottable");
	};
	r.sankey = function(el,options) {
		return r.viz(el,options,"sankey");
	};
	r.scatterGraph = function(el,options) {
		return r.viz(el,options,"scattergraph");
	};
	r.streamGraph = function(el,options) {
		return r.viz(el,options,"streamgraph");
	};
	r.parseQueryParameters = rg.util.Urls.parseQueryParameters;
	r.findScript = rg.util.Js.findScript;
	r.format = Dynamics.format;
	r.compare = Dynamics.compare;
	r.dump = Dynamics.string;
	var scache = rg.svg.util.SymbolCache.cache;
	r.symbol = function(type) {
		return scache.get(type);
	};
	r.date = { range : function(a,b,p) {
		if(Std["is"](a,String)) a = thx.date.DateParser.parse(a);
		if(null == a) a = rg.util.Periodicity.defaultRange(p)[0];
		if(Std["is"](a,Date)) a = a.getTime();
		if(Std["is"](b,String)) b = thx.date.DateParser.parse(b);
		if(null == b) b = rg.util.Periodicity.defaultRange(p)[1];
		if(Std["is"](b,Date)) b = b.getTime();
		return rg.util.Periodicity.range(a,b,p);
	}, parse : thx.date.DateParser.parse, snap : Dates.snap};
	r.humanize = function(v) {
		if(Std["is"](v,String) && v.indexOf("time:") >= 0) return v.substr(v.indexOf("time:") + "time:".length);
		return rg.util.RGStrings.humanize(v);
	};
	var rand = new thx.math.Random(666);
	r.math = { setRandomSeed : function(s) {
		rand = new thx.math.Random(s);
	}, random : function() {
		return ((rand.seed = rand.seed * 16807 % 2147483647) & 1073741823) / 1073741823.0;
	}};
	r.query = null != r.query?r.query:rg.query.Query.create();
	r.info = null != r.info?r.info:{ };
	r.info.charts = { version : "1.3.0.6623"};
}
rg.app.charts.JSBridge.select = function(el) {
	var s = Std["is"](el,String)?thx.js.Dom.select(el):thx.js.Dom.selectNode(el);
	if(s.empty()) throw new thx.error.Error("invalid container '{0}'",el,null,{ fileName : "JSBridge.hx", lineNumber : 142, className : "rg.app.charts.JSBridge", methodName : "select"});
	return s;
}
rg.app.charts.JSBridge.opt = function(ob) {
	return null == ob?{ }:Objects.clone(ob);
}
rg.app.charts.JSBridge.chartopt = function(ob,viz) {
	ob = null == ob?{ }:Objects.clone(ob);
	ob.options = rg.app.charts.JSBridge.opt(ob.options);
	ob.options.visualization = null != viz?viz:ob.options.visualization;
	return ob;
}
rg.app.charts.JSBridge.prototype = {
	__class__: rg.app.charts.JSBridge
}
var Hash = $hxClasses["Hash"] = function() {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype = {
	h: null
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		try {
			key = "$" + key;
			return this.hasOwnProperty.call(this.h,key);
		} catch( e ) {
			for(var i in this.h) if( i == key ) return true;
			return false;
		}
	}
	,remove: function(key) {
		if(!this.exists(key)) return false;
		delete(this.h["$" + key]);
		return true;
	}
	,keys: function() {
		var a = new Array();
		for(var i in this.h) a.push(i.substr(1));
		return a.iterator();
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b[s.b.length] = "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b[s.b.length] = i == null?"null":i;
			s.b[s.b.length] = " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b[s.b.length] = ", ";
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,__class__: Hash
}
if(!thx.color) thx.color = {}
thx.color.Rgb = $hxClasses["thx.color.Rgb"] = function(r,g,b) {
	this.red = Ints.clamp(r,0,255);
	this.green = Ints.clamp(g,0,255);
	this.blue = Ints.clamp(b,0,255);
}
thx.color.Rgb.__name__ = ["thx","color","Rgb"];
thx.color.Rgb.fromFloats = function(r,g,b) {
	return new thx.color.Rgb(Ints.interpolate(r,0,255,null),Ints.interpolate(g,0,255,null),Ints.interpolate(b,0,255,null));
}
thx.color.Rgb.fromInt = function(v) {
	return new thx.color.Rgb(v >> 16 & 255,v >> 8 & 255,v & 255);
}
thx.color.Rgb.equals = function(a,b) {
	return a.red == b.red && a.green == b.green && a.blue == b.blue;
}
thx.color.Rgb.darker = function(color,t,equation) {
	return new thx.color.Rgb(Ints.interpolate(t,color.red,0,equation),Ints.interpolate(t,color.green,0,equation),Ints.interpolate(t,color.blue,0,equation));
}
thx.color.Rgb.lighter = function(color,t,equation) {
	return new thx.color.Rgb(Ints.interpolate(t,color.red,255,equation),Ints.interpolate(t,color.green,255,equation),Ints.interpolate(t,color.blue,255,equation));
}
thx.color.Rgb.interpolate = function(a,b,t,equation) {
	return new thx.color.Rgb(Ints.interpolate(t,a.red,b.red,equation),Ints.interpolate(t,a.green,b.green,equation),Ints.interpolate(t,a.blue,b.blue,equation));
}
thx.color.Rgb.interpolatef = function(a,b,equation) {
	var r = Ints.interpolatef(a.red,b.red,equation), g = Ints.interpolatef(a.green,b.green,equation), b1 = Ints.interpolatef(a.blue,b.blue,equation);
	return function(t) {
		return new thx.color.Rgb(r(t),g(t),b1(t));
	};
}
thx.color.Rgb.contrast = function(c) {
	var nc = thx.color.Hsl.toHsl(c);
	if(nc.lightness < .5) return new thx.color.Hsl(nc.hue,nc.saturation,nc.lightness + 0.5); else return new thx.color.Hsl(nc.hue,nc.saturation,nc.lightness - 0.5);
}
thx.color.Rgb.contrastBW = function(c) {
	var g = thx.color.Grey.toGrey(c);
	var nc = thx.color.Hsl.toHsl(c);
	if(g.grey < .5) return new thx.color.Hsl(nc.hue,nc.saturation,1.0); else return new thx.color.Hsl(nc.hue,nc.saturation,0);
}
thx.color.Rgb.interpolateBrightness = function(t,equation) {
	return (thx.color.Rgb.interpolateBrightnessf(equation))(t);
}
thx.color.Rgb.interpolateBrightnessf = function(equation) {
	var i = Ints.interpolatef(0,255,equation);
	return function(t) {
		var g = i(t);
		return new thx.color.Rgb(g,g,g);
	};
}
thx.color.Rgb.interpolateHeat = function(t,middle,equation) {
	return (thx.color.Rgb.interpolateHeatf(middle,equation))(t);
}
thx.color.Rgb.interpolateHeatf = function(middle,equation) {
	return thx.color.Rgb.interpolateStepsf([new thx.color.Rgb(0,0,0),null != middle?middle:new thx.color.Rgb(255,127,0),new thx.color.Rgb(255,255,255)],equation);
}
thx.color.Rgb.interpolateRainbow = function(t,equation) {
	return (thx.color.Rgb.interpolateRainbowf(equation))(t);
}
thx.color.Rgb.interpolateRainbowf = function(equation) {
	return thx.color.Rgb.interpolateStepsf([new thx.color.Rgb(0,0,255),new thx.color.Rgb(0,255,255),new thx.color.Rgb(0,255,0),new thx.color.Rgb(255,255,0),new thx.color.Rgb(255,0,0)],equation);
}
thx.color.Rgb.interpolateStepsf = function(steps,equation) {
	if(steps.length <= 0) return (function($this) {
		var $r;
		throw new thx.error.Error("invalid number of steps",null,null,{ fileName : "Rgb.hx", lineNumber : 164, className : "thx.color.Rgb", methodName : "interpolateStepsf"});
		return $r;
	}(this)); else if(steps.length == 1) return function(t) {
		return steps[0];
	}; else if(steps.length == 2) return thx.color.Rgb.interpolatef(steps[0],steps[1],equation);
	var len = steps.length - 1, step = 1 / len, f = [];
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		f[i] = thx.color.Rgb.interpolatef(steps[i],steps[i + 1]);
	}
	return function(t) {
		if(t < 0) t = 0; else if(t > 1) t = 1;
		var pos = t == 1?len - 1:Math.floor(t / step);
		return f[pos](len * (t - pos * step));
	};
}
thx.color.Rgb.prototype = {
	blue: null
	,green: null
	,red: null
	,'int': function() {
		return (this.red & 255) << 16 | (this.green & 255) << 8 | this.blue & 255;
	}
	,hex: function(prefix) {
		if(prefix == null) prefix = "";
		return prefix + StringTools.hex(this.red,2) + StringTools.hex(this.green,2) + StringTools.hex(this.blue,2);
	}
	,toCss: function() {
		return this.hex("#");
	}
	,toRgbString: function() {
		return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
	}
	,toString: function() {
		return this.toRgbString();
	}
	,__class__: thx.color.Rgb
}
var EReg = $hxClasses["EReg"] = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype = {
	r: null
	,match: function(s) {
		this.r.m = this.r.exec(s);
		this.r.s = s;
		this.r.l = RegExp.leftContext;
		this.r.r = RegExp.rightContext;
		return this.r.m != null;
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,matchedLeft: function() {
		if(this.r.m == null) throw "No string matched";
		if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
		return this.r.l;
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		if(this.r.r == null) {
			var sz = this.r.m.index + this.r.m[0].length;
			return this.r.s.substr(sz,this.r.s.length - sz);
		}
		return this.r.r;
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,customReplace: function(s,f) {
		var buf = new StringBuf();
		while(true) {
			if(!this.match(s)) break;
			buf.add(this.matchedLeft());
			buf.add(f(this));
			s = this.matchedRight();
		}
		buf.b[buf.b.length] = s == null?"null":s;
		return buf.b.join("");
	}
	,__class__: EReg
}
var Ints = $hxClasses["Ints"] = function() { }
Ints.__name__ = ["Ints"];
Ints.range = function(start,stop,step) {
	if(step == null) step = 1;
	if(null == stop) {
		stop = start;
		start = 0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Ints.hx", lineNumber : 19, className : "Ints", methodName : "range"});
	var range = [], i = -1, j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
}
Ints.sign = function(v) {
	return v < 0?-1:1;
}
Ints.abs = function(a) {
	return a < 0?-a:a;
}
Ints.min = function(a,b) {
	return a < b?a:b;
}
Ints.max = function(a,b) {
	return a > b?a:b;
}
Ints.wrap = function(v,min,max) {
	return Math.round(Floats.wrap(v,min,max));
}
Ints.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
}
Ints.clampSym = function(v,max) {
	if(v < -max) return -max; else if(v > max) return max; else return v;
}
Ints.interpolate = function(f,min,max,equation) {
	if(max == null) max = 100.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	return Math.round(min + equation(f) * (max - min));
}
Ints.interpolatef = function(min,max,equation) {
	if(max == null) max = 1.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = max - min;
	return function(f) {
		return Math.round(min + equation(f) * d);
	};
}
Ints.format = function(v,param,params,culture) {
	return (Ints.formatf(param,params,culture))(v);
}
Ints.formatf = function(param,params,culture) {
	return Floats.formatf(null,thx.culture.FormatParams.params(param,params,"I"),culture);
}
Ints.canParse = function(s) {
	return Ints._reparse.match(s);
}
Ints.parse = function(s) {
	if(s.substr(0,1) == "+") s = s.substr(1);
	return Std.parseInt(s);
}
Ints.compare = function(a,b) {
	return a - b;
}
Ints.prototype = {
	__class__: Ints
}
thx.color.NamedColors = $hxClasses["thx.color.NamedColors"] = function() { }
thx.color.NamedColors.__name__ = ["thx","color","NamedColors"];
thx.color.NamedColors.aliceblue = null;
thx.color.NamedColors.antiquewhite = null;
thx.color.NamedColors.aqua = null;
thx.color.NamedColors.aquamarine = null;
thx.color.NamedColors.azure = null;
thx.color.NamedColors.beige = null;
thx.color.NamedColors.bisque = null;
thx.color.NamedColors.black = null;
thx.color.NamedColors.blanchedalmond = null;
thx.color.NamedColors.blue = null;
thx.color.NamedColors.blueviolet = null;
thx.color.NamedColors.brown = null;
thx.color.NamedColors.burlywood = null;
thx.color.NamedColors.cadetblue = null;
thx.color.NamedColors.chartreuse = null;
thx.color.NamedColors.chocolate = null;
thx.color.NamedColors.coral = null;
thx.color.NamedColors.cornflowerblue = null;
thx.color.NamedColors.cornsilk = null;
thx.color.NamedColors.crimson = null;
thx.color.NamedColors.cyan = null;
thx.color.NamedColors.darkblue = null;
thx.color.NamedColors.darkcyan = null;
thx.color.NamedColors.darkgoldenrod = null;
thx.color.NamedColors.darkgray = null;
thx.color.NamedColors.darkgreen = null;
thx.color.NamedColors.darkgrey = null;
thx.color.NamedColors.darkkhaki = null;
thx.color.NamedColors.darkmagenta = null;
thx.color.NamedColors.darkolivegreen = null;
thx.color.NamedColors.darkorange = null;
thx.color.NamedColors.darkorchid = null;
thx.color.NamedColors.darkred = null;
thx.color.NamedColors.darksalmon = null;
thx.color.NamedColors.darkseagreen = null;
thx.color.NamedColors.darkslateblue = null;
thx.color.NamedColors.darkslategray = null;
thx.color.NamedColors.darkslategrey = null;
thx.color.NamedColors.darkturquoise = null;
thx.color.NamedColors.darkviolet = null;
thx.color.NamedColors.deeppink = null;
thx.color.NamedColors.deepskyblue = null;
thx.color.NamedColors.dimgray = null;
thx.color.NamedColors.dimgrey = null;
thx.color.NamedColors.dodgerblue = null;
thx.color.NamedColors.firebrick = null;
thx.color.NamedColors.floralwhite = null;
thx.color.NamedColors.forestgreen = null;
thx.color.NamedColors.fuchsia = null;
thx.color.NamedColors.gainsboro = null;
thx.color.NamedColors.ghostwhite = null;
thx.color.NamedColors.gold = null;
thx.color.NamedColors.goldenrod = null;
thx.color.NamedColors.gray = null;
thx.color.NamedColors.green = null;
thx.color.NamedColors.greenyellow = null;
thx.color.NamedColors.grey = null;
thx.color.NamedColors.honeydew = null;
thx.color.NamedColors.hotpink = null;
thx.color.NamedColors.indianred = null;
thx.color.NamedColors.indigo = null;
thx.color.NamedColors.ivory = null;
thx.color.NamedColors.khaki = null;
thx.color.NamedColors.lavender = null;
thx.color.NamedColors.lavenderblush = null;
thx.color.NamedColors.lawngreen = null;
thx.color.NamedColors.lemonchiffon = null;
thx.color.NamedColors.lightblue = null;
thx.color.NamedColors.lightcoral = null;
thx.color.NamedColors.lightcyan = null;
thx.color.NamedColors.lightgoldenrodyellow = null;
thx.color.NamedColors.lightgray = null;
thx.color.NamedColors.lightgreen = null;
thx.color.NamedColors.lightgrey = null;
thx.color.NamedColors.lightpink = null;
thx.color.NamedColors.lightsalmon = null;
thx.color.NamedColors.lightseagreen = null;
thx.color.NamedColors.lightskyblue = null;
thx.color.NamedColors.lightslategray = null;
thx.color.NamedColors.lightslategrey = null;
thx.color.NamedColors.lightsteelblue = null;
thx.color.NamedColors.lightyellow = null;
thx.color.NamedColors.lime = null;
thx.color.NamedColors.limegreen = null;
thx.color.NamedColors.linen = null;
thx.color.NamedColors.magenta = null;
thx.color.NamedColors.maroon = null;
thx.color.NamedColors.mediumaquamarine = null;
thx.color.NamedColors.mediumblue = null;
thx.color.NamedColors.mediumorchid = null;
thx.color.NamedColors.mediumpurple = null;
thx.color.NamedColors.mediumseagreen = null;
thx.color.NamedColors.mediumslateblue = null;
thx.color.NamedColors.mediumspringgreen = null;
thx.color.NamedColors.mediumturquoise = null;
thx.color.NamedColors.mediumvioletred = null;
thx.color.NamedColors.midnightblue = null;
thx.color.NamedColors.mintcream = null;
thx.color.NamedColors.mistyrose = null;
thx.color.NamedColors.moccasin = null;
thx.color.NamedColors.navajowhite = null;
thx.color.NamedColors.navy = null;
thx.color.NamedColors.oldlace = null;
thx.color.NamedColors.olive = null;
thx.color.NamedColors.olivedrab = null;
thx.color.NamedColors.orange = null;
thx.color.NamedColors.orangered = null;
thx.color.NamedColors.orchid = null;
thx.color.NamedColors.palegoldenrod = null;
thx.color.NamedColors.palegreen = null;
thx.color.NamedColors.paleturquoise = null;
thx.color.NamedColors.palevioletred = null;
thx.color.NamedColors.papayawhip = null;
thx.color.NamedColors.peachpuff = null;
thx.color.NamedColors.peru = null;
thx.color.NamedColors.pink = null;
thx.color.NamedColors.plum = null;
thx.color.NamedColors.powderblue = null;
thx.color.NamedColors.purple = null;
thx.color.NamedColors.red = null;
thx.color.NamedColors.rosybrown = null;
thx.color.NamedColors.royalblue = null;
thx.color.NamedColors.saddlebrown = null;
thx.color.NamedColors.salmon = null;
thx.color.NamedColors.sandybrown = null;
thx.color.NamedColors.seagreen = null;
thx.color.NamedColors.seashell = null;
thx.color.NamedColors.sienna = null;
thx.color.NamedColors.silver = null;
thx.color.NamedColors.skyblue = null;
thx.color.NamedColors.slateblue = null;
thx.color.NamedColors.slategray = null;
thx.color.NamedColors.slategrey = null;
thx.color.NamedColors.snow = null;
thx.color.NamedColors.springgreen = null;
thx.color.NamedColors.steelblue = null;
thx.color.NamedColors.tan = null;
thx.color.NamedColors.teal = null;
thx.color.NamedColors.thistle = null;
thx.color.NamedColors.tomato = null;
thx.color.NamedColors.turquoise = null;
thx.color.NamedColors.violet = null;
thx.color.NamedColors.wheat = null;
thx.color.NamedColors.white = null;
thx.color.NamedColors.whitesmoke = null;
thx.color.NamedColors.yellow = null;
thx.color.NamedColors.yellowgreen = null;
thx.color.NamedColors.byName = null;
thx.color.NamedColors.prototype = {
	__class__: thx.color.NamedColors
}
var math = math || {}
if(!math.prng) math.prng = {}
math.prng.Random = $hxClasses["math.prng.Random"] = function(backend) {
	this.createState(backend);
	this.initialized = false;
}
math.prng.Random.__name__ = ["math","prng","Random"];
math.prng.Random.prototype = {
	state: null
	,pool: null
	,pptr: null
	,initialized: null
	,next: function() {
		if(this.initialized == false) {
			this.createState();
			this.state.init(this.pool);
			var _g1 = 0, _g = this.pool.length;
			while(_g1 < _g) {
				var i = _g1++;
				this.pool[i] = 0;
			}
			this.pptr = 0;
			this.pool = new Array();
			this.initialized = true;
		}
		return this.state.next();
	}
	,nextBytes: function(bytes,pos,len) {
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			bytes.b[pos + i] = this.next() & 255;
		}
	}
	,nextBytesStream: function(out,count) {
		var _g = 0;
		while(_g < count) {
			var i = _g++;
			out.writeUInt8(this.next());
		}
	}
	,seedInt: function(x) {
		this.pool[this.pptr++] ^= x & 255;
		this.pool[this.pptr++] ^= x >> 8 & 255;
		this.pool[this.pptr++] ^= x >> 16 & 255;
		this.pool[this.pptr++] ^= x >> 24 & 255;
		if(this.pptr >= this.state.size) this.pptr -= this.state.size;
	}
	,seedTime: function() {
		var dt = Date.now().getTime();
		var m = Std["int"](dt * 1000);
		this.seedInt(m);
	}
	,createState: function(backend) {
		if(backend == null) this.state = new math.prng.ArcFour(); else this.state = backend;
		if(this.pool == null) {
			this.pool = new Array();
			this.pptr = 0;
			var t;
			while(this.pptr < this.state.size) {
				t = Math.floor(65536 * Math.random());
				this.pool[this.pptr++] = t >>> 8;
				this.pool[this.pptr++] = t & 255;
			}
			this.pptr = 0;
			this.seedTime();
		}
	}
	,__class__: math.prng.Random
}
if(!rg.visualization) rg.visualization = {}
rg.visualization.Visualization = $hxClasses["rg.visualization.Visualization"] = function(container) {
	this.container = container;
}
rg.visualization.Visualization.__name__ = ["rg","visualization","Visualization"];
rg.visualization.Visualization.prototype = {
	independentVariables: null
	,dependentVariables: null
	,variables: null
	,container: null
	,ready: null
	,hasRendered: null
	,setVariables: function(variables,independentVariables,dependentVariables) {
		var me = this;
		this.variables = variables;
		this.independentVariables = independentVariables;
		this.dependentVariables = dependentVariables;
		this.hasRendered = false;
		this.ready = new hxevents.Notifier();
		this.ready.addOnce(function() {
			me.hasRendered = true;
		});
	}
	,init: function() {
		throw new thx.error.AbstractMethod({ fileName : "Visualization.hx", lineNumber : 43, className : "rg.visualization.Visualization", methodName : "init"});
	}
	,feedData: function(data) {
		haxe.Log.trace("DATA FEED " + Dynamics.string(data),{ fileName : "Visualization.hx", lineNumber : 48, className : "rg.visualization.Visualization", methodName : "feedData"});
	}
	,setVerticalOffset: function(offset) {
	}
	,destroy: function() {
	}
	,addReadyOnce: function(handler) {
		this.ready.addOnce(handler);
		if(this.hasRendered) handler();
	}
	,addReady: function(handler) {
		this.ready.add(handler);
		if(this.hasRendered) handler();
	}
	,removeReady: function(handler) {
		this.ready.remove(handler);
	}
	,__class__: rg.visualization.Visualization
}
rg.visualization.VisualizationSvg = $hxClasses["rg.visualization.VisualizationSvg"] = function(layout) {
	rg.visualization.Visualization.call(this,layout.container);
	this.layout = layout;
}
rg.visualization.VisualizationSvg.__name__ = ["rg","visualization","VisualizationSvg"];
rg.visualization.VisualizationSvg.__super__ = rg.visualization.Visualization;
rg.visualization.VisualizationSvg.prototype = $extend(rg.visualization.Visualization.prototype,{
	baseChart: null
	,layout: null
	,setVerticalOffset: function(offset) {
		this.baseChart.setVerticalChartOffset(offset);
	}
	,__class__: rg.visualization.VisualizationSvg
});
rg.visualization.VisualizationCartesian = $hxClasses["rg.visualization.VisualizationCartesian"] = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
}
rg.visualization.VisualizationCartesian.__name__ = ["rg","visualization","VisualizationCartesian"];
rg.visualization.VisualizationCartesian.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationCartesian.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	info: null
	,chart: null
	,xlabel: null
	,xrule: null
	,ylabels: null
	,yrules: null
	,title: null
	,xvariable: null
	,yvariables: null
	,init: function() {
		this.initAxes();
		this.initYAxes();
		this.initXAxis();
		this.initTitle();
		this.initPadding();
		this.initChart();
		this.initCartesianChart();
	}
	,initAxes: function() {
		throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 46, className : "rg.visualization.VisualizationCartesian", methodName : "initAxes"});
	}
	,initPadding: function() {
		this.layout.adjustPadding();
	}
	,initYAxes: function() {
		this.ylabels = [];
		this.yrules = [];
		var _g1 = 0, _g = this.yvariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			var tickmarks = this.createTickmarks(i + 1,this.yvariables[i].type,"y" + i), rules = this.createRules(i + 1,this.yvariables[i].type,rg.frame.Orientation.Horizontal);
			if(null != tickmarks) this.ylabels.push({ id : i, tickmarks : tickmarks});
			if(null != rules) this.yrules.push({ id : i, rules : rules});
		}
	}
	,initXAxis: function() {
		this.xlabel = this.createTickmarks(0,this.xvariable.type,"x");
		this.xrule = this.createRules(0,this.xvariable.type,rg.frame.Orientation.Vertical);
	}
	,initChart: function() {
		throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 88, className : "rg.visualization.VisualizationCartesian", methodName : "initChart"});
	}
	,initCartesianChart: function() {
		this.chart.animated = this.info.animation.animated;
		this.chart.animationDuration = this.info.animation.duration;
		this.chart.animationEase = this.info.animation.ease;
		this.chart.click = this.info.click;
		this.chart.labelDataPoint = this.info.label.datapoint;
		this.chart.labelDataPointOver = this.info.label.datapointover;
		this.chart.init();
	}
	,initTitle: function() {
		if(null == this.info.label.title) return;
		var panelContextTitle = this.layout.getContext("title");
		if(null == panelContextTitle) return;
		this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
	}
	,feedData: function(data) {
		if(0 == data.length) return;
		if(null != this.title && null != this.info.label.title) {
			this.title.setText(this.info.label.title(this.variables,data));
			this.layout.suggestSize("title",this.title.idealHeight());
		}
		var transformed = this.transformData(data);
		this.chart.setVariables(this.variables,this.independentVariables,this.dependentVariables,transformed);
		var _g1 = 0, _g = this.ylabels.length;
		while(_g1 < _g) {
			var i = _g1++;
			var item = this.ylabels[i], variable = this.yvariables[item.id];
			item.tickmarks.update(variable.axis,variable.min(),variable.max());
			var size = Math.round(item.tickmarks.desiredSize);
			this.layout.suggestSize("y" + item.id,size);
		}
		var _g1 = 0, _g = this.yrules.length;
		while(_g1 < _g) {
			var i = _g1++;
			var item = this.yrules[i], variable = this.yvariables[item.id];
			item.rules.update(variable.axis,variable.min(),variable.max());
		}
		if(null != this.xlabel) {
			var variable = this.xvariable;
			this.xlabel.update(variable.axis,variable.min(),variable.max());
			var size = Math.round(this.xlabel.desiredSize);
			this.layout.suggestSize("x",size);
		}
		if(null != this.xrule) {
			var variable = this.xvariable;
			this.xrule.update(variable.axis,variable.min(),variable.max());
		}
		this.chart.data(transformed);
	}
	,transformData: function(dps) {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 163, className : "rg.visualization.VisualizationCartesian", methodName : "transformData"});
			return $r;
		}(this));
	}
	,destroy: function() {
		this.chart.destroy();
	}
	,setTickmarksDefaults: function(tickmarks,i,type,pname) {
	}
	,createTickmarks: function(i,type,pname) {
		var me = this;
		var displayMinor = this.info.displayMinorTick(type), displayMajor = this.info.displayMajorTick(type), displayLabel = this.info.displayLabelTick(type), displayAnchorLine = this.info.displayAnchorLineTick(type), title = null != this.info.label.axis?this.info.label.axis(type):null, tickmarks = null, context;
		if(displayMinor || displayMajor || displayLabel || displayAnchorLine) {
			context = this.layout.getContext(pname);
			if(null == context) return null;
			tickmarks = new rg.svg.layer.TickmarksOrtho(context.panel,context.anchor);
			this.setTickmarksDefaults(tickmarks,i,type,pname);
			if(!displayLabel) tickmarks.displayLabel = false; else if(null != this.info.label.tickmark) tickmarks.tickLabel = function(d) {
				return me.info.label.tickmark(d,type);
			};
			tickmarks.displayMinor = displayMinor;
			tickmarks.displayMajor = displayMajor;
			tickmarks.lengthMinor = this.info.lengthTickMinor;
			tickmarks.lengthMajor = this.info.lengthTickMajor;
			tickmarks.paddingMinor = this.info.paddingTickMinor;
			tickmarks.paddingMajor = this.info.paddingTickMajor;
			tickmarks.paddingLabel = this.info.paddingLabel;
			var s;
			s = this.info.labelAnchor(type);
			if(null != s) tickmarks.labelAnchor = rg.svg.widget.GridAnchors.parse(s);
			s = this.info.labelOrientation(type);
			if(null != s) tickmarks.labelOrientation = rg.svg.widget.LabelOrientations.parse(s);
			var a;
			if(null != (a = this.info.labelAngle(type))) tickmarks.labelAngle = a;
			tickmarks.displayAnchorLine = displayAnchorLine;
		}
		if(null != title && null != (context = this.layout.getContext(pname + "title"))) {
			var t = new rg.svg.layer.Title(context.panel,title,context.anchor,null,"axis-title");
			var h = t.idealHeight();
			this.layout.suggestSize(pname + "title",h);
		}
		if(null != tickmarks) tickmarks.init();
		return tickmarks;
	}
	,createRules: function(i,type,orientation) {
		var displayMinor = this.info.displayMinorRule(type), displayMajor = this.info.displayMajorRule(type), displayAnchorLine = this.info.displayAnchorLineRule(type), title = null != this.info.label.axis?this.info.label.axis(type):null, rules = null, panel;
		if(displayMinor || displayMajor) {
			panel = this.layout.getPanel("main");
			if(null == panel) return null;
			rules = new rg.svg.layer.RulesOrtho(panel,orientation);
			rules.displayMinor = displayMinor;
			rules.displayMajor = displayMajor;
			rules.displayAnchorLine = displayAnchorLine;
			rules.init();
		}
		return rules;
	}
	,__class__: rg.visualization.VisualizationCartesian
});
rg.visualization.VisualizationLineChart = $hxClasses["rg.visualization.VisualizationLineChart"] = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
}
rg.visualization.VisualizationLineChart.__name__ = ["rg","visualization","VisualizationLineChart"];
rg.visualization.VisualizationLineChart.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationLineChart.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoLine: null
	,initAxes: function() {
		this.xvariable = this.variables[0];
		this.yvariables = this.variables.slice(1);
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.LineChart(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.symbol = this.infoLine.symbol;
		chart.symbolStyle = this.infoLine.symbolStyle;
		chart.lineInterpolator = this.infoLine.interpolation;
		chart.lineEffect = this.infoLine.effect;
		if(null == this.independentVariables[0].scaleDistribution) this.independentVariables[0].scaleDistribution = rg.axis.ScaleDistribution.ScaleFill;
		if(null != this.infoLine.y0property) chart.y0property = this.infoLine.y0property; else if(this.infoLine.displayarea) chart.y0property = "";
		this.chart = chart;
	}
	,transformData: function(dps) {
		var results = [], segmenter = new rg.data.Segmenter(this.infoLine.segment.on,this.infoLine.segment.transform,this.infoLine.segment.scale);
		var _g1 = 0, _g = this.dependentVariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			var variable = this.dependentVariables[i];
			var values = rg.util.DataPoints.filterByDependents(dps,[variable]);
			results.push(segmenter.segment(values));
		}
		return results;
	}
	,__class__: rg.visualization.VisualizationLineChart
});
var IntHash = $hxClasses["IntHash"] = function() {
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
IntHash.__name__ = ["IntHash"];
IntHash.prototype = {
	h: null
	,set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,exists: function(key) {
		return this.h[key] != null;
	}
	,remove: function(key) {
		if(this.h[key] == null) return false;
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = new Array();
		for( x in this.h ) a.push(x);
		return a.iterator();
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		s.b[s.b.length] = "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b[s.b.length] = i == null?"null":i;
			s.b[s.b.length] = " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b[s.b.length] = ", ";
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,__class__: IntHash
}
if(!rg.svg.chart) rg.svg.chart = {}
rg.svg.chart.Chart = $hxClasses["rg.svg.chart.Chart"] = function(panel) {
	rg.svg.panel.Layer.call(this,panel);
	this.animated = true;
	this.animationDuration = 1500;
	this.animationEase = thx.math.Equations.linear;
	this.ready = new hxevents.Notifier();
	this.verticalChartOffset = 0;
}
rg.svg.chart.Chart.__name__ = ["rg","svg","chart","Chart"];
rg.svg.chart.Chart.__super__ = rg.svg.panel.Layer;
rg.svg.chart.Chart.prototype = $extend(rg.svg.panel.Layer.prototype,{
	animated: null
	,animationDuration: null
	,animationEase: null
	,click: null
	,labelDataPoint: null
	,labelDataPointOver: null
	,ready: null
	,verticalChartOffset: null
	,panelx: null
	,panely: null
	,tooltip: null
	,resize: function() {
		var coords = rg.svg.panel.Panels.absolutePos(this.panel);
		this.panelx = coords.x;
		this.panely = coords.y;
	}
	,init: function() {
		if(null != this.labelDataPointOver) this.tooltip = new rg.html.widget.Tooltip();
		this.resize();
	}
	,setVerticalChartOffset: function(offset) {
		this.verticalChartOffset = offset;
	}
	,moveTooltip: function(x,y,animated) {
		var coords = rg.svg.panel.Panels.absolutePos(this.panel);
		this.panelx = coords.x;
		this.panely = coords.y;
		this.tooltip.showAt(Std["int"](this.panelx + x),Std["int"](this.panely + y + this.verticalChartOffset));
	}
	,__class__: rg.svg.chart.Chart
});
rg.svg.chart.CartesianChart = $hxClasses["rg.svg.chart.CartesianChart"] = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
}
rg.svg.chart.CartesianChart.__name__ = ["rg","svg","chart","CartesianChart"];
rg.svg.chart.CartesianChart.__super__ = rg.svg.chart.Chart;
rg.svg.chart.CartesianChart.prototype = $extend(rg.svg.chart.Chart.prototype,{
	yVariables: null
	,xVariable: null
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		this.xVariable = variables[0];
		this.yVariables = variables.slice(1);
	}
	,data: function(dps) {
		throw new thx.error.AbstractMethod({ fileName : "CartesianChart.hx", lineNumber : 37, className : "rg.svg.chart.CartesianChart", methodName : "data"});
	}
	,__class__: rg.svg.chart.CartesianChart
});
rg.svg.chart.BarChart = $hxClasses["rg.svg.chart.BarChart"] = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.addClass("bar-chart");
	this.defs = this.g.append("svg:defs");
	this.chart = this.g.append("svg:g");
	this.gradientLightness = 2;
	this.displayGradient = true;
	this.padding = 10;
	this.paddingAxis = 4;
	this.paddingDataPoint = 2;
	this.horizontal = false;
}
rg.svg.chart.BarChart.__name__ = ["rg","svg","chart","BarChart"];
rg.svg.chart.BarChart.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.BarChart.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	stacked: null
	,chart: null
	,defs: null
	,dps: null
	,gradientLightness: null
	,displayGradient: null
	,padding: null
	,paddingAxis: null
	,paddingDataPoint: null
	,horizontal: null
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		if(this.horizontal) {
			this.xVariable = variableDependents[0];
			this.yVariables = variableIndependents;
		} else {
			this.xVariable = variableIndependents[0];
			this.yVariables = variableDependents;
		}
		if(this.stacked) {
			var _g = 0;
			while(_g < variableDependents.length) {
				var v = variableDependents[_g];
				++_g;
				v.meta.max = Math.NEGATIVE_INFINITY;
			}
			var _g1 = 0, _g = data.length;
			while(_g1 < _g) {
				var i = _g1++;
				var _g3 = 0, _g2 = data[i].length;
				while(_g3 < _g2) {
					var j = _g3++;
					var v = variableDependents[j], t = 0.0;
					var _g5 = 0, _g4 = data[i][j].length;
					while(_g5 < _g4) {
						var k = _g5++;
						t += rg.util.DataPoints.valueAlt(data[i][j][k],v.type,0.0);
					}
					if(v.meta.max < t) v.meta.max = t;
				}
			}
		}
	}
	,data: function(dps) {
		if(this.horizontal) this.datah(dps); else this.datav(dps);
	}
	,datah: function(dps) {
		var axisgs = new Hash(), span = (this.height - this.padding * (dps.length - 1)) / dps.length;
		var getGroup = function(name,container) {
			var gr = axisgs.get(name);
			if(null == gr) {
				gr = container.append("svg:g").attr("class").string(name);
				axisgs.set(name,gr);
			}
			return gr;
		};
		var flatdata = Arrays.flatten(Arrays.flatten(dps));
		var _g1 = 0, _g = dps.length;
		while(_g1 < _g) {
			var i = _g1++;
			var valuedps = dps[i], dist = (span - this.paddingAxis * (valuedps.length - 1)) / valuedps.length;
			var _g3 = 0, _g2 = valuedps.length;
			while(_g3 < _g2) {
				var j = _g3++;
				var axisdps = valuedps[j], axisg = getGroup("group-" + j,this.chart), xtype = this.xVariable.type, xaxis = this.xVariable.axis, xmin = this.xVariable.min(), xmax = this.xVariable.max(), ytype = this.yVariables[j].type, yaxis = this.yVariables[j].axis, ymin = this.yVariables[j].min(), ymax = this.yVariables[j].max(), pad = Math.max(1,(dist - this.paddingDataPoint * (axisdps.length - 1)) / axisdps.length), offset = -span / 2 + j * (dist + this.paddingAxis), stats = this.xVariable.stats, over = (function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onmouseover.$bind(this),stats), click = (function(f,a1) {
					return function(a2,a3,a4) {
						return f(a1,a2,a3,a4);
					};
				})(this.onclick.$bind(this),stats);
				var prev = 0.0;
				var _g5 = 0, _g4 = axisdps.length;
				while(_g5 < _g4) {
					var k = _g5++;
					var dp = axisdps[k], seggroup = getGroup("fill-" + k,axisg), x = prev, y = this.height * yaxis.scale(ymin,ymax,Reflect.field(dp,ytype)), w = xaxis.scale(xmin,xmax,Reflect.field(dp,xtype)) * this.width;
					var bar = seggroup.append("svg:rect").attr("class").string("bar").attr("x")["float"](x).attr("y")["float"](this.height - (this.stacked?y - offset:y - offset - k * (pad + this.paddingDataPoint))).attr("height")["float"](this.stacked?dist:pad).attr("width")["float"](w).onNode("mouseover",over).onNode("click",(function(f,a1) {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})(click,dp));
					bar.node()["__data__"] = dp;
					if(this.displayGradient) bar.eachNode(this.applyGradient.$bind(this));
					if(this.stacked) prev = x + w;
				}
			}
		}
		this.ready.dispatch();
	}
	,datav: function(dps) {
		var axisgs = new Hash(), span = (this.width - this.padding * (dps.length - 1)) / dps.length;
		var getGroup = function(name,container) {
			var gr = axisgs.get(name);
			if(null == gr) {
				gr = container.append("svg:g").attr("class").string(name);
				axisgs.set(name,gr);
			}
			return gr;
		};
		var flatdata = Arrays.flatten(Arrays.flatten(dps));
		var _g1 = 0, _g = dps.length;
		while(_g1 < _g) {
			var i = _g1++;
			var valuedps = dps[i], dist = (span - this.paddingAxis * (valuedps.length - 1)) / valuedps.length;
			var _g3 = 0, _g2 = valuedps.length;
			while(_g3 < _g2) {
				var j = _g3++;
				var axisdps = valuedps[j], axisg = getGroup("group-" + j,this.chart), xtype = this.xVariable.type, xaxis = this.xVariable.axis, xmin = this.xVariable.min(), xmax = this.xVariable.max(), ytype = this.yVariables[j].type, yaxis = this.yVariables[j].axis, ymin = this.yVariables[j].min(), ymax = this.yVariables[j].max(), pad = Math.max(1,(dist - this.paddingDataPoint * (axisdps.length - 1)) / axisdps.length), offset = -span / 2 + j * (dist + this.paddingAxis), stats = this.yVariables[j].stats, over = (function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onmouseover.$bind(this),stats), click = (function(f,a1) {
					return function(a2,a3,a4) {
						return f(a1,a2,a3,a4);
					};
				})(this.onclick.$bind(this),stats);
				var prev = 0.0;
				var _g5 = 0, _g4 = axisdps.length;
				while(_g5 < _g4) {
					var k = _g5++;
					var dp = axisdps[k], seggroup = getGroup("fill-" + k,axisg), x = this.width * xaxis.scale(xmin,xmax,Reflect.field(dp,xtype)), y = prev, h = yaxis.scale(ymin,ymax,Reflect.field(dp,ytype)) * this.height;
					var bar = seggroup.append("svg:rect").attr("class").string("bar").attr("x")["float"](this.stacked?x + offset:x + offset + k * (pad + this.paddingDataPoint)).attr("width")["float"](this.stacked?dist:pad).attr("y")["float"](this.height - h - y).attr("height")["float"](h).onNode("mouseover",over).onNode("click",(function(f,a1) {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})(click,dp));
					bar.node()["__data__"] = dp;
					if(this.displayGradient) bar.eachNode(this.applyGradient.$bind(this));
					if(this.stacked) prev = y + h;
				}
			}
		}
		this.ready.dispatch();
	}
	,onclick: function(stats,dp,_,i) {
		this.click(dp,stats);
	}
	,onmouseover: function(stats,n,i) {
		var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,stats);
		if(null == text) this.tooltip.hide(); else {
			var sel = thx.js.Dom.selectNode(n), x = sel.attr("x").getFloat(), y = sel.attr("y").getFloat(), w = sel.attr("width").getFloat();
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(x + w / 2,y);
		}
	}
	,applyGradient: function(n,i) {
		var gn = thx.js.Dom.selectNodeData(n), dp = Reflect.field(n,"__data__"), color = rg.util.RGColors.parse(gn.style("fill").get(),"#cccccc"), id = "rg_bar_gradient_" + color.hex("");
		if(this.defs.select("#" + id).empty()) {
			var scolor = rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString();
			var gradient = this.defs.append("svg:linearGradient").attr("id").string(id).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
			gradient.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(scolor).attr("stop-opacity")["float"](1);
			gradient.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
		}
		gn.attr("style").string("fill:url(#" + id + ")");
	}
	,__class__: rg.svg.chart.BarChart
});
if(!chx.lang) chx.lang = {}
chx.lang.FatalException = $hxClasses["chx.lang.FatalException"] = function(msg,cause) {
	this.message = msg;
	this.cause = cause;
}
chx.lang.FatalException.__name__ = ["chx","lang","FatalException"];
chx.lang.FatalException.prototype = {
	message: null
	,cause: null
	,toString: function() {
		return Type.getClassName(Type.getClass(this)) + "(" + (this.message == null?"":this.message + ")");
	}
	,__class__: chx.lang.FatalException
}
rg.graph.OneCycleRemover = $hxClasses["rg.graph.OneCycleRemover"] = function() {
}
rg.graph.OneCycleRemover.__name__ = ["rg","graph","OneCycleRemover"];
rg.graph.OneCycleRemover.prototype = {
	remove: function(graph) {
		var edge, result = [];
		var $it0 = graph.nodes.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			edge = node.predecessorBy(node);
			if(null == edge) continue;
			result.push({ node : node, weight : edge.weight, data : edge.data});
			edge.graph.edges._remove(edge);
		}
		return result;
	}
	,__class__: rg.graph.OneCycleRemover
}
if(!rg.axis) rg.axis = {}
rg.axis.ScaleDistributions = $hxClasses["rg.axis.ScaleDistributions"] = function() { }
rg.axis.ScaleDistributions.__name__ = ["rg","axis","ScaleDistributions"];
rg.axis.ScaleDistributions.distribute = function(scale,pos,values) {
	switch( (scale)[1] ) {
	case 0:
		return (pos + 0.5) / values;
	case 1:
		return pos / (values - 1);
	case 2:
		return pos / values;
	case 3:
		return (pos + 1) / values;
	}
}
rg.axis.ScaleDistributions.prototype = {
	__class__: rg.axis.ScaleDistributions
}
if(!thx.culture) thx.culture = {}
thx.culture.Info = $hxClasses["thx.culture.Info"] = function() { }
thx.culture.Info.__name__ = ["thx","culture","Info"];
thx.culture.Info.prototype = {
	name: null
	,'native': null
	,english: null
	,iso2: null
	,iso3: null
	,pluralRule: null
	,toString: function() {
		return this["native"] + " (" + this.english + ")";
	}
	,__class__: thx.culture.Info
}
thx.culture.Culture = $hxClasses["thx.culture.Culture"] = function() { }
thx.culture.Culture.__name__ = ["thx","culture","Culture"];
thx.culture.Culture.__properties__ = {set_defaultCulture:"setDefaultCulture",get_defaultCulture:"getDefaultCulture",get_cultures:"getCultures"}
thx.culture.Culture.cultures = null;
thx.culture.Culture.getCultures = function() {
	if(null == thx.culture.Culture.cultures) thx.culture.Culture.cultures = new Hash();
	return thx.culture.Culture.cultures;
}
thx.culture.Culture.get = function(name) {
	return thx.culture.Culture.getCultures().get(name.toLowerCase());
}
thx.culture.Culture.names = function() {
	return thx.culture.Culture.getCultures().keys();
}
thx.culture.Culture.exists = function(culture) {
	return thx.culture.Culture.getCultures().exists(culture.toLowerCase());
}
thx.culture.Culture._defaultCulture = null;
thx.culture.Culture.defaultCulture = null;
thx.culture.Culture.getDefaultCulture = function() {
	if(null == thx.culture.Culture._defaultCulture) return thx.cultures.EnUS.getCulture(); else return thx.culture.Culture._defaultCulture;
}
thx.culture.Culture.setDefaultCulture = function(culture) {
	return thx.culture.Culture._defaultCulture = culture;
}
thx.culture.Culture.add = function(culture) {
	if(null == thx.culture.Culture._defaultCulture) thx.culture.Culture._defaultCulture = culture;
	var name = culture.name.toLowerCase();
	if(!thx.culture.Culture.getCultures().exists(name)) thx.culture.Culture.getCultures().set(name,culture);
}
thx.culture.Culture.loadAll = function() {
}
thx.culture.Culture.__super__ = thx.culture.Info;
thx.culture.Culture.prototype = $extend(thx.culture.Info.prototype,{
	language: null
	,date: null
	,englishCurrency: null
	,nativeCurrency: null
	,currencySymbol: null
	,currencyIso: null
	,englishRegion: null
	,nativeRegion: null
	,isMetric: null
	,digits: null
	,signNeg: null
	,signPos: null
	,symbolNaN: null
	,symbolPercent: null
	,symbolPermille: null
	,symbolNegInf: null
	,symbolPosInf: null
	,number: null
	,currency: null
	,percent: null
	,__class__: thx.culture.Culture
});
if(!rg.layout) rg.layout = {}
rg.layout.Layout = $hxClasses["rg.layout.Layout"] = function(width,height,container) {
	this.container = container;
	container.classed().add("rg");
	this.space = new rg.svg.panel.Space(this.width = width,this.height = height,container);
}
rg.layout.Layout.__name__ = ["rg","layout","Layout"];
rg.layout.Layout.prototype = {
	mainPanelName: null
	,width: null
	,height: null
	,space: null
	,container: null
	,getContext: function(name) {
		return null;
	}
	,getPanel: function(name) {
		return null;
	}
	,suggestSize: function(name,size) {
		var panel = this.getPanel(name);
		if(null == panel) return;
		this.suggestPanelSize(panel,size);
	}
	,destroy: function() {
		this.container.selectAll("*").remove();
	}
	,suggestPanelSize: function(panel,size) {
		var stackitem = Types["as"](panel.frame,rg.frame.StackItem);
		if(null == stackitem) return;
		var $e = (stackitem.disposition);
		switch( $e[1] ) {
		case 3:
			var a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.Fixed(b,a,size));
			break;
		default:
		}
	}
	,suggestPanelPadding: function(panel,before,after) {
		if(null == panel) return;
		var stackitem = Types["as"](panel.frame,rg.frame.StackItem);
		if(null == stackitem) return;
		var $e = (stackitem.disposition);
		switch( $e[1] ) {
		case 0:
			var max = $e[5], min = $e[4], a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.Fill(null == before?b:before,null == after?a:after,min,max));
			break;
		case 1:
			var max = $e[6], min = $e[5], percent = $e[4], a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.FillPercent(null == before?b:before,null == after?a:after,percent,min,max));
			break;
		case 2:
			var ratio = $e[4], a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.FillRatio(null == before?b:before,null == after?a:after,ratio));
			break;
		case 3:
			var size = $e[4], a = $e[3], b = $e[2];
			stackitem.setDisposition(rg.frame.FrameLayout.Fixed(null == before?b:before,null == after?a:after,size));
			break;
		default:
		}
	}
	,paddings: null
	,feedOptions: function(info) {
		this.mainPanelName = info.main;
		this.paddings = info.padding;
	}
	,adjustPadding: function() {
	}
	,__class__: rg.layout.Layout
}
var Dates = $hxClasses["Dates"] = function() { }
Dates.__name__ = ["Dates"];
Dates.format = function(d,param,params,culture) {
	return (Dates.formatf(param,params,culture))(d);
}
Dates.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	switch(format) {
	case "D":
		return function(d) {
			return thx.culture.FormatDate.date(d,culture);
		};
	case "DS":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture);
		};
	case "DST":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.time(d,culture);
		};
	case "DSTS":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
		};
	case "DTS":
		return function(d) {
			return thx.culture.FormatDate.date(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
		};
	case "Y":
		return function(d) {
			return thx.culture.FormatDate.year(d,culture);
		};
	case "YM":
		return function(d) {
			return thx.culture.FormatDate.yearMonth(d,culture);
		};
	case "M":
		return function(d) {
			return thx.culture.FormatDate.month(d,culture);
		};
	case "MN":
		return function(d) {
			return thx.culture.FormatDate.monthName(d,culture);
		};
	case "MS":
		return function(d) {
			return thx.culture.FormatDate.monthNameShort(d,culture);
		};
	case "MD":
		return function(d) {
			return thx.culture.FormatDate.monthDay(d,culture);
		};
	case "WD":
		return function(d) {
			return thx.culture.FormatDate.weekDay(d,culture);
		};
	case "WDN":
		return function(d) {
			return thx.culture.FormatDate.weekDayName(d,culture);
		};
	case "WDS":
		return function(d) {
			return thx.culture.FormatDate.weekDayNameShort(d,culture);
		};
	case "R":
		return function(d) {
			return thx.culture.FormatDate.dateRfc(d,culture);
		};
	case "DT":
		return function(d) {
			return thx.culture.FormatDate.dateTime(d,culture);
		};
	case "U":
		return function(d) {
			return thx.culture.FormatDate.universal(d,culture);
		};
	case "S":
		return function(d) {
			return thx.culture.FormatDate.sortable(d,culture);
		};
	case "T":
		return function(d) {
			return thx.culture.FormatDate.time(d,culture);
		};
	case "TS":
		return function(d) {
			return thx.culture.FormatDate.timeShort(d,culture);
		};
	case "C":
		var f = params[0];
		if(null == f) return function(d) {
			return thx.culture.FormatDate.date(d,culture);
		}; else return function(d) {
			return thx.culture.FormatDate.format(f,d,culture,params[1] != null?params[1] == "true":true);
		};
		break;
	default:
		throw new thx.error.Error("Unsupported date format: {0}",null,format,{ fileName : "Dates.hx", lineNumber : 71, className : "Dates", methodName : "formatf"});
	}
}
Dates.interpolate = function(f,a,b,equation) {
	return (Dates.interpolatef(a,b,equation))(f);
}
Dates.interpolatef = function(a,b,equation) {
	var f = Floats.interpolatef(a.getTime(),b.getTime(),equation);
	return function(v) {
		return Date.fromTime(f(v));
	};
}
Dates.snap = function(time,period,mode) {
	if(mode == null) mode = 0;
	if(mode < 0) switch(period) {
	case "second":
		return Math.floor(time / 1000.0) * 1000.0;
	case "minute":
		return Math.floor(time / 60000.0) * 60000.0;
	case "hour":
		return Math.floor(time / 3600000.0) * 3600000.0;
	case "day":
		return Math.floor(time / 86400000.) * 86400000.;
	case "week":
		return Math.floor(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth(),1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),0,1,0,0,0).getTime();
	case "eternity":
		return 0;
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 111, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
	} else if(mode > 0) switch(period) {
	case "second":
		return Math.ceil(time / 1000.0) * 1000.0;
	case "minute":
		return Math.ceil(time / 60000.0) * 60000.0;
	case "hour":
		return Math.ceil(time / 3600000.0) * 3600000.0;
	case "day":
		return Math.ceil(time / 86400000.) * 86400000.;
	case "week":
		return Math.ceil(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth() + 1,1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear() + 1,0,1,0,0,0).getTime();
	case "eternity":
		return 0;
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 136, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
	} else switch(period) {
	case "second":
		return Math.round(time / 1000.0) * 1000.0;
	case "minute":
		return Math.round(time / 60000.0) * 60000.0;
	case "hour":
		return Math.round(time / 3600000.0) * 3600000.0;
	case "day":
		return Math.round(time / 86400000.) * 86400000.;
	case "week":
		return Math.round(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time), mod = d.getDate() > Math.round(DateTools.getMonthDays(d) / 2)?1:0;
		return new Date(d.getFullYear(),d.getMonth() + mod,1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time), mod = time > new Date(d.getFullYear(),6,2,0,0,0).getTime()?1:0;
		return new Date(d.getFullYear() + mod,0,1,0,0,0).getTime();
	case "eternity":
		return 0;
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 162, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
	}
}
Dates.snapToWeekDay = function(time,day) {
	var d = Date.fromTime(time).getDay();
	var s = 0;
	switch(day.toLowerCase()) {
	case "sunday":
		s = 0;
		break;
	case "monday":
		s = 1;
		break;
	case "tuesday":
		s = 2;
		break;
	case "wednesday":
		s = 3;
		break;
	case "thursday":
		s = 4;
		break;
	case "friday":
		s = 5;
		break;
	case "saturday":
		s = 6;
		break;
	default:
		throw new thx.error.Error("unknown week day '{0}'",null,day,{ fileName : "Dates.hx", lineNumber : 188, className : "Dates", methodName : "snapToWeekDay"});
	}
	return time - (d - s) % 7 * 24 * 60 * 60 * 1000;
}
Dates.canParse = function(s) {
	return Dates._reparse.match(s);
}
Dates.parse = function(s) {
	var parts = s.split(".");
	var date = Date.fromString(StringTools.replace(parts[0],"T"," "));
	if(parts.length > 1) date = Date.fromTime(date.getTime() + Std.parseInt(parts[1]));
	return date;
}
Dates.compare = function(a,b) {
	return Floats.compare(a.getTime(),b.getTime());
}
Dates.prototype = {
	__class__: Dates
}
if(!thx.geo) thx.geo = {}
thx.geo.IProjection = $hxClasses["thx.geo.IProjection"] = function() { }
thx.geo.IProjection.__name__ = ["thx","geo","IProjection"];
thx.geo.IProjection.prototype = {
	project: null
	,invert: null
	,__class__: thx.geo.IProjection
}
thx.geo.Albers = $hxClasses["thx.geo.Albers"] = function() {
	this._origin = [-98.0,38];
	this._parallels = [29.5,45.5];
	this._scale = 1000;
	this._translate = [480.0,250];
	this.reload();
}
thx.geo.Albers.__name__ = ["thx","geo","Albers"];
thx.geo.Albers.__interfaces__ = [thx.geo.IProjection];
thx.geo.Albers.prototype = {
	origin: null
	,parallels: null
	,translate: null
	,scale: null
	,lng0: null
	,n: null
	,C: null
	,p0: null
	,_origin: null
	,_parallels: null
	,_translate: null
	,_scale: null
	,project: function(coords) {
		var t = this.n * (0.01745329251994329577 * coords[0] - this.lng0), p = Math.sqrt(this.C - 2 * this.n * Math.sin(0.01745329251994329577 * coords[1])) / this.n;
		return [this.getScale() * p * Math.sin(t) + this.getTranslate()[0],this.getScale() * (p * Math.cos(t) - this.p0) + this.getTranslate()[1]];
	}
	,invert: function(coords) {
		var x = (coords[0] - this.getTranslate()[0]) / this.getScale(), y = (coords[1] - this.getTranslate()[1]) / this.getScale(), p0y = this.p0 + y, t = Math.atan2(x,p0y), p = Math.sqrt(x * x + p0y * p0y);
		return [(this.lng0 + t / this.n) / 0.01745329251994329577,Math.asin((this.C - p * p * this.n * this.n) / (2 * this.n)) / 0.01745329251994329577];
	}
	,getOrigin: function() {
		return this._origin.copy();
	}
	,setOrigin: function(origin) {
		this._origin = [origin[0],origin[1]];
		this.reload();
		return origin;
	}
	,getParallels: function() {
		return this._parallels.copy();
	}
	,setParallels: function(parallels) {
		this._parallels = [parallels[0],parallels[1]];
		this.reload();
		return parallels;
	}
	,getTranslate: function() {
		return this._translate.copy();
	}
	,setTranslate: function(translate) {
		this._translate = [translate[0],translate[1]];
		return translate;
	}
	,reload: function() {
		var phi1 = 0.01745329251994329577 * this.getParallels()[0], phi2 = 0.01745329251994329577 * this.getParallels()[1], lat0 = 0.01745329251994329577 * this.getOrigin()[1], s = Math.sin(phi1), c = Math.cos(phi1);
		this.lng0 = 0.01745329251994329577 * this.getOrigin()[0];
		this.n = .5 * (s + Math.sin(phi2));
		this.C = c * c + 2 * this.n * s;
		this.p0 = Math.sqrt(this.C - 2 * this.n * Math.sin(lat0)) / this.n;
		return this;
	}
	,setScale: function(scale) {
		return this._scale = scale;
	}
	,getScale: function() {
		return this._scale;
	}
	,__class__: thx.geo.Albers
	,__properties__: {set_scale:"setScale",get_scale:"getScale",set_translate:"setTranslate",get_translate:"getTranslate",set_parallels:"setParallels",get_parallels:"getParallels",set_origin:"setOrigin",get_origin:"getOrigin"}
}
if(!rg.info) rg.info = {}
rg.info.InfoFunnelChart = $hxClasses["rg.info.InfoFunnelChart"] = function() {
	this.animation = new rg.info.InfoAnimation();
	this.label = new rg.info.InfoLabelFunnel();
	this.padding = 2.5;
	this.flatness = 1.0;
	this.effect = rg.svg.chart.GradientEffect.Gradient(1.25);
	this.arrowSize = 30;
}
rg.info.InfoFunnelChart.__name__ = ["rg","info","InfoFunnelChart"];
rg.info.InfoFunnelChart.filters = function() {
	return [{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "animation", value : rg.info.Info.feed(new rg.info.InfoAnimation(),v)}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelFunnel(),v)}];
	}},{ field : "sort", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "sortDataPoint", value : v}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "segmentpadding", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "padding", value : v}];
	}},{ field : "flatness", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "effect", validator : rg.svg.chart.GradientEffects.canParse, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.GradientEffects.parse(v)}];
	}},{ field : "arrowsize", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "arrowSize", value : v}];
	}}];
}
rg.info.InfoFunnelChart.prototype = {
	animation: null
	,label: null
	,sortDataPoint: null
	,click: null
	,padding: null
	,flatness: null
	,effect: null
	,arrowSize: null
	,__class__: rg.info.InfoFunnelChart
}
chx.lang.Exception = $hxClasses["chx.lang.Exception"] = function(msg,cause) {
	this.message = msg;
	this.cause = cause;
}
chx.lang.Exception.__name__ = ["chx","lang","Exception"];
chx.lang.Exception.prototype = {
	message: null
	,cause: null
	,toString: function() {
		return Type.getClassName(Type.getClass(this)) + "(" + (this.message == null?"":this.message + ")");
	}
	,__class__: chx.lang.Exception
}
chx.lang.IOException = $hxClasses["chx.lang.IOException"] = function(msg,cause) {
	chx.lang.Exception.call(this,msg,cause);
}
chx.lang.IOException.__name__ = ["chx","lang","IOException"];
chx.lang.IOException.__super__ = chx.lang.Exception;
chx.lang.IOException.prototype = $extend(chx.lang.Exception.prototype,{
	__class__: chx.lang.IOException
});
chx.lang.BlockedException = $hxClasses["chx.lang.BlockedException"] = function(msg,cause) {
	chx.lang.IOException.call(this,msg,cause);
}
chx.lang.BlockedException.__name__ = ["chx","lang","BlockedException"];
chx.lang.BlockedException.__super__ = chx.lang.IOException;
chx.lang.BlockedException.prototype = $extend(chx.lang.IOException.prototype,{
	__class__: chx.lang.BlockedException
});
if(!chx.io) chx.io = {}
chx.io.Output = $hxClasses["chx.io.Output"] = function() { }
chx.io.Output.__name__ = ["chx","io","Output"];
chx.io.Output.prototype = {
	bigEndian: null
	,lock: null
	,writeByte: function(c) {
		return (function($this) {
			var $r;
			throw new chx.lang.FatalException("Not implemented");
			return $r;
		}(this));
	}
	,writeBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw new chx.lang.OutsideBoundsException();
		while(k > 0) {
			this.writeByte(b[pos]);
			pos++;
			k--;
		}
		return len;
	}
	,flush: function() {
		return this;
	}
	,close: function() {
	}
	,setBigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,write: function(b) {
		var l = b.length;
		var p = 0;
		while(l > 0) {
			var k = this.writeBytes(b,p,l);
			if(k == 0) throw new chx.lang.BlockedException();
			p += k;
			l -= k;
		}
		return this;
	}
	,writeFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.writeBytes(s,pos,len);
			pos += k;
			len -= k;
		}
		return this;
	}
	,writeFloat: function(x) {
		this.write(math.IEEE754.floatToBytes(x,this.bigEndian));
		return this;
	}
	,writeDouble: function(x) {
		this.write(math.IEEE754.doubleToBytes(x,this.bigEndian));
		return this;
	}
	,writeInt8: function(x) {
		if(x < -128 || x >= 128) throw new chx.lang.OverflowException();
		this.writeByte(x & 255);
		return this;
	}
	,writeUInt8: function(x) {
		return this.writeByte(x);
	}
	,writeInt16: function(x) {
		if(x < -32768 || x >= 32768) throw new chx.lang.OverflowException();
		this.writeUInt16(x & 65535);
		return this;
	}
	,writeUInt16: function(x) {
		if(x < 0 || x >= 65536) throw new chx.lang.OverflowException();
		if(this.bigEndian) {
			this.writeByte(x >> 8);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8);
		}
		return this;
	}
	,writeInt24: function(x) {
		if(x < -8388608 || x >= 8388608) throw new chx.lang.OverflowException();
		this.writeUInt24(x & 16777215);
		return this;
	}
	,writeUInt24: function(x) {
		if(x < 0 || x >= 16777216) throw new chx.lang.OverflowException();
		if(this.bigEndian) {
			this.writeByte(x >> 16);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16);
		}
		return this;
	}
	,writeInt31: function(x) {
		if(x < -1073741824 || x >= 1073741824) throw new chx.lang.OverflowException();
		if(this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
		return this;
	}
	,writeUInt30: function(x) {
		if(x < 0 || x >= 1073741824) throw new chx.lang.OverflowException();
		if(this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
		return this;
	}
	,writeInt32: function(x) {
		if(this.bigEndian) {
			this.writeByte(haxe.Int32.toInt(x >>> 24));
			this.writeByte(haxe.Int32.toInt(x >>> 16) & 255);
			this.writeByte(haxe.Int32.toInt(x >>> 8) & 255);
			this.writeByte(haxe.Int32.toInt(x & (255 | 0)));
		} else {
			this.writeByte(haxe.Int32.toInt(x & (255 | 0)));
			this.writeByte(haxe.Int32.toInt(x >>> 8) & 255);
			this.writeByte(haxe.Int32.toInt(x >>> 16) & 255);
			this.writeByte(haxe.Int32.toInt(x >>> 24));
		}
		return this;
	}
	,prepare: function(nbytes) {
		return this;
	}
	,writeInput: function(i,bufsize) {
		if(bufsize == null) bufsize = 4096;
		var buf = Bytes.alloc(bufsize);
		try {
			while(true) {
				var len = i.readBytes(buf,0,bufsize);
				if(len == 0) throw new chx.lang.BlockedException();
				var p = 0;
				while(len > 0) {
					var k = this.writeBytes(buf,p,len);
					if(k == 0) throw new chx.lang.BlockedException();
					p += k;
					len -= k;
				}
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,chx.lang.EofException) ) {
			} else throw(e);
		}
		return this;
	}
	,writeString: function(s) {
		var b = Bytes.ofString(s);
		this.writeFullBytes(b,0,b.length);
		return this;
	}
	,writeUTF: function(s) {
		if(s.length > 65535) throw new chx.lang.OverflowException();
		this.writeUInt16(s.length);
		this.writeString(s);
		return this;
	}
	,printf: function(format,args,prependLength) {
		if(prependLength == null) prependLength = false;
		var s = chx.text.Sprintf.format(format,args);
		if(prependLength) this.writeUTF(s); else this.writeString(s);
		return this;
	}
	,toString: function() {
		return Type.getClassName(Type.getClass(this));
	}
	,__class__: chx.io.Output
	,__properties__: {set_bigEndian:"setBigEndian"}
}
chx.io.BytesOutput = $hxClasses["chx.io.BytesOutput"] = function() {
	this.b = new BytesBuffer();
}
chx.io.BytesOutput.__name__ = ["chx","io","BytesOutput"];
chx.io.BytesOutput.__super__ = chx.io.Output;
chx.io.BytesOutput.prototype = $extend(chx.io.Output.prototype,{
	b: null
	,writeByte: function(c) {
		this.b.b.push(c);
		return this;
	}
	,writeBytes: function(buf,pos,len) {
		this.b.addBytes(buf,pos,len);
		return len;
	}
	,getBytes: function() {
		return this.b.getBytes();
	}
	,__class__: chx.io.BytesOutput
});
rg.query.Transformers = $hxClasses["rg.query.Transformers"] = function() { }
rg.query.Transformers.__name__ = ["rg","query","Transformers"];
rg.query.Transformers.cross = function(values) {
	if(!Std["is"](values,Array)) values = [values];
	return function(data) {
		var results = [];
		var _g = 0;
		while(_g < data.length) {
			var item = data[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < values.length) {
				var value = values[_g1];
				++_g1;
				results.push(Objects.copyTo(value,Objects.copyTo(item,{ })));
			}
		}
		return results;
	};
}
rg.query.Transformers.map = function(handler) {
	return function(data) {
		return data.map(handler);
	};
}
rg.query.Transformers.filter = function(handler) {
	return function(data) {
		return Arrays.filter(data,handler);
	};
}
rg.query.Transformers.filterByFields = function(o) {
	var entries = Objects.entries(o);
	var handler = function(d) {
		var _g = 0;
		while(_g < entries.length) {
			var entry = entries[_g];
			++_g;
			if(Reflect.field(d,entry.key) != entry.value) return false;
		}
		return true;
	};
	return function(data) {
		return Arrays.filter(data,handler);
	};
}
rg.query.Transformers.sort = function(handler) {
	return function(data) {
		return (function($this) {
			var $r;
			data.sort(null == handler?Dynamics.compare:handler);
			$r = data;
			return $r;
		}(this));
	};
}
rg.query.Transformers.limit = function(offset,count) {
	return function(data) {
		if(offset >= data.length) return [];
		var end = offset + count > data.length?data.length:offset + count;
		return data.slice(offset,end);
	};
}
rg.query.Transformers.reverse = function(arr) {
	arr.reverse();
	return arr;
}
rg.query.Transformers.prototype = {
	__class__: rg.query.Transformers
}
if(!thx.math) thx.math = {}
thx.math.Ease = $hxClasses["thx.math.Ease"] = function() { }
thx.math.Ease.__name__ = ["thx","math","Ease"];
thx.math.Ease.mode = function(easemode,f) {
	if(null == f) f = thx.math.Equations.cubic;
	if(null == easemode) easemode = thx.math.EaseMode.EaseIn;
	switch( (easemode)[1] ) {
	case 0:
		return f;
	case 1:
		return function(t) {
			return 1 - f(1 - t);
		};
	case 2:
		return function(t) {
			return .5 * (t < .5?f(2 * t):2 - f(2 - 2 * t));
		};
	case 3:
		return thx.math.Ease.mode(thx.math.EaseMode.EaseInEaseOut,thx.math.Ease.mode(thx.math.EaseMode.EaseOut,f));
	}
}
thx.math.Ease.prototype = {
	__class__: thx.math.Ease
}
rg.svg.chart.HeatGrid = $hxClasses["rg.svg.chart.HeatGrid"] = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.useContour = false;
	this.setColorMode(rg.svg.chart.ColorScaleMode.FromCss());
}
rg.svg.chart.HeatGrid.__name__ = ["rg","svg","chart","HeatGrid"];
rg.svg.chart.HeatGrid.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.HeatGrid.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	useContour: null
	,colorMode: null
	,dps: null
	,variableDependent: null
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		this.xVariable = variableIndependents[0];
		this.yVariables = [variableIndependents[1]];
		this.variableDependent = variableDependents[0];
	}
	,init: function() {
		rg.svg.chart.CartesianChart.prototype.init.call(this);
		this.g.classed().add("heat-grid");
	}
	,resize: function() {
		rg.svg.chart.CartesianChart.prototype.resize.call(this);
		this.redraw();
	}
	,data: function(dps) {
		this.dps = dps;
		this.redraw();
	}
	,value: function(dp) {
		var v = Reflect.field(dp,this.variableDependent.type);
		return this.scale(v);
	}
	,scale: function(v) {
		return this.variableDependent.axis.scale(this.variableDependent.min(),this.variableDependent.max(),v);
	}
	,xrange: null
	,yrange: null
	,cols: null
	,rows: null
	,w: null
	,h: null
	,stats: null
	,x: function(dp,i) {
		return this.xrange.indexOf(Reflect.field(dp,this.xVariable.type)) * this.w;
	}
	,y: function(dp,i) {
		return this.height - (1 + this.yrange.indexOf(Reflect.field(dp,this.yVariables[0].type))) * this.h;
	}
	,redraw: function() {
		if(null == this.dps || 0 == this.dps.length) return;
		this.stats = this.variableDependent.stats;
		this.xrange = this.range(this.xVariable);
		this.yrange = this.range(this.yVariables[0]);
		this.cols = this.xrange.length;
		this.rows = this.yrange.length;
		this.w = this.width / this.cols;
		this.h = this.height / this.rows;
		if(this.useContour) this.drawContour(); else this.drawSquares();
		this.ready.dispatch();
	}
	,drawContour: function() {
	}
	,createGridMap: function(grid) {
		var map = new Hash();
		var _g1 = 0, _g = this.rows;
		while(_g1 < _g) {
			var r = _g1++;
			var _g3 = 0, _g2 = this.cols;
			while(_g3 < _g2) {
				var c = _g3++;
				if(grid(c,r)) map.set(r + "-" + c,[r,c]);
			}
		}
		return map;
	}
	,drawSquares: function() {
		var me = this;
		var choice = this.g.selectAll("rect").data(this.dps);
		choice.enter().append("svg:rect").attr("x").floatf(this.x.$bind(this)).attr("y").floatf(this.y.$bind(this)).attr("width")["float"](this.w).attr("height")["float"](this.h).each(function(dp,_) {
			me.stylefeature(thx.js.Dom.selectNode(thx.js.Group.current),dp);
		}).on("click",this.onclick.$bind(this)).on("mouseover",this.onmouseover.$bind(this));
	}
	,onmouseover: function(dp,i) {
		if(null == this.labelDataPointOver) return;
		var text = this.labelDataPointOver(dp,this.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(this.x(dp,i) + this.w / 2,this.y(dp,i) + this.h / 2);
		}
	}
	,onclick: function(dp,i) {
		if(null == this.click) return;
		this.click(dp,this.stats);
	}
	,range: function(variable) {
		var v = Std["is"](variable,rg.data.VariableIndependent)?variable:null;
		if(null != v) return v.axis.range(v.min(),v.max());
		var tickmarks = variable.axis.ticks(variable.min(),variable.max());
		return tickmarks.map(function(d,i) {
			return d.getValue();
		});
	}
	,stylefeature: function(svg,dp) {
	}
	,getColorMode: function() {
		return this.colorMode;
	}
	,setColorMode: function(v) {
		var me = this;
		var $e = (this.colorMode = v);
		switch( $e[1] ) {
		case 0:
			var g = $e[2];
			if(null == g) g = 1;
			var colors = rg.svg.util.RGCss.colorsInCss();
			if(colors.length > g) colors = colors.slice(0,g);
			if(colors.length == 1) colors.push(thx.color.Hsl.lighter(thx.color.Hsl.toHsl(thx.color.Colors.parse(colors[0])),0.9).hex("#"));
			colors.reverse();
			this.setColorMode(rg.svg.chart.ColorScaleMode.Interpolation(colors.map(function(s,_) {
				return thx.color.Colors.parse(s);
			})));
			break;
		case 1:
			var g = $e[2];
			if(null == g) g = rg.svg.util.RGCss.numberOfColorsInCss();
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(g * t);
				svg.attr("class").string("fill-" + index);
			};
			break;
		case 3:
			var c = $e[2];
			var colors = c.map(function(d,_) {
				return d.hex("#");
			});
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(colors.length * t);
				svg.style("fill").string(colors[index]);
			};
			break;
		case 2:
			var colors = $e[2];
			var interpolator = thx.color.Rgb.interpolateStepsf(colors);
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type));
				svg.style("fill").string(interpolator(t).hex("#"));
			};
			break;
		case 4:
			var c = $e[2];
			var color = c.hex("#");
			this.stylefeature = function(svg,dp) {
				svg.style("fill").string(color);
			};
			break;
		case 5:
			var f = $e[2];
			this.stylefeature = function(svg,dp) {
				svg.style("fill").string(f(dp,me.variableDependent.stats));
			};
			break;
		}
		return v;
	}
	,__class__: rg.svg.chart.HeatGrid
	,__properties__: $extend(rg.svg.chart.CartesianChart.prototype.__properties__,{set_colorMode:"setColorMode",get_colorMode:"getColorMode"})
});
rg.info.InfoPadding = $hxClasses["rg.info.InfoPadding"] = function() {
}
rg.info.InfoPadding.__name__ = ["rg","info","InfoPadding"];
rg.info.InfoPadding.filters = function() {
	return [{ field : "top", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "bottom", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "left", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "right", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null}];
}
rg.info.InfoPadding.prototype = {
	top: null
	,bottom: null
	,left: null
	,right: null
	,__class__: rg.info.InfoPadding
}
var DynamicsT = $hxClasses["DynamicsT"] = function() { }
DynamicsT.__name__ = ["DynamicsT"];
DynamicsT.toHash = function(ob) {
	var hash = new Hash();
	return DynamicsT.copyToHash(ob,hash);
}
DynamicsT.copyToHash = function(ob,hash) {
	var _g = 0, _g1 = Reflect.fields(ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		hash.set(field,Reflect.field(ob,field));
	}
	return hash;
}
DynamicsT.prototype = {
	__class__: DynamicsT
}
thx.js.AccessProperty = $hxClasses["thx.js.AccessProperty"] = function(name,selection) {
	thx.js.Access.call(this,selection);
	this.name = name;
}
thx.js.AccessProperty.__name__ = ["thx","js","AccessProperty"];
thx.js.AccessProperty.__super__ = thx.js.Access;
thx.js.AccessProperty.prototype = $extend(thx.js.Access.prototype,{
	name: null
	,get: function() {
		var n = this.name;
		return this.selection.firstNode(function(node) {
			return Reflect.field(node,n);
		});
	}
	,remove: function() {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			Reflect.deleteField(node,n);
		});
		return this.selection;
	}
	,string: function(v) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			node[n] = v;
		});
		return this.selection;
	}
	,'float': function(v) {
		var s = "" + v;
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			node[n] = s;
		});
		return this.selection;
	}
	,__class__: thx.js.AccessProperty
});
thx.js.AccessDataProperty = $hxClasses["thx.js.AccessDataProperty"] = function(name,selection) {
	thx.js.AccessProperty.call(this,name,selection);
}
thx.js.AccessDataProperty.__name__ = ["thx","js","AccessDataProperty"];
thx.js.AccessDataProperty.__super__ = thx.js.AccessProperty;
thx.js.AccessDataProperty.prototype = $extend(thx.js.AccessProperty.prototype,{
	stringf: function(v) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) Reflect.deleteField(node,n); else node[n] = s;
		});
		return this.selection;
	}
	,floatf: function(v) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) Reflect.deleteField(node,n); else node[n] = "" + s;
		});
		return this.selection;
	}
	,data: function() {
		return this.stringf(function(d,_) {
			return "" + d;
		});
	}
	,__class__: thx.js.AccessDataProperty
});
if(!rg.factory) rg.factory = {}
rg.factory.FactoryHtmlVisualization = $hxClasses["rg.factory.FactoryHtmlVisualization"] = function() {
}
rg.factory.FactoryHtmlVisualization.__name__ = ["rg","factory","FactoryHtmlVisualization"];
rg.factory.FactoryHtmlVisualization.prototype = {
	create: function(type,container,options) {
		switch(type) {
		case "pivottable":
			var chart = new rg.visualization.VisualizationPivotTable(container);
			chart.info = rg.info.Info.feed(new rg.info.InfoPivotTable(),options);
			return chart;
		case "leaderboard":
			var chart = new rg.visualization.VisualizationLeaderboard(container);
			chart.info = rg.info.Info.feed(new rg.info.InfoLeaderboard(),options);
			return chart;
		default:
			throw new thx.error.Error("unsupported visualization '{0}'",null,type,{ fileName : "FactoryHtmlVisualization.hx", lineNumber : 35, className : "rg.factory.FactoryHtmlVisualization", methodName : "create"});
		}
		return null;
	}
	,__class__: rg.factory.FactoryHtmlVisualization
}
thx.color.Hsl = $hxClasses["thx.color.Hsl"] = function(h,s,l) {
	this.hue = h = Floats.circularWrap(h,360);
	this.saturation = s = Floats.normalize(s);
	this.lightness = l = Floats.normalize(l);
	thx.color.Rgb.call(this,Ints.interpolate(thx.color.Hsl._c(h + 120,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h - 120,s,l),0,255,null));
}
thx.color.Hsl.__name__ = ["thx","color","Hsl"];
thx.color.Hsl._c = function(d,s,l) {
	var m2 = l <= 0.5?l * (1 + s):l + s - l * s;
	var m1 = 2 * l - m2;
	d = Floats.circularWrap(d,360);
	if(d < 60) return m1 + (m2 - m1) * d / 60; else if(d < 180) return m2; else if(d < 240) return m1 + (m2 - m1) * (240 - d) / 60; else return m1;
}
thx.color.Hsl.toHsl = function(c) {
	var r = c.red / 255.0;
	var g = c.green / 255.0, b = c.blue / 255.0, min = Floats.min(r < g?r:g,b), max = Floats.max(r > g?r:g,b), delta = max - min, h, s, l = (max + min) / 2;
	if(delta == 0.0) s = h = 0.0; else {
		s = l < 0.5?delta / (max + min):delta / (2 - max - min);
		if(r == max) h = (g - b) / delta + (g < b?6:0); else if(g == max) h = (b - r) / delta + 2; else h = (r - g) / delta + 4;
		h *= 60;
	}
	return new thx.color.Hsl(h,s,l);
}
thx.color.Hsl.equals = function(a,b) {
	return a.hue == b.hue && a.saturation == b.saturation && a.lightness == b.lightness;
}
thx.color.Hsl.darker = function(color,t,equation) {
	return new thx.color.Hsl(color.hue,color.saturation,Floats.interpolate(t,color.lightness,0,equation));
}
thx.color.Hsl.lighter = function(color,t,equation) {
	return new thx.color.Hsl(color.hue,color.saturation,Floats.interpolate(t,color.lightness,1,equation));
}
thx.color.Hsl.interpolate = function(a,b,t,equation) {
	return new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
}
thx.color.Hsl.interpolatef = function(a,b,equation) {
	return function(t) {
		return new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
	};
}
thx.color.Hsl.__super__ = thx.color.Rgb;
thx.color.Hsl.prototype = $extend(thx.color.Rgb.prototype,{
	hue: null
	,saturation: null
	,lightness: null
	,toHslString: function() {
		return "hsl(" + this.hue + "," + this.saturation * 100 + "%," + this.lightness * 100 + "%)";
	}
	,__class__: thx.color.Hsl
});
var Floats = $hxClasses["Floats"] = function() { }
Floats.__name__ = ["Floats"];
Floats.normalize = function(v) {
	if(v < 0.0) return 0.0; else if(v > 1.0) return 1.0; else return v;
}
Floats.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
}
Floats.clampSym = function(v,max) {
	if(v < -max) return -max; else if(v > max) return max; else return v;
}
Floats.range = function(start,stop,step) {
	if(step == null) step = 1.0;
	if(null == stop) {
		stop = start;
		start = 0.0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Floats.hx", lineNumber : 50, className : "Floats", methodName : "range"});
	var range = [], i = -1.0, j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
}
Floats.sign = function(v) {
	return v < 0?-1:1;
}
Floats.abs = function(a) {
	return a < 0?-a:a;
}
Floats.min = function(a,b) {
	return a < b?a:b;
}
Floats.max = function(a,b) {
	return a > b?a:b;
}
Floats.wrap = function(v,min,max) {
	var range = max - min + 1;
	if(v < min) v += range * ((min - v) / range + 1);
	return min + (v - min) % range;
}
Floats.circularWrap = function(v,max) {
	v = v % max;
	if(v < 0) v += max;
	return v;
}
Floats.interpolate = function(f,a,b,equation) {
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	return a + equation(f) * (b - a);
}
Floats.interpolatef = function(a,b,equation) {
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = b - a;
	return function(f) {
		return a + equation(f) * d;
	};
}
Floats.interpolateClampf = function(min,max,equation) {
	if(null == equation) equation = thx.math.Equations.linear;
	return function(a,b) {
		var d = b - a;
		return function(f) {
			return a + equation(Floats.clamp(f,min,max)) * d;
		};
	};
}
Floats.format = function(v,param,params,culture) {
	return (Floats.formatf(param,params,culture))(v);
}
Floats.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	var decimals = params.length > 0?Std.parseInt(params[0]):null;
	switch(format) {
	case "D":
		return function(v) {
			return thx.culture.FormatNumber.decimal(v,decimals,culture);
		};
	case "I":
		return function(v) {
			return thx.culture.FormatNumber["int"](v,culture);
		};
	case "C":
		var s = params.length > 1?params[1]:null;
		return function(v) {
			return thx.culture.FormatNumber.currency(v,s,decimals,culture);
		};
	case "P":
		return function(v) {
			return thx.culture.FormatNumber.percent(v,decimals,culture);
		};
	case "M":
		return function(v) {
			return thx.culture.FormatNumber.permille(v,decimals,culture);
		};
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Floats.hx", lineNumber : 145, className : "Floats", methodName : "formatf"});
			return $r;
		}(this));
	}
}
Floats.canParse = function(s) {
	return Floats._reparse.match(s);
}
Floats.parse = function(s) {
	if(s.substr(0,1) == "+") s = s.substr(1);
	return Std.parseFloat(s);
}
Floats.compare = function(a,b) {
	return a < b?-1:a > b?1:0;
}
Floats.isNumeric = function(v) {
	return Std["is"](v,Float) || Std["is"](v,Int);
}
Floats.equals = function(a,b,approx) {
	if(approx == null) approx = 1e-5;
	if(Math.isNaN(a)) return Math.isNaN(b); else if(Math.isNaN(b)) return false; else if(!Math.isFinite(a) && !Math.isFinite(b)) return a > 0 == b > 0;
	return Math.abs(b - a) < approx;
}
Floats.uninterpolatef = function(a,b) {
	b = 1 / (b - a);
	return function(x) {
		return (x - a) * b;
	};
}
Floats.uninterpolateClampf = function(a,b) {
	b = 1 / (b - a);
	return function(x) {
		return Floats.clamp((x - a) * b,0.0,1.0);
	};
}
Floats.round = function(number,precision) {
	if(precision == null) precision = 2;
	number *= Math.pow(10,precision);
	return Math.round(number) / Math.pow(10,precision);
}
Floats.prototype = {
	__class__: Floats
}
thx.math.Equations = $hxClasses["thx.math.Equations"] = function() { }
thx.math.Equations.__name__ = ["thx","math","Equations"];
thx.math.Equations.linear = function(v) {
	return v;
}
thx.math.Equations.polynomial = function(t,e) {
	return Math.pow(t,e);
}
thx.math.Equations.quadratic = function(t) {
	return thx.math.Equations.polynomial(t,2);
}
thx.math.Equations.cubic = function(t) {
	return thx.math.Equations.polynomial(t,3);
}
thx.math.Equations.sin = function(t) {
	return 1 - Math.cos(t * Math.PI / 2);
}
thx.math.Equations.exponential = function(t) {
	return t != 0?Math.pow(2,10 * (t - 1)) - 1e-3:0;
}
thx.math.Equations.circle = function(t) {
	return 1 - Math.sqrt(1 - t * t);
}
thx.math.Equations.elastic = function(t,a,p) {
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	return 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
}
thx.math.Equations.elasticf = function(a,p) {
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	return function(t) {
		return 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
	};
}
thx.math.Equations.back = function(t,s) {
	if(null == s) s = 1.70158;
	return t * t * ((s + 1) * t - s);
}
thx.math.Equations.backf = function(s) {
	if(null == s) s = 1.70158;
	return function(t) {
		return t * t * ((s + 1) * t - s);
	};
}
thx.math.Equations.bounce = function(t) {
	return t < 1 / 2.75?7.5625 * t * t:t < 2 / 2.75?7.5625 * (t -= 1.5 / 2.75) * t + .75:t < 2.5 / 2.75?7.5625 * (t -= 2.25 / 2.75) * t + .9375:7.5625 * (t -= 2.625 / 2.75) * t + .984375;
}
thx.math.Equations.polynomialf = function(e) {
	return function(t) {
		thx.math.Equations.polynomial(t,e);
	};
}
thx.math.Equations.prototype = {
	__class__: thx.math.Equations
}
if(!thx.math.scale) thx.math.scale = {}
thx.math.scale.Linears = $hxClasses["thx.math.scale.Linears"] = function() { }
thx.math.scale.Linears.__name__ = ["thx","math","scale","Linears"];
thx.math.scale.Linears.forString = function() {
	return new thx.math.scale.LinearT().interpolatef(Strings.interpolatef);
}
thx.math.scale.Linears.forHsl = function() {
	return new thx.math.scale.LinearT().interpolatef(thx.color.Hsl.interpolatef);
}
thx.math.scale.Linears.forHslString = function() {
	return new thx.math.scale.LinearT().interpolatef(function(a,b,f) {
		if(Strings.empty(a) || Strings.empty(b)) return function(_) {
			return "";
		};
		var ca = thx.color.Hsl.toHsl(thx.color.Colors.parse(a)), cb = thx.color.Hsl.toHsl(thx.color.Colors.parse(b)), i = thx.color.Hsl.interpolatef(ca,cb,f);
		return function(t) {
			return i(t).toHslString();
		};
	});
}
thx.math.scale.Linears.forRgb = function() {
	return new thx.math.scale.LinearT().interpolatef(thx.color.Rgb.interpolatef);
}
thx.math.scale.Linears.forRgbString = function() {
	return new thx.math.scale.LinearT().interpolatef(function(a,b,f) {
		if(Strings.empty(a) || Strings.empty(b)) return function(_) {
			return "";
		};
		var ca = thx.color.Colors.parse(a), cb = thx.color.Colors.parse(b), i = thx.color.Rgb.interpolatef(ca,cb,f);
		return function(t) {
			return i(t).toRgbString();
		};
	});
}
thx.math.scale.Linears.prototype = {
	__class__: thx.math.scale.Linears
}
rg.svg.chart.StreamEffects = $hxClasses["rg.svg.chart.StreamEffects"] = function() { }
rg.svg.chart.StreamEffects.__name__ = ["rg","svg","chart","StreamEffects"];
rg.svg.chart.StreamEffects.getLightness = function(p,alt) {
	if(null == p) return alt; else return Std.parseFloat(p);
}
rg.svg.chart.StreamEffects.parse = function(s) {
	var parts = s.toLowerCase().split(":");
	switch(parts.shift()) {
	case "gradient":case "gradientv":case "gradientvert":case "gradientvertical":
		return rg.svg.chart.StreamEffect.GradientVertical(rg.svg.chart.StreamEffects.getLightness(parts.pop(),0.75));
	case "gradienth":case "gradienthoriz":case "gradienthorizontal":
		return rg.svg.chart.StreamEffect.GradientHorizontal(rg.svg.chart.StreamEffects.getLightness(parts.pop(),0.75));
	default:
		return rg.svg.chart.StreamEffect.NoEffect;
	}
}
rg.svg.chart.StreamEffects.prototype = {
	__class__: rg.svg.chart.StreamEffects
}
thx.culture.FormatNumber = $hxClasses["thx.culture.FormatNumber"] = function() { }
thx.culture.FormatNumber.__name__ = ["thx","culture","FormatNumber"];
thx.culture.FormatNumber.decimal = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.number.patternNegative,culture.number.patternPositive,culture,null,null);
}
thx.culture.FormatNumber.percent = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPercent);
}
thx.culture.FormatNumber.permille = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPermille);
}
thx.culture.FormatNumber.currency = function(v,symbol,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.currency,culture.currency.patternNegative,culture.currency.patternPositive,culture,"$",symbol == null?culture.currencySymbol:symbol);
}
thx.culture.FormatNumber["int"] = function(v,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.decimal(v,0,culture);
}
thx.culture.FormatNumber.digits = function(v,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.processDigits(v,culture.digits);
}
thx.culture.FormatNumber.crunch = function(v,decimals,info,negative,positive,culture,symbol,replace) {
	if(Math.isNaN(v)) return culture.symbolNaN; else if(!Math.isFinite(v)) return v == Math.NEGATIVE_INFINITY?culture.symbolNegInf:culture.symbolPosInf;
	var fv = thx.culture.FormatNumber.value(v,info,decimals == null?info.decimals:decimals < 0?0:decimals,culture.digits);
	if(symbol != null) return StringTools.replace(StringTools.replace(v < 0?negative:positive,"n",fv),symbol,replace); else return StringTools.replace(v < 0?negative:positive,"n",fv);
}
thx.culture.FormatNumber.processDigits = function(s,digits) {
	if(digits == null) return s;
	var o = [];
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		o.push(digits[Std.parseInt(s.substr(i,1))]);
	}
	return o.join("");
}
thx.culture.FormatNumber.value = function(v,info,decimals,digits) {
	var fv = "" + Math.abs(v);
	var pos = fv.indexOf("E");
	if(pos > 0) {
		var e = Std.parseInt(fv.substr(pos + 1));
		var ispos = true;
		if(e < 0) {
			ispos = false;
			e = -e;
		}
		var s = StringTools.replace(fv.substr(0,pos),".","");
		if(ispos) fv = StringTools.rpad(s,"0",e + 1); else fv = "0" + StringTools.rpad(".","0",e) + s;
	}
	var parts = fv.split(".");
	var temp = parts[0];
	var intparts = [];
	var group = 0;
	while(true) {
		if(temp.length == 0) break;
		var len = info.groups[group];
		if(temp.length <= len) {
			intparts.unshift(thx.culture.FormatNumber.processDigits(temp,digits));
			break;
		}
		intparts.unshift(thx.culture.FormatNumber.processDigits(temp.substr(-len),digits));
		temp = temp.substr(0,-len);
		if(group < info.groups.length - 1) group++;
	}
	var intpart = intparts.join(info.groupsSeparator);
	if(decimals > 0) {
		var decpart = parts.length == 1?StringTools.lpad("","0",decimals):parts[1].length > decimals?parts[1].substr(0,decimals):StringTools.rpad(parts[1],"0",decimals);
		return intpart + info.decimalsSeparator + thx.culture.FormatNumber.processDigits(decpart,digits);
	} else return intpart;
}
thx.culture.FormatNumber.prototype = {
	__class__: thx.culture.FormatNumber
}
rg.graph.HeaviestNodeLayer = $hxClasses["rg.graph.HeaviestNodeLayer"] = function() {
}
rg.graph.HeaviestNodeLayer.__name__ = ["rg","graph","HeaviestNodeLayer"];
rg.graph.HeaviestNodeLayer.prototype = {
	lay: function(graph) {
		var layers = [], nodes = Arrays.order(Iterators.array(Iterators.array(graph.nodes.iterator()).iterator()),function(a,b) {
			return Floats.compare(b.positiveWeight(),a.positiveWeight());
		});
		var getLayer = function(index) {
			var layer = layers[index];
			if(null == layer) layer = layers[index] = [];
			return layer;
		};
		var addAt = (function($this) {
			var $r;
			var addAt = null;
			addAt = function(node,lvl) {
				if(!nodes.remove(node)) return;
				var layer = getLayer(lvl);
				layer.push(node.id);
				var $it0 = node.graph.edges.positives(node);
				while( $it0.hasNext() ) {
					var edge = $it0.next();
					addAt(edge.head,lvl + 1);
				}
			};
			$r = addAt;
			return $r;
		}(this));
		while(nodes.length > 0) addAt(nodes[0],0);
		var _g = 0;
		while(_g < layers.length) {
			var layer = layers[_g];
			++_g;
			Arrays.order(Iterators.array(layer.iterator()),function(ida,idb) {
				return Floats.compare(graph.nodes.get(idb).positiveWeight(),graph.nodes.get(ida).positiveWeight());
			});
		}
		return layers;
	}
	,__class__: rg.graph.HeaviestNodeLayer
}
var Std = $hxClasses["Std"] = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype = {
	__class__: Std
}
var js = js || {}
js.Lib = $hxClasses["js.Lib"] = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype = {
	__class__: js.Lib
}
thx.js.Group = $hxClasses["thx.js.Group"] = function(nodes) {
	this.nodes = nodes;
}
thx.js.Group.__name__ = ["thx","js","Group"];
thx.js.Group.current = null;
thx.js.Group.merge = function(source,target) {
	if(target.length != source.length) throw "Group length not equal";
	var _g1 = 0, _g = target.length;
	while(_g1 < _g) {
		var i = _g1++;
		var s = source[i];
		var t = target[i];
		if(s.parentNode != t.parentNode) throw "parentNodes not the same!"; else if(s.nodes.length != t.nodes.length) throw "node length mismatch!"; else {
			var _g3 = 0, _g2 = t.nodes.length;
			while(_g3 < _g2) {
				var i1 = _g3++;
				if(null == t.nodes[i1]) t.nodes[i1] = s.nodes[i1];
			}
		}
	}
	return target;
}
thx.js.Group.prototype = {
	parentNode: null
	,nodes: null
	,each: function(f) {
		var _g1 = 0, _g = this.nodes.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(null != this.nodes[i]) f(thx.js.Group.current = this.nodes[i],i);
		}
	}
	,iterator: function() {
		return this.nodes.iterator();
	}
	,get: function(i) {
		return this.nodes[i];
	}
	,count: function() {
		return this.nodes.length;
	}
	,push: function(node) {
		this.nodes.push(node);
	}
	,sort: function(comparator) {
		this.nodes.sort(comparator);
	}
	,__class__: thx.js.Group
}
thx.js.BaseSelection = $hxClasses["thx.js.BaseSelection"] = function(groups) {
	this.groups = groups;
}
thx.js.BaseSelection.__name__ = ["thx","js","BaseSelection"];
thx.js.BaseSelection.listenerEnterLeave = function(f,dom,i) {
	var e = thx.js.Dom.event, target = e.relatedTarget;
	if(null == target || thx.js.BaseSelection.isChild(dom,target)) return;
	f(dom,i);
}
thx.js.BaseSelection.isChild = function(parent,child) {
	if(child == parent) return false;
	while(child != null) {
		child = child.parentNode;
		if(child == parent) return true;
	}
	return false;
}
thx.js.BaseSelection.addEvent = function(node,typo,handler,capture) {
	node.addEventListener(typo,handler,capture);
}
thx.js.BaseSelection.removeEvent = function(node,typo,type,capture) {
	node.removeEventListener(typo,Reflect.field(node,"__on" + type),capture);
}
thx.js.BaseSelection.bindJoin = function(join,group,groupData,update,enter,exit) {
	var n = group.nodes.length, m = groupData.length, updateHtmlDoms = [], exitHtmlDoms = [], enterHtmlDoms = [], node, nodeData;
	var nodeByKey = new Hash(), keys = [], key, j = groupData.length;
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		node = group.nodes[i];
		key = join(Reflect.field(node,"__data__"),i);
		if(nodeByKey.exists(key)) exitHtmlDoms[j++] = node; else nodeByKey.set(key,node);
		keys.push(key);
	}
	var _g = 0;
	while(_g < m) {
		var i = _g++;
		node = nodeByKey.get(key = join(nodeData = groupData[i],i));
		if(null != node) {
			node["__data__"] = nodeData;
			updateHtmlDoms[i] = node;
			enterHtmlDoms[i] = exitHtmlDoms[i] = null;
		} else {
			node = { __data__ : nodeData};
			enterHtmlDoms[i] = node;
			updateHtmlDoms[i] = exitHtmlDoms[i] = null;
		}
		nodeByKey.remove(key);
	}
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		if(nodeByKey.exists(keys[i])) exitHtmlDoms[i] = group.nodes[i];
	}
	var enterGroup = new thx.js.Group(enterHtmlDoms);
	enterGroup.parentNode = group.parentNode;
	enter.push(enterGroup);
	var updateGroup = new thx.js.Group(updateHtmlDoms);
	updateGroup.parentNode = group.parentNode;
	update.push(updateGroup);
	var exitGroup = new thx.js.Group(exitHtmlDoms);
	exitGroup.parentNode = group.parentNode;
	exit.push(exitGroup);
}
thx.js.BaseSelection.bind = function(group,groupData,update,enter,exit) {
	var n0 = Ints.min(group.nodes.length,groupData.length), n1 = Ints.max(group.nodes.length,groupData.length), updateHtmlDoms = [], exitHtmlDoms = [], enterHtmlDoms = [], node, nodeData;
	var _g = 0;
	while(_g < n0) {
		var i = _g++;
		node = group.nodes[i];
		nodeData = groupData[i];
		if(null != node) {
			node["__data__"] = nodeData;
			updateHtmlDoms[i] = node;
			enterHtmlDoms[i] = exitHtmlDoms[i] = null;
		} else {
			enterHtmlDoms[i] = { __data__ : nodeData};
			updateHtmlDoms[i] = exitHtmlDoms[i] = null;
		}
	}
	var _g1 = n0, _g = groupData.length;
	while(_g1 < _g) {
		var i = _g1++;
		node = { __data__ : groupData[i]};
		enterHtmlDoms[i] = node;
		updateHtmlDoms[i] = exitHtmlDoms[i] = null;
	}
	var _g = groupData.length;
	while(_g < n1) {
		var i = _g++;
		exitHtmlDoms[i] = group.nodes[i];
		enterHtmlDoms[i] = updateHtmlDoms[i] = null;
	}
	var enterGroup = new thx.js.Group(enterHtmlDoms);
	enterGroup.parentNode = group.parentNode;
	enter.push(enterGroup);
	var updateGroup = new thx.js.Group(updateHtmlDoms);
	updateGroup.parentNode = group.parentNode;
	update.push(updateGroup);
	var exitGroup = new thx.js.Group(exitHtmlDoms);
	exitGroup.parentNode = group.parentNode;
	exit.push(exitGroup);
}
thx.js.BaseSelection.prototype = {
	parentNode: null
	,groups: null
	,select: function(selector) {
		return this._select(function(el) {
			return thx.js.Dom.selectionEngine.select(selector,el);
		});
	}
	,selectAll: function(selector) {
		return this._selectAll(function(el) {
			return thx.js.Dom.selectionEngine.selectAll(selector,el);
		});
	}
	,_this: function() {
		return this;
	}
	,append: function(name) {
		var qname = thx.xml.Namespace.qualify(name);
		var append = function(node) {
			var n = js.Lib.document.createElement(name);
			node.appendChild(n);
			return n;
		};
		var appendNS = function(node) {
			var n = js.Lib.document.createElementNS(qname.space,qname.local);
			node.appendChild(n);
			return n;
		};
		return this._select(null == qname?append:appendNS);
	}
	,remove: function() {
		return this.eachNode(function(node,i) {
			var parent = node.parentNode;
			if(null != parent) parent.removeChild(node);
		});
	}
	,eachNode: function(f) {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			group.each(f);
		}
		return this;
	}
	,insert: function(name,before,beforeSelector) {
		var qname = thx.xml.Namespace.qualify(name);
		var insertDom = function(node) {
			var n = js.Lib.document.createElement(name);
			node.insertBefore(n,null != before?before:thx.js.Dom.select(beforeSelector).node());
			return n;
		};
		var insertNsDom = function(node) {
			var n = js.Lib.document.createElementNS(qname.space,qname.local);
			node.insertBefore(n,null != before?before:thx.js.Dom.select(beforeSelector).node());
			return n;
		};
		return this._select(null == qname?insertDom:insertNsDom);
	}
	,sortNode: function(comparator) {
		var m = this.groups.length;
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			var group = this.groups[i];
			group.nodes.sort(comparator);
			var n = group.nodes.length;
			var prev = group.nodes[0];
			var _g1 = 1;
			while(_g1 < n) {
				var j = _g1++;
				var node = group.nodes[j];
				if(null != node) {
					if(null != prev) prev.parentNode.insertBefore(node,prev.nextSibling);
					prev = node;
				}
			}
		}
		return this;
	}
	,firstNode: function(f) {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node = $it0.next();
				if(null != node) return f(node);
			}
		}
		return null;
	}
	,node: function() {
		return this.firstNode(function(n) {
			return n;
		});
	}
	,empty: function() {
		return null == this.firstNode(function(n) {
			return n;
		});
	}
	,filterNode: function(f) {
		var subgroups = [], subgroup;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			var sg = new thx.js.Group(subgroup = []);
			sg.parentNode = group.parentNode;
			subgroups.push(sg);
			var i = -1;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node = $it0.next();
				if(null != node && f(node,++i)) subgroup.push(node);
			}
		}
		return this.createSelection(subgroups);
	}
	,onNode: function(type,listener,capture) {
		if(capture == null) capture = false;
		var i = type.indexOf("."), typo = i < 0?type:type.substr(0,i);
		if((typo == "mouseenter" || typo == "mouseleave") && !thx.js.ClientHost.isIE()) {
			listener = (function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(thx.js.BaseSelection.listenerEnterLeave,listener);
			if(typo == "mouseenter") typo = "mouseover"; else typo = "mouseout";
		}
		return this.eachNode(function(n,i1) {
			var l = function(e) {
				var o = thx.js.Dom.event;
				thx.js.Dom.event = e;
				try {
					listener(n,i1);
				} catch( e1 ) {
				}
				thx.js.Dom.event = o;
			};
			if(null != Reflect.field(n,"__on" + type)) {
				n.removeEventListener(typo,Reflect.field(n,"__on" + type),capture);
				Reflect.deleteField(n,"__on" + type);
			}
			if(null != listener) {
				n["__on" + type] = l;
				n.addEventListener(typo,l,capture);
			}
		});
	}
	,createSelection: function(groups) {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "Selection.hx", lineNumber : 634, className : "thx.js.BaseSelection", methodName : "createSelection"});
			return $r;
		}(this));
	}
	,_select: function(selectf) {
		var subgroups = [], subgroup, subnode, node;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			subgroups.push(subgroup = new thx.js.Group([]));
			subgroup.parentNode = group.parentNode;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node1 = $it0.next();
				if(null != node1) {
					subgroup.parentNode = node1;
					subgroup.nodes.push(subnode = selectf(node1));
					if(null != subnode) subnode["__data__"] = Reflect.field(node1,"__data__");
				} else subgroup.nodes.push(null);
			}
		}
		return this.createSelection(subgroups);
	}
	,_selectAll: function(selectallf) {
		var subgroups = [], subgroup;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node = $it0.next();
				if(null != node) {
					subgroups.push(subgroup = new thx.js.Group(selectallf(node)));
					subgroup.parentNode = node;
				}
			}
		}
		return this.createSelection(subgroups);
	}
	,__class__: thx.js.BaseSelection
}
thx.js.UnboundSelection = $hxClasses["thx.js.UnboundSelection"] = function(groups) {
	thx.js.BaseSelection.call(this,groups);
}
thx.js.UnboundSelection.__name__ = ["thx","js","UnboundSelection"];
thx.js.UnboundSelection.__super__ = thx.js.BaseSelection;
thx.js.UnboundSelection.prototype = $extend(thx.js.BaseSelection.prototype,{
	html: function() {
		return new thx.js.AccessHtml(this);
	}
	,text: function() {
		return new thx.js.AccessText(this);
	}
	,attr: function(name) {
		return new thx.js.AccessAttribute(name,this);
	}
	,classed: function() {
		return new thx.js.AccessClassed(this);
	}
	,property: function(name) {
		return new thx.js.AccessProperty(name,this);
	}
	,style: function(name) {
		return new thx.js.AccessStyle(name,this);
	}
	,transition: function() {
		return new thx.js.UnboundTransition(this);
	}
	,data: function(d,join) {
		var update = [], enter = [], exit = [];
		if(null == join) {
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				thx.js.BaseSelection.bind(group,d,update,enter,exit);
			}
		} else {
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				thx.js.BaseSelection.bindJoin(join,group,d,update,enter,exit);
			}
		}
		return new thx.js.DataChoice(update,enter,exit);
	}
	,selectAllData: function(selector) {
		var selection = this.selectAll(selector);
		return new thx.js.ResumeSelection(selection.groups);
	}
	,__class__: thx.js.UnboundSelection
});
thx.js.Selection = $hxClasses["thx.js.Selection"] = function(groups) {
	thx.js.UnboundSelection.call(this,groups);
}
thx.js.Selection.__name__ = ["thx","js","Selection"];
thx.js.Selection.__properties__ = {get_currentNode:"getCurrentNode",get_current:"getCurrent"}
thx.js.Selection.current = null;
thx.js.Selection.currentNode = null;
thx.js.Selection.create = function(groups) {
	return new thx.js.Selection(groups);
}
thx.js.Selection.getCurrent = function() {
	return thx.js.Dom.selectNode(thx.js.Group.current);
}
thx.js.Selection.getCurrentNode = function() {
	return thx.js.Group.current;
}
thx.js.Selection.__super__ = thx.js.UnboundSelection;
thx.js.Selection.prototype = $extend(thx.js.UnboundSelection.prototype,{
	createSelection: function(groups) {
		return new thx.js.Selection(groups);
	}
	,__class__: thx.js.Selection
});
thx.js.ISelectorEngine = $hxClasses["thx.js.ISelectorEngine"] = function() { }
thx.js.ISelectorEngine.__name__ = ["thx","js","ISelectorEngine"];
thx.js.ISelectorEngine.prototype = {
	select: null
	,selectAll: null
	,__class__: thx.js.ISelectorEngine
}
thx.js.SizzleEngine = $hxClasses["thx.js.SizzleEngine"] = function() {
}
thx.js.SizzleEngine.__name__ = ["thx","js","SizzleEngine"];
thx.js.SizzleEngine.__interfaces__ = [thx.js.ISelectorEngine];
thx.js.SizzleEngine.prototype = {
	select: function(selector,node) {
		return thx.js.Sizzle.select(selector,node)[0];
	}
	,selectNode: function(n,p) {
		return thx.js.Sizzle.select(n,p)[0];
	}
	,selectAll: function(selector,node) {
		return thx.js.Sizzle.uniqueSort(thx.js.Sizzle.select(selector,node));
	}
	,__class__: thx.js.SizzleEngine
}
thx.js.Dom = $hxClasses["thx.js.Dom"] = function() { }
thx.js.Dom.__name__ = ["thx","js","Dom"];
thx.js.Dom.select = function(selector) {
	return thx.js.Dom.doc.select(selector);
}
thx.js.Dom.selectAll = function(selector) {
	return thx.js.Dom.doc.selectAll(selector);
}
thx.js.Dom.selectNode = function(node) {
	return thx.js.Selection.create([new thx.js.Group([node])]);
}
thx.js.Dom.selectNodes = function(nodes) {
	return thx.js.Selection.create([new thx.js.Group(nodes)]);
}
thx.js.Dom.selectNodeData = function(node) {
	return thx.js.ResumeSelection.create([new thx.js.Group([node])]);
}
thx.js.Dom.event = null;
thx.js.Dom.prototype = {
	__class__: thx.js.Dom
}
rg.visualization.VisualizationFunnelChart = $hxClasses["rg.visualization.VisualizationFunnelChart"] = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
}
rg.visualization.VisualizationFunnelChart.__name__ = ["rg","visualization","VisualizationFunnelChart"];
rg.visualization.VisualizationFunnelChart.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationFunnelChart.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	info: null
	,title: null
	,chart: null
	,init: function() {
		var me = this;
		var panelChart = this.layout.getPanel(this.layout.mainPanelName);
		this.chart = new rg.svg.chart.FunnelChart(panelChart);
		this.baseChart = this.chart;
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		if(null != this.info.label.datapoint) this.chart.labelDataPoint = this.info.label.datapoint;
		if(null != this.info.label.datapoint) this.chart.labelDataPointOver = this.info.label.datapointover;
		if(null != this.info.label.arrow) this.chart.labelArrow = this.info.label.arrow;
		if(null != this.info.click) this.chart.click = this.info.click;
		this.chart.padding = this.info.padding;
		this.chart.flatness = this.info.flatness;
		var $e = (this.info.effect);
		switch( $e[1] ) {
		case 1:
			var v = $e[2];
			this.chart.displayGradient = true;
			this.chart.gradientLightness = v;
			break;
		case 0:
			this.chart.displayGradient = false;
			break;
		}
		this.chart.arrowSize = this.info.arrowSize;
		if(null != this.info.label.title) {
			var panelContextTitle = this.layout.getContext("title");
			if(null == panelContextTitle) return;
			this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
		}
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables);
		var data1 = rg.util.DataPoints.filterByIndependents(rg.util.DataPoints.filterByDependents(data,this.dependentVariables),this.independentVariables);
		if(null != this.info.sortDataPoint) data1.sort(this.info.sortDataPoint);
		if(null != this.title) {
			if(null != this.info.label.title) {
				this.title.setText(this.info.label.title(this.variables,data1));
				this.layout.suggestSize("title",this.title.idealHeight());
			} else this.layout.suggestSize("title",0);
		}
		if(null != this.info.sortDataPoint) data1.sort(this.info.sortDataPoint);
		this.chart.init();
		this.chart.data(data1);
	}
	,destroy: function() {
		this.chart.destroy();
		if(null != this.title) this.title.destroy();
		rg.visualization.VisualizationSvg.prototype.destroy.call(this);
	}
	,__class__: rg.visualization.VisualizationFunnelChart
});
thx.culture.Language = $hxClasses["thx.culture.Language"] = function() { }
thx.culture.Language.__name__ = ["thx","culture","Language"];
thx.culture.Language.__properties__ = {get_languages:"getLanguages"}
thx.culture.Language.languages = null;
thx.culture.Language.getLanguages = function() {
	if(null == thx.culture.Language.languages) thx.culture.Language.languages = new Hash();
	return thx.culture.Language.languages;
}
thx.culture.Language.get = function(name) {
	return thx.culture.Language.getLanguages().get(name.toLowerCase());
}
thx.culture.Language.names = function() {
	return thx.culture.Language.getLanguages().keys();
}
thx.culture.Language.add = function(language) {
	if(!thx.culture.Language.getLanguages().exists(language.iso2)) thx.culture.Language.getLanguages().set(language.iso2,language);
}
thx.culture.Language.__super__ = thx.culture.Info;
thx.culture.Language.prototype = $extend(thx.culture.Info.prototype,{
	__class__: thx.culture.Language
});
rg.info.InfoCartesianChart = $hxClasses["rg.info.InfoCartesianChart"] = function() {
	this.animation = new rg.info.InfoAnimation();
	this.label = new rg.info.InfoLabelAxis();
	this.displayMinorTick = function(_) {
		return true;
	};
	this.displayMajorTick = function(_) {
		return true;
	};
	this.displayLabelTick = function(_) {
		return true;
	};
	this.displayAnchorLineTick = function(_) {
		return false;
	};
	this.displayMinorRule = function(_) {
		return false;
	};
	this.displayMajorRule = function(_) {
		return false;
	};
	this.displayAnchorLineRule = function(_) {
		return false;
	};
	this.labelOrientation = function(_) {
		return null;
	};
	this.labelAnchor = function(_) {
		return null;
	};
	this.labelAngle = function(_) {
		return null;
	};
	this.lengthTickMinor = 2;
	this.lengthTickMajor = 5;
	this.paddingTickMinor = 1;
	this.paddingTickMajor = 1;
	this.paddingLabel = 10;
}
rg.info.InfoCartesianChart.__name__ = ["rg","info","InfoCartesianChart"];
rg.info.InfoCartesianChart.filters = function() {
	return [{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "animation", value : rg.info.Info.feed(new rg.info.InfoAnimation(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelAxis(),v)}];
	}},{ field : "displaytickmarks", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMinorTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v},{ field : "displayMajorTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v},{ field : "displayLabelTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displaytickminor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMinorTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displaytickmajor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMajorTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayticklabel", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayLabelTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayanchorlinetick", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayAnchorLineTick", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayrules", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMinorRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v},{ field : "displayMajorRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayruleminor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMinorRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayrulemajor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayMajorRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "displayanchorlinerule", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayAnchorLineRule", value : Std["is"](v,Bool)?function(_) {
			return v;
		}:v}];
	}},{ field : "lengthtick", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "lengthTickMajor", value : v},{ field : "lengthTickMinor", value : v}];
	}},{ field : "lengthtickminor", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "lengthTickMinor", value : v}];
	}},{ field : "lengthtickmajor", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "lengthTickMajor", value : v}];
	}},{ field : "paddingtick", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "paddingTickMajor", value : v},{ field : "paddingTickMinor", value : v}];
	}},{ field : "paddingtickminor", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "paddingTickMinor", value : v}];
	}},{ field : "paddingtickmajor", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "paddingTickMajor", value : v}];
	}},{ field : "paddingticklabel", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "paddingLabel", value : v}];
	}},{ field : "labelorientation", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "labelOrientation", value : Std["is"](v,String)?function(_) {
			return v;
		}:v}];
	}},{ field : "labelanchor", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "labelAnchor", value : Std["is"](v,String)?function(_) {
			return v;
		}:v}];
	}},{ field : "labelangle", validator : function(v) {
		return Reflect.isFunction(v) || Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "labelAngle", value : Std["is"](v,Float)?function(_) {
			return v;
		}:v}];
	}}];
}
rg.info.InfoCartesianChart.prototype = {
	animation: null
	,click: null
	,label: null
	,displayMinorTick: null
	,displayMajorTick: null
	,displayLabelTick: null
	,displayAnchorLineTick: null
	,displayMinorRule: null
	,displayMajorRule: null
	,displayAnchorLineRule: null
	,labelOrientation: null
	,labelAnchor: null
	,labelAngle: null
	,lengthTickMinor: null
	,lengthTickMajor: null
	,paddingTickMinor: null
	,paddingTickMajor: null
	,paddingLabel: null
	,__class__: rg.info.InfoCartesianChart
}
rg.info.InfoStreamGraph = $hxClasses["rg.info.InfoStreamGraph"] = function() {
	rg.info.InfoCartesianChart.call(this);
	this.segment = new rg.info.InfoSegment();
	this.interpolation = thx.svg.LineInterpolator.Cardinal();
	this.effect = rg.svg.chart.StreamEffect.GradientVertical(1.25);
}
rg.info.InfoStreamGraph.__name__ = ["rg","info","InfoStreamGraph"];
rg.info.InfoStreamGraph.filters = function() {
	return [{ field : "interpolation", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "interpolation", value : thx.svg.LineInterpolators.parse(v)}];
	}},{ field : "effect", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.StreamEffects.parse(v)}];
	}},{ field : "segmenton", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),{ on : v})}];
	}},{ field : "segment", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),v)}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoStreamGraph.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoStreamGraph.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	interpolation: null
	,effect: null
	,segment: null
	,__class__: rg.info.InfoStreamGraph
});
rg.svg.chart.GradientEffects = $hxClasses["rg.svg.chart.GradientEffects"] = function() { }
rg.svg.chart.GradientEffects.__name__ = ["rg","svg","chart","GradientEffects"];
rg.svg.chart.GradientEffects.canParse = function(d) {
	if(!Std["is"](d,String)) return false;
	var s = d, parts = s.toLowerCase().split(":");
	return (function($this) {
		var $r;
		switch(parts[0]) {
		case "gradient":case "noeffect":
			$r = true;
			break;
		default:
			$r = false;
		}
		return $r;
	}(this));
}
rg.svg.chart.GradientEffects.parse = function(s) {
	var parts = s.toLowerCase().split(":");
	switch(parts.shift()) {
	case "gradient":
		var lightness = 0.75, parameters = parts.pop();
		if(null != parameters) lightness = Std.parseFloat(parameters.split(",").shift());
		return rg.svg.chart.GradientEffect.Gradient(lightness);
	default:
		return rg.svg.chart.GradientEffect.NoEffect;
	}
}
rg.svg.chart.GradientEffects.prototype = {
	__class__: rg.svg.chart.GradientEffects
}
if(!chx.text) chx.text = {}
chx.text.Sprintf = $hxClasses["chx.text.Sprintf"] = function() { }
chx.text.Sprintf.__name__ = ["chx","text","Sprintf"];
chx.text.Sprintf.format = function(format,args) {
	if(format == null) return "";
	if(args == null) args = [];
	var destString = "";
	var argIndex = 0;
	var formatIndex = 0;
	var percentIndex = 0;
	var ch = 0;
	var value = null;
	var length = 0;
	var precision = 0;
	var properties = 0;
	var fieldCount = 0;
	var fieldOutcome;
	while(formatIndex < format.length) {
		percentIndex = format.indexOf("%",formatIndex);
		if(percentIndex == -1) {
			destString += format.substr(formatIndex);
			formatIndex = format.length;
		} else {
			destString += format.substr(formatIndex,percentIndex - formatIndex);
			fieldOutcome = "** sprintf: invalid format at " + argIndex + " **";
			length = properties = fieldCount = 0;
			precision = -1;
			formatIndex = percentIndex + 1;
			value = args[argIndex++];
			while(Std["is"](fieldOutcome,String) && formatIndex < format.length) {
				ch = format.charCodeAt(formatIndex++);
				switch(ch) {
				case 35:
					if(fieldCount == 0) properties |= 16; else fieldOutcome = "** sprintf: \"#\" came too late **";
					break;
				case 45:
					if(fieldCount == 0) properties |= 2; else fieldOutcome = "** sprintf: \"-\" came too late **";
					break;
				case 43:
					if(fieldCount == 0) properties |= 4; else fieldOutcome = "** sprintf: \"+\" came too late **";
					break;
				case 32:
					if(fieldCount == 0) properties |= 8; else fieldOutcome = "** sprintf: \" \" came too late **";
					break;
				case 46:
					if(fieldCount < 2) {
						fieldCount = 2;
						precision = 0;
					} else fieldOutcome = "** sprintf: \".\" came too late **";
					break;
				case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
					if(ch == 48 && fieldCount == 0) properties |= 1; else if(fieldCount == 3) fieldOutcome = "** sprintf: shouldn't have a digit after h,l,L **"; else if(fieldCount < 2) {
						fieldCount = 1;
						length = length * 10 + (ch - 48);
					} else precision = precision * 10 + (ch - 48);
					break;
				case 100:case 105:
					fieldOutcome = true;
					destString += chx.text.Sprintf.formatD(value,properties,length,precision);
					break;
				case 111:
					fieldOutcome = true;
					destString += chx.text.Sprintf.formatO(value,properties,length,precision);
					break;
				case 120:case 88:
					fieldOutcome = true;
					destString += chx.text.Sprintf.formatX(value,properties,length,precision,ch == 88);
					break;
				case 101:case 69:
					fieldOutcome = true;
					destString += chx.text.Sprintf.formatE(value,properties,length,precision,ch == 69);
					break;
				case 102:
					fieldOutcome = true;
					destString += chx.text.Sprintf.formatF(value,properties,length,precision);
					break;
				case 103:case 71:
					fieldOutcome = true;
					destString += chx.text.Sprintf.formatG(value,properties,length,precision,ch == 71);
					break;
				case 99:case 67:case 115:case 83:
					if(ch == 99 || ch == 67) precision = 1;
					fieldOutcome = true;
					destString += chx.text.Sprintf.formatS(value,properties,length,precision);
					break;
				case 37:
					fieldOutcome = true;
					destString += "%";
					argIndex--;
					break;
				default:
					fieldOutcome = "** sprintf: " + Std.string(ch - 48) + " not supported **";
				}
			}
			if(fieldOutcome != true) {
				if(chx.text.Sprintf.DEBUG) destString += fieldOutcome;
				if(chx.text.Sprintf.TRACE) haxe.Log.trace(fieldOutcome,{ fileName : "Sprintf.hx", lineNumber : 243, className : "chx.text.Sprintf", methodName : "format"});
			}
		}
	}
	return destString;
}
chx.text.Sprintf.finish = function(output,value,properties,length,precision,prefix) {
	if(prefix == null) prefix = "";
	if(prefix == null) prefix = "";
	if(value < 0) prefix = "-" + prefix; else if((properties & 4) != 0) prefix = "+" + prefix; else if((properties & 8) != 0) prefix = " " + prefix;
	if(length == 0 && precision > -1) {
		length = precision;
		properties |= 1;
	}
	while(output.length + prefix.length < length) if((properties & 2) != 0) output = output + " "; else if((properties & 1) != 0) output = "0" + output; else prefix = " " + prefix;
	return prefix + output;
}
chx.text.Sprintf.number = function(v) {
	if(v == null) return 0.;
	if(Std["is"](v,String)) {
		if(v == "") return 0.0;
		return Std.parseFloat(v);
	}
	if(Std["is"](v,Float)) {
		if(Math.isNaN(v)) return v;
		return v;
	}
	if(Std["is"](v,Int)) return v * 1.0;
	if(Std["is"](v,Bool)) return v?1.0:0.0;
	return Math.NaN;
}
chx.text.Sprintf.formatD = function(value,properties,length,precision) {
	var output = "";
	value = chx.text.Sprintf.number(value);
	if(precision != 0 || value != 0) output = Std.string(Math.floor(Math.abs(value)));
	while(output.length < precision) output = "0" + output;
	return chx.text.Sprintf.finish(output,value,properties,length,precision);
}
chx.text.Sprintf.formatO = function(value,properties,length,precision) {
	var output = "";
	var prefix = "";
	value = chx.text.Sprintf.number(value);
	if(precision != 0 && value != 0) output = value.toString(8);
	if((properties & 16) != 0) prefix = "0";
	while(output.length < precision) output = "0" + output;
	return chx.text.Sprintf.finish(output,value,properties,length,precision,prefix);
}
chx.text.Sprintf.formatX = function(value,properties,length,precision,upper) {
	var output = "";
	var prefix = "";
	value = chx.text.Sprintf.number(value);
	if(precision != 0 && value != 0) output = value.toString(16);
	if((properties & 16) != 0) prefix = "0x";
	while(output.length < precision) output = "0" + output;
	if(upper) {
		prefix = prefix.toUpperCase();
		output = output.toUpperCase();
	} else output = output.toLowerCase();
	return chx.text.Sprintf.finish(output,value,properties,length,precision,prefix);
}
chx.text.Sprintf.formatE = function(value,properties,length,precision,upper) {
	var output = "";
	var expCount = 0;
	value = chx.text.Sprintf.number(value);
	if(Math.abs(value) > 1) while(Math.abs(value) > 10) {
		value /= 10;
		expCount++;
	} else while(Math.abs(value) < 1) {
		value *= 10;
		expCount--;
	}
	var expCountStr = chx.text.Sprintf.format("%c%+.2d",[upper?"E":"e",expCount]);
	if((properties & 2) != 0) {
		output = chx.text.Sprintf.formatF(value,properties,1,precision) + expCountStr;
		while(output.length < length) output += " ";
	} else output = chx.text.Sprintf.formatF(value,properties,Std["int"](Math.max(length - expCountStr.length,0)),precision) + expCount;
	return output;
}
chx.text.Sprintf.formatF = function(value,properties,length,precision) {
	var output = "";
	var intPortion = "";
	var decPortion = "";
	if(precision == -1) precision = 6;
	var valStr = Std.string(value);
	if(valStr.indexOf(".") == -1) {
		intPortion = Std.string(Math.abs(chx.text.Sprintf.number(valStr)));
		decPortion = "0";
	} else {
		intPortion = Std.string(Math.abs(chx.text.Sprintf.number(valStr.substr(0,valStr.indexOf(".")))));
		decPortion = valStr.substr(valStr.indexOf(".") + 1);
	}
	if(chx.text.Sprintf.number(decPortion) == 0) {
		decPortion = "";
		while(decPortion.length < precision) decPortion += "0";
	} else {
		if(decPortion.length > precision) {
			var dec = Math.round(Math.pow(10,precision) * chx.text.Sprintf.number("0." + decPortion));
			if(Std.string(dec).length > precision && dec != 0) {
				decPortion = "0";
				intPortion = Std.string((Math.abs(chx.text.Sprintf.number(intPortion)) + 1) * (chx.text.Sprintf.number(intPortion) >= 0?1:-1));
			} else decPortion = Std.string(dec);
		}
		if(decPortion.length < precision) {
			decPortion = new String(decPortion);
			while(decPortion.length < precision) decPortion += "0";
		}
	}
	if(precision == 0) {
		output = intPortion;
		if((properties & 16) != 0) output += ".";
	} else output = intPortion + "." + decPortion;
	return chx.text.Sprintf.finish(output,Std.parseFloat(valStr),properties,length,precision,"");
}
chx.text.Sprintf.formatG = function(value,properties,length,precision,upper) {
	var out1 = chx.text.Sprintf.formatE(value,properties,1,precision,upper);
	var out2 = chx.text.Sprintf.formatF(value,properties,1,precision);
	if(out1.length < out2.length) return chx.text.Sprintf.formatE(value,properties,length,precision,upper); else return chx.text.Sprintf.formatF(value,properties,length,precision);
}
chx.text.Sprintf.formatS = function(value,properties,length,precision) {
	var output = Std.string(value);
	if(precision > 0 && precision < output.length) output = output.substr(0,precision);
	properties &= -30;
	return chx.text.Sprintf.finish(output,value,properties,length,precision,"");
}
chx.text.Sprintf.prototype = {
	__class__: chx.text.Sprintf
}
thx.culture.FormatParams = $hxClasses["thx.culture.FormatParams"] = function() { }
thx.culture.FormatParams.__name__ = ["thx","culture","FormatParams"];
thx.culture.FormatParams.cleanQuotes = function(p) {
	if(p.length <= 1) return p;
	var f = p.substr(0,1);
	if(("\"" == f || "'" == f) && p.substr(-1) == f) return p.substr(1,p.length - 2); else return p;
}
thx.culture.FormatParams.params = function(p,ps,alt) {
	if(null != ps && null != p) return [p].concat(ps);
	if((null == ps || ps.length == 0) && null == p) return [alt];
	if(null == ps || ps.length == 0) {
		var parts = p.split(":");
		return [parts[0]].concat(parts.length == 1?[]:parts[1].split(",").map(function(s,i) {
			if(0 == i) return s; else return thx.culture.FormatParams.cleanQuotes(s);
		}));
	}
	return ps;
}
thx.culture.FormatParams.prototype = {
	__class__: thx.culture.FormatParams
}
if(!rg.frame) rg.frame = {}
rg.frame.Frame = $hxClasses["rg.frame.Frame"] = function() {
	this.x = this.y = this.width = this.height = 0;
}
rg.frame.Frame.__name__ = ["rg","frame","Frame"];
rg.frame.Frame.prototype = {
	x: null
	,y: null
	,width: null
	,height: null
	,change: function() {
	}
	,setLayout: function(x,y,width,height) {
		if(this.x == x && this.y == y && this.width == width && this.height == height) return;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.change();
	}
	,toString: function() {
		return "[x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]";
	}
	,__class__: rg.frame.Frame
}
rg.frame.StackItem = $hxClasses["rg.frame.StackItem"] = function(disposition) {
	rg.frame.Frame.call(this);
	this.setDisposition(disposition);
}
rg.frame.StackItem.__name__ = ["rg","frame","StackItem"];
rg.frame.StackItem.__super__ = rg.frame.Frame;
rg.frame.StackItem.prototype = $extend(rg.frame.Frame.prototype,{
	disposition: null
	,parent: null
	,setParent: function(v) {
		if(null != this.parent) this.parent.removeChild(this);
		return this.parent = v;
	}
	,setDisposition: function(v) {
		this.disposition = v;
		if(null != this.parent) this.parent.reflow();
		return v;
	}
	,__class__: rg.frame.StackItem
	,__properties__: {set_disposition:"setDisposition"}
});
rg.svg.chart.ColorScaleMode = $hxClasses["rg.svg.chart.ColorScaleMode"] = { __ename__ : ["rg","svg","chart","ColorScaleMode"], __constructs__ : ["FromCssInterpolation","FromCss","Interpolation","Sequence","Fixed","Fun"] }
rg.svg.chart.ColorScaleMode.FromCssInterpolation = function(steps) { var $x = ["FromCssInterpolation",0,steps]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.FromCss = function(steps) { var $x = ["FromCss",1,steps]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.Interpolation = function(colors) { var $x = ["Interpolation",2,colors]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.Sequence = function(colors) { var $x = ["Sequence",3,colors]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.Fixed = function(color) { var $x = ["Fixed",4,color]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.svg.chart.ColorScaleMode.Fun = function(f) { var $x = ["Fun",5,f]; $x.__enum__ = rg.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.graph.GreedySwitchDecrosser = $hxClasses["rg.graph.GreedySwitchDecrosser"] = function() {
}
rg.graph.GreedySwitchDecrosser.__name__ = ["rg","graph","GreedySwitchDecrosser"];
rg.graph.GreedySwitchDecrosser.combined = function() {
	return { decross : function(layout) {
		layout = new rg.graph.GreedySwitchDecrosser().decross(layout);
		return new rg.graph.GreedySwitch2Decrosser().decross(layout);
	}};
}
rg.graph.GreedySwitchDecrosser.best = function() {
	return { decross : function(layout) {
		var attempts = [new rg.graph.GreedySwitchDecrosser().decross(layout),new rg.graph.GreedySwitch2Decrosser().decross(layout),rg.graph.GreedySwitchDecrosser.combined().decross(layout)];
		return Arrays.min(attempts,function(layout1) {
			return layout1.crossings();
		});
	}};
}
rg.graph.GreedySwitchDecrosser.prototype = {
	decross: function(layout) {
		var layers = layout.layers(), graph = layout.graph, newlayers, newlayout = layout;
		if(layers.length <= 1) return new rg.graph.GraphLayout(layout.graph,layers);
		var totbefore, crossings, len = layers.length - 1, a, b;
		do {
			newlayers = layers.map(function(arr,_) {
				return arr.copy();
			});
			newlayout = new rg.graph.GraphLayout(graph,layers);
			totbefore = newlayout.crossings();
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				a = newlayers[i];
				b = newlayers[i + 1];
				this.decrossPair(graph,a,b);
			}
			crossings = new rg.graph.GraphLayout(graph,newlayers).crossings();
			layers = newlayers;
		} while(totbefore > crossings);
		return newlayout;
	}
	,decrossPair: function(graph,a,b) {
		var tot = rg.graph.GraphLayout.arrayCrossings(graph,a,b), ntot = tot, t;
		do {
			tot = ntot;
			var _g1 = 0, _g = b.length - 1;
			while(_g1 < _g) {
				var i = _g1++;
				this.swap(b,i);
				if((t = rg.graph.GraphLayout.arrayCrossings(graph,a,b)) >= ntot) this.swap(b,i); else ntot = t;
			}
		} while(ntot < tot);
	}
	,swap: function(a,pos) {
		var v = a[pos];
		a[pos] = a[pos + 1];
		a[pos + 1] = v;
	}
	,__class__: rg.graph.GreedySwitchDecrosser
}
rg.visualization.VisualizationPieChart = $hxClasses["rg.visualization.VisualizationPieChart"] = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
}
rg.visualization.VisualizationPieChart.__name__ = ["rg","visualization","VisualizationPieChart"];
rg.visualization.VisualizationPieChart.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationPieChart.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	chart: null
	,title: null
	,info: null
	,init: function() {
		var me = this;
		var panelChart = this.layout.getPanel(this.layout.mainPanelName);
		this.chart = new rg.svg.chart.PieChart(panelChart);
		this.baseChart = this.chart;
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		this.chart.innerRadius = this.info.innerradius;
		this.chart.outerRadius = this.info.outerradius;
		this.chart.overRadius = this.info.overradius;
		this.chart.tooltipRadius = this.info.tooltipradius;
		var $e = (this.info.effect);
		switch( $e[1] ) {
		case 1:
			var v = $e[2];
			this.chart.displayGradient = true;
			this.chart.gradientLightness = v;
			break;
		case 0:
			this.chart.displayGradient = false;
			break;
		}
		this.chart.labelDataPoint = this.info.label.datapoint;
		this.chart.labelDataPointOver = this.info.label.datapointover;
		this.chart.labelRadius = this.info.labelradius;
		this.chart.labelOrientation = this.info.labelorientation;
		this.chart.labelDontFlip = this.info.dontfliplabel;
		this.chart.animated = this.info.animation.animated;
		this.chart.animationDuration = this.info.animation.duration;
		this.chart.animationEase = this.info.animation.ease;
		this.chart.animationDelay = this.info.animation.delay;
		if(null != this.info.click) this.chart.mouseClick = this.info.click;
		if(null != this.info.label.title) {
			var panelContextTitle = this.layout.getContext("title");
			if(null == panelContextTitle) return;
			this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
		}
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables);
		if(null != this.title) {
			if(null != this.info.label.title) {
				this.title.setText(this.info.label.title(this.variables,data));
				this.layout.suggestSize("title",this.title.idealHeight());
			} else this.layout.suggestSize("title",0);
		}
		if(null != this.info.sortDataPoint) data.sort(this.info.sortDataPoint);
		this.chart.init();
		this.chart.data(data);
	}
	,destroy: function() {
		this.chart.destroy();
		if(null != this.title) this.title.destroy();
		rg.visualization.VisualizationSvg.prototype.destroy.call(this);
	}
	,__class__: rg.visualization.VisualizationPieChart
});
rg.axis.IAxis = $hxClasses["rg.axis.IAxis"] = function() { }
rg.axis.IAxis.__name__ = ["rg","axis","IAxis"];
rg.axis.IAxis.prototype = {
	scale: null
	,ticks: null
	,max: null
	,min: null
	,createStats: null
	,__class__: rg.axis.IAxis
}
rg.axis.IAxisDiscrete = $hxClasses["rg.axis.IAxisDiscrete"] = function() { }
rg.axis.IAxisDiscrete.__name__ = ["rg","axis","IAxisDiscrete"];
rg.axis.IAxisDiscrete.__interfaces__ = [rg.axis.IAxis];
rg.axis.IAxisDiscrete.prototype = {
	scaleDistribution: null
	,range: null
	,__class__: rg.axis.IAxisDiscrete
	,__properties__: {set_scaleDistribution:"setScaleDistribution"}
}
rg.axis.IAxisOrdinal = $hxClasses["rg.axis.IAxisOrdinal"] = function() { }
rg.axis.IAxisOrdinal.__name__ = ["rg","axis","IAxisOrdinal"];
rg.axis.IAxisOrdinal.__interfaces__ = [rg.axis.IAxisDiscrete];
rg.axis.IAxisOrdinal.prototype = {
	first: null
	,last: null
	,allTicks: null
	,values: null
	,__class__: rg.axis.IAxisOrdinal
}
rg.axis.AxisOrdinal = $hxClasses["rg.axis.AxisOrdinal"] = function() {
	this.setScaleDistribution(rg.axis.ScaleDistribution.ScaleFit);
}
rg.axis.AxisOrdinal.__name__ = ["rg","axis","AxisOrdinal"];
rg.axis.AxisOrdinal.__interfaces__ = [rg.axis.IAxisOrdinal];
rg.axis.AxisOrdinal.prototype = {
	scaleDistribution: null
	,toTickmark: function(start,end,value) {
		var r = this.range(start,end);
		return new rg.axis.TickmarkOrdinal(r.indexOf(value),r,null,this.scaleDistribution);
	}
	,ticks: function(start,end,upperBound) {
		if(0 == upperBound) return [];
		var ticks = rg.axis.TickmarkOrdinal.fromArray(this.range(start,end),this.scaleDistribution);
		return rg.axis.Tickmarks.bound(ticks,upperBound);
	}
	,range: function(start,end) {
		var values = this.values(), s = values.indexOf(start), e = values.indexOf(end);
		if(s < 0) throw new thx.error.Error("the start bound '{0}' is not part of the acceptable values {1}",[start,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 41, className : "rg.axis.AxisOrdinal", methodName : "range"});
		if(e < 0) throw new thx.error.Error("the end bound '{0}' is not part of the acceptable values {1}",[end,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 43, className : "rg.axis.AxisOrdinal", methodName : "range"});
		return values.slice(s,e + 1);
	}
	,scale: function(start,end,v) {
		var values = this.values(), s = values.indexOf(start), e = values.indexOf(end), p = values.indexOf(v);
		if(s < 0) throw new thx.error.Error("the start bound '{0}' is not part of the values {1}",[start,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 54, className : "rg.axis.AxisOrdinal", methodName : "scale"});
		if(e < 0) throw new thx.error.Error("the end bound '{0}' is not part of the values {1}",[end,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 56, className : "rg.axis.AxisOrdinal", methodName : "scale"});
		if(p < 0) throw new thx.error.Error("the value '{0}' is not part of the values {1}",[v,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 58, className : "rg.axis.AxisOrdinal", methodName : "scale"});
		return rg.axis.ScaleDistributions.distribute(this.scaleDistribution,p - s,e - s + 1);
	}
	,first: function() {
		return this.values()[0];
	}
	,last: function() {
		return Arrays.last(this.values());
	}
	,values: function() {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "AxisOrdinal.hx", lineNumber : 64, className : "rg.axis.AxisOrdinal", methodName : "values"});
			return $r;
		}(this));
	}
	,allTicks: function() {
		var me = this;
		var f = this.first(), l = this.last();
		return this.range(f,l).map(function(d,i) {
			return me.toTickmark(f,l,d);
		});
	}
	,setScaleDistribution: function(v) {
		return this.scaleDistribution = v;
	}
	,min: function(stats,meta) {
		return this.values()[0];
	}
	,max: function(stats,meta) {
		return Arrays.last(this.values());
	}
	,createStats: function(type) {
		return new rg.axis.Stats(type);
	}
	,__class__: rg.axis.AxisOrdinal
	,__properties__: {set_scaleDistribution:"setScaleDistribution"}
}
rg.axis.AxisOrdinalFixedValues = $hxClasses["rg.axis.AxisOrdinalFixedValues"] = function(arr) {
	rg.axis.AxisOrdinal.call(this);
	this._values = arr;
}
rg.axis.AxisOrdinalFixedValues.__name__ = ["rg","axis","AxisOrdinalFixedValues"];
rg.axis.AxisOrdinalFixedValues.__super__ = rg.axis.AxisOrdinal;
rg.axis.AxisOrdinalFixedValues.prototype = $extend(rg.axis.AxisOrdinal.prototype,{
	_values: null
	,values: function() {
		return this._values;
	}
	,__class__: rg.axis.AxisOrdinalFixedValues
});
rg.axis.AxisGroupByTime = $hxClasses["rg.axis.AxisGroupByTime"] = function(groupby) {
	rg.axis.AxisOrdinalFixedValues.call(this,rg.axis.AxisGroupByTime.valuesByGroup(groupby));
	this.groupBy = groupby;
}
rg.axis.AxisGroupByTime.__name__ = ["rg","axis","AxisGroupByTime"];
rg.axis.AxisGroupByTime.valuesByGroup = function(groupby) {
	return Ints.range(rg.axis.AxisGroupByTime.defaultMin(groupby),rg.axis.AxisGroupByTime.defaultMax(groupby) + 1);
}
rg.axis.AxisGroupByTime.defaultMin = function(periodicity) {
	switch(periodicity) {
	case "minute":case "hour":case "week":case "month":
		return 0;
	case "day":
		return 1;
	default:
		throw new thx.error.Error("invalid periodicity '{0}' for groupBy min",null,periodicity,{ fileName : "AxisGroupByTime.hx", lineNumber : 34, className : "rg.axis.AxisGroupByTime", methodName : "defaultMin"});
	}
}
rg.axis.AxisGroupByTime.defaultMax = function(periodicity) {
	switch(periodicity) {
	case "minute":
		return 59;
	case "hour":
		return 23;
	case "day":
		return 31;
	case "week":
		return 6;
	case "month":
		return 11;
	default:
		throw new thx.error.Error("invalid periodicity '{0}' for groupBy max",null,periodicity,{ fileName : "AxisGroupByTime.hx", lineNumber : 48, className : "rg.axis.AxisGroupByTime", methodName : "defaultMax"});
	}
}
rg.axis.AxisGroupByTime.__super__ = rg.axis.AxisOrdinalFixedValues;
rg.axis.AxisGroupByTime.prototype = $extend(rg.axis.AxisOrdinalFixedValues.prototype,{
	groupBy: null
	,__class__: rg.axis.AxisGroupByTime
});
chx.lang.NullPointerException = $hxClasses["chx.lang.NullPointerException"] = function(msg,cause) {
	chx.lang.Exception.call(this,msg,cause);
}
chx.lang.NullPointerException.__name__ = ["chx","lang","NullPointerException"];
chx.lang.NullPointerException.__super__ = chx.lang.Exception;
chx.lang.NullPointerException.prototype = $extend(chx.lang.Exception.prototype,{
	__class__: chx.lang.NullPointerException
});
rg.graph.GreedyCyclePartitioner = $hxClasses["rg.graph.GreedyCyclePartitioner"] = function() {
}
rg.graph.GreedyCyclePartitioner.__name__ = ["rg","graph","GreedyCyclePartitioner"];
rg.graph.GreedyCyclePartitioner.findMaxPositiveOverNegative = function(graph) {
	var n = null, l = 0;
	var $it0 = graph.nodes.collection.iterator();
	while( $it0.hasNext() ) {
		var node = $it0.next();
		var diff = node.graph.edges.positiveCount(node) - node.graph.edges.negativeCount(node);
		if(null == n || l < diff) {
			n = node;
			l = diff;
		}
	}
	return n;
}
rg.graph.GreedyCyclePartitioner.prototype = {
	partition: function(graph) {
		var left = [], right = [], clone = graph.clone(), n;
		while(!(Iterators.count(clone.nodes.iterator()) == 0)) {
			while(null != (n = clone.findSink())) {
				var $it0 = n.graph.edges.negatives(n);
				while( $it0.hasNext() ) {
					var edge = $it0.next();
					right.unshift(graph.edges.get(edge.id));
					edge.graph.edges._remove(edge);
				}
				n.graph.nodes._remove(n);
			}
			var _g = 0, _g1 = clone.findIsolateds();
			while(_g < _g1.length) {
				var isolated = _g1[_g];
				++_g;
				isolated.graph.nodes._remove(isolated);
			}
			while(null != (n = clone.findSource())) {
				var $it1 = n.graph.edges.positives(n);
				while( $it1.hasNext() ) {
					var edge = $it1.next();
					left.push(graph.edges.get(edge.id));
					edge.graph.edges._remove(edge);
				}
				n.graph.nodes._remove(n);
			}
			if(!(Iterators.count(clone.nodes.iterator()) == 0)) {
				n = rg.graph.GreedyCyclePartitioner.findMaxPositiveOverNegative(clone);
				var $it2 = n.graph.edges.negatives(n);
				while( $it2.hasNext() ) {
					var edge = $it2.next();
					right.unshift(graph.edges.get(edge.id));
					edge.graph.edges._remove(edge);
				}
				var $it3 = n.graph.edges.positives(n);
				while( $it3.hasNext() ) {
					var edge = $it3.next();
					left.push(graph.edges.get(edge.id));
					edge.graph.edges._remove(edge);
				}
				n.graph.nodes._remove(n);
			}
		}
		return { left : left, right : right};
	}
	,__class__: rg.graph.GreedyCyclePartitioner
}
if(!rg.svg.widget) rg.svg.widget = {}
rg.svg.widget.Label = $hxClasses["rg.svg.widget.Label"] = function(container,dontflip,shadow,outline) {
	if(dontflip == null) dontflip = true;
	this.shadow = shadow;
	this.outline = outline;
	this.g = container.append("svg:g").attr("class").string("label");
	if(shadow) {
		this.gshadow = this.g.append("svg:g").attr("transform").string("translate(0,0)");
		this.gshadowrot = this.gshadow.append("svg:g");
		this.tshadow = this.gshadowrot.append("svg:text").attr("class").string("shadow" + (outline?"":" nooutline"));
	}
	this.gtext = this.g.append("svg:g");
	if(outline) this.toutline = this.gtext.append("svg:text").attr("class").string("outline" + (shadow?"":" noshadow"));
	var cls = Arrays.addIf(Arrays.addIf(["text"],!outline,"nooutline"),!shadow,"noshadow");
	this.ttext = this.gtext.append("svg:text").attr("class").string(cls.join(" "));
	this.dontFlip = dontflip;
	if(outline) this.setShadowOffset(1,1.25); else this.setShadowOffset(0.5,0.5);
	this.x = 0;
	this.y = 0;
	this.angle = 0;
	this.setOrientation(rg.svg.widget.LabelOrientation.FixedAngle(0));
	this.setAnchor(rg.svg.widget.GridAnchor.Center);
}
rg.svg.widget.Label.__name__ = ["rg","svg","widget","Label"];
rg.svg.widget.Label.prototype = {
	text: null
	,orientation: null
	,anchor: null
	,x: null
	,y: null
	,angle: null
	,dontFlip: null
	,shadowOffsetX: null
	,shadowOffsetY: null
	,shadow: null
	,outline: null
	,g: null
	,gshadow: null
	,gtext: null
	,gshadowrot: null
	,ttext: null
	,toutline: null
	,tshadow: null
	,addClass: function(name) {
		this.g.classed().add(name);
	}
	,removeClass: function(name) {
		this.g.classed().remove(name);
	}
	,getSize: function() {
		try {
			return this.g.node().getBBox();
		} catch( e ) {
			return { width : 0.0, height : 0.0};
		}
	}
	,place: function(x,y,angle) {
		this.x = x;
		this.y = y;
		this.angle = angle % 360;
		if(this.angle < 0) this.angle += 360;
		this.g.attr("transform").string("translate(" + x + "," + y + ")");
		var $e = (this.orientation);
		switch( $e[1] ) {
		case 0:
			var a = $e[2];
			this.gtext.attr("transform").string("rotate(" + a + ")");
			break;
		case 1:
			if(this.dontFlip && this.angle > 90 && this.angle < 270) angle += 180;
			this.gtext.attr("transform").string("rotate(" + angle + ")");
			break;
		case 2:
			if(this.dontFlip && this.angle > 180) angle -= 180;
			this.gtext.attr("transform").string("rotate(" + (-90 + angle) + ")");
			break;
		}
		if(this.shadow) this.gshadowrot.attr("transform").string(this.gtext.attr("transform").get());
		this.reanchor();
	}
	,setShadowOffset: function(x,y) {
		this.shadowOffsetX = x;
		this.shadowOffsetY = y;
		if(this.shadow) this.gshadow.attr("transform").string("translate(" + this.shadowOffsetX + "," + this.shadowOffsetY + ")");
	}
	,setText: function(v) {
		this.text = v;
		if(this.outline) this.toutline.text().string(v);
		this.ttext.text().string(v);
		if(this.shadow) this.tshadow.text().string(v);
		this.reanchor();
		return v;
	}
	,setOrientation: function(v) {
		this.orientation = v;
		this.place(this.x,this.y,this.angle);
		return v;
	}
	,setAnchor: function(v) {
		this.anchor = v;
		this.reanchor();
		return v;
	}
	,getBB: function() {
		var n = this.ttext.node(), h = this.ttext.style("font-size").getFloat();
		if(null == h || 0 >= h) try {
			h = n.getExtentOfChar("A").height;
		} catch( e ) {
			h = thx.js.Dom.selectNode(n).style("height").getFloat();
		}
		var w;
		try {
			w = n.getComputedTextLength();
		} catch( e ) {
			w = thx.js.Dom.selectNode(n).style("width").getFloat();
		}
		return { width : w, height : h};
	}
	,reanchor: function() {
		if(null == this.anchor) return;
		var bb = this.getBB(), x, y;
		var a = this.anchor;
		if(this.dontFlip) {
			switch( (this.orientation)[1] ) {
			case 1:
				if(this.angle > 90 && this.angle < 270) a = (function($this) {
					var $r;
					switch( (a)[1] ) {
					case 0:
						$r = rg.svg.widget.GridAnchor.BottomRight;
						break;
					case 1:
						$r = rg.svg.widget.GridAnchor.Bottom;
						break;
					case 2:
						$r = rg.svg.widget.GridAnchor.BottomLeft;
						break;
					case 3:
						$r = rg.svg.widget.GridAnchor.Right;
						break;
					case 4:
						$r = rg.svg.widget.GridAnchor.Center;
						break;
					case 5:
						$r = rg.svg.widget.GridAnchor.Left;
						break;
					case 6:
						$r = rg.svg.widget.GridAnchor.TopRight;
						break;
					case 7:
						$r = rg.svg.widget.GridAnchor.Top;
						break;
					case 8:
						$r = rg.svg.widget.GridAnchor.TopLeft;
						break;
					}
					return $r;
				}(this));
				break;
			case 2:
				if(this.angle > 180) a = (function($this) {
					var $r;
					switch( (a)[1] ) {
					case 0:
						$r = rg.svg.widget.GridAnchor.BottomRight;
						break;
					case 1:
						$r = rg.svg.widget.GridAnchor.Bottom;
						break;
					case 2:
						$r = rg.svg.widget.GridAnchor.BottomLeft;
						break;
					case 3:
						$r = rg.svg.widget.GridAnchor.Right;
						break;
					case 4:
						$r = rg.svg.widget.GridAnchor.Center;
						break;
					case 5:
						$r = rg.svg.widget.GridAnchor.Left;
						break;
					case 6:
						$r = rg.svg.widget.GridAnchor.TopRight;
						break;
					case 7:
						$r = rg.svg.widget.GridAnchor.Top;
						break;
					case 8:
						$r = rg.svg.widget.GridAnchor.TopLeft;
						break;
					}
					return $r;
				}(this));
				break;
			default:
			}
		}
		switch( (a)[1] ) {
		case 0:
			x = 0;
			y = bb.height;
			break;
		case 1:
			x = -bb.width / 2;
			y = bb.height;
			break;
		case 2:
			x = -bb.width;
			y = bb.height;
			break;
		case 3:
			x = 0;
			y = bb.height / 2;
			break;
		case 4:
			x = -bb.width / 2;
			y = bb.height / 2;
			break;
		case 5:
			x = -bb.width;
			y = bb.height / 2;
			break;
		case 6:
			x = 0;
			y = 0;
			break;
		case 7:
			x = -bb.width / 2;
			y = 0;
			break;
		case 8:
			x = -bb.width;
			y = 0;
			break;
		}
		if(this.outline) this.toutline.attr("x")["float"](x + 0.5).attr("y")["float"](y - 1.5);
		this.ttext.attr("x")["float"](x + 0.5).attr("y")["float"](y - 1.5);
		if(this.shadow) this.tshadow.attr("x")["float"](x + 0.5).attr("y")["float"](y - 1.5);
	}
	,destroy: function() {
		this.g.remove();
	}
	,__class__: rg.svg.widget.Label
	,__properties__: {set_anchor:"setAnchor",set_orientation:"setOrientation",set_text:"setText"}
}
if(!thx.culture.core) thx.culture.core = {}
thx.culture.core.DateTimeInfo = $hxClasses["thx.culture.core.DateTimeInfo"] = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
	this.months = months;
	this.abbrMonths = abbrMonths;
	this.days = days;
	this.abbrDays = abbrDays;
	this.shortDays = shortDays;
	this.am = am;
	this.pm = pm;
	this.separatorDate = separatorDate;
	this.separatorTime = separatorTime;
	this.firstWeekDay = firstWeekDay;
	this.patternYearMonth = patternYearMonth;
	this.patternMonthDay = patternMonthDay;
	this.patternDate = patternDate;
	this.patternDateShort = patternDateShort;
	this.patternDateRfc = patternDateRfc;
	this.patternDateTime = patternDateTime;
	this.patternUniversal = patternUniversal;
	this.patternSortable = patternSortable;
	this.patternTime = patternTime;
	this.patternTimeShort = patternTimeShort;
}
thx.culture.core.DateTimeInfo.__name__ = ["thx","culture","core","DateTimeInfo"];
thx.culture.core.DateTimeInfo.prototype = {
	months: null
	,abbrMonths: null
	,days: null
	,abbrDays: null
	,shortDays: null
	,am: null
	,pm: null
	,separatorDate: null
	,separatorTime: null
	,firstWeekDay: null
	,patternYearMonth: null
	,patternMonthDay: null
	,patternDate: null
	,patternDateShort: null
	,patternDateRfc: null
	,patternDateTime: null
	,patternUniversal: null
	,patternSortable: null
	,patternTime: null
	,patternTimeShort: null
	,__class__: thx.culture.core.DateTimeInfo
}
thx.js.Timer = $hxClasses["thx.js.Timer"] = function() { }
thx.js.Timer.__name__ = ["thx","js","Timer"];
thx.js.Timer.timer = function(f,delay) {
	if(delay == null) delay = 0.0;
	var now = Date.now().getTime(), found = false, t0, t1 = thx.js.Timer.queue;
	if(!Math.isFinite(delay)) return;
	while(null != t1) {
		if(Reflect.compareMethods(f,t1.f)) {
			t1.then = now;
			t1.delay = delay;
			found = true;
			break;
		}
		t0 = t1;
		t1 = t1.next;
	}
	if(!found) thx.js.Timer.queue = { f : f, then : now, delay : delay, next : thx.js.Timer.queue, flush : false};
	if(0 == thx.js.Timer.interval) {
		thx.js.Timer.timeout = clearTimeout(thx.js.Timer.timeout);
		thx.js.Timer.interval = 1;
		window.requestAnimationFrame(thx.js.Timer._step);
	}
}
thx.js.Timer.step = function() {
	var elapsed, now = Date.now().getTime(), t1 = thx.js.Timer.queue;
	while(null != t1) {
		elapsed = now - t1.then;
		if(elapsed > t1.delay) t1.flush = t1.f(elapsed);
		t1 = t1.next;
	}
	var delay = thx.js.Timer._flush() - now;
	if(delay > 24) {
		if(Math.isFinite(delay)) {
			clearTimeout(thx.js.Timer.timeout);
			thx.js.Timer.timeout = setTimeout(thx.js.Timer._step,delay);
		}
		thx.js.Timer.interval = 0;
	} else {
		thx.js.Timer.interval = 1;
		window.requestAnimationFrame(thx.js.Timer._step);
	}
}
thx.js.Timer.flush = function() {
	var elapsed, now = Date.now().getTime(), t1 = thx.js.Timer.queue;
	while(null != t1) {
		elapsed = now - t1.then;
		if(t1.delay == 0) t1.flush = t1.f(elapsed);
		t1 = t1.next;
	}
	thx.js.Timer._flush();
}
thx.js.Timer._flush = function() {
	var t0 = null, t1 = thx.js.Timer.queue, then = Math.POSITIVE_INFINITY;
	while(null != t1) if(t1.flush) t1 = null != t0?t0.next = t1.next:thx.js.Timer.queue = t1.next; else {
		then = Math.min(then,t1.then + t1.delay);
		t1 = (t0 = t1).next;
	}
	return then;
}
thx.js.Timer.prototype = {
	__class__: thx.js.Timer
}
var hxevents = hxevents || {}
hxevents.Dispatcher = $hxClasses["hxevents.Dispatcher"] = function() {
	this.handlers = new Array();
}
hxevents.Dispatcher.__name__ = ["hxevents","Dispatcher"];
hxevents.Dispatcher.stop = function() {
	throw hxevents.EventException.StopPropagation;
}
hxevents.Dispatcher.prototype = {
	handlers: null
	,add: function(h) {
		this.handlers.push(h);
		return h;
	}
	,addOnce: function(h) {
		var me = this;
		var _h = null;
		_h = function(v) {
			me.remove(_h);
			h(v);
		};
		this.add(_h);
		return _h;
	}
	,remove: function(h) {
		var _g1 = 0, _g = this.handlers.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
		}
		return null;
	}
	,clear: function() {
		this.handlers = new Array();
	}
	,dispatch: function(e) {
		try {
			var list = this.handlers.copy();
			var _g = 0;
			while(_g < list.length) {
				var l = list[_g];
				++_g;
				l(e);
			}
			return true;
		} catch( exc ) {
			if( js.Boot.__instanceof(exc,hxevents.EventException) ) {
				return false;
			} else throw(exc);
		}
	}
	,dispatchAndAutomate: function(e) {
		this.dispatch(e);
		this.handlers = [];
		this.add = function(h) {
			h(e);
			return h;
		};
	}
	,has: function(h) {
		if(null == h) return this.handlers.length > 0; else {
			var _g = 0, _g1 = this.handlers;
			while(_g < _g1.length) {
				var handler = _g1[_g];
				++_g;
				if(h == handler) return true;
			}
			return false;
		}
	}
	,__class__: hxevents.Dispatcher
}
if(!rg.util) rg.util = {}
rg.util.RGColors = $hxClasses["rg.util.RGColors"] = function() { }
rg.util.RGColors.__name__ = ["rg","util","RGColors"];
rg.util.RGColors.parse = function(s,alt) {
	try {
		var c = thx.color.Colors.parse(s);
		if(null != c) return c;
	} catch( _ ) {
	}
	return thx.color.Colors.parse(alt);
}
rg.util.RGColors.applyLightness = function(color,lightness,t) {
	if(null == t) t = 1 / Math.abs(lightness);
	return lightness >= 0?thx.color.Hsl.lighter(color,(1 - t) * (1 + lightness)):thx.color.Hsl.darker(color,(1 - t) * (1 - lightness));
}
rg.util.RGColors.prototype = {
	__class__: rg.util.RGColors
}
if(!thx.text) thx.text = {}
thx.text.ERegs = $hxClasses["thx.text.ERegs"] = function() { }
thx.text.ERegs.__name__ = ["thx","text","ERegs"];
thx.text.ERegs.escapeERegChars = function(s) {
	return thx.text.ERegs._escapePattern.customReplace(s,function(e) {
		return "\\" + e.matched(0);
	});
}
thx.text.ERegs.prototype = {
	__class__: thx.text.ERegs
}
rg.util.Periodicity = $hxClasses["rg.util.Periodicity"] = function() { }
rg.util.Periodicity.__name__ = ["rg","util","Periodicity"];
rg.util.Periodicity.defaultPeriodicity = function(span) {
	if(null == span || 0 == span) return "eternity";
	if(span <= 21600000) return "minute"; else if(span <= 172800000) return "hour"; else if(span <= 5184000 * 1000) return "day"; else if(span <= 62208000 * 1000) return "month"; else return "year";
}
rg.util.Periodicity.defaultRange = function(periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = [0.0,0.0];
			break;
		case "minute":
			$r = rg.util.Periodicity.parsePair("6 hours ago","now");
			break;
		case "hour":
			$r = rg.util.Periodicity.parsePair("2 days ago","now");
			break;
		case "day":
			$r = rg.util.Periodicity.parsePair("14 days ago","today");
			break;
		case "month":
			$r = rg.util.Periodicity.parsePair("6 months ago","today");
			break;
		case "year":
			$r = rg.util.Periodicity.parsePair("6 years ago","today");
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.isValid = function(v) {
	return Arrays.exists(rg.util.Periodicity.validPeriods,v);
}
rg.util.Periodicity.calculateBetween = function(a,b,disc) {
	if(disc == null) disc = 2;
	if(null == a || null == b) return "eternity";
	var delta = Math.abs(b.getTime() - a.getTime());
	if(delta >= DateTools.days(365 * disc)) return "year"; else if(delta >= DateTools.days(30 * disc)) return "month"; else if(delta >= DateTools.days(7 * disc)) return "week"; else if(delta >= DateTools.days(disc)) return "day"; else if(delta >= DateTools.hours(disc)) return "hour"; else return "minute";
}
rg.util.Periodicity.unitsBetween = function(start,end,periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = 1;
			break;
		case "minute":
			$r = Math.floor((end - start) / 60000);
			break;
		case "hour":
			$r = Math.floor((end - start) / 3600000);
			break;
		case "day":
			$r = Math.floor((end - start) / 86400000);
			break;
		case "week":
			$r = Math.floor((end - start) / 604800000);
			break;
		case "month":
			$r = (function($this) {
				var $r;
				var s = Date.fromTime(start), e = Date.fromTime(end), sy = s.getFullYear(), ey = e.getFullYear(), sm = s.getMonth(), em = e.getMonth();
				$r = (ey - sy) * 12 + (em - sm);
				return $r;
			}($this));
			break;
		case "year":
			$r = Math.floor(rg.util.Periodicity.unitsBetween(start,end,"month") / 12);
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.units = function(value,periodicity) {
	return rg.util.Periodicity.unitsBetween(0,value,periodicity) + (function($this) {
		var $r;
		switch(periodicity) {
		case "hour":
			$r = 1;
			break;
		default:
			$r = 0;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.range = function(start,end,periodicity) {
	var step = 1000;
	switch(periodicity) {
	case "eternity":
		return [0.0];
	case "minute":
		step = 60000;
		break;
	case "hour":
		step = 3600000;
		break;
	case "day":
		step = 86400000;
		break;
	case "week":
		step = 604800000;
		break;
	case "month":
		var s = rg.util.Periodicity.dateUtc(start), e = rg.util.Periodicity.dateUtc(end), sy = s.getFullYear(), ey = e.getFullYear(), sm = s.getMonth(), em = e.getMonth();
		var result = [];
		while(sy < ey || sy == ey && sm <= em) {
			result.push(new Date(sy,sm,1,0,0,0).getTime());
			sm++;
			if(sm > 11) {
				sm = 0;
				sy++;
			}
		}
		return result;
	case "year":
		return Ints.range(rg.util.Periodicity.dateUtc(start).getFullYear(),rg.util.Periodicity.dateUtc(end).getFullYear() + 1,1).map(function(d,i) {
			return new Date(d,0,1,0,0,0).getTime();
		});
	}
	return Floats.range(start,end + step,step);
}
rg.util.Periodicity.next = function(periodicity,date,step) {
	if(step == null) step = 1;
	if(null == date) date = Date.now().getTime();
	if(0 == step) return date;
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = date;
			break;
		case "minute":
			$r = date + 60000 * step;
			break;
		case "hour":
			$r = date + 3600000 * step;
			break;
		case "day":
			$r = date + 86400000 * step;
			break;
		case "week":
			$r = date + 604800000 * step;
			break;
		case "month":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(date), y = d.getFullYear(), m = d.getMonth() + step;
				$r = new Date(y,m,d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
				return $r;
			}($this));
			break;
		case "year":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(date);
				$r = new Date(d.getFullYear() + step,d.getMonth(),d.getDay(),d.getHours(),d.getMinutes(),d.getSeconds()).getTime();
				return $r;
			}($this));
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.minForPeriodicityInSeries = function(arr,periodicity) {
	return Arrays.floatMin(arr,function(d) {
		return Arrays.floatMin(Reflect.fields(Reflect.field(d,periodicity)),function(d1) {
			return Std.parseFloat(d1);
		});
	});
}
rg.util.Periodicity.maxForPeriodicityInSeries = function(arr,periodicity) {
	return Arrays.floatMax(arr,function(d) {
		return Arrays.floatMax(Reflect.fields(Reflect.field(d,periodicity)),function(d1) {
			return Std.parseFloat(d1);
		});
	});
}
rg.util.Periodicity.formatf = function(periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = function(_) {
				return "all time";
			};
			break;
		case "minute":case "hour":
			$r = function(v) {
				return thx.culture.FormatDate.timeShort(Date.fromTime(v));
			};
			break;
		case "day":case "week":
			$r = function(v) {
				return thx.culture.FormatDate.dateShort(Date.fromTime(v));
			};
			break;
		case "month":
			$r = function(v) {
				return thx.culture.FormatDate.yearMonth(Date.fromTime(v));
			};
			break;
		case "year":
			$r = function(v) {
				return thx.culture.FormatDate.year(Date.fromTime(v));
			};
			break;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.format = function(periodicity,v) {
	switch(periodicity) {
	case "eternity":
		return "all time";
	case "minute":
		return thx.culture.FormatDate.timeShort(Date.fromTime(v));
	case "hour":
		return thx.culture.FormatDate.hourShort(Date.fromTime(v));
	case "day":case "week":
		return thx.culture.FormatDate.dateShort(Date.fromTime(v));
	case "month":
		return thx.culture.FormatDate.yearMonth(Date.fromTime(v));
	case "year":
		return thx.culture.FormatDate.year(Date.fromTime(v));
	default:
		return periodicity + ": " + v;
	}
}
rg.util.Periodicity.smartFormat = function(periodicity,v) {
	switch(periodicity) {
	case "eternity":
		return "all time";
	case "minute":
		if(rg.util.Periodicity.firstInSeries("hour",v)) return thx.culture.FormatDate.timeShort(Date.fromTime(v)); else return thx.culture.FormatDate.format("%i",Date.fromTime(v));
		break;
	case "hour":
		if(rg.util.Periodicity.firstInSeries("day",v)) return thx.culture.FormatDate.format("%b %e",rg.util.Periodicity.dateUtc(v)); else return thx.culture.FormatDate.hourShort(Date.fromTime(v));
		break;
	case "day":
		if(rg.util.Periodicity.firstInSeries("month",v)) return thx.culture.FormatDate.format("%b %e",rg.util.Periodicity.dateUtc(v)); else return thx.culture.FormatDate.format("%e",rg.util.Periodicity.dateUtc(v));
		break;
	case "week":
		var d = rg.util.Periodicity.dateUtc(v);
		if(d.getDate() <= 7) return thx.culture.FormatDate.format("%b %e",d); else return thx.culture.FormatDate.format("%e",d);
		break;
	case "month":
		if(rg.util.Periodicity.firstInSeries("year",v)) return thx.culture.FormatDate.year(rg.util.Periodicity.dateUtc(v)); else return thx.culture.FormatDate.format("%b",rg.util.Periodicity.dateUtc(v));
		break;
	case "year":
		return thx.culture.FormatDate.year(rg.util.Periodicity.dateUtc(v));
	default:
		return periodicity + ": " + Date.fromTime(v);
	}
}
rg.util.Periodicity.firstInSeries = function(periodicity,v) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "eternity":
			$r = 0 == v;
			break;
		case "minute":
			$r = 0 == v % 60000;
			break;
		case "hour":
			$r = 0 == v % 3600000;
			break;
		case "day":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(v);
				$r = 0 == d.getHours() && 0 == d.getMinutes() && 0 == d.getSeconds();
				return $r;
			}($this));
			break;
		case "week":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(v);
				$r = 0 == d.getDay();
				return $r;
			}($this));
			break;
		case "month":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(v);
				$r = 1 == d.getDate();
				return $r;
			}($this));
			break;
		case "year":
			$r = (function($this) {
				var $r;
				var d = Date.fromTime(v);
				$r = 1 == d.getDate() && 0 == d.getMonth();
				return $r;
			}($this));
			break;
		default:
			$r = false;
		}
		return $r;
	}(this));
}
rg.util.Periodicity.nextPeriodicity = function(periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "minute":
			$r = "hour";
			break;
		case "hour":
			$r = "day";
			break;
		case "day":case "week":
			$r = "month";
			break;
		case "month":
			$r = "year";
			break;
		default:
			$r = "year";
		}
		return $r;
	}(this));
}
rg.util.Periodicity.prevPeriodicity = function(periodicity) {
	return (function($this) {
		var $r;
		switch(periodicity) {
		case "minute":
			$r = "hour";
			break;
		case "hour":
			$r = "minute";
			break;
		case "day":
			$r = "hour";
			break;
		case "week":case "month":
			$r = "day";
			break;
		default:
			$r = "minute";
		}
		return $r;
	}(this));
}
rg.util.Periodicity.parsePair = function(start,end) {
	return [thx.date.DateParser.parse(start).getTime(),thx.date.DateParser.parse(end).getTime()];
}
rg.util.Periodicity.timezoneOffset = function(d) {
	return d.getTimezoneOffset();
}
rg.util.Periodicity.dateUtc = function(v) {
	var d = Date.fromTime(v), offset = d.getTimezoneOffset();
	if(offset < 0) offset = 0;
	return Date.fromTime(v + 60000 * offset);
}
rg.util.Periodicity.isValidGroupBy = function(value) {
	return Arrays.exists(rg.util.Periodicity.validGroupValues,value);
}
rg.util.Periodicity.prototype = {
	__class__: rg.util.Periodicity
}
rg.visualization.VisualizationStreamGraph = $hxClasses["rg.visualization.VisualizationStreamGraph"] = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
}
rg.visualization.VisualizationStreamGraph.__name__ = ["rg","visualization","VisualizationStreamGraph"];
rg.visualization.VisualizationStreamGraph.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationStreamGraph.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoStream: null
	,initAxes: function() {
		this.xvariable = this.independentVariables[0];
		this.yvariables = this.dependentVariables.map(function(d,_) {
			return d;
		});
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.StreamGraph(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.interpolator = this.infoStream.interpolation;
		var $e = (this.infoStream.effect);
		switch( $e[1] ) {
		case 0:
			chart.gradientStyle = 0;
			break;
		case 2:
			var lightness = $e[2];
			chart.gradientStyle = 1;
			chart.gradientLightness = lightness;
			break;
		case 1:
			var lightness = $e[2];
			chart.gradientStyle = 2;
			chart.gradientLightness = lightness;
			break;
		}
		this.chart = chart;
	}
	,transformData: function(dps) {
		var segmenter = new rg.data.Segmenter(this.infoStream.segment.on,this.infoStream.segment.transform,this.infoStream.segment.scale);
		return segmenter.segment(dps);
	}
	,__class__: rg.visualization.VisualizationStreamGraph
});
if(!thx.languages) thx.languages = {}
thx.languages.En = $hxClasses["thx.languages.En"] = function() {
	this.name = "en";
	this.english = "English";
	this["native"] = "English";
	this.iso2 = "en";
	this.iso3 = "eng";
	this.pluralRule = 1;
	thx.culture.Language.add(this);
}
thx.languages.En.__name__ = ["thx","languages","En"];
thx.languages.En.__properties__ = {get_language:"getLanguage"}
thx.languages.En.language = null;
thx.languages.En.getLanguage = function() {
	if(null == thx.languages.En.language) thx.languages.En.language = new thx.languages.En();
	return thx.languages.En.language;
}
thx.languages.En.__super__ = thx.culture.Language;
thx.languages.En.prototype = $extend(thx.culture.Language.prototype,{
	__class__: thx.languages.En
});
thx.culture.core.NumberInfo = $hxClasses["thx.culture.core.NumberInfo"] = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	this.decimals = decimals;
	this.decimalsSeparator = decimalsSeparator;
	this.groups = groups;
	this.groupsSeparator = groupsSeparator;
	this.patternNegative = patternNegative;
	this.patternPositive = patternPositive;
}
thx.culture.core.NumberInfo.__name__ = ["thx","culture","core","NumberInfo"];
thx.culture.core.NumberInfo.prototype = {
	decimals: null
	,decimalsSeparator: null
	,groups: null
	,groupsSeparator: null
	,patternNegative: null
	,patternPositive: null
	,__class__: thx.culture.core.NumberInfo
}
if(!thx.cultures) thx.cultures = {}
thx.cultures.EnUS = $hxClasses["thx.cultures.EnUS"] = function() {
	this.language = thx.languages.En.getLanguage();
	this.name = "en-US";
	this.english = "English (United States)";
	this["native"] = "English (United States)";
	this.date = new thx.culture.core.DateTimeInfo(["January","February","March","April","May","June","July","August","September","October","November","December",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Su","Mo","Tu","We","Th","Fr","Sa"],"AM","PM","/",":",0,"%B, %Y","%B %d","%A, %B %d, %Y","%f/%e/%Y","%a, %d %b %Y %H:%M:%S GMT","%A, %B %d, %Y %l:%M:%S %p","%Y-%m-%d %H:%M:%SZ","%Y-%m-%dT%H:%M:%S","%l:%M:%S %p","%l:%M %p");
	this.symbolNaN = "NaN";
	this.symbolPercent = "%";
	this.symbolPermille = "‰";
	this.signNeg = "-";
	this.signPos = "+";
	this.symbolNegInf = "-Infinity";
	this.symbolPosInf = "Infinity";
	this.number = new thx.culture.core.NumberInfo(2,".",[3],",","-n","n");
	this.currency = new thx.culture.core.NumberInfo(2,".",[3],",","($n)","$n");
	this.percent = new thx.culture.core.NumberInfo(2,".",[3],",","-n %","n %");
	this.pluralRule = 1;
	this.englishCurrency = "US Dollar";
	this.nativeCurrency = "US Dollar";
	this.currencySymbol = "$";
	this.currencyIso = "USD";
	this.englishRegion = "United States";
	this.nativeRegion = "United States";
	this.iso2 = "US";
	this.iso3 = "USA";
	this.isMetric = false;
	thx.culture.Culture.add(this);
}
thx.cultures.EnUS.__name__ = ["thx","cultures","EnUS"];
thx.cultures.EnUS.__properties__ = {get_culture:"getCulture"}
thx.cultures.EnUS.culture = null;
thx.cultures.EnUS.getCulture = function() {
	if(null == thx.cultures.EnUS.culture) thx.cultures.EnUS.culture = new thx.cultures.EnUS();
	return thx.cultures.EnUS.culture;
}
thx.cultures.EnUS.__super__ = thx.culture.Culture;
thx.cultures.EnUS.prototype = $extend(thx.culture.Culture.prototype,{
	__class__: thx.cultures.EnUS
});
if(!thx.date) thx.date = {}
thx.date.DateParser = $hxClasses["thx.date.DateParser"] = function() { }
thx.date.DateParser.__name__ = ["thx","date","DateParser"];
thx.date.DateParser.parse = function(s,d) {
	var time = thx.date.DateParser.parseTime(s), v;
	if(null == d) d = Date.now();
	s = StringTools.replace(s,time.matched,"");
	var year = 0, month = 0, day = 0, found = null != time.matched;
	if(thx.date.DateParser.dateexp.match(s)) {
		found = true;
		s = StringTools.replace(s,thx.date.DateParser.dateexp.matched(0),"");
		if(null != (v = thx.date.DateParser.dateexp.matched(1))) {
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(2));
			month = thx.date.DateParser.months.indexOf(v.toLowerCase());
			year = null != (v = thx.date.DateParser.dateexp.matched(3))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(4))) {
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(5));
			month = thx.date.DateParser.shortmonths.indexOf(v.toLowerCase());
			year = null != (v = thx.date.DateParser.dateexp.matched(6))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(8))) {
			month = thx.date.DateParser.months.indexOf(v.toLowerCase());
			day = null != (v = thx.date.DateParser.dateexp.matched(7))?Std.parseInt(v):1;
			year = null != (v = thx.date.DateParser.dateexp.matched(9))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(11))) {
			month = thx.date.DateParser.shortmonths.indexOf(v.toLowerCase());
			day = null != (v = thx.date.DateParser.dateexp.matched(10))?Std.parseInt(v):1;
			year = null != (v = thx.date.DateParser.dateexp.matched(12))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(14))) {
			month = thx.date.DateParser.months.indexOf(v.toLowerCase());
			day = null != (v = thx.date.DateParser.dateexp.matched(13))?Std.parseInt(v):1;
			year = null != (v = thx.date.DateParser.dateexp.matched(15))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(17))) {
			month = thx.date.DateParser.shortmonths.indexOf(v.toLowerCase());
			day = null != (v = thx.date.DateParser.dateexp.matched(16))?Std.parseInt(v):1;
			year = null != (v = thx.date.DateParser.dateexp.matched(18))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(19))) {
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(20));
			month = Std.parseInt(v) - 1;
			year = null != (v = thx.date.DateParser.dateexp.matched(21))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(23))) {
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(22));
			month = Std.parseInt(v) - 1;
			year = null != (v = thx.date.DateParser.dateexp.matched(24))?thx.date.DateParser.fixyear(Std.parseInt(v)):d.getFullYear();
		} else if(null != (v = thx.date.DateParser.dateexp.matched(25))) {
			year = thx.date.DateParser.fixyear(Std.parseInt(v));
			day = Std.parseInt(thx.date.DateParser.dateexp.matched(27));
			month = Std.parseInt(thx.date.DateParser.dateexp.matched(26)) - 1;
		} else if(null != (v = thx.date.DateParser.dateexp.matched(28))) {
			year = d.getFullYear();
			day = Std.parseInt(v);
			month = d.getMonth();
		}
	} else if(thx.date.DateParser.absdateexp.match(s)) {
		found = true;
		s = StringTools.replace(s,thx.date.DateParser.absdateexp.matched(0),"");
		year = d.getFullYear();
		month = d.getMonth();
		day = d.getDate();
		if(null != (v = thx.date.DateParser.absdateexp.matched(1))) switch(v.toLowerCase()) {
		case "now":case "this second":
			if(null == time.matched) {
				time.hour = d.getHours();
				time.minute = d.getMinutes();
				time.second = d.getSeconds();
			}
			break;
		case "tomorrow":
			day += 1;
			break;
		case "yesterday":
			day -= 1;
			break;
		} else if(null != (v = thx.date.DateParser.absdateexp.matched(3))) {
			var t = thx.date.DateParser.absdateexp.matched(2), v1 = thx.date.DateParser.months.indexOf(v.toLowerCase());
			if(v1 == month) year += thx.date.DateParser.last(t)?-1:thx.date.DateParser.next(t)?1:0; else if(v1 > month) year += thx.date.DateParser.last(t)?-1:0; else year += thx.date.DateParser.next(t)?1:0;
			month = v1;
			day = 1;
		} else if(null != (v = thx.date.DateParser.absdateexp.matched(5))) {
			var t = thx.date.DateParser.absdateexp.matched(4), v1 = thx.date.DateParser.days.indexOf(v.toLowerCase());
			var wd = d.getDay();
			if(v1 == wd) day += thx.date.DateParser.last(t)?-7:thx.date.DateParser.next(t)?7:0; else if(v1 > wd) day += v1 - wd + (thx.date.DateParser.last(t)?-7:0); else day += v1 - wd + (thx.date.DateParser.next(t)?7:0);
		} else if(null != (v = thx.date.DateParser.absdateexp.matched(7))) {
			var t = thx.date.DateParser.absdateexp.matched(6), v1 = thx.date.DateParser.shortmonths.indexOf(v.toLowerCase());
			if(v1 == month) year += thx.date.DateParser.last(t)?-1:thx.date.DateParser.next(t)?1:0; else if(v1 > month) year += thx.date.DateParser.last(t)?-1:0; else year += thx.date.DateParser.next(t)?1:0;
			month = v1;
			day = 1;
		} else if(null != (v = thx.date.DateParser.absdateexp.matched(9))) {
			var t = thx.date.DateParser.absdateexp.matched(8), v1 = thx.date.DateParser.shortdays.indexOf(v.toLowerCase());
			var wd = d.getDay();
			if(v1 == wd) day += thx.date.DateParser.last(t)?-7:thx.date.DateParser.next(t)?7:0; else if(v1 > wd) day += v1 - wd + (thx.date.DateParser.last(t)?-7:0); else day += v1 - wd + (thx.date.DateParser.next(t)?7:0);
		}
		if(null == time.matched) time.matched = "x";
	} else {
		year = d.getFullYear();
		month = d.getMonth();
		day = d.getDate();
	}
	while(thx.date.DateParser.relexp.match(s)) {
		found = true;
		s = StringTools.replace(s,thx.date.DateParser.relexp.matched(0),"");
		var dir = thx.date.DateParser.relexp.matched(1), qt, period;
		if(null != dir) {
			qt = null != (v = thx.date.DateParser.relexp.matched(2))?Std.parseInt(v):1;
			period = thx.date.DateParser.relexp.matched(3);
		} else {
			period = thx.date.DateParser.relexp.matched(5);
			if(null == period) break;
			qt = null != (v = thx.date.DateParser.relexp.matched(4))?Std.parseInt(v):1;
			dir = null != (v = thx.date.DateParser.relexp.matched(6))?v:"after";
		}
		dir = dir.toLowerCase();
		switch(dir) {
		case "plus":case "+":case "from":case "hence":case "after":
			break;
		case "minus":case "-":case "before":case "ago":
			qt = -qt;
			break;
		}
		switch(dir) {
		case "ago":case "in":
			if(null == time.matched) {
				time.hour = d.getHours();
				time.minute = d.getMinutes();
				time.second = d.getSeconds();
				time.matched = "x";
			}
			break;
		}
		switch(period.toLowerCase()) {
		case "second":case "seconds":
			time.second += qt;
			break;
		case "minute":case "minutes":
			time.minute += qt;
			break;
		case "hour":case "hours":
			time.hour += qt;
			break;
		case "day":case "days":
			day += qt;
			break;
		case "week":case "weeks":
			day += qt * 7;
			break;
		case "month":case "months":
			month += qt;
			break;
		case "year":case "years":
			year += qt;
			break;
		}
	}
	if(!found) throw new thx.error.Error("no date information found in the string '{0}'",null,s,{ fileName : "DateParser.hx", lineNumber : 338, className : "thx.date.DateParser", methodName : "parse"});
	return Date.fromTime(new Date(year,month,day,time.hour,time.minute,time.second).getTime() + time.millis);
}
thx.date.DateParser.parseTime = function(s) {
	var result = { hour : 0, minute : 0, second : 0, millis : 0.0, matched : null};
	if(!thx.date.DateParser.timeexp.match(s)) return result;
	result.matched = thx.date.DateParser.timeexp.matched(0);
	var v;
	if(null != (v = thx.date.DateParser.timeexp.matched(1))) {
		result.hour = Std.parseInt(v) + thx.date.DateParser.plusPm(thx.date.DateParser.timeexp.matched(3));
		result.minute = Std.parseInt(thx.date.DateParser.timeexp.matched(2));
	} else if(null != (v = thx.date.DateParser.timeexp.matched(4))) {
		result.hour = Std.parseInt(v);
		result.minute = Std.parseInt(thx.date.DateParser.timeexp.matched(5));
		if(null != (v = thx.date.DateParser.timeexp.matched(6))) result.second = Std.parseInt(v);
		if(null != (v = thx.date.DateParser.timeexp.matched(7))) result.millis = Std.parseFloat(v) / 1000;
	} else if(null != (v = thx.date.DateParser.timeexp.matched(8))) {
		result.hour = Std.parseInt(v) + thx.date.DateParser.plusPm(thx.date.DateParser.timeexp.matched(10));
		result.minute = Std.parseInt(thx.date.DateParser.timeexp.matched(9));
	} else if(null != (v = thx.date.DateParser.timeexp.matched(11))) result.hour = Std.parseInt(v) + thx.date.DateParser.plusPm(thx.date.DateParser.timeexp.matched(12)); else if(null != (v = thx.date.DateParser.timeexp.matched(13))) switch(v.toLowerCase()) {
	case "evening":
		result.hour = 17;
		break;
	case "morning":
		result.hour = 8;
		break;
	case "afternoon":
		result.hour = 14;
		break;
	case "sunsrise":case "dawn":
		result.hour = 6;
		break;
	case "sunset":case "dusk":
		result.hour = 19;
		break;
	case "noon":case "midday":case "mid-day":
		result.hour = 12;
		break;
	case "mid-night":case "midnight":
		result.hour = 23;
		result.minute = 59;
		result.second = 59;
		result.millis = 0.999;
		break;
	} else throw new thx.error.Error("failed to parse time for '{0}'",null,s,{ fileName : "DateParser.hx", lineNumber : 405, className : "thx.date.DateParser", methodName : "parseTime"});
	return result;
}
thx.date.DateParser.fixyear = function(y) {
	if(y < 70) return 2000 + y; else if(y < 100) return 1900 + y; else return y;
}
thx.date.DateParser.last = function(s) {
	if(null == s) return false; else return "last" == s.toLowerCase();
}
thx.date.DateParser.next = function(s) {
	if(null == s) return true; else return "next" == s.toLowerCase();
}
thx.date.DateParser.plusPm = function(s) {
	if(null == s) return 0; else return (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "pm":case "evening":case "afternoon":
			$r = 12;
			break;
		default:
			$r = 0;
		}
		return $r;
	}(this));
}
thx.date.DateParser.prototype = {
	__class__: thx.date.DateParser
}
var haxe = haxe || {}
haxe.Int32 = $hxClasses["haxe.Int32"] = function() { }
haxe.Int32.__name__ = ["haxe","Int32"];
haxe.Int32.make = function(a,b) {
	return a << 16 | b;
}
haxe.Int32.ofInt = function(x) {
	return x | 0;
}
haxe.Int32.clamp = function(x) {
	return x | 0;
}
haxe.Int32.toInt = function(x) {
	if((x >> 30 & 1) != x >>> 31) throw "Overflow " + x;
	return x;
}
haxe.Int32.toNativeInt = function(x) {
	return x;
}
haxe.Int32.add = function(a,b) {
	return a + b | 0;
}
haxe.Int32.sub = function(a,b) {
	return a - b | 0;
}
haxe.Int32.mul = function(a,b) {
	return a * b | 0;
}
haxe.Int32.div = function(a,b) {
	return Std["int"](a / b);
}
haxe.Int32.mod = function(a,b) {
	return a % b;
}
haxe.Int32.shl = function(a,b) {
	return a << b;
}
haxe.Int32.shr = function(a,b) {
	return a >> b;
}
haxe.Int32.ushr = function(a,b) {
	return a >>> b;
}
haxe.Int32.and = function(a,b) {
	return a & b;
}
haxe.Int32.or = function(a,b) {
	return a | b;
}
haxe.Int32.xor = function(a,b) {
	return a ^ b;
}
haxe.Int32.neg = function(a) {
	return -a;
}
haxe.Int32.isNeg = function(a) {
	return a < 0;
}
haxe.Int32.isZero = function(a) {
	return a == 0;
}
haxe.Int32.complement = function(a) {
	return ~a;
}
haxe.Int32.compare = function(a,b) {
	return a - b;
}
haxe.Int32.ucompare = function(a,b) {
	if(a < 0) return b < 0?~b - ~a:1;
	return b < 0?-1:a - b;
}
haxe.Int32.prototype = {
	__class__: haxe.Int32
}
rg.visualization.VisualizationHeatGrid = $hxClasses["rg.visualization.VisualizationHeatGrid"] = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
}
rg.visualization.VisualizationHeatGrid.__name__ = ["rg","visualization","VisualizationHeatGrid"];
rg.visualization.VisualizationHeatGrid.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationHeatGrid.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoHeatGrid: null
	,initAxes: function() {
		this.xvariable = this.independentVariables[0];
		this.yvariables = [this.independentVariables[1]];
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.HeatGrid(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.useContour = this.infoHeatGrid.contour;
		chart.setColorMode(this.infoHeatGrid.colorScaleMode);
		this.chart = chart;
	}
	,transformData: function(dps) {
		return dps;
	}
	,setTickmarksDefaults: function(tickmarks,i,type,pname) {
		if(i != 0) return;
		tickmarks.labelAnchor = rg.svg.widget.GridAnchor.Left;
		tickmarks.labelAngle = 180;
	}
	,__class__: rg.visualization.VisualizationHeatGrid
});
if(!rg.data) rg.data = {}
rg.data.Segmenter = $hxClasses["rg.data.Segmenter"] = function(on,transform,scale) {
	this.on = on;
	this.transform = transform;
	this.scale = scale;
}
rg.data.Segmenter.__name__ = ["rg","data","Segmenter"];
rg.data.Segmenter.prototype = {
	on: null
	,transform: null
	,scale: null
	,segment: function(data) {
		var segmented = null == this.on?[data]:rg.util.DataPoints.partition(data,this.on);
		if(null != this.scale) {
			var _g1 = 0, _g = segmented.length;
			while(_g1 < _g) {
				var i = _g1++;
				segmented[i] = this.scale(segmented[i]);
			}
		}
		if(null != this.transform) {
			var rotated = Arrays.rotate(segmented);
			var _g1 = 0, _g = rotated.length;
			while(_g1 < _g) {
				var i = _g1++;
				rotated[i] = this.transform(rotated[i]);
			}
			segmented = Arrays.rotate(rotated);
		}
		return segmented;
	}
	,__class__: rg.data.Segmenter
}
rg.util.Jsonp = $hxClasses["rg.util.Jsonp"] = function() { }
rg.util.Jsonp.__name__ = ["rg","util","Jsonp"];
rg.util.Jsonp.get = function(path,success,failure,query,headers) {
	var api = rg.util.Jsonp.get_api;
	api(path,{ success : success, failure : failure},query,headers);
}
rg.util.Jsonp.post = function(path,content,success,failure,query,headers) {
	var api = rg.util.Jsonp.post_api;
	api(path,content,{ success : success, failure : failure},query,headers);
}
rg.util.Jsonp.request_api = function(method,path,content,actions,query,headers) {
	if(null == query) query = { };
	path = rg.util.Urls.addQueryParameters(path,query);
	if(null == headers) headers = { };
	var success = actions.success, failure = null == actions.failure?function(_,_1) {
	}:actions.failure;
	var random = Std["int"](Math.random() * 214748363), funcName = "ReportGridChartsJsonpCallback" + random, head = js.Lib.document.head;
	if(null == head) head = js.Lib.document.getElementsByTagName("head")[0];
	js.Lib.window[funcName] = function(content1,meta) {
		if(meta.status.code == 200) success(content1); else failure(meta.status.code,meta.status.reason);
		head.removeChild(js.Lib.document.getElementById(funcName));
		js.Lib.window[funcName] = undefined;
		try{ delete window[funcName]; }catch(e){}
	};
	var extraQuery = { };
	extraQuery.method = method;
	if(Reflect.fields(headers).length > 0) extraQuery.headers = thx.json.Json.encode(headers);
	extraQuery["callback"] = funcName;
	if(content != null) extraQuery.content = thx.json.Json.encode(content);
	var fullUrl = rg.util.Urls.addQueryParameters(path,extraQuery);
	var script = js.Lib.document.createElement("SCRIPT");
	script.setAttribute("type","text/javascript");
	script.setAttribute("src",fullUrl);
	script.setAttribute("id",funcName);
	head.appendChild(script);
}
rg.util.Jsonp.get_api = function(path,actions,query,headers) {
	rg.util.Jsonp.request_api("GET",path,null,actions,query,headers);
}
rg.util.Jsonp.post_api = function(path,content,actions,query,headers) {
	rg.util.Jsonp.request_api("POST",path,content,actions,query,headers);
}
rg.util.Jsonp.prototype = {
	__class__: rg.util.Jsonp
}
if(!rg.html) rg.html = {}
if(!rg.html.widget) rg.html.widget = {}
rg.html.widget.DownloaderMenu = $hxClasses["rg.html.widget.DownloaderMenu"] = function(handler,position,formats,container) {
	this.handler = handler;
	this.formats = null == formats?rg.html.widget.DownloaderMenu.DEFAULT_FORMATS:formats;
	this.title = rg.html.widget.DownloaderMenu.DEFAULT_TITLE;
	this.build(position,container);
}
rg.html.widget.DownloaderMenu.__name__ = ["rg","html","widget","DownloaderMenu"];
rg.html.widget.DownloaderMenu.prototype = {
	handler: null
	,formats: null
	,title: null
	,backgroundColor: null
	,menu: null
	,build: function(position,container) {
		this.createMenu(container);
		var el = this.menu.node();
		var $e = (position);
		switch( $e[1] ) {
		case 6:
			container.node().parentNode.insertBefore(el,container.node().nextSibling);
			break;
		case 5:
			container.node().parentNode.insertBefore(el,container.node());
			break;
		case 3:
			this.menu.classed().add("bottom").classed().add("left");
			break;
		case 4:
			this.menu.classed().add("bottom").classed().add("right");
			break;
		case 0:
			var selector = $e[2];
			thx.js.Dom.select(selector).node().appendChild(el);
			break;
		case 1:
			this.menu.classed().add("top").classed().add("left");
			break;
		case 2:
			this.menu.classed().add("top").classed().add("right");
			break;
		}
	}
	,createMenu: function(container) {
		this.menu = container.append("div").attr("class").string("rg menu");
		var options = this.menu.append("div").attr("class").string("options");
		var title = options.append("div").attr("class").string("title").html().string(this.title);
		var list = options.append("ul").selectAll("li").data(this.formats);
		list.enter().append("li").on("click.download",this.click.$bind(this)).html().stringf(function(d,i) {
			return d;
		});
	}
	,click: function(format,_) {
		var me = this;
		this.menu.classed().add("downloading");
		this.handler(format,this.backgroundColor,function(_1) {
			me.menu.classed().remove("downloading");
			return true;
		},function(e) {
			me.menu.classed().remove("downloading");
			js.Lib.alert("ERROR: " + e);
		});
	}
	,__class__: rg.html.widget.DownloaderMenu
}
if(!thx.translation) thx.translation = {}
thx.translation.ITranslation = $hxClasses["thx.translation.ITranslation"] = function() { }
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype = {
	domain: null
	,_: null
	,__: null
	,__class__: thx.translation.ITranslation
	,__properties__: {set_domain:"setDomain",get_domain:"getDomain"}
}
rg.info.InfoVisualizationType = $hxClasses["rg.info.InfoVisualizationType"] = function() {
	this.replace = true;
}
rg.info.InfoVisualizationType.__name__ = ["rg","info","InfoVisualizationType"];
rg.info.InfoVisualizationType.filters = function() {
	return [{ field : "visualization", validator : function(v) {
		return Arrays.exists(rg.visualization.Visualizations.visualizations,v.toLowerCase());
	}, filter : function(v) {
		return [{ value : v.toLowerCase(), field : "type"}];
	}},{ field : "replace", validator : function(v) {
		return Std["is"](v,Bool);
	}, filtern : null}];
}
rg.info.InfoVisualizationType.prototype = {
	replace: null
	,type: null
	,__class__: rg.info.InfoVisualizationType
}
math.prng.IPrng = $hxClasses["math.prng.IPrng"] = function() { }
math.prng.IPrng.__name__ = ["math","prng","IPrng"];
math.prng.IPrng.prototype = {
	size: null
	,init: null
	,next: null
	,toString: null
	,__class__: math.prng.IPrng
}
math.prng.ArcFour = $hxClasses["math.prng.ArcFour"] = function() {
	this.i = 0;
	this.j = 0;
	this.S = new Array();
	this.setSize(256);
}
math.prng.ArcFour.__name__ = ["math","prng","ArcFour"];
math.prng.ArcFour.__interfaces__ = [math.prng.IPrng];
math.prng.ArcFour.prototype = {
	i: null
	,j: null
	,S: null
	,size: null
	,init: function(key) {
		var t;
		var _g = 0;
		while(_g < 256) {
			var x = _g++;
			this.S[x] = x;
		}
		this.j = 0;
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			this.j = this.j + this.S[i] + key[i % key.length] & 255;
			t = this.S[i];
			this.S[i] = this.j;
			this.S[this.j] = t;
		}
		this.i = 0;
		this.j = 0;
	}
	,next: function() {
		if(this.S.length == 0) throw "not initialized";
		var t;
		this.i = this.i + 1 & 255;
		this.j = this.j + this.S[this.i] & 255;
		t = this.S[this.i];
		this.S[this.i] = this.S[this.j];
		this.S[this.j] = t;
		return this.S[t + this.S[this.i] & 255];
	}
	,setSize: function(v) {
		if(v % 4 != 0 || v < 32) throw "invalid size";
		this.size = v;
		return v;
	}
	,toString: function() {
		return "ArcFour";
	}
	,__class__: math.prng.ArcFour
}
rg.graph.GraphLayout = $hxClasses["rg.graph.GraphLayout"] = function(graph,layers) {
	this.graph = graph;
	this._layers = layers.map(function(arr,_) {
		return arr.copy();
	});
	this.friendCell = this._cell = new rg.graph.LayoutCell();
	this._updateMap();
	this.length = this._layers.length;
	graph.nodes.onRemove.add(this._nodeRemove.$bind(this));
}
rg.graph.GraphLayout.__name__ = ["rg","graph","GraphLayout"];
rg.graph.GraphLayout.arrayCrossings = function(graph,a,b) {
	var map = new IntHash(), c = 0;
	var _g1 = 0, _g = b.length;
	while(_g1 < _g) {
		var i = _g1++;
		map.set(b[i],i);
	}
	if(a.length <= 1 || b.length <= 1) return c;
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		var n1 = graph.nodes.get(a[i]);
		var $it0 = n1.graph.edges.positives(n1);
		while( $it0.hasNext() ) {
			var edge1 = $it0.next();
			var p1 = map.get(edge1.head.id);
			if(null == p1) continue;
			var _g3 = i + 1, _g2 = a.length;
			while(_g3 < _g2) {
				var j = _g3++;
				var n2 = graph.nodes.get(a[j]);
				var $it1 = n2.graph.edges.positives(n2);
				while( $it1.hasNext() ) {
					var edge2 = $it1.next();
					var p2 = map.get(edge2.head.id);
					if(p2 < p1) c++;
				}
			}
		}
	}
	return c;
}
rg.graph.GraphLayout.prototype = {
	graph: null
	,length: null
	,_layers: null
	,_cell: null
	,_map: null
	,friendCell: null
	,_updateMap: function() {
		var me = this;
		this._map = new IntHash();
		this.each(function(cell,node) {
			me._map.set(node.id,[cell.layer,cell.position]);
		});
	}
	,clone: function() {
		return new rg.graph.GraphLayout(this.graph.clone(),this.layers());
	}
	,each: function(f) {
		var layers = this._layers.length, positions;
		var _g = 0;
		while(_g < layers) {
			var layer = _g++;
			positions = this._layers[layer].length;
			var _g1 = 0;
			while(_g1 < positions) {
				var position = _g1++;
				this.friendCell.update(layer,position,layers,positions);
				f(this._cell,this.graph.nodes.get(this._layers[layer][position]));
			}
		}
	}
	,cell: function(node) {
		if(node.graph != this.graph) throw new thx.error.Error("node doesn't belong to this graph",null,null,{ fileName : "GraphLayout.hx", lineNumber : 57, className : "rg.graph.GraphLayout", methodName : "cell"});
		var pos = this._map.get(node.id);
		if(null == pos) return null;
		return new rg.graph.LayoutCell(pos[0],pos[1],this._layers.length,this._layers[pos[0]].length);
	}
	,nodeAt: function(layer,position) {
		var arr = this._layers[layer];
		if(null == arr) return null;
		var id = arr[position];
		if(null == id) return null;
		return this.graph.nodes.get(id);
	}
	,layer: function(i) {
		var me = this;
		return this._layers[i].map(function(id,_) {
			return me.graph.nodes.get(id);
		});
	}
	,layers: function() {
		var result = [];
		var _g = 0, _g1 = this._layers;
		while(_g < _g1.length) {
			var arr = _g1[_g];
			++_g;
			result.push(arr.copy());
		}
		return result;
	}
	,crossings: function() {
		var tot = 0;
		var _g1 = 0, _g = this._layers.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			tot += rg.graph.GraphLayout.arrayCrossings(this.graph,this._layers[i],this._layers[i + 1]);
		}
		return tot;
	}
	,maxCells: function() {
		return Std["int"](Arrays.floatMax(this._layers,function(arr) {
			return arr.length;
		}));
	}
	,_nodeRemove: function(node) {
		var c = this.cell(node);
		this._layers[c.layer].splice(c.position,1);
		if(this._layers[c.layer].length == 0) this._layers.splice(c.layer,1);
		this._updateMap();
	}
	,toString: function() {
		return "GraphLayout (" + this.graph + ", layers: " + this._layers.length + ", crossings : " + this.crossings() + ")";
	}
	,__class__: rg.graph.GraphLayout
}
rg.graph.LayoutCell = $hxClasses["rg.graph.LayoutCell"] = function(layer,position,layers,positions) {
	if(positions == null) positions = 0;
	if(layers == null) layers = 0;
	if(position == null) position = 0;
	if(layer == null) layer = 0;
	this.layer = layer;
	this.layers = layers;
	this.position = position;
	this.positions = positions;
}
rg.graph.LayoutCell.__name__ = ["rg","graph","LayoutCell"];
rg.graph.LayoutCell.prototype = {
	layer: null
	,position: null
	,layers: null
	,positions: null
	,update: function(layer,position,layers,positions) {
		this.layer = layer;
		this.layers = layers;
		this.position = position;
		this.positions = positions;
	}
	,__class__: rg.graph.LayoutCell
}
if(!thx.svg) thx.svg = {}
thx.svg.Diagonal = $hxClasses["thx.svg.Diagonal"] = function() {
	this._projection = thx.svg.Diagonal.diagonalProjection;
}
thx.svg.Diagonal.__name__ = ["thx","svg","Diagonal"];
thx.svg.Diagonal.diagonalProjection = function(d,_) {
	return d;
}
thx.svg.Diagonal.forObject = function() {
	return new thx.svg.Diagonal().sourcef(function(d,_i) {
		return [d.x0,d.y0];
	}).targetf(function(d,_i) {
		return [d.x1,d.y1];
	});
}
thx.svg.Diagonal.forArray = function() {
	return new thx.svg.Diagonal().sourcef(function(d,_i) {
		return [d[0],d[1]];
	}).targetf(function(d,_i) {
		return [d[2],d[3]];
	});
}
thx.svg.Diagonal.prototype = {
	_source: null
	,_target: null
	,_projection: null
	,diagonal: function(d,i) {
		var p0 = this._source(d,i), p3 = this._target(d,i), m = (p0[1] + p3[1]) / 2, p = [p0,[p0[0],m],[p3[0],m],p3];
		var p2 = p.map(this._projection);
		return "M" + p2[0][0] + "," + p2[0][1] + "C" + p2[1][0] + "," + p2[1][1] + " " + p2[2][0] + "," + p2[2][1] + " " + p2[3][0] + "," + p2[3][1];
	}
	,getSource: function() {
		return this._source;
	}
	,sourcef: function(x) {
		this._source = x;
		return this;
	}
	,getTarget: function() {
		return this._target;
	}
	,targetf: function(x) {
		this._target = x;
		return this;
	}
	,getProjection: function() {
		return this._projection;
	}
	,projection: function(x) {
		this._projection = x;
		return this;
	}
	,__class__: thx.svg.Diagonal
}
thx.js.Svg = $hxClasses["thx.js.Svg"] = function() { }
thx.js.Svg.__name__ = ["thx","js","Svg"];
thx.js.Svg.mouse = function(dom) {
	var point = (null != dom.ownerSVGElement?dom.ownerSVGElement:dom).createSVGPoint();
	if(thx.js.Svg._usepage && (js.Lib.window.scrollX || js.Lib.window.scrollY)) {
		var svg = thx.js.Dom.selectNode(js.Lib.document.body).append("svg:svg").style("position").string("absolute").style("top")["float"](0).style("left")["float"](0);
		var ctm = svg.node().getScreenCTM();
		thx.js.Svg._usepage = !(ctm.f || ctm.e);
		svg.remove();
	}
	if(thx.js.Svg._usepage) {
		point.x = thx.js.Dom.event.pageX;
		point.y = thx.js.Dom.event.pageY;
	} else {
		point.x = thx.js.Dom.event.clientX;
		point.y = thx.js.Dom.event.clientY;
	}
	point = point.matrixTransform(dom.getScreenCTM().inverse());
	return [point.x,point.y];
}
thx.js.Svg.prototype = {
	__class__: thx.js.Svg
}
if(!math.reduction) math.reduction = {}
math.reduction.ModularReduction = $hxClasses["math.reduction.ModularReduction"] = function() { }
math.reduction.ModularReduction.__name__ = ["math","reduction","ModularReduction"];
math.reduction.ModularReduction.prototype = {
	convert: null
	,revert: null
	,reduce: null
	,mulTo: null
	,sqrTo: null
	,__class__: math.reduction.ModularReduction
}
math.reduction.Classic = $hxClasses["math.reduction.Classic"] = function(m) {
	this.m = m;
}
math.reduction.Classic.__name__ = ["math","reduction","Classic"];
math.reduction.Classic.__interfaces__ = [math.reduction.ModularReduction];
math.reduction.Classic.prototype = {
	m: null
	,convert: function(x) {
		if(x.sign < 0 || x.compare(this.m) >= 0) return x.mod(this.m);
		return x;
	}
	,revert: function(x) {
		return x;
	}
	,reduce: function(x) {
		x.divRemTo(this.m,null,x);
	}
	,mulTo: function(x,y,r) {
		x.multiplyTo(y,r);
		this.reduce(r);
	}
	,sqrTo: function(x,r) {
		x.squareTo(r);
		this.reduce(r);
	}
	,__class__: math.reduction.Classic
}
rg.graph.GraphCollection = $hxClasses["rg.graph.GraphCollection"] = function(graph,idf) {
	var me = this;
	this.nextid = 0;
	this.graph = graph;
	this.idf = idf;
	this.collection = new IntHash();
	this._map = new Hash();
	if(null != idf) {
		var add = this.collectionCreate.$bind(this);
		this.collectionCreate = function(item) {
			me._map.set(idf(item.data),item);
			add(item);
		};
		var rem = this.collectionRemove.$bind(this);
		this.collectionRemove = function(item) {
			me._map.remove(idf(item.data));
			rem(item);
		};
	}
	this.onRemove = new hxevents.Dispatcher();
	this.onCreate = new hxevents.Dispatcher();
}
rg.graph.GraphCollection.__name__ = ["rg","graph","GraphCollection"];
rg.graph.GraphCollection.prototype = {
	onRemove: null
	,onCreate: null
	,graph: null
	,collection: null
	,nextid: null
	,idf: null
	,_map: null
	,length: null
	,getById: function(id) {
		return this._map.get(id);
	}
	,get: function(id) {
		return this.collection.get(id);
	}
	,has: function(item) {
		return item.graph == this.graph && this.collection.exists(item.id);
	}
	,get_length: function() {
		return IntHashes.count(this.collection);
	}
	,collectionCreate: function(item) {
		this.onCreate.dispatch(item);
		this.collection.set(item.id,item);
	}
	,collectionRemove: function(item) {
		this.collection.remove(item.id);
		this.onRemove.dispatch(item);
	}
	,iterator: function() {
		return this.collection.iterator();
	}
	,toString: function() {
		return Iterators.map(this.collection.iterator(),function(item,_) {
			return Std.string(item);
		}).join(", ");
	}
	,__class__: rg.graph.GraphCollection
	,__properties__: {get_length:"get_length"}
}
rg.graph.GraphEdges = $hxClasses["rg.graph.GraphEdges"] = function(graph,edgeidf) {
	rg.graph.GraphCollection.call(this,graph,edgeidf);
	this.edgesp = new IntHash();
	this.edgesn = new IntHash();
}
rg.graph.GraphEdges.__name__ = ["rg","graph","GraphEdges"];
rg.graph.GraphEdges.newInstance = function(graph,edgeidf) {
	return new rg.graph.GraphEdges(graph,edgeidf);
}
rg.graph.GraphEdges.__super__ = rg.graph.GraphCollection;
rg.graph.GraphEdges.prototype = $extend(rg.graph.GraphCollection.prototype,{
	edgesp: null
	,edgesn: null
	,copyTo: function(graph) {
		var edges = new rg.graph.GraphEdges(graph), nodes = graph.nodes, tail, head;
		var $it0 = this.collection.iterator();
		while( $it0.hasNext() ) {
			var edge = $it0.next();
			tail = nodes.get(edge.tail.id);
			head = nodes.get(edge.head.id);
			edges._create(edge.id,tail,head,edge.weight,edge.data);
		}
		edges.nextid = this.nextid;
		return edges;
	}
	,create: function(tail,head,weight,data) {
		if(weight == null) weight = 1.0;
		if(tail.graph != head.graph || tail.graph != this.graph) throw new thx.error.Error("can't create an edge between nodes on different graphs",null,null,{ fileName : "GraphEdges.hx", lineNumber : 39, className : "rg.graph.GraphEdges", methodName : "create"});
		return this._create(++this.nextid,tail,head,weight,data);
	}
	,_create: function(id,tail,head,weight,data) {
		var e = rg.graph.GEdge.create(this.graph,id,tail,head,weight,data);
		this.collectionCreate(e);
		this.connections(tail.id,this.edgesp).push(id);
		this.connections(head.id,this.edgesn).push(id);
		return e;
	}
	,remove: function(edge) {
		if(edge.graph != this.graph) throw new thx.error.Error("remove: the edge is not part of this graph",null,null,{ fileName : "GraphEdges.hx", lineNumber : 55, className : "rg.graph.GraphEdges", methodName : "remove"});
		this._remove(edge);
	}
	,_remove: function(edge) {
		this.collectionRemove(edge);
		this.removeConnection(edge.id,edge.tail.id,this.edgesp);
		this.removeConnection(edge.id,edge.head.id,this.edgesn);
		edge.destroy();
	}
	,unlink: function(node) {
		if(node.graph != this.graph) throw new thx.error.Error("unlink: the node is not part of this graph",null,null,{ fileName : "GraphEdges.hx", lineNumber : 70, className : "rg.graph.GraphEdges", methodName : "unlink"});
		this._unlink(node,this.edgesp);
		this._unlink(node,this.edgesn);
	}
	,positives: function(node) {
		return this._edges(node.id,this.edgesp).iterator();
	}
	,negatives: function(node) {
		return this._edges(node.id,this.edgesn).iterator();
	}
	,edges: function(node) {
		return this._edges(node.id,this.edgesp).concat(this._edges(node.id,this.edgesn)).iterator();
	}
	,positiveCount: function(node) {
		return this._edgeids(node.id,this.edgesp).length;
	}
	,negativeCount: function(node) {
		return this._edgeids(node.id,this.edgesn).length;
	}
	,edgeCount: function(node) {
		return this._edgeids(node.id,this.edgesp).length + this._edgeids(node.id,this.edgesn).length;
	}
	,_edgeids: function(id,collection) {
		var r = collection.get(id);
		if(null == r) r = [];
		return r;
	}
	,_edges: function(id,collection) {
		var me = this;
		return this._edgeids(id,collection).map(function(eid,_) {
			return me.get(eid);
		});
	}
	,unlinkPositives: function(node) {
		if(node.graph != this.graph) throw new thx.error.Error("unlinkePositives: the node is not part of this graph",null,null,{ fileName : "GraphEdges.hx", lineNumber : 121, className : "rg.graph.GraphEdges", methodName : "unlinkPositives"});
		this._unlink(node,this.edgesp);
	}
	,unlinkNegatives: function(node) {
		if(node.graph != this.graph) throw new thx.error.Error("unlinkeNegatives: the node is not part of this graph",null,null,{ fileName : "GraphEdges.hx", lineNumber : 128, className : "rg.graph.GraphEdges", methodName : "unlinkNegatives"});
		this._unlink(node,this.edgesn);
	}
	,_unlink: function(node,connections) {
		var ids = connections.get(node.id);
		if(null == ids) return;
		ids = ids.copy();
		var _g = 0;
		while(_g < ids.length) {
			var id = ids[_g];
			++_g;
			var edge = this.get(id);
			if(null == edge || null == edge.graph) continue;
			this._remove(edge);
		}
		connections.remove(node.id);
	}
	,clear: function() {
		var items = Iterators.array(this.collection.iterator()).copy();
		var _g = 0;
		while(_g < items.length) {
			var item = items[_g];
			++_g;
			this.remove(item);
		}
	}
	,connections: function(id,connections) {
		var c = connections.get(id);
		if(null == c) connections.set(id,c = []);
		return c;
	}
	,removeConnection: function(edgeid,nodeid,connections) {
		var c = connections.get(nodeid);
		if(null == c) return;
		c.remove(edgeid);
		if(c.length == 0) connections.remove(nodeid);
	}
	,toString: function() {
		return "GraphEdges (" + IntHashes.count(this.collection) + "): " + rg.graph.GraphCollection.prototype.toString.call(this);
	}
	,__class__: rg.graph.GraphEdges
});
thx.math.Const = $hxClasses["thx.math.Const"] = function() { }
thx.math.Const.__name__ = ["thx","math","Const"];
thx.math.Const.prototype = {
	__class__: thx.math.Const
}
rg.svg.chart.StreamEffect = $hxClasses["rg.svg.chart.StreamEffect"] = { __ename__ : ["rg","svg","chart","StreamEffect"], __constructs__ : ["NoEffect","GradientHorizontal","GradientVertical"] }
rg.svg.chart.StreamEffect.NoEffect = ["NoEffect",0];
rg.svg.chart.StreamEffect.NoEffect.toString = $estr;
rg.svg.chart.StreamEffect.NoEffect.__enum__ = rg.svg.chart.StreamEffect;
rg.svg.chart.StreamEffect.GradientHorizontal = function(lightness) { var $x = ["GradientHorizontal",1,lightness]; $x.__enum__ = rg.svg.chart.StreamEffect; $x.toString = $estr; return $x; }
rg.svg.chart.StreamEffect.GradientVertical = function(lightness) { var $x = ["GradientVertical",2,lightness]; $x.__enum__ = rg.svg.chart.StreamEffect; $x.toString = $estr; return $x; }
thx.util.MacroVersion = $hxClasses["thx.util.MacroVersion"] = function() { }
thx.util.MacroVersion.__name__ = ["thx","util","MacroVersion"];
thx.util.MacroVersion.prototype = {
	__class__: thx.util.MacroVersion
}
chx.lang.EofException = $hxClasses["chx.lang.EofException"] = function(msg,cause) {
	chx.lang.IOException.call(this,msg,cause);
}
chx.lang.EofException.__name__ = ["chx","lang","EofException"];
chx.lang.EofException.__super__ = chx.lang.IOException;
chx.lang.EofException.prototype = $extend(chx.lang.IOException.prototype,{
	toString: function() {
		return "EOF";
	}
	,__class__: chx.lang.EofException
});
rg.svg.widget.Balloon = $hxClasses["rg.svg.widget.Balloon"] = function(container,bindOnTop) {
	if(bindOnTop == null) bindOnTop = true;
	if(bindOnTop) {
		var parent = container.node();
		while(null != parent && parent.nodeName != "svg") parent = parent.parentNode;
		this.container = null == parent?container:thx.js.Dom.selectNode(parent);
	} else this.container = container;
	this.visible = true;
	this.duration = 350;
	this.minwidth = 30;
	this.setPreferredSide(2);
	this.ease = thx.math.Ease.mode(thx.math.EaseMode.EaseOut,thx.math.Equations.cubic);
	this.setRoundedCorner(5);
	this.paddingHorizontal = 3.5;
	this.paddingVertical = 1.5;
	this.transition_id = 0;
	this.balloon = this.container.append("svg:g").attr("pointer-events").string("none").attr("class").string("balloon").attr("transform").string("translate(" + (this.x = 0) + ", " + (this.y = 0) + ")");
	this.frame = this.balloon.append("svg:g").attr("transform").string("translate(0, 0)").attr("class").string("frame");
	this.frame.append("svg:path").attr("class").string("shadow").attr("transform").string("translate(1, 1)");
	this.connectorShapeV = thx.svg.Diagonal.forObject();
	this.connectorShapeH = thx.svg.Diagonal.forObject().projection(function(d,i) {
		return [d[1],d[0]];
	});
	this.connector = this.balloon.append("svg:path").attr("class").string("balloon-connector").style("fill").string("none").style("display").string("none").attr("transform").string("translate(0, 0)");
	this.frame.append("svg:path").attr("class").string("bg");
	this.labelsContainer = this.frame.append("svg:g").attr("class").string("labels");
	this.labels = [];
	var temp = this.createLabel(0);
	temp.setText("HELLO");
	this.setLineHeight(temp.getSize().height);
	temp.destroy();
}
rg.svg.widget.Balloon.__name__ = ["rg","svg","widget","Balloon"];
rg.svg.widget.Balloon.prototype = {
	text: null
	,x: null
	,y: null
	,boxWidth: null
	,boxHeight: null
	,visible: null
	,lineHeight: null
	,roundedCorner: null
	,paddingHorizontal: null
	,paddingVertical: null
	,preferredSide: null
	,minwidth: null
	,labels: null
	,container: null
	,balloon: null
	,frame: null
	,labelsContainer: null
	,connector: null
	,duration: null
	,ease: null
	,connectorShapeV: null
	,connectorShapeH: null
	,boundingBox: null
	,addClass: function(name) {
		this.frame.select("path.bg").classed().add(name);
	}
	,removeClass: function(name) {
		this.frame.select("path.bg").classed().remove(name);
	}
	,createLabel: function(i) {
		var label = new rg.svg.widget.Label(this.labelsContainer,true,false,false);
		label.addClass("line-" + i);
		label.setAnchor(rg.svg.widget.GridAnchor.Top);
		label.setOrientation(rg.svg.widget.LabelOrientation.Orthogonal);
		label.place(0,i * this.lineHeight,90);
		return label;
	}
	,setPreferredSide: function(v) {
		this.preferredSide = Ints.clamp(v,0,3);
		this.redraw();
		return v;
	}
	,setText: function(v) {
		while(this.labels.length > v.length) {
			var label = this.labels.pop();
			label.destroy();
		}
		var _g1 = this.labels.length, _g = v.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.labels[i] = this.createLabel(i);
		}
		var _g1 = 0, _g = v.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.labels[i].setText(v[i]);
		}
		this.text = v;
		this.redraw();
		return v;
	}
	,setLineHeight: function(v) {
		this.lineHeight = v;
		this.redraw();
		return v;
	}
	,setPadding: function(h,v) {
		this.paddingHorizontal = h;
		this.paddingVertical = v;
		this.redraw();
	}
	,setRoundedCorner: function(v) {
		this.roundedCorner = v;
		this.redraw();
		return v;
	}
	,setBoundingBox: function(v) {
		this.boundingBox = v;
		this.redraw();
		return v;
	}
	,getBoundingBox: function() {
		if(null == this.boundingBox) try {
			this.setBoundingBox(this.container.node().getBBox());
		} catch( e ) {
			return { width : 0.0, height : 0.0, x : 0.0, y : 0.0};
		}
		return this.boundingBox;
	}
	,transition_id: null
	,moveTo: function(x,y,animate) {
		if(animate == null) animate = true;
		var me = this;
		if(animate) {
			var $int = thx.math.Equations.elasticf(), tid = ++this.transition_id, ix = Floats.interpolatef(this.x,x,this.ease), iy = Floats.interpolatef(this.y,y,this.ease);
			thx.js.Timer.timer(function(t) {
				if(tid != me.transition_id) return true;
				if(t > me.duration) {
					me._moveTo(x,y);
					return true;
				}
				me._moveTo(ix(t / me.duration),iy(t / me.duration));
				return false;
			},0);
		} else if(0 == this.boxWidth) haxe.Timer.delay((function(f,a1,a2) {
			return function() {
				return f(a1,a2);
			};
		})(this._moveTo.$bind(this),x,y),15); else this._moveTo(x,y);
	}
	,_moveTo: function(x,y) {
		var bb = this.getBoundingBox(), left = bb.x, right = bb.x + bb.width, top = bb.y, bottom = bb.y + bb.height, limit = this.roundedCorner * 2, offset = 0.0, diagonal = 0;
		var tx = 0.0, ty = 0.0, side = this.preferredSide, found = 1;
		while(found > 0 && found < 5) {
			if(x >= right - limit) {
				if(y <= top + limit) {
					if(x - right < top - y) {
						tx = -this.boxWidth + right - x;
						ty = top - y + this.roundedCorner;
						side = 0;
						offset = this.boxWidth - 4 * this.roundedCorner;
					} else {
						tx = -this.boxWidth + right - x - this.roundedCorner;
						ty = top - y;
						side = 1;
						offset = this.roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				} else if(y >= bottom - limit) {
					if(x - right < y - bottom) {
						tx = -this.boxWidth + right - x;
						ty = bottom - y - this.boxHeight - this.roundedCorner;
						side = 2;
						offset = this.boxWidth - 4 * this.roundedCorner;
					} else {
						tx = -this.boxWidth + right - x - this.roundedCorner;
						ty = bottom - y - this.boxHeight;
						side = 1;
						offset = this.boxHeight - 3 * this.roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				}
			} else if(x <= left + limit) {
				if(y <= top + limit) {
					if(left - x < top - y) {
						tx = left - x;
						ty = top - y + this.roundedCorner;
						side = 0;
						offset = 0;
					} else {
						tx = left - x + this.roundedCorner;
						ty = top - y;
						side = 3;
						offset = this.roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				} else if(y >= bottom - limit) {
					if(left - x < y - bottom) {
						tx = left - x;
						ty = bottom - y - this.boxHeight - this.roundedCorner;
						side = 2;
						offset = 0;
					} else {
						tx = left - x + this.roundedCorner;
						ty = bottom - y - this.boxHeight;
						side = 3;
						offset = this.boxHeight - 3 * this.roundedCorner;
					}
					found = 0;
					diagonal = 1;
					break;
				}
			}
			switch(side) {
			case 0:
				if(y + this.boxHeight + this.roundedCorner >= bottom) {
					side = 2;
					found++;
					continue;
				} else if(x <= left + limit) {
					side = 3;
					found++;
					continue;
				} else if(x >= right - limit) {
					side = 1;
					found++;
					continue;
				}
				tx = -this.boxWidth / 2;
				ty = this.roundedCorner;
				offset = this.boxWidth / 2 - this.roundedCorner * 2;
				if(x - this.boxWidth / 2 <= left) {
					var d = left - x + this.boxWidth / 2;
					offset = Math.max(0,offset - d);
					tx += d;
				} else if(x + this.boxWidth / 2 >= right) {
					var d = right - x - this.boxWidth / 2;
					offset = Math.min(this.boxWidth - this.roundedCorner * 3,offset - d);
					tx += d;
				}
				if(y < top) {
					diagonal = 1;
					ty = top - y + this.roundedCorner;
				}
				break;
			case 1:
				if(x - this.boxWidth - this.roundedCorner <= left) {
					side = 3;
					found++;
					continue;
				} else if(y <= top + limit) {
					side = 2;
					found++;
					continue;
				} else if(y >= bottom - limit) {
					side = 0;
					found++;
					continue;
				}
				tx = -this.boxWidth - this.roundedCorner;
				ty = -this.boxHeight / 2;
				offset = (this.boxHeight - this.roundedCorner * 2) / 2;
				if(y - this.boxHeight / 2 <= top) {
					var d = top - y + this.boxHeight / 2;
					offset = Math.max(0,offset - d);
					ty += d;
				} else if(y + this.boxHeight / 2 >= bottom) {
					var d = bottom - y - this.boxHeight / 2;
					offset = Math.min(this.boxHeight - this.roundedCorner * 3,offset - d);
					ty += d;
				}
				if(x > right) {
					diagonal = 2;
					tx = right - x - this.boxWidth - this.roundedCorner;
				}
				break;
			case 2:
				if(y - this.boxHeight - this.roundedCorner <= top) {
					side = 0;
					found++;
					continue;
				} else if(x <= left + limit) {
					side = 3;
					found++;
					continue;
				} else if(x >= right - limit) {
					side = 1;
					found++;
					continue;
				}
				tx = -this.boxWidth / 2;
				ty = -this.boxHeight - this.roundedCorner;
				offset = this.boxWidth / 2 - this.roundedCorner * 2;
				if(x - this.boxWidth / 2 <= left) {
					var d = left - x + this.boxWidth / 2;
					offset = Math.max(this.roundedCorner,offset - d);
					tx += d;
				} else if(x + this.boxWidth / 2 >= right) {
					var d = right - x - this.boxWidth / 2;
					offset = Math.min(this.boxWidth - this.roundedCorner * 3,offset - d);
					tx += d;
				}
				if(y > bottom) {
					diagonal = 1;
					ty = bottom - y - this.boxHeight - this.roundedCorner;
				}
				break;
			case 3:
				if(x + this.boxWidth + this.roundedCorner >= right) {
					side = 1;
					found++;
					continue;
				} else if(y <= top + limit) {
					side = 2;
					found++;
					continue;
				} else if(y >= bottom - limit) {
					side = 0;
					found++;
					continue;
				}
				tx = this.roundedCorner;
				ty = -this.boxHeight / 2;
				offset = (this.boxHeight - this.roundedCorner * 2) / 2;
				if(y - this.boxHeight / 2 <= top) {
					var d = top - y + this.boxHeight / 2;
					offset = Math.max(this.roundedCorner,offset - d);
					ty += d;
				} else if(y + this.boxHeight / 2 >= bottom) {
					var d = bottom - y - this.boxHeight / 2;
					offset = Math.min(this.boxHeight - this.roundedCorner * 3,offset - d);
					ty += d;
				}
				if(x < left) {
					diagonal = 2;
					tx = left - x + this.roundedCorner;
				}
				break;
			}
			found = 0;
		}
		var coords = null, off = 1.0;
		if(0 == diagonal) this.connector.style("display").string("none"); else {
			this.connector.style("display").string("block");
			coords = { x0 : off, y0 : off, x1 : off, y1 : off};
			switch(side) {
			case 0:
				coords.x1 = tx + off + offset + 2 * this.roundedCorner;
				coords.y1 = ty + off - this.roundedCorner;
				break;
			case 1:
				coords.y1 = tx + off + this.boxWidth + this.roundedCorner;
				coords.x1 = ty + off + offset + this.roundedCorner;
				break;
			case 2:
				coords.x1 = tx + off + offset + 2 * this.roundedCorner;
				coords.y1 = ty + off + this.boxHeight + this.roundedCorner;
				break;
			case 3:
				coords.y1 = tx + off + -this.roundedCorner;
				coords.x1 = ty + off + offset + this.roundedCorner;
				break;
			}
		}
		this.balloon.attr("transform").string("translate(" + (this.x = x) + ", " + (this.y = y) + ")");
		this.frame.attr("transform").string("translate(" + tx + ", " + ty + ")").selectAll("path").attr("d").string(rg.svg.widget.BalloonShape.shape(this.boxWidth,this.boxHeight,this.roundedCorner,this.roundedCorner,side,offset));
		if(0 != diagonal) this.connector.attr("d").string(side % 2 == 0?this.connectorShapeV.diagonal(coords):this.connectorShapeH.diagonal(coords));
	}
	,show: function(animate) {
		if(this.visible) return;
		this.visible = true;
		this.balloon.style("display").string("block");
		if(animate) this.balloon.transition().attr("opacity")["float"](1); else this.balloon.attr("opacity")["float"](1);
	}
	,hide: function(animate) {
		if(animate == null) animate = false;
		var me = this;
		if(!this.visible) return;
		this.visible = false;
		if(animate) this.balloon.transition().attr("opacity")["float"](0).endNode(function(_,_1) {
			me.balloon.style("display").string("none");
		}); else {
			this.balloon.attr("opacity")["float"](0);
			this.balloon.style("display").string("none");
		}
	}
	,redraw: function() {
		var me = this;
		if(null == this.text || this.text.length == 0) return;
		this.boxWidth = 0.0;
		var w = 0;
		var _g = 0, _g1 = this.labels;
		while(_g < _g1.length) {
			var label = _g1[_g];
			++_g;
			if((w = Math.ceil(label.getSize().width)) > this.boxWidth) this.boxWidth = w;
		}
		if(w == 0) {
			var t = this.text;
			haxe.Timer.delay(function() {
				me.setText(t);
			},15);
			return;
		}
		this.boxWidth += this.paddingHorizontal * 2;
		this.boxHeight = this.lineHeight * this.labels.length + this.paddingVertical * 2;
		var bg = this.frame.selectAll(".bg"), sw = bg.style("stroke-width").getFloat();
		if(Math.isNaN(sw)) sw = 0;
		this.labelsContainer.attr("transform").string("translate(" + this.boxWidth / 2 + "," + (sw + this.paddingVertical) + ")");
		bg.transition().ease(this.ease).delay(null,this.duration);
	}
	,__class__: rg.svg.widget.Balloon
	,__properties__: {set_boundingBox:"setBoundingBox",get_boundingBox:"getBoundingBox",set_preferredSide:"setPreferredSide",set_roundedCorner:"setRoundedCorner",set_lineHeight:"setLineHeight",set_text:"setText"}
}
rg.frame.Stack = $hxClasses["rg.frame.Stack"] = function(width,height,orientation) {
	this.orientation = null == orientation?rg.frame.Orientation.Vertical:orientation;
	this.children = [];
	this.width = width;
	this.height = height;
}
rg.frame.Stack.__name__ = ["rg","frame","Stack"];
rg.frame.Stack.prototype = {
	children: null
	,width: null
	,height: null
	,orientation: null
	,length: null
	,moreSpaceRequired: function(size) {
	}
	,insertItem: function(pos,child) {
		if(null == child) return this;
		if(pos >= this.children.length) return this.addItem(child);
		if(pos < 0) pos = 0;
		this.children.insert(pos,child);
		var f = child;
		f.setParent(this);
		this.reflow();
		return this;
	}
	,addItem: function(child) {
		if(null == child) return this;
		this.children.push(child);
		var f = child;
		f.setParent(this);
		this.reflow();
		return this;
	}
	,addItems: function(it) {
		var added = false;
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var child = $it0.next();
			if(null == child) continue;
			added = true;
			this.children.push(child);
			var f = child;
			f.setParent(this);
		}
		if(added) this.reflow();
		return this;
	}
	,removeChild: function(child) {
		if(!this.children.remove(child)) return false;
		var f = child;
		f.setParent(null);
		this.reflow();
		return true;
	}
	,iterator: function() {
		return this.children.iterator();
	}
	,reflow: function() {
		var available = (function($this) {
			var $r;
			switch( ($this.orientation)[1] ) {
			case 0:
				$r = $this.height;
				break;
			case 1:
				$r = $this.width;
				break;
			}
			return $r;
		}(this)), otherdimension = (function($this) {
			var $r;
			switch( ($this.orientation)[1] ) {
			case 0:
				$r = $this.width;
				break;
			case 1:
				$r = $this.height;
				break;
			}
			return $r;
		}(this));
		var required = 0, values = [], variables = [], i = 0, variablespace = 0;
		var _g = 0, _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			var $e = (child.disposition);
			switch( $e[1] ) {
			case 0:
				var max = $e[5], min = $e[4], after = $e[3], before = $e[2];
				if(null == min) min = 0;
				if(null == max) max = available;
				required += min + before + after;
				variablespace += variables[i] = max - min;
				values.push(min + before + after);
				break;
			case 1:
				var max = $e[6], min = $e[5], percent = $e[4], after = $e[3], before = $e[2];
				var size = Math.round(percent * available);
				if(null != min && size < min) size = min;
				if(null != max && size > max) size = max;
				required += size + before + after;
				values.push(size + before + after);
				break;
			case 2:
				var ratio = $e[4], after = $e[3], before = $e[2];
				if(null == ratio) ratio = 1;
				var size = Math.round(otherdimension * ratio);
				required += size + before + after;
				values.push(size + before + after);
				break;
			case 3:
				var size = $e[4], after = $e[3], before = $e[2];
				required += size + before + after;
				values.push(size + before + after);
				break;
			case 4:
				var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
				values.push(0);
				break;
			}
			i++;
		}
		available -= required;
		if(available > 0) {
			i = 0;
			var _g = 0, _g1 = this.children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				switch( (child.disposition)[1] ) {
				case 0:
					var size = Math.round(variables[i] / variablespace * available);
					values[i] += size;
					break;
				default:
				}
				i++;
			}
		}
		i = 0;
		var sizeable;
		var pos = 0;
		switch( (this.orientation)[1] ) {
		case 0:
			var _g = 0, _g1 = this.children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				sizeable = child;
				var $e = (child.disposition);
				switch( $e[1] ) {
				case 4:
					var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
					sizeable.setLayout(x,y,w,h);
					break;
				case 3:
				case 0:
				case 1:
				case 2:
					var after = $e[3], before = $e[2];
					sizeable.setLayout(0,pos + before,this.width,values[i] - after - before);
					break;
				}
				pos += values[i++];
			}
			break;
		case 1:
			var _g = 0, _g1 = this.children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				sizeable = child;
				var $e = (child.disposition);
				switch( $e[1] ) {
				case 4:
					var h = $e[5], w = $e[4], y = $e[3], x = $e[2];
					sizeable.setLayout(x,y,w,h);
					break;
				case 3:
				case 0:
				case 1:
				case 2:
					var after = $e[3], before = $e[2];
					sizeable.setLayout(pos + before,0,values[i] - after - before,this.height);
					break;
				}
				pos += values[i++];
			}
			break;
		}
		if(available < 0) this.moreSpaceRequired(required);
	}
	,getLength: function() {
		return this.children.length;
	}
	,setSize: function(width,height) {
		if(this.width == width && this.height == height) return this;
		this.width = width;
		this.height = height;
		this.reflow();
		return this;
	}
	,toString: function() {
		return "Stack [width: " + this.width + ", height: " + this.height + ", children: " + this.children.length + "]";
	}
	,__class__: rg.frame.Stack
	,__properties__: {get_length:"getLength"}
}
var BytesBuffer = $hxClasses["BytesBuffer"] = function() {
	this.b = new Array();
}
BytesBuffer.__name__ = ["BytesBuffer"];
BytesBuffer.prototype = {
	b: null
	,addByte: function($byte) {
		this.b.push($byte);
	}
	,add: function(src) {
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = 0, _g = src.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) throw new chx.lang.OutsideBoundsException();
		var b1 = this.b;
		var b2 = src.b;
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			this.b.push(b2[i]);
		}
	}
	,getBytes: function() {
		var bytes = new Bytes(this.b.length,this.b);
		this.b = null;
		return bytes;
	}
	,writeByte: function(b) {
		this.b.push(b);
	}
	,writeBytes: function(src,pos,len) {
		this.addBytes(src,pos,len);
	}
	,__class__: BytesBuffer
}
thx.math.scale.IScale = $hxClasses["thx.math.scale.IScale"] = function() { }
thx.math.scale.IScale.__name__ = ["thx","math","scale","IScale"];
thx.math.scale.IScale.prototype = {
	scale: null
	,getDomain: null
	,getRange: null
	,__class__: thx.math.scale.IScale
}
rg.visualization.VisualizationSankey = $hxClasses["rg.visualization.VisualizationSankey"] = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
}
rg.visualization.VisualizationSankey.__name__ = ["rg","visualization","VisualizationSankey"];
rg.visualization.VisualizationSankey.defaultIdf = function(idf) {
	if(idf == null) return function(data) {
		return data.id;
	}; else return idf;
}
rg.visualization.VisualizationSankey.defaultNodef = function(nodef) {
	if(nodef == null) {
		var dummynodeid = 0;
		return function(edge) {
			return { id : "#" + ++dummynodeid, weight : edge.weight, extrain : 0.0, extraout : 0.0};
		};
	} else return nodef;
}
rg.visualization.VisualizationSankey.defaultEdgesf = function(idf,edgesf) {
	if(edgesf == null) return function(dp) {
		var r = [], id = idf(dp);
		var _g = 0, _g1 = Reflect.fields(dp.parents);
		while(_g < _g1.length) {
			var parent = _g1[_g];
			++_g;
			r.push({ head : id, tail : parent, weight : Reflect.field(dp.parents,parent)});
		}
		return r;
	}; else return edgesf;
}
rg.visualization.VisualizationSankey.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationSankey.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	info: null
	,title: null
	,chart: null
	,init: function() {
		var me = this;
		if(null != this.info.label.title) {
			var panelContextTitle = this.layout.getContext("title");
			if(null == panelContextTitle) return;
			this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
		}
		var panelChart = this.layout.getPanel(this.layout.mainPanelName);
		this.chart = new rg.svg.chart.Sankey(panelChart);
		this.baseChart = this.chart;
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables,data);
		if(null != this.title) {
			if(null != this.info.label.title) {
				this.title.setText(this.info.label.title(this.variables,data));
				this.layout.suggestSize("title",this.title.idealHeight());
			} else this.layout.suggestSize("title",0);
		}
		var layout = null != this.info.layoutmap?this.layoutDataWithMap(data,this.info.layoutmap):this.layoutData(data,this.info.layoutmethod);
		if(null != this.info.layerWidth) this.chart.layerWidth = this.info.layerWidth;
		if(null != this.info.nodeSpacing) this.chart.nodeSpacing = this.info.nodeSpacing;
		if(null != this.info.dummySpacing) this.chart.dummySpacing = this.info.dummySpacing;
		if(null != this.info.extraWidth) this.chart.extraWidth = this.info.extraWidth;
		if(null != this.info.backEdgeSpacing) this.chart.backEdgeSpacing = this.info.backEdgeSpacing;
		if(null != this.info.extraHeight) this.chart.extraHeight = this.info.extraHeight;
		if(null != this.info.extraRadius) this.chart.extraRadius = this.info.extraRadius;
		if(null != this.info.imageWidth) this.chart.imageWidth = this.info.imageWidth;
		if(null != this.info.imageHeight) this.chart.imageHeight = this.info.imageHeight;
		if(null != this.info.imageSpacing) this.chart.imageSpacing = this.info.imageSpacing;
		if(null != this.info.labelNodeSpacing) this.chart.labelNodeSpacing = this.info.labelNodeSpacing;
		this.chart.labelDataPoint = this.info.label.datapoint;
		this.chart.labelDataPointOver = this.info.label.datapointover;
		this.chart.labelNode = this.info.label.node;
		this.chart.labelEdge = this.info.label.edge;
		this.chart.labelEdgeOver = this.info.label.edgeover;
		this.chart.imagePath = this.info.imagePath;
		this.chart.click = this.info.click;
		this.chart.clickEdge = this.info.clickEdge;
		this.chart.init();
		this.chart.data(layout);
	}
	,layoutDataWithMap: function(data,map,idf,weightf,edgesf) {
		var graph = this.createGraph(data,idf,weightf,edgesf);
		var _g = 0, _g1 = map.dummies;
		while(_g < _g1.length) {
			var path = _g1[_g];
			++_g;
			var tail = graph.nodes.getById(path[0]), head = graph.nodes.getById(path[path.length - 1]), npath = [tail], edge = tail.connectedBy(head), weight = null == edge?0.0:edge.weight;
			var _g3 = 1, _g2 = path.length - 1;
			while(_g3 < _g2) {
				var i = _g3++;
				var id = path[i], d = { id : id, weight : weight, extrain : 0.0, extraout : 0.0, dp : null};
				npath.push(graph.nodes.create(d));
			}
			npath.push(head);
			var _g3 = 0, _g2 = npath.length - 1;
			while(_g3 < _g2) {
				var i = _g3++;
				graph.edges.create(npath[i],npath[i + 1],weight);
			}
			if(null != edge) edge.graph.edges._remove(edge);
		}
		var layers = map.layers.map(function(layer,_) {
			return layer.map(function(id,_1) {
				return graph.nodes.getById(id).id;
			});
		});
		return new rg.graph.GraphLayout(graph,layers);
	}
	,createGraph: function(data,idf,weightf,edgesf) {
		idf = rg.visualization.VisualizationSankey.defaultIdf(idf);
		edgesf = rg.visualization.VisualizationSankey.defaultEdgesf(idf,edgesf);
		weightf = this.defaultWeightf(weightf);
		var graph = new rg.graph.Graph(idf);
		var nodes = this.extractNodes(data), edges = this.extractEdges(data);
		var _g = 0;
		while(_g < nodes.length) {
			var dp = nodes[_g];
			++_g;
			graph.nodes.create({ dp : dp, id : idf(dp), weight : weightf(dp), extrain : 0.0, extraout : 0.0});
		}
		var _g = 0;
		while(_g < edges.length) {
			var edge = edges[_g];
			++_g;
			var head = graph.nodes.getById(edge.head), tail = graph.nodes.getById(edge.tail);
			graph.edges.create(tail,head,weightf(edge));
		}
		var $it0 = graph.nodes.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			var win = node.negativeWeight(), wout = node.positiveWeight();
			if(node.data.weight == 0) node.data.weight = win;
			node.data.extrain = Math.max(0,node.data.weight - win);
			node.data.extraout = Math.max(0,node.data.weight - wout);
		}
		return graph;
	}
	,extractNodes: function(data) {
		var nodes = Arrays.filter(data,function(dp) {
			return dp.id != null;
		});
		if(nodes.length == 0) {
			var type = this.dependentVariables[0].type, map = new Hash(), edges = Arrays.filter(data,function(dp) {
				return Reflect.hasField(dp,"head") || Reflect.hasField(dp,"tail");
			});
			var nodize = function(name,istail,weight) {
				if(null == name) return;
				var n = map.get(name);
				if(null == n) {
					n = { node : { id : name}, positive : 0.0, negative : 0.0};
					map.set(name,n);
				}
				if(istail) n.positive += weight; else n.negative += weight;
			};
			edges.forEach(function(dp,i) {
				var v = Reflect.field(dp,type);
				nodize(dp.tail,true,v);
				nodize(dp.head,false,v);
			});
			nodes = Iterators.array(map.iterator()).map(function(n,i) {
				var node = n.node;
				node[type] = Math.max(n.positive,n.negative);
				return node;
			});
		}
		return nodes;
	}
	,extractEdges: function(data) {
		return Arrays.filter(data,function(dp) {
			return dp.head != null && dp.tail != null;
		});
	}
	,layoutData: function(data,method,idf,nodef,weightf,edgesf) {
		var graph = this.createGraph(data,idf,weightf,edgesf);
		nodef = rg.visualization.VisualizationSankey.defaultNodef(nodef);
		switch(method) {
		case "weightbalance":
			return this.weightBalance(graph,nodef);
		default:
			return this.sugiyama(graph,nodef);
		}
	}
	,weightBalance: function(graph,nodef) {
		var layout = new rg.graph.GraphLayout(graph,new rg.graph.HeaviestNodeLayer().lay(graph));
		layout = new rg.graph.EdgeSplitter().split(layout,[],nodef);
		layout = rg.graph.GreedySwitchDecrosser.best().decross(layout);
		return layout;
	}
	,sugiyama: function(graph,nodef) {
		return new rg.graph.SugiyamaMethod().resolve(graph,nodef);
	}
	,defaultWeightf: function(weightf) {
		if(null == weightf) {
			var type = this.dependentVariables[0].type;
			return function(dp) {
				var v = Reflect.field(dp,type);
				return null != v?v:0.0;
			};
		} else return weightf;
	}
	,destroy: function() {
		this.chart.destroy();
		if(null != this.title) this.title.destroy();
		rg.visualization.VisualizationSvg.prototype.destroy.call(this);
	}
	,__class__: rg.visualization.VisualizationSankey
});
if(!rg.svg.util) rg.svg.util = {}
rg.svg.util.SymbolCache = $hxClasses["rg.svg.util.SymbolCache"] = function() {
	this.c = new Hash();
	this.r = 0;
}
rg.svg.util.SymbolCache.__name__ = ["rg","svg","util","SymbolCache"];
rg.svg.util.SymbolCache.cache = null;
rg.svg.util.SymbolCache.prototype = {
	c: null
	,r: null
	,get: function(type,size) {
		if(size == null) size = 100;
		var k = type + ":" + size, s = this.c.get(k);
		if(null == s) {
			s = (Reflect.field(thx.svg.Symbol,type))(size);
			this.c.set(k,s);
		}
		return s;
	}
	,stats: function() {
		return { cachedSymbols : Iterators.array(this.c.iterator()).length};
	}
	,__class__: rg.svg.util.SymbolCache
}
rg.data.IndependentVariableProcessor = $hxClasses["rg.data.IndependentVariableProcessor"] = function() {
}
rg.data.IndependentVariableProcessor.__name__ = ["rg","data","IndependentVariableProcessor"];
rg.data.IndependentVariableProcessor.prototype = {
	process: function(data,variables) {
		var _g = 0;
		while(_g < variables.length) {
			var variable = variables[_g];
			++_g;
			variable.stats.addMany(rg.util.DataPoints.values(data,variable.type));
			var discrete;
			if(null != variable.scaleDistribution && null != (discrete = Types["as"](variable.axis,rg.axis.IAxisDiscrete))) {
				discrete.setScaleDistribution(variable.scaleDistribution);
				variable.scaleDistribution = null;
			}
		}
	}
	,__class__: rg.data.IndependentVariableProcessor
}
rg.svg.widget.GridAnchors = $hxClasses["rg.svg.widget.GridAnchors"] = function() { }
rg.svg.widget.GridAnchors.__name__ = ["rg","svg","widget","GridAnchors"];
rg.svg.widget.GridAnchors.parse = function(s) {
	return (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "topleft":
			$r = rg.svg.widget.GridAnchor.TopLeft;
			break;
		case "top":
			$r = rg.svg.widget.GridAnchor.Top;
			break;
		case "topright":
			$r = rg.svg.widget.GridAnchor.TopRight;
			break;
		case "left":
			$r = rg.svg.widget.GridAnchor.Left;
			break;
		case "center":
			$r = rg.svg.widget.GridAnchor.Center;
			break;
		case "right":
			$r = rg.svg.widget.GridAnchor.Right;
			break;
		case "bottomleft":
			$r = rg.svg.widget.GridAnchor.BottomLeft;
			break;
		case "bottom":
			$r = rg.svg.widget.GridAnchor.Bottom;
			break;
		case "bottomright":
			$r = rg.svg.widget.GridAnchor.BottomRight;
			break;
		default:
			$r = rg.svg.widget.GridAnchor.Center;
		}
		return $r;
	}(this));
}
rg.svg.widget.GridAnchors.prototype = {
	__class__: rg.svg.widget.GridAnchors
}
rg.info.InfoBarChart = $hxClasses["rg.info.InfoBarChart"] = function() {
	rg.info.InfoCartesianChart.call(this);
	this.stacked = true;
	this.effect = rg.svg.chart.GradientEffect.Gradient(1.25);
	this.barPadding = 12;
	this.barPaddingAxis = 4;
	this.barPaddingDataPoint = 2;
	this.horizontal = false;
}
rg.info.InfoBarChart.__name__ = ["rg","info","InfoBarChart"];
rg.info.InfoBarChart.filters = function() {
	return [{ field : "stacked", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "horizontal", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "effect", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.GradientEffects.parse(v)}];
	}},{ field : "barpadding", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "barPadding", value : v}];
	}},{ field : "barpaddingaxis", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "barPaddingAxis", value : v}];
	}},{ field : "barpaddingdatapoint", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "barPaddingDataPoint", value : v}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoBarChart.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoBarChart.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	stacked: null
	,effect: null
	,barPaddingDataPoint: null
	,barPaddingAxis: null
	,barPadding: null
	,horizontal: null
	,__class__: rg.info.InfoBarChart
});
rg.info.InfoSegment = $hxClasses["rg.info.InfoSegment"] = function() {
}
rg.info.InfoSegment.__name__ = ["rg","info","InfoSegment"];
rg.info.InfoSegment.filters = function() {
	return [{ field : "on", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "transform", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "scale", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.info.InfoSegment.prototype = {
	on: null
	,transform: null
	,scale: null
	,__class__: rg.info.InfoSegment
}
rg.layout.LayoutCartesian = $hxClasses["rg.layout.LayoutCartesian"] = function(width,height,container) {
	rg.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
	this.left = true;
	this.alternating = true;
	this.yitems = [];
}
rg.layout.LayoutCartesian.__name__ = ["rg","layout","LayoutCartesian"];
rg.layout.LayoutCartesian.__super__ = rg.layout.Layout;
rg.layout.LayoutCartesian.prototype = $extend(rg.layout.Layout.prototype,{
	main: null
	,titleOnTop: null
	,leftcontainer: null
	,rightcontainer: null
	,bottomcontainer: null
	,bottommiddlecontainer: null
	,maincontainer: null
	,middlecontainer: null
	,bottomleft: null
	,bottomright: null
	,xtickmarks: null
	,title: null
	,left: null
	,alternating: null
	,yitems: null
	,xtitle: null
	,getContext: function(name) {
		if(this.isY(name)) return this.getYContext(this.getYIndex(name)); else if(this.isYTitle(name)) return this.getYTitle(this.getYIndex(name));
		switch(name) {
		case "title":
			if(null == this.title) this.title = new rg.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.frame.FrameLayout.Fixed(0,0,0)),this.titleOnTop?rg.layout.Anchor.Bottom:rg.layout.Anchor.Top);
			return this.title;
		case "x":
			return this.getXTickmarks();
		case "xtitle":
			return this.getXTitle();
		default:
			return null;
		}
	}
	,getPanel: function(name) {
		switch(name) {
		case "main":
			return this.getMain();
		case "xtickmarks":
			return this.getBottomContainer();
		case "left":
			return this.getLeftContainer();
		case "right":
			return this.getRightContainer();
		case "bottomleft":
			return this.bottomleft;
		case "bottomright":
			return this.bottomright;
		default:
			var ctx = this.getContext(name);
			if(null == ctx) return null;
			return ctx.panel;
		}
	}
	,getYItem: function(index) {
		if(null == this.yitems[index]) this.yitems[index] = { container : null, context : null, title : null, anchor : this.alternating && index % 2 == 0?rg.layout.Anchor.Right:rg.layout.Anchor.Left};
		return this.yitems[index];
	}
	,getYContainer: function(index) {
		var item = this.getYItem(index);
		if(null == item.container) {
			if(this.alternating && index % 2 == 0) item.container = this.getLeftContainer().createContainerAt(0,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal); else item.container = this.getRightContainer().createContainer(rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
			item.container.g.classed().add("group-" + index);
		}
		return item.container;
	}
	,getYContext: function(index) {
		var item = this.getYItem(index);
		if(null == item.context) {
			var panel = (function($this) {
				var $r;
				switch( (item.anchor)[1] ) {
				case 2:
					$r = $this.getYContainer(index).createPanelAt(0,rg.frame.FrameLayout.Fixed(0,0,0));
					break;
				case 3:
					$r = $this.getYContainer(index).createPanel(rg.frame.FrameLayout.Fixed(0,0,0));
					break;
				default:
					$r = null;
				}
				return $r;
			}(this));
			item.context = new rg.layout.PanelContext(panel,item.anchor);
		}
		return item.context;
	}
	,getYTitle: function(index) {
		var item = this.getYItem(index);
		if(null == item.title) {
			var panel = (function($this) {
				var $r;
				switch( (item.anchor)[1] ) {
				case 2:
					$r = $this.getYContainer(index).createPanel(rg.frame.FrameLayout.Fixed(0,0,0));
					break;
				case 3:
					$r = $this.getYContainer(index).createPanelAt(0,rg.frame.FrameLayout.Fixed(0,0,0));
					break;
				default:
					$r = null;
				}
				return $r;
			}(this));
			item.title = new rg.layout.PanelContext(panel,item.anchor);
		}
		return item.title;
	}
	,getYIndex: function(s) {
		if(!rg.layout.LayoutCartesian.REYINDEX.match(s)) return -1; else return Std.parseInt(rg.layout.LayoutCartesian.REYINDEX.matched(1));
	}
	,isY: function(s) {
		return rg.layout.LayoutCartesian.REYAXIS.match(s);
	}
	,isYTitle: function(s) {
		return rg.layout.LayoutCartesian.REYTITLE.match(s);
	}
	,suggestSize: function(name,size) {
		if(this.isY(name) || this.isYTitle(name)) {
			var index = this.getYIndex(name), item = this.getYItem(index);
			if(null == item.container) return;
			var ysize = 0.0;
			if(null != item.context) {
				if(this.isY(name)) this.suggestPanelSize(item.context.panel,size);
				ysize += item.context.panel.frame.width;
			}
			if(null != item.title) {
				if(this.isYTitle(name)) this.suggestPanelSize(item.title.panel,size);
				ysize += item.title.panel.frame.width;
			}
			this.suggestPanelSize(item.container,Math.round(ysize));
			this.suggestLateralSize(item.anchor);
			return;
		}
		rg.layout.Layout.prototype.suggestSize.call(this,name,size);
		switch(name) {
		case "x":case "xtitle":
			var size1 = 0, c = this.getPanel("x");
			if(null != c) size1 += c.frame.height;
			c = this.getPanel("xtitle");
			if(null != c) size1 += c.frame.height;
			rg.layout.Layout.prototype.suggestSize.call(this,"xtickmarks",size1);
			break;
		}
	}
	,suggestLateralSize: function(anchor) {
		var size = 0;
		var i = 0;
		var _g = 0, _g1 = this.yitems;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			i++;
			if(null == item.container || !Type.enumEq(item.anchor,anchor)) continue;
			size += item.container.frame.width;
		}
		switch( (anchor)[1] ) {
		case 3:
			this.suggestSize("left",size);
			this.suggestSize("bottomleft",size);
			break;
		case 2:
			this.suggestSize("right",size);
			this.suggestSize("bottomright",size);
			break;
		default:
		}
	}
	,getXTitle: function() {
		if(null == this.xtitle) this.xtitle = new rg.layout.PanelContext(this.getBottomMiddleContainer().createPanel(rg.frame.FrameLayout.Fixed(0,0,0)),rg.layout.Anchor.Top);
		return this.xtitle;
	}
	,getMainContainer: function() {
		if(null == this.maincontainer) this.maincontainer = this.space.createContainerAt(this.titleOnTop?1:0,rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Vertical);
		return this.maincontainer;
	}
	,getMiddleContainer: function() {
		if(null == this.middlecontainer) this.middlecontainer = this.getMainContainer().createContainerAt(0,rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Horizontal);
		return this.middlecontainer;
	}
	,getLeftContainer: function() {
		if(null == this.leftcontainer) this.leftcontainer = this.getMiddleContainer().createContainerAt(0,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
		return this.leftcontainer;
	}
	,getRightContainer: function() {
		if(null == this.rightcontainer) this.rightcontainer = this.getMiddleContainer().createContainerAt(2,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
		return this.rightcontainer;
	}
	,getBottomContainer: function() {
		if(null == this.bottomcontainer) this.bottomcontainer = this.getMainContainer().createContainerAt(1,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
		return this.bottomcontainer;
	}
	,getBottomMiddleContainer: function() {
		if(null == this.bottommiddlecontainer) {
			var container = this.getBottomContainer();
			this.bottomleft = container.createPanel(rg.frame.FrameLayout.Fixed(0,0,0));
			this.bottommiddlecontainer = container.createContainer(rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Vertical);
			this.bottommiddlecontainer.g.classed().add("axis-x");
			this.bottomright = container.createPanel(rg.frame.FrameLayout.Fixed(0,0,0));
		}
		return this.bottommiddlecontainer;
	}
	,getXTickmarks: function() {
		if(null == this.xtickmarks) {
			var container = this.getBottomMiddleContainer();
			this.xtickmarks = new rg.layout.PanelContext(container.createPanelAt(0,rg.frame.FrameLayout.Fixed(0,0,0)),rg.layout.Anchor.Top);
		}
		return this.xtickmarks;
	}
	,getMain: function() {
		if(null == this.main) this.main = this.getMiddleContainer().createPanelAt(1,rg.frame.FrameLayout.Fill(0,0));
		return this.main;
	}
	,feedOptions: function(info) {
		rg.layout.Layout.prototype.feedOptions.call(this,info);
		this.titleOnTop = info.titleOnTop;
		switch( (info.scalePattern)[1] ) {
		case 0:
			this.left = true;
			this.alternating = false;
			break;
		case 1:
			this.left = false;
			this.alternating = false;
			break;
		case 2:
			this.left = true;
			this.alternating = true;
			break;
		}
	}
	,adjustPadding: function() {
		var top = null == this.title && null == this.paddings.top?8:this.paddings.top, bottom = (null == this.xtickmarks || !this.titleOnTop && null == this.title) && null == this.paddings.bottom?8:this.paddings.bottom, left = null == this.leftcontainer && null == this.paddings.left?20:this.paddings.left, right = null == this.rightcontainer && null == this.paddings.right?20:this.paddings.right;
		if(null != left || null != right) {
			this.suggestPanelPadding(this.getMain(),left,right);
			this.suggestPanelPadding(this.bottommiddlecontainer,left,right);
		}
		if(null != top || null != bottom) this.suggestPanelPadding(this.middlecontainer,top,bottom);
	}
	,__class__: rg.layout.LayoutCartesian
});
rg.layout.LayoutSimple = $hxClasses["rg.layout.LayoutSimple"] = function(width,height,container) {
	rg.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
}
rg.layout.LayoutSimple.__name__ = ["rg","layout","LayoutSimple"];
rg.layout.LayoutSimple.__super__ = rg.layout.Layout;
rg.layout.LayoutSimple.prototype = $extend(rg.layout.Layout.prototype,{
	main: null
	,titleOnTop: null
	,getContext: function(name) {
		switch(name) {
		case "title":
			if(null != this.title) return null;
			return this.getTitle();
		default:
			return null;
		}
	}
	,getPanel: function(name) {
		switch(name) {
		case "main":
			if(null == this.main) this.main = this.space.createPanelAt(this.titleOnTop?1:0,rg.frame.FrameLayout.Fill(0,0));
			return this.main;
		case "title":
			return this.getTitle().panel;
		default:
			return null;
		}
	}
	,title: null
	,getTitle: function() {
		if(null == this.title) this.title = new rg.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.frame.FrameLayout.Fixed(0,0,20)),this.titleOnTop?rg.layout.Anchor.Bottom:rg.layout.Anchor.Top);
		return this.title;
	}
	,feedOptions: function(info) {
		rg.layout.Layout.prototype.feedOptions.call(this,info);
		this.titleOnTop = info.titleOnTop;
	}
	,__class__: rg.layout.LayoutSimple
});
rg.layout.LayoutX = $hxClasses["rg.layout.LayoutX"] = function(width,height,container) {
	rg.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
}
rg.layout.LayoutX.__name__ = ["rg","layout","LayoutX"];
rg.layout.LayoutX.__super__ = rg.layout.Layout;
rg.layout.LayoutX.prototype = $extend(rg.layout.Layout.prototype,{
	main: null
	,titleOnTop: null
	,bottomcontainer: null
	,bottommiddlecontainer: null
	,maincontainer: null
	,middlecontainer: null
	,xtickmarks: null
	,title: null
	,xtitle: null
	,getContext: function(name) {
		switch(name) {
		case "title":
			if(null == this.title) this.title = new rg.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.frame.FrameLayout.Fixed(0,0,0)),this.titleOnTop?rg.layout.Anchor.Bottom:rg.layout.Anchor.Top);
			return this.title;
		case "x":
			return this.getXTickmarks();
		case "xtitle":
			return this.getXTitle();
		default:
			return null;
		}
	}
	,getPanel: function(name) {
		switch(name) {
		case "main":
			return this.getMain();
		case "xtickmarks":
			return this.getBottomContainer();
		default:
			var ctx = this.getContext(name);
			if(null == ctx) return null;
			return ctx.panel;
		}
	}
	,suggestSize: function(name,size) {
		rg.layout.Layout.prototype.suggestSize.call(this,name,size);
		switch(name) {
		case "x":case "xtitle":
			var size1 = 0, c = this.getPanel("x");
			if(null != c) size1 += c.frame.height;
			c = this.getPanel("xtitle");
			if(null != c) size1 += c.frame.height;
			rg.layout.Layout.prototype.suggestSize.call(this,"xtickmarks",size1);
			break;
		}
	}
	,getXTitle: function() {
		if(null == this.xtitle) this.xtitle = new rg.layout.PanelContext(this.getBottomMiddleContainer().createPanel(rg.frame.FrameLayout.Fixed(0,0,0)),rg.layout.Anchor.Top);
		return this.xtitle;
	}
	,getMainContainer: function() {
		if(null == this.maincontainer) this.maincontainer = this.space.createContainerAt(this.titleOnTop?1:0,rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Vertical);
		return this.maincontainer;
	}
	,getMiddleContainer: function() {
		if(null == this.middlecontainer) this.middlecontainer = this.getMainContainer().createContainerAt(0,rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Horizontal);
		return this.middlecontainer;
	}
	,getBottomContainer: function() {
		if(null == this.bottomcontainer) this.bottomcontainer = this.getMainContainer().createContainerAt(1,rg.frame.FrameLayout.Fixed(0,0,0),rg.frame.Orientation.Horizontal);
		return this.bottomcontainer;
	}
	,getBottomMiddleContainer: function() {
		if(null == this.bottommiddlecontainer) {
			var container = this.getBottomContainer();
			this.bottommiddlecontainer = container.createContainer(rg.frame.FrameLayout.Fill(0,0),rg.frame.Orientation.Vertical);
			this.bottommiddlecontainer.g.classed().add("axis-x");
		}
		return this.bottommiddlecontainer;
	}
	,getXTickmarks: function() {
		if(null == this.xtickmarks) {
			var container = this.getBottomMiddleContainer();
			this.xtickmarks = new rg.layout.PanelContext(container.createPanelAt(0,rg.frame.FrameLayout.Fixed(0,0,0)),rg.layout.Anchor.Top);
		}
		return this.xtickmarks;
	}
	,getMain: function() {
		if(null == this.main) this.main = this.getMiddleContainer().createPanelAt(1,rg.frame.FrameLayout.Fill(0,0));
		return this.main;
	}
	,feedOptions: function(info) {
		rg.layout.Layout.prototype.feedOptions.call(this,info);
		this.titleOnTop = info.titleOnTop;
	}
	,adjustPadding: function() {
		var top = null == this.title && null == this.paddings.top?8:this.paddings.top, bottom = (null == this.xtickmarks || !this.titleOnTop && null == this.title) && null == this.paddings.bottom?8:this.paddings.bottom, left = null == this.paddings.left?20:this.paddings.left, right = null == this.paddings.right?20:this.paddings.right;
		if(null != left || null != right) {
			this.suggestPanelPadding(this.getMain(),left,right);
			this.suggestPanelPadding(this.bottommiddlecontainer,left,right);
		}
		if(null != top || null != bottom) this.suggestPanelPadding(this.middlecontainer,top,bottom);
	}
	,__class__: rg.layout.LayoutX
});
rg.visualization.Visualizations = $hxClasses["rg.visualization.Visualizations"] = function() { }
rg.visualization.Visualizations.__name__ = ["rg","visualization","Visualizations"];
rg.visualization.Visualizations.layoutDefault = null;
rg.visualization.Visualizations.layoutType = null;
rg.visualization.Visualizations.layoutArgs = null;
rg.visualization.Visualizations.instantiateLayout = function(name,width,height,container) {
	return Type.createInstance(rg.visualization.Visualizations.layoutType.get(name),[width,height,container]);
}
rg.visualization.Visualizations.prototype = {
	__class__: rg.visualization.Visualizations
}
chx.io.Input = $hxClasses["chx.io.Input"] = function() { }
chx.io.Input.__name__ = ["chx","io","Input"];
chx.io.Input.prototype = {
	bytesAvailable: null
	,bigEndian: null
	,readByte: function() {
		return (function($this) {
			var $r;
			throw new chx.lang.FatalException("Not implemented");
			return $r;
		}(this));
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) throw new chx.lang.OutsideBoundsException();
		while(k > 0) {
			b[pos] = this.readByte();
			pos++;
			k--;
		}
		return len;
	}
	,isEof: function() {
		return (function($this) {
			var $r;
			throw new chx.lang.UnsupportedException("Not implemented for this input type");
			return $r;
		}(this));
	}
	,close: function() {
	}
	,readAll: function(bufsize) {
		if(bufsize == null) bufsize = 16384;
		var buf = Bytes.alloc(bufsize);
		var total = new BytesBuffer();
		try {
			while(true) {
				var len = this.readBytes(buf,0,bufsize);
				if(len == 0) throw new chx.lang.BlockedException();
				total.addBytes(buf,0,len);
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,chx.lang.EofException) ) {
			} else throw(e);
		}
		return total.getBytes();
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			pos += k;
			len -= k;
		}
	}
	,read: function(nbytes) {
		var s = Bytes.alloc(nbytes);
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) throw new chx.lang.BlockedException();
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readUntil: function(end) {
		var buf = new StringBuf();
		var last;
		while((last = this.readByte()) != end) buf.b[buf.b.length] = String.fromCharCode(last);
		return buf.b.join("");
	}
	,readLine: function() {
		var buf = new StringBuf();
		var last;
		var s;
		try {
			while((last = this.readByte()) != 10) buf.b[buf.b.length] = String.fromCharCode(last);
			s = buf.b.join("");
			if(s.charCodeAt(s.length - 1) == 13) s = s.substr(0,-1);
		} catch( e ) {
			if( js.Boot.__instanceof(e,chx.lang.EofException) ) {
				s = buf.b.join("");
				if(s.length == 0) throw e;
			} else throw(e);
		}
		return s;
	}
	,readFloat: function() {
		return math.IEEE754.bytesToFloat(this.read(4),this.bigEndian);
	}
	,readDouble: function() {
		return math.IEEE754.bytesToFloat(this.read(8),this.bigEndian);
	}
	,readInt8: function() {
		var n = this.readByte();
		if(n >= 128) return n - 256;
		return n;
	}
	,readUInt8: function() {
		return this.readByte();
	}
	,readInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var n = this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
		if((n & 32768) != 0) return n - 65536;
		return n;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		return this.bigEndian?ch2 | ch1 << 8:ch1 | ch2 << 8;
	}
	,readInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var n = this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
		if((n & 8388608) != 0) return n - 16777216;
		return n;
	}
	,readUInt24: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		return this.bigEndian?ch3 | ch2 << 8 | ch1 << 16:ch1 | ch2 << 8 | ch3 << 16;
	}
	,readInt31: function() {
		var ch1, ch2, ch3, ch4;
		if(this.bigEndian) {
			ch4 = this.readByte();
			ch3 = this.readByte();
			ch2 = this.readByte();
			ch1 = this.readByte();
		} else {
			ch1 = this.readByte();
			ch2 = this.readByte();
			ch3 = this.readByte();
			ch4 = this.readByte();
		}
		if((ch4 & 128) == 0 != ((ch4 & 64) == 0)) throw new chx.lang.OverflowException();
		return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readUInt30: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if((this.bigEndian?ch1:ch4) >= 64) throw new chx.lang.OverflowException();
		return this.bigEndian?ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24:ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		return this.bigEndian?(ch1 << 8 | ch2) << 16 | (ch3 << 8 | ch4):(ch4 << 8 | ch3) << 16 | (ch2 << 8 | ch1);
	}
	,readString: function(len) {
		var b = Bytes.alloc(len);
		this.readFullBytes(b,0,len);
		return b.toString();
	}
	,readUTF: function() {
		var len = this.readUInt16();
		return this.readString(len);
	}
	,readMultiByteString: function(len,charset) {
		var cset = charset.toLowerCase();
		switch(cset) {
		case "latin1":
			break;
		case "us-ascii":
			break;
		default:
			throw new chx.lang.UnsupportedException(cset + " not supported");
		}
		return this.readString(len);
	}
	,__getBytesAvailable: function() {
		return (function($this) {
			var $r;
			throw new chx.lang.FatalException("Not implemented");
			return $r;
		}(this));
	}
	,__setEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,__class__: chx.io.Input
	,__properties__: {set_bigEndian:"__setEndian",get_bytesAvailable:"__getBytesAvailable"}
}
chx.io.BytesInput = $hxClasses["chx.io.BytesInput"] = function(b,pos,len) {
	if(pos == null) pos = 0;
	if(len == null) len = b.length - pos;
	if(pos < 0 || len < 0 || pos + len > b.length) throw new chx.lang.OutsideBoundsException();
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.__setEndian(false);
}
chx.io.BytesInput.__name__ = ["chx","io","BytesInput"];
chx.io.BytesInput.__super__ = chx.io.Input;
chx.io.BytesInput.prototype = $extend(chx.io.Input.prototype,{
	position: null
	,b: null
	,pos: null
	,len: null
	,getBytesCopy: function() {
		var orig = this.getPosition();
		var rv = null;
		rv = Bytes.ofData(this.b.slice(0,this.b.length));
		this.setPosition(orig);
		return rv;
	}
	,readByte: function() {
		if(this.len == 0) throw new chx.lang.EofException();
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) throw new chx.lang.OutsideBoundsException();
		if(this.len == 0 && len > 0) throw new chx.lang.EofException();
		if(this.len < len) len = this.len;
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__getBytesAvailable: function() {
		return this.len >= 0?this.len:0;
	}
	,peek: function(pos) {
		if(pos == null) pos = this.getPosition();
		var orig = this.getPosition();
		this.setPosition(pos);
		var d = this.readByte();
		this.setPosition(orig);
		return d;
	}
	,setPosition: function(p) {
		this.len = this.len + (this.getPosition() - p);
		this.pos = p;
		return p;
	}
	,getPosition: function() {
		return this.pos;
	}
	,__class__: chx.io.BytesInput
	,__properties__: $extend(chx.io.Input.prototype.__properties__,{set_position:"setPosition",get_position:"getPosition"})
});
var StringTools = $hxClasses["StringTools"] = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.replaceRecurse = function(s,sub,by) {
	if(sub.length == 0) return StringTools.replace(s,sub,by);
	if(by.indexOf(sub) >= 0) throw "Infinite recursion";
	var ns = s.toString();
	var olen = 0;
	var nlen = ns.length;
	while(olen != nlen) {
		olen = ns.length;
		StringTools.replace(ns,sub,by);
		nlen = ns.length;
	}
	return ns;
}
StringTools.stripWhite = function(s) {
	var l = s.length;
	var i = 0;
	var sb = new StringBuf();
	while(i < l) {
		if(!StringTools.isSpace(s,i)) sb.add(s.charAt(i));
		i++;
	}
	return sb.b.join("");
}
StringTools.isNum = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 48 && c <= 57;
}
StringTools.isAlpha = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 65 && c <= 90 || c >= 97 && c <= 122;
}
StringTools.num = function(s,pos) {
	var c = s.charCodeAt(pos);
	if(c > 0) {
		c -= 48;
		if(c < 0 || c > 9) return null;
		return c;
	}
	return null;
}
StringTools.splitLines = function(str) {
	var ret = str.split("\n");
	var _g1 = 0, _g = ret.length;
	while(_g1 < _g) {
		var i = _g1++;
		var l = ret[i];
		if(l.substr(-1,1) == "\r") ret[i] = l.substr(0,-1);
	}
	return ret;
}
StringTools.prototype = {
	__class__: StringTools
}
var Iterables = $hxClasses["Iterables"] = function() { }
Iterables.__name__ = ["Iterables"];
Iterables.count = function(it) {
	return Iterators.count(it.iterator());
}
Iterables.indexOf = function(it,v,f) {
	return Iterators.indexOf(it.iterator(),v,f);
}
Iterables.contains = function(it,v,f) {
	return Iterators.contains(it.iterator(),v,f);
}
Iterables.array = function(it) {
	return Iterators.array(it.iterator());
}
Iterables.join = function(it,glue) {
	if(glue == null) glue = ", ";
	return Iterators.array(it.iterator()).join(glue);
}
Iterables.map = function(it,f) {
	return Iterators.map(it.iterator(),f);
}
Iterables.each = function(it,f) {
	return Iterators.each(it.iterator(),f);
}
Iterables.filter = function(it,f) {
	return Iterators.filter(it.iterator(),f);
}
Iterables.reduce = function(it,f,initialValue) {
	return Iterators.reduce(it.iterator(),f,initialValue);
}
Iterables.random = function(it) {
	return Arrays.random(Iterators.array(it.iterator()));
}
Iterables.any = function(it,f) {
	return Iterators.any(it.iterator(),f);
}
Iterables.all = function(it,f) {
	return Iterators.all(it.iterator(),f);
}
Iterables.last = function(it) {
	return Iterators.last(it.iterator());
}
Iterables.lastf = function(it,f) {
	return Iterators.lastf(it.iterator(),f);
}
Iterables.first = function(it) {
	return it.iterator().next();
}
Iterables.firstf = function(it,f) {
	return Iterators.firstf(it.iterator(),f);
}
Iterables.order = function(it,f) {
	return Arrays.order(Iterators.array(it.iterator()),f);
}
Iterables.isIterable = function(v) {
	var fields = Reflect.isObject(v) && null == Type.getClass(v)?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"iterator")) return false;
	return Reflect.isFunction(Reflect.field(v,"iterator"));
}
Iterables.prototype = {
	__class__: Iterables
}
js.Boot = $hxClasses["js.Boot"] = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return undefined;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	Function.prototype["$bind"] = function(o) {
		var f = function() {
			return f.method.apply(f.scope,arguments);
		};
		f.scope = o;
		f.method = this;
		return f;
	};
}
js.Boot.prototype = {
	__class__: js.Boot
}
rg.svg.chart.GradientEffect = $hxClasses["rg.svg.chart.GradientEffect"] = { __ename__ : ["rg","svg","chart","GradientEffect"], __constructs__ : ["NoEffect","Gradient"] }
rg.svg.chart.GradientEffect.NoEffect = ["NoEffect",0];
rg.svg.chart.GradientEffect.NoEffect.toString = $estr;
rg.svg.chart.GradientEffect.NoEffect.__enum__ = rg.svg.chart.GradientEffect;
rg.svg.chart.GradientEffect.Gradient = function(lightness) { var $x = ["Gradient",1,lightness]; $x.__enum__ = rg.svg.chart.GradientEffect; $x.toString = $estr; return $x; }
var Dynamics = $hxClasses["Dynamics"] = function() { }
Dynamics.__name__ = ["Dynamics"];
Dynamics.format = function(v,param,params,nullstring,culture) {
	return (Dynamics.formatf(param,params,nullstring,culture))(v);
}
Dynamics.formatf = function(param,params,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	return function(v) {
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
			return nullstring;
		case 1:
			return Ints.format(v,param,params,culture);
		case 2:
			return Floats.format(v,param,params,culture);
		case 3:
			return Bools.format(v,param,params,culture);
		case 6:
			var c = $e[2];
			if(c == String) return Strings.formatOne(v,param,params,culture); else if(c == Array) return Arrays.format(v,param,params,culture); else if(c == Date) return Dates.format(v,param,params,culture); else return Objects.format(v,param,params,culture);
			break;
		case 4:
			return Objects.format(v,param,params,culture);
		case 5:
			return "function()";
		default:
			return (function($this) {
				var $r;
				throw new thx.error.Error("Unsupported type format: {0}",null,Type["typeof"](v),{ fileName : "Dynamics.hx", lineNumber : 44, className : "Dynamics", methodName : "formatf"});
				return $r;
			}(this));
		}
	};
}
Dynamics.interpolate = function(v,a,b,equation) {
	return (Dynamics.interpolatef(a,b,equation))(v);
}
Dynamics.interpolatef = function(a,b,equation) {
	var ta = Type["typeof"](a);
	var tb = Type["typeof"](b);
	if(!((Std["is"](a,Float) || Std["is"](a,Int)) && (Std["is"](b,Float) || Std["is"](b,Int))) && !Type.enumEq(ta,tb)) throw new thx.error.Error("arguments a ({0}) and b ({0}) have different types",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 59, className : "Dynamics", methodName : "interpolatef"});
	var $e = (ta);
	switch( $e[1] ) {
	case 0:
		return function(_) {
			return null;
		};
	case 1:
		if(Std["is"](b,Int)) return Ints.interpolatef(a,b,equation); else return Floats.interpolatef(a,b,equation);
		break;
	case 2:
		return Floats.interpolatef(a,b,equation);
	case 3:
		return Bools.interpolatef(a,b,equation);
	case 4:
		return Objects.interpolatef(a,b,equation);
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "String":
			return Strings.interpolatef(a,b,equation);
		case "Date":
			return Dates.interpolatef(a,b,equation);
		default:
			throw new thx.error.Error("cannot interpolate on instances of {0}",null,name,{ fileName : "Dynamics.hx", lineNumber : 77, className : "Dynamics", methodName : "interpolatef"});
		}
		break;
	default:
		throw new thx.error.Error("cannot interpolate on functions/enums/unknown",null,null,{ fileName : "Dynamics.hx", lineNumber : 79, className : "Dynamics", methodName : "interpolatef"});
	}
}
Dynamics.string = function(v) {
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		return "null";
	case 1:
		return Ints.format(v);
	case 2:
		return Floats.format(v);
	case 3:
		return Bools.format(v);
	case 4:
		var keys = Reflect.fields(v);
		var result = [];
		var _g = 0;
		while(_g < keys.length) {
			var key = keys[_g];
			++_g;
			result.push(key + " : " + Dynamics.string(Reflect.field(v,key)));
		}
		return "{" + result.join(", ") + "}";
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			return Arrays.string(v);
		case "String":
			var s = v;
			if(s.indexOf("\"") < 0) return "\"" + s + "\""; else if(s.indexOf("'") < 0) return "'" + s + "'"; else return "\"" + StringTools.replace(s,"\"","\\\"") + "\"";
			break;
		case "Date":
			return Dates.format(v);
		default:
			return Std.string(v);
		}
		break;
	case 7:
		var e = $e[2];
		return Enums.string(v);
	case 8:
		return "<unknown>";
	case 5:
		return "<function>";
	}
}
Dynamics.compare = function(a,b) {
	if(!Types.sameType(a,b)) throw new thx.error.Error("cannot compare 2 different types",null,null,{ fileName : "Dynamics.hx", lineNumber : 131, className : "Dynamics", methodName : "compare"});
	if(null == a && null == b) return 0;
	if(null == a) return -1;
	if(null == b) return 1;
	var $e = (Type["typeof"](a));
	switch( $e[1] ) {
	case 1:
		return a - b;
	case 2:
		return a < b?-1:a > b?1:0;
	case 3:
		return a == b?0:a?-1:1;
	case 4:
		return Objects.compare(a,b);
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			return Arrays.compare(a,b);
		case "String":
			return Strings.compare(a,b);
		case "Date":
			return Floats.compare(a.getTime(),b.getTime());
		default:
			return Strings.compare(Std.string(a),Std.string(b));
		}
		break;
	case 7:
		var e = $e[2];
		return Enums.compare(a,b);
	default:
		return 0;
	}
}
Dynamics.comparef = function(sample) {
	var $e = (Type["typeof"](sample));
	switch( $e[1] ) {
	case 1:
		return Ints.compare;
	case 2:
		return Floats.compare;
	case 3:
		return Bools.compare;
	case 4:
		return Objects.compare;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			return Arrays.compare;
		case "String":
			return Strings.compare;
		case "Date":
			return Dates.compare;
		default:
			return function(a,b) {
				return Strings.compare(Std.string(a),Std.string(b));
			};
		}
		break;
	case 7:
		var e = $e[2];
		return Enums.compare;
	default:
		return Dynamics.compare;
	}
}
Dynamics.clone = function(v,cloneInstances) {
	if(cloneInstances == null) cloneInstances = false;
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		return null;
	case 1:
	case 2:
	case 3:
	case 7:
	case 8:
	case 5:
		return v;
	case 4:
		var o = { };
		Objects.copyTo(v,o);
		return o;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			var src = v, a = [];
			var _g = 0;
			while(_g < src.length) {
				var i = src[_g];
				++_g;
				a.push(Dynamics.clone(i));
			}
			return a;
		case "String":case "Date":
			return v;
		default:
			if(cloneInstances) {
				var o = Type.createEmptyInstance(c);
				var _g = 0, _g1 = Reflect.fields(v);
				while(_g < _g1.length) {
					var field = _g1[_g];
					++_g;
					o[field] = Dynamics.clone(Reflect.field(v,field));
				}
				return o;
			} else return v;
		}
		break;
	}
}
Dynamics.same = function(a,b) {
	var ta = Types.typeName(a), tb = Types.typeName(b);
	if(ta != tb) return false;
	var $e = (Type["typeof"](a));
	switch( $e[1] ) {
	case 2:
		return Floats.equals(a,b);
	case 0:
	case 1:
	case 3:
		return a == b;
	case 5:
		return Reflect.compareMethods(a,b);
	case 6:
		var c = $e[2];
		var ca = Type.getClassName(c), cb = Type.getClassName(Type.getClass(b));
		if(ca != cb) return false;
		if(Std["is"](a,String) && a != b) return false;
		if(Std["is"](a,Array)) {
			var aa = a, ab = b;
			if(aa.length != ab.length) return false;
			var _g1 = 0, _g = aa.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(aa[i],ab[i])) return false;
			}
			return true;
		}
		if(Std["is"](a,Date)) return a.getTime() == b.getTime();
		if(Std["is"](a,Hash) || Std["is"](a,IntHash)) {
			var ha = a, hb = b;
			var ka = Iterators.array(ha.keys()), kb = Iterators.array(hb.keys());
			if(ka.length != kb.length) return false;
			var _g = 0;
			while(_g < ka.length) {
				var key = ka[_g];
				++_g;
				if(!hb.exists(key) || !Dynamics.same(ha.get(key),hb.get(key))) return false;
			}
			return true;
		}
		var t = false;
		if((t = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
			var va = t?Iterators.array(a):Iterators.array(a.iterator()), vb = t?Iterators.array(b):Iterators.array(b.iterator());
			if(va.length != vb.length) return false;
			var _g1 = 0, _g = va.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(va[i],vb[i])) return false;
			}
			return true;
		}
		var fields = Type.getInstanceFields(Type.getClass(a));
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			var va = Reflect.field(a,field);
			if(Reflect.isFunction(va)) continue;
			var vb = Reflect.field(b,field);
			if(!Dynamics.same(va,vb)) return false;
		}
		return true;
	case 7:
		var e = $e[2];
		var ea = Type.getEnumName(e), eb = Type.getEnumName(Type.getEnum(b));
		if(ea != eb) return false;
		if(a[1] != b[1]) return false;
		var pa = a.slice(2), pb = b.slice(2);
		var _g1 = 0, _g = pa.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Dynamics.same(pa[i],pb[i])) return false;
		}
		return true;
	case 4:
		var fa = Reflect.fields(a), fb = Reflect.fields(b);
		var _g = 0;
		while(_g < fa.length) {
			var field = fa[_g];
			++_g;
			fb.remove(field);
			if(!Reflect.hasField(b,field)) return false;
			var va = Reflect.field(a,field);
			if(Reflect.isFunction(va)) continue;
			var vb = Reflect.field(b,field);
			if(!Dynamics.same(va,vb)) return false;
		}
		if(fb.length > 0) return false;
		var t = false;
		if((t = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
			if(t && !Iterators.isIterator(b)) return false;
			if(!t && !Iterables.isIterable(b)) return false;
			var aa = t?Iterators.array(a):Iterators.array(a.iterator());
			var ab = t?Iterators.array(b):Iterators.array(b.iterator());
			if(aa.length != ab.length) return false;
			var _g1 = 0, _g = aa.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(aa[i],ab[i])) return false;
			}
			return true;
		}
		return true;
	case 8:
		return (function($this) {
			var $r;
			throw "Unable to compare two unknown types";
			return $r;
		}(this));
	}
	return (function($this) {
		var $r;
		throw new thx.error.Error("Unable to compare values: {0} and {1}",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 371, className : "Dynamics", methodName : "same"});
		return $r;
	}(this));
}
Dynamics.number = function(v) {
	return Number(v);
}
Dynamics.prototype = {
	__class__: Dynamics
}
rg.svg.chart.LineEffect = $hxClasses["rg.svg.chart.LineEffect"] = { __ename__ : ["rg","svg","chart","LineEffect"], __constructs__ : ["NoEffect","Gradient","DropShadow"] }
rg.svg.chart.LineEffect.NoEffect = ["NoEffect",0];
rg.svg.chart.LineEffect.NoEffect.toString = $estr;
rg.svg.chart.LineEffect.NoEffect.__enum__ = rg.svg.chart.LineEffect;
rg.svg.chart.LineEffect.Gradient = function(lightness,levels) { var $x = ["Gradient",1,lightness,levels]; $x.__enum__ = rg.svg.chart.LineEffect; $x.toString = $estr; return $x; }
rg.svg.chart.LineEffect.DropShadow = function(ox,oy,evels) { var $x = ["DropShadow",2,ox,oy,evels]; $x.__enum__ = rg.svg.chart.LineEffect; $x.toString = $estr; return $x; }
thx.js.AccessText = $hxClasses["thx.js.AccessText"] = function(selection) {
	thx.js.Access.call(this,selection);
}
thx.js.AccessText.__name__ = ["thx","js","AccessText"];
thx.js.AccessText.__super__ = thx.js.Access;
thx.js.AccessText.prototype = $extend(thx.js.Access.prototype,{
	get: function() {
		return this.selection.firstNode(function(node) {
			return node.textContent;
		});
	}
	,string: function(v) {
		this.clear();
		this.selection.eachNode(function(node,_) {
			node.textContent = v;
		});
		return this.selection;
	}
	,clear: function() {
		this.selection.eachNode(function(node,i) {
			node.textContent = "";
		});
		return this.selection;
	}
	,'float': function(v) {
		this.clear();
		this.selection.eachNode(function(node,_) {
			node.textContent = "" + v;
		});
		return this.selection;
	}
	,stringNodef: function(v) {
		this.clear();
		this.selection.eachNode(function(node,i) {
			var x = v(node,i);
			if(null != x) node.textContent = x;
		});
		return this.selection;
	}
	,floatNodef: function(v) {
		this.clear();
		this.selection.eachNode(function(node,i) {
			var x = v(node,i);
			if(null != x) node.textContent = "" + x;
		});
		return this.selection;
	}
	,__class__: thx.js.AccessText
});
thx.js.AccessDataText = $hxClasses["thx.js.AccessDataText"] = function(selection) {
	thx.js.AccessText.call(this,selection);
}
thx.js.AccessDataText.__name__ = ["thx","js","AccessDataText"];
thx.js.AccessDataText.__super__ = thx.js.AccessText;
thx.js.AccessDataText.prototype = $extend(thx.js.AccessText.prototype,{
	stringf: function(v) {
		this.clear();
		this.selection.eachNode(function(node,i) {
			var x = v(Reflect.field(node,"__data__"),i);
			if(null != x) node.textContent = x;
		});
		return this.selection;
	}
	,floatf: function(v) {
		this.clear();
		this.selection.eachNode(function(node,i) {
			var x = v(Reflect.field(node,"__data__"),i);
			if(null != x) node.textContent = "" + x;
		});
		return this.selection;
	}
	,data: function() {
		return this.stringf(function(d,_) {
			return "" + d;
		});
	}
	,__class__: thx.js.AccessDataText
});
rg.svg.panel.Panels = $hxClasses["rg.svg.panel.Panels"] = function() { }
rg.svg.panel.Panels.__name__ = ["rg","svg","panel","Panels"];
rg.svg.panel.Panels.rootSize = function(panel) {
	var p = panel.parent;
	while(p != null) {
		var t = p;
		p = panel.parent;
		panel = t;
	}
	return { width : panel.frame.width, height : panel.frame.height};
}
rg.svg.panel.Panels.absolutePos = function(panel) {
	var p = panel, x = 0, y = 0;
	while(null != p) {
		panel = p;
		x += p.frame.x;
		y += p.frame.y;
		p = p.parent;
	}
	var node = rg.svg.panel.Panels.htmlContainer(panel);
	var pos = rg.util.Js.findPosition(node);
	pos.x += x;
	pos.y += y;
	return pos;
}
rg.svg.panel.Panels.htmlContainer = function(panel) {
	var node = panel.g.node();
	do {
	} while(null != Reflect.field(node = node.ownerSVGElement,"ownerSVGElement"));
	return node.parentNode;
}
rg.svg.panel.Panels.boundingBox = function(panel,ancestor) {
	var p = panel, x = 0, y = 0;
	while(ancestor != p) {
		x += p.frame.x;
		y += p.frame.y;
		p = p.parent;
	}
	return { x : x, y : y, width : panel.frame.width, height : panel.frame.height};
}
rg.svg.panel.Panels.ancestorBoundingBox = function(panel,ancestor) {
	var p = panel, x = 0, y = 0, w = 0, h = 0;
	while(ancestor != p) {
		x += p.frame.x;
		y += p.frame.y;
		w = p.frame.width;
		h = p.frame.height;
		p = p.parent;
	}
	return { x : -x, y : -y, width : w, height : h};
}
rg.svg.panel.Panels.prototype = {
	__class__: rg.svg.panel.Panels
}
rg.svg.util.RGCss = $hxClasses["rg.svg.util.RGCss"] = function() { }
rg.svg.util.RGCss.__name__ = ["rg","svg","util","RGCss"];
rg.svg.util.RGCss.cache = null;
rg.svg.util.RGCss.cssSources = function() {
	var sources = [];
	thx.js.Dom.selectAll("link[rel=\"stylesheet\"]").eachNode(function(n,_) {
		sources.push(n.href);
	});
	return sources;
}
rg.svg.util.RGCss.colorsInCss = function() {
	if(null != rg.svg.util.RGCss.cache) return rg.svg.util.RGCss.cache;
	var container = thx.js.Dom.select("body").append("svg:svg").attr("class").string("rg"), first = rg.svg.util.RGCss.createBlock(container,0).style("fill").get();
	rg.svg.util.RGCss.cache = [first];
	var _g = 1;
	while(_g < 1000) {
		var i = _g++;
		var other = rg.svg.util.RGCss.createBlock(container,i).style("fill").get();
		if(first == other) break; else rg.svg.util.RGCss.cache.push(other);
	}
	container.remove();
	return rg.svg.util.RGCss.cache;
}
rg.svg.util.RGCss.numberOfColorsInCss = function() {
	return rg.svg.util.RGCss.colorsInCss().length;
}
rg.svg.util.RGCss.createBlock = function(container,pos) {
	return container.append("svg:rect").attr("class").string("fill-" + pos);
}
rg.svg.util.RGCss.prototype = {
	__class__: rg.svg.util.RGCss
}
thx.js.AccessTween = $hxClasses["thx.js.AccessTween"] = function(transition,tweens) {
	this.transition = transition;
	this.tweens = tweens;
}
thx.js.AccessTween.__name__ = ["thx","js","AccessTween"];
thx.js.AccessTween.prototype = {
	transition: null
	,tweens: null
	,transitionColorTween: function(value) {
		return function(d,i,a) {
			return thx.color.Rgb.interpolatef(a,value);
		};
	}
	,transitionColorTweenf: function(f) {
		return function(d,i,a) {
			return thx.color.Rgb.interpolatef(a,f(d,i));
		};
	}
	,transitionStringTween: function(value) {
		return function(d,i,a) {
			return Strings.interpolatef(a,value);
		};
	}
	,transitionStringTweenf: function(f) {
		return function(d,i,a) {
			return Strings.interpolatef(a,f(d,i));
		};
	}
	,transitionCharsTween: function(value) {
		return function(d,i,a) {
			return Strings.interpolateCharsf(a,value);
		};
	}
	,transitionCharsTweenf: function(f) {
		return function(d,i,a) {
			return Strings.interpolateCharsf(a,f(d,i));
		};
	}
	,transitionFloatTween: function(value) {
		return function(d,i,a) {
			return Floats.interpolatef(a,value);
		};
	}
	,transitionFloatTweenf: function(f) {
		return function(d,i,a) {
			return Floats.interpolatef(a,f(d,i));
		};
	}
	,_that: function() {
		return this.transition;
	}
	,__class__: thx.js.AccessTween
}
thx.js.AccessTweenStyle = $hxClasses["thx.js.AccessTweenStyle"] = function(name,transition,tweens) {
	thx.js.AccessTween.call(this,transition,tweens);
	this.name = name;
}
thx.js.AccessTweenStyle.__name__ = ["thx","js","AccessTweenStyle"];
thx.js.AccessTweenStyle.__super__ = thx.js.AccessTween;
thx.js.AccessTweenStyle.prototype = $extend(thx.js.AccessTween.prototype,{
	name: null
	,floatNodef: function(f,priority) {
		return this.floatTweenNodef(this.transitionFloatTweenf(f),priority);
	}
	,'float': function(value,priority) {
		return this.floatTweenNodef(this.transitionFloatTween(value),priority);
	}
	,floatTweenNodef: function(tween,priority) {
		var name = this.name;
		var styleTween = function(d,i) {
			var f = tween(d,i,Std.parseFloat(window.getComputedStyle(d,null).getPropertyValue(name)));
			return function(t) {
				d.style.setProperty(name,"" + f(t),null == priority?"":priority);
			};
		};
		this.tweens.set("style." + name,styleTween);
		return this.transition;
	}
	,stringNodef: function(f,priority) {
		return this.stringTweenNodef(this.transitionStringTweenf(f),priority);
	}
	,string: function(value,priority) {
		return this.stringTweenNodef(this.transitionStringTween(value),priority);
	}
	,stringTweenNodef: function(tween,priority) {
		if(null == priority) priority = null;
		var name = this.name;
		var styleTween = function(d,i) {
			var f = tween(d,i,window.getComputedStyle(d,null).getPropertyValue(name));
			return function(t) {
				d.style.setProperty(name,f(t),null == priority?"":priority);
			};
		};
		this.tweens.set("style." + name,styleTween);
		return this.transition;
	}
	,colorNodef: function(f,priority) {
		return this.colorTweenNodef(this.transitionColorTweenf(f),priority);
	}
	,color: function(value,priority) {
		return this.colorTweenNodef(this.transitionColorTween(thx.color.Colors.parse(value)),priority);
	}
	,colorTweenNodef: function(tween,priority) {
		if(null == priority) priority = null;
		var name = this.name;
		var styleTween = function(d,i) {
			var f = tween(d,i,thx.color.Colors.parse(window.getComputedStyle(d,null).getPropertyValue(name)));
			return function(t) {
				d.style.setProperty(name,f(t).toRgbString(),null == priority?"":priority);
			};
		};
		this.tweens.set("style." + name,styleTween);
		return this.transition;
	}
	,__class__: thx.js.AccessTweenStyle
});
thx.js.AccessDataTweenStyle = $hxClasses["thx.js.AccessDataTweenStyle"] = function(name,transition,tweens) {
	thx.js.AccessTweenStyle.call(this,name,transition,tweens);
}
thx.js.AccessDataTweenStyle.__name__ = ["thx","js","AccessDataTweenStyle"];
thx.js.AccessDataTweenStyle.__super__ = thx.js.AccessTweenStyle;
thx.js.AccessDataTweenStyle.prototype = $extend(thx.js.AccessTweenStyle.prototype,{
	floatf: function(f,priority) {
		return this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
			return f(Reflect.field(n,"__data__"),i);
		}),priority);
	}
	,floatTweenf: function(tween,priority) {
		if(null == priority) priority = null;
		var name = this.name;
		var styleTween = function(d,i) {
			var f = tween(Reflect.field(d,"__data__"),i,Std.parseFloat(window.getComputedStyle(d,null).getPropertyValue(name)));
			return function(t) {
				d.style.setProperty(name,"" + f(t),null == priority?"":priority);
			};
		};
		this.tweens.set("style." + name,styleTween);
		return this.transition;
	}
	,stringf: function(f,priority) {
		return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
			return f(Reflect.field(n,"__data__"),i);
		}),priority);
	}
	,stringTweenf: function(tween,priority) {
		if(null == priority) priority = null;
		var name = this.name;
		var styleTween = function(d,i) {
			var f = tween(Reflect.field(d,"__data__"),i,window.getComputedStyle(d,null).getPropertyValue(name));
			return function(t) {
				d.style.setProperty(name,f(t),null == priority?"":priority);
			};
		};
		this.tweens.set("style." + name,styleTween);
		return this.transition;
	}
	,colorf: function(f,priority) {
		return this.colorTweenNodef(this.transitionColorTweenf(function(n,i) {
			return f(Reflect.field(n,"__data__"),i);
		}),priority);
	}
	,colorTweenf: function(tween,priority) {
		if(null == priority) priority = null;
		var name = this.name;
		var styleTween = function(d,i) {
			var f = tween(Reflect.field(d,"__data__"),i,thx.color.Colors.parse(window.getComputedStyle(d,null).getPropertyValue(name)));
			return function(t) {
				d.style.setProperty(name,f(t).toRgbString(),null == priority?"":priority);
			};
		};
		this.tweens.set("style." + name,styleTween);
		return this.transition;
	}
	,__class__: thx.js.AccessDataTweenStyle
});
if(!thx.json) thx.json = {}
thx.json.Json = $hxClasses["thx.json.Json"] = function() { }
thx.json.Json.__name__ = ["thx","json","Json"];
thx.json.Json.nativeEncoder = null;
thx.json.Json.nativeDecoder = null;
thx.json.Json.encode = function(value) {
	if(null != thx.json.Json.nativeEncoder) return thx.json.Json.nativeEncoder(value);
	var handler = new thx.json.JsonEncoder();
	new thx.data.ValueEncoder(handler).encode(value);
	return handler.encodedString;
}
thx.json.Json.decode = function(value) {
	if(null != thx.json.Json.nativeDecoder) return thx.json.Json.nativeDecoder(value);
	var handler = new thx.data.ValueHandler();
	var r = new thx.json.JsonDecoder(handler).decode(value);
	return handler.value;
}
thx.json.Json.prototype = {
	__class__: thx.json.Json
}
rg.visualization.VisualizationBarChart = $hxClasses["rg.visualization.VisualizationBarChart"] = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
}
rg.visualization.VisualizationBarChart.__name__ = ["rg","visualization","VisualizationBarChart"];
rg.visualization.VisualizationBarChart.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationBarChart.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoBar: null
	,initAxes: function() {
		if(this.infoBar.horizontal) {
			this.xvariable = this.dependentVariables.map(function(d,_) {
				return d;
			})[0];
			this.yvariables = [this.independentVariables[0]];
		} else {
			this.yvariables = this.dependentVariables.map(function(d,_) {
				return d;
			});
			this.xvariable = this.independentVariables[0];
		}
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.BarChart(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.stacked = this.infoBar.stacked;
		var $e = (this.infoBar.effect);
		switch( $e[1] ) {
		case 0:
			chart.displayGradient = false;
			break;
		case 1:
			var lightness = $e[2];
			chart.displayGradient = true;
			chart.gradientLightness = lightness;
			break;
		}
		chart.padding = this.infoBar.barPadding;
		chart.paddingAxis = this.infoBar.barPaddingAxis;
		chart.paddingDataPoint = this.infoBar.barPaddingDataPoint;
		chart.horizontal = this.infoBar.horizontal;
		this.chart = chart;
	}
	,transformData: function(dps) {
		var results = [], variable = this.independentVariables[0], values = variable.axis.range(variable.min(),variable.max());
		var _g = 0;
		while(_g < values.length) {
			var value = [values[_g]];
			++_g;
			var axisresults = [];
			var _g2 = 0, _g1 = this.dependentVariables.length;
			while(_g2 < _g1) {
				var i = _g2++;
				var dps1 = rg.util.DataPoints.filterByDependents(dps,[this.dependentVariables[i]]);
				axisresults.push(Arrays.filter(dps1,(function(value) {
					return function(d) {
						return Reflect.field(d,variable.type) == value[0];
					};
				})(value)));
			}
			results.push(axisresults);
		}
		return results;
	}
	,__class__: rg.visualization.VisualizationBarChart
});
rg.info.Info = $hxClasses["rg.info.Info"] = function() { }
rg.info.Info.__name__ = ["rg","info","Info"];
rg.info.Info.feed = function(info,ob) {
	if(null == ob) return info;
	var cl = Type.getClass(info), method = Reflect.field(cl,"filters");
	if(null == method) {
		Objects.copyTo(ob,info);
		return info;
	}
	var filters = method.apply(cl,[]), value;
	var _g = 0;
	while(_g < filters.length) {
		var filter = filters[_g];
		++_g;
		if(Reflect.hasField(ob,filter.field)) {
			if(null != filter.validator && !filter.validator(value = Reflect.field(ob,filter.field))) {
				haxe.Log.trace(value,{ fileName : "Info.hx", lineNumber : 32, className : "rg.info.Info", methodName : "feed"});
				haxe.Log.trace(filter.field,{ fileName : "Info.hx", lineNumber : 33, className : "rg.info.Info", methodName : "feed"});
				throw new thx.error.Error("the parameter '{0}' can't have value '{1}'",[filter.field,value],null,{ fileName : "Info.hx", lineNumber : 34, className : "rg.info.Info", methodName : "feed"});
			}
			var items = null == filter.filter?[{ field : filter.field, value : value}]:filter.filter(value);
			var _g1 = 0;
			while(_g1 < items.length) {
				var item = items[_g1];
				++_g1;
				info[item.field] = item.value;
			}
		}
	}
	return info;
}
rg.info.Info.prototype = {
	__class__: rg.info.Info
}
rg.util.Auth = $hxClasses["rg.util.Auth"] = function(authCode) {
	this.test = rg.util.Decrypt.decrypt(authCode);
}
rg.util.Auth.__name__ = ["rg","util","Auth"];
rg.util.Auth.prototype = {
	test: null
	,authorize: function(host) {
		return this.test == host;
	}
	,authorizeMany: function(hosts) {
		var auth = false;
		var _g = 0;
		while(_g < hosts.length) {
			var host = hosts[_g];
			++_g;
			if(this.authorize(host)) {
				auth = true;
				break;
			}
		}
		return auth;
	}
	,__class__: rg.util.Auth
}
rg.app.charts.MVPOptions = $hxClasses["rg.app.charts.MVPOptions"] = function() { }
rg.app.charts.MVPOptions.__name__ = ["rg","app","charts","MVPOptions"];
rg.app.charts.MVPOptions.a1 = function(params,handler) {
	var authcode = ReportGrid.authCode, authorized = false;
	if(null == authcode) {
		var script = rg.util.Js.findScript("reportgrid-charts.js");
		var args = rg.util.Urls.parseQueryParameters(script.src);
		authcode = Reflect.field(args,"authCode");
	}
	if(null != authcode) {
		var auth = new rg.util.Auth(authcode), hosts = [], host = js.Lib.window.location.hostname;
		if(new EReg("^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$","").match(host)) hosts.push(host); else {
			var parts = host.split(".");
			if(parts.length == 3 && parts[0] == "www") parts.shift();
			hosts.push(parts.join("."));
			while(parts.length > 2) parts.shift();
			hosts.push("*." + parts.join("."));
		}
		authorized = auth.authorizeMany(hosts);
	} else authorized = false;
	rg.app.charts.MVPOptions.a1 = function(params1,handler1) {
		params1.options.a = authorized;
		handler1(params1);
	};
	rg.app.charts.MVPOptions.a1(params,handler);
}
rg.app.charts.MVPOptions.a2 = function(params,handler) {
	var changeAndToggle = function(auth) {
		if(null == auth) rg.app.charts.MVPOptions.a2 = function(params1,handler1) {
			handler1(params1);
		}; else rg.app.charts.MVPOptions.a2 = function(params1,handler1) {
			params1.options.a = auth;
			handler1(params1);
		};
		rg.app.charts.MVPOptions.a2(params,handler);
	};
	var api = ReportGrid.token;
	if(params.options.a || null == api) changeAndToggle(null); else api(function(result) {
		changeAndToggle((result.expires <= 0 || result.expires >= Date.now().getTime()) && result.permissions.read);
	},function(err) {
		changeAndToggle(null);
	});
}
rg.app.charts.MVPOptions.complete = function(parameters,handler) {
	var chain = new rg.util.ChainedExecutor(handler);
	if(null == parameters.options) parameters.options = { };
	var options = parameters.options;
	if(null != options.download && !Types.isAnonymous(options.download)) {
		var v = options.download;
		Reflect.deleteField(options,"download");
		if(v == true) options.download = { position : "auto"}; else if(Std["is"](v,String)) options.download = { position : v}; else throw new thx.error.Error("invalid value for download '{0}'",[v],null,{ fileName : "MVPOptions.hx", lineNumber : 117, className : "rg.app.charts.MVPOptions", methodName : "complete"});
	}
	if(null != options.map && Types.isAnonymous(options.map)) options.map = [options.map];
	chain.addAction(rg.app.charts.MVPOptions.a1);
	chain.addAction(rg.app.charts.MVPOptions.a2);
	chain.addAction(function(params,handler1) {
		var axes = params.axes, hasdependent = false;
		if(null == axes) axes = [];
		params.axes = axes = axes.map(function(v,_) {
			return Std["is"](v,String)?{ type : v}:v;
		});
		var _g1 = 0, _g = axes.length;
		while(_g1 < _g) {
			var i = _g1++;
			var variable = axes[i].variable;
			if(null == variable) axes[i].variable = !hasdependent && i == axes.length - 1?"dependent":"independent"; else if("dependent" == variable) hasdependent = true;
		}
		var _g = 0;
		while(_g < axes.length) {
			var axis = axes[_g];
			++_g;
			if(axis.variable == "dependent") {
			} else switch(params.options.visualization) {
			case "barchart":
				if(null == axis.scalemode) axis.scalemode = "fit";
				break;
			}
		}
		handler1(params);
	});
	chain.addAction(function(params,handler1) {
		if(null == params.options.label) switch(params.options.visualization) {
		case "linechart":case "barchart":case "streamgraph":
			var type = params.axes[0].type;
			params.options.label = { datapointover : function(dp,stats) {
				return (null != params.options.segmenton?rg.util.Properties.formatValue(params.options.segmenton,dp) + ", ":"") + rg.util.Properties.formatValue(type,dp) + ": " + rg.util.Properties.formatValue(stats.type,dp);
			}};
			break;
		case "scattergraph":case "heatgrid":
			var type = params.axes[0].type;
			params.options.label = { datapointover : function(dp,stats) {
				return rg.util.Properties.formatValue(type,dp) + ": " + rg.util.Properties.formatValue(stats.type,dp);
			}};
			break;
		case "geo":
			var type = params.axes[0].type, maps = params.options.map;
			maps[maps.length - 1].label = { datapointover : function(dp,stats) {
				var v = rg.util.Properties.formatValue(type,dp);
				if(null == v) return null;
				return v + ": " + rg.util.Properties.formatValue(stats.type,dp);
			}};
			break;
		case "piechart":
			params.options.label = { datapoint : function(dp,stats) {
				var v = Reflect.field(dp,stats.type);
				return params.axes.length > 1?rg.util.Properties.formatValue(params.axes[0].type,dp):stats.tot != 0.0?Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1"):rg.util.RGStrings.humanize(v);
			}, datapointover : function(dp,stats) {
				var v = Reflect.field(dp,stats.type);
				return rg.util.RGStrings.humanize(stats.type) + ": " + rg.util.RGStrings.humanize(v) + (params.axes.length > 1 && stats.tot != 0.0?" (" + Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1") + ")":"");
			}};
			break;
		case "sankey":
			var axes = params.axes, type = axes[axes.length - 1].type;
			params.options.label = { datapointover : function(dp,stats) {
				var v = Reflect.field(dp,type);
				return rg.util.RGStrings.humanize(type) + ": " + rg.util.Properties.formatValue(type,dp) + "\n" + (stats.tot != 0.0?Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1"):rg.util.RGStrings.humanize(v));
			}, node : function(dp,stats) {
				return dp.id;
			}, datapoint : function(dp,stats) {
				return rg.util.Properties.formatValue(type,dp) + "\n" + rg.util.RGStrings.humanize(type);
			}, edge : function(dp,stats) {
				return Floats.format(100 * dp.edgeweight / dp.nodeweight,"D:0") + "%";
			}, edgeover : function(dp,stats) {
				return Floats.format(dp.edgeweight,"D:0") + "\n" + Floats.format(100 * dp.edgeweight / dp.nodeweight,"D:0") + "%";
			}};
			break;
		}
		handler1(params);
	});
	chain.execute(parameters);
}
rg.app.charts.MVPOptions.prototype = {
	__class__: rg.app.charts.MVPOptions
}
var Strings = $hxClasses["Strings"] = function() { }
Strings.__name__ = ["Strings"];
Strings.format = function(pattern,values,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	if(null == values || 0 == values.length) return pattern;
	return (Strings.formatf(pattern,nullstring,culture))(values);
}
Strings.formatf = function(pattern,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	var buf = [];
	while(true) {
		if(!Strings._reFormat.match(pattern)) {
			buf.push((function() {
				return function(_) {
					return pattern;
				};
			})());
			break;
		}
		var pos = Std.parseInt(Strings._reFormat.matched(1));
		var format = Strings._reFormat.matched(2);
		if(format == "") format = null;
		var p = null;
		var params = [];
		var _g = 3;
		while(_g < 20) {
			var i = _g++;
			p = Strings._reFormat.matched(i);
			if(p == null || p == "") break;
			params.push(thx.culture.FormatParams.cleanQuotes(p));
		}
		var left = [Strings._reFormat.matchedLeft()];
		buf.push((function(left) {
			return function(_) {
				return left[0];
			};
		})(left));
		var df = [Dynamics.formatf(format,params,nullstring,culture)];
		buf.push(((function() {
			return function(f,a1) {
				return (function() {
					return function(a2) {
						return f(a1,a2);
					};
				})();
			};
		})())((function(df) {
			return function(i,v) {
				return df[0](v[i]);
			};
		})(df),pos));
		pattern = Strings._reFormat.matchedRight();
	}
	return function(values) {
		if(null == values) values = [];
		return buf.map(function(df,_) {
			return df(values);
		}).join("");
	};
}
Strings.formatOne = function(v,param,params,culture) {
	return (Strings.formatOnef(param,params,culture))(v);
}
Strings.formatOnef = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"S");
	var format = params.shift();
	switch(format) {
	case "S":
		return function(v) {
			return v;
		};
	case "T":
		var len = params.length < 1?20:Std.parseInt(params[0]);
		var ellipsis = params.length < 2?"...":params[1];
		return Strings.ellipsisf(len,ellipsis);
	case "PR":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		return function(v) {
			return StringTools.rpad(v,pad,len);
		};
	case "PL":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		return function(v) {
			return StringTools.lpad(v,pad,len);
		};
	default:
		return (function($this) {
			var $r;
			throw "Unsupported string format: " + format;
			return $r;
		}(this));
	}
}
Strings.upTo = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return value.substr(0,pos);
}
Strings.startFrom = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return value.substr(pos + searchFor.length);
}
Strings.rtrim = function(value,charlist) {
	var len = value.length;
	while(len > 0) {
		var c = value.substr(len - 1,1);
		if(charlist.indexOf(c) < 0) break;
		len--;
	}
	return value.substr(0,len);
}
Strings.ltrim = function(value,charlist) {
	var start = 0;
	while(start < value.length) {
		var c = value.substr(start,1);
		if(charlist.indexOf(c) < 0) break;
		start++;
	}
	return value.substr(start);
}
Strings.trim = function(value,charlist) {
	return Strings.rtrim(Strings.ltrim(value,charlist),charlist);
}
Strings.collapse = function(value) {
	return Strings._reCollapse.replace(StringTools.trim(value)," ");
}
Strings.ucfirst = function(value) {
	return value == null?null:value.charAt(0).toUpperCase() + value.substr(1);
}
Strings.lcfirst = function(value) {
	return value == null?null:value.charAt(0).toLowerCase() + value.substr(1);
}
Strings.empty = function(value) {
	return value == null || value == "";
}
Strings.isAlphaNum = function(value) {
	return value == null?false:Strings.__alphaNumPattern.match(value);
}
Strings.digitsOnly = function(value) {
	return value == null?false:Strings.__digitsPattern.match(value);
}
Strings.ucwords = function(value) {
	return Strings.__ucwordsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),Strings.__upperMatch);
}
Strings.ucwordsws = function(value) {
	return Strings.__ucwordswsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),Strings.__upperMatch);
}
Strings.__upperMatch = function(re) {
	return re.matched(0).toUpperCase();
}
Strings.humanize = function(s) {
	return StringTools.replace(Strings.underscore(s),"_"," ");
}
Strings.capitalize = function(s) {
	return s.substr(0,1).toUpperCase() + s.substr(1);
}
Strings.succ = function(s) {
	return s.substr(0,-1) + String.fromCharCode(s.substr(-1).charCodeAt(0) + 1);
}
Strings.underscore = function(s) {
	s = new EReg("::","g").replace(s,"/");
	s = new EReg("([A-Z]+)([A-Z][a-z])","g").replace(s,"$1_$2");
	s = new EReg("([a-z\\d])([A-Z])","g").replace(s,"$1_$2");
	s = new EReg("-","g").replace(s,"_");
	return s.toLowerCase();
}
Strings.dasherize = function(s) {
	return StringTools.replace(s,"_","-");
}
Strings.repeat = function(s,times) {
	var b = [];
	var _g = 0;
	while(_g < times) {
		var i = _g++;
		b.push(s);
	}
	return b.join("");
}
Strings.wrapColumns = function(s,columns,indent,newline) {
	if(newline == null) newline = "\n";
	if(indent == null) indent = "";
	if(columns == null) columns = 78;
	var parts = Strings._reSplitWC.split(s);
	var result = [];
	var _g = 0;
	while(_g < parts.length) {
		var part = parts[_g];
		++_g;
		result.push(Strings._wrapColumns(StringTools.trim(Strings._reReduceWS.replace(part," ")),columns,indent,newline));
	}
	return result.join(newline);
}
Strings._wrapColumns = function(s,columns,indent,newline) {
	var parts = [];
	var pos = 0;
	var len = s.length;
	var ilen = indent.length;
	columns -= ilen;
	while(true) {
		if(pos + columns >= len - ilen) {
			parts.push(s.substr(pos));
			break;
		}
		var i = 0;
		while(!StringTools.isSpace(s,pos + columns - i) && i < columns) i++;
		if(i == columns) {
			i = 0;
			while(!StringTools.isSpace(s,pos + columns + i) && pos + columns + i < len) i++;
			parts.push(s.substr(pos,columns + i));
			pos += columns + i + 1;
		} else {
			parts.push(s.substr(pos,columns - i));
			pos += columns - i + 1;
		}
	}
	return indent + parts.join(newline + indent);
}
Strings.stripTags = function(s) {
	return Strings._reStripTags.replace(s,"");
}
Strings.interpolate = function(v,a,b,equation) {
	return (Strings.interpolatef(a,b,equation))(v);
}
Strings.interpolatef = function(a,b,equation) {
	var extract = function(value,s,f) {
		while(Strings._reInterpolateNumber.match(value)) {
			var left = Strings._reInterpolateNumber.matchedLeft();
			if(!Strings.empty(left)) {
				s.push(left);
				f.push(null);
			}
			s.push(null);
			f.push(Std.parseFloat(Strings._reInterpolateNumber.matched(0)));
			value = Strings._reInterpolateNumber.matchedRight();
		}
		if(!Strings.empty(value)) {
			s.push(value);
			f.push(null);
		}
	};
	var sa = [], fa = [], sb = [], fb = [];
	extract(a,sa,fa);
	extract(b,sb,fb);
	var functions = [], i = 0;
	var min = Ints.min(sa.length,sb.length);
	while(i < min) {
		if(sa[i] != sb[i]) break;
		if(null == sa[i]) {
			if(fa[i] == fb[i]) {
				var s = ["" + fa[i]];
				functions.push((function(s) {
					return function(_) {
						return s[0];
					};
				})(s));
			} else {
				var f = [Floats.interpolatef(fa[i],fb[i],equation)];
				functions.push((function(f) {
					return function(t) {
						return "" + f[0](t);
					};
				})(f));
			}
		} else {
			var s = [sa[i]];
			functions.push((function(s) {
				return function(_) {
					return s[0];
				};
			})(s));
		}
		i++;
	}
	var rest = "";
	while(i < sb.length) {
		if(null != sb[i]) rest += sb[i]; else rest += fb[i];
		i++;
	}
	if("" != rest) functions.push(function(_) {
		return rest;
	});
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		}).join("");
	};
}
Strings.interpolateChars = function(v,a,b,equation) {
	return (Strings.interpolateCharsf(a,b,equation))(v);
}
Strings.interpolateCharsf = function(a,b,equation) {
	var aa = a.split(""), ab = b.split("");
	while(aa.length > ab.length) ab.insert(0," ");
	while(ab.length > aa.length) aa.insert(0," ");
	var ai = [];
	var _g1 = 0, _g = aa.length;
	while(_g1 < _g) {
		var i = _g1++;
		ai[i] = Strings.interpolateCharf(aa[i],ab[i]);
	}
	return function(v) {
		var r = [];
		var _g1 = 0, _g = ai.length;
		while(_g1 < _g) {
			var i = _g1++;
			r[i] = ai[i](v);
		}
		return StringTools.trim(r.join(""));
	};
}
Strings.interpolateChar = function(v,a,b,equation) {
	return (Strings.interpolateCharf(a,b,equation))(v);
}
Strings.interpolateCharf = function(a,b,equation) {
	if(new EReg("^\\d","").match(b) && a == " ") a = "0";
	var r = new EReg("^[^a-zA-Z0-9]","");
	if(r.match(b) && a == " ") a = r.matched(0);
	var ca = a.charCodeAt(0), cb = b.charCodeAt(0), i = Ints.interpolatef(ca,cb,equation);
	return function(v) {
		return String.fromCharCode(i(v));
	};
}
Strings.ellipsis = function(s,maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	if(s.length > maxlen) return s.substr(0,Ints.max(symbol.length,maxlen - symbol.length)) + symbol; else return s;
}
Strings.ellipsisf = function(maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	return function(s) {
		if(s.length > maxlen) return s.substr(0,Ints.max(symbol.length,maxlen - symbol.length)) + symbol; else return s;
	};
}
Strings.compare = function(a,b) {
	return a < b?-1:a > b?1:0;
}
Strings.prototype = {
	__class__: Strings
}
thx.json.JsonDecoder = $hxClasses["thx.json.JsonDecoder"] = function(handler,tabsize) {
	if(tabsize == null) tabsize = 4;
	this.handler = handler;
	this.tabsize = tabsize;
}
thx.json.JsonDecoder.__name__ = ["thx","json","JsonDecoder"];
thx.json.JsonDecoder.prototype = {
	col: null
	,line: null
	,tabsize: null
	,src: null
	,'char': null
	,pos: null
	,handler: null
	,decode: function(s) {
		this.col = 0;
		this.line = 0;
		this.src = s;
		this["char"] = null;
		this.pos = 0;
		this.ignoreWhiteSpace();
		var p = null;
		this.handler.start();
		try {
			p = this.parse();
		} catch( e ) {
			if( js.Boot.__instanceof(e,thx.json._JsonDecoder.StreamError) ) {
				this.error("unexpected end of stream");
			} else throw(e);
		}
		this.ignoreWhiteSpace();
		if(this.pos < this.src.length) this.error("the stream contains unrecognized characters at its end");
		this.handler.end();
	}
	,ignoreWhiteSpace: function() {
		while(this.pos < this.src.length) {
			var c = this.readChar();
			switch(c) {
			case " ":
				this.col++;
				break;
			case "\n":
				this.col = 0;
				this.line++;
				break;
			case "\r":
				break;
			case "\t":
				this.col += this.tabsize;
				break;
			default:
				this["char"] = c;
				return;
			}
		}
	}
	,parse: function() {
		var c = this.readChar();
		switch(c) {
		case "{":
			this.col++;
			this.ignoreWhiteSpace();
			return this.parseObject();
		case "[":
			this.col++;
			this.ignoreWhiteSpace();
			return this.parseArray();
		case "\"":
			this["char"] = c;
			return this.parseString();
		default:
			this["char"] = c;
			return this.parseValue();
		}
	}
	,readChar: function() {
		if(null == this["char"]) {
			if(this.pos == this.src.length) throw thx.json._JsonDecoder.StreamError.Eof;
			return this.src.charAt(this.pos++);
		} else {
			var c = this["char"];
			this["char"] = null;
			return c;
		}
	}
	,expect: function(word) {
		var test = null == this["char"]?this.src.substr(this.pos,word.length):this["char"] + this.src.substr(this.pos,word.length - 1);
		if(test == word) {
			if(null == this["char"]) this.pos += word.length; else {
				this.pos += word.length - 1;
				this["char"] = null;
			}
			return true;
		} else return false;
	}
	,parseObject: function() {
		var first = true;
		this.handler.startObject();
		while(true) {
			this.ignoreWhiteSpace();
			if(this.expect("}")) break; else if(first) first = false; else if(this.expect(",")) this.ignoreWhiteSpace(); else this.error("expected ','");
			var k = this._parseString();
			this.ignoreWhiteSpace();
			if(!this.expect(":")) this.error("expected ':'");
			this.ignoreWhiteSpace();
			this.handler.startField(k);
			this.parse();
			this.handler.endField();
		}
		this.handler.endObject();
	}
	,parseArray: function() {
		this.ignoreWhiteSpace();
		var first = true;
		this.handler.startArray();
		while(true) {
			this.ignoreWhiteSpace();
			if(this.expect("]")) break; else if(first) first = false; else if(this.expect(",")) this.ignoreWhiteSpace(); else this.error("expected ','");
			this.handler.startItem();
			this.parse();
			this.handler.endItem();
		}
		this.handler.endArray();
	}
	,parseValue: function() {
		if(this.expect("true")) this.handler.bool(true); else if(this.expect("false")) this.handler.bool(false); else if(this.expect("null")) this.handler["null"](); else this.parseFloat();
	}
	,parseString: function() {
		this.handler.string(this._parseString());
	}
	,_parseString: function() {
		if(!this.expect("\"")) this.error("expected double quote");
		var buf = "";
		var esc = false;
		try {
			while(true) {
				var c = this.readChar();
				this.col++;
				if(esc) {
					switch(c) {
					case "\"":
						buf += "\"";
						break;
					case "\\":
						buf += "\\";
						break;
					case "/":
						buf += "/";
						break;
					case "b":
						buf += String.fromCharCode(8);
						break;
					case "f":
						buf += String.fromCharCode(12);
						break;
					case "n":
						buf += "\n";
						break;
					case "r":
						buf += "\r";
						break;
					case "t":
						buf += "\t";
						break;
					case "u":
						buf += String.fromCharCode(this.parseHexa());
						break;
					default:
						this.error("unexpected char " + c);
					}
					esc = false;
				} else switch(c) {
				case "\\":
					esc = true;
					break;
				case "\"":
					throw "__break__";
					break;
				default:
					buf += c;
				}
			}
		} catch( e ) { if( e != "__break__" ) throw e; }
		return buf;
	}
	,parseHexa: function() {
		var v = [];
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			var c = this.readChar();
			var i1 = c.toLowerCase().charCodeAt(0);
			if(!(i1 >= 48 && i1 <= 57 || i1 >= 97 && i1 <= 102)) this.error("invalid hexadecimal value " + c);
			v.push(c);
		}
		this.handler["int"](Std.parseInt("0x" + v.join("")));
		return Std.parseInt("0x" + v.join(""));
	}
	,parseFloat: function() {
		var v = "";
		if(this.expect("-")) v = "-";
		if(this.expect("0")) v += "0"; else {
			var c = this.readChar();
			var i = c.charCodeAt(0);
			if(i < 49 || i > 57) this.error("expected digit between 1 and 9");
			v += c;
			this.col++;
		}
		try {
			v += this.parseDigits();
		} catch( e ) {
			if( js.Boot.__instanceof(e,thx.json._JsonDecoder.StreamError) ) {
				this.handler["int"](Std.parseInt(v));
				return;
			} else throw(e);
		}
		try {
			if(this.expect(".")) v += "." + this.parseDigits(1); else {
				this.handler["int"](Std.parseInt(v));
				return;
			}
			if(this.expect("e") || this.expect("E")) {
				v += "e";
				if(this.expect("+")) {
				} else if(this.expect("-")) v += "-";
				v += this.parseDigits(1);
			}
		} catch( e ) {
			if( js.Boot.__instanceof(e,thx.json._JsonDecoder.StreamError) ) {
				this.handler["float"](Std.parseFloat(v));
				return;
			} else throw(e);
		}
		this.handler["float"](Std.parseFloat(v));
	}
	,parseDigits: function(atleast) {
		if(atleast == null) atleast = 0;
		var buf = "";
		while(true) {
			var c = null;
			try {
				c = this.readChar();
			} catch( e ) {
				if( js.Boot.__instanceof(e,thx.json._JsonDecoder.StreamError) ) {
					if(buf.length < atleast) this.error("expected digit");
					return buf;
				} else throw(e);
			}
			var i = c.charCodeAt(0);
			if(i < 48 || i > 57) {
				if(buf.length < atleast) this.error("expected digit");
				this.col += buf.length;
				this["char"] = c;
				return buf;
			} else buf += c;
		}
		return null;
	}
	,error: function(msg) {
		var context = this.pos == this.src.length?"":"\nrest: " + (null != this["char"]?this["char"]:"") + this.src.substr(this.pos) + "...";
		throw new thx.error.Error("error at L {0} C {1}: {2}{3}",[this.line,this.col,msg,context],null,{ fileName : "JsonDecoder.hx", lineNumber : 358, className : "thx.json.JsonDecoder", methodName : "error"});
	}
	,__class__: thx.json.JsonDecoder
}
if(!thx.json._JsonDecoder) thx.json._JsonDecoder = {}
thx.json._JsonDecoder.StreamError = $hxClasses["thx.json._JsonDecoder.StreamError"] = { __ename__ : ["thx","json","_JsonDecoder","StreamError"], __constructs__ : ["Eof"] }
thx.json._JsonDecoder.StreamError.Eof = ["Eof",0];
thx.json._JsonDecoder.StreamError.Eof.toString = $estr;
thx.json._JsonDecoder.StreamError.Eof.__enum__ = thx.json._JsonDecoder.StreamError;
thx.js.HostType = $hxClasses["thx.js.HostType"] = { __ename__ : ["thx","js","HostType"], __constructs__ : ["UnknownServer","NodeJs","IE","Firefox","Safari","Chrome","Opera","Unknown"] }
thx.js.HostType.UnknownServer = ["UnknownServer",0];
thx.js.HostType.UnknownServer.toString = $estr;
thx.js.HostType.UnknownServer.__enum__ = thx.js.HostType;
thx.js.HostType.NodeJs = ["NodeJs",1];
thx.js.HostType.NodeJs.toString = $estr;
thx.js.HostType.NodeJs.__enum__ = thx.js.HostType;
thx.js.HostType.IE = function(version) { var $x = ["IE",2,version]; $x.__enum__ = thx.js.HostType; $x.toString = $estr; return $x; }
thx.js.HostType.Firefox = function(version) { var $x = ["Firefox",3,version]; $x.__enum__ = thx.js.HostType; $x.toString = $estr; return $x; }
thx.js.HostType.Safari = function(version) { var $x = ["Safari",4,version]; $x.__enum__ = thx.js.HostType; $x.toString = $estr; return $x; }
thx.js.HostType.Chrome = function(version) { var $x = ["Chrome",5,version]; $x.__enum__ = thx.js.HostType; $x.toString = $estr; return $x; }
thx.js.HostType.Opera = function(version) { var $x = ["Opera",6,version]; $x.__enum__ = thx.js.HostType; $x.toString = $estr; return $x; }
thx.js.HostType.Unknown = function(what) { var $x = ["Unknown",7,what]; $x.__enum__ = thx.js.HostType; $x.toString = $estr; return $x; }
thx.js.EnvironmentType = $hxClasses["thx.js.EnvironmentType"] = { __ename__ : ["thx","js","EnvironmentType"], __constructs__ : ["Mobile","Desktop","Server","UnknownEnvironment"] }
thx.js.EnvironmentType.Mobile = ["Mobile",0];
thx.js.EnvironmentType.Mobile.toString = $estr;
thx.js.EnvironmentType.Mobile.__enum__ = thx.js.EnvironmentType;
thx.js.EnvironmentType.Desktop = ["Desktop",1];
thx.js.EnvironmentType.Desktop.toString = $estr;
thx.js.EnvironmentType.Desktop.__enum__ = thx.js.EnvironmentType;
thx.js.EnvironmentType.Server = ["Server",2];
thx.js.EnvironmentType.Server.toString = $estr;
thx.js.EnvironmentType.Server.__enum__ = thx.js.EnvironmentType;
thx.js.EnvironmentType.UnknownEnvironment = ["UnknownEnvironment",3];
thx.js.EnvironmentType.UnknownEnvironment.toString = $estr;
thx.js.EnvironmentType.UnknownEnvironment.__enum__ = thx.js.EnvironmentType;
thx.js.OSType = $hxClasses["thx.js.OSType"] = { __ename__ : ["thx","js","OSType"], __constructs__ : ["Windows","IOs","Android","Mac","Linux","UnknownOs"] }
thx.js.OSType.Windows = function(version) { var $x = ["Windows",0,version]; $x.__enum__ = thx.js.OSType; $x.toString = $estr; return $x; }
thx.js.OSType.IOs = ["IOs",1];
thx.js.OSType.IOs.toString = $estr;
thx.js.OSType.IOs.__enum__ = thx.js.OSType;
thx.js.OSType.Android = ["Android",2];
thx.js.OSType.Android.toString = $estr;
thx.js.OSType.Android.__enum__ = thx.js.OSType;
thx.js.OSType.Mac = ["Mac",3];
thx.js.OSType.Mac.toString = $estr;
thx.js.OSType.Mac.__enum__ = thx.js.OSType;
thx.js.OSType.Linux = ["Linux",4];
thx.js.OSType.Linux.toString = $estr;
thx.js.OSType.Linux.__enum__ = thx.js.OSType;
thx.js.OSType.UnknownOs = ["UnknownOs",5];
thx.js.OSType.UnknownOs.toString = $estr;
thx.js.OSType.UnknownOs.__enum__ = thx.js.OSType;
thx.js.ClientHost = $hxClasses["thx.js.ClientHost"] = function() { }
thx.js.ClientHost.__name__ = ["thx","js","ClientHost"];
thx.js.ClientHost.host = null;
thx.js.ClientHost.environment = null;
thx.js.ClientHost.os = null;
thx.js.ClientHost.isIE = function() {
	return (function($this) {
		var $r;
		switch( (thx.js.ClientHost.host)[1] ) {
		case 2:
			$r = true;
			break;
		default:
			$r = false;
		}
		return $r;
	}(this));
}
thx.js.ClientHost.hostVersion = function() {
	return (function($this) {
		var $r;
		var $e = (thx.js.ClientHost.host);
		switch( $e[1] ) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			var v = $e[2];
			$r = v;
			break;
		default:
			$r = null;
		}
		return $r;
	}(this));
}
thx.js.ClientHost.hostString = function() {
	return (function($this) {
		var $r;
		switch( (thx.js.ClientHost.host)[1] ) {
		case 0:
			$r = "unknown_server";
			break;
		case 7:
			$r = "unknown";
			break;
		case 1:
			$r = "nodejs";
			break;
		default:
			$r = thx.js.ClientHost.host[0];
		}
		return $r;
	}(this));
}
thx.js.ClientHost.osString = function() {
	return thx.js.ClientHost.os[0];
}
thx.js.ClientHost.osVersion = function() {
	return (function($this) {
		var $r;
		var $e = (thx.js.ClientHost.os);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			$r = v;
			break;
		default:
			$r = null;
		}
		return $r;
	}(this));
}
thx.js.ClientHost.environmentString = function() {
	return thx.js.ClientHost.environment[0];
}
thx.js.ClientHost.userAgent = function() {
	return "" + navigator.userAgent;
}
thx.js.ClientHost.hasNavigator = function() {
	return typeof navigator !== 'undefined';
}
thx.js.ClientHost.prototype = {
	__class__: thx.js.ClientHost
}
rg.info.InfoMap = $hxClasses["rg.info.InfoMap"] = function() {
	this.property = "location";
	this.type = "geojson";
	this.colorScaleMode = rg.svg.chart.ColorScaleMode.FromCssInterpolation();
	this.usejsonp = true;
	this.radius = function(_,_1) {
		return 10;
	};
}
rg.info.InfoMap.__name__ = ["rg","info","InfoMap"];
rg.info.InfoMap.filters = function() {
	return [{ field : "url", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "type", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "scale", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "projection", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "classname", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "translate", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "origin", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "parallels", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "mode", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "mode", value : Type.createEnum(thx.geo.ProjectionMode,Strings.ucfirst(v.toLowerCase()),[])}];
	}},{ field : "property", validator : function(v) {
		return v == null || Std["is"](v,String);
	}, filter : null},{ field : "usejsonp", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "template", validator : function(v) {
		return Std["is"](v,String) && rg.info.InfoMap.isValidTemplate(v);
	}, filter : rg.info.InfoMap.fromTemplate},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabel(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "color", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "colorScaleMode", value : rg.svg.chart.ColorScaleModes.createFromDynamic(v)}];
	}},{ field : "radius", validator : function(v) {
		return Std["is"](v,Float) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "radius", value : Std["is"](v,Float)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "mapping", validator : function(v) {
		return Std["is"](v,String) || Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		if(Std["is"](v,String)) return [{ field : "mappingurl", value : v}]; else return [{ field : "mapping", value : v}];
	}}];
}
rg.info.InfoMap.isValidTemplate = function(t) {
	return Arrays.exists(["world","world-countries","usa-states","usa-state-centroids","usa-counties"],t.toLowerCase());
}
rg.info.InfoMap.fromTemplate = function(t) {
	switch(t.toLowerCase()) {
	case "world":case "world-countries":
		return [{ field : "projection", value : "mercator"},{ field : "url", value : rg.RGConst.BASE_URL_GEOJSON + "world-countries.json.js"}];
	case "usa-states":
		return [{ field : "projection", value : "albersusa"},{ field : "url", value : rg.RGConst.BASE_URL_GEOJSON + "usa-states.json.js"}];
	case "usa-state-centroids":
		return [{ field : "projection", value : "albersusa"},{ field : "url", value : rg.RGConst.BASE_URL_GEOJSON + "usa-state-centroids.json.js"}];
	case "usa-counties":
		return [{ field : "projection", value : "albersusa"},{ field : "url", value : rg.RGConst.BASE_URL_GEOJSON + "usa-counties.json.js"}];
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("invalid template",null,null,{ fileName : "InfoMap.hx", lineNumber : 194, className : "rg.info.InfoMap", methodName : "fromTemplate"});
			return $r;
		}(this));
	}
}
rg.info.InfoMap.prototype = {
	url: null
	,type: null
	,scale: null
	,projection: null
	,classname: null
	,translate: null
	,origin: null
	,parallels: null
	,mode: null
	,property: null
	,label: null
	,click: null
	,radius: null
	,colorScaleMode: null
	,usejsonp: null
	,mapping: null
	,mappingurl: null
	,__class__: rg.info.InfoMap
}
rg.graph.Graph = $hxClasses["rg.graph.Graph"] = function(nodeidf,edgeidf) {
	this.nodes = rg.graph.GraphNodes.newInstance(this,nodeidf);
	this.edges = rg.graph.GraphEdges.newInstance(this,edgeidf);
}
rg.graph.Graph.__name__ = ["rg","graph","Graph"];
rg.graph.Graph.friendNodes = function(friend) {
	return friend;
}
rg.graph.Graph.friendEdges = function(friend) {
	return friend;
}
rg.graph.Graph.prototype = {
	nodes: null
	,edges: null
	,empty: function() {
		return Iterators.count(this.nodes.iterator()) == 0;
	}
	,clear: function() {
		this.edges.clear();
		this.nodes.clear();
	}
	,clone: function() {
		var g = new rg.graph.Graph();
		g.nodes = this.nodes.copyTo(g);
		g.edges = this.edges.copyTo(g);
		return g;
	}
	,findSinks: function() {
		return Iterators.filter(this.nodes.iterator(),function(n) {
			return n.isSink();
		});
	}
	,findSink: function() {
		return Iterators.firstf(this.nodes.iterator(),function(n) {
			return n.isSink();
		});
	}
	,findSources: function() {
		return Iterators.filter(this.nodes.iterator(),function(n) {
			return n.isSource();
		});
	}
	,findSource: function() {
		return Iterators.firstf(this.nodes.iterator(),function(n) {
			return n.isSource();
		});
	}
	,findIsolateds: function() {
		return Iterators.filter(this.nodes.iterator(),function(n) {
			return n.isIsolated();
		});
	}
	,findIsolated: function() {
		return Iterators.firstf(this.nodes.iterator(),function(n) {
			return n.isIsolated();
		});
	}
	,paths: function(a,b) {
		var traveled = new thx.collection.Set(), paths = [], other, r;
		var traverse = (function($this) {
			var $r;
			var traverse = null;
			traverse = function(path,n) {
				var totraverse = [];
				var $it0 = n.graph.edges.edges(n);
				while( $it0.hasNext() ) {
					var edge = $it0.next();
					other = edge.other(n);
					if(traveled.exists(edge.id)) continue; else if(other == b) paths.push(path.concat([edge])); else if(!other.isSource()) totraverse.push((function(f,a1,a2) {
						return function() {
							return f(a1,a2);
						};
					})(traverse,path.concat([edge]),other));
					traveled.add(edge.id);
				}
				var _g = 0;
				while(_g < totraverse.length) {
					var t = totraverse[_g];
					++_g;
					t();
				}
			};
			$r = traverse;
			return $r;
		}(this));
		traverse([],a);
		return paths;
	}
	,path: function(a,b,weighted) {
		if(weighted == null) weighted = false;
		return this.pickPath(this.paths(a,b),weighted);
	}
	,directedPaths: function(a,b) {
		var traveled = new thx.collection.Set(), paths = [], other, r;
		var traverse = (function($this) {
			var $r;
			var traverse = null;
			traverse = function(path,n) {
				var totraverse = [];
				var $it0 = n.graph.edges.positives(n);
				while( $it0.hasNext() ) {
					var edge = $it0.next();
					other = edge.head;
					if(traveled.exists(edge.id)) continue; else if(other == b) paths.push(path.concat([edge])); else if(!other.isSink() && !other.isSource()) totraverse.push((function(f,a1,a2) {
						return function() {
							return f(a1,a2);
						};
					})(traverse,path.concat([edge]),other));
					traveled.add(edge.id);
				}
				var _g = 0;
				while(_g < totraverse.length) {
					var t = totraverse[_g];
					++_g;
					t();
				}
			};
			$r = traverse;
			return $r;
		}(this));
		traverse([],a);
		return paths;
	}
	,directedPath: function(a,b,weighted) {
		if(weighted == null) weighted = false;
		return this.pickPath(this.directedPaths(a,b),weighted);
	}
	,pickPath: function(paths,weighted) {
		if(paths.length == 0) return null;
		if(weighted) return Arrays.min(paths,function(arr) {
			return arr.reduce(function(acc,edge,_) {
				return acc + edge.weight;
			},0);
		}); else return Arrays.min(paths,function(arr) {
			return arr.length;
		});
	}
	,toString: function() {
		return "Graph (nodes: " + IntHashes.count(this.nodes.collection) + ", edges: " + IntHashes.count(this.edges.collection) + ")";
	}
	,__class__: rg.graph.Graph
}
rg.info.InfoAnimation = $hxClasses["rg.info.InfoAnimation"] = function() {
	this.animated = false;
	this.duration = 1500;
	this.delay = 150;
	this.ease = thx.math.Equations.elasticf();
}
rg.info.InfoAnimation.__name__ = ["rg","info","InfoAnimation"];
rg.info.InfoAnimation.filters = function() {
	return [{ field : "animated", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "duration", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "delay", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : null},{ field : "ease", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.info.InfoAnimation.prototype = {
	animated: null
	,duration: null
	,ease: null
	,delay: null
	,__class__: rg.info.InfoAnimation
}
chx.lang.UnsupportedException = $hxClasses["chx.lang.UnsupportedException"] = function(msg,cause) {
	chx.lang.Exception.call(this,msg,cause);
}
chx.lang.UnsupportedException.__name__ = ["chx","lang","UnsupportedException"];
chx.lang.UnsupportedException.__super__ = chx.lang.Exception;
chx.lang.UnsupportedException.prototype = $extend(chx.lang.Exception.prototype,{
	__class__: chx.lang.UnsupportedException
});
math.reduction.Montgomery = $hxClasses["math.reduction.Montgomery"] = function(x) {
	this.m = x;
	this.mp = this.m.invDigit();
	this.mpl = this.mp & 32767;
	this.mph = this.mp >> 15;
	this.um = (1 << math.BigInteger.DB - 15) - 1;
	this.mt2 = 2 * this.m.t;
}
math.reduction.Montgomery.__name__ = ["math","reduction","Montgomery"];
math.reduction.Montgomery.__interfaces__ = [math.reduction.ModularReduction];
math.reduction.Montgomery.prototype = {
	m: null
	,mt2: null
	,mp: null
	,mpl: null
	,mph: null
	,um: null
	,convert: function(x) {
		var r = math.BigInteger.nbi();
		x.abs().dlShiftTo(this.m.t,r);
		r.divRemTo(this.m,null,r);
		if(x.sign < 0 && r.compare(math.BigInteger.getZERO()) > 0) this.m.subTo(r,r);
		return r;
	}
	,revert: function(x) {
		var r = math.BigInteger.nbi();
		x.copyTo(r);
		this.reduce(r);
		return r;
	}
	,reduce: function(x) {
		x.padTo(this.mt2);
		var i = 0;
		while(i < this.m.t) {
			var j = x.chunks[i] & 32767;
			var u0 = j * this.mpl + ((j * this.mph + (x.chunks[i] >> 15) * this.mpl & this.um) << 15) & math.BigInteger.DM;
			j = i + this.m.t;
			x.chunks[j] += this.m.am(0,u0,x,i,0,this.m.t);
			while(x.chunks[j] >= math.BigInteger.DV) {
				x.chunks[j] -= math.BigInteger.DV;
				if(x.chunks.length < j + 2) x.chunks[j + 1] = 0;
				x.chunks[++j]++;
			}
			i++;
		}
		x.clamp();
		x.drShiftTo(this.m.t,x);
		if(x.compare(this.m) >= 0) x.subTo(this.m,x);
	}
	,mulTo: function(x,y,r) {
		x.multiplyTo(y,r);
		this.reduce(r);
	}
	,sqrTo: function(x,r) {
		x.squareTo(r);
		this.reduce(r);
	}
	,__class__: math.reduction.Montgomery
}
thx.math.scale.NumericScale = $hxClasses["thx.math.scale.NumericScale"] = function() {
	this._domain = [0.0,1.0];
	this._range = [0.0,1.0];
	this.f = Floats.interpolatef;
	this._clamp = false;
	this.rescale();
}
thx.math.scale.NumericScale.__name__ = ["thx","math","scale","NumericScale"];
thx.math.scale.NumericScale.__interfaces__ = [thx.math.scale.IScale];
thx.math.scale.NumericScale.scaleBilinear = function(domain,range,uninterpolate,interpolate) {
	var u = uninterpolate(domain[0],domain[1]), i = interpolate(range[0],range[1],null);
	return function(x) {
		return i(u(x));
	};
}
thx.math.scale.NumericScale.scalePolylinear = function(domain,range,uninterpolate,interpolate) {
	var u = [], i = [];
	var _g1 = 1, _g = domain.length;
	while(_g1 < _g) {
		var j = _g1++;
		u.push(uninterpolate(domain[j - 1],domain[j]));
		i.push(interpolate(range[j - 1],range[j],null));
	}
	return function(x) {
		var j = Arrays.bisectRight(domain,x,1,domain.length - 1) - 1;
		return i[j](u[j](x));
	};
}
thx.math.scale.NumericScale.prototype = {
	_domain: null
	,_range: null
	,f: null
	,_clamp: null
	,_output: null
	,_input: null
	,rescale: function() {
		var linear = this._domain.length == 2?thx.math.scale.NumericScale.scaleBilinear:thx.math.scale.NumericScale.scalePolylinear, uninterpolate = this._clamp?Floats.uninterpolateClampf:Floats.uninterpolatef;
		this._output = linear(this._domain,this._range,uninterpolate,this.f);
		this._input = linear(this._range,this._domain,uninterpolate,Floats.interpolatef);
		return this;
	}
	,scale: function(x,_) {
		return this._output(x);
	}
	,invert: function(y,_) {
		return this._input(y);
	}
	,getDomain: function() {
		return this._domain;
	}
	,domain: function(d) {
		this._domain = d;
		return this.rescale();
	}
	,getRange: function() {
		return this._range;
	}
	,range: function(r) {
		this._range = r;
		return this.rescale();
	}
	,rangeRound: function(r) {
		this.range(r);
		this.interpolatef(Ints.interpolatef);
		return this;
	}
	,getInterpolate: function() {
		return this.f;
	}
	,interpolatef: function(x) {
		this.f = x;
		return this.rescale();
	}
	,getClamp: function() {
		return this._clamp;
	}
	,clamp: function(v) {
		this._clamp = v;
		return this.rescale();
	}
	,ticks: function() {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 86, className : "thx.math.scale.NumericScale", methodName : "ticks"});
			return $r;
		}(this));
	}
	,tickFormat: function(v,i) {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 91, className : "thx.math.scale.NumericScale", methodName : "tickFormat"});
			return $r;
		}(this));
	}
	,transform: function(scale,t,a,b) {
		var range = this.getRange().map(function(v,_) {
			return (v - t) / scale;
		});
		this.domain([a,b]);
		var r = range.map(this.invert.$bind(this));
		this.domain(r);
		return this;
	}
	,_this: function() {
		return this;
	}
	,__class__: thx.math.scale.NumericScale
}
thx.math.scale.Linear = $hxClasses["thx.math.scale.Linear"] = function() {
	thx.math.scale.NumericScale.call(this);
	this.m = 10;
}
thx.math.scale.Linear.__name__ = ["thx","math","scale","Linear"];
thx.math.scale.Linear.__super__ = thx.math.scale.NumericScale;
thx.math.scale.Linear.prototype = $extend(thx.math.scale.NumericScale.prototype,{
	m: null
	,getModulo: function() {
		return this.m;
	}
	,modulo: function(m) {
		this.m = m;
		return this;
	}
	,tickRange: function() {
		var start = Arrays.min(this._domain), stop = Arrays.max(this._domain), span = stop - start, step = Math.pow(10,Math.floor(Math.log(span / this.m) / 2.302585092994046)), err = this.m / (span / step);
		if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= .75) step *= 2;
		return { start : Math.ceil(start / step) * step, stop : Math.floor(stop / step) * step + step * .5, step : step};
	}
	,ticks: function() {
		var range = this.tickRange();
		return Floats.range(range.start,range.stop,range.step);
	}
	,tickFormat: function(v,i) {
		var n = Math.max(0,-Math.floor(Math.log(this.tickRange().step) / 2.302585092994046 + .01));
		return Floats.format(v,"D:" + n);
	}
	,__class__: thx.math.scale.Linear
});
rg.factory.FactoryVariableIndependent = $hxClasses["rg.factory.FactoryVariableIndependent"] = function() {
}
rg.factory.FactoryVariableIndependent.__name__ = ["rg","factory","FactoryVariableIndependent"];
rg.factory.FactoryVariableIndependent.convertBound = function(axis,value) {
	if(null == value || Reflect.isFunction(value)) return value;
	if(Std["is"](axis,rg.axis.AxisTime)) {
		if(Std["is"](value,Date)) value = ((function($this) {
			var $r;
			var $t = value;
			if(Std["is"]($t,Date)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this))).getTime();
		if(Std["is"](value,Float)) return function(_,_1) {
			return value;
		};
		if(Std["is"](value,String)) return function(_,_1) {
			return thx.date.DateParser.parse(value).getTime();
		};
		throw new thx.error.Error("invalid value '{0}' for time bound",[value],null,{ fileName : "FactoryVariableIndependent.hx", lineNumber : 46, className : "rg.factory.FactoryVariableIndependent", methodName : "convertBound"});
	}
	return function(_,_1) {
		return value;
	};
}
rg.factory.FactoryVariableIndependent.prototype = {
	create: function(info) {
		if(null == info.type) return null;
		var axiscreateer = new rg.factory.FactoryAxis(), variable = new rg.data.VariableIndependent(info.type,info.scaleDistribution), axis = axiscreateer.createDiscrete(info.type,variable,info.values,info.groupBy);
		variable.setAxis(axis);
		variable.setMinF(rg.factory.FactoryVariableIndependent.convertBound(axis,info.min));
		variable.setMaxF(rg.factory.FactoryVariableIndependent.convertBound(axis,info.max));
		return variable;
	}
	,__class__: rg.factory.FactoryVariableIndependent
}
rg.axis.ITickmark = $hxClasses["rg.axis.ITickmark"] = function() { }
rg.axis.ITickmark.__name__ = ["rg","axis","ITickmark"];
rg.axis.ITickmark.prototype = {
	delta: null
	,major: null
	,value: null
	,label: null
	,__class__: rg.axis.ITickmark
	,__properties__: {get_label:"getLabel",get_value:"getValue",get_major:"getMajor",get_delta:"getDelta"}
}
rg.axis.Tickmark = $hxClasses["rg.axis.Tickmark"] = function(value,major,delta) {
	this.value = value;
	this.major = major;
	this.delta = delta;
}
rg.axis.Tickmark.__name__ = ["rg","axis","Tickmark"];
rg.axis.Tickmark.__interfaces__ = [rg.axis.ITickmark];
rg.axis.Tickmark.prototype = {
	delta: null
	,major: null
	,value: null
	,label: null
	,getDelta: function() {
		return this.delta;
	}
	,getMajor: function() {
		return this.major;
	}
	,getValue: function() {
		return this.value;
	}
	,getLabel: function() {
		return rg.util.RGStrings.humanize(this.getValue());
	}
	,toString: function() {
		return rg.axis.Tickmarks.string(this);
	}
	,__class__: rg.axis.Tickmark
	,__properties__: {get_label:"getLabel",get_value:"getValue",get_major:"getMajor",get_delta:"getDelta"}
}
rg.util.DataPoints = $hxClasses["rg.util.DataPoints"] = function() { }
rg.util.DataPoints.__name__ = ["rg","util","DataPoints"];
rg.util.DataPoints.partition = function(dps,property,def) {
	if(def == null) def = "default";
	var map = new thx.collection.HashList();
	var getBucket = function(n) {
		var bucket = map.get(n);
		if(null == bucket) {
			bucket = [];
			map.set(n,bucket);
		}
		return bucket;
	};
	var v, name, bucket;
	var _g = 0;
	while(_g < dps.length) {
		var dp = dps[_g];
		++_g;
		v = Reflect.field(dp,property);
		if(null == v) name = def; else name = Dynamics.string(v);
		getBucket(name).push(dp);
	}
	return map.array();
}
rg.util.DataPoints.filterByIndependents = function(dps,variables) {
	var _g = 0;
	while(_g < variables.length) {
		var variable = [variables[_g]];
		++_g;
		var values = [variable[0].axis.range(variable[0].min(),variable[0].max())];
		dps = Arrays.filter(dps,(function(values,variable) {
			return function(dp) {
				var v = Reflect.field(dp,variable[0].type);
				if(null == v) return false;
				return Arrays.exists(values[0],v);
			};
		})(values,variable));
	}
	return dps;
}
rg.util.DataPoints.filterByDependents = function(dps,variables) {
	var _g = 0;
	while(_g < variables.length) {
		var variable = [variables[_g]];
		++_g;
		dps = Arrays.filter(dps,(function(variable) {
			return function(dp) {
				if(null == Reflect.field(dp,variable[0].type)) return false; else return true;
			};
		})(variable));
	}
	return dps;
}
rg.util.DataPoints.value = function(dp,property) {
	return Reflect.field(dp,property);
}
rg.util.DataPoints.valueAlt = function(dp,property,alt) {
	var v;
	return null == (v = Reflect.field(dp,property))?alt:v;
}
rg.util.DataPoints.values = function(dps,property) {
	return Arrays.filter(dps.map(function(dp,_) {
		return Reflect.field(dp,property);
	}),function(d) {
		return d != null;
	});
}
rg.util.DataPoints.id = function(dp,dependentProperties) {
	var cdp = Objects.clone(dp);
	var _g = 0;
	while(_g < dependentProperties.length) {
		var p = dependentProperties[_g];
		++_g;
		Reflect.deleteField(cdp,p);
	}
	return haxe.Md5.encode(Dynamics.string(cdp));
}
rg.util.DataPoints.prototype = {
	__class__: rg.util.DataPoints
}
chx.lang.OutsideBoundsException = $hxClasses["chx.lang.OutsideBoundsException"] = function(msg,cause) {
	chx.lang.Exception.call(this,msg,cause);
}
chx.lang.OutsideBoundsException.__name__ = ["chx","lang","OutsideBoundsException"];
chx.lang.OutsideBoundsException.__super__ = chx.lang.Exception;
chx.lang.OutsideBoundsException.prototype = $extend(chx.lang.Exception.prototype,{
	__class__: chx.lang.OutsideBoundsException
});
thx.svg.Arc = $hxClasses["thx.svg.Arc"] = function() {
	this._r0 = function(_,_1) {
		return 0;
	};
	this._r1 = function(_,_1) {
		return 1;
	};
	this._a0 = function(_,_1) {
		return 0;
	};
	this._a1 = function(_,_1) {
		return Math.PI;
	};
}
thx.svg.Arc.__name__ = ["thx","svg","Arc"];
thx.svg.Arc.fromObject = function() {
	return new thx.svg.Arc().innerRadiusf(function(d,_) {
		return d.innerRadius;
	}).outerRadiusf(function(d,_) {
		return d.outerRadius;
	}).startAnglef(function(d,_) {
		return d.startAngle;
	}).endAnglef(function(d,_) {
		return d.endAngle;
	});
}
thx.svg.Arc.fromAngleObject = function() {
	return new thx.svg.Arc().startAnglef(function(d,_) {
		return d.startAngle;
	}).endAnglef(function(d,_) {
		return d.endAngle;
	});
}
thx.svg.Arc.prototype = {
	_r0: null
	,_r1: null
	,_a0: null
	,_a1: null
	,getInnerRadius: function() {
		return this._r0;
	}
	,innerRadius: function(v) {
		return this.innerRadiusf(function(_,_1) {
			return v;
		});
	}
	,innerRadiusf: function(v) {
		this._r0 = v;
		return this;
	}
	,getOuterRadius: function() {
		return this._r1;
	}
	,outerRadius: function(v) {
		return this.outerRadiusf(function(_,_1) {
			return v;
		});
	}
	,outerRadiusf: function(v) {
		this._r1 = v;
		return this;
	}
	,getStartAngle: function() {
		return this._a0;
	}
	,startAngle: function(v) {
		return this.startAnglef(function(_,_1) {
			return v;
		});
	}
	,startAnglef: function(v) {
		this._a0 = v;
		return this;
	}
	,getEndAngle: function() {
		return this._a1;
	}
	,endAngle: function(v) {
		return this.endAnglef(function(_,_1) {
			return v;
		});
	}
	,endAnglef: function(v) {
		this._a1 = v;
		return this;
	}
	,shape: function(d,i) {
		var a0 = this._a0(d,i) + thx.svg.LineInternals.arcOffset, a1 = this._a1(d,i) + thx.svg.LineInternals.arcOffset, da = a1 - a0, df = da < Math.PI?"0":"1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1), r0 = this._r0(d,i), r1 = this._r1(d,i);
		return da >= thx.svg.LineInternals.arcMax?r0 != 0?"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + r0 + "Z":"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z":r0 != 0?"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z":"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
	}
	,centroid: function(d,i) {
		var r = (this._r0(d,i) + this._r1(d,i)) / 2, a = (this._a0(d,i) + this._a1(d,i)) / 2 + thx.svg.LineInternals.arcOffset;
		return [Math.cos(a) * r,Math.sin(a) * r];
	}
	,__class__: thx.svg.Arc
}
rg.util.Js = $hxClasses["rg.util.Js"] = function() { }
rg.util.Js.__name__ = ["rg","util","Js"];
rg.util.Js.findScript = function(fragment) {
	var scripts = js.Lib.document.getElementsByTagName("SCRIPT");
	if(typeof fragment == "string") {
		var _g1 = 0, _g = scripts.length;
		while(_g1 < _g) {
			var i = _g1++;
			var script = scripts[i], src = script.getAttribute("src");
			if(null != src && src.indexOf(fragment) >= 0) return script;
		}
	} else {
		var _g1 = 0, _g = scripts.length;
		while(_g1 < _g) {
			var i = _g1++;
			var script = scripts[i], src = script.getAttribute("src");
			if(null != src && src.match(fragment)) return script;
		}
	}
	return null;
}
rg.util.Js.findPosition = function(el) {
	var x = 0, y = 0, obj = el;
	do {
		x += obj.offsetLeft;
		y += obj.offsetTop;
	} while(null != (obj = obj.offsetParent));
	return { x : x, y : y};
}
rg.util.Js.prototype = {
	__class__: rg.util.Js
}
rg.info.InfoLineChart = $hxClasses["rg.info.InfoLineChart"] = function() {
	rg.info.InfoCartesianChart.call(this);
	this.segment = new rg.info.InfoSegment();
	this.effect = rg.svg.chart.LineEffect.Gradient(-1.2,2);
	this.interpolation = thx.svg.LineInterpolator.Linear;
	this.displayarea = false;
}
rg.info.InfoLineChart.__name__ = ["rg","info","InfoLineChart"];
rg.info.InfoLineChart.filters = function() {
	return [{ field : "symbol", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "symbol", value : Std["is"](v,String)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "symbolstyle", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "symbolStyle", value : v}];
	}},{ field : "y0property", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "displayarea", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "effect", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.LineEffects.parse(v)}];
	}},{ field : "interpolation", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "interpolation", value : thx.svg.LineInterpolators.parse(v)}];
	}},{ field : "segmenton", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),{ on : v})}];
	}},{ field : "segment", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),v)}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoLineChart.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoLineChart.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	effect: null
	,interpolation: null
	,symbol: null
	,symbolStyle: null
	,displayarea: null
	,y0property: null
	,segment: null
	,__class__: rg.info.InfoLineChart
});
var List = $hxClasses["List"] = function() {
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype = {
	h: null
	,q: null
	,length: null
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,last: function() {
		return this.q == null?null:this.q[0];
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,clear: function() {
		this.h = null;
		this.q = null;
		this.length = 0;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l[0] == v) {
				if(prev == null) this.h = l[1]; else prev[1] = l[1];
				if(this.q == l) this.q = prev;
				this.length--;
				return true;
			}
			prev = l;
			l = l[1];
		}
		return false;
	}
	,iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,toString: function() {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		s.b[s.b.length] = "{";
		while(l != null) {
			if(first) first = false; else s.b[s.b.length] = ", ";
			s.add(Std.string(l[0]));
			l = l[1];
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,join: function(sep) {
		var s = new StringBuf();
		var first = true;
		var l = this.h;
		while(l != null) {
			if(first) first = false; else s.b[s.b.length] = sep == null?"null":sep;
			s.add(l[0]);
			l = l[1];
		}
		return s.b.join("");
	}
	,filter: function(f) {
		var l2 = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			if(f(v)) l2.add(v);
		}
		return l2;
	}
	,map: function(f) {
		var b = new List();
		var l = this.h;
		while(l != null) {
			var v = l[0];
			l = l[1];
			b.add(f(v));
		}
		return b;
	}
	,__class__: List
}
thx.error.AbstractMethod = $hxClasses["thx.error.AbstractMethod"] = function(posInfo) {
	thx.error.Error.call(this,"method {0}.{1}() is abstract",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "AbstractMethod.hx", lineNumber : 14, className : "thx.error.AbstractMethod", methodName : "new"});
}
thx.error.AbstractMethod.__name__ = ["thx","error","AbstractMethod"];
thx.error.AbstractMethod.__super__ = thx.error.Error;
thx.error.AbstractMethod.prototype = $extend(thx.error.Error.prototype,{
	__class__: thx.error.AbstractMethod
});
rg.util.RGStrings = $hxClasses["rg.util.RGStrings"] = function() { }
rg.util.RGStrings.__name__ = ["rg","util","RGStrings"];
rg.util.RGStrings.humanize = function(d) {
	if(Std["is"](d,Int)) return Ints.format(d);
	if(Std["is"](d,Float)) return Floats.format(d);
	var s = Std.string(d);
	if(rg.util.RGStrings.range.match(s)) {
		var v1 = rg.util.RGStrings.range.matched(1), v2 = rg.util.RGStrings.range.matched(2);
		if(null != v1) v1 = Ints.canParse(v1)?Ints.format(Ints.parse(v1)):Floats.format(Floats.parse(v1)); else v1 = "";
		if(null != v2) v2 = Ints.canParse(v2)?Ints.format(Ints.parse(v2)):Floats.format(Floats.parse(v2)); else v2 = "";
		return rg.util.RGStrings.hstring(rg.util.RGStrings.range.matchedLeft()) + v1 + "-" + v2 + rg.util.RGStrings.hstring(rg.util.RGStrings.range.matchedRight());
	} else return rg.util.RGStrings.hstring(s);
}
rg.util.RGStrings.hstring = function(s) {
	return Strings.ucwords(Strings.humanize(s));
}
rg.util.RGStrings.prototype = {
	__class__: rg.util.RGStrings
}
rg.factory.FactoryLayout = $hxClasses["rg.factory.FactoryLayout"] = function() {
}
rg.factory.FactoryLayout.__name__ = ["rg","factory","FactoryLayout"];
rg.factory.FactoryLayout.prototype = {
	create: function(info,heightmargin,container) {
		var v, width = null == info.width?(v = container.node().clientWidth) > 10?v:400:info.width, height = (null == info.height?(v = container.node().clientHeight) > 10?v:300:info.height) - heightmargin;
		var layoutName = info.layout;
		if(null == layoutName) layoutName = rg.visualization.Visualizations.layoutDefault.get(info.type);
		if(null == layoutName) throw new thx.error.Error("unable to find a suitable layout for '{0}'",null,info.type,{ fileName : "FactoryLayout.hx", lineNumber : 34, className : "rg.factory.FactoryLayout", methodName : "create"});
		var layout = rg.visualization.Visualizations.instantiateLayout(layoutName,width,height,container);
		layout.feedOptions(info);
		return layout;
	}
	,__class__: rg.factory.FactoryLayout
}
if(!thx.geom) thx.geom = {}
thx.geom.Contour = $hxClasses["thx.geom.Contour"] = function() { }
thx.geom.Contour.__name__ = ["thx","geom","Contour"];
thx.geom.Contour.contourStart = function(grid) {
	var x = 0, y = 0;
	while(true) {
		if(grid(x,y)) return [x,y];
		if(x == 0) {
			x = y + 1;
			y = 0;
		} else {
			x = x - 1;
			y = y + 1;
		}
	}
	return null;
}
thx.geom.Contour.contour = function(grid,start) {
	var s = null == start?thx.geom.Contour.contourStart(grid):start, c = [], x = s[0], y = s[1], dx = 0, dy = 0, pdx = null, pdy = null, i = 0;
	do {
		i = 0;
		if(grid(x - 1,y - 1)) i += 1;
		if(grid(x,y - 1)) i += 2;
		if(grid(x - 1,y)) i += 4;
		if(grid(x,y)) i += 8;
		if(i == 6) {
			dx = pdy == -1?-1:1;
			dy = 0;
		} else if(i == 9) {
			dx = 0;
			dy = pdx == 1?-1:1;
		} else {
			dx = thx.geom.Contour.contourDx[i];
			dy = thx.geom.Contour.contourDy[i];
		}
		if(dx != pdx && dy != pdy) {
			c.push([x,y]);
			pdx = dx;
			pdy = dy;
		}
		x += dx;
		y += dy;
	} while(s[0] != x || s[1] != y);
	return c;
}
thx.geom.Contour.prototype = {
	__class__: thx.geom.Contour
}
var IntIter = $hxClasses["IntIter"] = function(min,max) {
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype = {
	min: null
	,max: null
	,hasNext: function() {
		return this.min < this.max;
	}
	,next: function() {
		return this.min++;
	}
	,__class__: IntIter
}
if(!chx.formats) chx.formats = {}
chx.formats.Base64 = $hxClasses["chx.formats.Base64"] = function() { }
chx.formats.Base64.__name__ = ["chx","formats","Base64"];
chx.formats.Base64.enc = null;
chx.formats.Base64.encode = function(bytes) {
	var ext = (function($this) {
		var $r;
		switch(bytes.length % 3) {
		case 1:
			$r = "==";
			break;
		case 2:
			$r = "=";
			break;
		case 0:
			$r = "";
			break;
		}
		return $r;
	}(this));
	if(chx.formats.Base64.enc == null) chx.formats.Base64.enc = new haxe.BaseCode(Bytes.ofString("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"));
	return chx.formats.Base64.enc.encodeBytes(bytes).toString() + ext;
}
chx.formats.Base64.decode = function(s) {
	s = StringTools.stripWhite(s);
	s = StringTools.replace(s,"=","");
	if(chx.formats.Base64.enc == null) chx.formats.Base64.enc = new haxe.BaseCode(Bytes.ofString("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"));
	return (function($this) {
		var $r;
		try {
			$r = chx.formats.Base64.enc.decodeBytes(Bytes.ofString(s));
		} catch( e ) {
			$r = null;
		}
		return $r;
	}(this));
}
chx.formats.Base64.prototype = {
	__class__: chx.formats.Base64
}
rg.layout.PanelContext = $hxClasses["rg.layout.PanelContext"] = function(panel,anchor) {
	this.panel = panel;
	this.anchor = anchor;
}
rg.layout.PanelContext.__name__ = ["rg","layout","PanelContext"];
rg.layout.PanelContext.prototype = {
	panel: null
	,anchor: null
	,__class__: rg.layout.PanelContext
}
thx.js.AccessAttribute = $hxClasses["thx.js.AccessAttribute"] = function(name,selection) {
	thx.js.Access.call(this,selection);
	this.name = name;
	this.qname = thx.xml.Namespace.qualify(name);
}
thx.js.AccessAttribute.__name__ = ["thx","js","AccessAttribute"];
thx.js.AccessAttribute.__super__ = thx.js.Access;
thx.js.AccessAttribute.prototype = $extend(thx.js.Access.prototype,{
	name: null
	,qname: null
	,get: function() {
		var n = this.name, q = this.qname;
		return this.selection.firstNode(function(node) {
			return q == null?node.getAttribute(n):node.getAttributeNS(q.space,q.local);
		});
	}
	,getFloat: function() {
		var v = this.get();
		if(thx.js.AccessAttribute.refloat.match(v)) return Std.parseFloat(thx.js.AccessAttribute.refloat.matched(1)); else return Math.NaN;
	}
	,remove: function() {
		if(null == this.qname) {
			var n = this.name;
			this.selection.eachNode(function(node,i) {
				node.removeAttribute(n);
			});
		} else {
			var q = this.qname;
			this.selection.eachNode(function(node,i) {
				node.removeAttributeNS(q.space,q.local);
			});
		}
		return this.selection;
	}
	,string: function(v) {
		if(null == this.qname) {
			var n = this.name;
			this.selection.eachNode(function(node,i) {
				node.setAttribute(n,v);
			});
		} else {
			var q = this.qname;
			this.selection.eachNode(function(node,i) {
				node.setAttributeNS(q.space,q.local,v);
			});
		}
		return this.selection;
	}
	,'float': function(v) {
		var s = "" + v;
		if(null == this.qname) {
			var n = this.name;
			this.selection.eachNode(function(node,i) {
				node.setAttribute(n,s);
			});
		} else {
			var q = this.qname;
			this.selection.eachNode(function(node,i) {
				node.setAttributeNS(q.space,q.local,s);
			});
		}
		return this.selection;
	}
	,__class__: thx.js.AccessAttribute
});
thx.js.AccessDataAttribute = $hxClasses["thx.js.AccessDataAttribute"] = function(name,selection) {
	thx.js.AccessAttribute.call(this,name,selection);
}
thx.js.AccessDataAttribute.__name__ = ["thx","js","AccessDataAttribute"];
thx.js.AccessDataAttribute.__super__ = thx.js.AccessAttribute;
thx.js.AccessDataAttribute.prototype = $extend(thx.js.AccessAttribute.prototype,{
	stringf: function(v) {
		if(null == this.qname) {
			var n = this.name;
			this.selection.eachNode(function(node,i) {
				var s = v(Reflect.field(node,"__data__"),i);
				if(null == s) node.removeAttribute(n); else node.setAttribute(n,s);
			});
		} else {
			var q = this.qname;
			this.selection.eachNode(function(node,i) {
				var s = v(Reflect.field(node,"__data__"),i);
				if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,s);
			});
		}
		return this.selection;
	}
	,floatf: function(v) {
		if(null == this.qname) {
			var n = this.name;
			this.selection.eachNode(function(node,i) {
				var s = v(Reflect.field(node,"__data__"),i);
				if(null == s) node.removeAttribute(n); else node.setAttribute(n,"" + s);
			});
		} else {
			var q = this.qname;
			this.selection.eachNode(function(node,i) {
				var s = v(Reflect.field(node,"__data__"),i);
				if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,"" + s);
			});
		}
		return this.selection;
	}
	,data: function() {
		return this.stringf(function(d,_) {
			return "" + d;
		});
	}
	,__class__: thx.js.AccessDataAttribute
});
rg.html.widget.Tooltip = $hxClasses["rg.html.widget.Tooltip"] = function(el) {
	this.visible = false;
	haxe.Log.trace(el,{ fileName : "Tooltip.hx", lineNumber : 22, className : "rg.html.widget.Tooltip", methodName : "new"});
	el = null == el?js.Lib.document.body:el;
	this.tooltip = thx.js.Dom.selectNode(el).append("div").style("display").string("none").style("position").string("absolute").style("opacity")["float"](0).style("left").string("0px").style("top").string("0px").attr("class").string("rg tooltip").style("z-index").string("1000000");
	this._anchor = this.tooltip.append("div").style("display").string("block").style("position").string("absolute").attr("class").string("anchor");
	this.container = this.tooltip.append("div").style("position").string("relative").attr("class").string("container");
	this.background = this.container.append("div").style("position").string("relatve").style("display").string("block").append("div").style("z-index").string("-1").attr("class").string("background").style("position").string("absolute").style("left").string("0").style("right").string("0").style("top").string("0").style("bottom").string("0");
	this.content = this.container.append("div").attr("class").string("content");
	this.anchortype = "bottom";
	this.anchordistance = 8;
}
rg.html.widget.Tooltip.__name__ = ["rg","html","widget","Tooltip"];
rg.html.widget.Tooltip.prototype = {
	tooltip: null
	,_anchor: null
	,container: null
	,background: null
	,content: null
	,anchortype: null
	,anchordistance: null
	,visible: null
	,html: function(value) {
		this.content.node().innerHTML = value;
		this.reanchor();
	}
	,show: function() {
		if(this.visible) return;
		this.tooltip.style("display").string("block");
		this.visible = true;
		this.reanchor();
		this.tooltip.style("opacity")["float"](1);
	}
	,hide: function() {
		if(!this.visible) return;
		this.visible = false;
		this.tooltip.style("opacity")["float"](0).style("display").string("none");
	}
	,showAt: function(x,y) {
		this.moveAt(x,y);
		this.show();
	}
	,moveAt: function(x,y) {
		this.tooltip.style("left").string(x + "px").style("top").string(y + "px");
	}
	,anchor: function(type,distance) {
		if(null == distance) distance = 8;
		if(this.anchortype == type && this.anchordistance == distance) return;
		this.anchortype = type;
		this.anchordistance = distance;
		this.reanchor();
	}
	,reanchor: function() {
		if(!this.visible) return;
		var width = this.container.style("width").getFloat(), height = this.container.style("height").getFloat();
		var type = this.anchortype;
		switch(type) {
		case "top":case "bottom":case "center":
			this.container.style("left").string(-width / 2 + "px");
			break;
		case "left":case "topleft":case "bottomleft":
			this.container.style("left").string(this.anchordistance + "px");
			break;
		case "right":case "topright":case "bottomright":
			this.container.style("left").string(-this.anchordistance - width + "px");
			break;
		default:
			throw new thx.error.Error("invalid anchor point: {" + this.anchortype + "}",null,null,{ fileName : "Tooltip.hx", lineNumber : 130, className : "rg.html.widget.Tooltip", methodName : "reanchor"});
		}
		switch(type) {
		case "top":case "topleft":case "topright":
			this.container.style("top").string(this.anchordistance + "px");
			break;
		case "left":case "center":case "right":
			this.container.style("top").string(-height / 2 + "px");
			break;
		case "bottom":case "bottomleft":case "bottomright":
			this.container.style("top").string(-this.anchordistance - height + "px");
			break;
		}
	}
	,__class__: rg.html.widget.Tooltip
}
rg.info.InfoDataSource = $hxClasses["rg.info.InfoDataSource"] = function() {
}
rg.info.InfoDataSource.__name__ = ["rg","info","InfoDataSource"];
rg.info.InfoDataSource.filters = function() {
	return [{ field : "data", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : function(v) {
		return [{ field : "loader", value : function(handler) {
			handler(v);
		}}];
	}},{ field : "datapoints", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : function(v) {
		return [{ field : "loader", value : function(handler) {
			handler(v);
		}}];
	}},{ field : "load", validator : function(v) {
		return Reflect.isFunction(v) || null != Reflect.field(v,"load");
	}, filter : function(v) {
		return [{ field : "loader", value : Reflect.isObject(v)?v.load.$bind(v):v}];
	}}];
}
rg.info.InfoDataSource.prototype = {
	loader: null
	,__class__: rg.info.InfoDataSource
}
rg.graph.TwoCycleRemover = $hxClasses["rg.graph.TwoCycleRemover"] = function() {
}
rg.graph.TwoCycleRemover.__name__ = ["rg","graph","TwoCycleRemover"];
rg.graph.TwoCycleRemover.prototype = {
	remove: function(graph) {
		var result = [];
		var $it0 = graph.nodes.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			var $it1 = node.graph.edges.positives(node);
			while( $it1.hasNext() ) {
				var edge = $it1.next();
				var reverse = edge.head.predecessorBy(node);
				if(null == reverse) continue;
				result.push({ tail : reverse.tail, head : reverse.head, weight : reverse.weight, data : reverse.data});
				reverse.graph.edges._remove(reverse);
			}
		}
		return result;
	}
	,__class__: rg.graph.TwoCycleRemover
}
rg.RGConst = $hxClasses["rg.RGConst"] = function() { }
rg.RGConst.__name__ = ["rg","RGConst"];
rg.RGConst.prototype = {
	__class__: rg.RGConst
}
rg.util.RG = $hxClasses["rg.util.RG"] = function() { }
rg.util.RG.__name__ = ["rg","util","RG"];
rg.util.RG.getTokenId = function() {
	return "chart" + haxe.Md5.encode("chart");
}
rg.util.RG.prototype = {
	__class__: rg.util.RG
}
rg.axis.AxisNumeric = $hxClasses["rg.axis.AxisNumeric"] = function() {
}
rg.axis.AxisNumeric.__name__ = ["rg","axis","AxisNumeric"];
rg.axis.AxisNumeric.__interfaces__ = [rg.axis.IAxis];
rg.axis.AxisNumeric._step = function(span,m) {
	var step = Math.pow(10,Math.floor(Math.log(span / m) / 2.302585092994046)), err = m / span * step;
	if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= .75) step *= 2;
	return step;
}
rg.axis.AxisNumeric.nice = function(v) {
	return Math.pow(10,Math.round(Math.log(v) / 2.302585092994046) - 1);
}
rg.axis.AxisNumeric.niceMin = function(d,v) {
	var dv = Math.pow(10,Math.round(Math.log(d) / 2.302585092994046) - 1);
	return Math.floor(v / dv) * dv;
}
rg.axis.AxisNumeric.niceMax = function(d,v) {
	var dv = Math.pow(10,Math.round(Math.log(d) / 2.302585092994046) - 1);
	return Math.ceil(v / dv) * dv;
}
rg.axis.AxisNumeric.prototype = {
	scale: function(start,end,v) {
		if(start == end) return start;
		return (Floats.uninterpolatef(start,end))(v);
	}
	,ticks: function(start,end,maxTicks) {
		var span = end - start, step = 1.0, minors, majors;
		if(start % step == 0 && end % step == 0 && span < 10 && span >= step) {
			majors = Floats.range(start,end + step,step);
			minors = null;
		} else {
			var mM = 5, mm = 20, stepM = rg.axis.AxisNumeric._step(span,mM), stepm = rg.axis.AxisNumeric._step(span,mm);
			minors = Floats.range(start,end + stepM,stepm);
			majors = Floats.range(start,end * 1.0001,stepM);
		}
		return rg.axis.Tickmarks.bound(null == minors?majors.map(function(d,i) {
			return new rg.axis.Tickmark(d,true,(d - start) / (end - start));
		}):minors.map(function(d,i) {
			return new rg.axis.Tickmark(d,majors.remove(d),(d - start) / (end - start));
		}),maxTicks);
	}
	,min: function(stats,meta) {
		if(null != meta.min) return meta.min;
		var min = rg.axis.AxisNumeric.niceMin(stats.max - stats.min,stats.min);
		if(min < 0) return min; else return 0.0;
	}
	,max: function(stats,meta) {
		if(null != meta.max) return meta.max;
		var max = rg.axis.AxisNumeric.niceMax(stats.max - stats.min,stats.max);
		if(max > 0) return max; else return 0.0;
	}
	,createStats: function(type) {
		return new rg.axis.StatsNumeric(type);
	}
	,__class__: rg.axis.AxisNumeric
}
var Enums = $hxClasses["Enums"] = function() { }
Enums.__name__ = ["Enums"];
Enums.string = function(e) {
	var cons = e[0];
	var params = [];
	var _g = 0, _g1 = e.slice(2);
	while(_g < _g1.length) {
		var param = _g1[_g];
		++_g;
		params.push(Dynamics.string(param));
	}
	return cons + (params.length == 0?"":"(" + params.join(", ") + ")");
}
Enums.compare = function(a,b) {
	var v;
	if((v = a[1] - b[1]) != 0) return v;
	return Arrays.compare(a.slice(2),b.slice(2));
}
Enums.prototype = {
	__class__: Enums
}
rg.data.Variable = $hxClasses["rg.data.Variable"] = function(type,scaleDistribution) {
	this.type = type;
	this.scaleDistribution = scaleDistribution;
	this.meta = { };
}
rg.data.Variable.__name__ = ["rg","data","Variable"];
rg.data.Variable.prototype = {
	type: null
	,scaleDistribution: null
	,axis: null
	,stats: null
	,meta: null
	,minf: null
	,maxf: null
	,setAxis: function(axis) {
		this.axis = axis;
		if(null != axis) this.stats = axis.createStats(this.type); else this.stats = null;
	}
	,min: function() {
		return (this.getMinF())(this.stats,this.meta);
	}
	,max: function() {
		return (this.getMaxF())(this.stats,this.meta);
	}
	,setMinF: function(f) {
		return this.minf = f;
	}
	,setMaxF: function(f) {
		return this.maxf = f;
	}
	,getMinF: function() {
		if(null == this.minf) {
			if(null == this.axis) throw new thx.error.Error("axis is null in '{0}' variable (required by min)",[this.type],null,{ fileName : "Variable.hx", lineNumber : 50, className : "rg.data.Variable", methodName : "getMinF"});
			this.setMinF(($_=this.axis,$_.min.$bind($_)));
		}
		return this.minf;
	}
	,getMaxF: function() {
		if(null == this.maxf) {
			if(null == this.axis) throw new thx.error.Error("axis is null in '{0}' variable (required by max)",[this.type],null,{ fileName : "Variable.hx", lineNumber : 61, className : "rg.data.Variable", methodName : "getMaxF"});
			this.setMaxF(($_=this.axis,$_.max.$bind($_)));
		}
		return this.maxf;
	}
	,__class__: rg.data.Variable
	,__properties__: {set_maxf:"setMaxF",get_maxf:"getMaxF",set_minf:"setMinF",get_minf:"getMinF"}
}
rg.data.VariableIndependent = $hxClasses["rg.data.VariableIndependent"] = function(type,scaleDistribution) {
	rg.data.Variable.call(this,type,scaleDistribution);
}
rg.data.VariableIndependent.__name__ = ["rg","data","VariableIndependent"];
rg.data.VariableIndependent.__super__ = rg.data.Variable;
rg.data.VariableIndependent.prototype = $extend(rg.data.Variable.prototype,{
	__class__: rg.data.VariableIndependent
});
rg.info.InfoLabel = $hxClasses["rg.info.InfoLabel"] = function() {
}
rg.info.InfoLabel.__name__ = ["rg","info","InfoLabel"];
rg.info.InfoLabel.filters = function() {
	return [{ field : "title", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "title", value : Std["is"](v,String)?function() {
			return v;
		}:v}];
	}},{ field : "datapoint", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "datapointover", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.info.InfoLabel.prototype = {
	title: null
	,datapoint: null
	,datapointover: null
	,__class__: rg.info.InfoLabel
}
rg.info.InfoLabelAxis = $hxClasses["rg.info.InfoLabelAxis"] = function() {
	rg.info.InfoLabel.call(this);
}
rg.info.InfoLabelAxis.__name__ = ["rg","info","InfoLabelAxis"];
rg.info.InfoLabelAxis.filters = function() {
	return [{ field : "axis", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "tickmark", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabel.filters());
}
rg.info.InfoLabelAxis.__super__ = rg.info.InfoLabel;
rg.info.InfoLabelAxis.prototype = $extend(rg.info.InfoLabel.prototype,{
	axis: null
	,tickmark: null
	,__class__: rg.info.InfoLabelAxis
});
rg.info.InfoPieChart = $hxClasses["rg.info.InfoPieChart"] = function() {
	this.innerradius = 0.0;
	this.labelradius = 0.45;
	this.labelorientation = rg.svg.widget.LabelOrientation.Aligned;
	this.outerradius = 0.9;
	this.overradius = 0.95;
	this.tooltipradius = 0.5;
	this.animation = new rg.info.InfoAnimation();
	this.label = new rg.info.InfoLabel();
	this.effect = rg.svg.chart.GradientEffect.Gradient(1.2);
	this.dontfliplabel = true;
}
rg.info.InfoPieChart.__name__ = ["rg","info","InfoPieChart"];
rg.info.InfoPieChart.validateOrientation = function(s) {
	var name = s.split(":")[0].toLowerCase();
	return Arrays.exists(["fixed","ortho","orthogonal","align","aligned","horizontal"],name);
}
rg.info.InfoPieChart.filterOrientation = function(s) {
	var name = s.split(":")[0].toLowerCase();
	switch(name) {
	case "fixed":
		var v = Std.parseFloat(s.split(":")[1]);
		if(null == v || !Math.isFinite(v)) throw new thx.error.Error("when 'fixed' is used a number should follow the 'dash' character",null,null,{ fileName : "InfoPieChart.hx", lineNumber : 60, className : "rg.info.InfoPieChart", methodName : "filterOrientation"});
		return rg.svg.widget.LabelOrientation.FixedAngle(v);
	case "ortho":case "orthogonal":
		return rg.svg.widget.LabelOrientation.Orthogonal;
	case "align":case "aligned":
		return rg.svg.widget.LabelOrientation.Aligned;
	case "horizontal":
		return rg.svg.widget.LabelOrientation.FixedAngle(0);
	default:
		throw new thx.error.Error("invalid filter orientation '{0}'",null,s,{ fileName : "InfoPieChart.hx", lineNumber : 69, className : "rg.info.InfoPieChart", methodName : "filterOrientation"});
	}
}
rg.info.InfoPieChart.filters = function() {
	return [{ field : "labelradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "dontfliplabel", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "labelorientation", validator : function(v) {
		return Std["is"](v,String) && rg.info.InfoPieChart.validateOrientation(v);
	}, filter : function(v) {
		return [{ field : "labelorientation", value : rg.info.InfoPieChart.filterOrientation(v)}];
	}},{ field : "innerradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "outerradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "overradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "tooltipradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "animation", value : rg.info.Info.feed(new rg.info.InfoAnimation(),v)}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabel(),v)}];
	}},{ field : "sort", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "sortDataPoint", value : v}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "effect", validator : rg.svg.chart.GradientEffects.canParse, filter : function(v) {
		return [{ field : "effect", value : rg.svg.chart.GradientEffects.parse(v)}];
	}}];
}
rg.info.InfoPieChart.prototype = {
	labelradius: null
	,labelorientation: null
	,innerradius: null
	,outerradius: null
	,overradius: null
	,tooltipradius: null
	,animation: null
	,label: null
	,effect: null
	,sortDataPoint: null
	,dontfliplabel: null
	,click: null
	,__class__: rg.info.InfoPieChart
}
rg.frame.Orientation = $hxClasses["rg.frame.Orientation"] = { __ename__ : ["rg","frame","Orientation"], __constructs__ : ["Vertical","Horizontal"] }
rg.frame.Orientation.Vertical = ["Vertical",0];
rg.frame.Orientation.Vertical.toString = $estr;
rg.frame.Orientation.Vertical.__enum__ = rg.frame.Orientation;
rg.frame.Orientation.Horizontal = ["Horizontal",1];
rg.frame.Orientation.Horizontal.toString = $estr;
rg.frame.Orientation.Horizontal.__enum__ = rg.frame.Orientation;
thx.math.scale.LinearT = $hxClasses["thx.math.scale.LinearT"] = function() {
	this._domain = [0.0,1.0];
	this._range = null;
	this.f = thx.math.scale.LinearT._f;
	this._clamp = false;
	this.rescale();
}
thx.math.scale.LinearT.__name__ = ["thx","math","scale","LinearT"];
thx.math.scale.LinearT.__interfaces__ = [thx.math.scale.IScale];
thx.math.scale.LinearT._f = function(_,_1,_2) {
	return function(_3) {
		return null;
	};
}
thx.math.scale.LinearT.scaleBilinear = function(domain,range,uninterpolate,interpolate) {
	var u = uninterpolate(domain[0],domain[1]), i = interpolate(range[0],range[1],null);
	return function(x) {
		return i(u(x));
	};
}
thx.math.scale.LinearT.scalePolylinear = function(domain,range,uninterpolate,interpolate) {
	var u = [], i = [];
	var _g1 = 1, _g = domain.length;
	while(_g1 < _g) {
		var j = _g1++;
		u.push(uninterpolate(domain[j - 1],domain[j]));
		i.push(interpolate(range[j - 1],range[j],null));
	}
	return function(x) {
		var j = Arrays.bisectRight(domain,x,1,domain.length - 1) - 1;
		return i[j](u[j](x));
	};
}
thx.math.scale.LinearT.prototype = {
	_domain: null
	,_range: null
	,f: null
	,_clamp: null
	,_output: null
	,rescale: function() {
		if(null == this._range) return this;
		var linear = this._domain.length == 2?thx.math.scale.LinearT.scaleBilinear:thx.math.scale.LinearT.scalePolylinear, uninterpolate = this._clamp?Floats.uninterpolateClampf:Floats.uninterpolatef;
		this._output = linear(this._domain,this._range,uninterpolate,this.f);
		return this;
	}
	,scale: function(x,_) {
		return this._output(x);
	}
	,getDomain: function() {
		return this._domain;
	}
	,domain: function(d) {
		this._domain = d;
		return this.rescale();
	}
	,getRange: function() {
		return this._range;
	}
	,range: function(r) {
		this._range = r;
		return this.rescale();
	}
	,getInterpolate: function() {
		return this.f;
	}
	,interpolatef: function(x) {
		this.f = x;
		return this.rescale();
	}
	,getClamp: function() {
		return this._clamp;
	}
	,clamp: function(v) {
		this._clamp = v;
		return this.rescale();
	}
	,tickRange: function(m) {
		var start = Math.min(this._domain[0],this._domain[1]), stop = Math.max(this._domain[0],this._domain[1]), span = stop - start, step = Math.pow(10,Math.floor(Math.log(span / m) / 2.302585092994046)), err = m / (span / step);
		if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= -75) step *= 2;
		return { start : Math.ceil(start / step) * step, stop : Math.floor(stop / step) * step + step * .5, step : step};
	}
	,ticks: function(m) {
		var range = this.tickRange(m);
		return Floats.range(range.start,range.stop,range.step);
	}
	,tickFormat: function(m) {
		var n = Math.max(0,-Math.floor(Math.log(this.tickRange(m).step) / 2.302585092994046 + .01));
		return Floats.formatf("D:" + n);
	}
	,__class__: thx.math.scale.LinearT
}
thx.culture.FormatDate = $hxClasses["thx.culture.FormatDate"] = function() { }
thx.culture.FormatDate.__name__ = ["thx","culture","FormatDate"];
thx.culture.FormatDate.format = function(pattern,date,culture,leadingspace) {
	if(leadingspace == null) leadingspace = true;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var pos = 0;
	var len = pattern.length;
	var buf = new StringBuf();
	var info = culture.date;
	while(pos < len) {
		var c = pattern.charAt(pos);
		if(c != "%") {
			buf.b[buf.b.length] = c == null?"null":c;
			pos++;
			continue;
		}
		pos++;
		c = pattern.charAt(pos);
		switch(c) {
		case "a":
			buf.add(info.abbrDays[date.getDay()]);
			break;
		case "A":
			buf.add(info.days[date.getDay()]);
			break;
		case "b":case "h":
			buf.add(info.abbrMonths[date.getMonth()]);
			break;
		case "B":
			buf.add(info.months[date.getMonth()]);
			break;
		case "c":
			buf.add(thx.culture.FormatDate.dateTime(date,culture));
			break;
		case "C":
			buf.add(thx.culture.FormatNumber.digits("" + Math.floor(date.getFullYear() / 100),culture));
			break;
		case "d":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getDate(),"0",2),culture));
			break;
		case "D":
			buf.add(thx.culture.FormatDate.format("%m/%d/%y",date,culture));
			break;
		case "e":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getDate()," ",2):"" + date.getDate(),culture));
			break;
		case "f":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + (date.getMonth() + 1)," ",2):"" + (date.getMonth() + 1),culture));
			break;
		case "G":
			throw "Not Implemented Yet";
			break;
		case "g":
			throw "Not Implemented Yet";
			break;
		case "H":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getHours(),"0",2),culture));
			break;
		case "i":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getMinutes()," ",2):"" + date.getMinutes(),culture));
			break;
		case "I":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + thx.culture.FormatDate.getMHours(date),"0",2),culture));
			break;
		case "j":
			throw "Not Implemented Yet";
			break;
		case "k":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getHours()," ",2):"" + date.getHours(),culture));
			break;
		case "l":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + thx.culture.FormatDate.getMHours(date)," ",2):"" + thx.culture.FormatDate.getMHours(date),culture));
			break;
		case "m":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + (date.getMonth() + 1),"0",2),culture));
			break;
		case "M":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getMinutes(),"0",2),culture));
			break;
		case "n":
			buf.b[buf.b.length] = "\n";
			break;
		case "p":
			buf.add(date.getHours() > 11?info.pm:info.am);
			break;
		case "P":
			buf.add((date.getHours() > 11?info.pm:info.am).toLowerCase());
			break;
		case "q":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getSeconds()," ",2):"" + date.getSeconds(),culture));
			break;
		case "r":
			buf.add(thx.culture.FormatDate.format("%I:%M:%S %p",date,culture));
			break;
		case "R":
			buf.add(thx.culture.FormatDate.format("%H:%M",date,culture));
			break;
		case "s":
			buf.add("" + Std["int"](date.getTime() / 1000));
			break;
		case "S":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getSeconds(),"0",2),culture));
			break;
		case "t":
			buf.b[buf.b.length] = "\t";
			break;
		case "T":
			buf.add(thx.culture.FormatDate.format("%H:%M:%S",date,culture));
			break;
		case "u":
			var d = date.getDay();
			buf.add(thx.culture.FormatNumber.digits(d == 0?"7":"" + d,culture));
			break;
		case "U":
			throw "Not Implemented Yet";
			break;
		case "V":
			throw "Not Implemented Yet";
			break;
		case "w":
			buf.add(thx.culture.FormatNumber.digits("" + date.getDay(),culture));
			break;
		case "W":
			throw "Not Implemented Yet";
			break;
		case "x":
			buf.add(thx.culture.FormatDate.date(date,culture));
			break;
		case "X":
			buf.add(thx.culture.FormatDate.time(date,culture));
			break;
		case "y":
			buf.add(thx.culture.FormatNumber.digits(("" + date.getFullYear()).substr(-2),culture));
			break;
		case "Y":
			buf.add(thx.culture.FormatNumber.digits("" + date.getFullYear(),culture));
			break;
		case "z":
			buf.b[buf.b.length] = "+0000";
			break;
		case "Z":
			buf.b[buf.b.length] = "GMT";
			break;
		case "%":
			buf.b[buf.b.length] = "%";
			break;
		default:
			buf.add("%" + c);
		}
		pos++;
	}
	return buf.b.join("");
}
thx.culture.FormatDate.getMHours = function(date) {
	var v = date.getHours();
	return v > 12?v - 12:v;
}
thx.culture.FormatDate.yearMonth = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternYearMonth,date,culture,false);
}
thx.culture.FormatDate.monthDay = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternMonthDay,date,culture,false);
}
thx.culture.FormatDate.date = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDate,date,culture,false);
}
thx.culture.FormatDate.dateShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDateShort,date,culture,false);
}
thx.culture.FormatDate.dateRfc = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDateRfc,date,culture,false);
}
thx.culture.FormatDate.dateTime = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDateTime,date,culture,false);
}
thx.culture.FormatDate.universal = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternUniversal,date,culture,false);
}
thx.culture.FormatDate.sortable = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternSortable,date,culture,false);
}
thx.culture.FormatDate.time = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternTime,date,culture,false);
}
thx.culture.FormatDate.timeShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternTimeShort,date,culture,false);
}
thx.culture.FormatDate.hourShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	if(null == culture.date.am) return thx.culture.FormatDate.format("%H",date,culture,false); else return thx.culture.FormatDate.format("%l %p",date,culture,false);
}
thx.culture.FormatDate.year = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.digits("" + date.getFullYear(),culture);
}
thx.culture.FormatDate.month = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.digits("" + (date.getMonth() + 1),culture);
}
thx.culture.FormatDate.monthName = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.abbrMonths[date.getMonth()];
}
thx.culture.FormatDate.monthNameShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.months[date.getMonth()];
}
thx.culture.FormatDate.weekDay = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.digits("" + (date.getDay() + culture.date.firstWeekDay),culture);
}
thx.culture.FormatDate.weekDayName = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.abbrDays[date.getDay()];
}
thx.culture.FormatDate.weekDayNameShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.days[date.getDay()];
}
thx.culture.FormatDate.prototype = {
	__class__: thx.culture.FormatDate
}
rg.axis.Stats = $hxClasses["rg.axis.Stats"] = function(type,sortf) {
	this.type = type;
	this.sortf = sortf;
	this.reset();
}
rg.axis.Stats.__name__ = ["rg","axis","Stats"];
rg.axis.Stats.prototype = {
	min: null
	,max: null
	,count: null
	,values: null
	,sortf: null
	,type: null
	,reset: function() {
		this.min = null;
		this.max = null;
		this.count = 0;
		this.values = [];
		return this;
	}
	,add: function(v) {
		this.count++;
		if(Arrays.exists(this.values,v)) return this;
		this.values.push(v);
		if(null != this.sortf) this.values.sort(this.sortf);
		this.min = this.values[0];
		this.max = Arrays.last(this.values);
		return this;
	}
	,addMany: function(it) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var v = $it0.next();
			this.count++;
			if(Arrays.exists(this.values,v)) continue;
			this.values.push(v);
		}
		if(null != this.sortf) this.values.sort(this.sortf);
		this.min = this.values[0];
		this.max = Arrays.last(this.values);
		return this;
	}
	,__class__: rg.axis.Stats
}
rg.axis.StatsNumeric = $hxClasses["rg.axis.StatsNumeric"] = function(type,sortf) {
	if(null == sortf) sortf = Floats.compare;
	rg.axis.Stats.call(this,type,sortf);
}
rg.axis.StatsNumeric.__name__ = ["rg","axis","StatsNumeric"];
rg.axis.StatsNumeric.__super__ = rg.axis.Stats;
rg.axis.StatsNumeric.prototype = $extend(rg.axis.Stats.prototype,{
	tot: null
	,reset: function() {
		rg.axis.Stats.prototype.reset.call(this);
		this.tot = 0.0;
		return this;
	}
	,add: function(v) {
		rg.axis.Stats.prototype.add.call(this,v);
		this.tot += v;
		return this;
	}
	,addMany: function(it) {
		rg.axis.Stats.prototype.addMany.call(this,it);
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var v = $it0.next();
			this.tot += v;
		}
		return this;
	}
	,__class__: rg.axis.StatsNumeric
});
rg.graph.LongestPathLayer = $hxClasses["rg.graph.LongestPathLayer"] = function() {
}
rg.graph.LongestPathLayer.__name__ = ["rg","graph","LongestPathLayer"];
rg.graph.LongestPathLayer.distanceToASink = function(graph,node) {
	var traverse = (function($this) {
		var $r;
		var traverse = null;
		traverse = function(it,lvl) {
			var max = lvl;
			while( it.hasNext() ) {
				var edge = it.next();
				if(edge.head.isSink()) continue; else max = Ints.max(max,traverse(edge.head.positives(),lvl + 1));
			}
			return max;
		};
		$r = traverse;
		return $r;
	}(this));
	return node.isIsolated()?0:traverse(node.graph.edges.positives(node),1);
}
rg.graph.LongestPathLayer.prototype = {
	lay: function(graph) {
		var clone = graph.clone(), layers = [[]];
		var _g = 0, _g1 = clone.findSinks();
		while(_g < _g1.length) {
			var node = _g1[_g];
			++_g;
			layers[0].push(node.id);
		}
		var _g = 0, _g1 = Iterators.filter(clone.nodes.iterator(),function(n) {
			return !n.isSink();
		});
		while(_g < _g1.length) {
			var node = _g1[_g];
			++_g;
			var pos = rg.graph.LongestPathLayer.distanceToASink(clone,node), layer = layers[pos];
			if(null == layer) layer = layers[pos] = [];
			layer.push(node.id);
		}
		layers.reverse();
		return layers;
	}
	,__class__: rg.graph.LongestPathLayer
}
rg.visualization.VisualizationHtml = $hxClasses["rg.visualization.VisualizationHtml"] = function(container) {
	rg.visualization.Visualization.call(this,container);
	container.classed().add("rg");
}
rg.visualization.VisualizationHtml.__name__ = ["rg","visualization","VisualizationHtml"];
rg.visualization.VisualizationHtml.__super__ = rg.visualization.Visualization;
rg.visualization.VisualizationHtml.prototype = $extend(rg.visualization.Visualization.prototype,{
	__class__: rg.visualization.VisualizationHtml
});
rg.svg.widget.HookConnectorArea = $hxClasses["rg.svg.widget.HookConnectorArea"] = function(container,classarea,classborder) {
	this.g = container.append("svg:g").attr("class").string("hook");
	this.area = this.g.append("svg:path").attr("class").string("hook-fill" + (null == classarea?"":" " + classarea));
	this.upper = this.g.append("svg:path").attr("class").string("hook-stroke upper" + (null == classborder?"":" " + classborder));
	this.lower = this.g.append("svg:path").attr("class").string("hook-stroke lower" + (null == classborder?"":" " + classborder));
}
rg.svg.widget.HookConnectorArea.__name__ = ["rg","svg","widget","HookConnectorArea"];
rg.svg.widget.HookConnectorArea.lineTo = function(x,y) {
	return "L" + x + "," + y;
}
rg.svg.widget.HookConnectorArea.quarterTo = function(x,y,r) {
	return "A" + Math.abs(r) + "," + Math.abs(r) + " 0 0," + (r < 0?0:1) + " " + x + "," + y;
}
rg.svg.widget.HookConnectorArea.prototype = {
	g: null
	,area: null
	,upper: null
	,lower: null
	,update: function(x1,y1,x2,y2,weight,yreference,before,after) {
		var min = Math.min(5,weight), upperp = this.createPath(x1,y1,x2,y2,y1 > yreference?yreference:yreference + weight,before + weight,after + weight,weight,weight), lowerp = this.createPath(x2,y2 + weight,x1,y1 + weight,y1 > yreference?yreference - weight:yreference,-after,-before,-min,min);
		this.upper.attr("d").string(upperp);
		this.lower.attr("d").string(lowerp);
		this.area.attr("d").string(upperp + "L" + lowerp.substr(1) + "z");
	}
	,createPath: function(x1,y1,x2,y2,yref,before,after,r1,r2) {
		var path = "M" + x1 + "," + y1;
		path += rg.svg.widget.HookConnectorArea.lineTo(x1 + before - r1,y1);
		path += rg.svg.widget.HookConnectorArea.quarterTo(x1 + before,y1 + r2,r1);
		path += rg.svg.widget.HookConnectorArea.lineTo(x1 + before,yref - r2);
		path += rg.svg.widget.HookConnectorArea.quarterTo(x1 + before - r1,yref,r1);
		path += rg.svg.widget.HookConnectorArea.lineTo(x2 - after + r1,yref);
		path += rg.svg.widget.HookConnectorArea.quarterTo(x2 - after,yref - r2,r1);
		path += rg.svg.widget.HookConnectorArea.lineTo(x2 - after,y2 + r2);
		path += rg.svg.widget.HookConnectorArea.quarterTo(x2 - after + r1,y2,r1);
		path += rg.svg.widget.HookConnectorArea.lineTo(x2,y2);
		return path;
	}
	,createPath2: function(x1,y1,sr,x2,y2,yreference) {
		var path = "M" + x1 + "," + y1;
		if(yreference > y1) {
			path += "A" + Math.abs(sr) + "," + Math.abs(sr) + " 0 0,1 " + (x1 + sr) + "," + (y1 + sr);
			path += "L" + (sr + x1) + "," + (yreference - sr);
			path += "A" + Math.abs(sr) + "," + Math.abs(sr) + " 0 0,1 " + x1 + "," + yreference;
		} else {
			path += "A" + Math.abs(sr) + "," + Math.abs(sr) + " 0 0,0 " + (x1 + sr) + "," + (y1 - sr);
			path += "L" + (sr + x1) + "," + (yreference + sr);
			path += "A" + Math.abs(sr) + "," + Math.abs(sr) + " 0 0,0 " + x1 + "," + yreference;
		}
		path += "L" + x2 + "," + yreference;
		if(yreference > y2) {
			path += "A" + Math.abs(sr) + "," + Math.abs(sr) + " 0 0,1 " + (x2 - sr) + "," + (yreference - sr);
			path += "L" + (x2 - sr) + "," + (y2 + sr);
			path += "A" + Math.abs(sr) + "," + Math.abs(sr) + " 0 0,1 " + x2 + "," + y2;
		} else {
			path += "A" + Math.abs(sr) + "," + Math.abs(sr) + " 0 0,0 " + (x2 - sr) + "," + (yreference + sr);
			path += "L" + (x2 - sr) + "," + (y2 - sr);
			path += "A" + Math.abs(sr) + "," + Math.abs(sr) + " 0 0,0 " + x2 + "," + y2;
		}
		return path;
	}
	,__class__: rg.svg.widget.HookConnectorArea
}
chx.crypt.IPad = $hxClasses["chx.crypt.IPad"] = function() { }
chx.crypt.IPad.__name__ = ["chx","crypt","IPad"];
chx.crypt.IPad.prototype = {
	blockSize: null
	,pad: null
	,unpad: null
	,isBlockPad: null
	,calcNumBlocks: null
	,blockOverhead: null
	,getBytesReadPerBlock: null
	,__class__: chx.crypt.IPad
	,__properties__: {set_blockSize:"setBlockSize"}
}
chx.crypt.PadPkcs1Type1 = $hxClasses["chx.crypt.PadPkcs1Type1"] = function(size) {
	this["blockSize"] = size;
	this.setPadCount(8);
	this.typeByte = 1;
	this.setPadByte(255);
}
chx.crypt.PadPkcs1Type1.__name__ = ["chx","crypt","PadPkcs1Type1"];
chx.crypt.PadPkcs1Type1.__interfaces__ = [chx.crypt.IPad];
chx.crypt.PadPkcs1Type1.prototype = {
	blockSize: null
	,textSize: null
	,padByte: null
	,padCount: null
	,typeByte: null
	,getBytesReadPerBlock: function() {
		return this.textSize;
	}
	,pad: function(s) {
		if(s.length > this.textSize) throw "Unable to pad block: provided buffer is " + s.length + " max is " + this.textSize;
		var sb = new BytesBuffer();
		sb.b.push(0);
		sb.b.push(this.typeByte);
		var n = this.blockSize - s.length - 3;
		while(n-- > 0) sb.b.push(this.getPadByte());
		sb.b.push(0);
		sb.add(s);
		var rv = sb.getBytes();
		return rv;
	}
	,unpad: function(s) {
		var i = 0;
		var sb = new BytesBuffer();
		while(i < s.length) {
			while(i < s.length && s.b[i] == 0) ++i;
			if(s.length - i - 3 - this.padCount < 0) throw "Unexpected short message";
			if(s.b[i] != this.typeByte) throw "Expected marker " + this.typeByte + " at position " + i + " [" + BytesUtil.hexDump(s) + "]";
			if(++i >= s.length) return sb.getBytes();
			while(i < s.length && s.b[i] != 0) ++i;
			i++;
			var n = 0;
			while(i < s.length && n++ < this.textSize) sb.b.push(s.b[i++]);
		}
		return sb.getBytes();
	}
	,calcNumBlocks: function(len) {
		return Math.ceil(len / this.textSize);
	}
	,isBlockPad: function() {
		return true;
	}
	,blockOverhead: function() {
		return 3 + this.padCount;
	}
	,setPadCount: function(x) {
		if(x + 3 >= this.blockSize) throw "Internal padding size exceeds crypt block size";
		this.padCount = x;
		this.textSize = this.blockSize - 3 - this.padCount;
		return x;
	}
	,setBlockSize: function(x) {
		this.blockSize = x;
		this.textSize = x - 3 - this.padCount;
		if(this.textSize <= 0) throw "Block size " + x + " to small for Pkcs1 with padCount " + this.padCount;
		return x;
	}
	,getPadByte: function() {
		return this.padByte;
	}
	,setPadByte: function(x) {
		this.padByte = x & 255;
		return x;
	}
	,__class__: chx.crypt.PadPkcs1Type1
	,__properties__: {set_padByte:"setPadByte",get_padByte:"getPadByte",set_blockSize:"setBlockSize"}
}
chx.crypt.PadPkcs1Type2 = $hxClasses["chx.crypt.PadPkcs1Type2"] = function(size) {
	chx.crypt.PadPkcs1Type1.call(this,size);
	this.typeByte = 2;
	this.rng = new math.prng.Random();
}
chx.crypt.PadPkcs1Type2.__name__ = ["chx","crypt","PadPkcs1Type2"];
chx.crypt.PadPkcs1Type2.__interfaces__ = [chx.crypt.IPad];
chx.crypt.PadPkcs1Type2.__super__ = chx.crypt.PadPkcs1Type1;
chx.crypt.PadPkcs1Type2.prototype = $extend(chx.crypt.PadPkcs1Type1.prototype,{
	rng: null
	,getPadByte: function() {
		var x = 0;
		while(x == 0) x = this.rng.next();
		return x;
	}
	,__class__: chx.crypt.PadPkcs1Type2
});
rg.util.Properties = $hxClasses["rg.util.Properties"] = function() { }
rg.util.Properties.__name__ = ["rg","util","Properties"];
rg.util.Properties.isTime = function(s) {
	return s.indexOf("time:") >= 0;
}
rg.util.Properties.periodicity = function(s) {
	return s.substr(s.indexOf("time:") + "time:".length);
}
rg.util.Properties.timeProperty = function(periodicity) {
	return "." + "time:" + periodicity;
}
rg.util.Properties.humanize = function(s) {
	return rg.util.RGStrings.humanize(s);
}
rg.util.Properties.formatValue = function(type,dp) {
	var value = Reflect.field(dp,type);
	if(null == value) return value;
	if(type.indexOf("time:") >= 0) return rg.util.Periodicity.format(type.substr(type.indexOf("time:") + "time:".length),value);
	return rg.util.RGStrings.humanize(value);
}
rg.util.Properties.prototype = {
	__class__: rg.util.Properties
}
rg.svg.widget.BalloonShape = $hxClasses["rg.svg.widget.BalloonShape"] = function() { }
rg.svg.widget.BalloonShape.__name__ = ["rg","svg","widget","BalloonShape"];
rg.svg.widget.BalloonShape.shape = function(width,height,rc,rp,side,offset) {
	var w = width - rc * 2, h = height - rc * 2;
	var buf = "M" + rc + ",0";
	if(0 == side) {
		buf += "h" + offset;
		buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + -rc;
		buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + rc;
		buf += "h" + (w - (offset + 2 * rc));
	} else buf += "h" + w;
	buf += "a" + rc + "," + rc + ",0,0,1," + rc + "," + rc;
	if(1 == side) {
		buf += "v" + (offset - rc);
		buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + rc;
		buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + rc;
		buf += "v" + (h - (offset + rc));
	} else buf += "v" + h;
	buf += "a" + rc + "," + rc + ",0,0,1," + -rc + "," + rc;
	if(2 == side) {
		buf += "h" + -(w - (offset + 2 * rc));
		buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + rc;
		buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + -rc;
		buf += "h" + -offset;
	} else buf += "h" + -w;
	buf += "a" + rc + "," + rc + ",0,0,1," + -rc + "," + -rc;
	if(3 == side) {
		buf += "v" + -(h - (offset + rc));
		buf += "a" + rc + "," + rc + ",0,0,0," + -rc + "," + -rc;
		buf += "a" + rc + "," + rc + ",0,0,0," + rc + "," + -rc;
		buf += "v" + -(offset - rc);
	} else buf += "v" + -h;
	buf += "a" + rc + "," + rc + ",0,0,1," + rc + "," + -rc;
	return buf + "Z";
}
rg.svg.widget.BalloonShape.prototype = {
	__class__: rg.svg.widget.BalloonShape
}
thx.geom.Polygon = $hxClasses["thx.geom.Polygon"] = function(coordinates) {
	this.coordinates = coordinates;
}
thx.geom.Polygon.__name__ = ["thx","geom","Polygon"];
thx.geom.Polygon.polygonInside = function(p,a,b) {
	return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
}
thx.geom.Polygon.polygonIntersect = function(c,d,a,b) {
	var x1 = c[0], x2 = d[0], x3 = a[0], x4 = b[0], y1 = c[1], y2 = d[1], y3 = a[1], y4 = b[1], x13 = x1 - x3, x21 = x2 - x1, x43 = x4 - x3, y13 = y1 - y3, y21 = y2 - y1, y43 = y4 - y3, ua = (x43 * y13 - y43 * x13) / (y43 * x21 - x43 * y21);
	return [x1 + ua * x21,y1 + ua * y21];
}
thx.geom.Polygon.prototype = {
	coordinates: null
	,area: function() {
		var n = this.coordinates.length, a = this.coordinates[n - 1][0] * this.coordinates[0][1], b = this.coordinates[n - 1][1] * this.coordinates[0][0];
		var _g = 1;
		while(_g < n) {
			var i = _g++;
			a += this.coordinates[i - 1][0] * this.coordinates[i][1];
			b += this.coordinates[i - 1][1] * this.coordinates[i][0];
		}
		return (b - a) * .5;
	}
	,centroid: function(k) {
		var a, b, c, x = 0.0, y = 0.0;
		if(null == k) k = 1 / (6 * this.area());
		var _g1 = 0, _g = this.coordinates.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			a = this.coordinates[i];
			b = this.coordinates[i + 1];
			c = a[0] * b[1] - b[0] * a[1];
			x += (a[0] + b[0]) * c;
			y += (a[1] + b[1]) * c;
		}
		return [x * k,y * k];
	}
	,clip: function(subject) {
		var input, a = Arrays.last(this.coordinates), b, c, d, m;
		var _g1 = 0, _g = this.coordinates.length;
		while(_g1 < _g) {
			var i = _g1++;
			input = subject.copy();
			subject = [];
			b = this.coordinates[i];
			c = input[(m = input.length) - 1];
			var _g2 = 0;
			while(_g2 < m) {
				var j = _g2++;
				d = input[j];
				if(thx.geom.Polygon.polygonInside(d,a,b)) {
					if(!thx.geom.Polygon.polygonInside(c,a,b)) subject.push(thx.geom.Polygon.polygonIntersect(c,d,a,b));
					subject.push(d);
				} else if(thx.geom.Polygon.polygonInside(c,a,b)) subject.push(thx.geom.Polygon.polygonIntersect(c,d,a,b));
				c = d;
			}
			a = b;
		}
		return subject;
	}
	,__class__: thx.geom.Polygon
}
var DateTools = $hxClasses["DateTools"] = function() { }
DateTools.__name__ = ["DateTools"];
DateTools.__format_get = function(d,e) {
	return (function($this) {
		var $r;
		switch(e) {
		case "%":
			$r = "%";
			break;
		case "a":
			$r = DateTools.WEEKDAYS_ABBREV[d.getDay()];
			break;
		case "b":
			$r = DateTools.MONTHS_ABBREV[d.getMonth()];
			break;
		case "C":
			$r = StringTools.lpad(Std.string(Std["int"](d.getFullYear() / 100)),"0",2);
			break;
		case "d":
			$r = StringTools.lpad(Std.string(d.getDate()),"0",2);
			break;
		case "D":
			$r = DateTools.__format(d,"%m/%d/%y");
			break;
		case "e":
			$r = Std.string(d.getDate());
			break;
		case "H":case "k":
			$r = StringTools.lpad(Std.string(d.getHours()),e == "H"?"0":" ",2);
			break;
		case "I":case "l":
			$r = (function($this) {
				var $r;
				var hour = d.getHours() % 12;
				$r = StringTools.lpad(Std.string(hour == 0?12:hour),e == "I"?"0":" ",2);
				return $r;
			}($this));
			break;
		case "m":
			$r = StringTools.lpad(Std.string(d.getMonth() + 1),"0",2);
			break;
		case "M":
			$r = StringTools.lpad(Std.string(d.getMinutes()),"0",2);
			break;
		case "n":
			$r = "\n";
			break;
		case "p":
			$r = d.getHours() > 11?"PM":"AM";
			break;
		case "r":
			$r = DateTools.__format(d,"%I:%M:%S %p");
			break;
		case "R":
			$r = DateTools.__format(d,"%H:%M");
			break;
		case "s":
			$r = Std.string(Std["int"](d.getTime() / 1000));
			break;
		case "S":
			$r = StringTools.lpad(Std.string(d.getSeconds()),"0",2);
			break;
		case "t":
			$r = "\t";
			break;
		case "T":
			$r = DateTools.__format(d,"%H:%M:%S");
			break;
		case "u":
			$r = (function($this) {
				var $r;
				var t = d.getDay();
				$r = t == 0?"7":Std.string(t);
				return $r;
			}($this));
			break;
		case "w":
			$r = Std.string(d.getDay());
			break;
		case "y":
			$r = StringTools.lpad(Std.string(d.getFullYear() % 100),"0",2);
			break;
		case "Y":
			$r = Std.string(d.getFullYear());
			break;
		case "z":
			$r = (function($this) {
				var $r;
				var o = d.getTimezoneOffset();
				var i = Std.string(Std["int"](Math.abs(Math.floor(o / 60 * 100))));
				var neg = o < 0?true:false;
				var s = StringTools.lpad(i,"0",4);
				$r = neg?"-" + s:"+" + s;
				return $r;
			}($this));
			break;
		default:
			$r = (function($this) {
				var $r;
				throw "Date.format %" + e + "- not implemented yet.";
				return $r;
			}($this));
		}
		return $r;
	}(this));
}
DateTools.__format = function(d,f) {
	var r = new StringBuf();
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) break;
		r.b[r.b.length] = f.substr(p,np - p);
		r.add(DateTools.__format_get(d,f.substr(np + 1,1)));
		p = np + 2;
	}
	r.b[r.b.length] = f.substr(p,f.length - p);
	return r.b.join("");
}
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
}
DateTools.delta = function(d,t) {
	return Date.fromTime(d.getTime() + t);
}
DateTools.getMonthDays = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) return DateTools.DAYS_OF_MONTH[month];
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	return isB?29:28;
}
DateTools.seconds = function(n) {
	return n * 1000.0;
}
DateTools.minutes = function(n) {
	return n * 60.0 * 1000.0;
}
DateTools.hours = function(n) {
	return n * 60.0 * 60.0 * 1000.0;
}
DateTools.days = function(n) {
	return n * 24.0 * 60.0 * 60.0 * 1000.0;
}
DateTools.parse = function(t) {
	var s = t / 1000;
	var m = s / 60;
	var h = m / 60;
	return { ms : t % 1000, seconds : Std["int"](s % 60), minutes : Std["int"](m % 60), hours : Std["int"](h % 24), days : Std["int"](h / 24)};
}
DateTools.make = function(o) {
	return o.ms + 1000.0 * (o.seconds + 60.0 * (o.minutes + 60.0 * (o.hours + 24.0 * o.days)));
}
DateTools.prototype = {
	__class__: DateTools
}
rg.info.InfoScatterGraph = $hxClasses["rg.info.InfoScatterGraph"] = function() {
	rg.info.InfoCartesianChart.call(this);
	this.segment = new rg.info.InfoSegment();
	this.symbol = function(dp,s) {
		return rg.svg.util.SymbolCache.cache.get("circle",16);
	};
}
rg.info.InfoScatterGraph.__name__ = ["rg","info","InfoScatterGraph"];
rg.info.InfoScatterGraph.filters = function() {
	return [{ field : "symbol", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "symbol", value : Std["is"](v,String)?function(_,_1) {
			return v;
		}:v}];
	}},{ field : "symbolstyle", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "symbolStyle", value : v}];
	}},{ field : "segmenton", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),{ on : v})}];
	}},{ field : "segment", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.info.Info.feed(new rg.info.InfoSegment(),v)}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoScatterGraph.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoScatterGraph.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	symbol: null
	,symbolStyle: null
	,segment: null
	,__class__: rg.info.InfoScatterGraph
});
if(!thx.geom.layout) thx.geom.layout = {}
thx.geom.layout.Pie = $hxClasses["thx.geom.layout.Pie"] = function() {
	this._startAngle = function(_,_1) {
		return 0.0;
	};
	this._endAngle = function(_,_1) {
		return 6.283185307179586477;
	};
	this._sort = null;
	this._value = function(d,_) {
		return Number(d);
	};
}
thx.geom.layout.Pie.__name__ = ["thx","geom","layout","Pie"];
thx.geom.layout.Pie.prototype = {
	_startAngle: null
	,_endAngle: null
	,_sort: null
	,_value: null
	,pie: function(data,i) {
		var a = this._startAngle(data,i), k = this._endAngle(data,i) - a;
		var index = Ints.range(data.length);
		if(this._sort != null) {
			var s = this._sort;
			index.sort(function(i1,j) {
				return s(data[i1],data[j]);
			});
		}
		var values = data.map(this._value);
		k /= values.reduce(function(p,d,_) {
			return p + d;
		},0.0);
		if(!Math.isFinite(k)) k = 0;
		var d;
		var arcs = index.map(function(_,i1) {
			d = values[i1];
			return { value : d, startAngle : a, endAngle : a += d * k};
		});
		return data.map(function(d1,i1) {
			return arcs[index[i1]];
		});
	}
	,getStartAngle: function() {
		return this._startAngle;
	}
	,startAngle: function(v) {
		return this.startAnglef(function(_,_1) {
			return v;
		});
	}
	,startAnglef: function(v) {
		this._startAngle = v;
		return this;
	}
	,getEndAngle: function() {
		return this._endAngle;
	}
	,endAngle: function(v) {
		return this.endAnglef(function(_,_1) {
			return v;
		});
	}
	,endAnglef: function(v) {
		this._endAngle = v;
		return this;
	}
	,getSort: function() {
		return this._sort;
	}
	,sort: function(v) {
		this._sort = v;
		return this;
	}
	,getValue: function() {
		return this._value;
	}
	,valuef: function(v) {
		this._value = v;
		return this;
	}
	,__class__: thx.geom.layout.Pie
}
var Bools = $hxClasses["Bools"] = function() { }
Bools.__name__ = ["Bools"];
Bools.format = function(v,param,params,culture) {
	return (Bools.formatf(param,params,culture))(v);
}
Bools.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"B");
	var format = params.shift();
	switch(format) {
	case "B":
		return function(v) {
			return v?"true":"false";
		};
	case "N":
		return function(v) {
			return v?"1":"0";
		};
	case "R":
		if(params.length != 2) throw "bool format R requires 2 parameters";
		return function(v) {
			return v?params[0]:params[1];
		};
	default:
		throw "Unsupported bool format: " + format;
	}
}
Bools.interpolate = function(v,a,b,equation) {
	return (Bools.interpolatef(a,b,equation))(v);
}
Bools.interpolatef = function(a,b,equation) {
	if(a == b) return function(_) {
		return a;
	}; else {
		var f = Floats.interpolatef(0,1,equation);
		return function(v) {
			return f(v) < 0.5?a:b;
		};
	}
}
Bools.canParse = function(s) {
	s = s.toLowerCase();
	return s == "true" || s == "false";
}
Bools.parse = function(s) {
	return s.toLowerCase() == "true";
}
Bools.compare = function(a,b) {
	return a == b?0:a?-1:1;
}
Bools.prototype = {
	__class__: Bools
}
haxe.Md5 = $hxClasses["haxe.Md5"] = function() {
}
haxe.Md5.__name__ = ["haxe","Md5"];
haxe.Md5.encode = function(s) {
	return new haxe.Md5().doEncode(s);
}
haxe.Md5.prototype = {
	bitOR: function(a,b) {
		var lsb = a & 1 | b & 1;
		var msb31 = a >>> 1 | b >>> 1;
		return msb31 << 1 | lsb;
	}
	,bitXOR: function(a,b) {
		var lsb = a & 1 ^ b & 1;
		var msb31 = a >>> 1 ^ b >>> 1;
		return msb31 << 1 | lsb;
	}
	,bitAND: function(a,b) {
		var lsb = a & 1 & (b & 1);
		var msb31 = a >>> 1 & b >>> 1;
		return msb31 << 1 | lsb;
	}
	,addme: function(x,y) {
		var lsw = (x & 65535) + (y & 65535);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return msw << 16 | lsw & 65535;
	}
	,rhex: function(num) {
		var str = "";
		var hex_chr = "0123456789abcdef";
		var _g = 0;
		while(_g < 4) {
			var j = _g++;
			str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
		}
		return str;
	}
	,str2blks: function(str) {
		var nblk = (str.length + 8 >> 6) + 1;
		var blks = new Array();
		var _g1 = 0, _g = nblk * 16;
		while(_g1 < _g) {
			var i = _g1++;
			blks[i] = 0;
		}
		var i = 0;
		while(i < str.length) {
			blks[i >> 2] |= str.charCodeAt(i) << (str.length * 8 + i) % 4 * 8;
			i++;
		}
		blks[i >> 2] |= 128 << (str.length * 8 + i) % 4 * 8;
		var l = str.length * 8;
		var k = nblk * 16 - 2;
		blks[k] = l & 255;
		blks[k] |= (l >>> 8 & 255) << 8;
		blks[k] |= (l >>> 16 & 255) << 16;
		blks[k] |= (l >>> 24 & 255) << 24;
		return blks;
	}
	,rol: function(num,cnt) {
		return num << cnt | num >>> 32 - cnt;
	}
	,cmn: function(q,a,b,x,s,t) {
		return this.addme(this.rol(this.addme(this.addme(a,q),this.addme(x,t)),s),b);
	}
	,ff: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitOR(this.bitAND(b,c),this.bitAND(~b,d)),a,b,x,s,t);
	}
	,gg: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitOR(this.bitAND(b,d),this.bitAND(c,~d)),a,b,x,s,t);
	}
	,hh: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitXOR(this.bitXOR(b,c),d),a,b,x,s,t);
	}
	,ii: function(a,b,c,d,x,s,t) {
		return this.cmn(this.bitXOR(c,this.bitOR(b,~d)),a,b,x,s,t);
	}
	,doEncode: function(str) {
		var x = this.str2blks(str);
		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;
		var step;
		var i = 0;
		while(i < x.length) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;
			step = 0;
			a = this.ff(a,b,c,d,x[i],7,-680876936);
			d = this.ff(d,a,b,c,x[i + 1],12,-389564586);
			c = this.ff(c,d,a,b,x[i + 2],17,606105819);
			b = this.ff(b,c,d,a,x[i + 3],22,-1044525330);
			a = this.ff(a,b,c,d,x[i + 4],7,-176418897);
			d = this.ff(d,a,b,c,x[i + 5],12,1200080426);
			c = this.ff(c,d,a,b,x[i + 6],17,-1473231341);
			b = this.ff(b,c,d,a,x[i + 7],22,-45705983);
			a = this.ff(a,b,c,d,x[i + 8],7,1770035416);
			d = this.ff(d,a,b,c,x[i + 9],12,-1958414417);
			c = this.ff(c,d,a,b,x[i + 10],17,-42063);
			b = this.ff(b,c,d,a,x[i + 11],22,-1990404162);
			a = this.ff(a,b,c,d,x[i + 12],7,1804603682);
			d = this.ff(d,a,b,c,x[i + 13],12,-40341101);
			c = this.ff(c,d,a,b,x[i + 14],17,-1502002290);
			b = this.ff(b,c,d,a,x[i + 15],22,1236535329);
			a = this.gg(a,b,c,d,x[i + 1],5,-165796510);
			d = this.gg(d,a,b,c,x[i + 6],9,-1069501632);
			c = this.gg(c,d,a,b,x[i + 11],14,643717713);
			b = this.gg(b,c,d,a,x[i],20,-373897302);
			a = this.gg(a,b,c,d,x[i + 5],5,-701558691);
			d = this.gg(d,a,b,c,x[i + 10],9,38016083);
			c = this.gg(c,d,a,b,x[i + 15],14,-660478335);
			b = this.gg(b,c,d,a,x[i + 4],20,-405537848);
			a = this.gg(a,b,c,d,x[i + 9],5,568446438);
			d = this.gg(d,a,b,c,x[i + 14],9,-1019803690);
			c = this.gg(c,d,a,b,x[i + 3],14,-187363961);
			b = this.gg(b,c,d,a,x[i + 8],20,1163531501);
			a = this.gg(a,b,c,d,x[i + 13],5,-1444681467);
			d = this.gg(d,a,b,c,x[i + 2],9,-51403784);
			c = this.gg(c,d,a,b,x[i + 7],14,1735328473);
			b = this.gg(b,c,d,a,x[i + 12],20,-1926607734);
			a = this.hh(a,b,c,d,x[i + 5],4,-378558);
			d = this.hh(d,a,b,c,x[i + 8],11,-2022574463);
			c = this.hh(c,d,a,b,x[i + 11],16,1839030562);
			b = this.hh(b,c,d,a,x[i + 14],23,-35309556);
			a = this.hh(a,b,c,d,x[i + 1],4,-1530992060);
			d = this.hh(d,a,b,c,x[i + 4],11,1272893353);
			c = this.hh(c,d,a,b,x[i + 7],16,-155497632);
			b = this.hh(b,c,d,a,x[i + 10],23,-1094730640);
			a = this.hh(a,b,c,d,x[i + 13],4,681279174);
			d = this.hh(d,a,b,c,x[i],11,-358537222);
			c = this.hh(c,d,a,b,x[i + 3],16,-722521979);
			b = this.hh(b,c,d,a,x[i + 6],23,76029189);
			a = this.hh(a,b,c,d,x[i + 9],4,-640364487);
			d = this.hh(d,a,b,c,x[i + 12],11,-421815835);
			c = this.hh(c,d,a,b,x[i + 15],16,530742520);
			b = this.hh(b,c,d,a,x[i + 2],23,-995338651);
			a = this.ii(a,b,c,d,x[i],6,-198630844);
			d = this.ii(d,a,b,c,x[i + 7],10,1126891415);
			c = this.ii(c,d,a,b,x[i + 14],15,-1416354905);
			b = this.ii(b,c,d,a,x[i + 5],21,-57434055);
			a = this.ii(a,b,c,d,x[i + 12],6,1700485571);
			d = this.ii(d,a,b,c,x[i + 3],10,-1894986606);
			c = this.ii(c,d,a,b,x[i + 10],15,-1051523);
			b = this.ii(b,c,d,a,x[i + 1],21,-2054922799);
			a = this.ii(a,b,c,d,x[i + 8],6,1873313359);
			d = this.ii(d,a,b,c,x[i + 15],10,-30611744);
			c = this.ii(c,d,a,b,x[i + 6],15,-1560198380);
			b = this.ii(b,c,d,a,x[i + 13],21,1309151649);
			a = this.ii(a,b,c,d,x[i + 4],6,-145523070);
			d = this.ii(d,a,b,c,x[i + 11],10,-1120210379);
			c = this.ii(c,d,a,b,x[i + 2],15,718787259);
			b = this.ii(b,c,d,a,x[i + 9],21,-343485551);
			a = this.addme(a,olda);
			b = this.addme(b,oldb);
			c = this.addme(c,oldc);
			d = this.addme(d,oldd);
			i += 16;
		}
		return this.rhex(a) + this.rhex(b) + this.rhex(c) + this.rhex(d);
	}
	,__class__: haxe.Md5
}
rg.info.InfoLeaderboard = $hxClasses["rg.info.InfoLeaderboard"] = function() {
	this.animation = new rg.info.InfoAnimation();
	this.label = new rg.info.InfoLabelLeaderboard();
	this.usemax = false;
	this.displaybar = true;
}
rg.info.InfoLeaderboard.__name__ = ["rg","info","InfoLeaderboard"];
rg.info.InfoLeaderboard.filters = function() {
	return [{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		var animation = new rg.info.InfoAnimation();
		animation.ease = thx.math.Equations.linear;
		return [{ field : "animation", value : rg.info.Info.feed(animation,v)}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelLeaderboard(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "sort", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "sortDataPoint", value : v}];
	}},{ field : "displaybar", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "usemax", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null}];
}
rg.info.InfoLeaderboard.prototype = {
	animation: null
	,label: null
	,click: null
	,sortDataPoint: null
	,usemax: null
	,displaybar: null
	,__class__: rg.info.InfoLeaderboard
}
rg.svg.chart.StreamGraph = $hxClasses["rg.svg.chart.StreamGraph"] = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.interpolator = thx.svg.LineInterpolator.Cardinal(0.6);
	this.gradientLightness = 0.75;
	this.gradientStyle = 1;
}
rg.svg.chart.StreamGraph.__name__ = ["rg","svg","chart","StreamGraph"];
rg.svg.chart.StreamGraph.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.StreamGraph.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	interpolator: null
	,gradientLightness: null
	,gradientStyle: null
	,dps: null
	,area: null
	,transformedData: null
	,stats: null
	,defs: null
	,maxy: null
	,init: function() {
		rg.svg.chart.CartesianChart.prototype.init.call(this);
		this.defs = this.g.append("svg:defs");
		this.g.classed().add("stream-chart");
	}
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		rg.svg.chart.CartesianChart.prototype.setVariables.call(this,variables,variableIndependents,variableDependents,data);
	}
	,data: function(dps) {
		this.dps = dps;
		this.prepareData();
		this.redraw();
	}
	,redraw: function() {
		if(null == this.transformedData) return;
		var layer = this.g.selectAll("g.group").data(this.transformedData);
		layer.update().select("path.line").attr("d").stringf(($_=this.area,$_.shape.$bind($_)));
		var node = layer.enter().append("svg:g").attr("class").string("group").onNode("mousemove",this.onover.$bind(this)).onNode("click",this.onclick.$bind(this)).append("svg:path").attr("class").stringf(function(d,i) {
			return "line fill-" + i + " stroke-" + i;
		}).attr("d").stringf(($_=this.area,$_.shape.$bind($_)));
		if(this.gradientStyle != 0) node.each(this.gradientStyle == 1?this.applyGradientV.$bind(this):this.applyGradientH.$bind(this));
		layer.exit().remove();
		this.ready.dispatch();
	}
	,getDataAtNode: function(n,i) {
		var px = thx.js.Svg.mouse(n)[0], x = (Floats.uninterpolatef(this.transformedData[i][0].coord.x,Arrays.last(this.transformedData[i]).coord.x))(px / this.width);
		var data = Reflect.field(n,"__data__");
		return Arrays.nearest(this.transformedData[i],x,function(d) {
			return d.coord.x;
		});
	}
	,onover: function(n,i) {
		if(null == this.labelDataPointOver) return;
		var dp = this.getDataAtNode(n,i);
		this.tooltip.html(this.labelDataPointOver(dp.dp,this.stats).split("\n").join("<br>"));
		this.moveTooltip(dp.coord.x * this.width,this.height - (dp.coord.y + dp.coord.y0) * this.height / this.maxy);
	}
	,onclick: function(n,i) {
		if(null == this.click) return;
		var dp = this.getDataAtNode(n,i);
		this.click(dp.dp,this.stats);
	}
	,prepareData: function() {
		var me = this;
		this.defs.selectAll("linearGradient.h").remove();
		var xscale = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(($_=this.xVariable.axis,$_.scale.$bind($_)),this.xVariable.min(),this.xVariable.max()), xtype = this.xVariable.type, x = function(d) {
			return xscale(Reflect.field(d,xtype));
		}, yscale = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(($_=this.yVariables[0].axis,$_.scale.$bind($_)),this.yVariables[0].min(),this.yVariables[0].max()), ytype = this.yVariables[0].type, y = function(d) {
			return yscale(Reflect.field(d,ytype));
		}, m = Std["int"](Arrays.floatMax(this.dps,function(d) {
			return d.length;
		}));
		var altDp = function(pos) {
			var _g1 = 0, _g = me.dps.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(null != me.dps[i][pos]) return me.dps[i][pos];
			}
			return null;
		};
		var coords = this.dps.map(function(d,j) {
			return Ints.range(0,m).map(function(_,i) {
				var dp = d[i];
				if(null == dp) return { x : x(altDp(i)), y : .0};
				return { x : x(dp), y : Math.max(0,y(dp))};
			});
		});
		var data = new thx.geom.layout.Stack().offset(thx.geom.layout.StackOffset.Silhouette).order(thx.geom.layout.StackOrder.DefaultOrder).stack(coords);
		this.transformedData = data.map(function(d,i) {
			return d.map(function(d1,j) {
				return { coord : d1, dp : me.dps[i][j]};
			});
		});
		this.stats = this.yVariables[0].stats;
		this.maxy = Arrays.floatMax(data,function(d) {
			return Arrays.floatMax(d,function(d1) {
				return d1.y0 + d1.y;
			});
		});
		this.area = new thx.svg.Area().interpolator(this.interpolator).x(function(d,i) {
			return d.coord.x * me.width;
		}).y0(function(d,i) {
			return me.height - d.coord.y0 * me.height / me.maxy;
		}).y1(function(d,i) {
			return me.height - (d.coord.y + d.coord.y0) * me.height / me.maxy;
		});
	}
	,applyGradientV: function(d,i) {
		var gn = thx.js.Dom.selectNode(thx.js.Group.current), color = rg.util.RGColors.parse(gn.style("fill").get(),"#cccccc"), id = "rg_stream_gradient_h_" + color.hex("");
		if(this.defs.select("#" + id).empty()) {
			var scolor = rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString();
			var gradient = this.defs.append("svg:linearGradient").attr("id").string(id).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
			gradient.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(scolor).attr("stop-opacity")["float"](1);
			gradient.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
		}
		gn.attr("style").string("fill:url(#" + id + ")");
	}
	,applyGradientH: function(d,i) {
		var gn = thx.js.Dom.selectNode(thx.js.Group.current), color = thx.color.Hsl.toHsl(rg.util.RGColors.parse(gn.style("fill").get(),"#cccccc")), id = "rg_stream_gradient_v_" + rg.svg.chart.StreamGraph.vid++;
		var gradient = this.defs.append("svg:linearGradient").attr("class").string("x").attr("id").string(id).attr("x1").string("0%").attr("x2").string("100%").attr("y1").string("0%").attr("y2").string("0%");
		var bx = d[0].coord.x, ax = d[d.length - 1].coord.x, span = ax - bx, percent = function(x) {
			return Math.round((x - bx) / span * 10000) / 100;
		}, max = Arrays.floatMax(d,function(d1) {
			return d1.coord.y;
		});
		var _g1 = 0, _g = d.length;
		while(_g1 < _g) {
			var i1 = _g1++;
			var dp = d[i1], v = dp.coord.y / max;
			var gcolor = rg.util.RGColors.applyLightness(color,this.gradientLightness,v);
			gradient.append("svg:stop").attr("offset").string(percent(dp.coord.x) + "%").attr("stop-color").string(gcolor.hex("#")).attr("stop-opacity")["float"](1);
		}
		gn.attr("style").string("fill:url(#" + id + ")");
	}
	,__class__: rg.svg.chart.StreamGraph
});
var IntHashes = $hxClasses["IntHashes"] = function() { }
IntHashes.__name__ = ["IntHashes"];
IntHashes.empty = function(hash) {
	return IntHashes.count(hash) == 0;
}
IntHashes.count = function(hash) {
	var i = 0;
	var $it0 = hash.iterator();
	while( $it0.hasNext() ) {
		var _ = $it0.next();
		i++;
	}
	return i;
}
IntHashes.clear = function(hash) {
	var _hash = hash;
	_hash.h = {}
	if(_hash.h.__proto__ != null) {
		_hash.h.__proto__ = null;
		delete(_hash.h.__proto__);
	}
}
IntHashes.prototype = {
	__class__: IntHashes
}
rg.graph.GreedySwitch2Decrosser = $hxClasses["rg.graph.GreedySwitch2Decrosser"] = function() {
	rg.graph.GreedySwitchDecrosser.call(this);
}
rg.graph.GreedySwitch2Decrosser.__name__ = ["rg","graph","GreedySwitch2Decrosser"];
rg.graph.GreedySwitch2Decrosser.__super__ = rg.graph.GreedySwitchDecrosser;
rg.graph.GreedySwitch2Decrosser.prototype = $extend(rg.graph.GreedySwitchDecrosser.prototype,{
	decross: function(layout) {
		var layers = layout.layers(), graph = layout.graph, newlayers, newlayout = layout;
		if(layers.length <= 1) return new rg.graph.GraphLayout(layout.graph,layers);
		var totbefore, crossings, len = layers.length - 1, a, b, c;
		do {
			newlayers = layers.map(function(arr,_) {
				return arr.copy();
			});
			newlayout = new rg.graph.GraphLayout(graph,layers);
			totbefore = newlayout.crossings();
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				a = newlayers[i - 1];
				b = newlayers[i];
				c = newlayers[i + 1];
				this.decrossTriplet(graph,a,b,c);
			}
			crossings = new rg.graph.GraphLayout(graph,newlayers).crossings();
			layers = newlayers;
		} while(totbefore > crossings);
		return newlayout;
	}
	,decrossTriplet: function(graph,a,b,c) {
		if(null == a) this.decrossPair(graph,b,c); else if(null == c) this.decrossPair(graph,a,b); else {
			var tot = rg.graph.GraphLayout.arrayCrossings(graph,a,b) + rg.graph.GraphLayout.arrayCrossings(graph,b,c), ntot = tot, t;
			do {
				tot = ntot;
				var _g1 = 0, _g = b.length - 1;
				while(_g1 < _g) {
					var i = _g1++;
					this.swap(b,i);
					if((t = rg.graph.GraphLayout.arrayCrossings(graph,a,b) + rg.graph.GraphLayout.arrayCrossings(graph,b,c)) >= ntot) this.swap(b,i); else ntot = t;
				}
			} while(ntot < tot);
		}
	}
	,__class__: rg.graph.GreedySwitch2Decrosser
});
rg.svg.widget.LabelOrientation = $hxClasses["rg.svg.widget.LabelOrientation"] = { __ename__ : ["rg","svg","widget","LabelOrientation"], __constructs__ : ["FixedAngle","Aligned","Orthogonal"] }
rg.svg.widget.LabelOrientation.FixedAngle = function(angle) { var $x = ["FixedAngle",0,angle]; $x.__enum__ = rg.svg.widget.LabelOrientation; $x.toString = $estr; return $x; }
rg.svg.widget.LabelOrientation.Aligned = ["Aligned",1];
rg.svg.widget.LabelOrientation.Aligned.toString = $estr;
rg.svg.widget.LabelOrientation.Aligned.__enum__ = rg.svg.widget.LabelOrientation;
rg.svg.widget.LabelOrientation.Orthogonal = ["Orthogonal",2];
rg.svg.widget.LabelOrientation.Orthogonal.toString = $estr;
rg.svg.widget.LabelOrientation.Orthogonal.__enum__ = rg.svg.widget.LabelOrientation;
thx.geo.Mercator = $hxClasses["thx.geo.Mercator"] = function() {
	this.setScale(500);
	this.setTranslate([480.0,250]);
}
thx.geo.Mercator.__name__ = ["thx","geo","Mercator"];
thx.geo.Mercator.__interfaces__ = [thx.geo.IProjection];
thx.geo.Mercator.prototype = {
	scale: null
	,translate: null
	,project: function(coords) {
		var x = coords[0] / 360, y = -(Math.log(Math.tan(Math.PI / 4 + coords[1] * 0.01745329251994329577 / 2)) / 0.01745329251994329577) / 360;
		return [this.getScale() * x + this.getTranslate()[0],this.getScale() * Math.max(-.5,Math.min(.5,y)) + this.getTranslate()[1]];
	}
	,invert: function(coords) {
		var x = (coords[0] - this.getTranslate()[0]) / this.getScale(), y = (coords[1] - this.getTranslate()[1]) / this.getScale();
		return [360 * x,2 * Math.atan(Math.exp(-360 * y * 0.01745329251994329577)) / 0.01745329251994329577 - 90];
	}
	,setScale: function(scale) {
		return this.scale = scale;
	}
	,getScale: function() {
		return this.scale;
	}
	,getTranslate: function() {
		return this.translate.copy();
	}
	,setTranslate: function(translate) {
		this.translate = [translate[0],translate[1]];
		return translate;
	}
	,__class__: thx.geo.Mercator
	,__properties__: {set_translate:"setTranslate",get_translate:"getTranslate",set_scale:"setScale",get_scale:"getScale"}
}
thx.svg.PathGeoJson = $hxClasses["thx.svg.PathGeoJson"] = function() {
	this.setPointRadius(4.5);
	this.setProjection(new thx.geo.AlbersUsa());
	this.pathTypes = new thx.svg.PathTypes(this);
	this.centroidTypes = new thx.svg.CentroidTypes(this);
	this.areaTypes = new thx.svg.AreaTypes(this);
}
thx.svg.PathGeoJson.__name__ = ["thx","svg","PathGeoJson"];
thx.svg.PathGeoJson.circle = function(r) {
	return "m0," + r + "a" + r + "," + r + " 0 1,1 0," + -2 * r + "a" + r + "," + r + " 0 1,1 0," + 2 * r + "z";
}
thx.svg.PathGeoJson.bounds = function(d) {
	var left = Math.POSITIVE_INFINITY, bottom = Math.POSITIVE_INFINITY, right = Math.NEGATIVE_INFINITY, top = Math.NEGATIVE_INFINITY;
	thx.svg.PathGeoJson.applyBounds(d,function(x,y) {
		if(x < left) left = x;
		if(x > right) right = x;
		if(y < bottom) bottom = y;
		if(y > top) top = y;
	});
	return [[left,bottom],[right,top]];
}
thx.svg.PathGeoJson.applyBounds = function(d,f) {
	switch(d.type) {
	case "Feature":
		thx.svg.PathGeoJson.applyBounds(d.geometry,f);
		break;
	case "FeatureCollection":
		var _g = 0, _g1 = d.features;
		while(_g < _g1.length) {
			var feature = _g1[_g];
			++_g;
			thx.svg.PathGeoJson.applyBounds(feature.geometry,f);
		}
		break;
	case "LineString":case "MultiPoint":
		var coordinates = d.coordinates;
		var _g = 0;
		while(_g < coordinates.length) {
			var coords = coordinates[_g];
			++_g;
			f(coords[0],coords[1]);
		}
		break;
	case "MultiLineString":
		var coordinates = d.coordinates;
		var _g = 0;
		while(_g < coordinates.length) {
			var coords = coordinates[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < coords.length) {
				var scoords = coords[_g1];
				++_g1;
				f(scoords[0],scoords[1]);
			}
		}
		break;
	case "MultiPolygon":
		var coordinates = d.coordinates;
		var _g = 0;
		while(_g < coordinates.length) {
			var coords = coordinates[_g];
			++_g;
			var _g1 = 0, _g2 = coords[0];
			while(_g1 < _g2.length) {
				var scoords = _g2[_g1];
				++_g1;
				f(scoords[0],scoords[1]);
			}
		}
		break;
	case "Point":
		var coordinates = d.coordinates;
		f(coordinates[0],coordinates[1]);
		break;
	case "Polygon":
		var coordinates = d.coordinates;
		var _g = 0, _g1 = coordinates[0];
		while(_g < _g1.length) {
			var coords = _g1[_g];
			++_g;
			f(coords[0],coords[1]);
		}
		break;
	default:
		throw new thx.error.Error("invalid geomtry type '{0}'",null,d.type,{ fileName : "PathGeoJson.hx", lineNumber : 113, className : "thx.svg.PathGeoJson", methodName : "applyBounds"});
	}
}
thx.svg.PathGeoJson.prototype = {
	pointRadius: null
	,projection: null
	,pathCircle: null
	,pathTypes: null
	,centroidTypes: null
	,areaTypes: null
	,path: function(d,_) {
		return this.pathTypes.path(d);
	}
	,centroid: function(d,_) {
		return this.centroidTypes.centroid(d);
	}
	,area: function(d,_) {
		return this.areaTypes.area(d);
	}
	,setPointRadius: function(r) {
		this.pointRadius = r;
		this.pathCircle = thx.svg.PathGeoJson.circle(r);
		return r;
	}
	,setProjection: function(projection) {
		return this.projection = projection;
	}
	,__class__: thx.svg.PathGeoJson
	,__properties__: {set_projection:"setProjection",set_pointRadius:"setPointRadius"}
}
thx.svg.PathTypes = $hxClasses["thx.svg.PathTypes"] = function(geo) {
	this.geo = geo;
}
thx.svg.PathTypes.__name__ = ["thx","svg","PathTypes"];
thx.svg.PathTypes.prototype = {
	geo: null
	,path: function(geo) {
		var field = Reflect.field(this,Strings.lcfirst(geo.type));
		if(null == field) return "";
		return field.apply(this,[geo]);
	}
	,featureCollection: function(f) {
		var p = [], features = f.features;
		var _g1 = 0, _g = features.length;
		while(_g1 < _g) {
			var i = _g1++;
			p.push(this.path(features[i].geometry));
		}
		return p.join("");
	}
	,feature: function(f) {
		return this.path(f.geometry);
	}
	,point: function(o) {
		return "M" + this.project(o.coordinates) + this.geo.pathCircle;
	}
	,multiPoint: function(o) {
		var p = [], coordinates = o.coordinates;
		var _g1 = 0, _g = coordinates.length;
		while(_g1 < _g) {
			var i = _g1++;
			p.push("M" + this.project(coordinates[i]) + this.geo.pathCircle);
		}
		return p.join("");
	}
	,lineString: function(o) {
		var p = ["M"], coordinates = o.coordinates;
		var _g1 = 0, _g = coordinates.length;
		while(_g1 < _g) {
			var i = _g1++;
			p.push(this.project(coordinates[i]));
		}
		return p.join("L");
	}
	,multiLineString: function(o) {
		var p = [], coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			p.push("M");
			var _g2 = 0, _g1 = coordinates.length;
			while(_g2 < _g1) {
				var i = _g2++;
				p.push(this.project(coordinates[i]));
				p.push("L");
			}
			p.pop();
		}
		return p.join("");
	}
	,polygon: function(o) {
		var p = [], coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			p.push("M");
			var _g2 = 0, _g1 = coordinates.length;
			while(_g2 < _g1) {
				var j = _g2++;
				p.push(this.project(coordinates[j]));
				p.push("L");
			}
			p[p.length - 1] = "Z";
		}
		return p.join("");
	}
	,multiPolygon: function(o) {
		var p = [], coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < coordinates.length) {
				var subcoordinates = coordinates[_g1];
				++_g1;
				p.push("M");
				var _g2 = 0;
				while(_g2 < subcoordinates.length) {
					var scoords = subcoordinates[_g2];
					++_g2;
					p.push(this.project(scoords));
					p.push("L");
				}
				p[p.length - 1] = "Z";
			}
		}
		return p.join("");
	}
	,geometryCollection: function(o) {
		var p = [];
		var _g = 0, _g1 = o.geometries;
		while(_g < _g1.length) {
			var geometry = _g1[_g];
			++_g;
			p.push(this.path(geometry));
		}
		return p.join("");
	}
	,project: function(coords) {
		return this.geo.projection.project(coords).join(",");
	}
	,__class__: thx.svg.PathTypes
}
thx.svg.AreaTypes = $hxClasses["thx.svg.AreaTypes"] = function(geo) {
	this.geo = geo;
}
thx.svg.AreaTypes.__name__ = ["thx","svg","AreaTypes"];
thx.svg.AreaTypes.prototype = {
	geo: null
	,area: function(geo) {
		var field = Reflect.field(this,Strings.lcfirst(geo.type));
		if(null == field) return 0.0;
		return field.apply(this,[geo]);
	}
	,featureCollection: function(f) {
		var a = 0.0;
		var _g = 0, _g1 = f.features;
		while(_g < _g1.length) {
			var feat = _g1[_g];
			++_g;
			a += this.area(feat.geometry);
		}
		return a;
	}
	,feature: function(f) {
		return this.area(f.geometry);
	}
	,point: function(o) {
		return 0.0;
	}
	,multiPoint: function(o) {
		return 0.0;
	}
	,lineString: function(o) {
		return 0.0;
	}
	,multiLineString: function(o) {
		return 0.0;
	}
	,polygon: function(o) {
		return this.polygonArea(o.coordinates);
	}
	,multiPolygon: function(o) {
		var sum = 0.0, coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			sum += this.polygonArea(coordinates);
		}
		return sum;
	}
	,geometryCollection: function(o) {
		var sum = 0.0;
		var _g = 0, _g1 = o.geometries;
		while(_g < _g1.length) {
			var geometry = _g1[_g];
			++_g;
			sum += this.area(geometry);
		}
		return sum;
	}
	,polygonArea: function(coords) {
		var sum = this.parea(coords[0]);
		var _g1 = 1, _g = coords.length;
		while(_g1 < _g) {
			var i = _g1++;
			sum -= this.parea(coords[i]);
		}
		return sum;
	}
	,parea: function(coords) {
		return Math.abs(new thx.geom.Polygon(coords.map(this.project.$bind(this))).area());
	}
	,project: function(d,_) {
		return this.geo.projection.project(d);
	}
	,__class__: thx.svg.AreaTypes
}
thx.svg.CentroidTypes = $hxClasses["thx.svg.CentroidTypes"] = function(geo) {
	this.geo = geo;
}
thx.svg.CentroidTypes.__name__ = ["thx","svg","CentroidTypes"];
thx.svg.CentroidTypes.prototype = {
	geo: null
	,centroid: function(geo) {
		var field = Reflect.field(this,Strings.lcfirst(geo.type));
		if(null == field) return [0.0,0.0];
		return field.apply(this,[geo]);
	}
	,point: function(o) {
		return this.project(o.coordinates);
	}
	,feature: function(f) {
		return this.centroid(f.geometry);
	}
	,polygon: function(o) {
		var centroid = this.polygonCentroid(o.coordinates);
		return [centroid[0] / centroid[2],centroid[1] / centroid[2]];
	}
	,multiPolygon: function(o) {
		var area = 0.0, x = 0.0, y = 0.0, z = 0.0, centroid, coords = o.coordinates;
		var _g = 0;
		while(_g < coords.length) {
			var coordinates = coords[_g];
			++_g;
			centroid = this.polygonCentroid(coordinates);
			x += centroid[0];
			y += centroid[1];
			z += centroid[2];
		}
		return [x / z,y / z];
	}
	,polygonCentroid: function(coordinates) {
		var polygon = new thx.geom.Polygon(coordinates[0].map(this.project.$bind(this))), centroid = polygon.centroid(1), x = centroid[0], y = centroid[1], z = Math.abs(polygon.area());
		var _g1 = 1, _g = coordinates.length;
		while(_g1 < _g) {
			var i = _g1++;
			polygon = new thx.geom.Polygon(coordinates[i].map(this.project.$bind(this)));
			centroid = polygon.centroid(1);
			x -= centroid[0];
			y -= centroid[1];
			z -= Math.abs(polygon.area());
		}
		return [x,y,6 * z];
	}
	,project: function(d,_) {
		return this.geo.projection.project(d);
	}
	,__class__: thx.svg.CentroidTypes
}
rg.svg.widget.Map = $hxClasses["rg.svg.widget.Map"] = function(container,projection) {
	var me = this;
	this.g = container.append("svg:g").attr("class").string("map");
	this.projection = projection;
	this.map = new Hash();
	this.ready = false;
	this.onReady = new hxevents.Notifier();
	this.onReady.addOnce(function() {
		me.ready = true;
	});
}
rg.svg.widget.Map.__name__ = ["rg","svg","widget","Map"];
rg.svg.widget.Map.loadJsonp = function(url,handler) {
	rg.util.Jsonp.get(url,handler,null,null,null);
}
rg.svg.widget.Map.loadJsonAjax = function(url,handler) {
	var http = new haxe.Http(url);
	http.onData = function(data) {
		var json = thx.json.Json.decode(data);
		handler(json);
	};
	http.onError = function(err) {
		throw new thx.error.Error("unable to load JSON file '{0}': {1}",[url,err],null,{ fileName : "Map.hx", lineNumber : 95, className : "rg.svg.widget.Map", methodName : "loadJsonAjax"});
	};
	http.request(false);
}
rg.svg.widget.Map.prototype = {
	className: null
	,map: null
	,onReady: null
	,click: null
	,labelDataPoint: null
	,labelDataPointOver: null
	,radius: null
	,colorMode: null
	,ready: null
	,mapping: null
	,projection: null
	,g: null
	,load: function(path,type,mappingurl,usejsonp) {
		switch(type) {
		case "geojson":
			this.loadGeoJson(path,mappingurl,usejsonp);
			break;
		default:
			new thx.error.Error("unsupported geographic format '{0}'",null,type,{ fileName : "Map.hx", lineNumber : 58, className : "rg.svg.widget.Map", methodName : "load"});
		}
	}
	,loadGeoJson: function(geourl,mappingurl,usejsonp) {
		var me = this;
		var load = usejsonp?rg.svg.widget.Map.loadJsonp:rg.svg.widget.Map.loadJsonAjax;
		if(null == mappingurl) load(geourl,this.draw.$bind(this)); else load(mappingurl,function(m) {
			me.mapping = m;
			load(geourl,me.draw.$bind(me));
		});
	}
	,draw: function(json) {
		var me = this;
		var id = null != this.mapping?function(s) {
			return Reflect.hasField(me.mapping,s)?Reflect.field(me.mapping,s):s;
		}:function(s) {
			return s;
		};
		var path = new thx.svg.PathGeoJson();
		path.setProjection(this.projection);
		switch(json.type) {
		case "FeatureCollection":
			var _g1 = 0, _g = json.features.length;
			while(_g1 < _g) {
				var i = _g1++;
				var feature = json.features[i], centroid = path.centroid(feature.geometry), p = feature.geometry.type == "Point"?this.g.append("svg:circle").attr("cx")["float"](centroid[0]).attr("cy")["float"](centroid[1]).attr("r")["float"](5):this.g.append("svg:path").attr("d").string(path.path(feature.geometry));
				var dp = { };
				dp["#centroid"] = centroid;
				dp["#data"] = feature.properties;
				if(null != feature.id) this.map.set(id(feature.id),{ svg : p, dp : dp});
				if(null != this.labelDataPointOver) p.onNode("mouseover",(function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onMouseOver.$bind(this),dp));
				if(null != this.click) p.onNode("click",(function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onClick.$bind(this),dp));
			}
			break;
		case "MultiPoint":case "MultiLineString":case "MultiPolygon":case "GeometryCollection":
			throw new thx.error.Error("the type '{0}' is not implemented yet",[json.type],null,{ fileName : "Map.hx", lineNumber : 164, className : "rg.svg.widget.Map", methodName : "draw"});
			break;
		default:
			this.g.append("svg:path").attr("d").string(path.path(json));
		}
		this.onReady.dispatch();
	}
	,onMouseOver: function(dp,_,_1) {
		this.handlerDataPointOver(dp,this.labelDataPointOver);
	}
	,onClick: function(dp,_,_1) {
		this.handlerClick(dp,this.click);
	}
	,handlerDataPointOver: null
	,handlerClick: null
	,setClassName: function(cls) {
		this.g.attr("class").string("map" + (null == cls?"":" " + cls));
		return cls;
	}
	,__class__: rg.svg.widget.Map
	,__properties__: {set_className:"setClassName"}
}
rg.visualization.VisualizationPivotTable = $hxClasses["rg.visualization.VisualizationPivotTable"] = function(container) {
	rg.visualization.VisualizationHtml.call(this,container);
}
rg.visualization.VisualizationPivotTable.__name__ = ["rg","visualization","VisualizationPivotTable"];
rg.visualization.VisualizationPivotTable.__super__ = rg.visualization.VisualizationHtml;
rg.visualization.VisualizationPivotTable.prototype = $extend(rg.visualization.VisualizationHtml.prototype,{
	info: null
	,chart: null
	,init: function() {
		var me = this;
		this.chart = new rg.html.chart.PivotTable(this.container);
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		this.chart.displayColumnTotal = this.info.displayColumnTotal;
		this.chart.displayHeatMap = this.info.displayHeatmap;
		this.chart.displayRowTotal = this.info.displayRowTotal;
		this.chart.colorStart = this.info.heatmapColorStart;
		this.chart.colorEnd = this.info.heatmapColorEnd;
		if(null != this.info.click) this.chart.click = this.info.click;
		if(null != this.info.label.datapoint) this.chart.labelDataPoint = this.info.label.datapoint;
		if(null != this.info.label.datapointover) this.chart.labelDataPointOver = this.info.label.datapointover;
		if(null != this.info.label.axis) this.chart.labelAxis = this.info.label.axis;
		if(null != this.info.label.axisvalue) this.chart.labelAxisValue = this.info.label.axisvalue;
		if(null != this.info.label.total) this.chart.labelTotal = this.info.label.total;
		if(null != this.info.label.totalover) this.chart.labelTotalOver = this.info.label.totalover;
		this.chart.incolumns = Ints.min(this.info.columnAxes,this.independentVariables.length);
		this.chart.init();
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables);
		this.chart.data(data);
	}
	,destroy: function() {
		this.chart.destroy();
	}
	,__class__: rg.visualization.VisualizationPivotTable
});
thx.geom.layout.Stack = $hxClasses["thx.geom.layout.Stack"] = function() {
	this._order = thx.geom.layout.StackOrder.DefaultOrder;
	this._offset = thx.geom.layout.StackOffset.ZeroOffset;
}
thx.geom.layout.Stack.__name__ = ["thx","geom","layout","Stack"];
thx.geom.layout.Stack.getStackOrder = function(order,data) {
	switch( (order)[1] ) {
	case 0:
		return Ints.range(data.length);
	case 1:
		var n = data.length, max = data.map(thx.geom.layout.Stack.stackMaxIndex), sums = data.map(thx.geom.layout.Stack.stackReduceSum), index = Ints.range(n), top = 0.0, bottom = 0.0, tops = [], bottoms = [];
		index.sort(function(a,b) {
			return max[a] - max[b];
		});
		var _g = 0;
		while(_g < n) {
			var i = _g++;
			var j = index[i];
			if(top < bottom) {
				top += sums[j];
				tops.push(j);
			} else {
				bottom += sums[j];
				bottoms.push(j);
			}
		}
		bottoms.reverse();
		return bottoms.concat(tops);
	case 2:
		var index = Ints.range(data.length);
		index.reverse();
		return index;
	}
}
thx.geom.layout.Stack.getStackOffset = function(offset,index,data) {
	switch( (offset)[1] ) {
	case 0:
		var n = data.length, m = data[0].length, sums = [], max = 0.0, o;
		var _g = 0;
		while(_g < m) {
			var j = _g++;
			o = 0.0;
			var _g1 = 0;
			while(_g1 < n) {
				var i = _g1++;
				o += data[i][j].y;
			}
			if(o > max) max = o;
			sums.push(o);
		}
		var i = index[0];
		var _g = 0;
		while(_g < m) {
			var j = _g++;
			data[i][j].y0 = (max - sums[j]) / 2;
		}
		break;
	case 1:
		var n = data.length, x = data[0], m = x.length, max = 0.0, k, ii, ik, i0 = index[0], s1, s2, s3, dx, o, o0;
		data[i0][0].y0 = o = o0 = 0.0;
		var _g = 1;
		while(_g < m) {
			var j = _g++;
			s1 = 0.0;
			var _g1 = 0;
			while(_g1 < n) {
				var i = _g1++;
				s1 += data[i][j].y;
			}
			s2 = 0.0;
			dx = x[j].x - x[j - 1].x;
			var _g1 = 0;
			while(_g1 < n) {
				var i = _g1++;
				ii = index[i];
				s3 = (data[ii][j].y - data[ii][j - 1].y) / (2 * dx);
				var _g2 = 0;
				while(_g2 < i) {
					var k1 = _g2++;
					s3 += (data[ik = index[k1]][j].y - data[ik][j - 1].y) / dx;
				}
				s2 += s3 * data[ii][j].y;
			}
			data[i0][j].y0 = o -= s1 != 0?s2 / s1 * dx:0;
			if(o < o0) o0 = o;
		}
		var _g = 0;
		while(_g < m) {
			var j = _g++;
			data[i0][j].y0 -= o0;
		}
		break;
	case 2:
		var m = data[0].length, i0 = index[0];
		var _g = 0;
		while(_g < m) {
			var j = _g++;
			data[i0][j].y0 = 0.0;
		}
		break;
	}
}
thx.geom.layout.Stack.stackMaxIndex = function(data,_) {
	var j = 0, v = data[0].y, k, n = data.length;
	var _g = 1;
	while(_g < n) {
		var i = _g++;
		if((k = data[i].y) > v) {
			j = i;
			v = k;
		}
	}
	return j;
}
thx.geom.layout.Stack.stackReduceSum = function(data,_) {
	return data.reduce(thx.geom.layout.Stack.stackSum,0.0);
}
thx.geom.layout.Stack.stackSum = function(p,c,i) {
	return p + c.y;
}
thx.geom.layout.Stack.prototype = {
	_order: null
	,_offset: null
	,stack: function(data) {
		var n = data.length, m = data[0].length, i, j, y0, result = [];
		var _g = 0;
		while(_g < n) {
			var i1 = _g++;
			var r = [];
			result.push(r);
			var _g1 = 0;
			while(_g1 < m) {
				var j1 = _g1++;
				var s = data[i1][j1];
				r[j1] = { x : s.x, y : s.y, y0 : 0.0};
			}
		}
		var index = thx.geom.layout.Stack.getStackOrder(this._order,result);
		thx.geom.layout.Stack.getStackOffset(this._offset,index,result);
		var _g = 0;
		while(_g < m) {
			var j1 = _g++;
			y0 = result[index[0]][j1].y0;
			var _g1 = 1;
			while(_g1 < n) {
				var i1 = _g1++;
				result[index[i1]][j1].y0 = y0 += result[index[i1 - 1]][j1].y;
			}
		}
		return result;
	}
	,getOrder: function() {
		return this._order;
	}
	,order: function(x) {
		this._order = x;
		return this;
	}
	,getOffset: function() {
		return this._offset;
	}
	,offset: function(x) {
		this._offset = x;
		return this;
	}
	,__class__: thx.geom.layout.Stack
}
thx.geom.layout.StackOrder = $hxClasses["thx.geom.layout.StackOrder"] = { __ename__ : ["thx","geom","layout","StackOrder"], __constructs__ : ["DefaultOrder","InsideOut","ReverseOrder"] }
thx.geom.layout.StackOrder.DefaultOrder = ["DefaultOrder",0];
thx.geom.layout.StackOrder.DefaultOrder.toString = $estr;
thx.geom.layout.StackOrder.DefaultOrder.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOrder.InsideOut = ["InsideOut",1];
thx.geom.layout.StackOrder.InsideOut.toString = $estr;
thx.geom.layout.StackOrder.InsideOut.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOrder.ReverseOrder = ["ReverseOrder",2];
thx.geom.layout.StackOrder.ReverseOrder.toString = $estr;
thx.geom.layout.StackOrder.ReverseOrder.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOffset = $hxClasses["thx.geom.layout.StackOffset"] = { __ename__ : ["thx","geom","layout","StackOffset"], __constructs__ : ["Silhouette","Wiggle","ZeroOffset"] }
thx.geom.layout.StackOffset.Silhouette = ["Silhouette",0];
thx.geom.layout.StackOffset.Silhouette.toString = $estr;
thx.geom.layout.StackOffset.Silhouette.__enum__ = thx.geom.layout.StackOffset;
thx.geom.layout.StackOffset.Wiggle = ["Wiggle",1];
thx.geom.layout.StackOffset.Wiggle.toString = $estr;
thx.geom.layout.StackOffset.Wiggle.__enum__ = thx.geom.layout.StackOffset;
thx.geom.layout.StackOffset.ZeroOffset = ["ZeroOffset",2];
thx.geom.layout.StackOffset.ZeroOffset.toString = $estr;
thx.geom.layout.StackOffset.ZeroOffset.__enum__ = thx.geom.layout.StackOffset;
rg.svg.chart.Sankey = $hxClasses["rg.svg.chart.Sankey"] = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
	this.addClass("sankey");
	this.layerWidth = 61;
	this.nodeSpacing = 28;
	this.dummySpacing = 18;
	this.extraWidth = 28;
	this.backEdgeSpacing = 4.0;
	this.extraHeight = 5;
	this.extraRadius = 5;
	this.imageWidth = 60;
	this.imageHeight = 48;
	this.imageSpacing = 0;
	this.labelNodeSpacing = 4;
	this.styleNode = "0";
	this.styleExtraIn = "4";
	this.styleExtraOut = "6";
	this.styleEdgeBackward = "3";
	this.styleEdgeForward = "0";
}
rg.svg.chart.Sankey.__name__ = ["rg","svg","chart","Sankey"];
rg.svg.chart.Sankey.__super__ = rg.svg.chart.Chart;
rg.svg.chart.Sankey.prototype = $extend(rg.svg.chart.Chart.prototype,{
	layerWidth: null
	,nodeSpacing: null
	,dummySpacing: null
	,extraWidth: null
	,backEdgeSpacing: null
	,extraHeight: null
	,extraRadius: null
	,imageWidth: null
	,imageHeight: null
	,imageSpacing: null
	,labelNodeSpacing: null
	,labelEdge: null
	,labelEdgeOver: null
	,labelNode: null
	,imagePath: null
	,clickEdge: null
	,layout: null
	,maxweight: null
	,availableheight: null
	,padBefore: null
	,padAfter: null
	,layerstarty: null
	,styleNode: null
	,styleExtraIn: null
	,styleExtraOut: null
	,styleEdgeBackward: null
	,styleEdgeForward: null
	,dependentVariable: null
	,mapelements: null
	,maphi: null
	,setVariables: function(variableIndependents,variableDependents,data) {
		this.dependentVariable = variableDependents[0];
	}
	,data: function(graphlayout) {
		var me = this;
		this.layout = graphlayout.clone();
		var nodes = Arrays.filter(Iterators.filter(this.layout.graph.nodes.iterator(),function(node) {
			return me.isdummy(node);
		}),function(node) {
			var edge = node.graph.edges.positives(node).next(), cellhead = me.layout.cell(edge.head), celltail = me.layout.cell(edge.tail);
			return celltail.layer > cellhead.layer;
		});
		var layers = this.layout.layers();
		var _g = 0;
		while(_g < nodes.length) {
			var node = nodes[_g];
			++_g;
			var cell = this.layout.cell(node), ehead = node.graph.edges.positives(node).next(), etail = node.graph.edges.negatives(node).next();
			layers[cell.layer].splice(cell.position,1);
			this.layout.graph.edges.create(etail.tail,ehead.head,ehead.weight,ehead.data);
			node.graph.nodes._remove(node);
		}
		this.redraw();
	}
	,redraw: function() {
		var me = this;
		this.mapelements = new Hash();
		this.maphi = new Hash();
		this.maxweight = 0;
		this.layerstarty = [];
		var _g1 = 0, _g = this.layout.length;
		while(_g1 < _g) {
			var i = _g1++;
			var v = this.layout.layer(i).reduce(function(cum,cur,_) {
				return cum + cur.data.weight;
			},0);
			if(v > this.maxweight) this.maxweight = v;
		}
		var occupiedspace = 0.0;
		var _g1 = 0, _g = this.layout.length;
		while(_g1 < _g) {
			var i = _g1++;
			var v = this.layout.layer(i).reduce(function(cum,cur,_) {
				return cum + me.nodepadding(cur);
			},0.0);
			if(v > occupiedspace) occupiedspace = v;
		}
		this.availableheight = this.height - occupiedspace;
		var $it0 = this.layout.graph.edges.collection.iterator();
		while( $it0.hasNext() ) {
			var edge = $it0.next();
			if(this.layout.cell(edge.tail).layer < this.layout.cell(edge.head).layer) continue;
			this.availableheight -= this.backEdgeSpacing;
			this.maxweight += edge.weight;
		}
		this.availableheight -= this.extraRadius + this.extraHeight;
		var backedgesy = 0.0;
		var _g1 = 0, _g = this.layout.length;
		while(_g1 < _g) {
			var i = _g1++;
			var layer = this.layout.layer(i), t = 0.0;
			var _g2 = 0;
			while(_g2 < layer.length) {
				var node = layer[_g2];
				++_g2;
				t += this.nodepadding(node) + this.nheight(node.data.weight);
			}
			this.layerstarty[i] = t;
			if(t > backedgesy) backedgesy = t;
		}
		var _g1 = 0, _g = this.layerstarty.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.layerstarty[i] = (backedgesy - this.layerstarty[i]) / 2;
		}
		backedgesy += this.extraRadius + this.extraHeight;
		this.padBefore = 0.0;
		var _g = 0, _g1 = this.layout.layer(0);
		while(_g < _g1.length) {
			var node = _g1[_g];
			++_g;
			var extra = Math.min(this.nheight(node.data.extrain),this.extraWidth);
			var $it1 = node.graph.edges.negatives(node);
			while( $it1.hasNext() ) {
				var edge = $it1.next();
				var tail = edge.tail, parentweight = this.hafter(edge.id,node.graph.edges.negatives(node)) + this.nheight(edge.weight);
				if(parentweight > extra) extra = parentweight;
			}
			if(extra > this.padBefore) this.padBefore = extra;
		}
		this.padBefore += 2;
		this.padAfter = 0.0;
		var _g = 0, _g1 = this.layout.layer(this.layout.length - 1);
		while(_g < _g1.length) {
			var node = _g1[_g];
			++_g;
			var extra = Math.min(this.nheight(node.data.extraout),this.extraWidth);
			var $it2 = node.graph.edges.positives(node);
			while( $it2.hasNext() ) {
				var edge = $it2.next();
				var head = edge.head, childweight = this.hafter(edge.id,node.graph.edges.positives(node)) + this.nheight(edge.weight) + Math.min(this.nheight(node.data.extraout),this.extraWidth);
				if(childweight > extra) extra = childweight;
			}
			if(extra > this.padAfter) this.padAfter = extra;
		}
		this.padAfter += 2;
		var edgescontainer = this.g.select("g.edges");
		if(edgescontainer.empty()) edgescontainer = this.g.append("svg:g").attr("class").string("edges"); else edgescontainer.selectAll("*").remove();
		var edges = Arrays.order(Iterators.array(this.layout.graph.edges.iterator()),function(ea,eb) {
			var lena = me.layout.cell(ea.tail).layer - me.layout.cell(ea.head).layer, lenb = me.layout.cell(eb.tail).layer - me.layout.cell(eb.head).layer, comp = lenb - lena;
			if(comp != 0) return comp; else return Floats.compare(eb.weight,ea.weight);
		});
		edges.forEach(function(edge,_) {
			if(edge.weight <= 0) return;
			var cellhead = me.layout.cell(edge.head), celltail = me.layout.cell(edge.tail);
			if(cellhead.layer > celltail.layer) return;
			var weight = me.nheight(edge.weight), hook = new rg.svg.widget.HookConnectorArea(edgescontainer,"fill fill-" + me.styleEdgeBackward,"stroke stroke-" + me.styleEdgeBackward), before = me.hafter(edge.id,edge.tail.positives()) + Math.min(me.extraWidth,me.nheight(edge.tail.data.extraout)), after = me.hafter(edge.id,edge.head.negatives()), x1 = me.layerWidth / 2 + me.xlayer(celltail.layer), x2 = -me.layerWidth / 2 + me.xlayer(cellhead.layer), y1 = me.ynode(edge.tail) + me.ydiagonal(edge.id,edge.tail.positives()), y2 = me.nheight(edge.head.data.extrain) + me.ynode(edge.head) + me.ydiagonal(edge.id,edge.head.negatives());
			me.addToMap(edge.id,"edge",hook.g);
			hook.update(x1,y1,x2,y2,weight,backedgesy,before,after);
			hook.g.onNode("mouseover",(function(f,a1,a2,a3) {
				return function(a4,a5) {
					return f(a1,a2,a3,a4,a5);
				};
			})(me.onmouseoveredge.$bind(me),(x1 + x2) / 2,backedgesy + weight / 2,edge));
			if(null != me.clickEdge) hook.g.onNode("click",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(me.edgeClickWithEdge.$bind(me),edge));
			backedgesy += weight + me.backEdgeSpacing;
		});
		edges.forEach(function(edge,_) {
			if(edge.weight <= 0) return;
			var head = edge.head, tail = edge.tail, cellhead = me.layout.cell(head), celltail = me.layout.cell(tail);
			if(cellhead.layer <= celltail.layer) return;
			var x1 = Math.round(me.layerWidth / 2 + me.xlayer(celltail.layer)) - .5, x2 = Math.round(-me.layerWidth / 2 + me.xlayer(cellhead.layer)) - .5, y1 = me.ynode(tail) + me.ydiagonal(edge.id,tail.graph.edges.positives(tail)), y2 = me.ynode(head) + me.nheight(head.data.extrain) + me.ydiagonal(edge.id,head.graph.edges.negatives(head)), weight = me.nheight(edge.weight), diagonal = new rg.svg.widget.DiagonalArea(edgescontainer,"fill fill-" + me.styleEdgeForward,"stroke stroke-" + me.styleEdgeForward);
			diagonal.update(x1,y1,x2,y2,weight,weight);
			me.addToMap(edge.id,"edge",diagonal.g);
			diagonal.g.onNode("mouseover",(function(f,a1,a2,a3) {
				return function(a4,a5) {
					return f(a1,a2,a3,a4,a5);
				};
			})(me.onmouseoveredge.$bind(me),(x1 + x2) / 2,(y1 + y2 + weight) / 2,edge));
			if(null != me.clickEdge) diagonal.g.onNode("click",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(me.edgeClickWithEdge.$bind(me),edge));
		});
		var normMin = function(v) {
			return Math.max(0,Math.min(v - 3,me.extraRadius));
		};
		this.layout.each(function(cell,node) {
			if(node.data.extraout <= 0 || me.extraWidth <= 0) return;
			var elbow = new rg.svg.widget.ElbowArea(edgescontainer,"fill fill-" + me.styleExtraOut,"stroke stroke-" + me.styleExtraOut), extra = me.nheight(node.data.extraout), x = me.layerWidth / 2 + me.xlayer(cell.layer), y = me.ynode(node) + me.ydiagonal(null,node.graph.edges.positives(node)), minr = normMin(extra);
			elbow.update(rg.svg.widget.Orientation.RightBottom,extra,x,y + extra,minr,me.extraWidth,0,me.extraHeight);
			if(null != me.labelEdge) {
				var label, text = me.labelEdge({ tail : node, head : null, nodeweight : node.data.weight, edgeweight : node.data.extraout},me.dependentVariable.stats), nodeSpacing = 0;
				label = new rg.svg.widget.Label(edgescontainer,true,true,false);
				label.addClass("edge");
				label.place(x,y + extra / 2,0);
				label.setAnchor(rg.svg.widget.GridAnchor.Left);
				label.setText(text);
				if(label.getSize().height > extra * .75) label.destroy();
			}
			elbow.g.onNode("mouseover",(function(f,a1,a2,a3) {
				return function(a4,a5) {
					return f(a1,a2,a3,a4,a5);
				};
			})(me.onmouseoverextraout.$bind(me),x + minr + (-minr + Math.min(me.extraWidth,extra)) / 2,me.ynode(node) + me.hnode(node) + minr + me.extraHeight,node));
			if(null != me.clickEdge) elbow.g.onNode("click",(function(f,a1,a2) {
				return function(a3,a4) {
					return f(a1,a2,a3,a4);
				};
			})(me.edgeClickWithNode.$bind(me),node,true));
			me.addToMap(node.id,"extraout",elbow.g);
		});
		this.layout.each(function(cell,node) {
			if(node.data.extrain <= 0 || me.extraWidth <= 0) return;
			var elbow = new rg.svg.widget.ElbowArea(edgescontainer,"fill fill-" + me.styleExtraIn,"stroke stroke-" + me.styleExtraIn), extra = me.nheight(node.data.extrain), minr = normMin(extra), x = -me.layerWidth / 2 + me.xlayer(cell.layer);
			elbow.update(rg.svg.widget.Orientation.LeftTop,extra,x,me.ynode(node),minr,me.extraWidth,0,me.extraHeight);
			if(null != me.labelEdge) {
				var label, text = me.labelEdge({ head : null, tail : node, nodeweight : node.data.weight, edgeweight : node.data.extrain},me.dependentVariable.stats), nodeSpacing = 0;
				label = new rg.svg.widget.Label(edgescontainer,true,true,false);
				label.addClass("edge");
				label.place(x,me.ynode(node) + extra / 2,0);
				label.setAnchor(rg.svg.widget.GridAnchor.Right);
				label.setText(text);
				if(label.getSize().height > extra * .75) label.destroy();
			}
			elbow.g.onNode("mouseover",(function(f,a1,a2,a3) {
				return function(a4,a5) {
					return f(a1,a2,a3,a4,a5);
				};
			})(me.onmouseoverextrain.$bind(me),x - minr + (minr - Math.min(me.extraWidth,extra)) / 2,me.ynode(node) - minr - me.extraHeight,node));
			if(null != me.clickEdge) elbow.g.onNode("click",(function(f,a1,a2) {
				return function(a3,a4) {
					return f(a1,a2,a3,a4);
				};
			})(me.edgeClickWithNode.$bind(me),node,false));
			me.addToMap(node.id,"extrain",elbow.g);
		});
		if(null != this.labelEdge) edges.forEach(function(edge,_) {
			if(edge.weight <= 0) return;
			var tail = edge.tail;
			if(me.isdummy(tail)) return;
			var celltail = me.layout.cell(tail), weight = me.nheight(edge.weight), label, text = me.labelEdge(me.edgeData(edge),me.dependentVariable.stats), nodeSpacing = 2;
			label = new rg.svg.widget.Label(edgescontainer,true,true,false);
			label.addClass("edge");
			label.place(me.layerWidth / 2 + me.xlayer(celltail.layer) + nodeSpacing,me.ynode(tail) + me.ydiagonal(edge.id,tail.graph.edges.positives(tail)) + weight / 2,0);
			label.setAnchor(rg.svg.widget.GridAnchor.Left);
			label.setText(text);
			if(label.getSize().height > weight * .75) label.destroy();
		});
		var rules = this.g.selectAll("g.layer").data(this.layout.layers()).enter().append("svg:g").attr("class").string("layer").append("svg:line").attr("class").stringf(function(_,i) {
			return "rule rule-" + i;
		}).attr("x1")["float"](0).attr("x2")["float"](0).attr("y1")["float"](0).attr("y2")["float"](this.height).update().attr("transform").stringf(function(_,i) {
			return "translate(" + me.xlayer(i) + ",0)";
		}).exit().remove();
		var choice = rules.update().selectAll("g.node").dataf(function(d,i) {
			return me.layout.layer(i);
		});
		var cont = choice.enter().append("svg:g").attr("class").string("node");
		if(this.layerWidth > 0) {
			cont.append("svg:rect").attr("class").stringf(function(n,_) {
				return "fill fill-" + (me.isdummy(n)?me.styleEdgeForward + " nonode":me.styleNode + " node");
			}).attr("x")["float"](-this.layerWidth / 2).attr("y")["float"](0).attr("width")["float"](Math.round(this.layerWidth)).attr("height").floatf(this.hnode.$bind(this));
			cont.each(function(node,_) {
				me.addToMap(node.id,"node",thx.js.Dom.selectNode(thx.js.Group.current));
			});
			cont.append("svg:line").attr("class").stringf(function(n,_) {
				return "node stroke stroke-" + (me.isdummy(n)?me.styleEdgeForward:me.styleNode);
			}).attr("x1")["float"](-this.layerWidth / 2).attr("y1")["float"](0).attr("x2")["float"](this.layerWidth / 2).attr("y2")["float"](0);
			cont.append("svg:line").attr("class").stringf(function(n,_) {
				return "node stroke stroke-" + (me.isdummy(n)?me.styleEdgeForward:me.styleNode);
			}).attr("x1")["float"](-this.layerWidth / 2).attr("y1").floatf(this.hnode.$bind(this)).attr("x2")["float"](this.layerWidth / 2).attr("y2").floatf(this.hnode.$bind(this));
		}
		choice.update().attr("transform").stringf(function(n,i) {
			return "translate(0," + me.ynode(n) + ")";
		});
		cont.each(function(n,i) {
			var node = thx.js.Dom.selectNode(thx.js.Group.current);
			if(me.isdummy(n)) return;
			var nodeheight = me.hnode(n), label;
			if(null != me.labelDataPoint) {
				var lines = me.labelDataPoint(n.data.dp,me.dependentVariable.stats).split("\n"), nodeSpacing = 3, prev = null, text, pos = 0.0;
				var _g1 = 0, _g = lines.length;
				while(_g1 < _g) {
					var i1 = _g1++;
					text = lines[i1];
					label = new rg.svg.widget.Label(node,true,true,false);
					label.addClass("node");
					if(i1 == 0) label.addClass("first");
					pos = nodeSpacing;
					if(null != prev) pos += prev.y + prev.getSize().height;
					label.place(-me.layerWidth / 2 + nodeSpacing * 2,pos,0);
					label.setAnchor(rg.svg.widget.GridAnchor.TopLeft);
					label.setText(text);
					if(label.y + label.getSize().height > nodeheight) {
						label.destroy();
						break;
					}
					prev = label;
				}
			}
			var hasimage = false;
			if(null != me.imagePath && !me.isdummy(n)) {
				var path = me.imagePath(n.data.dp);
				if(path != null) {
					hasimage = true;
					var container = node.append("svg:g").attr("transform").string("translate(" + Math.round(-me.imageWidth / 2) + "," + Math.round(-me.imageHeight - me.imageSpacing) + ")");
					container.append("svg:image").attr("preserveAspectRatio").string("xMidYMid slice").attr("width")["float"](me.imageWidth).attr("height")["float"](me.imageHeight).attr("xlink:href").string(path);
				}
			}
			if(null != me.labelNode) {
				if(hasimage) label = new rg.svg.widget.Label(node,true,true,true); else label = new rg.svg.widget.Label(node,true,false,false);
				label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
				label.place(0,-me.labelNodeSpacing,0);
				label.setText(me.labelNode(n.data.dp,me.dependentVariable.stats));
			}
		});
		cont.each(function(n,i) {
			var node = thx.js.Dom.selectNode(thx.js.Group.current);
			node.onNode("mouseover",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(me.onmouseovernode.$bind(me),n));
			if(null != me.click) node.onNode("click",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})(me.nodeclick.$bind(me),n));
		});
		this.ready.dispatch();
	}
	,addToMap: function(id,type,el) {
		this.mapelements.set(type + ":" + id,el);
	}
	,isbackward: function(edge) {
		return this.layout.cell(edge.head).layer <= this.layout.cell(edge.tail).layer;
	}
	,highlight: function(id,type) {
		var me = this;
		var $it0 = this.maphi.iterator();
		while( $it0.hasNext() ) {
			var el = $it0.next();
			el.classed().remove("over");
		}
		this.maphi = new Hash();
		var hiedgep = null, hinodep = null, hiedgen = null, hinoden = null;
		var hielement = function(id1,type1) {
			var key = type1 + ":" + id1;
			me.maphi.set(key,me.mapelements.get(key).classed().add("over"));
		};
		var hiextrain = function(id1) {
			var key = "extrain:" + id1, extra = me.mapelements.get(key);
			if(null == extra) return;
			me.maphi.set(key,extra.classed().add("over"));
		};
		var hiextraout = function(id1) {
			var key = "extraout:" + id1, extra = me.mapelements.get(key);
			if(null == extra) return;
			me.maphi.set(key,extra.classed().add("over"));
		};
		var ishi = function(id1,type1) {
			return me.maphi.exists(type1 + ":" + id1);
		};
		hiedgep = function(edge) {
			if(ishi(edge.id,"edge")) return;
			hielement(edge.id,"edge");
			if(!me.isbackward(edge)) hinodep(edge.head);
		};
		hinodep = function(node) {
			if(ishi(node.id,"node")) return;
			hielement(node.id,"node");
			hiextraout(node.id);
			var $it1 = node.graph.edges.positives(node);
			while( $it1.hasNext() ) {
				var edge = $it1.next();
				hiedgep(edge);
			}
		};
		hiedgen = function(edge) {
			if(!me.isbackward(edge)) hinoden(edge.tail);
			if(ishi(edge.id,"edge")) return;
			if(!me.isbackward(edge)) hielement(edge.id,"edge");
		};
		hinoden = function(node) {
			var $it2 = node.graph.edges.negatives(node);
			while( $it2.hasNext() ) {
				var edge = $it2.next();
				hiedgen(edge);
			}
			if(ishi(node.id,"node")) return;
			hielement(node.id,"node");
			hiextrain(node.id);
		};
		if(type == "edge") {
			hiedgep(this.layout.graph.edges.get(id));
			hiedgen(this.layout.graph.edges.get(id));
		} else if(type == "node") {
			hinodep(this.layout.graph.nodes.get(id));
			hinoden(this.layout.graph.nodes.get(id));
			hiextrain(id);
		}
	}
	,edgeData: function(edge) {
		var head = edge.head, tail = edge.tail;
		while(this.isdummy(head)) head = head.graph.edges.positives(head).next().head;
		while(this.isdummy(tail)) tail = tail.graph.edges.negatives(tail).next().tail;
		return { head : head.data.dp, tail : tail.data.dp, edgeweight : edge.weight, nodeweight : tail.data.weight};
	}
	,edgeDataWithNode: function(node,out) {
		return { tail : out?node.data.dp:null, head : out?null:node.data.dp, edgeweight : out?node.data.extraout:node.data.extrain, nodeweight : node.data.weight};
	}
	,nodeclick: function(node,el,i) {
		this.click(node.data.dp,this.dependentVariable.stats);
	}
	,edgeclick: function(data,el,i) {
		this.clickEdge(data,this.dependentVariable.stats);
	}
	,edgeClickWithEdge: function(edge,el,i) {
		this.edgeclick(this.edgeData(edge),el,i);
	}
	,edgeClickWithNode: function(node,out,el,i) {
		this.edgeclick(this.edgeDataWithNode(node,out),el,i);
	}
	,onmouseovernode: function(node,el,i) {
		this.highlight(node.id,"node");
		if(this.isdummy(node)) {
			if(null == this.labelEdgeOver) return;
			var text = this.labelEdgeOver(this.edgeData(node.graph.edges.positives(node).next()),this.dependentVariable.stats);
			if(null == text) this.tooltip.hide(); else {
				var cell = this.layout.cell(node);
				this.tooltip.anchor("top");
				this.tooltip.html(text.split("\n").join("<br>"));
				this.moveTooltip(this.xlayer(cell.layer),this.ynode(node) + this.hnode(node) / 2);
			}
		} else {
			if(null == this.labelDataPointOver) return;
			var text = this.labelDataPointOver(node.data.dp,this.dependentVariable.stats);
			if(null == text) this.tooltip.hide(); else {
				var cell = this.layout.cell(node);
				this.tooltip.anchor("bottom");
				this.tooltip.html(text.split("\n").join("<br>"));
				this.moveTooltip(this.xlayer(cell.layer),this.ynode(node) + this.hnode(node) / 2);
			}
		}
	}
	,onmouseoveredge: function(x,y,edge,el,i) {
		this.highlight(edge.id,"edge");
		if(null == this.labelEdgeOver) return;
		var text = this.labelEdgeOver(this.edgeData(edge),this.dependentVariable.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.anchor("bottom");
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(x,y);
		}
	}
	,onmouseoverextrain: function(x,y,node,el,i) {
		this.highlight(node.id,"node");
		if(null == this.labelEdgeOver) return;
		var text = this.labelEdgeOver(this.edgeDataWithNode(node,false),this.dependentVariable.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.anchor("bottom");
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(x,y);
		}
	}
	,onmouseoverextraout: function(x,y,node,el,i) {
		this.highlight(node.id,"node");
		if(null == this.labelEdgeOver) return;
		var text = this.labelEdgeOver(this.edgeDataWithNode(node,true),this.dependentVariable.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.anchor("top");
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(x,y);
		}
	}
	,nheight: function(v) {
		return Math.round(v / this.maxweight * this.availableheight);
	}
	,ydiagonal: function(id,edges) {
		var weight = 0.0;
		while( edges.hasNext() ) {
			var edge = edges.next();
			if(edge.id == id) break;
			weight += edge.weight;
		}
		return this.nheight(weight);
	}
	,hafter: function(id,edges) {
		var found = false, pad = this.backEdgeSpacing / this.nheight(1), weight = pad;
		while( edges.hasNext() ) {
			var edge = edges.next();
			if(!found) {
				if(edge.id == id) found = true;
				continue;
			}
			weight += edge.weight + pad;
		}
		return this.nheight(weight);
	}
	,xlayer: function(pos,_) {
		if(this.layout.length <= 1) return this.width / 2;
		return Math.round((this.width - this.padBefore - this.padAfter - this.layerWidth) / (this.layout.length - 1) * pos + this.layerWidth / 2 + this.padBefore);
	}
	,ynode: function(node,_) {
		var cell = this.layout.cell(node), before = this.layerstarty[cell.layer];
		var _g1 = 0, _g = cell.position;
		while(_g1 < _g) {
			var i = _g1++;
			var prev = this.layout.nodeAt(cell.layer,i);
			before += this.hnode(prev) + this.nodepadding(prev);
		}
		before += this.nodepadding(node);
		return Math.round(before) + 0.5;
	}
	,nodepadding: function(node) {
		return this.isdummy(node)?this.dummySpacing:this.nodeSpacing;
	}
	,isdummy: function(node) {
		return node.data.id.substr(0,1) == "#";
	}
	,hnode: function(node,_) {
		return this.nheight(node.data.weight);
	}
	,__class__: rg.svg.chart.Sankey
});
rg.svg.panel.Panel = $hxClasses["rg.svg.panel.Panel"] = function(frame) {
	this.frame = frame;
	frame.change = this.reframe.$bind(this);
	this._layers = [];
}
rg.svg.panel.Panel.__name__ = ["rg","svg","panel","Panel"];
rg.svg.panel.Panel.prototype = {
	frame: null
	,g: null
	,parent: null
	,_layers: null
	,addLayer: function(layer) {
		this._layers.remove(layer);
		this._layers.push(layer);
	}
	,removeLayer: function(layer) {
		this._layers.remove(layer);
	}
	,setParent: function(container) {
		if(null != this.g) this.g.remove();
		this.parent = container;
		if(null == container) return;
		this.init(container.g);
	}
	,init: function(container) {
		this.g = container.append("svg:g").attr("class").string("panel").attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")");
	}
	,reframe: function() {
		this.g.attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")");
		var layer;
		var _g1 = 0, _g = this._layers.length;
		while(_g1 < _g) {
			var i = _g1++;
			layer = this._layers[i];
			layer._resize();
		}
	}
	,__class__: rg.svg.panel.Panel
}
rg.svg.panel.Container = $hxClasses["rg.svg.panel.Container"] = function(frame,orientation) {
	rg.svg.panel.Panel.call(this,frame);
	this.stack = new rg.frame.Stack(frame.width,frame.height,orientation);
	this.panels = [];
}
rg.svg.panel.Container.__name__ = ["rg","svg","panel","Container"];
rg.svg.panel.Container.__super__ = rg.svg.panel.Panel;
rg.svg.panel.Container.prototype = $extend(rg.svg.panel.Panel.prototype,{
	stack: null
	,panels: null
	,insertPanel: function(pos,panel) {
		if(null == panel) return this;
		if(pos >= this.stack.getLength()) return this.addPanel(panel); else if(pos < 0) pos = 0;
		if(null != panel.parent) panel.parent.removePanel(panel);
		this.panels.insert(pos,panel);
		var f = panel;
		f.setParent(this);
		this.stack.insertItem(pos,(function($this) {
			var $r;
			var $t = panel.frame;
			if(Std["is"]($t,rg.frame.StackItem)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		return this;
	}
	,addPanel: function(panel) {
		return this.addPanels([panel]);
	}
	,addPanels: function(it) {
		var frames = [];
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var panel = $it0.next();
			if(null == panel) continue;
			if(null != panel.parent) panel.parent.removePanel(panel);
			this.panels.push(panel);
			var f = panel;
			f.setParent(this);
			frames.push((function($this) {
				var $r;
				var $t = panel.frame;
				if(Std["is"]($t,rg.frame.StackItem)) $t; else throw "Class cast error";
				$r = $t;
				return $r;
			}(this)));
		}
		this.stack.addItems(frames);
		return this;
	}
	,removePanel: function(panel) {
		if(!this.panels.remove(panel)) return this;
		this.stack.removeChild((function($this) {
			var $r;
			var $t = panel.frame;
			if(Std["is"]($t,rg.frame.StackItem)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
		var f = panel;
		f.setParent(null);
		return this;
	}
	,createPanel: function(layout) {
		var panel = new rg.svg.panel.Panel(new rg.frame.StackItem(layout));
		this.addPanel(panel);
		return panel;
	}
	,createContainer: function(layout,orientation) {
		var panel = new rg.svg.panel.Container(new rg.frame.StackItem(layout),orientation);
		this.addPanel(panel);
		return panel;
	}
	,createPanelAt: function(pos,layout) {
		var panel = new rg.svg.panel.Panel(new rg.frame.StackItem(layout));
		this.insertPanel(pos,panel);
		return panel;
	}
	,createContainerAt: function(pos,layout,orientation) {
		var panel = new rg.svg.panel.Container(new rg.frame.StackItem(layout),orientation);
		this.insertPanel(pos,panel);
		return panel;
	}
	,reframe: function() {
		rg.svg.panel.Panel.prototype.reframe.call(this);
		this.stack.setSize(this.frame.width,this.frame.height);
		this.stack.reflow();
	}
	,__class__: rg.svg.panel.Container
});
rg.graph.GraphElement = $hxClasses["rg.graph.GraphElement"] = function(graph,id,data) {
	this.id = id;
	this.data = data;
	this.graph = graph;
}
rg.graph.GraphElement.__name__ = ["rg","graph","GraphElement"];
rg.graph.GraphElement.friendDestroy = function(item) {
	return item;
}
rg.graph.GraphElement.prototype = {
	graph: null
	,id: null
	,data: null
	,destroy: function() {
		this.graph = null;
		this.id = -1;
	}
	,destroyed: function() {
		return null == this.graph;
	}
	,__class__: rg.graph.GraphElement
}
rg.visualization.VisualizationGeo = $hxClasses["rg.visualization.VisualizationGeo"] = function(layout) {
	rg.visualization.VisualizationSvg.call(this,layout);
}
rg.visualization.VisualizationGeo.__name__ = ["rg","visualization","VisualizationGeo"];
rg.visualization.VisualizationGeo.__super__ = rg.visualization.VisualizationSvg;
rg.visualization.VisualizationGeo.prototype = $extend(rg.visualization.VisualizationSvg.prototype,{
	info: null
	,title: null
	,chart: null
	,init: function() {
		var me = this;
		if(null != this.info.label.title) {
			var panelContextTitle = this.layout.getContext("title");
			if(null == panelContextTitle) return;
			this.title = new rg.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
		}
		var panelChart = this.layout.getPanel(this.layout.mainPanelName);
		this.chart = new rg.svg.chart.Geo(panelChart);
		this.baseChart = this.chart;
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		var pfactory = new rg.factory.FactoryGeoProjection();
		var _g = 0, _g1 = this.info.map;
		while(_g < _g1.length) {
			var imap = _g1[_g];
			++_g;
			var projection = pfactory.create(imap), map = new rg.svg.widget.Map(this.chart.mapcontainer,projection);
			map.setClassName(imap.classname);
			if(null == imap.label) map.labelDataPoint = this.info.label.datapoint; else map.labelDataPoint = imap.label.datapoint;
			if(null == imap.label) map.labelDataPointOver = this.info.label.datapointover; else map.labelDataPointOver = imap.label.datapointover;
			map.click = imap.click;
			map.radius = imap.radius;
			map.colorMode = imap.colorScaleMode;
			map.handlerClick = ($_=this.chart,$_.handlerClick.$bind($_));
			map.handlerDataPointOver = ($_=this.chart,$_.handlerDataPointOver.$bind($_));
			map.mapping = imap.mapping;
			var mappingurl = imap.mappingurl;
			if(null != mappingurl && (!StringTools.startsWith(mappingurl,"http://") || !StringTools.startsWith(mappingurl,"https://"))) mappingurl = rg.RGConst.BASE_URL_GEOJSON + mappingurl + ".json" + (imap.usejsonp?".js":"");
			map.load(imap.url,imap.type,mappingurl,imap.usejsonp);
			this.chart.addMap(map,imap.property);
		}
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables,data);
		if(null != this.title) {
			if(null != this.info.label.title) {
				this.title.setText(this.info.label.title(this.variables,data));
				this.layout.suggestSize("title",this.title.idealHeight());
			} else this.layout.suggestSize("title",0);
		}
		this.chart.init();
		this.chart.data(data);
	}
	,destroy: function() {
		this.chart.destroy();
		if(null != this.title) this.title.destroy();
		rg.visualization.VisualizationSvg.prototype.destroy.call(this);
	}
	,__class__: rg.visualization.VisualizationGeo
});
var I32 = $hxClasses["I32"] = function() { }
I32.__name__ = ["I32"];
I32.B4 = function(v) {
	return v >>> 24 & -1;
}
I32.B3 = function(v) {
	return v >>> 16 & 255 & -1;
}
I32.B2 = function(v) {
	return v >>> 8 & 255 & -1;
}
I32.B1 = function(v) {
	return v & 255 & -1;
}
I32.abs = function(v) {
	return Std["int"](Math.abs(v));
}
I32.add = function(a,b) {
	return a + b;
}
I32.alphaFromArgb = function(v) {
	return v >>> 24 & -1;
}
I32.and = function(a,b) {
	return a & b;
}
I32.baseEncode = function(v,radix) {
	if(radix < 2 || radix > 36) throw "radix out of range";
	var sb = "";
	var av = Std["int"](Math.abs(v));
	var radix32 = radix;
	while(true) {
		var r32 = av % radix32;
		sb = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(r32 & -1) + sb;
		av = Std["int"]((av - r32) / radix32);
		if(av == 0) break;
	}
	if(v < 0) return "-" + sb;
	return sb;
}
I32.complement = function(v) {
	return ~v;
}
I32.compare = function(a,b) {
	return a - b;
}
I32.div = function(a,b) {
	return Std["int"](a / b);
}
I32.encodeBE = function(i) {
	var sb = new BytesBuffer();
	sb.b.push(i >>> 24 & -1);
	sb.b.push(i >>> 16 & 255 & -1);
	sb.b.push(i >>> 8 & 255 & -1);
	sb.b.push(i & 255 & -1);
	return sb.getBytes();
}
I32.encodeLE = function(i) {
	var sb = new BytesBuffer();
	sb.b.push(i & 255 & -1);
	sb.b.push(i >>> 8 & 255 & -1);
	sb.b.push(i >>> 16 & 255 & -1);
	sb.b.push(i >>> 24 & -1);
	return sb.getBytes();
}
I32.decodeBE = function(s,pos) {
	if(pos == null) pos = 0;
	var b0 = s.b[pos + 3];
	var b1 = s.b[pos + 2];
	var b2 = s.b[pos + 1];
	var b3 = s.b[pos];
	b1 = b1 << 8;
	b2 = b2 << 16;
	b3 = b3 << 24;
	var a = b0 + b1;
	a = a + b2;
	a = a + b3;
	return a;
}
I32.decodeLE = function(s,pos) {
	if(pos == null) pos = 0;
	var b0 = s.b[pos];
	var b1 = s.b[pos + 1];
	var b2 = s.b[pos + 2];
	var b3 = s.b[pos + 3];
	b1 = b1 << 8;
	b2 = b2 << 16;
	b3 = b3 << 24;
	var a = b0 + b1;
	a = a + b2;
	a = a + b3;
	return a;
}
I32.eq = function(a,b) {
	return a == b;
}
I32.gt = function(a,b) {
	return a > b;
}
I32.gteq = function(a,b) {
	return a >= b;
}
I32.lt = function(a,b) {
	return a < b;
}
I32.lteq = function(a,b) {
	return a <= b;
}
I32.make = function(high,low) {
	return (high << 16) + low;
}
I32.makeColor = function(alpha,rgb) {
	return alpha << 24 | rgb & 16777215;
}
I32.mod = function(a,b) {
	return a % b;
}
I32.mul = function(a,b) {
	return a * b;
}
I32.neg = function(v) {
	return -v;
}
I32.ofInt = function(v) {
	return v;
}
I32.or = function(a,b) {
	return a | b;
}
I32.packBE = function(l) {
	var sb = new BytesBuffer();
	var _g1 = 0, _g = l.length;
	while(_g1 < _g) {
		var i = _g1++;
		sb.b.push(l[i] >>> 24 & -1);
		sb.b.push(l[i] >>> 16 & 255 & -1);
		sb.b.push(l[i] >>> 8 & 255 & -1);
		sb.b.push(l[i] & 255 & -1);
	}
	return sb.getBytes();
}
I32.packLE = function(l) {
	var sb = new BytesBuffer();
	var _g1 = 0, _g = l.length;
	while(_g1 < _g) {
		var i = _g1++;
		sb.b.push(l[i] & 255 & -1);
		sb.b.push(l[i] >>> 8 & 255 & -1);
		sb.b.push(l[i] >>> 16 & 255 & -1);
		sb.b.push(l[i] >>> 24 & -1);
	}
	return sb.getBytes();
}
I32.rgbFromArgb = function(v) {
	return v & 16777215;
}
I32.sub = function(a,b) {
	return a - b;
}
I32.shl = function(v,bits) {
	return v << bits;
}
I32.shr = function(v,bits) {
	return v >> bits;
}
I32.toColor = function(v) {
	return { alpha : v >>> 24 & -1, color : v & 16777215};
}
I32.toFloat = function(v) {
	return v * 1.0;
}
I32.toInt = function(v) {
	return v & -1;
}
I32.toNativeArray = function(v) {
	return v;
}
I32.unpackLE = function(s) {
	if(s == null || s.length == 0) return new Array();
	if(s.length % 4 != 0) throw "Buffer not multiple of 4 bytes";
	var a = new Array();
	var pos = 0;
	var i = 0;
	var len = s.length;
	while(pos < len) {
		a[i] = I32.decodeLE(s,pos);
		pos += 4;
		i++;
	}
	return a;
}
I32.unpackBE = function(s) {
	if(s == null || s.length == 0) return new Array();
	if(s.length % 4 != 0) throw "Buffer not multiple of 4 bytes";
	var a = new Array();
	var pos = 0;
	var i = 0;
	while(pos < s.length) {
		a[i] = I32.decodeBE(s,pos);
		pos += 4;
		i++;
	}
	return a;
}
I32.ushr = function(v,bits) {
	return v >>> bits;
}
I32.xor = function(a,b) {
	return a ^ b;
}
I32.prototype = {
	__class__: I32
}
rg.info.InfoPivotTable = $hxClasses["rg.info.InfoPivotTable"] = function() {
	this.label = new rg.info.InfoLabelPivotTable();
	this.heatmapColorStart = rg.info.InfoPivotTable.defaultStartColor;
	this.heatmapColorEnd = rg.info.InfoPivotTable.defaultEndColor;
	this.displayHeatmap = true;
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.columnAxes = 1;
}
rg.info.InfoPivotTable.__name__ = ["rg","info","InfoPivotTable"];
rg.info.InfoPivotTable.filters = function() {
	return [{ field : "columnaxes", validator : function(v) {
		return Std["is"](v,Int);
	}, filter : function(v) {
		return [{ field : "columnAxes", value : v}];
	}},{ field : "displayheatmap", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayHeatmap", value : v}];
	}},{ field : "displaycolumntotal", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayColumnTotal", value : v}];
	}},{ field : "displayrowtotal", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ field : "displayRowTotal", value : v}];
	}},{ field : "startcolor", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "heatmapColorStart", value : thx.color.Hsl.toHsl(rg.util.RGColors.parse(v,rg.info.InfoPivotTable.defaultStartColor.hex("#")))}];
	}},{ field : "endcolor", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "heatmapColorEnd", value : thx.color.Hsl.toHsl(rg.util.RGColors.parse(v,rg.info.InfoPivotTable.defaultEndColor.hex("#")))}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelPivotTable(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.info.InfoPivotTable.prototype = {
	label: null
	,heatmapColorStart: null
	,heatmapColorEnd: null
	,displayHeatmap: null
	,displayColumnTotal: null
	,displayRowTotal: null
	,columnAxes: null
	,click: null
	,__class__: rg.info.InfoPivotTable
}
rg.html.widget.DownloaderPosition = $hxClasses["rg.html.widget.DownloaderPosition"] = { __ename__ : ["rg","html","widget","DownloaderPosition"], __constructs__ : ["ElementSelector","TopLeft","TopRight","BottomLeft","BottomRight","Before","After"] }
rg.html.widget.DownloaderPosition.ElementSelector = function(selector) { var $x = ["ElementSelector",0,selector]; $x.__enum__ = rg.html.widget.DownloaderPosition; $x.toString = $estr; return $x; }
rg.html.widget.DownloaderPosition.TopLeft = ["TopLeft",1];
rg.html.widget.DownloaderPosition.TopLeft.toString = $estr;
rg.html.widget.DownloaderPosition.TopLeft.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.TopRight = ["TopRight",2];
rg.html.widget.DownloaderPosition.TopRight.toString = $estr;
rg.html.widget.DownloaderPosition.TopRight.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.BottomLeft = ["BottomLeft",3];
rg.html.widget.DownloaderPosition.BottomLeft.toString = $estr;
rg.html.widget.DownloaderPosition.BottomLeft.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.BottomRight = ["BottomRight",4];
rg.html.widget.DownloaderPosition.BottomRight.toString = $estr;
rg.html.widget.DownloaderPosition.BottomRight.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.Before = ["Before",5];
rg.html.widget.DownloaderPosition.Before.toString = $estr;
rg.html.widget.DownloaderPosition.Before.__enum__ = rg.html.widget.DownloaderPosition;
rg.html.widget.DownloaderPosition.After = ["After",6];
rg.html.widget.DownloaderPosition.After.toString = $estr;
rg.html.widget.DownloaderPosition.After.__enum__ = rg.html.widget.DownloaderPosition;
rg.info.InfoLabelFunnel = $hxClasses["rg.info.InfoLabelFunnel"] = function() {
	rg.info.InfoLabel.call(this);
}
rg.info.InfoLabelFunnel.__name__ = ["rg","info","InfoLabelFunnel"];
rg.info.InfoLabelFunnel.filters = function() {
	return [{ field : "arrow", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabel.filters());
}
rg.info.InfoLabelFunnel.__super__ = rg.info.InfoLabel;
rg.info.InfoLabelFunnel.prototype = $extend(rg.info.InfoLabel.prototype,{
	arrow: null
	,__class__: rg.info.InfoLabelFunnel
});
hxevents.EventException = $hxClasses["hxevents.EventException"] = { __ename__ : ["hxevents","EventException"], __constructs__ : ["StopPropagation"] }
hxevents.EventException.StopPropagation = ["StopPropagation",0];
hxevents.EventException.StopPropagation.toString = $estr;
hxevents.EventException.StopPropagation.__enum__ = hxevents.EventException;
rg.info.InfoDomType = $hxClasses["rg.info.InfoDomType"] = function() {
}
rg.info.InfoDomType.__name__ = ["rg","info","InfoDomType"];
rg.info.InfoDomType.filters = function() {
	return [{ field : "visualization", validator : function(v) {
		return Arrays.exists(rg.visualization.Visualizations.visualizations,v.toLowerCase());
	}, filter : function(v) {
		return [{ value : Arrays.exists(rg.visualization.Visualizations.html,v.toLowerCase())?rg.info.DomKind.Html:rg.info.DomKind.Svg, field : "kind"}];
	}}];
}
rg.info.InfoDomType.prototype = {
	kind: null
	,__class__: rg.info.InfoDomType
}
rg.info.DomKind = $hxClasses["rg.info.DomKind"] = { __ename__ : ["rg","info","DomKind"], __constructs__ : ["Html","Svg"] }
rg.info.DomKind.Html = ["Html",0];
rg.info.DomKind.Html.toString = $estr;
rg.info.DomKind.Html.__enum__ = rg.info.DomKind;
rg.info.DomKind.Svg = ["Svg",1];
rg.info.DomKind.Svg.toString = $estr;
rg.info.DomKind.Svg.__enum__ = rg.info.DomKind;
if(!chx.vm) chx.vm = {}
chx.vm.Lock = $hxClasses["chx.vm.Lock"] = function() {
	this.lock = 1;
}
chx.vm.Lock.__name__ = ["chx","vm","Lock"];
chx.vm.Lock.prototype = {
	lock: null
	,wait: function(waitMs) {
		var checktime = true;
		var limit = 0.0;
		if(waitMs == null) checktime = false;
		if(checktime) limit = Date.now().getTime() + waitMs;
		while(this.lock > 0) if(checktime && Date.now().getTime() >= limit) return false;
		this.lock++;
		return true;
	}
	,release: function() {
		this.lock--;
	}
	,__class__: chx.vm.Lock
}
var Arrays = $hxClasses["Arrays"] = function() { }
Arrays.__name__ = ["Arrays"];
Arrays.addIf = function(arr,condition,value) {
	if(null != condition) {
		if(condition) arr.push(value);
	} else if(null != value) arr.push(value);
	return arr;
}
Arrays.add = function(arr,value) {
	arr.push(value);
	return arr;
}
Arrays["delete"] = function(arr,value) {
	arr.remove(value);
	return arr;
}
Arrays.removef = function(arr,f) {
	var index = -1;
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(f(arr[i])) {
			index = i;
			break;
		}
	}
	if(index < 0) return false;
	arr.splice(index,1);
	return true;
}
Arrays.deletef = function(arr,f) {
	Arrays.removef(arr,f);
	return arr;
}
Arrays.filter = function(arr,f) {
	var result = [];
	var _g = 0;
	while(_g < arr.length) {
		var i = arr[_g];
		++_g;
		if(f(i)) result.push(i);
	}
	return result;
}
Arrays.min = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var comp = Dynamics.comparef(a);
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(comp(a,arr[i]) > 0) a = arr[p = i];
		}
		return arr[p];
	} else {
		var a = f(arr[0]), p = 0, b;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a > (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		return arr[p];
	}
}
Arrays.floatMin = function(arr,f) {
	if(arr.length == 0) return Math.NaN;
	var a = f(arr[0]), b;
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a > (b = f(arr[i]))) a = b;
	}
	return a;
}
Arrays.bounds = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var b = arr[0], q = 0;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			var comp = Dynamics.comparef(a);
			if(comp(a,arr[i]) > 0) a = arr[p = i];
			if(comp(b,arr[i]) < 0) b = arr[q = i];
		}
		return [arr[p],arr[q]];
	} else {
		var a = f(arr[0]), p = 0, b;
		var c = f(arr[0]), q = 0, d;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a > (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(c < (d = f(arr[i]))) {
				c = d;
				q = i;
			}
		}
		return [arr[p],arr[q]];
	}
}
Arrays.boundsFloat = function(arr,f) {
	if(arr.length == 0) return null;
	var a = f(arr[0]), b;
	var c = f(arr[0]), d;
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a > (b = f(arr[i]))) a = b;
		if(c < (d = f(arr[i]))) c = d;
	}
	return [a,c];
}
Arrays.max = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var comp = Dynamics.comparef(a);
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(comp(a,arr[i]) < 0) a = arr[p = i];
		}
		return arr[p];
	} else {
		var a = f(arr[0]), p = 0, b;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a < (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		return arr[p];
	}
}
Arrays.floatMax = function(arr,f) {
	if(arr.length == 0) return Math.NaN;
	var a = f(arr[0]), b;
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a < (b = f(arr[i]))) a = b;
	}
	return a;
}
Arrays.flatten = function(arr) {
	var r = [];
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		r = r.concat(v);
	}
	return r;
}
Arrays.map = function(arr,f) {
	return arr.map(f);
}
Arrays.reduce = function(arr,f,initialValue) {
	return arr.reduce(f,initialValue);
}
Arrays.order = function(arr,f) {
	arr.sort(null == f?Dynamics.compare:f);
	return arr;
}
Arrays.orderMultiple = function(arr,f,rest) {
	var swap = true, t;
	rest.remove(arr);
	while(swap) {
		swap = false;
		var _g1 = 0, _g = arr.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			if(f(arr[i],arr[i + 1]) > 0) {
				swap = true;
				t = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = t;
				var _g2 = 0;
				while(_g2 < rest.length) {
					var a = rest[_g2];
					++_g2;
					t = a[i];
					a[i] = a[i + 1];
					a[i + 1] = t;
				}
			}
		}
	}
}
Arrays.split = function(arr,f) {
	if(null == f) f = function(v,_) {
		return v == null;
	};
	var arrays = [], i = -1, values = [], value;
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i1 = _g1++;
		if(f(value = arr[i1],i1)) values = []; else {
			if(values.length == 0) arrays.push(values);
			values.push(value);
		}
	}
	return arrays;
}
Arrays.exists = function(arr,value,f) {
	if(null != f) {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			if(f(v)) return true;
		}
	} else {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			if(v == value) return true;
		}
	}
	return false;
}
Arrays.format = function(v,param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		if(v.length == 0) {
			var empty = null == params[1]?"[]":params[1];
			return empty;
		}
		var sep = null == params[2]?", ":params[2];
		var max = params[3] == null?null:"" == params[3]?null:Std.parseInt(params[3]);
		if(null != max && max < v.length) {
			var elipsis = null == params[4]?" ...":params[4];
			return v.copy().splice(0,max).map(function(d,i) {
				return Dynamics.format(d,params[0],null,null,culture);
			}).join(sep) + elipsis;
		} else return v.map(function(d,i) {
			return Dynamics.format(d,params[0],null,null,culture);
		}).join(sep);
		break;
	case "C":
		return Ints.format(v.length,"I",[],culture);
	default:
		throw "Unsupported array format: " + format;
	}
}
Arrays.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		return function(v) {
			if(v.length == 0) {
				var empty = null == params[1]?"[]":params[1];
				return empty;
			}
			var sep = null == params[2]?", ":params[2];
			var max = params[3] == null?null:"" == params[3]?null:Std.parseInt(params[3]);
			if(null != max && max < v.length) {
				var elipsis = null == params[4]?" ...":params[4];
				return v.copy().splice(0,max).map(function(d,i) {
					return Dynamics.format(d,params[0],null,null,culture);
				}).join(sep) + elipsis;
			} else return v.map(function(d,i) {
				return Dynamics.format(d,params[0],null,null,culture);
			}).join(sep);
		};
	case "C":
		var f = Ints.formatf("I",[],culture);
		return function(v) {
			return f(v.length);
		};
	default:
		throw "Unsupported array format: " + format;
	}
}
Arrays.interpolate = function(v,a,b,equation) {
	return (Arrays.interpolatef(a,b,equation))(v);
}
Arrays.interpolatef = function(a,b,equation) {
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Floats.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			return function(_) {
				return v[0];
			};
		})(v));
		i++;
	}
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		});
	};
}
Arrays.interpolateStrings = function(v,a,b,equation) {
	return (Arrays.interpolateStringsf(a,b,equation))(v);
}
Arrays.interpolateStringsf = function(a,b,equation) {
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Strings.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			return function(_) {
				return v[0];
			};
		})(v));
		i++;
	}
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		});
	};
}
Arrays.interpolateInts = function(v,a,b,equation) {
	return (Arrays.interpolateIntsf(a,b,equation))(v);
}
Arrays.interpolateIntsf = function(a,b,equation) {
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Ints.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			return function(_) {
				return v[0];
			};
		})(v));
		i++;
	}
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		});
	};
}
Arrays.indexOf = function(arr,el) {
	return arr.indexOf(el);
}
Arrays.every = function(arr,f) {
	return arr.every(f);
}
Arrays.each = function(arr,f) {
	arr.forEach(f);
}
Arrays.any = function(arr,f) {
	return Iterators.any(arr.iterator(),f);
}
Arrays.all = function(arr,f) {
	return Iterators.all(arr.iterator(),f);
}
Arrays.random = function(arr) {
	return arr[Std.random(arr.length)];
}
Arrays.string = function(arr) {
	return "[" + arr.map(function(v,_) {
		return Dynamics.string(v);
	}).join(", ") + "]";
}
Arrays.last = function(arr) {
	return arr[arr.length - 1];
}
Arrays.lastf = function(arr,f) {
	var i = arr.length;
	while(--i >= 0) if(f(arr[i])) return arr[i];
	return null;
}
Arrays.first = function(arr) {
	return arr[0];
}
Arrays.firstf = function(arr,f) {
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		if(f(v)) return v;
	}
	return null;
}
Arrays.bisect = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	return Arrays.bisectRight(a,x,lo,hi);
}
Arrays.bisectRight = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(x < a[mid]) hi = mid; else lo = mid + 1;
	}
	return lo;
}
Arrays.bisectLeft = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(a[mid] < x) lo = mid + 1; else hi = mid;
	}
	return lo;
}
Arrays.nearest = function(a,x,f) {
	var delta = [];
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		delta.push({ i : i, v : Math.abs(f(a[i]) - x)});
	}
	delta.sort(function(a1,b) {
		return Floats.compare(a1.v,b.v);
	});
	return a[delta[0].i];
}
Arrays.compare = function(a,b) {
	var v;
	if((v = a.length - b.length) != 0) return v;
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if((v = Dynamics.compare(a[i],b[i])) != 0) return v;
	}
	return 0;
}
Arrays.product = function(a) {
	if(a.length == 0) return [];
	var arr = a.copy(), result = [], temp;
	var _g = 0, _g1 = arr[0];
	while(_g < _g1.length) {
		var value = _g1[_g];
		++_g;
		result.push([value]);
	}
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		temp = [];
		var _g2 = 0;
		while(_g2 < result.length) {
			var acc = result[_g2];
			++_g2;
			var _g3 = 0, _g4 = arr[i];
			while(_g3 < _g4.length) {
				var value = _g4[_g3];
				++_g3;
				temp.push(acc.copy().concat([value]));
			}
		}
		result = temp;
	}
	return result;
}
Arrays.rotate = function(a) {
	if(a.length == 0) return [];
	var result = [];
	var _g1 = 0, _g = a[0].length;
	while(_g1 < _g) {
		var i = _g1++;
		result[i] = [];
	}
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var j = _g1++;
		var _g3 = 0, _g2 = a[0].length;
		while(_g3 < _g2) {
			var i = _g3++;
			result[i][j] = a[j][i];
		}
	}
	return result;
}
Arrays.shuffle = function(a) {
	var t = Ints.range(a.length), arr = [];
	while(t.length > 0) {
		var pos = Std.random(t.length), index = t[pos];
		t.splice(pos,1);
		arr.push(a[index]);
	}
	return arr;
}
Arrays.prototype = {
	__class__: Arrays
}
rg.axis.AxisOrdinalStats = $hxClasses["rg.axis.AxisOrdinalStats"] = function(variable) {
	rg.axis.AxisOrdinal.call(this);
	this.variable = variable;
}
rg.axis.AxisOrdinalStats.__name__ = ["rg","axis","AxisOrdinalStats"];
rg.axis.AxisOrdinalStats.__super__ = rg.axis.AxisOrdinal;
rg.axis.AxisOrdinalStats.prototype = $extend(rg.axis.AxisOrdinal.prototype,{
	variable: null
	,values: function() {
		return this.variable.stats.values;
	}
	,__class__: rg.axis.AxisOrdinalStats
});
rg.axis.Tickmarks = $hxClasses["rg.axis.Tickmarks"] = function() { }
rg.axis.Tickmarks.__name__ = ["rg","axis","Tickmarks"];
rg.axis.Tickmarks.bound = function(tickmarks,max) {
	if(null == max || tickmarks.length <= (2 > max?2:max)) return tickmarks;
	var majors = Arrays.filter(tickmarks,function(d) {
		return d.getMajor();
	});
	if(majors.length > max) return rg.axis.Tickmarks.reduce(majors,max);
	var result = rg.axis.Tickmarks.reduce(Arrays.filter(tickmarks,function(d) {
		return !d.getMajor();
	}),max - majors.length).concat(majors);
	result.sort(function(a,b) {
		return Floats.compare(a.getDelta(),b.getDelta());
	});
	return result;
}
rg.axis.Tickmarks.reduce = function(arr,max) {
	if(max == 1) return [arr[0]];
	if(max == 2) return [arr[arr.length - 1]];
	var keep = arr.length / max, result = [], i = 0;
	do result.push(arr[Math.round(keep * i++)]); while(max > result.length);
	return result;
}
rg.axis.Tickmarks.string = function(tick) {
	return Dynamics.string(tick.getValue()) + " (" + (tick.getMajor()?"Major":"minor") + ", " + Floats.format(tick.getDelta()) + ")";
}
rg.axis.Tickmarks.forFloat = function(start,end,value,major) {
	return new rg.axis.Tickmark(value,major,(value - start) / (end - start));
}
rg.axis.Tickmarks.prototype = {
	__class__: rg.axis.Tickmarks
}
rg.visualization.VisualizationScatterGraph = $hxClasses["rg.visualization.VisualizationScatterGraph"] = function(layout) {
	rg.visualization.VisualizationCartesian.call(this,layout);
}
rg.visualization.VisualizationScatterGraph.__name__ = ["rg","visualization","VisualizationScatterGraph"];
rg.visualization.VisualizationScatterGraph.__super__ = rg.visualization.VisualizationCartesian;
rg.visualization.VisualizationScatterGraph.prototype = $extend(rg.visualization.VisualizationCartesian.prototype,{
	infoScatter: null
	,initAxes: function() {
		this.xvariable = this.independentVariables[0];
		this.yvariables = this.dependentVariables.map(function(d,_) {
			return d;
		});
	}
	,initChart: function() {
		var me = this;
		var chart = new rg.svg.chart.ScatterGraph(this.layout.getPanel(this.layout.mainPanelName));
		this.baseChart = chart;
		chart.ready.add(function() {
			me.ready.dispatch();
		});
		chart.symbol = this.infoScatter.symbol;
		chart.symbolStyle = this.infoScatter.symbolStyle;
		if(null == this.independentVariables[0].scaleDistribution) this.independentVariables[0].scaleDistribution = rg.axis.ScaleDistribution.ScaleFill;
		this.chart = chart;
	}
	,transformData: function(dps) {
		var results = [], segmenter = new rg.data.Segmenter(this.infoScatter.segment.on,this.infoScatter.segment.transform,this.infoScatter.segment.scale);
		var _g = 0, _g1 = this.dependentVariables;
		while(_g < _g1.length) {
			var variable = _g1[_g];
			++_g;
			results.push(rg.util.DataPoints.filterByDependents(dps,[variable]));
		}
		return results;
	}
	,__class__: rg.visualization.VisualizationScatterGraph
});
rg.layout.ScalePattern = $hxClasses["rg.layout.ScalePattern"] = { __ename__ : ["rg","layout","ScalePattern"], __constructs__ : ["ScalesBefore","ScalesAfter","ScalesAlternating"] }
rg.layout.ScalePattern.ScalesBefore = ["ScalesBefore",0];
rg.layout.ScalePattern.ScalesBefore.toString = $estr;
rg.layout.ScalePattern.ScalesBefore.__enum__ = rg.layout.ScalePattern;
rg.layout.ScalePattern.ScalesAfter = ["ScalesAfter",1];
rg.layout.ScalePattern.ScalesAfter.toString = $estr;
rg.layout.ScalePattern.ScalesAfter.__enum__ = rg.layout.ScalePattern;
rg.layout.ScalePattern.ScalesAlternating = ["ScalesAlternating",2];
rg.layout.ScalePattern.ScalesAlternating.toString = $estr;
rg.layout.ScalePattern.ScalesAlternating.__enum__ = rg.layout.ScalePattern;
rg.data.DataLoader = $hxClasses["rg.data.DataLoader"] = function(loader) {
	if(null == loader) throw new thx.error.NullArgument("loader","invalid null argument '{0}' for method {1}.{2}()",{ fileName : "DataLoader.hx", lineNumber : 12, className : "rg.data.DataLoader", methodName : "new"}); else null;
	this.loader = loader;
	this.onLoad = new hxevents.Dispatcher();
}
rg.data.DataLoader.__name__ = ["rg","data","DataLoader"];
rg.data.DataLoader.prototype = {
	loader: null
	,onLoad: null
	,load: function() {
		var me = this;
		this.loader(function(datapoints) {
			me.onLoad.dispatch(datapoints);
		});
	}
	,__class__: rg.data.DataLoader
}
thx.error.NotImplemented = $hxClasses["thx.error.NotImplemented"] = function(posInfo) {
	thx.error.Error.call(this,"method {0}.{1}() needs to be implemented",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "NotImplemented.hx", lineNumber : 13, className : "thx.error.NotImplemented", methodName : "new"});
}
thx.error.NotImplemented.__name__ = ["thx","error","NotImplemented"];
thx.error.NotImplemented.__super__ = thx.error.Error;
thx.error.NotImplemented.prototype = $extend(thx.error.Error.prototype,{
	__class__: thx.error.NotImplemented
});
rg.svg.chart.ScatterGraph = $hxClasses["rg.svg.chart.ScatterGraph"] = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.addClass("scatter-graph");
	this.chart = this.g.append("svg:g");
}
rg.svg.chart.ScatterGraph.__name__ = ["rg","svg","chart","ScatterGraph"];
rg.svg.chart.ScatterGraph.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.ScatterGraph.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	symbol: null
	,symbolStyle: null
	,chart: null
	,dps: null
	,x: function(d,i) {
		var value = Reflect.field(d,this.xVariable.type), scaled = this.xVariable.axis.scale(this.xVariable.min(),this.xVariable.max(),value), scaledw = scaled * this.width;
		return scaledw;
	}
	,getY1: function(pos) {
		var h = this.height, v = this.yVariables[pos];
		return function(d,i) {
			var value = Reflect.field(d,v.type), scaled = v.axis.scale(v.min(),v.max(),value), scaledh = scaled * h;
			return h - scaledh;
		};
	}
	,classf: function(pos,cls) {
		return function(_,i) {
			return cls + " stroke-" + pos + " fill-" + pos;
		};
	}
	,data: function(dps) {
		this.dps = dps;
		this.redraw();
	}
	,resize: function() {
		rg.svg.chart.CartesianChart.prototype.resize.call(this);
		this.redraw();
	}
	,redraw: function() {
		var me = this;
		if(null == this.dps || null == this.dps[0] || null == this.dps[0][0]) return;
		var axisgroup = this.chart.selectAll("g.group").data(this.dps);
		var axisenter = axisgroup.enter().append("svg:g").attr("class").stringf(function(_,i) {
			return "group group-" + i;
		});
		axisgroup.exit().remove();
		var _g1 = 0, _g = this.dps.length;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.dps[i], gi = this.chart.select("g.group-" + i), stats = [this.yVariables[i].stats];
			var gsymbol = gi.selectAll("g.symbol").data(data), vars = this.yVariables, onclick = ((function() {
				return function(f,a1) {
					return (function() {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})();
				};
			})())(this.onclick.$bind(this),stats[0]), onmouseover = ((function() {
				return function(f,a1) {
					return (function() {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})();
				};
			})())(this.onmouseover.$bind(this),stats[0]);
			var enter = gsymbol.enter().append("svg:g").attr("class").stringf(this.classf(i,"symbol")).attr("transform").stringf(this.getTranslatePointf(i));
			if(null != this.click) enter.on("click",onclick);
			if(null != this.labelDataPointOver) enter.onNode("mouseover",onmouseover);
			var spath = enter.append("svg:path").attr("d").stringf((function(stats) {
				return function(dp,_) {
					return me.symbol(dp,stats[0]);
				};
			})(stats));
			if(null != this.symbolStyle) spath.attr("style").stringf((function(stats) {
				return function(dp,_) {
					return me.symbolStyle(dp,stats[0]);
				};
			})(stats));
			if(null != this.labelDataPoint) {
				var f = [this.labelDataPoint];
				enter.eachNode((function(f,stats) {
					return function(n,i1) {
						var dp = Reflect.field(n,"__data__"), label = new rg.svg.widget.Label(thx.js.Dom.selectNode(n),true,true,true);
						label.setText(f[0](dp,stats[0]));
					};
				})(f,stats));
			}
			gsymbol.update().selectAll("g.symbol").dataf((function() {
				return function(d,i1) {
					return d;
				};
			})()).update().attr("transform").stringf(this.getTranslatePointf(i));
			gsymbol.exit().remove();
		}
		this.ready.dispatch();
	}
	,getTranslatePointf: function(pos) {
		var x = this.x.$bind(this), y = this.getY1(pos);
		return function(dp,i) {
			return "translate(" + x(dp) + "," + y(dp,i) + ")";
		};
	}
	,onmouseover: function(stats,n,i) {
		var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,stats);
		if(null == text) this.tooltip.hide(); else {
			var sel = thx.js.Dom.selectNode(n), coords = rg.svg.chart.Coords.fromTransform(sel.attr("transform").get());
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(coords[0],coords[1]);
		}
	}
	,onclick: function(stats,dp,i) {
		this.click(dp,stats);
	}
	,__class__: rg.svg.chart.ScatterGraph
});
rg.axis.ScaleDistribution = $hxClasses["rg.axis.ScaleDistribution"] = { __ename__ : ["rg","axis","ScaleDistribution"], __constructs__ : ["ScaleFit","ScaleFill","ScaleBefore","ScaleAfter"] }
rg.axis.ScaleDistribution.ScaleFit = ["ScaleFit",0];
rg.axis.ScaleDistribution.ScaleFit.toString = $estr;
rg.axis.ScaleDistribution.ScaleFit.__enum__ = rg.axis.ScaleDistribution;
rg.axis.ScaleDistribution.ScaleFill = ["ScaleFill",1];
rg.axis.ScaleDistribution.ScaleFill.toString = $estr;
rg.axis.ScaleDistribution.ScaleFill.__enum__ = rg.axis.ScaleDistribution;
rg.axis.ScaleDistribution.ScaleBefore = ["ScaleBefore",2];
rg.axis.ScaleDistribution.ScaleBefore.toString = $estr;
rg.axis.ScaleDistribution.ScaleBefore.__enum__ = rg.axis.ScaleDistribution;
rg.axis.ScaleDistribution.ScaleAfter = ["ScaleAfter",3];
rg.axis.ScaleDistribution.ScaleAfter.toString = $estr;
rg.axis.ScaleDistribution.ScaleAfter.__enum__ = rg.axis.ScaleDistribution;
var Types = $hxClasses["Types"] = function() { }
Types.__name__ = ["Types"];
Types.className = function(o) {
	return Type.getClassName(Type.getClass(o)).split(".").pop();
}
Types.fullName = function(o) {
	return Type.getClassName(Type.getClass(o));
}
Types.typeName = function(o) {
	return (function($this) {
		var $r;
		var $e = (Type["typeof"](o));
		switch( $e[1] ) {
		case 0:
			$r = "null";
			break;
		case 1:
			$r = "Int";
			break;
		case 2:
			$r = "Float";
			break;
		case 3:
			$r = "Bool";
			break;
		case 5:
			$r = "function";
			break;
		case 6:
			var c = $e[2];
			$r = Type.getClassName(c);
			break;
		case 7:
			var e = $e[2];
			$r = Type.getEnumName(e);
			break;
		case 4:
			$r = "Object";
			break;
		case 8:
			$r = "Unknown";
			break;
		}
		return $r;
	}(this));
}
Types.hasSuperClass = function(type,sup) {
	while(null != type) {
		if(type == sup) return true;
		type = Type.getSuperClass(type);
	}
	return false;
}
Types.isAnonymous = function(v) {
	return Reflect.isObject(v) && null == Type.getClass(v);
}
Types["as"] = function(value,type) {
	return Std["is"](value,type)?value:null;
}
Types.ifIs = function(value,type,handler) {
	if(Std["is"](value,type)) handler(value);
	return value;
}
Types.of = function(type,value) {
	return Std["is"](value,type)?value:null;
}
Types.sameType = function(a,b) {
	if(null == a && b == null) return true;
	if(null == a || b == null) return false;
	var tb = Type["typeof"](b);
	var $e = (tb);
	switch( $e[1] ) {
	case 6:
		var c = $e[2];
		return Std["is"](a,c);
	case 7:
		var e = $e[2];
		return Std["is"](a,e);
	default:
		return Type["typeof"](a) == tb;
	}
}
Types.isPrimitive = function(v) {
	return (function($this) {
		var $r;
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
		case 1:
		case 2:
		case 3:
			$r = true;
			break;
		case 5:
		case 7:
		case 4:
		case 8:
			$r = false;
			break;
		case 6:
			var c = $e[2];
			$r = Type.getClassName(c) == "String";
			break;
		}
		return $r;
	}(this));
}
Types.prototype = {
	__class__: Types
}
rg.svg.chart.LineChart = $hxClasses["rg.svg.chart.LineChart"] = function(panel) {
	rg.svg.chart.CartesianChart.call(this,panel);
	this.addClass("line-chart");
	this.chart = this.g.append("svg:g");
}
rg.svg.chart.LineChart.__name__ = ["rg","svg","chart","LineChart"];
rg.svg.chart.LineChart.__super__ = rg.svg.chart.CartesianChart;
rg.svg.chart.LineChart.prototype = $extend(rg.svg.chart.CartesianChart.prototype,{
	symbol: null
	,symbolStyle: null
	,lineInterpolator: null
	,lineEffect: null
	,y0property: null
	,linePathShape: null
	,chart: null
	,dps: null
	,segment: null
	,setVariables: function(variables,variableIndependents,variableDependents,data) {
		rg.svg.chart.CartesianChart.prototype.setVariables.call(this,variables,variableIndependents,variableDependents,data);
		if(this.y0property != null && this.y0property != "") {
			var t, dp;
			var _g = 0;
			while(_g < variableDependents.length) {
				var v = variableDependents[_g];
				++_g;
				v.meta.max = Math.NEGATIVE_INFINITY;
			}
			var _g1 = 0, _g = data.length;
			while(_g1 < _g) {
				var i = _g1++;
				var v = variableDependents[i];
				var _g3 = 0, _g2 = data[i].length;
				while(_g3 < _g2) {
					var j = _g3++;
					var _g5 = 0, _g4 = data[i][j].length;
					while(_g5 < _g4) {
						var k = _g5++;
						dp = data[i][j][k];
						t = rg.util.DataPoints.valueAlt(dp,v.type,0.0) + rg.util.DataPoints.valueAlt(dp,this.y0property,0.0);
						if(v.meta.max < t) v.meta.max = t;
					}
				}
			}
		}
	}
	,x: function(d,i) {
		var value = Reflect.field(d,this.xVariable.type), scaled = this.xVariable.axis.scale(this.xVariable.min(),this.xVariable.max(),value), scaledw = scaled * this.width;
		return scaledw;
	}
	,getY1: function(pos) {
		var me = this;
		var v = this.yVariables[pos], scale = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(($_=v.axis,$_.scale.$bind($_)),v.min(),v.max());
		if(null != this.y0property) {
			var min = scale(v.min()) * this.height;
			return function(d,i) {
				return (me.getY0(pos))(d,i) - scale(Reflect.field(d,v.type)) * me.height + min;
			};
		} else return function(d,i) {
			var value = Reflect.field(d,v.type), scaled = scale(value), scaledh = scaled * me.height;
			return me.height - scaledh;
		};
	}
	,getY0: function(pos) {
		var me = this;
		var v = this.yVariables[pos], scale = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(($_=v.axis,$_.scale.$bind($_)),v.min(),v.max());
		return function(d,i) {
			return me.height - scale(rg.util.DataPoints.valueAlt(d,me.y0property,v.min())) * me.height;
		};
	}
	,segments: null
	,classsf: function(pos,cls) {
		return function(_,i) {
			return cls + " stroke-" + (pos + i);
		};
	}
	,classff: function(pos,cls) {
		return function(_,i) {
			return cls + " fill-" + (pos + i);
		};
	}
	,data: function(dps) {
		var me = this;
		this.linePathShape = [];
		var _g1 = 0, _g = this.yVariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			var line = [new thx.svg.Line(this.x.$bind(this),this.getY1(i))];
			if(null != this.lineInterpolator) line[0].interpolator(this.lineInterpolator);
			this.linePathShape[i] = (function(line) {
				return function(dp,i1) {
					me.segment = i1;
					return line[0].shape(dp,i1);
				};
			})(line);
		}
		var axisgroup = this.chart.selectAll("g.group").data(dps);
		var axisenter = axisgroup.enter().append("svg:g").attr("class").stringf(function(_,i) {
			return "group group-" + i;
		});
		axisgroup.exit().remove();
		var _g1 = 0, _g = dps.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.segments = dps[i];
			var gi = this.chart.select("g.group-" + i), stats = [new rg.axis.Stats(this.yVariables[i].type)];
			stats[0].addMany(rg.util.DataPoints.values(Arrays.flatten(this.segments),this.yVariables[i].type));
			if(null != this.y0property) {
				var area = new thx.svg.Area(this.x.$bind(this),this.getY0(i),this.getY1(i));
				if(null != this.lineInterpolator) area.interpolator(this.lineInterpolator);
				gi.selectAll("path.area").data(this.segments).enter().append("svg:path").attr("class").stringf(this.classff(i,"area area-" + i)).attr("d").stringf(area.shape.$bind(area));
			}
			var segmentgroup = gi.selectAll("path.main").data(this.segments);
			var $e = (this.lineEffect);
			switch( $e[1] ) {
			case 1:
				var levels = $e[3], lightness = $e[2];
				var levels1 = [levels];
				var lightness1 = [lightness];
				var fs = [[]];
				segmentgroup.enter().append("svg:path").attr("class").stringf(this.classsf(i,"line")).eachNode((function(fs,lightness1) {
					return function(n,i1) {
						var start = thx.color.Hsl.toHsl(rg.util.RGColors.parse(thx.js.Dom.selectNode(n).style("stroke").get(),"#000000")), end = rg.util.RGColors.applyLightness(start,lightness1[0]);
						fs[0][i1] = thx.color.Hsl.interpolatef(end,start);
					};
				})(fs,lightness1)).remove();
				var _g2 = 0;
				while(_g2 < levels1[0]) {
					var j = [_g2++];
					segmentgroup.enter().append("svg:path").attr("class").string("line grad-" + (levels1[0] - j[0] - 1)).style("stroke").stringf((function(j,fs,levels1) {
						return function(_,i1) {
							return fs[0][i1](j[0] / levels1[0]).hex("#");
						};
					})(j,fs,levels1)).attr("d").stringf(this.linePathShape[i]);
				}
				break;
			case 2:
				var levels = $e[4], oy = $e[3], ox = $e[2];
				var _g2 = 0;
				while(_g2 < levels) {
					var j = _g2++;
					segmentgroup.enter().append("svg:path").attr("transform").string("translate(" + (1 + j) * ox + "," + (1 + j) * oy + ")").attr("class").stringf(this.classsf(i,"line shadow shadow-" + j)).attr("d").stringf(this.linePathShape[i]);
				}
				break;
			default:
			}
			var path = segmentgroup.enter().append("svg:path").attr("class").stringf(this.classsf(i,"line")).attr("d").stringf(this.linePathShape[i]);
			switch( (this.lineEffect)[1] ) {
			case 1:
				path.classed().add("gradient");
				break;
			case 2:
				path.classed().add("dropshadow");
				break;
			case 0:
				path.classed().add("noeffect");
				break;
			}
			segmentgroup.update().attr("d").stringf(this.linePathShape[i]);
			segmentgroup.exit().remove();
			var gsymbols = gi.selectAll("g.symbols").data(this.segments), vars = this.yVariables, onclick = ((function() {
				return function(f,a1) {
					return (function() {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})();
				};
			})())(this.onclick.$bind(this),stats[0]), onmouseover = ((function() {
				return function(f,a1) {
					return (function() {
						return function(a2,a3) {
							return f(a1,a2,a3);
						};
					})();
				};
			})())(this.onmouseover.$bind(this),stats[0]);
			var enter = gsymbols.enter().append("svg:g").attr("class").stringf(this.classsf(i,"symbols"));
			var gsymbol = enter.selectAll("g.symbol").dataf((function() {
				return function(d,i1) {
					return d;
				};
			})()).enter().append("svg:g").attr("transform").stringf(this.getTranslatePointf(i));
			if(null != this.click) gsymbol.on("click",onclick);
			if(null != this.labelDataPointOver) gsymbol.onNode("mouseover",onmouseover);
			gsymbol.append("svg:circle").attr("r")["float"](6).attr("opacity")["float"](0.0).style("fill").string("#000000");
			if(null != this.symbol) {
				var sp = [this.symbol];
				var spath = gsymbol.append("svg:path").attr("d").stringf((function(sp,stats) {
					return function(dp,_) {
						return sp[0](dp,stats[0]);
					};
				})(sp,stats));
				if(null != this.symbolStyle) {
					var ss = [this.symbolStyle];
					spath.attr("style").stringf((function(ss,stats) {
						return function(dp,_) {
							return ss[0](dp,stats[0]);
						};
					})(ss,stats));
				}
			}
			if(null != this.labelDataPoint) {
				var f = [this.labelDataPoint];
				gsymbol.eachNode((function(f,stats) {
					return function(n,i1) {
						var dp = Reflect.field(n,"__data__"), label = new rg.svg.widget.Label(thx.js.Dom.selectNode(n),true,false,false);
						label.setText(f[0](dp,stats[0]));
					};
				})(f,stats));
			}
			gsymbols.update().selectAll("g.symbol").dataf((function() {
				return function(d,i1) {
					return d;
				};
			})()).update().attr("transform").stringf(this.getTranslatePointf(i));
			gsymbols.exit().remove();
		}
		this.ready.dispatch();
	}
	,getTranslatePointf: function(pos) {
		var x = this.x.$bind(this), y = this.getY1(pos);
		return function(dp,i) {
			return "translate(" + x(dp) + "," + y(dp,i) + ")";
		};
	}
	,onmouseover: function(stats,n,i) {
		var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,stats);
		if(null == text) this.tooltip.hide(); else {
			var sel = thx.js.Dom.selectNode(n), coords = rg.svg.chart.Coords.fromTransform(sel.attr("transform").get());
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(coords[0],coords[1]);
		}
	}
	,onclick: function(stats,dp,i) {
		this.click(dp,stats);
	}
	,__class__: rg.svg.chart.LineChart
});
rg.frame.FrameLayout = $hxClasses["rg.frame.FrameLayout"] = { __ename__ : ["rg","frame","FrameLayout"], __constructs__ : ["Fill","FillPercent","FillRatio","Fixed","Floating"] }
rg.frame.FrameLayout.Fill = function(before,after,min,max) { var $x = ["Fill",0,before,after,min,max]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.frame.FrameLayout.FillPercent = function(before,after,percent,min,max) { var $x = ["FillPercent",1,before,after,percent,min,max]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.frame.FrameLayout.FillRatio = function(before,after,ratio) { var $x = ["FillRatio",2,before,after,ratio]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.frame.FrameLayout.Fixed = function(before,after,size) { var $x = ["Fixed",3,before,after,size]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.frame.FrameLayout.Floating = function(x,y,width,height) { var $x = ["Floating",4,x,y,width,height]; $x.__enum__ = rg.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.graph.GNode = $hxClasses["rg.graph.GNode"] = function(graph,id,data) {
	rg.graph.GraphElement.call(this,graph,id,data);
}
rg.graph.GNode.__name__ = ["rg","graph","GNode"];
rg.graph.GNode.create = function(graph,id,data) {
	return new rg.graph.GNode(graph,id,data);
}
rg.graph.GNode.__super__ = rg.graph.GraphElement;
rg.graph.GNode.prototype = $extend(rg.graph.GraphElement.prototype,{
	destroy: function() {
		rg.graph.GraphElement.prototype.destroy.call(this);
	}
	,isConnectedTo: function(other) {
		if(other.graph != this.graph) throw new thx.error.Error("the node is not part of this graph",null,null,{ fileName : "GNode.hx", lineNumber : 30, className : "rg.graph.GNode", methodName : "isConnectedTo"});
		return Iterators.contains(this.graph.edges.positives(this),null,function(edge) {
			return edge.head.id == other.id;
		}) || Iterators.contains(this.graph.edges.negatives(this),null,function(edge) {
			return edge.tail.id == other.id;
		});
	}
	,connectedBy: function(other) {
		if(other.graph != this.graph) throw new thx.error.Error("the node is not part of this graph",null,null,{ fileName : "GNode.hx", lineNumber : 41, className : "rg.graph.GNode", methodName : "connectedBy"});
		var edge = Iterators.firstf(this.graph.edges.positives(this),function(edge) {
			return edge.head.id == other.id;
		});
		if(null != edge) return edge;
		return Iterators.firstf(this.graph.edges.negatives(this),function(edge1) {
			return edge1.tail.id == other.id;
		});
	}
	,positiveWeight: function() {
		return this._weight(this.graph.edges.positives(this));
	}
	,negativeWeight: function() {
		return this._weight(this.graph.edges.negatives(this));
	}
	,_weight: function(it) {
		var weight = 0.0;
		while( it.hasNext() ) {
			var edge = it.next();
			weight += edge.weight;
		}
		return weight;
	}
	,isSource: function() {
		return this.graph.edges.positives(this).hasNext() && !this.graph.edges.negatives(this).hasNext();
	}
	,isSink: function() {
		return this.graph.edges.negatives(this).hasNext() && !this.graph.edges.positives(this).hasNext();
	}
	,isIsolated: function() {
		return !this.graph.edges.edges(this).hasNext();
	}
	,isSuccessorOf: function(predecessor) {
		return predecessor.isPredecessorOf(this);
	}
	,isPredecessorOf: function(successor) {
		return Iterators.contains(this.graph.edges.positives(this),null,function(edge) {
			return edge.head.id == successor.id;
		});
	}
	,successorBy: function(predecessor) {
		return Iterators.firstf(this.graph.edges.negatives(this),function(edge) {
			return edge.tail.id == predecessor.id;
		});
	}
	,predecessorBy: function(successor) {
		return Iterators.firstf(this.graph.edges.positives(this),function(edge) {
			return edge.head.id == successor.id;
		});
	}
	,edges: function() {
		return this.graph.edges.edges(this);
	}
	,positives: function() {
		return this.graph.edges.positives(this);
	}
	,negatives: function() {
		return this.graph.edges.negatives(this);
	}
	,edgeCount: function() {
		return this.graph.edges.edgeCount(this);
	}
	,positiveCount: function() {
		return this.graph.edges.positiveCount(this);
	}
	,negativeCount: function() {
		return this.graph.edges.negativeCount(this);
	}
	,remove: function() {
		this.graph.nodes._remove(this);
	}
	,friendRemove: function() {
		return this.graph.nodes;
	}
	,friendEdges: function() {
		return this.graph.edges;
	}
	,toString: function() {
		return null == this.graph?"Node Destroyed":"Node (n." + this.id + ", positives " + this.graph.edges.positiveCount(this) + ", negatives: " + this.graph.edges.negativeCount(this) + (null == this.data?"":", data: " + this.data) + ")";
	}
	,__class__: rg.graph.GNode
});
rg.axis.AxisTime = $hxClasses["rg.axis.AxisTime"] = function(periodicity) {
	this.periodicity = periodicity;
	this.setScaleDistribution(rg.axis.ScaleDistribution.ScaleFill);
}
rg.axis.AxisTime.__name__ = ["rg","axis","AxisTime"];
rg.axis.AxisTime.__interfaces__ = [rg.axis.IAxisDiscrete];
rg.axis.AxisTime.prototype = {
	periodicity: null
	,scaleDistribution: null
	,isMajor: function(units,value) {
		switch(this.periodicity) {
		case "day":
			if(units <= 31) return true;
			if(units < 121) {
				var d = Date.fromTime(value).getDate();
				return rg.util.Periodicity.firstInSeries("month",value) || rg.util.Periodicity.firstInSeries("week",value);
			}
			return rg.util.Periodicity.firstInSeries("month",value);
		case "week":
			if(units < 31) return true; else return Date.fromTime(value).getDate() <= 7;
			break;
		default:
			var series = Reflect.field(rg.axis.AxisTime.snapping,this.periodicity), unit = rg.util.Periodicity.units(value,this.periodicity);
			if(null == series) return true;
			var _g = 0;
			while(_g < series.length) {
				var item = series[_g];
				++_g;
				if(units > item.to) continue;
				return 0 == unit % item.s;
			}
			var top = Reflect.field(rg.axis.AxisTime.snapping,this.periodicity + "top");
			if(null == top) top = 1;
			return 0 == unit % top;
		}
	}
	,ticks: function(start,end,upperBound) {
		var me = this;
		var span = end - start, units = rg.util.Periodicity.unitsBetween(start,end,this.periodicity), values = this.range(start,end), range = values.map(function(value,i) {
			return new rg.axis.TickmarkTime(value,values,me.isMajor(units,value),me.periodicity,me.scaleDistribution);
		});
		return rg.axis.Tickmarks.bound(range,upperBound);
	}
	,range: function(start,end) {
		return rg.util.Periodicity.range(start,end,this.periodicity);
	}
	,scale: function(start,end,v) {
		var values = this.range(start,end);
		return rg.axis.ScaleDistributions.distribute(this.scaleDistribution,values.indexOf(v),values.length);
	}
	,setScaleDistribution: function(v) {
		return this.scaleDistribution = v;
	}
	,min: function(stats,meta) {
		return stats.min;
	}
	,max: function(stats,meta) {
		return stats.max;
	}
	,createStats: function(type) {
		return new rg.axis.StatsNumeric(type);
	}
	,__class__: rg.axis.AxisTime
	,__properties__: {set_scaleDistribution:"setScaleDistribution"}
}
rg.graph.GEdge = $hxClasses["rg.graph.GEdge"] = function(graph,id,tail,head,weight,data) {
	rg.graph.GraphElement.call(this,graph,id,data);
	this.tail = tail;
	this.head = head;
	this.weight = weight;
}
rg.graph.GEdge.__name__ = ["rg","graph","GEdge"];
rg.graph.GEdge.create = function(graph,id,tail,head,weight,data) {
	return new rg.graph.GEdge(graph,id,tail,head,weight,data);
}
rg.graph.GEdge.__super__ = rg.graph.GraphElement;
rg.graph.GEdge.prototype = $extend(rg.graph.GraphElement.prototype,{
	tail: null
	,head: null
	,weight: null
	,destroy: function() {
		rg.graph.GraphElement.prototype.destroy.call(this);
		this.tail = null;
		this.head = null;
	}
	,split: function(times,dataf,edgef) {
		if(times == null) times = 1;
		if(times < 1) throw new thx.error.Error("the split times parameter must be an integer value greater than zero",null,null,{ fileName : "GEdge.hx", lineNumber : 37, className : "rg.graph.GEdge", methodName : "split"});
		if(null == edgef) edgef = function(_,_1,_2) {
		};
		if(null == dataf) dataf = function(_) {
			return null;
		};
		var last = this, result = [], node, e1, e2, g = last.graph;
		var _g = 0;
		while(_g < times) {
			var i = _g++;
			node = g.nodes.create(dataf(last));
			e1 = g.edges.create(last.tail,node,last.weight,last.data);
			e2 = g.edges.create(node,last.head,last.weight,last.data);
			g.edges.remove(last);
			edgef(e1,e2,i);
			last = e2;
			g = last.graph;
			result.push(e1);
		}
		result.push(last);
		return result;
	}
	,other: function(node) {
		if(node.graph != this.graph) throw new thx.error.Error("node is part of the edge graph",null,null,{ fileName : "GEdge.hx", lineNumber : 64, className : "rg.graph.GEdge", methodName : "other"});
		if(this.tail == node) return this.head; else if(this.head == node) return this.tail; else throw new thx.error.Error("node is not part of the edge",null,null,{ fileName : "GEdge.hx", lineNumber : 70, className : "rg.graph.GEdge", methodName : "other"});
	}
	,invert: function() {
		var inverted = this.graph.edges.create(this.head,this.tail,this.weight,this.data);
		this.graph.edges._remove(this);
		return inverted;
	}
	,remove: function() {
		this.graph.edges._remove(this);
	}
	,friendRemove: function() {
		return this.graph.edges;
	}
	,toString: function() {
		return null == this.graph?"Edge Destroyed":"Edge (n." + this.id + ", tail: n." + this.tail.id + ", head: n." + this.head.id + ", weight : " + this.weight + (null == this.data?"":", data: " + this.data) + ")";
	}
	,__class__: rg.graph.GEdge
});
rg.svg.chart.Geo = $hxClasses["rg.svg.chart.Geo"] = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
	this.mapcontainer = this.g.append("svg:g").attr("class").string("mapcontainer");
	this.queue = [];
	this.setColorMode(rg.svg.chart.ColorScaleMode.FromCss());
	this.resize();
}
rg.svg.chart.Geo.__name__ = ["rg","svg","chart","Geo"];
rg.svg.chart.Geo.__super__ = rg.svg.chart.Chart;
rg.svg.chart.Geo.prototype = $extend(rg.svg.chart.Chart.prototype,{
	mapcontainer: null
	,colorMode: null
	,variableDependent: null
	,dps: null
	,queue: null
	,setVariables: function(variableIndependents,variableDependents,data) {
		this.variableDependent = variableDependents[0];
	}
	,data: function(dps) {
		this.dps = dps;
		this.redraw();
	}
	,resize: function() {
		rg.svg.chart.Chart.prototype.resize.call(this);
		if(null != this.mapcontainer) this.mapcontainer.attr("transform").string("translate(" + this.width / 2 + "," + this.height / 2 + ")");
	}
	,dpvalue: function(dp) {
		return Reflect.field(dp,this.variableDependent.type);
	}
	,drawmap: function(map,field) {
		if(null == this.dps || 0 == this.dps.length) {
			this.queue.push((function(f,a1,a2) {
				return function() {
					return f(a1,a2);
				};
			})(this.drawmap.$bind(this),map,field));
			return;
		}
		this.setColorMode(map.colorMode);
		var text = null;
		var _g = 0, _g1 = this.dps;
		while(_g < _g1.length) {
			var dp = _g1[_g];
			++_g;
			var id = Reflect.field(dp,field), feature = map.map.get(id);
			if(null == feature) continue;
			this.stylefeature(feature.svg,Objects.copyTo(dp,feature.dp));
			if(null != map.radius && feature.svg.node().nodeName == "circle") feature.svg.attr("r")["float"](map.radius(feature.dp,this.variableDependent.stats));
			if(null != map.labelDataPoint && null != (text = map.labelDataPoint(feature.dp,this.variableDependent.stats))) {
				var c = Reflect.field(feature.dp,"#centroid");
				var label = new rg.svg.widget.Label(this.mapcontainer,true,false,false);
				label.setText(text);
				label.place(c[0],c[1],0);
			}
		}
		if(this.queue.length == 0) this.ready.dispatch();
	}
	,handlerDataPointOver: function(dp,f) {
		var text = f(dp,this.variableDependent.stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.html(text.split("\n").join("<br>"));
			var centroid = Reflect.field(dp,"#centroid");
			this.moveTooltip(centroid[0] + this.width / 2,centroid[1] + this.height / 2,true);
		}
	}
	,handlerClick: function(dp,f) {
		f(dp,this.variableDependent.stats);
	}
	,stylefeature: function(svg,dp) {
	}
	,redraw: function() {
		while(this.queue.length > 0) (this.queue.shift())();
	}
	,getColorMode: function() {
		return this.colorMode;
	}
	,setColorMode: function(v) {
		var me = this;
		var $e = (this.colorMode = v);
		switch( $e[1] ) {
		case 0:
			var g = $e[2];
			if(null == g) g = 1;
			var colors = rg.svg.util.RGCss.colorsInCss();
			if(colors.length > g) colors = colors.slice(0,g);
			if(colors.length == 1) colors.push(thx.color.Hsl.lighter(thx.color.Hsl.toHsl(thx.color.Colors.parse(colors[0])),0.9).hex("#"));
			colors.reverse();
			this.setColorMode(rg.svg.chart.ColorScaleMode.Interpolation(colors.map(function(s,_) {
				return thx.color.Colors.parse(s);
			})));
			break;
		case 1:
			var g = $e[2];
			if(null == g) g = rg.svg.util.RGCss.numberOfColorsInCss();
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(g * t);
				svg.attr("class").string("fill-" + index);
			};
			break;
		case 3:
			var c = $e[2];
			var colors = c.map(function(d,_) {
				return d.hex("#");
			});
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(colors.length * t);
				svg.style("fill").string(colors[index]);
			};
			break;
		case 2:
			var colors = $e[2];
			var interpolator = thx.color.Rgb.interpolateStepsf(colors);
			this.stylefeature = function(svg,dp) {
				var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type));
				svg.style("fill").string(interpolator(t).hex("#"));
			};
			break;
		case 4:
			var c = $e[2];
			var color = c.hex("#");
			this.stylefeature = function(svg,dp) {
				svg.style("fill").string(color);
			};
			break;
		case 5:
			var f = $e[2];
			this.stylefeature = function(svg,dp) {
				svg.style("fill").string(f(dp,me.variableDependent.stats));
			};
			break;
		}
		return v;
	}
	,init: function() {
		rg.svg.chart.Chart.prototype.init.call(this);
		if(null == this.tooltip) this.tooltip = new rg.html.widget.Tooltip();
		this.g.classed().add("geo");
	}
	,addMap: function(map,field) {
		if(null != field) map.onReady.add((function(f,a1,a2) {
			return function() {
				return f(a1,a2);
			};
		})(this.drawmap.$bind(this),map,field));
	}
	,__class__: rg.svg.chart.Geo
	,__properties__: $extend(rg.svg.chart.Chart.prototype.__properties__,{set_colorMode:"setColorMode",get_colorMode:"getColorMode"})
});
if(!thx.data) thx.data = {}
thx.data.ValueEncoder = $hxClasses["thx.data.ValueEncoder"] = function(handler) {
	this.handler = handler;
}
thx.data.ValueEncoder.__name__ = ["thx","data","ValueEncoder"];
thx.data.ValueEncoder.prototype = {
	handler: null
	,encode: function(o) {
		this.handler.start();
		this.encodeValue(o);
		this.handler.end();
	}
	,encodeValue: function(o) {
		var $e = (Type["typeof"](o));
		switch( $e[1] ) {
		case 0:
			this.handler["null"]();
			break;
		case 1:
			this.handler["int"](o);
			break;
		case 2:
			this.handler["float"](o);
			break;
		case 3:
			this.handler.bool(o);
			break;
		case 4:
			this.encodeObject(o);
			break;
		case 5:
			throw new thx.error.Error("unable to encode TFunction type",null,null,{ fileName : "ValueEncoder.hx", lineNumber : 39, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
			break;
		case 6:
			var c = $e[2];
			if(Std["is"](o,String)) this.handler.string(o); else if(Std["is"](o,Array)) this.encodeArray(o); else if(Std["is"](o,Date)) this.handler.date(o); else if(Std["is"](o,Hash)) this.encodeHash(o); else if(Std["is"](o,List)) this.encodeList(o); else throw new thx.error.Error("unable to encode class '{0}'",null,Type.getClassName(c),{ fileName : "ValueEncoder.hx", lineNumber : 53, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
			break;
		case 7:
			var e = $e[2];
			throw new thx.error.Error("unable to encode TEnum type '{0}'",null,Type.getEnumName(e),{ fileName : "ValueEncoder.hx", lineNumber : 55, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
			break;
		case 8:
			throw new thx.error.Error("unable to encode TUnknown type",null,null,{ fileName : "ValueEncoder.hx", lineNumber : 57, className : "thx.data.ValueEncoder", methodName : "encodeValue"});
			break;
		}
	}
	,encodeObject: function(o) {
		this.handler.startObject();
		var _g = 0, _g1 = Reflect.fields(o);
		while(_g < _g1.length) {
			var key = _g1[_g];
			++_g;
			this.handler.startField(key);
			this.encodeValue(Reflect.field(o,key));
			this.handler.endField();
		}
		this.handler.endObject();
	}
	,encodeHash: function(o) {
		this.handler.startObject();
		var $it0 = o.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this.handler.startField(key);
			this.encodeValue(o.get(key));
			this.handler.endField();
		}
		this.handler.endObject();
	}
	,encodeList: function(list) {
		this.handler.startArray();
		var $it0 = list.iterator();
		while( $it0.hasNext() ) {
			var item = $it0.next();
			this.handler.startItem();
			this.encodeValue(item);
			this.handler.endItem();
		}
		this.handler.endArray();
	}
	,encodeArray: function(a) {
		this.handler.startArray();
		var _g = 0;
		while(_g < a.length) {
			var item = a[_g];
			++_g;
			this.handler.startItem();
			this.encodeValue(item);
			this.handler.endItem();
		}
		this.handler.endArray();
	}
	,__class__: thx.data.ValueEncoder
}
hxevents.Notifier = $hxClasses["hxevents.Notifier"] = function() {
	this.handlers = new Array();
}
hxevents.Notifier.__name__ = ["hxevents","Notifier"];
hxevents.Notifier.stop = function() {
	throw hxevents.EventException.StopPropagation;
}
hxevents.Notifier.prototype = {
	handlers: null
	,add: function(h) {
		this.handlers.push(h);
		return h;
	}
	,addOnce: function(h) {
		var me = this;
		var _h = null;
		_h = function() {
			me.remove(_h);
			h();
		};
		this.add(_h);
		return _h;
	}
	,remove: function(h) {
		var _g1 = 0, _g = this.handlers.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
		}
		return null;
	}
	,clear: function() {
		this.handlers = new Array();
	}
	,dispatch: function() {
		try {
			var list = this.handlers.copy();
			var _g = 0;
			while(_g < list.length) {
				var l = list[_g];
				++_g;
				l();
			}
			return true;
		} catch( exc ) {
			if( js.Boot.__instanceof(exc,hxevents.EventException) ) {
				return false;
			} else throw(exc);
		}
	}
	,dispatchAndAutomate: function() {
		this.dispatch();
		this.handlers = [];
		this.add = function(h) {
			h();
			return h;
		};
	}
	,has: function(h) {
		if(null == h) return this.handlers.length > 0; else {
			var _g = 0, _g1 = this.handlers;
			while(_g < _g1.length) {
				var handler = _g1[_g];
				++_g;
				if(h == handler) return true;
			}
			return false;
		}
	}
	,__class__: hxevents.Notifier
}
rg.html.widget.Logo = $hxClasses["rg.html.widget.Logo"] = function(container,padright) {
	this.mapvalues = new Hash();
	this.padRight = padright;
	this.id = ++rg.html.widget.Logo._id;
	this.container = container;
	this.create();
	var timer = new haxe.Timer(5000);
	timer.run = this.live.$bind(this);
}
rg.html.widget.Logo.__name__ = ["rg","html","widget","Logo"];
rg.html.widget.Logo.position = function(el) {
	var p = { x : el.offsetLeft || 0, y : el.offsetTop || 0};
	while(null != (el = el.offsetParent)) {
		p.x += el.offsetLeft;
		p.y += el.offsetTop;
	}
	return p;
}
rg.html.widget.Logo.prototype = {
	chartContainer: null
	,container: null
	,frame: null
	,anchor: null
	,image: null
	,id: null
	,mapvalues: null
	,padRight: null
	,live: function() {
		if(this.container.select("div.reportgridbrandcontainer").empty()) this.createFrame(); else this.updateFrame();
		if(thx.js.Dom.select("body").select("a.reportgridbrandanchor" + this.id).empty()) this.createAnchor(); else this.updateAnchor();
		if(this.anchor.select("img").empty()) this.createImage(); else this.updateImage();
	}
	,create: function() {
		this.createFrame();
		this.createAnchor();
		this.createImage();
	}
	,createFrame: function() {
		this.chartContainer = this.container.select("*");
		this.frame = this.container.insert("div",this.chartContainer.node()).attr("class").string("reportgridbrandcontainer");
		this.updateFrame();
	}
	,createAnchor: function() {
		this.anchor = thx.js.Dom.select("body").append("a").attr("class").string("reportgridbrandanchor" + this.id).attr("target").string("_blank");
		this.updateAnchor();
	}
	,createImage: function() {
		this.image = this.anchor.append("img");
		this.updateImage();
	}
	,updateFrame: function() {
		this.setStyle(this.frame,"display","block");
		this.setStyle(this.frame,"opacity","1");
		this.setStyle(this.frame,"width","100%");
		this.setStyle(this.frame,"height",29 + "px");
		this.setStyle(this.frame,"position","relative");
	}
	,setStyle: function(s,name,value) {
		var key = "style:" + name + ":" + value, v;
		if(null != (v = this.mapvalues.get(key)) && v != s.style(name).get()) s.style(name).string(v,"important"); else if(null == v) {
			s.style(name).string(value,"important");
			this.mapvalues.set(key,s.style(name).get());
		}
	}
	,setAttr: function(s,name,value) {
		var key = "attr:" + name + ":" + value, v;
		if(null != (v = this.mapvalues.get(key)) && v != s.attr(name).get()) s.attr(name).string(v); else if(null == v) {
			s.attr(name).string(value);
			this.mapvalues.set(key,s.attr(name).get());
		}
	}
	,updateAnchor: function() {
		var body = js.Lib.document.body, len = body.childNodes.length;
		if(thx.js.Dom.select("body > :last").node() != this.anchor.node()) body.appendChild(this.anchor.node());
		var pos = rg.html.widget.Logo.position(this.frame.node()), width = this.frame.style("width").getFloat();
		this.setAttr(this.anchor,"title","Powered by ReportGrid");
		this.setAttr(this.anchor,"href","http://www.reportgrid.com/charts/");
		this.setStyle(this.anchor,"z-index","2147483647");
		this.setStyle(this.anchor,"display","block");
		this.setStyle(this.anchor,"opacity","1");
		this.setStyle(this.anchor,"position","absolute");
		this.setStyle(this.anchor,"height",29 + "px");
		this.setStyle(this.anchor,"width",194 + "px");
		this.setStyle(this.anchor,"top",pos.y + "px");
		this.setStyle(this.anchor,"left",pos.x - 194 + width - this.padRight + "px");
	}
	,updateImage: function() {
		this.setAttr(this.image,"src",this.getLogo());
		this.setAttr(this.image,"title","Powered by ReportGrid");
		this.setAttr(this.image,"height","" + 29);
		this.setAttr(this.image,"width","" + 194);
		this.setStyle(this.image,"opacity","1");
		this.setStyle(this.image,"border","none");
		this.setStyle(this.image,"height",29 + "px");
		this.setStyle(this.image,"width",194 + "px");
	}
	,getLogo: function() {
		return "http://api.reportgrid.com/css/images/reportgrid-clear.png";
	}
	,__class__: rg.html.widget.Logo
}
thx.math.EaseMode = $hxClasses["thx.math.EaseMode"] = { __ename__ : ["thx","math","EaseMode"], __constructs__ : ["EaseIn","EaseOut","EaseInEaseOut","EaseOutEaseIn"] }
thx.math.EaseMode.EaseIn = ["EaseIn",0];
thx.math.EaseMode.EaseIn.toString = $estr;
thx.math.EaseMode.EaseIn.__enum__ = thx.math.EaseMode;
thx.math.EaseMode.EaseOut = ["EaseOut",1];
thx.math.EaseMode.EaseOut.toString = $estr;
thx.math.EaseMode.EaseOut.__enum__ = thx.math.EaseMode;
thx.math.EaseMode.EaseInEaseOut = ["EaseInEaseOut",2];
thx.math.EaseMode.EaseInEaseOut.toString = $estr;
thx.math.EaseMode.EaseInEaseOut.__enum__ = thx.math.EaseMode;
thx.math.EaseMode.EaseOutEaseIn = ["EaseOutEaseIn",3];
thx.math.EaseMode.EaseOutEaseIn.toString = $estr;
thx.math.EaseMode.EaseOutEaseIn.__enum__ = thx.math.EaseMode;
thx.js.BoundSelection = $hxClasses["thx.js.BoundSelection"] = function(groups) {
	thx.js.BaseSelection.call(this,groups);
}
thx.js.BoundSelection.__name__ = ["thx","js","BoundSelection"];
thx.js.BoundSelection.__super__ = thx.js.BaseSelection;
thx.js.BoundSelection.prototype = $extend(thx.js.BaseSelection.prototype,{
	html: function() {
		return new thx.js.AccessDataHtml(this);
	}
	,text: function() {
		return new thx.js.AccessDataText(this);
	}
	,attr: function(name) {
		return new thx.js.AccessDataAttribute(name,this);
	}
	,classed: function() {
		return new thx.js.AccessDataClassed(this);
	}
	,property: function(name) {
		return new thx.js.AccessDataProperty(name,this);
	}
	,style: function(name) {
		return new thx.js.AccessDataStyle(name,this);
	}
	,transition: function() {
		return new thx.js.BoundTransition(this);
	}
	,data: function(d,join) {
		var update = [], enter = [], exit = [];
		if(null == join) {
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				thx.js.BaseSelection.bind(group,d,update,enter,exit);
			}
		} else {
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				thx.js.BaseSelection.bindJoin(join,group,d,update,enter,exit);
			}
		}
		return new thx.js.DataChoice(update,enter,exit);
	}
	,dataf: function(fd,join) {
		if(null == join) {
			var update = [], enter = [], exit = [], i = 0;
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				thx.js.BaseSelection.bind(group,fd(Reflect.field(group.parentNode,"__data__"),i++),update,enter,exit);
			}
			return new thx.js.DataChoice(update,enter,exit);
		} else {
			var update = [], enter = [], exit = [], i = 0;
			var _g = 0, _g1 = this.groups;
			while(_g < _g1.length) {
				var group = _g1[_g];
				++_g;
				thx.js.BaseSelection.bindJoin(join,group,fd(Reflect.field(group.parentNode,"__data__"),i++),update,enter,exit);
			}
			return new thx.js.DataChoice(update,enter,exit);
		}
	}
	,selfData: function() {
		return this.dataf(function(d,_) {
			return d;
		});
	}
	,each: function(f) {
		return this.eachNode(function(n,i) {
			f(Reflect.field(n,"__data__"),i);
		});
	}
	,sort: function(comparator) {
		return this.sortNode(function(a,b) {
			return comparator(Reflect.field(a,"__data__"),Reflect.field(b,"__data__"));
		});
	}
	,filter: function(f) {
		return this.filterNode(function(n,i) {
			return f(Reflect.field(n,"__data__"),i);
		});
	}
	,map: function(f) {
		var ngroups = [];
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			var ngroup = new thx.js.Group([]);
			var i = 0;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node = $it0.next();
				if(null != node) node["__data__"] = f(Reflect.field(node,"__data__"),i++);
				ngroup.nodes.push(node);
			}
			ngroups.push(ngroup);
		}
		return this.createSelection(ngroups);
	}
	,first: function(f) {
		return this.firstNode(function(n) {
			return f(Reflect.field(n,"__data__"));
		});
	}
	,on: function(type,listener,capture) {
		if(capture == null) capture = false;
		return this.onNode(type,null == listener?null:function(n,i) {
			listener(Reflect.field(n,"__data__"),i);
		},capture);
	}
	,__class__: thx.js.BoundSelection
});
thx.js.UpdateSelection = $hxClasses["thx.js.UpdateSelection"] = function(update,choice) {
	thx.js.BoundSelection.call(this,update);
	this._choice = choice;
}
thx.js.UpdateSelection.__name__ = ["thx","js","UpdateSelection"];
thx.js.UpdateSelection.__super__ = thx.js.BoundSelection;
thx.js.UpdateSelection.prototype = $extend(thx.js.BoundSelection.prototype,{
	_choice: null
	,createSelection: function(groups) {
		return new thx.js.UpdateSelection(groups,this._choice);
	}
	,update: function() {
		return this;
	}
	,enter: function() {
		return this._choice.enter();
	}
	,exit: function() {
		return this._choice.exit();
	}
	,__class__: thx.js.UpdateSelection
});
thx.js.DataChoice = $hxClasses["thx.js.DataChoice"] = function(update,enter,exit) {
	this._update = update;
	this._enter = enter;
	this._exit = exit;
	thx.js.UpdateSelection.call(this,this._update,this);
}
thx.js.DataChoice.__name__ = ["thx","js","DataChoice"];
thx.js.DataChoice.merge = function(groups,dc) {
	thx.js.Group.merge(groups,dc._update);
}
thx.js.DataChoice.__super__ = thx.js.UpdateSelection;
thx.js.DataChoice.prototype = $extend(thx.js.UpdateSelection.prototype,{
	_update: null
	,_enter: null
	,_exit: null
	,enter: function() {
		return new thx.js.PreEnterSelection(this._enter,this);
	}
	,exit: function() {
		return new thx.js.ExitSelection(this._exit,this);
	}
	,__class__: thx.js.DataChoice
});
thx.js.ResumeSelection = $hxClasses["thx.js.ResumeSelection"] = function(groups) {
	thx.js.BoundSelection.call(this,groups);
}
thx.js.ResumeSelection.__name__ = ["thx","js","ResumeSelection"];
thx.js.ResumeSelection.create = function(groups) {
	return new thx.js.ResumeSelection(groups);
}
thx.js.ResumeSelection.__super__ = thx.js.BoundSelection;
thx.js.ResumeSelection.prototype = $extend(thx.js.BoundSelection.prototype,{
	createSelection: function(groups) {
		return new thx.js.ResumeSelection(groups);
	}
	,__class__: thx.js.ResumeSelection
});
thx.js.PreEnterSelection = $hxClasses["thx.js.PreEnterSelection"] = function(enter,choice) {
	this.groups = enter;
	this._choice = choice;
}
thx.js.PreEnterSelection.__name__ = ["thx","js","PreEnterSelection"];
thx.js.PreEnterSelection.prototype = {
	groups: null
	,_choice: null
	,append: function(name) {
		var qname = thx.xml.Namespace.qualify(name);
		var append = function(node) {
			var n = js.Lib.document.createElement(name);
			node.appendChild(n);
			return n;
		};
		var appendNS = function(node) {
			var n = js.Lib.document.createElementNS(qname.space,qname.local);
			node.appendChild(n);
			return n;
		};
		return this._select(null == qname?append:appendNS);
	}
	,insert: function(name,before,beforeSelector) {
		var qname = thx.xml.Namespace.qualify(name);
		var insertDom = function(node) {
			var n = js.Lib.document.createElement(name), bf = null != before?before:thx.js.Dom.selectNode(node).select(beforeSelector).node();
			node.insertBefore(n,bf);
			return n;
		};
		var insertNsDom = function(node) {
			var n = js.Lib.document.createElementNS(qname.space,qname.local), bf = null != before?before:thx.js.Dom.selectNode(node).select(beforeSelector).node();
			node.insertBefore(n,bf);
			return n;
		};
		return this._select(null == qname?insertDom:insertNsDom);
	}
	,createSelection: function(groups) {
		return new thx.js.EnterSelection(groups,this._choice);
	}
	,_select: function(selectf) {
		var subgroups = [], subgroup, subnode, node;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			subgroups.push(subgroup = new thx.js.Group([]));
			subgroup.parentNode = group.parentNode;
			var $it0 = group.nodes.iterator();
			while( $it0.hasNext() ) {
				var node1 = $it0.next();
				if(null != node1) {
					subgroup.nodes.push(subnode = selectf(group.parentNode));
					subnode["__data__"] = Reflect.field(node1,"__data__");
				} else subgroup.nodes.push(null);
			}
		}
		thx.js.DataChoice.merge(subgroups,this._choice);
		return this.createSelection(subgroups);
	}
	,__class__: thx.js.PreEnterSelection
}
thx.js.EnterSelection = $hxClasses["thx.js.EnterSelection"] = function(enter,choice) {
	thx.js.BoundSelection.call(this,enter);
	this._choice = choice;
}
thx.js.EnterSelection.__name__ = ["thx","js","EnterSelection"];
thx.js.EnterSelection.__super__ = thx.js.BoundSelection;
thx.js.EnterSelection.prototype = $extend(thx.js.BoundSelection.prototype,{
	_choice: null
	,createSelection: function(groups) {
		return new thx.js.EnterSelection(groups,this._choice);
	}
	,exit: function() {
		return this._choice.exit();
	}
	,update: function() {
		return this._choice;
	}
	,__class__: thx.js.EnterSelection
});
thx.js.ExitSelection = $hxClasses["thx.js.ExitSelection"] = function(exit,choice) {
	thx.js.UnboundSelection.call(this,exit);
	this._choice = choice;
}
thx.js.ExitSelection.__name__ = ["thx","js","ExitSelection"];
thx.js.ExitSelection.__super__ = thx.js.UnboundSelection;
thx.js.ExitSelection.prototype = $extend(thx.js.UnboundSelection.prototype,{
	_choice: null
	,createSelection: function(groups) {
		return new thx.js.ExitSelection(groups,this._choice);
	}
	,enter: function() {
		return this._choice.enter();
	}
	,update: function() {
		return this._choice;
	}
	,__class__: thx.js.ExitSelection
});
rg.data.VariableDependent = $hxClasses["rg.data.VariableDependent"] = function(type,scaleDistribution) {
	rg.data.Variable.call(this,type,scaleDistribution);
}
rg.data.VariableDependent.__name__ = ["rg","data","VariableDependent"];
rg.data.VariableDependent.__super__ = rg.data.Variable;
rg.data.VariableDependent.prototype = $extend(rg.data.Variable.prototype,{
	__class__: rg.data.VariableDependent
});
rg.info.InfoDownload = $hxClasses["rg.info.InfoDownload"] = function() {
	this.service = rg.RGConst.SERVICE_RENDERING_STATIC;
	this.formats = ["png","jpg","pdf"];
}
rg.info.InfoDownload.__name__ = ["rg","info","InfoDownload"];
rg.info.InfoDownload.filters = function() {
	return [{ field : "handler", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "service", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "background", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "formats", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "position", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "position", value : rg.html.widget.DownloaderPositions.parse(v)}];
	}}];
}
rg.info.InfoDownload.prototype = {
	handler: null
	,service: null
	,background: null
	,position: null
	,formats: null
	,__class__: rg.info.InfoDownload
}
math.reduction.Barrett = $hxClasses["math.reduction.Barrett"] = function(m) {
	this.r2 = math.BigInteger.nbi();
	this.q3 = math.BigInteger.nbi();
	math.BigInteger.getONE().dlShiftTo(2 * m.t,this.r2);
	this.mu = this.r2.div(m);
	this.m = m;
}
math.reduction.Barrett.__name__ = ["math","reduction","Barrett"];
math.reduction.Barrett.__interfaces__ = [math.reduction.ModularReduction];
math.reduction.Barrett.prototype = {
	m: null
	,mu: null
	,r2: null
	,q3: null
	,convert: function(x) {
		if(x.sign < 0 || x.t > 2 * this.m.t) return x.mod(this.m); else if(x.compare(this.m) < 0) return x; else {
			var r = math.BigInteger.nbi();
			x.copyTo(r);
			this.reduce(r);
			return r;
		}
	}
	,revert: function(x) {
		return x;
	}
	,reduce: function(x) {
		x.drShiftTo(this.m.t - 1,this.r2);
		if(x.t > this.m.t + 1) {
			x.t = this.m.t + 1;
			x.clamp();
		}
		this.mu.multiplyUpperTo(this.r2,this.m.t + 1,this.q3);
		this.m.multiplyLowerTo(this.q3,this.m.t + 1,this.r2);
		while(x.compare(this.r2) < 0) x.dAddOffset(1,this.m.t + 1);
		x.subTo(this.r2,x);
		while(x.compare(this.m) >= 0) x.subTo(this.m,x);
	}
	,sqrTo: function(x,r) {
		x.squareTo(r);
		this.reduce(r);
	}
	,mulTo: function(x,y,r) {
		x.multiplyTo(y,r);
		this.reduce(r);
	}
	,__class__: math.reduction.Barrett
}
var Constants = $hxClasses["Constants"] = function() { }
Constants.__name__ = ["Constants"];
Constants.prototype = {
	__class__: Constants
}
rg.factory.FactoryVariable = $hxClasses["rg.factory.FactoryVariable"] = function() {
	this.independentFactory = new rg.factory.FactoryVariableIndependent();
	this.dependentFactory = new rg.factory.FactoryVariableDependent();
}
rg.factory.FactoryVariable.__name__ = ["rg","factory","FactoryVariable"];
rg.factory.FactoryVariable.prototype = {
	independentFactory: null
	,dependentFactory: null
	,createVariables: function(arr) {
		var me = this;
		return arr.map(function(info,_) {
			switch( (info.variableType)[1] ) {
			case 1:
				return me.independentFactory.create(info);
			case 2:
				return me.dependentFactory.create(info,null);
			case 0:
				return me.dependentFactory.create(info,null);
			}
		});
	}
	,createIndependents: function(info) {
		var result = [], ordinal, discrete, ctx;
		var _g = 0;
		while(_g < info.length) {
			var i = info[_g];
			++_g;
			var moveon = (function($this) {
				var $r;
				switch( (i.variableType)[1] ) {
				case 1:
					$r = false;
					break;
				case 0:
					$r = true;
					break;
				default:
					$r = true;
				}
				return $r;
			}(this));
			if(moveon) continue;
			result.push(this.independentFactory.create(i));
		}
		return result;
	}
	,createDependents: function(info) {
		var result = [], ordinal;
		var _g = 0;
		while(_g < info.length) {
			var i = info[_g];
			++_g;
			var moveon = (function($this) {
				var $r;
				switch( (i.variableType)[1] ) {
				case 2:
					$r = false;
					break;
				case 0:
					$r = false;
					break;
				default:
					$r = true;
				}
				return $r;
			}(this));
			if(moveon) continue;
			result.push(this.dependentFactory.create(i,null));
		}
		return result;
	}
	,__class__: rg.factory.FactoryVariable
}
rg.svg.chart.PieChart = $hxClasses["rg.svg.chart.PieChart"] = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
	this.addClass("pie-chart");
	this.g.append("svg:defs");
	this.pie = new thx.geom.layout.Pie();
	this.gradientLightness = 0.75;
	this.displayGradient = true;
	this.animationDelay = 0;
	this.innerRadius = 0.0;
	this.outerRadius = 0.9;
	this.overRadius = 0.95;
	this.labelRadius = 0.45;
	this.tooltipRadius = 0.5;
	this.labels = new Hash();
	this.labelOrientation = rg.svg.widget.LabelOrientation.Orthogonal;
	this.labelDontFlip = true;
}
rg.svg.chart.PieChart.__name__ = ["rg","svg","chart","PieChart"];
rg.svg.chart.PieChart.__super__ = rg.svg.chart.Chart;
rg.svg.chart.PieChart.prototype = $extend(rg.svg.chart.Chart.prototype,{
	innerRadius: null
	,outerRadius: null
	,overRadius: null
	,labelRadius: null
	,tooltipRadius: null
	,arcNormal: null
	,arcStart: null
	,arcBig: null
	,pie: null
	,radius: null
	,stats: null
	,variableDependent: null
	,gradientLightness: null
	,displayGradient: null
	,animationDelay: null
	,labelOrientation: null
	,labelDontFlip: null
	,labels: null
	,mouseClick: null
	,setVariables: function(variableIndependents,variableDependents) {
		this.variableDependent = variableDependents[0];
	}
	,resize: function() {
		rg.svg.chart.Chart.prototype.resize.call(this);
		this.radius = Math.min(this.width,this.height) / 2;
		this.arcStart = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.innerRadius);
		this.arcNormal = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.outerRadius);
		this.arcBig = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.overRadius);
		if(this.width > this.height) this.g.attr("transform").string("translate(" + (this.width / 2 - this.height / 2) + ",0)"); else this.g.attr("transform").string("translate(0," + (this.height / 2 - this.width / 2) + ")");
	}
	,data: function(dp) {
		var pv = this.variableDependent.type;
		dp = Arrays.filter(dp,function(dp1) {
			return Reflect.field(dp1,pv) > 0;
		});
		this.stats = this.variableDependent.stats;
		var choice = this.g.selectAll("g.group").data(this.pief(dp),this.id.$bind(this));
		var enter = choice.enter();
		var arc = enter.append("svg:g").attr("class").stringf(function(d,i) {
			return "group fill-" + i;
		}).attr("transform").string("translate(" + this.radius + "," + this.radius + ")");
		var path = arc.append("svg:path").attr("class").string("slice");
		if(this.displayGradient) arc.eachNode(this.applyGradient.$bind(this));
		if(this.animated) {
			path.attr("d").stringf(this.arcShape(this.arcStart));
			arc.eachNode(this.fadein.$bind(this)).onNode("mouseover.animation",this.highlight.$bind(this)).onNode("mouseout.animation",this.backtonormal.$bind(this));
		} else path.attr("d").stringf(this.arcShape(this.arcNormal));
		arc.onNode("mouseover.label",this.onMouseOver.$bind(this));
		if(null != this.labelDataPoint) arc.eachNode(this.appendLabel.$bind(this));
		if(null != this.mouseClick) arc.onNode("click.user",this.onMouseClick.$bind(this));
		choice.update().select("path").transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
		if(null != this.labelDataPoint) choice.update().eachNode(this.updateLabel.$bind(this));
		choice.exit().eachNode(this.removeLabel.$bind(this)).remove();
		this.ready.dispatch();
	}
	,onMouseOver: function(dom,i) {
		if(null == this.labelDataPointOver) return;
		var d = Reflect.field(dom,"__data__"), text = this.labelDataPointOver(d.dp,this.stats);
		if(null == text) this.tooltip.hide(); else {
			var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2, r = this.radius * this.tooltipRadius;
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(this.width / 2 + Math.cos(a) * r,this.height / 2 + Math.sin(a) * r);
		}
	}
	,onMouseClick: function(dom,i) {
		var d = Reflect.field(dom,"__data__");
		this.mouseClick(d.dp);
	}
	,removeLabel: function(dom,i) {
		var n = thx.js.Dom.selectNode(dom), d = Reflect.field(dom,"__data__");
		var label = this.labels.get(d.id);
		label.destroy();
		this.labels.remove(d.id);
	}
	,updateLabel: function(dom,i) {
		var n = thx.js.Dom.selectNode(dom), d = Reflect.field(dom,"__data__"), label = this.labels.get(d.id), r = this.radius * this.labelRadius, a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
		label.setText(this.labelDataPoint(d.dp,this.stats));
		label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
	}
	,appendLabel: function(dom,i) {
		var n = thx.js.Dom.selectNode(dom), label = new rg.svg.widget.Label(n,this.labelDontFlip,true,true), d = Reflect.field(dom,"__data__"), r = this.radius * this.labelRadius, a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
		label.setOrientation(this.labelOrientation);
		switch( (this.labelOrientation)[1] ) {
		case 0:
			label.setAnchor(rg.svg.widget.GridAnchor.Center);
			break;
		case 1:
			label.setAnchor(rg.svg.widget.GridAnchor.Left);
			break;
		case 2:
			label.setAnchor(rg.svg.widget.GridAnchor.Top);
			break;
		}
		label.setText(this.labelDataPoint(d.dp,this.stats));
		label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
		this.labels.set(d.id,label);
	}
	,applyGradient: function(n,i) {
		var gn = thx.js.Dom.selectNodeData(n), dp = Reflect.field(n,"__data__"), id = dp.id;
		if(this.g.select("defs").select("#rg_pie_gradient_" + id).empty()) {
			var slice = gn.select("path.slice"), shape = this.arcNormal.shape(Reflect.field(n,"__data__")), t = gn.append("svg:path").attr("d").string(shape), box = (function($this) {
				var $r;
				try {
					$r = t.node().getBBox();
				} catch( e ) {
					$r = { x : 0.0, y : 0.0, width : 0.0, height : 0.0};
				}
				return $r;
			}(this));
			t.remove();
			var color = rg.util.RGColors.parse(slice.style("fill").get(),"#cccccc"), scolor = rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),this.gradientLightness);
			var ratio = box.width / box.height, cx = -box.x * 100 / box.width / ratio, cy = -box.y * 100 / box.height / ratio;
			var r = 100 * (box.width > box.height?Math.min(1,this.radius * this.outerRadius / box.width):Math.max(1,this.radius * this.outerRadius / box.width));
			var stops = this.g.select("defs").append("svg:radialGradient").attr("id").string("rg_pie_gradient_" + id).attr("cx").string(cx * ratio + "%").attr("cy").string(cy + "%").attr("gradientTransform").string("scale(1 " + ratio + ")").attr("r").string(r + "%");
			stops.append("svg:stop").attr("offset").string(100 * this.innerRadius + "%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
			stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(scolor.toRgbString()).attr("stop-opacity")["float"](1);
		}
		gn.select("path.slice").attr("style").string("fill:url(#rg_pie_gradient_" + id + ")");
	}
	,fadein: function(n,i) {
		var gn = thx.js.Dom.selectNodeData(n), shape = this.arcNormal.shape(Reflect.field(n,"__data__"));
		gn.selectAll("path.slice").transition().ease(this.animationEase).duration(null,this.animationDuration).delay(null,this.animationDelay).attr("d").string(shape);
	}
	,highlight: function(d,i) {
		var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
		slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcBig));
	}
	,backtonormal: function(d,i) {
		var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
		slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
	}
	,id: function(dp,i) {
		return dp.id;
	}
	,makeid: function(dp) {
		var c = Objects.clone(dp);
		Reflect.deleteField(c,this.variableDependent.type);
		return haxe.Md5.encode(Dynamics.string(c));
	}
	,arcShape: function(a) {
		return function(d,i) {
			return a.shape(d);
		};
	}
	,pief: function(dp) {
		var name = this.variableDependent.type, temp = dp.map(function(d,i) {
			return Reflect.field(d,name);
		}), arr = this.pie.pie(temp);
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			var id = this.makeid(dp[i]);
			arr[i]["id"] = id;
			arr[i]["dp"] = dp[i];
		}
		return arr;
	}
	,destroy: function() {
		var $it0 = this.labels.iterator();
		while( $it0.hasNext() ) {
			var label = $it0.next();
			label.destroy();
		}
		rg.svg.chart.Chart.prototype.destroy.call(this);
	}
	,__class__: rg.svg.chart.PieChart
});
thx.color.Cmyk = $hxClasses["thx.color.Cmyk"] = function(cyan,magenta,yellow,black) {
	thx.color.Rgb.call(this,Ints.interpolate(Floats.normalize(1 - cyan - black),0,255,null),Ints.interpolate(Floats.normalize(1 - magenta - black),0,255,null),Ints.interpolate(Floats.normalize(1 - yellow - black),0,255,null));
	this.cyan = Floats.normalize(cyan);
	this.magenta = Floats.normalize(magenta);
	this.yellow = Floats.normalize(yellow);
	this.black = Floats.normalize(black);
}
thx.color.Cmyk.__name__ = ["thx","color","Cmyk"];
thx.color.Cmyk.toCmyk = function(rgb) {
	var c = 0.0, y = 0.0, m = 0.0, k;
	if(rgb.red + rgb.blue + rgb.green == 0) k = 1.0; else {
		c = 1 - rgb.red / 255;
		m = 1 - rgb.green / 255;
		y = 1 - rgb.blue / 255;
		k = Floats.min(c < m?c:m,y);
		c = (c - k) / (1 - k);
		m = (m - k) / (1 - k);
		y = (y - k) / (1 - k);
	}
	return new thx.color.Cmyk(c,m,y,k);
}
thx.color.Cmyk.equals = function(a,b) {
	return a.black == b.black && a.cyan == b.cyan && a.magenta == b.magenta && a.yellow == b.yellow;
}
thx.color.Cmyk.darker = function(color,t,equation) {
	return new thx.color.Cmyk(color.cyan,color.magenta,color.yellow,Floats.interpolate(t,color.black,0,equation));
}
thx.color.Cmyk.lighter = function(color,t,equation) {
	return new thx.color.Cmyk(color.cyan,color.magenta,color.yellow,Floats.interpolate(t,color.black,1,equation));
}
thx.color.Cmyk.interpolate = function(a,b,t,equation) {
	return new thx.color.Cmyk(Floats.interpolate(t,a.cyan,b.cyan,equation),Floats.interpolate(t,a.magenta,b.magenta,equation),Floats.interpolate(t,a.yellow,b.yellow,equation),Floats.interpolate(t,a.black,b.black,equation));
}
thx.color.Cmyk.__super__ = thx.color.Rgb;
thx.color.Cmyk.prototype = $extend(thx.color.Rgb.prototype,{
	black: null
	,cyan: null
	,magenta: null
	,yellow: null
	,toCmykString: function() {
		return "cmyk(" + this.cyan + "," + this.magenta + "," + this.yellow + "," + this.black + ")";
	}
	,__class__: thx.color.Cmyk
});
haxe.BaseCode = $hxClasses["haxe.BaseCode"] = function(base) {
	var len = base.length;
	var nbits = 1;
	while(len > 1 << nbits) nbits++;
	if(nbits > 8 || len != 1 << nbits) throw "BaseCode : base length must be a power of two.";
	this.base = base;
	this.nbits = nbits;
}
haxe.BaseCode.__name__ = ["haxe","BaseCode"];
haxe.BaseCode.encode = function(s,base) {
	var b = new haxe.BaseCode(Bytes.ofString(base));
	return b.encodeString(s);
}
haxe.BaseCode.decode = function(s,base) {
	var b = new haxe.BaseCode(Bytes.ofString(base));
	return b.decodeString(s);
}
haxe.BaseCode.prototype = {
	base: null
	,nbits: null
	,tbl: null
	,encodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		var size = Std["int"](b.length * 8 / nbits);
		var out = Bytes.alloc(size + (b.length * 8 % nbits == 0?0:1));
		var buf = 0;
		var curbits = 0;
		var mask = (1 << nbits) - 1;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < nbits) {
				curbits += 8;
				buf <<= 8;
				buf |= b.b[pin++];
			}
			curbits -= nbits;
			out.b[pout++] = base.b[buf >> curbits & mask] & 255;
		}
		if(curbits > 0) out.b[pout++] = base.b[buf << nbits - curbits & mask] & 255;
		return out;
	}
	,initTable: function() {
		var tbl = new Array();
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			tbl[i] = -1;
		}
		var _g1 = 0, _g = this.base.length;
		while(_g1 < _g) {
			var i = _g1++;
			tbl[this.base.b[i]] = i;
		}
		this.tbl = tbl;
	}
	,decodeBytes: function(b) {
		var nbits = this.nbits;
		var base = this.base;
		if(this.tbl == null) this.initTable();
		var tbl = this.tbl;
		var size = b.length * nbits >> 3;
		var out = Bytes.alloc(size);
		var buf = 0;
		var curbits = 0;
		var pin = 0;
		var pout = 0;
		while(pout < size) {
			while(curbits < 8) {
				curbits += nbits;
				buf <<= nbits;
				var i = tbl[b.b[pin++]];
				if(i == -1) throw "BaseCode : invalid encoded char";
				buf |= i;
			}
			curbits -= 8;
			out.b[pout++] = buf >> curbits & 255 & 255;
		}
		return out;
	}
	,encodeString: function(s) {
		return this.encodeBytes(Bytes.ofString(s)).toString();
	}
	,decodeString: function(s) {
		return this.decodeBytes(Bytes.ofString(s)).toString();
	}
	,__class__: haxe.BaseCode
}
rg.factory.FactoryAxis = $hxClasses["rg.factory.FactoryAxis"] = function() {
}
rg.factory.FactoryAxis.__name__ = ["rg","factory","FactoryAxis"];
rg.factory.FactoryAxis.prototype = {
	create: function(type,isnumeric,variable,samples) {
		if(null != samples && samples.length > 0) return new rg.axis.AxisOrdinalFixedValues(samples); else if(true == isnumeric) return new rg.axis.AxisNumeric(); else if(false == isnumeric) return new rg.axis.AxisOrdinalStats(variable); else return null;
	}
	,createDiscrete: function(type,variable,samples,groupBy) {
		if(type.indexOf("time:") >= 0) {
			if(null != groupBy) return new rg.axis.AxisGroupByTime(type.substr(type.indexOf("time:") + "time:".length)); else return new rg.axis.AxisTime(type.substr(type.indexOf("time:") + "time:".length));
		} else if(null != samples && samples.length > 0) return new rg.axis.AxisOrdinalFixedValues(samples);
		return new rg.axis.AxisOrdinalStats(variable);
	}
	,__class__: rg.factory.FactoryAxis
}
rg.util.ChainedExecutor = $hxClasses["rg.util.ChainedExecutor"] = function(handler) {
	this.handler = handler;
	this.actions = [];
	this.pos = 0;
	this.executor = Reflect.field(this,"execute");
}
rg.util.ChainedExecutor.__name__ = ["rg","util","ChainedExecutor"];
rg.util.ChainedExecutor.prototype = {
	handler: null
	,actions: null
	,pos: null
	,addAction: function(handler) {
		this.actions.push(handler);
	}
	,execute: function(ob) {
		if(this.pos == this.actions.length) {
			this.pos = 0;
			this.handler(ob);
		} else this.actions[this.pos++](ob,this.execute.$bind(this));
	}
	,executor: null
	,__class__: rg.util.ChainedExecutor
}
rg.svg.widget.DiagonalArea = $hxClasses["rg.svg.widget.DiagonalArea"] = function(container,classarea,classborder) {
	this.g = container.append("svg:g").attr("class").string("diagonal");
	this.diagonal = thx.svg.Diagonal.forArray().projection(function(a,_) {
		return [a[1],a[0]];
	});
	this.area = this.g.append("svg:path").attr("class").string("diagonal-fill" + (null == classarea?"":" " + classarea));
	this.before = this.g.append("svg:path").attr("class").string("diagonal-stroke before" + (null == classborder?"":" " + classborder));
	this.after = this.g.append("svg:path").attr("class").string("diagonal-stroke after" + (null == classborder?"":" " + classborder));
}
rg.svg.widget.DiagonalArea.__name__ = ["rg","svg","widget","DiagonalArea"];
rg.svg.widget.DiagonalArea.prototype = {
	g: null
	,diagonal: null
	,area: null
	,before: null
	,after: null
	,update: function(x1,y1,x2,y2,sw,ew) {
		var top = this.diagonal.diagonal([y1,x1,y2,x2]), bottom = this.diagonal.diagonal([y2 + ew,x2,y1 + sw,x1]);
		var path = top + "L" + bottom.substr(1) + "z";
		this.before.attr("d").string(top);
		this.after.attr("d").string(bottom);
		this.area.attr("d").string(path);
	}
	,__class__: rg.svg.widget.DiagonalArea
}
thx.data.IDataHandler = $hxClasses["thx.data.IDataHandler"] = function() { }
thx.data.IDataHandler.__name__ = ["thx","data","IDataHandler"];
thx.data.IDataHandler.prototype = {
	start: null
	,end: null
	,startObject: null
	,startField: null
	,endField: null
	,endObject: null
	,startArray: null
	,startItem: null
	,endItem: null
	,endArray: null
	,date: null
	,string: null
	,'int': null
	,'float': null
	,'null': null
	,bool: null
	,comment: null
	,__class__: thx.data.IDataHandler
}
thx.data.ValueHandler = $hxClasses["thx.data.ValueHandler"] = function() {
}
thx.data.ValueHandler.__name__ = ["thx","data","ValueHandler"];
thx.data.ValueHandler.__interfaces__ = [thx.data.IDataHandler];
thx.data.ValueHandler.prototype = {
	value: null
	,_stack: null
	,_names: null
	,start: function() {
		this._stack = [];
		this._names = [];
	}
	,end: function() {
		this.value = this._stack.pop();
	}
	,startObject: function() {
		this._stack.push({ });
	}
	,endObject: function() {
	}
	,startField: function(name) {
		this._names.push(name);
	}
	,endField: function() {
		var value = this._stack.pop();
		var last = Arrays.last(this._stack);
		last[this._names.pop()] = value;
	}
	,startArray: function() {
		this._stack.push([]);
	}
	,endArray: function() {
	}
	,startItem: function() {
	}
	,endItem: function() {
		var value = this._stack.pop();
		var last = Arrays.last(this._stack);
		last.push(value);
	}
	,date: function(d) {
		this._stack.push(d);
	}
	,string: function(s) {
		this._stack.push(s);
	}
	,'int': function(i) {
		this._stack.push(i);
	}
	,'float': function(f) {
		this._stack.push(f);
	}
	,'null': function() {
		this._stack.push(null);
	}
	,bool: function(b) {
		this._stack.push(b);
	}
	,comment: function(s) {
	}
	,__class__: thx.data.ValueHandler
}
thx.color.Grey = $hxClasses["thx.color.Grey"] = function(value) {
	this.grey = Floats.normalize(value);
	var c = Ints.interpolate(this.grey,0,255,null);
	thx.color.Rgb.call(this,c,c,c);
}
thx.color.Grey.__name__ = ["thx","color","Grey"];
thx.color.Grey.toGrey = function(rgb,luminance) {
	if(null == luminance) luminance = thx.color.PerceivedLuminance.Perceived;
	switch( (luminance)[1] ) {
	case 0:
		return new thx.color.Grey(rgb.red / 255 * .2126 + rgb.green / 255 * .7152 + rgb.blue / 255 * .0722);
	case 1:
		return new thx.color.Grey(rgb.red / 255 * .299 + rgb.green / 255 * .587 + rgb.blue / 255 * .114);
	case 2:
		return new thx.color.Grey(Math.sqrt(0.241 * Math.pow(rgb.red / 255,2) + 0.691 * Math.pow(rgb.green / 255,2) + 0.068 * Math.pow(rgb.blue / 255,2)));
	}
}
thx.color.Grey.equals = function(a,b) {
	return a.grey == b.grey;
}
thx.color.Grey.darker = function(color,t,equation) {
	return new thx.color.Grey(Floats.interpolate(t,color.grey,0,equation));
}
thx.color.Grey.lighter = function(color,t,equation) {
	return new thx.color.Grey(Floats.interpolate(t,color.grey,1,equation));
}
thx.color.Grey.interpolate = function(a,b,t,equation) {
	return new thx.color.Grey(Floats.interpolate(t,a.grey,b.grey,equation));
}
thx.color.Grey.__super__ = thx.color.Rgb;
thx.color.Grey.prototype = $extend(thx.color.Rgb.prototype,{
	grey: null
	,__class__: thx.color.Grey
});
thx.color.PerceivedLuminance = $hxClasses["thx.color.PerceivedLuminance"] = { __ename__ : ["thx","color","PerceivedLuminance"], __constructs__ : ["Standard","Perceived","PerceivedAccurate"] }
thx.color.PerceivedLuminance.Standard = ["Standard",0];
thx.color.PerceivedLuminance.Standard.toString = $estr;
thx.color.PerceivedLuminance.Standard.__enum__ = thx.color.PerceivedLuminance;
thx.color.PerceivedLuminance.Perceived = ["Perceived",1];
thx.color.PerceivedLuminance.Perceived.toString = $estr;
thx.color.PerceivedLuminance.Perceived.__enum__ = thx.color.PerceivedLuminance;
thx.color.PerceivedLuminance.PerceivedAccurate = ["PerceivedAccurate",2];
thx.color.PerceivedLuminance.PerceivedAccurate.toString = $estr;
thx.color.PerceivedLuminance.PerceivedAccurate.__enum__ = thx.color.PerceivedLuminance;
rg.info.InfoHeatGrid = $hxClasses["rg.info.InfoHeatGrid"] = function() {
	rg.info.InfoCartesianChart.call(this);
	this.colorScaleMode = rg.svg.chart.ColorScaleMode.FromCssInterpolation();
}
rg.info.InfoHeatGrid.__name__ = ["rg","info","InfoHeatGrid"];
rg.info.InfoHeatGrid.filters = function() {
	return [{ field : "contour", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "color", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "colorScaleMode", value : rg.svg.chart.ColorScaleModes.createFromDynamic(v)}];
	}}].concat(rg.info.InfoCartesianChart.filters());
}
rg.info.InfoHeatGrid.__super__ = rg.info.InfoCartesianChart;
rg.info.InfoHeatGrid.prototype = $extend(rg.info.InfoCartesianChart.prototype,{
	contour: null
	,colorScaleMode: null
	,__class__: rg.info.InfoHeatGrid
});
rg.info.InfoTrack = $hxClasses["rg.info.InfoTrack"] = function() {
	this.enabled = false;
	this.token = rg.RGConst.TRACKING_TOKEN;
	this.paths = ["/","/{hash}/"];
	this.hash = null;
}
rg.info.InfoTrack.__name__ = ["rg","info","InfoTrack"];
rg.info.InfoTrack.filters = function() {
	return [{ field : "enabled", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "token", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "paths", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "hash", validator : function(v) {
		return v == null || Std["is"](v,String);
	}, filter : null}];
}
rg.info.InfoTrack.prototype = {
	enabled: null
	,token: null
	,paths: null
	,hash: null
	,__class__: rg.info.InfoTrack
}
math.BigInteger = $hxClasses["math.BigInteger"] = function() {
	if(math.BigInteger.BI_RC == null || math.BigInteger.BI_RC.length == 0) math.BigInteger.initBiRc();
	if(math.BigInteger.BI_RM.length == 0) throw "BI_RM not initialized";
	this.chunks = new Array();
	switch(math.BigInteger.defaultAm) {
	case 1:
		this.am = this.am1.$bind(this);
		break;
	case 2:
		this.am = this.am2.$bind(this);
		break;
	case 3:
		this.am = this.am3.$bind(this);
		break;
	default:
		throw "am error";
		null;
	}
}
math.BigInteger.__name__ = ["math","BigInteger"];
math.BigInteger.__properties__ = {get_ONE:"getONE",get_ZERO:"getZERO"}
math.BigInteger.DB = null;
math.BigInteger.DM = null;
math.BigInteger.DV = null;
math.BigInteger.BI_FP = null;
math.BigInteger.FV = null;
math.BigInteger.F1 = null;
math.BigInteger.F2 = null;
math.BigInteger.ZERO = null;
math.BigInteger.ONE = null;
math.BigInteger.BI_RM = null;
math.BigInteger.BI_RC = null;
math.BigInteger.lowprimes = null;
math.BigInteger.lplim = null;
math.BigInteger.defaultAm = null;
math.BigInteger.initBiRc = function() {
	math.BigInteger.BI_RC = new Array();
	var rr = "0".charCodeAt(0);
	var _g = 0;
	while(_g < 10) {
		var vv = _g++;
		math.BigInteger.BI_RC[rr] = vv;
		rr++;
	}
	rr = "a".charCodeAt(0);
	var _g = 10;
	while(_g < 37) {
		var vv = _g++;
		math.BigInteger.BI_RC[rr] = vv;
		rr++;
	}
	rr = "A".charCodeAt(0);
	var _g = 10;
	while(_g < 37) {
		var vv = _g++;
		math.BigInteger.BI_RC[rr] = vv;
		rr++;
	}
}
math.BigInteger.getZERO = function() {
	return math.BigInteger.nbv(0);
}
math.BigInteger.getONE = function() {
	return math.BigInteger.nbv(1);
}
math.BigInteger.nbv = function(i) {
	var r = math.BigInteger.nbi();
	r.fromInt(i);
	return r;
}
math.BigInteger.nbi = function() {
	return new math.BigInteger();
}
math.BigInteger.ofString = function(s,base) {
	var me = math.BigInteger.nbi();
	var fromStringExt = function(s1,b) {
		me.fromInt(0);
		var cs = Math.floor(0.6931471805599453 * math.BigInteger.DB / Math.log(b));
		var d = Std["int"](Math.pow(b,cs));
		var mi = false;
		var j = 0;
		var w = 0;
		var _g1 = 0, _g = s1.length;
		while(_g1 < _g) {
			var i = _g1++;
			var x = math.BigInteger.intAt(s1,i);
			if(x < 0) {
				if(s1.charAt(i) == "-" && me.sign == 0) mi = true;
				continue;
			}
			w = b * w + x;
			if(++j >= cs) {
				me.dMultiply(d);
				me.dAddOffset(w,0);
				j = 0;
				w = 0;
			}
		}
		if(j > 0) {
			me.dMultiply(Std["int"](Math.pow(b,j)));
			me.dAddOffset(w,0);
		}
		if(mi) math.BigInteger.getZERO().subTo(me,me);
		return me;
	};
	var k;
	if(base == 16) k = 4; else if(base == 10) return fromStringExt(s,base); else if(base == 256) k = 8; else if(base == 8) k = 3; else if(base == 2) k = 1; else if(base == 32) k = 5; else if(base == 4) k = 2; else return fromStringExt(s,base);
	me.t = 0;
	me.sign = 0;
	var i = s.length, mi = false, sh = 0;
	while(--i >= 0) {
		var x = k == 8?s.charCodeAt(i) & 255:math.BigInteger.intAt(s,i);
		if(x < 0) {
			if(s.charAt(i) == "-") mi = true;
			continue;
		}
		mi = false;
		if(sh == 0) {
			me.chunks[me.t] = x;
			me.t++;
		} else if(sh + k > math.BigInteger.DB) {
			me.chunks[me.t - 1] |= (x & (1 << math.BigInteger.DB - sh) - 1) << sh;
			me.chunks[me.t] = x >> math.BigInteger.DB - sh;
			me.t++;
		} else me.chunks[me.t - 1] |= x << sh;
		sh += k;
		if(sh >= math.BigInteger.DB) sh -= math.BigInteger.DB;
	}
	if(k == 8 && (s.charCodeAt(0) & 128) != 0) {
		me.sign = -1;
		if(sh > 0) me.chunks[me.t - 1] |= (1 << math.BigInteger.DB - sh) - 1 << sh;
	}
	me.clamp();
	if(mi) math.BigInteger.getZERO().subTo(me,me);
	return me;
}
math.BigInteger.ofInt = function(x) {
	var i = math.BigInteger.nbi();
	i.fromInt(x);
	return i;
}
math.BigInteger.ofInt32 = function(x) {
	var i = math.BigInteger.nbi();
	i.fromInt32(x);
	return i;
}
math.BigInteger.ofBytes = function(r,unsigned,pos,len) {
	if(pos == null) pos = 0;
	if(len == null) len = r.length - pos;
	if(len == 0) return math.BigInteger.getZERO();
	var bi = math.BigInteger.nbi();
	bi.sign = 0;
	bi.t = 0;
	var i = pos + len;
	var sh = 0;
	while(--i >= pos) {
		var x = i < len?r.b[i] & 255:0;
		if(sh == 0) {
			bi.chunks[bi.t] = x;
			bi.t++;
		} else if(sh + 8 > math.BigInteger.DB) {
			bi.chunks[bi.t - 1] |= (x & (1 << math.BigInteger.DB - sh) - 1) << sh;
			bi.chunks[bi.t] = x >> math.BigInteger.DB - sh;
			bi.t++;
		} else bi.chunks[bi.t - 1] |= x << sh;
		sh += 8;
		if(sh >= math.BigInteger.DB) sh -= math.BigInteger.DB;
	}
	if(!unsigned && (r.b[0] & 128) != 0) {
		bi.sign = -1;
		if(sh > 0) bi.chunks[bi.t - 1] |= (1 << math.BigInteger.DB - sh) - 1 << sh;
	}
	bi.clamp();
	return bi;
}
math.BigInteger.random = function(bits,rng) {
	if(rng == null) rng = new math.prng.Random();
	if(bits < 2) return math.BigInteger.ofInt(1);
	var len = (bits >> 3) + 1;
	var x = Bytes.alloc(len);
	var t = bits & 7;
	rng.nextBytes(x,0,len);
	if(t > 0) {
		var v = x.b[0];
		v &= (1 << t) - 1;
		x.b[0] = v & 255;
	} else x.b[0] = 0;
	return math.BigInteger.ofString(BytesUtil.hexDump(x,""),16);
}
math.BigInteger.randomPrime = function(bits,gcdExp,iterations,forceLength,rng) {
	if(rng == null) rng = new math.prng.Random();
	if(iterations < 1) iterations = 1;
	while(true) {
		var i = math.BigInteger.random(bits,rng);
		if(forceLength) {
			if(!i.testBit(bits - 1)) i.bitwiseTo(math.BigInteger.getONE().shl(bits - 1),math.BigInteger.op_or,i);
		}
		if(i.isEven()) i.dAddOffset(1,0);
		i.primify(bits,1);
		if(i.sub(math.BigInteger.getONE()).gcd(gcdExp).compare(math.BigInteger.getONE()) == 0 && i.isProbablePrime(iterations)) return i;
	}
	return null;
}
math.BigInteger.op_and = function(x,y) {
	return x & y;
}
math.BigInteger.op_or = function(x,y) {
	return x | y;
}
math.BigInteger.op_xor = function(x,y) {
	return x ^ y;
}
math.BigInteger.op_andnot = function(x,y) {
	return x & ~y;
}
math.BigInteger.nbits = function(x) {
	var r = 1;
	var t;
	if((t = x >>> 16) != 0) {
		x = t;
		r += 16;
	}
	if((t = x >> 8) != 0) {
		x = t;
		r += 8;
	}
	if((t = x >> 4) != 0) {
		x = t;
		r += 4;
	}
	if((t = x >> 2) != 0) {
		x = t;
		r += 2;
	}
	if((t = x >> 1) != 0) {
		x = t;
		r += 1;
	}
	return r;
}
math.BigInteger.cbit = function(x) {
	var r = 0;
	while(x != 0) {
		x &= x - 1;
		++r;
	}
	return r;
}
math.BigInteger.intAt = function(s,i) {
	var c = math.BigInteger.BI_RC[s.charCodeAt(i)];
	if(c == null) return -1;
	return c;
}
math.BigInteger.int2charCode = function(n) {
	return math.BigInteger.BI_RM.charCodeAt(n);
}
math.BigInteger.lbit = function(x) {
	if(x == 0) return -1;
	var r = 0;
	if((x & 65535) == 0) {
		x >>= 16;
		r += 16;
	}
	if((x & 255) == 0) {
		x >>= 8;
		r += 8;
	}
	if((x & 15) == 0) {
		x >>= 4;
		r += 4;
	}
	if((x & 3) == 0) {
		x >>= 2;
		r += 2;
	}
	if((x & 1) == 0) ++r;
	return r;
}
math.BigInteger.dumpBi = function(r) {
	var s = "sign: " + Std.string(r.sign);
	s += " t: " + r.t;
	s += Std.string(r.chunks);
	return s;
}
math.BigInteger.prototype = {
	t: null
	,sign: null
	,chunks: null
	,am: null
	,fromInt: function(x) {
		this.t = 1;
		this.chunks[0] = 0;
		this.sign = x < 0?-1:0;
		if(x > 0) this.chunks[0] = x; else if(x < -1) this.chunks[0] = x + math.BigInteger.DV; else this.t = 0;
	}
	,fromInt32: function(x) {
		this.fromInt(x);
	}
	,toInt: function() {
		if(this.sign < 0) {
			if(this.t == 1) return this.chunks[0] - math.BigInteger.DV; else if(this.t == 0) return -1;
		} else if(this.t == 1) return this.chunks[0]; else if(this.t == 0) return 0;
		return (this.chunks[1] & (1 << 32 - math.BigInteger.DB) - 1) << math.BigInteger.DB | this.chunks[0];
	}
	,toInt32: function() {
		return this.toInt();
	}
	,toString: function() {
		return this.toRadix(10).toString();
	}
	,toHex: function() {
		return this.toRadix(16).toString();
	}
	,toBytes: function() {
		var i = this.t;
		var r = new Array();
		r[0] = this.sign;
		var p = math.BigInteger.DB - i * math.BigInteger.DB % 8;
		var d;
		var k = 0;
		if(i-- > 0) {
			if(p < math.BigInteger.DB && (d = this.chunks[i] >> p) != (this.sign & math.BigInteger.DM) >> p) {
				r[k] = d | this.sign << math.BigInteger.DB - p;
				k++;
			}
			while(i >= 0) {
				if(p < 8) {
					d = (this.chunks[i] & (1 << p) - 1) << 8 - p;
					--i;
					d |= this.chunks[i] >> (p += math.BigInteger.DB - 8);
				} else {
					d = this.chunks[i] >> (p -= 8) & 255;
					if(p <= 0) {
						p += math.BigInteger.DB;
						--i;
					}
				}
				if((d & 128) != 0) d |= -256;
				if(k == 0 && (this.sign & 128) != (d & 128)) ++k;
				if(k > 0 || d != this.sign) {
					r[k] = d;
					k++;
				}
			}
		}
		var bb = new BytesBuffer();
		var _g1 = 0, _g = r.length;
		while(_g1 < _g) {
			var i1 = _g1++;
			bb.b.push(r[i1]);
		}
		return bb.getBytes();
	}
	,toBytesUnsigned: function() {
		var bb = new BytesBuffer();
		var k = 8;
		var km = 255;
		var d = 0;
		var i = this.t;
		var p = math.BigInteger.DB - i * math.BigInteger.DB % k;
		var m = false;
		var c = 0;
		if(i-- > 0) {
			if(p < math.BigInteger.DB && (d = this.chunks[i] >> p) > 0) {
				m = true;
				bb.b.push(d);
				c++;
			}
			while(i >= 0) {
				if(p < k) {
					d = (this.chunks[i] & (1 << p) - 1) << k - p;
					d |= this.chunks[--i] >> (p += math.BigInteger.DB - k);
				} else {
					d = this.chunks[i] >> (p -= k) & km;
					if(p <= 0) {
						p += math.BigInteger.DB;
						--i;
					}
				}
				if(d > 0) m = true;
				if(m) {
					bb.b.push(d);
					c++;
				}
			}
		}
		return bb.getBytes();
	}
	,toRadix: function(b) {
		if(b == null) b = 10;
		if(b < 2 || b > 36) throw new chx.lang.UnsupportedException("invalid base for conversion");
		if(this.sigNum() == 0) return "0";
		var cs = Math.floor(0.6931471805599453 * math.BigInteger.DB / Math.log(b));
		var a = Std["int"](Math.pow(b,cs));
		var d = math.BigInteger.nbv(a);
		var y = math.BigInteger.nbi();
		var z = math.BigInteger.nbi();
		var r = "";
		this.divRemTo(d,y,z);
		while(y.sigNum() > 0) {
			r = I32.baseEncode(a + z.toInt32(),b).substr(1) + r;
			y.divRemTo(d,y,z);
		}
		return I32.baseEncode(z.toInt32(),b) + r;
	}
	,abs: function() {
		return this.sign < 0?this.neg():this;
	}
	,add: function(a) {
		var r = math.BigInteger.nbi();
		this.addTo(a,r);
		return r;
	}
	,compare: function(a) {
		var r = this.sign - a.sign;
		if(r != 0) return r;
		var i = this.t;
		r = i - a.t;
		if(r != 0) return r;
		while(--i >= 0) {
			r = this.chunks[i] - a.chunks[i];
			if(r != 0) return r;
		}
		return 0;
	}
	,div: function(a) {
		var r = math.BigInteger.nbi();
		this.divRemTo(a,r,null);
		return r;
	}
	,divideAndRemainder: function(a) {
		var q = math.BigInteger.nbi();
		var r = math.BigInteger.nbi();
		this.divRemTo(a,q,r);
		return [q,r];
	}
	,eq: function(a) {
		return this.compare(a) == 0;
	}
	,isEven: function() {
		return (this.t > 0?this.chunks[0] & 1:this.sign) == 0;
	}
	,max: function(a) {
		return this.compare(a) > 0?this:a;
	}
	,min: function(a) {
		return this.compare(a) < 0?this:a;
	}
	,mod: function(a) {
		var r = math.BigInteger.nbi();
		this.abs().divRemTo(a,null,r);
		if(this.sign < 0 && r.compare(math.BigInteger.getZERO()) > 0) a.subTo(r,r);
		return r;
	}
	,modInt: function(n) {
		if(n <= 0) return 0;
		var d = math.BigInteger.DV % n;
		var r = this.sign < 0?n - 1:0;
		if(this.t > 0) {
			if(d == 0) r = this.chunks[0] % n; else {
				var i = this.t - 1;
				while(i >= 0) {
					r = (d * r + this.chunks[i]) % n;
					--i;
				}
			}
		}
		return r;
	}
	,modInverse: function(m) {
		var ac = m.isEven();
		if(this.isEven() && ac || m.sigNum() == 0) return math.BigInteger.getZERO();
		var u = m.clone();
		var v = this.clone();
		var a = math.BigInteger.nbv(1);
		var b = math.BigInteger.nbv(0);
		var c = math.BigInteger.nbv(0);
		var d = math.BigInteger.nbv(1);
		while(u.sigNum() != 0) {
			while(u.isEven()) {
				u.rShiftTo(1,u);
				if(ac) {
					if(!a.isEven() || !b.isEven()) {
						a.addTo(this,a);
						b.subTo(m,b);
					}
					a.rShiftTo(1,a);
				} else if(!b.isEven()) b.subTo(m,b);
				b.rShiftTo(1,b);
			}
			while(v.isEven()) {
				v.rShiftTo(1,v);
				if(ac) {
					if(!c.isEven() || !d.isEven()) {
						c.addTo(this,c);
						d.subTo(m,d);
					}
					c.rShiftTo(1,c);
				} else if(!d.isEven()) d.subTo(m,d);
				d.rShiftTo(1,d);
			}
			if(u.compare(v) >= 0) {
				u.subTo(v,u);
				if(ac) a.subTo(c,a);
				b.subTo(d,b);
			} else {
				v.subTo(u,v);
				if(ac) c.subTo(a,c);
				d.subTo(b,d);
			}
		}
		if(v.compare(math.BigInteger.getONE()) != 0) return math.BigInteger.getZERO();
		if(d.compare(m) >= 0) return d.sub(m);
		if(d.sigNum() < 0) d.addTo(m,d); else return d;
		return d;
	}
	,modPow: function(e,m) {
		var i = e.bitLength();
		var k;
		var r = math.BigInteger.nbv(1);
		var z;
		if(i <= 0) return r; else if(i < 18) k = 1; else if(i < 48) k = 3; else if(i < 144) k = 4; else if(i < 768) k = 5; else k = 6;
		if(i < 8) z = new math.reduction.Classic(m); else if(m.isEven()) z = new math.reduction.Barrett(m); else z = new math.reduction.Montgomery(m);
		var g = new Array();
		var n = 3;
		var k1 = k - 1;
		var km = (1 << k) - 1;
		g[1] = z.convert(this);
		if(k > 1) {
			var g2 = math.BigInteger.nbi();
			z.sqrTo(g[1],g2);
			while(n <= km) {
				g[n] = math.BigInteger.nbi();
				z.mulTo(g2,g[n - 2],g[n]);
				n += 2;
			}
		}
		var j = e.t - 1;
		var w;
		var is1 = true;
		var r2 = math.BigInteger.nbi();
		var t;
		i = math.BigInteger.nbits(e.chunks[j]) - 1;
		while(j >= 0) {
			if(i >= k1) w = e.chunks[j] >> i - k1 & km; else {
				w = (e.chunks[j] & (1 << i + 1) - 1) << k1 - i;
				if(j > 0) w |= e.chunks[j - 1] >> math.BigInteger.DB + i - k1;
			}
			n = k;
			while((w & 1) == 0) {
				w >>= 1;
				--n;
			}
			if((i -= n) < 0) {
				i += math.BigInteger.DB;
				--j;
			}
			if(is1) {
				g[w].copyTo(r);
				is1 = false;
			} else {
				while(n > 1) {
					z.sqrTo(r,r2);
					z.sqrTo(r2,r);
					n -= 2;
				}
				if(n > 0) z.sqrTo(r,r2); else {
					t = r;
					r = r2;
					r2 = t;
				}
				z.mulTo(r2,g[w],r);
			}
			var chnk = e.chunks[j];
			while(j >= 0 && (chnk & 1 << i) == 0) {
				z.sqrTo(r,r2);
				t = r;
				r = r2;
				r2 = t;
				if(--i < 0) {
					i = math.BigInteger.DB - 1;
					--j;
				}
				chnk = e.chunks[j];
			}
		}
		return z.revert(r);
	}
	,modPowInt: function(e,m) {
		if(m == null) throw "m is null";
		var z;
		if(e < 256 || m.isEven()) z = new math.reduction.Classic(m); else z = new math.reduction.Montgomery(m);
		return this.exp(e,z);
	}
	,mul: function(a) {
		var r = math.BigInteger.nbi();
		this.multiplyTo(a,r);
		return r;
	}
	,neg: function() {
		var r = math.BigInteger.nbi();
		math.BigInteger.getZERO().subTo(this,r);
		return r;
	}
	,pow: function(e) {
		return this.exp(e,new math.reduction.Null());
	}
	,remainder: function(a) {
		var r = math.BigInteger.nbi();
		this.divRemTo(a,null,r);
		return r;
	}
	,sub: function(a) {
		var r = math.BigInteger.nbi();
		this.subTo(a,r);
		return r;
	}
	,and: function(a) {
		var r = math.BigInteger.nbi();
		this.bitwiseTo(a,math.BigInteger.op_and,r);
		return r;
	}
	,andNot: function(a) {
		var r = math.BigInteger.nbi();
		this.bitwiseTo(a,math.BigInteger.op_andnot,r);
		return r;
	}
	,bitCount: function() {
		var r = 0, x = this.sign & math.BigInteger.DM;
		var _g1 = 0, _g = this.t;
		while(_g1 < _g) {
			var i = _g1++;
			r += math.BigInteger.cbit(this.chunks[i] ^ x);
		}
		return r;
	}
	,bitLength: function() {
		if(this.t <= 0) return 0;
		return math.BigInteger.DB * (this.t - 1) + math.BigInteger.nbits(this.chunks[this.t - 1] ^ this.sign & math.BigInteger.DM);
	}
	,complement: function() {
		return this.not();
	}
	,clearBit: function(n) {
		return this.changeBit(n,math.BigInteger.op_andnot);
	}
	,flipBit: function(n) {
		return this.changeBit(n,math.BigInteger.op_xor);
	}
	,getLowestSetBit: function() {
		var _g1 = 0, _g = this.t;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.chunks[i] != 0) return i * math.BigInteger.DB + math.BigInteger.lbit(this.chunks[i]);
		}
		if(this.sign < 0) return this.t * math.BigInteger.DB;
		return -1;
	}
	,not: function() {
		var r = math.BigInteger.nbi();
		var _g1 = 0, _g = this.t;
		while(_g1 < _g) {
			var i = _g1++;
			r.chunks[i] = math.BigInteger.DM & ~this.chunks[i];
		}
		r.t = this.t;
		r.sign = ~this.sign;
		return r;
	}
	,or: function(a) {
		var r = math.BigInteger.nbi();
		this.bitwiseTo(a,math.BigInteger.op_or,r);
		return r;
	}
	,setBit: function(n) {
		return this.changeBit(n,math.BigInteger.op_or);
	}
	,shl: function(n) {
		var r = math.BigInteger.nbi();
		if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
		return r;
	}
	,shr: function(n) {
		var r = math.BigInteger.nbi();
		if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
		return r;
	}
	,testBit: function(n) {
		var j = Math.floor(n / math.BigInteger.DB);
		if(j >= this.t) return this.sign != 0;
		return (this.chunks[j] & 1 << n % math.BigInteger.DB) != 0;
	}
	,xor: function(a) {
		var r = math.BigInteger.nbi();
		this.bitwiseTo(a,math.BigInteger.op_xor,r);
		return r;
	}
	,addTo: function(a,r) {
		var i = 0;
		var c = 0;
		var m = Std["int"](Math.min(a.t,this.t));
		while(i < m) {
			c += this.chunks[i] + a.chunks[i];
			r.chunks[i] = c & math.BigInteger.DM;
			i++;
			c >>= math.BigInteger.DB;
		}
		if(a.t < this.t) {
			c += a.sign;
			while(i < this.t) {
				c += this.chunks[i];
				r.chunks[i] = c & math.BigInteger.DM;
				i++;
				c >>= math.BigInteger.DB;
			}
			c += this.sign;
		} else {
			c += this.sign;
			while(i < a.t) {
				c += a.chunks[i];
				r.chunks[i] = c & math.BigInteger.DM;
				i++;
				c >>= math.BigInteger.DB;
			}
			c += a.sign;
		}
		r.sign = c < 0?-1:0;
		if(c > 0) {
			r.chunks[i] = c;
			i++;
		} else if(c < -1) {
			r.chunks[i] = math.BigInteger.DV + c;
			i++;
		}
		r.t = i;
		r.clamp();
	}
	,copyTo: function(r) {
		var _g1 = 0, _g = this.chunks.length;
		while(_g1 < _g) {
			var i = _g1++;
			r.chunks[i] = this.chunks[i];
		}
		r.t = this.t;
		r.sign = this.sign;
	}
	,divRemTo: function(m,q,r) {
		var pm = m.abs();
		if(pm.t <= 0) return;
		var pt = this.abs();
		if(pt.t < pm.t) {
			if(q != null) q.fromInt(0);
			if(r != null) this.copyTo(r);
			return;
		}
		if(r == null) r = math.BigInteger.nbi();
		var y = math.BigInteger.nbi();
		var ts = this.sign;
		var ms = m.sign;
		var nsh = math.BigInteger.DB - math.BigInteger.nbits(pm.chunks[pm.t - 1]);
		if(nsh > 0) {
			pt.lShiftTo(nsh,r);
			pm.lShiftTo(nsh,y);
		} else {
			pt.copyTo(r);
			pm.copyTo(y);
		}
		var ys = y.t;
		var y0 = y.chunks[ys - 1];
		if(y0 == 0) return;
		var yt = y0 * 1.0 * ((1 << math.BigInteger.F1) * 1.0) + (ys > 1?(y.chunks[ys - 2] >> math.BigInteger.F2) * 1.0:0.0);
		var d1 = math.BigInteger.FV / yt;
		var d2 = (1 << math.BigInteger.F1) * 1.0 / yt;
		var e = (1 << math.BigInteger.F2) * 1.0;
		var i = r.t;
		var j = i - ys;
		var t = q == null?math.BigInteger.nbi():q;
		y.dlShiftTo(j,t);
		if(r.compare(t) >= 0) {
			r.chunks[r.t] = 1;
			r.t++;
			r.subTo(t,r);
		}
		math.BigInteger.getONE().dlShiftTo(ys,t);
		t.subTo(y,y);
		while(y.t < ys) {
			y.chunks[y.t] = 0;
			y.t++;
		}
		while(--j >= 0) {
			var qd;
			if(r.chunks[--i] == y0) qd = math.BigInteger.DM; else qd = Math.floor(r.chunks[i] * 1.0 * d1 + (r.chunks[i - 1] * 1.0 + e) * d2);
			r.chunks[i] += y.am(0,qd,r,j,0,ys);
			if(r.chunks[i] < qd) {
				y.dlShiftTo(j,t);
				r.subTo(t,r);
				while(r.chunks[i] < --qd) r.subTo(t,r);
			}
		}
		if(q != null) {
			r.drShiftTo(ys,q);
			if(ts != ms) math.BigInteger.getZERO().subTo(q,q);
		}
		r.t = ys;
		r.clamp();
		if(nsh > 0) r.rShiftTo(nsh,r);
		if(ts < 0) math.BigInteger.getZERO().subTo(r,r);
	}
	,multiplyLowerTo: function(a,n,r) {
		var i = Std["int"](Math.min(this.t + a.t,n));
		r.sign = 0;
		r.t = i;
		while(i > 0) {
			--i;
			r.chunks[i] = 0;
		}
		var j = r.t - this.t;
		while(i < j) {
			r.chunks[i + this.t] = this.am(0,a.chunks[i],r,i,0,this.t);
			++i;
		}
		j = Std["int"](Math.min(a.t,n));
		while(i < j) {
			this.am(0,a.chunks[i],r,i,0,n - i);
			++i;
		}
		r.clamp();
	}
	,multiplyTo: function(a,r) {
		var x = this.abs(), y = a.abs();
		var i = x.t;
		r.t = i + y.t;
		while(--i >= 0) r.chunks[i] = 0;
		var _g1 = 0, _g = y.t;
		while(_g1 < _g) {
			var i1 = _g1++;
			r.chunks[i1 + x.t] = x.am(0,y.chunks[i1],r,i1,0,x.t);
		}
		r.sign = 0;
		r.clamp();
		if(this.sign != a.sign) math.BigInteger.getZERO().subTo(r,r);
	}
	,multiplyUpperTo: function(a,n,r) {
		--n;
		var i = r.t = this.t + a.t - n;
		r.sign = 0;
		while(--i >= 0) r.chunks[i] = 0;
		i = Std["int"](Math.max(n - this.t,0));
		var _g1 = i, _g = a.t;
		while(_g1 < _g) {
			var x = _g1++;
			r.chunks[this.t + x - n] = this.am(n - x,a.chunks[x],r,0,0,this.t + x - n);
		}
		r.clamp();
		r.drShiftTo(1,r);
	}
	,squareTo: function(r) {
		if(r == this) throw "can not squareTo self";
		var x = this.abs();
		var i = r.t = 2 * x.t;
		while(--i >= 0) r.chunks[i] = 0;
		i = 0;
		while(i < x.t - 1) {
			var c = x.am(i,x.chunks[i],r,2 * i,0,1);
			if((r.chunks[i + x.t] += x.am(i + 1,2 * x.chunks[i],r,2 * i + 1,c,x.t - i - 1)) >= math.BigInteger.DV) {
				r.chunks[i + x.t] -= math.BigInteger.DV;
				r.chunks[i + x.t + 1] = 1;
			}
			i++;
		}
		if(r.t > 0) {
			var rv = x.am(i,x.chunks[i],r,2 * i,0,1);
			r.chunks[r.t - 1] += rv;
		}
		r.sign = 0;
		r.clamp();
	}
	,subTo: function(a,r) {
		var i = 0;
		var c = 0;
		var m = Std["int"](Math.min(a.t,this.t));
		while(i < m) {
			c += this.chunks[i] - a.chunks[i];
			r.chunks[i] = c & math.BigInteger.DM;
			i++;
			c >>= math.BigInteger.DB;
		}
		if(a.t < this.t) {
			c -= a.sign;
			while(i < this.t) {
				c += this.chunks[i];
				r.chunks[i] = c & math.BigInteger.DM;
				i++;
				c >>= math.BigInteger.DB;
			}
			c += this.sign;
		} else {
			c += this.sign;
			while(i < a.t) {
				c -= a.chunks[i];
				r.chunks[i] = c & math.BigInteger.DM;
				i++;
				c >>= math.BigInteger.DB;
			}
			c -= a.sign;
		}
		r.sign = c < 0?-1:0;
		if(c < -1) {
			r.chunks[i] = math.BigInteger.DV + c;
			i++;
		} else if(c > 0) {
			r.chunks[i] = c;
			i++;
		}
		r.t = i;
		r.clamp();
	}
	,clamp: function() {
		var c = this.sign & math.BigInteger.DM;
		while(this.t > 0 && this.chunks[this.t - 1] == c) --this.t;
	}
	,clone: function() {
		var r = math.BigInteger.nbi();
		this.copyTo(r);
		return r;
	}
	,gcd: function(a) {
		var x = this.sign < 0?this.neg():this.clone();
		var y = a.sign < 0?a.neg():a.clone();
		if(x.compare(y) < 0) {
			var t = x;
			x = y;
			y = t;
		}
		var i = x.getLowestSetBit(), g = y.getLowestSetBit();
		if(g < 0) return x;
		if(i < g) g = i;
		if(g > 0) {
			x.rShiftTo(g,x);
			y.rShiftTo(g,y);
		}
		while(x.sigNum() > 0) {
			if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
			if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
			if(x.compare(y) >= 0) {
				x.subTo(y,x);
				x.rShiftTo(1,x);
			} else {
				y.subTo(x,y);
				y.rShiftTo(1,y);
			}
		}
		if(g > 0) y.lShiftTo(g,y);
		return y;
	}
	,padTo: function(n) {
		while(this.t < n) {
			this.chunks[this.t] = 0;
			this.t++;
		}
	}
	,shortValue: function() {
		return this.t == 0?this.sign:this.chunks[0] << 16 >> 16;
	}
	,byteValue: function() {
		return this.t == 0?this.sign:this.chunks[0] << 24 >> 24;
	}
	,sigNum: function() {
		if(this.sign < 0) return -1; else if(this.t <= 0 || this.t == 1 && this.chunks[0] <= 0) return 0; else return 1;
	}
	,dAddOffset: function(n,w) {
		while(this.t <= w) {
			this.chunks[this.t] = 0;
			this.t++;
		}
		this.chunks[w] += n;
		while(this.chunks[w] >= math.BigInteger.DV) {
			this.chunks[w] -= math.BigInteger.DV;
			if(++w >= this.t) {
				this.chunks[this.t] = 0;
				this.t++;
			}
			++this.chunks[w];
		}
	}
	,dlShiftTo: function(n,r) {
		if(r == null) return;
		var i = this.t - 1;
		while(i >= 0) {
			r.chunks[i + n] = this.chunks[i];
			i--;
		}
		i = n - 1;
		while(i >= 0) {
			r.chunks[i] = 0;
			i--;
		}
		r.t = this.t + n;
		r.sign = this.sign;
	}
	,drShiftTo: function(n,r) {
		if(r == null) return;
		var i = n;
		while(i < this.t) {
			r.chunks[i - n] = this.chunks[i];
			i++;
		}
		r.t = Std["int"](Math.max(this.t - n,0));
		r.sign = this.sign;
	}
	,invDigit: function() {
		if(this.t < 1) return 0;
		var x = this.chunks[0];
		if((x & 1) == 0) return 0;
		var y = x & 3;
		y = y * (2 - (x & 15) * y) & 15;
		y = y * (2 - (x & 255) * y) & 255;
		y = y * (2 - ((x & 65535) * y & 65535)) & 65535;
		y = y * (2 - x * y % math.BigInteger.DV) % math.BigInteger.DV;
		return y > 0?math.BigInteger.DV - y:-y;
	}
	,isProbablePrime: function(v) {
		var i;
		var x = this.abs();
		if(x.t == 1 && x.chunks[0] <= math.BigInteger.lowprimes[math.BigInteger.lowprimes.length - 1]) {
			var _g1 = 0, _g = math.BigInteger.lowprimes.length;
			while(_g1 < _g) {
				var i1 = _g1++;
				if(x.chunks[0] == math.BigInteger.lowprimes[i1]) return true;
			}
			return false;
		}
		if(x.isEven()) return false;
		i = 1;
		while(i < math.BigInteger.lowprimes.length) {
			var m = math.BigInteger.lowprimes[i];
			var j = i + 1;
			while(j < math.BigInteger.lowprimes.length && m < math.BigInteger.lplim) {
				m *= math.BigInteger.lowprimes[j];
				j++;
			}
			m = x.modInt(m);
			while(i < j) {
				if(m % math.BigInteger.lowprimes[i] == 0) return false;
				i++;
			}
		}
		return x.millerRabin(v);
	}
	,primify: function(bits,ta) {
		while(this.bitLength() > bits) this.subTo(math.BigInteger.getONE().shl(bits - 1),this);
		while(!this.isProbablePrime(ta)) {
			this.dAddOffset(2,0);
			while(this.bitLength() > bits) this.subTo(math.BigInteger.getONE().shl(bits - 1),this);
		}
	}
	,bitwiseTo: function(a,op,r) {
		var f;
		var m = Std["int"](Math.min(a.t,this.t));
		var _g = 0;
		while(_g < m) {
			var i = _g++;
			r.chunks[i] = op(this.chunks[i],a.chunks[i]);
		}
		if(a.t < this.t) {
			f = a.sign & math.BigInteger.DM;
			var _g1 = m, _g = this.t;
			while(_g1 < _g) {
				var i = _g1++;
				r.chunks[i] = op(this.chunks[i],f);
			}
			r.t = this.t;
		} else {
			f = this.sign & math.BigInteger.DM;
			var _g1 = m, _g = a.t;
			while(_g1 < _g) {
				var i = _g1++;
				r.chunks[i] = op(f,a.chunks[i]);
			}
			r.t = a.t;
		}
		r.sign = op(this.sign,a.sign);
		r.clamp();
	}
	,changeBit: function(n,op) {
		var r = math.BigInteger.getONE().shl(n);
		this.bitwiseTo(r,op,r);
		return r;
	}
	,chunkSize: function(r) {
		return Math.floor(0.6931471805599453 * math.BigInteger.DB / Math.log(r));
	}
	,dMultiply: function(n) {
		this.chunks[this.t] = this.am(0,n - 1,this,0,0,this.t);
		this.t++;
		this.clamp();
	}
	,exp: function(e,z) {
		if(e > 2147483647 || e < 1) return math.BigInteger.getONE();
		var r = math.BigInteger.nbi();
		var r2 = math.BigInteger.nbi();
		var g = z.convert(this);
		var i = math.BigInteger.nbits(e) - 1;
		g.copyTo(r);
		while(--i >= 0) {
			z.sqrTo(r,r2);
			if((e & 1 << i) > 0) z.mulTo(r2,g,r); else {
				var t = r;
				r = r2;
				r2 = t;
			}
		}
		return z.revert(r);
	}
	,millerRabin: function(v) {
		var n1 = this.sub(math.BigInteger.getONE());
		var k = n1.getLowestSetBit();
		if(k <= 0) return false;
		var r = n1.shr(k);
		v = v + 1 >> 1;
		if(v > math.BigInteger.lowprimes.length) v = math.BigInteger.lowprimes.length;
		var a = math.BigInteger.nbi();
		var _g = 0;
		while(_g < v) {
			var i = _g++;
			a.fromInt(math.BigInteger.lowprimes[i]);
			var y = a.modPow(r,this);
			if(y.compare(math.BigInteger.getONE()) != 0 && y.compare(n1) != 0) {
				var j = 1;
				while(j++ < k && y.compare(n1) != 0) {
					y = y.modPowInt(2,this);
					if(y.compare(math.BigInteger.getONE()) == 0) return false;
				}
				if(y.compare(n1) != 0) return false;
			}
		}
		return true;
	}
	,lShiftTo: function(n,r) {
		var bs = n % math.BigInteger.DB;
		var cbs = math.BigInteger.DB - bs;
		var bm = (1 << cbs) - 1;
		var ds = Math.floor(n / math.BigInteger.DB), c = this.sign << bs & math.BigInteger.DM, i;
		var i1 = this.t - 1;
		while(i1 >= 0) {
			r.chunks[i1 + ds + 1] = this.chunks[i1] >> cbs | c;
			c = (this.chunks[i1] & bm) << bs;
			i1--;
		}
		i1 = ds - 1;
		while(i1 >= 0) {
			r.chunks[i1] = 0;
			i1--;
		}
		r.chunks[ds] = c;
		r.t = this.t + ds + 1;
		r.sign = this.sign;
		r.clamp();
	}
	,rShiftTo: function(n,r) {
		r.sign = this.sign;
		var ds = Math.floor(n / math.BigInteger.DB);
		if(ds >= this.t) {
			r.t = 0;
			return;
		}
		var bs = n % math.BigInteger.DB;
		var cbs = math.BigInteger.DB - bs;
		var bm = (1 << bs) - 1;
		r.chunks[0] = this.chunks[ds] >> bs;
		var _g1 = ds + 1, _g = this.t;
		while(_g1 < _g) {
			var i = _g1++;
			r.chunks[i - ds - 1] |= (this.chunks[i] & bm) << cbs;
			r.chunks[i - ds] = this.chunks[i] >> bs;
		}
		if(bs > 0) r.chunks[this.t - ds - 1] |= (this.sign & bm) << cbs;
		r.t = this.t - ds;
		r.clamp();
	}
	,am1: function(i,x,w,j,c,n) {
		while(--n >= 0) {
			var v = x * this.chunks[i] + w.chunks[j] + c;
			i++;
			c = Math.floor(v / 67108864);
			w.chunks[j] = v & 67108863;
			j++;
		}
		return c;
	}
	,am2: function(i,x,w,j,c,n) {
		var xl = x & 32767;
		var xh = x >> 15;
		while(--n >= 0) {
			var l = this.chunks[i] & 32767;
			var h = this.chunks[i] >> 15;
			i++;
			var m = xh * l + h * xl;
			l = xl * l + ((m & 32767) << 15) + w.chunks[j] + (c & 1073741823);
			c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
			w.chunks[j] = l & 1073741823;
			j++;
		}
		return c;
	}
	,am3: function(i,x,w,j,c,n) {
		var xl = x & 16383;
		var xh = x >> 14;
		while(--n >= 0) {
			var l = this.chunks[i] & 16383;
			var h = this.chunks[i] >> 14;
			i++;
			var m = xh * l + h * xl;
			l = xl * l + ((m & 16383) << 14) + w.chunks[j] + c;
			c = (l >> 28) + (m >> 14) + xh * h;
			w.chunks[j] = l & 268435455;
			j++;
		}
		return c;
	}
	,__class__: math.BigInteger
}
rg.info.InfoLayout = $hxClasses["rg.info.InfoLayout"] = function() {
	this.main = "main";
	this.titleOnTop = true;
	this.scalePattern = rg.layout.ScalePattern.ScalesAlternating;
	this.padding = new rg.info.InfoPadding();
}
rg.info.InfoLayout.__name__ = ["rg","info","InfoLayout"];
rg.info.InfoLayout.filters = function() {
	return [{ field : "layout", validator : function(v) {
		return Std["is"](v,String) && Arrays.exists(rg.visualization.Visualizations.layouts,v.toLowerCase());
	}, filter : function(v) {
		return [{ field : "layout", value : v.toLowerCase()}];
	}},{ field : "width", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ value : Math.round(v), field : "width"}];
	}},{ field : "height", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ value : Math.round(v), field : "height"}];
	}},{ field : "visualization", validator : function(v) {
		return Arrays.exists(rg.visualization.Visualizations.svg,v.toLowerCase());
	}, filter : function(v) {
		return [{ value : v.toLowerCase(), field : "type"}];
	}},{ field : "main", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "titleontop", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : function(v) {
		return [{ value : v, field : "titleOnTop"}];
	}},{ field : "yscaleposition", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ value : v, field : (function($this) {
			var $r;
			switch(v) {
			case "alt":case "alternate":case "alternating":
				$r = rg.layout.ScalePattern.ScalesAlternating;
				break;
			case "right":
				$r = rg.layout.ScalePattern.ScalesAfter;
				break;
			default:
				$r = rg.layout.ScalePattern.ScalesBefore;
			}
			return $r;
		}(this))}];
	}},{ field : "padding", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "padding", value : rg.info.Info.feed(new rg.info.InfoPadding(),v)}];
	}}];
}
rg.info.InfoLayout.prototype = {
	layout: null
	,width: null
	,height: null
	,type: null
	,main: null
	,titleOnTop: null
	,scalePattern: null
	,padding: null
	,__class__: rg.info.InfoLayout
}
rg.info.InfoSankey = $hxClasses["rg.info.InfoSankey"] = function() {
	this.label = new rg.info.InfoLabelSankey();
	this.idproperty = "id";
	this.weightproperty = "count";
	this.parentsproperty = "parents";
}
rg.info.InfoSankey.__name__ = ["rg","info","InfoSankey"];
rg.info.InfoSankey.filters = function() {
	return [{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.info.Info.feed(new rg.info.InfoLabelSankey(),v)}];
	}},{ field : "layerwidth", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "layerWidth", value : v}];
	}},{ field : "nodespacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "nodeSpacing", value : v}];
	}},{ field : "dummyspacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "dummySpacing", value : v}];
	}},{ field : "extrawidth", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "extraWidth", value : v}];
	}},{ field : "backedgespacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "backEdgeSpacing", value : v}];
	}},{ field : "extraheight", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "extraHeight", value : v}];
	}},{ field : "extraradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "extraRadius", value : v}];
	}},{ field : "imagewidth", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "imageWidth", value : v}];
	}},{ field : "imageheight", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "imageHeight", value : v}];
	}},{ field : "imagespacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "imageSpacing", value : v}];
	}},{ field : "labelnodespacing", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "labelNodeSpacing", value : v}];
	}},{ field : "imagepath", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "imagePath", value : v}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "click", value : v}];
	}},{ field : "clickedge", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "clickEdge", value : v}];
	}},{ field : "layoutmap", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "layoutmap", value : v}];
	}},{ field : "layoutmethod", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null}];
}
rg.info.InfoSankey.prototype = {
	label: null
	,idproperty: null
	,weightproperty: null
	,parentsproperty: null
	,layerWidth: null
	,nodeSpacing: null
	,dummySpacing: null
	,extraWidth: null
	,backEdgeSpacing: null
	,extraHeight: null
	,extraRadius: null
	,imageWidth: null
	,imageHeight: null
	,imageSpacing: null
	,labelNodeSpacing: null
	,imagePath: null
	,layoutmap: null
	,click: null
	,clickEdge: null
	,layoutmethod: null
	,__class__: rg.info.InfoSankey
}
rg.html.widget.DownloaderPositions = $hxClasses["rg.html.widget.DownloaderPositions"] = function() { }
rg.html.widget.DownloaderPositions.__name__ = ["rg","html","widget","DownloaderPositions"];
rg.html.widget.DownloaderPositions.parse = function(v) {
	switch(v.toLowerCase()) {
	case "topleft":
		return rg.html.widget.DownloaderPosition.TopLeft;
	case "topright":case "auto":
		return rg.html.widget.DownloaderPosition.TopRight;
	case "bottomleft":
		return rg.html.widget.DownloaderPosition.BottomLeft;
	case "bottomright":
		return rg.html.widget.DownloaderPosition.BottomRight;
	case "before":
		return rg.html.widget.DownloaderPosition.Before;
	case "after":
		return rg.html.widget.DownloaderPosition.After;
	default:
		return rg.html.widget.DownloaderPosition.ElementSelector(v);
	}
}
rg.html.widget.DownloaderPositions.prototype = {
	__class__: rg.html.widget.DownloaderPositions
}
rg.visualization.VisualizationLeaderboard = $hxClasses["rg.visualization.VisualizationLeaderboard"] = function(container) {
	rg.visualization.VisualizationHtml.call(this,container);
}
rg.visualization.VisualizationLeaderboard.__name__ = ["rg","visualization","VisualizationLeaderboard"];
rg.visualization.VisualizationLeaderboard.__super__ = rg.visualization.VisualizationHtml;
rg.visualization.VisualizationLeaderboard.prototype = $extend(rg.visualization.VisualizationHtml.prototype,{
	info: null
	,chart: null
	,init: function() {
		var me = this;
		this.chart = new rg.html.chart.Leadeboard(this.container);
		this.chart.ready.add(function() {
			me.ready.dispatch();
		});
		if(null != this.info.label.datapoint) this.chart.labelDataPoint = this.info.label.datapoint;
		if(null != this.info.label.datapointover) this.chart.labelDataPointOver = this.info.label.datapointover;
		if(null != this.info.label.rank) this.chart.labelRank = this.info.label.rank;
		if(null != this.info.label.value) this.chart.labelValue = this.info.label.value;
		this.chart.animated = this.info.animation.animated;
		this.chart.animationDuration = this.info.animation.duration;
		this.chart.animationDelay = this.info.animation.delay;
		this.chart.animationEase = this.info.animation.ease;
		this.chart.useMax = this.info.usemax;
		this.chart.displayBar = this.info.displaybar;
		if(null != this.info.click) this.chart.click = this.info.click;
		if(null != this.info.sortDataPoint) this.chart.sortDataPoint = this.info.sortDataPoint;
		this.chart.init();
	}
	,feedData: function(data) {
		this.chart.setVariables(this.independentVariables,this.dependentVariables);
		this.chart.data(data);
	}
	,__class__: rg.visualization.VisualizationLeaderboard
});
haxe.Log = $hxClasses["haxe.Log"] = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype = {
	__class__: haxe.Log
}
if(!rg.html.chart) rg.html.chart = {}
rg.html.chart.PivotTable = $hxClasses["rg.html.chart.PivotTable"] = function(container) {
	this.ready = new hxevents.Notifier();
	this.container = container;
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.displayHeatMap = true;
	this.colorStart = rg.html.chart.PivotTable.defaultColorStart;
	this.colorEnd = rg.html.chart.PivotTable.defaultColorEnd;
	this.incolumns = 1;
}
rg.html.chart.PivotTable.__name__ = ["rg","html","chart","PivotTable"];
rg.html.chart.PivotTable.prototype = {
	displayColumnTotal: null
	,displayRowTotal: null
	,displayHeatMap: null
	,colorStart: null
	,colorEnd: null
	,ready: null
	,columnVariables: null
	,rowVariables: null
	,cellVariable: null
	,incolumns: null
	,click: null
	,container: null
	,stats: null
	,labelDataPoint: function(dp,stats) {
		var v = Reflect.field(dp,this.cellVariable.type);
		if(Math.isNaN(v)) return "0";
		return thx.culture.FormatNumber["int"](v);
	}
	,labelDataPointOver: function(dp,stats) {
		var v = Reflect.field(dp,this.cellVariable.type);
		if(Math.isNaN(v)) return "0";
		return thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
	}
	,labelAxis: function(v) {
		return rg.util.RGStrings.humanize(v);
	}
	,labelAxisValue: function(v,axis) {
		if(axis.indexOf("time:") >= 0) {
			var p = axis.substr(axis.indexOf("time:") + "time:".length);
			return rg.util.Periodicity.format(p,v);
		} else return rg.util.RGStrings.humanize(v);
	}
	,labelTotal: function(v,stats) {
		return thx.culture.FormatNumber["int"](v);
	}
	,labelTotalOver: function(v,stats) {
		return thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
	}
	,data: function(dps) {
		var d = this.transformData(dps), table = this.container.append("table").classed().add("pivot-table"), thead = table.append("thead"), leftspan = d.rows.length > 0?d.rows[0].values.length:0, color = thx.color.Rgb.interpolatef(this.colorStart,this.colorEnd);
		this.stats = d.stats;
		if(d.columns.length > 0) {
			var _g1 = 0, _g = d.column_headers.length;
			while(_g1 < _g) {
				var i = _g1++;
				var tr = thead.append("tr");
				this.prependSpacer(leftspan,tr);
				var header = tr.append("th").attr("class").string("col-header").text().string(this.labelAxis(d.column_headers[i]));
				if(d.columns.length > 1) header.attr("colspan")["float"](d.columns.length);
				var counter = 1, last = d.columns[0].values[i];
				tr = thead.append("tr");
				if(i == d.column_headers.length - 1) {
					var _g2 = 0, _g3 = d.row_headers;
					while(_g2 < _g3.length) {
						var h = _g3[_g2];
						++_g2;
						tr.append("th").attr("class").string("row-header").text().string(this.labelAxis(h));
					}
				} else this.prependSpacer(leftspan,tr);
				var _g3 = 1, _g2 = d.columns.length;
				while(_g3 < _g2) {
					var j = _g3++;
					var value = d.columns[j].values[i];
					if(last == value) counter++; else {
						this.buildValue(last,d.column_headers[i],counter,tr);
						counter = 1;
						last = value;
					}
				}
				if(null != last) this.buildValue(last,d.column_headers[i],counter,tr);
			}
		}
		if(d.column_headers.length == 0) {
			var tr = thead.append("tr");
			var _g = 0, _g1 = d.row_headers;
			while(_g < _g1.length) {
				var h = _g1[_g];
				++_g;
				tr.append("th").attr("class").string("row header").text().string(this.labelAxis(h));
			}
		}
		var tbody = table.append("tbody"), last = [];
		var _g = 0, _g1 = d.rows;
		while(_g < _g1.length) {
			var row = _g1[_g];
			++_g;
			var tr = tbody.append("tr"), len = row.values.length;
			var _g2 = 0;
			while(_g2 < len) {
				var i = _g2++;
				var v = row.values[i], rep = v == last[i];
				if(!rep) {
					last[i] = v;
					var _g3 = i + 1;
					while(_g3 < len) {
						var j = _g3++;
						last[j] = null;
					}
				}
				tr.append("th").attr("class").string(rep?"row value empty":"row value").text().string(rep?"":this.labelAxisValue(v,d.row_headers[i]));
			}
			var _g2 = 0, _g3 = row.cells;
			while(_g2 < _g3.length) {
				var cell = _g3[_g2];
				++_g2;
				var td = tr.append("td").text().string(this.formatDataPoint(cell)).attr("title").string(this.formatDataPointOver(cell));
				if(null != this.click) td.onNode("click",(function(f,a1) {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})(this.onClick.$bind(this),cell));
				if(this.displayHeatMap) {
					var c = color(Reflect.field(cell,this.cellVariable.type) / d.stats.max);
					td.style("background-color").color(c).style("color").color(thx.color.Rgb.contrastBW(c));
				}
			}
			if(this.displayRowTotal && d.columns.length > 1) tr.append("th").attr("class").string("row total").text().string(this.formatTotal(row.stats.tot)).attr("title").string(this.formatTotalOver(row.stats.tot));
		}
		var tfoot = table.append("tfoot");
		if(this.displayColumnTotal && d.rows.length > 1) {
			var tr = tfoot.append("tr");
			this.prependSpacer(leftspan,tr);
			var _g = 0, _g1 = d.columns;
			while(_g < _g1.length) {
				var col = _g1[_g];
				++_g;
				tr.append("th").attr("class").string("column total").text().string(this.formatTotal(col.stats.tot)).attr("title").string(this.formatTotalOver(col.stats.tot));
			}
			if(this.displayRowTotal && d.columns.length > 1) tr.append("th").attr("class").string("table total").text().string(this.formatTotal(d.stats.tot)).attr("title").string(this.formatTotalOver(d.stats.tot));
		}
		this.ready.dispatch();
	}
	,onClick: function(dp,_,_1) {
		this.click(dp);
	}
	,formatTotal: function(v,_) {
		return this.labelTotal(v,this.stats);
	}
	,formatTotalOver: function(v,_) {
		return this.labelTotalOver(v,this.stats);
	}
	,formatDataPoint: function(dp,_) {
		return this.labelDataPoint(dp,this.stats);
	}
	,formatDataPointOver: function(dp,_) {
		return this.labelDataPointOver(dp,this.stats);
	}
	,buildValue: function(value,header,counter,tr) {
		var th = tr.append("th").attr("class").string("column value").text().string(this.labelAxisValue(value,header));
		if(counter > 1) th.attr("colspan")["float"](counter);
	}
	,prependSpacer: function(counter,tr) {
		if(counter == 0) return;
		var th = tr.append("th").attr("class").string("spacer");
		if(counter > 1) th.attr("colspan")["float"](counter);
	}
	,init: function() {
	}
	,setVariables: function(variableIndependents,variableDependents) {
		this.cellVariable = variableDependents[0];
		this.columnVariables = [];
		var _g1 = 0, _g = this.incolumns;
		while(_g1 < _g) {
			var i = _g1++;
			this.columnVariables.push(variableIndependents[i]);
		}
		this.rowVariables = [];
		var _g1 = this.incolumns, _g = variableIndependents.length;
		while(_g1 < _g) {
			var i = _g1++;
			this.rowVariables.push(variableIndependents[i]);
		}
	}
	,destroy: function() {
		this.container.html().string("");
	}
	,transformData: function(dps) {
		var column_headers = [], row_headers = [], columns = [], rows = [], tcalc = new rg.axis.StatsNumeric(null);
		var variable;
		var _g1 = 0, _g = Ints.min(1,this.columnVariables.length);
		while(_g1 < _g) {
			var i = _g1++;
			variable = this.columnVariables[i];
			column_headers.push(variable.type);
			var _g2 = 0, _g3 = this.range(variable);
			while(_g2 < _g3.length) {
				var value = _g3[_g2];
				++_g2;
				columns.push({ values : [value], stats : null});
			}
		}
		var _g1 = 1, _g = this.columnVariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			variable = this.columnVariables[i];
			column_headers.push(variable.type);
			var tmp = columns.copy();
			columns = [];
			var _g2 = 0;
			while(_g2 < tmp.length) {
				var src = tmp[_g2];
				++_g2;
				var _g3 = 0, _g4 = this.range(variable);
				while(_g3 < _g4.length) {
					var value = _g4[_g3];
					++_g3;
					var column = Objects.clone(src);
					column.values.push(value);
					columns.push(column);
				}
			}
		}
		var name, headers = column_headers;
		var _g1 = 0, _g = columns.length;
		while(_g1 < _g) {
			var i = _g1++;
			var column = [columns[i]], ccalc = new rg.axis.StatsNumeric(null);
			column[0].stats = ccalc;
			var _g2 = 0, _g3 = Arrays.filter(dps,(function(column) {
				return function(dp) {
					var _g3 = 0, _g21 = headers.length;
					while(_g3 < _g21) {
						var j = _g3++;
						name = headers[j];
						if(Reflect.field(dp,name) != column[0].values[j]) return false;
					}
					return true;
				};
			})(column));
			while(_g2 < _g3.length) {
				var dp = _g3[_g2];
				++_g2;
				var v = Reflect.field(dp,this.cellVariable.type);
				if(null == v) continue;
				ccalc.add(v);
				tcalc.add(v);
			}
		}
		var _g1 = 0, _g = Ints.min(1,this.rowVariables.length);
		while(_g1 < _g) {
			var i = _g1++;
			variable = this.rowVariables[i];
			row_headers.push(variable.type);
			var _g2 = 0, _g3 = this.range(variable);
			while(_g2 < _g3.length) {
				var value = _g3[_g2];
				++_g2;
				rows.push({ values : [value], stats : null, cells : null});
			}
		}
		var _g1 = 1, _g = this.rowVariables.length;
		while(_g1 < _g) {
			var i = _g1++;
			variable = this.rowVariables[i];
			row_headers.push(variable.type);
			var tmp = rows.copy();
			rows = [];
			var _g2 = 0;
			while(_g2 < tmp.length) {
				var src = tmp[_g2];
				++_g2;
				var _g3 = 0, _g4 = this.range(variable);
				while(_g3 < _g4.length) {
					var value = _g4[_g3];
					++_g3;
					var row = Objects.clone(src);
					row.values.push(value);
					rows.push(row);
				}
			}
		}
		var name1, headers1 = row_headers;
		var _g = 0;
		while(_g < rows.length) {
			var row = [rows[_g]];
			++_g;
			row[0].stats = new rg.axis.StatsNumeric(null);
			row[0].cells = [];
			var rdps = Arrays.filter(dps,(function(row) {
				return function(d) {
					var _g2 = 0, _g1 = headers1.length;
					while(_g2 < _g1) {
						var j = _g2++;
						name1 = headers1[j];
						if(Reflect.field(d,name1) != row[0].values[j]) return false;
					}
					return true;
				};
			})(row));
			var _g1 = 0;
			while(_g1 < columns.length) {
				var column = [columns[_g1]];
				++_g1;
				var dp = Arrays.firstf(rdps,(function(column) {
					return function(dp) {
						var _g3 = 0, _g2 = column[0].values.length;
						while(_g3 < _g2) {
							var i = _g3++;
							if(Reflect.field(dp,column_headers[i]) != column[0].values[i]) return false;
						}
						return true;
					};
				})(column));
				var v = Reflect.field(dp,this.cellVariable.type);
				if(null == v) {
					row[0].cells.push({ });
					continue;
				}
				row[0].cells.push(dp);
				row[0].stats.add(v);
			}
		}
		return { column_headers : column_headers, row_headers : row_headers, columns : columns, rows : rows, stats : tcalc};
	}
	,range: function(variable) {
		return variable.axis.range(variable.min(),variable.max());
	}
	,__class__: rg.html.chart.PivotTable
}
thx.geo.AlbersUsa = $hxClasses["thx.geo.AlbersUsa"] = function() {
	this.lower48 = new thx.geo.Albers();
	this.alaska = new thx.geo.Albers();
	this.alaska.setOrigin([-160.0,60]);
	this.alaska.setParallels([55.0,65]);
	this.hawaii = new thx.geo.Albers();
	this.hawaii.setOrigin([-160.0,20]);
	this.hawaii.setParallels([8.0,18]);
	this.puertoRico = new thx.geo.Albers();
	this.puertoRico.setOrigin([-60.0,10]);
	this.puertoRico.setParallels([8.0,18]);
	this.setScale(this.lower48.getScale());
}
thx.geo.AlbersUsa.__name__ = ["thx","geo","AlbersUsa"];
thx.geo.AlbersUsa.__interfaces__ = [thx.geo.IProjection];
thx.geo.AlbersUsa.prototype = {
	translate: null
	,scale: null
	,lower48: null
	,alaska: null
	,hawaii: null
	,puertoRico: null
	,last: null
	,project: function(coords) {
		var lon = coords[0], lat = coords[1];
		return (lat > 50?this.alaska:lon < -140?this.hawaii:lat < 21?this.puertoRico:this.lower48).project(coords);
	}
	,invert: function(coords) {
		return (function($this) {
			var $r;
			throw new thx.error.NotImplemented({ fileName : "AlbersUsa.hx", lineNumber : 67, className : "thx.geo.AlbersUsa", methodName : "invert"});
			return $r;
		}(this));
	}
	,setScale: function(scale) {
		this.lower48.setScale(scale);
		this.alaska.setScale(scale * .6);
		this.hawaii.setScale(scale);
		this.puertoRico.setScale(scale * 1.5);
		this.setTranslate(this.lower48.getTranslate());
		return scale;
	}
	,getScale: function() {
		return this.lower48.getScale();
	}
	,setTranslate: function(translate) {
		var dz = this.lower48.getScale() / 1000, dx = translate[0], dy = translate[1];
		this.lower48.setTranslate(translate);
		this.alaska.setTranslate([dx - 400 * dz,dy + 170 * dz]);
		this.hawaii.setTranslate([dx - 190 * dz,dy + 200 * dz]);
		this.puertoRico.setTranslate([dx + 580 * dz,dy + 430 * dz]);
		return translate;
	}
	,getTranslate: function() {
		return this.lower48.getTranslate();
	}
	,__class__: thx.geo.AlbersUsa
	,__properties__: {set_scale:"setScale",get_scale:"getScale",set_translate:"setTranslate",get_translate:"getTranslate"}
}
rg.info.InfoGeneral = $hxClasses["rg.info.InfoGeneral"] = function() {
}
rg.info.InfoGeneral.__name__ = ["rg","info","InfoGeneral"];
rg.info.InfoGeneral.filter = function() {
	return [{ field : "ready", validator : function(v) {
		return Reflect.isFunction(v);
	}, value : null}];
}
rg.info.InfoGeneral.prototype = {
	ready: null
	,__class__: rg.info.InfoGeneral
}
rg.svg.layer.Title = $hxClasses["rg.svg.layer.Title"] = function(panel,text,anchor,padding,className,shadow,outline) {
	if(outline == null) outline = false;
	if(shadow == null) shadow = false;
	if(className == null) className = "title";
	if(padding == null) padding = 1;
	rg.svg.panel.Layer.call(this,panel);
	this.addClass(className);
	this.group = this.g.append("svg:g");
	this.label = new rg.svg.widget.Label(this.group,false,shadow,outline);
	this.label.setOrientation(rg.svg.widget.LabelOrientation.Orthogonal);
	this.setAnchor(anchor);
	this.setPadding(padding);
	this.setText(text);
	this.resize();
}
rg.svg.layer.Title.__name__ = ["rg","svg","layer","Title"];
rg.svg.layer.Title.__super__ = rg.svg.panel.Layer;
rg.svg.layer.Title.prototype = $extend(rg.svg.panel.Layer.prototype,{
	text: null
	,anchor: null
	,padding: null
	,label: null
	,group: null
	,idealHeight: function() {
		var size = this.label.getSize();
		return Math.round((function($this) {
			var $r;
			switch( ($this.anchor)[1] ) {
			case 2:
			case 3:
				$r = size.width + $this.padding;
				break;
			case 0:
			case 1:
				$r = size.height + $this.padding;
				break;
			}
			return $r;
		}(this)));
	}
	,resize: function() {
		if(null == this.anchor || null == this.width || this.padding == null) return;
		switch( (this.anchor)[1] ) {
		case 0:
			this.group.attr("transform").string("translate(" + this.width / 2 + "," + this.padding + ")");
			break;
		case 3:
			this.group.attr("transform").string("translate(" + (this.width - this.padding) + "," + this.height / 2 + ")");
			break;
		case 2:
			this.group.attr("transform").string("translate(" + this.padding + "," + this.height / 2 + ")");
			break;
		case 1:
			this.group.attr("transform").string("translate(" + this.width / 2 + "," + (this.height - this.padding) + ")");
			break;
		}
	}
	,getText: function() {
		return this.label.text;
	}
	,setText: function(v) {
		return this.label.setText(v);
	}
	,setAnchor: function(v) {
		switch( (this.anchor = v)[1] ) {
		case 0:
			this.label.setAnchor(rg.svg.widget.GridAnchor.Top);
			break;
		case 1:
			this.label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
			break;
		case 2:
			this.label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
			break;
		case 3:
			this.label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
			break;
		}
		return v;
	}
	,setPadding: function(v) {
		this.padding = v;
		switch( (this.anchor)[1] ) {
		case 0:
			this.label.place(0,0,90);
			break;
		case 1:
			this.label.place(0,0,90);
			break;
		case 2:
			this.label.place(0,0,180);
			break;
		case 3:
			this.label.place(0,0,0);
			break;
		}
		return v;
	}
	,__class__: rg.svg.layer.Title
	,__properties__: $extend(rg.svg.panel.Layer.prototype.__properties__,{set_padding:"setPadding",set_anchor:"setAnchor",set_text:"setText",get_text:"getText"})
});
rg.info.InfoVariable = $hxClasses["rg.info.InfoVariable"] = function() {
	this.variableType = rg.info.VariableType.Unknown;
}
rg.info.InfoVariable.__name__ = ["rg","info","InfoVariable"];
rg.info.InfoVariable.filters = function() {
	return [{ field : "type", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "view", validator : function(v) {
		return Std["is"](v,Array) && rg.info.InfoVariable.testViewValue(v[0]) && rg.info.InfoVariable.testViewValue(v[1]);
	}, filter : function(v) {
		var result = [];
		if(null != v[0]) result.push({ field : "min", value : v[0]});
		if(null != v[1]) result.push({ field : "max", value : v[1]});
		return result;
	}},{ field : "values", validator : function(v) {
		return Std["is"](v,Array) && Iterators.all(v.iterator(),function(v1) {
			return Types.isPrimitive(v1);
		});
	}, filter : null},{ field : "groupby", validator : function(v) {
		return Std["is"](v,String) && rg.util.Periodicity.isValidGroupBy(v);
	}, filter : function(v) {
		return [{ field : "groupBy", value : v}];
	}},{ field : "variable", validator : function(v) {
		return Std["is"](v,String) && Arrays.exists(["independent","dependent"],v.toLowerCase());
	}, filter : function(v) {
		return [{ field : "variableType", value : Type.createEnum(rg.info.VariableType,Strings.ucfirst(("" + v).toLowerCase()),[])}];
	}},{ field : "scalemode", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "scaleDistribution", value : Type.createEnum(rg.axis.ScaleDistribution,"Scale" + Strings.ucfirst(("" + v).toLowerCase()),[])}];
	}}];
}
rg.info.InfoVariable.testViewValue = function(v) {
	return v == null || Types.isPrimitive(v) || Std["is"](v,Date) || Reflect.isFunction(v);
}
rg.info.InfoVariable.__super__ = rg.info.Info;
rg.info.InfoVariable.prototype = $extend(rg.info.Info.prototype,{
	type: null
	,min: null
	,max: null
	,values: null
	,groupBy: null
	,variableType: null
	,scaleDistribution: null
	,__class__: rg.info.InfoVariable
});
rg.info.VariableType = $hxClasses["rg.info.VariableType"] = { __ename__ : ["rg","info","VariableType"], __constructs__ : ["Unknown","Independent","Dependent"] }
rg.info.VariableType.Unknown = ["Unknown",0];
rg.info.VariableType.Unknown.toString = $estr;
rg.info.VariableType.Unknown.__enum__ = rg.info.VariableType;
rg.info.VariableType.Independent = ["Independent",1];
rg.info.VariableType.Independent.toString = $estr;
rg.info.VariableType.Independent.__enum__ = rg.info.VariableType;
rg.info.VariableType.Dependent = ["Dependent",2];
rg.info.VariableType.Dependent.toString = $estr;
rg.info.VariableType.Dependent.__enum__ = rg.info.VariableType;
thx.js.AccessStyle = $hxClasses["thx.js.AccessStyle"] = function(name,selection) {
	thx.js.Access.call(this,selection);
	this.name = name;
}
thx.js.AccessStyle.__name__ = ["thx","js","AccessStyle"];
thx.js.AccessStyle.getComputedStyleValue = function(node,key) {
	return window.getComputedStyle(node,null).getPropertyValue(key);
}
thx.js.AccessStyle.setStyleProperty = function(node,key,value,priority) {
	node.style.setProperty(key,value,null == priority?"":priority);
}
thx.js.AccessStyle.removeStyleProperty = function(node,key) {
	node.style.removeProperty(key);
}
thx.js.AccessStyle.__super__ = thx.js.Access;
thx.js.AccessStyle.prototype = $extend(thx.js.Access.prototype,{
	name: null
	,get: function() {
		var me = this;
		return this.selection.firstNode(function(node) {
			return window.getComputedStyle(node,null).getPropertyValue(me.name);
		});
	}
	,getFloat: function() {
		var v = this.get();
		if(thx.js.AccessStyle.refloat.match(v)) return Std.parseFloat(thx.js.AccessStyle.refloat.matched(1)); else return Math.NaN;
	}
	,remove: function() {
		var me = this;
		this.selection.eachNode(function(node,i) {
			node.style.removeProperty(me.name);
		});
		return this.selection;
	}
	,string: function(v,priority) {
		var me = this;
		this.selection.eachNode(function(node,i) {
			node.style.setProperty(me.name,v,null == priority?"":priority);
		});
		return this.selection;
	}
	,'float': function(v,priority) {
		var me = this;
		this.selection.eachNode(function(node,i) {
			node.style.setProperty(me.name,v,null == priority?"":priority);
		});
		return this.selection;
	}
	,color: function(v,priority) {
		var me = this;
		var s = v.toRgbString();
		this.selection.eachNode(function(node,i) {
			node.style.setProperty(me.name,s,null == priority?"":priority);
		});
		return this.selection;
	}
	,__class__: thx.js.AccessStyle
});
thx.js.AccessDataStyle = $hxClasses["thx.js.AccessDataStyle"] = function(name,selection) {
	thx.js.AccessStyle.call(this,name,selection);
}
thx.js.AccessDataStyle.__name__ = ["thx","js","AccessDataStyle"];
thx.js.AccessDataStyle.__super__ = thx.js.AccessStyle;
thx.js.AccessDataStyle.prototype = $extend(thx.js.AccessStyle.prototype,{
	stringf: function(v,priority) {
		var me = this;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(s == null) node.style.removeProperty(me.name); else node.style.setProperty(me.name,s,null == priority?"":priority);
		});
		return this.selection;
	}
	,floatf: function(v,priority) {
		var me = this;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(s == null) node.style.removeProperty(me.name); else node.style.setProperty(me.name,"" + s,null == priority?"":priority);
		});
		return this.selection;
	}
	,colorf: function(v,priority) {
		var me = this;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(s == null) node.style.removeProperty(me.name); else node.style.setProperty(me.name,"" + s.toRgbString(),null == priority?"":priority);
		});
		return this.selection;
	}
	,data: function() {
		return this.stringf(function(d,_) {
			return "" + d;
		});
	}
	,__class__: thx.js.AccessDataStyle
});
thx.js.BaseTransition = $hxClasses["thx.js.BaseTransition"] = function(selection) {
	this.selection = selection;
	var tid = this._transitionId = thx.js.BaseTransition._inheritid > 0?thx.js.BaseTransition._inheritid:++thx.js.BaseTransition._id;
	this._tweens = new Hash();
	this._interpolators = [];
	this._remove = false;
	this._stage = [];
	this._delay = [];
	this._duration = [];
	this._ease = thx.math.Ease.mode(thx.math.EaseMode.EaseInEaseOut,thx.math.Equations.cubic);
	this._step = this.step.$bind(this);
	selection.eachNode(function(n,_) {
		if(Reflect.hasField(n,"__transition__")) Reflect.field(n,"__transition__").owner = tid; else n["__transition__"] = { owner : tid};
	});
	this.delay(null,0);
	this.duration(null,250);
}
thx.js.BaseTransition.__name__ = ["thx","js","BaseTransition"];
thx.js.BaseTransition.prototype = {
	_transitionId: null
	,_tweens: null
	,_interpolators: null
	,_remove: null
	,_stage: null
	,_delay: null
	,_duration: null
	,_durationMax: null
	,_ease: null
	,_step: null
	,_start: null
	,_end: null
	,selection: null
	,step: function(elapsed) {
		var clear = true, k = -1, me = this;
		this.selection.eachNode(function(n,i) {
			if(2 == me._stage[++k]) return;
			var t = (elapsed - me._delay[k]) / me._duration[k], tx = Reflect.field(n,"__transition__"), te, tk, ik = me._interpolators[k];
			if(t < 1) {
				clear = false;
				if(t < 0) return;
			} else t = 1;
			if(null != me._stage[k]) {
				if(null == tx || tx.active != me._transitionId) {
					me._stage[k] = 2;
					return;
				}
			} else if(null == tx || tx.active > me._transitionId) {
				me._stage[k] = 2;
				return;
			} else {
				me._stage[k] = 1;
				if(null != me._start) me._start(n,i);
				ik = me._interpolators[k] = new Hash();
				tx.active = me._transitionId;
				var $it0 = me._tweens.keys();
				while( $it0.hasNext() ) {
					var tk1 = $it0.next();
					var f = me._tweens.get(tk1);
					ik.set(tk1,f(n,i));
				}
			}
			te = me._ease(t);
			var $it1 = me._tweens.keys();
			while( $it1.hasNext() ) {
				var tk1 = $it1.next();
				(ik.get(tk1))(te);
			}
			if(1 == t) {
				me._stage[k] = 2;
				if(tx.active == me._transitionId) {
					var owner = tx.owner;
					if(owner == me._transitionId) {
						Reflect.deleteField(n,"__transition__");
						if(me._remove) n.parentNode.removeChild(n);
					}
					thx.js.BaseTransition._inheritid = me._transitionId;
					if(null != me._end) me._end(n,i);
					thx.js.BaseTransition._inheritid = 0;
					tx.owner = owner;
				}
			}
		});
		return clear;
	}
	,startNode: function(f) {
		this._start = f;
		return this._this();
	}
	,endNode: function(f) {
		this._end = f;
		return this._this();
	}
	,stop: function() {
		var k = -1, me = this;
		this.selection.eachNode(function(n,i) {
			me._stage[++k] = 2;
			Reflect.deleteField(n,"__transition__");
		});
		return this._this();
	}
	,delay: function(f,v) {
		if(v == null) v = 0.0;
		var delayMin = Math.POSITIVE_INFINITY, k = -1, me = this;
		if(null != f) this.selection.eachNode(function(n,i) {
			var x = me._delay[++k] = f(n,i);
			if(x < delayMin) delayMin = x;
		}); else {
			delayMin = v;
			this.selection.eachNode(function(n,i) {
				me._delay[++k] = delayMin;
			});
		}
		thx.js.Timer.timer(this._step,delayMin);
		return this._this();
	}
	,duration: function(f,v) {
		if(v == null) v = 0.0;
		var k = -1, me = this;
		if(null != f) {
			this._durationMax = 0;
			this.selection.eachNode(function(n,i) {
				var x = me._duration[++k] = f(n,i);
				if(x > me._durationMax) me._durationMax = x;
			});
		} else {
			this._durationMax = v;
			this.selection.eachNode(function(n,i) {
				me._duration[++k] = me._durationMax;
			});
		}
		return this._this();
	}
	,ease: function(f,easemode) {
		this._ease = thx.math.Ease.mode(easemode,f);
		return this._this();
	}
	,remove: function(v) {
		if(v == null) v = true;
		this._remove = v;
		return this._this();
	}
	,select: function(selector) {
		var k, t = this.createTransition(this.selection.select(selector));
		t._ease = this._ease;
		var delay = this._delay;
		var duration = this._duration;
		k = -1;
		t.delay(function(d,i) {
			return delay[++k];
		});
		k = -1;
		t.delay(function(d,i) {
			return duration[++k];
		});
		return t;
	}
	,selectAll: function(selector) {
		var k, t = this.createTransition(this.selection.selectAll(selector));
		t._ease = this._ease;
		var delay = this._delay;
		var duration = this._duration;
		k = -1;
		t.delay(function(d,i) {
			return delay[i > 0?k:++k];
		});
		k = -1;
		t.delay(function(d,i) {
			return duration[i > 0?k:++k];
		});
		return t;
	}
	,createTransition: function(selection) {
		return (function($this) {
			var $r;
			throw new thx.error.AbstractMethod({ fileName : "Transition.hx", lineNumber : 243, className : "thx.js.BaseTransition", methodName : "createTransition"});
			return $r;
		}(this));
	}
	,_this: function() {
		return this;
	}
	,__class__: thx.js.BaseTransition
}
thx.js.UnboundTransition = $hxClasses["thx.js.UnboundTransition"] = function(selection) {
	thx.js.BaseTransition.call(this,selection);
}
thx.js.UnboundTransition.__name__ = ["thx","js","UnboundTransition"];
thx.js.UnboundTransition.__super__ = thx.js.BaseTransition;
thx.js.UnboundTransition.prototype = $extend(thx.js.BaseTransition.prototype,{
	text: function() {
		return new thx.js.AccessTweenText(this,this._tweens);
	}
	,style: function(name) {
		return new thx.js.AccessTweenStyle(name,this,this._tweens);
	}
	,attr: function(name) {
		return new thx.js.AccessTweenAttribute(name,this,this._tweens);
	}
	,createTransition: function(selection) {
		return new thx.js.UnboundTransition(selection);
	}
	,__class__: thx.js.UnboundTransition
});
thx.js.BoundTransition = $hxClasses["thx.js.BoundTransition"] = function(selection) {
	thx.js.BaseTransition.call(this,selection);
}
thx.js.BoundTransition.__name__ = ["thx","js","BoundTransition"];
thx.js.BoundTransition.__super__ = thx.js.BaseTransition;
thx.js.BoundTransition.prototype = $extend(thx.js.BaseTransition.prototype,{
	text: function() {
		return new thx.js.AccessDataTweenText(this,this._tweens);
	}
	,style: function(name) {
		return new thx.js.AccessDataTweenStyle(name,this,this._tweens);
	}
	,attr: function(name) {
		return new thx.js.AccessDataTweenAttribute(name,this,this._tweens);
	}
	,start: function(f) {
		return this.startNode(function(n,i) {
			f(Reflect.field(n,"__data__"),i);
		});
	}
	,end: function(f) {
		return this.endNode(function(n,i) {
			f(Reflect.field(n,"__data__"),i);
		});
	}
	,createTransition: function(selection) {
		return new thx.js.BoundTransition(selection);
	}
	,__class__: thx.js.BoundTransition
});
chx.lang.OverflowException = $hxClasses["chx.lang.OverflowException"] = function(msg,cause) {
	chx.lang.Exception.call(this,msg,cause);
}
chx.lang.OverflowException.__name__ = ["chx","lang","OverflowException"];
chx.lang.OverflowException.__super__ = chx.lang.Exception;
chx.lang.OverflowException.prototype = $extend(chx.lang.Exception.prototype,{
	__class__: chx.lang.OverflowException
});
rg.svg.widget.GridAnchor = $hxClasses["rg.svg.widget.GridAnchor"] = { __ename__ : ["rg","svg","widget","GridAnchor"], __constructs__ : ["TopLeft","Top","TopRight","Left","Center","Right","BottomLeft","Bottom","BottomRight"] }
rg.svg.widget.GridAnchor.TopLeft = ["TopLeft",0];
rg.svg.widget.GridAnchor.TopLeft.toString = $estr;
rg.svg.widget.GridAnchor.TopLeft.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Top = ["Top",1];
rg.svg.widget.GridAnchor.Top.toString = $estr;
rg.svg.widget.GridAnchor.Top.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.TopRight = ["TopRight",2];
rg.svg.widget.GridAnchor.TopRight.toString = $estr;
rg.svg.widget.GridAnchor.TopRight.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Left = ["Left",3];
rg.svg.widget.GridAnchor.Left.toString = $estr;
rg.svg.widget.GridAnchor.Left.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Center = ["Center",4];
rg.svg.widget.GridAnchor.Center.toString = $estr;
rg.svg.widget.GridAnchor.Center.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Right = ["Right",5];
rg.svg.widget.GridAnchor.Right.toString = $estr;
rg.svg.widget.GridAnchor.Right.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.BottomLeft = ["BottomLeft",6];
rg.svg.widget.GridAnchor.BottomLeft.toString = $estr;
rg.svg.widget.GridAnchor.BottomLeft.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.Bottom = ["Bottom",7];
rg.svg.widget.GridAnchor.Bottom.toString = $estr;
rg.svg.widget.GridAnchor.Bottom.__enum__ = rg.svg.widget.GridAnchor;
rg.svg.widget.GridAnchor.BottomRight = ["BottomRight",8];
rg.svg.widget.GridAnchor.BottomRight.toString = $estr;
rg.svg.widget.GridAnchor.BottomRight.__enum__ = rg.svg.widget.GridAnchor;
rg.factory.FactoryGeoProjection = $hxClasses["rg.factory.FactoryGeoProjection"] = function() {
}
rg.factory.FactoryGeoProjection.__name__ = ["rg","factory","FactoryGeoProjection"];
rg.factory.FactoryGeoProjection.prototype = {
	create: function(info) {
		switch(info.projection.toLowerCase()) {
		case "mercator":
			var projection = new thx.geo.Mercator();
			if(null != info.scale) projection.setScale(info.scale);
			if(null != info.translate) projection.setTranslate(info.translate); else projection.setTranslate([0.0,0]);
			return projection;
		case "albers":
			var projection = new thx.geo.Albers();
			if(null != info.scale) projection.setScale(info.scale);
			if(null != info.translate) projection.setTranslate(info.translate); else projection.setTranslate([0.0,0]);
			if(null != info.origin) projection.setOrigin(info.origin);
			if(null != info.parallels) projection.setParallels(info.parallels);
			return projection;
		case "albersusa":
			var projection = new thx.geo.AlbersUsa();
			if(null != info.scale) projection.setScale(info.scale);
			if(null != info.translate) projection.setTranslate(info.translate); else projection.setTranslate([0.0,0]);
			return projection;
		case "azimuthal":
			var projection = new thx.geo.Azimuthal();
			if(null != info.scale) projection.setScale(info.scale);
			if(null != info.translate) projection.setTranslate(info.translate); else projection.setTranslate([0.0,0]);
			if(null != info.mode) projection.setMode(info.mode);
			if(null != info.origin) projection.setOrigin(info.origin);
			return projection;
		default:
			return (function($this) {
				var $r;
				throw new thx.error.Error("the projection '{0}' does not exist or is not implemented",[info.projection],null,{ fileName : "FactoryGeoProjection.hx", lineNumber : 68, className : "rg.factory.FactoryGeoProjection", methodName : "create"});
				return $r;
			}(this));
		}
	}
	,__class__: rg.factory.FactoryGeoProjection
}
thx.svg.Line = $hxClasses["thx.svg.Line"] = function(x,y,interpolator) {
	this._x = x;
	this._y = y;
	this._interpolator = interpolator;
}
thx.svg.Line.__name__ = ["thx","svg","Line"];
thx.svg.Line.pointArray = function(interpolator) {
	return new thx.svg.Line(function(d,_) {
		return d[0];
	},function(d,_) {
		return d[1];
	},interpolator);
}
thx.svg.Line.pointObject = function(interpolator) {
	return new thx.svg.Line(function(d,_) {
		return d.x;
	},function(d,_) {
		return d.y;
	},interpolator);
}
thx.svg.Line.prototype = {
	_x: null
	,_y: null
	,_interpolator: null
	,shape: function(data,i) {
		return data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y),this._interpolator);
	}
	,getInterpolator: function() {
		return this._interpolator;
	}
	,interpolator: function(type) {
		this._interpolator = type;
		return this;
	}
	,getX: function() {
		return this._x;
	}
	,x: function(v) {
		this._x = v;
		return this;
	}
	,getY: function() {
		return this._y;
	}
	,y: function(v) {
		this._y = v;
		return this;
	}
	,__class__: thx.svg.Line
}
if(!rg.interactive) rg.interactive = {}
rg.interactive.Downloader = $hxClasses["rg.interactive.Downloader"] = function(container,serviceurl,backgroundcolor) {
	this.container = container;
	this.serviceUrl = serviceurl;
	this.defaultBackgroundColor = backgroundcolor;
}
rg.interactive.Downloader.__name__ = ["rg","interactive","Downloader"];
rg.interactive.Downloader.getClassName = function(container) {
	var name = container.attr("class").get();
	name = StringTools.trim(new EReg("\\s+","g").replace(new EReg("(^rg$|^rg\\s+|\\s+rg\\s+|\\s+rg$)","g").replace(name," ")," "));
	return "" == name?null:name;
}
rg.interactive.Downloader.prototype = {
	serviceUrl: null
	,defaultBackgroundColor: null
	,container: null
	,download: function(format,backgroundcolor,success,error) {
		if(!Arrays.exists(rg.interactive.Downloader.ALLOWED_FORMATS,format)) throw new thx.error.Error("The download format '{0}' is not correct",[format],null,{ fileName : "Downloader.hx", lineNumber : 36, className : "rg.interactive.Downloader", methodName : "download"});
		var ob = { tokenId : rg.util.RG.getTokenId(), css : rg.svg.util.RGCss.cssSources(), id : this.container.attr("id").get(), format : format, xml : this.container.node().innerHTML, element : this.container.node().nodeName.toLowerCase()};
		var bg = null == backgroundcolor?this.defaultBackgroundColor:backgroundcolor;
		if(null != bg) ob.backgroundcolor = bg;
		var cls = rg.interactive.Downloader.getClassName(this.container);
		if(null != cls) ob.className = cls;
		var http = new haxe.Http(this.serviceUrl);
		if(null != error) http.onError = error; else http.onError = function(e) {
			haxe.Log.trace(e,{ fileName : "Downloader.hx", lineNumber : 56, className : "rg.interactive.Downloader", methodName : "download"});
		};
		http.onData = (function(f,a1,a2) {
			return function(a3) {
				return f(a1,a2,a3);
			};
		})(this.complete.$bind(this),success,error);
		var buf = [];
		var _g = 0, _g1 = Reflect.fields(ob);
		while(_g < _g1.length) {
			var field = _g1[_g];
			++_g;
			http.setParameter(field,Reflect.field(ob,field));
		}
		http.request(true);
	}
	,complete: function(success,error,content) {
		if(content.substr(0,rg.interactive.Downloader.ERROR_PREFIX.length) == rg.interactive.Downloader.ERROR_PREFIX) {
			if(null != error) error(content.substr(rg.interactive.Downloader.ERROR_PREFIX.length));
		} else if(null == success || success(content)) js.Lib.window.location.href = content;
	}
	,__class__: rg.interactive.Downloader
}
rg.svg.panel.Space = $hxClasses["rg.svg.panel.Space"] = function(width,height,domcontainer) {
	this.panel = new rg.frame.StackItem(rg.frame.FrameLayout.Fill(0,0));
	rg.svg.panel.Container.call(this,this.panel,rg.frame.Orientation.Vertical);
	this.init(this.svg = domcontainer.append("svg:svg").attr("xmlns").string("http://www.w3.org/2000/svg"));
	this.resize(width,height);
}
rg.svg.panel.Space.__name__ = ["rg","svg","panel","Space"];
rg.svg.panel.Space.__super__ = rg.svg.panel.Container;
rg.svg.panel.Space.prototype = $extend(rg.svg.panel.Container.prototype,{
	panel: null
	,svg: null
	,resize: function(width,height) {
		if(this.panel.width == width && this.panel.height == height) return;
		this.svg.attr("width")["float"](width).attr("height")["float"](height);
		var sf = this.panel;
		sf.setLayout(0,0,width,height);
	}
	,__class__: rg.svg.panel.Space
});
rg.factory.FactoryVariableDependent = $hxClasses["rg.factory.FactoryVariableDependent"] = function() {
}
rg.factory.FactoryVariableDependent.__name__ = ["rg","factory","FactoryVariableDependent"];
rg.factory.FactoryVariableDependent.prototype = {
	create: function(info,isnumeric) {
		if(null == info.type) throw new thx.error.Error("cannot create an axis if type is not specified",null,null,{ fileName : "FactoryVariableDependent.hx", lineNumber : 18, className : "rg.factory.FactoryVariableDependent", methodName : "create"});
		var axiscreator = new rg.factory.FactoryAxis(), variable = new rg.data.VariableDependent(info.type,info.scaleDistribution), axis = axiscreator.create(info.type,isnumeric,variable,info.values);
		variable.setAxis(axis);
		variable.setMinF(rg.factory.FactoryVariableIndependent.convertBound(axis,info.min));
		variable.setMaxF(rg.factory.FactoryVariableIndependent.convertBound(axis,info.max));
		return variable;
	}
	,__class__: rg.factory.FactoryVariableDependent
}
haxe.Http = $hxClasses["haxe.Http"] = function(url) {
	this.url = url;
	this.headers = new Hash();
	this.params = new Hash();
	this.async = true;
}
haxe.Http.__name__ = ["haxe","Http"];
haxe.Http.requestUrl = function(url) {
	var h = new haxe.Http(url);
	h.async = false;
	var r = null;
	h.onData = function(d) {
		r = d;
	};
	h.onError = function(e) {
		throw e;
	};
	h.request(false);
	return r;
}
haxe.Http.prototype = {
	url: null
	,async: null
	,postData: null
	,headers: null
	,params: null
	,setHeader: function(header,value) {
		this.headers.set(header,value);
	}
	,setParameter: function(param,value) {
		this.params.set(param,value);
	}
	,setPostData: function(data) {
		this.postData = data;
	}
	,request: function(post) {
		var me = this;
		var r = new js.XMLHttpRequest();
		var onreadystatechange = function() {
			if(r.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = r.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) me.onStatus(s);
			if(s != null && s >= 200 && s < 400) me.onData(r.responseText); else switch(s) {
			case null: case undefined:
				me.onError("Failed to connect or resolve host");
				break;
			case 12029:
				me.onError("Failed to connect to host");
				break;
			case 12007:
				me.onError("Unknown host");
				break;
			default:
				me.onError("Http Error #" + r.status);
			}
		};
		if(this.async) r.onreadystatechange = onreadystatechange;
		var uri = this.postData;
		if(uri != null) post = true; else {
			var $it0 = this.params.keys();
			while( $it0.hasNext() ) {
				var p = $it0.next();
				if(uri == null) uri = ""; else uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(this.params.get(p));
			}
		}
		try {
			if(post) r.open("POST",this.url,this.async); else if(uri != null) {
				var question = this.url.split("?").length <= 1;
				r.open("GET",this.url + (question?"?":"&") + uri,this.async);
				uri = null;
			} else r.open("GET",this.url,this.async);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		if(this.headers.get("Content-Type") == null && post && this.postData == null) r.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		var $it1 = this.headers.keys();
		while( $it1.hasNext() ) {
			var h = $it1.next();
			r.setRequestHeader(h,this.headers.get(h));
		}
		r.send(uri);
		if(!this.async) onreadystatechange();
	}
	,onData: function(data) {
	}
	,onError: function(msg) {
	}
	,onStatus: function(status) {
	}
	,__class__: haxe.Http
}
if(!thx.xml) thx.xml = {}
thx.xml.Namespace = $hxClasses["thx.xml.Namespace"] = function() { }
thx.xml.Namespace.__name__ = ["thx","xml","Namespace"];
thx.xml.Namespace.qualify = function(name) {
	var i = name.indexOf(":");
	if(i < 0) return null; else {
		var space = thx.xml.Namespace.prefix.get(name.substr(0,i));
		if(null == space) throw new thx.error.Error("unable to find a namespace for {0}",[space],null,{ fileName : "Namespace.hx", lineNumber : 29, className : "thx.xml.Namespace", methodName : "qualify"});
		return new thx.xml.NSQualifier(space,name.substr(i + 1));
	}
}
thx.xml.Namespace.prototype = {
	__class__: thx.xml.Namespace
}
thx.xml.NSQualifier = $hxClasses["thx.xml.NSQualifier"] = function(space,local) {
	this.space = space;
	this.local = local;
}
thx.xml.NSQualifier.__name__ = ["thx","xml","NSQualifier"];
thx.xml.NSQualifier.prototype = {
	space: null
	,local: null
	,__class__: thx.xml.NSQualifier
}
math.reduction.Null = $hxClasses["math.reduction.Null"] = function() {
}
math.reduction.Null.__name__ = ["math","reduction","Null"];
math.reduction.Null.__interfaces__ = [math.reduction.ModularReduction];
math.reduction.Null.prototype = {
	convert: function(x) {
		return x;
	}
	,revert: function(x) {
		return x;
	}
	,mulTo: function(x,y,r) {
		x.multiplyTo(y,r);
	}
	,sqrTo: function(x,r) {
		x.squareTo(r);
	}
	,reduce: function(x) {
	}
	,__class__: math.reduction.Null
}
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = $hxClasses["Type"] = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	a.remove("__class__");
	a.remove("__properties__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__properties__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.allEnums = function(e) {
	var all = [];
	var cst = e.__constructs__;
	var _g = 0;
	while(_g < cst.length) {
		var c = cst[_g];
		++_g;
		var v = Reflect.field(e,c);
		if(!Reflect.isFunction(v)) all.push(v);
	}
	return all;
}
Type.prototype = {
	__class__: Type
}
rg.axis.TickmarkOrdinal = $hxClasses["rg.axis.TickmarkOrdinal"] = function(pos,values,major,scaleDistribution) {
	if(major == null) major = true;
	this.pos = pos;
	this.values = values;
	this.scaleDistribution = scaleDistribution;
	this.major = major;
}
rg.axis.TickmarkOrdinal.__name__ = ["rg","axis","TickmarkOrdinal"];
rg.axis.TickmarkOrdinal.__interfaces__ = [rg.axis.ITickmark];
rg.axis.TickmarkOrdinal.fromArray = function(values,scaleDistribution) {
	return values.map(function(_,i) {
		return new rg.axis.TickmarkOrdinal(i,values,null,scaleDistribution);
	});
}
rg.axis.TickmarkOrdinal.prototype = {
	pos: null
	,values: null
	,scaleDistribution: null
	,delta: null
	,getDelta: function() {
		return rg.axis.ScaleDistributions.distribute(this.scaleDistribution,this.pos,this.values.length);
	}
	,major: null
	,getMajor: function() {
		return this.major;
	}
	,value: null
	,getValue: function() {
		return this.values[this.pos];
	}
	,label: null
	,getLabel: function() {
		return rg.util.RGStrings.humanize(this.values[this.pos]);
	}
	,toString: function() {
		return rg.axis.Tickmarks.string(this);
	}
	,__class__: rg.axis.TickmarkOrdinal
	,__properties__: {get_label:"getLabel",get_value:"getValue",get_major:"getMajor",get_delta:"getDelta"}
}
rg.svg.chart.FunnelChart = $hxClasses["rg.svg.chart.FunnelChart"] = function(panel) {
	rg.svg.chart.Chart.call(this,panel);
	this.padding = 2.5;
	this.flatness = 1.0;
	this.arrowSize = 30;
	this.gradientLightness = 1;
	this.displayGradient = true;
	this.labelArrow = this.defaultLabelArrow.$bind(this);
	this.labelDataPoint = this.defaultLabelDataPoint.$bind(this);
	this.labelDataPointOver = this.defaultLabelDataPointOver.$bind(this);
}
rg.svg.chart.FunnelChart.__name__ = ["rg","svg","chart","FunnelChart"];
rg.svg.chart.FunnelChart.__super__ = rg.svg.chart.Chart;
rg.svg.chart.FunnelChart.prototype = $extend(rg.svg.chart.Chart.prototype,{
	padding: null
	,flatness: null
	,displayGradient: null
	,gradientLightness: null
	,arrowSize: null
	,labelArrow: null
	,variableIndependent: null
	,variableDependent: null
	,defs: null
	,dps: null
	,defaultLabelArrow: function(dp,stats) {
		var value = Reflect.field(dp,this.variableDependent.type) / stats.max;
		return thx.culture.FormatNumber.percent(100 * value,0);
	}
	,defaultLabelDataPoint: function(dp,stats) {
		return rg.util.RGStrings.humanize(Reflect.field(dp,this.variableIndependent.type)).split(" ").join("\n");
	}
	,defaultLabelDataPointOver: function(dp,stats) {
		return Ints.format(Reflect.field(dp,this.variableDependent.type));
	}
	,setVariables: function(variableIndependents,variableDependents) {
		this.variableIndependent = variableIndependents[0];
		this.variableDependent = variableDependents[0];
	}
	,data: function(dps) {
		this.dps = dps;
		this.redraw();
	}
	,resize: function() {
		rg.svg.chart.Chart.prototype.resize.call(this);
		this.redraw();
	}
	,dpvalue: function(dp) {
		return Reflect.field(dp,this.variableDependent.type);
	}
	,stats: null
	,topheight: null
	,h: null
	,scale: function(value) {
		return this.variableDependent.axis.scale(this.variableDependent.min(),this.variableDependent.max(),value);
	}
	,next: function(i) {
		return this.dpvalue(this.dps[i + 1 < this.dps.length?i + 1:i]);
	}
	,redraw: function() {
		var me = this;
		if(null == this.dps || 0 == this.dps.length) return;
		this.g.selectAll("g").remove();
		this.g.selectAll("radialGradient").remove();
		this.stats = this.variableDependent.stats;
		var max = this.scale(this.stats.max), wscale = function(v) {
			return me.scale(v) / max * (me.width - 2) / 2;
		}, fx1 = function(v) {
			return me.width / 2 - wscale(v);
		}, fx2 = function(v) {
			return me.width - fx1(v);
		}, diagonal1 = new thx.svg.Diagonal().sourcef(function(o,i) {
			return [fx1(me.dpvalue(o)),0.0];
		}).targetf(function(o,i) {
			return [fx1(me.next(i)),me.h];
		}), diagonal2 = new thx.svg.Diagonal().sourcef(function(o,i) {
			return [fx2(me.next(i)),me.h];
		}).targetf(function(o,i) {
			return [fx2(me.dpvalue(o)),0.0];
		}), conj = function(v,r,dir) {
			var x2 = r?fx1(v) - fx2(v):fx2(v) - fx1(v), a = 5, d = r?dir == 0?1:0:dir;
			return " a " + a + " " + me.flatness + " 0 0 " + d + " " + x2 + " 0";
		}, conj1 = function(d,i) {
			return conj(me.dpvalue(d),true,0);
		}, conj2 = function(d,i) {
			return conj(me.next(i),false,0);
		}, conjr = function(d,i) {
			var v = me.dpvalue(d);
			return " M " + fx1(v) + " 0 " + conj(v,false,0) + conj(v,true,1);
		};
		var top = this.g.append("svg:g");
		var path = top.append("svg:path").attr("class").string("funnel-inside fill-0").attr("d").string(conjr(this.dps[0]));
		if(null != this.click) top.onNode("click",function(_,_1) {
			me.click(me.dps[0],me.stats);
		});
		if(this.displayGradient) this.internalGradient(path);
		top.onNode("mouseover",function(_,_1) {
			me.mouseOver(me.dps[0],0,me.stats);
		});
		this.topheight = Math.ceil(path.node().getBBox().height / 2) + 1;
		var index = this.dps.length - 1, bottom = this.g.append("svg:path").attr("class").string("funnel-inside fill-" + index).attr("d").string(conjr(this.dps[index])), bottomheight = Math.ceil(bottom.node().getBBox().height / 2) + 1;
		bottom.remove();
		this.h = (this.height - this.topheight - bottomheight - (this.dps.length - 1) * this.padding) / this.dps.length;
		top.attr("transform").string("translate(0," + (1 + this.topheight) + ")");
		var section = this.g.selectAll("g.section").data(this.dps);
		var enter = section.enter().append("svg:g").attr("class").string("section").attr("transform").stringf(function(d,i) {
			return "translate(0," + (me.topheight + i * (me.padding + me.h)) + ")";
		});
		if(null != this.click) enter.on("click",function(d,_) {
			me.click(d,me.stats);
		});
		enter.on("mouseover",function(d,i) {
			me.mouseOver(d,i,me.stats);
		});
		var funnel = enter.append("svg:path").attr("class").stringf(function(d,i) {
			return "funnel-outside fill-" + i;
		}).attr("d").stringf(function(d,i) {
			var t = diagonal2.diagonal(d,i).split("C");
			t.shift();
			var d2 = "C" + t.join("C");
			return diagonal1.diagonal(d,i) + conj2(d,i) + d2 + conj1(d,i);
		});
		if(this.displayGradient) enter.eachNode(this.externalGradient.$bind(this));
		var ga = this.g.selectAll("g.arrow").data(this.dps).enter().append("svg:g").attr("class").string("arrow").attr("transform").stringf(function(d,i) {
			return "translate(" + me.width / 2 + "," + (me.topheight + me.h * i + me.arrowSize / 2) + ")";
		});
		ga.each(function(d,i) {
			if(null == me.labelArrow) return;
			var text = me.labelArrow(d,me.stats);
			if(null == text) return;
			var node = thx.js.Dom.selectNode(thx.js.Group.current);
			node.append("svg:path").attr("transform").string("scale(1.1,0.85)translate(1,1)").attr("class").string("shadow").style("fill").string("#000").attr("opacity")["float"](.25).attr("d").string(thx.svg.Symbol.arrowDownWide(me.arrowSize * me.arrowSize));
			node.append("svg:path").attr("transform").string("scale(1.1,0.8)").attr("d").string(thx.svg.Symbol.arrowDownWide(me.arrowSize * me.arrowSize));
			var label = new rg.svg.widget.Label(node,true,false,true);
			label.setAnchor(rg.svg.widget.GridAnchor.Bottom);
			label.setText(text);
		});
		ga.each(function(d,i) {
			if(null == me.labelDataPoint) return;
			var text = me.labelDataPoint(d,me.stats);
			if(null == text) return;
			var balloon = new rg.svg.widget.Balloon(me.g);
			balloon.setBoundingBox({ x : me.width / 2 + me.arrowSize / 3 * 2, y : 0, width : me.width, height : me.height});
			balloon.setPreferredSide(3);
			balloon.setText(text.split("\n"));
			balloon.moveTo(me.width / 2,me.topheight + me.h * .6 + (me.h + me.padding) * i,false);
		});
		this.ready.dispatch();
	}
	,mouseOver: function(dp,i,stats) {
		if(null == this.labelDataPointOver) return;
		var text = this.labelDataPointOver(dp,stats);
		if(null == text) this.tooltip.hide(); else {
			this.tooltip.html(text.split("\n").join("<br>"));
			this.moveTooltip(this.width / 2,this.topheight + this.h * .6 + (this.h + this.padding) * i,true);
		}
	}
	,init: function() {
		rg.svg.chart.Chart.prototype.init.call(this);
		if(null != this.tooltip) this.tooltip.anchor("right");
		this.defs = this.g.classed().add("funnel-chart").append("svg:defs");
	}
	,internalGradient: function(d) {
		var color = rg.util.RGColors.parse(d.style("fill").get(),"#cccccc"), stops = this.defs.append("svg:radialGradient").attr("id").string("rg_funnel_int_gradient_0").attr("cx").string("50%").attr("fx").string("75%").attr("cy").string("20%").attr("r").string(Math.round(75) + "%");
		stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString());
		stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(rg.util.RGColors.applyLightness(thx.color.Hsl.toHsl(color),-this.gradientLightness).toRgbString());
		d.attr("style").string("fill:url(#rg_funnel_int_gradient_0)");
	}
	,externalGradient: function(n,i) {
		var g = thx.js.Dom.selectNode(n), d = g.select("path"), color = thx.color.Hsl.toHsl(rg.util.RGColors.parse(d.style("fill").get(),"#cccccc")), vn = this.next(i), vc = this.dpvalue(this.dps[i]), ratio = Math.round(vn / vc * 100) / 100, id = "rg_funnel_ext_gradient_" + color.hex("#") + "-" + ratio;
		var stops = this.defs.append("svg:radialGradient").attr("id").string(id).attr("cx").string("50%").attr("cy").string("0%").attr("r").string("110%");
		var top = color.hex("#");
		stops.append("svg:stop").attr("offset").string("10%").attr("stop-color").string(top);
		var ratio1 = 1 - (vc < vn?vc / vn:vn / vc), middlecolor = rg.util.RGColors.applyLightness(color,ratio1,this.gradientLightness * (vc >= vn?1:-1)).hex("#");
		stops.append("svg:stop").attr("offset").string("50%").attr("stop-color").string(middlecolor);
		stops.append("svg:stop").attr("offset").string("90%").attr("stop-color").string(top);
		d.attr("style").string("fill:url(#" + id + ")");
	}
	,__class__: rg.svg.chart.FunnelChart
});
rg.app.charts.App = $hxClasses["rg.app.charts.App"] = function() {
	this.layouts = new Hash();
}
rg.app.charts.App.__name__ = ["rg","app","charts","App"];
rg.app.charts.App.nextid = function() {
	return ":RGVIZ-" + ++rg.app.charts.App.lastid;
}
rg.app.charts.App.supportsSvg = function() {
	return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
}
rg.app.charts.App.prototype = {
	layouts: null
	,visualization: function(el,jsoptions) {
		var node = el.node(), id = node.id;
		if(null == id) node.id = id = rg.app.charts.App.nextid();
		var params = rg.info.Info.feed(new rg.info.InfoVisualizationOption(),jsoptions), loader = new rg.data.DataLoader(rg.info.Info.feed(new rg.info.InfoDataSource(),jsoptions).loader), variables = new rg.factory.FactoryVariable().createVariables(params.variables), general = rg.info.Info.feed(new rg.info.InfoGeneral(),params.options), infoviz = rg.info.Info.feed(new rg.info.InfoVisualizationType(),params.options);
		var visualization = null;
		params.options.marginheight = 29;
		var ivariables = Arrays.filter(variables,function(v) {
			return Std["is"](v,rg.data.VariableIndependent);
		});
		var dvariables = Arrays.filter(variables,function(v) {
			return Std["is"](v,rg.data.VariableDependent);
		});
		switch( (rg.info.Info.feed(new rg.info.InfoDomType(),params.options).kind)[1] ) {
		case 1:
			var layout = this.getLayout(id,params.options,el,infoviz.replace);
			visualization = new rg.factory.FactorySvgVisualization().create(infoviz.type,layout,params.options);
			break;
		case 0:
			if(infoviz.replace) el.selectAll("*").remove();
			visualization = new rg.factory.FactoryHtmlVisualization().create(infoviz.type,el,params.options);
			break;
		}
		visualization.setVariables(variables,ivariables,dvariables);
		visualization.init();
		if(null != general.ready) visualization.addReady(general.ready);
		loader.onLoad.addOnce(function(data) {
			new rg.data.IndependentVariableProcessor().process(data,ivariables);
			new rg.data.DependentVariableProcessor().process(data,dvariables);
		});
		loader.onLoad.addOnce(function(datapoints) {
			visualization.feedData(datapoints);
		});
		loader.load();
		var brandPadding = 0, logoHeight = 29;
		var download = rg.info.Info.feed(new rg.info.InfoDownload(),jsoptions.options.download);
		if(!rg.app.charts.App.supportsSvg()) {
			var downloader = new rg.interactive.Downloader(visualization.container,download.service,download.background);
			visualization.addReadyOnce(function() {
				downloader.download("png","#ffffff",function(url) {
					visualization.container.selectAll("*").remove();
					visualization.container.append("img").attr("src").string(url);
					return false;
				},null);
			});
		} else if(null != download.position || null != download.handler) {
			var downloader = new rg.interactive.Downloader(visualization.container,download.service,download.background);
			if(null != download.handler) visualization.addReadyOnce(function() {
				download.handler(downloader.download.$bind(downloader));
			}); else visualization.addReadyOnce(function() {
				var widget = new rg.html.widget.DownloaderMenu(downloader.download.$bind(downloader),download.position,download.formats,visualization.container);
				brandPadding = 24;
			});
		}
		if(!jsoptions.options.a) visualization.addReadyOnce(function() {
			var widget = new rg.html.widget.Logo(visualization.container,brandPadding);
			visualization.setVerticalOffset(logoHeight);
		});
		return visualization;
	}
	,getLayout: function(id,options,container,replace) {
		var old = this.layouts.get(id);
		if(null != old) {
			if(replace) old.destroy(); else return old;
		}
		var info = rg.info.Info.feed(new rg.info.InfoLayout(),options), layout = new rg.factory.FactoryLayout().create(info,options.marginheight,container);
		this.layouts.set(id,layout);
		return layout;
	}
	,__class__: rg.app.charts.App
}
rg.info.InfoLabelSankey = $hxClasses["rg.info.InfoLabelSankey"] = function() {
	rg.info.InfoLabel.call(this);
}
rg.info.InfoLabelSankey.__name__ = ["rg","info","InfoLabelSankey"];
rg.info.InfoLabelSankey.filters = function() {
	return [{ field : "edge", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "edgeover", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "node", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabel.filters());
}
rg.info.InfoLabelSankey.__super__ = rg.info.InfoLabel;
rg.info.InfoLabelSankey.prototype = $extend(rg.info.InfoLabel.prototype,{
	edge: null
	,edgeover: null
	,node: null
	,__class__: rg.info.InfoLabelSankey
});
thx.json.JsonEncoder = $hxClasses["thx.json.JsonEncoder"] = function() {
}
thx.json.JsonEncoder.__name__ = ["thx","json","JsonEncoder"];
thx.json.JsonEncoder.__interfaces__ = [thx.data.IDataHandler];
thx.json.JsonEncoder.prototype = {
	encodedString: null
	,buf: null
	,lvl: null
	,count: null
	,start: function() {
		this.lvl = 0;
		this.buf = new StringBuf();
		this.encodedString = null;
		this.count = [];
	}
	,end: function() {
		this.encodedString = this.buf.b.join("");
		this.buf = null;
	}
	,startObject: function() {
		this.buf.add("{");
		this.count.push(0);
	}
	,startField: function(name) {
		if(this.count[this.count.length - 1]++ > 0) this.buf.add(",");
		this.buf.add(this.quote(name) + ":");
	}
	,endField: function() {
	}
	,endObject: function() {
		this.buf.add("}");
		this.count.pop();
	}
	,startArray: function() {
		this.buf.add("[");
		this.count.push(0);
	}
	,startItem: function() {
		if(this.count[this.count.length - 1]++ > 0) this.buf.add(",");
	}
	,endItem: function() {
	}
	,endArray: function() {
		this.buf.add("]");
		this.count.pop();
	}
	,date: function(d) {
		this.buf.add(d.getTime());
	}
	,string: function(s) {
		this.buf.add(this.quote(s));
	}
	,'int': function(i) {
		this.buf.add(i);
	}
	,'float': function(f) {
		this.buf.add(f);
	}
	,'null': function() {
		this.buf.add("null");
	}
	,bool: function(b) {
		this.buf.add(b?"true":"false");
	}
	,comment: function(s) {
	}
	,quote: function(s) {
		return "\"" + new EReg(".","").customReplace(new EReg("(\n)","g").replace(new EReg("(\"|\\\\)","g").replace(s,"\\$1"),"\\n"),function(r) {
			var c = r.matched(0).charCodeAt(0);
			return c >= 32 && c <= 127?String.fromCharCode(c):"\\u" + StringTools.hex(c,4);
		}) + "\"";
	}
	,__class__: thx.json.JsonEncoder
}
thx.svg.Area = $hxClasses["thx.svg.Area"] = function(x,y0,y1,interpolator) {
	this._x = x;
	this._y0 = y0;
	this._y1 = y1;
	this._interpolator = interpolator;
}
thx.svg.Area.__name__ = ["thx","svg","Area"];
thx.svg.Area.pointArray = function(interpolator) {
	return new thx.svg.Area(function(d,_) {
		return d[0];
	},function(d,_) {
		return d[1];
	},function(d,_) {
		return d[2];
	},interpolator);
}
thx.svg.Area.pointObject = function(interpolator) {
	return new thx.svg.Area(function(d,_) {
		return d.x;
	},function(d,_) {
		return d.y0;
	},function(d,_) {
		return d.y1;
	},interpolator);
}
thx.svg.Area.pointArray2 = function(interpolator) {
	return new thx.svg.Area(function(d,_) {
		return d[0];
	},function(_,_1) {
		return 0.0;
	},function(d,_) {
		return d[1];
	},interpolator);
}
thx.svg.Area.pointObjectXY = function(interpolator) {
	return new thx.svg.Area(function(d,_) {
		return d.x;
	},function(_,_1) {
		return 0.0;
	},function(d,_) {
		return d.y;
	},interpolator);
}
thx.svg.Area.prototype = {
	_x: null
	,_y0: null
	,_y1: null
	,_interpolator: null
	,shape: function(data,i) {
		var second = thx.svg.LineInternals.linePoints(data,this._x,this._y1);
		second.reverse();
		return data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y0),this._interpolator) + "L" + thx.svg.LineInternals.interpolatePoints(second,this._interpolator) + "Z";
	}
	,getInterpolator: function() {
		return this._interpolator;
	}
	,interpolator: function(type) {
		this._interpolator = type;
		return this;
	}
	,getX: function() {
		return this._x;
	}
	,x: function(v) {
		this._x = v;
		return this;
	}
	,getY0: function() {
		return this._y0;
	}
	,y0: function(v) {
		this._y0 = v;
		return this;
	}
	,getY1: function() {
		return this._y1;
	}
	,y1: function(v) {
		this._y1 = v;
		return this;
	}
	,__class__: thx.svg.Area
}
rg.graph.SugiyamaMethod = $hxClasses["rg.graph.SugiyamaMethod"] = function(partitioner,layer,splitter,decrosser) {
	var id = 0;
	this.partitioner = null == partitioner?new rg.graph.GreedyCyclePartitioner():partitioner;
	this.layer = null == layer?new rg.graph.LongestPathLayer():layer;
	this.splitter = null == splitter?new rg.graph.EdgeSplitter():splitter;
	this.decrosser = null == decrosser?rg.graph.GreedySwitchDecrosser.best():decrosser;
}
rg.graph.SugiyamaMethod.__name__ = ["rg","graph","SugiyamaMethod"];
rg.graph.SugiyamaMethod.prototype = {
	partitioner: null
	,layer: null
	,splitter: null
	,decrosser: null
	,resolve: function(graph,nodef,edgef) {
		var onecycles = new rg.graph.OneCycleRemover().remove(graph), twocycles = new rg.graph.TwoCycleRemover().remove(graph);
		var partitions = this.partitioner.partition(graph), reversed = new Hash();
		(partitions.left.length > partitions.right.length?partitions.right:partitions.left).forEach(function(edge,_) {
			reversed.set(edge.tail.id + "-" + edge.head.id,[edge.invert()]);
		});
		var layers = this.layer.lay(graph);
		var layout = new rg.graph.GraphLayout(graph,layers);
		var splits = [];
		layout = this.splitter.split(layout,splits,nodef,edgef);
		splits.forEach(function(split,_) {
			var key = split[split.length - 1].head.id + "-" + split[0].tail.id;
			if(reversed.exists(key)) reversed.set(key,split);
		});
		layout = this.decrosser.decross(layout);
		var $it0 = reversed.iterator();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			path.forEach(function(edge,_) {
				var e = edge.invert();
			});
		}
		var _g = 0;
		while(_g < twocycles.length) {
			var item = twocycles[_g];
			++_g;
			layout.graph.edges.create(item.tail,item.head,item.weight,item.data);
		}
		var _g = 0;
		while(_g < onecycles.length) {
			var item = onecycles[_g];
			++_g;
			layout.graph.edges.create(item.node,item.node,item.weight,item.data);
		}
		return layout;
	}
	,__class__: rg.graph.SugiyamaMethod
}
var Reflect = $hxClasses["Reflect"] = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype = {
	__class__: Reflect
}
var Hashes = $hxClasses["Hashes"] = function() { }
Hashes.__name__ = ["Hashes"];
Hashes.toDynamic = function(hash) {
	var o = { };
	var $it0 = hash.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		o[key] = hash.get(key);
	}
	return o;
}
Hashes.importObject = function(hash,ob) {
	return DynamicsT.copyToHash(ob,hash);
}
Hashes.copyTo = function(from,to) {
	var $it0 = from.keys();
	while( $it0.hasNext() ) {
		var k = $it0.next();
		to.set(k,from.get(k));
	}
	return to;
}
Hashes.clone = function(src) {
	var h = new Hash();
	Hashes.copyTo(src,h);
	return h;
}
Hashes.arrayOfKeys = function(hash) {
	return Iterators.array(hash.keys());
}
Hashes.setOfKeys = function(hash) {
	var set = new thx.collection.Set();
	var $it0 = hash.keys();
	while( $it0.hasNext() ) {
		var k = $it0.next();
		set.add(k);
	}
	return set;
}
Hashes.empty = function(hash) {
	return Hashes.count(hash) == 0;
}
Hashes.count = function(hash) {
	var i = 0;
	var $it0 = hash.iterator();
	while( $it0.hasNext() ) {
		var _ = $it0.next();
		i++;
	}
	return i;
}
Hashes.mergef = function(hash,new_hash,f) {
	var $it0 = new_hash.keys();
	while( $it0.hasNext() ) {
		var k = $it0.next();
		var new_val = new_hash.get(k);
		if(hash.exists(k)) {
			var old_val = hash.get(k);
			hash.set(k,f(k,old_val,new_val));
		} else hash.set(k,new_val);
	}
}
Hashes.merge = function(hash,new_hash) {
	Hashes.mergef(hash,new_hash,function(key,old_v,new_v) {
		return new_v;
	});
}
Hashes.clear = function(hash) {
	var _hash = hash;
	_hash.h = {}
	if(_hash.h.__proto__ != null) {
		_hash.h.__proto__ = null;
		delete(_hash.h.__proto__);
	}
}
Hashes.prototype = {
	__class__: Hashes
}
rg.graph.EdgeSplitter = $hxClasses["rg.graph.EdgeSplitter"] = function() {
}
rg.graph.EdgeSplitter.__name__ = ["rg","graph","EdgeSplitter"];
rg.graph.EdgeSplitter.prototype = {
	split: function(layout,splitted,dataf,edgef) {
		var layers = layout.layers(), cell, ocell, cur;
		if(null == edgef) edgef = function(_,_1,_2) {
		};
		var $it0 = layout.graph.nodes.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			cell = layout.cell(node);
			var $it1 = node.graph.edges.positives(node);
			while( $it1.hasNext() ) {
				var edge = $it1.next();
				ocell = layout.cell(edge.head);
				if(cell.layer == ocell.layer) continue;
				if(cell.layer == ocell.layer - 1) continue;
				if(cell.layer == ocell.layer + 1) continue;
				var sign = [cell.layer < ocell.layer?1:-1], diff = Ints.abs(ocell.layer - cell.layer) - 1;
				splitted.push(edge.split(diff,dataf,(function(sign) {
					return function(ea,eb,i) {
						layers[cell.layer + (1 + i) * sign[0]].push(ea.head.id);
						edgef(ea,eb,i);
					};
				})(sign)));
			}
		}
		return new rg.graph.GraphLayout(layout.graph,layers);
	}
	,__class__: rg.graph.EdgeSplitter
}
rg.util.Urls = $hxClasses["rg.util.Urls"] = function() { }
rg.util.Urls.__name__ = ["rg","util","Urls"];
rg.util.Urls.addQueryParameters = function(url,query) {
	var suffix = url.indexOf("?") < 0?"?":"&", queries = [];
	var _g = 0, _g1 = Reflect.fields(query);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		var value = Std.string(Reflect.field(query,key));
		queries.push(key + "=" + StringTools.urlEncode(value));
	}
	if(queries.length == 0) return url; else return url + suffix + queries.join("&");
}
rg.util.Urls.parseQueryParameters = function(url) {
	var index = url.indexOf("?");
	if(index < 0) return { };
	var query = url.substr(index + 1), keyValuePairs = query.split("&"), parameters = { };
	var _g = 0;
	while(_g < keyValuePairs.length) {
		var pair = keyValuePairs[_g];
		++_g;
		var split = pair.split("="), key = split[0], value = null == split[1]?null:StringTools.urlDecode(split[1]);
		parameters[key] = value;
	}
	return parameters;
}
rg.util.Urls.prototype = {
	__class__: rg.util.Urls
}
rg.data.DependentVariableProcessor = $hxClasses["rg.data.DependentVariableProcessor"] = function() {
}
rg.data.DependentVariableProcessor.__name__ = ["rg","data","DependentVariableProcessor"];
rg.data.DependentVariableProcessor.prototype = {
	process: function(data,variables) {
		var _g = 0;
		while(_g < variables.length) {
			var variable = variables[_g];
			++_g;
			var values = rg.util.DataPoints.values(data,variable.type);
			if(values.length == 0) continue;
			if(null == variable.axis) variable.setAxis(new rg.factory.FactoryAxis().create(variable.type,Std["is"](values[0],Float),variable,null));
			variable.stats.addMany(values);
			var discrete;
			if(null != variable.scaleDistribution && null != (discrete = Types["as"](variable.axis,rg.axis.IAxisDiscrete))) {
				discrete.setScaleDistribution(variable.scaleDistribution);
				variable.scaleDistribution = null;
			}
		}
	}
	,__class__: rg.data.DependentVariableProcessor
}
rg.util.Decrypt = $hxClasses["rg.util.Decrypt"] = function() { }
rg.util.Decrypt.__name__ = ["rg","util","Decrypt"];
rg.util.Decrypt.decrypt = function(s) {
	var r = new chx.crypt.RSAEncrypt(rg.util.Decrypt.modulus,rg.util.Decrypt.publicExponent), d = chx.formats.Base64.decode(s);
	try {
		return r.verify(d).toString();
	} catch( e ) {
		return null;
	}
}
rg.util.Decrypt.prototype = {
	__class__: rg.util.Decrypt
}
thx.js.AccessTweenText = $hxClasses["thx.js.AccessTweenText"] = function(transition,tweens) {
	thx.js.AccessTween.call(this,transition,tweens);
}
thx.js.AccessTweenText.__name__ = ["thx","js","AccessTweenText"];
thx.js.AccessTweenText.__super__ = thx.js.AccessTween;
thx.js.AccessTweenText.prototype = $extend(thx.js.AccessTween.prototype,{
	stringNodef: function(f) {
		return this.stringTweenNodef(this.transitionStringTweenf(f));
	}
	,string: function(value) {
		return this.stringTweenNodef(this.transitionStringTween(value));
	}
	,stringTweenNodef: function(tween) {
		var handler = function(d,i) {
			var f = tween(d,i,d.textContent);
			return function(t) {
				d.textContent = f(t);
			};
		};
		this.tweens.set("text",handler);
		return this.transition;
	}
	,charsNodef: function(f) {
		return this.stringTweenNodef(this.transitionCharsTweenf(f));
	}
	,chars: function(value) {
		return this.stringTweenNodef(this.transitionCharsTween(value));
	}
	,__class__: thx.js.AccessTweenText
});
thx.js.AccessDataTweenText = $hxClasses["thx.js.AccessDataTweenText"] = function(transition,tweens) {
	thx.js.AccessTweenText.call(this,transition,tweens);
}
thx.js.AccessDataTweenText.__name__ = ["thx","js","AccessDataTweenText"];
thx.js.AccessDataTweenText.__super__ = thx.js.AccessTweenText;
thx.js.AccessDataTweenText.prototype = $extend(thx.js.AccessTweenText.prototype,{
	stringf: function(f) {
		return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
			return f(Reflect.field(n,"__data__"),i);
		}));
	}
	,charsf: function(f) {
		return this.stringTweenNodef(this.transitionCharsTweenf(function(n,i) {
			return f(Reflect.field(n,"__data__"),i);
		}));
	}
	,stringTweenf: function(tween) {
		var handler = function(n,i) {
			var f = tween(Reflect.field(n,"__data__"),i,d.textContent);
			return function(t) {
				d.textContent = f(t);
			};
		};
		this.tweens.set("text",handler);
		return this.transition;
	}
	,__class__: thx.js.AccessDataTweenText
});
if(!math._IEEE754) math._IEEE754 = {}
math._IEEE754.Status = $hxClasses["math._IEEE754.Status"] = { __ename__ : ["math","_IEEE754","Status"], __constructs__ : ["Normal","Overflow","Underflow","Denormalized","Quiet","Signalling"] }
math._IEEE754.Status.Normal = ["Normal",0];
math._IEEE754.Status.Normal.toString = $estr;
math._IEEE754.Status.Normal.__enum__ = math._IEEE754.Status;
math._IEEE754.Status.Overflow = ["Overflow",1];
math._IEEE754.Status.Overflow.toString = $estr;
math._IEEE754.Status.Overflow.__enum__ = math._IEEE754.Status;
math._IEEE754.Status.Underflow = ["Underflow",2];
math._IEEE754.Status.Underflow.toString = $estr;
math._IEEE754.Status.Underflow.__enum__ = math._IEEE754.Status;
math._IEEE754.Status.Denormalized = ["Denormalized",3];
math._IEEE754.Status.Denormalized.toString = $estr;
math._IEEE754.Status.Denormalized.__enum__ = math._IEEE754.Status;
math._IEEE754.Status.Quiet = ["Quiet",4];
math._IEEE754.Status.Quiet.toString = $estr;
math._IEEE754.Status.Quiet.__enum__ = math._IEEE754.Status;
math._IEEE754.Status.Signalling = ["Signalling",5];
math._IEEE754.Status.Signalling.toString = $estr;
math._IEEE754.Status.Signalling.__enum__ = math._IEEE754.Status;
math.IEEE754 = $hxClasses["math.IEEE754"] = function(size) {
	this.Size = size;
	this.BinaryPower = 0;
	this.StatCond = math._IEEE754.Status.Normal;
	this.StatCond64 = math._IEEE754.Status.Normal;
	if(this.Size == 32) {
		this.ExpBias = 127;
		this.MaxExp = 127;
		this.MinExp = -126;
		this.MinUnnormExp = -149;
	} else {
		this.Size = 64;
		this.ExpBias = 1023;
		this.MaxExp = 1023;
		this.MinExp = -1022;
		this.MinUnnormExp = -1074;
	}
}
math.IEEE754.__name__ = ["math","IEEE754"];
math.IEEE754.floatToBytes = function(v,bigEndian) {
	if(bigEndian == null) bigEndian = false;
	var ieee = new math.IEEE754(32);
	ieee.setEndian(bigEndian);
	ieee.rounding = true;
	return ieee.convert(v);
}
math.IEEE754.doubleToBytes = function(v,bigEndian) {
	if(bigEndian == null) bigEndian = false;
	var ieee = new math.IEEE754(64);
	ieee.setEndian(bigEndian);
	ieee.rounding = true;
	return ieee.convert(v);
}
math.IEEE754.bytesToFloat = function(b,bigEndian) {
	if(bigEndian == null) bigEndian = false;
	if(b.length != 4 && b.length != 8) throw "Bytes must be 4 or 8 bytes long";
	var size = b.length == 4?32:64;
	var ieee = new math.IEEE754(size);
	ieee.setEndian(bigEndian);
	ieee.rounding = true;
	if(!bigEndian) return ieee.bytesToBin(ieee.littleToBigEndian(b)); else return ieee.bytesToBin(b);
}
math.IEEE754.splitFloat = function(v) {
	var rv = { integral : 0.0, decimal : 0.0};
	var val = Std.string(v).toLowerCase();
	var p = val.indexOf("e");
	var exp = 0;
	if(p >= 0) exp = Std.parseInt(val.substr(p + 1)); else {
		p = val.indexOf(".");
		if(p >= 0) {
			rv.integral = Std.parseFloat(val.substr(0,p));
			rv.decimal = Std.parseFloat("0." + val.substr(p + 1));
		} else rv.integral = Std.parseFloat(val);
		return rv;
	}
	var fp = val.substr(0,p);
	p = fp.indexOf(".");
	fp = StringTools.replace(fp,".","");
	var dp = "0.";
	if(exp > 0) {
		p += exp;
		if(p == fp.length) rv.integral = Std.parseFloat(fp); else if(p > fp.length) rv.integral = v; else {
			rv.integral = Std.parseFloat(fp.substr(0,p));
			rv.decimal = Std.parseFloat("0." + fp.substr(p + 1));
		}
	} else {
		exp += p;
		if(exp == 0) rv.decimal = Std.parseFloat("0." + fp); else if(exp < 0) rv.decimal = Std.parseFloat("0." + fp + "e" + Std.string(exp)); else {
			rv.integral = Std.parseFloat(fp.substr(0,exp));
			rv.decimal = Std.parseFloat("0." + fp.substr(exp));
		}
	}
	return rv;
}
math.IEEE754.prototype = {
	bigEndian: null
	,input: null
	,rounding: null
	,Size: null
	,BinaryPower: null
	,BinVal: null
	,ExpBias: null
	,MaxExp: null
	,MinExp: null
	,MinUnnormExp: null
	,Result: null
	,StatCond: null
	,StatCond64: null
	,setEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,initBuffers: function() {
		this.BinVal = new Array();
		var _g = 0;
		while(_g < 2102) {
			var i = _g++;
			this.BinVal[i] = 0;
		}
		this.Result = new Array();
		var _g1 = 0, _g = this.Size;
		while(_g1 < _g) {
			var i = _g1++;
			this.Result[i] = 0;
		}
	}
	,littleToBigEndian: function(inbuf) {
		var c = this.Size == 32?4:8;
		var nb = Bytes.alloc(c);
		var idx = c - 1;
		var _g = 0;
		while(_g < c) {
			var i = _g++;
			nb.b[idx] = inbuf.b[i] & 255;
			idx--;
		}
		return nb;
	}
	,bufToEndian: function(inbuf) {
		var rv = inbuf;
		if(!this.bigEndian) rv = this.littleToBigEndian(rv);
		return rv;
	}
	,infinity: function(negative) {
		if(negative) {
			var bb = new BytesBuffer();
			var cnt = 2;
			if(this.Size == 32) {
				bb.b.push(255);
				bb.b.push(128);
			} else {
				bb.b.push(255);
				bb.b.push(240);
				cnt = 6;
			}
			var _g = 0;
			while(_g < cnt) {
				var i = _g++;
				bb.b.push(0);
			}
			return this.bufToEndian(bb.getBytes());
		} else {
			var bb = new BytesBuffer();
			var cnt = 2;
			if(this.Size == 32) {
				bb.b.push(127);
				bb.b.push(128);
			} else {
				bb.b.push(127);
				bb.b.push(240);
				cnt = 6;
			}
			var _g = 0;
			while(_g < cnt) {
				var i = _g++;
				bb.b.push(0);
			}
			return this.bufToEndian(bb.getBytes());
		}
	}
	,convert: function(v) {
		this.input = v;
		this.StatCond = math._IEEE754.Status.Normal;
		this.StatCond64 = math._IEEE754.Status.Normal;
		if(this.input == Math.POSITIVE_INFINITY) return this.infinity(false); else if(this.input == Math.NEGATIVE_INFINITY) return this.infinity(true); else if(Math.isNaN(this.input)) {
			var bb = new BytesBuffer();
			var cnt = 2;
			if(this.Size == 32) {
				bb.b.push(255);
				bb.b.push(192);
			} else {
				bb.b.push(255);
				bb.b.push(248);
				cnt = 6;
			}
			var _g = 0;
			while(_g < cnt) {
				var i = _g++;
				bb.b.push(0);
			}
			return this.bufToEndian(bb.getBytes());
		}
		this.BinaryPower = 0;
		var binexpnt = 0;
		this.initBuffers();
		this.Result[0] = 0;
		if(this.input < 0) this.Result[0] = 1;
		var value = Math.abs(this.input);
		var vp = math.IEEE754.splitFloat(value);
		var intpart = vp.integral;
		var decpart = vp.decimal;
		var index1 = 1024;
		while(intpart / 2.0 != 0.0 && index1 >= 0) {
			var fip = intpart;
			while(fip > 2147483647.0) fip /= 10.0;
			var mod = Std["int"](fip) % 2;
			this.BinVal[index1] = mod;
			if(mod == 0) intpart = intpart / 2.0; else intpart = intpart / 2.0 - 0.5;
			intpart = math.IEEE754.splitFloat(intpart * 10.0).integral / 10.0;
			index1--;
		}
		index1 = 1025;
		while(decpart > 0.0 && index1 < 2102) {
			decpart *= 2;
			if(decpart >= 1.0) {
				this.BinVal[index1] = 1;
				decpart--;
				index1++;
			} else {
				this.BinVal[index1] = 0;
				index1++;
			}
		}
		index1 = 0;
		while(index1 < 2102 && this.BinVal[index1] != 1) index1++;
		this.BinaryPower = 1024 - index1;
		if(this.BinaryPower < this.MinExp) this.BinaryPower = this.MinExp - 1;
		return this.Convert2Bin();
	}
	,Convert2Bin: function() {
		var power = this.BinaryPower;
		var lastbit = 0;
		var rounded = 0;
		var binexpnt = 0;
		var binexpnt2 = 0;
		var index1 = 0;
		var index2 = this.Size == 32?9:12;
		var index3 = 0;
		if(this.rounding && this.StatCond64 == math._IEEE754.Status.Normal) {
			while(index1 < 2102 && this.BinVal[index1] != 1) index1++;
			binexpnt = 1024 - index1;
			if(binexpnt >= this.MinExp) index1++; else {
				binexpnt = this.MinExp - 1;
				index1 = 1024 - binexpnt;
			}
			lastbit = this.Size - 1 - index2 + index1;
			if(this.BinVal[lastbit + 1] == 1) {
				rounded = 0;
				if(this.BinVal[lastbit] == 1) rounded = 1; else {
					index3 = lastbit + 2;
					while(rounded == 0 && index3 < 2102) {
						rounded = this.BinVal[index3];
						index3++;
					}
				}
				index3 = lastbit;
				while(rounded == 1 && index3 >= 0) {
					if(this.BinVal[index3] == 0) {
						this.BinVal[index3] = 1;
						rounded = 0;
					} else this.BinVal[index3] = 0;
					index3--;
				}
			}
			index1 = index1 - 2;
			if(index1 < 0) index1 = 0;
		}
		while(index1 < 2102 && this.BinVal[index1] != 1) index1++;
		binexpnt2 = 1024 - index1;
		if(this.StatCond64 == math._IEEE754.Status.Normal) {
			binexpnt = binexpnt2;
			if(binexpnt >= this.MinExp && binexpnt <= this.MaxExp) index1++; else if(binexpnt < this.MinExp) {
				if(binexpnt2 == -1078) this.StatCond = math._IEEE754.Status.Normal; else if(binexpnt2 < this.MinUnnormExp) this.StatCond = math._IEEE754.Status.Underflow; else this.StatCond = math._IEEE754.Status.Denormalized;
				binexpnt = this.MinExp - 1;
				index1 = 1024 - binexpnt;
			}
		} else {
			binexpnt = power;
			index1 = 1024 - binexpnt;
			if(binexpnt > this.MaxExp) binexpnt = this.MaxExp + 1; else if(binexpnt < this.MinExp) binexpnt = this.MinExp - 1;
		}
		while(index2 < this.Size && index1 < 2102) {
			this.Result[index2] = this.BinVal[index1];
			index2++;
			index1++;
		}
		if(binexpnt > this.MaxExp || this.StatCond64 != math._IEEE754.Status.Normal) {
			if(this.StatCond64 == math._IEEE754.Status.Normal) return this.infinity(this.Result[0] == 1); else this.StatCond = this.StatCond64;
		}
		if(this.Size == 32) index1 = 8; else index1 = 11;
		this.BinaryPower = binexpnt;
		binexpnt += this.ExpBias;
		var fbxp = binexpnt * 1.0;
		while(fbxp / 2.0 != 0.0) {
			var mod = Std["int"](fbxp) % 2;
			this.Result[index1] = mod;
			if(mod == 0) fbxp = fbxp / 2.0; else fbxp = fbxp / 2.0 - 0.5;
			index1--;
			fbxp = math.IEEE754.splitFloat(fbxp * 10.0).integral / 10.0;
		}
		binexpnt = Std["int"](fbxp);
		return this.toBytes();
	}
	,toBytes: function() {
		var c = this.Size == 32?4:8;
		var out = Bytes.alloc(c);
		var index = 0;
		var pos = 0;
		while(index < this.Size) {
			var temp = 0;
			var v = 0;
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				temp += Std["int"](Math.pow(2,3 - i)) * this.Result[index + i];
			}
			v = temp << 4;
			temp = 0;
			index += 4;
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				temp += Std["int"](Math.pow(2,3 - i)) * this.Result[index + i];
			}
			v = v | temp;
			out.b[pos++] = v & 255;
			index += 4;
		}
		if(!this.bigEndian) {
			var out2 = Bytes.alloc(c);
			var idx = c - 1;
			var _g = 0;
			while(_g < c) {
				var i = _g++;
				out2.b[idx] = out.b[i] & 255;
				idx--;
			}
			out = out2;
		}
		return out;
	}
	,bytesToBin: function(b) {
		this.initBuffers();
		var index1 = 0;
		var p = 0;
		var me = this;
		var store = function(temp,idx) {
			var _g = 0;
			while(_g < 4) {
				var i = _g++;
				temp *= 2.0;
				if(temp >= 1.0) {
					me.Result[idx + i] = 1;
					temp -= 1;
				} else me.Result[idx + i] = 0;
			}
		};
		while(index1 < this.Size) {
			var nibble = (b.b[p] & 240) >> 4;
			store(nibble / 16,index1);
			index1 += 4;
			var nibble1 = b.b[p] & 15;
			store(nibble1 / 16,index1);
			index1 += 4;
			p++;
		}
		var binexpnt = 0;
		var index2 = this.Size == 32?9:12;
		var _g = 1;
		while(_g < index2) {
			var i = _g++;
			binexpnt += Std["int"](this.Result[i] * Math.pow(2,index2 - i - 1));
		}
		binexpnt -= this.ExpBias;
		this.BinaryPower = binexpnt;
		index1 = 1024 - binexpnt;
		if(binexpnt >= this.MinExp && binexpnt <= this.MaxExp) {
			this.BinVal[index1] = 1;
			index1++;
		}
		var index3 = index1;
		var zeroFirst = false;
		if(this.Result[index2] == 0) zeroFirst = true;
		this.BinVal[index1] = this.Result[index2];
		index2++;
		index1++;
		var zeroRest = true;
		while(index2 < this.Size && index1 < 2102) {
			if(this.Result[index2] == 1) zeroRest = false;
			this.BinVal[index1] = this.Result[index2];
			index2++;
			index1++;
		}
		while(index3 < 2102 && this.BinVal[index3] != 1) index3++;
		var binexpnt2 = 1024 - index3;
		if(binexpnt < this.MinExp) {
			if(binexpnt2 == -1078) this.StatCond = math._IEEE754.Status.Normal; else if(binexpnt2 < this.MinUnnormExp) this.StatCond = math._IEEE754.Status.Underflow; else this.StatCond = math._IEEE754.Status.Denormalized;
		} else if(binexpnt > this.MaxExp) {
			if(zeroFirst && zeroRest) {
				this.StatCond = math._IEEE754.Status.Overflow;
				if(this.Result[0] == 1) return Math.NEGATIVE_INFINITY; else return Math.POSITIVE_INFINITY;
			} else if(!zeroFirst && zeroRest && this.Result[0] == 1) this.StatCond = math._IEEE754.Status.Quiet; else if(!zeroFirst) this.StatCond = math._IEEE754.Status.Quiet; else this.StatCond = math._IEEE754.Status.Signalling;
			return Math.NaN;
		}
		return this.Convert2Dec();
	}
	,Convert2Dec: function() {
		var LN10 = Math.log(10);
		var s = this.Size == 32?9:12;
		var dp = 0;
		var val = 0.0;
		if(this.BinaryPower < this.MinExp || this.BinaryPower > this.MaxExp) {
			dp = 0;
			val = 0;
		} else {
			dp = -1;
			val = 1;
		}
		var _g1 = s, _g = this.Size;
		while(_g1 < _g) {
			var i = _g1++;
			val += Std["int"](this.Result[i]) * Math.pow(2,dp + s - i);
		}
		var decValue = val * Math.pow(2,this.BinaryPower);
		if(this.Size == 32) {
			s = 8;
			if(val > 0) {
				var power = Math.floor(Math.log(decValue) / LN10);
				decValue += 0.5 * Math.pow(10,power - s + 1);
				val += 5E-8;
			}
		} else s = 17;
		if(this.Result[0] == 1) decValue = -decValue;
		decValue = Std.parseFloat(this.numStrClipOff(Std.string(decValue),s));
		return decValue;
	}
	,numStrClipOff: function(input,precision) {
		var result = "";
		var numerals = "0123456789";
		var tempstr = input.toUpperCase();
		var expstr = "";
		var signstr = "";
		var stop = 0;
		var expnum = 0;
		var locE = tempstr.indexOf("E");
		if(locE != -1) {
			stop = locE;
			expstr = input.substr(locE + 1,input.length);
			expnum = Std.parseInt(expstr);
		} else {
			stop = input.length;
			expnum = 0;
		}
		if(input.indexOf(".") == -1) {
			tempstr = input.substr(0,stop);
			tempstr += ".";
			if(input.length != stop) tempstr += input.substr(locE,input.length);
			input = tempstr;
			locE = locE + 1;
			stop = stop + 1;
		}
		var locDP = input.indexOf(".");
		var start = 0;
		if(input.charAt(start) == "-") {
			start++;
			signstr = "-";
		} else signstr = "";
		var MSD = start;
		var MSDfound = false;
		while(MSD < stop && !MSDfound) {
			var index = 1;
			while(index < numerals.length) {
				if(input.charAt(MSD) == numerals.charAt(index)) {
					MSDfound = true;
					break;
				}
				index++;
			}
			MSD++;
		}
		MSD--;
		var expdelta = 0;
		if(MSDfound) {
			expdelta = locDP - MSD;
			if(expdelta > 0) expdelta = expdelta - 1;
			expnum = expnum + expdelta;
			expstr = "e" + expnum;
		} else MSD = start;
		var digits = stop - MSD;
		tempstr = input.substr(MSD,stop);
		if(tempstr.indexOf(".") != -1) digits = digits - 1;
		var number = digits;
		if(precision < digits) number = precision;
		tempstr = input.substr(MSD,MSD + number + 1);
		if(MSD != start || tempstr.indexOf(".") == -1) {
			result = signstr;
			result += input.substr(MSD,MSD + 1);
			result += ".";
			result += input.substr(MSD + 1,MSD + number);
			while(digits < precision) {
				result += "0";
				digits += 1;
			}
			result += expstr;
		} else {
			result = input.substr(0,start + number + 1);
			while(digits < precision) {
				result += "0";
				digits += 1;
			}
			if(input.length != stop) result += input.substr(locE,input.length);
		}
		return result;
	}
	,__class__: math.IEEE754
	,__properties__: {set_bigEndian:"setEndian"}
}
thx.math.Random = $hxClasses["thx.math.Random"] = function(seed) {
	if(seed == null) seed = 1;
	this.seed = seed;
}
thx.math.Random.__name__ = ["thx","math","Random"];
thx.math.Random.prototype = {
	seed: null
	,'int': function() {
		return (this.seed = this.seed * 16807 % 2147483647) & 1073741823;
	}
	,'float': function() {
		return ((this.seed = this.seed * 16807 % 2147483647) & 1073741823) / 1073741823.0;
	}
	,__class__: thx.math.Random
}
thx.svg.LineInterpolators = $hxClasses["thx.svg.LineInterpolators"] = function() { }
thx.svg.LineInterpolators.__name__ = ["thx","svg","LineInterpolators"];
thx.svg.LineInterpolators.parse = function(s,sep) {
	if(sep == null) sep = "-";
	var interp = s.split(sep)[0].toLowerCase();
	return (function($this) {
		var $r;
		switch(interp) {
		case "basis":
			$r = thx.svg.LineInterpolator.Basis;
			break;
		case "basisopen":
			$r = thx.svg.LineInterpolator.BasisOpen;
			break;
		case "basisclosed":
			$r = thx.svg.LineInterpolator.BasisClosed;
			break;
		case "cardinal":
			$r = thx.svg.LineInterpolator.Cardinal(thx.svg.LineInterpolators.argument(s));
			break;
		case "cardinalopen":
			$r = thx.svg.LineInterpolator.CardinalOpen(thx.svg.LineInterpolators.argument(s));
			break;
		case "cardinalclosed":
			$r = thx.svg.LineInterpolator.CardinalClosed(thx.svg.LineInterpolators.argument(s));
			break;
		case "monotone":
			$r = thx.svg.LineInterpolator.Monotone;
			break;
		case "step":
			$r = thx.svg.LineInterpolator.Step;
			break;
		case "stepafter":
			$r = thx.svg.LineInterpolator.StepAfter;
			break;
		case "stepbefore":
			$r = thx.svg.LineInterpolator.StepBefore;
			break;
		default:
			$r = thx.svg.LineInterpolator.Linear;
		}
		return $r;
	}(this));
}
thx.svg.LineInterpolators.argument = function(s) {
	var v = s.split("-")[1];
	if(null == v) return null; else return Std.parseFloat(v);
}
thx.svg.LineInterpolators.prototype = {
	__class__: thx.svg.LineInterpolators
}
rg.graph.GraphNodes = $hxClasses["rg.graph.GraphNodes"] = function(graph,nodeidf) {
	rg.graph.GraphCollection.call(this,graph,nodeidf);
}
rg.graph.GraphNodes.__name__ = ["rg","graph","GraphNodes"];
rg.graph.GraphNodes.newInstance = function(graph,nodeidf) {
	return new rg.graph.GraphNodes(graph,nodeidf);
}
rg.graph.GraphNodes.__super__ = rg.graph.GraphCollection;
rg.graph.GraphNodes.prototype = $extend(rg.graph.GraphCollection.prototype,{
	copyTo: function(graph) {
		var nodes = new rg.graph.GraphNodes(graph);
		var $it0 = this.collection.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			nodes._create(node.id,node.data);
		}
		nodes.nextid = this.nextid;
		return nodes;
	}
	,create: function(data) {
		return this._create(++this.nextid,data);
	}
	,_create: function(id,data) {
		var n = rg.graph.GNode.create(this.graph,id,data);
		this.collectionCreate(n);
		return n;
	}
	,remove: function(node) {
		if(node.graph != this.graph) throw new thx.error.Error("the node is not part of this graph",null,null,{ fileName : "GraphNodes.hx", lineNumber : 39, className : "rg.graph.GraphNodes", methodName : "remove"});
		this._remove(node);
	}
	,_remove: function(node) {
		this.graph.edges.unlink(node);
		this.collectionRemove(node);
		node.destroy();
	}
	,clear: function() {
		var items = Iterators.array(this.collection.iterator()).copy();
		var _g = 0;
		while(_g < items.length) {
			var item = items[_g];
			++_g;
			this.remove(item);
		}
	}
	,toString: function() {
		return "GraphNodes (" + IntHashes.count(this.collection) + "): " + rg.graph.GraphCollection.prototype.toString.call(this);
	}
	,__class__: rg.graph.GraphNodes
});
rg.layout.Anchor = $hxClasses["rg.layout.Anchor"] = { __ename__ : ["rg","layout","Anchor"], __constructs__ : ["Top","Bottom","Left","Right"] }
rg.layout.Anchor.Top = ["Top",0];
rg.layout.Anchor.Top.toString = $estr;
rg.layout.Anchor.Top.__enum__ = rg.layout.Anchor;
rg.layout.Anchor.Bottom = ["Bottom",1];
rg.layout.Anchor.Bottom.toString = $estr;
rg.layout.Anchor.Bottom.__enum__ = rg.layout.Anchor;
rg.layout.Anchor.Left = ["Left",2];
rg.layout.Anchor.Left.toString = $estr;
rg.layout.Anchor.Left.__enum__ = rg.layout.Anchor;
rg.layout.Anchor.Right = ["Right",3];
rg.layout.Anchor.Right.toString = $estr;
rg.layout.Anchor.Right.__enum__ = rg.layout.Anchor;
thx.collection.HashList = $hxClasses["thx.collection.HashList"] = function() {
	this.length = 0;
	this.__keys = [];
	this.__hash = new Hash();
}
thx.collection.HashList.__name__ = ["thx","collection","HashList"];
thx.collection.HashList.prototype = {
	length: null
	,set: function(key,value) {
		if(!this.__hash.exists(key)) {
			this.__keys.push(key);
			this.length++;
		}
		this.__hash.set(key,value);
	}
	,setAt: function(index,key,value) {
		this.remove(key);
		this.__keys.insert(index,key);
		this.__hash.set(key,value);
		this.length++;
	}
	,get: function(key) {
		return this.__hash.get(key);
	}
	,getAt: function(index) {
		return this.__hash.get(this.__keys[index]);
	}
	,indexOf: function(key) {
		if(!this.__hash.exists(key)) return -1;
		var _g1 = 0, _g = this.__keys.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__keys[i] == key) return i;
		}
		return (function($this) {
			var $r;
			throw "this should never happen";
			return $r;
		}(this));
	}
	,exists: function(key) {
		return this.__hash.exists(key);
	}
	,remove: function(key) {
		var item = this.__hash.get(key);
		if(item == null) return null;
		this.__hash.remove(key);
		this.__keys.remove(key);
		this.length--;
		return item;
	}
	,removeAt: function(index) {
		var key = this.__keys[index];
		if(key == null) return null;
		var item = this.__hash.get(key);
		this.__hash.remove(key);
		this.__keys.remove(key);
		this.length--;
		return item;
	}
	,keyAt: function(index) {
		return this.__keys[index];
	}
	,keys: function() {
		return this.__keys.iterator();
	}
	,iterator: function() {
		return this.array().iterator();
	}
	,clear: function() {
		this.__hash = new Hash();
		this.__keys = [];
		this.length = 0;
	}
	,array: function() {
		var values = [];
		var _g = 0, _g1 = this.__keys;
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			values.push(this.__hash.get(k));
		}
		return values;
	}
	,toString: function() {
		var s = new StringBuf();
		s.b[s.b.length] = "{";
		var it = this.keys();
		while( it.hasNext() ) {
			var i = it.next();
			s.b[s.b.length] = i == null?"null":i;
			s.b[s.b.length] = " => ";
			s.add(Std.string(this.get(i)));
			if(it.hasNext()) s.b[s.b.length] = ", ";
		}
		s.b[s.b.length] = "}";
		return s.b.join("");
	}
	,__keys: null
	,__hash: null
	,__class__: thx.collection.HashList
}
rg.info.InfoVisualizationOption = $hxClasses["rg.info.InfoVisualizationOption"] = function() {
}
rg.info.InfoVisualizationOption.__name__ = ["rg","info","InfoVisualizationOption"];
rg.info.InfoVisualizationOption.filters = function() {
	return [{ field : "axes", validator : function(v) {
		return Std["is"](v,Array) || Reflect.isObject(v);
	}, filter : function(v) {
		return [{ field : "variables", value : Std["is"](v,Array)?v.map(function(v1,i) {
			return rg.info.Info.feed(new rg.info.InfoVariable(),v1);
		}):[rg.info.Info.feed(new rg.info.InfoVariable(),v)]}];
	}},{ field : "options", validator : function(v) {
		return Reflect.isObject(v);
	}, filter : null}];
}
rg.info.InfoVisualizationOption.prototype = {
	variables: null
	,options: null
	,__class__: rg.info.InfoVisualizationOption
}
rg.axis.TickmarkTime = $hxClasses["rg.axis.TickmarkTime"] = function(value,values,major,periodicity,scaleDistribution) {
	rg.axis.TickmarkOrdinal.call(this,values.indexOf(value),values,major,scaleDistribution);
	this.periodicity = periodicity;
}
rg.axis.TickmarkTime.__name__ = ["rg","axis","TickmarkTime"];
rg.axis.TickmarkTime.__super__ = rg.axis.TickmarkOrdinal;
rg.axis.TickmarkTime.prototype = $extend(rg.axis.TickmarkOrdinal.prototype,{
	periodicity: null
	,getLabel: function() {
		return rg.util.Periodicity.smartFormat(this.periodicity,this.values[this.pos]);
	}
	,__class__: rg.axis.TickmarkTime
});
thx.svg.LineInternals = $hxClasses["thx.svg.LineInternals"] = function() { }
thx.svg.LineInternals.__name__ = ["thx","svg","LineInternals"];
thx.svg.LineInternals.linePoints = function(data,x,y) {
	var points = [], value;
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		points.push([x(value = data[i],i),y(value,i)]);
	}
	return points;
}
thx.svg.LineInternals.interpolatePoints = function(points,type) {
	if(null == type) type = thx.svg.LineInterpolator.Linear;
	var path = [], i = 0, n = points.length, p = points[0];
	var $e = (type);
	switch( $e[1] ) {
	case 0:
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("L" + p[0] + "," + p[1]);
		}
		break;
	case 1:
		var p1;
		path.push(p[0] + "," + p[1]);
		while(++i < n - 1) {
			p = points[i];
			p1 = points[i + 1];
			path.push("H" + (p[0] + p1[0]) / 2 + "V" + p[1]);
		}
		p = points[i];
		path.push("H" + p[0] + "V" + p[1]);
		break;
	case 2:
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("V" + p[1] + "H" + p[0]);
		}
		break;
	case 3:
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("H" + p[0] + "V" + p[1]);
		}
		break;
	case 4:
		if(points.length < 3) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
		i = 1;
		var x0 = p[0], y0 = p[1], px = [x0,x0,x0,(p = points[1])[0]], py = [y0,y0,y0,p[1]];
		path.push(x0 + "," + y0);
		thx.svg.LineInternals._lineBasisBezier(path,px,py);
		while(++i < n) {
			p = points[i];
			px.shift();
			px.push(p[0]);
			py.shift();
			py.push(p[1]);
			thx.svg.LineInternals._lineBasisBezier(path,px,py);
		}
		i = -1;
		while(++i < 2) {
			px.shift();
			px.push(p[0]);
			py.shift();
			py.push(p[1]);
			thx.svg.LineInternals._lineBasisBezier(path,px,py);
		}
		break;
	case 5:
		if(points.length < 4) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
		i = -1;
		var pi, px = [0.0], py = [0.0];
		while(++i < 3) {
			pi = points[i];
			px.push(pi[0]);
			py.push(pi[1]);
		}
		path.push(thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,px) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,py));
		--i;
		while(++i < n) {
			pi = points[i];
			px.shift();
			px.push(pi[0]);
			py.shift();
			py.push(pi[1]);
			thx.svg.LineInternals._lineBasisBezier(path,px,py);
		}
		break;
	case 6:
		i = -1;
		var m = n + 4, px = [], py = [];
		while(++i < 4) {
			p = points[i % n];
			px.push(p[0]);
			py.push(p[1]);
		}
		path.push(thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,px) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,py));
		--i;
		while(++i < m) {
			p = points[i % n];
			px.shift();
			px.push(p[0]);
			py.shift();
			py.push(p[1]);
			thx.svg.LineInternals._lineBasisBezier(path,px,py);
		}
		break;
	case 7:
		var tension = $e[2];
		if(null == tension) tension = .7;
		if(points.length < 3) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear); else return points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents(points,tension));
		break;
	case 8:
		var tension = $e[2];
		return points.length < 4?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[1][0] + "," + points[1][1] + thx.svg.LineInternals._lineCardinalTangents(points,tension);
	case 9:
		var tension = $e[2];
		if(null == tension) tension = .7;
		return points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents([points[points.length - 2]].concat(points).concat([points[1]]),tension));
	case 10:
		return points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineMonotoneTangents(points));
	}
	return path.join("");
}
thx.svg.LineInternals._lineDot4 = function(a,b) {
	return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
thx.svg.LineInternals._lineBasisBezier = function(path,x,y) {
	path.push("C" + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier1,x) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier1,y) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier2,x) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier2,y) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,x) + "," + thx.svg.LineInternals._lineDot4(thx.svg.LineInternals._lineBasisBezier3,y));
}
thx.svg.LineInternals._lineSlope = function(p0,p1) {
	return (p1[1] - p0[1]) / (p1[0] - p0[0]);
}
thx.svg.LineInternals._lineFiniteDifferences = function(points) {
	var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = thx.svg.LineInternals._lineSlope(p0,p1);
	while(++i < j) m[i] = d + (d = thx.svg.LineInternals._lineSlope(p0 = p1,p1 = points[i + 1]));
	m[i] = d;
	return m;
}
thx.svg.LineInternals._lineMonotoneTangents = function(points) {
	var tangents = [], d, a, b, s, m = thx.svg.LineInternals._lineFiniteDifferences(points), i = -1, j = points.length - 1;
	while(++i < j) {
		d = thx.svg.LineInternals._lineSlope(points[i],points[i + 1]);
		if(Math.abs(d) < 1e-6) m[i] = m[i + 1] = 0; else {
			a = m[i] / d;
			b = m[i + 1] / d;
			s = a * a + b * b;
			if(s > 9) {
				s = d * 3 / Math.sqrt(s);
				m[i] = s * a;
				m[i + 1] = s * b;
			}
		}
	}
	i = -1;
	while(++i <= j) {
		s = (points[Ints.min(j,i + 1)][0] - points[Ints.max(0,i - 1)][0]) / (6 * (1 + m[i] * m[i]));
		tangents.push([Math.isFinite(s)?s:0,Math.isFinite(s = m[i] * s)?s:0]);
	}
	return tangents;
}
thx.svg.LineInternals._lineHermite = function(points,tangents) {
	if(tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear);
	var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
	if(quad) {
		path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
		p0 = points[1];
		pi = 2;
	}
	if(tangents.length > 1) {
		t = tangents[1];
		p = points[pi];
		pi++;
		path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
		var _g1 = 2, _g = tangents.length;
		while(_g1 < _g) {
			var i = _g1++;
			p = points[pi];
			t = tangents[i];
			path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
			pi++;
		}
	}
	if(quad) {
		var lp = points[pi];
		path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
	}
	return path;
}
thx.svg.LineInternals._lineCardinalTangents = function(points,tension) {
	var tangents = [], a = (1 - tension) / 2, p0 = points[0], p1 = points[1], p2 = points[2], i = 2, n = points.length;
	while(++i < n) {
		tangents.push([a * (p2[0] - p0[0]),a * (p2[1] - p0[1])]);
		p0 = p1;
		p1 = p2;
		p2 = points[i];
	}
	tangents.push([a * (p2[0] - p0[0]),a * (p2[1] - p0[1])]);
	return tangents;
}
thx.svg.LineInternals.prototype = {
	__class__: thx.svg.LineInternals
}
thx.js.AccessTweenAttribute = $hxClasses["thx.js.AccessTweenAttribute"] = function(name,transition,tweens) {
	thx.js.AccessTween.call(this,transition,tweens);
	this.name = name;
	this.qname = thx.xml.Namespace.qualify(name);
}
thx.js.AccessTweenAttribute.__name__ = ["thx","js","AccessTweenAttribute"];
thx.js.AccessTweenAttribute.__super__ = thx.js.AccessTween;
thx.js.AccessTweenAttribute.prototype = $extend(thx.js.AccessTween.prototype,{
	name: null
	,qname: null
	,stringNodef: function(f) {
		return this.stringTweenNodef(this.transitionStringTweenf(f));
	}
	,string: function(value) {
		return this.stringTweenNodef(this.transitionStringTween(value));
	}
	,stringTweenNodef: function(tween) {
		var name = this.name;
		var attrTween = function(d,i) {
			var f = tween(d,i,d.getAttribute(name));
			return function(t) {
				d.setAttribute(name,f(t));
			};
		};
		var attrTweenNS = function(d,i) {
			var f = tween(d,i,d.getAttributeNS(name.space,name.local));
			return function(t) {
				d.setAttributeNS(name.space,name.local,f(t));
			};
		};
		this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
		return this.transition;
	}
	,floatNodef: function(f) {
		return this.floatTweenNodef(this.transitionFloatTweenf(f));
	}
	,'float': function(value) {
		return this.floatTweenNodef(this.transitionFloatTween(value));
	}
	,floatTweenNodef: function(tween) {
		var name = this.name;
		var attrTween = function(d,i) {
			var f = tween(d,i,Std.parseFloat(d.getAttribute(name)));
			return function(t) {
				d.setAttribute(name,"" + f(t));
			};
		};
		var attrTweenNS = function(d,i) {
			var f = tween(d,i,Std.parseFloat(d.getAttributeNS(name.space,name.local)));
			return function(t) {
				d.setAttributeNS(name.space,name.local,"" + f(t));
			};
		};
		this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
		return this.transition;
	}
	,__class__: thx.js.AccessTweenAttribute
});
thx.js.AccessDataTweenAttribute = $hxClasses["thx.js.AccessDataTweenAttribute"] = function(name,transition,tweens) {
	thx.js.AccessTweenAttribute.call(this,name,transition,tweens);
}
thx.js.AccessDataTweenAttribute.__name__ = ["thx","js","AccessDataTweenAttribute"];
thx.js.AccessDataTweenAttribute.__super__ = thx.js.AccessTweenAttribute;
thx.js.AccessDataTweenAttribute.prototype = $extend(thx.js.AccessTweenAttribute.prototype,{
	stringf: function(f) {
		return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
			return f(Reflect.field(n,"__data__"),i);
		}));
	}
	,floatf: function(f) {
		return this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
			return f(Reflect.field(n,"__data__"),i);
		}));
	}
	,stringTweenf: function(tween) {
		var name = this.name;
		var attrTween = function(n,i) {
			var f = tween(Reflect.field(n,"__data__"),i,n.getAttribute(name));
			return function(t) {
				n.setAttribute(name,f(t));
			};
		};
		var attrTweenNS = function(n,i) {
			var f = tween(Reflect.field(n,"__data__"),i,n.getAttributeNS(name.space,name.local));
			return function(t) {
				n.setAttributeNS(name.space,name.local,f(t));
			};
		};
		this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
		return this.transition;
	}
	,floatTweenf: function(tween) {
		var name = this.name;
		var attrTween = function(n,i) {
			var f = tween(Reflect.field(n,"__data__"),i,Std.parseFloat(n.getAttribute(name)));
			return function(t) {
				n.setAttribute(name,"" + f(t));
			};
		};
		var attrTweenNS = function(n,i) {
			var f = tween(Reflect.field(n,"__data__"),i,Std.parseFloat(n.getAttributeNS(name.space,name.local)));
			return function(t) {
				n.setAttributeNS(name.space,name.local,"" + f(t));
			};
		};
		this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
		return this.transition;
	}
	,__class__: thx.js.AccessDataTweenAttribute
});
rg.info.InfoLabelLeaderboard = $hxClasses["rg.info.InfoLabelLeaderboard"] = function() {
	rg.info.InfoLabel.call(this);
}
rg.info.InfoLabelLeaderboard.__name__ = ["rg","info","InfoLabelLeaderboard"];
rg.info.InfoLabelLeaderboard.filters = function() {
	return [{ field : "rank", validator : function(v) {
		return v == null || Reflect.isFunction(v);
	}, filter : null},{ field : "value", validator : function(v) {
		return v == null || Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabel.filters());
}
rg.info.InfoLabelLeaderboard.__super__ = rg.info.InfoLabel;
rg.info.InfoLabelLeaderboard.prototype = $extend(rg.info.InfoLabel.prototype,{
	rank: null
	,value: null
	,__class__: rg.info.InfoLabelLeaderboard
});
var StringBuf = $hxClasses["StringBuf"] = function() {
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	add: function(x) {
		this.b[this.b.length] = x == null?"null":x;
	}
	,addSub: function(s,pos,len) {
		this.b[this.b.length] = s.substr(pos,len);
	}
	,addChar: function(c) {
		this.b[this.b.length] = String.fromCharCode(c);
	}
	,toString: function() {
		return this.b.join("");
	}
	,b: null
	,__class__: StringBuf
}
thx.js.AccessHtml = $hxClasses["thx.js.AccessHtml"] = function(selection) {
	thx.js.Access.call(this,selection);
}
thx.js.AccessHtml.__name__ = ["thx","js","AccessHtml"];
thx.js.AccessHtml.__super__ = thx.js.Access;
thx.js.AccessHtml.prototype = $extend(thx.js.Access.prototype,{
	get: function() {
		return this.selection.firstNode(function(node) {
			return node.innerHTML;
		});
	}
	,string: function(v) {
		this.selection.eachNode(function(node,i) {
			node.innerHTML = v;
		});
		return this.selection;
	}
	,clear: function() {
		this.selection.eachNode(function(node,i) {
			node.innerHTML = "";
		});
		return this.selection;
	}
	,'float': function(v) {
		this.selection.eachNode(function(node,i) {
			node.innerHTML = "" + v;
		});
		return this.selection;
	}
	,__class__: thx.js.AccessHtml
});
thx.js.AccessDataHtml = $hxClasses["thx.js.AccessDataHtml"] = function(selection) {
	thx.js.AccessHtml.call(this,selection);
}
thx.js.AccessDataHtml.__name__ = ["thx","js","AccessDataHtml"];
thx.js.AccessDataHtml.__super__ = thx.js.AccessHtml;
thx.js.AccessDataHtml.prototype = $extend(thx.js.AccessHtml.prototype,{
	stringf: function(v) {
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__data__"),i);
			if(null == s) s = "";
			node.innerHTML = s;
		});
		return this.selection;
	}
	,floatf: function(v) {
		this.selection.eachNode(function(node,i) {
			var f = v(Reflect.field(node,"__data__"),i);
			if(null == f) node.innerHTML = ""; else node.innerHTML = "" + f;
		});
		return this.selection;
	}
	,data: function() {
		return this.stringf(function(d,_) {
			return "" + d;
		});
	}
	,__class__: thx.js.AccessDataHtml
});
var BytesUtil = $hxClasses["BytesUtil"] = function() { }
BytesUtil.__name__ = ["BytesUtil"];
BytesUtil.EMPTY = null;
BytesUtil.byteArrayToBytes = function(a,padToBytes) {
	var sb = new BytesBuffer();
	var _g = 0;
	while(_g < a.length) {
		var i = a[_g];
		++_g;
		if(i > 255 || i < 0) throw "Value out of range";
		sb.b.push(i);
	}
	if(padToBytes != null && padToBytes > 0) return BytesUtil.nullPad(sb.getBytes(),padToBytes);
	return sb.getBytes();
}
BytesUtil.byteToHex = function(b) {
	b = b & 255;
	return StringTools.hex(b,2).toLowerCase();
}
BytesUtil.byte32ToHex = function(b) {
	var bs = b & 255 & -1;
	return StringTools.hex(bs,2).toLowerCase();
}
BytesUtil.bytesToInt32LE = function(s) {
	return I32.unpackLE(BytesUtil.nullPad(s,4));
}
BytesUtil.cleanHexFormat = function(hex) {
	var e = StringTools.replace(hex,":","");
	e = e.split("|").join("");
	var ereg = new EReg("([\\s]*)","g");
	e = ereg.replace(e,"");
	if(StringTools.startsWith(e,"0x")) e = e.substr(2);
	if((e.length & 1) == 1) e = "0" + e;
	return e.toLowerCase();
}
BytesUtil.encodeToBase = function(buf,base) {
	var bc = new haxe.BaseCode(Bytes.ofString(base));
	return bc.encodeBytes(buf);
}
BytesUtil.eq = function(a,b) {
	if(a.length != b.length) return false;
	var l = a.length;
	var _g = 0;
	while(_g < l) {
		var i = _g++;
		if(a.b[i] != b.b[i]) return false;
	}
	return true;
}
BytesUtil.hexDump = function(b,separator) {
	return BytesUtil.toHex(b,separator);
}
BytesUtil.int32ToBytesLE = function(l) {
	return I32.packLE(l);
}
BytesUtil.int32ArrayToBytes = function(a,padToBytes) {
	var sb = new BytesBuffer();
	var _g = 0;
	while(_g < a.length) {
		var v = a[_g];
		++_g;
		var i = v & -1;
		if(i > 255 || i < 0) throw "Value out of range";
		sb.b.push(i);
	}
	if(padToBytes != null && padToBytes > 0) return BytesUtil.nullPad(sb.getBytes(),padToBytes);
	return sb.getBytes();
}
BytesUtil.intArrayToBytes = function(a,padToBytes) {
	var sb = new BytesBuffer();
	var _g = 0;
	while(_g < a.length) {
		var i = a[_g];
		++_g;
		if(i > 255 || i < 0) throw "Value out of range";
		sb.b.push(i);
	}
	if(padToBytes != null && padToBytes > 0) return BytesUtil.nullPad(sb.getBytes(),padToBytes);
	return sb.getBytes();
}
BytesUtil.nullBytes = function(len) {
	var sb = Bytes.alloc(len);
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		sb.b[i] = 0;
	}
	return sb;
}
BytesUtil.nullPad = function(s,chunkLen) {
	var r = chunkLen - s.length % chunkLen;
	if(r == chunkLen) return s;
	var sb = new BytesBuffer();
	sb.add(s);
	var _g = 0;
	while(_g < r) {
		var x = _g++;
		sb.b.push(0);
	}
	return sb.getBytes();
}
BytesUtil.ofIntArray = function(a) {
	var b = new BytesBuffer();
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		b.b.push(BytesUtil.cleanValue(a[i]));
	}
	return b.getBytes();
}
BytesUtil.ofHex = function(hs) {
	var s = BytesUtil.cleanHexFormat(hs);
	var b = new BytesBuffer();
	var l = Std["int"](s.length / 2);
	var _g = 0;
	while(_g < l) {
		var x = _g++;
		var ch = s.substr(x * 2,2);
		var v = Std.parseInt("0x" + ch);
		if(v > 255) throw "error";
		b.b.push(v);
	}
	return b.getBytes();
}
BytesUtil.toHex = function(b,separator) {
	if(separator == null) separator = " ";
	var sb = new StringBuf();
	var l = b.length;
	var first = true;
	var _g = 0;
	while(_g < l) {
		var i = _g++;
		if(first) first = false; else sb.b[sb.b.length] = separator == null?"null":separator;
		sb.add(StringTools.hex(b.b[i],2).toLowerCase());
	}
	return StringTools.rtrim(sb.b.join(""));
}
BytesUtil.unNullPad = function(s) {
	var p = s.length - 1;
	while(p-- > 0) if(s.b[p] != 0) break;
	if(p == 0 && s.b[0] == 0) {
		var bb = new BytesBuffer();
		return bb.getBytes();
	}
	p++;
	var b = Bytes.alloc(p);
	b.blit(0,s,0,p);
	return b;
}
BytesUtil.cleanValue = function(v) {
	var neg = false;
	if(v < 0) {
		if(v < -128) throw "not a byte";
		neg = true;
		v = v & 255 | 128;
	}
	if(v > 255) throw "not a byte";
	return v;
}
BytesUtil.prototype = {
	__class__: BytesUtil
}
var Bytes = $hxClasses["Bytes"] = function(length,b) {
	this.length = length;
	this.b = b;
}
Bytes.__name__ = ["Bytes"];
Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new Bytes(length,a);
}
Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.cca(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new Bytes(a.length,a);
}
Bytes.ofStringData = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		a.push(s.charCodeAt(i));
	}
	return new Bytes(a.length,a);
}
Bytes.ofData = function(b) {
	return new Bytes(b.length,b);
}
Bytes.ofHex = function(hs) {
	var s = StringTools.stripWhite(hs);
	s = StringTools.replaceRecurse(s,":","").toLowerCase();
	if(StringTools.startsWith(s,"0x")) s = s.substr(2);
	if((s.length & 1) == 1) s = "0" + s;
	var b = new BytesBuffer();
	var l = Std["int"](s.length / 2);
	var _g = 0;
	while(_g < l) {
		var x = _g++;
		var ch = s.substr(x * 2,2);
		b.b.push(Std.parseInt("0x" + ch));
	}
	return b.getBytes();
}
Bytes.prototype = {
	length: null
	,b: null
	,get: function(pos) {
		return this.b[pos];
	}
	,set: function(pos,v) {
		this.b[pos] = v & 255;
	}
	,blit: function(pos,src,srcpos,len) {
		if(len == null) len = src.length - srcpos;
		if(srcpos + len > src.length) len = src.length - srcpos;
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) throw new chx.lang.OutsideBoundsException();
		var b1 = this.b;
		var b2 = src.b;
		if(b1 == b2 && pos > srcpos) {
			var i = len;
			while(i > 0) {
				i--;
				b1[i + pos] = b2[i + srcpos];
			}
			return;
		}
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			b1[i + pos] = b2[i + srcpos];
		}
	}
	,sub: function(pos,len) {
		if(len == null) len = this.length - pos;
		if(pos + len > this.length) len = this.length - pos;
		if(pos < 0 || len < 0) throw new chx.lang.OutsideBoundsException();
		return new Bytes(len,this.b.slice(pos,pos + len));
	}
	,compare: function(other) {
		var b1 = this.b;
		var b2 = other.b;
		var len = this.length < other.length?this.length:other.length;
		var _g = 0;
		while(_g < len) {
			var i = _g++;
			if(b1[i] != b2[i]) return b1[i] - b2[i];
		}
		return this.length - other.length;
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw new chx.lang.OutsideBoundsException();
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,toString: function() {
		return this.readString(0,this.length);
	}
	,getData: function() {
		return this.b;
	}
	,toHex: function(sep,pos,len) {
		if(pos == null) pos = 0;
		if(sep == null) sep = "";
		if(len == null) len = this.length - pos;
		var data = this.sub(pos,len);
		var sb = new StringBuf();
		var l = data.length;
		var first = true;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			if(first) first = false; else sb.b[sb.b.length] = sep == null?"null":sep;
			sb.add(StringTools.hex(this.b[i],2).toLowerCase());
		}
		var s = StringTools.rtrim(sb.b.join(""));
		if(sep == "" && s.length % 2 != 0) s = "0" + s;
		return s;
	}
	,__class__: Bytes
}
rg.svg.layer.RulesOrtho = $hxClasses["rg.svg.layer.RulesOrtho"] = function(panel,orientation) {
	rg.svg.panel.Layer.call(this,panel);
	this.orientation = orientation;
	this.displayMinor = true;
	this.displayMajor = true;
	this.displayAnchorLine = true;
	this.g.classed().add("tickmarks");
}
rg.svg.layer.RulesOrtho.__name__ = ["rg","svg","layer","RulesOrtho"];
rg.svg.layer.RulesOrtho.__super__ = rg.svg.panel.Layer;
rg.svg.layer.RulesOrtho.prototype = $extend(rg.svg.panel.Layer.prototype,{
	orientation: null
	,displayMinor: null
	,displayMajor: null
	,displayAnchorLine: null
	,translate: null
	,x1: null
	,y1: null
	,x2: null
	,y2: null
	,x: null
	,y: null
	,axis: null
	,min: null
	,max: null
	,resize: function() {
		if(null == this.axis) return;
		if(this.displayAnchorLine) this.updateAnchorLine();
		this.redraw();
	}
	,update: function(axis,min,max) {
		this.axis = axis;
		this.min = min;
		this.max = max;
		this.redraw();
	}
	,updateAnchorLine: function() {
		var line = this.g.select("line.anchor-line");
		switch( (this.orientation)[1] ) {
		case 1:
			line.attr("x1")["float"](0).attr("y1")["float"](0).attr("x2")["float"](0).attr("y2")["float"](this.height);
			break;
		case 0:
			line.attr("x1")["float"](0).attr("y1")["float"](this.height).attr("x2")["float"](this.width).attr("y2")["float"](this.height);
			break;
		}
	}
	,maxTicks: function() {
		var size = (function($this) {
			var $r;
			switch( ($this.orientation)[1] ) {
			case 1:
				$r = $this.width;
				break;
			case 0:
				$r = $this.height;
				break;
			}
			return $r;
		}(this));
		return Math.round(size / 2.5);
	}
	,id: function(d,i) {
		return "" + d.getValue();
	}
	,redraw: function() {
		var ticks = this.maxTicks(), data = this.axis.ticks(this.min,this.max,ticks);
		var rule = this.g.selectAll("g.rule").data(data,this.id.$bind(this));
		var enter = rule.enter().append("svg:g").attr("class").string("rule").attr("transform").stringf(this.translate);
		if(this.displayMinor) enter.filter(function(d,i) {
			return !d.major;
		}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf(this.tickClass.$bind(this));
		if(this.displayMajor) enter.filter(function(d,i) {
			return d.major;
		}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf(this.tickClass.$bind(this));
		rule.update().attr("transform").stringf(this.translate);
		rule.exit().remove();
	}
	,initf: function() {
		switch( (this.orientation)[1] ) {
		case 1:
			this.translate = this.translateHorizontal.$bind(this);
			this.x1 = this.x1Horizontal.$bind(this);
			this.y1 = this.y1Horizontal.$bind(this);
			this.x2 = this.x2Horizontal.$bind(this);
			this.y2 = this.y2Horizontal.$bind(this);
			break;
		case 0:
			this.translate = this.translateVertical.$bind(this);
			this.x1 = this.x1Vertical.$bind(this);
			this.y1 = this.y1Vertical.$bind(this);
			this.x2 = this.x2Vertical.$bind(this);
			this.y2 = this.y2Vertical.$bind(this);
			break;
		}
	}
	,init: function() {
		this.initf();
		if(this.displayAnchorLine) {
			this.g.append("svg:line").attr("class").string("anchor-line");
			this.updateAnchorLine();
		}
	}
	,t: function(x,y) {
		return "translate(" + x + "," + y + ")";
	}
	,translateHorizontal: function(d,i) {
		return "translate(" + 0 + "," + (this.height - d.getDelta() * this.height) + ")";
	}
	,translateVertical: function(d,i) {
		return "translate(" + d.getDelta() * this.width + "," + 0 + ")";
	}
	,x1Horizontal: function(d,i) {
		return 0;
	}
	,x1Vertical: function(d,i) {
		return 0;
	}
	,y1Horizontal: function(d,i) {
		return 0;
	}
	,y1Vertical: function(d,i) {
		return 0;
	}
	,x2Horizontal: function(d,i) {
		return this.width;
	}
	,x2Vertical: function(d,i) {
		return 0;
	}
	,y2Horizontal: function(d,i) {
		return 0;
	}
	,y2Vertical: function(d,i) {
		return this.height;
	}
	,tickClass: function(d,i) {
		return d.getMajor()?"major":null;
	}
	,__class__: rg.svg.layer.RulesOrtho
});
var Iterators = $hxClasses["Iterators"] = function() { }
Iterators.__name__ = ["Iterators"];
Iterators.count = function(it) {
	var i = 0;
	while( it.hasNext() ) {
		var _ = it.next();
		i++;
	}
	return i;
}
Iterators.indexOf = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) return c; else c++;
	}
	return -1;
}
Iterators.contains = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) return true;
	}
	return false;
}
Iterators.array = function(it) {
	var result = [];
	while( it.hasNext() ) {
		var v = it.next();
		result.push(v);
	}
	return result;
}
Iterators.join = function(it,glue) {
	if(glue == null) glue = ", ";
	return Iterators.array(it).join(glue);
}
Iterators.map = function(it,f) {
	var result = [], i = 0;
	while( it.hasNext() ) {
		var v = it.next();
		result.push(f(v,i++));
	}
	return result;
}
Iterators.each = function(it,f) {
	var i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		f(o,i++);
	}
}
Iterators.filter = function(it,f) {
	var result = [];
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) result.push(i);
	}
	return result;
}
Iterators.reduce = function(it,f,initialValue) {
	var accumulator = initialValue, i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		accumulator = f(accumulator,o,i++);
	}
	return accumulator;
}
Iterators.random = function(it) {
	return Arrays.random(Iterators.array(it));
}
Iterators.any = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) return true;
	}
	return false;
}
Iterators.all = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(!f(v)) return false;
	}
	return true;
}
Iterators.last = function(it) {
	var o = null;
	while(it.hasNext()) o = it.next();
	return o;
}
Iterators.lastf = function(it,f) {
	var rev = Iterators.array(it);
	rev.reverse();
	return Arrays.lastf(rev,f);
}
Iterators.first = function(it) {
	return it.next();
}
Iterators.firstf = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) return v;
	}
	return null;
}
Iterators.order = function(it,f) {
	return Arrays.order(Iterators.array(it),f);
}
Iterators.isIterator = function(v) {
	var fields = Reflect.isObject(v) && null == Type.getClass(v)?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"next") || !Lambda.has(fields,"hasNext")) return false;
	return Reflect.isFunction(Reflect.field(v,"next")) && Reflect.isFunction(Reflect.field(v,"hasNext"));
}
Iterators.prototype = {
	__class__: Iterators
}
rg.factory.FactorySvgVisualization = $hxClasses["rg.factory.FactorySvgVisualization"] = function() {
}
rg.factory.FactorySvgVisualization.__name__ = ["rg","factory","FactorySvgVisualization"];
rg.factory.FactorySvgVisualization.prototype = {
	create: function(type,layout,options) {
		switch(type) {
		case "barchart":
			var chart = new rg.visualization.VisualizationBarChart(layout);
			chart.info = chart.infoBar = rg.info.Info.feed(new rg.info.InfoBarChart(),options);
			return chart;
		case "funnelchart":
			var chart = new rg.visualization.VisualizationFunnelChart(layout);
			chart.info = rg.info.Info.feed(new rg.info.InfoFunnelChart(),options);
			return chart;
		case "geo":
			var chart = new rg.visualization.VisualizationGeo(layout);
			chart.info = rg.info.Info.feed(new rg.info.InfoGeo(),options);
			return chart;
		case "heatgrid":
			var chart = new rg.visualization.VisualizationHeatGrid(layout);
			chart.info = chart.infoHeatGrid = rg.info.Info.feed(new rg.info.InfoHeatGrid(),options);
			return chart;
		case "linechart":
			var chart = new rg.visualization.VisualizationLineChart(layout);
			chart.info = chart.infoLine = rg.info.Info.feed(new rg.info.InfoLineChart(),options);
			return chart;
		case "piechart":
			var chart = new rg.visualization.VisualizationPieChart(layout);
			chart.info = rg.info.Info.feed(new rg.info.InfoPieChart(),options);
			return chart;
		case "sankey":
			var chart = new rg.visualization.VisualizationSankey(layout);
			chart.info = rg.info.Info.feed(new rg.info.InfoSankey(),options);
			return chart;
		case "scattergraph":
			var chart = new rg.visualization.VisualizationScatterGraph(layout);
			chart.info = chart.infoScatter = rg.info.Info.feed(new rg.info.InfoScatterGraph(),options);
			return chart;
		case "streamgraph":
			var chart = new rg.visualization.VisualizationStreamGraph(layout);
			chart.info = chart.infoStream = rg.info.Info.feed(new rg.info.InfoStreamGraph(),options);
			return chart;
		default:
			throw new thx.error.Error("unsupported visualization type '{0}'",null,type,{ fileName : "FactorySvgVisualization.hx", lineNumber : 76, className : "rg.factory.FactorySvgVisualization", methodName : "create"});
		}
	}
	,__class__: rg.factory.FactorySvgVisualization
}
thx.geo.Azimuthal = $hxClasses["thx.geo.Azimuthal"] = function() {
	this.setMode(thx.geo.ProjectionMode.Orthographic);
	this.setScale(200);
	this.setTranslate([480.0,250]);
	this.setOrigin([0.0,0]);
}
thx.geo.Azimuthal.__name__ = ["thx","geo","Azimuthal"];
thx.geo.Azimuthal.__interfaces__ = [thx.geo.IProjection];
thx.geo.Azimuthal.prototype = {
	mode: null
	,origin: null
	,scale: null
	,translate: null
	,x0: null
	,y0: null
	,cy0: null
	,sy0: null
	,project: function(coords) {
		var x1 = coords[0] * 0.01745329251994329577 - this.x0, y1 = coords[1] * 0.01745329251994329577, cx1 = Math.cos(x1), sx1 = Math.sin(x1), cy1 = Math.cos(y1), sy1 = Math.sin(y1), k = (function($this) {
			var $r;
			switch( ($this.getMode())[1] ) {
			case 0:
				$r = 1;
				break;
			case 1:
				$r = 1 / (1 + $this.sy0 * sy1 + $this.cy0 * cy1 * cx1);
				break;
			}
			return $r;
		}(this)), x = k * cy1 * sx1, y = k * (this.sy0 * cy1 * cx1 - this.cy0 * sy1);
		return [this.getScale() * x + this.getTranslate()[0],this.getScale() * y + this.getTranslate()[1]];
	}
	,invert: function(coords) {
		var x = (coords[0] - this.getTranslate()[0]) / this.getScale(), y = (coords[1] - this.getTranslate()[1]) / this.getScale(), p = Math.sqrt(x * x + y * y), c = (function($this) {
			var $r;
			switch( ($this.getMode())[1] ) {
			case 0:
				$r = Math.asin(p);
				break;
			case 1:
				$r = Math.atan(p);
				break;
			}
			return $r;
		}(this)), sc = Math.sin(c), cc = Math.cos(c);
		return [(this.x0 + Math.atan2(x * sc,p * this.cy0 * cc + y * this.sy0 * sc)) / 0.01745329251994329577,Math.asin(cc * this.sy0 - y * sc * this.cy0 / p) / 0.01745329251994329577];
	}
	,getOrigin: function() {
		return this.origin.copy();
	}
	,setOrigin: function(origin) {
		this.origin = [origin[0],origin[1]];
		this.x0 = origin[0] * 0.01745329251994329577;
		this.y0 = origin[1] * 0.01745329251994329577;
		this.cy0 = Math.cos(this.y0);
		this.sy0 = Math.sin(this.y0);
		return origin;
	}
	,getTranslate: function() {
		return this.translate.copy();
	}
	,setTranslate: function(translate) {
		this.translate = [translate[0],translate[1]];
		return translate;
	}
	,setScale: function(scale) {
		return this.scale = scale;
	}
	,getScale: function() {
		return this.scale;
	}
	,setMode: function(mode) {
		return this.mode = mode;
	}
	,getMode: function() {
		return this.mode;
	}
	,__class__: thx.geo.Azimuthal
	,__properties__: {set_translate:"setTranslate",get_translate:"getTranslate",set_scale:"setScale",get_scale:"getScale",set_origin:"setOrigin",get_origin:"getOrigin",set_mode:"setMode",get_mode:"getMode"}
}
thx.geo.ProjectionMode = $hxClasses["thx.geo.ProjectionMode"] = { __ename__ : ["thx","geo","ProjectionMode"], __constructs__ : ["Orthographic","Stereographic"] }
thx.geo.ProjectionMode.Orthographic = ["Orthographic",0];
thx.geo.ProjectionMode.Orthographic.toString = $estr;
thx.geo.ProjectionMode.Orthographic.__enum__ = thx.geo.ProjectionMode;
thx.geo.ProjectionMode.Stereographic = ["Stereographic",1];
thx.geo.ProjectionMode.Stereographic.toString = $estr;
thx.geo.ProjectionMode.Stereographic.__enum__ = thx.geo.ProjectionMode;
rg.info.InfoLabelPivotTable = $hxClasses["rg.info.InfoLabelPivotTable"] = function() {
	rg.info.InfoLabelAxis.call(this);
}
rg.info.InfoLabelPivotTable.__name__ = ["rg","info","InfoLabelPivotTable"];
rg.info.InfoLabelPivotTable.filters = function() {
	return [{ field : "total", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "totalover", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "axisvalue", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.info.InfoLabelAxis.filters());
}
rg.info.InfoLabelPivotTable.__super__ = rg.info.InfoLabelAxis;
rg.info.InfoLabelPivotTable.prototype = $extend(rg.info.InfoLabelAxis.prototype,{
	total: null
	,totalover: null
	,axisvalue: null
	,__class__: rg.info.InfoLabelPivotTable
});
rg.html.chart.Leadeboard = $hxClasses["rg.html.chart.Leadeboard"] = function(container) {
	this.ready = new hxevents.Notifier();
	this.container = container;
	this.animated = true;
	this.animationDuration = 1500;
	this.animationEase = thx.math.Equations.elasticf();
	this.animationDelay = 150;
	this._created = 0;
	this.displayGradient = true;
	this.useMax = false;
}
rg.html.chart.Leadeboard.__name__ = ["rg","html","chart","Leadeboard"];
rg.html.chart.Leadeboard.prototype = {
	variableIndependent: null
	,variableDependent: null
	,animated: null
	,animationDuration: null
	,animationDelay: null
	,animationEase: null
	,click: null
	,sortDataPoint: null
	,displayGradient: null
	,useMax: null
	,ready: null
	,displayBar: null
	,container: null
	,list: null
	,_created: null
	,stats: null
	,labelDataPoint: function(dp,stats) {
		return rg.util.RGStrings.humanize(Reflect.field(dp,this.variableIndependent.type));
	}
	,labelDataPointOver: function(dp,stats) {
		return Floats.format(100 * Reflect.field(dp,stats.type) / (this.useMax?stats.max:stats.tot),"P:1");
	}
	,labelRank: function(dp,i,stats) {
		return "" + (i + 1);
	}
	,labelValue: function(dp,stats) {
		return rg.util.Properties.formatValue(stats.type,dp);
	}
	,init: function() {
		var div = this.container.append("div").attr("class").string("leaderboard");
		this.list = div.append("ul");
		div.append("div").attr("class").string("clear");
	}
	,setVariables: function(variableIndependents,variableDependents) {
		this.variableDependent = variableDependents[0];
		this.variableIndependent = variableIndependents[0];
	}
	,backgroundSize: function(dp,i) {
		return 100 * Reflect.field(dp,this.variableDependent.type) / (this.useMax?this.stats.max:this.stats.tot) + "%";
	}
	,data: function(dps) {
		var name = this.variableDependent.type;
		if(null != this.sortDataPoint) dps.sort(this.sortDataPoint);
		if(null == this.variableDependent.stats) return;
		var stats = this.stats = (function($this) {
			var $r;
			var $t = $this.variableDependent.stats;
			if(Std["is"]($t,rg.axis.StatsNumeric)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this));
		var choice = this.list.selectAll("li").data(dps,this.id.$bind(this));
		var enterli = choice.enter().append("li");
		enterli.attr("title").stringf(this.lTitle.$bind(this));
		enterli.append("div").attr("class").stringf(function(_,i) {
			return i % 2 == 0?"background fill-0":"background";
		});
		var enterlabels = enterli.append("div").attr("class").string("labels");
		if(null != this.labelRank.$bind(this)) enterlabels.append("div").attr("class").string("rank").text().stringf(this.lRank.$bind(this));
		if(null != this.labelDataPoint.$bind(this)) enterlabels.append("span").attr("class").string("description color-0").text().stringf(this.lDataPoint.$bind(this));
		if(null != this.labelValue.$bind(this)) enterlabels.append("span").attr("class").string("value color-2").text().stringf(this.lValue.$bind(this));
		enterli.append("div").attr("class").string("clear");
		if(this.displayBar) {
			var barpadding = enterli.append("div").attr("class").string("barpadding"), enterbar = barpadding.append("div").attr("class").string("barcontainer");
			enterbar.append("div").attr("class").string("barback fill-0");
			enterbar.append("div").attr("class").string("bar fill-0").style("width").stringf(this.backgroundSize.$bind(this));
			enterli.append("div").attr("class").string("clear");
		}
		if(null != this.click) enterli.on("click.user",this.onClick.$bind(this));
		if(this.animated) enterli.style("opacity")["float"](0).eachNode(this.fadeIn.$bind(this)); else enterli.style("opacity")["float"](1);
		if(this.animated) choice.exit().transition().ease(this.animationEase).duration(null,this.animationDuration).style("opacity")["float"](0).remove(); else choice.exit().remove();
		this.ready.dispatch();
	}
	,onClick: function(dp,_) {
		this.click(dp);
	}
	,fadeIn: function(n,i) {
		var me = this;
		thx.js.Dom.selectNodeData(n).transition().ease(this.animationEase).duration(null,this.animationDuration).delay(null,this.animationDelay * (i - this._created)).attr("opacity")["float"](1).endNode(function(_,_1) {
			me._created++;
		});
	}
	,lRank: function(dp,i) {
		return this.labelRank(dp,i,this.stats);
	}
	,lValue: function(dp,i) {
		return this.labelValue(dp,this.stats);
	}
	,lDataPoint: function(dp,i) {
		return this.labelDataPoint(dp,this.stats);
	}
	,lTitle: function(dp,i) {
		return this.labelDataPointOver(dp,this.stats);
	}
	,id: function(dp,_) {
		return rg.util.DataPoints.id(dp,[this.variableDependent.type]);
	}
	,__class__: rg.html.chart.Leadeboard
}
var Objects = $hxClasses["Objects"] = function() { }
Objects.__name__ = ["Objects"];
Objects.field = function(o,fieldname,alt) {
	return Reflect.hasField(o,fieldname)?Reflect.field(o,fieldname):alt;
}
Objects.keys = function(o) {
	return Reflect.fields(o);
}
Objects.values = function(o) {
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push(Reflect.field(o,key));
	}
	return arr;
}
Objects.entries = function(o) {
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push({ key : key, value : Reflect.field(o,key)});
	}
	return arr;
}
Objects.each = function(o,handler) {
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		handler(key,Reflect.field(o,key));
	}
}
Objects.map = function(o,handler) {
	var results = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		results.push(handler(key,Reflect.field(o,key)));
	}
	return results;
}
Objects["with"] = function(ob,f) {
	f(ob);
	return ob;
}
Objects.toHash = function(ob) {
	var hash = new Hash();
	return Objects.copyToHash(ob,hash);
}
Objects.copyToHash = function(ob,hash) {
	var _g = 0, _g1 = Reflect.fields(ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		hash.set(field,Reflect.field(ob,field));
	}
	return hash;
}
Objects.interpolate = function(v,a,b,equation) {
	return (Objects.interpolatef(a,b,equation))(v);
}
Objects.interpolatef = function(a,b,equation) {
	var i = { }, c = { }, keys = Reflect.fields(a);
	var _g = 0;
	while(_g < keys.length) {
		var key = keys[_g];
		++_g;
		if(Reflect.hasField(b,key)) {
			var va = Reflect.field(a,key);
			i[key] = Dynamics.interpolatef(va,Reflect.field(b,key));
		} else c[key] = Reflect.field(a,key);
	}
	keys = Reflect.fields(b);
	var _g = 0;
	while(_g < keys.length) {
		var key = keys[_g];
		++_g;
		if(!Reflect.hasField(a,key)) c[key] = Reflect.field(b,key);
	}
	return function(t) {
		var _g = 0, _g1 = Reflect.fields(i);
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			c[k] = Reflect.field(i,k).apply(i,[t]);
		}
		return c;
	};
}
Objects.copyTo = function(src,dst) {
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var sv = Dynamics.clone(Reflect.field(src,field));
		var dv = Reflect.field(dst,field);
		if(Reflect.isObject(sv) && null == Type.getClass(sv) && (Reflect.isObject(dv) && null == Type.getClass(dv))) Objects.copyTo(sv,dv); else dst[field] = sv;
	}
	return dst;
}
Objects.clone = function(src) {
	var dst = { };
	return Objects.copyTo(src,dst);
}
Objects.mergef = function(ob,new_ob,f) {
	var _g = 0, _g1 = Reflect.fields(new_ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var new_val = Reflect.field(new_ob,field);
		if(Reflect.hasField(ob,field)) {
			var old_val = Reflect.field(ob,field);
			ob[field] = f(field,old_val,new_val);
		} else ob[field] = new_val;
	}
}
Objects.merge = function(ob,new_ob) {
	Objects.mergef(ob,new_ob,function(key,old_v,new_v) {
		return new_v;
	});
}
Objects._flatten = function(src,cum,arr,levels,level) {
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var clone = Objects.clone(cum);
		var v = Reflect.field(src,field);
		clone.fields.push(field);
		if(Reflect.isObject(v) && null == Type.getClass(v) && (levels == 0 || level + 1 < levels)) Objects._flatten(v,clone,arr,levels,level + 1); else {
			clone.value = v;
			arr.push(clone);
		}
	}
}
Objects.flatten = function(src,levels) {
	if(levels == null) levels = 0;
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var v = Reflect.field(src,field);
		if(Reflect.isObject(v) && null == Type.getClass(v) && levels != 1) {
			var item = { fields : [field], value : null};
			Objects._flatten(v,item,arr,levels,1);
		} else arr.push({ fields : [field], value : v});
	}
	return arr;
}
Objects.compare = function(a,b) {
	var v, fields;
	if((v = Arrays.compare(fields = Reflect.fields(a),Reflect.fields(b))) != 0) return v;
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		if((v = Dynamics.compare(Reflect.field(a,field),Reflect.field(b,field))) != 0) return v;
	}
	return 0;
}
Objects.addFields = function(o,fields,values) {
	var _g1 = 0, _g = fields.length;
	while(_g1 < _g) {
		var i = _g1++;
		Objects.addField(o,fields[i],values[i]);
	}
	return o;
}
Objects.addField = function(o,field,value) {
	o[field] = value;
	return o;
}
Objects.format = function(v,param,params,culture) {
	return (Objects.formatf(param,params,culture))(v);
}
Objects.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"R");
	var format = params.shift();
	switch(format) {
	case "O":
		return function(v) {
			return Std.string(v);
		};
	case "R":
		return function(v) {
			var buf = [];
			var _g = 0, _g1 = Reflect.fields(v);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				buf.push(field + ":" + Dynamics.format(Reflect.field(v,field),null,null,null,culture));
			}
			return "{" + buf.join(",") + "}";
		};
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Objects.hx", lineNumber : 242, className : "Objects", methodName : "formatf"});
			return $r;
		}(this));
	}
}
Objects.prototype = {
	__class__: Objects
}
rg.svg.widget.LabelOrientations = $hxClasses["rg.svg.widget.LabelOrientations"] = function() { }
rg.svg.widget.LabelOrientations.__name__ = ["rg","svg","widget","LabelOrientations"];
rg.svg.widget.LabelOrientations.parse = function(s) {
	return (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "ortho":case "orthogonal":
			$r = rg.svg.widget.LabelOrientation.Orthogonal;
			break;
		default:
			$r = rg.svg.widget.LabelOrientation.Aligned;
		}
		return $r;
	}(this));
}
rg.svg.widget.LabelOrientations.prototype = {
	__class__: rg.svg.widget.LabelOrientations
}
rg.info.InfoGeo = $hxClasses["rg.info.InfoGeo"] = function() {
	this.label = new rg.info.InfoLabel();
	this.map = [rg.info.Info.feed(new rg.info.InfoMap(),{ template : "world"})];
}
rg.info.InfoGeo.__name__ = ["rg","info","InfoGeo"];
rg.info.InfoGeo.filters = function() {
	return [{ field : "map", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v) || Std["is"](v,Array);
	}, filter : function(v) {
		return [{ field : "map", value : (Std["is"](v,Array)?v:[v]).map(function(d,i) {
			return rg.info.Info.feed(new rg.info.InfoMap(),d);
		})}];
	}}];
}
rg.info.InfoGeo.prototype = {
	map: null
	,label: null
	,__class__: rg.info.InfoGeo
}
var Lambda = $hxClasses["Lambda"] = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = a.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = b.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
Lambda.prototype = {
	__class__: Lambda
}
thx.color.Colors = $hxClasses["thx.color.Colors"] = function() { }
thx.color.Colors.__name__ = ["thx","color","Colors"];
thx.color.Colors.interpolatef = function(a,b,equation) {
	var ca = thx.color.Colors.parse(a);
	var cb = thx.color.Colors.parse(b);
	var f = thx.color.Rgb.interpolatef(ca,cb,equation);
	return function(v) {
		return f(v).toString();
	};
}
thx.color.Colors.interpolate = function(v,a,b,equation) {
	return (thx.color.Colors.interpolatef(a,b,equation))(v);
}
thx.color.Colors.parse = function(s) {
	if(!thx.color.Colors._reParse.match(s = StringTools.trim(s.toLowerCase()))) {
		var v = thx.color.NamedColors.byName.get(s);
		if(null == v) {
			if("transparent" == s) return thx.color.Rgb.fromInt(16777215); else return null;
		} else return v;
	}
	var type = thx.color.Colors._reParse.matched(1);
	if(!Strings.empty(type)) {
		var values = thx.color.Colors._reParse.matched(2).split(",");
		switch(type) {
		case "rgb":case "rgba":
			return new thx.color.Rgb(thx.color.Colors._c(values[0]),thx.color.Colors._c(values[1]),thx.color.Colors._c(values[2]));
		case "hsl":
			return new thx.color.Hsl(thx.color.Colors._d(values[0]),thx.color.Colors._p(values[1]),thx.color.Colors._p(values[2]));
		case "cmyk":
			return new thx.color.Cmyk(thx.color.Colors._p(values[0]),thx.color.Colors._p(values[1]),thx.color.Colors._p(values[2]),thx.color.Colors._p(values[3]));
		}
	}
	var color = thx.color.Colors._reParse.matched(3);
	if(color.length == 3) color = color.split("").map(function(d,_) {
		return d + d;
	}).join(""); else if(color.length != 6) return null;
	return thx.color.Rgb.fromInt(Std.parseInt("0x" + color));
}
thx.color.Colors._c = function(s) {
	return Std.parseInt(StringTools.trim(s));
}
thx.color.Colors._d = function(s) {
	var s1 = StringTools.trim(s);
	if(s1.substr(-3) == "deg") s1 = s1.substr(0,-3); else if(s1.substr(-1) == "º") s1 = s1.substr(0,-1);
	return Std.parseFloat(s1);
}
thx.color.Colors._p = function(s) {
	var s1 = StringTools.trim(s);
	if(s1.substr(-1) == "%") return Std.parseFloat(s1.substr(0,-1)) / 100; else return Std.parseFloat(s1);
}
thx.color.Colors.prototype = {
	__class__: thx.color.Colors
}
rg.svg.chart.Coords = $hxClasses["rg.svg.chart.Coords"] = function() { }
rg.svg.chart.Coords.__name__ = ["rg","svg","chart","Coords"];
rg.svg.chart.Coords.fromTransform = function(s) {
	if(!rg.svg.chart.Coords.retransform.match(s)) return [0.0,0]; else {
		var y = rg.svg.chart.Coords.retransform.matched(2);
		return [Std.parseFloat(rg.svg.chart.Coords.retransform.matched(1)),null == y?0:Std.parseFloat(y)];
	}
}
rg.svg.chart.Coords.prototype = {
	__class__: rg.svg.chart.Coords
}
haxe.Timer = $hxClasses["haxe.Timer"] = function(time_ms) {
	var arr = haxe_timers;
	this.id = arr.length;
	arr[this.id] = this;
	this.timerId = window.setInterval("haxe_timers[" + this.id + "].run();",time_ms);
}
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.measure = function(f,pos) {
	var t0 = haxe.Timer.stamp();
	var r = f();
	haxe.Log.trace(haxe.Timer.stamp() - t0 + "s",pos);
	return r;
}
haxe.Timer.stamp = function() {
	return Date.now().getTime() / 1000;
}
haxe.Timer.prototype = {
	id: null
	,timerId: null
	,stop: function() {
		if(this.id == null) return;
		window.clearInterval(this.timerId);
		var arr = haxe_timers;
		arr[this.id] = null;
		if(this.id > 100 && this.id == arr.length - 1) {
			var p = this.id - 1;
			while(p >= 0 && arr[p] == null) p--;
			arr = arr.slice(0,p + 1);
		}
		this.id = null;
	}
	,run: function() {
	}
	,__class__: haxe.Timer
}
rg.svg.widget.ElbowArea = $hxClasses["rg.svg.widget.ElbowArea"] = function(container,classarea,classborder) {
	this.g = container.append("svg:g").attr("class").string("elbow");
	this.area = this.g.append("svg:path").attr("class").string("elbow-fill" + (null == classarea?"":" " + classarea));
	this.outer = this.g.append("svg:path").attr("class").string("elbow-stroke outer" + (null == classborder?"":" " + classborder));
	this.inner = this.g.append("svg:path").attr("class").string("elbow-stroke inner" + (null == classborder?"":" " + classborder));
}
rg.svg.widget.ElbowArea.__name__ = ["rg","svg","widget","ElbowArea"];
rg.svg.widget.ElbowArea.prototype = {
	g: null
	,area: null
	,outer: null
	,inner: null
	,update: function(orientation,weight,x,y,minradius,maxradius,before,after) {
		if(after == null) after = 10.0;
		if(before == null) before = 0.0;
		if(maxradius == null) maxradius = 16.0;
		if(minradius == null) minradius = 3.0;
		var dinner = "", douter = "", rad = weight < 0?Math.max(maxradius,weight):Math.min(maxradius,weight);
		switch( (orientation)[1] ) {
		case 0:
			dinner = "M" + (before + x + minradius) + "," + (y + minradius + after) + "L" + (before + x + minradius) + "," + (y + minradius) + "A" + Math.abs(minradius) + "," + Math.abs(minradius) + " 0 0,0 " + (before + x) + "," + y + "L" + x + "," + y;
			douter = "M" + x + "," + (y - weight) + "L" + (before + x) + "," + (y - weight) + "A" + Math.abs(rad) + "," + Math.abs(rad) + " 0 0,1 " + (before + x + rad) + "," + (y - weight + rad) + "L" + (before + x + rad) + "," + (y + after + minradius);
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			this.update(rg.svg.widget.Orientation.RightBottom,-weight,x,y,-minradius,-maxradius,-before,-after);
			return;
			dinner = "M" + (before + x + minradius) + "," + (y + minradius + after) + "L" + (before + x + minradius) + "," + (y + minradius) + "A" + minradius + "," + minradius + " 0 0,0 " + (before + x) + "," + y + "L" + x + "," + y;
			douter = "M" + x + "," + (y + weight) + "L" + (-before + x) + "," + (y + weight) + "A" + rad + "," + rad + " 0 0,1 " + (-before + x - rad) + "," + (y + weight - rad) + "L" + (-before + x - rad) + "," + (y - after - minradius);
			break;
		case 4:
			break;
		case 5:
			break;
		case 6:
			break;
		case 7:
			break;
		}
		var darea = douter + "L" + dinner.substr(1) + "z";
		this.inner.attr("d").string(dinner);
		this.outer.attr("d").string(douter);
		this.area.attr("d").string(darea);
	}
	,__class__: rg.svg.widget.ElbowArea
}
rg.svg.widget.Orientation = $hxClasses["rg.svg.widget.Orientation"] = { __ename__ : ["rg","svg","widget","Orientation"], __constructs__ : ["RightBottom","LeftBottom","RightTop","LeftTop","BottomRight","BottomLeft","TopRight","TopLeft"] }
rg.svg.widget.Orientation.RightBottom = ["RightBottom",0];
rg.svg.widget.Orientation.RightBottom.toString = $estr;
rg.svg.widget.Orientation.RightBottom.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.LeftBottom = ["LeftBottom",1];
rg.svg.widget.Orientation.LeftBottom.toString = $estr;
rg.svg.widget.Orientation.LeftBottom.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.RightTop = ["RightTop",2];
rg.svg.widget.Orientation.RightTop.toString = $estr;
rg.svg.widget.Orientation.RightTop.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.LeftTop = ["LeftTop",3];
rg.svg.widget.Orientation.LeftTop.toString = $estr;
rg.svg.widget.Orientation.LeftTop.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.BottomRight = ["BottomRight",4];
rg.svg.widget.Orientation.BottomRight.toString = $estr;
rg.svg.widget.Orientation.BottomRight.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.BottomLeft = ["BottomLeft",5];
rg.svg.widget.Orientation.BottomLeft.toString = $estr;
rg.svg.widget.Orientation.BottomLeft.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.TopRight = ["TopRight",6];
rg.svg.widget.Orientation.TopRight.toString = $estr;
rg.svg.widget.Orientation.TopRight.__enum__ = rg.svg.widget.Orientation;
rg.svg.widget.Orientation.TopLeft = ["TopLeft",7];
rg.svg.widget.Orientation.TopLeft.toString = $estr;
rg.svg.widget.Orientation.TopLeft.__enum__ = rg.svg.widget.Orientation;
thx.svg.LineInterpolator = $hxClasses["thx.svg.LineInterpolator"] = { __ename__ : ["thx","svg","LineInterpolator"], __constructs__ : ["Linear","Step","StepBefore","StepAfter","Basis","BasisOpen","BasisClosed","Cardinal","CardinalOpen","CardinalClosed","Monotone"] }
thx.svg.LineInterpolator.Linear = ["Linear",0];
thx.svg.LineInterpolator.Linear.toString = $estr;
thx.svg.LineInterpolator.Linear.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Step = ["Step",1];
thx.svg.LineInterpolator.Step.toString = $estr;
thx.svg.LineInterpolator.Step.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.StepBefore = ["StepBefore",2];
thx.svg.LineInterpolator.StepBefore.toString = $estr;
thx.svg.LineInterpolator.StepBefore.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.StepAfter = ["StepAfter",3];
thx.svg.LineInterpolator.StepAfter.toString = $estr;
thx.svg.LineInterpolator.StepAfter.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Basis = ["Basis",4];
thx.svg.LineInterpolator.Basis.toString = $estr;
thx.svg.LineInterpolator.Basis.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.BasisOpen = ["BasisOpen",5];
thx.svg.LineInterpolator.BasisOpen.toString = $estr;
thx.svg.LineInterpolator.BasisOpen.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.BasisClosed = ["BasisClosed",6];
thx.svg.LineInterpolator.BasisClosed.toString = $estr;
thx.svg.LineInterpolator.BasisClosed.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Cardinal = function(tension) { var $x = ["Cardinal",7,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.CardinalOpen = function(tension) { var $x = ["CardinalOpen",8,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.CardinalClosed = function(tension) { var $x = ["CardinalClosed",9,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.Monotone = ["Monotone",10];
thx.svg.LineInterpolator.Monotone.toString = $estr;
thx.svg.LineInterpolator.Monotone.__enum__ = thx.svg.LineInterpolator;
rg.svg.chart.ColorScaleModes = $hxClasses["rg.svg.chart.ColorScaleModes"] = function() { }
rg.svg.chart.ColorScaleModes.__name__ = ["rg","svg","chart","ColorScaleModes"];
rg.svg.chart.ColorScaleModes.createFromDynamic = function(v) {
	if(Reflect.isFunction(v)) return rg.svg.chart.ColorScaleMode.Fun(v);
	if(!Std["is"](v,String)) return (function($this) {
		var $r;
		throw new thx.error.Error("invalid color mode '{0}'",[v],null,{ fileName : "ColorScaleModes.hx", lineNumber : 19, className : "rg.svg.chart.ColorScaleModes", methodName : "createFromDynamic"});
		return $r;
	}(this));
	var s = ((function($this) {
		var $r;
		var $t = v;
		if(Std["is"]($t,String)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).split(":");
	switch(s[0].toLowerCase()) {
	case "css":
		return rg.svg.chart.ColorScaleMode.FromCss(null == s[1]?null:Std.parseInt(s[1]));
	case "i":case "interpolated":
		return rg.svg.chart.ColorScaleMode.Interpolation(s[1].split(",").map(function(d,i) {
			return thx.color.Colors.parse(d);
		}));
	case "s":case "sequence":
		return rg.svg.chart.ColorScaleMode.Sequence(s[1].split(",").map(function(d,i) {
			return thx.color.Colors.parse(d);
		}));
	case "f":case "fixed":
		return rg.svg.chart.ColorScaleMode.Fixed(thx.color.Colors.parse(s[1]));
	default:
		if(s[0].indexOf(",") >= 0) return rg.svg.chart.ColorScaleMode.Sequence(s[0].split(",").map(function(d,i) {
			return thx.color.Colors.parse(d);
		})); else return rg.svg.chart.ColorScaleMode.Fixed(thx.color.Colors.parse(s[0]));
	}
}
rg.svg.chart.ColorScaleModes.prototype = {
	__class__: rg.svg.chart.ColorScaleModes
}
rg.svg.chart.LineEffects = $hxClasses["rg.svg.chart.LineEffects"] = function() { }
rg.svg.chart.LineEffects.__name__ = ["rg","svg","chart","LineEffects"];
rg.svg.chart.LineEffects.parse = function(s) {
	var parts = s.toLowerCase().split(":");
	switch(parts.shift()) {
	case "dropshadow":
		var offsetx = 0.5, offsety = 0.5, levels = 2, parameters = parts.pop();
		if(null != parameters) {
			var parameters1 = parameters.split(",");
			offsetx = Std.parseFloat(parameters1[0]);
			if(parameters1.length > 1) offsety = Std.parseFloat(parameters1[1]); else offsety = offsetx;
			if(parameters1.length > 2) levels = Std.parseInt(parameters1[2]);
		}
		return rg.svg.chart.LineEffect.DropShadow(offsetx,offsety,levels);
	case "gradient":
		var lightness = 0.75, levels = 2, parameters = parts.pop();
		if(null != parameters) {
			lightness = Std.parseFloat(parameters.split(",").shift());
			var nlevels = parameters.split(",").pop();
			if(null != nlevels) levels = Std.parseInt(nlevels);
		}
		return rg.svg.chart.LineEffect.Gradient(lightness,levels);
	default:
		return rg.svg.chart.LineEffect.NoEffect;
	}
}
rg.svg.chart.LineEffects.prototype = {
	__class__: rg.svg.chart.LineEffects
}
thx.svg.Symbol = $hxClasses["thx.svg.Symbol"] = function() { }
thx.svg.Symbol.__name__ = ["thx","svg","Symbol"];
thx.svg.Symbol.triangleDown = function(size) {
	var rx = Math.sqrt(size / thx.svg.Symbol.sqrt3), ry = rx * thx.svg.Symbol.sqrt3 / 2;
	return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
}
thx.svg.Symbol.triangleUp = function(size) {
	var rx = Math.sqrt(size / thx.svg.Symbol.sqrt3), ry = rx * thx.svg.Symbol.sqrt3 / 2;
	return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
}
thx.svg.Symbol.square = function(size) {
	var r = Math.sqrt(size) / 2;
	return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
}
thx.svg.Symbol.diamond = function(size) {
	var ry = Math.sqrt(size / (2 * thx.svg.Symbol.tan30)), rx = ry * thx.svg.Symbol.tan30;
	return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
}
thx.svg.Symbol.cross = function(size) {
	var r = Math.sqrt(size / 5) / 2;
	return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
}
thx.svg.Symbol.circle = function(size) {
	var r = Math.sqrt(size / Math.PI);
	return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
}
thx.svg.Symbol.arrowUp = function(size) {
	var r = Math.sqrt(size / 2);
	return "M" + -r + ",0" + "h" + r / 2 + "v" + r + "h" + r + "v" + -r + "h" + r / 2 + "l" + -r + "," + -r + "Z";
}
thx.svg.Symbol.arrowDown = function(size) {
	var r = Math.sqrt(size / 2);
	return "M" + -r + ",0" + "h" + r / 2 + "v" + -r + "h" + r + "v" + r + "h" + r / 2 + "l" + -r + "," + r + "Z";
}
thx.svg.Symbol.arrowDownWide = function(size) {
	var r = Math.sqrt(size / 2.5);
	return "M" + -r + ",0" + "h" + r / 4 + "v" + -r + "h" + r * 1.5 + "v" + r + "h" + r / 4 + "l" + -r + "," + r + "Z";
}
thx.svg.Symbol.arrowRight = function(size) {
	var r = Math.sqrt(size / 2);
	return "M" + "0," + -r + "v" + r / 2 + "h" + -r + "v" + r + "h" + r + "v" + r / 2 + "l" + r + "," + -r + "Z";
}
thx.svg.Symbol.arrowLeft = function(size) {
	var r = Math.sqrt(size / 2);
	return "M" + "0," + -r + "v" + r / 2 + "h" + r + "v" + r + "h" + -r + "v" + r / 2 + "l" + -r + "," + -r + "Z";
}
thx.svg.Symbol.star = function(size) {
	var r = Math.sqrt(size / 0.31027) / 2;
	return "M0," + -r + "L" + r * 0.236 + "," + r * -0.325 + " " + r * 0.951 + "," + r * -0.309 + " " + r * 0.382 + "," + r * 0.124 + " " + r * 0.588 + "," + r * 0.809 + " " + r * 0 + "," + r * 0.401 + " " + r * -0.588 + "," + r * 0.809 + " " + r * -0.382 + "," + r * 0.124 + " " + r * -0.951 + "," + r * -0.309 + " " + r * -0.236 + "," + r * -0.325 + " " + "Z";
}
thx.svg.Symbol.prototype = {
	__class__: thx.svg.Symbol
}
js.Boot.__res = {}
js.Boot.__init();
{
	thx.color.NamedColors.byName = new Hash();
	thx.color.NamedColors.byName.set("aliceblue",thx.color.NamedColors.aliceblue = thx.color.Rgb.fromInt(15792383));
	thx.color.NamedColors.byName.set("alice blue",thx.color.NamedColors.aliceblue);
	thx.color.NamedColors.byName.set("antiquewhite",thx.color.NamedColors.antiquewhite = thx.color.Rgb.fromInt(16444375));
	thx.color.NamedColors.byName.set("antique white",thx.color.NamedColors.antiquewhite);
	thx.color.NamedColors.byName.set("aqua",thx.color.NamedColors.aqua = thx.color.Rgb.fromInt(65535));
	thx.color.NamedColors.byName.set("aquamarine",thx.color.NamedColors.aquamarine = thx.color.Rgb.fromInt(8388564));
	thx.color.NamedColors.byName.set("azure",thx.color.NamedColors.azure = thx.color.Rgb.fromInt(15794175));
	thx.color.NamedColors.byName.set("beige",thx.color.NamedColors.beige = thx.color.Rgb.fromInt(16119260));
	thx.color.NamedColors.byName.set("bisque",thx.color.NamedColors.bisque = thx.color.Rgb.fromInt(16770244));
	thx.color.NamedColors.byName.set("black",thx.color.NamedColors.black = thx.color.Rgb.fromInt(0));
	thx.color.NamedColors.byName.set("blanchedalmond",thx.color.NamedColors.blanchedalmond = thx.color.Rgb.fromInt(16772045));
	thx.color.NamedColors.byName.set("blanched almond",thx.color.NamedColors.blanchedalmond);
	thx.color.NamedColors.byName.set("blue",thx.color.NamedColors.blue = thx.color.Rgb.fromInt(255));
	thx.color.NamedColors.byName.set("blueviolet",thx.color.NamedColors.blueviolet = thx.color.Rgb.fromInt(9055202));
	thx.color.NamedColors.byName.set("blue violet",thx.color.NamedColors.blueviolet);
	thx.color.NamedColors.byName.set("brown",thx.color.NamedColors.brown = thx.color.Rgb.fromInt(10824234));
	thx.color.NamedColors.byName.set("burlywood",thx.color.NamedColors.burlywood = thx.color.Rgb.fromInt(14596231));
	thx.color.NamedColors.byName.set("burly wood",thx.color.NamedColors.burlywood);
	thx.color.NamedColors.byName.set("cadetblue",thx.color.NamedColors.cadetblue = thx.color.Rgb.fromInt(6266528));
	thx.color.NamedColors.byName.set("cadet blue",thx.color.NamedColors.cadetblue);
	thx.color.NamedColors.byName.set("chartreuse",thx.color.NamedColors.chartreuse = thx.color.Rgb.fromInt(8388352));
	thx.color.NamedColors.byName.set("chart reuse",thx.color.NamedColors.chartreuse);
	thx.color.NamedColors.byName.set("chocolate",thx.color.NamedColors.chocolate = thx.color.Rgb.fromInt(13789470));
	thx.color.NamedColors.byName.set("coral",thx.color.NamedColors.coral = thx.color.Rgb.fromInt(16744272));
	thx.color.NamedColors.byName.set("cornflowerblue",thx.color.NamedColors.cornflowerblue = thx.color.Rgb.fromInt(6591981));
	thx.color.NamedColors.byName.set("corn flower blue",thx.color.NamedColors.cornflowerblue);
	thx.color.NamedColors.byName.set("cornsilk",thx.color.NamedColors.cornsilk = thx.color.Rgb.fromInt(16775388));
	thx.color.NamedColors.byName.set("corn silk",thx.color.NamedColors.cornsilk);
	thx.color.NamedColors.byName.set("crimson",thx.color.NamedColors.crimson = thx.color.Rgb.fromInt(14423100));
	thx.color.NamedColors.byName.set("cyan",thx.color.NamedColors.cyan = thx.color.Rgb.fromInt(65535));
	thx.color.NamedColors.byName.set("darkblue",thx.color.NamedColors.darkblue = thx.color.Rgb.fromInt(139));
	thx.color.NamedColors.byName.set("dark blue",thx.color.NamedColors.darkblue);
	thx.color.NamedColors.byName.set("darkcyan",thx.color.NamedColors.darkcyan = thx.color.Rgb.fromInt(35723));
	thx.color.NamedColors.byName.set("dark cyan",thx.color.NamedColors.darkcyan);
	thx.color.NamedColors.byName.set("darkgoldenrod",thx.color.NamedColors.darkgoldenrod = thx.color.Rgb.fromInt(12092939));
	thx.color.NamedColors.byName.set("dark golden rod",thx.color.NamedColors.darkgoldenrod);
	thx.color.NamedColors.byName.set("darkgray",thx.color.NamedColors.darkgray = thx.color.NamedColors.darkgrey = thx.color.Rgb.fromInt(11119017));
	thx.color.NamedColors.byName.set("dark gray",thx.color.NamedColors.darkgray);
	thx.color.NamedColors.byName.set("darkgrey",thx.color.NamedColors.darkgrey);
	thx.color.NamedColors.byName.set("dark grey",thx.color.NamedColors.darkgrey);
	thx.color.NamedColors.byName.set("darkgreen",thx.color.NamedColors.darkgreen = thx.color.Rgb.fromInt(25600));
	thx.color.NamedColors.byName.set("dark green",thx.color.NamedColors.darkgreen);
	thx.color.NamedColors.byName.set("darkkhaki",thx.color.NamedColors.darkkhaki = thx.color.Rgb.fromInt(12433259));
	thx.color.NamedColors.byName.set("dark khaki",thx.color.NamedColors.darkkhaki);
	thx.color.NamedColors.byName.set("darkmagenta",thx.color.NamedColors.darkmagenta = thx.color.Rgb.fromInt(9109643));
	thx.color.NamedColors.byName.set("dark magenta",thx.color.NamedColors.darkmagenta);
	thx.color.NamedColors.byName.set("darkolivegreen",thx.color.NamedColors.darkolivegreen = thx.color.Rgb.fromInt(5597999));
	thx.color.NamedColors.byName.set("dark olive green",thx.color.NamedColors.darkolivegreen);
	thx.color.NamedColors.byName.set("darkorange",thx.color.NamedColors.darkorange = thx.color.Rgb.fromInt(16747520));
	thx.color.NamedColors.byName.set("dark orange",thx.color.NamedColors.darkorange);
	thx.color.NamedColors.byName.set("darkorchid",thx.color.NamedColors.darkorchid = thx.color.Rgb.fromInt(10040012));
	thx.color.NamedColors.byName.set("dark orchid",thx.color.NamedColors.darkorchid);
	thx.color.NamedColors.byName.set("darkred",thx.color.NamedColors.darkred = thx.color.Rgb.fromInt(9109504));
	thx.color.NamedColors.byName.set("dark red",thx.color.NamedColors.darkred);
	thx.color.NamedColors.byName.set("darksalmon",thx.color.NamedColors.darksalmon = thx.color.Rgb.fromInt(15308410));
	thx.color.NamedColors.byName.set("dark salmon",thx.color.NamedColors.darksalmon);
	thx.color.NamedColors.byName.set("darkseagreen",thx.color.NamedColors.darkseagreen = thx.color.Rgb.fromInt(9419919));
	thx.color.NamedColors.byName.set("dark sea green",thx.color.NamedColors.darkseagreen);
	thx.color.NamedColors.byName.set("darkslateblue",thx.color.NamedColors.darkslateblue = thx.color.Rgb.fromInt(4734347));
	thx.color.NamedColors.byName.set("dark slate blue",thx.color.NamedColors.darkslateblue);
	thx.color.NamedColors.byName.set("darkslategray",thx.color.NamedColors.darkslategray = thx.color.NamedColors.darkslategrey = thx.color.Rgb.fromInt(3100495));
	thx.color.NamedColors.byName.set("dark slate gray",thx.color.NamedColors.darkslategray);
	thx.color.NamedColors.byName.set("darkslategrey",thx.color.NamedColors.darkslategrey);
	thx.color.NamedColors.byName.set("dark slate grey",thx.color.NamedColors.darkslategrey);
	thx.color.NamedColors.byName.set("darkturquoise",thx.color.NamedColors.darkturquoise = thx.color.Rgb.fromInt(52945));
	thx.color.NamedColors.byName.set("dark turquoise",thx.color.NamedColors.darkturquoise);
	thx.color.NamedColors.byName.set("darkviolet",thx.color.NamedColors.darkviolet = thx.color.Rgb.fromInt(9699539));
	thx.color.NamedColors.byName.set("dark violet",thx.color.NamedColors.darkviolet);
	thx.color.NamedColors.byName.set("deeppink",thx.color.NamedColors.deeppink = thx.color.Rgb.fromInt(16716947));
	thx.color.NamedColors.byName.set("deep pink",thx.color.NamedColors.deeppink);
	thx.color.NamedColors.byName.set("deepskyblue",thx.color.NamedColors.deepskyblue = thx.color.Rgb.fromInt(49151));
	thx.color.NamedColors.byName.set("deep sky blue",thx.color.NamedColors.deepskyblue);
	thx.color.NamedColors.byName.set("dimgray",thx.color.NamedColors.dimgray = thx.color.NamedColors.dimgrey = thx.color.Rgb.fromInt(6908265));
	thx.color.NamedColors.byName.set("dim grey",thx.color.NamedColors.dimgrey);
	thx.color.NamedColors.byName.set("dimgrey",thx.color.NamedColors.dimgrey);
	thx.color.NamedColors.byName.set("dim grey",thx.color.NamedColors.dimgrey);
	thx.color.NamedColors.byName.set("dodgerblue",thx.color.NamedColors.dodgerblue = thx.color.Rgb.fromInt(2003199));
	thx.color.NamedColors.byName.set("dodger blue",thx.color.NamedColors.dodgerblue);
	thx.color.NamedColors.byName.set("firebrick",thx.color.NamedColors.firebrick = thx.color.Rgb.fromInt(11674146));
	thx.color.NamedColors.byName.set("fire brick",thx.color.NamedColors.firebrick);
	thx.color.NamedColors.byName.set("floralwhite",thx.color.NamedColors.floralwhite = thx.color.Rgb.fromInt(16775920));
	thx.color.NamedColors.byName.set("floral white",thx.color.NamedColors.floralwhite);
	thx.color.NamedColors.byName.set("forestgreen",thx.color.NamedColors.forestgreen = thx.color.Rgb.fromInt(2263842));
	thx.color.NamedColors.byName.set("forest green",thx.color.NamedColors.forestgreen);
	thx.color.NamedColors.byName.set("fuchsia",thx.color.NamedColors.fuchsia = thx.color.Rgb.fromInt(16711935));
	thx.color.NamedColors.byName.set("gainsboro",thx.color.NamedColors.gainsboro = thx.color.Rgb.fromInt(14474460));
	thx.color.NamedColors.byName.set("ghostwhite",thx.color.NamedColors.ghostwhite = thx.color.Rgb.fromInt(16316671));
	thx.color.NamedColors.byName.set("ghost white",thx.color.NamedColors.ghostwhite);
	thx.color.NamedColors.byName.set("gold",thx.color.NamedColors.gold = thx.color.Rgb.fromInt(16766720));
	thx.color.NamedColors.byName.set("goldenrod",thx.color.NamedColors.goldenrod = thx.color.Rgb.fromInt(14329120));
	thx.color.NamedColors.byName.set("golden rod",thx.color.NamedColors.goldenrod);
	thx.color.NamedColors.byName.set("gray",thx.color.NamedColors.gray = thx.color.NamedColors.grey = thx.color.Rgb.fromInt(8421504));
	thx.color.NamedColors.byName.set("grey",thx.color.NamedColors.grey);
	thx.color.NamedColors.byName.set("green",thx.color.NamedColors.green = thx.color.Rgb.fromInt(32768));
	thx.color.NamedColors.byName.set("greenyellow",thx.color.NamedColors.greenyellow = thx.color.Rgb.fromInt(11403055));
	thx.color.NamedColors.byName.set("green yellow",thx.color.NamedColors.greenyellow);
	thx.color.NamedColors.byName.set("honeydew",thx.color.NamedColors.honeydew = thx.color.Rgb.fromInt(15794160));
	thx.color.NamedColors.byName.set("honey dew",thx.color.NamedColors.honeydew);
	thx.color.NamedColors.byName.set("hotpink",thx.color.NamedColors.hotpink = thx.color.Rgb.fromInt(16738740));
	thx.color.NamedColors.byName.set("hot pink",thx.color.NamedColors.hotpink);
	thx.color.NamedColors.byName.set("indianred",thx.color.NamedColors.indianred = thx.color.Rgb.fromInt(13458524));
	thx.color.NamedColors.byName.set("indian red",thx.color.NamedColors.indianred);
	thx.color.NamedColors.byName.set("indigo",thx.color.NamedColors.indigo = thx.color.Rgb.fromInt(4915330));
	thx.color.NamedColors.byName.set("ivory",thx.color.NamedColors.ivory = thx.color.Rgb.fromInt(16777200));
	thx.color.NamedColors.byName.set("khaki",thx.color.NamedColors.khaki = thx.color.Rgb.fromInt(15787660));
	thx.color.NamedColors.byName.set("lavender",thx.color.NamedColors.lavender = thx.color.Rgb.fromInt(15132410));
	thx.color.NamedColors.byName.set("lavenderblush",thx.color.NamedColors.lavenderblush = thx.color.Rgb.fromInt(16773365));
	thx.color.NamedColors.byName.set("lavender blush",thx.color.NamedColors.lavenderblush);
	thx.color.NamedColors.byName.set("lawngreen",thx.color.NamedColors.lawngreen = thx.color.Rgb.fromInt(8190976));
	thx.color.NamedColors.byName.set("lawn green",thx.color.NamedColors.lawngreen);
	thx.color.NamedColors.byName.set("lemonchiffon",thx.color.NamedColors.lemonchiffon = thx.color.Rgb.fromInt(16775885));
	thx.color.NamedColors.byName.set("lemon chiffon",thx.color.NamedColors.lemonchiffon);
	thx.color.NamedColors.byName.set("lightblue",thx.color.NamedColors.lightblue = thx.color.Rgb.fromInt(11393254));
	thx.color.NamedColors.byName.set("light blue",thx.color.NamedColors.lightblue);
	thx.color.NamedColors.byName.set("lightcoral",thx.color.NamedColors.lightcoral = thx.color.Rgb.fromInt(15761536));
	thx.color.NamedColors.byName.set("light coral",thx.color.NamedColors.lightcoral);
	thx.color.NamedColors.byName.set("lightcyan",thx.color.NamedColors.lightcyan = thx.color.Rgb.fromInt(14745599));
	thx.color.NamedColors.byName.set("light cyan",thx.color.NamedColors.lightcyan);
	thx.color.NamedColors.byName.set("lightgoldenrodyellow",thx.color.NamedColors.lightgoldenrodyellow = thx.color.Rgb.fromInt(16448210));
	thx.color.NamedColors.byName.set("light golden rod yellow",thx.color.NamedColors.lightgoldenrodyellow);
	thx.color.NamedColors.byName.set("lightgray",thx.color.NamedColors.lightgray = thx.color.NamedColors.lightgrey = thx.color.Rgb.fromInt(13882323));
	thx.color.NamedColors.byName.set("light gray",thx.color.NamedColors.lightgray);
	thx.color.NamedColors.byName.set("lightgrey",thx.color.NamedColors.lightgrey);
	thx.color.NamedColors.byName.set("light grey",thx.color.NamedColors.lightgrey);
	thx.color.NamedColors.byName.set("lightgreen",thx.color.NamedColors.lightgreen = thx.color.Rgb.fromInt(9498256));
	thx.color.NamedColors.byName.set("light green",thx.color.NamedColors.lightgreen);
	thx.color.NamedColors.byName.set("lightpink",thx.color.NamedColors.lightpink = thx.color.Rgb.fromInt(16758465));
	thx.color.NamedColors.byName.set("light pink",thx.color.NamedColors.lightpink);
	thx.color.NamedColors.byName.set("lightsalmon",thx.color.NamedColors.lightsalmon = thx.color.Rgb.fromInt(16752762));
	thx.color.NamedColors.byName.set("light salmon",thx.color.NamedColors.lightsalmon);
	thx.color.NamedColors.byName.set("lightseagreen",thx.color.NamedColors.lightseagreen = thx.color.Rgb.fromInt(2142890));
	thx.color.NamedColors.byName.set("light sea green",thx.color.NamedColors.lightseagreen);
	thx.color.NamedColors.byName.set("lightskyblue",thx.color.NamedColors.lightskyblue = thx.color.Rgb.fromInt(8900346));
	thx.color.NamedColors.byName.set("light sky blue",thx.color.NamedColors.lightskyblue);
	thx.color.NamedColors.byName.set("lightslategray",thx.color.NamedColors.lightslategray = thx.color.NamedColors.lightslategrey = thx.color.Rgb.fromInt(7833753));
	thx.color.NamedColors.byName.set("light slate gray",thx.color.NamedColors.lightslategray);
	thx.color.NamedColors.byName.set("lightslategrey",thx.color.NamedColors.lightslategrey);
	thx.color.NamedColors.byName.set("light slate grey",thx.color.NamedColors.lightslategrey);
	thx.color.NamedColors.byName.set("lightsteelblue",thx.color.NamedColors.lightsteelblue = thx.color.Rgb.fromInt(11584734));
	thx.color.NamedColors.byName.set("light steel blue",thx.color.NamedColors.lightsteelblue);
	thx.color.NamedColors.byName.set("lightyellow",thx.color.NamedColors.lightyellow = thx.color.Rgb.fromInt(16777184));
	thx.color.NamedColors.byName.set("light yellow",thx.color.NamedColors.lightyellow);
	thx.color.NamedColors.byName.set("lime",thx.color.NamedColors.lime = thx.color.Rgb.fromInt(65280));
	thx.color.NamedColors.byName.set("limegreen",thx.color.NamedColors.limegreen = thx.color.Rgb.fromInt(3329330));
	thx.color.NamedColors.byName.set("lime green",thx.color.NamedColors.limegreen);
	thx.color.NamedColors.byName.set("linen",thx.color.NamedColors.linen = thx.color.Rgb.fromInt(16445670));
	thx.color.NamedColors.byName.set("magenta",thx.color.NamedColors.magenta = thx.color.Rgb.fromInt(16711935));
	thx.color.NamedColors.byName.set("maroon",thx.color.NamedColors.maroon = thx.color.Rgb.fromInt(8388608));
	thx.color.NamedColors.byName.set("mediumaquamarine",thx.color.NamedColors.mediumaquamarine = thx.color.Rgb.fromInt(6737322));
	thx.color.NamedColors.byName.set("mediuma quamarine",thx.color.NamedColors.mediumaquamarine);
	thx.color.NamedColors.byName.set("mediumblue",thx.color.NamedColors.mediumblue = thx.color.Rgb.fromInt(205));
	thx.color.NamedColors.byName.set("medium blue",thx.color.NamedColors.mediumblue);
	thx.color.NamedColors.byName.set("mediumorchid",thx.color.NamedColors.mediumorchid = thx.color.Rgb.fromInt(12211667));
	thx.color.NamedColors.byName.set("medium orchid",thx.color.NamedColors.mediumorchid);
	thx.color.NamedColors.byName.set("mediumpurple",thx.color.NamedColors.mediumpurple = thx.color.Rgb.fromInt(9662683));
	thx.color.NamedColors.byName.set("medium purple",thx.color.NamedColors.mediumpurple);
	thx.color.NamedColors.byName.set("mediumseagreen",thx.color.NamedColors.mediumseagreen = thx.color.Rgb.fromInt(3978097));
	thx.color.NamedColors.byName.set("medium sea green",thx.color.NamedColors.mediumseagreen);
	thx.color.NamedColors.byName.set("mediumslateblue",thx.color.NamedColors.mediumslateblue = thx.color.Rgb.fromInt(8087790));
	thx.color.NamedColors.byName.set("medium slate blue",thx.color.NamedColors.mediumslateblue);
	thx.color.NamedColors.byName.set("mediumspringgreen",thx.color.NamedColors.mediumspringgreen = thx.color.Rgb.fromInt(64154));
	thx.color.NamedColors.byName.set("medium spring green",thx.color.NamedColors.mediumspringgreen);
	thx.color.NamedColors.byName.set("mediumturquoise",thx.color.NamedColors.mediumturquoise = thx.color.Rgb.fromInt(4772300));
	thx.color.NamedColors.byName.set("medium turquoise",thx.color.NamedColors.mediumturquoise);
	thx.color.NamedColors.byName.set("mediumvioletred",thx.color.NamedColors.mediumvioletred = thx.color.Rgb.fromInt(13047173));
	thx.color.NamedColors.byName.set("medium violet red",thx.color.NamedColors.mediumvioletred);
	thx.color.NamedColors.byName.set("midnightblue",thx.color.NamedColors.midnightblue = thx.color.Rgb.fromInt(1644912));
	thx.color.NamedColors.byName.set("midnight blue",thx.color.NamedColors.midnightblue);
	thx.color.NamedColors.byName.set("mintcream",thx.color.NamedColors.mintcream = thx.color.Rgb.fromInt(16121850));
	thx.color.NamedColors.byName.set("mint cream",thx.color.NamedColors.mintcream);
	thx.color.NamedColors.byName.set("mistyrose",thx.color.NamedColors.mistyrose = thx.color.Rgb.fromInt(16770273));
	thx.color.NamedColors.byName.set("misty rose",thx.color.NamedColors.mistyrose);
	thx.color.NamedColors.byName.set("moccasin",thx.color.NamedColors.moccasin = thx.color.Rgb.fromInt(16770229));
	thx.color.NamedColors.byName.set("navajowhite",thx.color.NamedColors.navajowhite = thx.color.Rgb.fromInt(16768685));
	thx.color.NamedColors.byName.set("navajo white",thx.color.NamedColors.navajowhite);
	thx.color.NamedColors.byName.set("navy",thx.color.NamedColors.navy = thx.color.Rgb.fromInt(128));
	thx.color.NamedColors.byName.set("oldlace",thx.color.NamedColors.oldlace = thx.color.Rgb.fromInt(16643558));
	thx.color.NamedColors.byName.set("old lace",thx.color.NamedColors.oldlace);
	thx.color.NamedColors.byName.set("olive",thx.color.NamedColors.olive = thx.color.Rgb.fromInt(8421376));
	thx.color.NamedColors.byName.set("olivedrab",thx.color.NamedColors.olivedrab = thx.color.Rgb.fromInt(7048739));
	thx.color.NamedColors.byName.set("olive drab",thx.color.NamedColors.olivedrab);
	thx.color.NamedColors.byName.set("orange",thx.color.NamedColors.orange = thx.color.Rgb.fromInt(16753920));
	thx.color.NamedColors.byName.set("orangered",thx.color.NamedColors.orangered = thx.color.Rgb.fromInt(16729344));
	thx.color.NamedColors.byName.set("orangered",thx.color.NamedColors.orangered);
	thx.color.NamedColors.byName.set("orchid",thx.color.NamedColors.orchid = thx.color.Rgb.fromInt(14315734));
	thx.color.NamedColors.byName.set("palegoldenrod",thx.color.NamedColors.palegoldenrod = thx.color.Rgb.fromInt(15657130));
	thx.color.NamedColors.byName.set("pale golden rod",thx.color.NamedColors.palegoldenrod);
	thx.color.NamedColors.byName.set("palegreen",thx.color.NamedColors.palegreen = thx.color.Rgb.fromInt(10025880));
	thx.color.NamedColors.byName.set("pale green",thx.color.NamedColors.palegreen);
	thx.color.NamedColors.byName.set("paleturquoise",thx.color.NamedColors.paleturquoise = thx.color.Rgb.fromInt(11529966));
	thx.color.NamedColors.byName.set("pale turquoise",thx.color.NamedColors.paleturquoise);
	thx.color.NamedColors.byName.set("palevioletred",thx.color.NamedColors.palevioletred = thx.color.Rgb.fromInt(14381203));
	thx.color.NamedColors.byName.set("pale violet red",thx.color.NamedColors.palevioletred);
	thx.color.NamedColors.byName.set("papayawhip",thx.color.NamedColors.papayawhip = thx.color.Rgb.fromInt(16773077));
	thx.color.NamedColors.byName.set("papaya whip",thx.color.NamedColors.papayawhip);
	thx.color.NamedColors.byName.set("peachpuff",thx.color.NamedColors.peachpuff = thx.color.Rgb.fromInt(16767673));
	thx.color.NamedColors.byName.set("peach puff",thx.color.NamedColors.peachpuff);
	thx.color.NamedColors.byName.set("peru",thx.color.NamedColors.peru = thx.color.Rgb.fromInt(13468991));
	thx.color.NamedColors.byName.set("pink",thx.color.NamedColors.pink = thx.color.Rgb.fromInt(16761035));
	thx.color.NamedColors.byName.set("plum",thx.color.NamedColors.plum = thx.color.Rgb.fromInt(14524637));
	thx.color.NamedColors.byName.set("powderblue",thx.color.NamedColors.powderblue = thx.color.Rgb.fromInt(11591910));
	thx.color.NamedColors.byName.set("powder blue",thx.color.NamedColors.powderblue);
	thx.color.NamedColors.byName.set("purple",thx.color.NamedColors.purple = thx.color.Rgb.fromInt(8388736));
	thx.color.NamedColors.byName.set("red",thx.color.NamedColors.red = thx.color.Rgb.fromInt(16711680));
	thx.color.NamedColors.byName.set("rosybrown",thx.color.NamedColors.rosybrown = thx.color.Rgb.fromInt(12357519));
	thx.color.NamedColors.byName.set("rosy brown",thx.color.NamedColors.rosybrown);
	thx.color.NamedColors.byName.set("royalblue",thx.color.NamedColors.royalblue = thx.color.Rgb.fromInt(4286945));
	thx.color.NamedColors.byName.set("royal blue",thx.color.NamedColors.royalblue);
	thx.color.NamedColors.byName.set("saddlebrown",thx.color.NamedColors.saddlebrown = thx.color.Rgb.fromInt(9127187));
	thx.color.NamedColors.byName.set("saddle brown",thx.color.NamedColors.saddlebrown);
	thx.color.NamedColors.byName.set("salmon",thx.color.NamedColors.salmon = thx.color.Rgb.fromInt(16416882));
	thx.color.NamedColors.byName.set("sandybrown",thx.color.NamedColors.sandybrown = thx.color.Rgb.fromInt(16032864));
	thx.color.NamedColors.byName.set("sandy brown",thx.color.NamedColors.sandybrown);
	thx.color.NamedColors.byName.set("seagreen",thx.color.NamedColors.seagreen = thx.color.Rgb.fromInt(3050327));
	thx.color.NamedColors.byName.set("sea green",thx.color.NamedColors.seagreen);
	thx.color.NamedColors.byName.set("seashell",thx.color.NamedColors.seashell = thx.color.Rgb.fromInt(16774638));
	thx.color.NamedColors.byName.set("sea shell",thx.color.NamedColors.seashell);
	thx.color.NamedColors.byName.set("sienna",thx.color.NamedColors.sienna = thx.color.Rgb.fromInt(10506797));
	thx.color.NamedColors.byName.set("silver",thx.color.NamedColors.silver = thx.color.Rgb.fromInt(12632256));
	thx.color.NamedColors.byName.set("skyblue",thx.color.NamedColors.skyblue = thx.color.Rgb.fromInt(8900331));
	thx.color.NamedColors.byName.set("sky blue",thx.color.NamedColors.skyblue);
	thx.color.NamedColors.byName.set("slateblue",thx.color.NamedColors.slateblue = thx.color.Rgb.fromInt(6970061));
	thx.color.NamedColors.byName.set("slate blue",thx.color.NamedColors.slateblue);
	thx.color.NamedColors.byName.set("slategray",thx.color.NamedColors.slategray = thx.color.NamedColors.slategrey = thx.color.Rgb.fromInt(7372944));
	thx.color.NamedColors.byName.set("slate gray",thx.color.NamedColors.slategray);
	thx.color.NamedColors.byName.set("slategrey",thx.color.NamedColors.slategrey);
	thx.color.NamedColors.byName.set("slate grey",thx.color.NamedColors.slategrey);
	thx.color.NamedColors.byName.set("snow",thx.color.NamedColors.snow = thx.color.Rgb.fromInt(16775930));
	thx.color.NamedColors.byName.set("springgreen",thx.color.NamedColors.springgreen = thx.color.Rgb.fromInt(65407));
	thx.color.NamedColors.byName.set("spring green",thx.color.NamedColors.springgreen);
	thx.color.NamedColors.byName.set("steelblue",thx.color.NamedColors.steelblue = thx.color.Rgb.fromInt(4620980));
	thx.color.NamedColors.byName.set("steel blue",thx.color.NamedColors.steelblue);
	thx.color.NamedColors.byName.set("tan",thx.color.NamedColors.tan = thx.color.Rgb.fromInt(13808780));
	thx.color.NamedColors.byName.set("teal",thx.color.NamedColors.teal = thx.color.Rgb.fromInt(32896));
	thx.color.NamedColors.byName.set("thistle",thx.color.NamedColors.thistle = thx.color.Rgb.fromInt(14204888));
	thx.color.NamedColors.byName.set("tomato",thx.color.NamedColors.tomato = thx.color.Rgb.fromInt(16737095));
	thx.color.NamedColors.byName.set("turquoise",thx.color.NamedColors.turquoise = thx.color.Rgb.fromInt(4251856));
	thx.color.NamedColors.byName.set("violet",thx.color.NamedColors.violet = thx.color.Rgb.fromInt(15631086));
	thx.color.NamedColors.byName.set("wheat",thx.color.NamedColors.wheat = thx.color.Rgb.fromInt(16113331));
	thx.color.NamedColors.byName.set("white",thx.color.NamedColors.white = thx.color.Rgb.fromInt(16777215));
	thx.color.NamedColors.byName.set("whitesmoke",thx.color.NamedColors.whitesmoke = thx.color.Rgb.fromInt(16119285));
	thx.color.NamedColors.byName.set("white smoke",thx.color.NamedColors.whitesmoke);
	thx.color.NamedColors.byName.set("yellow",thx.color.NamedColors.yellow = thx.color.Rgb.fromInt(16776960));
	thx.color.NamedColors.byName.set("yellowgreen",thx.color.NamedColors.yellowgreen = thx.color.Rgb.fromInt(10145074));
	thx.color.NamedColors.byName.set("yellow green",thx.color.NamedColors.yellowgreen);
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	$hxClasses["Math"] = Math;
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
{
	String.prototype.__class__ = $hxClasses["String"] = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = $hxClasses["Array"] = Array;
	Array.__name__ = ["Array"];
	Int = $hxClasses["Int"] = { __name__ : ["Int"]};
	Dynamic = $hxClasses["Dynamic"] = { __name__ : ["Dynamic"]};
	Float = $hxClasses["Float"] = Number;
	Float.__name__ = ["Float"];
	Bool = $hxClasses["Bool"] = { __ename__ : ["Bool"]};
	Class = $hxClasses["Class"] = { __name__ : ["Class"]};
	Enum = { };
	Void = $hxClasses["Void"] = { __ename__ : ["Void"]};
}
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
window.requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { setTimeout(callback, 1000 / 60); } ;
thx.languages.En.getLanguage();
thx.cultures.EnUS.getCulture();
rg.svg.util.SymbolCache.cache = new rg.svg.util.SymbolCache();
{
	rg.visualization.Visualizations.layoutDefault = new Hash();
	rg.visualization.Visualizations.layoutType = new Hash();
	rg.visualization.Visualizations.layoutArgs = new Hash();
	rg.visualization.Visualizations.layoutDefault.set("barchart","cartesian");
	rg.visualization.Visualizations.layoutDefault.set("funnelchart","simple");
	rg.visualization.Visualizations.layoutDefault.set("geo","simple");
	rg.visualization.Visualizations.layoutDefault.set("heatgrid","cartesian");
	rg.visualization.Visualizations.layoutDefault.set("linechart","cartesian");
	rg.visualization.Visualizations.layoutDefault.set("piechart","simple");
	rg.visualization.Visualizations.layoutDefault.set("sankey","simple");
	rg.visualization.Visualizations.layoutDefault.set("scattergraph","cartesian");
	rg.visualization.Visualizations.layoutDefault.set("streamgraph","x");
	rg.visualization.Visualizations.layoutType.set("cartesian",rg.layout.LayoutCartesian);
	rg.visualization.Visualizations.layoutType.set("simple",rg.layout.LayoutSimple);
	rg.visualization.Visualizations.layoutType.set("x",rg.layout.LayoutX);
}
{
	var JSON;
	if(null != (JSON = JSON)) {
		thx.json.Json.nativeDecoder = JSON.parse;
		thx.json.Json.nativeEncoder = JSON.stringify;
	}
}
{
	var useragent = thx.js.ClientHost.userAgent(), hasnavigator = thx.js.ClientHost.hasNavigator(), pattern;
	thx.js.ClientHost.host = !hasnavigator?thx.js.HostType.UnknownServer:typeof module !== 'undefined' && module.exports?thx.js.HostType.NodeJs:(pattern = new EReg("MSIE(?:/| )(\\S*);","")).match(useragent)?thx.js.HostType.IE(pattern.matched(1)):(pattern = new EReg("Firefox(?:/| )(\\S*)","")).match(useragent)?thx.js.HostType.Firefox(pattern.matched(1)):(pattern = new EReg("Chrome(?:/| )(\\S*)","")).match(useragent)?thx.js.HostType.Chrome(pattern.matched(1)):(pattern = new EReg("Version(?:/| )(\\S*) Safari(?:/| )(\\S*)","")).match(useragent)?thx.js.HostType.Safari(pattern.matched(1)):(pattern = new EReg("Opera(?:/| )(\\S*)","")).match(useragent)?thx.js.HostType.Opera(pattern.matched(1)):thx.js.HostType.Unknown(useragent);
	thx.js.ClientHost.os = !hasnavigator?thx.js.OSType.UnknownOs:(pattern = new EReg("Windows NT\\s+(\\d+\\.\\d+)","")).match(useragent)?(function($this) {
		var $r;
		var version = (function($this) {
			var $r;
			switch(pattern.matched(1)) {
			case "5.1":
				$r = "XP";
				break;
			case "5.2":
				$r = "2003/XP x64";
				break;
			case "6.0":
				$r = "Vista";
				break;
			case "6.1":
				$r = "7";
				break;
			case "6.2":
				$r = "8";
				break;
			default:
				$r = "unknown";
			}
			return $r;
		}($this));
		$r = thx.js.OSType.Windows(version);
		return $r;
	}(this)):new EReg("Mac OS X","").match(useragent)?thx.js.OSType.Mac:new EReg("(iPhone|iPad|iPod)","").match(useragent)?thx.js.OSType.IOs:new EReg("Linux","").match(useragent)?thx.js.OSType.Linux:new EReg("Android","").match(useragent)?thx.js.OSType.Android:thx.js.OSType.UnknownOs;
	thx.js.ClientHost.environment = (function($this) {
		var $r;
		switch( (thx.js.ClientHost.host)[1] ) {
		case 0:
			$r = thx.js.EnvironmentType.Server;
			break;
		case 1:
			$r = thx.js.EnvironmentType.Server;
			break;
		case 2:
		case 6:
		case 3:
			$r = thx.js.EnvironmentType.Desktop;
			break;
		case 4:
			$r = (function($this) {
				var $r;
				switch( (thx.js.ClientHost.os)[1] ) {
				case 1:
					$r = thx.js.EnvironmentType.Mobile;
					break;
				default:
					$r = thx.js.EnvironmentType.Desktop;
				}
				return $r;
			}($this));
			break;
		case 5:
			$r = (function($this) {
				var $r;
				switch( (thx.js.ClientHost.os)[1] ) {
				case 2:
					$r = thx.js.EnvironmentType.Mobile;
					break;
				default:
					$r = thx.js.EnvironmentType.Desktop;
				}
				return $r;
			}($this));
			break;
		case 7:
			$r = (function($this) {
				var $r;
				switch( (thx.js.ClientHost.os)[1] ) {
				case 5:
					$r = thx.js.EnvironmentType.UnknownEnvironment;
					break;
				default:
					$r = thx.js.EnvironmentType.Desktop;
				}
				return $r;
			}($this));
			break;
		}
		return $r;
	}(this));
}
js["XMLHttpRequest"] = window.XMLHttpRequest?XMLHttpRequest:window.ActiveXObject?function() {
	try {
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch( e ) {
		try {
			return new ActiveXObject("Microsoft.XMLHTTP");
		} catch( e1 ) {
			throw "Unable to create XMLHttpRequest object.";
		}
	}
}:(function($this) {
	var $r;
	throw "Unable to create XMLHttpRequest object.";
	return $r;
}(this));
{
	var dbits;
	var j_lm;
	var canary = 0xdeadbeefcafe;
	j_lm = (canary & 16777215) == 15715070;
	var browser = window.navigator.appName;
	if(j_lm && browser == "Microsoft Internet Explorer") dbits = 30; else if(j_lm && browser != "Netscape") dbits = 26; else dbits = 28;
	switch(dbits) {
	case 30:
		math.BigInteger.defaultAm = 2;
		break;
	case 28:
		math.BigInteger.defaultAm = 3;
		break;
	case 26:
		math.BigInteger.defaultAm = 1;
		break;
	default:
		throw "bad dbits value";
	}
	math.BigInteger.DB = dbits;
	math.BigInteger.DM = (1 << math.BigInteger.DB) - 1;
	math.BigInteger.DV = 1 << math.BigInteger.DB;
	math.BigInteger.BI_FP = 52;
	math.BigInteger.FV = Math.pow(2,math.BigInteger.BI_FP);
	math.BigInteger.F1 = math.BigInteger.BI_FP - math.BigInteger.DB;
	math.BigInteger.F2 = 2 * math.BigInteger.DB - math.BigInteger.BI_FP;
	math.BigInteger.initBiRc();
	math.BigInteger.BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
	math.BigInteger.lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509];
	math.BigInteger.lplim = Std["int"](67108864 / math.BigInteger.lowprimes[math.BigInteger.lowprimes.length - 1]);
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = $hxClasses["Date"] = d;
	d.__name__ = ["Date"];
}
{
	/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;
	
	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];
		
			parts.push( m[1] );
		
			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}
				
				set = posProcess( selector, set );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var match,
			type = Expr.order[i];
		
		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				var found, item,
					filter = Expr.filter[ type ],
					left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw "Syntax error, unrecognized expression: " + msg;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},
	
	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},
		
		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}
			
			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return "checkbox" === elem.type;
		},

		file: function( elem ) {
			return "file" === elem.type;
		},
		password: function( elem ) {
			return "password" === elem.type;
		},

		submit: function( elem ) {
			return "submit" === elem.type;
		},

		image: function( elem ) {
			return "image" === elem.type;
		},

		reset: function( elem ) {
			return "reset" === elem.type;
		},

		button: function( elem ) {
			return "button" === elem.type || elem.nodeName.toLowerCase() === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || Sizzle.getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					if ( type === "first" ) {
						return true;
					}

					node = elem;

				case "last":
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					return true;

				case "nth":
					var first = match[2],
						last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}
					
					var doneName = match[0],
						parent = elem.parentNode;
	
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}

						parent.sizcache = doneName;
					}
					
					var diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
		},
		
		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// If the nodes are siblings (or identical) we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;
		}

		var cur = a.nextSibling;

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Utility function for retreiving the text value of an array of DOM nodes
Sizzle.getText = function( elems ) {
	var ret = "", elem;

	for ( var i = 0; elems[i]; i++ ) {
		elem = elems[i];

		// Get the text from text nodes and CDATA nodes
		if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
			ret += elem.nodeValue;

		// Traverse everything else, except comment nodes
		} else if ( elem.nodeType !== 8 ) {
			ret += Sizzle.getText( elem.childNodes );
		}
	}

	return ret;
};

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}
	
		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );
				
				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );
					
					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}
				
				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );
						
					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}
							
						} else {
							return makeArray( [], extra );
						}
					}
					
					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}
		
			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );
	
		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try {
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}
	
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;
			
			elem = elem[dir];

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE

window.Sizzle = Sizzle;

})();;
	var s = (window.Sizzle || (jQuery && jQuery.find) || ($ && $.find));
	thx.js.Sizzle = s;
	thx.js.Sizzle.select = s;
}
{
	var bb = new BytesBuffer();
	BytesUtil.EMPTY = bb.getBytes();
}
if(typeof(haxe_timers) == "undefined") haxe_timers = [];
thx.error.Error.errorPositionPattern = "{0}.{1}({2}): ";
rg.graph.Graphs.id = 0;
Ints._reparse = new EReg("^([+-])?\\d+$","");
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
Floats._reparse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
thx.math.scale.Linears._default_color = new thx.color.Hsl(0,0,0);
js.Lib.onerror = null;
thx.js.Dom.doc = (function() {
	var g = new thx.js.Group([js.Lib.document]), gs = thx.js.Selection.create([g]);
	g.parentNode = gs.parentNode = js.Lib.document.documentElement;
	return gs;
})();
thx.js.Dom.selectionEngine = new thx.js.SizzleEngine();
chx.text.Sprintf.kPAD_ZEROES = 1;
chx.text.Sprintf.kLEFT_ALIGN = 2;
chx.text.Sprintf.kSHOW_SIGN = 4;
chx.text.Sprintf.kPAD_POS = 8;
chx.text.Sprintf.kALT_FORM = 16;
chx.text.Sprintf.kLONG_VALUE = 32;
chx.text.Sprintf.kUSE_SEPARATOR = 64;
chx.text.Sprintf.DEBUG = false;
chx.text.Sprintf.TRACE = false;
thx.js.Timer.timeout = 0;
thx.js.Timer.queue = null;
thx.js.Timer.interval = 0;
thx.js.Timer._step = thx.js.Timer.step;
thx.text.ERegs._escapePattern = new EReg("[*+?|{[()^$.# \\\\]","");
rg.util.Periodicity.validPeriods = ["minute","hour","day","week","month","year","eternity"];
rg.util.Periodicity.validGroupValues = ["hour","day","week","month","year"];
thx.date.DateParser.daynumeric = "0?[1-9]|[1-2][0-9]|3[0-1]";
thx.date.DateParser.months = thx.cultures.EnUS.getCulture().date.months.slice(0,-1).map(function(d,i) {
	return d.toLowerCase();
});
thx.date.DateParser.shortmonths = thx.cultures.EnUS.getCulture().date.abbrMonths.slice(0,-1).map(function(d,i) {
	return d.toLowerCase();
});
thx.date.DateParser.days = thx.cultures.EnUS.getCulture().date.days.map(function(d,i) {
	return d.toLowerCase();
});
thx.date.DateParser.shortdays = thx.cultures.EnUS.getCulture().date.abbrDays.map(function(d,i) {
	return d.toLowerCase();
});
thx.date.DateParser.sfullmonths = thx.date.DateParser.months.join("|");
thx.date.DateParser.sshortmonths = thx.date.DateParser.shortmonths.join("|");
thx.date.DateParser.sfulldays = thx.date.DateParser.days.join("|");
thx.date.DateParser.sshortdays = thx.date.DateParser.shortdays.join("|");
thx.date.DateParser.day = "(0?[0-9]|[1-2][0-9]|3[0-1])(?:st|nd|rd|th)?";
thx.date.DateParser.month = "(?:0?[1-9]|1[0-2])";
thx.date.DateParser.hour = "(?:0?[0-9]|1[0-9]|2[0-3])";
thx.date.DateParser.hhour = "(?:0[0-9]|1[0-2])";
thx.date.DateParser.hohour = "(?:0?[0-9]|1[0-2])";
thx.date.DateParser.fminsec = "(?:0[0-9]|[1-5][0-9])";
thx.date.DateParser.minsec = "(?:0?[0-9]|[1-5][0-9])";
thx.date.DateParser.ampm = "(?:(?:in\\s+the\\s+)?(am|pm|evening|morning|afternoon))";
thx.date.DateParser.daypart = "(?:(?:in\\s+the\\s+)?(evening|morning|afternoon|sunsrise|sunset|dawn|dusk|noon|mid-day|midday|mid-night|midnight))";
thx.date.DateParser.period = "minute|minutes|hour|hours|day|days|week|weeks|month|months|year|years|second|seconds";
thx.date.DateParser.dateexp = new EReg("(?:(?:" + "\\b(" + thx.date.DateParser.sfullmonths + ")\\s+" + thx.date.DateParser.day + "(?:\\s*,\\s*(\\d{2,4}))?\\b" + ")|(?:" + "\\b(" + thx.date.DateParser.sshortmonths + ")\\s+" + thx.date.DateParser.day + "(?:\\s*,?\\s*(\\d{2,4}))?\\b" + ")|(?:" + "\\b" + thx.date.DateParser.day + "\\s+(" + thx.date.DateParser.sfullmonths + ")(?:\\s+(\\d{2,4}))?\\b" + ")|(?:" + "\\b" + thx.date.DateParser.day + "\\s+(" + thx.date.DateParser.sshortmonths + ")(?:\\s+(\\d{2,4}))?\\b" + ")|(?:" + "\\b(?:" + thx.date.DateParser.day + "\\s+)?(" + thx.date.DateParser.sfullmonths + ")\\s+(\\d{2,4})\\b" + ")|(?:" + "\\b(?:" + thx.date.DateParser.day + "\\s+)?(" + thx.date.DateParser.sshortmonths + ")\\s+(\\d{2,4})\\b" + ")|(?:" + "\\b(" + thx.date.DateParser.month + ")/" + thx.date.DateParser.day + "(?:/(\\d{2,4}))?\\b" + ")|(?:" + "\\b" + thx.date.DateParser.day + "/(" + thx.date.DateParser.month + ")(?:/(\\d{2,4}))?\\b" + ")|(?:" + "\\b(\\d{2,4})-(" + thx.date.DateParser.month + ")-" + thx.date.DateParser.day + "\\b" + ")|(?:" + "^\\s*" + thx.date.DateParser.day + "\\s*$" + "))","i");
thx.date.DateParser.absdateexp = new EReg("(?:(?:" + "\\b(today|now|this\\s+second|tomorrow|yesterday)\\b" + ")|(?:" + "\\b(?:(next|last|this)\\s+)?(" + thx.date.DateParser.sfullmonths + ")\\b" + ")|(?:" + "\\b(?:(next|last|this)\\s+)?(" + thx.date.DateParser.sfulldays + ")\\b" + ")|(?:" + "\\b(?:(next|last|this)\\s+)?(" + thx.date.DateParser.sshortmonths + ")\\b" + ")|(?:" + "\\b(?:(next|last|this)\\s+)?(" + thx.date.DateParser.sshortdays + ")\\b" + "))","i");
thx.date.DateParser.relexp = new EReg("(?:(?:" + "\\b(plus\\s+|minus\\s|\\+|-|in)\\s*(\\d+)?\\s+(" + thx.date.DateParser.period + ")\\b" + ")|(?:" + "\\b(\\d+)?\\s+(" + thx.date.DateParser.period + ")\\s+(from|before|hence|after|ago)?\\b" + "))","i");
thx.date.DateParser.timeexp = new EReg("(?:\\bat\\s+)?" + "(?:(?:" + "\\b(" + thx.date.DateParser.hohour + "):(" + thx.date.DateParser.minsec + ")\\s*" + thx.date.DateParser.ampm + "\\b" + ")|(?:" + "\\b(" + thx.date.DateParser.hour + "):(" + thx.date.DateParser.minsec + ")(?:[:](" + thx.date.DateParser.minsec + ")(?:\\.(\\d+))?)?\\b" + ")|(?:" + "(?:^|\\s+)(" + thx.date.DateParser.hhour + ")(" + thx.date.DateParser.fminsec + ")\\s*" + thx.date.DateParser.ampm + "?(?:\\s+|$)" + ")|(?:" + "\\b(" + thx.date.DateParser.hohour + ")\\s*" + thx.date.DateParser.ampm + "\\b" + ")|(?:" + "\\b" + thx.date.DateParser.daypart + "\\b" + "))","i");
rg.html.widget.DownloaderMenu.DEFAULT_FORMATS = ["png","jpg","pdf"];
rg.html.widget.DownloaderMenu.DEFAULT_TITLE = "Download";
thx.js.Svg._usepage = new EReg("WebKit","").match(js.Lib.window.navigator.userAgent);
thx.math.Const.TWO_PI = 6.283185307179586477;
thx.math.Const.PI = 3.141592653589793238;
thx.math.Const.HALF_PI = 1.570796326794896619;
thx.math.Const.TO_DEGREE = 57.29577951308232088;
thx.math.Const.TO_RADIAN = 0.01745329251994329577;
thx.math.Const.LN10 = 2.302585092994046;
rg.svg.util.SymbolCache.DEFAULT_SYMBOL = "circle";
rg.layout.LayoutCartesian.ALT_RIGHT = 20;
rg.layout.LayoutCartesian.ALT_LEFT = 20;
rg.layout.LayoutCartesian.ALT_TOP = 8;
rg.layout.LayoutCartesian.ALT_BOTTOM = 8;
rg.layout.LayoutCartesian.REYAXIS = new EReg("^y(\\d+)$","");
rg.layout.LayoutCartesian.REYINDEX = new EReg("^y(\\d+)","");
rg.layout.LayoutCartesian.REYTITLE = new EReg("^y(\\d+)title$","");
rg.layout.LayoutX.ALT_RIGHT = 20;
rg.layout.LayoutX.ALT_LEFT = 20;
rg.layout.LayoutX.ALT_TOP = 8;
rg.layout.LayoutX.ALT_BOTTOM = 8;
rg.visualization.Visualizations.html = ["pivottable","leaderboard"];
rg.visualization.Visualizations.svg = ["barchart","geo","funnelchart","heatgrid","linechart","piechart","scattergraph","streamgraph","sankey"];
rg.visualization.Visualizations.visualizations = rg.visualization.Visualizations.svg.concat(rg.visualization.Visualizations.html);
rg.visualization.Visualizations.layouts = ["simple","cartesian","x"];
Strings._re = new EReg("[{](\\d+)(?::[^}]*)?[}]","m");
Strings._reSplitWC = new EReg("(\r\n|\n\r|\n|\r)","g");
Strings._reReduceWS = new EReg("\\s+","");
Strings._reStripTags = new EReg("(<[a-z]+[^>/]*/?>|</[a-z]+>)","i");
Strings._reFormat = new EReg("{(\\d+)(?::([a-zA-Z]+))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?}","m");
Strings._reCollapse = new EReg("\\s+","g");
Strings.__ucwordsPattern = new EReg("[^a-zA-Z]([a-z])","");
Strings.__ucwordswsPattern = new EReg("\\s([a-z])","");
Strings.__alphaNumPattern = new EReg("^[a-z0-9]+$","i");
Strings.__digitsPattern = new EReg("^[0-9]+$","");
Strings._reInterpolateNumber = new EReg("[-+]?(?:\\d+\\.\\d+|\\d+\\.|\\.\\d+|\\d+)(?:[eE][-]?\\d+)?","");
rg.util.RGStrings.range = new EReg("(\\d+(?:\\.\\d+)?|\\.\\d+)?-(\\d+(?:\\.\\d+|\\.\\d+)?)?","");
rg.factory.FactoryLayout.LIMIT_WIDTH = 10;
rg.factory.FactoryLayout.LIMIT_HEIGHT = 10;
rg.factory.FactoryLayout.DEFAULT_WIDTH = 400;
rg.factory.FactoryLayout.DEFAULT_HEIGHT = 300;
thx.geom.Contour.contourDx = [1,0,1,1,-1,0,-1,1,0,0,0,0,-1,0,-1,null];
thx.geom.Contour.contourDy = [0,-1,0,0,0,-1,0,0,1,-1,1,1,0,-1,0,null];
thx.js.AccessAttribute.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
rg.html.widget.Tooltip.DEFAULT_DISTANCE = 8;
rg.RGConst.BASE_URL_GEOJSON = "/rg/vis/geo/json/";
rg.RGConst.SERVICE_RENDERING_STATIC = "/rg/services/viz/renderer/";
rg.RGConst.TRACKING_TOKEN = "SUPERFAKETOKEN";
rg.util.Properties.TIME_TOKEN = "time:";
DateTools.WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
DateTools.WEEKDAYS_ABBREV = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
DateTools.MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
DateTools.MONTHS_ABBREV = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
rg.svg.chart.StreamGraph.vid = 0;
I32.ZERO = 0;
I32.ONE = 1;
I32.BYTE_MASK = 255;
rg.info.InfoPivotTable.defaultStartColor = new thx.color.Hsl(210,1,1);
rg.info.InfoPivotTable.defaultEndColor = new thx.color.Hsl(210,1,0.5);
rg.axis.AxisTime.snapping = { minute : [{ to : 10, s : 1},{ to : 20, s : 2},{ to : 30, s : 5},{ to : 60, s : 10},{ to : 120, s : 30},{ to : 240, s : 60},{ to : 960, s : 240}], minutetop : 480, hour : [{ to : 12, s : 1},{ to : 24, s : 6},{ to : 60, s : 12},{ to : 240, s : 24},{ to : 480, s : 48},{ to : 960, s : 120}], hourtop : 240, month : [{ to : 13, s : 1},{ to : 25, s : 2},{ to : 49, s : 4},{ to : 73, s : 6}], monthtop : 12, year : [{ to : 10, s : 1},{ to : 20, s : 2},{ to : 50, s : 5}], yeartop : 10};
rg.html.widget.Logo._id = 0;
rg.html.widget.Logo.LOGO_WIDTH = 194;
rg.html.widget.Logo.LOGO_HEIGHT = 29;
Constants.DIGITS_BASE10 = "0123456789";
Constants.DIGITS_HEXU = "0123456789ABCDEF";
Constants.DIGITS_HEXL = "0123456789abcdef";
Constants.DIGITS_OCTAL = "01234567";
Constants.DIGITS_BN = "0123456789abcdefghijklmnopqrstuvwxyz";
Constants.DIGITS_BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
Constants.PROTO_HTTP = "http://";
Constants.PROTO_HTTPS = "http://";
Constants.PROTO_FILE = "file://";
Constants.PROTO_FTP = "ftp://";
Constants.PROTO_RTMP = "rtmp://";
math.BigInteger.MAX_RADIX = 36;
math.BigInteger.MIN_RADIX = 2;
rg.html.chart.PivotTable.defaultColorStart = new thx.color.Hsl(210,1,1);
rg.html.chart.PivotTable.defaultColorEnd = new thx.color.Hsl(210,1,0.5);
thx.js.AccessStyle.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
thx.js.BaseTransition._id = 0;
thx.js.BaseTransition._inheritid = 0;
rg.interactive.Downloader.ALLOWED_FORMATS = ["png","pdf","jpg"];
rg.interactive.Downloader.ERROR_PREFIX = "ERROR:";
thx.xml.Namespace.prefix = (function() {
	var h = new Hash();
	h.set("svg","http://www.w3.org/2000/svg");
	h.set("xhtml","http://www.w3.org/1999/xhtml");
	h.set("xlink","http://www.w3.org/1999/xlink");
	h.set("xml","http://www.w3.org/XML/1998/namespace");
	h.set("xmlns","http://www.w3.org/2000/xmlns/");
	return h;
})();
rg.app.charts.App.lastid = 0;
rg.util.Decrypt.modulus = "00:ca:a7:37:07:b0:26:63:cb:f1:37:9d:e9:cc:c1:bd:f1:57:f5:90:72:4d:74:e2:5f:33:df:6c:c4:e4:7f:95:3c:87:89:ed:3c:60:cc:b0:15:f9:ad:57:77:52:4b:25:9b:c8:f9:d0:8a:b8:0a:ab:17:3d:7c:cf:1d:19:a3:8c:43:9b:ee:5b:2e:9e:45:18:b3:97:2a:91:c2:90:c2:1e:49:a3:5e:b1:48:09:1c:ee:06:b9:6e:ec:22:e6:2d:06:b8:b4:22:5f:4d:5e:81:6a:91:13:30:5d:6c:b5:7c:cc:fa:47:dc:8e:b4:f3:fd:0a:6e:d2:f8:09:3c:b1:c2:90:19";
rg.util.Decrypt.publicExponent = "3";
math.IEEE754.bias = 1024;
math.IEEE754.cnst = 2102;
thx.svg.LineInternals.arcOffset = -Math.PI / 2;
thx.svg.LineInternals.arcMax = 2 * Math.PI - 1e-6;
thx.svg.LineInternals._lineBasisBezier1 = [0,2 / 3,1 / 3,0];
thx.svg.LineInternals._lineBasisBezier2 = [0,1 / 3,2 / 3,0];
thx.svg.LineInternals._lineBasisBezier3 = [0,1 / 6,2 / 3,1 / 6];
thx.color.Colors._reParse = new EReg("^(?:(hsl|rgb|rgba|cmyk)\\(([^)]+)\\))|(?:(?:0x|#)([a-f0-9]{3,6}))$","i");
rg.svg.chart.Coords.retransform = new EReg("translate\\(\\s*(\\d+(?:\\.\\d+)?)\\s*(?:[, ]\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)","");
thx.svg.Symbol.sqrt3 = Math.sqrt(3);
thx.svg.Symbol.tan30 = Math.tan(30 * Math.PI / 180);
rg.app.charts.JSBridge.main()