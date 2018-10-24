import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CometSpinLoader } from 'react-css-loaders';
import ResultBox from '../Resultbox/ResultBox';
import axios from 'axios';

class PlanNow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false,
      food: {},
      activity: {}
    };
  }

  componentWillMount() {
    axios.get('/api/data/food/now').then(res => this.setState({ food: res.data }));
    axios.get('/api/data/activity/now').then(res => this.setState({ activity: res.data }));
  }

  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="nowform">
        <h2>Todays Plan:</h2>
        <ul className="nowform-data">
          <li id="itemx">
            <ResultBox
              activity={this.state.food.name}
              phone={this.state.food.display_phone}
              rating={this.state.food.rating}
            />
          </li>
          <li id="itemy">
            <ResultBox
              activity={this.state.activity.name}
              phone={this.state.activity.display_phone}
              rating={this.state.activity.rating}
            />
          </li>
        </ul>
      </div>
    );
  }
}

PlanNow.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PlanNow);
