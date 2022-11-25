import React, { useContext, useState } from "react";
import { authContext } from "../../../Context/AuthProvider";
import SmallSpinner from "../../../Shared/Spinner/SmallSpinner/SmallSpinner";

const BookingModal = ({ singleService, setSingleService }) => {
  const { user } = useContext(authContext);
  console.log(singleService);
  const { name: serviceName, resellprice } = singleService;

  const [loading, setLoading] = useState(false);
  const handleBooking = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold pb-2 text-black">
            Brand : {serviceName}
          </h3>
          <form onSubmit={handleBooking}>
            <input
              type="text"
              name="fullname"
              defaultValue={user?.displayName}
              readOnly
              className="input border border-gray-300 w-full my-2"
            />
            <input
              defaultValue={`Price ${resellprice}`}
              readOnly
              className="input border border-gray-300 w-full my-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input border border-gray-300 w-full my-2"
            />
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              disabled
              className="input border border-gray-300 w-full my-2"
            />
            {/* {loading ? (
              <SmallSpinner></SmallSpinner>
            ) : (
              <input
                type="submit"
                value="Submit"
                className="bg-accent text-white px-6 py-2 w-full mt-4"
              />
            )} */}
            {user ? (
              <button
                type="submit"
                className="bg-accent text-white px-6 py-2 w-full mt-4"
              >
                {loading ? <SmallSpinner /> : "Submit"}
              </button>
            ) : (
              <button className="btn px-6 py-2 w-full mt-4 " disabled>
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
