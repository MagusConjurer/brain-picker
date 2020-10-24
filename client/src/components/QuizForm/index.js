import React, { Component } from "react";
import QuizFormInput from "../QuizFormInput";

class QuizForm extends Component {
  render() {
    return (
      <form>
        {this.props.quizQuestions.map((data, index) => (
          <div>
            {data.question}
            <QuizFormInput key={index} answers={data.answers} group={"group" + index} />
          </div>
        ))}
      </form>
    );
  }
}

export default QuizForm;
