import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import toast from "react-hot-toast";

const MyproductTable = ({ product, index, refetch }) => {
  //   console.log(product);

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_server_url}/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${product?.model} Booked Deleted `);
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-12 mask  mask-squircle shadow-sm">
            <img src={product?.image} alt="/" />
          </div>
        </div>
      </td>
      <td>
        <p className="text-sm font-bold">{product?.model}</p>
      </td>
      <td>
        <small>12000</small>
      </td>

      <td>
        <small>
          Available
          {/* {book.resellprice && !book.paid && (
            <Link to={`/dashboard/payment/${book._id}`}>
              <button className="py-1 px-3 bg-accent text-white">Pay</button>
            </Link>
          )}

          {book.resellprice && book.paid && (
            <span className="text-green-500 font-medium">Paid</span>
          )} */}
        </small>
      </td>
      <td className="flex justify-between items-center">
        <TrashIcon
          onClick={() => handleDelete(product._id)}
          className="w-6 h-6 text-red-400 rounded-full font-sm"
        ></TrashIcon>
      <small> <button style={{fontSize:'12px'}} className="py-1 px-2 bg-red-400 text-white">Advirtised</button></small>
      </td>
    </tr>
  );
};

export default MyproductTable;
