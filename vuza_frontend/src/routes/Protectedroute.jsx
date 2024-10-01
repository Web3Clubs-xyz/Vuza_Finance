import React, { useContext } from 'react';
import { JWTContext } from "../contexts/JWTContext";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useContext(JWTContext);

  if (loading) {
    return <div>Loading...</div>; 
  }
  console.log(token)

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
