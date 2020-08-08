import React, { Component } from "react";

class QuizForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h4>{this.props.quizQuestion.question}</h4>
        <form action="#">
          {this.props.quizQuestion.answers.map((data) => (
            <p>
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
