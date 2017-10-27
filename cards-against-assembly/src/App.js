import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home.js';
import Add from './components/Add.js';
import About from './components/About.js';


import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Add" component={Add} />
              <Route path="/About" component={About} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
