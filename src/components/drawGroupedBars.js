import * as d3 from "d3";
import { scaleLinear } from "d3";

function removeSVGContent(svgRef){
  d3.select(svgRef).selectAll('*').remove();
}

function drawGroupedBars(
  svgRef,
  data,
  margins,
  groups,
  categVar,
  type,
  xPadding
) {
  console.log('groupBars Called!')
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
        ? ["#AB47BC", "#00796B"]
        : ["#AB47BC", "#00796B", "#AB47BC", "#00796B"]
    );

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  const chartElements = d3.select(svgRef).select("g.chart_elements");
  //console.log(chartElements);
  //console.log(checkIfSelectEmpty(chartElements));

  if (type === "draw") {
    chartElements.selectAll('*').remove()
  }

  if (checkIfSelectEmpty(chartElements)) {
    const svgG = d3
      .select(svgRef)
      .append("g")
      .attr("class", "chart_elements")
      .attr("transform", `translate(${margins.top} ${margins.left})`);

    const xAxisG = d3
      .select(svgRef)
      .append("g")
      .attr(
        "transform",
        `translate(${margins.left},${svgHeight - margins.bottom})`
      )
      .classed("xAxisG", true)
      .call(xAxis)
      .style("font-size", "14px");

    const yAxisG = d3
      .select(svgRef)
      .append("g")
      .attr("transform", `translate(${margins.left},${margins.top})`)
      .classed("yAxisG", true)
      .call(yAxis)
      .style("font-size", "11px");

    yAxisG.select("path").style("stroke", "none ");
    xAxisG.select("path").style("stroke", "none");
    //xAxisG.selectAll("line").style("stroke", "none");

    const yAxisText = yAxisG.selectAll("text").attr("font-size", "0.8rem");
    const xAxisText = xAxisG.selectAll("text").attr("font-size", "1rem");
  }

  let bars = chartElements.selectAll("rect").data(longData);

  if (type === "draw") {
    console.log(longData);
    console.log(bars);
    console.log(type);

    bars = bars
    //enter
      .join("rect")
      .attr("x", (d) => xScale(d.riskFactors) + xzScale(d.group))
      .attr("y", (d) => height)
      .attr("rx", "2px")
      .attr("ry", "2px")
      .attr("width", xzScale.bandwidth())
      .attr("height", (d) => 0)
      .attr("fill", (d) => colScale(d.group));

    console.log(bars);
  }

  bars
    .transition()
    .duration(750)
    .attr("height", (d) => yScale(0) - yScale(d.value))
    .attr("y", (d) => yScale(d.value));

  d3.select("g.yAxisG").transition().duration(750).call(yAxis);
  d3.select("g.xAxisG").transition().duration(750).call(xAxis);
}

export { drawGroupedBars, removeSVGContent };

const checkIfSelectEmpty = (selection) => selection._groups[0][0] === undefined;
