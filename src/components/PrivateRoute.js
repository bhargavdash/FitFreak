// PrivateRoute.js
import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route {...rest} element={user ? children : <Navigate to="/login" />} />
  );
};

export default PrivateRoute;
