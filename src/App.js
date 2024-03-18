
import { Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Quiz from './pages/Quiz';
import Homepage from './pages/Homepage';
import UploadProduct from './pages/UploadProduct';
import ProductsList from './pages/ProductsList';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


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
    path: "/homepage",
    element: <Homepage />,
  },
  {
    path: "upload",
    element: <UploadProduct />,
  },
  {
    path: "products",
    element: <ProductsList />,
  },
]);


function App() {
  return (
    <div className="App h-screen flex flex-col justify-center">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
