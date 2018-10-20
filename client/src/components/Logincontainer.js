import React from "react";
import UserInput from "./Userinput";

class Logincontainer extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="form-header">
          <h1>Jive</h1>
        </div>
        <UserInput className="form-input" />
      </div>
    );
  }
}

export default Logincontainer;
