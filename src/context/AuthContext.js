import React, { createContext, useContext, useState } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Custom Hook to access Auth Context
export const useAuth = () => useContext(AuthContext);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to store user info

  // Function to log in or sign up the user
  const login = (userData) => setUser(userData);

  // Function to log out the user
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
