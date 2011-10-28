$(function() {
  var tracking_sample = "ReportGrid.track(\n"+
  " '/callcenter/217',\n"+
  " {\n"+
  "   customer_support : {\n"+
  "     type: 'call',\n"+
  "     duration: 147,\n"+
  "     representative: 'Alice Brewer',\n"+
  "     resolution: {\n"+
  "       type: 'escalated',\n"+
  "       to:   'Candice Deming'\n"+
  "     },\n"+
  "     '#timestamp': (new Date()).getTime(),\n"+
  "   }\n"+
  " }\n"+
  ");";

  var pie_sample = "ReportGrid.pieChart('#output', {\n"+
  "  path: '/callcenter/217',\n"+
  "  event: 'customer_support',\n"+
  "  property: '.type',\n"+
  "});";

  var line_sample = "ReportGrid.lineChart('#output', {\n"+
  "  path: '/callcenter/217',\n"+
  "  event: 'customer_support',\n"+
  "  property: 'type',\n"+
  "  start: '1 day ago',\n"+
  "  end: 'now'\n"+
  "});";

  var heat_sample = "ReportGrid.heatGrid('#output', {\n"+
  "  axes : [\n"+
  "    { type : '.type' }, \n"+
  "    { type : '.representative' },\n"+
  "    { type : 'count' }\n"+
  "  ],\n"+
  "  data: {\n"+
  "    src: [{\n"+
  "      path : '/callcenter/217',\n"+
  "      event : 'customer_support',\n"+
  "      query: '.type * .representative',\n"+
  "      start: '1 day ago',\n"+
  "      end: 'now'\n"+
  "    }]\n"+
  "  },\n"+
  "  options: {\n"+
  "    color: 'interpolated-#FFFFFF,#FF7F0E'\n"+
  "  }\n"+
  "});";

  var setupTestConsole = function() {
    var draw = function() {
      eval($('#inputconsole').val());
    };

    $('#track_sample').click(function(ev) {
      $('#inputconsole').val(tracking_sample);
      draw();
    });

    $('#pie_sample').click(function(ev) {
      $('#inputconsole').val(pie_sample);
      draw();
    });

    $('#line_sample').click(function(ev) {
      $('#inputconsole').val(line_sample);
      draw();
    });

    $('#heat_sample').click(function(ev) {
      $('#inputconsole').val(heat_sample);
      draw();
    });

    $('#inputconsole').keypress(function(ev) {
      if ( ev.which == 13 && !ev.shiftKey ) {
        ev.preventDefault();
        draw();
      }
    });
  };

  setupTestConsole();
});
