import React, { Component } from "react";
import "./components1.css";

class Components extends Component {
  state = {};
  render() {
    return (
      <div className="root2">
        <div className="div1">
          <h5 className="insideDiv1">Testing My Static.</h5>
        </div>
        <div>
          <h5 className="insideDiv2">Another Static Test.</h5>
        </div>
      </div>
    );
  }
}

export default Components;
