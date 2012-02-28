$(document).ready(function(){
var service = "http://demo.precog.io/services/quirrel/v1/query?tokenId=C5EF0038-A2A2-47EB-88A4-AAFCE59EC22B";

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

    API.Http.Jsonp.post(service, line, {
      success : function(data) {
        handler({ msg : data, className : 'success'});
        scroll();
      },
      failure : function(_, message) {
        handler({ msg : message, className : 'error'});
        scroll();
      }
    })
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

