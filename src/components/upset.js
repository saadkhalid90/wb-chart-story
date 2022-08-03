import * as d3 from "d3";
import { descending, scaleLinear, svg } from "d3";

function drawUpset(svgRef, dataComplete, isBaloch = false) {
  removeAllSvgElements(d3.select(svgRef));

  // getting viewBox Attr of our SVG
  const viewBox = d3.select(svgRef).attr("viewBox").split(" ");

  const aggData = computeAggregateSets(dataComplete);

  console.log(aggData);

  let data = dataComplete.filter((d, i) => i < 20);
  data = data.sort((a, b) => b.value - a.value);

  // getting width and height from the SVG viewbox
  const svgWidth = viewBox[2];
  const svgHeight = viewBox[3];

  const chartMargin = { top: 40, bottom: 0, left: 0, right: 0 };
  const bars1Margin = { top: 20, bottom: 190, left: 280, right: 10 };
  const bars2Margin = { top: 360, bottom: 50, left: 10, right: 680 };
  const gridMargin = { top: 360, bottom: 50, left: 280, right: 10 };

  // Effective width and height for the bars1 group
  const bars1Width = svgWidth - bars1Margin.left - bars1Margin.right;
  const bars1Height = svgHeight - bars1Margin.top - bars1Margin.bottom;

  console.log(bars1Width);

  const gridWidth = svgWidth - gridMargin.left - gridMargin.right;
  const gridHeight = svgHeight - gridMargin.top - gridMargin.bottom;

  const yDomainBar1 = [0, d3.max(data.map((d) => d.value))];
  const yRangeBar1 = [bars1Height, 0];
  const yScaleBar1 = scaleLinear().domain(yDomainBar1).range(yRangeBar1).nice();

  const xScaleBar1 = d3
    .scaleBand()
    .domain(data.map((d) => d.comb))
    .range([0, bars1Width])
    .paddingInner(0.05);

  // Effective width and height for the bars2 group
  const bars2Width = svgWidth - bars2Margin.left - bars2Margin.right;
  const bars2Height = svgHeight - bars2Margin.top - bars2Margin.bottom;
  const xDomainBar2 = [0, d3.max(aggData.map((d) => d.value))];
  const xRangeBar2 = [0, bars2Width];
  const xScaleBar2 = scaleLinear().domain(xDomainBar2).range(xRangeBar2).nice();

  const yScaleBar2 = d3
    .scaleBand()
    .domain(aggData.map((d) => d.set))
    .range([0, bars2Height])
    .paddingInner(0.35);

  const upsetPlotG = d3
    .select(svgRef)
    .append("g")
    .attr("class", "upsetPlotG")
    .attr("transform", `translate(${chartMargin.left} ${chartMargin.top})`);

  const bars1Grp = upsetPlotG
    .append("g")
    .attr("class", "bars1Grp")
    .attr("transform", `translate(${bars1Margin.left} ${bars1Margin.top})`);

  bars1Grp
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d) => xScaleBar1(d.comb))
    .attr("y", (d) => bars1Height)
    .attr("width", xScaleBar1.bandwidth())
    .attr("fill", "#2078B4")
    .attr("height", 0)
    .attr("rx", "2px")
    .attr("ry", "2px")
    .transition()
    .duration(750)
    .attr("height", (d) => yScaleBar1(0) - yScaleBar1(d.value))
    .attr("y", (d) => yScaleBar1(d.value));

  bars1Grp
    .selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d) => xScaleBar1(d.comb) + xScaleBar1.bandwidth() / 2)
    .attr("y", (d) => yScaleBar1(d.value))
    .text((d) => `${d.value}`)
    .attr("fill", "#424242")
    .style("text-anchor", "middle")
    .style("font-size", "11px")
    .style("font-weight", "500")
    .style("fill-opacity", 0)
    .attr("dy", "20px")
    .transition()
    .duration(750)
    .attr("dy", "-10px")
    .style("fill-opacity", 1);

  const bars2Grp = upsetPlotG
    .append("g")
    .attr("class", "bars2Grp")
    .attr("transform", `translate(${bars2Margin.left} ${bars2Margin.top})`);

  const bars2G = bars2Grp
    .selectAll("g")
    .data(aggData)
    .enter()
    .append("g")
    .attr("class", "bars2G");

  // const xAxisG = d3
  //   .select(svgRef)
  //   .append("g")

  //   .classed("xAxisG", true)
  //   .call(xAxis2);

  bars2G
    .append("rect")
    .attr("x", (d) => bars2Width)
    .attr("y", (d) => yScaleBar2(d.set))
    .attr("width", (d) => 0)
    .attr("fill", "#2078B4")
    .attr("height", yScaleBar2.bandwidth())
    .attr("rx", "2px")
    .attr("ry", "2px")
    .transition()
    .duration(750)
    .attr("x", (d) => bars2Width - xScaleBar2(d.value))
    .attr("width", (d) => xScaleBar2(d.value));

  bars2G
    .append("text")
    .attr("class", "set_labels")
    .attr("x", (d) => bars2Width + 5)
    .attr("y", (d) => yScaleBar2(d.set))
    .style("opacity", 0)
    .style("font-size", "12px")
    .attr("dy", isBaloch ? "0.85em" : "0.75em")
    .text((d) => d.set)
    .transition()
    .duration(750)
    .style("opacity", 1);

  bars2G
    .append("text")
    .attr("class", "value_labels")
    .attr("x", (d) => bars2Width - xScaleBar2(d.value) - 35)
    .attr("y", (d) => yScaleBar2(d.set) + yScaleBar2.bandwidth())
    .attr("dy", isBaloch ? "-0.25em" : "0em")
    .style("opacity", 0)
    .style("font-size", "12px")
    .attr("dx", "0.75em")
    .text((d) => `${Math.round(d.value)}%`)
    .transition()
    .duration(750)
    .style("dx", 0)
    .style("opacity", 1);

  const gridData = computeGridData(data, aggData);

  const gridGrp = upsetPlotG
    .append("g")
    .attr("class", "gridGrp")
    .attr("transform", `translate(${gridMargin.left} ${gridMargin.top})`);

  const cellHeight = gridHeight / gridData.length;
  const cellWidth = gridWidth / data.length;

  console.log(gridWidth);

  const gridRows = gridGrp
    .selectAll("g")
    .data(gridData)
    .enter()
    .append("g")
    .attr("class", "gridRow")
    .attr("transform", (d, i) => `translate(${0} ${i * cellHeight})`);

  const cellPadding = 1;

  gridRows
    .selectAll("rect")
    .data((d) => d.arr)
    .enter()
    .append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("rx", "2px")
    .attr("ry", "2px")
    .attr("transform", (d, i) => `translate(${i * cellWidth} ${0})`)
    .attr("width", cellWidth - cellPadding)
    .attr("height", cellHeight - cellPadding)
    .attr("fill", (d) => (d ? "#A6CFE3" : "#e0e0e0"))
    .style("fill-opacity", 0)
    .transition()
    .duration(750)
    .style("fill-opacity", 1);
}

function removeAllSvgElements(svgContainer) {
  svgContainer.selectAll("*").remove();
}

function computeAggregateSets(data, descending = true) {
  const sortedData = data.sort((a, b) => b.value - a.value);

  const sortedDataSpread = sortedData.flatMap((entry) =>
    entry.comb.map((d) => ({ set: d, value: entry.value }))
  );

  const sets = sortedDataSpread.map((d) => d.set);
  const uniqueSets = sets.filter((d, i) => sets.indexOf(d) === i);

  const setCount = [];

  for (const set of uniqueSets) {
    const sum = d3.sum(
      sortedDataSpread.filter((d) => d.set === set).map((d) => d.value)
    );
    setCount.push({
      set: set,
      value: sum,
    });
  }
  return setCount.sort((a, b) => descending ? b.value - a.value : a.value - b.value);
}

function computeGridData(data, aggData) {
  const sets = aggData.map((d) => d.set);

  return sets.map((set) => ({
    set: set,
    arr: data.map((datum) => datum.comb.includes(set)),
  }));
}

export { drawUpset };
