import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = () => {
  return (
    <div className="container mx-auto">
      <div className="card bg-base-100 shadow-xl rounded-xl">
        <img src="" alt="/" className=" w-full md:h-48" />
        <div className="card-body flex justify-between p-4 text-black">
          <div className="tablet">
            <h2 className="font-bold" style={{ fontSize: "14px" }}>
              
            </h2>
            <p style={{ fontSize: "12px" }}>
              <small></small>
            </p>
          </div>
          <div className="tablet">
            <p>
              Price : <small></small>
            </p>
            <p className="flex items-center pr-2">
              Lectures: <small></small>
            </p>
          </div>
        </div>
        <div className="tablet text-center bottom-2 btn-item">
          <Link to={`/courses`}>
            <button className="px-8 py-1 bg-purple-600 text-white">
              Purchase Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
