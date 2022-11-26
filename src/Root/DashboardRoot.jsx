import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useBuyer from "../Component/CustomHook/useBuyer";
import useSeller from "../Component/CustomHook/useSeller";
import { authContext } from "../Context/AuthProvider";
import Header from "../Shared/Header/Header";

const DashboardRoot = () => {
  const { user } = useContext(authContext);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
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
            {isBuyer && (
              <>
                {" "}
                <NavLink to="/dashboard/profile" className="my-2">
                  Profile
                </NavLink>
                <NavLink to="/dashboard/myorders" className="my-2">
                  My Orders
                </NavLink>
              </>
            )}
            {isSeller && (
              <>
                {" "}
                <NavLink to="/dashboard/addproducts" className="my-2">
                  Add a Product
                </NavLink>
                <NavLink to="/dashboard/myproducts" className="my-2">
                  My Products
                </NavLink>
              </>
            )}
            <NavLink to="/dashboard/allusers" className="my-2">
              ALl Sellers
            </NavLink>
            <NavLink to="/dashboard/allbuyers" className="my-2">
              ALl Buyers
            </NavLink>

            {/* <NavLink to="/dashboard/managedoctors" className="my-2">
              Manage Doctors
            </NavLink> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardRoot;
