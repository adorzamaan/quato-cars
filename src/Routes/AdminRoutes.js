import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Component/CustomHook/useAdmin";
import { authContext } from "../Context/AuthProvider";
import LoadingSpinner from "../Shared/Spinner/LoadingSpinner/LoadingSpinner";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
