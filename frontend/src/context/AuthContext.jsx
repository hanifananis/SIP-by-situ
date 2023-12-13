// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
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

  const logout = () => {
    Cookies.remove('token');
    Cookies.remove('role');
    Cookies.remove('user_id');
    setLoggedIn(false);
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
