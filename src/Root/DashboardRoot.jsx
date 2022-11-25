import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";

const DashboardRoot = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side mt-6">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu customClass p-4 w-80 text-base-content">
            <NavLink to="/dashboard/profile" className="my-2">
              Profile
            </NavLink>
            <NavLink to="/dashboard" className="my-2">
              My Appointments
            </NavLink>
            <NavLink to="/dashboard/users" className="my-2">
              ALl Users
            </NavLink>
            <NavLink to="/dashboard/adddoctor" className="my-2">
              Add a Doctor
            </NavLink>
            <NavLink to="/dashboard/managedoctors" className="my-2">
              Manage Doctors
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardRoot;
