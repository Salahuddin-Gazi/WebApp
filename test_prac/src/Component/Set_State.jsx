import React, { Component } from "react";
import "./Comp.css";
class SetState extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.setStateHandler = this.setStateHandler.bind(this);
  }
  setStateHandler() {
    var items = "Judy Is My Friend";
    var myArray = this.state.data.slice();
    myArray.push(items);
    this.setState({ data: myArray });
  }
  render() {
    return (
      <div>
        <button onClick={this.setStateHandler}>Set State</button>
        <p className="setState">{this.state.data}</p>
      </div>
    );
  }
}

export default SetState;
