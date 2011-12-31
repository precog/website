// USTORE
var USTORE=(function(){var e,a,c,f,b,k,i,j,d;var g={setValue:function(l,m,n){if(e){if(n&&a){sessionStorage.setItem(l,m)}else{localStorage.setItem(l,m)}}else{if(c){if(n){i.setAttribute(l,m);i.save(d)}else{f.setAttribute(l,m);f.save(ieDb)}}}},getValue:function(m,n){var l="";if(e){if(n&&a){l=sessionStorage.getItem(m)}else{l=localStorage.getItem(m)}}else{if(c){if(n){i.load(d);l=i.getAttribute(m)}else{f.load(ieDb);l=f.getAttribute(m)}}}return l},deleteValue:function(l,m){if(e){this.setValue(l,null,m)}else{if(c){if(m){i.removeAttribute(l);i.save(d)}else{f.removeAttribute(l);f.save(ieDb)}}}},clearDB:function(l){if(e){if(l){sessionStorage.clear()}else{localStorage.clear()}}else{if(c){h.clearDB(l)}}}};var h={detectIE:function(){if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var l=new Number(RegExp.$1);if(l>=5.5&&l<=8){return true}}return false},init:function(){var n=document.createElement("meta");n.name="save";n.content="userdata";document.getElementsByTagName("head").item(0).appendChild(n);var m=new Date().getTime();var l=document.createElement("div");b="ie-db-"+m;ieDb="userStorage";l.setAttribute("id",b);body.appendChild(l);f=document.getElementById(b);f.style.behavior="url('#default#userData')";f.style.display="none";if(window.name===null||window.name===undefined||window.name===""){window.name="ie-sesh-db-"+m}j=window.name;d=j;l=document.createElement("div");l.setAttribute("id",j);f.appendChild(l);i=document.getElementById(j);i.style.behavior="url('#default#userData')";i.style.display="none"},clearDB:function(r){var m=new Date().getTime(),t=document.createElement("div"),l=r?i:f,p=r?d:ieDb,s=l.xmlDocument,n=s.firstChild.attributes,q,o=n.length;while(0<=--o){q=n[o];l.removeAttribute(q.nodeName)}l.save(p)}};return{init:function(){if(typeof(window.localStorage)==="object"){e=true;try{if(typeof(window.sessionStorage)==="object"){a=true}}catch(l){a=false}}else{if(h.detectIE()){c=true;h.init()}}},setValue:function(l,m){g.setValue(l,m,false)},setSessionValue:function(l,m){g.setValue(l,m,true)},getValue:function(l){return g.getValue(l,false)},getSessionValue:function(l){return g.getValue(l,true)},deleteValue:function(l){g.deleteValue(l,false)},deleteSessionValue:function(l){g.deleteValue(l,true)},clearLocalStorage:function(){g.clearDB(false)},clearSessionStorage:function(){g.clearDB(true)},clearDOMStorage:function(){g.clearDB(false);g.clearDB(true)}}})();

USTORE.init();

var API = {};
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
      params = params || {};
      params.name = event;
      console.log(params);
//        _tracker.pushEvent(params);
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
})

