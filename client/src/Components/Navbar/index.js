import React, { Component } from 'react';
import './style.css';

class Navbar extends Component {
    render() {
        return(
          <nav className='nav-wrapper'>
          <div>
            <a href='/' className='brand-logo'>Pick Their Brain</a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'> 
              <li><a href='/'>Link 1</a></li>
              <li><a href='/'>Link 2</a></li>
              <li><a href='/' className='waves-effect waves-light btn'>Sign In/Sign Up</a></li>
            </ul>
          </div>
        </nav>
        )
    }
}

export default Navbar;
