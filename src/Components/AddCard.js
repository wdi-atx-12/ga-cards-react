import React, { Component } from 'react';

class AddCard extends Component {
  render() {
    return (
      <div>
        <section className="container-fluid">
          <div className="row">
            <form name="add-card" id="add-card">
              <input type="text" name="question" id="question" placeholder="What's your question?" />
            </form>
            <br />
            <div className="card">
              <h4 className="card-title">A preview appears here as you type...</h4>
              <h6>Cards Against Assembly</h6>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AddCard;
