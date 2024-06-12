// Import React and the useContext hook from the React library
import React, { useContext } from "react";

// Import the Navigate component from react-router-dom for navigation
import { Navigate } from "react-router-dom";

// Import the AuthContext to access authentication state
import { AuthContext } from "../context/AuthContext";

// Define a functional component called ProtectedRoute that takes children as a prop
const ProtectedRoute = ({ children }) => {
  // Destructure user and loading from the AuthContext using useContext
  const { user, loading } = useContext(AuthContext);

  // If the authentication state is still loading, display a loading indicator
  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking authentication state
  }

  // If there is no user (not authenticated), navigate to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If the user is authenticated, render the children components
  return children;
};

// Export the ProtectedRoute component as the default export
export default ProtectedRoute;
