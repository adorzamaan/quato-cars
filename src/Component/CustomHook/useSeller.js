import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_server_url}/users/seller/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsSeller(data.isSeller);
        });
    }
  }, [email]);

  return [isSeller];
};

export default useSeller;
