import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CometSpinLoader } from 'react-css-loaders';
import ResultBox from '../Resultbox/ResultBox';
import { getFoodPlans, getActivityPlans } from '../../actions/planActions';

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
    this.props.getFoodPlans();
  }

  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
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

    for (let i = 0; i < 2; i++) {
      truncFood.push(foodList[i]);
    }

    return (
      <div className="nowform">
        <h2>Todays Plan:</h2>
        <ul className="nowform-data">
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

PlanNow.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  plan: state.plan,
  food: state.plan.food
});

export default connect(
  mapStateToProps,
  { getFoodPlans, getActivityPlans }
)(PlanNow);
