import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";

const CategoryCard = ({ service }) => {
  const { user } = useContext(authContext);
  const { description } = service;
  console.log(description);
  return (
    <div className="bg-base-100">
      <div className="card  rounded-sm border text-left">
        <img src={service?.image} alt="/" className=" w-full md:h-48" />
        <div className="card-body flex justify-between p-4 text-black">
          <div className="tablet">
            <h2 className="font-bold" style={{ fontSize: "18px" }}>
              Brand: {service?.name}
            </h2>
            <p>{service?.model}</p>
            <p style={{ fontSize: "16px" }}>
              Color: <small>{service.color}</small>
            </p>
            <p style={{ fontSize: "16px" }}>CC : {service?.Cc}</p>
            <p style={{ fontSize: "16px" }}>Registration : {service?.Reg}</p>
            <p style={{ fontSize: "16px" }}>
              Condition : {service?.condition[2]}
            </p>
            <p style={{ fontSize: "16px" }}>Year of Use : {service?.yearuse}</p>
            <p style={{ fontSize: "16px" }}>
              ResellPrice : {service?.resellprice}
            </p>
            <p style={{ fontSize: "16px" }}>
              MarketPrice : {service?.orginalPrice}
            </p>
            <p style={{ fontSize: "16px" }}>Location : {service?.location}</p>

            <div className="divider">
              <p className="font-medium text-sm text-gray-800 border-gray-300">
                Detail Info
              </p>
            </div>
            {description?.slice(0, 3).map((des, index) => (
              <p key={index} className="flex items-center px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-4 h-4 mx-2 text-green-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {des}
              </p>
            ))}

            <div className="divider">
              <p className="font-medium text-sm text-gray-800 border-gray-300">
                Seller Info
              </p>
            </div>
            <div className="avatar flex justify-center">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                <img src={user?.photoURL} alt="/" />
              </div>
            </div>
            <h3 className="font-bold text-md text-center pt-2">{user?.displayName}</h3>
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
          <Link to={`/categories/${service.category_id}`}>
            {/* <button className="px-8 py-1 bg-purple-600 text-white">
              Purchase Now
            </button> */}
            <PrimaryButton>Book Now</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
