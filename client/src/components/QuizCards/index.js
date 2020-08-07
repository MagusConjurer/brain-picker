import React, { Component } from "react";
import "./style.css";

class QuizCards extends Component {
  render() {
    return this.props.QuizSample.map((QuizSample) => (
      <div class="card cardWidth sticky-action">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src={QuizSample.image} alt={QuizSample.quizName}></img>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {QuizSample.quizName}<i class="material-icons right">more_vert</i>
          </span>
          <p><a href="/Quiz">Take Quiz</a></p>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {QuizSample.quizName}<i class="material-icons right">close</i>
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
