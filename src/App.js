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

import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import CourseContent from "./pages/CourseContent";
import AboutUs from "./pages/Aboutus";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ForgetPassword from "./pages/PasswordResetForm";
import ForgetPasswordPage from "./pages/PasswordResetPage";
import AdminPanel from "./pages/AdminPanel";
import Profile from "./pages/Profile";
import ResumeBuilder from "./pages/ResumeBuilder";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/", element: <Homepage /> },
  { path: "/upload", element: <UploadProduct /> },
  { path: "/logout", element: <Logout /> },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requireAdmin={true}>
        <AdminPanel />
      </ProtectedRoute>
    ),
  },
  { path: "/course-list", element: <CourseList /> },
  { path: "/course/:id", element: <CourseDetail /> },
  {
    path: "/course-content/:id",
    element: (
      <ProtectedRoute>
        <CourseContent />
      </ProtectedRoute>
    ),
  },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/blog", element: <Blog /> },
  { path: "/blog/:id", element: <BlogPost /> },
  { path: "/forget-password", element: <ForgetPassword /> },
  { path: "/reset-password/:token", element: <ForgetPasswordPage /> },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/courses",
    element: (
      <ProtectedRoute>
        <CourseList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/resume-builder",
    element: (
      <ProtectedRoute>
        <ResumeBuilder />
      </ProtectedRoute>
    ),
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
