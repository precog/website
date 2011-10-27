

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
    $('#loginbutton').click(function() {
      var maxWidth  = $(document).width();
      var maxHeight = $(document).height();

      $('#loginoverlay').show().css({opacity: 0}).animate({
        opacity: 0.75
      })

      $('#loginoverlay').click(function() {
        $(this).animate({opacity: 0}, function() { $(this).hide(); });

        $('#loginmenu').hide();
      });

      $('#loginmenu').show();
    })

  }

  setupHome();
  setupLogin();
});