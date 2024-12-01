import React, { createContext, useContext, useState, useEffect } from 'react';
import { signup_api,login_api, auth_user_api, logout_api } from '../utils/api';

// Create the Auth Context
const AuthContext = createContext();

// Custom Hook to access Auth Context
export const useAuth = () => useContext(AuthContext);

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Make a request to the backend to verify the user
    const checkAuth = async () => {
      try {
        let resp = await auth_user_api();
        if (resp.status) {
          const data = resp.data;
          setUser(data);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Function to sign up the user
  const signup = (userData) => {
    signup_api(userData);
    console.log(userData);
    setUser(userData);
  }

  // Function to log in the user
  const login = async (userData) => {
    const resp = await login_api(userData);
    if(resp.status) {
      setUser(resp.data);
      setIsAuthenticated(true);
    }
    return resp;
  }

  // Function to log out the user
  const logout = () => {
    logout_api();
    setIsAuthenticated(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
