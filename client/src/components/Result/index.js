import React from 'react';
import ResultChart from '../ResultChart';

class Result extends React.Component {
  state = {
    quiz: "Quiz Name",
    title: "Result Title",
    image: "https://picsum.photos/200",
    description: "Result Description"
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title center-align">{this.state.quiz}</span>
          <h5 className="center-align">{this.state.title}</h5>
          {this.state.image !== "" ?
            <div className="row">
              <div className="card-image">
                <img className="col s4" src={this.state.image} alt={this.state.title} />
              </div>
              <p className="col s8">{this.state.description}</p>
            </div>
            : <div className="row">
                <p className="col s12">{this.state.description}</p>
              </div>
          }
          <div className="row">
            <span className="col s8"></span> 
            <p className="col s4 right-align">Compare Your Results <i className="activator material-icons right">expand_less</i></p>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title center-align">{this.state.quiz}<i className="material-icons right">close</i></span>
          <ResultChart />
        </div>
      </div>
    );
  }
}

export default Result;