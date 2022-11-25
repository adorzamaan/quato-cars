import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../Context/AuthProvider";
import LoadingSpinner from "../../../Shared/Spinner/LoadingSpinner/LoadingSpinner";
import TableRow from "./TableRow/TableRow";

const MyOrders = () => {
  const { user } = useContext(authContext);

  const url = `${process.env.REACT_APP_server_url}/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <h3 className="font-bold py-6">
        Hey <small className="text-primary font-bold">{`${user?.displayName}`}</small> your available booking-- {bookings.length}
      </h3>
      <table className="table w-full bg-base-100">
        <thead>
          <tr>
            <th></th>
            <th>Profile</th>
            <th>Products</th>
            <th>Price</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {bookings?.map((book, index) => (
            <TableRow key={index} book={book} index={index}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
