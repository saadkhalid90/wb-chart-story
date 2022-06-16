import * as d3 from "d3";
import { scaleLinear, svg } from "d3";

function removeSVGContent(svgRef) {
  d3.select(svgRef).selectAll("*").remove();
}

function drawGroupedBars(
  svgRef,
  data,
  margins,
  groups,
  categVar,
  type,
  xPadding,
  title
) {
  // one entry for each bar (for each group flesh out the data and use flatmap to get one consolidated array)

  const longData = groups.flatMap((group) =>
    data.map((d) => ({
      riskFactors: d[categVar],
      group: group,
      value: d[group],
    }))
  );

  // getting viewBox Attr of our SVG
  const viewBox = d3.select(svgRef).attr("viewBox").split(" ");

  // getting width and height from the SVG viewbox
  const svgWidth = viewBox[2];
  const svgHeight = viewBox[3];

  // Effective width and height for the SVG group
  const width = svgWidth - margins.left - margins.right;
  const height = svgHeight - margins.top - margins.bottom;

  const xDomain = longData.map((d) => d.riskFactors);
  const xRange = [0, width];
  // const xPadding = 0.3;
  const xScale = d3
    .scaleBand()
    .domain(xDomain)
    .range(xRange)
    .paddingInner(xPadding);

  const zDomain = longData.map((d) => d.group);
  const zPadding = 0.05;
  const xzScale = d3
    .scaleBand(zDomain, [0, xScale.bandwidth()])
    .padding(zPadding);

  const yDomain = [0, d3.max(longData.map((d) => d.value))];
  const yRange = [height, 0];
  const yScale = scaleLinear().domain(yDomain).range(yRange).nice();

  const colScale = d3
    .scaleOrdinal()
    .domain(groups)
    .range(
      groups.length === 2
        ? ["#1f78b4", "#b2df8a"]
        : ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c"]
    );

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  const chartElements = d3.select(svgRef).select("g.chart_elements");

  if (type === "draw") {
    chartElements.selectAll("*").remove();
  }

  if (checkIfSelectEmpty(chartElements)) {
    const svgG = d3
      .select(svgRef)
      .append("g")
      .attr("class", "chart_elements")
      .attr("transform", `translate(${margins.left} ${margins.top})`);

    const xAxisG = d3
      .select(svgRef)
      .append("g")
      .attr(
        "transform",
        `translate(${margins.left} ${svgHeight - margins.bottom + 5})`
      )
      .classed("xAxisG", true)
      .call(xAxis);

    xAxisG.selectAll("text").style("font-size", "18px");
    xAxisG.selectAll("line").style("opacity", "0");

    const yAxisG = d3
      .select(svgRef)
      .append("g")
      .attr("transform", `translate(${margins.left - 10} ${margins.top})`)
      .classed("yAxisG", true)
      .call(yAxis)
      .style("font-size", "11px");

    yAxisG.select("path").style("stroke", "none ");
    xAxisG.select("path").style("stroke", "none");
    //xAxisG.selectAll("line").style("stroke", "none");

    const yAxisText = yAxisG.selectAll("text").attr("font-size", "0.8rem");
    xAxisG
      .append("text")
      .attr("class", "xAxis-title")
      .text("Number of risks")
      .attr("transform", "translate(0 50)")
      .style("fill", "black")
      .style("text-anchor", "start")
      .style("font-size", "14px")
      .style("fill", "#616161");
  }

  let bars = d3.select("g.chart_elements").selectAll("rect").data(longData);

  d3.select("g.chart_elements").selectAll("text.chart_title").remove();

  d3.select("g.chart_elements")
    .append("text")
    .attr("class", "chart_title")
    .attr("transform", `translate(-${margins.left} -75)`)
    .text(title)
    .style("fill-opacity", 0)
    .style("font-size", "17px")
    .style("font-weight", 600)
    .attr("dy", "-8px")
    .transition()
    .duration(750)
    .style("fill-opacity", 1)
    .style("fill", "#616161")
    .attr("dy", "0px");

  d3.select("g.chart_elements")
    .append("text")
    .attr("class", "chart_title")
    .attr("transform", `translate(-${margins.left} -60)`)
    .text("(Percent)")
    .style("fill-opacity", 0)
    .style("font-size", "12px")
    .attr("dy", "-8px")
    .transition()
    .duration(750)
    .style("fill-opacity", 1)
    .style("fill", "#616161")
    .attr("dy", "0px");

  if (type === "draw") {
    bars = bars
      //enter
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.riskFactors) + xzScale(d.group))
      .attr("y", (d) => height)
      .attr("rx", "2px")
      .attr("ry", "2px")
      .attr("width", xzScale.bandwidth())
      .attr("height", (d) => 0)
      .attr("fill", (d) => colScale(d.group));
  }

  bars
    .transition()
    .duration(750)
    .attr("height", (d) => yScale(0) - yScale(d.value))
    .attr("y", (d) => yScale(d.value));

  d3.select("g.yAxisG").transition().duration(750).call(yAxis);
  d3.select("g.xAxisG").transition().duration(750).call(xAxis);

  d3.select("g.xAxisG")
    .selectAll("g.tick")
    .select("text")
    .style("font-size", "18px");
  d3.select("g.xAxisG").selectAll("line").style("opacity", "0");
  d3.select("g.yAxisG").selectAll("text").attr("font-size", "0.8rem");

  removeAndDrawLegend(d3.select("g.chart_elements"), colScale, 100, margins);
}

function removeAndDrawLegend(parentSelection, colScale, separation, margins) {
  parentSelection.select("g.color-legend").remove();

  const legendParentGrp = parentSelection
    .append("g")
    .attr("transform", `translate(-${margins.left} -45)`)
    .attr("dy", "-8px");

  legendParentGrp
    .style("opacity", "0")
    .transition()
    .duration(750)
    .attr("dy", "0px")
    .style("opacity", "1");

  const legendGrps = legendParentGrp
    .attr("class", "color-legend")
    .selectAll("g")
    .data(colScale.domain())
    .enter()
    .append("g")
    .attr("transform", (d, i) => `translate(${i * separation}, 0)`);

  console.log(legendGrps);

  legendGrps
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 20)
    .attr("height", 12)
    .attr("fill", (d) => colScale(d));

  legendGrps
    .append("text")
    .attr("x", 0)
    .attr("dx", 25)
    .attr("y", 0)
    .attr("dy", '0.75em')
    .style("font-size", '14px')
    .text(d => d.replace("_DOT", ""));
}

export { drawGroupedBars, removeSVGContent };

const checkIfSelectEmpty = (selection) => selection._groups[0][0] === undefined;
