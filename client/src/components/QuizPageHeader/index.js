import React, { Component } from "react";

class QuizHeading extends Component {
  render() {
    return this.props.QuizSample.map((QuizSample) => (
      <div>
        <h1>{QuizSample.quizName}</h1>
        <h4>Let us pick your brain.</h4>
        <br />
      </div>
    ));
  }
}

export default QuizHeading;
