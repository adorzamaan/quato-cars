import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setisAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_server_url}/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setisAdminLoading(false);
        });
    }
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
