import React, { useState } from 'react';
import Button from './Button';
import FormContainer from './FormContainer';
import InputField from './InputField';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted:', { email, password });
    alert('Login Successful');
  };

  return (
    <FormContainer title="Login">
      <form onSubmit={handleSubmit}>
        <InputField id="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputField id="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="mt-6">
          <Button type="submit" variant="primary">Login</Button>
        </div>

        <div className="text-center mt-4">
          <Button variant="secondary" className="text-sm">Forgot password?</Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginPage;
