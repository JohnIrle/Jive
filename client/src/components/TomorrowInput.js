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
    if(this.state.loading === false) {
        return (
          <div className="inner">
            <div className="inner-data">
              <span className="inner-data-topspan">{this.props.activity}</span>
              <p><em>Phone:</em> {this.props.phone}</p><p><em>Rating:</em> {this.props.rating}</p>
            </div>
            <div className="inner-refresh" onClick={this.props.handleRefresh}>
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
