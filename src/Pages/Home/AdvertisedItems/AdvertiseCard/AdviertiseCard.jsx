import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../../Shared/PrimaryButton/PrimaryButton";

const AdviertiseCard = ({ advirtise }) => {
    const {description} = advirtise;
  return (
    <div className="bg-base-100">
      <div className="card  shadow-md rounded-xl border">
        <img src={advirtise?.image} alt='' className=" w-full md:h-48" />
        <div className="card-body flex justify-between p-4 text-black">
          <div className="tablet">
            <h2 className="font-bold" style={{ fontSize: "18px" }}>
              Brand: {advirtise?.name}
            </h2>
            <p style={{ fontSize: "14px" }}>
              Model: <small>{advirtise?.model}</small>
            </p>
          
            <p style={{ fontSize: "14px" }}>
             Info: <small>{description.slice(0,100)}</small>
            </p>

            {/* <p>
              Price :450000 <small>{advirtise?.price}</small>
            </p>
            <p className="font-medium pr-2">
              Condition: Fair<small></small>
            </p>
            <p className="font-medium py-2">
              Description: Mazda Motor Corporation commonly referred to as
              simply Mazda, is a Japanese multinational automotive
              <small></small>
            </p>
            <p className="font-medium py-2">
              Feature: All option auto, sunroof, premium beige leather interior{" "}
              <small></small>
            </p> */}
          </div>
        </div>
        <div className="tablet text-center mt-2 mb-6">
          <Link to={`/`}>
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

export default AdviertiseCard;
