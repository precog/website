$(document).ready(function(){
    editor = ace.edit("console");
    editor.commands.addCommand({
        name: 'executeQuery',
        bindKey: {
            win: 'Shift-Return',
            mac: 'Shift-Return|Command-Return',
            sender: 'editor|cli'
        },
        exec: function(env, args, request) {
          executeQuery();
        }
    });
    editor.setTheme("ace/theme/pastel_on_dark");
    editor.setShowPrintMargin(false);
    var QuirrelMode = require("ace/mode/quirrel").Mode;
    editor.getSession().setMode(new QuirrelMode());

    var output = $("#console-output");

    var displayOutput = function(text, cls)
    {
      output.append('<div class="msg '+cls+'">'+text+'</div>');
      output.animate({ scrollTop: output.prop("scrollHeight") }, 250);
    }
    var success = function(response) {
      displayOutput(response, "success");
    }

    var error = function(message) {
      displayOutput(message, "error");
    }

    var executeQuery = function()
    {
      var content = editor.getSession().getValue();
      setTimeout(function() {
        Math.random() < 0.5 ? success('{ a : 1 }') : error("doesn't work");
      }, 100) // replace with POST to service
    }
    $('#console-execute-button').click(executeQuery);
})

