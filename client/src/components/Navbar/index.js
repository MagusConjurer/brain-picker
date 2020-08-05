import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
<<<<<<< HEAD
  render() {
    return (
      <nav className="nav-wrapper">
        <div>
          <a href="/">
            <img
              src="./images/logo.png" alt="logo"className="brand-logo"
            ></img>
          </a>

          <ul id="nav-mobile" className="right">
            <li>
              <a href="/Quiz">Quiz</a>
            </li>
            <li>
              <a href="/Profile">Profile</a>
            </li>
            <li>
              <a href="/login" className="waves-effect waves-light btn">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
=======
    render() {
        return(
          <nav className='nav-wrapper'>
          <div>
            <a href='/' className='brand-logo'>Pick Their Brain</a>
            <ul id='nav-mobile' className='right'>
              <li><a href='/QuizCentral'>Quiz Central</a></li>
              <li><a href='/Profile'>Profile</a></li>
              <li><a href='/login' className='waves-effect waves-light btn'>Login</a></li>
            </ul>
          </div>
        </nav>
        )
    }
>>>>>>> 3b48bfde64565c669c58a41294de64badabd57fb
}

export default Navbar;
