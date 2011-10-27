

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

    left.parent().find('ul').css('left', 0);

    left.click(function() {
      var leftUl = $(this).parent().find('ul');
      var leftLi = leftUl.find('li');


      alert(leftLi.width());
      alert(leftUl.margin().left)

      leftUl.animate({
        marginLeft: leftUl.margin().left - leftLi.width()
      });

      return false;
    });

    right.click(function() {
      var rightUl = $(this).parent().find('ul');
      var rightLi = rightUl.find('li');

      rightUl.animate({
        marginLeft: leftUl.margin().left + leftLi.width()
      });

      return false;
    })
  }

  setupHome();
  setupLogin();
  setupArrows();
});