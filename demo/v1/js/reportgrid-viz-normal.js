$estr = function() { return js.Boot.__string_rec(this,''); }
if(typeof rg=='undefined') rg = {}
if(!rg.view) rg.view = {}
if(!rg.view.svg) rg.view.svg = {}
if(!rg.view.svg.widget) rg.view.svg.widget = {}
rg.view.svg.widget.BalloonShape = function() { }
rg.view.svg.widget.BalloonShape.__name__ = ["rg","view","svg","widget","BalloonShape"];
rg.view.svg.widget.BalloonShape.shape = function(width,height,rc,rp,side,offset) {
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
rg.view.svg.widget.BalloonShape.prototype.__class__ = rg.view.svg.widget.BalloonShape;
if(!rg.data) rg.data = {}
if(!rg.data.source) rg.data.source = {}
if(!rg.data.source.rgquery) rg.data.source.rgquery = {}
rg.data.source.rgquery.QExp = { __ename__ : ["rg","data","source","rgquery","QExp"], __constructs__ : ["Time","Property","Event"] }
rg.data.source.rgquery.QExp.Time = function(periodicity) { var $x = ["Time",0,periodicity]; $x.__enum__ = rg.data.source.rgquery.QExp; $x.toString = $estr; return $x; }
rg.data.source.rgquery.QExp.Property = function(name,limit,descending) { var $x = ["Property",1,name,limit,descending]; $x.__enum__ = rg.data.source.rgquery.QExp; $x.toString = $estr; return $x; }
rg.data.source.rgquery.QExp.Event = ["Event",2];
rg.data.source.rgquery.QExp.Event.toString = $estr;
rg.data.source.rgquery.QExp.Event.__enum__ = rg.data.source.rgquery.QExp;
rg.data.source.rgquery.QCondition = { __ename__ : ["rg","data","source","rgquery","QCondition"], __constructs__ : ["Equality"] }
rg.data.source.rgquery.QCondition.Equality = function(property,v) { var $x = ["Equality",0,property,v]; $x.__enum__ = rg.data.source.rgquery.QCondition; $x.toString = $estr; return $x; }
rg.data.source.rgquery.QOperation = { __ename__ : ["rg","data","source","rgquery","QOperation"], __constructs__ : ["Count"] }
rg.data.source.rgquery.QOperation.Count = ["Count",0];
rg.data.source.rgquery.QOperation.Count.toString = $estr;
rg.data.source.rgquery.QOperation.Count.__enum__ = rg.data.source.rgquery.QOperation;
if(typeof thx=='undefined') thx = {}
if(!thx.collection) thx.collection = {}
thx.collection.Set = function(p) {
	if( p === $_ ) return;
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
thx.collection.Set.prototype.length = null;
thx.collection.Set.prototype._v = null;
thx.collection.Set.prototype.add = function(v) {
	this._v.remove(v);
	this._v.push(v);
	this.length = this._v.length;
}
thx.collection.Set.prototype.remove = function(v) {
	var t = this._v.remove(v);
	this.length = this._v.length;
	return t;
}
thx.collection.Set.prototype.exists = function(v) {
	var _g = 0, _g1 = this._v;
	while(_g < _g1.length) {
		var t = _g1[_g];
		++_g;
		if(t == v) return true;
	}
	return false;
}
thx.collection.Set.prototype.iterator = function() {
	return this._v.iterator();
}
thx.collection.Set.prototype.array = function() {
	return this._v.copy();
}
thx.collection.Set.prototype.toString = function() {
	return "{" + this._v.join(", ") + "}";
}
thx.collection.Set.prototype.__class__ = thx.collection.Set;
rg.data.IAxis = function() { }
rg.data.IAxis.__name__ = ["rg","data","IAxis"];
rg.data.IAxis.prototype.scale = null;
rg.data.IAxis.prototype.ticks = null;
rg.data.IAxis.prototype.max = null;
rg.data.IAxis.prototype.min = null;
rg.data.IAxis.prototype.createStats = null;
rg.data.IAxis.prototype.__class__ = rg.data.IAxis;
rg.data.IAxisDiscrete = function() { }
rg.data.IAxisDiscrete.__name__ = ["rg","data","IAxisDiscrete"];
rg.data.IAxisDiscrete.prototype.scaleDistribution = null;
rg.data.IAxisDiscrete.prototype.range = null;
rg.data.IAxisDiscrete.prototype.__class__ = rg.data.IAxisDiscrete;
rg.data.IAxisDiscrete.__interfaces__ = [rg.data.IAxis];
if(!thx.js) thx.js = {}
thx.js.Access = function(selection) {
	if( selection === $_ ) return;
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
thx.js.Access.prototype.selection = null;
thx.js.Access.prototype._that = function() {
	return this.selection;
}
thx.js.Access.prototype.__class__ = thx.js.Access;
thx.js.AccessClassed = function(selection) {
	if( selection === $_ ) return;
	thx.js.Access.call(this,selection);
}
thx.js.AccessClassed.__name__ = ["thx","js","AccessClassed"];
thx.js.AccessClassed.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessClassed.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessClassed.getRe = function(name) {
	return new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
}
thx.js.AccessClassed.prototype.toggle = function(name) {
	if(this.exists(name)) this.remove(name); else this.add(name);
	return this.selection;
}
thx.js.AccessClassed.prototype.exists = function(name) {
	return this.selection.firstNode(function(node) {
		var list = node.classList;
		if(null != list) return list.contains(name);
		var cls = node.className;
		var re = new EReg("(^|\\s+)" + thx.text.ERegs.escapeERegChars(name) + "(\\s+|$)","g");
		var bv = cls.baseVal;
		return re.match(null != bv?bv:cls);
	});
}
thx.js.AccessClassed.prototype.remove = function(name) {
	this.selection.eachNode((function(f,a1) {
		return function(a2,a3) {
			return f(a1,a2,a3);
		};
	})($closure(this,"_remove"),name));
	return this.selection;
}
thx.js.AccessClassed.prototype._remove = function(name,node,i) {
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
thx.js.AccessClassed.prototype.add = function(name) {
	this.selection.eachNode((function(f,a1) {
		return function(a2,a3) {
			return f(a1,a2,a3);
		};
	})($closure(this,"_add"),name));
	return this.selection;
}
thx.js.AccessClassed.prototype._add = function(name,node,i) {
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
thx.js.AccessClassed.prototype.get = function() {
	var node = this.selection.node(), list = node.classList;
	if(null != list) return Ints.range(list.length).map(function(_,i) {
		return list.item(i);
	}).join(" ");
	var cls = node.className, clsb = null != cls.baseVal;
	if(clsb) return cls.baseVal; else return cls;
}
thx.js.AccessClassed.prototype.__class__ = thx.js.AccessClassed;
thx.js.AccessDataClassed = function(selection) {
	if( selection === $_ ) return;
	thx.js.AccessClassed.call(this,selection);
}
thx.js.AccessDataClassed.__name__ = ["thx","js","AccessDataClassed"];
thx.js.AccessDataClassed.__super__ = thx.js.AccessClassed;
for(var k in thx.js.AccessClassed.prototype ) thx.js.AccessDataClassed.prototype[k] = thx.js.AccessClassed.prototype[k];
thx.js.AccessDataClassed.prototype.removef = function(v) {
	var f = $closure(this,"_remove");
	this.selection.eachNode(function(node,i) {
		var c = v(Reflect.field(node,"__data__"),i);
		if(null != c) f(c,node,i);
	});
	return this.selection;
}
thx.js.AccessDataClassed.prototype.addf = function(v) {
	var f = $closure(this,"_add");
	this.selection.eachNode(function(node,i) {
		var c = v(Reflect.field(node,"__data__"),i);
		if(null != c) f(c,node,i);
	});
	return this.selection;
}
thx.js.AccessDataClassed.prototype.__class__ = thx.js.AccessDataClassed;
if(!rg.controller) rg.controller = {}
if(!rg.controller.visualization) rg.controller.visualization = {}
rg.controller.visualization.Visualization = function() { }
rg.controller.visualization.Visualization.__name__ = ["rg","controller","visualization","Visualization"];
rg.controller.visualization.Visualization.prototype.independentVariables = null;
rg.controller.visualization.Visualization.prototype.dependentVariables = null;
rg.controller.visualization.Visualization.prototype.variables = null;
rg.controller.visualization.Visualization.prototype.setVariables = function(independentVariables,dependentVariables) {
	this.independentVariables = independentVariables;
	this.dependentVariables = dependentVariables;
}
rg.controller.visualization.Visualization.prototype.init = function() {
	throw new thx.error.AbstractMethod({ fileName : "Visualization.hx", lineNumber : 29, className : "rg.controller.visualization.Visualization", methodName : "init"});
}
rg.controller.visualization.Visualization.prototype.feedData = function(data) {
	null;
}
rg.controller.visualization.Visualization.prototype.getVariables = function() {
	return this.independentVariables.map(function(d,i) {
		return d;
	}).concat(this.dependentVariables.map(function(d,i) {
		return d;
	}));
}
rg.controller.visualization.Visualization.prototype.destroy = function() {
}
rg.controller.visualization.Visualization.prototype.__class__ = rg.controller.visualization.Visualization;
rg.controller.visualization.VisualizationSvg = function(layout) {
	if( layout === $_ ) return;
	this.layout = layout;
}
rg.controller.visualization.VisualizationSvg.__name__ = ["rg","controller","visualization","VisualizationSvg"];
rg.controller.visualization.VisualizationSvg.__super__ = rg.controller.visualization.Visualization;
for(var k in rg.controller.visualization.Visualization.prototype ) rg.controller.visualization.VisualizationSvg.prototype[k] = rg.controller.visualization.Visualization.prototype[k];
rg.controller.visualization.VisualizationSvg.prototype.layout = null;
rg.controller.visualization.VisualizationSvg.prototype.__class__ = rg.controller.visualization.VisualizationSvg;
Hash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
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
Hash.prototype.__class__ = Hash;
if(!thx.color) thx.color = {}
thx.color.Rgb = function(r,g,b) {
	if( r === $_ ) return;
	this.red = Ints.clamp(r,0,255);
	this.green = Ints.clamp(g,0,255);
	this.blue = Ints.clamp(b,0,255);
}
thx.color.Rgb.__name__ = ["thx","color","Rgb"];
thx.color.Rgb.fromFloats = function(r,g,b) {
	return new thx.color.Rgb(Ints.interpolate(r,0,255),Ints.interpolate(g,0,255),Ints.interpolate(b,0,255));
}
thx.color.Rgb.fromInt = function(v) {
	return new thx.color.Rgb(v >> 16 & 255,v >> 8 & 255,v & 255);
}
thx.color.Rgb.equals = function(a,b) {
	return a.red == b.red && a.green == b.green && a.blue == b.blue;
}
thx.color.Rgb.darker = function(color,t,equation) {
	var interpolator = Ints.interpolatef(0,255,equation);
	t /= 255;
	return new thx.color.Rgb(interpolator(t * color.red),interpolator(t * color.green),interpolator(t * color.blue));
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
		throw new thx.error.Error("invalid number of steps",null,null,{ fileName : "Rgb.hx", lineNumber : 157, className : "thx.color.Rgb", methodName : "interpolateStepsf"});
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
thx.color.Rgb.prototype.blue = null;
thx.color.Rgb.prototype.green = null;
thx.color.Rgb.prototype.red = null;
thx.color.Rgb.prototype["int"] = function() {
	return (this.red & 255) << 16 | (this.green & 255) << 8 | this.blue & 255;
}
thx.color.Rgb.prototype.hex = function(prefix) {
	if(prefix == null) prefix = "";
	return prefix + StringTools.hex(this.red,2) + StringTools.hex(this.green,2) + StringTools.hex(this.blue,2);
}
thx.color.Rgb.prototype.toCss = function() {
	return this.hex("#");
}
thx.color.Rgb.prototype.toRgbString = function() {
	return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
}
thx.color.Rgb.prototype.toString = function() {
	return this.toRgbString();
}
thx.color.Rgb.prototype.__class__ = thx.color.Rgb;
thx.color.NamedColors = function() { }
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
thx.color.NamedColors.prototype.__class__ = thx.color.NamedColors;
rg.data.source.ITransform = function() { }
rg.data.source.ITransform.__name__ = ["rg","data","source","ITransform"];
rg.data.source.ITransform.prototype.transform = null;
rg.data.source.ITransform.prototype.__class__ = rg.data.source.ITransform;
if(!rg.data.source.rgquery.transform) rg.data.source.rgquery.transform = {}
rg.data.source.rgquery.transform.TransformTimeSeries = function(properties,event,periodicity,unit) {
	if( properties === $_ ) return;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.event = event;
}
rg.data.source.rgquery.transform.TransformTimeSeries.__name__ = ["rg","data","source","rgquery","transform","TransformTimeSeries"];
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.properties = null;
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.unit = null;
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.event = null;
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.transform = function(data) {
	var properties = this.properties, unit = this.unit, event = this.event, periodicity = this.periodicity;
	var result = data.map(function(d,_) {
		var p = Objects.addFields(Dynamics.clone(properties),[rg.util.Properties.timeProperty(periodicity),unit,"event"],[d[0].timestamp,d[1],event]);
		return p;
	});
	return result;
}
rg.data.source.rgquery.transform.TransformTimeSeries.prototype.__class__ = rg.data.source.rgquery.transform.TransformTimeSeries;
rg.data.source.rgquery.transform.TransformTimeSeries.__interfaces__ = [rg.data.source.ITransform];
IntHash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.keys = function() {
	var a = new Array();
	for( x in this.h ) a.push(x);
	return a.iterator();
}
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}};
}
IntHash.prototype.toString = function() {
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
IntHash.prototype.__class__ = IntHash;
rg.data.AxisNumeric = function(p) {
}
rg.data.AxisNumeric.__name__ = ["rg","data","AxisNumeric"];
rg.data.AxisNumeric._step = function(span,m) {
	var step = Math.pow(m,Math.floor(Math.log(span / m) / Math.log(m))), err = m / (span / step);
	if(err <= .05) step *= 10; else if(err <= .2) step *= 5; else if(err <= .4) step *= 4; else if(err <= .6) step *= 2;
	return step;
}
rg.data.AxisNumeric.prototype.scale = function(start,end,v) {
	if(start == end) return start;
	return (Floats.uninterpolatef(start,end))(v);
}
rg.data.AxisNumeric.prototype.ticks = function(start,end,maxTicks) {
	var span, step = 1.0, minors, majors;
	if(start % step == 0 && end % step == 0 && (span = end - start) < 10 && span >= step) {
		majors = Floats.range(start,end + step,step);
		minors = null;
	} else {
		minors = Floats.range(start,end + (step = rg.data.AxisNumeric._step(span,10)),step);
		majors = Floats.range(start,end + (step = rg.data.AxisNumeric._step(span,5)),step);
	}
	return rg.data.Tickmarks.bound(null == minors?majors.map(function(d,i) {
		return new rg.data.Tickmark(d,true,(d - start) / (end - start));
	}):minors.map(function(d,i) {
		return new rg.data.Tickmark(d,majors.remove(d),(d - start) / (end - start));
	}),maxTicks);
}
rg.data.AxisNumeric.prototype.min = function(stats,meta) {
	var min = null == meta.min?stats.min:meta.min;
	if(min < 0) return min; else return 0.0;
}
rg.data.AxisNumeric.prototype.max = function(stats,meta) {
	var max = null == meta.max?stats.max:meta.max;
	if(max < 0) return 0.0; else return max;
}
rg.data.AxisNumeric.prototype.createStats = function() {
	return new rg.data.StatsNumeric();
}
rg.data.AxisNumeric.prototype.__class__ = rg.data.AxisNumeric;
rg.data.AxisNumeric.__interfaces__ = [rg.data.IAxis];
if(!rg.controller.info) rg.controller.info = {}
rg.controller.info.InfoSegment = function(p) {
}
rg.controller.info.InfoSegment.__name__ = ["rg","controller","info","InfoSegment"];
rg.controller.info.InfoSegment.filters = function() {
	return [{ field : "on", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "transform", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "scale", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.controller.info.InfoSegment.prototype.on = null;
rg.controller.info.InfoSegment.prototype.transform = null;
rg.controller.info.InfoSegment.prototype.scale = null;
rg.controller.info.InfoSegment.prototype.__class__ = rg.controller.info.InfoSegment;
rg.controller.visualization.VisualizationCartesian = function(layout) {
	if( layout === $_ ) return;
	rg.controller.visualization.VisualizationSvg.call(this,layout);
}
rg.controller.visualization.VisualizationCartesian.__name__ = ["rg","controller","visualization","VisualizationCartesian"];
rg.controller.visualization.VisualizationCartesian.__super__ = rg.controller.visualization.VisualizationSvg;
for(var k in rg.controller.visualization.VisualizationSvg.prototype ) rg.controller.visualization.VisualizationCartesian.prototype[k] = rg.controller.visualization.VisualizationSvg.prototype[k];
rg.controller.visualization.VisualizationCartesian.prototype.info = null;
rg.controller.visualization.VisualizationCartesian.prototype.chart = null;
rg.controller.visualization.VisualizationCartesian.prototype.xlabel = null;
rg.controller.visualization.VisualizationCartesian.prototype.xrule = null;
rg.controller.visualization.VisualizationCartesian.prototype.ylabels = null;
rg.controller.visualization.VisualizationCartesian.prototype.yrules = null;
rg.controller.visualization.VisualizationCartesian.prototype.title = null;
rg.controller.visualization.VisualizationCartesian.prototype.xvariable = null;
rg.controller.visualization.VisualizationCartesian.prototype.yvariables = null;
rg.controller.visualization.VisualizationCartesian.prototype.init = function() {
	this.initAxes();
	this.initYAxes();
	this.initXAxis();
	this.initTitle();
	this.initPadding();
	this.initChart();
	this.initCartesianChart();
}
rg.controller.visualization.VisualizationCartesian.prototype.initAxes = function() {
	throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 46, className : "rg.controller.visualization.VisualizationCartesian", methodName : "initAxes"});
}
rg.controller.visualization.VisualizationCartesian.prototype.initPadding = function() {
	this.layout.adjustPadding();
}
rg.controller.visualization.VisualizationCartesian.prototype.initYAxes = function() {
	this.ylabels = [];
	this.yrules = [];
	var _g1 = 0, _g = this.yvariables.length;
	while(_g1 < _g) {
		var i = _g1++;
		var tickmarks = this.createTickmarks(i + 1,this.yvariables[i].type,"y" + i), rules = this.createRules(i + 1,this.yvariables[i].type,rg.view.frame.Orientation.Horizontal);
		if(null != tickmarks) this.ylabels.push({ id : i, tickmarks : tickmarks});
		if(null != rules) this.yrules.push({ id : i, rules : rules});
	}
}
rg.controller.visualization.VisualizationCartesian.prototype.initXAxis = function() {
	this.xlabel = this.createTickmarks(0,this.xvariable.type,"x");
	this.xrule = this.createRules(0,this.xvariable.type,rg.view.frame.Orientation.Vertical);
}
rg.controller.visualization.VisualizationCartesian.prototype.initChart = function() {
	throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 88, className : "rg.controller.visualization.VisualizationCartesian", methodName : "initChart"});
}
rg.controller.visualization.VisualizationCartesian.prototype.initCartesianChart = function() {
	this.chart.animated = this.info.animation.animated;
	this.chart.animationDuration = this.info.animation.duration;
	this.chart.animationEase = this.info.animation.ease;
	this.chart.click = this.info.click;
	this.chart.labelDataPoint = this.info.label.datapoint;
	this.chart.labelDataPointOver = this.info.label.datapointover;
	this.chart.init();
}
rg.controller.visualization.VisualizationCartesian.prototype.initTitle = function() {
	if(null == this.info.label.title) return;
	var panelContextTitle = this.layout.getContext("title");
	if(null == panelContextTitle) return;
	this.title = new rg.view.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
}
rg.controller.visualization.VisualizationCartesian.prototype.feedData = function(data) {
	if(0 == data.length) return;
	if(null != this.title && null != this.info.label.title) {
		this.title.setText(this.info.label.title(this.getVariables(),data));
		this.layout.suggestSize("title",this.title.idealHeight());
	}
	var transformed = this.transformData(data);
	this.chart.setVariables(this.independentVariables,this.dependentVariables,transformed);
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
rg.controller.visualization.VisualizationCartesian.prototype.transformData = function(dps) {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "VisualizationCartesian.hx", lineNumber : 163, className : "rg.controller.visualization.VisualizationCartesian", methodName : "transformData"});
		return $r;
	}(this));
}
rg.controller.visualization.VisualizationCartesian.prototype.destroy = function() {
	this.chart.destroy();
}
rg.controller.visualization.VisualizationCartesian.prototype.setTickmarksDefaults = function(tickmarks,i,type,pname) {
}
rg.controller.visualization.VisualizationCartesian.prototype.createTickmarks = function(i,type,pname) {
	var me = this;
	var displayMinor = this.info.displayMinorTick(type), displayMajor = this.info.displayMajorTick(type), displayLabel = this.info.displayLabelTick(type), displayAnchorLine = this.info.displayAnchorLineTick(type), title = null != this.info.label.axis?this.info.label.axis(type):null, tickmarks = null, context;
	if(displayMinor || displayMajor || displayLabel || displayAnchorLine) {
		context = this.layout.getContext(pname);
		if(null == context) return null;
		tickmarks = new rg.view.svg.layer.TickmarksOrtho(context.panel,context.anchor);
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
		var s = this.info.labelOrientation(type);
		if(null != s) tickmarks.labelOrientation = rg.view.svg.widget.LabelOrientations.parse(s);
		s = this.info.labelAnchor(type);
		if(null != s) tickmarks.labelAnchor = rg.view.svg.widget.GridAnchors.parse(s);
		var a;
		if(null != (a = this.info.labelAngle(type))) tickmarks.labelAngle = a;
		tickmarks.displayAnchorLine = displayAnchorLine;
	}
	if(null != title && null != (context = this.layout.getContext(pname + "title"))) {
		var t = new rg.view.svg.layer.Title(context.panel,title,context.anchor,null,"axis-title");
		var h = t.idealHeight();
		this.layout.suggestSize(pname + "title",h);
	}
	if(null != tickmarks) tickmarks.init();
	return tickmarks;
}
rg.controller.visualization.VisualizationCartesian.prototype.createRules = function(i,type,orientation) {
	var displayMinor = this.info.displayMinorRule(type), displayMajor = this.info.displayMajorRule(type), displayAnchorLine = this.info.displayAnchorLineRule(type), title = null != this.info.label.axis?this.info.label.axis(type):null, rules = null, panel;
	if(displayMinor || displayMajor) {
		panel = this.layout.getPanel("main");
		if(null == panel) return null;
		rules = new rg.view.svg.layer.RulesOrtho(panel,orientation);
		rules.displayMinor = displayMinor;
		rules.displayMajor = displayMajor;
		rules.displayAnchorLine = displayAnchorLine;
		rules.init();
	}
	return rules;
}
rg.controller.visualization.VisualizationCartesian.prototype.__class__ = rg.controller.visualization.VisualizationCartesian;
rg.controller.visualization.VisualizationBarChart = function(layout) {
	if( layout === $_ ) return;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
}
rg.controller.visualization.VisualizationBarChart.__name__ = ["rg","controller","visualization","VisualizationBarChart"];
rg.controller.visualization.VisualizationBarChart.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationBarChart.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationBarChart.prototype.infoBar = null;
rg.controller.visualization.VisualizationBarChart.prototype.initAxes = function() {
	this.xvariable = this.independentVariables[0];
	this.yvariables = this.dependentVariables.map(function(d,_) {
		return d;
	});
}
rg.controller.visualization.VisualizationBarChart.prototype.initChart = function() {
	var chart = new rg.view.svg.chart.BarChart(this.layout.getPanel(this.layout.mainPanelName));
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
	this.chart = chart;
}
rg.controller.visualization.VisualizationBarChart.prototype.transformData = function(dps) {
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
rg.controller.visualization.VisualizationBarChart.prototype.__class__ = rg.controller.visualization.VisualizationBarChart;
rg.controller.info.InfoFunnelChart = function(p) {
	if( p === $_ ) return;
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabelFunnel();
	this.padding = 2.5;
	this.flatness = 1.0;
	this.effect = rg.view.svg.chart.GradientEffect.Gradient(0.75);
	this.arrowSize = 30;
}
rg.controller.info.InfoFunnelChart.__name__ = ["rg","controller","info","InfoFunnelChart"];
rg.controller.info.InfoFunnelChart.filters = function() {
	return [{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "animation", value : rg.controller.info.Info.feed(new rg.controller.info.InfoAnimation(),v)}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabelFunnel(),v)}];
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
	}, filter : null},{ field : "effect", validator : rg.view.svg.chart.GradientEffects.canParse, filter : function(v) {
		return [{ field : "effect", value : rg.view.svg.chart.GradientEffects.parse(v)}];
	}},{ field : "arrowsize", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : function(v) {
		return [{ field : "arrowSize", value : v}];
	}}];
}
rg.controller.info.InfoFunnelChart.prototype.animation = null;
rg.controller.info.InfoFunnelChart.prototype.label = null;
rg.controller.info.InfoFunnelChart.prototype.sortDataPoint = null;
rg.controller.info.InfoFunnelChart.prototype.click = null;
rg.controller.info.InfoFunnelChart.prototype.padding = null;
rg.controller.info.InfoFunnelChart.prototype.flatness = null;
rg.controller.info.InfoFunnelChart.prototype.effect = null;
rg.controller.info.InfoFunnelChart.prototype.arrowSize = null;
rg.controller.info.InfoFunnelChart.prototype.__class__ = rg.controller.info.InfoFunnelChart;
rg.data.Stats = function(sortf) {
	if( sortf === $_ ) return;
	this.sortf = sortf;
	this.reset();
}
rg.data.Stats.__name__ = ["rg","data","Stats"];
rg.data.Stats.prototype.min = null;
rg.data.Stats.prototype.max = null;
rg.data.Stats.prototype.count = null;
rg.data.Stats.prototype.values = null;
rg.data.Stats.prototype.sortf = null;
rg.data.Stats.prototype.reset = function() {
	this.min = null;
	this.max = null;
	this.count = 0;
	this.values = [];
	return this;
}
rg.data.Stats.prototype.add = function(v) {
	this.count++;
	if(Arrays.exists(this.values,v)) return this;
	this.values.push(v);
	if(null != this.sortf) this.values.sort(this.sortf);
	this.min = this.values[0];
	this.max = Arrays.last(this.values);
	return this;
}
rg.data.Stats.prototype.addMany = function(it) {
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
rg.data.Stats.prototype.__class__ = rg.data.Stats;
rg.data.StatsNumeric = function(sortf) {
	if( sortf === $_ ) return;
	if(null == sortf) sortf = Floats.compare;
	rg.data.Stats.call(this,sortf);
}
rg.data.StatsNumeric.__name__ = ["rg","data","StatsNumeric"];
rg.data.StatsNumeric.__super__ = rg.data.Stats;
for(var k in rg.data.Stats.prototype ) rg.data.StatsNumeric.prototype[k] = rg.data.Stats.prototype[k];
rg.data.StatsNumeric.prototype.tot = null;
rg.data.StatsNumeric.prototype.reset = function() {
	rg.data.Stats.prototype.reset.call(this);
	this.tot = 0.0;
	return this;
}
rg.data.StatsNumeric.prototype.add = function(v) {
	rg.data.Stats.prototype.add.call(this,v);
	this.tot += v;
	return this;
}
rg.data.StatsNumeric.prototype.addMany = function(it) {
	rg.data.Stats.prototype.addMany.call(this,it);
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v = $it0.next();
		this.tot += v;
	}
	return this;
}
rg.data.StatsNumeric.prototype.__class__ = rg.data.StatsNumeric;
if(!thx.culture) thx.culture = {}
thx.culture.Info = function() { }
thx.culture.Info.__name__ = ["thx","culture","Info"];
thx.culture.Info.prototype.name = null;
thx.culture.Info.prototype["native"] = null;
thx.culture.Info.prototype.english = null;
thx.culture.Info.prototype.iso2 = null;
thx.culture.Info.prototype.iso3 = null;
thx.culture.Info.prototype.pluralRule = null;
thx.culture.Info.prototype.toString = function() {
	return this["native"] + " (" + this.english + ")";
}
thx.culture.Info.prototype.__class__ = thx.culture.Info;
thx.culture.Culture = function() { }
thx.culture.Culture.__name__ = ["thx","culture","Culture"];
thx.culture.Culture.__super__ = thx.culture.Info;
for(var k in thx.culture.Info.prototype ) thx.culture.Culture.prototype[k] = thx.culture.Info.prototype[k];
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
thx.culture.Culture.prototype.language = null;
thx.culture.Culture.prototype.date = null;
thx.culture.Culture.prototype.englishCurrency = null;
thx.culture.Culture.prototype.nativeCurrency = null;
thx.culture.Culture.prototype.currencySymbol = null;
thx.culture.Culture.prototype.currencyIso = null;
thx.culture.Culture.prototype.englishRegion = null;
thx.culture.Culture.prototype.nativeRegion = null;
thx.culture.Culture.prototype.isMetric = null;
thx.culture.Culture.prototype.digits = null;
thx.culture.Culture.prototype.signNeg = null;
thx.culture.Culture.prototype.signPos = null;
thx.culture.Culture.prototype.symbolNaN = null;
thx.culture.Culture.prototype.symbolPercent = null;
thx.culture.Culture.prototype.symbolPermille = null;
thx.culture.Culture.prototype.symbolNegInf = null;
thx.culture.Culture.prototype.symbolPosInf = null;
thx.culture.Culture.prototype.number = null;
thx.culture.Culture.prototype.currency = null;
thx.culture.Culture.prototype.percent = null;
thx.culture.Culture.prototype.__class__ = thx.culture.Culture;
rg.view.svg.widget.Balloon = function(container,bindOnTop) {
	if( container === $_ ) return;
	if(bindOnTop == null) bindOnTop = true;
	if(bindOnTop) {
		var parent = container.node();
		while(null != parent && parent.nodeName != "svg") parent = parent.parentNode;
		this.container = null == parent?container:thx.js.Dom.selectNode(parent);
	} else this.container = container;
	this.visible = true;
	this.duration = 500;
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
rg.view.svg.widget.Balloon.__name__ = ["rg","view","svg","widget","Balloon"];
rg.view.svg.widget.Balloon.prototype.text = null;
rg.view.svg.widget.Balloon.prototype.x = null;
rg.view.svg.widget.Balloon.prototype.y = null;
rg.view.svg.widget.Balloon.prototype.boxWidth = null;
rg.view.svg.widget.Balloon.prototype.boxHeight = null;
rg.view.svg.widget.Balloon.prototype.visible = null;
rg.view.svg.widget.Balloon.prototype.lineHeight = null;
rg.view.svg.widget.Balloon.prototype.roundedCorner = null;
rg.view.svg.widget.Balloon.prototype.paddingHorizontal = null;
rg.view.svg.widget.Balloon.prototype.paddingVertical = null;
rg.view.svg.widget.Balloon.prototype.preferredSide = null;
rg.view.svg.widget.Balloon.prototype.minwidth = null;
rg.view.svg.widget.Balloon.prototype.labels = null;
rg.view.svg.widget.Balloon.prototype.container = null;
rg.view.svg.widget.Balloon.prototype.balloon = null;
rg.view.svg.widget.Balloon.prototype.frame = null;
rg.view.svg.widget.Balloon.prototype.labelsContainer = null;
rg.view.svg.widget.Balloon.prototype.connector = null;
rg.view.svg.widget.Balloon.prototype.duration = null;
rg.view.svg.widget.Balloon.prototype.ease = null;
rg.view.svg.widget.Balloon.prototype.connectorShapeV = null;
rg.view.svg.widget.Balloon.prototype.connectorShapeH = null;
rg.view.svg.widget.Balloon.prototype.boundingBox = null;
rg.view.svg.widget.Balloon.prototype.addClass = function(name) {
	this.frame.select("path.bg").classed().add(name);
}
rg.view.svg.widget.Balloon.prototype.removeClass = function(name) {
	this.frame.select("path.bg").classed().remove(name);
}
rg.view.svg.widget.Balloon.prototype.createLabel = function(i) {
	var label = new rg.view.svg.widget.Label(this.labelsContainer,true,true,false);
	label.addClass("line-" + i);
	label.setAnchor(rg.view.svg.widget.GridAnchor.Top);
	label.setOrientation(rg.view.svg.widget.LabelOrientation.Orthogonal);
	label.place(0,i * this.lineHeight,90);
	return label;
}
rg.view.svg.widget.Balloon.prototype.setPreferredSide = function(v) {
	this.preferredSide = Ints.clamp(v,0,3);
	this.redraw();
	return v;
}
rg.view.svg.widget.Balloon.prototype.setText = function(v) {
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
rg.view.svg.widget.Balloon.prototype.setLineHeight = function(v) {
	this.lineHeight = v;
	this.redraw();
	return v;
}
rg.view.svg.widget.Balloon.prototype.setPadding = function(h,v) {
	this.paddingHorizontal = h;
	this.paddingVertical = v;
	this.redraw();
}
rg.view.svg.widget.Balloon.prototype.setRoundedCorner = function(v) {
	this.roundedCorner = v;
	this.redraw();
	return v;
}
rg.view.svg.widget.Balloon.prototype.setBoundingBox = function(v) {
	this.boundingBox = v;
	this.redraw();
	return v;
}
rg.view.svg.widget.Balloon.prototype.getBoundingBox = function() {
	if(null == this.boundingBox) this.setBoundingBox(this.container.node().getBBox());
	return this.boundingBox;
}
rg.view.svg.widget.Balloon.prototype.transition_id = null;
rg.view.svg.widget.Balloon.prototype.moveTo = function(x,y,animate) {
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
	} else this._moveTo(x,y);
}
rg.view.svg.widget.Balloon.prototype._moveTo = function(x,y) {
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
	this.frame.attr("transform").string("translate(" + tx + ", " + ty + ")").selectAll("path").attr("d").string(rg.view.svg.widget.BalloonShape.shape(this.boxWidth,this.boxHeight,this.roundedCorner,this.roundedCorner,side,offset));
	if(0 != diagonal) this.connector.attr("d").string(side % 2 == 0?this.connectorShapeV.diagonal(coords):this.connectorShapeH.diagonal(coords));
}
rg.view.svg.widget.Balloon.prototype.show = function() {
	if(!this.visible) return;
	this.visible = true;
	this.balloon.style("display").string("block");
}
rg.view.svg.widget.Balloon.prototype.hide = function() {
	if(this.visible) return;
	this.visible = false;
	this.balloon.style("display").string("none");
}
rg.view.svg.widget.Balloon.prototype.redraw = function() {
	if(null == this.text || this.text.length == 0) return;
	this.boxWidth = 0.0;
	var w;
	var _g = 0, _g1 = this.labels;
	while(_g < _g1.length) {
		var label = _g1[_g];
		++_g;
		if((w = label.getSize().width) > this.boxWidth) this.boxWidth = w;
	}
	this.boxWidth += this.paddingHorizontal * 2;
	this.boxHeight = this.lineHeight * this.labels.length + this.paddingVertical * 2;
	var bg = this.frame.selectAll(".bg"), sw = bg.style("stroke-width").getFloat();
	if(Math.isNaN(sw)) sw = 0;
	this.labelsContainer.attr("transform").string("translate(" + this.boxWidth / 2 + "," + (sw + this.paddingVertical) + ")");
	bg.transition().ease(this.ease).delay(null,this.duration);
}
rg.view.svg.widget.Balloon.prototype.__class__ = rg.view.svg.widget.Balloon;
if(!rg.view.svg.panel) rg.view.svg.panel = {}
rg.view.svg.panel.Panel = function(frame) {
	if( frame === $_ ) return;
	this.frame = frame;
	frame.change = $closure(this,"reframe");
	this._layers = [];
}
rg.view.svg.panel.Panel.__name__ = ["rg","view","svg","panel","Panel"];
rg.view.svg.panel.Panel.prototype.frame = null;
rg.view.svg.panel.Panel.prototype.g = null;
rg.view.svg.panel.Panel.prototype.parent = null;
rg.view.svg.panel.Panel.prototype._layers = null;
rg.view.svg.panel.Panel.prototype.addLayer = function(layer) {
	this._layers.remove(layer);
	this._layers.push(layer);
}
rg.view.svg.panel.Panel.prototype.removeLayer = function(layer) {
	this._layers.remove(layer);
}
rg.view.svg.panel.Panel.prototype.setParent = function(container) {
	if(null != this.g) this.g.remove();
	this.parent = container;
	if(null == container) return;
	this.init(container.g);
}
rg.view.svg.panel.Panel.prototype.init = function(container) {
	this.g = container.append("svg:g").attr("class").string("panel").attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")");
}
rg.view.svg.panel.Panel.prototype.reframe = function() {
	this.g.attr("transform").string("translate(" + this.frame.x + "," + this.frame.y + ")");
	var layer;
	var _g1 = 0, _g = this._layers.length;
	while(_g1 < _g) {
		var i = _g1++;
		layer = this._layers[i];
		layer._resize();
	}
}
rg.view.svg.panel.Panel.prototype.__class__ = rg.view.svg.panel.Panel;
rg.view.svg.panel.Container = function(frame,orientation) {
	if( frame === $_ ) return;
	rg.view.svg.panel.Panel.call(this,frame);
	this.stack = new rg.view.frame.Stack(frame.width,frame.height,orientation);
	this.panels = [];
}
rg.view.svg.panel.Container.__name__ = ["rg","view","svg","panel","Container"];
rg.view.svg.panel.Container.__super__ = rg.view.svg.panel.Panel;
for(var k in rg.view.svg.panel.Panel.prototype ) rg.view.svg.panel.Container.prototype[k] = rg.view.svg.panel.Panel.prototype[k];
rg.view.svg.panel.Container.prototype.stack = null;
rg.view.svg.panel.Container.prototype.panels = null;
rg.view.svg.panel.Container.prototype.insertPanel = function(pos,panel) {
	if(null == panel) return this;
	if(pos >= this.stack.getLength()) return this.addPanel(panel); else if(pos < 0) pos = 0;
	if(null != panel.parent) panel.parent.removePanel(panel);
	this.panels.insert(pos,panel);
	var f = panel;
	f.setParent(this);
	this.stack.insertItem(pos,(function($this) {
		var $r;
		var $t = panel.frame;
		if(Std["is"]($t,rg.view.frame.StackItem)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)));
	return this;
}
rg.view.svg.panel.Container.prototype.addPanel = function(panel) {
	return this.addPanels([panel]);
}
rg.view.svg.panel.Container.prototype.addPanels = function(it) {
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
			if(Std["is"]($t,rg.view.frame.StackItem)) $t; else throw "Class cast error";
			$r = $t;
			return $r;
		}(this)));
	}
	this.stack.addItems(frames);
	return this;
}
rg.view.svg.panel.Container.prototype.removePanel = function(panel) {
	if(!this.panels.remove(panel)) return this;
	this.stack.removeChild((function($this) {
		var $r;
		var $t = panel.frame;
		if(Std["is"]($t,rg.view.frame.StackItem)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this)));
	var f = panel;
	f.setParent(null);
	return this;
}
rg.view.svg.panel.Container.prototype.createPanel = function(layout) {
	var panel = new rg.view.svg.panel.Panel(new rg.view.frame.StackItem(layout));
	this.addPanel(panel);
	return panel;
}
rg.view.svg.panel.Container.prototype.createContainer = function(layout,orientation) {
	var panel = new rg.view.svg.panel.Container(new rg.view.frame.StackItem(layout),orientation);
	this.addPanel(panel);
	return panel;
}
rg.view.svg.panel.Container.prototype.createPanelAt = function(pos,layout) {
	var panel = new rg.view.svg.panel.Panel(new rg.view.frame.StackItem(layout));
	this.insertPanel(pos,panel);
	return panel;
}
rg.view.svg.panel.Container.prototype.createContainerAt = function(pos,layout,orientation) {
	var panel = new rg.view.svg.panel.Container(new rg.view.frame.StackItem(layout),orientation);
	this.insertPanel(pos,panel);
	return panel;
}
rg.view.svg.panel.Container.prototype.reframe = function() {
	rg.view.svg.panel.Panel.prototype.reframe.call(this);
	this.stack.setSize(this.frame.width,this.frame.height);
	this.stack.reflow();
}
rg.view.svg.panel.Container.prototype.__class__ = rg.view.svg.panel.Container;
rg.view.svg.panel.Space = function(width,height,domcontainer) {
	if( width === $_ ) return;
	this.panel = new rg.view.frame.StackItem(rg.view.frame.FrameLayout.Fill(0,0));
	rg.view.svg.panel.Container.call(this,this.panel,rg.view.frame.Orientation.Vertical);
	this.init(this.svg = domcontainer.append("svg:svg"));
	this.resize(width,height);
}
rg.view.svg.panel.Space.__name__ = ["rg","view","svg","panel","Space"];
rg.view.svg.panel.Space.__super__ = rg.view.svg.panel.Container;
for(var k in rg.view.svg.panel.Container.prototype ) rg.view.svg.panel.Space.prototype[k] = rg.view.svg.panel.Container.prototype[k];
rg.view.svg.panel.Space.prototype.panel = null;
rg.view.svg.panel.Space.prototype.svg = null;
rg.view.svg.panel.Space.prototype.resize = function(width,height) {
	if(this.panel.width == width && this.panel.height == height) return;
	this.svg.attr("width")["float"](width).attr("height")["float"](height);
	var sf = this.panel;
	sf.setLayout(0,0,width,height);
}
rg.view.svg.panel.Space.prototype.__class__ = rg.view.svg.panel.Space;
rg.controller.info.Info = function() { }
rg.controller.info.Info.__name__ = ["rg","controller","info","Info"];
rg.controller.info.Info.feed = function(info,ob) {
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
			if(null != filter.validator && !filter.validator(value = Reflect.field(ob,filter.field))) throw new thx.error.Error("the parameter '{0}' can't have value '{1}'",[filter.field,value],null,{ fileName : "Info.hx", lineNumber : 29, className : "rg.controller.info.Info", methodName : "feed"});
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
rg.controller.info.Info.prototype.__class__ = rg.controller.info.Info;
rg.controller.info.InfoVariable = function(p) {
	if( p === $_ ) return;
	this.variableType = rg.controller.info.VariableType.Unknown;
}
rg.controller.info.InfoVariable.__name__ = ["rg","controller","info","InfoVariable"];
rg.controller.info.InfoVariable.__super__ = rg.controller.info.Info;
for(var k in rg.controller.info.Info.prototype ) rg.controller.info.InfoVariable.prototype[k] = rg.controller.info.Info.prototype[k];
rg.controller.info.InfoVariable.filters = function() {
	return [{ field : "type", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "view", validator : function(v) {
		return Std["is"](v,Array) && rg.controller.info.InfoVariable.testViewValue(v[0]) && rg.controller.info.InfoVariable.testViewValue(v[1]);
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
		return [{ field : "variableType", value : Type.createEnum(rg.controller.info.VariableType,Strings.ucfirst(("" + v).toLowerCase()),[])}];
	}},{ field : "scalemode", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "scaleDistribution", value : Type.createEnum(rg.data.ScaleDistribution,"Scale" + Strings.ucfirst(("" + v).toLowerCase()),[])}];
	}}];
}
rg.controller.info.InfoVariable.testViewValue = function(v) {
	return v == null || Types.isPrimitive(v) || Std["is"](v,Date) || Reflect.isFunction(v);
}
rg.controller.info.InfoVariable.prototype.type = null;
rg.controller.info.InfoVariable.prototype.min = null;
rg.controller.info.InfoVariable.prototype.max = null;
rg.controller.info.InfoVariable.prototype.values = null;
rg.controller.info.InfoVariable.prototype.groupBy = null;
rg.controller.info.InfoVariable.prototype.variableType = null;
rg.controller.info.InfoVariable.prototype.scaleDistribution = null;
rg.controller.info.InfoVariable.prototype.__class__ = rg.controller.info.InfoVariable;
rg.controller.info.VariableType = { __ename__ : ["rg","controller","info","VariableType"], __constructs__ : ["Unknown","Independent","Dependent"] }
rg.controller.info.VariableType.Unknown = ["Unknown",0];
rg.controller.info.VariableType.Unknown.toString = $estr;
rg.controller.info.VariableType.Unknown.__enum__ = rg.controller.info.VariableType;
rg.controller.info.VariableType.Independent = ["Independent",1];
rg.controller.info.VariableType.Independent.toString = $estr;
rg.controller.info.VariableType.Independent.__enum__ = rg.controller.info.VariableType;
rg.controller.info.VariableType.Dependent = ["Dependent",2];
rg.controller.info.VariableType.Dependent.toString = $estr;
rg.controller.info.VariableType.Dependent.__enum__ = rg.controller.info.VariableType;
if(!thx.geo) thx.geo = {}
thx.geo.IProjection = function() { }
thx.geo.IProjection.__name__ = ["thx","geo","IProjection"];
thx.geo.IProjection.prototype.project = null;
thx.geo.IProjection.prototype.invert = null;
thx.geo.IProjection.prototype.__class__ = thx.geo.IProjection;
thx.geo.Albers = function(p) {
	if( p === $_ ) return;
	this._origin = [-98.0,38];
	this._parallels = [29.5,45.5];
	this._scale = 1000;
	this._translate = [480.0,250];
	this.reload();
}
thx.geo.Albers.__name__ = ["thx","geo","Albers"];
thx.geo.Albers.prototype.origin = null;
thx.geo.Albers.prototype.parallels = null;
thx.geo.Albers.prototype.translate = null;
thx.geo.Albers.prototype.scale = null;
thx.geo.Albers.prototype.lng0 = null;
thx.geo.Albers.prototype.n = null;
thx.geo.Albers.prototype.C = null;
thx.geo.Albers.prototype.p0 = null;
thx.geo.Albers.prototype._origin = null;
thx.geo.Albers.prototype._parallels = null;
thx.geo.Albers.prototype._translate = null;
thx.geo.Albers.prototype._scale = null;
thx.geo.Albers.prototype.project = function(coords) {
	var t = this.n * (0.01745329251994329577 * coords[0] - this.lng0), p = Math.sqrt(this.C - 2 * this.n * Math.sin(0.01745329251994329577 * coords[1])) / this.n;
	return [this.getScale() * p * Math.sin(t) + this.getTranslate()[0],this.getScale() * (p * Math.cos(t) - this.p0) + this.getTranslate()[1]];
}
thx.geo.Albers.prototype.invert = function(coords) {
	var x = (coords[0] - this.getTranslate()[0]) / this.getScale(), y = (coords[1] - this.getTranslate()[1]) / this.getScale(), p0y = this.p0 + y, t = Math.atan2(x,p0y), p = Math.sqrt(x * x + p0y * p0y);
	return [(this.lng0 + t / this.n) / 0.01745329251994329577,Math.asin((this.C - p * p * this.n * this.n) / (2 * this.n)) / 0.01745329251994329577];
}
thx.geo.Albers.prototype.getOrigin = function() {
	return this._origin.copy();
}
thx.geo.Albers.prototype.setOrigin = function(origin) {
	this._origin = [origin[0],origin[1]];
	this.reload();
	return origin;
}
thx.geo.Albers.prototype.getParallels = function() {
	return this._parallels.copy();
}
thx.geo.Albers.prototype.setParallels = function(parallels) {
	this._parallels = [parallels[0],parallels[1]];
	this.reload();
	return parallels;
}
thx.geo.Albers.prototype.getTranslate = function() {
	return this._translate.copy();
}
thx.geo.Albers.prototype.setTranslate = function(translate) {
	this._translate = [translate[0],translate[1]];
	return translate;
}
thx.geo.Albers.prototype.reload = function() {
	var phi1 = 0.01745329251994329577 * this.getParallels()[0], phi2 = 0.01745329251994329577 * this.getParallels()[1], lat0 = 0.01745329251994329577 * this.getOrigin()[1], s = Math.sin(phi1), c = Math.cos(phi1);
	this.lng0 = 0.01745329251994329577 * this.getOrigin()[0];
	this.n = .5 * (s + Math.sin(phi2));
	this.C = c * c + 2 * this.n * s;
	this.p0 = Math.sqrt(this.C - 2 * this.n * Math.sin(lat0)) / this.n;
	return this;
}
thx.geo.Albers.prototype.setScale = function(scale) {
	return this._scale = scale;
}
thx.geo.Albers.prototype.getScale = function() {
	return this._scale;
}
thx.geo.Albers.prototype.__class__ = thx.geo.Albers;
thx.geo.Albers.__interfaces__ = [thx.geo.IProjection];
EReg = function(r,opt) {
	if( r === $_ ) return;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	this.r.l = RegExp.leftContext;
	this.r.r = RegExp.rightContext;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.l == null) return this.r.s.substr(0,this.r.m.index);
	return this.r.l;
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	if(this.r.r == null) {
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	return this.r.r;
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
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
EReg.prototype.__class__ = EReg;
Dates = function() { }
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
Dates.prototype.__class__ = Dates;
rg.view.svg.panel.Layer = function(panel) {
	if( panel === $_ ) return;
	this.frame = (this.panel = panel).frame;
	var p = panel;
	p.addLayer(this);
	this.g = panel.g.append("svg:g");
	this.g.attr("class").string("layer");
	this._resize();
}
rg.view.svg.panel.Layer.__name__ = ["rg","view","svg","panel","Layer"];
rg.view.svg.panel.Layer.prototype.panel = null;
rg.view.svg.panel.Layer.prototype.frame = null;
rg.view.svg.panel.Layer.prototype.g = null;
rg.view.svg.panel.Layer.prototype.width = null;
rg.view.svg.panel.Layer.prototype.height = null;
rg.view.svg.panel.Layer.prototype.customClass = null;
rg.view.svg.panel.Layer.prototype.addClass = function(name) {
	var me = this;
	name.split(" ").forEach(function(d,i) {
		me.g.classed().add(d);
	});
}
rg.view.svg.panel.Layer.prototype.removeClass = function(name) {
	this.g.classed().remove(name);
}
rg.view.svg.panel.Layer.prototype.toggleClass = function(name) {
	this.g.classed().toggle(name);
}
rg.view.svg.panel.Layer.prototype._resize = function() {
	this.width = this.frame.width;
	this.height = this.frame.height;
	this.resize();
}
rg.view.svg.panel.Layer.prototype.resize = function() {
}
rg.view.svg.panel.Layer.prototype.destroy = function() {
	var p = this.panel;
	p.removeLayer(this);
	this.g.remove();
}
rg.view.svg.panel.Layer.prototype.setCustomClass = function(v) {
	if(null != this.customClass) this.g.classed().remove(this.customClass);
	this.g.classed().add(v);
	return this.customClass = v;
}
rg.view.svg.panel.Layer.prototype.__class__ = rg.view.svg.panel.Layer;
if(!rg.view.svg.chart) rg.view.svg.chart = {}
rg.view.svg.chart.Chart = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.panel.Layer.call(this,panel);
	this.animated = true;
	this.animationDuration = 1500;
	this.animationEase = thx.math.Equations.linear;
}
rg.view.svg.chart.Chart.__name__ = ["rg","view","svg","chart","Chart"];
rg.view.svg.chart.Chart.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.chart.Chart.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.chart.Chart.prototype.animated = null;
rg.view.svg.chart.Chart.prototype.animationDuration = null;
rg.view.svg.chart.Chart.prototype.animationEase = null;
rg.view.svg.chart.Chart.prototype.click = null;
rg.view.svg.chart.Chart.prototype.labelDataPoint = null;
rg.view.svg.chart.Chart.prototype.labelDataPointOver = null;
rg.view.svg.chart.Chart.prototype.panelx = null;
rg.view.svg.chart.Chart.prototype.panely = null;
rg.view.svg.chart.Chart.prototype.tooltip = null;
rg.view.svg.chart.Chart.prototype.resize = function() {
	var coords = rg.view.svg.panel.Panels.boundingBox(this.panel);
	this.panelx = coords.x;
	this.panely = coords.y;
}
rg.view.svg.chart.Chart.prototype.init = function() {
	if(null != this.labelDataPointOver) this.tooltip = new rg.view.svg.widget.Balloon(this.g);
	this.resize();
}
rg.view.svg.chart.Chart.prototype.moveTooltip = function(x,y,animated) {
	this.tooltip.moveTo(this.panelx + x,this.panely + y,animated);
}
rg.view.svg.chart.Chart.prototype.__class__ = rg.view.svg.chart.Chart;
rg.view.svg.chart.CartesianChart = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.chart.Chart.call(this,panel);
}
rg.view.svg.chart.CartesianChart.__name__ = ["rg","view","svg","chart","CartesianChart"];
rg.view.svg.chart.CartesianChart.__super__ = rg.view.svg.chart.Chart;
for(var k in rg.view.svg.chart.Chart.prototype ) rg.view.svg.chart.CartesianChart.prototype[k] = rg.view.svg.chart.Chart.prototype[k];
rg.view.svg.chart.CartesianChart.prototype.yVariables = null;
rg.view.svg.chart.CartesianChart.prototype.xVariable = null;
rg.view.svg.chart.CartesianChart.prototype.setVariables = function(variableIndependents,variableDependents,data) {
	this.xVariable = variableIndependents[0];
	this.yVariables = variableDependents;
}
rg.view.svg.chart.CartesianChart.prototype.data = function(dps) {
	throw new thx.error.AbstractMethod({ fileName : "CartesianChart.hx", lineNumber : 38, className : "rg.view.svg.chart.CartesianChart", methodName : "data"});
}
rg.view.svg.chart.CartesianChart.prototype.__class__ = rg.view.svg.chart.CartesianChart;
rg.view.svg.chart.ScatterGraph = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.addClass("scatter-graph");
	this.chart = this.g.append("svg:g");
}
rg.view.svg.chart.ScatterGraph.__name__ = ["rg","view","svg","chart","ScatterGraph"];
rg.view.svg.chart.ScatterGraph.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.ScatterGraph.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.ScatterGraph.prototype.symbol = null;
rg.view.svg.chart.ScatterGraph.prototype.symbolStyle = null;
rg.view.svg.chart.ScatterGraph.prototype.chart = null;
rg.view.svg.chart.ScatterGraph.prototype.dps = null;
rg.view.svg.chart.ScatterGraph.prototype.x = function(d,i) {
	var value = Reflect.field(d,this.xVariable.type), scaled = this.xVariable.axis.scale(this.xVariable.min(),this.xVariable.max(),value), scaledw = scaled * this.width;
	return scaledw;
}
rg.view.svg.chart.ScatterGraph.prototype.getY1 = function(pos) {
	var h = this.height, v = this.yVariables[pos];
	return function(d,i) {
		var value = Reflect.field(d,v.type), scaled = v.axis.scale(v.min(),v.max(),value), scaledh = scaled * h;
		return h - scaledh;
	};
}
rg.view.svg.chart.ScatterGraph.prototype.classf = function(pos,cls) {
	return function(_,i) {
		return cls + " stroke-" + pos + " fill-" + pos;
	};
}
rg.view.svg.chart.ScatterGraph.prototype.data = function(dps) {
	this.dps = dps;
	this.redraw();
}
rg.view.svg.chart.ScatterGraph.prototype.resize = function() {
	rg.view.svg.chart.CartesianChart.prototype.resize.call(this);
	this.redraw();
}
rg.view.svg.chart.ScatterGraph.prototype.redraw = function() {
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
		})())($closure(this,"onclick"),stats[0]), onmouseover = ((function() {
			return function(f,a1) {
				return (function() {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})();
			};
		})())($closure(this,"onmouseover"),stats[0]);
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
					var dp = Reflect.field(n,"__data__"), label = new rg.view.svg.widget.Label(thx.js.Dom.selectNode(n),true,true,true);
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
}
rg.view.svg.chart.ScatterGraph.prototype.getTranslatePointf = function(pos) {
	var x = $closure(this,"x"), y = this.getY1(pos);
	return function(dp,i) {
		return "translate(" + x(dp) + "," + y(dp,i) + ")";
	};
}
rg.view.svg.chart.ScatterGraph.prototype.onmouseover = function(stats,n,i) {
	var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,stats);
	if(null == text) this.tooltip.hide(); else {
		var sel = thx.js.Dom.selectNode(n), coords = rg.view.svg.chart.Coords.fromTransform(sel.attr("transform").get());
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(coords[0],coords[1]);
	}
}
rg.view.svg.chart.ScatterGraph.prototype.onclick = function(stats,dp,i) {
	this.click(dp,stats);
}
rg.view.svg.chart.ScatterGraph.prototype.__class__ = rg.view.svg.chart.ScatterGraph;
rg.controller.info.InfoAnimation = function(p) {
	if( p === $_ ) return;
	this.animated = false;
	this.duration = 1500;
	this.delay = 150;
	this.ease = thx.math.Equations.elasticf();
}
rg.controller.info.InfoAnimation.__name__ = ["rg","controller","info","InfoAnimation"];
rg.controller.info.InfoAnimation.filters = function() {
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
rg.controller.info.InfoAnimation.prototype.animated = null;
rg.controller.info.InfoAnimation.prototype.duration = null;
rg.controller.info.InfoAnimation.prototype.ease = null;
rg.controller.info.InfoAnimation.prototype.delay = null;
rg.controller.info.InfoAnimation.prototype.__class__ = rg.controller.info.InfoAnimation;
rg.controller.info.InfoDataSource = function(p) {
}
rg.controller.info.InfoDataSource.__name__ = ["rg","controller","info","InfoDataSource"];
rg.controller.info.InfoDataSource.filters = function() {
	return [{ field : "query", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "path", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "event", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "name", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "start", validator : rg.controller.info.InfoDataSource.validateDate, filter : function(v) {
		return [{ field : "start", value : rg.controller.info.InfoDataSource.filterDate(v)}];
	}},{ field : "end", validator : rg.controller.info.InfoDataSource.validateDate, filter : function(v) {
		return [{ field : "end", value : rg.controller.info.InfoDataSource.filterDate(v)}];
	}},{ field : "timezone", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "timeZone", value : v}];
	}},{ field : "data", validator : function(v) {
		return Std["is"](v,String) || Std["is"](v,Array) && Iterators.all(v.iterator(),function(v1) {
			return Reflect.isObject(v1) && null == Type.getClass(v1);
		});
	}, filter : function(v) {
		if(Std["is"](v,Array)) return [{ field : "data", value : v}]; else return [{ field : "namedData", value : v}];
	}},{ field : "groupby", validator : function(v) {
		return Std["is"](v,String) && rg.util.Periodicity.isValid(v);
	}, filter : function(v) {
		return [{ field : "groupBy", value : v}];
	}},{ field : "groupfilter", validator : function(v) {
		return Std["is"](v,String) || Std["is"](v,Array);
	}, filter : function(v) {
		return [{ field : "groups", value : Std["is"](v,String)?v.split(","):v}];
	}}];
}
rg.controller.info.InfoDataSource.validateDate = function(v) {
	return Std["is"](v,Float) || Std["is"](v,Date) || Std["is"](v,String);
}
rg.controller.info.InfoDataSource.filterDate = function(v) {
	if(null == v) return null;
	if(Std["is"](v,Float)) return v;
	if(Std["is"](v,Date)) return ((function($this) {
		var $r;
		var $t = v;
		if(Std["is"]($t,Date)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).getTime();
	if(Std["is"](v,String)) return thx.date.DateParser.parse(v).getTime();
	return (function($this) {
		var $r;
		throw new thx.error.Error("invalid date '{0}' for start or end",[v],null,{ fileName : "InfoDataSource.hx", lineNumber : 99, className : "rg.controller.info.InfoDataSource", methodName : "filterDate"});
		return $r;
	}(this));
}
rg.controller.info.InfoDataSource.prototype.query = null;
rg.controller.info.InfoDataSource.prototype.path = null;
rg.controller.info.InfoDataSource.prototype.event = null;
rg.controller.info.InfoDataSource.prototype.namedData = null;
rg.controller.info.InfoDataSource.prototype.data = null;
rg.controller.info.InfoDataSource.prototype.name = null;
rg.controller.info.InfoDataSource.prototype.groupBy = null;
rg.controller.info.InfoDataSource.prototype.timeZone = null;
rg.controller.info.InfoDataSource.prototype.groups = null;
rg.controller.info.InfoDataSource.prototype.start = null;
rg.controller.info.InfoDataSource.prototype.end = null;
rg.controller.info.InfoDataSource.prototype.__class__ = rg.controller.info.InfoDataSource;
if(!rg.controller.factory) rg.controller.factory = {}
rg.controller.factory.FactoryGeoProjection = function(p) {
}
rg.controller.factory.FactoryGeoProjection.__name__ = ["rg","controller","factory","FactoryGeoProjection"];
rg.controller.factory.FactoryGeoProjection.prototype.create = function(info) {
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
			throw new thx.error.Error("the projection '{0}' does not exist or is not implemented",[info.projection],null,{ fileName : "FactoryGeoProjection.hx", lineNumber : 68, className : "rg.controller.factory.FactoryGeoProjection", methodName : "create"});
			return $r;
		}(this));
	}
}
rg.controller.factory.FactoryGeoProjection.prototype.__class__ = rg.controller.factory.FactoryGeoProjection;
rg.controller.info.InfoLabel = function(p) {
}
rg.controller.info.InfoLabel.__name__ = ["rg","controller","info","InfoLabel"];
rg.controller.info.InfoLabel.filters = function() {
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
rg.controller.info.InfoLabel.prototype.title = null;
rg.controller.info.InfoLabel.prototype.datapoint = null;
rg.controller.info.InfoLabel.prototype.datapointover = null;
rg.controller.info.InfoLabel.prototype.__class__ = rg.controller.info.InfoLabel;
rg.controller.info.InfoLabelFunnel = function(p) {
	if( p === $_ ) return;
	rg.controller.info.InfoLabel.call(this);
}
rg.controller.info.InfoLabelFunnel.__name__ = ["rg","controller","info","InfoLabelFunnel"];
rg.controller.info.InfoLabelFunnel.__super__ = rg.controller.info.InfoLabel;
for(var k in rg.controller.info.InfoLabel.prototype ) rg.controller.info.InfoLabelFunnel.prototype[k] = rg.controller.info.InfoLabel.prototype[k];
rg.controller.info.InfoLabelFunnel.filters = function() {
	return [{ field : "arrow", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.controller.info.InfoLabel.filters());
}
rg.controller.info.InfoLabelFunnel.prototype.arrow = null;
rg.controller.info.InfoLabelFunnel.prototype.__class__ = rg.controller.info.InfoLabelFunnel;
if(!rg.view.frame) rg.view.frame = {}
rg.view.frame.FrameLayout = { __ename__ : ["rg","view","frame","FrameLayout"], __constructs__ : ["Fill","FillPercent","FillRatio","Fixed","Floating"] }
rg.view.frame.FrameLayout.Fill = function(before,after,min,max) { var $x = ["Fill",0,before,after,min,max]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.view.frame.FrameLayout.FillPercent = function(before,after,percent,min,max) { var $x = ["FillPercent",1,before,after,percent,min,max]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.view.frame.FrameLayout.FillRatio = function(before,after,ratio) { var $x = ["FillRatio",2,before,after,ratio]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.view.frame.FrameLayout.Fixed = function(before,after,size) { var $x = ["Fixed",3,before,after,size]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
rg.view.frame.FrameLayout.Floating = function(x,y,width,height) { var $x = ["Floating",4,x,y,width,height]; $x.__enum__ = rg.view.frame.FrameLayout; $x.toString = $estr; return $x; }
if(!thx.math) thx.math = {}
thx.math.Ease = function() { }
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
thx.math.Ease.prototype.__class__ = thx.math.Ease;
rg.controller.factory.FactoryAxis = function(p) {
}
rg.controller.factory.FactoryAxis.__name__ = ["rg","controller","factory","FactoryAxis"];
rg.controller.factory.FactoryAxis.prototype.create = function(type,isnumeric,variable,samples) {
	if(null != samples && samples.length > 0) return new rg.data.AxisOrdinalFixedValues(samples); else if(true == isnumeric) return new rg.data.AxisNumeric(); else if(false == isnumeric) return new rg.data.AxisOrdinalStats(variable); else return null;
}
rg.controller.factory.FactoryAxis.prototype.createDiscrete = function(type,variable,samples,groupBy) {
	if(rg.util.Properties.isTime(type)) {
		if(null != groupBy) return new rg.data.AxisGroupByTime(rg.util.Properties.periodicity(type)); else return new rg.data.AxisTime(rg.util.Properties.periodicity(type));
	} else if(null != samples && samples.length > 0) return new rg.data.AxisOrdinalFixedValues(samples);
	return new rg.data.AxisOrdinalStats(variable);
}
rg.controller.factory.FactoryAxis.prototype.__class__ = rg.controller.factory.FactoryAxis;
thx.js.AccessProperty = function(name,selection) {
	if( name === $_ ) return;
	thx.js.Access.call(this,selection);
	this.name = name;
}
thx.js.AccessProperty.__name__ = ["thx","js","AccessProperty"];
thx.js.AccessProperty.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessProperty.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessProperty.prototype.name = null;
thx.js.AccessProperty.prototype.get = function() {
	var n = this.name;
	return this.selection.firstNode(function(node) {
		return Reflect.field(node,n);
	});
}
thx.js.AccessProperty.prototype.remove = function() {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		Reflect.deleteField(node,n);
	});
	return this.selection;
}
thx.js.AccessProperty.prototype.string = function(v) {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		node[n] = v;
	});
	return this.selection;
}
thx.js.AccessProperty.prototype["float"] = function(v) {
	var s = "" + v;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		node[n] = s;
	});
	return this.selection;
}
thx.js.AccessProperty.prototype.__class__ = thx.js.AccessProperty;
thx.js.AccessDataProperty = function(name,selection) {
	if( name === $_ ) return;
	thx.js.AccessProperty.call(this,name,selection);
}
thx.js.AccessDataProperty.__name__ = ["thx","js","AccessDataProperty"];
thx.js.AccessDataProperty.__super__ = thx.js.AccessProperty;
for(var k in thx.js.AccessProperty.prototype ) thx.js.AccessDataProperty.prototype[k] = thx.js.AccessProperty.prototype[k];
thx.js.AccessDataProperty.prototype.stringf = function(v) {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(null == s) Reflect.deleteField(node,n); else node[n] = s;
	});
	return this.selection;
}
thx.js.AccessDataProperty.prototype.floatf = function(v) {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(null == s) Reflect.deleteField(node,n); else node[n] = "" + s;
	});
	return this.selection;
}
thx.js.AccessDataProperty.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataProperty.prototype.__class__ = thx.js.AccessDataProperty;
rg.controller.info.InfoMap = function(p) {
	if( p === $_ ) return;
	this.property = "#location";
	this.type = "geojson";
	this.colorScaleMode = rg.view.svg.chart.ColorScaleMode.FromCss();
	this.radius = function(_,_1) {
		return 10;
	};
}
rg.controller.info.InfoMap.__name__ = ["rg","controller","info","InfoMap"];
rg.controller.info.InfoMap.filters = function() {
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
	}, filter : null},{ field : "original", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "parallels", validator : function(v) {
		return Std["is"](v,Array);
	}, filter : null},{ field : "mode", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "mode", value : Type.createEnum(thx.geo.ProjectionMode,Strings.ucfirst(v.toLowerCase()),[])}];
	}},{ field : "property", validator : function(v) {
		return v == null || Std["is"](v,String);
	}, filter : null},{ field : "template", validator : function(v) {
		return Std["is"](v,String) && rg.controller.info.InfoMap.isValidTemplate(v);
	}, filter : rg.controller.info.InfoMap.fromTemplate},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabel(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "color", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "colorScaleMode", value : rg.view.svg.chart.ColorScaleModes.createFromDynamic(v)}];
	}},{ field : "radius", validator : function(v) {
		return Std["is"](v,Float) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "radius", value : Std["is"](v,Float)?function(_,_1) {
			return v;
		}:v}];
	}}];
}
rg.controller.info.InfoMap.isValidTemplate = function(t) {
	return Arrays.exists(["world","world-countries","usa-states","usa-state-centroids","usa-counties"],t.toLowerCase());
}
rg.controller.info.InfoMap.fromTemplate = function(t) {
	switch(t.toLowerCase()) {
	case "world":case "world-countries":
		return [{ field : "projection", value : "mercator"},{ field : "url", value : "http://api.reportgrid.com/geo/json/" + "world-countries.json"}];
	case "usa-states":
		return [{ field : "projection", value : "albersusa"},{ field : "url", value : "http://api.reportgrid.com/geo/json/" + "usa-states.json"}];
	case "usa-state-centroids":
		return [{ field : "projection", value : "albersusa"},{ field : "url", value : "http://api.reportgrid.com/geo/json/" + "usa-state-centroids.json"}];
	case "usa-counties":
		return [{ field : "projection", value : "albersusa"},{ field : "url", value : "http://api.reportgrid.com/geo/json/" + "usa-counties.json"}];
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("invalid projection",null,null,{ fileName : "InfoMap.hx", lineNumber : 174, className : "rg.controller.info.InfoMap", methodName : "fromTemplate"});
			return $r;
		}(this));
	}
}
rg.controller.info.InfoMap.prototype.url = null;
rg.controller.info.InfoMap.prototype.type = null;
rg.controller.info.InfoMap.prototype.scale = null;
rg.controller.info.InfoMap.prototype.projection = null;
rg.controller.info.InfoMap.prototype.classname = null;
rg.controller.info.InfoMap.prototype.translate = null;
rg.controller.info.InfoMap.prototype.origin = null;
rg.controller.info.InfoMap.prototype.parallels = null;
rg.controller.info.InfoMap.prototype.mode = null;
rg.controller.info.InfoMap.prototype.property = null;
rg.controller.info.InfoMap.prototype.label = null;
rg.controller.info.InfoMap.prototype.click = null;
rg.controller.info.InfoMap.prototype.radius = null;
rg.controller.info.InfoMap.prototype.colorScaleMode = null;
rg.controller.info.InfoMap.prototype.__class__ = rg.controller.info.InfoMap;
thx.color.Hsl = function(h,s,l) {
	if( h === $_ ) return;
	this.hue = h = Floats.circularWrap(h,360);
	this.saturation = s = Floats.normalize(s);
	this.lightness = l = Floats.normalize(l);
	thx.color.Rgb.call(this,Ints.interpolate(thx.color.Hsl._c(h + 120,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h,s,l),0,255,null),Ints.interpolate(thx.color.Hsl._c(h - 120,s,l),0,255,null));
}
thx.color.Hsl.__name__ = ["thx","color","Hsl"];
thx.color.Hsl.__super__ = thx.color.Rgb;
for(var k in thx.color.Rgb.prototype ) thx.color.Hsl.prototype[k] = thx.color.Rgb.prototype[k];
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
	var v = color.lightness * t;
	return new thx.color.Hsl(color.hue,color.saturation,Floats.interpolate(v,0,1,equation));
}
thx.color.Hsl.interpolate = function(a,b,t,equation) {
	return new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
}
thx.color.Hsl.interpolatef = function(a,b,equation) {
	return function(t) {
		return new thx.color.Hsl(Floats.interpolate(t,a.hue,b.hue,equation),Floats.interpolate(t,a.saturation,b.saturation,equation),Floats.interpolate(t,a.lightness,b.lightness,equation));
	};
}
thx.color.Hsl.prototype.hue = null;
thx.color.Hsl.prototype.saturation = null;
thx.color.Hsl.prototype.lightness = null;
thx.color.Hsl.prototype.toHslString = function() {
	return "hsl(" + this.hue + "," + this.saturation * 100 + "%," + this.lightness * 100 + "%)";
}
thx.color.Hsl.prototype.__class__ = thx.color.Hsl;
if(!thx.math.scale) thx.math.scale = {}
thx.math.scale.Linears = function() { }
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
thx.math.scale.Linears.prototype.__class__ = thx.math.scale.Linears;
thx.culture.FormatNumber = function() { }
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
thx.culture.FormatNumber.prototype.__class__ = thx.culture.FormatNumber;
rg.view.svg.widget.LabelOrientations = function() { }
rg.view.svg.widget.LabelOrientations.__name__ = ["rg","view","svg","widget","LabelOrientations"];
rg.view.svg.widget.LabelOrientations.parse = function(s) {
	return (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "ortho":case "orthogonal":
			$r = rg.view.svg.widget.LabelOrientation.Orthogonal;
			break;
		default:
			$r = rg.view.svg.widget.LabelOrientation.Aligned;
		}
		return $r;
	}(this));
}
rg.view.svg.widget.LabelOrientations.prototype.__class__ = rg.view.svg.widget.LabelOrientations;
rg.data.IAxisOrdinal = function() { }
rg.data.IAxisOrdinal.__name__ = ["rg","data","IAxisOrdinal"];
rg.data.IAxisOrdinal.prototype.first = null;
rg.data.IAxisOrdinal.prototype.last = null;
rg.data.IAxisOrdinal.prototype.allTicks = null;
rg.data.IAxisOrdinal.prototype.values = null;
rg.data.IAxisOrdinal.prototype.__class__ = rg.data.IAxisOrdinal;
rg.data.IAxisOrdinal.__interfaces__ = [rg.data.IAxisDiscrete];
rg.data.AxisOrdinal = function(p) {
	if( p === $_ ) return;
	this.setScaleDistribution(rg.data.ScaleDistribution.ScaleFit);
}
rg.data.AxisOrdinal.__name__ = ["rg","data","AxisOrdinal"];
rg.data.AxisOrdinal.prototype.scaleDistribution = null;
rg.data.AxisOrdinal.prototype.toTickmark = function(start,end,value) {
	var r = this.range(start,end);
	return new rg.data.TickmarkOrdinal(r.indexOf(value),r,null,this.scaleDistribution);
}
rg.data.AxisOrdinal.prototype.ticks = function(start,end,upperBound) {
	if(0 == upperBound) return [];
	var ticks = rg.data.TickmarkOrdinal.fromArray(this.range(start,end),this.scaleDistribution);
	return rg.data.Tickmarks.bound(ticks,upperBound);
}
rg.data.AxisOrdinal.prototype.range = function(start,end) {
	var values = this.values(), s = values.indexOf(start), e = values.indexOf(end);
	if(s < 0) throw new thx.error.Error("the start bound '{0}' is not part of the acceptable values {1}",[start,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 41, className : "rg.data.AxisOrdinal", methodName : "range"});
	if(e < 0) throw new thx.error.Error("the end bound '{0}' is not part of the acceptable values {1}",[end,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 43, className : "rg.data.AxisOrdinal", methodName : "range"});
	return values.slice(s,e + 1);
}
rg.data.AxisOrdinal.prototype.scale = function(start,end,v) {
	var values = this.values(), s = values.indexOf(start), e = values.indexOf(end), p = values.indexOf(v);
	if(s < 0) throw new thx.error.Error("the start bound '{0}' is not part of the values {1}",[start,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 54, className : "rg.data.AxisOrdinal", methodName : "scale"});
	if(e < 0) throw new thx.error.Error("the end bound '{0}' is not part of the values {1}",[end,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 56, className : "rg.data.AxisOrdinal", methodName : "scale"});
	if(p < 0) throw new thx.error.Error("the value '{0}' is not part of the values {1}",[v,values],null,{ fileName : "AxisOrdinal.hx", lineNumber : 58, className : "rg.data.AxisOrdinal", methodName : "scale"});
	return rg.data.ScaleDistributions.distribute(this.scaleDistribution,p - s,e - s + 1);
}
rg.data.AxisOrdinal.prototype.first = function() {
	return this.values()[0];
}
rg.data.AxisOrdinal.prototype.last = function() {
	return Arrays.last(this.values());
}
rg.data.AxisOrdinal.prototype.values = function() {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "AxisOrdinal.hx", lineNumber : 64, className : "rg.data.AxisOrdinal", methodName : "values"});
		return $r;
	}(this));
}
rg.data.AxisOrdinal.prototype.allTicks = function() {
	var me = this;
	var f = this.first(), l = this.last();
	return this.range(f,l).map(function(d,i) {
		return me.toTickmark(f,l,d);
	});
}
rg.data.AxisOrdinal.prototype.setScaleDistribution = function(v) {
	return this.scaleDistribution = v;
}
rg.data.AxisOrdinal.prototype.min = function(stats,meta) {
	return this.values()[0];
}
rg.data.AxisOrdinal.prototype.max = function(stats,meta) {
	return Arrays.last(this.values());
}
rg.data.AxisOrdinal.prototype.createStats = function() {
	return new rg.data.Stats();
}
rg.data.AxisOrdinal.prototype.__class__ = rg.data.AxisOrdinal;
rg.data.AxisOrdinal.__interfaces__ = [rg.data.IAxisOrdinal];
rg.controller.info.InfoVisualizationType = function(p) {
	if( p === $_ ) return;
	this.replace = true;
}
rg.controller.info.InfoVisualizationType.__name__ = ["rg","controller","info","InfoVisualizationType"];
rg.controller.info.InfoVisualizationType.filters = function() {
	return [{ field : "visualization", validator : function(v) {
		return Arrays.exists(rg.controller.Visualizations.visualizations,v.toLowerCase());
	}, filter : function(v) {
		return [{ value : v.toLowerCase(), field : "type"}];
	}},{ field : "replace", validator : function(v) {
		return Std["is"](v,Bool);
	}, filtern : null}];
}
rg.controller.info.InfoVisualizationType.prototype.replace = null;
rg.controller.info.InfoVisualizationType.prototype.type = null;
rg.controller.info.InfoVisualizationType.prototype.__class__ = rg.controller.info.InfoVisualizationType;
Std = function() { }
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
Std.prototype.__class__ = Std;
if(typeof js=='undefined') js = {}
js.Lib = function() { }
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
js.Lib.prototype.__class__ = js.Lib;
thx.js.Group = function(nodes) {
	if( nodes === $_ ) return;
	this.nodes = nodes;
}
thx.js.Group.__name__ = ["thx","js","Group"];
thx.js.Group.current = null;
thx.js.Group.prototype.parentNode = null;
thx.js.Group.prototype.nodes = null;
thx.js.Group.prototype.each = function(f) {
	var _g1 = 0, _g = this.nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(null != this.nodes[i]) f(thx.js.Group.current = this.nodes[i],i);
	}
}
thx.js.Group.prototype.iterator = function() {
	return this.nodes.iterator();
}
thx.js.Group.prototype.get = function(i) {
	return this.nodes[i];
}
thx.js.Group.prototype.count = function() {
	return this.nodes.length;
}
thx.js.Group.prototype.push = function(node) {
	this.nodes.push(node);
}
thx.js.Group.prototype.sort = function(comparator) {
	this.nodes.sort(comparator);
}
thx.js.Group.prototype.__class__ = thx.js.Group;
thx.js.BaseSelection = function(groups) {
	if( groups === $_ ) return;
	this.groups = groups;
}
thx.js.BaseSelection.__name__ = ["thx","js","BaseSelection"];
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
thx.js.BaseSelection.prototype.parentNode = null;
thx.js.BaseSelection.prototype.groups = null;
thx.js.BaseSelection.prototype.select = function(selector) {
	return this._select(function(el) {
		return thx.js.Dom.selectionEngine.select(selector,el);
	});
}
thx.js.BaseSelection.prototype.selectAll = function(selector) {
	return this._selectAll(function(el) {
		return thx.js.Dom.selectionEngine.selectAll(selector,el);
	});
}
thx.js.BaseSelection.prototype._this = function() {
	return this;
}
thx.js.BaseSelection.prototype.append = function(name) {
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
thx.js.BaseSelection.prototype.remove = function() {
	return this.eachNode(function(node,i) {
		var parent = node.parentNode;
		if(null != parent) parent.removeChild(node);
	});
}
thx.js.BaseSelection.prototype.eachNode = function(f) {
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		group.each(f);
	}
	return this;
}
thx.js.BaseSelection.prototype.insert = function(name,before,beforeSelector) {
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
thx.js.BaseSelection.prototype.sortNode = function(comparator) {
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
thx.js.BaseSelection.prototype.firstNode = function(f) {
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
thx.js.BaseSelection.prototype.node = function() {
	return this.firstNode(function(n) {
		return n;
	});
}
thx.js.BaseSelection.prototype.empty = function() {
	return null == this.firstNode(function(n) {
		return n;
	});
}
thx.js.BaseSelection.prototype.filterNode = function(f) {
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
thx.js.BaseSelection.prototype.onNode = function(type,listener,capture) {
	if(capture == null) capture = false;
	var i = type.indexOf("."), typo = i < 0?type:type.substr(0,i);
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
thx.js.BaseSelection.prototype.createSelection = function(groups) {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "Selection.hx", lineNumber : 529, className : "thx.js.BaseSelection", methodName : "createSelection"});
		return $r;
	}(this));
}
thx.js.BaseSelection.prototype._select = function(selectf) {
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
thx.js.BaseSelection.prototype._selectAll = function(selectallf) {
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
thx.js.BaseSelection.prototype.__class__ = thx.js.BaseSelection;
thx.js.UnboundSelection = function(groups) {
	if( groups === $_ ) return;
	thx.js.BaseSelection.call(this,groups);
}
thx.js.UnboundSelection.__name__ = ["thx","js","UnboundSelection"];
thx.js.UnboundSelection.__super__ = thx.js.BaseSelection;
for(var k in thx.js.BaseSelection.prototype ) thx.js.UnboundSelection.prototype[k] = thx.js.BaseSelection.prototype[k];
thx.js.UnboundSelection.prototype.html = function() {
	return new thx.js.AccessHtml(this);
}
thx.js.UnboundSelection.prototype.text = function() {
	return new thx.js.AccessText(this);
}
thx.js.UnboundSelection.prototype.attr = function(name) {
	return new thx.js.AccessAttribute(name,this);
}
thx.js.UnboundSelection.prototype.classed = function() {
	return new thx.js.AccessClassed(this);
}
thx.js.UnboundSelection.prototype.property = function(name) {
	return new thx.js.AccessProperty(name,this);
}
thx.js.UnboundSelection.prototype.style = function(name) {
	return new thx.js.AccessStyle(name,this);
}
thx.js.UnboundSelection.prototype.transition = function() {
	return new thx.js.UnboundTransition(this);
}
thx.js.UnboundSelection.prototype.data = function(d,join) {
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
thx.js.UnboundSelection.prototype.selectAllData = function(selector) {
	var selection = this.selectAll(selector);
	return new thx.js.ResumeSelection(selection.groups);
}
thx.js.UnboundSelection.prototype.__class__ = thx.js.UnboundSelection;
thx.js.Selection = function(groups) {
	if( groups === $_ ) return;
	thx.js.UnboundSelection.call(this,groups);
}
thx.js.Selection.__name__ = ["thx","js","Selection"];
thx.js.Selection.__super__ = thx.js.UnboundSelection;
for(var k in thx.js.UnboundSelection.prototype ) thx.js.Selection.prototype[k] = thx.js.UnboundSelection.prototype[k];
thx.js.Selection.current = null;
thx.js.Selection.create = function(groups) {
	return new thx.js.Selection(groups);
}
thx.js.Selection.getCurrent = function() {
	return thx.js.Dom.selectNode(thx.js.Group.current);
}
thx.js.Selection.prototype.createSelection = function(groups) {
	return new thx.js.Selection(groups);
}
thx.js.Selection.prototype.__class__ = thx.js.Selection;
thx.js.ISelectorEngine = function() { }
thx.js.ISelectorEngine.__name__ = ["thx","js","ISelectorEngine"];
thx.js.ISelectorEngine.prototype.select = null;
thx.js.ISelectorEngine.prototype.selectAll = null;
thx.js.ISelectorEngine.prototype.__class__ = thx.js.ISelectorEngine;
thx.js.SizzleEngine = function(p) {
}
thx.js.SizzleEngine.__name__ = ["thx","js","SizzleEngine"];
thx.js.SizzleEngine.prototype.select = function(selector,node) {
	return thx.js.Sizzle.select(selector,node)[0];
}
thx.js.SizzleEngine.prototype.selectNode = function(n,p) {
	return thx.js.Sizzle.select(n,p)[0];
}
thx.js.SizzleEngine.prototype.selectAll = function(selector,node) {
	return thx.js.Sizzle.uniqueSort(thx.js.Sizzle.select(selector,node));
}
thx.js.SizzleEngine.prototype.__class__ = thx.js.SizzleEngine;
thx.js.SizzleEngine.__interfaces__ = [thx.js.ISelectorEngine];
thx.js.Dom = function() { }
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
thx.js.Dom.selectNodeData = function(node) {
	return thx.js.ResumeSelection.create([new thx.js.Group([node])]);
}
thx.js.Dom.event = null;
thx.js.Dom.prototype.__class__ = thx.js.Dom;
thx.culture.Language = function() { }
thx.culture.Language.__name__ = ["thx","culture","Language"];
thx.culture.Language.__super__ = thx.culture.Info;
for(var k in thx.culture.Info.prototype ) thx.culture.Language.prototype[k] = thx.culture.Info.prototype[k];
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
thx.culture.Language.prototype.__class__ = thx.culture.Language;
rg.data.AxisOrdinalStats = function(variable) {
	if( variable === $_ ) return;
	rg.data.AxisOrdinal.call(this);
	this.variable = variable;
}
rg.data.AxisOrdinalStats.__name__ = ["rg","data","AxisOrdinalStats"];
rg.data.AxisOrdinalStats.__super__ = rg.data.AxisOrdinal;
for(var k in rg.data.AxisOrdinal.prototype ) rg.data.AxisOrdinalStats.prototype[k] = rg.data.AxisOrdinal.prototype[k];
rg.data.AxisOrdinalStats.prototype.variable = null;
rg.data.AxisOrdinalStats.prototype.values = function() {
	return this.variable.stats.values;
}
rg.data.AxisOrdinalStats.prototype.__class__ = rg.data.AxisOrdinalStats;
rg.data.Tickmarks = function() { }
rg.data.Tickmarks.__name__ = ["rg","data","Tickmarks"];
rg.data.Tickmarks.bound = function(tickmarks,max) {
	if(null == max || tickmarks.length <= (2 > max?2:max)) return tickmarks;
	var majors = Arrays.filter(tickmarks,function(d) {
		return d.getMajor();
	});
	if(majors.length > max) return rg.data.Tickmarks.reduce(majors,max);
	var result = rg.data.Tickmarks.reduce(Arrays.filter(tickmarks,function(d) {
		return !d.getMajor();
	}),max - majors.length).concat(majors);
	result.sort(function(a,b) {
		return Floats.compare(a.getDelta(),b.getDelta());
	});
	return result;
}
rg.data.Tickmarks.reduce = function(arr,max) {
	if(max == 1) return [arr[0]];
	if(max == 2) return [arr[arr.length - 1]];
	var keep = arr.length / max, result = [], i = 0;
	do result.push(arr[Math.round(keep * i++)]); while(max > result.length);
	return result;
}
rg.data.Tickmarks.string = function(tick) {
	return Dynamics.string(tick.getValue()) + " (" + (tick.getMajor()?"Major":"minor") + ", " + Floats.format(tick.getDelta()) + ")";
}
rg.data.Tickmarks.forFloat = function(start,end,value,major) {
	return new rg.data.Tickmark(value,major,(value - start) / (end - start));
}
rg.data.Tickmarks.prototype.__class__ = rg.data.Tickmarks;
thx.culture.FormatParams = function() { }
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
thx.culture.FormatParams.prototype.__class__ = thx.culture.FormatParams;
if(!rg.view.html) rg.view.html = {}
if(!rg.view.html.widget) rg.view.html.widget = {}
rg.view.html.widget.PivotTable = function(container) {
	if( container === $_ ) return;
	this.container = container;
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.displayHeatMap = true;
	this.colorStart = rg.view.html.widget.PivotTable.defaultColorStart;
	this.colorEnd = rg.view.html.widget.PivotTable.defaultColorEnd;
	this.incolumns = 1;
}
rg.view.html.widget.PivotTable.__name__ = ["rg","view","html","widget","PivotTable"];
rg.view.html.widget.PivotTable.prototype.displayColumnTotal = null;
rg.view.html.widget.PivotTable.prototype.displayRowTotal = null;
rg.view.html.widget.PivotTable.prototype.displayHeatMap = null;
rg.view.html.widget.PivotTable.prototype.colorStart = null;
rg.view.html.widget.PivotTable.prototype.colorEnd = null;
rg.view.html.widget.PivotTable.prototype.columnVariables = null;
rg.view.html.widget.PivotTable.prototype.rowVariables = null;
rg.view.html.widget.PivotTable.prototype.cellVariable = null;
rg.view.html.widget.PivotTable.prototype.incolumns = null;
rg.view.html.widget.PivotTable.prototype.click = null;
rg.view.html.widget.PivotTable.prototype.container = null;
rg.view.html.widget.PivotTable.prototype.stats = null;
rg.view.html.widget.PivotTable.prototype.labelDataPoint = function(dp,stats) {
	var v = Reflect.field(dp,this.cellVariable.type);
	return thx.culture.FormatNumber["int"](v);
}
rg.view.html.widget.PivotTable.prototype.labelDataPointOver = function(dp,stats) {
	var v = Reflect.field(dp,this.cellVariable.type);
	return thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
}
rg.view.html.widget.PivotTable.prototype.labelAxis = function(v) {
	return rg.util.Properties.humanize(v);
}
rg.view.html.widget.PivotTable.prototype.labelAxisValue = function(v,axis) {
	if(rg.util.Properties.isTime(axis)) {
		var p = rg.util.Properties.periodicity(axis);
		return rg.util.Periodicity.format(p,v);
	} else return rg.util.RGStrings.humanize(v);
}
rg.view.html.widget.PivotTable.prototype.labelTotal = function(v,stats) {
	return thx.culture.FormatNumber["int"](v);
}
rg.view.html.widget.PivotTable.prototype.labelTotalOver = function(v,stats) {
	return thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
}
rg.view.html.widget.PivotTable.prototype.data = function(dps) {
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
			})($closure(this,"onClick"),cell));
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
}
rg.view.html.widget.PivotTable.prototype.onClick = function(dp,_,_1) {
	this.click(dp);
}
rg.view.html.widget.PivotTable.prototype.formatTotal = function(v,_) {
	return this.labelTotal(v,this.stats);
}
rg.view.html.widget.PivotTable.prototype.formatTotalOver = function(v,_) {
	return this.labelTotalOver(v,this.stats);
}
rg.view.html.widget.PivotTable.prototype.formatDataPoint = function(dp,_) {
	return this.labelDataPoint(dp,this.stats);
}
rg.view.html.widget.PivotTable.prototype.formatDataPointOver = function(dp,_) {
	return this.labelDataPointOver(dp,this.stats);
}
rg.view.html.widget.PivotTable.prototype.buildValue = function(value,header,counter,tr) {
	var th = tr.append("th").attr("class").string("column value").text().string(this.labelAxisValue(value,header));
	if(counter > 1) th.attr("colspan")["float"](counter);
}
rg.view.html.widget.PivotTable.prototype.prependSpacer = function(counter,tr) {
	if(counter == 0) return;
	var th = tr.append("th").attr("class").string("spacer");
	if(counter > 1) th.attr("colspan")["float"](counter);
}
rg.view.html.widget.PivotTable.prototype.init = function() {
}
rg.view.html.widget.PivotTable.prototype.setVariables = function(variableIndependents,variableDependents) {
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
rg.view.html.widget.PivotTable.prototype.destroy = function() {
	this.container.html().string("");
}
rg.view.html.widget.PivotTable.prototype.transformData = function(dps) {
	var column_headers = [], row_headers = [], columns = [], rows = [], tcalc = new rg.data.StatsNumeric();
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
		var column = [columns[i]], ccalc = new rg.data.StatsNumeric();
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
		row[0].stats = new rg.data.StatsNumeric();
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
rg.view.html.widget.PivotTable.prototype.range = function(variable) {
	return variable.axis.range(variable.min(),variable.max());
}
rg.view.html.widget.PivotTable.prototype.__class__ = rg.view.html.widget.PivotTable;
rg.view.svg.chart.BarChart = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.addClass("bar-chart");
	this.defs = this.g.append("svg:defs");
	this.chart = this.g.append("svg:g");
	this.gradientLightness = 1.4;
	this.displayGradient = true;
	this.padding = 10;
	this.paddingAxis = 4;
	this.paddingDataPoint = 2;
}
rg.view.svg.chart.BarChart.__name__ = ["rg","view","svg","chart","BarChart"];
rg.view.svg.chart.BarChart.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.BarChart.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.BarChart.prototype.stacked = null;
rg.view.svg.chart.BarChart.prototype.chart = null;
rg.view.svg.chart.BarChart.prototype.defs = null;
rg.view.svg.chart.BarChart.prototype.dps = null;
rg.view.svg.chart.BarChart.prototype.gradientLightness = null;
rg.view.svg.chart.BarChart.prototype.displayGradient = null;
rg.view.svg.chart.BarChart.prototype.padding = null;
rg.view.svg.chart.BarChart.prototype.paddingAxis = null;
rg.view.svg.chart.BarChart.prototype.paddingDataPoint = null;
rg.view.svg.chart.BarChart.prototype.setVariables = function(variableIndependents,yVariables,data) {
	rg.view.svg.chart.CartesianChart.prototype.setVariables.call(this,variableIndependents,yVariables,data);
	if(this.stacked) {
		var _g = 0, _g1 = this.yVariables;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			v.meta.max = Math.NEGATIVE_INFINITY;
		}
		var _g1 = 0, _g = data.length;
		while(_g1 < _g) {
			var i = _g1++;
			var _g3 = 0, _g2 = data[i].length;
			while(_g3 < _g2) {
				var j = _g3++;
				var v = yVariables[j], t = 0.0;
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
rg.view.svg.chart.BarChart.prototype.data = function(dps) {
	var values = dps.length, axisgs = new Hash(), discrete, scaledist = rg.data.ScaleDistribution.ScaleFill, span;
	if(null != (discrete = Types["as"](this.xVariable.axis,rg.data.IAxisDiscrete)) && !Type.enumEq(rg.data.ScaleDistribution.ScaleFill,scaledist = discrete.scaleDistribution)) span = (this.width - this.padding * (values - 1)) / values; else span = (this.width - this.padding * (values - 1)) / values;
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
		var valuedps = dps[i], waxis = (span - this.paddingAxis * (valuedps.length - 1)) / valuedps.length;
		var _g3 = 0, _g2 = valuedps.length;
		while(_g3 < _g2) {
			var j = _g3++;
			var axisdps = valuedps[j], axisg = getGroup("group-" + j,this.chart), ytype = this.yVariables[j].type, yaxis = this.yVariables[j].axis, ymin = this.yVariables[j].min(), ymax = this.yVariables[j].max(), w = Math.max(1,(waxis - this.paddingDataPoint * (axisdps.length - 1)) / axisdps.length), offset = -span / 2 + j * (waxis + this.paddingAxis), ystats = this.yVariables[j].stats, over = (function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})($closure(this,"onmouseover"),ystats), click = (function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})($closure(this,"onclick"),ystats);
			var prev = 0.0;
			var _g5 = 0, _g4 = axisdps.length;
			while(_g5 < _g4) {
				var k = _g5++;
				var dp = axisdps[k], seggroup = getGroup("fill-" + k,axisg), x = this.width * this.xVariable.axis.scale(this.xVariable.min(),this.xVariable.max(),Reflect.field(dp,this.xVariable.type)), y = prev, h = yaxis.scale(ymin,ymax,Reflect.field(dp,ytype)) * this.height;
				var bar = seggroup.append("svg:rect").attr("class").string("bar").attr("x")["float"](this.stacked?x + offset:x + offset + k * (w + this.paddingDataPoint)).attr("width")["float"](this.stacked?waxis:w).attr("y")["float"](this.height - h - y).attr("height")["float"](h).onNode("mouseover",over);
				bar.node()["__data__"] = dp;
				if(this.displayGradient) bar.eachNode($closure(this,"applyGradient"));
				if(this.stacked) prev = y + h;
			}
		}
	}
}
rg.view.svg.chart.BarChart.prototype.onclick = function(ystats,dp,i) {
	this.click(dp,ystats);
}
rg.view.svg.chart.BarChart.prototype.onmouseover = function(ystats,n,i) {
	var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,ystats);
	if(null == text) this.tooltip.hide(); else {
		var sel = thx.js.Dom.selectNode(n), x = sel.attr("x").getFloat(), y = sel.attr("y").getFloat(), w = sel.attr("width").getFloat();
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(x + w / 2,y);
	}
}
rg.view.svg.chart.BarChart.prototype.applyGradient = function(n,i) {
	var gn = thx.js.Dom.selectNodeData(n), dp = Reflect.field(n,"__data__"), color = rg.view.svg.util.RGColors.parse(gn.style("fill").get(),"#cccccc"), id = "rg_bar_gradient_" + color.hex("");
	if(this.defs.select("#" + id).empty()) {
		var scolor = thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString();
		var gradient = this.defs.append("svg:linearGradient").attr("id").string(id).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
		gradient.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(scolor).attr("stop-opacity")["float"](1);
		gradient.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
	}
	gn.attr("style").string("fill:url(#" + id + ")");
}
rg.view.svg.chart.BarChart.prototype.__class__ = rg.view.svg.chart.BarChart;
rg.JSBridge = function() { }
rg.JSBridge.__name__ = ["rg","JSBridge"];
rg.JSBridge.log = function(msg) {
	var c = (window.console && window.console.warn) || alert;
	c(msg);
}
rg.JSBridge.main = function() {
	var r = window.ReportGrid;
	if(null == r) rg.JSBridge.log(new thx.error.Error("unable to initialize the ReportGrid visualization system, be sure to have loaded already the 'reportgrid-core.js' script",null,null,{ fileName : "JSBridge.hx", lineNumber : 32, className : "rg.JSBridge", methodName : "main"}).toString());
	var app = new rg.controller.App(r);
	r.viz = function(el,options,type) {
		var copt = rg.JSBridge.chartopt(options,type);
		var execute = function(opt) {
			try {
				app.visualization(rg.JSBridge.select(el),opt);
			} catch( $e0 ) {
				if( js.Boot.__instanceof($e0,thx.error.Error) ) {
					var e = $e0;
					rg.JSBridge.log(e.toString());
				} else {
				var e = $e0;
				rg.JSBridge.log(Std.string(e));
				}
			}
		};
		rg.controller.MVPOptions.complete(r,copt,execute);
	};
	r.barChart = function(el,options) {
		return r.viz(el,options,"barchart");
	};
	r.geo = function(el,options) {
		return r.viz(el,options,"geo");
	};
	r.funnelChart = function(el,options) {
		return r.viz(el,options,"funnelchart");
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
	r.scatterGraph = function(el,options) {
		return r.viz(el,options,"scattergraph");
	};
	r.streamGraph = function(el,options) {
		return r.viz(el,options,"streamgraph");
	};
	r.format = Dynamics.format;
	r.compare = Dynamics.compare;
	r.dump = Dynamics.string;
	r.symbol = $closure(rg.view.svg.util.SymbolCache.cache,"get");
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
		if(Std["is"](v,String) && rg.util.Properties.isTime(v)) return rg.util.Properties.periodicity(v);
		return rg.util.RGStrings.humanize(v);
	};
	r.math = { random : $closure(new thx.math.Random(666),"float")};
	r.info = null != r.info?r.info:{ };
	r.info.viz = { version : "1.0.1.638"};
}
rg.JSBridge.select = function(el) {
	var s = Std["is"](el,String)?thx.js.Dom.select(el):thx.js.Dom.selectNode(el);
	if(s.empty()) throw new thx.error.Error("invalid container '{0}'",el,null,{ fileName : "JSBridge.hx", lineNumber : 122, className : "rg.JSBridge", methodName : "select"});
	return s;
}
rg.JSBridge.opt = function(ob) {
	return null == ob?{ }:ob;
}
rg.JSBridge.chartopt = function(ob,viz) {
	ob = null == ob?{ }:ob;
	ob.options = rg.JSBridge.opt(ob.options);
	ob.options.visualization = null != viz?viz:ob.options.visualization;
	return ob;
}
rg.JSBridge.prototype.__class__ = rg.JSBridge;
rg.data.ScaleDistribution = { __ename__ : ["rg","data","ScaleDistribution"], __constructs__ : ["ScaleFit","ScaleFill","ScaleBefore","ScaleAfter"] }
rg.data.ScaleDistribution.ScaleFit = ["ScaleFit",0];
rg.data.ScaleDistribution.ScaleFit.toString = $estr;
rg.data.ScaleDistribution.ScaleFit.__enum__ = rg.data.ScaleDistribution;
rg.data.ScaleDistribution.ScaleFill = ["ScaleFill",1];
rg.data.ScaleDistribution.ScaleFill.toString = $estr;
rg.data.ScaleDistribution.ScaleFill.__enum__ = rg.data.ScaleDistribution;
rg.data.ScaleDistribution.ScaleBefore = ["ScaleBefore",2];
rg.data.ScaleDistribution.ScaleBefore.toString = $estr;
rg.data.ScaleDistribution.ScaleBefore.__enum__ = rg.data.ScaleDistribution;
rg.data.ScaleDistribution.ScaleAfter = ["ScaleAfter",3];
rg.data.ScaleDistribution.ScaleAfter.toString = $estr;
rg.data.ScaleDistribution.ScaleAfter.__enum__ = rg.data.ScaleDistribution;
rg.view.html.widget.Leadeboard = function(container) {
	if( container === $_ ) return;
	this.container = container;
	this.animated = true;
	this.animationDuration = 1500;
	this.animationEase = thx.math.Equations.elasticf();
	this.animationDelay = 150;
	this._created = 0;
	this.displayGradient = true;
	this.useMax = false;
}
rg.view.html.widget.Leadeboard.__name__ = ["rg","view","html","widget","Leadeboard"];
rg.view.html.widget.Leadeboard.prototype.variableIndependent = null;
rg.view.html.widget.Leadeboard.prototype.variableDependent = null;
rg.view.html.widget.Leadeboard.prototype.animated = null;
rg.view.html.widget.Leadeboard.prototype.animationDuration = null;
rg.view.html.widget.Leadeboard.prototype.animationDelay = null;
rg.view.html.widget.Leadeboard.prototype.animationEase = null;
rg.view.html.widget.Leadeboard.prototype.click = null;
rg.view.html.widget.Leadeboard.prototype.sortDataPoint = null;
rg.view.html.widget.Leadeboard.prototype.displayGradient = null;
rg.view.html.widget.Leadeboard.prototype.useMax = null;
rg.view.html.widget.Leadeboard.prototype.container = null;
rg.view.html.widget.Leadeboard.prototype.list = null;
rg.view.html.widget.Leadeboard.prototype._created = null;
rg.view.html.widget.Leadeboard.prototype.stats = null;
rg.view.html.widget.Leadeboard.prototype.labelDataPoint = function(dp,stats) {
	var p = Reflect.field(dp,this.variableIndependent.type);
	var v = Reflect.field(dp,this.variableDependent.type);
	return rg.util.Properties.humanize(p) + ": " + thx.culture.FormatNumber.percent(100 * v / stats.tot,1);
}
rg.view.html.widget.Leadeboard.prototype.labelDataPointOver = function(dp,stats) {
	var p = this.variableDependent.type;
	var v = Reflect.field(dp,this.variableDependent.type);
	return rg.util.Properties.humanize(p) + ": " + thx.culture.FormatNumber["int"](v);
}
rg.view.html.widget.Leadeboard.prototype.init = function() {
	this.list = this.container.append("ul").attr("class").string("leaderboard");
	this.container.append("div").attr("class").string("clear");
}
rg.view.html.widget.Leadeboard.prototype.setVariables = function(variableIndependents,variableDependents) {
	this.variableDependent = variableDependents[0];
	this.variableIndependent = variableIndependents[0];
}
rg.view.html.widget.Leadeboard.prototype.backgroundSize = function(dp,i) {
	return 100 * Reflect.field(dp,this.variableDependent.type) / (this.useMax?this.stats.max:this.stats.tot) + "%";
}
rg.view.html.widget.Leadeboard.prototype.data = function(dps) {
	var me = this;
	var name = this.variableDependent.type;
	if(null != this.sortDataPoint) dps.sort(this.sortDataPoint);
	var stats = this.stats = (function($this) {
		var $r;
		var $t = $this.variableDependent.stats;
		if(Std["is"]($t,rg.data.StatsNumeric)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this));
	var choice = this.list.selectAll("li").data(dps,$closure(this,"id"));
	var enter = choice.enter().append("li").attr("class").stringf(function(_,i) {
		return (me.displayGradient?"":"nogradient ") + "stroke-" + i;
	}).text().stringf($closure(this,"description")).attr("title").stringf($closure(this,"title"));
	if(this.displayGradient) enter.style("background-size").stringf($closure(this,"backgroundSize"));
	if(null != this.click) enter.on("click.user",$closure(this,"onClick"));
	if(this.animated) enter.style("opacity")["float"](0).eachNode($closure(this,"fadeIn")); else enter.style("opacity")["float"](1);
	var update = choice.update().select("li").text().stringf($closure(this,"description")).attr("title").stringf($closure(this,"title"));
	if(this.displayGradient) update.style("background-size").stringf($closure(this,"backgroundSize"));
	if(this.animated) choice.exit().transition().ease(this.animationEase).duration(null,this.animationDuration).style("opacity")["float"](0).remove(); else choice.exit().remove();
}
rg.view.html.widget.Leadeboard.prototype.onClick = function(dp,_) {
	this.click(dp);
}
rg.view.html.widget.Leadeboard.prototype.fadeIn = function(n,i) {
	var me = this;
	thx.js.Dom.selectNodeData(n).transition().ease(this.animationEase).duration(null,this.animationDuration).delay(null,this.animationDelay * (i - this._created)).style("opacity")["float"](1).endNode(function(_,_1) {
		me._created++;
	});
}
rg.view.html.widget.Leadeboard.prototype.description = function(dp,i) {
	return this.labelDataPoint(dp,this.stats);
}
rg.view.html.widget.Leadeboard.prototype.title = function(dp,i) {
	return this.labelDataPointOver(dp,this.stats);
}
rg.view.html.widget.Leadeboard.prototype.id = function(dp,_) {
	return rg.util.DataPoints.id(dp,[this.variableDependent.type]);
}
rg.view.html.widget.Leadeboard.prototype.__class__ = rg.view.html.widget.Leadeboard;
rg.view.frame.Orientation = { __ename__ : ["rg","view","frame","Orientation"], __constructs__ : ["Vertical","Horizontal"] }
rg.view.frame.Orientation.Vertical = ["Vertical",0];
rg.view.frame.Orientation.Vertical.toString = $estr;
rg.view.frame.Orientation.Vertical.__enum__ = rg.view.frame.Orientation;
rg.view.frame.Orientation.Horizontal = ["Horizontal",1];
rg.view.frame.Orientation.Horizontal.toString = $estr;
rg.view.frame.Orientation.Horizontal.__enum__ = rg.view.frame.Orientation;
if(!thx.culture.core) thx.culture.core = {}
thx.culture.core.DateTimeInfo = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
	if( months === $_ ) return;
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
thx.culture.core.DateTimeInfo.prototype.months = null;
thx.culture.core.DateTimeInfo.prototype.abbrMonths = null;
thx.culture.core.DateTimeInfo.prototype.days = null;
thx.culture.core.DateTimeInfo.prototype.abbrDays = null;
thx.culture.core.DateTimeInfo.prototype.shortDays = null;
thx.culture.core.DateTimeInfo.prototype.am = null;
thx.culture.core.DateTimeInfo.prototype.pm = null;
thx.culture.core.DateTimeInfo.prototype.separatorDate = null;
thx.culture.core.DateTimeInfo.prototype.separatorTime = null;
thx.culture.core.DateTimeInfo.prototype.firstWeekDay = null;
thx.culture.core.DateTimeInfo.prototype.patternYearMonth = null;
thx.culture.core.DateTimeInfo.prototype.patternMonthDay = null;
thx.culture.core.DateTimeInfo.prototype.patternDate = null;
thx.culture.core.DateTimeInfo.prototype.patternDateShort = null;
thx.culture.core.DateTimeInfo.prototype.patternDateRfc = null;
thx.culture.core.DateTimeInfo.prototype.patternDateTime = null;
thx.culture.core.DateTimeInfo.prototype.patternUniversal = null;
thx.culture.core.DateTimeInfo.prototype.patternSortable = null;
thx.culture.core.DateTimeInfo.prototype.patternTime = null;
thx.culture.core.DateTimeInfo.prototype.patternTimeShort = null;
thx.culture.core.DateTimeInfo.prototype.__class__ = thx.culture.core.DateTimeInfo;
rg.data.AxisTime = function(periodicity) {
	if( periodicity === $_ ) return;
	this.periodicity = periodicity;
	this.setScaleDistribution(rg.data.ScaleDistribution.ScaleFill);
}
rg.data.AxisTime.__name__ = ["rg","data","AxisTime"];
rg.data.AxisTime.prototype.periodicity = null;
rg.data.AxisTime.prototype.scaleDistribution = null;
rg.data.AxisTime.prototype.isMajor = function(units,value) {
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
		var series = Reflect.field(rg.data.AxisTime.snapping,this.periodicity), unit = rg.util.Periodicity.units(value,this.periodicity);
		if(null == series) return true;
		var _g = 0;
		while(_g < series.length) {
			var item = series[_g];
			++_g;
			if(units > item.to) continue;
			return 0 == unit % item.s;
		}
		var top = Reflect.field(rg.data.AxisTime.snapping,this.periodicity + "top");
		if(null == top) top = 1;
		return 0 == unit % top;
	}
}
rg.data.AxisTime.prototype.ticks = function(start,end,upperBound) {
	var me = this;
	var span = end - start, units = rg.util.Periodicity.unitsBetween(start,end,this.periodicity), values = this.range(start,end), range = values.map(function(value,i) {
		return new rg.data.TickmarkTime(value,values,me.isMajor(units,value),me.periodicity,me.scaleDistribution);
	});
	return rg.data.Tickmarks.bound(range,upperBound);
}
rg.data.AxisTime.prototype.range = function(start,end) {
	return rg.util.Periodicity.range(start,end,this.periodicity);
}
rg.data.AxisTime.prototype.scale = function(start,end,v) {
	var values = this.range(start,end);
	return rg.data.ScaleDistributions.distribute(this.scaleDistribution,values.indexOf(v),values.length);
}
rg.data.AxisTime.prototype.setScaleDistribution = function(v) {
	return this.scaleDistribution = v;
}
rg.data.AxisTime.prototype.min = function(stats,meta) {
	return stats.min;
}
rg.data.AxisTime.prototype.max = function(stats,meta) {
	return stats.max;
}
rg.data.AxisTime.prototype.createStats = function() {
	return new rg.data.StatsNumeric();
}
rg.data.AxisTime.prototype.__class__ = rg.data.AxisTime;
rg.data.AxisTime.__interfaces__ = [rg.data.IAxisDiscrete];
thx.js.Timer = function() { }
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
thx.js.Timer.prototype.__class__ = thx.js.Timer;
if(!rg.view.svg.layer) rg.view.svg.layer = {}
rg.view.svg.layer.RulesOrtho = function(panel,orientation) {
	if( panel === $_ ) return;
	rg.view.svg.panel.Layer.call(this,panel);
	this.orientation = orientation;
	this.displayMinor = true;
	this.displayMajor = true;
	this.displayAnchorLine = true;
	this.g.classed().add("tickmarks");
}
rg.view.svg.layer.RulesOrtho.__name__ = ["rg","view","svg","layer","RulesOrtho"];
rg.view.svg.layer.RulesOrtho.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.layer.RulesOrtho.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.layer.RulesOrtho.prototype.orientation = null;
rg.view.svg.layer.RulesOrtho.prototype.displayMinor = null;
rg.view.svg.layer.RulesOrtho.prototype.displayMajor = null;
rg.view.svg.layer.RulesOrtho.prototype.displayAnchorLine = null;
rg.view.svg.layer.RulesOrtho.prototype.translate = null;
rg.view.svg.layer.RulesOrtho.prototype.x1 = null;
rg.view.svg.layer.RulesOrtho.prototype.y1 = null;
rg.view.svg.layer.RulesOrtho.prototype.x2 = null;
rg.view.svg.layer.RulesOrtho.prototype.y2 = null;
rg.view.svg.layer.RulesOrtho.prototype.x = null;
rg.view.svg.layer.RulesOrtho.prototype.y = null;
rg.view.svg.layer.RulesOrtho.prototype.axis = null;
rg.view.svg.layer.RulesOrtho.prototype.min = null;
rg.view.svg.layer.RulesOrtho.prototype.max = null;
rg.view.svg.layer.RulesOrtho.prototype.resize = function() {
	if(null == this.axis) return;
	if(this.displayAnchorLine) this.updateAnchorLine();
	this.redraw();
}
rg.view.svg.layer.RulesOrtho.prototype.update = function(axis,min,max) {
	this.axis = axis;
	this.min = min;
	this.max = max;
	this.redraw();
}
rg.view.svg.layer.RulesOrtho.prototype.updateAnchorLine = function() {
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
rg.view.svg.layer.RulesOrtho.prototype.maxTicks = function() {
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
rg.view.svg.layer.RulesOrtho.prototype.id = function(d,i) {
	return "" + d.getValue();
}
rg.view.svg.layer.RulesOrtho.prototype.redraw = function() {
	var ticks = this.maxTicks(), data = this.axis.ticks(this.min,this.max,ticks);
	var rule = this.g.selectAll("g.rule").data(data,$closure(this,"id"));
	var enter = rule.enter().append("svg:g").attr("class").string("rule").attr("transform").stringf(this.translate);
	if(this.displayMinor) enter.filter(function(d,i) {
		return !d.major;
	}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf($closure(this,"tickClass"));
	if(this.displayMajor) enter.filter(function(d,i) {
		return d.major;
	}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf($closure(this,"tickClass"));
	rule.update().attr("transform").stringf(this.translate);
	rule.exit().remove();
}
rg.view.svg.layer.RulesOrtho.prototype.initf = function() {
	switch( (this.orientation)[1] ) {
	case 1:
		this.translate = $closure(this,"translateHorizontal");
		this.x1 = $closure(this,"x1Horizontal");
		this.y1 = $closure(this,"y1Horizontal");
		this.x2 = $closure(this,"x2Horizontal");
		this.y2 = $closure(this,"y2Horizontal");
		break;
	case 0:
		this.translate = $closure(this,"translateVertical");
		this.x1 = $closure(this,"x1Vertical");
		this.y1 = $closure(this,"y1Vertical");
		this.x2 = $closure(this,"x2Vertical");
		this.y2 = $closure(this,"y2Vertical");
		break;
	}
}
rg.view.svg.layer.RulesOrtho.prototype.init = function() {
	this.initf();
	if(this.displayAnchorLine) {
		this.g.append("svg:line").attr("class").string("anchor-line");
		this.updateAnchorLine();
	}
}
rg.view.svg.layer.RulesOrtho.prototype.t = function(x,y) {
	return "translate(" + x + "," + y + ")";
}
rg.view.svg.layer.RulesOrtho.prototype.translateHorizontal = function(d,i) {
	return "translate(" + 0 + "," + (this.height - d.getDelta() * this.height) + ")";
}
rg.view.svg.layer.RulesOrtho.prototype.translateVertical = function(d,i) {
	return "translate(" + d.getDelta() * this.width + "," + 0 + ")";
}
rg.view.svg.layer.RulesOrtho.prototype.x1Horizontal = function(d,i) {
	return 0;
}
rg.view.svg.layer.RulesOrtho.prototype.x1Vertical = function(d,i) {
	return 0;
}
rg.view.svg.layer.RulesOrtho.prototype.y1Horizontal = function(d,i) {
	return 0;
}
rg.view.svg.layer.RulesOrtho.prototype.y1Vertical = function(d,i) {
	return 0;
}
rg.view.svg.layer.RulesOrtho.prototype.x2Horizontal = function(d,i) {
	return this.width;
}
rg.view.svg.layer.RulesOrtho.prototype.x2Vertical = function(d,i) {
	return 0;
}
rg.view.svg.layer.RulesOrtho.prototype.y2Horizontal = function(d,i) {
	return 0;
}
rg.view.svg.layer.RulesOrtho.prototype.y2Vertical = function(d,i) {
	return this.height;
}
rg.view.svg.layer.RulesOrtho.prototype.tickClass = function(d,i) {
	return d.getMajor()?"major":null;
}
rg.view.svg.layer.RulesOrtho.prototype.__class__ = rg.view.svg.layer.RulesOrtho;
if(typeof hxevents=='undefined') hxevents = {}
hxevents.Dispatcher = function(p) {
	if( p === $_ ) return;
	this.handlers = new Array();
}
hxevents.Dispatcher.__name__ = ["hxevents","Dispatcher"];
hxevents.Dispatcher.stop = function() {
	throw hxevents.EventException.StopPropagation;
}
hxevents.Dispatcher.prototype.handlers = null;
hxevents.Dispatcher.prototype.add = function(h) {
	this.handlers.push(h);
	return h;
}
hxevents.Dispatcher.prototype.addOnce = function(h) {
	var me = this;
	var _h = null;
	_h = function(v) {
		me.remove(_h);
		h(v);
	};
	this.add(_h);
	return _h;
}
hxevents.Dispatcher.prototype.remove = function(h) {
	var _g1 = 0, _g = this.handlers.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
	}
	return null;
}
hxevents.Dispatcher.prototype.clear = function() {
	this.handlers = new Array();
}
hxevents.Dispatcher.prototype.dispatch = function(e) {
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
hxevents.Dispatcher.prototype.has = function(h) {
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
hxevents.Dispatcher.prototype.__class__ = hxevents.Dispatcher;
if(!thx.text) thx.text = {}
thx.text.ERegs = function() { }
thx.text.ERegs.__name__ = ["thx","text","ERegs"];
thx.text.ERegs.escapeERegChars = function(s) {
	return thx.text.ERegs._escapePattern.customReplace(s,function(e) {
		return "\\" + e.matched(0);
	});
}
thx.text.ERegs.prototype.__class__ = thx.text.ERegs;
if(!rg.util) rg.util = {}
rg.util.Periodicity = function() { }
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
		while(sy < ey || sm <= em) {
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
rg.util.Periodicity.prototype.__class__ = rg.util.Periodicity;
rg.view.svg.panel.Panels = function() { }
rg.view.svg.panel.Panels.__name__ = ["rg","view","svg","panel","Panels"];
rg.view.svg.panel.Panels.rootSize = function(panel) {
	var p = panel.parent;
	while(p != null) {
		var t = p;
		p = panel.parent;
		panel = t;
	}
	return { width : panel.frame.width, height : panel.frame.height};
}
rg.view.svg.panel.Panels.boundingBox = function(panel,ancestor) {
	var p = panel, x = 0, y = 0;
	while(ancestor != p) {
		x += p.frame.x;
		y += p.frame.y;
		p = p.parent;
	}
	return { x : x, y : y, width : panel.frame.width, height : panel.frame.height};
}
rg.view.svg.panel.Panels.ancestorBoundingBox = function(panel,ancestor) {
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
rg.view.svg.panel.Panels.prototype.__class__ = rg.view.svg.panel.Panels;
if(!thx.cultures) thx.cultures = {}
thx.cultures.EnUS = function(p) {
	if( p === $_ ) return;
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
thx.cultures.EnUS.__super__ = thx.culture.Culture;
for(var k in thx.culture.Culture.prototype ) thx.cultures.EnUS.prototype[k] = thx.culture.Culture.prototype[k];
thx.cultures.EnUS.culture = null;
thx.cultures.EnUS.getCulture = function() {
	if(null == thx.cultures.EnUS.culture) thx.cultures.EnUS.culture = new thx.cultures.EnUS();
	return thx.cultures.EnUS.culture;
}
thx.cultures.EnUS.prototype.__class__ = thx.cultures.EnUS;
if(!thx.date) thx.date = {}
thx.date.DateParser = function() { }
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
thx.date.DateParser.prototype.__class__ = thx.date.DateParser;
rg.controller.info.InfoGeo = function(p) {
	if( p === $_ ) return;
	this.label = new rg.controller.info.InfoLabel();
	this.map = [rg.controller.info.Info.feed(new rg.controller.info.InfoMap(),{ template : "world"})];
}
rg.controller.info.InfoGeo.__name__ = ["rg","controller","info","InfoGeo"];
rg.controller.info.InfoGeo.filters = function() {
	return [{ field : "map", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v) || Std["is"](v,Array);
	}, filter : function(v) {
		return [{ field : "map", value : (Std["is"](v,Array)?v:[v]).map(function(d,i) {
			return rg.controller.info.Info.feed(new rg.controller.info.InfoMap(),d);
		})}];
	}}];
}
rg.controller.info.InfoGeo.prototype.map = null;
rg.controller.info.InfoGeo.prototype.label = null;
rg.controller.info.InfoGeo.prototype.__class__ = rg.controller.info.InfoGeo;
rg.view.svg.chart.GradientEffects = function() { }
rg.view.svg.chart.GradientEffects.__name__ = ["rg","view","svg","chart","GradientEffects"];
rg.view.svg.chart.GradientEffects.canParse = function(d) {
	if(!Std["is"](d,String)) return false;
	var s = d, parts = s.toLowerCase().split("-");
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
rg.view.svg.chart.GradientEffects.parse = function(s) {
	var parts = s.toLowerCase().split("-");
	switch(parts.shift()) {
	case "gradient":
		var lightness = 0.75, parameters = parts.pop();
		if(null != parameters) lightness = Std.parseFloat(parameters.split(",").shift());
		return rg.view.svg.chart.GradientEffect.Gradient(lightness);
	default:
		return rg.view.svg.chart.GradientEffect.NoEffect;
	}
}
rg.view.svg.chart.GradientEffects.prototype.__class__ = rg.view.svg.chart.GradientEffects;
if(!thx.languages) thx.languages = {}
thx.languages.En = function(p) {
	if( p === $_ ) return;
	this.name = "en";
	this.english = "English";
	this["native"] = "English";
	this.iso2 = "en";
	this.iso3 = "eng";
	this.pluralRule = 1;
	thx.culture.Language.add(this);
}
thx.languages.En.__name__ = ["thx","languages","En"];
thx.languages.En.__super__ = thx.culture.Language;
for(var k in thx.culture.Language.prototype ) thx.languages.En.prototype[k] = thx.culture.Language.prototype[k];
thx.languages.En.language = null;
thx.languages.En.getLanguage = function() {
	if(null == thx.languages.En.language) thx.languages.En.language = new thx.languages.En();
	return thx.languages.En.language;
}
thx.languages.En.prototype.__class__ = thx.languages.En;
rg.data.Segmenter = function(on,transform,scale) {
	if( on === $_ ) return;
	this.on = on;
	this.transform = transform;
	this.scale = scale;
}
rg.data.Segmenter.__name__ = ["rg","data","Segmenter"];
rg.data.Segmenter.prototype.on = null;
rg.data.Segmenter.prototype.transform = null;
rg.data.Segmenter.prototype.scale = null;
rg.data.Segmenter.prototype.segment = function(data) {
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
rg.data.Segmenter.prototype.__class__ = rg.data.Segmenter;
if(!rg.view.svg.util) rg.view.svg.util = {}
rg.view.svg.util.SymbolCache = function(p) {
	if( p === $_ ) return;
	this.c = new Hash();
	this.r = 0;
}
rg.view.svg.util.SymbolCache.__name__ = ["rg","view","svg","util","SymbolCache"];
rg.view.svg.util.SymbolCache.cache = null;
rg.view.svg.util.SymbolCache.prototype.c = null;
rg.view.svg.util.SymbolCache.prototype.r = null;
rg.view.svg.util.SymbolCache.prototype.get = function(type,size) {
	if(size == null) size = 100;
	var k = type + ":" + size, s = this.c.get(k);
	if(null == s) {
		s = (Reflect.field(thx.svg.Symbol,type))(size);
		this.c.set(k,s);
	}
	return s;
}
rg.view.svg.util.SymbolCache.prototype.stats = function() {
	return { cachedSymbols : Iterators.array(this.c.iterator()).length};
}
rg.view.svg.util.SymbolCache.prototype.__class__ = rg.view.svg.util.SymbolCache;
if(!thx.translation) thx.translation = {}
thx.translation.ITranslation = function() { }
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype.domain = null;
thx.translation.ITranslation.prototype._ = null;
thx.translation.ITranslation.prototype.__ = null;
thx.translation.ITranslation.prototype.__class__ = thx.translation.ITranslation;
if(!thx.svg) thx.svg = {}
thx.svg.Diagonal = function(p) {
	if( p === $_ ) return;
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
thx.svg.Diagonal.prototype._source = null;
thx.svg.Diagonal.prototype._target = null;
thx.svg.Diagonal.prototype._projection = null;
thx.svg.Diagonal.prototype.diagonal = function(d,i) {
	var p0 = this._source(d,i), p3 = this._target(d,i), m = (p0[1] + p3[1]) / 2, p = [p0,[p0[0],m],[p3[0],m],p3];
	var p2 = p.map(this._projection);
	return "M" + p2[0][0] + "," + p2[0][1] + "C" + p2[1][0] + "," + p2[1][1] + " " + p2[2][0] + "," + p2[2][1] + " " + p2[3][0] + "," + p2[3][1];
}
thx.svg.Diagonal.prototype.getSource = function() {
	return this._source;
}
thx.svg.Diagonal.prototype.sourcef = function(x) {
	this._source = x;
	return this;
}
thx.svg.Diagonal.prototype.getTarget = function() {
	return this._target;
}
thx.svg.Diagonal.prototype.targetf = function(x) {
	this._target = x;
	return this;
}
thx.svg.Diagonal.prototype.getProjection = function() {
	return this._projection;
}
thx.svg.Diagonal.prototype.projection = function(x) {
	this._projection = x;
	return this;
}
thx.svg.Diagonal.prototype.__class__ = thx.svg.Diagonal;
thx.js.Svg = function() { }
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
thx.js.Svg.prototype.__class__ = thx.js.Svg;
rg.data.IDataSource = function() { }
rg.data.IDataSource.__name__ = ["rg","data","IDataSource"];
rg.data.IDataSource.prototype.onLoad = null;
rg.data.IDataSource.prototype.load = null;
rg.data.IDataSource.prototype.__class__ = rg.data.IDataSource;
thx.math.Const = function() { }
thx.math.Const.__name__ = ["thx","math","Const"];
thx.math.Const.prototype.__class__ = thx.math.Const;
if(!thx.util) thx.util = {}
thx.util.MacroVersion = function() { }
thx.util.MacroVersion.__name__ = ["thx","util","MacroVersion"];
thx.util.MacroVersion.prototype.__class__ = thx.util.MacroVersion;
rg.controller.factory.FactoryDataContext = function(factoryDataSource) {
	if( factoryDataSource === $_ ) return;
	this.factoryDataSource = factoryDataSource;
}
rg.controller.factory.FactoryDataContext.__name__ = ["rg","controller","factory","FactoryDataContext"];
rg.controller.factory.FactoryDataContext.prototype.factoryDataSource = null;
rg.controller.factory.FactoryDataContext.prototype.create = function(info) {
	if(info.sources.length == 0) throw new thx.error.Error("the data object does not contain valid data sources information",null,null,{ fileName : "FactoryDataContext.hx", lineNumber : 25, className : "rg.controller.factory.FactoryDataContext", methodName : "create"});
	var sources = [];
	var _g = 0, _g1 = info.sources;
	while(_g < _g1.length) {
		var src = _g1[_g];
		++_g;
		sources.push(this.factoryDataSource.create(src));
	}
	var processor = new rg.data.DataProcessor(new rg.data.Sources(sources));
	if(null != info.transform) processor.transform = function(dps) {
		var res = info.transform.apply(this,dps);
		if(null == res) return [[]];
		if(!Std["is"](res,Array)) res = [res];
		if(!Std["is"](res[0],Array)) res = [res];
		return res;
	};
	if(null != info.scale) processor.scale = function(dps) {
		var res = info.scale.apply(this,dps);
		if(null == res) return [[]];
		if(!Std["is"](res,Array)) res = [res];
		if(!Std["is"](res[0],Array)) res = [res];
		return res;
	};
	return new rg.data.DataContext(info.name,processor);
}
rg.controller.factory.FactoryDataContext.prototype.__class__ = rg.controller.factory.FactoryDataContext;
thx.math.scale.IScale = function() { }
thx.math.scale.IScale.__name__ = ["thx","math","scale","IScale"];
thx.math.scale.IScale.prototype.scale = null;
thx.math.scale.IScale.prototype.getDomain = null;
thx.math.scale.IScale.prototype.getRange = null;
thx.math.scale.IScale.prototype.__class__ = thx.math.scale.IScale;
rg.data.source.DataSourceArray = function(data) {
	if( data === $_ ) return;
	this.data = data;
	this.onLoad = new hxevents.Dispatcher();
}
rg.data.source.DataSourceArray.__name__ = ["rg","data","source","DataSourceArray"];
rg.data.source.DataSourceArray.prototype.data = null;
rg.data.source.DataSourceArray.prototype.onLoad = null;
rg.data.source.DataSourceArray.prototype.load = function() {
	this.onLoad.dispatch(this.data);
}
rg.data.source.DataSourceArray.prototype.__class__ = rg.data.source.DataSourceArray;
rg.data.source.DataSourceArray.__interfaces__ = [rg.data.IDataSource];
Floats = function() { }
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
Floats.prototype.__class__ = Floats;
rg.controller.visualization.VisualizationStreamGraph = function(layout) {
	if( layout === $_ ) return;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
}
rg.controller.visualization.VisualizationStreamGraph.__name__ = ["rg","controller","visualization","VisualizationStreamGraph"];
rg.controller.visualization.VisualizationStreamGraph.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationStreamGraph.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationStreamGraph.prototype.infoStream = null;
rg.controller.visualization.VisualizationStreamGraph.prototype.initAxes = function() {
	this.xvariable = this.independentVariables[0];
	this.yvariables = this.dependentVariables.map(function(d,_) {
		return d;
	});
}
rg.controller.visualization.VisualizationStreamGraph.prototype.initChart = function() {
	var chart = new rg.view.svg.chart.StreamGraph(this.layout.getPanel(this.layout.mainPanelName));
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
rg.controller.visualization.VisualizationStreamGraph.prototype.transformData = function(dps) {
	var segmenter = new rg.data.Segmenter(this.info.segment.on,this.info.segment.transform,this.info.segment.scale);
	return segmenter.segment(dps);
}
rg.controller.visualization.VisualizationStreamGraph.prototype.__class__ = rg.controller.visualization.VisualizationStreamGraph;
rg.view.svg.layer.Title = function(panel,text,anchor,padding,className,shadow,outline) {
	if( panel === $_ ) return;
	if(outline == null) outline = false;
	if(shadow == null) shadow = true;
	if(className == null) className = "title";
	if(padding == null) padding = 1;
	rg.view.svg.panel.Layer.call(this,panel);
	this.addClass(className);
	this.group = this.g.append("svg:g");
	this.label = new rg.view.svg.widget.Label(this.group,false,shadow,outline);
	this.label.setOrientation(rg.view.svg.widget.LabelOrientation.Orthogonal);
	this.setAnchor(anchor);
	this.setPadding(padding);
	this.setText(text);
	this.resize();
}
rg.view.svg.layer.Title.__name__ = ["rg","view","svg","layer","Title"];
rg.view.svg.layer.Title.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.layer.Title.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.layer.Title.prototype.text = null;
rg.view.svg.layer.Title.prototype.anchor = null;
rg.view.svg.layer.Title.prototype.padding = null;
rg.view.svg.layer.Title.prototype.label = null;
rg.view.svg.layer.Title.prototype.group = null;
rg.view.svg.layer.Title.prototype.idealHeight = function() {
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
rg.view.svg.layer.Title.prototype.resize = function() {
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
rg.view.svg.layer.Title.prototype.getText = function() {
	return this.label.text;
}
rg.view.svg.layer.Title.prototype.setText = function(v) {
	return this.label.setText(v);
}
rg.view.svg.layer.Title.prototype.setAnchor = function(v) {
	switch( (this.anchor = v)[1] ) {
	case 0:
		this.label.setAnchor(rg.view.svg.widget.GridAnchor.Top);
		break;
	case 1:
		this.label.setAnchor(rg.view.svg.widget.GridAnchor.Bottom);
		break;
	case 2:
		this.label.setAnchor(rg.view.svg.widget.GridAnchor.Bottom);
		break;
	case 3:
		this.label.setAnchor(rg.view.svg.widget.GridAnchor.Bottom);
		break;
	}
	return v;
}
rg.view.svg.layer.Title.prototype.setPadding = function(v) {
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
rg.view.svg.layer.Title.prototype.__class__ = rg.view.svg.layer.Title;
if(!rg.view.layout) rg.view.layout = {}
rg.view.layout.Layout = function(width,height,container) {
	if( width === $_ ) return;
	this.container = container;
	container.classed().add("rg");
	this.space = new rg.view.svg.panel.Space(width,height,container);
}
rg.view.layout.Layout.__name__ = ["rg","view","layout","Layout"];
rg.view.layout.Layout.prototype.mainPanelName = null;
rg.view.layout.Layout.prototype.space = null;
rg.view.layout.Layout.prototype.container = null;
rg.view.layout.Layout.prototype.getContext = function(name) {
	return null;
}
rg.view.layout.Layout.prototype.getPanel = function(name) {
	return null;
}
rg.view.layout.Layout.prototype.suggestSize = function(name,size) {
	var panel = this.getPanel(name);
	if(null == panel) return;
	this.suggestPanelSize(panel,size);
}
rg.view.layout.Layout.prototype.destroy = function() {
	this.container.selectAll("*").remove();
}
rg.view.layout.Layout.prototype.suggestPanelSize = function(panel,size) {
	var stackitem = Types["as"](panel.frame,rg.view.frame.StackItem);
	if(null == stackitem) return;
	var $e = (stackitem.disposition);
	switch( $e[1] ) {
	case 3:
		var a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.Fixed(b,a,size));
		break;
	default:
	}
}
rg.view.layout.Layout.prototype.suggestPanelPadding = function(panel,before,after) {
	if(null == panel) return;
	var stackitem = Types["as"](panel.frame,rg.view.frame.StackItem);
	if(null == stackitem) return;
	var $e = (stackitem.disposition);
	switch( $e[1] ) {
	case 0:
		var max = $e[5], min = $e[4], a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.Fill(null == before?b:before,null == after?a:after,min,max));
		break;
	case 1:
		var max = $e[6], min = $e[5], percent = $e[4], a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.FillPercent(null == before?b:before,null == after?a:after,percent,min,max));
		break;
	case 2:
		var ratio = $e[4], a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.FillRatio(null == before?b:before,null == after?a:after,ratio));
		break;
	case 3:
		var size = $e[4], a = $e[3], b = $e[2];
		stackitem.setDisposition(rg.view.frame.FrameLayout.Fixed(null == before?b:before,null == after?a:after,size));
		break;
	default:
	}
}
rg.view.layout.Layout.prototype.paddings = null;
rg.view.layout.Layout.prototype.feedOptions = function(info) {
	this.mainPanelName = info.main;
	this.paddings = info.padding;
}
rg.view.layout.Layout.prototype.adjustPadding = function() {
}
rg.view.layout.Layout.prototype.__class__ = rg.view.layout.Layout;
rg.controller.info.InfoDataContext = function(p) {
	if( p === $_ ) return;
	this.sources = [];
}
rg.controller.info.InfoDataContext.__name__ = ["rg","controller","info","InfoDataContext"];
rg.controller.info.InfoDataContext.filters = function() {
	return [{ field : "name", validator : function(v) {
		return Std["is"](v,String);
	}, filter : null},{ field : "transform", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "scale", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "src", validator : function(v) {
		return Std["is"](v,Array) && Iterators.all(v.iterator(),function(v1) {
			return Reflect.isObject(v1) && null == Type.getClass(v1);
		}) || Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "sources", value : Std["is"](v,Array)?v.map(function(v1,i) {
			return rg.controller.info.Info.feed(new rg.controller.info.InfoDataSource(),v1);
		}):[rg.controller.info.Info.feed(new rg.controller.info.InfoDataSource(),v)]}];
	}}];
}
rg.controller.info.InfoDataContext.prototype.name = null;
rg.controller.info.InfoDataContext.prototype.transform = null;
rg.controller.info.InfoDataContext.prototype.scale = null;
rg.controller.info.InfoDataContext.prototype.sources = null;
rg.controller.info.InfoDataContext.prototype.__class__ = rg.controller.info.InfoDataContext;
StringTools = function() { }
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
StringTools.prototype.__class__ = StringTools;
rg.view.svg.chart.GradientEffect = { __ename__ : ["rg","view","svg","chart","GradientEffect"], __constructs__ : ["NoEffect","Gradient"] }
rg.view.svg.chart.GradientEffect.NoEffect = ["NoEffect",0];
rg.view.svg.chart.GradientEffect.NoEffect.toString = $estr;
rg.view.svg.chart.GradientEffect.NoEffect.__enum__ = rg.view.svg.chart.GradientEffect;
rg.view.svg.chart.GradientEffect.Gradient = function(lightness) { var $x = ["Gradient",1,lightness]; $x.__enum__ = rg.view.svg.chart.GradientEffect; $x.toString = $estr; return $x; }
Iterables = function() { }
Iterables.__name__ = ["Iterables"];
Iterables.indexOf = function(it,v,f) {
	return Iterators.indexOf(it.iterator(),v,f);
}
Iterables.contains = function(it,v,f) {
	return Iterators.contains(it.iterator(),v,f);
}
Iterables.array = function(it) {
	return Iterators.array(it.iterator());
}
Iterables.map = function(it,f) {
	return Iterators.map(it.iterator(),f);
}
Iterables.each = function(it,f) {
	return Iterators.each(it.iterator(),f);
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
Iterables.prototype.__class__ = Iterables;
thx.culture.core.NumberInfo = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	if( decimals === $_ ) return;
	this.decimals = decimals;
	this.decimalsSeparator = decimalsSeparator;
	this.groups = groups;
	this.groupsSeparator = groupsSeparator;
	this.patternNegative = patternNegative;
	this.patternPositive = patternPositive;
}
thx.culture.core.NumberInfo.__name__ = ["thx","culture","core","NumberInfo"];
thx.culture.core.NumberInfo.prototype.decimals = null;
thx.culture.core.NumberInfo.prototype.decimalsSeparator = null;
thx.culture.core.NumberInfo.prototype.groups = null;
thx.culture.core.NumberInfo.prototype.groupsSeparator = null;
thx.culture.core.NumberInfo.prototype.patternNegative = null;
thx.culture.core.NumberInfo.prototype.patternPositive = null;
thx.culture.core.NumberInfo.prototype.__class__ = thx.culture.core.NumberInfo;
rg.controller.factory.FactoryVariable = function(knownproperties) {
	if( knownproperties === $_ ) return;
	this.knownProperties = knownproperties;
	this.independentFactory = new rg.controller.factory.FactoryVariableIndependent();
	this.dependentFactory = new rg.controller.factory.FactoryVariableDependent();
}
rg.controller.factory.FactoryVariable.__name__ = ["rg","controller","factory","FactoryVariable"];
rg.controller.factory.FactoryVariable.createFromDataContexts = function(contexts) {
	var kp = new thx.collection.Set();
	var _g = 0;
	while(_g < contexts.length) {
		var ctx = contexts[_g];
		++_g;
		var $it0 = ctx.data.sources.iterator();
		while( $it0.hasNext() ) {
			var ds = $it0.next();
			var query = Std["is"](ds,rg.data.source.DataSourceReportGrid)?ds:null;
			if(null == query) continue;
			var _g1 = 0, _g2 = query.query.exp;
			while(_g1 < _g2.length) {
				var exp = _g2[_g1];
				++_g1;
				var $e = (exp);
				switch( $e[1] ) {
				case 0:
					var p = $e[2];
					kp.add(rg.util.Properties.timeProperty(p));
					break;
				case 1:
					var n = $e[2];
					kp.add(n);
					break;
				case 2:
					kp.add("event");
					break;
				}
			}
		}
	}
	return new rg.controller.factory.FactoryVariable(kp);
}
rg.controller.factory.FactoryVariable.prototype.knownProperties = null;
rg.controller.factory.FactoryVariable.prototype.independentFactory = null;
rg.controller.factory.FactoryVariable.prototype.dependentFactory = null;
rg.controller.factory.FactoryVariable.prototype.createIndependents = function(info) {
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
				$r = !$this.knownProperties.exists(i.type);
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
rg.controller.factory.FactoryVariable.prototype.createDependents = function(info) {
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
				$r = $this.knownProperties.exists(i.type);
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
rg.controller.factory.FactoryVariable.prototype.__class__ = rg.controller.factory.FactoryVariable;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
	f1.scope = o;
	f1.method = m;
	return f1;
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
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
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
		if(x != x) return null;
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
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
Dynamics = function() { }
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
		default:
			return (function($this) {
				var $r;
				throw new thx.error.Error("Unsupported type format: {0}",null,Type["typeof"](v),{ fileName : "Dynamics.hx", lineNumber : 42, className : "Dynamics", methodName : "formatf"});
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
	if(!((Std["is"](a,Float) || Std["is"](a,Int)) && (Std["is"](b,Float) || Std["is"](b,Int))) && !Type.enumEq(ta,tb)) throw new thx.error.Error("arguments a ({0}) and b ({0}) have different types",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 57, className : "Dynamics", methodName : "interpolatef"});
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
			throw new thx.error.Error("cannot interpolate on instances of {0}",null,name,{ fileName : "Dynamics.hx", lineNumber : 75, className : "Dynamics", methodName : "interpolatef"});
		}
		break;
	default:
		throw new thx.error.Error("cannot interpolate on functions/enums/unknown",null,null,{ fileName : "Dynamics.hx", lineNumber : 77, className : "Dynamics", methodName : "interpolatef"});
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
	if(!Types.sameType(a,b)) throw new thx.error.Error("cannot compare 2 different types",null,null,{ fileName : "Dynamics.hx", lineNumber : 129, className : "Dynamics", methodName : "compare"});
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
Dynamics.clone = function(v) {
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
			var o = Type.createEmptyInstance(c);
			var _g = 0, _g1 = Reflect.fields(v);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				o[field] = Dynamics.clone(Reflect.field(v,field));
			}
			return o;
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
		throw new thx.error.Error("Unable to compare values: {0} and {1}",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 364, className : "Dynamics", methodName : "same"});
		return $r;
	}(this));
}
Dynamics.number = function(v) {
	return Number(v);
}
Dynamics.prototype.__class__ = Dynamics;
rg.data.source.DataSourceReportGrid = function(executor,path,event,query,groupby,timezone,start,end) {
	if( executor === $_ ) return;
	this.query = query;
	this.executor = executor;
	this.groupBy = groupby;
	this.timeZone = timezone;
	var e = rg.data.source.DataSourceReportGrid.normalize(query.exp);
	this.event = event;
	this.periodicity = (function($this) {
		var $r;
		var $e = (e.pop());
		switch( $e[1] ) {
		case 0:
			var p = $e[2];
			$r = p;
			break;
		default:
			$r = (function($this) {
				var $r;
				throw new thx.error.Error("normalization failed, the last value should always be a Time expression",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 78, className : "rg.data.source.DataSourceReportGrid", methodName : "new"});
				return $r;
			}($this));
		}
		return $r;
	}(this));
	this.exp = e.map($closure(this,"mapProperties"));
	this.where = query.where.map(function(d,i) {
		return (function($this) {
			var $r;
			var $e = (d);
			switch( $e[1] ) {
			case 0:
				var value = $e[3], property = $e[2];
				$r = { event : event, property : property, value : value};
				break;
			default:
				$r = (function($this) {
					var $r;
					throw new thx.error.Error("invalid data for 'where' condition",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 84, className : "rg.data.source.DataSourceReportGrid", methodName : "new"});
					return $r;
				}($this));
			}
			return $r;
		}(this));
	});
	this.operation = query.operation;
	switch( (this.operation)[1] ) {
	case 0:
		break;
	default:
		throw new thx.error.Error("RGDataSource doesn't support operation '{0}'",null,this.operation,{ fileName : "DataSourceReportGrid.hx", lineNumber : 90, className : "rg.data.source.DataSourceReportGrid", methodName : "new"});
	}
	this.path = path;
	this.timeStart = start;
	this.timeEnd = end;
	this.onLoad = new hxevents.Dispatcher();
}
rg.data.source.DataSourceReportGrid.__name__ = ["rg","data","source","DataSourceReportGrid"];
rg.data.source.DataSourceReportGrid.normalize = function(exp) {
	if(exp.length > 1) {
		var pos = -1;
		var _g1 = 0, _g = exp.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(rg.data.source.DataSourceReportGrid.isTimeProperty(exp[i])) {
				if(pos >= 0) throw new thx.error.Error("cannot perform intersections on two or more time properties",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 223, className : "rg.data.source.DataSourceReportGrid", methodName : "normalize"});
				pos = i;
			}
		}
		if(pos >= 0) return exp.slice(0,pos).concat(exp.slice(pos + 1)).concat([exp[pos]]); else return exp.copy().concat([rg.data.source.rgquery.QExp.Time("eternity")]);
	} else if(exp.length == 1) {
		var $e = (exp[0]);
		switch( $e[1] ) {
		case 1:
			var name = $e[2];
			return [exp[0],rg.data.source.rgquery.QExp.Time("eternity")];
		case 0:
			var periodicity = $e[2];
			return [rg.data.source.rgquery.QExp.Event,exp[0]];
		case 2:
			return [rg.data.source.rgquery.QExp.Event,rg.data.source.rgquery.QExp.Time("eternity")];
		}
	} else return [rg.data.source.rgquery.QExp.Event,rg.data.source.rgquery.QExp.Time("eternity")];
}
rg.data.source.DataSourceReportGrid.propertyName = function(p) {
	if(null == p.property) return p.event; else return p.event + p.property;
}
rg.data.source.DataSourceReportGrid.isTimeProperty = function(exp) {
	switch( (exp)[1] ) {
	case 0:
		return true;
	default:
		return false;
	}
}
rg.data.source.DataSourceReportGrid.prototype.executor = null;
rg.data.source.DataSourceReportGrid.prototype.exp = null;
rg.data.source.DataSourceReportGrid.prototype.operation = null;
rg.data.source.DataSourceReportGrid.prototype.where = null;
rg.data.source.DataSourceReportGrid.prototype.periodicity = null;
rg.data.source.DataSourceReportGrid.prototype.event = null;
rg.data.source.DataSourceReportGrid.prototype.path = null;
rg.data.source.DataSourceReportGrid.prototype.timeStart = null;
rg.data.source.DataSourceReportGrid.prototype.timeEnd = null;
rg.data.source.DataSourceReportGrid.prototype.groupBy = null;
rg.data.source.DataSourceReportGrid.prototype.timeZone = null;
rg.data.source.DataSourceReportGrid.prototype.transform = null;
rg.data.source.DataSourceReportGrid.prototype.query = null;
rg.data.source.DataSourceReportGrid.prototype.onLoad = null;
rg.data.source.DataSourceReportGrid.prototype.mapProperties = function(d,_) {
	var $e = (d);
	switch( $e[1] ) {
	case 1:
		var descending = $e[4], limit = $e[3], name = $e[2];
		return { event : this.event, property : name, limit : null == limit?10:limit, order : false == descending?"ascending":"descending"};
	case 2:
		return { event : this.event, property : null, limit : null, order : null};
	default:
		throw new thx.error.Error("normalization failed, only Property values should be allowed",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 66, className : "rg.data.source.DataSourceReportGrid", methodName : "mapProperties"});
	}
}
rg.data.source.DataSourceReportGrid.prototype.basicOptions = function(appendPeriodicity) {
	if(appendPeriodicity == null) appendPeriodicity = true;
	var opt = { };
	if(null != this.timeStart) opt["start"] = this.timeStart;
	if(null != this.timeEnd) {
		var e = rg.util.Periodicity.next(this.periodicity,this.timeEnd);
		opt["end"] = e;
	}
	if(appendPeriodicity) {
		opt["periodicity"] = this.periodicity;
		if(null != this.groupBy) opt["groupBy"] = this.groupBy;
		if(null != this.timeZone) opt["timeZone"] = this.timeZone;
	}
	if(this.where.length > 1) {
		var w = { };
		var _g = 0, _g1 = this.where;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			w.variable = rg.data.source.DataSourceReportGrid.propertyName(c);
			w.value = c.value;
		}
		opt["where"] = w;
	}
	return opt;
}
rg.data.source.DataSourceReportGrid.prototype.unit = function() {
	return (function($this) {
		var $r;
		switch( ($this.operation)[1] ) {
		case 0:
			$r = "count";
			break;
		default:
			$r = (function($this) {
				var $r;
				throw new thx.error.Error("unsupported operation '{0}'",null,$this.operation,{ fileName : "DataSourceReportGrid.hx", lineNumber : 136, className : "rg.data.source.DataSourceReportGrid", methodName : "unit"});
				return $r;
			}($this));
		}
		return $r;
	}(this));
}
rg.data.source.DataSourceReportGrid.prototype.load = function() {
	if(0 == this.exp.length) throw new thx.error.Error("invalid empty query",null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 144, className : "rg.data.source.DataSourceReportGrid", methodName : "load"}); else if(this.exp.length == 1 && null == this.exp[0].property || this.where.length > 0) {
		if(this.periodicity == "eternity") {
			this.transform = new rg.data.source.rgquery.transform.TransformCount({ },this.event,this.unit());
			var opt = this.basicOptions(false);
			if(this.where.length > 1) this.executor.searchCount(this.path,opt,$closure(this,"success"),$closure(this,"error")); else if(this.where.length == 1) {
				opt.property = rg.data.source.DataSourceReportGrid.propertyName(this.exp[0]);
				opt.value = this.where[0].value;
				this.executor.propertyValueCount(this.path,opt,$closure(this,"success"),$closure(this,"error"));
			} else {
				opt.property = rg.data.source.DataSourceReportGrid.propertyName(this.exp[0]);
				this.executor.propertyCount(this.path,opt,$closure(this,"success"),$closure(this,"error"));
			}
		} else {
			this.transform = new rg.data.source.rgquery.transform.TransformTimeSeries({ periodicity : this.periodicity},this.event,this.periodicity,this.unit());
			var opt = this.basicOptions(true);
			if(this.where.length > 1) this.executor.searchSeries(this.path,opt,$closure(this,"success"),$closure(this,"error")); else if(this.where.length == 1) {
				opt.property = rg.data.source.DataSourceReportGrid.propertyName(this.exp[0]);
				opt.value = this.where[0].value;
				this.executor.propertyValueSeries(this.path,opt,$closure(this,"success"),$closure(this,"error"));
			} else {
				opt.property = rg.data.source.DataSourceReportGrid.propertyName(this.exp[0]);
				this.executor.propertySeries(this.path,opt,$closure(this,"success"),$closure(this,"error"));
			}
		}
	} else {
		if(this.groupBy != null) {
			if(this.timeZone != null) this.transform = new rg.data.source.rgquery.transform.TransformIntersectGroupUtc({ },this.exp.map(function(d,_) {
				return d.property;
			}),this.event,this.periodicity,this.unit()); else this.transform = new rg.data.source.rgquery.transform.TransformIntersectGroup({ },this.exp.map(function(d,_) {
				return d.property;
			}),this.event,this.periodicity,this.unit());
		} else if(this.periodicity == "eternity") this.transform = new rg.data.source.rgquery.transform.TransformIntersect({ },this.exp.map(function(d,_) {
			return d.property;
		}),this.event,this.exp[0].order != "ascending"); else if(this.timeZone != null) this.transform = new rg.data.source.rgquery.transform.TransformIntersectUtc({ },this.exp.map(function(d,_) {
			return d.property;
		}),this.event,this.periodicity,this.unit()); else this.transform = new rg.data.source.rgquery.transform.TransformIntersectTime({ },this.exp.map(function(d,_) {
			return d.property;
		}),this.event,this.periodicity,this.unit());
		var opt = this.basicOptions(true);
		opt.properties = this.exp.map(function(p,i) {
			return { property : rg.data.source.DataSourceReportGrid.propertyName(p), limit : p.limit, order : p.order};
		});
		this.executor.intersect(this.path,opt,$closure(this,"success"),$closure(this,"error"));
	}
}
rg.data.source.DataSourceReportGrid.prototype.error = function(msg) {
	throw new thx.error.Error(msg,null,null,{ fileName : "DataSourceReportGrid.hx", lineNumber : 204, className : "rg.data.source.DataSourceReportGrid", methodName : "error"});
}
rg.data.source.DataSourceReportGrid.prototype.success = function(src) {
	var data = this.transform.transform(src);
	this.onLoad.dispatch(data);
}
rg.data.source.DataSourceReportGrid.prototype.__class__ = rg.data.source.DataSourceReportGrid;
rg.data.source.DataSourceReportGrid.__interfaces__ = [rg.data.IDataSource];
rg.controller.factory.FactorySvgVisualization = function(p) {
}
rg.controller.factory.FactorySvgVisualization.__name__ = ["rg","controller","factory","FactorySvgVisualization"];
rg.controller.factory.FactorySvgVisualization.prototype.create = function(type,layout,options) {
	switch(type) {
	case "barchart":
		var chart = new rg.controller.visualization.VisualizationBarChart(layout);
		chart.info = chart.infoBar = rg.controller.info.Info.feed(new rg.controller.info.InfoBarChart(),options);
		return chart;
	case "geo":
		var chart = new rg.controller.visualization.VisualizationGeo(layout);
		chart.info = rg.controller.info.Info.feed(new rg.controller.info.InfoGeo(),options);
		return chart;
	case "funnelchart":
		var chart = new rg.controller.visualization.VisualizationFunnelChart(layout);
		chart.info = rg.controller.info.Info.feed(new rg.controller.info.InfoFunnelChart(),options);
		return chart;
	case "heatgrid":
		var chart = new rg.controller.visualization.VisualizationHeatGrid(layout);
		chart.info = chart.infoHeatGrid = rg.controller.info.Info.feed(new rg.controller.info.InfoHeatGrid(),options);
		return chart;
	case "linechart":
		var chart = new rg.controller.visualization.VisualizationLineChart(layout);
		chart.info = chart.infoLine = rg.controller.info.Info.feed(new rg.controller.info.InfoLineChart(),options);
		return chart;
	case "piechart":
		var chart = new rg.controller.visualization.VisualizationPieChart(layout);
		chart.info = rg.controller.info.Info.feed(new rg.controller.info.InfoPieChart(),options);
		return chart;
	case "scattergraph":
		var chart = new rg.controller.visualization.VisualizationScatterGraph(layout);
		chart.info = chart.infoScatter = rg.controller.info.Info.feed(new rg.controller.info.InfoScatterGraph(),options);
		return chart;
	case "streamgraph":
		var chart = new rg.controller.visualization.VisualizationStreamGraph(layout);
		chart.info = chart.infoStream = rg.controller.info.Info.feed(new rg.controller.info.InfoStreamGraph(),options);
		return chart;
	default:
		throw new thx.error.Error("unsupported visualization type '{0}'",null,type,{ fileName : "FactorySvgVisualization.hx", lineNumber : 71, className : "rg.controller.factory.FactorySvgVisualization", methodName : "create"});
	}
}
rg.controller.factory.FactorySvgVisualization.prototype.__class__ = rg.controller.factory.FactorySvgVisualization;
thx.js.AccessText = function(selection) {
	if( selection === $_ ) return;
	thx.js.Access.call(this,selection);
}
thx.js.AccessText.__name__ = ["thx","js","AccessText"];
thx.js.AccessText.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessText.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessText.prototype.get = function() {
	return this.selection.firstNode(function(node) {
		return node.textContent;
	});
}
thx.js.AccessText.prototype.string = function(v) {
	this.clear();
	this.selection.eachNode(function(node,_) {
		node.textContent = v;
	});
	return this.selection;
}
thx.js.AccessText.prototype.clear = function() {
	this.selection.eachNode(function(node,i) {
		node.textContent = "";
	});
	return this.selection;
}
thx.js.AccessText.prototype["float"] = function(v) {
	this.clear();
	this.selection.eachNode(function(node,_) {
		node.textContent = "" + v;
	});
	return this.selection;
}
thx.js.AccessText.prototype.stringNodef = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(node,i);
		if(null != x) node.textContent = x;
	});
	return this.selection;
}
thx.js.AccessText.prototype.floatNodef = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(node,i);
		if(null != x) node.textContent = "" + x;
	});
	return this.selection;
}
thx.js.AccessText.prototype.__class__ = thx.js.AccessText;
thx.js.AccessDataText = function(selection) {
	if( selection === $_ ) return;
	thx.js.AccessText.call(this,selection);
}
thx.js.AccessDataText.__name__ = ["thx","js","AccessDataText"];
thx.js.AccessDataText.__super__ = thx.js.AccessText;
for(var k in thx.js.AccessText.prototype ) thx.js.AccessDataText.prototype[k] = thx.js.AccessText.prototype[k];
thx.js.AccessDataText.prototype.stringf = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(Reflect.field(node,"__data__"),i);
		if(null != x) node.textContent = x;
	});
	return this.selection;
}
thx.js.AccessDataText.prototype.floatf = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(Reflect.field(node,"__data__"),i);
		if(null != x) node.textContent = "" + x;
	});
	return this.selection;
}
thx.js.AccessDataText.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataText.prototype.__class__ = thx.js.AccessDataText;
rg.controller.info.InfoLayout = function(p) {
	if( p === $_ ) return;
	this.main = "main";
	this.titleOnTop = true;
	this.scalePattern = rg.view.layout.ScalePattern.ScalesAlternating;
	this.padding = new rg.controller.info.InfoPadding();
}
rg.controller.info.InfoLayout.__name__ = ["rg","controller","info","InfoLayout"];
rg.controller.info.InfoLayout.filters = function() {
	return [{ field : "layout", validator : function(v) {
		return Std["is"](v,String) && Arrays.exists(rg.controller.Visualizations.layouts,v.toLowerCase());
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
		return Arrays.exists(rg.controller.Visualizations.svg,v.toLowerCase());
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
				$r = rg.view.layout.ScalePattern.ScalesAlternating;
				break;
			case "right":
				$r = rg.view.layout.ScalePattern.ScalesAfter;
				break;
			default:
				$r = rg.view.layout.ScalePattern.ScalesBefore;
			}
			return $r;
		}(this))}];
	}},{ field : "padding", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "padding", value : rg.controller.info.Info.feed(new rg.controller.info.InfoPadding(),v)}];
	}}];
}
rg.controller.info.InfoLayout.prototype.layout = null;
rg.controller.info.InfoLayout.prototype.width = null;
rg.controller.info.InfoLayout.prototype.height = null;
rg.controller.info.InfoLayout.prototype.type = null;
rg.controller.info.InfoLayout.prototype.main = null;
rg.controller.info.InfoLayout.prototype.titleOnTop = null;
rg.controller.info.InfoLayout.prototype.scalePattern = null;
rg.controller.info.InfoLayout.prototype.padding = null;
rg.controller.info.InfoLayout.prototype.__class__ = rg.controller.info.InfoLayout;
rg.data.ITickmark = function() { }
rg.data.ITickmark.__name__ = ["rg","data","ITickmark"];
rg.data.ITickmark.prototype.delta = null;
rg.data.ITickmark.prototype.major = null;
rg.data.ITickmark.prototype.value = null;
rg.data.ITickmark.prototype.label = null;
rg.data.ITickmark.prototype.__class__ = rg.data.ITickmark;
rg.data.TickmarkOrdinal = function(pos,values,major,scaleDistribution) {
	if( pos === $_ ) return;
	if(major == null) major = true;
	this.pos = pos;
	this.values = values;
	this.scaleDistribution = scaleDistribution;
	this.major = major;
}
rg.data.TickmarkOrdinal.__name__ = ["rg","data","TickmarkOrdinal"];
rg.data.TickmarkOrdinal.fromArray = function(values,scaleDistribution) {
	return values.map(function(_,i) {
		return new rg.data.TickmarkOrdinal(i,values,null,scaleDistribution);
	});
}
rg.data.TickmarkOrdinal.prototype.pos = null;
rg.data.TickmarkOrdinal.prototype.values = null;
rg.data.TickmarkOrdinal.prototype.scaleDistribution = null;
rg.data.TickmarkOrdinal.prototype.delta = null;
rg.data.TickmarkOrdinal.prototype.getDelta = function() {
	return rg.data.ScaleDistributions.distribute(this.scaleDistribution,this.pos,this.values.length);
}
rg.data.TickmarkOrdinal.prototype.major = null;
rg.data.TickmarkOrdinal.prototype.getMajor = function() {
	return this.major;
}
rg.data.TickmarkOrdinal.prototype.value = null;
rg.data.TickmarkOrdinal.prototype.getValue = function() {
	return this.values[this.pos];
}
rg.data.TickmarkOrdinal.prototype.label = null;
rg.data.TickmarkOrdinal.prototype.getLabel = function() {
	return rg.util.RGStrings.humanize(this.values[this.pos]);
}
rg.data.TickmarkOrdinal.prototype.toString = function() {
	return rg.data.Tickmarks.string(this);
}
rg.data.TickmarkOrdinal.prototype.__class__ = rg.data.TickmarkOrdinal;
rg.data.TickmarkOrdinal.__interfaces__ = [rg.data.ITickmark];
rg.view.svg.chart.FunnelChart = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.chart.Chart.call(this,panel);
	this.padding = 2.5;
	this.flatness = 1.0;
	this.arrowSize = 30;
	this.gradientLightness = 1;
	this.displayGradient = true;
	this.labelArrow = $closure(this,"defaultLabelArrow");
	this.labelDataPoint = $closure(this,"defaultLabelDataPoint");
	this.labelDataPointOver = $closure(this,"defaultLabelDataPointOver");
}
rg.view.svg.chart.FunnelChart.__name__ = ["rg","view","svg","chart","FunnelChart"];
rg.view.svg.chart.FunnelChart.__super__ = rg.view.svg.chart.Chart;
for(var k in rg.view.svg.chart.Chart.prototype ) rg.view.svg.chart.FunnelChart.prototype[k] = rg.view.svg.chart.Chart.prototype[k];
rg.view.svg.chart.FunnelChart.prototype.padding = null;
rg.view.svg.chart.FunnelChart.prototype.flatness = null;
rg.view.svg.chart.FunnelChart.prototype.displayGradient = null;
rg.view.svg.chart.FunnelChart.prototype.gradientLightness = null;
rg.view.svg.chart.FunnelChart.prototype.arrowSize = null;
rg.view.svg.chart.FunnelChart.prototype.labelArrow = null;
rg.view.svg.chart.FunnelChart.prototype.variableIndependent = null;
rg.view.svg.chart.FunnelChart.prototype.variableDependent = null;
rg.view.svg.chart.FunnelChart.prototype.defs = null;
rg.view.svg.chart.FunnelChart.prototype.dps = null;
rg.view.svg.chart.FunnelChart.prototype.defaultLabelArrow = function(dp,stats) {
	var value = Reflect.field(dp,this.variableDependent.type) / stats.max;
	return thx.culture.FormatNumber.percent(100 * value,0);
}
rg.view.svg.chart.FunnelChart.prototype.defaultLabelDataPoint = function(dp,stats) {
	return rg.util.RGStrings.humanize(Reflect.field(dp,this.variableIndependent.type)).split(" ").join("\n");
}
rg.view.svg.chart.FunnelChart.prototype.defaultLabelDataPointOver = function(dp,stats) {
	return Ints.format(Reflect.field(dp,this.variableDependent.type));
}
rg.view.svg.chart.FunnelChart.prototype.setVariables = function(variableIndependents,variableDependents) {
	this.variableIndependent = variableIndependents[0];
	this.variableDependent = variableDependents[0];
}
rg.view.svg.chart.FunnelChart.prototype.data = function(dps) {
	this.dps = dps;
	this.redraw();
}
rg.view.svg.chart.FunnelChart.prototype.resize = function() {
	rg.view.svg.chart.Chart.prototype.resize.call(this);
	this.redraw();
}
rg.view.svg.chart.FunnelChart.prototype.dpvalue = function(dp) {
	return Reflect.field(dp,this.variableDependent.type);
}
rg.view.svg.chart.FunnelChart.prototype.stats = null;
rg.view.svg.chart.FunnelChart.prototype.topheight = null;
rg.view.svg.chart.FunnelChart.prototype.h = null;
rg.view.svg.chart.FunnelChart.prototype.scale = function(value) {
	return this.variableDependent.axis.scale(this.variableDependent.min(),this.variableDependent.max(),value);
}
rg.view.svg.chart.FunnelChart.prototype.next = function(i) {
	return this.dpvalue(this.dps[i + 1 < this.dps.length?i + 1:i]);
}
rg.view.svg.chart.FunnelChart.prototype.redraw = function() {
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
	top.attr("transform").string("translate(0," + this.topheight + ")");
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
	if(this.displayGradient) enter.eachNode($closure(this,"externalGradient"));
	var ga = this.g.selectAll("g.arrow").data(this.dps).enter().append("svg:g").attr("class").string("arrow").attr("transform").stringf(function(d,i) {
		return "translate(" + me.width / 2 + "," + (me.topheight + me.h * i + me.arrowSize / 2) + ")";
	});
	ga.each(function(d,i) {
		if(null == me.labelArrow) return;
		var text = me.labelArrow(d,me.stats);
		if(null == text) return;
		var node = thx.js.Selection.getCurrent();
		node.append("svg:path").attr("transform").string("scale(1.1,0.85)translate(1,1)").attr("class").string("shadow").style("fill").string("#000").attr("opacity")["float"](.25).attr("d").string(thx.svg.Symbol.arrowDownWide(me.arrowSize * me.arrowSize));
		node.append("svg:path").attr("transform").string("scale(1.1,0.8)").attr("d").string(thx.svg.Symbol.arrowDownWide(me.arrowSize * me.arrowSize));
		var label = new rg.view.svg.widget.Label(node,true,true,true);
		label.setAnchor(rg.view.svg.widget.GridAnchor.Bottom);
		label.setText(text);
	});
	ga.each(function(d,i) {
		if(null == me.labelDataPoint) return;
		var text = me.labelDataPoint(d,me.stats);
		if(null == text) return;
		var balloon = new rg.view.svg.widget.Balloon(me.g);
		balloon.setBoundingBox({ x : me.width / 2 + me.arrowSize / 3 * 2, y : 0, width : me.width, height : me.height});
		balloon.setPreferredSide(3);
		balloon.setText(text.split("\n"));
		balloon.moveTo(me.width / 2,me.topheight + me.h * .6 + (me.h + me.padding) * i,false);
	});
}
rg.view.svg.chart.FunnelChart.prototype.mouseOver = function(dp,i,stats) {
	if(null == this.labelDataPointOver) return;
	var text = this.labelDataPointOver(dp,stats);
	if(null == text) this.tooltip.hide(); else {
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(this.width / 2,this.topheight + this.h * .6 + (this.h + this.padding) * i,true);
	}
}
rg.view.svg.chart.FunnelChart.prototype.init = function() {
	rg.view.svg.chart.Chart.prototype.init.call(this);
	if(null != this.tooltip) this.tooltip.setPreferredSide(1);
	this.defs = this.g.classed().add("funnel-chart").append("svg:defs");
}
rg.view.svg.chart.FunnelChart.prototype.internalGradient = function(d) {
	var color = rg.view.svg.util.RGColors.parse(d.style("fill").get(),"#cccccc"), stops = this.defs.append("svg:radialGradient").attr("id").string("rg_funnel_int_gradient_0").attr("cx").string("50%").attr("fx").string("75%").attr("cy").string("20%").attr("r").string(Math.round(75) + "%");
	stops.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),1.25 * this.gradientLightness).toRgbString());
	stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),0.4 * this.gradientLightness).toRgbString());
	d.attr("style").string("fill:url(#rg_funnel_int_gradient_0)");
}
rg.view.svg.chart.FunnelChart.prototype.externalGradient = function(n,i) {
	var g = thx.js.Dom.selectNode(n), d = g.select("path"), color = thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(d.style("fill").get(),"#cccccc")), vn = this.next(i), vc = this.dpvalue(this.dps[i]), ratio = Math.round(vn / vc * 100) / 100, id = "rg_funnel_ext_gradient_" + color.hex("#") + "-" + ratio;
	var stops = this.defs.append("svg:radialGradient").attr("id").string(id).attr("cx").string("50%").attr("cy").string("0%").attr("r").string("110%");
	var top = color.hex("#");
	stops.append("svg:stop").attr("offset").string("10%").attr("stop-color").string(top);
	var middlecolor = thx.color.Hsl.darker(color,1 + Math.log(ratio) / (2.5 * this.gradientLightness)).hex("#");
	stops.append("svg:stop").attr("offset").string("50%").attr("stop-color").string(middlecolor);
	stops.append("svg:stop").attr("offset").string("90%").attr("stop-color").string(top);
	d.attr("style").string("fill:url(#" + id + ")");
}
rg.view.svg.chart.FunnelChart.prototype.__class__ = rg.view.svg.chart.FunnelChart;
rg.controller.info.InfoCartesianChart = function(p) {
	if( p === $_ ) return;
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabelAxis();
	this.segment = new rg.controller.info.InfoSegment();
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
rg.controller.info.InfoCartesianChart.__name__ = ["rg","controller","info","InfoCartesianChart"];
rg.controller.info.InfoCartesianChart.filters = function() {
	return [{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "animation", value : rg.controller.info.Info.feed(new rg.controller.info.InfoAnimation(),v)}];
	}},{ field : "segmenton", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.controller.info.Info.feed(new rg.controller.info.InfoSegment(),{ on : v})}];
	}},{ field : "segment", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "segment", value : rg.controller.info.Info.feed(new rg.controller.info.InfoSegment(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabelAxis(),v)}];
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
rg.controller.info.InfoCartesianChart.prototype.animation = null;
rg.controller.info.InfoCartesianChart.prototype.segment = null;
rg.controller.info.InfoCartesianChart.prototype.click = null;
rg.controller.info.InfoCartesianChart.prototype.label = null;
rg.controller.info.InfoCartesianChart.prototype.displayMinorTick = null;
rg.controller.info.InfoCartesianChart.prototype.displayMajorTick = null;
rg.controller.info.InfoCartesianChart.prototype.displayLabelTick = null;
rg.controller.info.InfoCartesianChart.prototype.displayAnchorLineTick = null;
rg.controller.info.InfoCartesianChart.prototype.displayMinorRule = null;
rg.controller.info.InfoCartesianChart.prototype.displayMajorRule = null;
rg.controller.info.InfoCartesianChart.prototype.displayAnchorLineRule = null;
rg.controller.info.InfoCartesianChart.prototype.labelOrientation = null;
rg.controller.info.InfoCartesianChart.prototype.labelAnchor = null;
rg.controller.info.InfoCartesianChart.prototype.labelAngle = null;
rg.controller.info.InfoCartesianChart.prototype.lengthTickMinor = null;
rg.controller.info.InfoCartesianChart.prototype.lengthTickMajor = null;
rg.controller.info.InfoCartesianChart.prototype.paddingTickMinor = null;
rg.controller.info.InfoCartesianChart.prototype.paddingTickMajor = null;
rg.controller.info.InfoCartesianChart.prototype.paddingLabel = null;
rg.controller.info.InfoCartesianChart.prototype.__class__ = rg.controller.info.InfoCartesianChart;
rg.controller.info.InfoStreamGraph = function(p) {
	if( p === $_ ) return;
	rg.controller.info.InfoCartesianChart.call(this);
	this.interpolation = thx.svg.LineInterpolator.Cardinal();
	this.effect = rg.view.svg.chart.StreamEffect.GradientVertical(0.75);
}
rg.controller.info.InfoStreamGraph.__name__ = ["rg","controller","info","InfoStreamGraph"];
rg.controller.info.InfoStreamGraph.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoStreamGraph.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoStreamGraph.filters = function() {
	return [{ field : "interpolation", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "interpolation", value : thx.svg.LineInterpolators.parse(v)}];
	}},{ field : "effect", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "effect", value : rg.view.svg.chart.StreamEffects.parse(v)}];
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
}
rg.controller.info.InfoStreamGraph.prototype.interpolation = null;
rg.controller.info.InfoStreamGraph.prototype.effect = null;
rg.controller.info.InfoStreamGraph.prototype.__class__ = rg.controller.info.InfoStreamGraph;
rg.controller.visualization.VisualizationLineChart = function(layout) {
	if( layout === $_ ) return;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
}
rg.controller.visualization.VisualizationLineChart.__name__ = ["rg","controller","visualization","VisualizationLineChart"];
rg.controller.visualization.VisualizationLineChart.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationLineChart.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationLineChart.prototype.infoLine = null;
rg.controller.visualization.VisualizationLineChart.prototype.initAxes = function() {
	this.xvariable = this.independentVariables[0];
	this.yvariables = this.dependentVariables.map(function(d,_) {
		return d;
	});
}
rg.controller.visualization.VisualizationLineChart.prototype.initChart = function() {
	var chart = new rg.view.svg.chart.LineChart(this.layout.getPanel(this.layout.mainPanelName));
	chart.symbol = this.infoLine.symbol;
	chart.symbolStyle = this.infoLine.symbolStyle;
	chart.lineInterpolator = this.infoLine.interpolation;
	chart.lineEffect = this.infoLine.effect;
	if(null == this.independentVariables[0].scaleDistribution) this.independentVariables[0].scaleDistribution = rg.data.ScaleDistribution.ScaleFill;
	if(null != this.infoLine.y0property) chart.y0property = this.infoLine.y0property; else if(this.infoLine.displayarea) chart.y0property = "";
	this.chart = chart;
}
rg.controller.visualization.VisualizationLineChart.prototype.transformData = function(dps) {
	var results = [], segmenter = new rg.data.Segmenter(this.info.segment.on,this.info.segment.transform,this.info.segment.scale);
	var _g1 = 0, _g = this.dependentVariables.length;
	while(_g1 < _g) {
		var i = _g1++;
		var variable = this.dependentVariables[i];
		var values = rg.util.DataPoints.filterByDependents(dps,[variable]);
		results.push(segmenter.segment(values));
	}
	return results;
}
rg.controller.visualization.VisualizationLineChart.prototype.__class__ = rg.controller.visualization.VisualizationLineChart;
thx.js.AccessTween = function(transition,tweens) {
	if( transition === $_ ) return;
	this.transition = transition;
	this.tweens = tweens;
}
thx.js.AccessTween.__name__ = ["thx","js","AccessTween"];
thx.js.AccessTween.prototype.transition = null;
thx.js.AccessTween.prototype.tweens = null;
thx.js.AccessTween.prototype.transitionColorTween = function(value) {
	return function(d,i,a) {
		return thx.color.Rgb.interpolatef(a,value);
	};
}
thx.js.AccessTween.prototype.transitionColorTweenf = function(f) {
	return function(d,i,a) {
		return thx.color.Rgb.interpolatef(a,f(d,i));
	};
}
thx.js.AccessTween.prototype.transitionStringTween = function(value) {
	return function(d,i,a) {
		return Strings.interpolatef(a,value);
	};
}
thx.js.AccessTween.prototype.transitionStringTweenf = function(f) {
	return function(d,i,a) {
		return Strings.interpolatef(a,f(d,i));
	};
}
thx.js.AccessTween.prototype.transitionCharsTween = function(value) {
	return function(d,i,a) {
		return Strings.interpolateCharsf(a,value);
	};
}
thx.js.AccessTween.prototype.transitionCharsTweenf = function(f) {
	return function(d,i,a) {
		return Strings.interpolateCharsf(a,f(d,i));
	};
}
thx.js.AccessTween.prototype.transitionFloatTween = function(value) {
	return function(d,i,a) {
		return Floats.interpolatef(a,value);
	};
}
thx.js.AccessTween.prototype.transitionFloatTweenf = function(f) {
	return function(d,i,a) {
		return Floats.interpolatef(a,f(d,i));
	};
}
thx.js.AccessTween.prototype._that = function() {
	return this.transition;
}
thx.js.AccessTween.prototype.__class__ = thx.js.AccessTween;
thx.js.AccessTweenStyle = function(name,transition,tweens) {
	if( name === $_ ) return;
	thx.js.AccessTween.call(this,transition,tweens);
	this.name = name;
}
thx.js.AccessTweenStyle.__name__ = ["thx","js","AccessTweenStyle"];
thx.js.AccessTweenStyle.__super__ = thx.js.AccessTween;
for(var k in thx.js.AccessTween.prototype ) thx.js.AccessTweenStyle.prototype[k] = thx.js.AccessTween.prototype[k];
thx.js.AccessTweenStyle.prototype.name = null;
thx.js.AccessTweenStyle.prototype.floatNodef = function(f,priority) {
	return this.floatTweenNodef(this.transitionFloatTweenf(f),priority);
}
thx.js.AccessTweenStyle.prototype["float"] = function(value,priority) {
	return this.floatTweenNodef(this.transitionFloatTween(value),priority);
}
thx.js.AccessTweenStyle.prototype.floatTweenNodef = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(d,i,Std.parseFloat(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,"" + f(t),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessTweenStyle.prototype.stringNodef = function(f,priority) {
	return this.stringTweenNodef(this.transitionStringTweenf(f),priority);
}
thx.js.AccessTweenStyle.prototype.string = function(value,priority) {
	return this.stringTweenNodef(this.transitionStringTween(value),priority);
}
thx.js.AccessTweenStyle.prototype.stringTweenNodef = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(d,i,js.Lib.window.getComputedStyle(d,null).getPropertyValue(name));
		return function(t) {
			d.style.setProperty(name,f(t),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessTweenStyle.prototype.colorNodef = function(f,priority) {
	return this.colorTweenNodef(this.transitionColorTweenf(f),priority);
}
thx.js.AccessTweenStyle.prototype.color = function(value,priority) {
	return this.colorTweenNodef(this.transitionColorTween(thx.color.Colors.parse(value)),priority);
}
thx.js.AccessTweenStyle.prototype.colorTweenNodef = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(d,i,thx.color.Colors.parse(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,f(t).toRgbString(),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessTweenStyle.prototype.__class__ = thx.js.AccessTweenStyle;
thx.js.AccessDataTweenStyle = function(name,transition,tweens) {
	if( name === $_ ) return;
	thx.js.AccessTweenStyle.call(this,name,transition,tweens);
}
thx.js.AccessDataTweenStyle.__name__ = ["thx","js","AccessDataTweenStyle"];
thx.js.AccessDataTweenStyle.__super__ = thx.js.AccessTweenStyle;
for(var k in thx.js.AccessTweenStyle.prototype ) thx.js.AccessDataTweenStyle.prototype[k] = thx.js.AccessTweenStyle.prototype[k];
thx.js.AccessDataTweenStyle.prototype.floatf = function(f,priority) {
	return this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}),priority);
}
thx.js.AccessDataTweenStyle.prototype.floatTweenf = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(Reflect.field(d,"__data__"),i,Std.parseFloat(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,"" + f(t),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessDataTweenStyle.prototype.stringf = function(f,priority) {
	return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}),priority);
}
thx.js.AccessDataTweenStyle.prototype.stringTweenf = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(Reflect.field(d,"__data__"),i,js.Lib.window.getComputedStyle(d,null).getPropertyValue(name));
		return function(t) {
			d.style.setProperty(name,f(t),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessDataTweenStyle.prototype.colorf = function(f,priority) {
	return this.colorTweenNodef(this.transitionColorTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}),priority);
}
thx.js.AccessDataTweenStyle.prototype.colorTweenf = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(Reflect.field(d,"__data__"),i,thx.color.Colors.parse(js.Lib.window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,f(t).toRgbString(),priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
thx.js.AccessDataTweenStyle.prototype.__class__ = thx.js.AccessDataTweenStyle;
if(!thx.json) thx.json = {}
thx.json.Json = function() { }
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
thx.json.Json.prototype.__class__ = thx.json.Json;
Strings = function() { }
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
Strings.prototype.__class__ = Strings;
rg.view.layout.LayoutX = function(width,height,container) {
	if( width === $_ ) return;
	rg.view.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
}
rg.view.layout.LayoutX.__name__ = ["rg","view","layout","LayoutX"];
rg.view.layout.LayoutX.__super__ = rg.view.layout.Layout;
for(var k in rg.view.layout.Layout.prototype ) rg.view.layout.LayoutX.prototype[k] = rg.view.layout.Layout.prototype[k];
rg.view.layout.LayoutX.prototype.main = null;
rg.view.layout.LayoutX.prototype.titleOnTop = null;
rg.view.layout.LayoutX.prototype.bottomcontainer = null;
rg.view.layout.LayoutX.prototype.bottommiddlecontainer = null;
rg.view.layout.LayoutX.prototype.maincontainer = null;
rg.view.layout.LayoutX.prototype.middlecontainer = null;
rg.view.layout.LayoutX.prototype.xtickmarks = null;
rg.view.layout.LayoutX.prototype.title = null;
rg.view.layout.LayoutX.prototype.xtitle = null;
rg.view.layout.LayoutX.prototype.getContext = function(name) {
	switch(name) {
	case "title":
		if(null == this.title) this.title = new rg.view.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.view.frame.FrameLayout.Fixed(0,0,0)),this.titleOnTop?rg.view.layout.Anchor.Bottom:rg.view.layout.Anchor.Top);
		return this.title;
	case "x":
		return this.getXTickmarks();
	case "xtitle":
		return this.getXTitle();
	default:
		return null;
	}
}
rg.view.layout.LayoutX.prototype.getPanel = function(name) {
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
rg.view.layout.LayoutX.prototype.suggestSize = function(name,size) {
	rg.view.layout.Layout.prototype.suggestSize.call(this,name,size);
	switch(name) {
	case "x":case "xtitle":
		var size1 = 0, c = this.getPanel("x");
		if(null != c) size1 += c.frame.height;
		c = this.getPanel("xtitle");
		if(null != c) size1 += c.frame.height;
		rg.view.layout.Layout.prototype.suggestSize.call(this,"xtickmarks",size1);
		break;
	}
}
rg.view.layout.LayoutX.prototype.getXTitle = function() {
	if(null == this.xtitle) this.xtitle = new rg.view.layout.PanelContext(this.getBottomMiddleContainer().createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0)),rg.view.layout.Anchor.Top);
	return this.xtitle;
}
rg.view.layout.LayoutX.prototype.getMainContainer = function() {
	if(null == this.maincontainer) this.maincontainer = this.space.createContainerAt(this.titleOnTop?1:0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Vertical);
	return this.maincontainer;
}
rg.view.layout.LayoutX.prototype.getMiddleContainer = function() {
	if(null == this.middlecontainer) this.middlecontainer = this.getMainContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Horizontal);
	return this.middlecontainer;
}
rg.view.layout.LayoutX.prototype.getBottomContainer = function() {
	if(null == this.bottomcontainer) this.bottomcontainer = this.getMainContainer().createContainerAt(1,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	return this.bottomcontainer;
}
rg.view.layout.LayoutX.prototype.getBottomMiddleContainer = function() {
	if(null == this.bottommiddlecontainer) {
		var container = this.getBottomContainer();
		this.bottommiddlecontainer = container.createContainer(rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Vertical);
		this.bottommiddlecontainer.g.classed().add("axis-x");
	}
	return this.bottommiddlecontainer;
}
rg.view.layout.LayoutX.prototype.getXTickmarks = function() {
	if(null == this.xtickmarks) {
		var container = this.getBottomMiddleContainer();
		this.xtickmarks = new rg.view.layout.PanelContext(container.createPanelAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0)),rg.view.layout.Anchor.Top);
	}
	return this.xtickmarks;
}
rg.view.layout.LayoutX.prototype.getMain = function() {
	if(null == this.main) this.main = this.getMiddleContainer().createPanelAt(1,rg.view.frame.FrameLayout.Fill(0,0));
	return this.main;
}
rg.view.layout.LayoutX.prototype.feedOptions = function(info) {
	rg.view.layout.Layout.prototype.feedOptions.call(this,info);
	this.titleOnTop = info.titleOnTop;
}
rg.view.layout.LayoutX.prototype.adjustPadding = function() {
	var top = null == this.title && null == this.paddings.top?8:this.paddings.top, bottom = (null == this.xtickmarks || !this.titleOnTop && null == this.title) && null == this.paddings.bottom?8:this.paddings.bottom, left = null == this.paddings.left?20:this.paddings.left, right = null == this.paddings.right?20:this.paddings.right;
	if(null != left || null != right) {
		this.suggestPanelPadding(this.getMain(),left,right);
		this.suggestPanelPadding(this.bottommiddlecontainer,left,right);
	}
	if(null != top || null != bottom) this.suggestPanelPadding(this.middlecontainer,top,bottom);
}
rg.view.layout.LayoutX.prototype.__class__ = rg.view.layout.LayoutX;
rg.view.layout.LayoutSimple = function(width,height,container) {
	if( width === $_ ) return;
	rg.view.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
}
rg.view.layout.LayoutSimple.__name__ = ["rg","view","layout","LayoutSimple"];
rg.view.layout.LayoutSimple.__super__ = rg.view.layout.Layout;
for(var k in rg.view.layout.Layout.prototype ) rg.view.layout.LayoutSimple.prototype[k] = rg.view.layout.Layout.prototype[k];
rg.view.layout.LayoutSimple.prototype.main = null;
rg.view.layout.LayoutSimple.prototype.titleOnTop = null;
rg.view.layout.LayoutSimple.prototype.getContext = function(name) {
	switch(name) {
	case "title":
		if(null != this.title) return null;
		return this.getTitle();
	default:
		return null;
	}
}
rg.view.layout.LayoutSimple.prototype.getPanel = function(name) {
	switch(name) {
	case "main":
		if(null == this.main) this.main = this.space.createPanelAt(this.titleOnTop?1:0,rg.view.frame.FrameLayout.Fill(0,0));
		return this.main;
	case "title":
		return this.getTitle().panel;
	default:
		return null;
	}
}
rg.view.layout.LayoutSimple.prototype.title = null;
rg.view.layout.LayoutSimple.prototype.getTitle = function() {
	if(null == this.title) this.title = new rg.view.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.view.frame.FrameLayout.Fixed(0,0,20)),this.titleOnTop?rg.view.layout.Anchor.Bottom:rg.view.layout.Anchor.Top);
	return this.title;
}
rg.view.layout.LayoutSimple.prototype.feedOptions = function(info) {
	rg.view.layout.Layout.prototype.feedOptions.call(this,info);
	this.titleOnTop = info.titleOnTop;
}
rg.view.layout.LayoutSimple.prototype.__class__ = rg.view.layout.LayoutSimple;
thx.json.JsonDecoder = function(handler,tabsize) {
	if( handler === $_ ) return;
	if(tabsize == null) tabsize = 4;
	this.handler = handler;
	this.tabsize = tabsize;
}
thx.json.JsonDecoder.__name__ = ["thx","json","JsonDecoder"];
thx.json.JsonDecoder.prototype.col = null;
thx.json.JsonDecoder.prototype.line = null;
thx.json.JsonDecoder.prototype.tabsize = null;
thx.json.JsonDecoder.prototype.src = null;
thx.json.JsonDecoder.prototype["char"] = null;
thx.json.JsonDecoder.prototype.pos = null;
thx.json.JsonDecoder.prototype.handler = null;
thx.json.JsonDecoder.prototype.decode = function(s) {
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
thx.json.JsonDecoder.prototype.ignoreWhiteSpace = function() {
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
thx.json.JsonDecoder.prototype.parse = function() {
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
thx.json.JsonDecoder.prototype.readChar = function() {
	if(null == this["char"]) {
		if(this.pos == this.src.length) throw thx.json._JsonDecoder.StreamError.Eof;
		return this.src.charAt(this.pos++);
	} else {
		var c = this["char"];
		this["char"] = null;
		return c;
	}
}
thx.json.JsonDecoder.prototype.expect = function(word) {
	var test = null == this["char"]?this.src.substr(this.pos,word.length):this["char"] + this.src.substr(this.pos,word.length - 1);
	if(test == word) {
		if(null == this["char"]) this.pos += word.length; else {
			this.pos += word.length - 1;
			this["char"] = null;
		}
		return true;
	} else return false;
}
thx.json.JsonDecoder.prototype.parseObject = function() {
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
thx.json.JsonDecoder.prototype.parseArray = function() {
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
thx.json.JsonDecoder.prototype.parseValue = function() {
	if(this.expect("true")) this.handler.bool(true); else if(this.expect("false")) this.handler.bool(false); else if(this.expect("null")) this.handler["null"](); else this.parseFloat();
}
thx.json.JsonDecoder.prototype.parseString = function() {
	this.handler.string(this._parseString());
}
thx.json.JsonDecoder.prototype._parseString = function() {
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
thx.json.JsonDecoder.prototype.parseHexa = function() {
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
thx.json.JsonDecoder.prototype.parseFloat = function() {
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
thx.json.JsonDecoder.prototype.parseDigits = function(atleast) {
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
thx.json.JsonDecoder.prototype.error = function(msg) {
	var context = this.pos == this.src.length?"":"\nrest: " + (null != this["char"]?this["char"]:"") + this.src.substr(this.pos) + "...";
	throw new thx.error.Error("error at L {0} C {1}: {2}{3}",[this.line,this.col,msg,context],null,{ fileName : "JsonDecoder.hx", lineNumber : 358, className : "thx.json.JsonDecoder", methodName : "error"});
}
thx.json.JsonDecoder.prototype.__class__ = thx.json.JsonDecoder;
if(!thx.json._JsonDecoder) thx.json._JsonDecoder = {}
thx.json._JsonDecoder.StreamError = { __ename__ : ["thx","json","_JsonDecoder","StreamError"], __constructs__ : ["Eof"] }
thx.json._JsonDecoder.StreamError.Eof = ["Eof",0];
thx.json._JsonDecoder.StreamError.Eof.toString = $estr;
thx.json._JsonDecoder.StreamError.Eof.__enum__ = thx.json._JsonDecoder.StreamError;
rg.controller.visualization.VisualizationScatterGraph = function(layout) {
	if( layout === $_ ) return;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
}
rg.controller.visualization.VisualizationScatterGraph.__name__ = ["rg","controller","visualization","VisualizationScatterGraph"];
rg.controller.visualization.VisualizationScatterGraph.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationScatterGraph.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationScatterGraph.prototype.infoScatter = null;
rg.controller.visualization.VisualizationScatterGraph.prototype.initAxes = function() {
	this.xvariable = this.independentVariables[0];
	this.yvariables = this.dependentVariables.map(function(d,_) {
		return d;
	});
}
rg.controller.visualization.VisualizationScatterGraph.prototype.initChart = function() {
	var chart = new rg.view.svg.chart.ScatterGraph(this.layout.getPanel(this.layout.mainPanelName));
	chart.symbol = this.infoScatter.symbol;
	chart.symbolStyle = this.infoScatter.symbolStyle;
	if(null == this.independentVariables[0].scaleDistribution) this.independentVariables[0].scaleDistribution = rg.data.ScaleDistribution.ScaleFill;
	this.chart = chart;
}
rg.controller.visualization.VisualizationScatterGraph.prototype.transformData = function(dps) {
	var results = [], segmenter = new rg.data.Segmenter(this.info.segment.on,this.info.segment.transform,this.info.segment.scale);
	var _g = 0, _g1 = this.dependentVariables;
	while(_g < _g1.length) {
		var variable = _g1[_g];
		++_g;
		results.push(rg.util.DataPoints.filterByDependents(dps,[variable]));
	}
	return results;
}
rg.controller.visualization.VisualizationScatterGraph.prototype.__class__ = rg.controller.visualization.VisualizationScatterGraph;
rg.controller.App = function(executor) {
	if( executor === $_ ) return;
	this.executor = executor;
	this.layouts = new Hash();
}
rg.controller.App.__name__ = ["rg","controller","App"];
rg.controller.App.nextid = function() {
	return ":RGVIZ-" + ++rg.controller.App.lastid;
}
rg.controller.App.prototype.executor = null;
rg.controller.App.prototype.layouts = null;
rg.controller.App.prototype.visualization = function(el,jsoptions) {
	var node = el.node();
	var id = node.id;
	if(null == id) node.id = id = rg.controller.App.nextid();
	var cache = new Hash();
	var params = rg.controller.info.Info.feed(new rg.controller.info.InfoVisualizationOption(),jsoptions);
	var factoryDataSource = new rg.controller.factory.FactoryDataSource(cache,this.executor);
	var factoryDataContext = new rg.controller.factory.FactoryDataContext(factoryDataSource);
	var datacontexts = params.data.map(function(d,_) {
		return factoryDataContext.create(d);
	});
	var factoryVariableContexts = rg.controller.factory.FactoryVariable.createFromDataContexts(datacontexts);
	var independentVariables = factoryVariableContexts.createIndependents(params.variables);
	var dependentVariables = factoryVariableContexts.createDependents(params.variables);
	var _g = 0;
	while(_g < datacontexts.length) {
		var context = datacontexts[_g];
		++_g;
		context.data.independentVariables = independentVariables;
		context.data.dependentVariables = dependentVariables;
	}
	var visualization = null;
	var infoviz = rg.controller.info.Info.feed(new rg.controller.info.InfoVisualizationType(),params.options);
	switch( (rg.controller.info.Info.feed(new rg.controller.info.InfoDomType(),params.options).kind)[1] ) {
	case 1:
		var layout = this.getLayout(id,params.options,el,infoviz.replace);
		visualization = new rg.controller.factory.FactorySvgVisualization().create(infoviz.type,layout,params.options);
		break;
	case 0:
		if(infoviz.replace) el.selectAll("*").remove();
		visualization = new rg.controller.factory.FactoryHtmlVisualization().create(infoviz.type,el,params.options);
		break;
	}
	visualization.setVariables(independentVariables,dependentVariables);
	visualization.init();
	var request = new rg.data.DataRequest(cache,datacontexts);
	request.onData = function(datapoints) {
		visualization.feedData(datapoints);
	};
	request.request();
	return visualization;
}
rg.controller.App.prototype.getLayout = function(id,options,container,replace) {
	var old = this.layouts.get(id);
	if(null != old) {
		if(replace) old.destroy(); else return old;
	}
	var info = rg.controller.info.Info.feed(new rg.controller.info.InfoLayout(),options), layout = new rg.controller.factory.FactoryLayout().create(info,container);
	this.layouts.set(id,layout);
	return layout;
}
rg.controller.App.prototype.__class__ = rg.controller.App;
rg.view.svg.chart.HeatGrid = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.useContour = false;
	this.setColorMode(rg.view.svg.chart.ColorScaleMode.FromCss());
}
rg.view.svg.chart.HeatGrid.__name__ = ["rg","view","svg","chart","HeatGrid"];
rg.view.svg.chart.HeatGrid.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.HeatGrid.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.HeatGrid.prototype.useContour = null;
rg.view.svg.chart.HeatGrid.prototype.colorMode = null;
rg.view.svg.chart.HeatGrid.prototype.dps = null;
rg.view.svg.chart.HeatGrid.prototype.variableDependent = null;
rg.view.svg.chart.HeatGrid.prototype.setVariables = function(variableIndependents,variableDependents,data) {
	this.xVariable = variableIndependents[0];
	this.yVariables = [variableIndependents[1]];
	this.variableDependent = variableDependents[0];
}
rg.view.svg.chart.HeatGrid.prototype.init = function() {
	rg.view.svg.chart.CartesianChart.prototype.init.call(this);
	this.g.classed().add("heat-grid");
}
rg.view.svg.chart.HeatGrid.prototype.resize = function() {
	rg.view.svg.chart.CartesianChart.prototype.resize.call(this);
	this.redraw();
}
rg.view.svg.chart.HeatGrid.prototype.data = function(dps) {
	this.dps = dps;
	this.redraw();
}
rg.view.svg.chart.HeatGrid.prototype.value = function(dp) {
	var v = Reflect.field(dp,this.variableDependent.type);
	return this.scale(v);
}
rg.view.svg.chart.HeatGrid.prototype.scale = function(v) {
	return this.variableDependent.axis.scale(this.variableDependent.min(),this.variableDependent.max(),v);
}
rg.view.svg.chart.HeatGrid.prototype.xrange = null;
rg.view.svg.chart.HeatGrid.prototype.yrange = null;
rg.view.svg.chart.HeatGrid.prototype.cols = null;
rg.view.svg.chart.HeatGrid.prototype.rows = null;
rg.view.svg.chart.HeatGrid.prototype.w = null;
rg.view.svg.chart.HeatGrid.prototype.h = null;
rg.view.svg.chart.HeatGrid.prototype.stats = null;
rg.view.svg.chart.HeatGrid.prototype.x = function(dp,i) {
	return this.xrange.indexOf(Reflect.field(dp,this.xVariable.type)) * this.w;
}
rg.view.svg.chart.HeatGrid.prototype.y = function(dp,i) {
	return this.height - (1 + this.yrange.indexOf(Reflect.field(dp,this.yVariables[0].type))) * this.h;
}
rg.view.svg.chart.HeatGrid.prototype.redraw = function() {
	if(null == this.dps || 0 == this.dps.length) return;
	this.stats = this.variableDependent.stats;
	this.xrange = this.range(this.xVariable);
	this.yrange = this.range(this.yVariables[0]);
	this.cols = this.xrange.length;
	this.rows = this.yrange.length;
	this.w = this.width / this.cols;
	this.h = this.height / this.rows;
	if(this.useContour) this.drawContour(); else this.drawSquares();
}
rg.view.svg.chart.HeatGrid.prototype.drawContour = function() {
}
rg.view.svg.chart.HeatGrid.prototype.createGridMap = function(grid) {
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
rg.view.svg.chart.HeatGrid.prototype.drawSquares = function() {
	var me = this;
	var choice = this.g.selectAll("rect").data(this.dps);
	choice.enter().append("svg:rect").attr("x").floatf($closure(this,"x")).attr("y").floatf($closure(this,"y")).attr("width")["float"](this.w).attr("height")["float"](this.h).each(function(dp,_) {
		me.stylefeature(thx.js.Selection.getCurrent(),dp);
	}).on("click",$closure(this,"onclick")).on("mouseover",$closure(this,"onmouseover"));
}
rg.view.svg.chart.HeatGrid.prototype.onmouseover = function(dp,i) {
	if(null == this.labelDataPointOver) return;
	var text = this.labelDataPointOver(dp,this.stats);
	if(null == text) this.tooltip.hide(); else {
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(this.x(dp,i) + this.w / 2,this.y(dp,i) + this.h / 2);
		this.tooltip.show();
	}
}
rg.view.svg.chart.HeatGrid.prototype.onclick = function(dp,i) {
	if(null == this.click) return;
	this.click(dp,this.stats);
}
rg.view.svg.chart.HeatGrid.prototype.range = function(variable) {
	var v = Std["is"](variable,rg.data.VariableIndependent)?variable:null;
	if(null != v) return v.axis.range(v.min(),v.max());
	var tickmarks = variable.axis.ticks(variable.min(),variable.max());
	return tickmarks.map(function(d,i) {
		return d.getValue();
	});
}
rg.view.svg.chart.HeatGrid.prototype.stylefeature = function(svg,dp) {
}
rg.view.svg.chart.HeatGrid.prototype.getColorMode = function() {
	return this.colorMode;
}
rg.view.svg.chart.HeatGrid.prototype.setColorMode = function(v) {
	var me = this;
	var $e = (this.colorMode = v);
	switch( $e[1] ) {
	case 0:
		var g = $e[2];
		if(null == g) g = rg.view.svg.util.RGCss.colorsInCss();
		this.stylefeature = function(svg,dp) {
			var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(g * t);
			svg.attr("class").string("fill-" + index);
		};
		break;
	case 2:
		var c = $e[2];
		var colors = c.map(function(d,_) {
			return d.hex("#");
		});
		this.stylefeature = function(svg,dp) {
			var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(colors.length * t);
			svg.attr("fill").string(colors[index]);
		};
		break;
	case 1:
		var colors = $e[2];
		var interpolator = thx.color.Rgb.interpolateStepsf(colors);
		this.stylefeature = function(svg,dp) {
			var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type));
			svg.attr("fill").string(interpolator(t).hex("#"));
		};
		break;
	case 3:
		var c = $e[2];
		var color = c.hex("#");
		this.stylefeature = function(svg,dp) {
			svg.attr("fill").string(color);
		};
		break;
	case 4:
		var f = $e[2];
		this.stylefeature = function(svg,dp) {
			svg.attr("fill").string(f(dp,me.variableDependent.stats));
		};
		break;
	}
	return v;
}
rg.view.svg.chart.HeatGrid.prototype.__class__ = rg.view.svg.chart.HeatGrid;
rg.view.svg.util.RGColors = function() { }
rg.view.svg.util.RGColors.__name__ = ["rg","view","svg","util","RGColors"];
rg.view.svg.util.RGColors.parse = function(s,alt) {
	try {
		var c = thx.color.Colors.parse(s);
		if(null != c) return c;
	} catch( _ ) {
	}
	return thx.color.Colors.parse(alt);
}
rg.view.svg.util.RGColors.prototype.__class__ = rg.view.svg.util.RGColors;
rg.view.frame.Stack = function(width,height,orientation) {
	if( width === $_ ) return;
	this.orientation = null == orientation?rg.view.frame.Orientation.Vertical:orientation;
	this.children = [];
	this.width = width;
	this.height = height;
}
rg.view.frame.Stack.__name__ = ["rg","view","frame","Stack"];
rg.view.frame.Stack.prototype.children = null;
rg.view.frame.Stack.prototype.width = null;
rg.view.frame.Stack.prototype.height = null;
rg.view.frame.Stack.prototype.orientation = null;
rg.view.frame.Stack.prototype.length = null;
rg.view.frame.Stack.prototype.moreSpaceRequired = function(size) {
}
rg.view.frame.Stack.prototype.insertItem = function(pos,child) {
	if(null == child) return this;
	if(pos >= this.children.length) return this.addItem(child);
	if(pos < 0) pos = 0;
	this.children.insert(pos,child);
	var f = child;
	f.setParent(this);
	this.reflow();
	return this;
}
rg.view.frame.Stack.prototype.addItem = function(child) {
	if(null == child) return this;
	this.children.push(child);
	var f = child;
	f.setParent(this);
	this.reflow();
	return this;
}
rg.view.frame.Stack.prototype.addItems = function(it) {
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
rg.view.frame.Stack.prototype.removeChild = function(child) {
	if(!this.children.remove(child)) return false;
	var f = child;
	f.setParent(null);
	this.reflow();
	return true;
}
rg.view.frame.Stack.prototype.iterator = function() {
	return this.children.iterator();
}
rg.view.frame.Stack.prototype.reflow = function() {
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
rg.view.frame.Stack.prototype.getLength = function() {
	return this.children.length;
}
rg.view.frame.Stack.prototype.setSize = function(width,height) {
	if(this.width == width && this.height == height) return this;
	this.width = width;
	this.height = height;
	this.reflow();
	return this;
}
rg.view.frame.Stack.prototype.toString = function() {
	return "Stack [width: " + this.width + ", height: " + this.height + ", children: " + this.children.length + "]";
}
rg.view.frame.Stack.prototype.__class__ = rg.view.frame.Stack;
rg.view.layout.ScalePattern = { __ename__ : ["rg","view","layout","ScalePattern"], __constructs__ : ["ScalesBefore","ScalesAfter","ScalesAlternating"] }
rg.view.layout.ScalePattern.ScalesBefore = ["ScalesBefore",0];
rg.view.layout.ScalePattern.ScalesBefore.toString = $estr;
rg.view.layout.ScalePattern.ScalesBefore.__enum__ = rg.view.layout.ScalePattern;
rg.view.layout.ScalePattern.ScalesAfter = ["ScalesAfter",1];
rg.view.layout.ScalePattern.ScalesAfter.toString = $estr;
rg.view.layout.ScalePattern.ScalesAfter.__enum__ = rg.view.layout.ScalePattern;
rg.view.layout.ScalePattern.ScalesAlternating = ["ScalesAlternating",2];
rg.view.layout.ScalePattern.ScalesAlternating.toString = $estr;
rg.view.layout.ScalePattern.ScalesAlternating.__enum__ = rg.view.layout.ScalePattern;
thx.math.scale.NumericScale = function(p) {
	if( p === $_ ) return;
	this._domain = [0.0,1.0];
	this._range = [0.0,1.0];
	this.f = Floats.interpolatef;
	this._clamp = false;
	this.rescale();
}
thx.math.scale.NumericScale.__name__ = ["thx","math","scale","NumericScale"];
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
thx.math.scale.NumericScale.prototype._domain = null;
thx.math.scale.NumericScale.prototype._range = null;
thx.math.scale.NumericScale.prototype.f = null;
thx.math.scale.NumericScale.prototype._clamp = null;
thx.math.scale.NumericScale.prototype._output = null;
thx.math.scale.NumericScale.prototype._input = null;
thx.math.scale.NumericScale.prototype.rescale = function() {
	var linear = this._domain.length == 2?thx.math.scale.NumericScale.scaleBilinear:thx.math.scale.NumericScale.scalePolylinear, uninterpolate = this._clamp?Floats.uninterpolateClampf:Floats.uninterpolatef;
	this._output = linear(this._domain,this._range,uninterpolate,this.f);
	this._input = linear(this._range,this._domain,uninterpolate,Floats.interpolatef);
	return this;
}
thx.math.scale.NumericScale.prototype.scale = function(x,_) {
	return this._output(x);
}
thx.math.scale.NumericScale.prototype.invert = function(y,_) {
	return this._input(y);
}
thx.math.scale.NumericScale.prototype.getDomain = function() {
	return this._domain;
}
thx.math.scale.NumericScale.prototype.domain = function(d) {
	this._domain = d;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.getRange = function() {
	return this._range;
}
thx.math.scale.NumericScale.prototype.range = function(r) {
	this._range = r;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.rangeRound = function(r) {
	this.range(r);
	this.interpolatef(Ints.interpolatef);
	return this;
}
thx.math.scale.NumericScale.prototype.getInterpolate = function() {
	return this.f;
}
thx.math.scale.NumericScale.prototype.interpolatef = function(x) {
	this.f = x;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.getClamp = function() {
	return this._clamp;
}
thx.math.scale.NumericScale.prototype.clamp = function(v) {
	this._clamp = v;
	return this.rescale();
}
thx.math.scale.NumericScale.prototype.ticks = function() {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 86, className : "thx.math.scale.NumericScale", methodName : "ticks"});
		return $r;
	}(this));
}
thx.math.scale.NumericScale.prototype.tickFormat = function(v,i) {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "NumericScale.hx", lineNumber : 91, className : "thx.math.scale.NumericScale", methodName : "tickFormat"});
		return $r;
	}(this));
}
thx.math.scale.NumericScale.prototype.transform = function(scale,t,a,b) {
	var range = this.getRange().map(function(v,_) {
		return (v - t) / scale;
	});
	this.domain([a,b]);
	var r = range.map($closure(this,"invert"));
	this.domain(r);
	return this;
}
thx.math.scale.NumericScale.prototype._this = function() {
	return this;
}
thx.math.scale.NumericScale.prototype.__class__ = thx.math.scale.NumericScale;
thx.math.scale.NumericScale.__interfaces__ = [thx.math.scale.IScale];
thx.math.scale.Linear = function(p) {
	if( p === $_ ) return;
	thx.math.scale.NumericScale.call(this);
	this.m = 10;
}
thx.math.scale.Linear.__name__ = ["thx","math","scale","Linear"];
thx.math.scale.Linear.__super__ = thx.math.scale.NumericScale;
for(var k in thx.math.scale.NumericScale.prototype ) thx.math.scale.Linear.prototype[k] = thx.math.scale.NumericScale.prototype[k];
thx.math.scale.Linear.prototype.m = null;
thx.math.scale.Linear.prototype.getModulo = function() {
	return this.m;
}
thx.math.scale.Linear.prototype.modulo = function(m) {
	this.m = m;
	return this;
}
thx.math.scale.Linear.prototype.tickRange = function() {
	var start = Arrays.min(this._domain), stop = Arrays.max(this._domain), span = stop - start, step = Math.pow(this.m,Math.floor(Math.log(span / this.m) / 2.302585092994046)), err = this.m / (span / step);
	if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= .75) step *= 2;
	return { start : Math.ceil(start / step) * step, stop : Math.floor(stop / step) * step + step * .5, step : step};
}
thx.math.scale.Linear.prototype.ticks = function() {
	var range = this.tickRange();
	return Floats.range(range.start,range.stop,range.step);
}
thx.math.scale.Linear.prototype.tickFormat = function(v,i) {
	var n = Math.max(this.m,-Math.floor(Math.log(this.tickRange().step) / 2.302585092994046 + .01));
	return Floats.format(v,"D:" + n);
}
thx.math.scale.Linear.prototype.__class__ = thx.math.scale.Linear;
rg.util.DataPoints = function() { }
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
rg.util.DataPoints.prototype.__class__ = rg.util.DataPoints;
thx.svg.Arc = function(p) {
	if( p === $_ ) return;
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
thx.svg.Arc.prototype._r0 = null;
thx.svg.Arc.prototype._r1 = null;
thx.svg.Arc.prototype._a0 = null;
thx.svg.Arc.prototype._a1 = null;
thx.svg.Arc.prototype.getInnerRadius = function() {
	return this._r0;
}
thx.svg.Arc.prototype.innerRadius = function(v) {
	return this.innerRadiusf(function(_,_1) {
		return v;
	});
}
thx.svg.Arc.prototype.innerRadiusf = function(v) {
	this._r0 = v;
	return this;
}
thx.svg.Arc.prototype.getOuterRadius = function() {
	return this._r1;
}
thx.svg.Arc.prototype.outerRadius = function(v) {
	return this.outerRadiusf(function(_,_1) {
		return v;
	});
}
thx.svg.Arc.prototype.outerRadiusf = function(v) {
	this._r1 = v;
	return this;
}
thx.svg.Arc.prototype.getStartAngle = function() {
	return this._a0;
}
thx.svg.Arc.prototype.startAngle = function(v) {
	return this.startAnglef(function(_,_1) {
		return v;
	});
}
thx.svg.Arc.prototype.startAnglef = function(v) {
	this._a0 = v;
	return this;
}
thx.svg.Arc.prototype.getEndAngle = function() {
	return this._a1;
}
thx.svg.Arc.prototype.endAngle = function(v) {
	return this.endAnglef(function(_,_1) {
		return v;
	});
}
thx.svg.Arc.prototype.endAnglef = function(v) {
	this._a1 = v;
	return this;
}
thx.svg.Arc.prototype.shape = function(d,i) {
	var a0 = this._a0(d,i) + thx.svg.LineInternals.arcOffset, a1 = this._a1(d,i) + thx.svg.LineInternals.arcOffset, da = a1 - a0, df = da < Math.PI?"0":"1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1), r0 = this._r0(d,i), r1 = this._r1(d,i);
	return da >= thx.svg.LineInternals.arcMax?r0 != 0?"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,1 0," + r0 + "Z":"M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z":r0 != 0?"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z":"M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
}
thx.svg.Arc.prototype.centroid = function(d,i) {
	var r = (this._r0(d,i) + this._r1(d,i)) / 2, a = (this._a0(d,i) + this._a1(d,i)) / 2 + thx.svg.LineInternals.arcOffset;
	return [Math.cos(a) * r,Math.sin(a) * r];
}
thx.svg.Arc.prototype.__class__ = thx.svg.Arc;
rg.controller.factory.FactoryHtmlVisualization = function(p) {
}
rg.controller.factory.FactoryHtmlVisualization.__name__ = ["rg","controller","factory","FactoryHtmlVisualization"];
rg.controller.factory.FactoryHtmlVisualization.prototype.create = function(type,container,options) {
	switch(type) {
	case "pivottable":
		var chart = new rg.controller.visualization.VisualizationPivotTable(container);
		chart.info = rg.controller.info.Info.feed(new rg.controller.info.InfoPivotTable(),options);
		return chart;
	case "leaderboard":
		var chart = new rg.controller.visualization.VisualizationLeaderboard(container);
		chart.info = rg.controller.info.Info.feed(new rg.controller.info.InfoLeaderboard(),options);
		return chart;
	default:
		throw new thx.error.Error("unsupported visualization '{0}'",null,type,{ fileName : "FactoryHtmlVisualization.hx", lineNumber : 35, className : "rg.controller.factory.FactoryHtmlVisualization", methodName : "create"});
	}
	return null;
}
rg.controller.factory.FactoryHtmlVisualization.prototype.__class__ = rg.controller.factory.FactoryHtmlVisualization;
rg.data.TickmarkTime = function(value,values,major,periodicity,scaleDistribution) {
	if( value === $_ ) return;
	rg.data.TickmarkOrdinal.call(this,values.indexOf(value),values,major,scaleDistribution);
	this.periodicity = periodicity;
}
rg.data.TickmarkTime.__name__ = ["rg","data","TickmarkTime"];
rg.data.TickmarkTime.__super__ = rg.data.TickmarkOrdinal;
for(var k in rg.data.TickmarkOrdinal.prototype ) rg.data.TickmarkTime.prototype[k] = rg.data.TickmarkOrdinal.prototype[k];
rg.data.TickmarkTime.prototype.periodicity = null;
rg.data.TickmarkTime.prototype.getLabel = function() {
	return rg.util.Periodicity.smartFormat(this.periodicity,this.values[this.pos]);
}
rg.data.TickmarkTime.prototype.__class__ = rg.data.TickmarkTime;
rg.data.source.rgquery.transform.TransformIntersectUtc = function(properties,fields,event,periodicity,unit) {
	if( properties === $_ ) return;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.fields = fields;
	this.event = event;
}
rg.data.source.rgquery.transform.TransformIntersectUtc.__name__ = ["rg","data","source","rgquery","transform","TransformIntersectUtc"];
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.unit = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.transform = function(data) {
	var items = Objects.flatten(data,this.fields.length), properties = this.properties, unit = this.unit;
	if(null == items || 0 == items.length) return [];
	var result = [];
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var arr = item.value;
		var _g2 = 0, _g1 = arr.length;
		while(_g2 < _g1) {
			var i = _g2++;
			var p = Dynamics.clone(properties);
			Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
			Objects.addFields(p,[rg.util.Properties.timeProperty(this.periodicity),unit],[Date.fromString(arr[i][0].datetime),arr[i][1]]);
			p.event = this.event;
			result.push(p);
		}
	}
	return result;
}
rg.data.source.rgquery.transform.TransformIntersectUtc.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersectUtc;
rg.data.source.rgquery.transform.TransformIntersectUtc.__interfaces__ = [rg.data.source.ITransform];
List = function(p) {
	if( p === $_ ) return;
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
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
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
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
List.prototype.join = function(sep) {
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
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
thx.util.Message = function(message,params,param) {
	if( message === $_ ) return;
	this.message = message;
	if(null == params) this.params = []; else this.params = params;
	if(null != param) this.params.push(param);
}
thx.util.Message.__name__ = ["thx","util","Message"];
thx.util.Message.prototype.message = null;
thx.util.Message.prototype.params = null;
thx.util.Message.prototype.toString = function() {
	return Strings.format(this.message,this.params);
}
thx.util.Message.prototype.translatef = function(translator) {
	return Strings.format(translator(this.message),this.params);
}
thx.util.Message.prototype.translate = function(translator,domain) {
	if(null == domain) domain = translator.getDomain();
	var culture = thx.culture.Culture.get(domain);
	if(this.params.length == 1 && Std["is"](this.params[0],Int)) return Strings.format(translator.__(null,this.message,this.params[0],domain),this.params,null,culture); else return Strings.format(translator._(this.message,domain),this.params,null,culture);
}
thx.util.Message.prototype.__class__ = thx.util.Message;
if(!thx.error) thx.error = {}
thx.error.Error = function(message,params,param,pos) {
	if( message === $_ ) return;
	thx.util.Message.call(this,message,params,param);
	this.pos = pos;
}
thx.error.Error.__name__ = ["thx","error","Error"];
thx.error.Error.__super__ = thx.util.Message;
for(var k in thx.util.Message.prototype ) thx.error.Error.prototype[k] = thx.util.Message.prototype[k];
thx.error.Error.prototype.pos = null;
thx.error.Error.prototype.inner = null;
thx.error.Error.prototype.setInner = function(inner) {
	this.inner = inner;
	return this;
}
thx.error.Error.prototype.toStringError = function(pattern) {
	var prefix = Strings.format(null == pattern?thx.error.Error.errorPositionPattern:pattern,[this.pos.className,this.pos.methodName,this.pos.lineNumber,this.pos.fileName,this.pos.customParams]);
	return prefix + this.toString();
}
thx.error.Error.prototype.toString = function() {
	try {
		return Strings.format(this.message,this.params);
	} catch( e ) {
		var ps = this.pos.className + "." + this.pos.methodName + "(" + this.pos.lineNumber + ")";
		return "";
	}
}
thx.error.Error.prototype.__class__ = thx.error.Error;
thx.error.AbstractMethod = function(posInfo) {
	if( posInfo === $_ ) return;
	thx.error.Error.call(this,"method {0}.{1}() is abstract",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "AbstractMethod.hx", lineNumber : 14, className : "thx.error.AbstractMethod", methodName : "new"});
}
thx.error.AbstractMethod.__name__ = ["thx","error","AbstractMethod"];
thx.error.AbstractMethod.__super__ = thx.error.Error;
for(var k in thx.error.Error.prototype ) thx.error.AbstractMethod.prototype[k] = thx.error.Error.prototype[k];
thx.error.AbstractMethod.prototype.__class__ = thx.error.AbstractMethod;
rg.util.RGStrings = function() { }
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
	return Strings.capitalize(Strings.humanize(s));
}
rg.util.RGStrings.prototype.__class__ = rg.util.RGStrings;
if(!thx.geom) thx.geom = {}
thx.geom.Contour = function() { }
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
thx.geom.Contour.prototype.__class__ = thx.geom.Contour;
rg.view.layout.PanelContext = function(panel,anchor) {
	if( panel === $_ ) return;
	this.panel = panel;
	this.anchor = anchor;
}
rg.view.layout.PanelContext.__name__ = ["rg","view","layout","PanelContext"];
rg.view.layout.PanelContext.prototype.panel = null;
rg.view.layout.PanelContext.prototype.anchor = null;
rg.view.layout.PanelContext.prototype.__class__ = rg.view.layout.PanelContext;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
thx.js.AccessAttribute = function(name,selection) {
	if( name === $_ ) return;
	thx.js.Access.call(this,selection);
	this.name = name;
	this.qname = thx.xml.Namespace.qualify(name);
}
thx.js.AccessAttribute.__name__ = ["thx","js","AccessAttribute"];
thx.js.AccessAttribute.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessAttribute.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessAttribute.prototype.name = null;
thx.js.AccessAttribute.prototype.qname = null;
thx.js.AccessAttribute.prototype.get = function() {
	var n = this.name, q = this.qname;
	return this.selection.firstNode(function(node) {
		return q == null?node.getAttribute(n):node.getAttributeNS(q.space,q.local);
	});
}
thx.js.AccessAttribute.prototype.getFloat = function() {
	var v = this.get();
	if(thx.js.AccessAttribute.refloat.match(v)) return Std.parseFloat(thx.js.AccessAttribute.refloat.matched(1)); else return Math.NaN;
}
thx.js.AccessAttribute.prototype.remove = function() {
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
thx.js.AccessAttribute.prototype.string = function(v) {
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
thx.js.AccessAttribute.prototype["float"] = function(v) {
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
thx.js.AccessAttribute.prototype.__class__ = thx.js.AccessAttribute;
thx.js.AccessDataAttribute = function(name,selection) {
	if( name === $_ ) return;
	thx.js.AccessAttribute.call(this,name,selection);
}
thx.js.AccessDataAttribute.__name__ = ["thx","js","AccessDataAttribute"];
thx.js.AccessDataAttribute.__super__ = thx.js.AccessAttribute;
for(var k in thx.js.AccessAttribute.prototype ) thx.js.AccessDataAttribute.prototype[k] = thx.js.AccessAttribute.prototype[k];
thx.js.AccessDataAttribute.prototype.stringf = function(v) {
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
thx.js.AccessDataAttribute.prototype.floatf = function(v) {
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
thx.js.AccessDataAttribute.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataAttribute.prototype.__class__ = thx.js.AccessDataAttribute;
Enums = function() { }
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
Enums.prototype.__class__ = Enums;
rg.data.Variable = function(type,scaleDistribution) {
	if( type === $_ ) return;
	this.type = type;
	this.scaleDistribution = scaleDistribution;
	this.meta = { };
}
rg.data.Variable.__name__ = ["rg","data","Variable"];
rg.data.Variable.prototype.type = null;
rg.data.Variable.prototype.scaleDistribution = null;
rg.data.Variable.prototype.axis = null;
rg.data.Variable.prototype.stats = null;
rg.data.Variable.prototype.meta = null;
rg.data.Variable.prototype.minf = null;
rg.data.Variable.prototype.maxf = null;
rg.data.Variable.prototype.setAxis = function(axis) {
	this.axis = axis;
	if(null != axis) this.stats = axis.createStats(); else this.stats = null;
}
rg.data.Variable.prototype.min = function() {
	return (this.getMinF())(this.stats,this.meta);
}
rg.data.Variable.prototype.max = function() {
	return (this.getMaxF())(this.stats,this.meta);
}
rg.data.Variable.prototype.setMinF = function(f) {
	return this.minf = f;
}
rg.data.Variable.prototype.setMaxF = function(f) {
	return this.maxf = f;
}
rg.data.Variable.prototype.getMinF = function() {
	if(null == this.minf) {
		if(null == this.axis) throw new thx.error.Error("axis is null in '{0}' variable (required by min)",[this.type],null,{ fileName : "Variable.hx", lineNumber : 48, className : "rg.data.Variable", methodName : "getMinF"});
		this.setMinF($closure(this.axis,"min"));
	}
	return this.minf;
}
rg.data.Variable.prototype.getMaxF = function() {
	if(null == this.maxf) {
		if(null == this.axis) throw new thx.error.Error("axis is null in '{0}' variable (required by max)",[this.type],null,{ fileName : "Variable.hx", lineNumber : 59, className : "rg.data.Variable", methodName : "getMaxF"});
		this.setMaxF($closure(this.axis,"max"));
	}
	return this.maxf;
}
rg.data.Variable.prototype.__class__ = rg.data.Variable;
rg.data.VariableIndependent = function(type,scaleDistribution) {
	if( type === $_ ) return;
	rg.data.Variable.call(this,type,scaleDistribution);
}
rg.data.VariableIndependent.__name__ = ["rg","data","VariableIndependent"];
rg.data.VariableIndependent.__super__ = rg.data.Variable;
for(var k in rg.data.Variable.prototype ) rg.data.VariableIndependent.prototype[k] = rg.data.Variable.prototype[k];
rg.data.VariableIndependent.prototype.__class__ = rg.data.VariableIndependent;
thx.math.scale.LinearT = function(p) {
	if( p === $_ ) return;
	this._domain = [0.0,1.0];
	this._range = null;
	this.f = thx.math.scale.LinearT._f;
	this._clamp = false;
	this.rescale();
}
thx.math.scale.LinearT.__name__ = ["thx","math","scale","LinearT"];
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
thx.math.scale.LinearT.prototype._domain = null;
thx.math.scale.LinearT.prototype._range = null;
thx.math.scale.LinearT.prototype.f = null;
thx.math.scale.LinearT.prototype._clamp = null;
thx.math.scale.LinearT.prototype._output = null;
thx.math.scale.LinearT.prototype.rescale = function() {
	if(null == this._range) return this;
	var linear = this._domain.length == 2?thx.math.scale.LinearT.scaleBilinear:thx.math.scale.LinearT.scalePolylinear, uninterpolate = this._clamp?Floats.uninterpolateClampf:Floats.uninterpolatef;
	this._output = linear(this._domain,this._range,uninterpolate,this.f);
	return this;
}
thx.math.scale.LinearT.prototype.scale = function(x,_) {
	return this._output(x);
}
thx.math.scale.LinearT.prototype.getDomain = function() {
	return this._domain;
}
thx.math.scale.LinearT.prototype.domain = function(d) {
	this._domain = d;
	return this.rescale();
}
thx.math.scale.LinearT.prototype.getRange = function() {
	return this._range;
}
thx.math.scale.LinearT.prototype.range = function(r) {
	this._range = r;
	return this.rescale();
}
thx.math.scale.LinearT.prototype.getInterpolate = function() {
	return this.f;
}
thx.math.scale.LinearT.prototype.interpolatef = function(x) {
	this.f = x;
	return this.rescale();
}
thx.math.scale.LinearT.prototype.getClamp = function() {
	return this._clamp;
}
thx.math.scale.LinearT.prototype.clamp = function(v) {
	this._clamp = v;
	return this.rescale();
}
thx.math.scale.LinearT.prototype.tickRange = function(m) {
	var start = Math.min(this._domain[0],this._domain[1]), stop = Math.max(this._domain[0],this._domain[1]), span = stop - start, step = Math.pow(10,Math.floor(Math.log(span / m) / 2.302585092994046)), err = m / (span / step);
	if(err <= .15) step *= 10; else if(err <= .35) step *= 5; else if(err <= -75) step *= 2;
	return { start : Math.ceil(start / step) * step, stop : Math.floor(stop / step) * step + step * .5, step : step};
}
thx.math.scale.LinearT.prototype.ticks = function(m) {
	var range = this.tickRange(m);
	return Floats.range(range.start,range.stop,range.step);
}
thx.math.scale.LinearT.prototype.tickFormat = function(m) {
	var n = Math.max(0,-Math.floor(Math.log(this.tickRange(m).step) / 2.302585092994046 + .01));
	return Floats.formatf("D:" + n);
}
thx.math.scale.LinearT.prototype.__class__ = thx.math.scale.LinearT;
thx.math.scale.LinearT.__interfaces__ = [thx.math.scale.IScale];
thx.culture.FormatDate = function() { }
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
thx.culture.FormatDate.prototype.__class__ = thx.culture.FormatDate;
rg.view.svg.layer.TickmarksOrtho = function(panel,anchor) {
	if( panel === $_ ) return;
	rg.view.svg.panel.Layer.call(this,panel);
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
rg.view.svg.layer.TickmarksOrtho.__name__ = ["rg","view","svg","layer","TickmarksOrtho"];
rg.view.svg.layer.TickmarksOrtho.__super__ = rg.view.svg.panel.Layer;
for(var k in rg.view.svg.panel.Layer.prototype ) rg.view.svg.layer.TickmarksOrtho.prototype[k] = rg.view.svg.panel.Layer.prototype[k];
rg.view.svg.layer.TickmarksOrtho.prototype.anchor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.displayMinor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.displayMajor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.displayLabel = null;
rg.view.svg.layer.TickmarksOrtho.prototype.displayAnchorLine = null;
rg.view.svg.layer.TickmarksOrtho.prototype.lengthMinor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.lengthMajor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.paddingMinor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.paddingMajor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.paddingLabel = null;
rg.view.svg.layer.TickmarksOrtho.prototype.labelOrientation = null;
rg.view.svg.layer.TickmarksOrtho.prototype.labelAnchor = null;
rg.view.svg.layer.TickmarksOrtho.prototype.labelAngle = null;
rg.view.svg.layer.TickmarksOrtho.prototype.desiredSize = null;
rg.view.svg.layer.TickmarksOrtho.prototype.tickLabel = null;
rg.view.svg.layer.TickmarksOrtho.prototype.translate = null;
rg.view.svg.layer.TickmarksOrtho.prototype.x1 = null;
rg.view.svg.layer.TickmarksOrtho.prototype.y1 = null;
rg.view.svg.layer.TickmarksOrtho.prototype.x2 = null;
rg.view.svg.layer.TickmarksOrtho.prototype.y2 = null;
rg.view.svg.layer.TickmarksOrtho.prototype.x = null;
rg.view.svg.layer.TickmarksOrtho.prototype.y = null;
rg.view.svg.layer.TickmarksOrtho.prototype.axis = null;
rg.view.svg.layer.TickmarksOrtho.prototype.min = null;
rg.view.svg.layer.TickmarksOrtho.prototype.max = null;
rg.view.svg.layer.TickmarksOrtho.prototype.resize = function() {
	if(null == this.axis) return;
	if(this.displayAnchorLine) this.updateAnchorLine();
	this.redraw();
}
rg.view.svg.layer.TickmarksOrtho.prototype.update = function(axis,min,max) {
	this.axis = axis;
	this.min = min;
	this.max = max;
	this.redraw();
}
rg.view.svg.layer.TickmarksOrtho.prototype.updateAnchorLine = function() {
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
rg.view.svg.layer.TickmarksOrtho.prototype.maxTicks = function() {
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
rg.view.svg.layer.TickmarksOrtho.prototype.id = function(d,i) {
	return "" + d.getValue();
}
rg.view.svg.layer.TickmarksOrtho.prototype.redraw = function() {
	this.desiredSize = Math.max(this.paddingMinor + this.lengthMinor,this.paddingMajor + this.lengthMajor);
	var ticks = this.maxTicks(), data = this.axis.ticks(this.min,this.max,ticks);
	var tick = this.g.selectAll("g.tick").data(data,$closure(this,"id"));
	var enter = tick.enter().append("svg:g").attr("class").string("tick").attr("transform").stringf(this.translate);
	if(this.displayMinor) enter.filter(function(d,i) {
		return !d.major;
	}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf($closure(this,"tickClass"));
	if(this.displayMajor) enter.filter(function(d,i) {
		return d.major;
	}).append("svg:line").attr("x1").floatf(this.x1).attr("y1").floatf(this.y1).attr("x2").floatf(this.x2).attr("y2").floatf(this.y2).attr("class").stringf($closure(this,"tickClass"));
	if(this.displayLabel) enter.eachNode($closure(this,"createLabel"));
	tick.update().attr("transform").stringf(this.translate);
	tick.exit().remove();
}
rg.view.svg.layer.TickmarksOrtho.prototype.createLabel = function(n,i) {
	var d = Reflect.field(n,"__data__");
	if(!d.getMajor()) return;
	var label = new rg.view.svg.widget.Label(thx.js.Dom.selectNode(n),false,true,false);
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
rg.view.svg.layer.TickmarksOrtho.prototype.initf = function() {
	switch( (this.anchor)[1] ) {
	case 0:
		this.translate = $closure(this,"translateTop");
		this.x1 = $closure(this,"x1Top");
		this.y1 = $closure(this,"y1Top");
		this.x2 = $closure(this,"x2Top");
		this.y2 = $closure(this,"y2Top");
		break;
	case 1:
		this.translate = $closure(this,"translateBottom");
		this.x1 = $closure(this,"x1Bottom");
		this.y1 = $closure(this,"y1Bottom");
		this.x2 = $closure(this,"x2Bottom");
		this.y2 = $closure(this,"y2Bottom");
		break;
	case 2:
		this.translate = $closure(this,"translateLeft");
		this.x1 = $closure(this,"x1Left");
		this.y1 = $closure(this,"y1Left");
		this.x2 = $closure(this,"x2Left");
		this.y2 = $closure(this,"y2Left");
		break;
	case 3:
		this.translate = $closure(this,"translateRight");
		this.x1 = $closure(this,"x1Right");
		this.y1 = $closure(this,"y1Right");
		this.x2 = $closure(this,"x2Right");
		this.y2 = $closure(this,"y2Right");
		break;
	}
	if(null == this.labelOrientation) {
		switch( (this.anchor)[1] ) {
		case 0:
		case 1:
			this.labelOrientation = rg.view.svg.widget.LabelOrientation.Orthogonal;
			break;
		case 2:
		case 3:
			this.labelOrientation = rg.view.svg.widget.LabelOrientation.Aligned;
			break;
		}
	}
	if(null == this.labelAnchor) {
		switch( (this.anchor)[1] ) {
		case 0:
			this.labelAnchor = rg.view.svg.widget.GridAnchor.Top;
			break;
		case 1:
			this.labelAnchor = rg.view.svg.widget.GridAnchor.Bottom;
			break;
		case 2:
			this.labelAnchor = rg.view.svg.widget.GridAnchor.Left;
			break;
		case 3:
			this.labelAnchor = rg.view.svg.widget.GridAnchor.Right;
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
rg.view.svg.layer.TickmarksOrtho.prototype.init = function() {
	this.initf();
	if(this.displayAnchorLine) {
		this.g.append("svg:line").attr("class").string("anchor-line");
		this.updateAnchorLine();
	}
}
rg.view.svg.layer.TickmarksOrtho.prototype.t = function(x,y) {
	return "translate(" + x + "," + y + ")";
}
rg.view.svg.layer.TickmarksOrtho.prototype.translateTop = function(d,i) {
	return "translate(" + d.getDelta() * this.panel.frame.width + "," + 0 + ")";
}
rg.view.svg.layer.TickmarksOrtho.prototype.translateBottom = function(d,i) {
	return "translate(" + d.getDelta() * this.panel.frame.width + "," + this.panel.frame.height + ")";
}
rg.view.svg.layer.TickmarksOrtho.prototype.translateLeft = function(d,i) {
	return "translate(" + 0 + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
}
rg.view.svg.layer.TickmarksOrtho.prototype.translateRight = function(d,i) {
	return "translate(" + this.panel.frame.width + "," + (this.panel.frame.height - d.getDelta() * this.panel.frame.height) + ")";
}
rg.view.svg.layer.TickmarksOrtho.prototype.x1Top = function(d,i) {
	return 0;
}
rg.view.svg.layer.TickmarksOrtho.prototype.x1Bottom = function(d,i) {
	return 0;
}
rg.view.svg.layer.TickmarksOrtho.prototype.x1Left = function(d,i) {
	return d.getMajor()?this.paddingMajor:this.paddingMinor;
}
rg.view.svg.layer.TickmarksOrtho.prototype.x1Right = function(d,i) {
	return -(d.getMajor()?this.paddingMajor:this.paddingMinor);
}
rg.view.svg.layer.TickmarksOrtho.prototype.y1Top = function(d,i) {
	return d.getMajor()?this.paddingMajor:this.paddingMinor;
}
rg.view.svg.layer.TickmarksOrtho.prototype.y1Bottom = function(d,i) {
	return -(d.getMajor()?this.paddingMajor:this.paddingMinor);
}
rg.view.svg.layer.TickmarksOrtho.prototype.y1Left = function(d,i) {
	return 0;
}
rg.view.svg.layer.TickmarksOrtho.prototype.y1Right = function(d,i) {
	return 0;
}
rg.view.svg.layer.TickmarksOrtho.prototype.x2Top = function(d,i) {
	return 0;
}
rg.view.svg.layer.TickmarksOrtho.prototype.x2Bottom = function(d,i) {
	return 0;
}
rg.view.svg.layer.TickmarksOrtho.prototype.x2Left = function(d,i) {
	return d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
}
rg.view.svg.layer.TickmarksOrtho.prototype.x2Right = function(d,i) {
	return -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
}
rg.view.svg.layer.TickmarksOrtho.prototype.y2Top = function(d,i) {
	return d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor;
}
rg.view.svg.layer.TickmarksOrtho.prototype.y2Bottom = function(d,i) {
	return -(d.getMajor()?this.lengthMajor + this.paddingMajor:this.lengthMinor + this.paddingMinor);
}
rg.view.svg.layer.TickmarksOrtho.prototype.y2Left = function(d,i) {
	return 0;
}
rg.view.svg.layer.TickmarksOrtho.prototype.y2Right = function(d,i) {
	return 0;
}
rg.view.svg.layer.TickmarksOrtho.prototype.tickClass = function(d,i) {
	return d.getMajor()?"major":null;
}
rg.view.svg.layer.TickmarksOrtho.prototype.__class__ = rg.view.svg.layer.TickmarksOrtho;
rg.view.svg.util.RGCss = function() { }
rg.view.svg.util.RGCss.__name__ = ["rg","view","svg","util","RGCss"];
rg.view.svg.util.RGCss.colorsInCss = function() {
	var container = thx.js.Dom.select("body").append("svg:svg").attr("class").string("rg");
	var first = rg.view.svg.util.RGCss.createBlock(container,0).style("fill").get(), length = 0;
	var _g = 1;
	while(_g < 1000) {
		var i = _g++;
		var other = rg.view.svg.util.RGCss.createBlock(container,i);
		if(first == other.style("fill").get()) {
			length = i;
			break;
		}
	}
	container.remove();
	return length;
}
rg.view.svg.util.RGCss.createBlock = function(container,pos) {
	return container.append("svg:rect").attr("class").string("fill-" + pos);
}
rg.view.svg.util.RGCss.prototype.__class__ = rg.view.svg.util.RGCss;
rg.util.Properties = function() { }
rg.util.Properties.__name__ = ["rg","util","Properties"];
rg.util.Properties.isTime = function(s) {
	return s.indexOf("#time:") >= 0;
}
rg.util.Properties.periodicity = function(s) {
	return s.substr(s.indexOf("#time:") + "#time:".length);
}
rg.util.Properties.timeProperty = function(periodicity) {
	return "." + "#time:" + periodicity;
}
rg.util.Properties.humanize = function(s) {
	return rg.util.RGStrings.humanize(Strings.rtrim(Strings.ltrim(s,"."),"."));
}
rg.util.Properties.prototype.__class__ = rg.util.Properties;
thx.geom.Polygon = function(coordinates) {
	if( coordinates === $_ ) return;
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
thx.geom.Polygon.prototype.coordinates = null;
thx.geom.Polygon.prototype.area = function() {
	var n = this.coordinates.length, a = this.coordinates[n - 1][0] * this.coordinates[0][1], b = this.coordinates[n - 1][1] * this.coordinates[0][0];
	var _g = 1;
	while(_g < n) {
		var i = _g++;
		a += this.coordinates[i - 1][0] * this.coordinates[i][1];
		b += this.coordinates[i - 1][1] * this.coordinates[i][0];
	}
	return (b - a) * .5;
}
thx.geom.Polygon.prototype.centroid = function(k) {
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
thx.geom.Polygon.prototype.clip = function(subject) {
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
thx.geom.Polygon.prototype.__class__ = thx.geom.Polygon;
DateTools = function() { }
DateTools.__name__ = ["DateTools"];
DateTools.__format_get = function(d,e) {
	return (function($this) {
		var $r;
		switch(e) {
		case "%":
			$r = "%";
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
DateTools.prototype.__class__ = DateTools;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc = function(properties,fields,event,periodicity,unit) {
	if( properties === $_ ) return;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.fields = fields;
	this.event = event;
}
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.__name__ = ["rg","data","source","rgquery","transform","TransformIntersectGroupUtc"];
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.unit = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.groupby = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.transform = function(data) {
	var items = Objects.flatten(data,this.fields.length), properties = this.properties, unit = this.unit;
	if(null == items || 0 == items.length) return [];
	var result = [], shift = Reflect.field(items[0].value[0][0],this.periodicity);
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var arr = item.value;
		var _g2 = 0, _g1 = arr.length;
		while(_g2 < _g1) {
			var i = _g2++;
			var p = Dynamics.clone(properties);
			Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
			Objects.addFields(p,[rg.util.Properties.timeProperty(this.periodicity),unit],[Reflect.field(arr[i][0],this.periodicity) - shift,arr[i][1]]);
			p.event = this.event;
			result.push(p);
		}
	}
	return result;
}
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersectGroupUtc;
rg.data.source.rgquery.transform.TransformIntersectGroupUtc.__interfaces__ = [rg.data.source.ITransform];
if(!thx.geom.layout) thx.geom.layout = {}
thx.geom.layout.Pie = function(p) {
	if( p === $_ ) return;
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
thx.geom.layout.Pie.prototype._startAngle = null;
thx.geom.layout.Pie.prototype._endAngle = null;
thx.geom.layout.Pie.prototype._sort = null;
thx.geom.layout.Pie.prototype._value = null;
thx.geom.layout.Pie.prototype.pie = function(data,i) {
	var a = this._startAngle(data,i), k = this._endAngle(data,i) - a;
	var index = Ints.range(data.length);
	if(this._sort != null) {
		var s = this._sort;
		index.sort(function(i1,j) {
			return s(data[i1],data[j]);
		});
	}
	var values = data.map(this._value);
	k /= Iterators.reduce(values.iterator(),function(p,d,_) {
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
thx.geom.layout.Pie.prototype.getStartAngle = function() {
	return this._startAngle;
}
thx.geom.layout.Pie.prototype.startAngle = function(v) {
	return this.startAnglef(function(_,_1) {
		return v;
	});
}
thx.geom.layout.Pie.prototype.startAnglef = function(v) {
	this._startAngle = v;
	return this;
}
thx.geom.layout.Pie.prototype.getEndAngle = function() {
	return this._endAngle;
}
thx.geom.layout.Pie.prototype.endAngle = function(v) {
	return this.endAnglef(function(_,_1) {
		return v;
	});
}
thx.geom.layout.Pie.prototype.endAnglef = function(v) {
	this._endAngle = v;
	return this;
}
thx.geom.layout.Pie.prototype.getSort = function() {
	return this._sort;
}
thx.geom.layout.Pie.prototype.sort = function(v) {
	this._sort = v;
	return this;
}
thx.geom.layout.Pie.prototype.getValue = function() {
	return this._value;
}
thx.geom.layout.Pie.prototype.valuef = function(v) {
	this._value = v;
	return this;
}
thx.geom.layout.Pie.prototype.__class__ = thx.geom.layout.Pie;
if(typeof haxe=='undefined') haxe = {}
haxe.Md5 = function(p) {
}
haxe.Md5.__name__ = ["haxe","Md5"];
haxe.Md5.encode = function(s) {
	return new haxe.Md5().doEncode(s);
}
haxe.Md5.prototype.bitOR = function(a,b) {
	var lsb = a & 1 | b & 1;
	var msb31 = a >>> 1 | b >>> 1;
	return msb31 << 1 | lsb;
}
haxe.Md5.prototype.bitXOR = function(a,b) {
	var lsb = a & 1 ^ b & 1;
	var msb31 = a >>> 1 ^ b >>> 1;
	return msb31 << 1 | lsb;
}
haxe.Md5.prototype.bitAND = function(a,b) {
	var lsb = a & 1 & (b & 1);
	var msb31 = a >>> 1 & b >>> 1;
	return msb31 << 1 | lsb;
}
haxe.Md5.prototype.addme = function(x,y) {
	var lsw = (x & 65535) + (y & 65535);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return msw << 16 | lsw & 65535;
}
haxe.Md5.prototype.rhex = function(num) {
	var str = "";
	var hex_chr = "0123456789abcdef";
	var _g = 0;
	while(_g < 4) {
		var j = _g++;
		str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
	}
	return str;
}
haxe.Md5.prototype.str2blks = function(str) {
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
haxe.Md5.prototype.rol = function(num,cnt) {
	return num << cnt | num >>> 32 - cnt;
}
haxe.Md5.prototype.cmn = function(q,a,b,x,s,t) {
	return this.addme(this.rol(this.addme(this.addme(a,q),this.addme(x,t)),s),b);
}
haxe.Md5.prototype.ff = function(a,b,c,d,x,s,t) {
	return this.cmn(this.bitOR(this.bitAND(b,c),this.bitAND(~b,d)),a,b,x,s,t);
}
haxe.Md5.prototype.gg = function(a,b,c,d,x,s,t) {
	return this.cmn(this.bitOR(this.bitAND(b,d),this.bitAND(c,~d)),a,b,x,s,t);
}
haxe.Md5.prototype.hh = function(a,b,c,d,x,s,t) {
	return this.cmn(this.bitXOR(this.bitXOR(b,c),d),a,b,x,s,t);
}
haxe.Md5.prototype.ii = function(a,b,c,d,x,s,t) {
	return this.cmn(this.bitXOR(c,this.bitOR(b,~d)),a,b,x,s,t);
}
haxe.Md5.prototype.doEncode = function(str) {
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
haxe.Md5.prototype.__class__ = haxe.Md5;
Bools = function() { }
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
Bools.prototype.__class__ = Bools;
thx.geo.Mercator = function(p) {
	if( p === $_ ) return;
	this.setScale(500);
	this.setTranslate([480.0,250]);
}
thx.geo.Mercator.__name__ = ["thx","geo","Mercator"];
thx.geo.Mercator.prototype.scale = null;
thx.geo.Mercator.prototype.translate = null;
thx.geo.Mercator.prototype.project = function(coords) {
	var x = coords[0] / 360, y = -(Math.log(Math.tan(Math.PI / 4 + coords[1] * 0.01745329251994329577 / 2)) / 0.01745329251994329577) / 360;
	return [this.getScale() * x + this.getTranslate()[0],this.getScale() * Math.max(-.5,Math.min(.5,y)) + this.getTranslate()[1]];
}
thx.geo.Mercator.prototype.invert = function(coords) {
	var x = (coords[0] - this.getTranslate()[0]) / this.getScale(), y = (coords[1] - this.getTranslate()[1]) / this.getScale();
	return [360 * x,2 * Math.atan(Math.exp(-360 * y * 0.01745329251994329577)) / 0.01745329251994329577 - 90];
}
thx.geo.Mercator.prototype.setScale = function(scale) {
	return this.scale = scale;
}
thx.geo.Mercator.prototype.getScale = function() {
	return this.scale;
}
thx.geo.Mercator.prototype.getTranslate = function() {
	return this.translate.copy();
}
thx.geo.Mercator.prototype.setTranslate = function(translate) {
	this.translate = [translate[0],translate[1]];
	return translate;
}
thx.geo.Mercator.prototype.__class__ = thx.geo.Mercator;
thx.geo.Mercator.__interfaces__ = [thx.geo.IProjection];
thx.svg.PathGeoJson = function(p) {
	if( p === $_ ) return;
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
thx.svg.PathGeoJson.prototype.pointRadius = null;
thx.svg.PathGeoJson.prototype.projection = null;
thx.svg.PathGeoJson.prototype.pathCircle = null;
thx.svg.PathGeoJson.prototype.pathTypes = null;
thx.svg.PathGeoJson.prototype.centroidTypes = null;
thx.svg.PathGeoJson.prototype.areaTypes = null;
thx.svg.PathGeoJson.prototype.path = function(d,_) {
	return this.pathTypes.path(d);
}
thx.svg.PathGeoJson.prototype.centroid = function(d,_) {
	return this.centroidTypes.centroid(d);
}
thx.svg.PathGeoJson.prototype.area = function(d,_) {
	return this.areaTypes.area(d);
}
thx.svg.PathGeoJson.prototype.setPointRadius = function(r) {
	this.pointRadius = r;
	this.pathCircle = thx.svg.PathGeoJson.circle(r);
	return r;
}
thx.svg.PathGeoJson.prototype.setProjection = function(projection) {
	return this.projection = projection;
}
thx.svg.PathGeoJson.prototype.__class__ = thx.svg.PathGeoJson;
thx.svg.PathTypes = function(geo) {
	if( geo === $_ ) return;
	this.geo = geo;
}
thx.svg.PathTypes.__name__ = ["thx","svg","PathTypes"];
thx.svg.PathTypes.prototype.geo = null;
thx.svg.PathTypes.prototype.path = function(geo) {
	var field = Reflect.field(this,Strings.lcfirst(geo.type));
	if(null == field) return "";
	return field.apply(this,[geo]);
}
thx.svg.PathTypes.prototype.featureCollection = function(f) {
	var p = [], features = f.features;
	var _g1 = 0, _g = features.length;
	while(_g1 < _g) {
		var i = _g1++;
		p.push(this.path(features[i].geometry));
	}
	return p.join("");
}
thx.svg.PathTypes.prototype.feature = function(f) {
	return this.path(f.geometry);
}
thx.svg.PathTypes.prototype.point = function(o) {
	return "M" + this.project(o.coordinates) + this.geo.pathCircle;
}
thx.svg.PathTypes.prototype.multiPoint = function(o) {
	var p = [], coordinates = o.coordinates;
	var _g1 = 0, _g = coordinates.length;
	while(_g1 < _g) {
		var i = _g1++;
		p.push("M" + this.project(coordinates[i]) + this.geo.pathCircle);
	}
	return p.join("");
}
thx.svg.PathTypes.prototype.lineString = function(o) {
	var p = ["M"], coordinates = o.coordinates;
	var _g1 = 0, _g = coordinates.length;
	while(_g1 < _g) {
		var i = _g1++;
		p.push(this.project(coordinates[i]));
	}
	return p.join("L");
}
thx.svg.PathTypes.prototype.multiLineString = function(o) {
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
thx.svg.PathTypes.prototype.polygon = function(o) {
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
thx.svg.PathTypes.prototype.multiPolygon = function(o) {
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
thx.svg.PathTypes.prototype.geometryCollection = function(o) {
	var p = [];
	var _g = 0, _g1 = o.geometries;
	while(_g < _g1.length) {
		var geometry = _g1[_g];
		++_g;
		p.push(this.path(geometry));
	}
	return p.join("");
}
thx.svg.PathTypes.prototype.project = function(coords) {
	return this.geo.projection.project(coords).join(",");
}
thx.svg.PathTypes.prototype.__class__ = thx.svg.PathTypes;
thx.svg.AreaTypes = function(geo) {
	if( geo === $_ ) return;
	this.geo = geo;
}
thx.svg.AreaTypes.__name__ = ["thx","svg","AreaTypes"];
thx.svg.AreaTypes.prototype.geo = null;
thx.svg.AreaTypes.prototype.area = function(geo) {
	var field = Reflect.field(this,Strings.lcfirst(geo.type));
	if(null == field) return 0.0;
	return field.apply(this,[geo]);
}
thx.svg.AreaTypes.prototype.featureCollection = function(f) {
	var a = 0.0;
	var _g = 0, _g1 = f.features;
	while(_g < _g1.length) {
		var feat = _g1[_g];
		++_g;
		a += this.area(feat.geometry);
	}
	return a;
}
thx.svg.AreaTypes.prototype.feature = function(f) {
	return this.area(f.geometry);
}
thx.svg.AreaTypes.prototype.point = function(o) {
	return 0.0;
}
thx.svg.AreaTypes.prototype.multiPoint = function(o) {
	return 0.0;
}
thx.svg.AreaTypes.prototype.lineString = function(o) {
	return 0.0;
}
thx.svg.AreaTypes.prototype.multiLineString = function(o) {
	return 0.0;
}
thx.svg.AreaTypes.prototype.polygon = function(o) {
	return this.polygonArea(o.coordinates);
}
thx.svg.AreaTypes.prototype.multiPolygon = function(o) {
	var sum = 0.0, coords = o.coordinates;
	var _g = 0;
	while(_g < coords.length) {
		var coordinates = coords[_g];
		++_g;
		sum += this.polygonArea(coordinates);
	}
	return sum;
}
thx.svg.AreaTypes.prototype.geometryCollection = function(o) {
	var sum = 0.0;
	var _g = 0, _g1 = o.geometries;
	while(_g < _g1.length) {
		var geometry = _g1[_g];
		++_g;
		sum += this.area(geometry);
	}
	return sum;
}
thx.svg.AreaTypes.prototype.polygonArea = function(coords) {
	var sum = this.parea(coords[0]);
	var _g1 = 1, _g = coords.length;
	while(_g1 < _g) {
		var i = _g1++;
		sum -= this.parea(coords[i]);
	}
	return sum;
}
thx.svg.AreaTypes.prototype.parea = function(coords) {
	return Math.abs(new thx.geom.Polygon(coords.map($closure(this,"project"))).area());
}
thx.svg.AreaTypes.prototype.project = function(d,_) {
	return this.geo.projection.project(d);
}
thx.svg.AreaTypes.prototype.__class__ = thx.svg.AreaTypes;
thx.svg.CentroidTypes = function(geo) {
	if( geo === $_ ) return;
	this.geo = geo;
}
thx.svg.CentroidTypes.__name__ = ["thx","svg","CentroidTypes"];
thx.svg.CentroidTypes.prototype.geo = null;
thx.svg.CentroidTypes.prototype.centroid = function(geo) {
	var field = Reflect.field(this,Strings.lcfirst(geo.type));
	if(null == field) return [0.0,0.0];
	return field.apply(this,[geo]);
}
thx.svg.CentroidTypes.prototype.point = function(o) {
	return this.project(o.coordinates);
}
thx.svg.CentroidTypes.prototype.feature = function(f) {
	return this.centroid(f.geometry);
}
thx.svg.CentroidTypes.prototype.polygon = function(o) {
	var centroid = this.polygonCentroid(o.coordinates);
	return [centroid[0] / centroid[2],centroid[1] / centroid[2]];
}
thx.svg.CentroidTypes.prototype.multiPolygon = function(o) {
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
thx.svg.CentroidTypes.prototype.polygonCentroid = function(coordinates) {
	var polygon = new thx.geom.Polygon(coordinates[0].map($closure(this,"project"))), centroid = polygon.centroid(1), x = centroid[0], y = centroid[1], z = Math.abs(polygon.area());
	var _g1 = 1, _g = coordinates.length;
	while(_g1 < _g) {
		var i = _g1++;
		polygon = new thx.geom.Polygon(coordinates[i].map($closure(this,"project")));
		centroid = polygon.centroid(1);
		x -= centroid[0];
		y -= centroid[1];
		z -= Math.abs(polygon.area());
	}
	return [x,y,6 * z];
}
thx.svg.CentroidTypes.prototype.project = function(d,_) {
	return this.geo.projection.project(d);
}
thx.svg.CentroidTypes.prototype.__class__ = thx.svg.CentroidTypes;
thx.geom.layout.Stack = function(p) {
	if( p === $_ ) return;
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
	return Iterators.reduce(data.iterator(),thx.geom.layout.Stack.stackSum,0.0);
}
thx.geom.layout.Stack.stackSum = function(p,c,i) {
	return p + c.y;
}
thx.geom.layout.Stack.prototype._order = null;
thx.geom.layout.Stack.prototype._offset = null;
thx.geom.layout.Stack.prototype.stack = function(data) {
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
thx.geom.layout.Stack.prototype.getOrder = function() {
	return this._order;
}
thx.geom.layout.Stack.prototype.order = function(x) {
	this._order = x;
	return this;
}
thx.geom.layout.Stack.prototype.getOffset = function() {
	return this._offset;
}
thx.geom.layout.Stack.prototype.offset = function(x) {
	this._offset = x;
	return this;
}
thx.geom.layout.Stack.prototype.__class__ = thx.geom.layout.Stack;
thx.geom.layout.StackOrder = { __ename__ : ["thx","geom","layout","StackOrder"], __constructs__ : ["DefaultOrder","InsideOut","ReverseOrder"] }
thx.geom.layout.StackOrder.DefaultOrder = ["DefaultOrder",0];
thx.geom.layout.StackOrder.DefaultOrder.toString = $estr;
thx.geom.layout.StackOrder.DefaultOrder.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOrder.InsideOut = ["InsideOut",1];
thx.geom.layout.StackOrder.InsideOut.toString = $estr;
thx.geom.layout.StackOrder.InsideOut.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOrder.ReverseOrder = ["ReverseOrder",2];
thx.geom.layout.StackOrder.ReverseOrder.toString = $estr;
thx.geom.layout.StackOrder.ReverseOrder.__enum__ = thx.geom.layout.StackOrder;
thx.geom.layout.StackOffset = { __ename__ : ["thx","geom","layout","StackOffset"], __constructs__ : ["Silhouette","Wiggle","ZeroOffset"] }
thx.geom.layout.StackOffset.Silhouette = ["Silhouette",0];
thx.geom.layout.StackOffset.Silhouette.toString = $estr;
thx.geom.layout.StackOffset.Silhouette.__enum__ = thx.geom.layout.StackOffset;
thx.geom.layout.StackOffset.Wiggle = ["Wiggle",1];
thx.geom.layout.StackOffset.Wiggle.toString = $estr;
thx.geom.layout.StackOffset.Wiggle.__enum__ = thx.geom.layout.StackOffset;
thx.geom.layout.StackOffset.ZeroOffset = ["ZeroOffset",2];
thx.geom.layout.StackOffset.ZeroOffset.toString = $estr;
thx.geom.layout.StackOffset.ZeroOffset.__enum__ = thx.geom.layout.StackOffset;
rg.data.ScaleDistributions = function() { }
rg.data.ScaleDistributions.__name__ = ["rg","data","ScaleDistributions"];
rg.data.ScaleDistributions.distribute = function(scale,pos,values) {
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
rg.data.ScaleDistributions.prototype.__class__ = rg.data.ScaleDistributions;
rg.view.svg.widget.Label = function(container,dontflip,shadow,outline) {
	if( container === $_ ) return;
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
	var cls = Arrays.addIf(Arrays.addIf([],!outline,"nooutline"),!shadow,"noshadow");
	this.ttext = this.gtext.append("svg:text").attr("class").string(cls.join(" "));
	this.dontFlip = dontflip;
	if(outline) this.setShadowOffset(1,1.25); else this.setShadowOffset(0.5,0.5);
	this.x = 0;
	this.y = 0;
	this.angle = 0;
	this.setOrientation(rg.view.svg.widget.LabelOrientation.FixedAngle(0));
	this.setAnchor(rg.view.svg.widget.GridAnchor.Center);
}
rg.view.svg.widget.Label.__name__ = ["rg","view","svg","widget","Label"];
rg.view.svg.widget.Label.prototype.text = null;
rg.view.svg.widget.Label.prototype.orientation = null;
rg.view.svg.widget.Label.prototype.anchor = null;
rg.view.svg.widget.Label.prototype.x = null;
rg.view.svg.widget.Label.prototype.y = null;
rg.view.svg.widget.Label.prototype.angle = null;
rg.view.svg.widget.Label.prototype.dontFlip = null;
rg.view.svg.widget.Label.prototype.shadowOffsetX = null;
rg.view.svg.widget.Label.prototype.shadowOffsetY = null;
rg.view.svg.widget.Label.prototype.shadow = null;
rg.view.svg.widget.Label.prototype.outline = null;
rg.view.svg.widget.Label.prototype.g = null;
rg.view.svg.widget.Label.prototype.gshadow = null;
rg.view.svg.widget.Label.prototype.gtext = null;
rg.view.svg.widget.Label.prototype.gshadowrot = null;
rg.view.svg.widget.Label.prototype.ttext = null;
rg.view.svg.widget.Label.prototype.toutline = null;
rg.view.svg.widget.Label.prototype.tshadow = null;
rg.view.svg.widget.Label.prototype.addClass = function(name) {
	this.g.classed().add(name);
}
rg.view.svg.widget.Label.prototype.removeClass = function(name) {
	this.g.classed().remove(name);
}
rg.view.svg.widget.Label.prototype.getSize = function() {
	try {
		return this.g.node().getBBox();
	} catch( e ) {
		return { width : 0.0, height : 0.0};
	}
}
rg.view.svg.widget.Label.prototype.place = function(x,y,angle) {
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
rg.view.svg.widget.Label.prototype.setShadowOffset = function(x,y) {
	this.shadowOffsetX = x;
	this.shadowOffsetY = y;
	if(this.shadow) this.gshadow.attr("transform").string("translate(" + this.shadowOffsetX + "," + this.shadowOffsetY + ")");
}
rg.view.svg.widget.Label.prototype.setText = function(v) {
	this.text = v;
	if(this.outline) this.toutline.text().string(v);
	this.ttext.text().string(v);
	if(this.shadow) this.tshadow.text().string(v);
	this.reanchor();
	return v;
}
rg.view.svg.widget.Label.prototype.setOrientation = function(v) {
	this.orientation = v;
	this.place(this.x,this.y,this.angle);
	return v;
}
rg.view.svg.widget.Label.prototype.setAnchor = function(v) {
	this.anchor = v;
	this.reanchor();
	return v;
}
rg.view.svg.widget.Label.prototype.getBB = function() {
	var h = this.ttext.style("font-size").getFloat();
	if(null == h || 0 >= h) h = this.ttext.node().getExtentOfChar("A").height;
	return { width : this.ttext.node().getComputedTextLength(), height : h};
}
rg.view.svg.widget.Label.prototype.reanchor = function() {
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
					$r = rg.view.svg.widget.GridAnchor.BottomRight;
					break;
				case 1:
					$r = rg.view.svg.widget.GridAnchor.Bottom;
					break;
				case 2:
					$r = rg.view.svg.widget.GridAnchor.BottomLeft;
					break;
				case 3:
					$r = rg.view.svg.widget.GridAnchor.Right;
					break;
				case 4:
					$r = rg.view.svg.widget.GridAnchor.Center;
					break;
				case 5:
					$r = rg.view.svg.widget.GridAnchor.Left;
					break;
				case 6:
					$r = rg.view.svg.widget.GridAnchor.TopRight;
					break;
				case 7:
					$r = rg.view.svg.widget.GridAnchor.Top;
					break;
				case 8:
					$r = rg.view.svg.widget.GridAnchor.TopLeft;
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
					$r = rg.view.svg.widget.GridAnchor.BottomRight;
					break;
				case 1:
					$r = rg.view.svg.widget.GridAnchor.Bottom;
					break;
				case 2:
					$r = rg.view.svg.widget.GridAnchor.BottomLeft;
					break;
				case 3:
					$r = rg.view.svg.widget.GridAnchor.Right;
					break;
				case 4:
					$r = rg.view.svg.widget.GridAnchor.Center;
					break;
				case 5:
					$r = rg.view.svg.widget.GridAnchor.Left;
					break;
				case 6:
					$r = rg.view.svg.widget.GridAnchor.TopRight;
					break;
				case 7:
					$r = rg.view.svg.widget.GridAnchor.Top;
					break;
				case 8:
					$r = rg.view.svg.widget.GridAnchor.TopLeft;
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
rg.view.svg.widget.Label.prototype.destroy = function() {
	this.g.remove();
}
rg.view.svg.widget.Label.prototype.__class__ = rg.view.svg.widget.Label;
rg.controller.factory.FactoryDataSource = function(cache,executor) {
	if( cache === $_ ) return;
	this.cache = cache;
	this.parser = new rg.data.source.rgquery.QueryParser();
	this.executor = executor;
}
rg.controller.factory.FactoryDataSource.__name__ = ["rg","controller","factory","FactoryDataSource"];
rg.controller.factory.FactoryDataSource.prototype.cache = null;
rg.controller.factory.FactoryDataSource.prototype.parser = null;
rg.controller.factory.FactoryDataSource.prototype.executor = null;
rg.controller.factory.FactoryDataSource.prototype.create = function(info) {
	if(null != info.namedData) {
		var data = this.cache.get(info.namedData);
		if(null == data) throw new thx.error.Error("the data source named '{0}' cannot be found in the current context",null,info.name,{ fileName : "FactoryDataSource.hx", lineNumber : 40, className : "rg.controller.factory.FactoryDataSource", methodName : "create"});
		return data;
	}
	if(null != info.data) return this.createFromData(info.data);
	if(null != info.path && null != info.event) return this.createFromQuery(info.path,info.event,info.query,info.groupBy,info.timeZone,info.start,info.end);
	throw new thx.error.Error("to create a query you need to reference by name an existing data source or provide  at least the data and the name or the event and the path parameters",null,null,{ fileName : "FactoryDataSource.hx", lineNumber : 51, className : "rg.controller.factory.FactoryDataSource", methodName : "create"});
}
rg.controller.factory.FactoryDataSource.prototype.createFromData = function(data) {
	return new rg.data.source.DataSourceArray(data);
}
rg.controller.factory.FactoryDataSource.prototype.createFromQuery = function(path,event,query,groupby,timeZone,start,end) {
	if(null == query) query = "";
	return new rg.data.source.DataSourceReportGrid(this.executor,path,event,this.parser.parse(query),groupby,timeZone,start,end);
}
rg.controller.factory.FactoryDataSource.prototype.__class__ = rg.controller.factory.FactoryDataSource;
rg.view.layout.Anchor = { __ename__ : ["rg","view","layout","Anchor"], __constructs__ : ["Top","Bottom","Left","Right"] }
rg.view.layout.Anchor.Top = ["Top",0];
rg.view.layout.Anchor.Top.toString = $estr;
rg.view.layout.Anchor.Top.__enum__ = rg.view.layout.Anchor;
rg.view.layout.Anchor.Bottom = ["Bottom",1];
rg.view.layout.Anchor.Bottom.toString = $estr;
rg.view.layout.Anchor.Bottom.__enum__ = rg.view.layout.Anchor;
rg.view.layout.Anchor.Left = ["Left",2];
rg.view.layout.Anchor.Left.toString = $estr;
rg.view.layout.Anchor.Left.__enum__ = rg.view.layout.Anchor;
rg.view.layout.Anchor.Right = ["Right",3];
rg.view.layout.Anchor.Right.toString = $estr;
rg.view.layout.Anchor.Right.__enum__ = rg.view.layout.Anchor;
rg.controller.info.InfoVisualizationOption = function(p) {
}
rg.controller.info.InfoVisualizationOption.__name__ = ["rg","controller","info","InfoVisualizationOption"];
rg.controller.info.InfoVisualizationOption.filters = function() {
	return [{ field : "axes", validator : function(v) {
		return Std["is"](v,Array) || Reflect.isObject(v);
	}, filter : function(v) {
		return [{ field : "variables", value : Std["is"](v,Array)?v.map(function(v1,i) {
			return rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),v1);
		}):[rg.controller.info.Info.feed(new rg.controller.info.InfoVariable(),v)]}];
	}},{ field : "data", validator : function(v) {
		return Std["is"](v,Array) || Reflect.isObject(v);
	}, filter : function(v) {
		return [{ field : "data", value : Std["is"](v,Array)?v.map(function(v1,i) {
			return rg.controller.info.Info.feed(new rg.controller.info.InfoDataContext(),v1);
		}):[rg.controller.info.Info.feed(new rg.controller.info.InfoDataContext(),v)]}];
	}},{ field : "options", validator : function(v) {
		return Reflect.isObject(v);
	}, filter : null}];
}
rg.controller.info.InfoVisualizationOption.prototype.variables = null;
rg.controller.info.InfoVisualizationOption.prototype.data = null;
rg.controller.info.InfoVisualizationOption.prototype.options = null;
rg.controller.info.InfoVisualizationOption.prototype.__class__ = rg.controller.info.InfoVisualizationOption;
rg.data.source.rgquery.QueryParser = function(p) {
}
rg.data.source.rgquery.QueryParser.__name__ = ["rg","data","source","rgquery","QueryParser"];
rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE = null;
rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE = null;
rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE = null;
rg.data.source.rgquery.QueryParser.parseValue = function(s) {
	var fc = s.substr(0,1), lc = s.substr(-1);
	if(fc == lc && (fc == "'" || fc == "\"")) return s.substr(1,s.length - 2);
	if(Bools.canParse(s)) return Bools.parse(s);
	if(Ints.canParse(s)) return Ints.parse(s);
	if(Floats.canParse(s)) return Floats.parse(s);
	return (function($this) {
		var $r;
		throw new thx.error.Error("invalid value '{0}'",null,s,{ fileName : "QueryParser.hx", lineNumber : 150, className : "rg.data.source.rgquery.QueryParser", methodName : "parseValue"});
		return $r;
	}(this));
}
rg.data.source.rgquery.QueryParser.prototype.exp = null;
rg.data.source.rgquery.QueryParser.prototype.operation = null;
rg.data.source.rgquery.QueryParser.prototype.where = null;
rg.data.source.rgquery.QueryParser.prototype.parse = function(s) {
	this.exp = [];
	this.operation = rg.data.source.rgquery.QOperation.Count;
	this.where = [];
	this.parseExp(s);
	return { exp : this.exp, operation : this.operation, where : this.where};
}
rg.data.source.rgquery.QueryParser.prototype.parseExp = function(e) {
	var tokens = e.split("*").map(function(d,_) {
		return StringTools.trim(d);
	});
	if(tokens.length == 1 && "" == tokens[0]) {
		this.exp.push(rg.data.source.rgquery.QExp.Event);
		return;
	}
	var _g = 0;
	while(_g < tokens.length) {
		var token = tokens[_g];
		++_g;
		var etoken = this.parseToken(token);
		if(null != etoken) this.exp.push(etoken);
	}
}
rg.data.source.rgquery.QueryParser.prototype.parseToken = function(token) {
	var pos;
	if(rg.util.Properties.isTime(token)) return rg.data.source.rgquery.QExp.Time(rg.util.Properties.periodicity(token)); else return this.processProperty(token);
}
rg.data.source.rgquery.QueryParser.prototype.processProperty = function(token) {
	if("(" == token.substr(0,1)) token = token.substr(1,token.length - 2);
	var parts = rg.data.source.rgquery.QueryParser.TOKEN_SPLIT.split(token), name = null, limit = null, descending = null;
	if(parts.length == 1) {
		if(!rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.match(token)) throw new thx.error.Error("invalid individual expression '{0}'",null,token,{ fileName : "QueryParser.hx", lineNumber : 84, className : "rg.data.source.rgquery.QueryParser", methodName : "processProperty"});
		name = rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(1);
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(2)) limit = Std.parseInt(rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(2));
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(3)) descending = rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(3).toLowerCase() == "desc";
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(4)) this.addWhereCondition(rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(1),rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(4),rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE.matched(5));
	} else {
		if(!rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.match(parts[0])) throw new thx.error.Error("invalid first expression '{0}' in '{1}'",[parts[0],token],null,{ fileName : "QueryParser.hx", lineNumber : 101, className : "rg.data.source.rgquery.QueryParser", methodName : "processProperty"});
		name = rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(1);
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(2)) limit = Std.parseInt(rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(2));
		if(null != rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(3)) descending = rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(3).toLowerCase() == "desc";
		this.addWhereCondition(rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(1),rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(4),rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE.matched(5));
		var _g1 = 1, _g = parts.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE.match(parts[i])) throw new thx.error.Error("invalid expression condition '{0}' in '{1}'",[parts[i],token],null,{ fileName : "QueryParser.hx", lineNumber : 117, className : "rg.data.source.rgquery.QueryParser", methodName : "processProperty"});
			this.addWhereCondition(rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE.matched(1),rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE.matched(2),rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE.matched(3));
		}
	}
	return rg.data.source.rgquery.QExp.Property(name,limit,descending);
}
rg.data.source.rgquery.QueryParser.prototype.addWhereCondition = function(name,operator,value) {
	switch(operator) {
	case "=":
		this.where.push(rg.data.source.rgquery.QCondition.Equality(name,rg.data.source.rgquery.QueryParser.parseValue(StringTools.rtrim(value))));
		break;
	default:
		throw new thx.error.Error("invalid operator '{0}'",null,operator,{ fileName : "QueryParser.hx", lineNumber : 135, className : "rg.data.source.rgquery.QueryParser", methodName : "addWhereCondition"});
	}
}
rg.data.source.rgquery.QueryParser.prototype.__class__ = rg.data.source.rgquery.QueryParser;
hxevents.EventException = { __ename__ : ["hxevents","EventException"], __constructs__ : ["StopPropagation"] }
hxevents.EventException.StopPropagation = ["StopPropagation",0];
hxevents.EventException.StopPropagation.toString = $estr;
hxevents.EventException.StopPropagation.__enum__ = hxevents.EventException;
rg.view.svg.layer.Map = function(container,projection) {
	if( container === $_ ) return;
	this.g = container.append("svg:g").attr("class").string("map");
	this.projection = projection;
	this.map = new Hash();
	this.onReady = new hxevents.Notifier();
}
rg.view.svg.layer.Map.__name__ = ["rg","view","svg","layer","Map"];
rg.view.svg.layer.Map.prototype.className = null;
rg.view.svg.layer.Map.prototype.map = null;
rg.view.svg.layer.Map.prototype.onReady = null;
rg.view.svg.layer.Map.prototype.click = null;
rg.view.svg.layer.Map.prototype.labelDataPoint = null;
rg.view.svg.layer.Map.prototype.labelDataPointOver = null;
rg.view.svg.layer.Map.prototype.radius = null;
rg.view.svg.layer.Map.prototype.colorMode = null;
rg.view.svg.layer.Map.prototype.projection = null;
rg.view.svg.layer.Map.prototype.g = null;
rg.view.svg.layer.Map.prototype.load = function(path,type) {
	switch(type) {
	case "geojson":
		this.loadGeoJson(path);
		break;
	default:
		new thx.error.Error("unsupported geographic format '{0}'",null,type,{ fileName : "Map.hx", lineNumber : 53, className : "rg.view.svg.layer.Map", methodName : "load"});
	}
}
rg.view.svg.layer.Map.prototype.loadGeoJson = function(path) {
	var me = this;
	var http = new haxe.Http(path);
	http.onData = function(data) {
		var json = thx.json.Json.decode(data);
		me.draw(json);
	};
	http.onError = function(err) {
		throw new thx.error.Error("unable to load GeoJSON file '{0}': {1}",[path,err],null,{ fileName : "Map.hx", lineNumber : 65, className : "rg.view.svg.layer.Map", methodName : "loadGeoJson"});
	};
	http.request(false);
}
rg.view.svg.layer.Map.prototype.draw = function(json) {
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
			if(null != feature.id) this.map.set(feature.id,{ svg : p, dp : dp});
			if(null != this.labelDataPointOver) p.onNode("mouseover",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})($closure(this,"onMouseOver"),dp));
			if(null != this.click) p.onNode("click",(function(f,a1) {
				return function(a2,a3) {
					return f(a1,a2,a3);
				};
			})($closure(this,"onClick"),dp));
		}
		break;
	case "MultiPoint":case "MultiLineString":case "MultiPolygon":case "GeometryCollection":
		throw new thx.error.Error("the type '{0}' is not implemented yet",[json.type],null,{ fileName : "Map.hx", lineNumber : 105, className : "rg.view.svg.layer.Map", methodName : "draw"});
		break;
	default:
		this.g.append("svg:path").attr("d").string(path.path(json));
	}
	this.onReady.dispatch();
}
rg.view.svg.layer.Map.prototype.onMouseOver = function(dp,_,_1) {
	this.handlerDataPointOver(dp,this.labelDataPointOver);
}
rg.view.svg.layer.Map.prototype.onClick = function(dp,_,_1) {
	this.handlerClick(dp,this.click);
}
rg.view.svg.layer.Map.prototype.handlerDataPointOver = null;
rg.view.svg.layer.Map.prototype.handlerClick = null;
rg.view.svg.layer.Map.prototype.setClassName = function(cls) {
	this.g.attr("class").string("map" + (null == cls?"":" " + cls));
	return cls;
}
rg.view.svg.layer.Map.prototype.__class__ = rg.view.svg.layer.Map;
rg.controller.factory.FactoryVariableDependent = function(p) {
}
rg.controller.factory.FactoryVariableDependent.__name__ = ["rg","controller","factory","FactoryVariableDependent"];
rg.controller.factory.FactoryVariableDependent.prototype.create = function(info,isnumeric) {
	if(null == info.type) throw new thx.error.Error("cannot create an axis if type is not specified",null,null,{ fileName : "FactoryVariableDependent.hx", lineNumber : 18, className : "rg.controller.factory.FactoryVariableDependent", methodName : "create"});
	var axiscreator = new rg.controller.factory.FactoryAxis(), variable = new rg.data.VariableDependent(info.type,info.scaleDistribution), axis = axiscreator.create(info.type,isnumeric,variable,info.values);
	variable.setAxis(axis);
	variable.setMinF(rg.controller.factory.FactoryVariableIndependent.convertBound(axis,info.min));
	variable.setMaxF(rg.controller.factory.FactoryVariableIndependent.convertBound(axis,info.max));
	return variable;
}
rg.controller.factory.FactoryVariableDependent.prototype.__class__ = rg.controller.factory.FactoryVariableDependent;
Arrays = function() { }
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
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compare(a,arr[i]) > 0) a = arr[p = i];
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
Arrays.max = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(Reflect.compare(a,arr[i]) < 0) a = arr[p = i];
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
	return Iterators.reduce(arr.iterator(),f,initialValue);
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
Arrays.prototype.__class__ = Arrays;
rg.controller.info.InfoPieChart = function(p) {
	if( p === $_ ) return;
	this.innerradius = 0.0;
	this.labelradius = 0.45;
	this.labelorientation = rg.view.svg.widget.LabelOrientation.Aligned;
	this.outerradius = 0.9;
	this.overradius = 0.95;
	this.tooltipradius = 0.5;
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabel();
	this.effect = rg.view.svg.chart.GradientEffect.Gradient(0.65);
	this.dontfliplabel = true;
}
rg.controller.info.InfoPieChart.__name__ = ["rg","controller","info","InfoPieChart"];
rg.controller.info.InfoPieChart.validateOrientation = function(s) {
	var name = s.split("-")[0].toLowerCase();
	return Arrays.exists(["fixed","ortho","orthogonal","align","aligned","horizontal"],name);
}
rg.controller.info.InfoPieChart.filterOrientation = function(s) {
	var name = s.split("-")[0].toLowerCase();
	switch(name) {
	case "fixed":
		var v = Std.parseFloat(s.split("-")[1]);
		if(null == v || !Math.isFinite(v)) throw new thx.error.Error("when 'fixed' is used a number should follow the 'dash' character",null,null,{ fileName : "InfoPieChart.hx", lineNumber : 60, className : "rg.controller.info.InfoPieChart", methodName : "filterOrientation"});
		return rg.view.svg.widget.LabelOrientation.FixedAngle(v);
	case "ortho":case "orthogonal":
		return rg.view.svg.widget.LabelOrientation.Orthogonal;
	case "align":case "aligned":
		return rg.view.svg.widget.LabelOrientation.Aligned;
	case "horizontal":
		return rg.view.svg.widget.LabelOrientation.FixedAngle(0);
	default:
		throw new thx.error.Error("invalid filter orientation '{0}'",null,s,{ fileName : "InfoPieChart.hx", lineNumber : 69, className : "rg.controller.info.InfoPieChart", methodName : "filterOrientation"});
	}
}
rg.controller.info.InfoPieChart.filters = function() {
	return [{ field : "labelradius", validator : function(v) {
		return Std["is"](v,Float);
	}, filter : null},{ field : "dontfliplabel", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "labelorientation", validator : function(v) {
		return Std["is"](v,String) && rg.controller.info.InfoPieChart.validateOrientation(v);
	}, filter : function(v) {
		return [{ field : "labelorientation", value : rg.controller.info.InfoPieChart.filterOrientation(v)}];
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
		return [{ field : "animation", value : rg.controller.info.Info.feed(new rg.controller.info.InfoAnimation(),v)}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabel(),v)}];
	}},{ field : "sort", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "sortDataPoint", value : v}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "effect", validator : rg.view.svg.chart.GradientEffects.canParse, filter : function(v) {
		return [{ field : "effect", value : rg.view.svg.chart.GradientEffects.parse(v)}];
	}}];
}
rg.controller.info.InfoPieChart.prototype.labelradius = null;
rg.controller.info.InfoPieChart.prototype.labelorientation = null;
rg.controller.info.InfoPieChart.prototype.innerradius = null;
rg.controller.info.InfoPieChart.prototype.outerradius = null;
rg.controller.info.InfoPieChart.prototype.overradius = null;
rg.controller.info.InfoPieChart.prototype.tooltipradius = null;
rg.controller.info.InfoPieChart.prototype.animation = null;
rg.controller.info.InfoPieChart.prototype.label = null;
rg.controller.info.InfoPieChart.prototype.effect = null;
rg.controller.info.InfoPieChart.prototype.sortDataPoint = null;
rg.controller.info.InfoPieChart.prototype.dontfliplabel = null;
rg.controller.info.InfoPieChart.prototype.click = null;
rg.controller.info.InfoPieChart.prototype.__class__ = rg.controller.info.InfoPieChart;
thx.error.NotImplemented = function(posInfo) {
	if( posInfo === $_ ) return;
	thx.error.Error.call(this,"method {0}.{1}() needs to be implemented",[posInfo.className,posInfo.methodName],posInfo,{ fileName : "NotImplemented.hx", lineNumber : 13, className : "thx.error.NotImplemented", methodName : "new"});
}
thx.error.NotImplemented.__name__ = ["thx","error","NotImplemented"];
thx.error.NotImplemented.__super__ = thx.error.Error;
for(var k in thx.error.Error.prototype ) thx.error.NotImplemented.prototype[k] = thx.error.Error.prototype[k];
thx.error.NotImplemented.prototype.__class__ = thx.error.NotImplemented;
rg.controller.factory.FactoryVariableIndependent = function(p) {
}
rg.controller.factory.FactoryVariableIndependent.__name__ = ["rg","controller","factory","FactoryVariableIndependent"];
rg.controller.factory.FactoryVariableIndependent.convertBound = function(axis,value) {
	if(null == value || Reflect.isFunction(value)) return value;
	if(Std["is"](axis,rg.data.AxisTime)) {
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
		throw new thx.error.Error("invalid value '{0}' for time bound",[value],null,{ fileName : "FactoryVariableIndependent.hx", lineNumber : 46, className : "rg.controller.factory.FactoryVariableIndependent", methodName : "convertBound"});
	}
	return function(_,_1) {
		return value;
	};
}
rg.controller.factory.FactoryVariableIndependent.prototype.create = function(info) {
	if(null == info.type) return null;
	var axiscreateer = new rg.controller.factory.FactoryAxis(), variable = new rg.data.VariableIndependent(info.type,info.scaleDistribution), axis = axiscreateer.createDiscrete(info.type,variable,info.values,info.groupBy);
	variable.setAxis(axis);
	variable.setMinF(rg.controller.factory.FactoryVariableIndependent.convertBound(axis,info.min));
	variable.setMaxF(rg.controller.factory.FactoryVariableIndependent.convertBound(axis,info.max));
	return variable;
}
rg.controller.factory.FactoryVariableIndependent.prototype.__class__ = rg.controller.factory.FactoryVariableIndependent;
rg.controller.visualization.VisualizationGeo = function(layout) {
	if( layout === $_ ) return;
	rg.controller.visualization.VisualizationSvg.call(this,layout);
}
rg.controller.visualization.VisualizationGeo.__name__ = ["rg","controller","visualization","VisualizationGeo"];
rg.controller.visualization.VisualizationGeo.__super__ = rg.controller.visualization.VisualizationSvg;
for(var k in rg.controller.visualization.VisualizationSvg.prototype ) rg.controller.visualization.VisualizationGeo.prototype[k] = rg.controller.visualization.VisualizationSvg.prototype[k];
rg.controller.visualization.VisualizationGeo.prototype.info = null;
rg.controller.visualization.VisualizationGeo.prototype.title = null;
rg.controller.visualization.VisualizationGeo.prototype.chart = null;
rg.controller.visualization.VisualizationGeo.prototype.init = function() {
	if(null != this.info.label.title) {
		var panelContextTitle = this.layout.getContext("title");
		if(null == panelContextTitle) return;
		this.title = new rg.view.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
	}
	var panelChart = this.layout.getPanel(this.layout.mainPanelName);
	this.chart = new rg.view.svg.chart.Geo(panelChart);
	var pfactory = new rg.controller.factory.FactoryGeoProjection();
	var _g = 0, _g1 = this.info.map;
	while(_g < _g1.length) {
		var imap = _g1[_g];
		++_g;
		var projection = pfactory.create(imap), map = new rg.view.svg.layer.Map(this.chart.mapcontainer,projection);
		map.setClassName(imap.classname);
		if(null == imap.label) map.labelDataPoint = this.info.label.datapoint; else map.labelDataPoint = imap.label.datapoint;
		if(null == imap.label) map.labelDataPointOver = this.info.label.datapointover; else map.labelDataPointOver = imap.label.datapointover;
		map.click = imap.click;
		map.radius = imap.radius;
		map.colorMode = imap.colorScaleMode;
		map.handlerClick = $closure(this.chart,"handlerClick");
		map.handlerDataPointOver = $closure(this.chart,"handlerDataPointOver");
		map.load(imap.url,imap.type);
		this.chart.addMap(map,imap.property);
	}
}
rg.controller.visualization.VisualizationGeo.prototype.feedData = function(data) {
	this.chart.setVariables(this.independentVariables,this.dependentVariables,data);
	if(null != this.title) {
		if(null != this.info.label.title) {
			this.title.setText(this.info.label.title(this.getVariables(),data));
			this.layout.suggestSize("title",this.title.idealHeight());
		} else this.layout.suggestSize("title",0);
	}
	this.chart.init();
	this.chart.data(data);
}
rg.controller.visualization.VisualizationGeo.prototype.destroy = function() {
	this.chart.destroy();
	if(null != this.title) this.title.destroy();
	rg.controller.visualization.VisualizationSvg.prototype.destroy.call(this);
}
rg.controller.visualization.VisualizationGeo.prototype.__class__ = rg.controller.visualization.VisualizationGeo;
rg.data.source.rgquery.IExecutorReportGrid = function() { }
rg.data.source.rgquery.IExecutorReportGrid.__name__ = ["rg","data","source","rgquery","IExecutorReportGrid"];
rg.data.source.rgquery.IExecutorReportGrid.prototype.children = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertyCount = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertySeries = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertyValues = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertyValueCount = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.propertyValueSeries = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.searchCount = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.searchSeries = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.intersect = null;
rg.data.source.rgquery.IExecutorReportGrid.prototype.__class__ = rg.data.source.rgquery.IExecutorReportGrid;
rg.view.svg.chart.LineChart = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.addClass("line-chart");
	this.chart = this.g.append("svg:g");
}
rg.view.svg.chart.LineChart.__name__ = ["rg","view","svg","chart","LineChart"];
rg.view.svg.chart.LineChart.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.LineChart.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.LineChart.prototype.symbol = null;
rg.view.svg.chart.LineChart.prototype.symbolStyle = null;
rg.view.svg.chart.LineChart.prototype.lineInterpolator = null;
rg.view.svg.chart.LineChart.prototype.lineEffect = null;
rg.view.svg.chart.LineChart.prototype.y0property = null;
rg.view.svg.chart.LineChart.prototype.linePathShape = null;
rg.view.svg.chart.LineChart.prototype.chart = null;
rg.view.svg.chart.LineChart.prototype.dps = null;
rg.view.svg.chart.LineChart.prototype.segment = null;
rg.view.svg.chart.LineChart.prototype.setVariables = function(variableIndependents,yVariables,data) {
	rg.view.svg.chart.CartesianChart.prototype.setVariables.call(this,variableIndependents,yVariables,data);
}
rg.view.svg.chart.LineChart.prototype.x = function(d,i) {
	var value = Reflect.field(d,this.xVariable.type), scaled = this.xVariable.axis.scale(this.xVariable.min(),this.xVariable.max(),value), scaledw = scaled * this.width;
	return scaledw;
}
rg.view.svg.chart.LineChart.prototype.getY1 = function(pos) {
	var h = this.height, v = this.yVariables[pos], y0 = this.y0property;
	if(null != y0) return function(d,i) {
		var v1 = Reflect.field(d,v.type), value = Std["is"](v1,Float)?v1 + rg.util.DataPoints.valueAlt(d,y0,v.min()):v1, scaled = v.axis.scale(v.min(),v.max(),value), scaledh = scaled * h;
		return h - scaledh;
	}; else return function(d,i) {
		var value = Reflect.field(d,v.type), scaled = v.axis.scale(v.min(),v.max(),value), scaledh = scaled * h;
		return h - scaledh;
	};
}
rg.view.svg.chart.LineChart.prototype.getY0 = function(pos) {
	var h = this.height, y0 = this.y0property, v = this.yVariables[pos];
	return function(d,i) {
		var value = rg.util.DataPoints.valueAlt(d,y0,v.min()), scaled = v.axis.scale(v.min(),v.max(),value), scaledh = scaled * h;
		return h - scaledh;
	};
}
rg.view.svg.chart.LineChart.prototype.segments = null;
rg.view.svg.chart.LineChart.prototype.classsf = function(pos,cls) {
	return function(_,i) {
		return cls + " stroke-" + (pos + i);
	};
}
rg.view.svg.chart.LineChart.prototype.classff = function(pos,cls) {
	return function(_,i) {
		return cls + " fill-" + (pos + i);
	};
}
rg.view.svg.chart.LineChart.prototype.data = function(dps) {
	var me = this;
	this.linePathShape = [];
	var _g1 = 0, _g = this.yVariables.length;
	while(_g1 < _g) {
		var i = _g1++;
		var line = [new thx.svg.Line($closure(this,"x"),this.getY1(i))];
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
		var gi = this.chart.select("g.group-" + i), stats = [new rg.data.Stats()];
		stats[0].addMany(rg.util.DataPoints.values(Arrays.flatten(this.segments),this.yVariables[i].type));
		var segmentgroup = gi.selectAll("path.line").data(this.segments);
		if(null != this.y0property) {
			var area = new thx.svg.Area($closure(this,"x"),this.getY0(i),this.getY1(i));
			if(null != this.lineInterpolator) area.interpolator(this.lineInterpolator);
			segmentgroup.enter().append("svg:path").attr("class").stringf(this.classff(i,"line area")).attr("d").stringf($closure(area,"shape"));
		}
		var $e = (this.lineEffect);
		switch( $e[1] ) {
		case 1:
			var levels = $e[3], lightness = $e[2];
			var levels1 = [levels];
			var lightness1 = [lightness];
			var fs = [[]];
			segmentgroup.enter().append("svg:path").attr("class").stringf(this.classsf(i,"line")).eachNode((function(fs,lightness1) {
				return function(n,i1) {
					var start = thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(thx.js.Dom.selectNode(n).style("stroke").get(),"#000000")), end = thx.color.Hsl.darker(start,lightness1[0]);
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
		})())($closure(this,"onclick"),stats[0]), onmouseover = ((function() {
			return function(f,a1) {
				return (function() {
					return function(a2,a3) {
						return f(a1,a2,a3);
					};
				})();
			};
		})())($closure(this,"onmouseover"),stats[0]);
		var enter = gsymbols.enter().append("svg:g").attr("class").stringf(this.classsf(i,"symbols"));
		var gsymbol = enter.selectAll("g.symbol").dataf((function() {
			return function(d,i1) {
				return d;
			};
		})()).enter().append("svg:g").attr("transform").stringf(this.getTranslatePointf(i));
		if(null != this.click) gsymbol.on("click",onclick);
		if(null != this.labelDataPointOver) gsymbol.onNode("mouseover",onmouseover);
		gsymbol.append("svg:circle").attr("r")["float"](6).style("fill").string("#000000").style("fill-opacity")["float"](0.0).style("stroke").string("none");
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
					var dp = Reflect.field(n,"__data__"), label = new rg.view.svg.widget.Label(thx.js.Dom.selectNode(n),true,true,true);
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
}
rg.view.svg.chart.LineChart.prototype.getTranslatePointf = function(pos) {
	var x = $closure(this,"x"), y = this.getY1(pos);
	return function(dp,i) {
		return "translate(" + x(dp) + "," + y(dp,i) + ")";
	};
}
rg.view.svg.chart.LineChart.prototype.onmouseover = function(stats,n,i) {
	var dp = Reflect.field(n,"__data__"), text = this.labelDataPointOver(dp,stats);
	if(null == text) this.tooltip.hide(); else {
		var sel = thx.js.Dom.selectNode(n), coords = rg.view.svg.chart.Coords.fromTransform(sel.attr("transform").get());
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(coords[0],coords[1]);
	}
}
rg.view.svg.chart.LineChart.prototype.onclick = function(stats,dp,i) {
	this.click(dp,stats);
}
rg.view.svg.chart.LineChart.prototype.__class__ = rg.view.svg.chart.LineChart;
rg.view.layout.LayoutCartesian = function(width,height,container) {
	if( width === $_ ) return;
	rg.view.layout.Layout.call(this,width,height,container);
	this.titleOnTop = true;
	this.left = true;
	this.alternating = true;
	this.yitems = [];
}
rg.view.layout.LayoutCartesian.__name__ = ["rg","view","layout","LayoutCartesian"];
rg.view.layout.LayoutCartesian.__super__ = rg.view.layout.Layout;
for(var k in rg.view.layout.Layout.prototype ) rg.view.layout.LayoutCartesian.prototype[k] = rg.view.layout.Layout.prototype[k];
rg.view.layout.LayoutCartesian.prototype.main = null;
rg.view.layout.LayoutCartesian.prototype.titleOnTop = null;
rg.view.layout.LayoutCartesian.prototype.leftcontainer = null;
rg.view.layout.LayoutCartesian.prototype.rightcontainer = null;
rg.view.layout.LayoutCartesian.prototype.bottomcontainer = null;
rg.view.layout.LayoutCartesian.prototype.bottommiddlecontainer = null;
rg.view.layout.LayoutCartesian.prototype.maincontainer = null;
rg.view.layout.LayoutCartesian.prototype.middlecontainer = null;
rg.view.layout.LayoutCartesian.prototype.bottomleft = null;
rg.view.layout.LayoutCartesian.prototype.bottomright = null;
rg.view.layout.LayoutCartesian.prototype.xtickmarks = null;
rg.view.layout.LayoutCartesian.prototype.title = null;
rg.view.layout.LayoutCartesian.prototype.left = null;
rg.view.layout.LayoutCartesian.prototype.alternating = null;
rg.view.layout.LayoutCartesian.prototype.yitems = null;
rg.view.layout.LayoutCartesian.prototype.xtitle = null;
rg.view.layout.LayoutCartesian.prototype.getContext = function(name) {
	if(this.isY(name)) return this.getYContext(this.getYIndex(name)); else if(this.isYTitle(name)) return this.getYTitle(this.getYIndex(name));
	switch(name) {
	case "title":
		if(null == this.title) this.title = new rg.view.layout.PanelContext(this.space.createPanelAt(this.titleOnTop?0:1,rg.view.frame.FrameLayout.Fixed(0,0,0)),this.titleOnTop?rg.view.layout.Anchor.Bottom:rg.view.layout.Anchor.Top);
		return this.title;
	case "x":
		return this.getXTickmarks();
	case "xtitle":
		return this.getXTitle();
	default:
		return null;
	}
}
rg.view.layout.LayoutCartesian.prototype.getPanel = function(name) {
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
rg.view.layout.LayoutCartesian.prototype.getYItem = function(index) {
	if(null == this.yitems[index]) this.yitems[index] = { container : null, context : null, title : null, anchor : this.alternating && index % 2 == 0?rg.view.layout.Anchor.Right:rg.view.layout.Anchor.Left};
	return this.yitems[index];
}
rg.view.layout.LayoutCartesian.prototype.getYContainer = function(index) {
	var item = this.getYItem(index);
	if(null == item.container) {
		if(this.alternating && index % 2 == 0) item.container = this.getLeftContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal); else item.container = this.getRightContainer().createContainer(rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
		item.container.g.classed().add("group-" + index);
	}
	return item.container;
}
rg.view.layout.LayoutCartesian.prototype.getYContext = function(index) {
	var item = this.getYItem(index);
	if(null == item.context) {
		var panel = (function($this) {
			var $r;
			switch( (item.anchor)[1] ) {
			case 2:
				$r = $this.getYContainer(index).createPanelAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0));
				break;
			case 3:
				$r = $this.getYContainer(index).createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0));
				break;
			default:
				$r = null;
			}
			return $r;
		}(this));
		item.context = new rg.view.layout.PanelContext(panel,item.anchor);
	}
	return item.context;
}
rg.view.layout.LayoutCartesian.prototype.getYTitle = function(index) {
	var item = this.getYItem(index);
	if(null == item.title) {
		var panel = (function($this) {
			var $r;
			switch( (item.anchor)[1] ) {
			case 2:
				$r = $this.getYContainer(index).createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0));
				break;
			case 3:
				$r = $this.getYContainer(index).createPanelAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0));
				break;
			default:
				$r = null;
			}
			return $r;
		}(this));
		item.title = new rg.view.layout.PanelContext(panel,item.anchor);
	}
	return item.title;
}
rg.view.layout.LayoutCartesian.prototype.getYIndex = function(s) {
	if(!rg.view.layout.LayoutCartesian.REYINDEX.match(s)) return -1; else return Std.parseInt(rg.view.layout.LayoutCartesian.REYINDEX.matched(1));
}
rg.view.layout.LayoutCartesian.prototype.isY = function(s) {
	return rg.view.layout.LayoutCartesian.REYAXIS.match(s);
}
rg.view.layout.LayoutCartesian.prototype.isYTitle = function(s) {
	return rg.view.layout.LayoutCartesian.REYTITLE.match(s);
}
rg.view.layout.LayoutCartesian.prototype.suggestSize = function(name,size) {
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
	rg.view.layout.Layout.prototype.suggestSize.call(this,name,size);
	switch(name) {
	case "x":case "xtitle":
		var size1 = 0, c = this.getPanel("x");
		if(null != c) size1 += c.frame.height;
		c = this.getPanel("xtitle");
		if(null != c) size1 += c.frame.height;
		rg.view.layout.Layout.prototype.suggestSize.call(this,"xtickmarks",size1);
		break;
	}
}
rg.view.layout.LayoutCartesian.prototype.suggestLateralSize = function(anchor) {
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
rg.view.layout.LayoutCartesian.prototype.getXTitle = function() {
	if(null == this.xtitle) this.xtitle = new rg.view.layout.PanelContext(this.getBottomMiddleContainer().createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0)),rg.view.layout.Anchor.Top);
	return this.xtitle;
}
rg.view.layout.LayoutCartesian.prototype.getMainContainer = function() {
	if(null == this.maincontainer) this.maincontainer = this.space.createContainerAt(this.titleOnTop?1:0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Vertical);
	return this.maincontainer;
}
rg.view.layout.LayoutCartesian.prototype.getMiddleContainer = function() {
	if(null == this.middlecontainer) this.middlecontainer = this.getMainContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Horizontal);
	return this.middlecontainer;
}
rg.view.layout.LayoutCartesian.prototype.getLeftContainer = function() {
	if(null == this.leftcontainer) this.leftcontainer = this.getMiddleContainer().createContainerAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	return this.leftcontainer;
}
rg.view.layout.LayoutCartesian.prototype.getRightContainer = function() {
	if(null == this.rightcontainer) this.rightcontainer = this.getMiddleContainer().createContainerAt(2,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	return this.rightcontainer;
}
rg.view.layout.LayoutCartesian.prototype.getBottomContainer = function() {
	if(null == this.bottomcontainer) this.bottomcontainer = this.getMainContainer().createContainerAt(1,rg.view.frame.FrameLayout.Fixed(0,0,0),rg.view.frame.Orientation.Horizontal);
	return this.bottomcontainer;
}
rg.view.layout.LayoutCartesian.prototype.getBottomMiddleContainer = function() {
	if(null == this.bottommiddlecontainer) {
		var container = this.getBottomContainer();
		this.bottomleft = container.createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0));
		this.bottommiddlecontainer = container.createContainer(rg.view.frame.FrameLayout.Fill(0,0),rg.view.frame.Orientation.Vertical);
		this.bottommiddlecontainer.g.classed().add("axis-x");
		this.bottomright = container.createPanel(rg.view.frame.FrameLayout.Fixed(0,0,0));
	}
	return this.bottommiddlecontainer;
}
rg.view.layout.LayoutCartesian.prototype.getXTickmarks = function() {
	if(null == this.xtickmarks) {
		var container = this.getBottomMiddleContainer();
		this.xtickmarks = new rg.view.layout.PanelContext(container.createPanelAt(0,rg.view.frame.FrameLayout.Fixed(0,0,0)),rg.view.layout.Anchor.Top);
	}
	return this.xtickmarks;
}
rg.view.layout.LayoutCartesian.prototype.getMain = function() {
	if(null == this.main) this.main = this.getMiddleContainer().createPanelAt(1,rg.view.frame.FrameLayout.Fill(0,0));
	return this.main;
}
rg.view.layout.LayoutCartesian.prototype.feedOptions = function(info) {
	rg.view.layout.Layout.prototype.feedOptions.call(this,info);
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
rg.view.layout.LayoutCartesian.prototype.adjustPadding = function() {
	var top = null == this.title && null == this.paddings.top?8:this.paddings.top, bottom = (null == this.xtickmarks || !this.titleOnTop && null == this.title) && null == this.paddings.bottom?8:this.paddings.bottom, left = null == this.leftcontainer && null == this.paddings.left?20:this.paddings.left, right = null == this.rightcontainer && null == this.paddings.right?20:this.paddings.right;
	if(null != left || null != right) {
		this.suggestPanelPadding(this.getMain(),left,right);
		this.suggestPanelPadding(this.bottommiddlecontainer,left,right);
	}
	if(null != top || null != bottom) this.suggestPanelPadding(this.middlecontainer,top,bottom);
}
rg.view.layout.LayoutCartesian.prototype.__class__ = rg.view.layout.LayoutCartesian;
Types = function() { }
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
Types.prototype.__class__ = Types;
rg.view.svg.widget.GridAnchors = function() { }
rg.view.svg.widget.GridAnchors.__name__ = ["rg","view","svg","widget","GridAnchors"];
rg.view.svg.widget.GridAnchors.parse = function(s) {
	return (function($this) {
		var $r;
		switch(s.toLowerCase()) {
		case "topleft":
			$r = rg.view.svg.widget.GridAnchor.TopLeft;
			break;
		case "top":
			$r = rg.view.svg.widget.GridAnchor.Top;
			break;
		case "topright":
			$r = rg.view.svg.widget.GridAnchor.TopRight;
			break;
		case "left":
			$r = rg.view.svg.widget.GridAnchor.Left;
			break;
		case "center":
			$r = rg.view.svg.widget.GridAnchor.Center;
			break;
		case "right":
			$r = rg.view.svg.widget.GridAnchor.Right;
			break;
		case "bottomleft":
			$r = rg.view.svg.widget.GridAnchor.BottomLeft;
			break;
		case "bottom":
			$r = rg.view.svg.widget.GridAnchor.Bottom;
			break;
		case "bottomright":
			$r = rg.view.svg.widget.GridAnchor.BottomRight;
			break;
		default:
			$r = rg.view.svg.widget.GridAnchor.Center;
		}
		return $r;
	}(this));
}
rg.view.svg.widget.GridAnchors.prototype.__class__ = rg.view.svg.widget.GridAnchors;
rg.view.svg.chart.StreamGraph = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.chart.CartesianChart.call(this,panel);
	this.interpolator = thx.svg.LineInterpolator.Cardinal(0.6);
	this.gradientLightness = 0.75;
	this.gradientStyle = 1;
}
rg.view.svg.chart.StreamGraph.__name__ = ["rg","view","svg","chart","StreamGraph"];
rg.view.svg.chart.StreamGraph.__super__ = rg.view.svg.chart.CartesianChart;
for(var k in rg.view.svg.chart.CartesianChart.prototype ) rg.view.svg.chart.StreamGraph.prototype[k] = rg.view.svg.chart.CartesianChart.prototype[k];
rg.view.svg.chart.StreamGraph.prototype.interpolator = null;
rg.view.svg.chart.StreamGraph.prototype.gradientLightness = null;
rg.view.svg.chart.StreamGraph.prototype.gradientStyle = null;
rg.view.svg.chart.StreamGraph.prototype.dps = null;
rg.view.svg.chart.StreamGraph.prototype.area = null;
rg.view.svg.chart.StreamGraph.prototype.transformedData = null;
rg.view.svg.chart.StreamGraph.prototype.stats = null;
rg.view.svg.chart.StreamGraph.prototype.defs = null;
rg.view.svg.chart.StreamGraph.prototype.maxy = null;
rg.view.svg.chart.StreamGraph.prototype.init = function() {
	rg.view.svg.chart.CartesianChart.prototype.init.call(this);
	this.defs = this.g.append("svg:defs");
	this.g.classed().add("stream-chart");
}
rg.view.svg.chart.StreamGraph.prototype.setVariables = function(variableIndependents,variableDependents,data) {
	rg.view.svg.chart.CartesianChart.prototype.setVariables.call(this,variableIndependents,variableDependents,data);
}
rg.view.svg.chart.StreamGraph.prototype.data = function(dps) {
	this.dps = dps;
	this.prepareData();
	this.redraw();
}
rg.view.svg.chart.StreamGraph.prototype.redraw = function() {
	if(null == this.transformedData) return;
	var layer = this.g.selectAll("g.group").data(this.transformedData);
	layer.update().select("path.line").attr("d").stringf($closure(this.area,"shape"));
	var node = layer.enter().append("svg:g").attr("class").string("group").onNode("mousemove",$closure(this,"onover")).onNode("click",$closure(this,"onclick")).append("svg:path").attr("class").stringf(function(d,i) {
		return "line fill-" + i;
	}).attr("d").stringf($closure(this.area,"shape"));
	if(this.gradientStyle != 0) node.each(this.gradientStyle == 1?$closure(this,"applyGradientV"):$closure(this,"applyGradientH"));
	layer.exit().remove();
}
rg.view.svg.chart.StreamGraph.prototype.getDataAtNode = function(n,i) {
	var px = thx.js.Svg.mouse(n)[0], x = (Floats.uninterpolatef(this.transformedData[i][0].coord.x,Arrays.last(this.transformedData[i]).coord.x))(px / this.width);
	var data = Reflect.field(n,"__data__");
	return Arrays.nearest(this.transformedData[i],x,function(d) {
		return d.coord.x;
	});
}
rg.view.svg.chart.StreamGraph.prototype.onover = function(n,i) {
	if(null == this.labelDataPointOver) return;
	var dp = this.getDataAtNode(n,i);
	this.tooltip.setText(this.labelDataPointOver(dp.dp,this.stats).split("\n"));
	this.tooltip.show();
	this.moveTooltip(dp.coord.x * this.width,this.height - (dp.coord.y + dp.coord.y0) * this.height / this.maxy);
}
rg.view.svg.chart.StreamGraph.prototype.onclick = function(n,i) {
	if(null == this.click) return;
	var dp = this.getDataAtNode(n,i);
	this.click(dp.dp,this.stats);
}
rg.view.svg.chart.StreamGraph.prototype.prepareData = function() {
	var me = this;
	this.defs.selectAll("linearGradient.h").remove();
	var xscale = (function(f,a1,a2) {
		return function(a3) {
			return f(a1,a2,a3);
		};
	})($closure(this.xVariable.axis,"scale"),this.xVariable.min(),this.xVariable.max()), xtype = this.xVariable.type, x = function(d) {
		return xscale(Reflect.field(d,xtype));
	}, yscale = (function(f,a1,a2) {
		return function(a3) {
			return f(a1,a2,a3);
		};
	})($closure(this.yVariables[0].axis,"scale"),this.yVariables[0].min(),this.yVariables[0].max()), ytype = this.yVariables[0].type, y = function(d) {
		return yscale(Reflect.field(d,ytype));
	};
	var coords = this.dps.map(function(d,i) {
		return d.map(function(d1,i1) {
			return { x : x(d1), y : Math.max(0,y(d1))};
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
rg.view.svg.chart.StreamGraph.prototype.applyGradientV = function(d,i) {
	var gn = thx.js.Selection.getCurrent(), color = rg.view.svg.util.RGColors.parse(gn.style("fill").get(),"#cccccc"), id = "rg_stream_gradient_h_" + color.hex("");
	if(this.defs.select("#" + id).empty()) {
		var scolor = thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),this.gradientLightness).toRgbString();
		var gradient = this.defs.append("svg:linearGradient").attr("id").string(id).attr("x1").string("0%").attr("x2").string("0%").attr("y1").string("100%").attr("y2").string("0%").attr("spreadMethod").string("pad");
		gradient.append("svg:stop").attr("offset").string("0%").attr("stop-color").string(scolor).attr("stop-opacity")["float"](1);
		gradient.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
	}
	gn.attr("style").string("fill:url(#" + id + ")");
}
rg.view.svg.chart.StreamGraph.prototype.applyGradientH = function(d,i) {
	var gn = thx.js.Selection.getCurrent(), color = thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(gn.style("fill").get(),"#cccccc")), id = "rg_stream_gradient_v_" + rg.view.svg.chart.StreamGraph.vid++;
	var gradient = this.defs.append("svg:linearGradient").attr("class").string("x").attr("id").string(id).attr("x1").string("0%").attr("x2").string("100%").attr("y1").string("0%").attr("y2").string("0%");
	var bx = d[0].coord.x, ax = d[d.length - 1].coord.x, span = ax - bx, percent = function(x) {
		return Math.round((x - bx) / span * 10000) / 100;
	}, max = Arrays.floatMax(d,function(d1) {
		return d1.coord.y;
	});
	var _g1 = 0, _g = d.length;
	while(_g1 < _g) {
		var i1 = _g1++;
		var dp = d[i1], v = 1 + (dp.coord.y / max - 0.5) * this.gradientLightness;
		gradient.append("svg:stop").attr("offset").string(percent(dp.coord.x) + "%").attr("stop-color").string(thx.color.Hsl.darker(color,v).hex("#")).attr("stop-opacity")["float"](1);
	}
	gn.attr("style").string("fill:url(#" + id + ")");
}
rg.view.svg.chart.StreamGraph.prototype.__class__ = rg.view.svg.chart.StreamGraph;
rg.controller.visualization.VisualizationPieChart = function(layout) {
	if( layout === $_ ) return;
	rg.controller.visualization.VisualizationSvg.call(this,layout);
}
rg.controller.visualization.VisualizationPieChart.__name__ = ["rg","controller","visualization","VisualizationPieChart"];
rg.controller.visualization.VisualizationPieChart.__super__ = rg.controller.visualization.VisualizationSvg;
for(var k in rg.controller.visualization.VisualizationSvg.prototype ) rg.controller.visualization.VisualizationPieChart.prototype[k] = rg.controller.visualization.VisualizationSvg.prototype[k];
rg.controller.visualization.VisualizationPieChart.prototype.chart = null;
rg.controller.visualization.VisualizationPieChart.prototype.title = null;
rg.controller.visualization.VisualizationPieChart.prototype.info = null;
rg.controller.visualization.VisualizationPieChart.prototype.init = function() {
	var panelChart = this.layout.getPanel(this.layout.mainPanelName);
	this.chart = new rg.view.svg.chart.PieChart(panelChart);
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
		this.title = new rg.view.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
	}
}
rg.controller.visualization.VisualizationPieChart.prototype.feedData = function(data) {
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	if(null != this.title) {
		if(null != this.info.label.title) {
			this.title.setText(this.info.label.title(this.getVariables(),data));
			this.layout.suggestSize("title",this.title.idealHeight());
		} else this.layout.suggestSize("title",0);
	}
	if(null != this.info.sortDataPoint) data.sort(this.info.sortDataPoint);
	this.chart.init();
	this.chart.data(data);
}
rg.controller.visualization.VisualizationPieChart.prototype.destroy = function() {
	this.chart.destroy();
	if(null != this.title) this.title.destroy();
	rg.controller.visualization.VisualizationSvg.prototype.destroy.call(this);
}
rg.controller.visualization.VisualizationPieChart.prototype.__class__ = rg.controller.visualization.VisualizationPieChart;
rg.controller.visualization.VisualizationHeatGrid = function(layout) {
	if( layout === $_ ) return;
	rg.controller.visualization.VisualizationCartesian.call(this,layout);
}
rg.controller.visualization.VisualizationHeatGrid.__name__ = ["rg","controller","visualization","VisualizationHeatGrid"];
rg.controller.visualization.VisualizationHeatGrid.__super__ = rg.controller.visualization.VisualizationCartesian;
for(var k in rg.controller.visualization.VisualizationCartesian.prototype ) rg.controller.visualization.VisualizationHeatGrid.prototype[k] = rg.controller.visualization.VisualizationCartesian.prototype[k];
rg.controller.visualization.VisualizationHeatGrid.prototype.infoHeatGrid = null;
rg.controller.visualization.VisualizationHeatGrid.prototype.initAxes = function() {
	this.xvariable = this.independentVariables[0];
	this.yvariables = [this.independentVariables[1]];
}
rg.controller.visualization.VisualizationHeatGrid.prototype.initChart = function() {
	var chart = new rg.view.svg.chart.HeatGrid(this.layout.getPanel(this.layout.mainPanelName));
	chart.useContour = this.infoHeatGrid.contour;
	chart.setColorMode(this.infoHeatGrid.colorScaleMode);
	this.chart = chart;
}
rg.controller.visualization.VisualizationHeatGrid.prototype.transformData = function(dps) {
	return dps;
}
rg.controller.visualization.VisualizationHeatGrid.prototype.setTickmarksDefaults = function(tickmarks,i,type,pname) {
	if(i != 0) return;
	tickmarks.labelAnchor = rg.view.svg.widget.GridAnchor.Left;
	tickmarks.labelAngle = 180;
}
rg.controller.visualization.VisualizationHeatGrid.prototype.__class__ = rg.controller.visualization.VisualizationHeatGrid;
rg.controller.info.InfoHeatGrid = function(p) {
	if( p === $_ ) return;
	rg.controller.info.InfoCartesianChart.call(this);
	this.colorScaleMode = rg.view.svg.chart.ColorScaleMode.FromCss();
}
rg.controller.info.InfoHeatGrid.__name__ = ["rg","controller","info","InfoHeatGrid"];
rg.controller.info.InfoHeatGrid.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoHeatGrid.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoHeatGrid.filters = function() {
	return [{ field : "contour", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "color", validator : function(v) {
		return Std["is"](v,String) || Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "colorScaleMode", value : rg.view.svg.chart.ColorScaleModes.createFromDynamic(v)}];
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
}
rg.controller.info.InfoHeatGrid.prototype.contour = null;
rg.controller.info.InfoHeatGrid.prototype.colorScaleMode = null;
rg.controller.info.InfoHeatGrid.prototype.__class__ = rg.controller.info.InfoHeatGrid;
if(!thx.data) thx.data = {}
thx.data.ValueEncoder = function(handler) {
	if( handler === $_ ) return;
	this.handler = handler;
}
thx.data.ValueEncoder.__name__ = ["thx","data","ValueEncoder"];
thx.data.ValueEncoder.prototype.handler = null;
thx.data.ValueEncoder.prototype.encode = function(o) {
	this.handler.start();
	this.encodeValue(o);
	this.handler.end();
}
thx.data.ValueEncoder.prototype.encodeValue = function(o) {
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
thx.data.ValueEncoder.prototype.encodeObject = function(o) {
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
thx.data.ValueEncoder.prototype.encodeHash = function(o) {
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
thx.data.ValueEncoder.prototype.encodeList = function(list) {
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
thx.data.ValueEncoder.prototype.encodeArray = function(a) {
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
thx.data.ValueEncoder.prototype.__class__ = thx.data.ValueEncoder;
hxevents.Notifier = function(p) {
	if( p === $_ ) return;
	this.handlers = new Array();
}
hxevents.Notifier.__name__ = ["hxevents","Notifier"];
hxevents.Notifier.stop = function() {
	throw hxevents.EventException.StopPropagation;
}
hxevents.Notifier.prototype.handlers = null;
hxevents.Notifier.prototype.add = function(h) {
	this.handlers.push(h);
	return h;
}
hxevents.Notifier.prototype.addOnce = function(h) {
	var me = this;
	var _h = null;
	_h = function() {
		me.remove(_h);
		h();
	};
	this.add(_h);
	return _h;
}
hxevents.Notifier.prototype.remove = function(h) {
	var _g1 = 0, _g = this.handlers.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.compareMethods(this.handlers[i],h)) return this.handlers.splice(i,1)[0];
	}
	return null;
}
hxevents.Notifier.prototype.clear = function() {
	this.handlers = new Array();
}
hxevents.Notifier.prototype.dispatch = function() {
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
hxevents.Notifier.prototype.has = function(h) {
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
hxevents.Notifier.prototype.__class__ = hxevents.Notifier;
thx.math.EaseMode = { __ename__ : ["thx","math","EaseMode"], __constructs__ : ["EaseIn","EaseOut","EaseInEaseOut","EaseOutEaseIn"] }
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
thx.js.DataChoice = function(update,enter,exit) {
	if( update === $_ ) return;
	this._update = update;
	this._enter = enter;
	this._exit = exit;
}
thx.js.DataChoice.__name__ = ["thx","js","DataChoice"];
thx.js.DataChoice.prototype._update = null;
thx.js.DataChoice.prototype._enter = null;
thx.js.DataChoice.prototype._exit = null;
thx.js.DataChoice.prototype.enter = function() {
	return new thx.js.PreEnterSelection(this._enter,this);
}
thx.js.DataChoice.prototype.exit = function() {
	return new thx.js.ExitSelection(this._exit,this);
}
thx.js.DataChoice.prototype.update = function() {
	return new thx.js.UpdateSelection(this._update,this);
}
thx.js.DataChoice.prototype.__class__ = thx.js.DataChoice;
thx.js.BoundSelection = function(groups) {
	if( groups === $_ ) return;
	thx.js.BaseSelection.call(this,groups);
}
thx.js.BoundSelection.__name__ = ["thx","js","BoundSelection"];
thx.js.BoundSelection.__super__ = thx.js.BaseSelection;
for(var k in thx.js.BaseSelection.prototype ) thx.js.BoundSelection.prototype[k] = thx.js.BaseSelection.prototype[k];
thx.js.BoundSelection.prototype.html = function() {
	return new thx.js.AccessDataHtml(this);
}
thx.js.BoundSelection.prototype.text = function() {
	return new thx.js.AccessDataText(this);
}
thx.js.BoundSelection.prototype.attr = function(name) {
	return new thx.js.AccessDataAttribute(name,this);
}
thx.js.BoundSelection.prototype.classed = function() {
	return new thx.js.AccessDataClassed(this);
}
thx.js.BoundSelection.prototype.property = function(name) {
	return new thx.js.AccessDataProperty(name,this);
}
thx.js.BoundSelection.prototype.style = function(name) {
	return new thx.js.AccessDataStyle(name,this);
}
thx.js.BoundSelection.prototype.transition = function() {
	return new thx.js.BoundTransition(this);
}
thx.js.BoundSelection.prototype.data = function(d,join) {
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
thx.js.BoundSelection.prototype.dataf = function(fd,join) {
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
thx.js.BoundSelection.prototype.selfData = function() {
	return this.dataf(function(d,_) {
		return d;
	});
}
thx.js.BoundSelection.prototype.each = function(f) {
	return this.eachNode(function(n,i) {
		f(Reflect.field(n,"__data__"),i);
	});
}
thx.js.BoundSelection.prototype.sort = function(comparator) {
	return this.sortNode(function(a,b) {
		return comparator(Reflect.field(a,"__data__"),Reflect.field(b,"__data__"));
	});
}
thx.js.BoundSelection.prototype.filter = function(f) {
	return this.filterNode(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	});
}
thx.js.BoundSelection.prototype.map = function(f) {
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
thx.js.BoundSelection.prototype.first = function(f) {
	return this.firstNode(function(n) {
		return f(Reflect.field(n,"__data__"));
	});
}
thx.js.BoundSelection.prototype.on = function(type,listener,capture) {
	if(capture == null) capture = false;
	return this.onNode(type,null == listener?null:function(n,i) {
		listener(Reflect.field(n,"__data__"),i);
	},capture);
}
thx.js.BoundSelection.prototype.__class__ = thx.js.BoundSelection;
thx.js.ResumeSelection = function(groups) {
	if( groups === $_ ) return;
	thx.js.BoundSelection.call(this,groups);
}
thx.js.ResumeSelection.__name__ = ["thx","js","ResumeSelection"];
thx.js.ResumeSelection.__super__ = thx.js.BoundSelection;
for(var k in thx.js.BoundSelection.prototype ) thx.js.ResumeSelection.prototype[k] = thx.js.BoundSelection.prototype[k];
thx.js.ResumeSelection.create = function(groups) {
	return new thx.js.ResumeSelection(groups);
}
thx.js.ResumeSelection.prototype.createSelection = function(groups) {
	return new thx.js.ResumeSelection(groups);
}
thx.js.ResumeSelection.prototype.__class__ = thx.js.ResumeSelection;
thx.js.PreEnterSelection = function(enter,choice) {
	if( enter === $_ ) return;
	this.groups = enter;
	this._choice = choice;
}
thx.js.PreEnterSelection.__name__ = ["thx","js","PreEnterSelection"];
thx.js.PreEnterSelection.prototype.groups = null;
thx.js.PreEnterSelection.prototype._choice = null;
thx.js.PreEnterSelection.prototype.append = function(name) {
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
thx.js.PreEnterSelection.prototype.insert = function(name,before,beforeSelector) {
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
thx.js.PreEnterSelection.prototype.createSelection = function(groups) {
	return new thx.js.EnterSelection(groups,this._choice);
}
thx.js.PreEnterSelection.prototype._select = function(selectf) {
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
	return this.createSelection(subgroups);
}
thx.js.PreEnterSelection.prototype.__class__ = thx.js.PreEnterSelection;
thx.js.EnterSelection = function(enter,choice) {
	if( enter === $_ ) return;
	thx.js.BoundSelection.call(this,enter);
	this._choice = choice;
}
thx.js.EnterSelection.__name__ = ["thx","js","EnterSelection"];
thx.js.EnterSelection.__super__ = thx.js.BoundSelection;
for(var k in thx.js.BoundSelection.prototype ) thx.js.EnterSelection.prototype[k] = thx.js.BoundSelection.prototype[k];
thx.js.EnterSelection.prototype._choice = null;
thx.js.EnterSelection.prototype.createSelection = function(groups) {
	return new thx.js.EnterSelection(groups,this._choice);
}
thx.js.EnterSelection.prototype.exit = function() {
	return this._choice.exit();
}
thx.js.EnterSelection.prototype.update = function() {
	return this._choice.update();
}
thx.js.EnterSelection.prototype.__class__ = thx.js.EnterSelection;
thx.js.ExitSelection = function(exit,choice) {
	if( exit === $_ ) return;
	thx.js.UnboundSelection.call(this,exit);
	this._choice = choice;
}
thx.js.ExitSelection.__name__ = ["thx","js","ExitSelection"];
thx.js.ExitSelection.__super__ = thx.js.UnboundSelection;
for(var k in thx.js.UnboundSelection.prototype ) thx.js.ExitSelection.prototype[k] = thx.js.UnboundSelection.prototype[k];
thx.js.ExitSelection.prototype._choice = null;
thx.js.ExitSelection.prototype.createSelection = function(groups) {
	return new thx.js.ExitSelection(groups,this._choice);
}
thx.js.ExitSelection.prototype.enter = function() {
	return this._choice.enter();
}
thx.js.ExitSelection.prototype.update = function() {
	return this._choice.update();
}
thx.js.ExitSelection.prototype.__class__ = thx.js.ExitSelection;
thx.js.UpdateSelection = function(update,choice) {
	if( update === $_ ) return;
	thx.js.BoundSelection.call(this,update);
	this._choice = choice;
}
thx.js.UpdateSelection.__name__ = ["thx","js","UpdateSelection"];
thx.js.UpdateSelection.__super__ = thx.js.BoundSelection;
for(var k in thx.js.BoundSelection.prototype ) thx.js.UpdateSelection.prototype[k] = thx.js.BoundSelection.prototype[k];
thx.js.UpdateSelection.prototype._choice = null;
thx.js.UpdateSelection.prototype.createSelection = function(groups) {
	return new thx.js.UpdateSelection(groups,this._choice);
}
thx.js.UpdateSelection.prototype.enter = function() {
	return this._choice.enter();
}
thx.js.UpdateSelection.prototype.exit = function() {
	return this._choice.exit();
}
thx.js.UpdateSelection.prototype.__class__ = thx.js.UpdateSelection;
rg.data.VariableDependent = function(type,scaleDistribution) {
	if( type === $_ ) return;
	rg.data.Variable.call(this,type,scaleDistribution);
}
rg.data.VariableDependent.__name__ = ["rg","data","VariableDependent"];
rg.data.VariableDependent.__super__ = rg.data.Variable;
for(var k in rg.data.Variable.prototype ) rg.data.VariableDependent.prototype[k] = rg.data.Variable.prototype[k];
rg.data.VariableDependent.prototype.__class__ = rg.data.VariableDependent;
rg.controller.info.InfoBarChart = function(p) {
	if( p === $_ ) return;
	rg.controller.info.InfoCartesianChart.call(this);
	this.stacked = true;
	this.effect = rg.view.svg.chart.GradientEffect.Gradient(0.75);
	this.barPadding = 12;
	this.barPaddingAxis = 4;
	this.barPaddingDataPoint = 2;
}
rg.controller.info.InfoBarChart.__name__ = ["rg","controller","info","InfoBarChart"];
rg.controller.info.InfoBarChart.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoBarChart.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoBarChart.filters = function() {
	return [{ field : "stacked", validator : function(v) {
		return Std["is"](v,Bool);
	}, filter : null},{ field : "effect", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "effect", value : rg.view.svg.chart.GradientEffects.parse(v)}];
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
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
}
rg.controller.info.InfoBarChart.prototype.stacked = null;
rg.controller.info.InfoBarChart.prototype.effect = null;
rg.controller.info.InfoBarChart.prototype.barPaddingDataPoint = null;
rg.controller.info.InfoBarChart.prototype.barPaddingAxis = null;
rg.controller.info.InfoBarChart.prototype.barPadding = null;
rg.controller.info.InfoBarChart.prototype.__class__ = rg.controller.info.InfoBarChart;
rg.view.svg.chart.ColorScaleModes = function() { }
rg.view.svg.chart.ColorScaleModes.__name__ = ["rg","view","svg","chart","ColorScaleModes"];
rg.view.svg.chart.ColorScaleModes.createFromDynamic = function(v) {
	if(Reflect.isFunction(v)) return rg.view.svg.chart.ColorScaleMode.Fun(v);
	if(!Std["is"](v,String)) return (function($this) {
		var $r;
		throw new thx.error.Error("invalid color mode '{0}'",[v],null,{ fileName : "ColorScaleModes.hx", lineNumber : 19, className : "rg.view.svg.chart.ColorScaleModes", methodName : "createFromDynamic"});
		return $r;
	}(this));
	var s = ((function($this) {
		var $r;
		var $t = v;
		if(Std["is"]($t,String)) $t; else throw "Class cast error";
		$r = $t;
		return $r;
	}(this))).split("-");
	switch(s[0].toLowerCase()) {
	case "css":
		return rg.view.svg.chart.ColorScaleMode.FromCss(null == s[1]?null:Std.parseInt(s[1]));
	case "i":case "interpolated":
		return rg.view.svg.chart.ColorScaleMode.Interpolation(s[1].split(",").map(function(d,i) {
			return thx.color.Colors.parse(d);
		}));
	case "s":case "sequence":
		return rg.view.svg.chart.ColorScaleMode.Sequence(s[1].split(",").map(function(d,i) {
			return thx.color.Colors.parse(d);
		}));
	case "f":case "fixed":
		return rg.view.svg.chart.ColorScaleMode.Fixed(thx.color.Colors.parse(s[1]));
	default:
		if(s[0].indexOf(",") >= 0) return rg.view.svg.chart.ColorScaleMode.Sequence(s[0].split(",").map(function(d,i) {
			return thx.color.Colors.parse(d);
		})); else return rg.view.svg.chart.ColorScaleMode.Fixed(thx.color.Colors.parse(s[0]));
	}
}
rg.view.svg.chart.ColorScaleModes.prototype.__class__ = rg.view.svg.chart.ColorScaleModes;
rg.view.frame.Frame = function(p) {
	if( p === $_ ) return;
	this.x = this.y = this.width = this.height = 0;
}
rg.view.frame.Frame.__name__ = ["rg","view","frame","Frame"];
rg.view.frame.Frame.prototype.x = null;
rg.view.frame.Frame.prototype.y = null;
rg.view.frame.Frame.prototype.width = null;
rg.view.frame.Frame.prototype.height = null;
rg.view.frame.Frame.prototype.change = function() {
}
rg.view.frame.Frame.prototype.setLayout = function(x,y,width,height) {
	if(this.x == x && this.y == y && this.width == width && this.height == height) return;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.change();
}
rg.view.frame.Frame.prototype.toString = function() {
	return "[x: " + this.x + ", y: " + this.y + ", width: " + this.width + ", height: " + this.height + "]";
}
rg.view.frame.Frame.prototype.__class__ = rg.view.frame.Frame;
rg.view.frame.StackItem = function(disposition) {
	if( disposition === $_ ) return;
	rg.view.frame.Frame.call(this);
	this.setDisposition(disposition);
}
rg.view.frame.StackItem.__name__ = ["rg","view","frame","StackItem"];
rg.view.frame.StackItem.__super__ = rg.view.frame.Frame;
for(var k in rg.view.frame.Frame.prototype ) rg.view.frame.StackItem.prototype[k] = rg.view.frame.Frame.prototype[k];
rg.view.frame.StackItem.prototype.disposition = null;
rg.view.frame.StackItem.prototype.parent = null;
rg.view.frame.StackItem.prototype.setParent = function(v) {
	if(null != this.parent) this.parent.removeChild(this);
	return this.parent = v;
}
rg.view.frame.StackItem.prototype.setDisposition = function(v) {
	this.disposition = v;
	if(null != this.parent) this.parent.reflow();
	return v;
}
rg.view.frame.StackItem.prototype.__class__ = rg.view.frame.StackItem;
rg.data.AxisOrdinalFixedValues = function(arr) {
	if( arr === $_ ) return;
	rg.data.AxisOrdinal.call(this);
	this._values = arr;
}
rg.data.AxisOrdinalFixedValues.__name__ = ["rg","data","AxisOrdinalFixedValues"];
rg.data.AxisOrdinalFixedValues.__super__ = rg.data.AxisOrdinal;
for(var k in rg.data.AxisOrdinal.prototype ) rg.data.AxisOrdinalFixedValues.prototype[k] = rg.data.AxisOrdinal.prototype[k];
rg.data.AxisOrdinalFixedValues.prototype._values = null;
rg.data.AxisOrdinalFixedValues.prototype.values = function() {
	return this._values;
}
rg.data.AxisOrdinalFixedValues.prototype.__class__ = rg.data.AxisOrdinalFixedValues;
rg.data.AxisGroupByTime = function(groupby) {
	if( groupby === $_ ) return;
	rg.data.AxisOrdinalFixedValues.call(this,rg.data.AxisGroupByTime.valuesByGroup(groupby));
	this.groupBy = groupby;
}
rg.data.AxisGroupByTime.__name__ = ["rg","data","AxisGroupByTime"];
rg.data.AxisGroupByTime.__super__ = rg.data.AxisOrdinalFixedValues;
for(var k in rg.data.AxisOrdinalFixedValues.prototype ) rg.data.AxisGroupByTime.prototype[k] = rg.data.AxisOrdinalFixedValues.prototype[k];
rg.data.AxisGroupByTime.valuesByGroup = function(groupby) {
	return Ints.range(rg.data.AxisGroupByTime.defaultMin(groupby),rg.data.AxisGroupByTime.defaultMax(groupby) + 1);
}
rg.data.AxisGroupByTime.defaultMin = function(periodicity) {
	switch(periodicity) {
	case "minute":case "hour":case "week":case "month":
		return 0;
	case "day":
		return 1;
	default:
		throw new thx.error.Error("invalid periodicity '{0}' for groupBy min",null,periodicity,{ fileName : "AxisGroupByTime.hx", lineNumber : 34, className : "rg.data.AxisGroupByTime", methodName : "defaultMin"});
	}
}
rg.data.AxisGroupByTime.defaultMax = function(periodicity) {
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
		throw new thx.error.Error("invalid periodicity '{0}' for groupBy max",null,periodicity,{ fileName : "AxisGroupByTime.hx", lineNumber : 48, className : "rg.data.AxisGroupByTime", methodName : "defaultMax"});
	}
}
rg.data.AxisGroupByTime.prototype.groupBy = null;
rg.data.AxisGroupByTime.prototype.__class__ = rg.data.AxisGroupByTime;
rg.controller.visualization.VisualizationHtml = function(container) {
	if( container === $_ ) return;
	this.container = container;
	container.classed().add("rg");
}
rg.controller.visualization.VisualizationHtml.__name__ = ["rg","controller","visualization","VisualizationHtml"];
rg.controller.visualization.VisualizationHtml.__super__ = rg.controller.visualization.Visualization;
for(var k in rg.controller.visualization.Visualization.prototype ) rg.controller.visualization.VisualizationHtml.prototype[k] = rg.controller.visualization.Visualization.prototype[k];
rg.controller.visualization.VisualizationHtml.prototype.container = null;
rg.controller.visualization.VisualizationHtml.prototype.__class__ = rg.controller.visualization.VisualizationHtml;
rg.controller.visualization.VisualizationLeaderboard = function(container) {
	if( container === $_ ) return;
	rg.controller.visualization.VisualizationHtml.call(this,container);
}
rg.controller.visualization.VisualizationLeaderboard.__name__ = ["rg","controller","visualization","VisualizationLeaderboard"];
rg.controller.visualization.VisualizationLeaderboard.__super__ = rg.controller.visualization.VisualizationHtml;
for(var k in rg.controller.visualization.VisualizationHtml.prototype ) rg.controller.visualization.VisualizationLeaderboard.prototype[k] = rg.controller.visualization.VisualizationHtml.prototype[k];
rg.controller.visualization.VisualizationLeaderboard.prototype.info = null;
rg.controller.visualization.VisualizationLeaderboard.prototype.chart = null;
rg.controller.visualization.VisualizationLeaderboard.prototype.init = function() {
	this.chart = new rg.view.html.widget.Leadeboard(this.container);
	if(null != this.info.label.datapoint) this.chart.labelDataPoint = this.info.label.datapoint;
	if(null != this.info.label.datapointover) this.chart.labelDataPointOver = this.info.label.datapointover;
	this.chart.animated = this.info.animation.animated;
	this.chart.animationDuration = this.info.animation.duration;
	this.chart.animationDelay = this.info.animation.delay;
	this.chart.animationEase = this.info.animation.ease;
	this.chart.displayGradient = this.info.displayGradient;
	this.chart.useMax = this.info.gradientOnMax;
	if(null != this.info.click) this.chart.click = this.info.click;
	if(null != this.info.sortDataPoint) this.chart.sortDataPoint = this.info.sortDataPoint;
	this.chart.init();
}
rg.controller.visualization.VisualizationLeaderboard.prototype.feedData = function(data) {
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	this.chart.data(data);
}
rg.controller.visualization.VisualizationLeaderboard.prototype.__class__ = rg.controller.visualization.VisualizationLeaderboard;
thx.color.Cmyk = function(cyan,magenta,yellow,black) {
	if( cyan === $_ ) return;
	thx.color.Rgb.call(this,Ints.interpolate(Floats.normalize(1 - cyan - black),0,255,null),Ints.interpolate(Floats.normalize(1 - magenta - black),0,255,null),Ints.interpolate(Floats.normalize(1 - yellow - black),0,255,null));
	this.cyan = Floats.normalize(cyan);
	this.magenta = Floats.normalize(magenta);
	this.yellow = Floats.normalize(yellow);
	this.black = Floats.normalize(black);
}
thx.color.Cmyk.__name__ = ["thx","color","Cmyk"];
thx.color.Cmyk.__super__ = thx.color.Rgb;
for(var k in thx.color.Rgb.prototype ) thx.color.Cmyk.prototype[k] = thx.color.Rgb.prototype[k];
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
	var v = t * color.black;
	return new thx.color.Cmyk(color.cyan,color.magenta,color.yellow,Floats.interpolate(v,0,1,equation));
}
thx.color.Cmyk.interpolate = function(a,b,t,equation) {
	return new thx.color.Cmyk(Floats.interpolate(t,a.cyan,b.cyan,equation),Floats.interpolate(t,a.magenta,b.magenta,equation),Floats.interpolate(t,a.yellow,b.yellow,equation),Floats.interpolate(t,a.black,b.black,equation));
}
thx.color.Cmyk.prototype.black = null;
thx.color.Cmyk.prototype.cyan = null;
thx.color.Cmyk.prototype.magenta = null;
thx.color.Cmyk.prototype.yellow = null;
thx.color.Cmyk.prototype.toCmykString = function() {
	return "cmyk(" + this.cyan + "," + this.magenta + "," + this.yellow + "," + this.black + ")";
}
thx.color.Cmyk.prototype.__class__ = thx.color.Cmyk;
rg.util.ChainedExecutor = function(handler) {
	if( handler === $_ ) return;
	this.handler = handler;
	this.actions = [];
}
rg.util.ChainedExecutor.__name__ = ["rg","util","ChainedExecutor"];
rg.util.ChainedExecutor.prototype.handler = null;
rg.util.ChainedExecutor.prototype.actions = null;
rg.util.ChainedExecutor.prototype.addAction = function(handler) {
	this.actions.push(handler);
}
rg.util.ChainedExecutor.prototype.execute = function(ob) {
	if(this.actions.length == 0) this.handler(ob); else (this.actions.shift())(ob,$closure(this,"execute"));
}
rg.util.ChainedExecutor.prototype.__class__ = rg.util.ChainedExecutor;
thx.data.IDataHandler = function() { }
thx.data.IDataHandler.__name__ = ["thx","data","IDataHandler"];
thx.data.IDataHandler.prototype.start = null;
thx.data.IDataHandler.prototype.end = null;
thx.data.IDataHandler.prototype.startObject = null;
thx.data.IDataHandler.prototype.startField = null;
thx.data.IDataHandler.prototype.endField = null;
thx.data.IDataHandler.prototype.endObject = null;
thx.data.IDataHandler.prototype.startArray = null;
thx.data.IDataHandler.prototype.startItem = null;
thx.data.IDataHandler.prototype.endItem = null;
thx.data.IDataHandler.prototype.endArray = null;
thx.data.IDataHandler.prototype.date = null;
thx.data.IDataHandler.prototype.string = null;
thx.data.IDataHandler.prototype["int"] = null;
thx.data.IDataHandler.prototype["float"] = null;
thx.data.IDataHandler.prototype["null"] = null;
thx.data.IDataHandler.prototype.bool = null;
thx.data.IDataHandler.prototype.comment = null;
thx.data.IDataHandler.prototype.__class__ = thx.data.IDataHandler;
thx.data.ValueHandler = function(p) {
}
thx.data.ValueHandler.__name__ = ["thx","data","ValueHandler"];
thx.data.ValueHandler.prototype.value = null;
thx.data.ValueHandler.prototype._stack = null;
thx.data.ValueHandler.prototype._names = null;
thx.data.ValueHandler.prototype.start = function() {
	this._stack = [];
	this._names = [];
}
thx.data.ValueHandler.prototype.end = function() {
	this.value = this._stack.pop();
}
thx.data.ValueHandler.prototype.startObject = function() {
	this._stack.push({ });
}
thx.data.ValueHandler.prototype.endObject = function() {
}
thx.data.ValueHandler.prototype.startField = function(name) {
	this._names.push(name);
}
thx.data.ValueHandler.prototype.endField = function() {
	var value = this._stack.pop();
	var last = Arrays.last(this._stack);
	last[this._names.pop()] = value;
}
thx.data.ValueHandler.prototype.startArray = function() {
	this._stack.push([]);
}
thx.data.ValueHandler.prototype.endArray = function() {
}
thx.data.ValueHandler.prototype.startItem = function() {
}
thx.data.ValueHandler.prototype.endItem = function() {
	var value = this._stack.pop();
	var last = Arrays.last(this._stack);
	last.push(value);
}
thx.data.ValueHandler.prototype.date = function(d) {
	this._stack.push(d);
}
thx.data.ValueHandler.prototype.string = function(s) {
	this._stack.push(s);
}
thx.data.ValueHandler.prototype["int"] = function(i) {
	this._stack.push(i);
}
thx.data.ValueHandler.prototype["float"] = function(f) {
	this._stack.push(f);
}
thx.data.ValueHandler.prototype["null"] = function() {
	this._stack.push(null);
}
thx.data.ValueHandler.prototype.bool = function(b) {
	this._stack.push(b);
}
thx.data.ValueHandler.prototype.comment = function(s) {
}
thx.data.ValueHandler.prototype.__class__ = thx.data.ValueHandler;
thx.data.ValueHandler.__interfaces__ = [thx.data.IDataHandler];
rg.data.DataRequest = function(cache,datacontexts) {
	if( cache === $_ ) return;
	this.cache = cache;
	this.datacontexts = datacontexts;
}
rg.data.DataRequest.__name__ = ["rg","data","DataRequest"];
rg.data.DataRequest.prototype.queue = null;
rg.data.DataRequest.prototype.cache = null;
rg.data.DataRequest.prototype.datacontexts = null;
rg.data.DataRequest.prototype.collectedData = null;
rg.data.DataRequest.prototype.onData = function(data) {
	null;
}
rg.data.DataRequest.prototype.request = function() {
	this.collectedData = [];
	this.queue = this.datacontexts.copy();
	this.processQueue();
}
rg.data.DataRequest.prototype.processQueue = function() {
	var next = this.queue.shift();
	if(null == next) {
		this.onData(this.collectedData);
		return;
	}
	next.data.onData.addOnce((function(f,a1) {
		return function(a2) {
			return f(a1,a2);
		};
	})($closure(this,"receiveData"),next.name));
	next.data.load();
}
rg.data.DataRequest.prototype.receiveData = function(name,data) {
	if(null == name) this.cache.set(name,new rg.data.source.DataSourceArray(data));
	this.collectedData = this.collectedData.concat(data);
	this.processQueue();
}
rg.data.DataRequest.prototype.__class__ = rg.data.DataRequest;
thx.color.Grey = function(value) {
	if( value === $_ ) return;
	this.grey = Floats.normalize(value);
	var c = Ints.interpolate(this.grey,0,255,null);
	thx.color.Rgb.call(this,c,c,c);
}
thx.color.Grey.__name__ = ["thx","color","Grey"];
thx.color.Grey.__super__ = thx.color.Rgb;
for(var k in thx.color.Rgb.prototype ) thx.color.Grey.prototype[k] = thx.color.Rgb.prototype[k];
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
	var v = t * color.grey;
	return new thx.color.Grey(Floats.interpolate(v,0,1,equation));
}
thx.color.Grey.interpolate = function(a,b,t,equation) {
	return new thx.color.Grey(Floats.interpolate(t,a.grey,b.grey,equation));
}
thx.color.Grey.prototype.grey = null;
thx.color.Grey.prototype.__class__ = thx.color.Grey;
thx.color.PerceivedLuminance = { __ename__ : ["thx","color","PerceivedLuminance"], __constructs__ : ["Standard","Perceived","PerceivedAccurate"] }
thx.color.PerceivedLuminance.Standard = ["Standard",0];
thx.color.PerceivedLuminance.Standard.toString = $estr;
thx.color.PerceivedLuminance.Standard.__enum__ = thx.color.PerceivedLuminance;
thx.color.PerceivedLuminance.Perceived = ["Perceived",1];
thx.color.PerceivedLuminance.Perceived.toString = $estr;
thx.color.PerceivedLuminance.Perceived.__enum__ = thx.color.PerceivedLuminance;
thx.color.PerceivedLuminance.PerceivedAccurate = ["PerceivedAccurate",2];
thx.color.PerceivedLuminance.PerceivedAccurate.toString = $estr;
thx.color.PerceivedLuminance.PerceivedAccurate.__enum__ = thx.color.PerceivedLuminance;
rg.data.Sources = function(sources) {
	if( sources === $_ ) return;
	this.sources = sources;
	this.length = sources.length;
	var _g1 = 0, _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		sources[i].onLoad.add((function(f,a1) {
			return function(a2) {
				return f(a1,a2);
			};
		})($closure(this,"loaded"),i));
	}
	this.onLoad = new hxevents.Dispatcher();
	this.onLoading = new hxevents.Notifier();
}
rg.data.Sources.__name__ = ["rg","data","Sources"];
rg.data.Sources.prototype.onLoading = null;
rg.data.Sources.prototype.onLoad = null;
rg.data.Sources.prototype.sources = null;
rg.data.Sources.prototype.length = null;
rg.data.Sources.prototype.data = null;
rg.data.Sources.prototype.count = null;
rg.data.Sources.prototype.iterator = function() {
	return this.sources.iterator();
}
rg.data.Sources.prototype.load = function() {
	this.onLoading.dispatch();
	this.count = 0;
	this.data = [];
	this.sources.forEach(function(source,_) {
		source.load();
	});
}
rg.data.Sources.prototype.loaded = function(pos,d) {
	this.data[pos] = d;
	this.count++;
	if(this.count == this.length) this.complete();
}
rg.data.Sources.prototype.complete = function() {
	this.onLoad.dispatch(this.data);
}
rg.data.Sources.prototype.__class__ = rg.data.Sources;
rg.controller.info.InfoScatterGraph = function(p) {
	if( p === $_ ) return;
	rg.controller.info.InfoCartesianChart.call(this);
	this.symbol = function(dp,s) {
		return rg.view.svg.util.SymbolCache.cache.get("circle",16);
	};
}
rg.controller.info.InfoScatterGraph.__name__ = ["rg","controller","info","InfoScatterGraph"];
rg.controller.info.InfoScatterGraph.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoScatterGraph.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoScatterGraph.filters = function() {
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
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
}
rg.controller.info.InfoScatterGraph.prototype.symbol = null;
rg.controller.info.InfoScatterGraph.prototype.symbolStyle = null;
rg.controller.info.InfoScatterGraph.prototype.__class__ = rg.controller.info.InfoScatterGraph;
rg.view.svg.widget.LabelOrientation = { __ename__ : ["rg","view","svg","widget","LabelOrientation"], __constructs__ : ["FixedAngle","Aligned","Orthogonal"] }
rg.view.svg.widget.LabelOrientation.FixedAngle = function(angle) { var $x = ["FixedAngle",0,angle]; $x.__enum__ = rg.view.svg.widget.LabelOrientation; $x.toString = $estr; return $x; }
rg.view.svg.widget.LabelOrientation.Aligned = ["Aligned",1];
rg.view.svg.widget.LabelOrientation.Aligned.toString = $estr;
rg.view.svg.widget.LabelOrientation.Aligned.__enum__ = rg.view.svg.widget.LabelOrientation;
rg.view.svg.widget.LabelOrientation.Orthogonal = ["Orthogonal",2];
rg.view.svg.widget.LabelOrientation.Orthogonal.toString = $estr;
rg.view.svg.widget.LabelOrientation.Orthogonal.__enum__ = rg.view.svg.widget.LabelOrientation;
rg.data.source.rgquery.transform.TransformCount = function(properties,event,unit) {
	if( properties === $_ ) return;
	this.properties = properties;
	this.unit = unit;
	this.event = event;
}
rg.data.source.rgquery.transform.TransformCount.__name__ = ["rg","data","source","rgquery","transform","TransformCount"];
rg.data.source.rgquery.transform.TransformCount.prototype.properties = null;
rg.data.source.rgquery.transform.TransformCount.prototype.unit = null;
rg.data.source.rgquery.transform.TransformCount.prototype.event = null;
rg.data.source.rgquery.transform.TransformCount.prototype.transform = function(data) {
	var dp = { event : this.event};
	Objects.copyTo(this.properties,dp);
	Objects.addField(dp,this.unit,data);
	return [dp];
}
rg.data.source.rgquery.transform.TransformCount.prototype.__class__ = rg.data.source.rgquery.transform.TransformCount;
rg.data.source.rgquery.transform.TransformCount.__interfaces__ = [rg.data.source.ITransform];
thx.geo.AlbersUsa = function(p) {
	if( p === $_ ) return;
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
thx.geo.AlbersUsa.prototype.translate = null;
thx.geo.AlbersUsa.prototype.scale = null;
thx.geo.AlbersUsa.prototype.lower48 = null;
thx.geo.AlbersUsa.prototype.alaska = null;
thx.geo.AlbersUsa.prototype.hawaii = null;
thx.geo.AlbersUsa.prototype.puertoRico = null;
thx.geo.AlbersUsa.prototype.last = null;
thx.geo.AlbersUsa.prototype.project = function(coords) {
	var lon = coords[0], lat = coords[1];
	return (lat > 50?this.alaska:lon < -140?this.hawaii:lat < 21?this.puertoRico:this.lower48).project(coords);
}
thx.geo.AlbersUsa.prototype.invert = function(coords) {
	return (function($this) {
		var $r;
		throw new thx.error.NotImplemented({ fileName : "AlbersUsa.hx", lineNumber : 67, className : "thx.geo.AlbersUsa", methodName : "invert"});
		return $r;
	}(this));
}
thx.geo.AlbersUsa.prototype.setScale = function(scale) {
	this.lower48.setScale(scale);
	this.alaska.setScale(scale * .6);
	this.hawaii.setScale(scale);
	this.puertoRico.setScale(scale * 1.5);
	this.setTranslate(this.lower48.getTranslate());
	return scale;
}
thx.geo.AlbersUsa.prototype.getScale = function() {
	return this.lower48.getScale();
}
thx.geo.AlbersUsa.prototype.setTranslate = function(translate) {
	var dz = this.lower48.getScale() / 1000, dx = translate[0], dy = translate[1];
	this.lower48.setTranslate(translate);
	this.alaska.setTranslate([dx - 400 * dz,dy + 170 * dz]);
	this.hawaii.setTranslate([dx - 190 * dz,dy + 200 * dz]);
	this.puertoRico.setTranslate([dx + 580 * dz,dy + 430 * dz]);
	return translate;
}
thx.geo.AlbersUsa.prototype.getTranslate = function() {
	return this.lower48.getTranslate();
}
thx.geo.AlbersUsa.prototype.__class__ = thx.geo.AlbersUsa;
thx.geo.AlbersUsa.__interfaces__ = [thx.geo.IProjection];
thx.js.AccessStyle = function(name,selection) {
	if( name === $_ ) return;
	thx.js.Access.call(this,selection);
	this.name = name;
}
thx.js.AccessStyle.__name__ = ["thx","js","AccessStyle"];
thx.js.AccessStyle.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessStyle.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessStyle.prototype.name = null;
thx.js.AccessStyle.prototype.get = function() {
	var n = this.name;
	return this.selection.firstNode(function(node) {
		return js.Lib.window.getComputedStyle(node,null).getPropertyValue(n);
	});
}
thx.js.AccessStyle.prototype.getFloat = function() {
	var v = this.get();
	if(thx.js.AccessStyle.refloat.match(v)) return Std.parseFloat(thx.js.AccessStyle.refloat.matched(1)); else return Math.NaN;
}
thx.js.AccessStyle.prototype.remove = function() {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		node.style.removeProperty(n);
	});
	return this.selection;
}
thx.js.AccessStyle.prototype.string = function(v,priority) {
	var n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		node.style.setProperty(n,v,priority);
	});
	return this.selection;
}
thx.js.AccessStyle.prototype["float"] = function(v,priority) {
	var s = "" + v, n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		node.style.setProperty(n,s,priority);
	});
	return this.selection;
}
thx.js.AccessStyle.prototype.color = function(v,priority) {
	var s = v.toRgbString(), n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		node.style.setProperty(n,s,priority);
	});
	return this.selection;
}
thx.js.AccessStyle.prototype.__class__ = thx.js.AccessStyle;
thx.js.AccessDataStyle = function(name,selection) {
	if( name === $_ ) return;
	thx.js.AccessStyle.call(this,name,selection);
}
thx.js.AccessDataStyle.__name__ = ["thx","js","AccessDataStyle"];
thx.js.AccessDataStyle.__super__ = thx.js.AccessStyle;
for(var k in thx.js.AccessStyle.prototype ) thx.js.AccessDataStyle.prototype[k] = thx.js.AccessStyle.prototype[k];
thx.js.AccessDataStyle.prototype.stringf = function(v,priority) {
	var n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(s == null) node.style.removeProperty(n); else node.style.setProperty(n,s,priority);
	});
	return this.selection;
}
thx.js.AccessDataStyle.prototype.floatf = function(v,priority) {
	var n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(s == null) node.style.removeProperty(n); else node.style.setProperty(n,"" + s,priority);
	});
	return this.selection;
}
thx.js.AccessDataStyle.prototype.colorf = function(v,priority) {
	var n = this.name;
	if(null == priority) priority = "";
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(s == null) node.style.removeProperty(n); else node.style.setProperty(n,"" + s.toRgbString(),priority);
	});
	return this.selection;
}
thx.js.AccessDataStyle.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataStyle.prototype.__class__ = thx.js.AccessDataStyle;
thx.js.BaseTransition = function(selection) {
	if( selection === $_ ) return;
	this.selection = selection;
	var tid = this._transitionId = thx.js.BaseTransition._inheritid > 0?thx.js.BaseTransition._inheritid:++thx.js.BaseTransition._id;
	this._tweens = new Hash();
	this._interpolators = [];
	this._remove = false;
	this._stage = [];
	this._delay = [];
	this._duration = [];
	this._ease = thx.math.Ease.mode(thx.math.EaseMode.EaseInEaseOut,thx.math.Equations.cubic);
	this._step = $closure(this,"step");
	selection.eachNode(function(n,_) {
		if(Reflect.hasField(n,"__transition__")) Reflect.field(n,"__transition__").owner = tid; else n["__transition__"] = { owner : tid};
	});
	this.delay(null,0);
	this.duration(null,250);
}
thx.js.BaseTransition.__name__ = ["thx","js","BaseTransition"];
thx.js.BaseTransition.prototype._transitionId = null;
thx.js.BaseTransition.prototype._tweens = null;
thx.js.BaseTransition.prototype._interpolators = null;
thx.js.BaseTransition.prototype._remove = null;
thx.js.BaseTransition.prototype._stage = null;
thx.js.BaseTransition.prototype._delay = null;
thx.js.BaseTransition.prototype._duration = null;
thx.js.BaseTransition.prototype._durationMax = null;
thx.js.BaseTransition.prototype._ease = null;
thx.js.BaseTransition.prototype._step = null;
thx.js.BaseTransition.prototype._start = null;
thx.js.BaseTransition.prototype._end = null;
thx.js.BaseTransition.prototype.selection = null;
thx.js.BaseTransition.prototype.step = function(elapsed) {
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
thx.js.BaseTransition.prototype.startNode = function(f) {
	this._start = f;
	return this._this();
}
thx.js.BaseTransition.prototype.endNode = function(f) {
	this._end = f;
	return this._this();
}
thx.js.BaseTransition.prototype.stop = function() {
	var k = -1, me = this;
	this.selection.eachNode(function(n,i) {
		me._stage[++k] = 2;
		Reflect.deleteField(n,"__transition__");
	});
	return this._this();
}
thx.js.BaseTransition.prototype.delay = function(f,v) {
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
thx.js.BaseTransition.prototype.duration = function(f,v) {
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
thx.js.BaseTransition.prototype.ease = function(f,easemode) {
	this._ease = thx.math.Ease.mode(easemode,f);
	return this._this();
}
thx.js.BaseTransition.prototype.remove = function(v) {
	if(v == null) v = true;
	this._remove = v;
	return this._this();
}
thx.js.BaseTransition.prototype.select = function(selector) {
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
thx.js.BaseTransition.prototype.selectAll = function(selector) {
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
thx.js.BaseTransition.prototype.createTransition = function(selection) {
	return (function($this) {
		var $r;
		throw new thx.error.AbstractMethod({ fileName : "Transition.hx", lineNumber : 243, className : "thx.js.BaseTransition", methodName : "createTransition"});
		return $r;
	}(this));
}
thx.js.BaseTransition.prototype._this = function() {
	return this;
}
thx.js.BaseTransition.prototype.__class__ = thx.js.BaseTransition;
thx.js.UnboundTransition = function(selection) {
	if( selection === $_ ) return;
	thx.js.BaseTransition.call(this,selection);
}
thx.js.UnboundTransition.__name__ = ["thx","js","UnboundTransition"];
thx.js.UnboundTransition.__super__ = thx.js.BaseTransition;
for(var k in thx.js.BaseTransition.prototype ) thx.js.UnboundTransition.prototype[k] = thx.js.BaseTransition.prototype[k];
thx.js.UnboundTransition.prototype.text = function() {
	return new thx.js.AccessTweenText(this,this._tweens);
}
thx.js.UnboundTransition.prototype.style = function(name) {
	return new thx.js.AccessTweenStyle(name,this,this._tweens);
}
thx.js.UnboundTransition.prototype.attr = function(name) {
	return new thx.js.AccessTweenAttribute(name,this,this._tweens);
}
thx.js.UnboundTransition.prototype.createTransition = function(selection) {
	return new thx.js.UnboundTransition(selection);
}
thx.js.UnboundTransition.prototype.__class__ = thx.js.UnboundTransition;
thx.js.BoundTransition = function(selection) {
	if( selection === $_ ) return;
	thx.js.BaseTransition.call(this,selection);
}
thx.js.BoundTransition.__name__ = ["thx","js","BoundTransition"];
thx.js.BoundTransition.__super__ = thx.js.BaseTransition;
for(var k in thx.js.BaseTransition.prototype ) thx.js.BoundTransition.prototype[k] = thx.js.BaseTransition.prototype[k];
thx.js.BoundTransition.prototype.text = function() {
	return new thx.js.AccessDataTweenText(this,this._tweens);
}
thx.js.BoundTransition.prototype.style = function(name) {
	return new thx.js.AccessDataTweenStyle(name,this,this._tweens);
}
thx.js.BoundTransition.prototype.attr = function(name) {
	return new thx.js.AccessDataTweenAttribute(name,this,this._tweens);
}
thx.js.BoundTransition.prototype.start = function(f) {
	return this.startNode(function(n,i) {
		f(Reflect.field(n,"__data__"),i);
	});
}
thx.js.BoundTransition.prototype.end = function(f) {
	return this.endNode(function(n,i) {
		f(Reflect.field(n,"__data__"),i);
	});
}
thx.js.BoundTransition.prototype.createTransition = function(selection) {
	return new thx.js.BoundTransition(selection);
}
thx.js.BoundTransition.prototype.__class__ = thx.js.BoundTransition;
rg.data.source.rgquery.transform.TransformIntersectTime = function(properties,fields,event,periodicity,unit) {
	if( properties === $_ ) return;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.fields = fields;
	this.event = event;
}
rg.data.source.rgquery.transform.TransformIntersectTime.__name__ = ["rg","data","source","rgquery","transform","TransformIntersectTime"];
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.unit = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.transform = function(data) {
	var items = Objects.flatten(data,this.fields.length), properties = this.properties, unit = this.unit;
	if(null == items || 0 == items.length) return [];
	var result = [];
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var arr = item.value;
		var _g2 = 0, _g1 = arr.length;
		while(_g2 < _g1) {
			var i = _g2++;
			var p = Dynamics.clone(properties);
			Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
			Objects.addFields(p,[rg.util.Properties.timeProperty(this.periodicity),unit],[this.periodicity != "minute" && this.periodicity != "hour"?Dates.snap(arr[i][0].timestamp,this.periodicity):arr[i][0].timestamp,arr[i][1]]);
			p.event = this.event;
			result.push(p);
		}
	}
	return result;
}
rg.data.source.rgquery.transform.TransformIntersectTime.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersectTime;
rg.data.source.rgquery.transform.TransformIntersectTime.__interfaces__ = [rg.data.source.ITransform];
Ints = function() { }
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
Ints.prototype.__class__ = Ints;
thx.svg.Line = function(x,y,interpolator) {
	if( x === $_ ) return;
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
thx.svg.Line.prototype._x = null;
thx.svg.Line.prototype._y = null;
thx.svg.Line.prototype._interpolator = null;
thx.svg.Line.prototype.shape = function(data,i) {
	return data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y),this._interpolator);
}
thx.svg.Line.prototype.getInterpolator = function() {
	return this._interpolator;
}
thx.svg.Line.prototype.interpolator = function(type) {
	this._interpolator = type;
	return this;
}
thx.svg.Line.prototype.getX = function() {
	return this._x;
}
thx.svg.Line.prototype.x = function(v) {
	this._x = v;
	return this;
}
thx.svg.Line.prototype.getY = function() {
	return this._y;
}
thx.svg.Line.prototype.y = function(v) {
	this._y = v;
	return this;
}
thx.svg.Line.prototype.__class__ = thx.svg.Line;
rg.controller.info.InfoLabelAxis = function(p) {
	if( p === $_ ) return;
	rg.controller.info.InfoLabel.call(this);
}
rg.controller.info.InfoLabelAxis.__name__ = ["rg","controller","info","InfoLabelAxis"];
rg.controller.info.InfoLabelAxis.__super__ = rg.controller.info.InfoLabel;
for(var k in rg.controller.info.InfoLabel.prototype ) rg.controller.info.InfoLabelAxis.prototype[k] = rg.controller.info.InfoLabel.prototype[k];
rg.controller.info.InfoLabelAxis.filters = function() {
	return [{ field : "axis", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "axisvalue", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "tickmark", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.controller.info.InfoLabel.filters());
}
rg.controller.info.InfoLabelAxis.prototype.axis = null;
rg.controller.info.InfoLabelAxis.prototype.axisvalue = null;
rg.controller.info.InfoLabelAxis.prototype.tickmark = null;
rg.controller.info.InfoLabelAxis.prototype.__class__ = rg.controller.info.InfoLabelAxis;
rg.view.svg.chart.ColorScaleMode = { __ename__ : ["rg","view","svg","chart","ColorScaleMode"], __constructs__ : ["FromCss","Interpolation","Sequence","Fixed","Fun"] }
rg.view.svg.chart.ColorScaleMode.FromCss = function(Steps) { var $x = ["FromCss",0,Steps]; $x.__enum__ = rg.view.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.view.svg.chart.ColorScaleMode.Interpolation = function(colors) { var $x = ["Interpolation",1,colors]; $x.__enum__ = rg.view.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.view.svg.chart.ColorScaleMode.Sequence = function(colors) { var $x = ["Sequence",2,colors]; $x.__enum__ = rg.view.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.view.svg.chart.ColorScaleMode.Fixed = function(color) { var $x = ["Fixed",3,color]; $x.__enum__ = rg.view.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
rg.view.svg.chart.ColorScaleMode.Fun = function(f) { var $x = ["Fun",4,f]; $x.__enum__ = rg.view.svg.chart.ColorScaleMode; $x.toString = $estr; return $x; }
haxe.Http = function(url) {
	if( url === $_ ) return;
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
haxe.Http.prototype.url = null;
haxe.Http.prototype.async = null;
haxe.Http.prototype.postData = null;
haxe.Http.prototype.headers = null;
haxe.Http.prototype.params = null;
haxe.Http.prototype.setHeader = function(header,value) {
	this.headers.set(header,value);
}
haxe.Http.prototype.setParameter = function(param,value) {
	this.params.set(param,value);
}
haxe.Http.prototype.setPostData = function(data) {
	this.postData = data;
}
haxe.Http.prototype.request = function(post) {
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
			uri += StringTools.urlDecode(p) + "=" + StringTools.urlEncode(this.params.get(p));
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
haxe.Http.prototype.onData = function(data) {
}
haxe.Http.prototype.onError = function(msg) {
}
haxe.Http.prototype.onStatus = function(status) {
}
haxe.Http.prototype.__class__ = haxe.Http;
rg.controller.info.InfoLineChart = function(p) {
	if( p === $_ ) return;
	rg.controller.info.InfoCartesianChart.call(this);
	this.effect = rg.view.svg.chart.LineEffect.Gradient(0.75,2);
	this.interpolation = thx.svg.LineInterpolator.Linear;
	this.displayarea = false;
}
rg.controller.info.InfoLineChart.__name__ = ["rg","controller","info","InfoLineChart"];
rg.controller.info.InfoLineChart.__super__ = rg.controller.info.InfoCartesianChart;
for(var k in rg.controller.info.InfoCartesianChart.prototype ) rg.controller.info.InfoLineChart.prototype[k] = rg.controller.info.InfoCartesianChart.prototype[k];
rg.controller.info.InfoLineChart.filters = function() {
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
		return [{ field : "effect", value : rg.view.svg.chart.LineEffects.parse(v)}];
	}},{ field : "interpolation", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "interpolation", value : thx.svg.LineInterpolators.parse(v)}];
	}}].concat(rg.controller.info.InfoCartesianChart.filters());
}
rg.controller.info.InfoLineChart.prototype.effect = null;
rg.controller.info.InfoLineChart.prototype.interpolation = null;
rg.controller.info.InfoLineChart.prototype.symbol = null;
rg.controller.info.InfoLineChart.prototype.symbolStyle = null;
rg.controller.info.InfoLineChart.prototype.displayarea = null;
rg.controller.info.InfoLineChart.prototype.y0property = null;
rg.controller.info.InfoLineChart.prototype.__class__ = rg.controller.info.InfoLineChart;
if(!thx.xml) thx.xml = {}
thx.xml.Namespace = function() { }
thx.xml.Namespace.__name__ = ["thx","xml","Namespace"];
thx.xml.Namespace.qualify = function(name) {
	var i = name.indexOf(":");
	if(i < 0) return null; else {
		var space = thx.xml.Namespace.prefix.get(name.substr(0,i));
		if(null == space) throw new thx.error.Error("unable to find a namespace for {0}",[space],null,{ fileName : "Namespace.hx", lineNumber : 29, className : "thx.xml.Namespace", methodName : "qualify"});
		return new thx.xml.NSQualifier(space,name.substr(i + 1));
	}
}
thx.xml.Namespace.prototype.__class__ = thx.xml.Namespace;
thx.xml.NSQualifier = function(space,local) {
	if( space === $_ ) return;
	this.space = space;
	this.local = local;
}
thx.xml.NSQualifier.__name__ = ["thx","xml","NSQualifier"];
thx.xml.NSQualifier.prototype.space = null;
thx.xml.NSQualifier.prototype.local = null;
thx.xml.NSQualifier.prototype.__class__ = thx.xml.NSQualifier;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
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
Type = function() { }
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
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		cl = null;
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		e = null;
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
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
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
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
Type.prototype.__class__ = Type;
rg.view.svg.chart.Coords = function() { }
rg.view.svg.chart.Coords.__name__ = ["rg","view","svg","chart","Coords"];
rg.view.svg.chart.Coords.fromTransform = function(s) {
	if(!rg.view.svg.chart.Coords.retransform.match(s)) return [0.0,0]; else {
		var y = rg.view.svg.chart.Coords.retransform.matched(2);
		return [Std.parseFloat(rg.view.svg.chart.Coords.retransform.matched(1)),null == y?0:Std.parseFloat(y)];
	}
}
rg.view.svg.chart.Coords.prototype.__class__ = rg.view.svg.chart.Coords;
rg.data.DataContext = function(name,data) {
	if( name === $_ ) return;
	this.name = name;
	this.data = data;
}
rg.data.DataContext.__name__ = ["rg","data","DataContext"];
rg.data.DataContext.prototype.name = null;
rg.data.DataContext.prototype.data = null;
rg.data.DataContext.prototype.__class__ = rg.data.DataContext;
thx.json.JsonEncoder = function(p) {
}
thx.json.JsonEncoder.__name__ = ["thx","json","JsonEncoder"];
thx.json.JsonEncoder.prototype.encodedString = null;
thx.json.JsonEncoder.prototype.buf = null;
thx.json.JsonEncoder.prototype.lvl = null;
thx.json.JsonEncoder.prototype.count = null;
thx.json.JsonEncoder.prototype.start = function() {
	this.lvl = 0;
	this.buf = new StringBuf();
	this.encodedString = null;
	this.count = [];
}
thx.json.JsonEncoder.prototype.end = function() {
	this.encodedString = this.buf.b.join("");
	this.buf = null;
}
thx.json.JsonEncoder.prototype.startObject = function() {
	this.buf.add("{");
	this.count.push(0);
}
thx.json.JsonEncoder.prototype.startField = function(name) {
	if(this.count[this.count.length - 1]++ > 0) this.buf.add(",");
	this.buf.add(this.quote(name) + ":");
}
thx.json.JsonEncoder.prototype.endField = function() {
}
thx.json.JsonEncoder.prototype.endObject = function() {
	this.buf.add("}");
	this.count.pop();
}
thx.json.JsonEncoder.prototype.startArray = function() {
	this.buf.add("[");
	this.count.push(0);
}
thx.json.JsonEncoder.prototype.startItem = function() {
	if(this.count[this.count.length - 1]++ > 0) this.buf.add(",");
}
thx.json.JsonEncoder.prototype.endItem = function() {
}
thx.json.JsonEncoder.prototype.endArray = function() {
	this.buf.add("]");
	this.count.pop();
}
thx.json.JsonEncoder.prototype.date = function(d) {
	this.buf.add(d.getTime());
}
thx.json.JsonEncoder.prototype.string = function(s) {
	this.buf.add(this.quote(s));
}
thx.json.JsonEncoder.prototype["int"] = function(i) {
	this.buf.add(i);
}
thx.json.JsonEncoder.prototype["float"] = function(f) {
	this.buf.add(f);
}
thx.json.JsonEncoder.prototype["null"] = function() {
	this.buf.add("null");
}
thx.json.JsonEncoder.prototype.bool = function(b) {
	this.buf.add(b?"true":"false");
}
thx.json.JsonEncoder.prototype.comment = function(s) {
}
thx.json.JsonEncoder.prototype.quote = function(s) {
	return "\"" + new EReg(".","").customReplace(new EReg("(\n)","g").replace(new EReg("(\"|\\\\)","g").replace(s,"\\$1"),"\\n"),function(r) {
		var c = r.matched(0).charCodeAt(0);
		return c >= 32 && c <= 127?String.fromCharCode(c):"\\u" + StringTools.hex(c,4);
	}) + "\"";
}
thx.json.JsonEncoder.prototype.__class__ = thx.json.JsonEncoder;
thx.json.JsonEncoder.__interfaces__ = [thx.data.IDataHandler];
thx.svg.Area = function(x,y0,y1,interpolator) {
	if( x === $_ ) return;
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
thx.svg.Area.prototype._x = null;
thx.svg.Area.prototype._y0 = null;
thx.svg.Area.prototype._y1 = null;
thx.svg.Area.prototype._interpolator = null;
thx.svg.Area.prototype.shape = function(data,i) {
	var second = thx.svg.LineInternals.linePoints(data,this._x,this._y0);
	second.reverse();
	return data.length < 1?null:"M" + thx.svg.LineInternals.interpolatePoints(thx.svg.LineInternals.linePoints(data,this._x,this._y1),this._interpolator) + "L" + thx.svg.LineInternals.interpolatePoints(second,this._interpolator) + "Z";
}
thx.svg.Area.prototype.getInterpolator = function() {
	return this._interpolator;
}
thx.svg.Area.prototype.interpolator = function(type) {
	this._interpolator = type;
	return this;
}
thx.svg.Area.prototype.getX = function() {
	return this._x;
}
thx.svg.Area.prototype.x = function(v) {
	this._x = v;
	return this;
}
thx.svg.Area.prototype.getY0 = function() {
	return this._y0;
}
thx.svg.Area.prototype.y0 = function(v) {
	this._y0 = v;
	return this;
}
thx.svg.Area.prototype.getY1 = function() {
	return this._y1;
}
thx.svg.Area.prototype.y1 = function(v) {
	this._y1 = v;
	return this;
}
thx.svg.Area.prototype.__class__ = thx.svg.Area;
rg.controller.info.InfoPadding = function(p) {
}
rg.controller.info.InfoPadding.__name__ = ["rg","controller","info","InfoPadding"];
rg.controller.info.InfoPadding.filters = function() {
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
rg.controller.info.InfoPadding.prototype.top = null;
rg.controller.info.InfoPadding.prototype.bottom = null;
rg.controller.info.InfoPadding.prototype.left = null;
rg.controller.info.InfoPadding.prototype.right = null;
rg.controller.info.InfoPadding.prototype.__class__ = rg.controller.info.InfoPadding;
rg.controller.visualization.VisualizationFunnelChart = function(layout) {
	if( layout === $_ ) return;
	rg.controller.visualization.VisualizationSvg.call(this,layout);
}
rg.controller.visualization.VisualizationFunnelChart.__name__ = ["rg","controller","visualization","VisualizationFunnelChart"];
rg.controller.visualization.VisualizationFunnelChart.__super__ = rg.controller.visualization.VisualizationSvg;
for(var k in rg.controller.visualization.VisualizationSvg.prototype ) rg.controller.visualization.VisualizationFunnelChart.prototype[k] = rg.controller.visualization.VisualizationSvg.prototype[k];
rg.controller.visualization.VisualizationFunnelChart.prototype.info = null;
rg.controller.visualization.VisualizationFunnelChart.prototype.title = null;
rg.controller.visualization.VisualizationFunnelChart.prototype.chart = null;
rg.controller.visualization.VisualizationFunnelChart.prototype.init = function() {
	var panelChart = this.layout.getPanel(this.layout.mainPanelName);
	this.chart = new rg.view.svg.chart.FunnelChart(panelChart);
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
		this.title = new rg.view.svg.layer.Title(panelContextTitle.panel,null,panelContextTitle.anchor);
	}
}
rg.controller.visualization.VisualizationFunnelChart.prototype.feedData = function(data) {
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	var data1 = rg.util.DataPoints.filterByIndependents(rg.util.DataPoints.filterByDependents(data,this.dependentVariables),this.independentVariables);
	if(null != this.info.sortDataPoint) data1.sort(this.info.sortDataPoint);
	if(null != this.title) {
		if(null != this.info.label.title) {
			this.title.setText(this.info.label.title(this.getVariables(),data1));
			this.layout.suggestSize("title",this.title.idealHeight());
		} else this.layout.suggestSize("title",0);
	}
	if(null != this.info.sortDataPoint) data1.sort(this.info.sortDataPoint);
	this.chart.init();
	this.chart.data(data1);
}
rg.controller.visualization.VisualizationFunnelChart.prototype.destroy = function() {
	this.chart.destroy();
	if(null != this.title) this.title.destroy();
	rg.controller.visualization.VisualizationSvg.prototype.destroy.call(this);
}
rg.controller.visualization.VisualizationFunnelChart.prototype.__class__ = rg.controller.visualization.VisualizationFunnelChart;
rg.data.source.rgquery.transform.Transforms = function() { }
rg.data.source.rgquery.transform.Transforms.__name__ = ["rg","data","source","rgquery","transform","Transforms"];
rg.data.source.rgquery.transform.Transforms.typedValue = function(s,_) {
	if(s.substr(0,1) == "\"") return StringTools.replace(s.substr(1,s.length - 2),"\\\"","\""); else if((s = s.toLowerCase()) == "true") return true; else if(s == "false") return false; else return Std.parseFloat(s);
}
rg.data.source.rgquery.transform.Transforms.prototype.__class__ = rg.data.source.rgquery.transform.Transforms;
Reflect = function() { }
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
Reflect.prototype.__class__ = Reflect;
rg.controller.info.InfoLeaderboard = function(p) {
	if( p === $_ ) return;
	this.animation = new rg.controller.info.InfoAnimation();
	this.label = new rg.controller.info.InfoLabel();
	this.displayGradient = true;
	this.gradientOnMax = false;
}
rg.controller.info.InfoLeaderboard.__name__ = ["rg","controller","info","InfoLeaderboard"];
rg.controller.info.InfoLeaderboard.filters = function() {
	return [{ field : "animation", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		var animation = new rg.controller.info.InfoAnimation();
		animation.ease = thx.math.Equations.linear;
		return [{ field : "animation", value : rg.controller.info.Info.feed(animation,v)}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabel(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "sort", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : function(v) {
		return [{ field : "sortDataPoint", value : v}];
	}},{ field : "effect", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		switch(v.toLowerCase()) {
		case "gradient":case "gradient-tot":
			return [{ field : "displayGradient", value : true},{ field : "gradientOnMax", value : false}];
		case "gradient-max":
			return [{ field : "displayGradient", value : true},{ field : "gradientOnMax", value : true}];
		default:
			return [{ field : "displayGradient", value : false},{ field : "gradientOnMax", value : true}];
		}
	}}];
}
rg.controller.info.InfoLeaderboard.prototype.animation = null;
rg.controller.info.InfoLeaderboard.prototype.label = null;
rg.controller.info.InfoLeaderboard.prototype.click = null;
rg.controller.info.InfoLeaderboard.prototype.sortDataPoint = null;
rg.controller.info.InfoLeaderboard.prototype.displayGradient = null;
rg.controller.info.InfoLeaderboard.prototype.gradientOnMax = null;
rg.controller.info.InfoLeaderboard.prototype.__class__ = rg.controller.info.InfoLeaderboard;
rg.data.DataProcessor = function(sources) {
	if( sources === $_ ) return;
	this.sources = sources;
	sources.onLoading.add($closure(this,"preprocess"));
	sources.onLoad.add($closure(this,"process"));
	this.onData = new hxevents.Dispatcher();
}
rg.data.DataProcessor.__name__ = ["rg","data","DataProcessor"];
rg.data.DataProcessor.prototype.sources = null;
rg.data.DataProcessor.prototype.onData = null;
rg.data.DataProcessor.prototype.independentVariables = null;
rg.data.DataProcessor.prototype.dependentVariables = null;
rg.data.DataProcessor.prototype.transform = function(s) {
	return Arrays.flatten(s);
}
rg.data.DataProcessor.prototype.scale = function(s) {
	return s;
}
rg.data.DataProcessor.prototype.load = function() {
	this.sources.load();
}
rg.data.DataProcessor.prototype.filterSubset = function(subset,variables) {
	return Arrays.filter(subset,(function(f,a1) {
		return function(a2) {
			return f(a1,a2);
		};
	})($closure(this,"filterDatapoint"),variables));
}
rg.data.DataProcessor.prototype.filterDatapoint = function(variables,dp) {
	var _g1 = 0, _g = this.independentVariables.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(Reflect.field(dp,this.independentVariables[i].type) != variables[i]) return false;
	}
	return true;
}
rg.data.DataProcessor.prototype.preprocess = function() {
}
rg.data.DataProcessor.prototype.process = function(data) {
	if(null == data || data.length == 0 || data[0].length == 0) {
		this.onData.dispatch([]);
		return;
	}
	data = this.scale(data);
	this.fillIndependentVariables(data);
	var dataPoints = this.transform(data);
	this.fillDependentVariables(dataPoints);
	this.onData.dispatch(dataPoints);
}
rg.data.DataProcessor.prototype.fillDependentVariables = function(data) {
	var _g = 0, _g1 = this.dependentVariables;
	while(_g < _g1.length) {
		var variable = _g1[_g];
		++_g;
		var values = rg.util.DataPoints.values(data,variable.type);
		if(values.length == 0) continue;
		if(null == variable.axis) variable.setAxis(new rg.controller.factory.FactoryAxis().create(variable.type,Std["is"](values[0],Float),variable,null));
		variable.stats.addMany(values);
		var discrete;
		if(null != variable.scaleDistribution && null != (discrete = Types["as"](variable.axis,rg.data.IAxisDiscrete))) {
			discrete.setScaleDistribution(variable.scaleDistribution);
			variable.scaleDistribution = null;
		}
	}
}
rg.data.DataProcessor.prototype.fillIndependentVariables = function(data) {
	var flatten = Arrays.flatten(data);
	var _g = 0, _g1 = this.independentVariables;
	while(_g < _g1.length) {
		var variable = _g1[_g];
		++_g;
		variable.stats.addMany(rg.util.DataPoints.values(flatten,variable.type));
		var discrete;
		if(null != variable.scaleDistribution && null != (discrete = Types["as"](variable.axis,rg.data.IAxisDiscrete))) {
			discrete.setScaleDistribution(variable.scaleDistribution);
			variable.scaleDistribution = null;
		}
	}
}
rg.data.DataProcessor.prototype.getVariableIndependentValues = function() {
	return Arrays.product(this.independentVariables.map(function(variable,i) {
		return variable.axis.range(variable.min(),variable.max());
	}));
}
rg.data.DataProcessor.prototype.__class__ = rg.data.DataProcessor;
rg.data.source.rgquery.transform.TransformIntersectGroup = function(properties,fields,event,periodicity,unit) {
	if( properties === $_ ) return;
	this.properties = properties;
	this.unit = unit;
	this.periodicity = periodicity;
	this.fields = fields;
	this.event = event;
}
rg.data.source.rgquery.transform.TransformIntersectGroup.__name__ = ["rg","data","source","rgquery","transform","TransformIntersectGroup"];
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.unit = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.periodicity = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.groupby = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.transform = function(data) {
	var items = Objects.flatten(data,this.fields.length), properties = this.properties, unit = this.unit;
	if(null == items || 0 == items.length) return [];
	var result = [];
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var arr = item.value;
		var _g2 = 0, _g1 = arr.length;
		while(_g2 < _g1) {
			var i = _g2++;
			var p = Dynamics.clone(properties);
			Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
			Objects.addFields(p,[rg.util.Properties.timeProperty(this.periodicity),unit],[Reflect.field(arr[i][0],this.periodicity),arr[i][1]]);
			p.event = this.event;
			result.push(p);
		}
	}
	return result;
}
rg.data.source.rgquery.transform.TransformIntersectGroup.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersectGroup;
rg.data.source.rgquery.transform.TransformIntersectGroup.__interfaces__ = [rg.data.source.ITransform];
rg.controller.Visualizations = function() { }
rg.controller.Visualizations.__name__ = ["rg","controller","Visualizations"];
rg.controller.Visualizations.layoutDefault = null;
rg.controller.Visualizations.layoutType = null;
rg.controller.Visualizations.layoutArgs = null;
rg.controller.Visualizations.instantiateLayout = function(name,width,height,container) {
	return Type.createInstance(rg.controller.Visualizations.layoutType.get(name),[width,height,container]);
}
rg.controller.Visualizations.prototype.__class__ = rg.controller.Visualizations;
thx.js.AccessTweenText = function(transition,tweens) {
	if( transition === $_ ) return;
	thx.js.AccessTween.call(this,transition,tweens);
}
thx.js.AccessTweenText.__name__ = ["thx","js","AccessTweenText"];
thx.js.AccessTweenText.__super__ = thx.js.AccessTween;
for(var k in thx.js.AccessTween.prototype ) thx.js.AccessTweenText.prototype[k] = thx.js.AccessTween.prototype[k];
thx.js.AccessTweenText.prototype.stringNodef = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(f));
}
thx.js.AccessTweenText.prototype.string = function(value) {
	return this.stringTweenNodef(this.transitionStringTween(value));
}
thx.js.AccessTweenText.prototype.stringTweenNodef = function(tween) {
	var handler = function(d,i) {
		var f = tween(d,i,d.textContent);
		return function(t) {
			d.textContent = f(t);
		};
	};
	this.tweens.set("text",handler);
	return this.transition;
}
thx.js.AccessTweenText.prototype.charsNodef = function(f) {
	return this.stringTweenNodef(this.transitionCharsTweenf(f));
}
thx.js.AccessTweenText.prototype.chars = function(value) {
	return this.stringTweenNodef(this.transitionCharsTween(value));
}
thx.js.AccessTweenText.prototype.__class__ = thx.js.AccessTweenText;
thx.js.AccessDataTweenText = function(transition,tweens) {
	if( transition === $_ ) return;
	thx.js.AccessTweenText.call(this,transition,tweens);
}
thx.js.AccessDataTweenText.__name__ = ["thx","js","AccessDataTweenText"];
thx.js.AccessDataTweenText.__super__ = thx.js.AccessTweenText;
for(var k in thx.js.AccessTweenText.prototype ) thx.js.AccessDataTweenText.prototype[k] = thx.js.AccessTweenText.prototype[k];
thx.js.AccessDataTweenText.prototype.stringf = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}));
}
thx.js.AccessDataTweenText.prototype.charsf = function(f) {
	return this.stringTweenNodef(this.transitionCharsTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}));
}
thx.js.AccessDataTweenText.prototype.stringTweenf = function(tween) {
	var handler = function(n,i) {
		var f = tween(Reflect.field(n,"__data__"),i,d.textContent);
		return function(t) {
			d.textContent = f(t);
		};
	};
	this.tweens.set("text",handler);
	return this.transition;
}
thx.js.AccessDataTweenText.prototype.__class__ = thx.js.AccessDataTweenText;
rg.controller.info.InfoPivotTable = function(p) {
	if( p === $_ ) return;
	this.label = new rg.controller.info.InfoLabelPivotTable();
	this.heatmapColorStart = rg.controller.info.InfoPivotTable.defaultStartColor;
	this.heatmapColorEnd = rg.controller.info.InfoPivotTable.defaultEndColor;
	this.displayHeatmap = true;
	this.displayColumnTotal = true;
	this.displayRowTotal = true;
	this.columnAxes = 1;
}
rg.controller.info.InfoPivotTable.__name__ = ["rg","controller","info","InfoPivotTable"];
rg.controller.info.InfoPivotTable.filters = function() {
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
		return [{ field : "heatmapColorStart", value : thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(v,rg.controller.info.InfoPivotTable.defaultStartColor.hex("#")))}];
	}},{ field : "endcolor", validator : function(v) {
		return Std["is"](v,String);
	}, filter : function(v) {
		return [{ field : "heatmapColorEnd", value : thx.color.Hsl.toHsl(rg.view.svg.util.RGColors.parse(v,rg.controller.info.InfoPivotTable.defaultEndColor.hex("#")))}];
	}},{ field : "label", validator : function(v) {
		return Reflect.isObject(v) && null == Type.getClass(v);
	}, filter : function(v) {
		return [{ field : "label", value : rg.controller.info.Info.feed(new rg.controller.info.InfoLabelPivotTable(),v)}];
	}},{ field : "click", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}];
}
rg.controller.info.InfoPivotTable.prototype.label = null;
rg.controller.info.InfoPivotTable.prototype.heatmapColorStart = null;
rg.controller.info.InfoPivotTable.prototype.heatmapColorEnd = null;
rg.controller.info.InfoPivotTable.prototype.displayHeatmap = null;
rg.controller.info.InfoPivotTable.prototype.displayColumnTotal = null;
rg.controller.info.InfoPivotTable.prototype.displayRowTotal = null;
rg.controller.info.InfoPivotTable.prototype.columnAxes = null;
rg.controller.info.InfoPivotTable.prototype.click = null;
rg.controller.info.InfoPivotTable.prototype.__class__ = rg.controller.info.InfoPivotTable;
rg.view.svg.chart.Geo = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.chart.Chart.call(this,panel);
	this.mapcontainer = this.g.append("svg:g").attr("class").string("mapcontainer");
	this.queue = [];
	this.setColorMode(rg.view.svg.chart.ColorScaleMode.FromCss());
}
rg.view.svg.chart.Geo.__name__ = ["rg","view","svg","chart","Geo"];
rg.view.svg.chart.Geo.__super__ = rg.view.svg.chart.Chart;
for(var k in rg.view.svg.chart.Chart.prototype ) rg.view.svg.chart.Geo.prototype[k] = rg.view.svg.chart.Chart.prototype[k];
rg.view.svg.chart.Geo.prototype.mapcontainer = null;
rg.view.svg.chart.Geo.prototype.colorMode = null;
rg.view.svg.chart.Geo.prototype.variableDependent = null;
rg.view.svg.chart.Geo.prototype.dps = null;
rg.view.svg.chart.Geo.prototype.queue = null;
rg.view.svg.chart.Geo.prototype.setVariables = function(variableIndependents,variableDependents,data) {
	this.variableDependent = variableDependents[0];
}
rg.view.svg.chart.Geo.prototype.data = function(dps) {
	this.dps = dps;
	this.redraw();
}
rg.view.svg.chart.Geo.prototype.resize = function() {
	rg.view.svg.chart.Chart.prototype.resize.call(this);
	if(null != this.mapcontainer) this.mapcontainer.attr("transform").string("translate(" + this.width / 2 + "," + this.height / 2 + ")");
}
rg.view.svg.chart.Geo.prototype.dpvalue = function(dp) {
	return Reflect.field(dp,this.variableDependent.type);
}
rg.view.svg.chart.Geo.prototype.drawmap = function(map,field) {
	if(null == this.dps || 0 == this.dps.length) {
		this.queue.push((function(f,a1,a2) {
			return function() {
				return f(a1,a2);
			};
		})($closure(this,"drawmap"),map,field));
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
			var label = new rg.view.svg.widget.Label(this.mapcontainer,true,false,false);
			label.setText(text);
			label.place(c[0],c[1],0);
		}
	}
}
rg.view.svg.chart.Geo.prototype.handlerDataPointOver = function(dp,f) {
	var text = f(dp,this.variableDependent.stats);
	if(null == text) this.tooltip.hide(); else {
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		var centroid = Reflect.field(dp,"#centroid");
		this.moveTooltip(centroid[0] + this.width / 2,centroid[1] + this.height / 2,true);
	}
}
rg.view.svg.chart.Geo.prototype.handlerClick = function(dp,f) {
	f(dp,this.variableDependent.stats);
}
rg.view.svg.chart.Geo.prototype.stylefeature = function(svg,dp) {
}
rg.view.svg.chart.Geo.prototype.redraw = function() {
	while(this.queue.length > 0) (this.queue.shift())();
}
rg.view.svg.chart.Geo.prototype.getColorMode = function() {
	return this.colorMode;
}
rg.view.svg.chart.Geo.prototype.setColorMode = function(v) {
	var me = this;
	var $e = (this.colorMode = v);
	switch( $e[1] ) {
	case 0:
		var g = $e[2];
		if(null == g) g = rg.view.svg.util.RGCss.colorsInCss();
		this.stylefeature = function(svg,dp) {
			var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(g * t);
			svg.attr("class").string("fill-" + index);
		};
		break;
	case 2:
		var c = $e[2];
		var colors = c.map(function(d,_) {
			return d.hex("#");
		});
		this.stylefeature = function(svg,dp) {
			var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type)), index = Math.floor(colors.length * t);
			svg.attr("fill").string(colors[index]);
		};
		break;
	case 1:
		var colors = $e[2];
		var interpolator = thx.color.Rgb.interpolateStepsf(colors);
		this.stylefeature = function(svg,dp) {
			var t = me.variableDependent.axis.scale(me.variableDependent.min(),me.variableDependent.max(),Reflect.field(dp,me.variableDependent.type));
			svg.attr("fill").string(interpolator(t).hex("#"));
		};
		break;
	case 3:
		var c = $e[2];
		var color = c.hex("#");
		this.stylefeature = function(svg,dp) {
			svg.attr("fill").string(color);
		};
		break;
	case 4:
		var f = $e[2];
		this.stylefeature = function(svg,dp) {
			svg.attr("fill").string(f(dp,me.variableDependent.stats));
		};
		break;
	}
	return v;
}
rg.view.svg.chart.Geo.prototype.init = function() {
	rg.view.svg.chart.Chart.prototype.init.call(this);
	if(null == this.tooltip) this.tooltip = new rg.view.svg.widget.Balloon(this.g);
	this.g.classed().add("geo");
}
rg.view.svg.chart.Geo.prototype.addMap = function(map,field) {
	if(null != field) map.onReady.add((function(f,a1,a2) {
		return function() {
			return f(a1,a2);
		};
	})($closure(this,"drawmap"),map,field));
}
rg.view.svg.chart.Geo.prototype.__class__ = rg.view.svg.chart.Geo;
rg.view.svg.chart.LineEffects = function() { }
rg.view.svg.chart.LineEffects.__name__ = ["rg","view","svg","chart","LineEffects"];
rg.view.svg.chart.LineEffects.parse = function(s) {
	var parts = s.toLowerCase().split("-");
	switch(parts.shift()) {
	case "dropshadow":
		var offsetx = 0.5, offsety = 0.5, levels = 2, parameters = parts.pop();
		if(null != parameters) {
			var parameters1 = parameters.split(",");
			offsetx = Std.parseFloat(parameters1[0]);
			if(parameters1.length > 1) offsety = Std.parseFloat(parameters1[1]); else offsety = offsetx;
			if(parameters1.length > 2) levels = Std.parseInt(parameters1[2]);
		}
		return rg.view.svg.chart.LineEffect.DropShadow(offsetx,offsety,levels);
	case "gradient":
		var lightness = 0.75, levels = 2, parameters = parts.pop();
		if(null != parameters) {
			lightness = Std.parseFloat(parameters.split(",").shift());
			var nlevels = parameters.split(",").pop();
			if(null != nlevels) levels = Std.parseInt(nlevels);
		}
		return rg.view.svg.chart.LineEffect.Gradient(lightness,levels);
	default:
		return rg.view.svg.chart.LineEffect.NoEffect;
	}
}
rg.view.svg.chart.LineEffects.prototype.__class__ = rg.view.svg.chart.LineEffects;
thx.math.Random = function(seed) {
	if( seed === $_ ) return;
	if(seed == null) seed = 1;
	this.seed = seed;
}
thx.math.Random.__name__ = ["thx","math","Random"];
thx.math.Random.prototype.seed = null;
thx.math.Random.prototype["int"] = function() {
	return (this.seed = this.seed * 16807 % 2147483647) & 1073741823;
}
thx.math.Random.prototype["float"] = function() {
	return ((this.seed = this.seed * 16807 % 2147483647) & 1073741823) / 1073741823.0;
}
thx.math.Random.prototype.__class__ = thx.math.Random;
thx.svg.LineInterpolators = function() { }
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
thx.svg.LineInterpolators.prototype.__class__ = thx.svg.LineInterpolators;
thx.collection.HashList = function(p) {
	if( p === $_ ) return;
	this.length = 0;
	this.__keys = [];
	this.__hash = new Hash();
}
thx.collection.HashList.__name__ = ["thx","collection","HashList"];
thx.collection.HashList.prototype.length = null;
thx.collection.HashList.prototype.set = function(key,value) {
	if(!this.__hash.exists(key)) {
		this.__keys.push(key);
		this.length++;
	}
	this.__hash.set(key,value);
}
thx.collection.HashList.prototype.setAt = function(index,key,value) {
	this.remove(key);
	this.__keys.insert(index,key);
	this.__hash.set(key,value);
	this.length++;
}
thx.collection.HashList.prototype.get = function(key) {
	return this.__hash.get(key);
}
thx.collection.HashList.prototype.getAt = function(index) {
	return this.__hash.get(this.__keys[index]);
}
thx.collection.HashList.prototype.indexOf = function(key) {
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
thx.collection.HashList.prototype.exists = function(key) {
	return this.__hash.exists(key);
}
thx.collection.HashList.prototype.remove = function(key) {
	var item = this.__hash.get(key);
	if(item == null) return null;
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	return item;
}
thx.collection.HashList.prototype.removeAt = function(index) {
	var key = this.__keys[index];
	if(key == null) return null;
	var item = this.__hash.get(key);
	this.__hash.remove(key);
	this.__keys.remove(key);
	this.length--;
	return item;
}
thx.collection.HashList.prototype.keyAt = function(index) {
	return this.__keys[index];
}
thx.collection.HashList.prototype.keys = function() {
	return this.__keys.iterator();
}
thx.collection.HashList.prototype.iterator = function() {
	return this.array().iterator();
}
thx.collection.HashList.prototype.clear = function() {
	this.__hash = new Hash();
	this.__keys = [];
	this.length = 0;
}
thx.collection.HashList.prototype.array = function() {
	var values = [];
	var _g = 0, _g1 = this.__keys;
	while(_g < _g1.length) {
		var k = _g1[_g];
		++_g;
		values.push(this.__hash.get(k));
	}
	return values;
}
thx.collection.HashList.prototype.toString = function() {
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
thx.collection.HashList.prototype.__keys = null;
thx.collection.HashList.prototype.__hash = null;
thx.collection.HashList.prototype.__class__ = thx.collection.HashList;
rg.controller.visualization.VisualizationPivotTable = function(container) {
	if( container === $_ ) return;
	rg.controller.visualization.VisualizationHtml.call(this,container);
}
rg.controller.visualization.VisualizationPivotTable.__name__ = ["rg","controller","visualization","VisualizationPivotTable"];
rg.controller.visualization.VisualizationPivotTable.__super__ = rg.controller.visualization.VisualizationHtml;
for(var k in rg.controller.visualization.VisualizationHtml.prototype ) rg.controller.visualization.VisualizationPivotTable.prototype[k] = rg.controller.visualization.VisualizationHtml.prototype[k];
rg.controller.visualization.VisualizationPivotTable.prototype.info = null;
rg.controller.visualization.VisualizationPivotTable.prototype.chart = null;
rg.controller.visualization.VisualizationPivotTable.prototype.init = function() {
	this.chart = new rg.view.html.widget.PivotTable(this.container);
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
rg.controller.visualization.VisualizationPivotTable.prototype.feedData = function(data) {
	this.chart.setVariables(this.independentVariables,this.dependentVariables);
	this.chart.data(data);
}
rg.controller.visualization.VisualizationPivotTable.prototype.destroy = function() {
	this.chart.destroy();
}
rg.controller.visualization.VisualizationPivotTable.prototype.__class__ = rg.controller.visualization.VisualizationPivotTable;
thx.svg.LineInternals = function() { }
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
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("V" + p[1] + "H" + p[0]);
		}
		break;
	case 2:
		path.push(p[0] + "," + p[1]);
		while(++i < n) {
			p = points[i];
			path.push("H" + p[0] + "V" + p[1]);
		}
		break;
	case 3:
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
	case 4:
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
	case 5:
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
	case 6:
		var tension = $e[2];
		if(null == tension) tension = .7;
		if(points.length < 3) return thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear); else return points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents(points,tension));
		break;
	case 7:
		var tension = $e[2];
		return points.length < 4?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[1][0] + "," + points[1][1] + thx.svg.LineInternals._lineCardinalTangents(points,tension);
	case 8:
		var tension = $e[2];
		if(null == tension) tension = .7;
		return points.length < 3?thx.svg.LineInternals.interpolatePoints(points,thx.svg.LineInterpolator.Linear):points[0][0] + "," + points[0][1] + thx.svg.LineInternals._lineHermite(points,thx.svg.LineInternals._lineCardinalTangents([points[points.length - 2]].concat(points).concat([points[1]]),tension));
	case 9:
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
thx.svg.LineInternals.prototype.__class__ = thx.svg.LineInternals;
thx.js.AccessTweenAttribute = function(name,transition,tweens) {
	if( name === $_ ) return;
	thx.js.AccessTween.call(this,transition,tweens);
	this.name = name;
	this.qname = thx.xml.Namespace.qualify(name);
}
thx.js.AccessTweenAttribute.__name__ = ["thx","js","AccessTweenAttribute"];
thx.js.AccessTweenAttribute.__super__ = thx.js.AccessTween;
for(var k in thx.js.AccessTween.prototype ) thx.js.AccessTweenAttribute.prototype[k] = thx.js.AccessTween.prototype[k];
thx.js.AccessTweenAttribute.prototype.name = null;
thx.js.AccessTweenAttribute.prototype.qname = null;
thx.js.AccessTweenAttribute.prototype.stringNodef = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(f));
}
thx.js.AccessTweenAttribute.prototype.string = function(value) {
	return this.stringTweenNodef(this.transitionStringTween(value));
}
thx.js.AccessTweenAttribute.prototype.stringTweenNodef = function(tween) {
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
thx.js.AccessTweenAttribute.prototype.floatNodef = function(f) {
	return this.floatTweenNodef(this.transitionFloatTweenf(f));
}
thx.js.AccessTweenAttribute.prototype["float"] = function(value) {
	return this.floatTweenNodef(this.transitionFloatTween(value));
}
thx.js.AccessTweenAttribute.prototype.floatTweenNodef = function(tween) {
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
thx.js.AccessTweenAttribute.prototype.__class__ = thx.js.AccessTweenAttribute;
thx.js.AccessDataTweenAttribute = function(name,transition,tweens) {
	if( name === $_ ) return;
	thx.js.AccessTweenAttribute.call(this,name,transition,tweens);
}
thx.js.AccessDataTweenAttribute.__name__ = ["thx","js","AccessDataTweenAttribute"];
thx.js.AccessDataTweenAttribute.__super__ = thx.js.AccessTweenAttribute;
for(var k in thx.js.AccessTweenAttribute.prototype ) thx.js.AccessDataTweenAttribute.prototype[k] = thx.js.AccessTweenAttribute.prototype[k];
thx.js.AccessDataTweenAttribute.prototype.stringf = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}));
}
thx.js.AccessDataTweenAttribute.prototype.floatf = function(f) {
	return this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
		return f(Reflect.field(n,"__data__"),i);
	}));
}
thx.js.AccessDataTweenAttribute.prototype.stringTweenf = function(tween) {
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
thx.js.AccessDataTweenAttribute.prototype.floatTweenf = function(tween) {
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
thx.js.AccessDataTweenAttribute.prototype.__class__ = thx.js.AccessDataTweenAttribute;
rg.data.source.rgquery.transform.TransformIntersect = function(properties,fields,event,orderDescending) {
	if( properties === $_ ) return;
	this.properties = properties;
	this.fields = fields;
	this.event = event;
	this.orderDescending = orderDescending;
}
rg.data.source.rgquery.transform.TransformIntersect.__name__ = ["rg","data","source","rgquery","transform","TransformIntersect"];
rg.data.source.rgquery.transform.TransformIntersect.prototype.properties = null;
rg.data.source.rgquery.transform.TransformIntersect.prototype.fields = null;
rg.data.source.rgquery.transform.TransformIntersect.prototype.event = null;
rg.data.source.rgquery.transform.TransformIntersect.prototype.orderDescending = null;
rg.data.source.rgquery.transform.TransformIntersect.prototype.transform = function(data) {
	var items = Objects.flatten(data,this.fields.length);
	if(null == items || 0 == items.length) return [];
	var result = [];
	var _g = 0;
	while(_g < items.length) {
		var item = items[_g];
		++_g;
		var count = item.value, p = Dynamics.clone(this.properties);
		Objects.addFields(p,this.fields,item.fields.map(rg.data.source.rgquery.transform.Transforms.typedValue));
		p[".#time:eternity"] = 0;
		p.count = count;
		p.event = this.event;
		result.push(p);
	}
	if(this.orderDescending) result.sort(function(a,b) {
		return b.count - a.count;
	}); else result.sort(function(a,b) {
		return a.count - b.count;
	});
	return result;
}
rg.data.source.rgquery.transform.TransformIntersect.prototype.__class__ = rg.data.source.rgquery.transform.TransformIntersect;
rg.data.source.rgquery.transform.TransformIntersect.__interfaces__ = [rg.data.source.ITransform];
rg.controller.factory.FactoryLayout = function(p) {
}
rg.controller.factory.FactoryLayout.__name__ = ["rg","controller","factory","FactoryLayout"];
rg.controller.factory.FactoryLayout.prototype.create = function(info,container) {
	var v, width = null == info.width?(v = container.node().clientWidth) > 10?v:400:info.width, height = null == info.height?(v = container.node().clientHeight) > 10?v:300:info.height;
	var layoutName = info.layout;
	if(null == layoutName) layoutName = rg.controller.Visualizations.layoutDefault.get(info.type);
	if(null == layoutName) throw new thx.error.Error("unable to find a suitable layout for '{0}'",null,info.type,{ fileName : "FactoryLayout.hx", lineNumber : 34, className : "rg.controller.factory.FactoryLayout", methodName : "create"});
	var layout = rg.controller.Visualizations.instantiateLayout(layoutName,width,height,container);
	layout.feedOptions(info);
	return layout;
}
rg.controller.factory.FactoryLayout.prototype.__class__ = rg.controller.factory.FactoryLayout;
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x == null?"null":x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
rg.view.svg.chart.LineEffect = { __ename__ : ["rg","view","svg","chart","LineEffect"], __constructs__ : ["NoEffect","Gradient","DropShadow"] }
rg.view.svg.chart.LineEffect.NoEffect = ["NoEffect",0];
rg.view.svg.chart.LineEffect.NoEffect.toString = $estr;
rg.view.svg.chart.LineEffect.NoEffect.__enum__ = rg.view.svg.chart.LineEffect;
rg.view.svg.chart.LineEffect.Gradient = function(lightness,levels) { var $x = ["Gradient",1,lightness,levels]; $x.__enum__ = rg.view.svg.chart.LineEffect; $x.toString = $estr; return $x; }
rg.view.svg.chart.LineEffect.DropShadow = function(ox,oy,evels) { var $x = ["DropShadow",2,ox,oy,evels]; $x.__enum__ = rg.view.svg.chart.LineEffect; $x.toString = $estr; return $x; }
thx.js.AccessHtml = function(selection) {
	if( selection === $_ ) return;
	thx.js.Access.call(this,selection);
}
thx.js.AccessHtml.__name__ = ["thx","js","AccessHtml"];
thx.js.AccessHtml.__super__ = thx.js.Access;
for(var k in thx.js.Access.prototype ) thx.js.AccessHtml.prototype[k] = thx.js.Access.prototype[k];
thx.js.AccessHtml.prototype.get = function() {
	return this.selection.firstNode(function(node) {
		return node.innerHTML;
	});
}
thx.js.AccessHtml.prototype.string = function(v) {
	this.selection.eachNode(function(node,i) {
		node.innerHTML = v;
	});
	return this.selection;
}
thx.js.AccessHtml.prototype.clear = function() {
	this.selection.eachNode(function(node,i) {
		node.innerHTML = "";
	});
	return this.selection;
}
thx.js.AccessHtml.prototype["float"] = function(v) {
	this.selection.eachNode(function(node,i) {
		node.innerHTML = "" + v;
	});
	return this.selection;
}
thx.js.AccessHtml.prototype.__class__ = thx.js.AccessHtml;
thx.js.AccessDataHtml = function(selection) {
	if( selection === $_ ) return;
	thx.js.AccessHtml.call(this,selection);
}
thx.js.AccessDataHtml.__name__ = ["thx","js","AccessDataHtml"];
thx.js.AccessDataHtml.__super__ = thx.js.AccessHtml;
for(var k in thx.js.AccessHtml.prototype ) thx.js.AccessDataHtml.prototype[k] = thx.js.AccessHtml.prototype[k];
thx.js.AccessDataHtml.prototype.stringf = function(v) {
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__data__"),i);
		if(null == s) s = "";
		node.innerHTML = s;
	});
	return this.selection;
}
thx.js.AccessDataHtml.prototype.floatf = function(v) {
	this.selection.eachNode(function(node,i) {
		var f = v(Reflect.field(node,"__data__"),i);
		if(null == f) node.innerHTML = ""; else node.innerHTML = "" + f;
	});
	return this.selection;
}
thx.js.AccessDataHtml.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
thx.js.AccessDataHtml.prototype.__class__ = thx.js.AccessDataHtml;
Iterators = function() { }
Iterators.__name__ = ["Iterators"];
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
Iterators.prototype.__class__ = Iterators;
thx.geo.Azimuthal = function(p) {
	if( p === $_ ) return;
	this.setMode(thx.geo.ProjectionMode.Orthographic);
	this.setScale(200);
	this.setTranslate([480.0,250]);
	this.setOrigin([0.0,0]);
}
thx.geo.Azimuthal.__name__ = ["thx","geo","Azimuthal"];
thx.geo.Azimuthal.prototype.mode = null;
thx.geo.Azimuthal.prototype.origin = null;
thx.geo.Azimuthal.prototype.scale = null;
thx.geo.Azimuthal.prototype.translate = null;
thx.geo.Azimuthal.prototype.x0 = null;
thx.geo.Azimuthal.prototype.y0 = null;
thx.geo.Azimuthal.prototype.cy0 = null;
thx.geo.Azimuthal.prototype.sy0 = null;
thx.geo.Azimuthal.prototype.project = function(coords) {
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
thx.geo.Azimuthal.prototype.invert = function(coords) {
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
thx.geo.Azimuthal.prototype.getOrigin = function() {
	return this.origin.copy();
}
thx.geo.Azimuthal.prototype.setOrigin = function(origin) {
	this.origin = [origin[0],origin[1]];
	this.x0 = origin[0] * 0.01745329251994329577;
	this.y0 = origin[1] * 0.01745329251994329577;
	this.cy0 = Math.cos(this.y0);
	this.sy0 = Math.sin(this.y0);
	return origin;
}
thx.geo.Azimuthal.prototype.getTranslate = function() {
	return this.translate.copy();
}
thx.geo.Azimuthal.prototype.setTranslate = function(translate) {
	this.translate = [translate[0],translate[1]];
	return translate;
}
thx.geo.Azimuthal.prototype.setScale = function(scale) {
	return this.scale = scale;
}
thx.geo.Azimuthal.prototype.getScale = function() {
	return this.scale;
}
thx.geo.Azimuthal.prototype.setMode = function(mode) {
	return this.mode = mode;
}
thx.geo.Azimuthal.prototype.getMode = function() {
	return this.mode;
}
thx.geo.Azimuthal.prototype.__class__ = thx.geo.Azimuthal;
thx.geo.Azimuthal.__interfaces__ = [thx.geo.IProjection];
thx.geo.ProjectionMode = { __ename__ : ["thx","geo","ProjectionMode"], __constructs__ : ["Orthographic","Stereographic"] }
thx.geo.ProjectionMode.Orthographic = ["Orthographic",0];
thx.geo.ProjectionMode.Orthographic.toString = $estr;
thx.geo.ProjectionMode.Orthographic.__enum__ = thx.geo.ProjectionMode;
thx.geo.ProjectionMode.Stereographic = ["Stereographic",1];
thx.geo.ProjectionMode.Stereographic.toString = $estr;
thx.geo.ProjectionMode.Stereographic.__enum__ = thx.geo.ProjectionMode;
rg.controller.MVPOptions = function() { }
rg.controller.MVPOptions.__name__ = ["rg","controller","MVPOptions"];
rg.controller.MVPOptions.timestamp = function(d) {
	if(Std["is"](d,String)) return thx.date.DateParser.parse(d).getTime(); else if(Std["is"](d,Date)) return d.getTime(); else return d;
}
rg.controller.MVPOptions.buildQuery = function(type,property,periodicity) {
	switch(type) {
	default:
		return (null != property?property + " * ":"") + ".#time:" + periodicity;
	}
}
rg.controller.MVPOptions.complete = function(executor,opt,handler) {
	var start = null, end = null, path = "/", events = [], property = null, chain = new rg.util.ChainedExecutor(handler), query, periodicity, groupby = null, groupfilter = null;
	if(null != opt.groupby) {
		groupby = opt.groupby;
		Reflect.deleteField(opt,"groupby");
		if(null != opt.groupfilter) {
			groupfilter = opt.groupfilter;
			Reflect.deleteField(opt,"groupfilter");
		}
	}
	if(null != opt.property) {
		property = (opt.property.substr(0,1) == "."?"":".") + opt.property;
		Reflect.deleteField(opt,"property");
	}
	if(null != opt.start) {
		start = rg.controller.MVPOptions.timestamp(opt.start);
		Reflect.deleteField(opt,"start");
	}
	if(null != opt.end) {
		end = rg.controller.MVPOptions.timestamp(opt.end);
		Reflect.deleteField(opt,"end");
	}
	if(null != opt.periodicity) {
		periodicity = opt.periodicity;
		Reflect.deleteField(opt,"periodicity");
	} else if(null != start) periodicity = rg.util.Periodicity.defaultPeriodicity(end - start); else periodicity = (function($this) {
		var $r;
		switch(opt.options.visualization) {
		case "piechart":
			$r = "eternity";
			break;
		default:
			$r = "day";
		}
		return $r;
	}(this));
	if(null == start && "eternity" != periodicity) {
		var range = rg.util.Periodicity.defaultRange(periodicity);
		start = range[0];
		end = range[1];
	}
	if(null != opt.path) {
		path = opt.path;
		Reflect.deleteField(opt,"path");
	}
	if(null != opt.events) {
		events = Std["is"](opt.events,Array)?opt.events:[opt.events];
		Reflect.deleteField(opt,"events");
	}
	if(null != opt.event) {
		events = [opt.event];
		Reflect.deleteField(opt,"event");
	}
	if(null != opt.query) {
		query = opt.query;
		Reflect.deleteField(opt,"query");
		if(rg.util.Properties.isTime(query)) periodicity = rg.util.Properties.periodicity(query);
	} else query = rg.controller.MVPOptions.buildQuery(opt.options.visualization,property,periodicity);
	chain.addAction(function(opt1,handler1) {
		if(null == opt1.data && events.length == 0) executor.children(path,{ type : "property"},function(arr) {
			events = arr;
			handler1(opt1);
		}); else handler1(opt1);
	});
	chain.addAction(function(opt1,handler1) {
		if(null == opt1.data) {
			var src = [];
			opt1.data = [{ src : src}];
			var _g = 0;
			while(_g < events.length) {
				var event = events[_g];
				++_g;
				var opt2 = { path : path, event : event, query : query};
				if(null != start) {
					opt2["start"] = start;
					opt2["end"] = end;
				}
				if(null != groupby) {
					opt2["groupby"] = groupby;
					if(null != groupfilter) opt2["groupfilter"] = groupfilter;
				}
				src.push(opt2);
			}
			if(null == opt1.options.segmenton) opt1.options.segmenton = null == property?"event":property;
		}
		handler1(opt1);
	});
	chain.addAction(function(opt1,handler1) {
		if(null == opt1.axes) switch(opt1.options.visualization) {
		default:
			var axis = null != groupby?{ type : ".#time:" + periodicity, groupby : groupby}:{ type : ".#time:" + periodicity};
			switch(opt1.options.visualization) {
			case "barchart":
				axis.scalemode = "fit";
				break;
			}
			opt1.axes = [axis];
		}
		handler1(opt1);
	});
	chain.addAction(function(opt1,handler1) {
		var axes = opt1.axes, hasdependent = false;
		var _g = 0;
		while(_g < axes.length) {
			var axis = axes[_g];
			++_g;
			if(query.indexOf(axis.type) < 0) hasdependent = true;
		}
		if(!hasdependent) opt1.axes.push({ type : "count"});
		handler1(opt1);
	});
	chain.addAction(function(opt1,handler1) {
		if(null == opt1.options.label) switch(opt1.options.visualization) {
		case "linechart":case "barchart":
			var axes = opt1.axes, type = axes[axes.length - 1].type;
			opt1.options.label = { datapointover : function(dp,stats) {
				return rg.util.Properties.humanize(null != property?Reflect.field(dp,property):null != opt1.options.segmenton?Reflect.field(dp,opt1.options.segmenton):type) + ": " + rg.util.RGStrings.humanize(Reflect.field(dp,type));
			}};
			break;
		case "piechart":
			var axes = opt1.axes, type = axes[axes.length - 1].type;
			opt1.options.label = { datapoint : function(dp,stats) {
				var v = Reflect.field(dp,type);
				return stats.tot != 0.0?Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1"):rg.util.RGStrings.humanize(v);
			}, datapointover : function(dp,stats) {
				return rg.util.Properties.humanize(null != property?Reflect.field(dp,property):type) + ": " + rg.util.RGStrings.humanize(Reflect.field(dp,type));
			}};
			break;
		case "leaderboard":
			var axes = opt1.axes, type = axes[axes.length - 1].type;
			opt1.options.label = { datapointover : function(dp,stats) {
				var v = Reflect.field(dp,type);
				return stats.tot != 0.0?Floats.format(Math.round(1000 * v / stats.tot) / 10,"P:1"):rg.util.RGStrings.humanize(v);
			}, datapoint : function(dp,stats) {
				return rg.util.Properties.humanize(null != property?Reflect.field(dp,property):type) + ": " + rg.util.RGStrings.humanize(Reflect.field(dp,type));
			}};
			break;
		}
		handler1(opt1);
	});
	chain.execute(opt);
}
rg.controller.MVPOptions.prototype.__class__ = rg.controller.MVPOptions;
rg.controller.info.InfoDomType = function(p) {
}
rg.controller.info.InfoDomType.__name__ = ["rg","controller","info","InfoDomType"];
rg.controller.info.InfoDomType.filters = function() {
	return [{ field : "visualization", validator : function(v) {
		return Arrays.exists(rg.controller.Visualizations.visualizations,v.toLowerCase());
	}, filter : function(v) {
		return [{ value : Arrays.exists(rg.controller.Visualizations.html,v.toLowerCase())?rg.controller.info.DomKind.Html:rg.controller.info.DomKind.Svg, field : "kind"}];
	}}];
}
rg.controller.info.InfoDomType.prototype.kind = null;
rg.controller.info.InfoDomType.prototype.__class__ = rg.controller.info.InfoDomType;
rg.controller.info.DomKind = { __ename__ : ["rg","controller","info","DomKind"], __constructs__ : ["Html","Svg"] }
rg.controller.info.DomKind.Html = ["Html",0];
rg.controller.info.DomKind.Html.toString = $estr;
rg.controller.info.DomKind.Html.__enum__ = rg.controller.info.DomKind;
rg.controller.info.DomKind.Svg = ["Svg",1];
rg.controller.info.DomKind.Svg.toString = $estr;
rg.controller.info.DomKind.Svg.__enum__ = rg.controller.info.DomKind;
Objects = function() { }
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
			i[key] = (Objects.interpolateByName(key,va))(va,Reflect.field(b,key));
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
Objects.interpolateByName = function(k,v) {
	return Std["is"](v,String) && Objects._reCheckKeyIsColor.match(k)?thx.color.Colors.interpolatef:Dynamics.interpolatef;
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
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Objects.hx", lineNumber : 245, className : "Objects", methodName : "formatf"});
			return $r;
		}(this));
	}
}
Objects.prototype.__class__ = Objects;
rg.view.svg.chart.PieChart = function(panel) {
	if( panel === $_ ) return;
	rg.view.svg.chart.Chart.call(this,panel);
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
	this.labelOrientation = rg.view.svg.widget.LabelOrientation.Orthogonal;
	this.labelDontFlip = true;
}
rg.view.svg.chart.PieChart.__name__ = ["rg","view","svg","chart","PieChart"];
rg.view.svg.chart.PieChart.__super__ = rg.view.svg.chart.Chart;
for(var k in rg.view.svg.chart.Chart.prototype ) rg.view.svg.chart.PieChart.prototype[k] = rg.view.svg.chart.Chart.prototype[k];
rg.view.svg.chart.PieChart.prototype.innerRadius = null;
rg.view.svg.chart.PieChart.prototype.outerRadius = null;
rg.view.svg.chart.PieChart.prototype.overRadius = null;
rg.view.svg.chart.PieChart.prototype.labelRadius = null;
rg.view.svg.chart.PieChart.prototype.tooltipRadius = null;
rg.view.svg.chart.PieChart.prototype.arcNormal = null;
rg.view.svg.chart.PieChart.prototype.arcStart = null;
rg.view.svg.chart.PieChart.prototype.arcBig = null;
rg.view.svg.chart.PieChart.prototype.pie = null;
rg.view.svg.chart.PieChart.prototype.radius = null;
rg.view.svg.chart.PieChart.prototype.stats = null;
rg.view.svg.chart.PieChart.prototype.variableDependent = null;
rg.view.svg.chart.PieChart.prototype.gradientLightness = null;
rg.view.svg.chart.PieChart.prototype.displayGradient = null;
rg.view.svg.chart.PieChart.prototype.animationDelay = null;
rg.view.svg.chart.PieChart.prototype.labelOrientation = null;
rg.view.svg.chart.PieChart.prototype.labelDontFlip = null;
rg.view.svg.chart.PieChart.prototype.labels = null;
rg.view.svg.chart.PieChart.prototype.mouseClick = null;
rg.view.svg.chart.PieChart.prototype.setVariables = function(variableIndependents,variableDependents) {
	this.variableDependent = variableDependents[0];
}
rg.view.svg.chart.PieChart.prototype.resize = function() {
	rg.view.svg.chart.Chart.prototype.resize.call(this);
	this.radius = Math.min(this.width,this.height) / 2;
	this.arcStart = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.innerRadius);
	this.arcNormal = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.outerRadius);
	this.arcBig = thx.svg.Arc.fromAngleObject().innerRadius(this.radius * this.innerRadius).outerRadius(this.radius * this.overRadius);
	if(this.width > this.height) this.g.attr("transform").string("translate(" + (this.width / 2 - this.height / 2) + ",0)"); else this.g.attr("transform").string("translate(0," + (this.height / 2 - this.width / 2) + ")");
}
rg.view.svg.chart.PieChart.prototype.data = function(dp) {
	var pv = this.variableDependent.type;
	dp = Arrays.filter(dp,function(dp1) {
		return Reflect.field(dp1,pv) > 0;
	});
	this.stats = this.variableDependent.stats;
	var choice = this.g.selectAll("g.group").data(this.pief(dp),$closure(this,"id"));
	var enter = choice.enter();
	var arc = enter.append("svg:g").attr("class").stringf(function(d,i) {
		return "group fill-" + i;
	}).attr("transform").string("translate(" + this.radius + "," + this.radius + ")");
	var path = arc.append("svg:path").attr("class").string("slice");
	if(this.displayGradient) arc.eachNode($closure(this,"applyGradient"));
	if(this.animated) {
		path.attr("d").stringf(this.arcShape(this.arcStart));
		arc.eachNode($closure(this,"fadein")).onNode("mouseover.animation",$closure(this,"highlight")).onNode("mouseout.animation",$closure(this,"backtonormal"));
	} else path.attr("d").stringf(this.arcShape(this.arcNormal));
	arc.onNode("mouseover.label",$closure(this,"onMouseOver"));
	if(null != this.labelDataPoint) arc.eachNode($closure(this,"appendLabel"));
	if(null != this.mouseClick) arc.onNode("click.user",$closure(this,"onMouseClick"));
	choice.update().select("path").transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
	if(null != this.labelDataPoint) choice.update().eachNode($closure(this,"updateLabel"));
	choice.exit().eachNode($closure(this,"removeLabel")).remove();
}
rg.view.svg.chart.PieChart.prototype.onMouseOver = function(dom,i) {
	if(null == this.labelDataPointOver) return;
	var d = Reflect.field(dom,"__data__"), text = this.labelDataPointOver(d.dp,this.stats);
	if(null == text) this.tooltip.hide(); else {
		var a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2, r = this.radius * this.tooltipRadius;
		this.tooltip.show();
		this.tooltip.setText(text.split("\n"));
		this.moveTooltip(this.width / 2 + Math.cos(a) * r,this.height / 2 + Math.sin(a) * r);
	}
}
rg.view.svg.chart.PieChart.prototype.onMouseClick = function(dom,i) {
	var d = Reflect.field(dom,"__data__");
	this.mouseClick(d.dp);
}
rg.view.svg.chart.PieChart.prototype.removeLabel = function(dom,i) {
	var n = thx.js.Dom.selectNode(dom), d = Reflect.field(dom,"__data__");
	var label = this.labels.get(d.id);
	label.destroy();
	this.labels.remove(d.id);
}
rg.view.svg.chart.PieChart.prototype.updateLabel = function(dom,i) {
	var n = thx.js.Dom.selectNode(dom), d = Reflect.field(dom,"__data__"), label = this.labels.get(d.id), r = this.radius * this.labelRadius, a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
	label.setText(this.labelDataPoint(d.dp,this.stats));
	label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
}
rg.view.svg.chart.PieChart.prototype.appendLabel = function(dom,i) {
	var n = thx.js.Dom.selectNode(dom), label = new rg.view.svg.widget.Label(n,this.labelDontFlip,true,true), d = Reflect.field(dom,"__data__"), r = this.radius * this.labelRadius, a = d.startAngle + (d.endAngle - d.startAngle) / 2 - Math.PI / 2;
	label.setOrientation(this.labelOrientation);
	switch( (this.labelOrientation)[1] ) {
	case 0:
		label.setAnchor(rg.view.svg.widget.GridAnchor.Center);
		break;
	case 1:
		label.setAnchor(rg.view.svg.widget.GridAnchor.Left);
		break;
	case 2:
		label.setAnchor(rg.view.svg.widget.GridAnchor.Top);
		break;
	}
	label.setText(this.labelDataPoint(d.dp,this.stats));
	label.place(-2.5 + Math.cos(a) * r,-2.5 + Math.sin(a) * r,57.29577951308232088 * a);
	this.labels.set(d.id,label);
}
rg.view.svg.chart.PieChart.prototype.applyGradient = function(n,i) {
	var gn = thx.js.Dom.selectNodeData(n), dp = Reflect.field(n,"__data__"), id = dp.id;
	if(this.g.select("defs").select("#rg_pie_gradient_" + id).empty()) {
		var slice = gn.select("path.slice"), shape = this.arcNormal.shape(Reflect.field(n,"__data__")), t = gn.append("svg:path").attr("d").string(shape), box = t.node().getBBox();
		t.remove();
		var color = rg.view.svg.util.RGColors.parse(slice.style("fill").get(),"#cccccc"), scolor = thx.color.Hsl.darker(thx.color.Hsl.toHsl(color),this.gradientLightness);
		var ratio = box.width / box.height, cx = -box.x * 100 / box.width / ratio, cy = -box.y * 100 / box.height / ratio;
		var r = 100 * (box.width > box.height?Math.min(1,this.radius * this.outerRadius / box.width):Math.max(1,this.radius * this.outerRadius / box.width));
		var stops = this.g.select("defs").append("svg:radialGradient").attr("id").string("rg_pie_gradient_" + id).attr("cx").string(cx * ratio + "%").attr("cy").string(cy + "%").attr("gradientTransform").string("scale(1 " + ratio + ")").attr("r").string(r + "%");
		stops.append("svg:stop").attr("offset").string(100 * this.innerRadius + "%").attr("stop-color").string(color.toRgbString()).attr("stop-opacity")["float"](1);
		stops.append("svg:stop").attr("offset").string("100%").attr("stop-color").string(scolor.toRgbString()).attr("stop-opacity")["float"](1);
	}
	gn.select("path.slice").attr("style").string("fill:url(#rg_pie_gradient_" + id + ")");
}
rg.view.svg.chart.PieChart.prototype.fadein = function(n,i) {
	var gn = thx.js.Dom.selectNodeData(n), shape = this.arcNormal.shape(Reflect.field(n,"__data__"));
	gn.selectAll("path.slice").transition().ease(this.animationEase).duration(null,this.animationDuration).delay(null,this.animationDelay).attr("d").string(shape);
}
rg.view.svg.chart.PieChart.prototype.highlight = function(d,i) {
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcBig));
}
rg.view.svg.chart.PieChart.prototype.backtonormal = function(d,i) {
	var slice = thx.js.Dom.selectNodeData(d).selectAll("path");
	slice.transition().ease(this.animationEase).duration(null,this.animationDuration).attr("d").stringf(this.arcShape(this.arcNormal));
}
rg.view.svg.chart.PieChart.prototype.id = function(dp,i) {
	return dp.id;
}
rg.view.svg.chart.PieChart.prototype.makeid = function(dp) {
	var c = Objects.clone(dp);
	Reflect.deleteField(c,this.variableDependent.type);
	return haxe.Md5.encode(Dynamics.string(c));
}
rg.view.svg.chart.PieChart.prototype.arcShape = function(a) {
	return function(d,i) {
		return a.shape(d);
	};
}
rg.view.svg.chart.PieChart.prototype.pief = function(dp) {
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
rg.view.svg.chart.PieChart.prototype.destroy = function() {
	var $it0 = this.labels.iterator();
	while( $it0.hasNext() ) {
		var label = $it0.next();
		label.destroy();
	}
	rg.view.svg.chart.Chart.prototype.destroy.call(this);
}
rg.view.svg.chart.PieChart.prototype.__class__ = rg.view.svg.chart.PieChart;
rg.view.svg.chart.StreamEffects = function() { }
rg.view.svg.chart.StreamEffects.__name__ = ["rg","view","svg","chart","StreamEffects"];
rg.view.svg.chart.StreamEffects.getLightness = function(p,alt) {
	if(null == p) return alt; else return Std.parseFloat(p);
}
rg.view.svg.chart.StreamEffects.parse = function(s) {
	var parts = s.toLowerCase().split("-");
	switch(parts.shift()) {
	case "gradient":case "gradientv":case "gradientvert":case "gradientvertical":
		return rg.view.svg.chart.StreamEffect.GradientVertical(rg.view.svg.chart.StreamEffects.getLightness(parts.pop(),0.75));
	case "gradienth":case "gradienthoriz":case "gradienthorizontal":
		return rg.view.svg.chart.StreamEffect.GradientHorizontal(rg.view.svg.chart.StreamEffects.getLightness(parts.pop(),0.75));
	default:
		return rg.view.svg.chart.StreamEffect.NoEffect;
	}
}
rg.view.svg.chart.StreamEffects.prototype.__class__ = rg.view.svg.chart.StreamEffects;
Lambda = function() { }
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
Lambda.prototype.__class__ = Lambda;
rg.data.Tickmark = function(value,major,delta) {
	if( value === $_ ) return;
	this.value = value;
	this.major = major;
	this.delta = delta;
}
rg.data.Tickmark.__name__ = ["rg","data","Tickmark"];
rg.data.Tickmark.prototype.delta = null;
rg.data.Tickmark.prototype.major = null;
rg.data.Tickmark.prototype.value = null;
rg.data.Tickmark.prototype.label = null;
rg.data.Tickmark.prototype.getDelta = function() {
	return this.delta;
}
rg.data.Tickmark.prototype.getMajor = function() {
	return this.major;
}
rg.data.Tickmark.prototype.getValue = function() {
	return this.value;
}
rg.data.Tickmark.prototype.getLabel = function() {
	return rg.util.RGStrings.humanize(this.getValue());
}
rg.data.Tickmark.prototype.toString = function() {
	return rg.data.Tickmarks.string(this);
}
rg.data.Tickmark.prototype.__class__ = rg.data.Tickmark;
rg.data.Tickmark.__interfaces__ = [rg.data.ITickmark];
thx.color.Colors = function() { }
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
thx.color.Colors.prototype.__class__ = thx.color.Colors;
rg.view.svg.chart.StreamEffect = { __ename__ : ["rg","view","svg","chart","StreamEffect"], __constructs__ : ["NoEffect","GradientHorizontal","GradientVertical"] }
rg.view.svg.chart.StreamEffect.NoEffect = ["NoEffect",0];
rg.view.svg.chart.StreamEffect.NoEffect.toString = $estr;
rg.view.svg.chart.StreamEffect.NoEffect.__enum__ = rg.view.svg.chart.StreamEffect;
rg.view.svg.chart.StreamEffect.GradientHorizontal = function(lightness) { var $x = ["GradientHorizontal",1,lightness]; $x.__enum__ = rg.view.svg.chart.StreamEffect; $x.toString = $estr; return $x; }
rg.view.svg.chart.StreamEffect.GradientVertical = function(lightness) { var $x = ["GradientVertical",2,lightness]; $x.__enum__ = rg.view.svg.chart.StreamEffect; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator = { __ename__ : ["thx","svg","LineInterpolator"], __constructs__ : ["Linear","StepBefore","StepAfter","Basis","BasisOpen","BasisClosed","Cardinal","CardinalOpen","CardinalClosed","Monotone"] }
thx.svg.LineInterpolator.Linear = ["Linear",0];
thx.svg.LineInterpolator.Linear.toString = $estr;
thx.svg.LineInterpolator.Linear.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.StepBefore = ["StepBefore",1];
thx.svg.LineInterpolator.StepBefore.toString = $estr;
thx.svg.LineInterpolator.StepBefore.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.StepAfter = ["StepAfter",2];
thx.svg.LineInterpolator.StepAfter.toString = $estr;
thx.svg.LineInterpolator.StepAfter.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Basis = ["Basis",3];
thx.svg.LineInterpolator.Basis.toString = $estr;
thx.svg.LineInterpolator.Basis.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.BasisOpen = ["BasisOpen",4];
thx.svg.LineInterpolator.BasisOpen.toString = $estr;
thx.svg.LineInterpolator.BasisOpen.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.BasisClosed = ["BasisClosed",5];
thx.svg.LineInterpolator.BasisClosed.toString = $estr;
thx.svg.LineInterpolator.BasisClosed.__enum__ = thx.svg.LineInterpolator;
thx.svg.LineInterpolator.Cardinal = function(tension) { var $x = ["Cardinal",6,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.CardinalOpen = function(tension) { var $x = ["CardinalOpen",7,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.CardinalClosed = function(tension) { var $x = ["CardinalClosed",8,tension]; $x.__enum__ = thx.svg.LineInterpolator; $x.toString = $estr; return $x; }
thx.svg.LineInterpolator.Monotone = ["Monotone",9];
thx.svg.LineInterpolator.Monotone.toString = $estr;
thx.svg.LineInterpolator.Monotone.__enum__ = thx.svg.LineInterpolator;
rg.view.svg.widget.GridAnchor = { __ename__ : ["rg","view","svg","widget","GridAnchor"], __constructs__ : ["TopLeft","Top","TopRight","Left","Center","Right","BottomLeft","Bottom","BottomRight"] }
rg.view.svg.widget.GridAnchor.TopLeft = ["TopLeft",0];
rg.view.svg.widget.GridAnchor.TopLeft.toString = $estr;
rg.view.svg.widget.GridAnchor.TopLeft.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Top = ["Top",1];
rg.view.svg.widget.GridAnchor.Top.toString = $estr;
rg.view.svg.widget.GridAnchor.Top.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.TopRight = ["TopRight",2];
rg.view.svg.widget.GridAnchor.TopRight.toString = $estr;
rg.view.svg.widget.GridAnchor.TopRight.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Left = ["Left",3];
rg.view.svg.widget.GridAnchor.Left.toString = $estr;
rg.view.svg.widget.GridAnchor.Left.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Center = ["Center",4];
rg.view.svg.widget.GridAnchor.Center.toString = $estr;
rg.view.svg.widget.GridAnchor.Center.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Right = ["Right",5];
rg.view.svg.widget.GridAnchor.Right.toString = $estr;
rg.view.svg.widget.GridAnchor.Right.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.BottomLeft = ["BottomLeft",6];
rg.view.svg.widget.GridAnchor.BottomLeft.toString = $estr;
rg.view.svg.widget.GridAnchor.BottomLeft.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.Bottom = ["Bottom",7];
rg.view.svg.widget.GridAnchor.Bottom.toString = $estr;
rg.view.svg.widget.GridAnchor.Bottom.__enum__ = rg.view.svg.widget.GridAnchor;
rg.view.svg.widget.GridAnchor.BottomRight = ["BottomRight",8];
rg.view.svg.widget.GridAnchor.BottomRight.toString = $estr;
rg.view.svg.widget.GridAnchor.BottomRight.__enum__ = rg.view.svg.widget.GridAnchor;
thx.svg.Symbol = function() { }
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
thx.svg.Symbol.prototype.__class__ = thx.svg.Symbol;
thx.math.Equations = function() { }
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
thx.math.Equations.prototype.__class__ = thx.math.Equations;
rg.controller.info.InfoLabelPivotTable = function(p) {
	if( p === $_ ) return;
	rg.controller.info.InfoLabelAxis.call(this);
}
rg.controller.info.InfoLabelPivotTable.__name__ = ["rg","controller","info","InfoLabelPivotTable"];
rg.controller.info.InfoLabelPivotTable.__super__ = rg.controller.info.InfoLabelAxis;
for(var k in rg.controller.info.InfoLabelAxis.prototype ) rg.controller.info.InfoLabelPivotTable.prototype[k] = rg.controller.info.InfoLabelAxis.prototype[k];
rg.controller.info.InfoLabelPivotTable.filters = function() {
	return [{ field : "total", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null},{ field : "totalover", validator : function(v) {
		return Reflect.isFunction(v);
	}, filter : null}].concat(rg.controller.info.InfoLabelAxis.filters());
}
rg.controller.info.InfoLabelPivotTable.prototype.total = null;
rg.controller.info.InfoLabelPivotTable.prototype.totalover = null;
rg.controller.info.InfoLabelPivotTable.prototype.__class__ = rg.controller.info.InfoLabelPivotTable;
$_ = {}
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
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
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
thx.cultures.EnUS.getCulture();
thx.languages.En.getLanguage();
rg.view.svg.util.SymbolCache.cache = new rg.view.svg.util.SymbolCache();
{
	var JSON;
	if(null != (JSON = JSON)) {
		thx.json.Json.nativeDecoder = JSON.parse;
		thx.json.Json.nativeEncoder = JSON.stringify;
	}
}
{
	var _PNAME = "((?:\\.?#?\\w+)+)", _LIMIT = "(?:\\s*[(]\\s*(\\d+)(?:\\s*,\\s*(ASC|DESC))?\\s*[)])?", _COND = "(?:\\s*([=])\\s*(.+))";
	rg.data.source.rgquery.QueryParser.TOKEN_INDIVIDUAL_PARSE = new EReg("^" + _PNAME + _LIMIT + _COND + "?" + "$","i");
	rg.data.source.rgquery.QueryParser.TOKEN_FIRST_PARSE = new EReg("^" + _PNAME + _LIMIT + _COND + "$","i");
	rg.data.source.rgquery.QueryParser.TOKEN_CONDITION_PARSE = new EReg("^" + _PNAME + _COND + "$","i");
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
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
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
	rg.controller.Visualizations.layoutDefault = new Hash();
	rg.controller.Visualizations.layoutType = new Hash();
	rg.controller.Visualizations.layoutArgs = new Hash();
	rg.controller.Visualizations.layoutDefault.set("barchart","cartesian");
	rg.controller.Visualizations.layoutDefault.set("geo","simple");
	rg.controller.Visualizations.layoutDefault.set("linechart","cartesian");
	rg.controller.Visualizations.layoutDefault.set("streamgraph","x");
	rg.controller.Visualizations.layoutDefault.set("piechart","simple");
	rg.controller.Visualizations.layoutDefault.set("funnelchart","simple");
	rg.controller.Visualizations.layoutDefault.set("scattergraph","cartesian");
	rg.controller.Visualizations.layoutDefault.set("heatgrid","cartesian");
	rg.controller.Visualizations.layoutType.set("simple",rg.view.layout.LayoutSimple);
	rg.controller.Visualizations.layoutType.set("cartesian",rg.view.layout.LayoutCartesian);
	rg.controller.Visualizations.layoutType.set("x",rg.view.layout.LayoutX);
}
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
rg.controller.info.InfoMap.GEOGSON_BASE_URL = "http://api.reportgrid.com/geo/json/";
thx.math.scale.Linears._default_color = new thx.color.Hsl(0,0,0);
js.Lib.onerror = null;
thx.js.Dom.doc = (function() {
	var g = new thx.js.Group([js.Lib.document]), gs = thx.js.Selection.create([g]);
	g.parentNode = gs.parentNode = js.Lib.document.documentElement;
	return gs;
})();
thx.js.Dom.selectionEngine = new thx.js.SizzleEngine();
rg.view.html.widget.PivotTable.defaultColorStart = new thx.color.Hsl(210,1,1);
rg.view.html.widget.PivotTable.defaultColorEnd = new thx.color.Hsl(210,1,0.5);
rg.data.AxisTime.snapping = { minute : [{ to : 10, s : 1},{ to : 20, s : 2},{ to : 30, s : 5},{ to : 60, s : 10},{ to : 120, s : 30},{ to : 240, s : 60},{ to : 960, s : 240}], minutetop : 480, hour : [{ to : 12, s : 1},{ to : 24, s : 6},{ to : 60, s : 12},{ to : 240, s : 24},{ to : 480, s : 48},{ to : 960, s : 120}], hourtop : 240, month : [{ to : 13, s : 1},{ to : 25, s : 2},{ to : 49, s : 4},{ to : 73, s : 6}], monthtop : 12, year : [{ to : 10, s : 1},{ to : 20, s : 2},{ to : 50, s : 5}], yeartop : 10};
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
rg.view.svg.util.SymbolCache.DEFAULT_SYMBOL = "circle";
thx.js.Svg._usepage = new EReg("WebKit","").match(js.Lib.window.navigator.userAgent);
thx.math.Const.TWO_PI = 6.283185307179586477;
thx.math.Const.PI = 3.141592653589793238;
thx.math.Const.HALF_PI = 1.570796326794896619;
thx.math.Const.TO_DEGREE = 57.29577951308232088;
thx.math.Const.TO_RADIAN = 0.01745329251994329577;
thx.math.Const.LN10 = 2.302585092994046;
Floats._reparse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
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
rg.view.layout.LayoutX.ALT_RIGHT = 20;
rg.view.layout.LayoutX.ALT_LEFT = 20;
rg.view.layout.LayoutX.ALT_TOP = 8;
rg.view.layout.LayoutX.ALT_BOTTOM = 8;
rg.controller.App.lastid = 0;
thx.error.Error.errorPositionPattern = "{0}.{1}({2}): ";
rg.util.RGStrings.range = new EReg("(\\d+(?:\\.\\d+)?|\\.\\d+)?-(\\d+(?:\\.\\d+|\\.\\d+)?)?","");
thx.geom.Contour.contourDx = [1,0,1,1,-1,0,-1,1,0,0,0,0,-1,0,-1,null];
thx.geom.Contour.contourDy = [0,-1,0,0,0,-1,0,0,1,-1,1,1,0,-1,0,null];
thx.js.AccessAttribute.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
rg.util.Properties.EVENT_PATTERN = new EReg("^(\\.?[^.]+)","");
rg.util.Properties.TIME_TOKEN = "#time:";
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
rg.data.source.rgquery.QueryParser.TOKEN_SPLIT = new EReg("and","gi");
rg.view.layout.LayoutCartesian.ALT_RIGHT = 20;
rg.view.layout.LayoutCartesian.ALT_LEFT = 20;
rg.view.layout.LayoutCartesian.ALT_TOP = 8;
rg.view.layout.LayoutCartesian.ALT_BOTTOM = 8;
rg.view.layout.LayoutCartesian.REYAXIS = new EReg("^y(\\d+)$","");
rg.view.layout.LayoutCartesian.REYINDEX = new EReg("^y(\\d+)","");
rg.view.layout.LayoutCartesian.REYTITLE = new EReg("^y(\\d+)title$","");
rg.view.svg.chart.StreamGraph.vid = 0;
thx.js.AccessStyle.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
thx.js.BaseTransition._id = 0;
thx.js.BaseTransition._inheritid = 0;
Ints._reparse = new EReg("^([+-])?\\d+$","");
thx.xml.Namespace.prefix = (function() {
	var h = new Hash();
	h.set("svg","http://www.w3.org/2000/svg");
	h.set("xhtml","http://www.w3.org/1999/xhtml");
	h.set("xlink","http://www.w3.org/1999/xlink");
	h.set("xml","http://www.w3.org/XML/1998/namespace");
	h.set("xmlns","http://www.w3.org/2000/xmlns/");
	return h;
})();
rg.view.svg.chart.Coords.retransform = new EReg("translate\\(\\s*(\\d+(?:\\.\\d+)?)\\s*(?:,\\s*(\\d+(?:\\.\\d+)?)\\s*)?\\)","");
rg.controller.Visualizations.html = ["pivottable","leaderboard"];
rg.controller.Visualizations.svg = ["barchart","geo","funnelchart","heatgrid","linechart","piechart","scattergraph","streamgraph"];
rg.controller.Visualizations.visualizations = rg.controller.Visualizations.svg.concat(rg.controller.Visualizations.html);
rg.controller.Visualizations.layouts = ["simple","cartesian","x"];
rg.controller.info.InfoPivotTable.defaultStartColor = new thx.color.Hsl(210,1,1);
rg.controller.info.InfoPivotTable.defaultEndColor = new thx.color.Hsl(210,1,0.5);
thx.svg.LineInternals.arcOffset = -Math.PI / 2;
thx.svg.LineInternals.arcMax = 2 * Math.PI - 1e-6;
thx.svg.LineInternals._lineBasisBezier1 = [0,2 / 3,1 / 3,0];
thx.svg.LineInternals._lineBasisBezier2 = [0,1 / 3,2 / 3,0];
thx.svg.LineInternals._lineBasisBezier3 = [0,1 / 6,2 / 3,1 / 6];
rg.controller.factory.FactoryLayout.LIMIT_WIDTH = 10;
rg.controller.factory.FactoryLayout.LIMIT_HEIGHT = 10;
rg.controller.factory.FactoryLayout.DEFAULT_WIDTH = 400;
rg.controller.factory.FactoryLayout.DEFAULT_HEIGHT = 300;
Objects._reCheckKeyIsColor = new EReg("color\\b|\\bbackground\\b|\\bstroke\\b|\\bfill\\b","");
thx.color.Colors._reParse = new EReg("^(?:(hsl|rgb|rgba|cmyk)\\(([^)]+)\\))|(?:(?:0x|#)([a-f0-9]{3,6}))$","i");
thx.svg.Symbol.sqrt3 = Math.sqrt(3);
thx.svg.Symbol.tan30 = Math.tan(30 * Math.PI / 180);
rg.JSBridge.main()