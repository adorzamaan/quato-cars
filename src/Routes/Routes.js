import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErroPage from "../Component/CustomHook/ErroPage/ErroPage";
import Blog from "../Pages/Blog/Blog";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import Allusers from "../Pages/Dashboard/AllUsers/Allusers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import Profile from "../Pages/Dashboard/Profile/Profile";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Service from "../Pages/Service/Service";
import DashboardRoot from "../Root/DashboardRoot";
import Root from "../Root/Root";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErroPage></ErroPage>,
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
            return fetch(
              `${process.env.REACT_APP_server_url}/categories/${params.id}`
            );
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
      errorElement: <ErroPage></ErroPage>,
      children: [
        {
          path: "/dashboard",
          element: (
            <PrivateRoutes>
              <Dashboard></Dashboard>
            </PrivateRoutes>
          ),
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
            <AdminRoutes>
              <Allusers></Allusers>
            </AdminRoutes>
          ),
        },
        {
          path: "/dashboard/allbuyers",
          element: (
            <AdminRoutes>
              <AllBuyers></AllBuyers>
            </AdminRoutes>
          ),
        },
        {
          path: "/dashboard/reporteditems",
          element: (
            <AdminRoutes>
              <ReportedItems></ReportedItems>
            </AdminRoutes>
          ),
        },

        {
          path: "/dashboard/myproducts",
          element: (
            <PrivateRoutes>
              <MyProducts></MyProducts>
            </PrivateRoutes>
          ),
        },
        {
          path: "/dashboard/profile",
          element: (
            <PrivateRoutes>
              <Profile></Profile>
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
