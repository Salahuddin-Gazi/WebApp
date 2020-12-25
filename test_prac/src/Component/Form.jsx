import React, { Component } from "react";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "Input Here" };
    this.updateForm = this.updateForm.bind(this);
    // this.view = this.view.bind(this);
  }
  updateForm(e) {
    this.setState({ data: e.target.value });
  }
  //   view() {
  //     return <h5>{this.state.data}</h5>;
  //   }
  render() {
    return (
      <div>
        <input type="text" value={this.state.data} onChange={this.updateForm} />
        {/* <button onClick={this.view}>View</button> */}
        <h5>{this.state.data}</h5>
      </div>
    );
  }
}

// class View extends Component {
//     // state = {  }
//     render() {
//         return (  );
//     }
// }

// export default View;
export default Form;
