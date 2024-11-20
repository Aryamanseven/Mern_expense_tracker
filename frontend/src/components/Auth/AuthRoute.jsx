import React from "react";
import { Navigate } from "react-router-dom";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

const AuthRoute = ({ children }) => {
  const token = getUserFromStorage();
  if (!token) {
    localStorage.removeItem("userInfo"); // Clear invalid storage
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthRoute;
