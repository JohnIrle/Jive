import React from "react";
import { Link } from "react-router-dom";

class HomeUser extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home-form">
          <div className="home-form-header">
            <h1>Make a Plan?</h1>
          </div>
          <div className="option option-1">
            <Link to="/">
              Plan now
            </Link>
          </div>
          <div className="option option-2">
            <Link to="/plantomorrow">
              Plan tomorrow
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeUser;
