import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import LoadingSpinner from "../../../Shared/Spinner/LoadingSpinner/LoadingSpinner";

const Allusers = () => {
  //   const { user } = useContext(authContext);

  // const url =
  // const [sellers, setAllSellers] = useState([]);

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_server_url}/users`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.data.user);
  //       setAllSellers(data.data.users);
  //     });
  // }, []);

  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_server_url}/users`);
      const data = await res.json();
      const sellers = data.data.users;
      return sellers;
    },
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  const handleDelete = (id) => {
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
          toast.success(`Sucessfully Deleted`);
        }
      });
  };

  const handleMakeVerify = (id) => {
    fetch(`${process.env.REACT_APP_server_url}/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Sucessfully Verified");
        }
      });
  };

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
                {!seller?.userverfied && (
                  <>
                    <small>
                      <button
                        onClick={() => handleMakeVerify(seller._id)}
                        className="text-sm py-1 px-3 bg-red-500 text-white"
                      >
                        Make Verify
                      </button>
                    </small>
                  </>
                )}
                {seller?.userverfied && (
                  <small className="border px-3 py-1 font-bold text-green-500 text-center">
                    Verified
                  </small>
                )}
              </td>

              <td>
                <button
                  onClick={() => handleDelete(seller._id)}
                  className="py-1 px-3 bg-accent text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
