import React, { Component } from "react";
import "./style.css";

class Share extends Component {
  render() {
    return (

      <div className="share-btn" data-url="https://..." data-title="..." data-desc="...">
        <a className="waves-effect waves-light btn-small deep-purple btn-facebook" data-id="fb"><i className="fab fa-facebook-square"></i> Facebook</a>
        <a className="waves-effect waves-light btn-small deep-purple btn-twitter" data-id="tw"><i className="fab fa-twitter"></i> Twitter</a>
        <a className="waves-effect waves-light btn-small deep-purple btn-mail" data-id="mail"><i className="fas fa-envelope-square"></i> EMail</a>
        <a className="waves-effect waves-light btn-small deep-purple btn-print" data-id="print"><i className="fas fa-print"></i> Print</a>
      </div>
      
    );
  }
}

export default Share;
