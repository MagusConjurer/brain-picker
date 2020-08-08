import React, { Component } from "react";
import "./style.css";

class QuizCards extends Component {
  render() {
    return this.props.QuizSample.map((QuizSample, index) => (
      <div key={index} className="card cardWidth sticky-action">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={QuizSample.image} alt={QuizSample.quizName}></img>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {QuizSample.quizName}<i className="material-icons right">more_vert</i>
          </span>
          <p><a href="/Quiz">Take Quiz</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {QuizSample.quizName}<i className="material-icons right">close</i>
          </span>
          <p>
            {QuizSample.description}
          </p>
        </div>
      </div>
    ));
  }
}

export default QuizCards;
