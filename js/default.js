// JSON
(function($){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
var type=typeof o;if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return''+o;}
if(type==='string'){return $.quoteString(o);}
if(type==='object'){if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($.toJSON(o[i])||'null');}
return'['+ret.join(',')+']';}
var name,val,pairs=[];for(var k in o){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
type=typeof o[k];if(type==='function'||type==='undefined'){continue;}
val=$.toJSON(o[k]);pairs.push(name+':'+val);}
return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){return eval('('+src+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+src+')');}else{throw new SyntaxError('Error parsing JSON, source is not valid.');}};$.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};})(jQuery);

// USTORE
var USTORE=(function(){var e,a,c,f,b,k,i,j,d;var g={setValue:function(l,m,n){if(e){if(n&&a){sessionStorage.setItem(l,m)}else{localStorage.setItem(l,m)}}else{if(c){if(n){i.setAttribute(l,m);i.save(d)}else{f.setAttribute(l,m);f.save(ieDb)}}}},getValue:function(m,n){var l="";if(e){if(n&&a){l=sessionStorage.getItem(m)}else{l=localStorage.getItem(m)}}else{if(c){if(n){i.load(d);l=i.getAttribute(m)}else{f.load(ieDb);l=f.getAttribute(m)}}}return l},deleteValue:function(l,m){if(e){this.setValue(l,null,m)}else{if(c){if(m){i.removeAttribute(l);i.save(d)}else{f.removeAttribute(l);f.save(ieDb)}}}},clearDB:function(l){if(e){if(l){sessionStorage.clear()}else{localStorage.clear()}}else{if(c){h.clearDB(l)}}}};var h={detectIE:function(){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var l=new Number(RegExp.$1);if(l>=5.5&&l<=8){return true}}return false},init:function(){var n=document.createElement("meta");n.name="save";n.content="userdata";document.getElementsByTagName("head").item(0).appendChild(n);var m=new Date().getTime();var l=document.createElement("div");b="ie-db-"+m;ieDb="userStorage";l.setAttribute("id",b);body.appendChild(l);f=document.getElementById(b);f.style.behavior="url('#default#userData')";f.style.display="none";if(window.name===null||window.name===undefined||window.name===""){window.name="ie-sesh-db-"+m}j=window.name;d=j;l=document.createElement("div");l.setAttribute("id",j);f.appendChild(l);i=document.getElementById(j);i.style.behavior="url('#default#userData')";i.style.display="none"},clearDB:function(r){var m=new Date().getTime(),t=document.createElement("div"),l=r?i:f,p=r?d:ieDb,s=l.xmlDocument,n=s.firstChild.attributes,q,o=n.length;while(0<=--o){q=n[o];l.removeAttribute(q.nodeName)}l.save(p)}};return{init:function(){if(typeof(window.localStorage)==="object"){e=true;try{if(typeof(window.sessionStorage)==="object"){a=true}}catch(l){a=false}}else{if(h.detectIE()){c=true;h.init()}}},setValue:function(l,m){g.setValue(l,m,false)},setSessionValue:function(l,m){g.setValue(l,m,true)},getValue:function(l){return g.getValue(l,false)},getSessionValue:function(l){return g.getValue(l,true)},deleteValue:function(l){g.deleteValue(l,false)},deleteSessionValue:function(l){g.deleteValue(l,true)},clearLocalStorage:function(){g.clearDB(false)},clearSessionStorage:function(){g.clearDB(true)},clearDOMStorage:function(){g.clearDB(false);g.clearDB(true)}}})();

USTORE.init();

var API = {};

if(window.location.href.substr(0, 17) == 'http://localhost/' || (/^http:\/\/:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\//).test(window.location.href))
  API.samplesService = "/rg/charts/service/index.php";
else
  API.samplesService = "http://api.reportgrid.com/services/viz/samples/index.php";

API.woopra = (function() {
  var _tracker = {
    setDomain : function(_) {},
    track : function(_) {},
    setIdleTimeout : function(_) {},
    addVisitorProperty : function(_, _) {}
  }; // prevents error when used locally
  function customValues() {
    var ob = {}, value;
    if(value = USTORE.getValue("st-email"))
        ob["email"] = value;
    if(value = USTORE.getValue("st-name"))
        ob["name"] = value;
    if(value = USTORE.getValue("st-title"))
        ob["title"] = value;
    if(value = USTORE.getValue("st-company"))
        ob["company"] = value;
    return ob;
  }

  function prepareTracker() {
    var extra = customValues();
    for(key in extra) {
      _tracker.addVisitorProperty(key, extra[key]);
    }
  }

  return {
    track : function(tracker) {
      _tracker = tracker || _tracker;
      _tracker.setDomain('reportgrid.com');
      _tracker.setIdleTimeout(300000);
      prepareTracker();
      _tracker.track();
      return false;
    },
    custom : function(event, params) {
      if(!_tracker.pushEvent)
        return;
      params = params || {};
      params.name = event;
//      console.log(params);
      _tracker.pushEvent(params);
    },
    setEmail : function(email) {
      if(!email) return;
      _tracker.addVisitorProperty('email', email);
      USTORE.setValue('st-email', email);
    },
    setCompany : function(company) {
      if(!company) return;
      _tracker.addVisitorProperty('company', company);
      USTORE.setValue('st-company', company);
    },
    setName : function(first, last) {
      var parts = [];
      if(first = first.trim()) parts.push(first);
      if(last = last.trim()) parts.push(last);
      if(parts.length == 0) return;
      var name = parts.join(' ');
      _tracker.addVisitorProperty('name', name);
      USTORE.setValue('st-name', name);
    },
    setTitle : function(title) {
      if(!title) return;
      _tracker.addVisitorProperty('title', title);
      USTORE.setValue('st-title', title);
    }
  };
})();

API.cookie = (function(){
  return {
    set : function(name,value,days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
      }
        else var expires = "";
      document.cookie = name+"="+JSON.stringify(value)+expires+"; path=/";
    },

    get : function(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length,c.length));
      }
      return null;
    },

    remove : function(name) {
      set(name,"",-1);
    }
  };
})();

API.google = (function() {
  var googleinfo = {
    id : 1008236154,
    language : "en",
    format : "3",
    color : "ffffff",
    value : 0
  };
  var conversions = {
    'signup' : "2W-SCMbVzgIQ-uzh4AM",
    'script-copy' : "hlQjCL7WzgIQ-uzh4AM",
    'script-download' : "6bB9CLbXzgIQ-uzh4AM"
  };
  var google_url = "http://www.googleadservices.com/pagead/conversion.js";

  var setGlobalVar = function(name, value) {
    window['google_conversion_'+name] = value;
  };

  var setGlobalVars = function(ob)
  {
    for(key in ob)
    {
      setGlobalVar(key, ob[key]);
    }
  }
  var adwordsreferrer = false;
  if(API.cookie.get('rg-adwords'))
    adwordsreferrer = true;
  else if(document.referrer && (/google\.[^\/]+\/aclk\?/).test(document.referrer))
  {
    API.cookie.set('rg-adwords', adwordsreferrer = true);
  }

  return {
    conversion : function(type, handler) {
      setGlobalVars(googleinfo);
      $.getScript(google_url, handler);
    },
    fromAdWords : function() {
      return adwordsreferrer;
    }
  }
})();


$(document).ready(function(){
  var lastpanel, lastbutton;
  $('#chart-icons li').mouseover(function(){
    // buttons
    $('#chart-icons li').removeClass('over');
    $(this).addClass('over');

    // panels
    $('#body-computer .visualization-panel').hide();
    var id = "panel-" + $(this).attr('id');
    var current = $('#'+id);
    current.show();
  })

  $('.visualization-panel').hide();
  lastpanel  = $(".visualization-panel:first").show();
  lastbutton = $("#chart-icons .over");

  $('#copyscript').zclip({
    path:'js/ZeroClipboard.swf',
    copy:function(){
      API.woopra.custom("script-copy", { what : "charts API script", how : "copy button" });
      if(API.google.fromAdWords())
        API.google.conversion('script-copy');
      return $('#samplescript').text();
    }
  });

  $('#copycode').zclip({
    path:'js/ZeroClipboard.swf',
    copy:function(){
      API.woopra.custom("code-copy", { what : "chart code sample", how : "copy button" });
      return $('#samplecode').text();
    }
  });

  var inView = function(a) {
    var st = (document.documentElement.scrollTop || document.body.scrollTop),
        ot = $(a).offset().top;
    return ot >= st;
  };

  var updateActiveSection = function()
  {
    var found = false;
    $('.pane').each(function(){
      var section = "#"+this.id.split("-")[0],
          link = $(section + "-link");
      if(!found && (inView(this) || $(this).is('.last')))
      {
        found = true;
        if(!link.hasClass("active"))
        {
          link.addClass("active");
          API.woopra.custom("section", { section : section });
        }
      } else {
        link.removeClass("active");
      }
    })
  }

$("#header-precog-close").click(function(){
      $("#header-precog").css({
        'display': 'none'
        }, {queue: false}
        );
      $("#header-precog-close").css({
        'display': 'none'
        }, {queue: false}
        );
    }
    );
  
$('#header-precog').click(function () {
    window.open('http://precog.io');
});
  

  $(document).scroll(updateActiveSection);
  updateActiveSection();

  var selectText = function(element) {
    if (document.body.createTextRange) { // ms
      var range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      var selection = window.getSelection();
      if (selection.setBaseAndExtent) { // webkit
        selection.setBaseAndExtent(element, 0, element, 1);
      } else { // moz, opera
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

$(".body-section-1").mouseover(function(){
      $("#body-text-1").animate({
        opacity: 1.0
        }, {queue: false}
        );
    }
    );

$(".body-section-1").mouseleave(function(){
      $("#body-text-1").animate({
        opacity: 0.3
        }, {queue: false}
        );
    }
    );

$(".body-section-2").mouseover(function(){
      $("#body-text-2").animate({
        opacity: 1.0
        }, {queue: false}
        );
    }
    );

$(".body-section-2").mouseleave(function(){
      $("#body-text-2").animate({
        opacity: 0.3
        }, {queue: false}
        );
    }
    );

$('.body-section-1').click(function () {
    window.open('charts.html');
});

$('.body-section-2').click(function () {
    window.open('http://precog.io');
});

  $('#samplescript').click(function(){
    API.woopra.custom("script-copy", { how : "click on code" });
    if(API.google.fromAdWords())
      API.google.conversion('script-copy');
    selectText(this);
  });

  $('#samplecode').click(function(){
    API.woopra.custom("code-copy", { how : "click on code" });
    selectText(this);
  });

  $('#javascript-download').click(function(e){
    if(API.google.fromAdWords())
      API.google.conversion('script-download');
    // woopra seems to automatically download events if there is a timer that allows that
    var href = $(this).attr("href");
    setTimeout(function(){
      window.location.href = href;
    }, 500);
    e.preventDefault();
    return true;
  });

  $('.buybutton').click(function(){
    var value = $.trim($(this.parentNode).select("h1").text());
    API.woopra.custom("buy-"+value, { what : "charts API", value : value });
    return true;
  })

  var firstsubmit = true;
  $('#mc-embedded-subscribe-form').submit(function(){
    if(firstsubmit && API.google.fromAdWords())
    {
      firstsubmit = false;
      API.google.conversion('signup');
      setTimeout(function(){
        $('#mc-embedded-subscribe-form').submit();
      }, 500);
      return false;
    } else
      return true;
  })

})

