import React from "react";

function SubmitBtn(props) {
  const style = {
      marginTop: "50px"
  }
  return (
    <button
      className="btn waves-effect waves-light red"
      type="submit"
      name="action"
      style={style}
      onClick={props.clickHandler}
    >
      Submit Quiz
      <i className="material-icons right">send</i>
    </button>
    )
}

export default SubmitBtn;