import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: false
    }
    this._flipCard = this._flipCard.bind(this);
  }

  _flipCard() {
    if(this.state.isShowing){
      this.setState({
        isShowing: false
      })
    } else{
      this.setState({
        isShowing: true
      })
    }
  }

  render() {
    return (
      <div className="col-sm-6 col-md-4 col-lg-4">
        <div onClick={this._flipCard} className="card">
          <h4 style={{display: this.state.isShowing ? 'block' : 'none'}} className="card-title">{this.props.prompt}</h4>
          <h6 style={{display: this.state.isShowing ? 'block' : 'none'}} >Cards Against Assembly</h6>
        </div>
      </div>
    );
  }
}

export default Card;
