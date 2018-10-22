import React from "react";
import { CometSpinLoader } from 'react-css-loaders';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

class TomorrowInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  render(props) {
    if(this.state.loading == false) {
        return (
          <div className="inner">
            <div className="inner-data">
              <span className="inner-data-topspan">{this.props.activity}</span>
              <p><em>Distance:</em> {this.props.distance} Miles</p><p><em>Description:</em> {this.props.desc}</p>
            </div>
            <div className="inner-refresh">
              <FontAwesomeIcon className="float" icon={faArrowCircleRight} />
            </div>
          </div>
        );
    }
    return (
      <div className="inner">
        <div className="inner-data">
        </div>
        <div className="inner-refresh">
          <CometSpinLoader className="spinner" color="#FFF" size="30" />
        </div>
      </div>
    );
  }
}

export default TomorrowInput;
