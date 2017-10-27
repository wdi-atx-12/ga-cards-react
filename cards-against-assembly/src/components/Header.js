import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <div>
        <header className="navbar">
          <h1 className="pull-left">Cards Against Assembly</h1>
        </header>

        <nav className="tabs">
          <a href="index.html" className="active">Home</a>
          <a href="add.html">Add a New Card</a>
          <a href="about.html">About</a>
        </nav>
      </div>
    )
  }
}

export default Header
