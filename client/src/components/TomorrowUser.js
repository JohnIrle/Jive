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

    this.handleRefresh = this.handleRefresh.bind(this);
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
      .then(res => this.setState({ activity2: res.data }));

    axios
      .get("/api/settings/food")
      .then(res => this.setState({ food2: res.data }));

    axios
      .get("/api/settings/activity")
      .then(res => this.setState({ activity3: res.data }));

    axios
      .get("/api/settings/food")
      .then(res => this.setState({ food3: res.data }));
  }

  handleRefresh(e) {
    console.log(e.target);
    // axios.get("/api/setting/food").then(this.setState({[e.target]: res.data}));
  }

  render() {
    
    console.log(this.state.activity2);
    return (
      <div className="tomorrowform">
        <h2>Tomorrows Plan:</h2>
        <ul className="tomorrowform-data">
          <li id="item1">
            <TomorrowInput
              handleRefresh={this.handleRefresh}
              activity={this.state.activity1.name}
              phone={this.state.activity1.display_phone}
              rating={this.state.activity1.rating}
            />
          </li>
          <li id="item2">
            <TomorrowInput
              activity={this.state.food1.name}
              phone={this.state.food1.display_phone}
              rating={this.state.food1.rating}
            />
          </li>
          <li id="item3">
            <TomorrowInput
              activity={this.state.activity2.name}
              phone={this.state.activity2.display_phone}
              rating={this.state.activity2.rating}
            />
          </li>
          <li id="item4">
            <TomorrowInput
              activity={this.state.food2.name}
              phone={this.state.food2.display_phone}
              rating={this.state.food2.rating}
            />
          </li>
          <li id="item5">
            <TomorrowInput
              activity={this.state.activity3.name}
              phone={this.state.activity3.display_phone}
              rating={this.state.activity3.rating}
            />
          </li>
          <li id="item6">
            <TomorrowInput
              activity={this.state.food3.name}
              phone={this.state.food3.display_phone}
              rating={this.state.food3.rating}
            />
          </li>
        </ul>
      </div>
    );
  }
}

TomorrowUser.propTypes = {
  plan: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  plan: state.plan
});

export default connect(
  mapStateToProps,
  { getFoodPlans, getActivityPlans }
)(TomorrowUser);
