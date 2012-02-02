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
var inView = function(a) {
  var st = (document.documentElement.scrollTop || document.body.scrollTop),
      ot = $(a).offset().top;
  return ot >= st;
};

var updateActiveSection = function()
{
  var found = false;
  $('.mega').each(function(){
    var section = this.id.split("-")[1],
        panel = $('#hiw-' + section);
console.log(section);
    if(!found && (inView(this))) //  || $(this).is('.last')
    {
      found = true;
      if(!panel.hasClass("active"))
      {
        panel.addClass("active");
      }
    } else {
      panel.removeClass("active");
    }
  })
}

$(document).scroll(updateActiveSection);
updateActiveSection();

})

