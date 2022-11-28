import React, { useContext } from "react";
import { authContext } from "../../../Context/AuthProvider";

const Profile = () => {
  const { user } = useContext(authContext);
  return (
    <div>
      <h3 className="font-bold py-6">
        Hey {user?.displayName} you're most welcome to our platform
      </h3>
    </div>
  );
};

export default Profile;
