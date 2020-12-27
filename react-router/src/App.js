import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  browserHistory,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  // state = {  }
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <hr />

          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </div>
      </Router>
    );
  }
}

export default App;

// export default App;

// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <ul className="navbar-nav mr-auto">
//               <li>
//                 <Link to={"/"} className="nav-link">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/contact"} className="nav-link">
//                   Contact
//                 </Link>
//               </li>
//               <li>
//                 <Link to={"/about"} className="nav-link">
//                   About
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           <hr />
//
//             <Route exact path="/" component={Home} />
//             <Route path="/contact" component={Contact} />
//             <Route path="/about" component={About} />
//           </Switch>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
