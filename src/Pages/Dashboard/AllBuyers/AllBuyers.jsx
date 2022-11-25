import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBuyers = () => {
  const [buyers, setAllBuyers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_server_url}/users`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data.user);
        setAllBuyers(data.data.buyers);
      });
  }, []);
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
                  <Link to="/">
                    <button className="py-1 px-3 bg-accent text-white">
                      Delete
                    </button>
                  </Link>
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
