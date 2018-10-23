import React from 'react';
import LoginInput from './LoginInput';

class LoginUser extends React.Component {
  render() {
    return (
      <div className="form">
        <div className="form-header">
          <h1>Login</h1>
        </div>
        <LoginInput className="form-input" />
      </div>
    );
  }
}

export default LoginUser;
