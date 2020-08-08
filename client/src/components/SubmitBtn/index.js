import React from "react";
import { render } from "@testing-library/react";

function SubmitBtn() {
  console.log("yay button");
  const style = {
      marginTop: "50px"
  };

  return (
    <button
      className="btn waves-effect waves-light red"
      type="submit"
      name="action"
      style={style}
    >
      Submit Quiz
      <i class="material-icons right">send</i>
    </button>

    )
  }

export default SubmitBtn;