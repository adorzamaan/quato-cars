import React from "react";
import { Link } from "react-router-dom";
import test from "../../../images/mazda5.jpg";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";
const AdvertisedItems = () => {
  return (
    <div className="my-20 container mx-auto">
      <h3 className="font-bold py-6">Our Premium Product</h3>
      <div className="card w-10/12 course_details flex justify-between mx-auto bg-base-100 shadow-sm border border-gray-400 mt-8 rounded-xl">
       <div className="flex justify-center items-center">
       <img src={test} alt="/" className="lg:w-8/12 md:h-96" />
       </div>
        <div className="card-body pl-8 py-6 text-black">
          <div className="pdf_dowonload flex justify-between items-center">
            <h2 className="font-bold" style={{ fontSize: "14px" }}>
             Brand: Mazda
            </h2>
            <PrimaryButton>Wishlist Add</PrimaryButton>
            {/* <button className="px-4 py-1 m-3 bg-gray-300 text-black">
             Book Now
            </button> */}
          </div>
          <p style={{ fontSize: "12px" }}>
            Model: Mazda CX-4<small></small>
          </p>
          <p>
            Price :450000 <small></small>
          </p>
          <p className="font-medium pr-2">
            Condition: Fair<small></small>
          </p>
          <p className="font-medium py-2">
            Description: Mazda Motor Corporation commonly referred to as simply Mazda, is a Japanese multinational automotive<small></small>
          </p>
          <p className="font-medium py-2">
            Feature: All option auto, sunroof, premium beige leather interior <small></small>
          </p>
          <Link to={`/checkout/`}>
            <PrimaryButton>Book Confirmed</PrimaryButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItems;
