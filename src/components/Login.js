import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock validation - Replace with actual API call
    if (email === 'user@example.com' && password === 'password123') {
      login({ name: 'John Doe', email }); // Update user context
      navigate('/'); // Redirect to Home page
    } else {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="auth-button">
          Login
        </button>
      </form>

      {/* Navigation Buttons */}
      <div className="auth-navigation">
        <button
          className="nav-button"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </button>
        <button
          className="nav-button"
          onClick={() => navigate('/')}
        >
          Home
        </button>
      </div>
    </div>
  );
};

export default Login;
