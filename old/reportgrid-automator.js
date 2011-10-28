var JSON;
if(!JSON)JSON={};
(function(){"use strict";function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());

//ReportGrid Automator

var TrackingAutomator = window.TrackingAutomator || {};


(function() {
  var Semantics = [
    "click",
    "engagement",
    "attention"
  ];
  
  var EventHandler = {
    addEvent : function(el, e, f, cap) {
      try {
        el.addEventListener(e, f, cap);
      } catch(e) {}
    },
    attachEvent : function(el, e, f) {
      try {
        el.attachEvent("on" + e, f);
      } catch(e) {}
    },
    cancelBubbling : function(e) {
      if (e.cancelBubble) {
        e.cancelBubble = true;
      }
      else {
        e.stopPropagation();
      }
    },
    relatedTarget : function(e) {
      return (e.relatedTarget || e.toElement);
    },
    handler : function(el, e, f) {
      var executed = false;
      EventHandler.addEvent(el, e, function() { if (!executed) { executed = true; f(); } }, false);
      EventHandler.attachEvent(el, e, function() { if (!executed) { executed = true; f(); } });
    }
    
  },
  
  Data = {
    extract : function(el) {
      return el.dataset != null ? el.dataset.reportgrid : el.getAttribute("data-reportgrid");
    },
    parse : function(el) {
      var split =  Data.extract(el).split(":");
      var semanticName = Util.trim(split[0]); 
      Util.map(Semantics, function(semantic) {
        if (semantic == semanticName) {
          SemanticExtractor({element : el, semanticName :  semanticName, eventName : Util.trim(split[1]) });
        }
      });
    }
  },
  
  Util = {
    foldl :  function(a, init, f) {
      var result = init;
      for (var i=0; i < a.length; i++) {
        result = init == null ? a[i] : f(result, a[i]);
      }
      return result;
    },
    map : function(a, f) {
      var result = [];
      for (var i=0; i < a.length; i++) {
        result.push(f(a[i]));
      }
      return result;
    },
    getId : function(id) {
      return document.getElementById(id);
    },
    toDoubleQuote : function(s) {
      return s.replace(/'/g, '"')
    },
    toEventString : function(eventName, props) {
      var propString = "";
      for (var key in props) {
        propString += ',"' + key + '" : "' + props[key] + '"';
      }
      
      return '{ "events" : { "' + eventName + '" : { ' + propString.substring(1) + '} } }'
    },
    getElementIdentifier : function(element) {
      return Util.cssPath(element);
    },
    cssPath : function(el) {
      var id = el.getAttribute("id");
      if (id) return "#" + id;
      if (!(el instanceof Element)) return;
      var path = [];
      while (el.nodeType === Node.ELEMENT_NODE) {
          var selector = el.nodeName.toLowerCase();
          if (el.id) {
              selector += '#' + el.id;
          } else {
            var sib = el, nth = 1;
            while ((sib.previousSibling)){
              if (sib.previousSibling.nodeName == el.nodeName) {
                ++nth;
              }
              sib = sib.previousSibling;
            }
            selector += ":nth-child("+nth+")";
          }
          path.unshift(selector);
          el = el.parentNode;
      }
      return path.join(" > ");
    },
    trim : function(str) {
      return str.replace(/^\s+|\s+$/g,"");
    },
    getElementOffsets : function(el) {
      var xOffset = 0;
      var yOffset = 0;
      while(el.parentNode && el.parentNode.nodeName != "html") {
        xOffset += el.offsetLeft;
        yOffset += el.offsetTop;
        el = el.parentNode;
      }
      return {x : xOffset, y : yOffset};
    }
  },
  
  HoverDetector = function(element, onEnter, onExit) {
    var mouseIn = false;
    var uniqueNumber  = String(Math.round(Math.random() * 999999999));
    
    function setUnique(element, unique) {
      var hoverAttribute = element.getAttribute("hover-unique");
      if (hoverAttribute != null) unique = hoverAttribute + "," + unique;
      element.setAttribute("hover-unique", uniqueNumber);
      return element;
    }
    function confirmMouseEnter(enter) {
      if (!mouseIn) {
        mouseIn = true;
        enter();
      }
    }
    function confirmMouseExit(event, exit) {
      EventHandler.cancelBubbling(event);
      var target = EventHandler.relatedTarget(event);
      if (target == null || hasUnique(target) == false) {
        doMouseExit(exit);
      }
    }
    function hasUnique(element) {
      var uniqueAttribute = element.getAttribute("hover-unique");
      if (uniqueAttribute) {
        if (uniqueAttribute.indexOf(uniqueNumber) != -1) return true;
      }
      return false;
    }
    function doMouseExit(exit) {
      mouseIn = false;
      exit();
    }
    
    Util.map(element.getElementsByTagName("*"), function(e) { setUnique(e, unique); });
    EventHandler.handler(element, "mouseover", function(e) { confirmMouseEnter(onEnter);  });
    EventHandler.handler(element, "mouseout", function(e) {  confirmMouseExit(e, onExit); });
  },
  
  SemanticExtractor = function(data) {
    if (data.semanticName == "click") {
      EventHandler.handler(
        data.element, 
        "click", 
        function(e) { 
          newTrackingEvent(Util.toEventString(data.eventName, { element : Util.getElementIdentifier(data.element) })) 
        }, 
        false
      );
    } else if (data.semanticName == "engagement") {
      EngagementDetector(data.element, data.eventName);
    } else if (data.semanticName == "attention") {
      AttentionAggregator(data);
    }
  },
  
  AttentionAggregator = function(data) {
    EventHandler.handler(data.element, "mousemove", function(e) {
      var offsets = Util.getElementOffsets(data.element);
      Util.getId("mouse-position").innerHTML = "X : " + (Number(e.pageX) - offsets.x) + " Y : " + (Number(e.pageY) - offsets.y);
      
      newTrackingEvent('{ "events" : { "' + data.eventName + "_" + Util.getElementIdentifier(data.element) + '" : { "location" : { "x" : "' + (Number(e.pageX) - offsets.x) + '", "y" : "' + (Number(e.pageY) - offsets.y) + '"  } } } }');
    });
  },
  
  EngagementDetector = function(element, eventString) {
    var timer = null;
    var seconds = 0;
    return HoverDetector(
      element,
      function() { timer = setInterval(function() { 
        if (seconds < 119) {
          ++seconds; 
          newTrackingEvent(Util.toEventString(eventString, { 
            element : Util.getElementIdentifier(element),
            duration : String(seconds)
          })); 
        } else window.clearInterval(timer);
      }, 1000); },
      function() { window.clearInterval(timer); }
    );
  },
  
  newTrackingEvent = function(eventString) {
    alert(eventString);
  },
  
  addListeners = function(el) {
    var data = Data.parse(el);
  };
  
  
  
  
  
  
  
  
  
  
  
  TrackingAutomator.init = function() {
    TrackingAutomator.elements = Util.map(Util.foldl(document.getElementsByTagName("*"), [], function(a, b) {
      if (Data.extract(b)) { a.push(b); } return a;
    }), addListeners);
  };

  EventHandler.handler(window, "load", function() { 
    TrackingAutomator.path = "/foo"
    EventHandler.handler  = document.getElementsByTagName("body")[0].addEventListener ? EventHandler.addEvent : EventHandler.attachEvent;
    TrackingAutomator.init(); 
  }, false);
})();