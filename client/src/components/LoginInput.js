import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { loginUser } from "../actions/authActions";

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/result");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <form id="simple-form" onSubmit={this.onSubmit}>
          <label htmlFor="login-email-field">Email:</label>
          <input
            type="email"
            name="email"
            id="login-email-field"
            onChange={this.onChange}
          />
          <label htmlFor="login-password-field">Password:</label>
          <input
            type="password"
            name="password"
            id="login-password-field"
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

LoginInput.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(LoginInput));
