import React, { Component } from "react";
import QuizFormInput from "../QuizFormInput";

class QuizForm extends Component {
  state = {
    selections: {
    }
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      selections: {
        ...prevState.selections,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <form>
        {this.props.quizQuestions.map((data, index) => (
          <div key={index}>
            {data.question}
            <QuizFormInput answers={data.answers} group={"group" + index} handleInput={this.handleInputChange.bind(this)} />
          </div>
        ))}
      </form>
    );
  }
}

export default QuizForm;
