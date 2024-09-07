import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import Homepage from "./pages/Homepage";
import UploadProduct from "./pages/UploadProduct";
import ProductsList from "./pages/ProductsList";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./context/AuthContext";
import Logout from "./components/Logout";
import "./App.css";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";
import AboutUs from "./pages/Aboutus";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ForgetPassword from "./pages/PasswordResetForm";
import ForgetPasswordPage from "./pages/PasswordResetPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Homepage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/upload",
    element: <UploadProduct />,
  },
  // {
  //   path: "/products",
  //   element: <ProductsList />,
  // },
  {
    path: "/logout",
    element: <Logout />,
  },

  {
    path: "/add-course",
    element: <AddCourse />,
  },
  {
    path: "/course-list",
    element: <CourseList />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  
  {
    path: "/blog/:id",
    element: <BlogPost />,
  },

  {
    path: "/forget-password",
    element: <ForgetPassword />
  },
  {
    path: "/reset-password/:token",
    element: <ForgetPasswordPage />
  },
  

]);

function App() {
  return (
    <AuthProvider>
      <div className="App h-screen flex flex-col justify-center">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
