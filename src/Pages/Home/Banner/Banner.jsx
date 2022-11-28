import React from "react";
import banner from "../../../images/banner.jpg";
import PrimaryButton from "../../../Shared/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div className="container mx-auto banner md:flex md:justify-around items-center md:py-28 py-14 px-6">
      <div className="text-content">
        <h3 className="text-accent font-bold lg:text-3xl md:text-2xl text-1xl">
          Easy And Fast way to Buy & Sell <br></br> Car on our Platform
        </h3>
        <p className="py-4">
          We will help you sell or buy your dream car here easily and quickly
          that is reliable.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
      <img
        src={banner}
        alt=""
        className="w-6/12 h-80 rounded-sm shadow-sm md:block hidden"
      />
      <div></div>
    </div>
  );
};

export default Banner;
