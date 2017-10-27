import React, { Component } from 'react';


class Cards extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showCard: 'card-title'
    };
    this._showCard = this._showCard.bind(this);
  }

  _showCard(e){
    e.preventDefault();
    if (this.state.showCard === 'card-title') {
      this.setState({
        showCard: ''
      })
    } else {
      this.setState({
        showCard: 'card-title'
      })
    }
  } 



  render(){
    return(
      <div className="col-sm-6 col-md-4 col-lg-4">
        <div onClick={this._showCard} className="card">
          <h4 className={this.state.showCard}>{this.props.card}</h4>
          <h6>Cards Against Assembly</h6>
        </div>
      </div>
    )
  }
}

export default Cards
