import React, { Component } from 'react';

import Header from './Header.js';
import CardList from './CardList.js'
import Footer from './Footer.js';

class Home extends Component {
  render(){
    return(
      <div className="container">
        <Header />
          <CardList />
        <Footer />
      </div>
    )
  }
}

export default Home
