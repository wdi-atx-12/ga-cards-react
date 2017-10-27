import React, { Component } from 'react';

class Cards extends Component {
  render(){
    return(
      <section id="cards" className="container-fluid">

      <div className="row">
        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="card">
            <h4 className="card-title">I couldnt complete my assignment because ________</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="card">
            <h4 className="card-title">I get by with a little help from ________</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="card">
            <h4 className="card-title">The field trip was completely ruined by ________</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>

        <div className="col-sm-6 col-md-4 col-lg-4">
          <div className="card">
            <h4 className="card-title">Make food not _______________</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </div>
      </section>
    )
  }
}

export default Cards
