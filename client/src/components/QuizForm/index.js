import React, { Component } from "react";
import QuizSamples from "../../QuizSamples.json";

class InputInfo extends Component {
  state = {
    QuizSamples
  }

  render(){
    return(
      <InputInfo>
          {this.state.QuizSamples.map(QuizSamples => <QuizForm
          id={QuizSamples.id}
          onClick={this.handleSubmit}
          quizName={QuizSamples.quizName}
          answers={QuizSamples.answers}
          />)}
      </InputInfo>
    )
  }
}


class QuizForm extends Component {
  render() {
    return (
      <>
        <h4>Question blah blah blah</h4>
        <form action="#">
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio"></input>
              <span>Red</span>
            </label>
          </p>
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio"></input>
              <span>Yellow</span>
            </label>
          </p>
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio"></input>
              <span>Green</span>
            </label>
          </p>
          <p>
            <label>
              <input className="with-gap" name="group1" type="radio"></input>
              <span>Brown</span>
            </label>
          </p>
        </form>
        <button
          class="btn waves-effect waves-light red"
          type="submit"
          name="action"
        >
          Submit
          <i class="material-icons right">send</i>
        </button>{" "}
      </>
    );
  }
}

export default QuizForm;
