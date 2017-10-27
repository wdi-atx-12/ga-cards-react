import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <div>
        <header className="navbar">
          <h1 className="pull-left">Cards Against Assembly</h1>
        </header>

        <nav className="tabs">
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/Add">Add a New Card</NavLink>
          <NavLink to="/About">About</NavLink>
        </nav>
      </div>
    )
  }
}

export default Header
