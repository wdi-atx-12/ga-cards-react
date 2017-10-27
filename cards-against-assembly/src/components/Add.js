import React, { Component } from 'react';

import Header from './Header.js';
import AddCard from './AddCard.js'
import Footer from './Footer.js';

class Add extends Component {
  render(){
    return(
      <div className="container">
        <Header />
          <AddCard />
        <Footer />
      </div>
    )
  }
}

export default Add
