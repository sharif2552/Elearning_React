import React, { useState, useContext } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/navbar/logo.png";
import { AuthContext } from "../context/AuthContext";

// Animated Resume Builder Button Component
const AnimatedResumeButton = ({ isMobile = false }) => {
  return (
    <div className="relative group">
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500 animate-gradient"></div>

      <Link
        to="/resume-builder" target="_blank"
        className={`relative bg-black text-white ${
          isMobile ? "text-3xl" : ""
        } font-bold px-6 py-2 rounded-lg transform transition-all duration-300 shadow-lg flex items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-violet-500/20 text-black hover:text-secondary-replyOrange-900`}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

        <span className="relative z-10 flex items-center gap-2">
          <span className="relative">Resume Builder</span>
          <svg
            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </span>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleRegisterClick = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div>
      {/* Add the animation keyframes to the document */}
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-3px);
            }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          .animate-bounce-slow {
            animation: bounce-slow 2s ease-in-out infinite;
          }
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>

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
            <Link
              to="/"
              className="text-white text-3xl font-raleway hover:text-secondary-replyOrange-900"
            >
              Home
            </Link>
            <Link
              to="/course-list"
              className="text-white text-3xl font-raleway hover:text-secondary-replyOrange-900"
            >
              Courses
            </Link>
            <Link
              to="/blog"
              className="text-white text-3xl font-raleway hover:text-secondary-replyOrange-900"
            >
              Blog
            </Link>
            <Link
              to="/about-us"
              className="text-white text-3xl font-raleway hover:text-secondary-replyOrange-900"
            >
              About Us
            </Link>
            <AnimatedResumeButton isMobile={true} />
            {user && (
              <Link
                to="/admin"
                className="text-white text-3xl font-raleway hover:text-secondary-replyOrange-900"
              >
                Admin Panel
              </Link>
            )}
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
            <AnimatedResumeButton />
          </div>

          {/* Conditional rendering for Login/Register or Profile */}
          <div className="hidden lg:flex items-center space-x-5">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center text-gray-900 hover:text-secondary-replyGreen-900 focus:outline-none"
                >
                  <span className="mr-2">{user.name}</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Profile
                      </Link>
                      {user.role === "admin" && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="text-gray-900 hover:text-secondary-replyGreen-900"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-secondary-replyGreen-900 text-white px-4 py-2 rounded-md hover:bg-secondary-replyGreen-800"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
