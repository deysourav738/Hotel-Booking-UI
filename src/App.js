import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BrowseHotels from './components/BrowseHotels';
import AdminPage from './components/AdminPage';
import './styles/common.css';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/browse" element={<BrowseHotels/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
