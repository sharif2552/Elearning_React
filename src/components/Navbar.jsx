import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/navbar/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set default as false
  const [userName, setUserName] = useState("John Doe"); // Example username, you can get this from context or props
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleRegisterClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      {/* Overlay for mobile menu */}
      <div
        className="fixed top-0 left-0 w-full h-full z-50 bg-black opacity-50 backdrop-filter backdrop-blur-md"
        style={{ display: showMenu ? "block" : "none" }}
        onClick={toggleMenu}
      ></div>

      {/* Mobile menu */}
      <div
        className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <div className="bg-transparent max-w-full backdrop-filter backdrop-blur-md flex align-middle justify-center w-full h-full text-center rounded-md p-4 shadow-lg">
          <div className="flex flex-col items-center justify-center space-y-4 mt-8">
            <a
              href="#"
              className="text-white text-3xl font-raleway hover:text-secondary-replyOrange-900"
            >
              Home
            </a>

            <Link
              to="/course-list"
              className="text-white text-3xl font-raleway hover:text-secondary-replyOrange-900"
            >
              Courses
            </Link>
            <a
              href="#"
              className="text-white text-3xl font-raleway hover:text-secondary-replyOrange-900"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white text-3xl font-raleway hover:text-secondary-replyOrange-900"
            >
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-filter backdrop-blur-md">
        <nav className="container mx-auto flex justify-between p-2">
          {/* Logo */}
          <div className="flex items-center space-x-5">
            <img src={logo} alt="logo" className="w-20 h-20" />
            <h1 className="text-black text-4xl font-bold font-raleway">
              EduWise
            </h1>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center space-x-5 lg:hidden">
            <button
              className="text-secondary-replyGreen-900 font bg-white px-4 py-2 rounded-md"
              onClick={toggleMenu}
            >
              {showMenu ? (
                <HiX className="h-6 w-6 ease-in-out" />
              ) : (
                <HiMenu className="h-6 w-6 ease-in-out" />
              )}
            </button>
          </div>

          {/* Links for larger screens */}
          <div className="hidden lg:flex items-center space-x-5 backdrop-filter backdrop-blur-md">
            <Link
              to="/"
              className="text-black hover:text-secondary-replyOrange-900 text-xl"
            >
              Home
            </Link>
            <Link
              to="/course-list"
              className="text-black hover:text-secondary-replyOrange-900 text-xl"
            >
              Courses
            </Link>
            <Link
              to="/blog"
              className="text-black hover:text-secondary-replyOrange-900 text-xl"
            >
              Blog
            </Link>
            <Link
              to="/about-us"
              className="text-black hover:text-secondary-replyOrange-900 text-xl"
            >
              About Us
            </Link>
          </div>

          {/* Conditional rendering for Login/Register or User's name */}
          <div className="hidden lg:flex items-center space-x-5">
            {isLoggedIn ? (
              <div className="text-black text-xl">
                Welcome, <span className="font-bold">{userName}</span>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-secondary-replyGreen-900 font-raleway bg-white px-7 py-3 rounded-md"
                >
                  Log In
                </Link>
                <button
                  className="bg-secondary-replyGreen-900 font-raleway text-white px-7 py-3 rounded-md"
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
