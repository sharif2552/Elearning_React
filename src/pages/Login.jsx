// Import necessary modules from React and other libraries
import React, { useState, useContext } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom"; // Used for navigation and linking
import axios from "axios"; // For making HTTP requests
import { AuthContext } from "../context/AuthContext"; // Import the AuthContext (make sure the path is correct)

// Define a functional component called Login
export default function Login() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userCredentials
      );

      if (response.data.token) {
        await login(response.data.token);
        navigate("/");
      } else {
        setErrorMessage("Invalid response from server");
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || "Invalid credentials");
      } else if (error.request) {
        setErrorMessage("No response from server. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const googleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  // Return the JSX for the login form
  return (
    <div>
      {/* Link to an external CSS stylesheet */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/motion-tailwind.css"
      />
      <div className="bg-white rounded-lg py-5 container flex flex-col justify-center mx-auto">
        <div className="flex justify-center align-middle w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              {/* Form for user login */}
              <form
                className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                onSubmit={handleSignin}
              >
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                  Sign In
                </h3>
                <p className="mb-4 text-grey-700">
                  Enter your email and password
                </p>
                <button
                  type="button"
                  onClick={googleLogin}
                  className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300"
                >
                  <img
                    className="h-5 mr-2"
                    src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png"
                    alt=""
                  />
                  Login with Google
                </button>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                {/* Display error message if any */}
                {errorMessage && (
                  <div className="mb-4 text-red-500">{errorMessage}</div>
                )}
                {/* Input field for email */}
                <label
                  htmlFor="email"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={userCredentials.email}
                  onChange={handleChange}
                  placeholder="mail@loopple.com"
                  className="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  required
                />
                {/* Input field for password */}
                <label
                  htmlFor="password"
                  className="mb-2 text-sm text-start text-grey-900"
                >
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={userCredentials.password}
                  onChange={handleChange}
                  placeholder="Enter a password"
                  className="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  required
                />
                <div className="flex flex-row justify-center mb-8">
                  <Link
                    to="/forget-password"
                    className="mr-4 text-sm font-medium text-purple-blue-500"
                  >
                    Forget password?
                  </Link>
                </div>
                {/* Submit button for the form */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500 disabled:opacity-50"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </button>
                <p className="text-sm leading-relaxed text-grey-900">
                  Not registered yet?{" "}
                  <Link to={"/signup"} className="font-bold text-grey-700">
                    Create an Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
