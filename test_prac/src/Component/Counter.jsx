import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { data: 0 };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <button onClick={this.setNewNumber}>Increment</button>
        <Count myNumber={this.state.data} />
      </div>
    );
  }
}
class Count extends Component {
  // state = {  }
  render() {
    return <h5>{this.props.myNumber}</h5>;
  }
}

// export default Count;

export default Counter;
