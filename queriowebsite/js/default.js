$(document).ready(function(){
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
})