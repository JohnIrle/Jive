import React from "react";
import axios from "axios";

export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    axios.post("/api/users/register", newUser)
    .then(res => console.log(res.data))
    .catch(error => console.log(error.res));
  }

  render() {
    return (
      <div>
        <form id="simple-form" onSubmit={this.onSubmit}>
          <label htmlFor="name-field">Name:</label>
          <input type="name" name="name" id="name-field" onChange={this.onChange} />
          <label htmlFor="email-field">Email:</label>
          <input type="email" name="email" id="email-field" onChange={this.onChange} />
          <label htmlFor="password-field">Password:</label>
          <input type="password" name="password" id="password-field" onChange={this.onChange} />
          <label htmlFor="password2-field">Confirm:</label>
          <input type="password" name="password2" id="confirm-field" onChange={this.onChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
