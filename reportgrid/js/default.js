$(document).ready(function(){

$(".body-logo-1").mouseover(function(){
      $("#body-text-1").animate({
        opacity: 1.0,
        paddingTop: 30
        }, {queue: false}
        );
    }
    );

$(".body-logo-1").mouseleave(function(){
      $("#body-text-1").animate({
        opacity: 0.0,
        paddingTop: 60
        }, {queue: false}
        );
    }
    );

$(".body-logo-2").mouseover(function(){
      $("#body-text-2").animate({
        opacity: 1.0,
        paddingTop: 30
        }, {queue: false}
        );
    }
    );

$(".body-logo-2").mouseleave(function(){
      $("#body-text-2").animate({
        opacity: 0.0,
        paddingTop: 60
        }, {queue: false}
        );
    }
    );

})

