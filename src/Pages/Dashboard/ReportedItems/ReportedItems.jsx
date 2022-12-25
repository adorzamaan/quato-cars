import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingSpinner from "../../../Shared/Spinner/LoadingSpinner/LoadingSpinner";
import ReportTable from "./ReportTable";

const ReportedItems = () => {
  const { data: reports, isLoading,refetch } = useQuery({
    queryKey: ["Reports"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_server_url}/report`);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <h3 className="font-bold py-4">
        All Reported Items Here {reports.length} !!!
      </h3>
      <table className="table w-full bg-base-100">
        <thead>
          <tr>
            <th></th>
            <th>Profile</th>
            <th>Products</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
          reports.map((report,index) => <ReportTable key={report._id} report={report} index={index} refetch={refetch}></ReportTable>)
        }
        </tbody>
      </table>
    </div>
  );
};

export default ReportedItems;
