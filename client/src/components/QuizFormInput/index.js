import React, { Component } from "react";

class QuizFormInput extends Component {
  render() {
    return (
      <div>
        {this.props.answers.map((data, index) => (
          <p>
            <label>
              <input className="with-gap" type="radio" name={this.props.group} value={index} />
              <span>{data.answer}</span>
            </label>
          </p>
        ))}
      </div>
    );
  }
}

export default QuizFormInput;