import React from "react";
import { render } from "@testing-library/react";

<<<<<<< HEAD
function SubmitBtn() {
  console.log("yay button");
=======
function SubmitBtn(props) {
>>>>>>> d40a289bc9db9e9f74e6f13d9efaee6c7f6d0aac
  const style = {
      marginTop: "50px"
  };

  return (
    <button
      className="btn waves-effect waves-light red"
      type="submit"
      name="action"
      style={style}
      onClick={props.clickHandler}
    >
      Submit Quiz
      <i class="material-icons right">send</i>
    </button>

    )
  }

export default SubmitBtn;