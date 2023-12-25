import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({children}) => {

  const isAuthenticated = sessionStorage.getItem("token");
  console.log("this", isAuthenticated);

  if (!isAuthenticated){
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
