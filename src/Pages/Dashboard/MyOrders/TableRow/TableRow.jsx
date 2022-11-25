import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../../Context/AuthProvider";

const TableRow = ({ book, index }) => {
  const { user } = useContext(authContext);
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <h5 className="font-bold">
          <div className="avatar">
            <div className="w-12 mask mask-hexagon shadow-sm">
              <img src={user?.photoURL} alt="/" />
            </div>
          </div>
        </h5>
      </td>
      <td>
        <h3 className="font-bold text-md">{book?.name}</h3>{" "}
        <p className="text-sm font-bold">{book?.service}</p>
      </td>
      <td>
        <small>12000</small>
      </td>

      <td>
        <small>
          {book.resellprice && !book.paid && (
            <Link to={`/dashboard/payment/${book._id}`}>
              <button className="py-1 px-3 bg-accent text-white">Pay</button>
            </Link>
          )}

          {book.resellprice && book.paid && (
            <span className="text-green-500 font-medium">Paid</span>
          )}
        </small>
      </td>
    </tr>
  );
};

export default TableRow;
