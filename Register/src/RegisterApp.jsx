import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
import './App.css';

const RegisterApp = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmitSuccess = () => {
    setIsRegistered(true);
  };

  return (
    <div className="app-container">
      <header className="header-bar">
        <h1>Student Registration Form</h1>
      </header>
      <div className="form-wrapper">
        {isRegistered ? (
          <div className="success-message-box">
            <h2 className="success-title">🎉 Registration is Successful! 🎉</h2>
            <p className="success-detail">Your account has been created.</p>
          </div>
        ) : (
          <RegistrationForm onSubmitSuccess={handleSubmitSuccess} />
        )}
      </div>
    </div>
  );
};

export default RegisterApp;