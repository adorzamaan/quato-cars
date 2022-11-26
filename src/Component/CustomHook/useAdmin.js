import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_server_url}/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
        });
    }
  }, [email]);

  return [isAdmin];
};

export default useAdmin;
