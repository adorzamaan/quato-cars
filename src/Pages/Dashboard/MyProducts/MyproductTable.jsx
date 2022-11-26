import React from "react";

const MyproductTable = ({ product, index, handleDeleteditem }) => {
  //   console.log(product);

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
      <td>
      <button
            // onClick={() => handleDeleteditem(_id)}
            className="py-1 px-3 bg-red-400 text-white"
          >
            Delete
          </button>
      </td>
    </tr>
  );
};

export default MyproductTable;
