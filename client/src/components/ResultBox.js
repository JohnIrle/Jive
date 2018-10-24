import React from 'react';
import { CometSpinLoader } from 'react-css-loaders';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class ResultBox extends React.Component {
  render(props) {
    if (this.props.plan.loading === false) {
      return (
        <div className="inner">
          <div className="inner-data">
            <span className="inner-data-topspan">{this.props.activity}</span>
            <p>
              <em>Phone:</em> {this.props.phone}
            </p>
            <p>
              <em>Rating:</em> {this.props.rating}
            </p>
          </div>
          <div className="inner-refresh" onClick={this.props.handleRefresh}>
            <FontAwesomeIcon className="float" icon={faArrowCircleRight} />
          </div>
        </div>
      );
    }
    return (
      <div className="inner">
        <div className="inner-data" />
        <div className="inner-refresh">
          <CometSpinLoader className="spinner" color="#FFF" size="30" />
        </div>
      </div>
    );
  }
}

ResultBox.propTypes = {
  plan: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  plan: state.plan
});

export default connect(mapStateToProps)(ResultBox);
