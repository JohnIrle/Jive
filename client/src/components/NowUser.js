import React from "react";
import { CometSpinLoader } from 'react-css-loaders';

class NowUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      load: false
    };
  }

  render() {
    return (
      <div className="nowform">
        <h2>Todays Plan:</h2>
      </div>
    );
  }
}

export default NowUser;
