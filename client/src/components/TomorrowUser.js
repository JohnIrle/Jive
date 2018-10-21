import React from "react";
import { CometSpinLoader } from "react-css-loaders";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFoodPlans, getActivityPlans } from "../actions/planActions";

class TomorrowUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      load: false,
      settings: {
        cost: "1,2",
        location: "kansas city"
      },
      result: []
    };
  }

  componentDidMount() {
    this.props.getFoodPlans();
    this.props.getActivityPlans();
    this.setState({ result: this.props.plan.result });
  }

  render() {
    return (
      <div className="tomorrowform">
        <h2>Tomorrows Plan:</h2>
        <ul className="tomorrowform-data">
          <li id="item1">
            <div className="refresh">
              <CometSpinLoader className="spinner" color="#FFF" size="30" />
            </div>
          </li>
          <li id="item2">
            <div className="refresh">
              <CometSpinLoader className="spinner" color="#FFF" size="30" />
            </div>
          </li>
          <li id="item3">
            <div className="refresh">
              <CometSpinLoader className="spinner" color="#FFF" size="30" />
            </div>
          </li>
          <li id="item4">
            <div className="refresh">
              <CometSpinLoader className="spinner" color="#FFF" size="30" />
            </div>
          </li>
          <li id="item5">
            <div className="refresh">
              <CometSpinLoader className="spinner" color="#FFF" size="30" />
            </div>
          </li>
          <li id="item6">
            <div className="refresh">
              <CometSpinLoader className="spinner" color="#FFF" size="30" />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

TomorrowUser.propTypes = {
  result: PropTypes.object.isRequired,
  getPlans: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  plan: state.plan
});

export default connect(
  mapStateToProps,
  { getFoodPlans,getActivityPlans }
)(TomorrowUser);
