import React, { Component } from "react";
import "./Comp.css";
class Comp extends Component {
  constructor() {
    super();
    this.state = {
      value: [
        {
          first_name: "Jodie",
          last_name: "Whybrow",
          email: "jwhybrow0@soundcloud.com",
          gender: "Female",
          ip_address: "232.137.207.196",
        },
        {
          first_name: "Tony",
          last_name: "Gahan",
          email: "tgahan1@studiopress.com",
          gender: "Male",
          ip_address: "244.217.130.207",
        },
        {
          first_name: "Joe",
          last_name: "Zasa",
          email: "Zasa@soundcloud.com",
          gender: "Male",
          ip_address: "100.200.10.40",
        },
        {
          first_name: "Mikel",
          last_name: "Corleone",
          email: "Mikel@Corleone.com",
          gender: "Male",
          ip_address: "60.80.90.3",
        },
        {
          first_name: "Sakura",
          last_name: "Haruno",
          email: "Sakura@Naruto.com",
          gender: "Female",
          ip_address: "25.60.30.10",
        },
      ],
    };
  }
  render() {
    return (
      <div className="all">
        <Header />
        {this.state.value.map((data, i) => (
          <Bio key={i} data={data} />
        ))}
      </div>
    );
  }
}
class Header extends Component {
  // state = {  }
  render() {
    return <h5 className="header">This is a test document</h5>;
  }
}
class Bio extends Component {
  // state = {  }
  render() {
    return (
      <div className="bio">
        <p>
          First name: {this.props.data.first_name}
          <br></br>
          Last Name: {this.props.data.last_name}
          <br></br>
          Email: {this.props.data.email}
          <br></br>
          Gender: {this.props.data.gender}
          <br></br>
          IP: {this.props.data.ip_address}
        </p>
      </div>
    );
  }
}

// export default Bio;

// export default Header;
export default Comp;
