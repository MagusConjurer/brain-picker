import React, { Component } from "react";

class QuizHeading extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.quiz.quizName}</h1>
        <h4>Let us pick your brain.</h4>
        <br />
      </div>
    );
  }
}

export default QuizHeading;
