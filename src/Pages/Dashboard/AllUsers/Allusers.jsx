import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Allusers = () => {
  //   const { user } = useContext(authContext);

  // const url =
  const [sellers, setAllSellers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_server_url}/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.user);
        setAllSellers(data.data.users);
      });
  }, []);

  return (
    <div>
      <h3 className="font-bold py-6">All Users</h3>
      <table className="table w-full bg-base-100">
        <thead>
          <tr>
            <th></th>
            <th>Profile</th>
            <th>Info</th>
            <th>Verify</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sellers?.map((seller, index) => (
            <tr key={index} seller={seller}>
              <th>{index + 1}</th>
              <td>
                <h5 className="font-bold">
                  <div className="avatar">
                    <div className="w-12 mask mask-hexagon shadow-sm">
                      <img src={seller?.photo} alt="/" />
                    </div>
                  </div>
                </h5>
              </td>
              <td>
                <h3 className="font-bold text-sm">{seller?.name}</h3>{" "}
                <p className="text-sm font-medium">{seller?.profile}</p>
                <p className="text-sm">{seller?.email}</p>
              </td>
              <td>
              <small>
                  <Link to="/">
                    <button className="py-1 px-3 bg-red-500 text-white">
                      Verify
                    </button>
                  </Link>
                </small>
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

export default Allusers;
