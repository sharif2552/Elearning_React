// Import React, createContext, useState, and useEffect from the React library
import React, { createContext, useState, useEffect } from "react";

// Create a new context called AuthContext
export const AuthContext = createContext();

// Define a functional component called AuthProvider that takes children as a prop
const AuthProvider = ({ children }) => {
  // Declare a state variable called user and a function to update it, starting with null
  const [user, setUser] = useState(null);

  // Declare a state variable called loading and a function to update it, starting with true
  const [loading, setLoading] = useState(true);

  // useEffect hook to run code when the component mounts
  useEffect(() => {
    // Get the token from local storage
    const token = localStorage.getItem("token");

    // If there is a token, set the user state with the token
    if (token) {
      setUser({ token });
    }

    // Set loading to false after checking the token
    setLoading(false);
  }, []);

  // Function to handle user login
  const login = (token) => {
    // Save the token in local storage
    localStorage.setItem("token", token);

    // Set the user state with the token
    setUser({ token });
  };

  // Function to handle user logout
  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");

    // Set the user state to null
    setUser(null);
  };

  // Return the AuthContext provider with the user, loading, login, and logout values
  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children} {/* Render the children components inside the provider */}
    </AuthContext.Provider>
  );
};

// Export the AuthProvider component as the default export
export default AuthProvider;
