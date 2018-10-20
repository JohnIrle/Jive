import React from "react";
import { CometSpinLoader } from 'react-css-loaders';

class TomorrowUser extends React.Component {
  render() {
    return (
      <div className="tomorrowform">
          <h2>Tomorrows Plan:</h2>
          <ul className="tomorrowform-data">
            <li>1<div className="refresh"><CometSpinLoader color="#FFF" size="50" /></div></li>
            <li>2<div className="refresh"><CometSpinLoader color="#FFF" size="50" /></div></li>
            <li>3<div className="refresh"><CometSpinLoader color="#FFF" size="50" /></div></li>
            <li>4<div className="refresh"><CometSpinLoader color="#FFF" size="50" /></div></li>
            <li>5<div className="refresh"><CometSpinLoader color="#FFF" size="50" /></div></li>
            <li>6<div className="refresh"><CometSpinLoader color="#FFF" size="50" /></div></li>
          </ul>
      </div>
    );
  }
}

export default TomorrowUser;
