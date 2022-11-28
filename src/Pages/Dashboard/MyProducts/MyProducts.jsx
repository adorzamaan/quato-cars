import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider";
import LoadingSpinner from "../../../Shared/Spinner/LoadingSpinner/LoadingSpinner";
import MyproductTable from "./MyproductTable";

const MyProducts = () => {
  const { user } = useContext(authContext);
  const url = `${process.env.REACT_APP_server_url}/products?email=${user?.email}`;
  const {
    data: products = [],
    isLoading,
    refetch,
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

  return (
   <div>
    {
      products.length === 0 ? <div className="">
        <h3 className="font-bold text-red-500 py-6">Product not added here now</h3>
        <p>Please Add your product <Link to="/dashboard/addproducts" className="px-6 py-1 bg-red-400 text-white ml-2">Add</Link> </p>
      </div>:<div>
      <h3 className="font-bold py-6">
        Hey{" "}
        <small className="text-primary font-bold">{`${user?.displayName}`}</small>{" "}
        Your Available Products -- {products?.length}
      </h3>
      <table className="table w-full bg-base-100">
        <thead>
          <tr>
            <th></th>
            <th>Profile</th>
            <th>Products</th>
            <th>Price</th>
            <th>Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <MyproductTable
              key={product._id}
              index={index}
              product={product}
              // handleDeleteditem={handleDelete}
              refetch={refetch}
            ></MyproductTable>
          ))}
        </tbody>
      </table>
    </div>
    }
   </div>
  );
};

export default MyProducts;
