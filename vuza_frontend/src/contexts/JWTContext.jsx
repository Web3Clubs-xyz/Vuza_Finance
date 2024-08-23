import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "utils/axios";

export const JWTContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); 

  // Function to handle token change
  const handleTokenChange = () => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
    if(storedToken){
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${storedToken}`;
    }
  };

  useEffect(() => {
    // Load token on initial mount
    handleTokenChange();
    setLoading(false);

    // Add event listener for local storage changes
    window.addEventListener('storage', handleTokenChange);


    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('storage', handleTokenChange);
    };
  }, []);


  return (
    <JWTContext.Provider value={{ token, setToken, loading }}>
      {children}
    </JWTContext.Provider>
  );
};