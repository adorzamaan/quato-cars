import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";

const ServiceCard = ({category}) => {
  const {info} = category;

  return (
    <div className="bg-base-100">
      <div className="card  shadow-md rounded-xl">
        <img src={category?.image} alt="/" className=" w-full md:h-48" />
        <div className="card-body flex justify-between p-4 text-black">
          <div className="tablet">
            <h2 className="font-bold" style={{ fontSize: "18px" }}>
             Brand: {category?.brand}
            </h2>
            <p style={{ fontSize: "14px" }}>
             Info: <small>{info.slice(0,100)}</small>
            </p>
          </div>
          {/* <div className="tablet">
            <p>
              Price : <small></small>
            </p>
            <p className="flex items-center pr-2">
              Lectures: <small></small>
            </p>
          </div> */}
        </div>
        <div className="tablet text-center mt-2 mb-6">
          <Link to={`/categories/${category.category_id}`}>
            {/* <button className="px-8 py-1 bg-purple-600 text-white">
              Purchase Now
            </button> */}
            <PrimaryButton>Visit More</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
