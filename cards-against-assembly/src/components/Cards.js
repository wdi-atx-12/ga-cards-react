import React, { Component } from 'react';

class Cards extends Component {
  render(){
    return(
      <section id="cards" className="container-fluid">

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div onClick={this._showCard} className="card">
              <h4 className={this.state.showCard}>I couldnt complete my assignment because ________</h4>
              <h6>Cards Against Assembly</h6>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Cards
