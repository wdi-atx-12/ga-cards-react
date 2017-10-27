import React, { Component } from 'react';

import Cards from './Cards.js';

import { database, firebaseListToArray } from '../utils/firebase.js';

class CardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardList: []
    }
  }

  componentWillMount() {
    database.ref('/cards')
      .on('value', data => {
        const results = firebaseListToArray(data.val());
        this.setState({
          cardList: results
        })
      })
  }


  render(){
    let cardListArr = this.state.cardList.map(cardListData => (
      <Cards key={cardListData.id} card={cardListData.value} />
    ));

    console.log(cardListArr);

    return(
      <section id="cards" className="container-fluid">
        <div className="row">
          {cardListArr}
        </div>
      </section>
    )
  }
  // componentWillUnmount() {
  //   database.off();
  // }
}

export default CardList
