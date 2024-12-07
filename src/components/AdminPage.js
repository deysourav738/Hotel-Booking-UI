import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/AdminPage.css';
import HotelManagement from './HotelManagement';

const AdminPage = () => {
  const { user, logout } = useAuth();
  const [selectedTab, setSelectedTab] = useState('hotel');

  // Render content based on the selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case 'hotel':
        return <HotelManagement/>;
      case 'bookings':
        return <div>Bookings Management Section</div>;
      default:
        return <div>Welcome to the Admin Dashboard</div>;
    }
  };
  if(!user || user.role !== 'ADMIN') return <div>Restricted Access.</div>
  return (
    <div className="admin-container">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul className="sidebar-links">
          <li
            className={`sidebar-link ${
              selectedTab === 'hotel' ? 'active' : ''
            }`}
            onClick={() => setSelectedTab('hotel')}
          >
            Hotel
          </li>
          <li
            className={`sidebar-link ${
              selectedTab === 'bookings' ? 'active' : ''
            }`}
            onClick={() => setSelectedTab('bookings')}
          >
            Bookings
          </li>
        </ul>
        <Link to="/" className="back-button">
          Back to Home
        </Link>
      </div>
      <div className="main-content">
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AdminPage;
