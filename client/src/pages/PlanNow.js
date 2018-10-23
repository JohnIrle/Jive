import React from 'react';
import NowUser from '../components/NowUser.js';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PlanNow extends React.Component {
  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  render() {
    return <NowUser />;
  }
}

PlanNow.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PlanNow);
