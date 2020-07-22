import React from 'react';
import Chart from 'chart.js';

class ResultChart extends React.Component {
  chartRef = React.createRef();

  componentDidMount() {
    const resultChart = this.chartRef.current.getContext("2d");

    new Chart (resultChart, {
      type: "pie",
      data: {
        datasets: [{
          data: [5, 10, 15]
        }],
        labels: [
          'Result 1',
          'Result 2',
          'Result 3'
        ]
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