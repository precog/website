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

var API = {
  $ : {
    ajax: function(path, method, content, headers, cb) {
      var postfix;

      if (method == null) method = "GET";
      if (content == null) content = {};
      if (headers == null) headers = {};
      if (cb == null) cb = function(results) {
        if (typeof console != 'undefined') {
          window['console'].log(results);
        }
      }

      if (path.indexOf('?') == -1) {
        postfix = '?';
      }
      else {
        postfix = '&';
      }

      $.getJSON(path + postfix + 'callback=?&content=' + escape($.toJSON(content)) + '&headers=' + escape($.toJSON(headers)) + '&method=' + method,
        cb
      );
    }
  }
}


$(function() {
  var setupHome = function() {
    var animateContentPane = function(panelIndex) {
      return function() {
        $('#middle1contentarea').animate({
          marginTop: -(panelIndex * 402)
        }, 'fast');

        return false;
      }
    }

    var setupPane = function(paneSelector, paneIndex) {
      $(paneSelector).mouseover(animateContentPane(paneIndex)).click(animateContentPane(paneIndex));
    }

    setupPane('#whatbutton', 0);
    setupPane('#howbutton',  1);
    setupPane('#whybutton',  2);
  }

  var setupLogin = function() {
    $('#loginoverlay').click(function() {
      $(this).css({opacity: 0.75}).animate({opacity: 0}, function() { $(this).hide(); });

      $('#loginmenu').hide();
    });

    $('#loginbutton').click(function() {
      var maxWidth  = $(document).width();
      var maxHeight = $(document).height();

      $('#loginoverlay').clearQueue().show().css({opacity: 0}).animate({opacity: 0.75})


      $('#loginmenu').clearQueue().show();
    })

  }

  var setupArrows = function() {
    var left  = $('.leftarrow');
    var right = $('.rightarrow');

    left.click(function() {
      var c = $(this).parent();
      var ul = c.find('ul');

      var cOffset = c.offset();

      var li = ul.children('li').filter(function(idx) {
        var curOffset = ul.children().eq(idx).offset();

        var delta = curOffset.left - cOffset.left;

        return delta < 0;
      }).last();

      if (ul.margin().left < 0) {
        ul.animate({
          marginLeft: ul.margin().left + li.outerWidth()
        });
      }

      return false;
    });

    right.click(function() {
      var c = $(this).parent();
      var ul = c.find('ul');

      var cOffset = c.offset();

      var li = ul.children('li').filter(function(idx) {
        var curOffset = ul.children().eq(idx).offset();

        var delta = curOffset.left - cOffset.left;

        return delta >= 0;
      });

      if (li.length > 0 && ul.margin().left > -ul.outerWidth()) {
        ul.animate({
          marginLeft: ul.margin().left - li.outerWidth()
        });
      }

      return false;
    })
  }

  var setupQuoteSelectors = function() {
    var p = $('#quote');
    var c = p.find('ul');
    var quotes = c.children();
    var selectors = p.find('.quoteselector');

    selectors.each(function(idx, e) {
      $(e).click(function() {
        var curMarginLeft = c.margin().left;

        c.animate({
          marginLeft: -p.outerWidth() * idx
        });

        quotes.removeClass('active');
        quotes.eq(idx).addClass('active');

        return false;
      });
    });
  }

  var setupNewsFeed = function() {
    $.getJSON("http://search.twitter.com/search.json?callback=?", {
      q: "from:ReportGrid"
    },
    function(results) {
      $('#news li').remove();

      var tweets = results.results;

      for (var i = 0; i < tweets.length; i++) {
        var tweet = tweets[i];

        console.log(tweet);

        var url = 'http://twitter.com/#!/' + tweet.from_user + '/status/' + tweet.id_str;

        $('#news ul').append('<li><a href="' + url + '">' + tweet.text + '</a></li>');
      }
    });
  }

  setupHome();
  setupLogin();
  setupArrows();
  setupQuoteSelectors();
  setupNewsFeed();
});