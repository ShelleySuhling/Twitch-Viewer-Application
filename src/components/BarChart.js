import React, { Component } from "react";
import * as d3 from "d3";
import * as _ from "lodash";
import moment from "moment";
import * as d3helpers from "../helpers/d3-helpers";

class BarChart extends Component {
  componentDidMount() {
    this.setState({
      data: this.props.data,
      timeFormatting: this.props.timeFormatting
    });
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      data: nextProps.data,
      timeFormatting: nextProps.timeFormatting
    };
  }

  renderBarChart = () => {
    var viewers = this.props.data;
    var formatTime = d3.timeFormat(this.props.timeFormatting);
    var days = _.map(this.props.data, d => {
      return formatTime(new Date(d.datetime));
    });

    var margin = { top: 5, right: this.state.width/5, bottom: 50, left: 50 };
    var fullWidth = this.state.width;
    var fullHeight = 300;
    // the width and height values will be used in the ranges of our scales
    var width = fullWidth - margin.right - margin.left;
    var height = fullHeight - margin.top - margin.bottom;

    var svg = d3
      .select(this.node)
      .append("svg")
      .attr("width", fullWidth)
      .attr("height", fullHeight)
      // this g is where the bar chart will be drawn
      .append("g")
      // translate it to leave room for the left and top margins
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // x value determined by month
    var dateScale = d3
      .scaleBand()
      .domain(days)
      .range([0, width])
      .paddingInner(0.1);

    // the width of the bars is determined by the scale
    var bandwidth = dateScale.bandwidth();

    // y value determined by temp
    var maxViewers = d3.max(viewers, function(d) {
      return d.viewers;
    });
    var viewerScale = d3
      .scaleLinear()
      .domain([0, maxViewers])
      .range([height, 0])
      .nice();

    var xAxis = d3.axisBottom(dateScale);
    var yAxis = d3.axisLeft(viewerScale);
    // draw the axes
    svg
      .append("g")
      .classed("x axis", true)
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    var yAxisEle = svg
      .append("g")
      .classed("y axis", true)
      .call(yAxis);

    // add a label to the yAxis
    var yText = yAxisEle
      .append("text")
      .attr("transform", "rotate(-90)translate(-" + height / 2 + ",0)")
      .style("text-anchor", "middle")
      .style("fill", "black")
      .attr("dy", "-2.5em")
      .style("font-size", 14)
      .text("viewers");

    var div = d3.select(this.node).append("div")   
      .attr("class", "tooltip")               
      .style("opacity", 0);

    var barHolder = svg.append("g").classed("bar-holder", true);

    var bars = barHolder
      .selectAll("rect.bar")
      .data(viewers)
      .enter()
      .append("rect")
      .classed("bar", true)
      .attr("x", function(d, i) {
        return dateScale(formatTime(moment(d.datetime)));
      })
      .attr("width", bandwidth)
      .attr("y", function(d) {
        return viewerScale(d.viewers);
      })
      .attr("height", function(d) {
        return height - viewerScale(d.viewers);
      })
      .style("fill", "blue")
      .style("stroke", "light-blue")
      .on("mouseover", function(d) {
        console.log('mouseover')      
        div.transition()        
            .duration(200)      
            .style("opacity", 1.4);      
        div.html("Time: " + formatTime(d.datetime) + "<br/> Avg:"  + d.viewers)  
            .style("left", (d3.event.pageX) + "px")     
            .style("top", (d3.event.pageY - 28) + "px");    
        })                  
    .on("mouseout", function(d) {       
        div.transition()        
            .duration(500)      
            .style("opacity", 0);   
    });



  };

  clearPreviousSvg = () => {
    d3.selectAll("svg").remove();
  };

  render() {
    this.clearPreviousSvg();
    this.renderBarChart();
    return <div ref={node => (this.node = node)} />;
  }
}
export default BarChart;
