import React, { useEffect, useState } from 'react';
import { login } from '../../api/index.js';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { auth } from '../../api/firebase-config.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()

  // useEffect(() => {
  //   // Add history
  //   if (auth.currentUser) {
  //     navigate("/")
  //   }
  // })

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      console.log('Login successful');
      navigate('/my-profile');
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Invalid email or password.');
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-page">
      <h1 style={{ fontWeight: 'bold' }}>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">
          Login
        </button>
        <button type="button" className="register-button" onClick={goToRegister}>
          Register
        </button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default LoginPage;
