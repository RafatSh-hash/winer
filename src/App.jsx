/* eslint-disable no-unused-vars */
import React from "react";

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Errorpage from "./Components/Errorpage/Errorpage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          errorElement: <Errorpage></Errorpage>,
        },
        {
          path: "/login",
          element: <Login></Login>,
          errorElement: <Errorpage></Errorpage>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
          errorElement: <Errorpage></Errorpage>,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
