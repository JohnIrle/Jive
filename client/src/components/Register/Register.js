import React from 'react';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div className="form">
      <div className="form-header">
        <h1>Register</h1>
      </div>
      <RegisterForm className="form-input" />
    </div>
  );
};

export default Register;
