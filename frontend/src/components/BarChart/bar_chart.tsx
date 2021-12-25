import * as d3 from "d3";
import { useEffect, useRef } from "react";
import UseResizeObserverApiHook from "hooks/useResizeObserverApiHook";

import "./bar_chart.css";

const BarChart = ({
  currency_names,
  currency_rates,
}: {
  currency_names: string[];
  currency_rates: number[];
}) => {
  const svgRef = useRef(null);
  const divWrapperRef = useRef(null);
  const dimensions = UseResizeObserverApiHook(divWrapperRef);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    if (!dimensions) return;

    let { bottom, height, left, right, top, width } = dimensions;

    console.log(
      "bottom: " +
        bottom +
        "\nheight: " +
        height +
        "\nleft: " +
        left +
        "\nright: " +
        right +
        "\ntop: " +
        top +
        "\nwidth: " +
        width
    );

    //new height accoring to the elements in the array
    height = Math.ceil((currency_names.length + 0.1) * 25) - top - bottom;
    width = width - left - right;

    console.log("height: " + height + "  " + "width: " + width);
    //height = height ;

    //svg
    //.attr("preserveAspectRatio", "xMinYMin meet")
    //.attr("viewBox", [0, 0, width, height])
    //.classed("svg-content-responsive", true)
    //.attr("width", width)
    //.attr("height", height)
    //.style("border", "1px solid black");

    svg
      .attr("viewBox", [0, 0, width, height])
      .style("border", "1px solid black");

    const maxElement = d3.max(currency_rates);
    const yPadding = 0.1;

    const xScale = d3
      .scaleLinear()
      .domain([0, Number(maxElement)])
      .range([left, width - right]);

    const yDomain = new d3.InternSet(currency_names);

    const yScale: any = d3
      .scaleBand()
      .padding(yPadding)
      .domain(yDomain)
      .range([top, height - bottom]);

    const xAxis: any = d3.axisTop(xScale).ticks(width / 80);
    const yAxis: any = d3.axisLeft(yScale).tickSizeOuter(20);

    const I = d3
      .range(currency_rates.length)
      .filter((i) => yDomain.has(currency_names[i]));

    // g.select(".domain").remove() => removes the domin x-axis line
    svg
      .select(".x-axis")
      .attr("transform", `translate(0,${top})`)
      .call(xAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("y2", height - top - bottom)
          .attr("stroke-opacity", 0.1)
      );

    svg.select(".y-axis").call(yAxis).attr("transform", `translate(${left},0)`);

    svg
      .selectAll(".bar")
      .data(currency_names, (data, key) => key)
      .join("rect")
      .attr("class", "bar")
      .attr("fill", "teal")
      .attr("x", xScale(0))
      .attr("y", (data, index) => yScale(currency_names[index]))
      .attr("width", (data, index) => xScale(currency_rates[index]) - xScale(0))
      .attr("height", yScale.bandwidth());
  }, [currency_names, currency_rates, dimensions]);

  return (
    <>
      <div ref={divWrapperRef} className="barChartWrapperDiv">
        <svg ref={svgRef} className=".svg_bar">
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </>
  );
};

export default BarChart;
