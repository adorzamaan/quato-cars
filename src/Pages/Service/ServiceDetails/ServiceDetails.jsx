import React from "react";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  return (
    <div className="container mx-auto">
      <div className="card w-10/12 course_details flex justify-between mx-auto bg-base-100 shadow-sm border border-gray-400 mt-8 rounded-xl">
        <img src="" alt="/" className="w-full md:h-96" />
        <div className="card-body pl-8 py-6 text-black">
          <div className="pdf_dowonload flex justify-between items-center">
            <h2 className="font-bold" style={{ fontSize: "14px" }}>
              Course Name:
            </h2>
            <button className="px-4 py-1 m-3 bg-gray-300 text-black">
              DownLoad PDF
            </button>
          </div>
          <p style={{ fontSize: "12px" }}>
            Rating: <small></small>
          </p>
          <p>
            Price : <small></small>
          </p>
          <p className="font-medium pr-2">
            Lectures: <small></small>
          </p>
          <p className="font-medium py-2">
            Description: <small></small>
          </p>
          <p className="font-medium py-2">
            Feature: <small></small>
          </p>
          <Link to={`/checkout/`}>
            <button className="px-8 py-1 my-3 bg-purple-600 text-white">
              Get premium access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
