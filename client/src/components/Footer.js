import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import Settings from './Settings';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    const show = this.props.auth.isAuthenticated ? true : false;
    if (show) {
      return (
        <div className="footer">
          <div className="footer-menu">
            <Settings />
            <Link className="about-text" to="/about">
              About Jive
            </Link>
            <FontAwesomeIcon className="about-icon" icon={faUsers} />
          </div>
        </div>
      );
    }

    return (
      <div className="footer">
        <div className="footer-menu">
          <Link className="about-text" to="/about">
            About Jive
          </Link>
          <FontAwesomeIcon className="about-icon" icon={faUsers} />
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Footer);
