import React, { Component } from "react";

class QuizForm extends Component {
  render() {
    return (
      <>
        <p>{this.props.quizQuestion.question}</p>
        <form action="#">
          {this.props.quizQuestion.answers.map((data, index) => (
            <p key={index}>
              <label>
                <input className="with-gap" name="group1" type="radio"></input>
                <span>{data.answer}</span>
              </label>
            </p>
          ))}
        </form>
      </>
    );
  }
}

export default QuizForm;
