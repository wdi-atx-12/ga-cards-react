import React, { Component } from 'react';


class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this._handleChange = this._handleChange.bind(this);
  }


  _handleChange() {
    this.setState({
      value: this.inputBox.value
    })
  }

  render(){
    return(
      <section className="container-fluid">
        <div className="row">
          <form name="add-card" id="add-card">
            <input onChange={this._handleChange} ref={(input) => this.inputBox = input} type="text" name="question" id="question" placeholder="What's your question?" />
            <input onClick={this._handleSubmit} type="submit" className="btn btn-primary" value="Save" />
          </form>
          <br />
          <div className="card">
            <h4 className="">{this.state.value}</h4>
            <h6>Cards Against Assembly</h6>
          </div>
        </div>
      </section>
    )
  }
}

export default AddCard
