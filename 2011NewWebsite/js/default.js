

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

      if (li.length > 0 && ul.margin().left >= -ul.parent().width()) {
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
          marginLeft: -p.width() * idx
        });

        quotes.removeClass('active');
        quotes.eq(idx).addClass('active');

        return false;
      });
    });
  }

  setupHome();
  setupLogin();
  setupArrows();
  setupQuoteSelectors();
});