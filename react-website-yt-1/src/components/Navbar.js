import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        {" "}
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            ONIK <i className="fab fa-typo3"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
