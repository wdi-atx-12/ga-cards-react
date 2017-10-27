import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Cards from './components/Cards.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Home />

          <footer>
            <p>Made with <span class="heart">♥︎</span> at General Assembly</p>
          </footer>
        </div>
    );
  }
}

export default App;
