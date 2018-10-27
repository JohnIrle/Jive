import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CometSpinLoader } from 'react-css-loaders';
import ResultBox from '../Resultbox/ResultBox';
import { getFoodPlans, getActivityPlans } from '../../actions/planActions';

class PlanNow extends React.Component {
  componentDidMount() {
    this.props.getFoodPlans();
  }

  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  render() {
    const { loading, food } = this.props.plan;
    const isFoodExist = food && food.length;
    if (loading || !isFoodExist) {
      return null; // loader
    }

    const truncFood = food.slice(0, 2);

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
  plan: state.plan
});

export default connect(
  mapStateToProps,
  { getFoodPlans, getActivityPlans }
)(PlanNow);
