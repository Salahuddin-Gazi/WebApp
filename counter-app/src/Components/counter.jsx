import React, { Component } from "react";

class Counter extends Component {
  state = {
    // value: 0,
    value: this.props.counter.value,
    // tags: ["tag 1", "tag 2", "tag 3"],
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold",
    width: 70,
    // height: 40,
  };
  render() {
    // let classes = this.getBadgeClasses();\
    // console.log("props", this.props);

    return (
      <div>
        {/* <h1>Hello Yo</h1> */}
        {/* <h4>{this.props.id}</h4> */}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          // onClick={() => this.handleIncrement({ id: 1 })}
          style={{ width: 120, height: 40 }}
          // className="btn btn-secondary btn-sm"
          type="button"
          className="btn btn-outline-info"
        >
          Increment
        </button>
        {/* {this.renderTags()} */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const value = this.state.value;
    return value === 0 ? "Zero" : value;
  }
  // formatCount() {
  //   const { count } = this.state.value;
  //   return count === 0 ? "Zero" : count;
  // }

  // handleIncrement = (product) => {
  handleIncrement = () => {
    // return console.log("Increment Clicked");
    // console.log(product);
    // console.log("Increment Clicked");
    this.setState({ value: this.state.value + 1 });
  };
  // renderTags() {
  //   if (this.state.tags.length === 0)
  //     return <p style={this.styles}>There is No Tags, Add some.</p>;
  //   return (
  //     <ul style={this.styles}>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }
}

export default Counter;
