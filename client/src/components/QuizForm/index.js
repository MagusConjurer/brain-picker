import React, { Component } from "react";

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
      </>
    );
  }
}

export default QuizForm;
