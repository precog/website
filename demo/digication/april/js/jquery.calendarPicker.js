jQuery.fn.calendarPicker = function(options) {
  // --------------------------  start default option values --------------------------
  if (!options.date) {
    options.date = new Date();
  }

  if (typeof(options.years) == "undefined")
    options.years=1;

  if (typeof(options.months) == "undefined")
    options.months=3;

  if (typeof(options.days) == "undefined")
    options.days=3;

  if (typeof(options.showArrows) == "undefined")
    options.showArrows=false;

  if (typeof(options.useWheel) == "undefined")
    options.useWheel=true;

  if (typeof(options.callbackDelay) == "undefined")
    options.callbackDelay=20;

  if (typeof(options.monthNames) == "undefined")
    options.monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (typeof(options.dayNames) == "undefined")
    options.dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (typeof(options.periodicity) == "undefined")
    options.periodicity = "day";

  if (typeof(options.disableAfter) == "undefined")
    options.disableAfter = new Date();

  if (typeof(options.disableBefore) == "undefined")
    options.disableBefore = null;


  // --------------------------  end default option values --------------------------

  var calendar = {currentDate: options.date};
  calendar.options = options;

  //build the calendar on the first element in the set of matched elements.
  var theDiv = this.eq(0);//$(this);
  theDiv.addClass("calBox");

  //empty the div
  theDiv.empty();


  var divYears = $("<div>").addClass("calYear");
  var divMonths = $("<div>").addClass("calMonth");
  var divDays = $("<div>").addClass("calDay");

  var width = theDiv.width();


  theDiv.append(divYears).append(divMonths).append(divDays);

  var comparableDate = function(d, p) {
    function pad(v) {
      return "" + (v < 10 ? "0" : "") + v;
    }
    switch(p)
    {
      case "year" : return d.getFullYear();
      case "month": return parseInt(d.getFullYear() + pad(d.getMonth()));
      case "day"  : return parseInt(d.getFullYear() + pad(d.getMonth()) + pad(d.getDate()));
    }
  }

  calendar.changeDate = function(date) {
    if(options.disableAfter && date.getTime() > options.disableAfter.getTime())
        date = options.disableAfter;
    else if(options.disableBefore && date.getTime() < options.disableBefore.getTime())
        date = options.disableBefore;
    calendar.currentDate = date;

    var fillYears = function(date) {
      var year = date.getFullYear();
      var t = new Date();
      divYears.empty();
      var nc = options.years*2+1;
      var w = parseInt((width-4-(nc)*4)/nc)+"px";
      var disafter  = options.disableAfter  && comparableDate(options.disableAfter,  "year"),
          disbefore = options.disableBefore && comparableDate(options.disableBefore, "year");
      for (var i = year - options.years; i <= year + options.years; i++) {
        var d = new Date(date);
        d.setFullYear(i);
        var span = $("<span>").addClass("calElement").attr("millis", d.getTime())
        if (i == year - options.years && options.showArrows) {
          span.addClass("prev").html("<");
        } else if (i == year + options.years && options.showArrows) {
          span.addClass("next").html(">");
        } else {
          span.html(i).css("width",w);
          if (d.getYear() == t.getYear())
            span.addClass("today");
          if (d.getYear() == calendar.currentDate.getYear())
            span.addClass("selected");
          if ((disafter && comparableDate(d, "year") > disafter) || (disbefore && comparableDate(d, "year") < disbefore))
            span.addClass("disabled");
        }
        divYears.append(span);
      }
    }

    var fillMonths = function(date) {
      var month = date.getMonth();
      var t = new Date();
      divMonths.empty();
      var oldday = date.getDay();
      var nc = options.months*2+1;
      var w = parseInt((width-4-(nc)*4)/nc)+"px";
      var disafter  = options.disableAfter  && comparableDate(options.disableAfter,  "month"),
          disbefore = options.disableBefore && comparableDate(options.disableBefore, "month");
      for (var i = -options.months; i <= options.months; i++) {
        var d = new Date(date);
        var oldday = d.getDate();
        d.setMonth(month + i);

        if (d.getDate() != oldday) {
          d.setMonth(d.getMonth() - 1);
          d.setDate(28);
        }
        var span = $("<span>").addClass("calElement").attr("millis", d.getTime())
        if (i == -options.months && options.showArrows) {
          span.addClass("prev").html("<");
        } else if (i == options.months && options.showArrows) {
          span.addClass("next").html(">");
        } else {
          span.html(options.monthNames[d.getMonth()]).css("width",w);
          if (d.getYear() == t.getYear() && d.getMonth() == t.getMonth())
            span.addClass("today");
          if (d.getYear() == calendar.currentDate.getYear() && d.getMonth() == calendar.currentDate.getMonth())
            span.addClass("selected");
          if ((disafter && comparableDate(d, "month") > disafter) || (disbefore && comparableDate(d, "month") < disbefore))
            span.addClass("disabled");
        }
        divMonths.append(span);
      }
    }

    var fillDays = function(date) {
      var day = date.getDate();
      var t = new Date();
      divDays.empty();
      var nc = options.days*2+1;
      var w = parseInt((width-4-(options.showArrows?12:0)-(nc)*4)/(nc-(options.showArrows?2:0)))+"px";
      var disafter  = options.disableAfter  && comparableDate(options.disableAfter,  "day"),
          disbefore = options.disableBefore && comparableDate(options.disableBefore, "day");
      for (var i = -options.days; i <= options.days; i++) {
        var d = new Date(date);
        d.setDate(day + i)
        var span = $("<span>").addClass("calElement").attr("millis", d.getTime())
        if (i == -options.days && options.showArrows) {
          span.addClass("prev").html("<");
        } else if (i == options.days && options.showArrows) {
          span.addClass("next").html(">");
        } else {
          span.html("<span class=dayNumber>" + d.getDate() + "</span><br>" + options.dayNames[d.getDay()]).css("width",w);
          if (d.getYear() == t.getYear() && d.getMonth() == t.getMonth() && d.getDate() == t.getDate())
            span.addClass("today");
          if (d.getYear() == calendar.currentDate.getYear() && d.getMonth() == calendar.currentDate.getMonth() && d.getDate() == calendar.currentDate.getDate())
            span.addClass("selected");
          if ((disafter && comparableDate(d, "day") > disafter) || (disbefore && comparableDate(d, "day") < disbefore))
            span.addClass("disabled");
        }
        divDays.append(span);

      }
    }

    var deferredCallBack = function() {
      if (typeof(options.callback) == "function") {
        if (calendar.timer)
          clearTimeout(calendar.timer);

        calendar.timer = setTimeout(function() {
          options.callback(calendar);
        }, options.callbackDelay);
      }
    }

    fillYears(date);
    fillMonths(date);
    fillDays(date);

    deferredCallBack();

  }

  calendar.changePeriodicity = function(periodicity)
  {
    if(["day", "month", "year"].indexOf(periodicity) < 0)
      return;
    options.periodicity = periodicity;
    switch(periodicity)
    {
      case "day":
        divDays.show();
        divMonths.show();
        break;
      case "month":
        divDays.hide();
        divMonths.show();
        break;
      case "year":
        divDays.hide();
        divMonths.hide();
        break;
    }
  }

  calendar.lowerDate = function()
  {
    var d = calendar.currentDate;
    switch(options.periodicity)
    {
      case "day":   return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0);
      case "month": return new Date(d.getFullYear(), d.getMonth(), 1, 0, 0, 0);
      case "year":  return new Date(d.getFullYear(), 0, 1, 0, 0, 0);
    }
  }

  calendar.higherDate = function()
  {
    var d = calendar.currentDate;
    switch(options.periodicity)
    {
      case "day":   return new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1, 0, 0, 0);
      case "month": return new Date(d.getFullYear(), d.getMonth() + 1, 1, 0, 0, 0);
      case "year":  return new Date(d.getFullYear() + 1, 0, 1, 0, 0, 0);
    }
  }

  theDiv.click(function(ev) {
    var el = $(ev.target).closest(".calElement");
    if (!el.hasClass("disabled") && el.hasClass("calElement")) {
      calendar.changeDate(new Date(parseInt(el.attr("millis"))));
    }
  });


  //if mousewheel
  if ($.event.special.mousewheel && options.useWheel) {
    divYears.mousewheel(function(event, delta) {
      var d = new Date(calendar.currentDate.getTime());
      d.setFullYear(d.getFullYear() + delta);
      calendar.changeDate(d);
      return false;
    });
    divMonths.mousewheel(function(event, delta) {
      var d = new Date(calendar.currentDate.getTime());
      d.setMonth(d.getMonth() + delta);
      calendar.changeDate(d);
      return false;
    });
    divDays.mousewheel(function(event, delta) {
      var d = new Date(calendar.currentDate.getTime());
      d.setDate(d.getDate() + delta);
      calendar.changeDate(d);
      return false;
    });
  }


  calendar.changeDate(options.date);
  calendar.changePeriodicity(options.periodicity);

  return calendar;
};