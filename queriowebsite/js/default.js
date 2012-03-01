$(document).ready(function(){
  
  /*
  function swapImage(index) {
    $(".appselector img").attr("src", "imagesquerio/yourappdot.png");
    $(".appselector:nth-child("+index+") img").attr("src", "imagesquerio/yourappdot-alt.png");
  }
  $(".appselector").click(function(e){
    e.preventDefault();
    var index = $(this).index();
    swapImage(index+1);
    $(".yourapp ul").animate({
      left : - index * 850
    })
    return false;
  });
  
  $(".yoxview").yoxview({
    autoHideInfo : false,
  });
  
  var slides = 3,
      width  = 1090,
      index  = 0;
  function slide()
  {
    $("#appslider").animate({
      left : - index * width
    })
  }
  $("#rightarrow").click(function(){
    if(index == slides-1)
      index=0;
    else
      index++;
    slide();
  })
  $("#leftarrow").click(function(){
    if(index == 0)
      index=slides-1;
    else
      index--;
    slide();
  })
  */
/*
  var last;
  $(".appselector a").click(function(e){
    var selector=$(this).attr("class");
    var current=$(".bodyappbox."+selector);
    if(last.hasClass(selector))
      return false;
    last.fadeOut();
    last=current.fadeIn();
    return false
  });
last=$(".bodyappbox:first").css("display", "block")
*/

$("#background-apps .box-alt").css('opacity', 0);
$("#button-yourapp").bind("mouseenter", function() {
  $("#button-yourapp").addClass("active");
  $("#button-yourapponquerio").removeClass("active");

  $("#background-apps .box-alt").stop().animate({
    opacity : 0
  });
  $("#background-apps .box").stop().animate({
    opacity : 1
  });
})

$("#button-yourapponquerio").bind("mouseenter", function() {
  $("#button-yourapponquerio").addClass("active");
  $("#button-yourapp").removeClass("active");

  $("#background-apps .box").stop().animate({
    opacity : 0
  });
  $("#background-apps .box-alt").stop().animate({
    opacity : 1
  });
})

$(".app-link").bind("mouseenter", function() {
  var links = $(".app-link"),
      len = links.length,
      index = links.index(this),
      container = $('#background-apps .app-container'),
      width = parseFloat(container.css("width"));
  links.removeClass("active");
  $(this).addClass("active");
  container.animate({
    left : -index * width / len
  })
})



  // HOW IT WORKS
  $(".capture-lg").mouseover(function(){
      $("#hiw-panel-slider").animate({
          'left': '0'
          }, {queue: false}
          );
      $(".hiw-menu-text-1 p").animate({
        'opacity': '1.0'
        }, {queue: false}
        );
      $(".hiw-menu-text-2 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".hiw-menu-text-3 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".hiw-menu-text-4 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".capture-lg").addClass("capture-lg-alt")
      $(".enrich-lg").removeClass("enrich-lg-alt")
      $(".analyze-lg").removeClass("analyze-lg-alt")
      $(".act-lg").removeClass("act-lg-alt")
      }
      );
  
  $(".enrich-lg").mouseover(function(){
      $("#hiw-panel-slider").animate({
          'left': '-1050'
          }, {queue: false}
          );
      $(".hiw-menu-text-1 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".hiw-menu-text-2 p").animate({
        'opacity': '1.0'
        }, {queue: false}
        );
      $(".hiw-menu-text-3 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".hiw-menu-text-4 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".capture-lg").removeClass("capture-lg-alt")
      $(".enrich-lg").addClass("enrich-lg-alt")
      $(".analyze-lg").removeClass("analyze-lg-alt")
      $(".act-lg").removeClass("act-lg-alt")
      }
      );
  
  $(".analyze-lg").mouseover(function(){
      $("#hiw-panel-slider").animate({
          'left': '-2100'
          }, {queue: false}
          );
      $(".hiw-menu-text-1 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".hiw-menu-text-2 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".hiw-menu-text-3 p").animate({
        'opacity': '1.'
        }, {queue: false}
        );
      $(".hiw-menu-text-4 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".capture-lg").removeClass("capture-lg-alt")
      $(".enrich-lg").removeClass("enrich-lg-alt")
      $(".analyze-lg").addClass("analyze-lg-alt")
      $(".act-lg").removeClass("act-lg-alt")
      }
      );
  
  $(".act-lg").mouseover(function(){
      $("#hiw-panel-slider").animate({
          'left': '-3150'
          }, {queue: false}
          );
      $(".hiw-menu-text-1 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".hiw-menu-text-2 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".hiw-menu-text-3 p").animate({
        'opacity': '.3'
        }, {queue: false}
        );
      $(".hiw-menu-text-4 p").animate({
        'opacity': '1.'
        }, {queue: false}
        );
      $(".capture-lg").removeClass("capture-lg-alt")
      $(".enrich-lg").removeClass("enrich-lg-alt")
      $(".analyze-lg").removeClass("analyze-lg-alt")
      $(".act-lg").addClass("act-lg-alt")
      }
      );

// HOW IT WORK CAPTURE
$(".hiw-pane").mouseover(function(){
      $(".hiw-text-pane").css({
        'display': 'none'
        }, {queue: false}
        );
      
      var id = $(this).attr("id").split("-").pop();
      
      $("#hiw-text-"+id).css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );


//HOW IT WORKS ENRICH
$(".hiw-enrich-panel").mouseover(function(){
      $(".hiw-text-pane3").css({
        'display': 'none'
        }, {queue: false}
        );
       
      var idenrich = $(this).attr("id").split("-").pop();
      
      $("#hiw-enrich-"+idenrich).css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );

// HOW IT WORK ANALYZE
$(".hiw-analyze-icon").mouseover(function(){
      $(".hiw-text-pane4").css({
        'display': 'none'
        }, {queue: false}
        );
      $(".analyze-script").css({
        'display': 'none'
        }, {queue: false}
        );
      
      var idanalyze = $(this).attr("id").split("-").pop();
      
      $("#hiw-analyze-"+idanalyze).css({
        'display': 'block'
        }, {queue: false}
        );
      $("#analyze-script-"+idanalyze).css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );      
      
// HOW IT WORK ACT
$(".hiw-act-app").mouseover(function(){
      $(".hiw-text-pane2").css({
        'display': 'none'
        }, {queue: false}
        );
      $(".hiw-act-app-pic").css({
        'display': 'none'
        }, {queue: false}
        );
       
      var idact = $(this).attr("id").split("-").pop();
      
      $("#hiw-act-"+idact).css({
        'display': 'block'
        }, {queue: false}
        );
      $("#hiw-act-app-pic-"+idact).css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );

//WHY PRECOG
$("#why-dot-left").click(function(){
    $("#why-precog-slider").animate({
        'left': '0'
        }, {queue: false}
        );
    }
    );
$("#why-dot-middle").click(function(){
    $("#why-precog-slider").animate({
        'left': '-390'
        }, {queue: false}
        );
    }
    );
$("#why-dot-right").click(function(){
    $("#why-precog-slider").animate({
        'left': '-780'
        }, {queue: false}
        );
    }
    );

//JOBS
$("#scrolling-scroll-panel").mouseover(function(){
  $(".scrolling-right-panel-jobs").animate({
        'left': '-1230'
        }, 17500
        );
}
);

//JOBS
$("#scrolling-scroll-panel").mouseover(function(){
  $(".scrolling-right-panel-newsletter").animate({
        'left': '-1230'
        }, 17500
        );
}
);

//DEVELOPER CENTER
$(".dev-center-api-docs").mouseover(function(){
      $(".dev-center-api-doc").css({
        'display': 'block'
        }, {queue: false}
        );
      }
    );

//PRICING
$(".body-pricing-difference").mouseover(function(){
      $(".body-pricing-difference-li").animate({
        'opacity': '1.0'
        }, {queue: false}
        );
      $(".body-pricing-difference ul").animate({
        'top': '180'
        }, {queue: false}
        );
    }
    );

//ABOUT
$(".jdg").mouseenter(function(){
      $(".jdg-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".jdg").mouseleave(function(){
      $(".jdg-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".fp").mouseenter(function(){
      $(".fp-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".fp").mouseleave(function(){
      $(".fp-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".knc").mouseenter(function(){
      $(".knc-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".knc").mouseleave(function(){
      $(".knc-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".js").mouseenter(function(){
      $(".js-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".js").mouseleave(function(){
      $(".js-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".ds").mouseenter(function(){
      $(".ds-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".ds").mouseleave(function(){
      $(".ds-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".dcb").mouseenter(function(){
      $(".dcb-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".dcb").mouseleave(function(){
      $(".dcb-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".nm").mouseenter(function(){
      $(".nm-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".nm").mouseleave(function(){
      $(".nm-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".mdg").mouseenter(function(){
      $(".mdg-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".mdg").mouseleave(function(){
      $(".mdg-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".ap").mouseenter(function(){
      $(".ap-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".ap").mouseleave(function(){
      $(".ap-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".yh").mouseenter(function(){
      $(".yh-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".yh").mouseleave(function(){
      $(".yh-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

//NEWS AND EVENTS
$("#news-items-only").click(function(){
      $(".event-item").css({
        'display': 'none'
        }, {queue: false}
        );
      $(".news-item").css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );

$("#event-items-only").click(function(){
      $(".event-item").css({
        'display': 'block'
        }, {queue: false}
        );
      $(".news-item").css({
        'display': 'none'
        }, {queue: false}
        );
    }
    );

})

// USTORE
var USTORE=(function(){var e,a,c,f,b,k,i,j,d;var g={setValue:function(l,m,n){if(e){if(n&&a){sessionStorage.setItem(l,m)}else{localStorage.setItem(l,m)}}else{if(c){if(n){i.setAttribute(l,m);i.save(d)}else{f.setAttribute(l,m);f.save(ieDb)}}}},getValue:function(m,n){var l="";if(e){if(n&&a){l=sessionStorage.getItem(m)}else{l=localStorage.getItem(m)}}else{if(c){if(n){i.load(d);l=i.getAttribute(m)}else{f.load(ieDb);l=f.getAttribute(m)}}}return l},deleteValue:function(l,m){if(e){this.setValue(l,null,m)}else{if(c){if(m){i.removeAttribute(l);i.save(d)}else{f.removeAttribute(l);f.save(ieDb)}}}},clearDB:function(l){if(e){if(l){sessionStorage.clear()}else{localStorage.clear()}}else{if(c){h.clearDB(l)}}}};var h={detectIE:function(){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var l=new Number(RegExp.$1);if(l>=5.5&&l<=8){return true}}return false},init:function(){var n=document.createElement("meta");n.name="save";n.content="userdata";document.getElementsByTagName("head").item(0).appendChild(n);var m=new Date().getTime();var l=document.createElement("div");b="ie-db-"+m;ieDb="userStorage";l.setAttribute("id",b);body.appendChild(l);f=document.getElementById(b);f.style.behavior="url('#default#userData')";f.style.display="none";if(window.name===null||window.name===undefined||window.name===""){window.name="ie-sesh-db-"+m}j=window.name;d=j;l=document.createElement("div");l.setAttribute("id",j);f.appendChild(l);i=document.getElementById(j);i.style.behavior="url('#default#userData')";i.style.display="none"},clearDB:function(r){var m=new Date().getTime(),t=document.createElement("div"),l=r?i:f,p=r?d:ieDb,s=l.xmlDocument,n=s.firstChild.attributes,q,o=n.length;while(0<=--o){q=n[o];l.removeAttribute(q.nodeName)}l.save(p)}};return{init:function(){if(typeof(window.localStorage)==="object"){e=true;try{if(typeof(window.sessionStorage)==="object"){a=true}}catch(l){a=false}}else{if(h.detectIE()){c=true;h.init()}}},setValue:function(l,m){g.setValue(l,m,false)},setSessionValue:function(l,m){g.setValue(l,m,true)},getValue:function(l){return g.getValue(l,false)},getSessionValue:function(l){return g.getValue(l,true)},deleteValue:function(l){g.deleteValue(l,false)},deleteSessionValue:function(l){g.deleteValue(l,true)},clearLocalStorage:function(){g.clearDB(false)},clearSessionStorage:function(){g.clearDB(true)},clearDOMStorage:function(){g.clearDB(false);g.clearDB(true)}}})();

USTORE.init();

var JSON = JSON || { stringify : jQuery.toJSON, parse : jQuery.evalJSON },
    API = {};

(function() {
  var Util = {
    getConfiguration: function() {
      var findThisScript = function() {
        var scripts = document.getElementsByTagName('SCRIPT');

        for (var i = 0; i < scripts.length; i++) {
          var script = scripts[i];
          var src = script.getAttribute('src');

          if (src && src.indexOf('default.js') != -1) {
            return script;
          }
        }

        return undefined;
      };

      return Util.parseQueryParameters(findThisScript().getAttribute('src'));
    },

    parseQueryParameters: function(url) {
      var index = url.indexOf('?');

      if (index < 0) return {};

      var query = url.substr(index + 1);

      var keyValuePairs = query.split('&');

      var parameters = {};

      for (var i = 0; i < keyValuePairs.length; i++) {
        var keyValuePair = keyValuePairs[i];

        var split = keyValuePair.split('=');

        var key = split[0];
        var value = '';

        if (split.length >= 2) {
          value = decodeURIComponent(split[1]);
        }

        parameters[key] = value;
      }

      return parameters;
    },

    addQueryParameters: function(url, query) {
      var suffix = url.indexOf('?') == -1 ? '?' : '&';

      var queries = [];

      for (var name in query) {
        var value = (query[name] || '').toString();

        queries.push(name + '=' + encodeURIComponent(value));
      }

      if (queries.length == 0) return url;
      else return url + suffix + queries.join('&');
    },

    getConsole: function(enabled) {
      var console = enabled ? window.console : undefined;
      if (!console) {
        console = {};

        console.log   = function() {}
        console.debug = function() {}
        console.info  = function() {}
        console.warn  = function() {}
        console.error = function() {}
      }

      return console;
    },

    createCallbacks: function(success, failure, msg) {
      var successFn = function(fn, msg) {
        if (fn) return fn;
        else return function(result) {
          if (result !== undefined) {
            API.Log.debug('Success: ' + msg + ': ' + JSON.stringify(result));
          }
          else {
            API.Log.debug('Success: ' + msg);
          }
        }
      }

      var failureFn = function(fn, msg) {
        if (fn) return fn;
        else return function(code, reason) {
          API.Log.error('Failure: ' + msg + ': code = ' + code + ', reason = ' + reason);
        }
      }

      return {
        success: successFn(success, msg),
        failure: failureFn(failure, msg)
      };
    },

    removeLeadingSlash: function(path) {
      if (path.length == 0) return path;
      else if (path.substr(0, 1) == '/') return path.substr(1);
      else return path;
    },

    removeTrailingSlash: function(path) {
      if (path.length == 0) return path;
      else if (path.substr(path.length - 1) == "/") return path.substr(0, path.length - 1);
      else return path;
    },

    removeDuplicateSlashes: function(path) {
      return path.replace(/[/]+/g, "/");
    },

    sanitizePath: function(path) {
      if (path === undefined) throw Error("path cannot be undefined");
      else return Util.removeDuplicateSlashes("/" + path + "/");
    },

    sanitizeProperty: function(property) {
      if (property === undefined) throw Error("Property cannot be undefined");
      else if (property.length == 0) return property;
      else if (property.substr(0, 1) == ".") return property;
      else return "." + property;
    },

    splitPathVar: function(pathVar) {
      if (pathVar.length == 0) return ["/", ""];
      if (pathVar.substr(0, 1) == ".") return ["/", pathVar]

      var index = pathVar.indexOf('/.');

      if (index <  0) return [Util.sanitizePath(pathVar), ""];

      return [Util.sanitizePath(pathVar.substr(0, index + 1)), pathVar.substr(index + 1)];
    },

    filter: function(c, f) {
      var result = c;

      if (c instanceof Array) {
        result = [];

        for (var i = 0; i < c.length; i++) {
          var e = c[i];

          if (f(e)) result.push(e);
        }
      }
      else if (c instanceof Object) {
        result = {};

        for (var key in c) {
          var value = c[key];

          if (f(key, value)) result[key] = value;
        }
      }

      return result;
    },

    normalizeTime: function(o, name) {
      if (name === undefined) {
        if (o instanceof Date) {
           return o.getUTCMilliseconds();
        }

        return o;
      }
      else {
        var time = o[name];

        if (time != null) {
          if (time instanceof Date) {
            o[name] = time.getUTCMilliseconds();
          }
          else if (time instanceof String) {
            o[name] = 0 + time
          }
        }

        return o[name];
      }
    },

    rangeHeaderFromStartEnd: function(options) {
      var headers = {};

      if (options.start !== undefined || options.end !== undefined) {
        var start = Util.normalizeTime(options.start) || ReportGrid.Time.Zero;
        var end   = Util.normalizeTime(options.end)   || ReportGrid.Time.Inf;

        headers.Range = 'time=' + start + '-' + end;
      }

      return headers;
    }
  }

  var Network = {
    doAjaxRequest: function(options) {
      var method   = options.method || 'GET';
      var query    = options.query || {};
      var path     = Util.addQueryParameters(options.path, query);
      var content  = options.content;
      var headers  = options.headers || {};
      var success  = options.success;
      var failure  = options.failure || function() {};

      API.Log.info('HTTP ' + method + ' ' + path + ': headers(' + JSON.stringify(headers) + '), content('+ JSON.stringify(content) + ')');

      var createNewXmlHttpRequest = function() {
        if (window.XMLHttpRequest) {
          return new XMLHttpRequest();
        }
        else {
          return new ActiveXObject("Microsoft.XMLHTTP");
        }
      }

      var request = createNewXmlHttpRequest();

      request.open(method, path);

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          if (request.status == 200) {
            if (request.responseText !== null && request.responseText.length > 0) {
              success(JSON.parse(this.responseText));
            }
            else {
              success(undefined);
            }
          }
          else {
            failure(request.status, request.statusText);
          }
        }
      }

      for (var name in headers) {
        var value = headers[name];

        request.setRequestHeader(name, value);
      }

      if (content !== undefined) {
        request.setRequestHeader('Content-Type', 'application/json');

        request.send(JSON.stringify(content));
      }
      else {
        request.send(null);
      }
    },

    doJsonpRequest: function(options) {
      var method   = options.method || 'GET';
      var query    = options.query || {};
      var path     = Util.addQueryParameters(options.path, query);
      var content  = options.content;
      var headers  = options.headers || {};
      var success  = options.success;
      var failure  = options.failure || function() {};

      API.Log.info('HTTP ' + method + ' ' + path + ': headers(' + JSON.stringify(headers) + '), content('+ JSON.stringify(content) + ')');

      var random   = Math.floor(Math.random() * 214748363);
      var funcName = 'ReportGridJsonpCallback' + random.toString();

      window[funcName] = function(content, meta) {
        if (meta.status.code === 200) {
          success(content);
        }
        else {
          failure(meta.status.code, meta.status.reason, content);
        }

        document.head.removeChild(document.getElementById(funcName));

        window[funcName] = undefined;
        try{
          delete window[funcName];
        }catch(e){}
      }

      var extraQuery = {};

      extraQuery.method   = method;

      for (_ in headers) { extraQuery.headers = JSON.stringify(headers); break; }

      extraQuery.callback = funcName;

      if (content !== undefined) {
        extraQuery.content = JSON.stringify(content);
      }

      var fullUrl = Util.addQueryParameters(path, extraQuery);

      var script = document.createElement('SCRIPT');

      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src',  fullUrl);
      script.setAttribute('id',   funcName);

      // Workaround for document.head being undefined.
      if (! document.head)
        document.head = document.getElementsByTagName('head')[0];

      document.head.appendChild(script);
    },

    createHttpInterface: function(doRequest) {
      return {
        get: function(path, callbacks, query, headers) {
          doRequest(
            {
              method:   'GET',
              path:     path,
              headers:  headers,
              success:  callbacks.success,
              failure:  callbacks.failure,
              query:    query
            }
          );
        },

        put: function(path, content, callbacks, query, headers) {
          doRequest(
            {
              method:   'PUT',
              path:     path,
              content:  content,
              headers:  headers,
              success:  callbacks.success,
              failure:  callbacks.failure,
              query:    query
            }
          );
        },

        post: function(path, content, callbacks, query, headers) {
          doRequest(
            {
              method:   'POST',
              path:     path,
              content:  content,
              headers:  headers,
              success:  callbacks.success,
              failure:  callbacks.failure,
              query:    query
            }
          );
        },

        remove: function(path, callbacks, query, headers) {
          doRequest(
            {
              method:   'DELETE',
              path:     path,
              headers:  headers,
              success:  callbacks.success,
              failure:  callbacks.failure,
              query:    query
            }
          );
        }
      }
    }
  }

  API.Config = Util.getConfiguration();

  var onceMap = {};

  API.alertSafe = function(msg) {
    if (onceMap[msg] === undefined) {
      onceMap[msg] = true;

      alert(msg);
    }
  }

  API.Extend = function(object, extensions) {
    for (var name in extensions) {
      if (object[name] === undefined) {
        object[name] = extensions[name];
      }
    }
  }

  API.Bool = function(v) {
    return v === true || v === 1 || (v = (""+v).toLowerCase()) == "true" || v == "on" || v == "1";
  }

  var console = Util.getConsole(API.Bool(API.Config.enableLog));

  API.Log = {
    log:    function(text) { console.log(text);   },
    debug:  function(text) { console.debug(text); },
    info:   function(text) { console.info(text);  },
    warn:   function(text) { console.warn(text);  },
    error:  function(text) { console.error(text); }
  }

  API.Extend(API.Config,
    {
      useJsonp : "true",
      enableLog : "true"
    }
  );

  API.Http = {};

  API.Http.Ajax  = Network.createHttpInterface(Network.doAjaxRequest);
  API.Http.Jsonp = Network.createHttpInterface(Network.doJsonpRequest);

  API.Extend(API.Http, API.Bool(API.Config.useJsonp) ? API.Http.Jsonp : API.Http.Ajax);
})();