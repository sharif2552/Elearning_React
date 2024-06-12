import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
    console.log("Logout Successful");
  }, [logout, navigate]);

  return null;
};

export default Logout;
