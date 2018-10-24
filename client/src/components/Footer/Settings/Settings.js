import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentSettings } from '../../../actions/settingActions';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: '',
      location: '',
      click: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.displayPanel = this.displayPanel.bind(this);
  }

  componentDidMount() {
    // this.props.getCurrentSettings();
  }

  displayPanel() {
    this.setState({ click: !this.state.click });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newPreferences = {
      cost: this.state.cost,
      location: this.state.location
    };
    console.log(newPreferences);
  }

  render() {
    if (this.state.click) {
      return (
        <div className="footer">
          <div className="footer-menu">
            <div onClick={this.displayPanel} className="footer-settings">
              <FontAwesomeIcon icon={faCog} />
            </div>
            <div className="footer-settings-panel">
              <form className="panel-group" onSubmit={this.onSubmit}>
                <label htmlFor="cost-field">Cost:</label>
                <div className="button-group">
                  <input type="radio" name="cost" value="1" onChange={this.onChange} />
                  <label>$</label>
                  <br />
                  <input type="radio" name="cost" value="1,2" onChange={this.onChange} />
                  <label>$$</label>
                  <br />
                  <input type="radio" name="cost" value="1,2,3" onChange={this.onChange} />
                  <label>$$$</label>
                  <br />
                  <input type="radio" name="cost" value="1,2,3,4" onChange={this.onChange} />
                  <label>$$$$</label>
                </div>
                <label htmlFor="location-field">Location:</label>
                <input
                  type="text"
                  name="location"
                  placeholder="kansas city"
                  id="location-field"
                  onChange={this.onChange}
                />
                <button className="btn btn-panel" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div onClick={this.displayPanel} className="footer-settings">
        <FontAwesomeIcon className="float" icon={faCog} />
      </div>
    );
  }
}

Settings.propTypes = {
  setting: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  setting: state.setting
});

export default connect(
  mapStateToProps,
  {
    getCurrentSettings
  }
)(Settings);
