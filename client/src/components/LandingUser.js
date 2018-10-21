import React from "react";

class LandingUser extends React.Component {
  render() {
    return (
      <div className="landing">
        <div className="landing-header">
          <img
            className="landing-header-img"
            src={require("../assets/jive.png")}
            alt="Jive Logo"
          />
        </div>
      </div>
    );
  }
}

export default LandingUser;
