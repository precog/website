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
  $(".capture-lg").mouseover(function(){
      $("#hiw-panel-slider").animate({
          'left': '0'
          }, {queue: false}
          );
      }
      );
  $(".enrich-lg").mouseover(function(){
      $("#hiw-panel-slider").animate({
          'left': '-1050'
          }, {queue: false}
          );
      }
      );
  $(".analyze-lg").mouseover(function(){
      $("#hiw-panel-slider").animate({
          'left': '-2100'
          }, {queue: false}
          );
      }
      );
  $(".act-lg").mouseover(function(){
      $("#hiw-panel-slider").animate({
          'left': '-3150'
          }, {queue: false}
          );
      }
      );

// HOW IT WORK CAPTURE
$(".hiw-pane").mouseover(function(){
      $(".hiw-text-pane").css({
        'display': 'none'
        }, {queue: false}
        );
      
      var id = $(this).attr("id").split("-").pop();
      
      $("#hiw-text-"+id).css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );

// HOW IT WORK ANALYZE
$(".hiw-analyze-icon").mouseover(function(){
      $(".hiw-text-pane").css({
        'display': 'none'
        }, {queue: false}
        );
      $(".analyze-script").css({
        'display': 'none'
        }, {queue: false}
        );
      
      var idanalyze = $(this).attr("id").split("-").pop();
      
      $("#hiw-analyze-"+idanalyze).css({
        'display': 'block'
        }, {queue: false}
        );
      $("#analyze-script-"+idanalyze).css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );

//HOW IT WORKS ENRICH
$(".hiw-enrich-panel").mouseover(function(){
      $(".hiw-text-pane").css({
        'display': 'none'
        }, {queue: false}
        );
       
      var idenrich = $(this).attr("id").split("-").pop();
      
      $("#hiw-enrich-"+idenrich).css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );
      
      
// HOW IT WORK ACT
$(".hiw-act-app").mouseover(function(){
      $(".hiw-text-pane2").css({
        'display': 'none'
        }, {queue: false}
        );
      $(".hiw-act-app-pic").css({
        'display': 'none'
        }, {queue: false}
        );
       
      var idact = $(this).attr("id").split("-").pop();
      
      $("#hiw-act-"+idact).css({
        'display': 'block'
        }, {queue: false}
        );
      $("#hiw-act-app-pic-"+idact).css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );

//WHY PRECOG
$("#why-dot-left").click(function(){
    $("#why-precog-slider").animate({
        'left': '0'
        }, {queue: false}
        );
    }
    );
$("#why-dot-middle").click(function(){
    $("#why-precog-slider").animate({
        'left': '-390'
        }, {queue: false}
        );
    }
    );
$("#why-dot-right").click(function(){
    $("#why-precog-slider").animate({
        'left': '-780'
        }, {queue: false}
        );
    }
    );

//JOBS
$(".scrolling-right-panel-graphic").mouseover(function(){
  $(".scrolling-right-panel-graphic").animate({
        'left': '-1230'
        }, 17500
        );
}
);

//DEVELOPER CENTER
$(".dev-center-api-docs").mouseover(function(){
      $(".dev-center-api-doc").css({
        'display': 'block'
        }, {queue: false}
        );
      }
    );

//PRICING
$(".body-pricing-difference").mouseover(function(){
      $(".body-pricing-difference-li").animate({
        'opacity': '1.0'
        }, {queue: false}
        );
      $(".body-pricing-difference ul").animate({
        'top': '180'
        }, {queue: false}
        );
    }
    );

//ABOUT
$(".jdg").mouseenter(function(){
      $(".jdg-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".jdg").mouseleave(function(){
      $(".jdg-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".fp").mouseenter(function(){
      $(".fp-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".fp").mouseleave(function(){
      $(".fp-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".knc").mouseenter(function(){
      $(".knc-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".knc").mouseleave(function(){
      $(".knc-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".js").mouseenter(function(){
      $(".js-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".js").mouseleave(function(){
      $(".js-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".ds").mouseenter(function(){
      $(".ds-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".ds").mouseleave(function(){
      $(".ds-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".dcb").mouseenter(function(){
      $(".dcb-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".dcb").mouseleave(function(){
      $(".dcb-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".nm").mouseenter(function(){
      $(".nm-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".nm").mouseleave(function(){
      $(".nm-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".mdg").mouseenter(function(){
      $(".mdg-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".mdg").mouseleave(function(){
      $(".mdg-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".ap").mouseenter(function(){
      $(".ap-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".ap").mouseleave(function(){
      $(".ap-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

$(".yh").mouseenter(function(){
      $(".yh-contact").animate({
        opacity: 1.0,
        top: 96
        }, {queue: false}
        );
    }
    );

$(".yh").mouseleave(function(){
      $(".yh-contact").animate({
        opacity: 0.0,
        top: 110
        }, {queue: false}
        );
    }
    );

//NEWS AND EVENTS
$("#news-items-only").click(function(){
      $(".event-item").css({
        'display': 'none'
        }, {queue: false}
        );
      $(".news-item").css({
        'display': 'block'
        }, {queue: false}
        );
    }
    );

$("#event-items-only").click(function(){
      $(".event-item").css({
        'display': 'block'
        }, {queue: false}
        );
      $(".news-item").css({
        'display': 'none'
        }, {queue: false}
        );
    }
    );


})

