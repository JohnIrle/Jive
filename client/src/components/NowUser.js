import React from 'react';
import { CometSpinLoader } from 'react-css-loaders';
import TomorrowInput from './TomorrowInput';
import axios from 'axios';

class NowUser extends React.Component {
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

  render() {
    return (
      <div className="nowform">
        <h2>Todays Plan:</h2>
        <ul className="nowform-data">
          <li id="itemx">
            <TomorrowInput
              activity={this.state.food.name}
              distance={this.state.food.name}
              rating={this.state.food.rating}
            />
          </li>
          <li id="itemy">
            <TomorrowInput
              activity={this.state.activity.name}
              distance={this.state.activity.name}
              rating={this.state.activity.rating}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default NowUser;
