import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          Login
        </Link>
        <Link to="/register">
          Register
        </Link>
      </div>
    );
  }
}

export default NavBar;
