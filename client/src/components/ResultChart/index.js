import React from 'react';
import Chart from 'chart.js';

class ResultChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartRef: React.createRef()
    }
  }

  createChart = () => {
    const resultChart = this.state.chartRef.current.getContext("2d");

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
        labels: this.props.labels
      },
      options: {
        responsive: true,
        aspectRatio: 2.5,
        legend: {
          onClick: (e) => e.stopPropagation()
        }
      }
    })
  }

  componentDidMount() {
    this.createChart();
  }

  render() {
    return (
      <div className="card-reveal">
        <span className="card-title center-align">{this.props.quiz}<i className="material-icons right">expand_more</i></span>
        <canvas id="resultChart" ref={this.state.chartRef} />
      </div>
    );
  }
}

export default ResultChart;