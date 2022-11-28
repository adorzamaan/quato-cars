import React, { useContext } from "react";
import { authContext } from "../../../Context/AuthProvider";

const Dashboard = () => {
  const {user} = useContext(authContext)
  return (
    <div>
      <h3 className="font-bold py-6">Hello <span className="font-bold text-md text-primary">{user?.displayName}</span> Most welcome !!!!</h3>
    </div>
  );
};

export default Dashboard;
