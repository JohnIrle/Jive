import React from "react";
import TomorrowInput from "./TomorrowInput";

class TomorrowUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buisnesses: [1,2,3,4,5,6]
    };
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

export default TomorrowUser;
