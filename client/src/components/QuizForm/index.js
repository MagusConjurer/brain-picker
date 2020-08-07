import React, { Component } from "react";
import QuizSamples from "../../QuizSamples.json";

class QuizForm extends Component {
  state = {
    QuizSamples
  };

  render() {
    return (
      <>
        <h4>{QuizSamples.question}</h4>
        <form action="#">
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio"></input>
              <span>{QuizSamples.answers}</span>
            </label>
          </p>
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio"></input>
              <span>{QuizSamples.answers}</span>
            </label>
          </p>
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio"></input>
              <span>{QuizSamples.answers}</span>
            </label>
          </p>
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio"></input>
              <span>{QuizSamples.answers}</span>
            </label>
          </p>
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
