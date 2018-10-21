import React from "react";
import { CometSpinLoader } from 'react-css-loaders';

class TomorrowUser extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      load: false
    };
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

export default TomorrowUser;
