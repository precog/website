var service = "http://demo.precog.io/services/quirrel/v1/query?tokenId=C5EF0038-A2A2-47EB-88A4-AAFCE59EC22B";

function _console(id, query)
{
  var console = $('#'+id),
    scroll = function() { console.animate({ scrollTop: console.prop("scrollHeight") }, 250); }
    controller = console.console({
    promptLabel: 'quirrel> ',
    continuedPromptLabel: '       | ',
    commandValidate:function(line){
      scroll();
//      window.console.log("commandValidate");
      return true;
    },
    commandHandle:function(line,report){
      controller.continuedPrompt = true;
      scroll();
//      window.console.log("commandHandle");
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

  if(query)
    controller.feed(query);

  return controller;
}

function buildConsole(id, query)
{
  $(document).ready(function(){
    var controller = _console(id, query);
    $('#'+id+'-execute-button').click(function() {
      controller.trigger();
    })
  })
}


buildConsole('console');