import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="form">
      <div className="form-header">
        <h1>Login</h1>
      </div>
      <LoginForm className="form-input" />
    </div>
  );
};

export default Login;
