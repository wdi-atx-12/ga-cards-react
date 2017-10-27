import React, { Component } from 'react';
import AddCard from './AddCard.js'
import About from './About.js'
import Home from './Home.js'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Router>
          <div>
            <nav className="tabs">
              <NavLink exact to="/">Home</NavLink>{'   '}
              <NavLink to="/addnewcard">Add a New Card</NavLink>{'   '}
              <NavLink to="/about">About</NavLink>{'   '}
            </nav>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/addnewcard" component={AddCard} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default NavBar;
