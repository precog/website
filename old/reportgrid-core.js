// JSON parsing & stringification:
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

// ReportGrid core:
var ReportGrid = window.ReportGrid || {};

(function() {
  var Util = {
    getConfiguration: function() {
      var findThisScript = function() {
        var scripts = document.getElementsByTagName('SCRIPT');

        for (var i = 0; i < scripts.length; i++) {
          var script = scripts[i];
          var src = script.getAttribute('src');

          if (src && src.indexOf('reportgrid-core.js') != -1) {
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

    getConsole: function() {
      var console = window.console;
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
            $.Log.debug('Success: ' + msg + ': ' + JSON.stringify(result));
          }
          else {
            $.Log.debug('Success: ' + msg);
          }
        }
      }

      var failureFn = function(fn, msg) {
        if (fn) return fn;
        else return function(code, reason) {
          $.Log.error('Failure: ' + msg + ': code = ' + code + ', reason = ' + reason);
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

    sanitizeField: function(field) {
      if (field === undefined) throw Error("Field cannot be undefined");
      else if (field.length == 0) return field;
      else if (field.substr(0, 1) == ".") return field;
      else return "." + field;
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

      $.Log.info('HTTP ' + method + ' ' + path + ': ' + JSON.stringify(content));

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

      $.Log.info('HTTP ' + method + ' ' + path + ': ' + JSON.stringify(content));

      var random   = Math.floor(Math.random() * 214748363);
      var funcName = 'ReportGridJsonpCallback' + random.toString();

      window[funcName] = function(content, meta) {
        if (meta.status.code === 200) {
          success(content);
        }
        else {
          failure(meta.status.code, meta.status.reason);
        }

        document.head.removeChild(document.getElementById(funcName));

        delete window[funcName];
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

  ReportGrid.$ = {};

  var $ = ReportGrid.$;

  $.Config = Util.getConfiguration();

  $.Extend = function(object, extensions) {
    for (var name in extensions) {
      if (object[name] === undefined) {
        object[name] = extensions[name];
      }
    }
  }

  $.Extend($.Config,
    {
      analyticsServer: "http://localhost:8888/" // TODO: Insert default location to analytics server
    }
  );

  $.Config.analyticsServer = Util.removeTrailingSlash($.Config.analyticsServer);

  $.Http = function() {
    return ReportGrid.$.Config.useJsonp ? ReportGrid.$.Http.Jsonp : ReportGrid.$.Http.Ajax;
  }

  $.Http.Ajax  = Network.createHttpInterface(Network.doAjaxRequest);
  $.Http.Jsonp = Network.createHttpInterface(Network.doJsonpRequest);

  var console = Util.getConsole();

  $.Log = {
    log:    function(text) { console.log(text);   },
    debug:  function(text) { console.debug(text); },
    info:   function(text) { console.info(text);  },
    warn:   function(text) { console.warn(text);  },
    error:  function(text) { console.error(text); }
  }

  /** Constants */
  ReportGrid.Minute   = 'minute';
  ReportGrid.Hour     = 'hour';
  ReportGrid.Day      = 'day';
  ReportGrid.Week     = 'week';
  ReportGrid.Month    = 'month';
  ReportGrid.Year     = 'year';
  ReportGrid.Eternity = 'eternity';

  var http = $.Http();

  /** Periodicity constants. */
  ReportGrid.Periodicity = {
    Minute:   "minute",
    Hour:     "hour",
    Day:      "day",
    Week:     "week",
    Year:     "year",
    Eternity: "eternity"
  }

  /** Time constants. */
  ReportGrid.Time = {
    Zero:  0,
    Inf:   2147483647
  }

  /** Tracks an event. If no timestamp is specified, the current time is used.
   *
   * ReportGrid.track("/merchants/Starbucks/locations/USA_CO_Boulder/1/", {
   *   "event": {
   *     "purchase": {
   *       "item": "Americano",
   *       "size": "Grande"
   *     }
   *   }
   * });
   */
  ReportGrid.track = function(path_, options, success, failure) {
    var path  = Util.sanitizePath(path_);

    // Handle "event" instead of "events":
    if (options.event != null) {
      options.events = options.event;

      delete options.event;
    }

    // Allow user to specify Date for timestamp:
    if (options.timestamp && options.timestamp instanceof Date) options.timestamp = options.timestamp.getUTCMilliseconds();

    // Extract out first event for logging:
    var firstEventName, firstEventProperties;

    for (var eventName in options.events) {
      firstEventName       = eventName;
      firstEventProperties = options.events[eventName];

      break;
    }

    var description = 'Track event ' + firstEventName + ' (' + JSON.stringify(firstEventProperties) + ') @ ' + (options.timestamp || "current time");
    http.post(
      
      $.Config.analyticsServer + '/vfs' + path,
      options,
      Util.createCallbacks(success, failure, description),
      {tokenId: $.Config.tokenId }
    );
  }

  /**
   * Lists children of the specified path and optional field. You can use this
   * method to list all the path children, all the events at the specified
   * path, or both the path children and the events.
   *
   * Event names are preceded with the dot character ".", while path names are
   * suffixed with the forward slash character "/".
   *
   * @param path      The path to the data.
   * @param options   An object that contains an optional type
   *                  ("path" or "field") and an optional
   *                  field (e.g. "transaction.sender").
   *
   * ReportGrid.children("/", {"type":"all"});
   * > ["foo/", ".baz"]
   *
   * ReportGrid.children("/", {"type":"path"});
   * > ["foo/"]
   *
   * ReportGrid.children("/", {"type":"field"});
   * > [".baz"]
   *
   * ReportGrid.children("/", {"field":"baz"});
   * > [".bar"]
   */
  ReportGrid.children = function(path_, options_, success, failure) {
    var options = options_ || {};

    var path  = Util.sanitizePath(path_);
    var field = Util.sanitizeField(options.field || "");
    var type  = (field != "") ? "field" : (options.type || "all").toLowerCase();

    var description = 'List children of ' + path + field;

    var callbacks = Util.createCallbacks(success, failure, description);

    http.get(
      $.Config.analyticsServer + '/vfs' + (path + field),
      {
        success: function(content) {
          var noDotFilter = function(e) { return e.charAt(0) != '.'; };
          var dotFilter   = function(e) { return e.charAt(0) == '.'; };
          var allFilter   = function(e) { return true; }

          var typeToFilter = {
            "path":   noDotFilter,
            "field":  dotFilter,
            "all":   allFilter
          };

          return callbacks.success(Util.filter(content, typeToFilter[type]));
        },

        failure: callbacks.failure
      },
      {tokenId: $.Config.tokenId }
    );
  }

  /**
   * Retrieves total counts of how often the specified field appeared in events
   * of the specified type.
   *
   * ReportGrid.fieldCount("/account/jdoe/emails/", {field: "delivery.status"});
   * > 2392
   */
  ReportGrid.fieldCount = function(path_, options, success, failure) {
    var path  = Util.sanitizePath(path_);
    var field = Util.sanitizeField(options.field);

    var description = 'Get total count for ' + path + field;

    http.get(
      $.Config.analyticsServer + '/vfs' + (path + field) + '/count',
      Util.createCallbacks(success, failure, description),
      {tokenId: $.Config.tokenId }
    );
  }

  /**
   * Retrieves time series counts of how often the specified field appeared
   * in events of the specified type.
   *
   * ReportGrid.fieldSeries("/atm-events/", {field: "transaction", periodicity: "hour"});
   * > {"hour":{"4512239238":2323}}
   */
  ReportGrid.fieldSeries = function(path_, options, success, failure) {
    var path  = Util.sanitizePath(path_);
    var field = Util.sanitizeField(options.field);
    var peri  = options.periodicity || "eternity";

    var description = 'Get series for field ' + path + field + ' (periodicity = ' + peri + ')';

    http.get(
      $.Config.analyticsServer + '/vfs' + (path + field) + '/series/' + peri,
      Util.createCallbacks(success, failure, description),
      {tokenId: $.Config.tokenId }
    );
  }

  /**
   * Retrieves all values of the specified field throughout all time.
   *
   * ReportGrid.fieldValue("/customers/jdoe/blog-posts/1/", {field: "click.gender"});
   * > ["male", "female", "unknown"]
   */
  ReportGrid.fieldValues = function(path_, options, success, failure) {
    var path  = Util.sanitizePath(path_);
    var field = Util.sanitizeField(options.field);

    var description = 'Get all values of field ' + path + field;

    http.get(
      $.Config.analyticsServer + '/vfs' + (path + field) + '/values/',
      Util.createCallbacks(success, failure, description),
      {tokenId: $.Config.tokenId }
    );
  }

  /**
   * Retrieves the total number of times the field was equal to the specified
   * value.
   *
   * ReportGrid.fieldValueCount("/customers/jdoe/blog-posts/1/", {field: "click.gender", value: "male"});
   * > 12329
   */
  ReportGrid.fieldValueCount = function(path_, options, success, failure) {
    var path  = Util.sanitizePath(path_);
    var field = Util.sanitizeField(options.field);
    var value = options.value;

    var valueJson = JSON.stringify(value);

    var description = 'Get the count for ' + path + field + ' == ' + valueJson;

    http.get(
      $.Config.analyticsServer + '/vfs' + (path + field) + '/values/' + encodeURIComponent(valueJson) + '/count',
      Util.createCallbacks(success, failure, description),
      {tokenId: $.Config.tokenId }
    );
  }

  /**
   * Retrieves the time series count of when the field was equal to the
   * specified value.
   *
   * ReportGrid.fieldValueSeries("/transactions/", {field: "withdrawal", periodicity: "hour"});
   * > {"hour":{"1239232323":293}}
   */
  ReportGrid.fieldValueSeries = function(path_, options, success, failure) {
    var path  = Util.sanitizePath(path_);
    var field = Util.sanitizeField(options.field);
    var value = options.value;
    var peri  = options.periodicity || "eternity";

    var valueJson = JSON.stringify(value);

    var description = 'Get the time series for ' + path + field + ' = ' + valueJson + ' (periodicity = ' + peri + ')';

    http.get(
      $.Config.analyticsServer + '/vfs' + (path + field) + '/values/' + encodeURIComponent(valueJson) + '/series/' + peri,
      Util.createCallbacks(success, failure, description),
      {tokenId: $.Config.tokenId }
    );
  }

  /**
   * Searches across a range of conditions to retrieve a total count.
   *
   * ReportGrid.searchCount("/advertisers/Nike", {where: {"impression.carrier": "AT&T"}});
   * > 10
   */
  ReportGrid.searchCount = function(path_, options, success, failure) {
    var path = Util.sanitizePath(path_);

    var description = 'Select count from ' + path + ' where ' + JSON.stringify(options.where);

    http.post(
      $.Config.analyticsServer + '/search',
      {
        select: "count",
        from:   path,
        where:  options.where
      },
      Util.createCallbacks(success, failure, description),
      {tokenId: $.Config.tokenId }
    );
  }


  /**
   * Searches across a range of conditions to retrieve a total count.
   *
   * ReportGrid.searchSeries("/advertisers/Nike", {periodicity: "hour", where: {".impression.carrier": "AT&T"}});
   * > {"hour":{"1239232323":293}}
   */
  ReportGrid.searchSeries = function(path_, options, success, failure) {
    var path  = Util.sanitizePath(path_);
    var peri  = options.periodicity || "eternity";

    var description = 'Select series/' + peri + ' from ' + path + ' where ' + JSON.stringify(options.where);

    http.post(
      $.Config.analyticsServer + '/search',
      {
        select: "series/" + peri,
        from:   path,
        where:  options.where
      },
      Util.createCallbacks(success, failure, description),
      {tokenId: $.Config.tokenId }
    );
  }

  /** 
  *  Lists all tokens.
  *
  *  ReportGrid.tokens(success, failure);
  *
  *  >[ { "tokenId" : "BC5C7B28-1E1B-46E1-A758-A9011EFBB244" , "parentTokenId" : "C1A8C75E-C540-426F-B52F-570431F95A81" , 
  *  "accountTokenId" : "C1A8C75E-C540-426F-B52F-570431F95A81" , "path" : "/bar/" , "permissions" : { "read" : true, 
  *  "write" : true, "share" : false}, "expires" :9223372036854776000, "limits" : { "order" : 2, "limit" : 2, "depth" : 2 } } ]
  * 
  */
  ReportGrid.tokens = function(success, failure) {
    var http = $.Http();

    http.get(
      $.Config.analyticsServer + '/tokens/',
      Util.createCallbacks(success, failure, 'List all tokens'),
      {tokenId: $.Config.tokenId }
    );
  }

  /** Creates a new token.
  *  
  *  path is required; all other options will be inherited from the parent if not specified.
  *
  *  ReportGrid.newToken({ "path" : "/sandbox/foo", "permissions" : {"read" : true, "write" : true, "share" : false}, "limits" : { "order" : 2, "limit" : 10, "depth" : 3 } })
  *  > undefined
  */
  ReportGrid.newToken = function(newToken, success, failure) {
    var http = $.Http();

    http.post(
      $.Config.analyticsServer + '/tokens/',
      newToken,
      Util.createCallbacks(success, failure, 'Create a token (' + JSON.stringify(newToken) + ')'),
      {tokenId: $.Config.tokenId }
    );
  }

  /** Deletes the token with the specified id.
  *
  *  tokenId is required
  *
  *  ReportGrid.deleteToken(
  *    "BC5C7B28-1E1B-46E1-A758-A9011EFBB244",
  *    success,
  *    failure
  *  );
  *  > undefined
  */
  ReportGrid.deleteToken = function(tokenId, success, failure) {
    var http = $.Http();

    http.remove(
      $.Config.analyticsServer + '/tokens/' + tokenId,
      Util.createCallbacks(success, failure, 'Delete token ' + tokenId),
      {tokenId: $.Config.tokenId }
    );
  }
})();

