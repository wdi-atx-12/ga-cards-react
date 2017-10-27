import React, { Component } from 'react';
import Header from './Components/Header.js';
import CardsContainer from './Components/CardContainer.js'
import Footer from './Components/Footer.js'
import NavBar from './Components/NavBar.js'
import Home from './Components/Home.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <NavBar />


        <Footer />
      </div>
    );
  }
}

export default App;
