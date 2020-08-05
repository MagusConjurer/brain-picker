import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
    render() {
        return(
          <nav className='nav-wrapper'>
          <div>
            <img src = "./images/logo.png" alt="logo" className ="brand-logo"></img>
            <ul id='nav-mobile' className='right'>
              <li><a href='/'>Link 1</a></li>
              <li><a href='/'>Link 2</a></li>
              <li><a href='/login' className='waves-effect waves-light btn'>Login</a></li>
            </ul>
          </div>
        </nav>
        )
    }
}

export default Navbar;
