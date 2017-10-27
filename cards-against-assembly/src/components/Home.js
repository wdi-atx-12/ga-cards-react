import React, { Component } from 'react';

import Header from './Header.js';
import Cards from './Cards.js'
import Footer from './Footer.js';

class Home extends Component {
  render(){
    return(
      <div className="container">
        <Header />
          <Cards />
        <Footer />
      </div>
    )
  }
}

export default Home
