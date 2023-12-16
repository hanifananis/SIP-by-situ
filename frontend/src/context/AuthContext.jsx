// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = () => {
      const storedToken = Cookies.get('token');
      return !!storedToken; // Mengembalikan true jika token tersedia
    };

    const storedToken = Cookies.get('token');
    setLoggedIn(checkLoggedIn());
    setToken(storedToken);
  }, []);

  const login = (authToken, callback) => {
    setToken(authToken);
    setLoggedIn(true);
    callback && callback(); // Invoke the callback if provided
  };

  const logout = async () => {
    try {
      // Make a request to your server's logout endpoint using Axios
      await axios.post('http://localhost:5000/logout');

      // Clear cookies and update state
      Cookies.remove('token');
      Cookies.remove('role');
      Cookies.remove('user_id');
      setLoggedIn(false);

      // <Navigate to={'/'} />
      // Show a success toast
      toast.success('Logout successful', { autoClose: 2000 });
      // navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Show an error toast
      toast.error('Logout failed. Please try again.', { autoClose: 2000 });
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
