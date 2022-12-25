import React from "react";
import toast from "react-hot-toast";

const ReportTable = ({ report, index, refetch }) => {
  const hanldeDeleeReport = (id) => {
    fetch(`${process.env.REACT_APP_server_url}/report/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Deleted Item Successfully");
        refetch();
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <h5 className="font-bold">
          <div className="avatar">
            <div className="w-12 mask mask-hexagon shadow-sm">
              <img src={report?.image} alt="/" />
            </div>
          </div>
        </h5>
      </td>
      <td>
        <h3 className="font-bold text-md">{report?.name}</h3>{" "}
        <p className="text-sm font-bold">{report?.service}</p>
      </td>
      <td>
        <small>12000</small>
      </td>

      <td>
        <small>
          <button
            onClick={() => hanldeDeleeReport(report._id)}
            className="py-1 px-3 bg-accent text-white hover:bg-red-500"
          >
            Delete
          </button>
        </small>
      </td>
    </tr>
  );
};

export default ReportTable;
