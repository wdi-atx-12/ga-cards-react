import React, { Component } from 'react';
import Card from './Card.js'
import { database, firebaseListToArray } from '../utils/firebase.js';


class CardContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {

    let promptArr = [
      "I couldn't complete my assignment because ________",
      "I get by with a little help from ________",
      "The field trip was completely ruined by ________",
      "Make food not _______________"
    ]

    let cardsArr = promptArr.map((prompt, index)=> <Card key={index} prompt={prompt} />);

    return (
      <div>
      <section id="cards" className="container-fluid">
        <div className="row">
        {cardsArr}
        </div>
      </section>
      </div>
    );
  }
}

export default CardContainer;
