import React from 'react';
import Chart from 'chart.js';

class ResultChart extends React.Component {
  state = {
    labels: ["One", "Two", "Three", "Four", "Five", "Six"]
  }

  chartRef = React.createRef();

  componentDidMount() {
    const resultChart = this.chartRef.current.getContext("2d");

    new Chart (resultChart, {
      type: "pie",
      data: {
        datasets: [{
          data: [5, 10, 15],
          backgroundColor: [
            "#2B0B3F",
            "#57167E",
            "#9B3192",
            "#EA5F89",
            "#F7B7A3",
            "#FFF1C9"
          ]
        }],
        labels: this.state.labels
      },
      options: {
        responsive: true,
        aspectRatio: 2.5
      }
    })
  }

  render() {
    return (
      <canvas id="resultChart" ref={this.chartRef} />
    );
  }
}

export default ResultChart;