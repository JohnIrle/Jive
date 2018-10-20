import React from "react";
import axios from "axios";

export default class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const logUser = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post("/api/users/login", logUser)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <div>
        <form id="simple-form" onSubmit={this.onSubmit}>
          <label htmlFor="login-email-field">Email:</label>
          <input type="email" name="email" id="login-email-field" onChange={this.onChange} />
          <label htmlFor="login-password-field">Password:</label>
          <input type="password" name="password" id="login-password-field" onChange={this.onChange} />
          <button className="btn btn-form" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
