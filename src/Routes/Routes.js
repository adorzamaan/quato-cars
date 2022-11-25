import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Service from "../Pages/Service/Service";
import Root from "../Root/Root";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/service",
          element: <Service></Service>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/categories/:id",
          loader: ({ params }) => {
            return fetch(`http://localhost:5000/categories/${params.id}`);
          },
          element: (
            <PrivateRoutes>
              <Service></Service>
            </PrivateRoutes>
          ),
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
};

export default Routes;
