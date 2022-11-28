import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../Shared/Spinner/LoadingSpinner/LoadingSpinner";

const AllBuyers = () => {
 

  const {
    data: buyers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_server_url}/users`);
      const data = await res.json();
      const buyers = data.data.buyers;
      return buyers;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleAdminDelete = (id) => {
    fetch(`${process.env.REACT_APP_server_url}/users/admin/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Sucessfully Deleted");
        }
      });
  };

  return (
    <div>
      <h3 className="font-bold">All Buyers Here !!</h3>
      <table className="table w-full bg-base-100">
        <thead>
          <tr>
            <th></th>
            <th>Profile</th>
            <th>Info</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {buyers?.map((buyer, index) => (
            <tr key={index} seller={buyer}>
              <th>{index + 1}</th>
              <td>
                <h5 className="font-bold">
                  <div className="avatar">
                    <div className="w-12 mask mask-hexagon shadow-sm">
                      <img src={buyer?.photo} alt="/" />
                    </div>
                  </div>
                </h5>
              </td>
              <td>
                <h3 className="font-bold text-sm">{buyer?.name}</h3>{" "}
                <p className="text-sm font-medium">{buyer?.profile}</p>
              </td>
              <td>
                <small>12000</small>
              </td>

              <td>
                <small>
                  <button
                    onClick={() => handleAdminDelete(buyer._id)}
                    className="py-1 px-3 bg-accent text-white"
                  >
                    Delete
                  </button>
                </small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBuyers;
