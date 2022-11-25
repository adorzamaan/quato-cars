import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(authContext);
  return (
    <div>
      <h3 className="font-bold py-6">My Orders</h3>
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
          <tr>
            <th>1</th>
            <td>
              <h5 className="font-bold">
                <div className="avatar">
                  <div className="w-12 mask mask-hexagon shadow-sm">
                    <img src={user?.PhotoURL} alt="/" />
                  </div>
                </div>
              </h5>
            </td>
            <td>
              <h3 className="font-bold text-md">{user?.displayName}</h3>{" "}
              <p className="text-sm">{user?.email}</p>
            </td>
            <td>
              <small>
                12000
                
                {/* {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="py-1 px-3 bg-accent text-white">
                          Pay
                        </button>
                      </Link>
                    )}

                    {booking.price && booking.paid && (
                      <span className="text-green-500 font-medium">Paid</span>
                    )} */}
              </small>
            </td>

            <td>
            <Link to={`/dashboard/payment}`}>
                  <button className="py-1 px-3 bg-accent text-white">
                    Pay
                  </button>
                </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
