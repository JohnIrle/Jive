import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';

class NavBar extends React.Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div>
        <FontAwesomeIcon icon={faUser} />
        <Link to="/home">{user.name}</Link>
        <FontAwesomeIcon className="float" icon={faDoorOpen} />
        <a href="#" className="float" onClick={this.onLogoutClick.bind(this)}>
          Logout
        </a>
      </div>
    );

    const guestLinks = (
      <div>
        <FontAwesomeIcon icon={faUser} />
        <Link to="/login">Login</Link>
        <FontAwesomeIcon className="float" icon={faCrown} />
        <Link className="float" to="/register">
          Register
        </Link>
      </div>
    );

    return (
      <div className="navbar">
        <div className="navbar-menu">{isAuthenticated ? authLinks : guestLinks}</div>
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
