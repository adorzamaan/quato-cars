import { CreditCardIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import React from "react";

const OurServe = () => {
  return (
    <div className="container mx-auto">
      <h3 className="font-bold pt-5 text-center lg:text-xl sm:text-sm text-sm">
        What Our Serve For You
      </h3>
      <p className="text-center">
        We provide many of the best services for you and you will get the best
        benefits here
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-12 mx-8">
        <div className="w-96 bg-base-100 shadow-sm border-gray-100 border p-4">
       <HandThumbUpIcon className="w-10 h-10 m-2 main"></HandThumbUpIcon>
          <div className="">
            <h2 className="font-bold py-1">Top Buy & Sell Car</h2>
            <p>Buy & Sell most trusted Cars.We provide the best platform and easy to use</p>
           
          </div>
        </div>
        <div className="w-96 bg-base-100 shadow-sm border-gray-100 border p-4">
       <CreditCardIcon className="w-10 h-10 m-2 main"></CreditCardIcon>
          <div className="">
            <h2 className="font-bold py-1">Easy Payment</h2>
            <p>Transcation are very easy and safe.you can pay using anything and the money will be receveid by us first</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServe;
