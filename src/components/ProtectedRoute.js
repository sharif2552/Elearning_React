// Import React and the useContext hook from the React library
import React, { useContext } from "react";

// Import the Navigate component from react-router-dom for navigation
import { Navigate, useLocation } from "react-router-dom";

// Import the AuthContext to access authentication state
import { AuthContext } from "../context/AuthContext";

// Define a functional component called ProtectedRoute that takes children and requireAdmin as props
const ProtectedRoute = ({ children, requireAdmin = false }) => {
  // Destructure user and loading from the AuthContext using useContext
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // If the authentication state is still loading, display a loading indicator
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is no user (not authenticated), navigate to the login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If admin role is required and user is not an admin, redirect to home
  if (requireAdmin && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // If the user is authenticated and has the required role, render the children components
  return children;
};

// Export the ProtectedRoute component as the default export
export default ProtectedRoute;
