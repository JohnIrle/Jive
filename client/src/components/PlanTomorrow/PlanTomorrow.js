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
    const { loading, food } = this.props.plan;
    const isFoodExist = food && food.length;
    if (loading || !isFoodExist) {
      return null; // loader
    }

    const truncFood = [];

    for (let i = 0; i < 6; i++) {
      truncFood.push(food[i]);
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
  plan: state.plan
});

export default connect(
  mapStateToProps,
  { getFoodPlans, getActivityPlans }
)(PlanTomorrow);
