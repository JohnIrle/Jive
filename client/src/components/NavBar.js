import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <div className="navbar-menu">
          <Link to="/">
            Login
          </Link>
          <Link className="float" to="/register">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
