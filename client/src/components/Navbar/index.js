import React, { Component } from "react";
import "./style.css";


class Navbar extends Component {

  render() {
    return (
      <nav className="nav-wrapper">
        <div>
          <a href="/">
            <img
              src="./images/logo.png"
              alt="logo"
              className="brand-logo"
            />
          </a>

          <ul id="nav-mobile" className="right">
            <li>
              <a href="/QuizCentral">Quiz Central</a>
            </li>
            <li>
            <a href="/profile" className="waves-effect waves-light btn">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
