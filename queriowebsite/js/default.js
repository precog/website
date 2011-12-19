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
  */
  var slides = 3,
      width  = 1090,
      index  = 0;
  function slide()
  {
    $("#leftarrow").attr("src", index == 0 ? "/imagesquerio/leftarrow-alt.png" : "/imagesquerio/leftarrow.png");
    $("#rightarrow").attr("src", index == slides-1 ? "/imagesquerio/rightarrow-alt.png" : "/imagesquerio/rightarrow.png");
    $("#appslider").animate({
      left : - index * width
    })
  }
  $("#rightarrow").click(function(){
    if(index == slides-1)
      return;
    index++;
    slide();
  })
  $("#leftarrow").click(function(){
    if(index == 0)
      return;
    index--;
    slide();
  })
})

