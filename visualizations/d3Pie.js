  d3Pie = {version: "1.0"};
  function raiseBy(co, n) {
    var result = []
    result.push(co[0] * (n));
    result.push(co[1] * (n));
    return result;
  }

  d3Pie.createPie = function(containerId, rad, allData, colors) {
    var numArray = [],
        nameArray = [],
        color = (!colors) ? d3.scale.category20b() : function(n) { return colors[n]; };

    for (key in allData) {
      numArray.push(allData[key]);
      nameArray.push(key);
    }

    function newPie() {
      function highlightPie(n) {
        arcs.select("text")
        .attr("transform", function(d) { return "translate(" + raiseBy(arc.centroid(d), rad * 2) + ")"; });
        $("g.arc .pie-metric").css("font-size", "12");
        

        d3.select("#" + String(nameArray[n]))
          .select("text")
          .attr("transform", function(d) { return "translate(" + raiseBy(arc.centroid(d), rad * 3) + ")"; });
          
        $("#" + String(nameArray[n]) + " .pie-metric").css({fontSize : "22"});
      }

      var p = 80,
          w = Math.max((parseInt($("#" + containerId).css("width"))), 300),
          h = Math.max((parseInt($("#" + containerId).css("height"))), 180),
          pieW = w - (p * 3.3),
          pieH = h - (p),
          r = Math.min(pieW, pieH) / 2,
          data = numArray,
          donut = d3.layout.pie().sort(d3.descending),
          arc = d3.svg.arc().innerRadius(r * rad).outerRadius(r);
      var vis = d3.select("#" + containerId)
        .append("svg:svg")
          .data([data])
          .attr("width", w)
          .attr("height", h)
        .append("svg:g")
          .attr("transform", "translate(" + 200  + "," + 40 + ")")
          .attr("class", "padding");

      var legends = vis.selectAll("g")
          .data(nameArray).enter()
          .append("svg:text")
          .attr("transform", function(d, i) { return "translate(" + -200 + "," + (i + 1) * 14 + ")" })
          .attr("fill", function(d, i) { return color(i); })
          .attr("class", "legend-text")
          .text(function(d, i) { return d })
          .on("mouseover", function(d, i) { highlightPie(i); });

      var arcs = vis.selectAll("g.arc")
          .data(donut)
        .enter().append("svg:g")
          .attr("class", "arc")
          .attr("id", function(d, i) { return nameArray[i]; })
          .attr("transform", "translate(" + r  + "," + r + ")")
          .on("mouseover", function(d, i) { highlightPie(i); });

      arcs.append("svg:path")
          .attr("fill", function(d, i) { return color(i); })
          .attr("d", arc);

      arcs.append("svg:text")
          .attr("transform", function(d) { return "translate(" + raiseBy(arc.centroid(d), rad * 2) + ")"; })
          .attr("dy", ".35em")
          .attr("text-anchor", "middle")
          .attr("class", "pie-metric")
          .attr("display", function(d) { return d.value > .15 ? null : "none"; })
          .text(function(d, i) { return d.value; });
    }
    newPie(); 
  }
    