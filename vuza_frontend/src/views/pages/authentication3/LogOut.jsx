// views/Logout.js
import { JWTContext } from 'contexts/JWTContext';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Logout = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(JWTContext);

  useEffect(() => {
    // Clear the token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null)
    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return null;
};

export default Logout;
