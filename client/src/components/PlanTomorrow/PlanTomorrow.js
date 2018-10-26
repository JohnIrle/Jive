import React from 'react';
import PropTypes from 'prop-types';
import { getFoodPlans, getActivityPlans } from '../../actions/planActions';
import { connect } from 'react-redux';
import axios from 'axios';

import ResultBox from '../Resultbox/ResultBox';
import { timingSafeEqual } from 'crypto';

class PlanTomorrow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false,
      settings: {
        cost: '1,2',
        location: 'kansas city'
      },
      activity1: {},
      food1: {},
      activity2: {},
      food2: {},
      activity3: {},
      food3: {}
    };

    this.handleRefresh = this.handleRefresh.bind(this);
  }

  componentDidMount() {
    this.props.getFoodPlans();
    axios.get('/api/data/activity').then(res => this.setState({ activity1: res.data }));

    axios.get('/api/data/food').then(res => this.setState({ food1: res.data }));

    axios.get('/api/data/activity').then(res => this.setState({ activity2: res.data }));

    axios.get('/api/data/food').then(res => this.setState({ food2: res.data }));

    axios.get('/api/data/activity').then(res => this.setState({ activity3: res.data }));

    axios.get('/api/data/food').then(res => this.setState({ food3: res.data }));
  }

  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  handleRefresh(e) {
    axios.get('/api/data/activity').then(res => this.setState({ activity1: res.data }));
  }

  render() {
    const {
      plan: { loading, food: foodList }
    } = this.props;
    const isFoodExist = foodList && foodList.length;
    if (loading || !isFoodExist) {
      return null; // loader
    }

    const truncFood = [];

    for (let i = 0; i < 6; i++) {
      truncFood.push(foodList[i]);
    }

    return (
      <div className="tomorrowform">
        <h2>Tomorrows Plan:</h2>
        <ul className="tomorrowform-data">
          {truncFood.map(food => (
            <li key={food.id}>
              <ResultBox activity={food.name} phone={food.display_phone} rating={food.rating} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

PlanTomorrow.propTypes = {
  auth: PropTypes.object.isRequired,
  plan: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  plan: state.plan,
  food: state.plan.food
});

export default connect(
  mapStateToProps,
  { getFoodPlans, getActivityPlans }
)(PlanTomorrow);
