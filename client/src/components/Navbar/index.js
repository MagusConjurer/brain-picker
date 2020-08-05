import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
    render() {
        return(
          <nav className='nav-wrapper'>
          <div>
            <a href='/' className='brand-logo'>Pick Their Brain</a>
            <ul id='nav-mobile' className='right'>
              <li><a href='/Quiz'>Quiz</a></li>
              <li><a href='/Profile'>Profile</a></li>
              <li><a href='/login' className='waves-effect waves-light btn'>Login</a></li>
            </ul>
          </div>
        </nav>
        )
    }
}

export default Navbar;
