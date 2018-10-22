import React from "react";
import axios from "axios";

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
      activity1: {},
      food1: {},
      activity2: {},
      food2: {},
      activity3: {},
      food3: {}
    };
  }

  componentWillMount() {
    axios
      .get("/api/settings/activity")
      .then(res => this.setState({ activity1: res.data }));

    axios
      .get("/api/settings/food")
      .then(res => this.setState({ food1: res.data }));

    axios
      .get("/api/settings/activity")
      .then(res => this.setState({ activities2: res.data }));

    axios
      .get("/api/settings/food")
      .then(res => this.setState({ food2: res.data }));

    axios
      .get("/api/settings/activity")
      .then(res => this.setState({ activities3: res.data }));

    axios
      .get("/api/settings/food")
      .then(res => this.setState({ food3: res.data }));
  }

  render() {
    // const limitTitle = (title, limit = 17) => {
    //   const newTitle = [];
    //   if(title.length > limit) {
    //     title.split(' ').reduce((acc, curr) => {
    //       if(acc + curr.length <= limit) {
    //         newTitle.push(curr);
    //       }
    //       return acc + curr.length;
    //     }, 0);
    //     return `${newTitle.join(' ')}...`;
    //   } else {
    //     return title;
    //   }
    // }

    return (
      <div className="tomorrowform">
        <h2>Tomorrows Plan:</h2>
        <ul className="tomorrowform-data">
          <li id="item1">
            <TomorrowInput
              activity={this.state.activity1.name}
              distance="2.3"
              desc="Fresh delicious dougnuts"
            />
          </li>
          <li id="item2">
            <TomorrowInput
              activity={this.state.food1.name}
              distance="0"
              desc="Cover the basics!"
            />
          </li>
          <li id="item3">
            <TomorrowInput
              activity={this.state.activity2.name}
              distance="7.8"
              desc="Quality subs and sandwhiches"
            />
          </li>
          <li id="item4">
            <TomorrowInput
              activity={this.state.food2.name}
              distance="0"
              desc="Go outside for a walk"
            />
          </li>
          <li id="item5">
            <TomorrowInput
              activity={this.state.activity3.name}
              distance="0"
              desc="Go mules three!"
            />
          </li>
          <li id="item6">
            <TomorrowInput
              activity={this.state.food3.name}
              distance="-1"
              desc="Don't be a loser"
            />
          </li>
        </ul>
      </div>
    );
  }
}

TomorrowUser.propTypes = {
  plan: PropTypes.object.isRequired,
  getPlans: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  plan: state.plan
});

export default connect(
  mapStateToProps,
  { getFoodPlans, getActivityPlans }
)(TomorrowUser);
