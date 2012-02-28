$(document).ready(function(){

var console = $('#console'),
  scroll = function() { console.animate({ scrollTop: console.prop("scrollHeight") }, 250); }
  controller = console.console({
  promptLabel: 'quirrel> ',
  continuedPromptLabel: '       | ',
  commandValidate:function(line){
    scroll();
    return true;
  },
  commandHandle:function(line,report){
    controller.continuedPrompt = true;
    scroll();
    return;
  },
  execute:function(line, handler){
    if(line == "") return false;
    controller.continuedPrompt = false;
    setTimeout(function() {
      if(Math.random() < 0.5)
        handler({ msg : '{ some : "output here" } ', className : 'success'});
      else
        handler({ msg : 'error, you got it wrong', className : 'error'});
      scroll();
    }, 1000)
    scroll();
    return true;
  },
  promptHistory:true,
  autofocus:true
//  animateScroll:true,
});

$('#console-execute-button').click(function() {
  controller.trigger();
})

})

