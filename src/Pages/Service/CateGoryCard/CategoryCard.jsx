import { FlagIcon, HeartIcon } from "@heroicons/react/24/solid";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import useBuyer from "../../../Component/CustomHook/useBuyer";
import { authContext } from "../../../Context/AuthProvider";

const CategoryCard = ({ service, setSingleService }) => {
  const { description } = service;

  const { user } = useContext(authContext);
  const [isBuyer] = useBuyer(user?.email);


  const handleReportAdmin = (id) => {
    fetch(`${process.env.REACT_APP_server_url}/report/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.error(`${service?.name} Reported`);
        }
      });
  };

  return (
    <div className="bg-base-100">
      <div className="card  rounded-sm border text-left">
        <img src={service?.image} alt="/" className=" w-full md:h-48" />
        <div className="card-body flex justify-between p-4 text-black">
          <div className="tablet">
            <div className="flex flex-wrap justify-between">
              <h2 className="font-bold" style={{ fontSize: "18px" }}>
                Brand: {service?.name}
              </h2>

              <div className="tablet sm:text-center md:text-left mt-2 mb-6">
                <label
                  onClick={() => setSingleService(service)}
                  htmlFor="bookingModal"
                  className="bg-gradient-to-tr from-primary to-secondary rounded-lg py-1 px-2 md:px-6 text-white"
                >
                  Book Now
                </label>
              </div>
            </div>

            <p>{service?.model}</p>
            <p style={{ fontSize: "16px" }}>
              Color: <small>{service.color}</small>
            </p>
            <p style={{ fontSize: "16px" }}>CC : {service?.Cc}</p>
            <p style={{ fontSize: "16px" }}>Registration : {service?.Reg}</p>
            <p style={{ fontSize: "16px" }}>Condition : {service?.condition}</p>
            <p style={{ fontSize: "16px" }}>Year of Use : {service?.yearuse}</p>
            <p style={{ fontSize: "16px" }}>
              ResellPrice : {service?.resellprice}
            </p>
            <p style={{ fontSize: "16px" }}>
              MarketPrice : {service?.orginalPrice}
            </p>
            <p style={{ fontSize: "16px" }}>Phone : 016017872348</p>
            <p style={{ fontSize: "16px" }}>Location : {service?.location}</p>
            {service.timing && (
              <p style={{ fontSize: "16px" }}>Date : {service?.timing}</p>
            )}
            {service.posttime && (
              <p style={{ fontSize: "16px" }}>Timing : {service?.posttime}</p>
            )}
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
                <img src={service?.sellerProfile} alt="/" />
              </div>
            </div>
            <h3 className="font-bold text-md text-center pt-2">
              {service?.sellername}
            </h3>
           {
            isBuyer &&  <div className="flex justify-center">
            <FlagIcon
              onClick={() => handleReportAdmin(service._id)}
              className="w-5 h-5 m-2 hover:text-red-500 text-gray-700"
              title="Report To Admin"
            ></FlagIcon>
            <HeartIcon
              className="w-5 h-5 m-2 hover:text-red-600 text-gray-700"
              title="Wishlist Add"
            ></HeartIcon>
          </div>
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
