

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

  setupHome();
  setupLogin();
});