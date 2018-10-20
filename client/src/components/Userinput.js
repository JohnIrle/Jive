import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state.errors;

    return (
      <div>
        <form id="simple-form" onSubmit={this.onSubmit}>
          <label htmlFor="name-field">Name:</label>
          <input
            type="name"
            name="name"
            id="name-field"
            onChange={this.onChange}
          />
          <label htmlFor="email-field">Email:</label>
          <input
            type="email"
            name="email"
            id="email-field"
            onChange={this.onChange}
          />
          <label htmlFor="password-field">Password:</label>
          <input
            type="password"
            name="password"
            id="password-field"
            onChange={this.onChange}
          />
          <label htmlFor="password2-field">Confirm:</label>
          <input
            type="password"
            name="password2"
            id="confirm-field"
            onChange={this.onChange}
          />
          <button className="btn btn-form" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

UserInput.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(UserInput));
