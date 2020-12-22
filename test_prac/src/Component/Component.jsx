import React from "react";

class Components extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Foo",
          age: "20",
          email: "@hotmail.com",
        },
        {
          id: 2,
          name: "Bar",
          age: "30",
          email: "@gmail.com",
        },
        {
          id: 3,
          name: "Baz",
          age: "40",
          email: "@outlook.com",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Header />
        <table>
          <tbody>
            {this.state.data.map((person, i) => (
              <TableRow key={i} data={person} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class TableRow extends React.Component {
  render() {
    return (
      <div>
        <div>
          <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
            <td>{this.props.data.email}</td>
          </tr>
        </div>
        <div>
          <p>
            {this.props.data.name}
            <br></br>
            {this.props.data.age}
            <br></br>
            {this.props.data.email}
          </p>
        </div>
      </div>
    );
  }
}
export default Components;
