import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import Allusers from "../Pages/Dashboard/AllUsers/Allusers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Service from "../Pages/Service/Service";
import DashboardRoot from "../Root/DashboardRoot";
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
    {
      path: "/dashboard",
      element: <DashboardRoot></DashboardRoot>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/dashboard/myorders",
          element: (
            <PrivateRoutes>
              <MyOrders></MyOrders>
            </PrivateRoutes>
          ),
        },
        {
          path: "/dashboard/addproducts",
          element: (
            <PrivateRoutes>
              <AddProducts></AddProducts>
            </PrivateRoutes>
          ),
        },
        {
          path: "/dashboard/allusers",
          element: (
            <PrivateRoutes>
              <Allusers></Allusers>
            </PrivateRoutes>
          ),
        },
        {
          path: "/dashboard/allbuyers",
          element: (
            <PrivateRoutes>
              <AllBuyers></AllBuyers>
            </PrivateRoutes>
          ),
        },
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
