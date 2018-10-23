import React from 'react';
import UserInput from './Userinput';

class RegisterUser extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="form-header">
          <h1>Register</h1>
        </div>
        <UserInput className="form-input" />
      </div>
    );
  }
}

export default RegisterUser;
