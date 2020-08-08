import React from "react";

function SubmitBtn() {
  const style = {
      marginTop: "50px"
  }
  return (
    <button
      className="btn waves-effect waves-light red"
      type="submit"
      name="action"
      style={style}
    >
      Submit Quiz
      <i className="material-icons right">send</i>
    </button>
    )
}

export default SubmitBtn;