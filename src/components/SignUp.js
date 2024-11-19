import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Assuming you have this context
import '../styles/Auth.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const { signup } = useAuth();  // Assuming you have signup method in your Auth context
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }
    // Mock sign-up - Replace with actual API call or logic
    signup({ name, email }); // Save user data to context or API
    alert(`Welcome, ${name}! Sign Up Successful!`);
    navigate('/'); // Redirect to Home page after successful signup
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="auth-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="auth-button">Sign Up</button>
      </form>

      {/* Navigation Buttons */}
      <div className="auth-navigation">
        <button
          className="nav-button"
          onClick={() => navigate('/login')}
        >
          Login
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

export default SignUp;
