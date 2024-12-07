import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/HomePage.css';

const HomePage = () => {
  const { user, logout } = useAuth();
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [rooms, setRooms] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log('Searching hotels with', { location, date, rooms });
    const queryParams = new URLSearchParams({
      location,
      date,
      rooms,
    }).toString();
    navigate(`/browse?${queryParams}`);
  };

  const handleBrowse = () => {
    navigate('/browse');
  };

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo">StayEase</div>
        <div className="auth">
          {user ? (
            <>
              <span className='m-auto'>Welcome, {user.name}</span>
              {user.role === 'ADMIN' && (
                <Link to="/admin" className="admin-link">
                  <button className="cta-button"> Admin Dashboard </button>
                </Link>
              )}
              <button className="auth-button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="auth-button">Login</button>
              </Link>
              <Link to="/signup">
                <button className="auth-button">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="date"
          className="search-input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          className="search-input"
          placeholder="Rooms"
          min="1"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to StayEase!</h1>
        <p>Your perfect hotel, just a click away.</p>
        <button className="cta-button" onClick={handleBrowse}>
          Browse Hotels
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 StayEase. All rights reserved.</p>
        {!user && (
          <Link to="/signup?role=admin" className="register-link">
            Register Your Hotel
          </Link>
        )}
      </footer>
    </div>
  );
};

export default HomePage;
