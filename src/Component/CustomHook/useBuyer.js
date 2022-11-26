import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setisBuyer] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_server_url}/users/buyer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setisBuyer(data.isbuyer);
        });
    }
  }, [email]);

  return [isBuyer];
};

export default useBuyer;
