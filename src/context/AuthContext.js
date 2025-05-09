import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser({ ...response.data, token });
    } catch (error) {
      console.error("Error fetching user data:", error);
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        await fetchUserData(token);
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (token) => {
    localStorage.setItem("token", token);
    await fetchUserData(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // Add a function to check if token is valid
  const isTokenValid = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return !!response.data;
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, logout, isTokenValid }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
