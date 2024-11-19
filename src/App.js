import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './components/HomePage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import BrowseHotels from './components/BrowseHotels';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/browse" element={<BrowseHotels/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
