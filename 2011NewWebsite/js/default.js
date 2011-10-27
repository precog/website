

$(function() {
  var setupHome = function() {
    var animateContentPane = function(panelIndex) {
      $('#middle1contentarea').animate({
        marginTop: -(panelIndex * 402)
      }, 'fast');
    }

    $('#whatbutton').mouseover(function() {
      animateContentPane(0);
    });
    $('#howbutton').mouseover(function() {
      animateContentPane(1);
    });
    $('#whybutton').mouseover(function() {
      animateContentPane(2);
    });
  }

  var setupLogin = function() {
    $('#loginbutton').click(function() {
      var maxWidth  = $(document).width();
      var maxHeight = $(document).height();

      $('#loginoverlay').show().css({opacity: 0}).animate({
        opacity: 0.75
      });

      $('#loginmenu').show();
    })

  }

  setupHome();
  setupLogin();
});