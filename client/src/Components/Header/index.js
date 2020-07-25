import React, { Component } from 'react';
import './style.css'

class Header extends Component {
    render() {
        return(
          <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Pick Their Brain</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li><a href="">Link 1</a></li>
              <li><a href="">Link 2</a></li>
              <li><a class="waves-effect waves-light btn">Sign In/Sign Up</a></li>
            </ul>
          </div>
        </nav>
        )
    }
}

export default Header;
