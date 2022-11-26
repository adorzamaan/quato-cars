import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../../Context/AuthProvider";
import LoadingSpinner from "../../../Shared/Spinner/LoadingSpinner/LoadingSpinner";
import MyproductTable from "./MyproductTable";

const MyProducts = () => {
  const { user } = useContext(authContext);
  const url = `${process.env.REACT_APP_server_url}/products?email=${user?.email}`;
  const {
    data: products = [],
    isLoading,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      const result = data.data.result;
      return result;
    },
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

//   const handleDelete = (product) => {
//     fetch(`${process.env.REACT_APP_server_url}/products/${product._id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   };

  return (
    <div>
      <h3 className="font-bold py-6">
        Hey{" "}
        <small className="text-primary font-bold">{`${user?.displayName}`}</small>{" "}
        your Product Already unsold -- {products?.length}
      </h3>
      <table className="table w-full bg-base-100">
        <thead>
          <tr>
            <th></th>
            <th>Profile</th>
            <th>Products</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <MyproductTable
              key={product._id}
              index={index}
              product={product}
            //   handleDeleteditem={handleDelete}
            ></MyproductTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyProducts;
