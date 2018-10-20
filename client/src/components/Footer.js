import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: '',
      location: '',
      click: false
    };
    this.onChange = this.onChange.bind(this);
    this.displayPanel = this.displayPanel.bind(this);
  }

  displayPanel() {
    this.setState({click: !this.state.click});
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if(this.state.click) {
      return (
        <div className="footer">
          <div onClick={this.displayPanel} className="footer-settings"></div>
          <div className="footer-settings-panel">
          <div className="panel-group">
            <label htmlFor="cost-field">Cost:</label>
            <div className="button-group">
            <input type="radio" name="cost" value="1" onChange={this.onChange} /><label>$</label><br/>
            <input type="radio" name="cost" value="1,2" onChange={this.onChange} /><label>$$</label><br/>
            <input type="radio" name="cost" value="1,2,3" onChange={this.onChange} /><label>$$$</label><br/>
            <input type="radio" name="cost" value="1,2,3,4" onChange={this.onChange} /><label>$$$$</label>
            </div>
            <label htmlFor="location-field">Location:</label>
            <input
              type="text"
              name="location"
              placeholder="kansas city"
              id="location-field"
              onChange={this.onChange}
            />
          </div>
          <button className="btn btn-panel" type="submit">Submit</button>
          </div>
        </div>
      );
    }
      return (
        <div className="footer">
          <div onClick={this.displayPanel} className="footer-settings">
          </div>
        </div>
      );
  }
}

export default Footer;
