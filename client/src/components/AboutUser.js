import React from "react";

class AboutUser extends React.Component {
  render() {
    return (
      <div className="aboutjive">
        <div className="aboutcontainer">
          <div className="aboutcontainer-head">
            <h1>Randomness that Serves You</h1>
            <h2>Welcome to the community that has escaped the inconvenience of decision making and day planning. </h2>
          </div>
          <div className="aboutcontainer-body">
            <p>Does making plans stress you out? Do you often have trouble finding fun ways to spend your day? Fear no more, for Jive is here to do the thinking for you!</p>
            <p>We provide our community of users with fun and ever changing ways to explore the cities around them. By suggesting activities, restaurants, and events, Jive provides the spontaneity and variety that is often missing in our lives. Our platform reaches out into a vast repository of data about the community around you, and retrieves suggestions of exciting ways to spend your leisure time. Never again will you find yourself in the position of not being able to think of something to do because Jive will always have the answer for you!</p>
          </div>
          <div className="aboutcontainer-footer">
            <h2>Find us on</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUser;
