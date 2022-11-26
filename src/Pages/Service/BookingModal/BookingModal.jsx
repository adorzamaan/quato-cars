import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authContext } from "../../../Context/AuthProvider";
import SmallSpinner from "../../../Shared/Spinner/SmallSpinner/SmallSpinner";

const BookingModal = ({ singleService, setSingleService }) => {
  const { user } = useContext(authContext);
//   console.log(singleService);
  const { name: serviceName, resellprice } = singleService;

  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);
  const handleBooking = (data) => {
    const products = {
      clientName: user?.displayName,
      service: serviceName,
      resellprice,
      location:data.location,
      phone: data.phone,
      email: user?.email,
    };
    setLoading(true);
    fetch(`${process.env.REACT_APP_server_url}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(
          `Hey ${user?.displayName} Thanks for the ${serviceName} Booked`
        );
        setLoading(false);
        setSingleService(null);
      });
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
          <form onSubmit={handleSubmit(handleBooking)}>
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
              // defaultValue={`Meet ${location}`}
              name="location"
              {...register("location", { required: "required*" })}
              placeholder="Meet Location"
              className="input border border-gray-300 w-full my-2"
            />
            <input
              type="text"
              name="phone"
              {...register("phone", { required: "required*" })}
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
              <button
                type="submit"
                className="btn px-6 py-2 w-full mt-4 "
                disabled
              >
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
