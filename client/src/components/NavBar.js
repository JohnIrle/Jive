import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-menu">
          <FontAwesomeIcon icon={faUser} />
          <Link to="/login">
            Login
          </Link>
          <FontAwesomeIcon className="float" icon={faCrown} />
          <Link className="float" to="/register">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
