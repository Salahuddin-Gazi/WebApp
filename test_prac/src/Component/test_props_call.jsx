import React, { Component } from "react";
import ReactDOM from "react-dom";

class TestCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header1: "How the Dwag?",
      header2: "Wassup!",
      img:
        "https://media-exp1.licdn.com/dms/image/C4D22AQHfSwgNgyW6Eg/feedshare-shrink_2048_1536-alternative/0/1608223182479?e=1611187200&v=beta&t=5DCW-55HD18fDaHuUwRG1o6Rp568Iiwh5lUC18kFxAo",
      //   mapStyles: {
      //     width: "100%",
      //     height: "100%",
      //   },
    };
  }

  //   export default Header;
  render() {
    return (
      <div>
        <Header headerProp={this.state} />
      </div>
    );
  }
}
class Header extends Component {
  //   state = {  }
  render() {
    return (
      <div>
        <h1>{this.props.headerProp.header1}</h1>
        <h1>{this.props.headerProp.header2}</h1>
        <div>
          <img src={this.props.headerProp.img} />
        </div>
      </div>
    );
  }
}
// export default TestCall;

export default TestCall;
