import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Landing extends React.Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/home');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="landing-header">
          <img
            className="landing-header-img"
            src={require('../../assets/jive.png')}
            alt="Jive Logo"
          />
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
