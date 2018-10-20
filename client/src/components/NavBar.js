import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class NavBar extends React.Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
        <Link to="/home">{user.name}</Link>

        <a href="#" className="float" onClick={this.onLogoutClick.bind(this)}>
          Logout
        </a>
      </div>
    );

    const guestLinks = (
      <div>
        <Link to="/login">Login</Link>

        <Link className="float" to="/register">
          Register
        </Link>
      </div>
    );

    return (
      <div className="navbar">
        <div className="navbar-menu">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavBar);
