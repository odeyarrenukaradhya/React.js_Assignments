import React, { useState } from 'react';
import Button from './Button';
import FormContainer from './FormContainer';
import InputField from './InputField';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    setError('');
    console.log('Register Submitted:', { name, email, password });
    alert('Registration Successful');
  };

  return (
    <FormContainer title="Register">
      <form onSubmit={handleSubmit}>
        <InputField id="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <InputField id="reg-email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField id="reg-password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <InputField id="confirm-password" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <div className="mt-6">
          <Button type="submit" variant="primary">Register</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default RegisterPage;
