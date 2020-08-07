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
          {this.props.quizQuestion.answers.map(data => 
            <p>
            <label>
              <input className="with-gap" name="group1" type="radio"></input>
              <span>{data.answer}</span>
            </label>
          </p>
          )}
        </form>
        <button
          className="btn waves-effect waves-light red"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>
      </>
    );
  }
}

export default QuizForm;
