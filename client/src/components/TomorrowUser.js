import React from "react";

import { CometSpinLoader } from "react-css-loaders";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFoodPlans, getActivityPlans } from "../actions/planActions";

import TomorrowInput from "./TomorrowInput";

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
              <TomorrowInput activity="Lamar's Doughnuts" distance="2.3" desc="Fresh delicious dougnuts" />
            </li>
            <li id="item2">
              <TomorrowInput activity="Learn to program" distance="0" desc="Cover the basics!" />
            </li>
            <li id="item3">
              <TomorrowInput activity="Planet Sub" distance="7.8" desc="Quality subs and sandwhiches" />
            </li>
            <li id="item4">
              <TomorrowInput activity="Enjoy Nature" distance="0" desc="Go outside for a walk" />
            </li>
            <li id="item5">
              <TomorrowInput activity="Win code-a-thon" distance="0" desc="Go mules three!" />
            </li>
            <li id="item6">
              <TomorrowInput activity="Graduate from college" distance="-1" desc="Don't be a loser" />
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
