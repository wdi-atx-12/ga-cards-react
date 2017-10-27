import React, { Component } from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

class About extends Component {
  render(){
    return(
      <div>
      <Header />
        <div>
          <p>To start the game, each player draws ten White Cards.</p>
          <p>The person who most recently pooped begins as the Card Czar and plays a Black Card. The Card Czar reads the question or fill-in-the-blank phrase on the Black Card out loud.</p>
          <p>Everyone else answers the question or fills in the blank by passing one White Card, face down, to the Card Czar.</p>
          <p>The Card Czar shuffles all of the answers and shares each card combination with the group. For full effect, the Card Czar should usually re-read the Black Card before presenting each answer. The Card Czar then picks the funniest play, and whoever submitted it gets one Awesome Point.</p>
          <p>After the round, a new player becomes the Card Czar, and everyone draws back up to ten White Cards</p>
        </div>
      <Footer />
      </div>
    )
  }
}

export default About
