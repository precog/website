$(document).ready(function(){

$(".body-section-1").mouseover(function(){
      $("#body-text-1").animate({
        opacity: 1.0
        }, {queue: false}
        );
    }
    );

$(".body-section-1").mouseleave(function(){
      $("#body-text-1").animate({
        opacity: 0.3
        }, {queue: false}
        );
    }
    );

$(".body-section-2").mouseover(function(){
      $("#body-text-2").animate({
        opacity: 1.0
        }, {queue: false}
        );
    }
    );

$(".body-section-2").mouseleave(function(){
      $("#body-text-2").animate({
        opacity: 0.3
        }, {queue: false}
        );
    }
    );

$('.body-section-1').click(function () {
    window.open('http://reportgrid.com/charts');
});

$('.body-section-2').click(function () {
    window.open('http://precog.io');
});

})

