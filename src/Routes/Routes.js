import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Root from "../Root/Root";

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
        {},
        {},
        {},
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
