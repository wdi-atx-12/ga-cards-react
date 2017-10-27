import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

class Header extends Component {
  render(){
    return(
      <div>
        <header className="navbar">
          <h1 className="pull-left">Cards Against Assembly</h1>
        </header>

        <Router>
          <nav className="tabs">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/Add">Add a New Card</NavLink>
            <NavLink to="/About">About</NavLink>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Add" component={Add} />
            <Route path="/About" component={About} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Header
