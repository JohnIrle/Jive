import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="home">
        <div className="home-form">
          <div className="home-form-header">
            <h1>Make a Plan?</h1>
          </div>
          <div className="option">
            <div className="option-2">
              <Link to="/plannow">Plan now</Link>
            </div>
            <div className="option-3">
              <Link to="/plantomorrow">Plan tomorrow</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
