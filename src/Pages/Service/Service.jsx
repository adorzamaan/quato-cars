import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "../../Shared/Spinner/LoadingSpinner/LoadingSpinner";
import BookingModal from "./BookingModal/BookingModal";
import CategoryCard from "./CateGoryCard/CategoryCard";

const Service = () => {
  const [singleService, setSingleService] = useState(null);
  const services = useLoaderData();
  const servicesData = services.data.result;
  console.log(servicesData);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  // console.log(services);
  return (
    <div className="container mx-auto my-20">
      <h3 className="font-bold py-6 text-lg text-center">Our Products</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-12 gap-y-12">
        {servicesData?.map((service) => (
          <CategoryCard
            key={service._id}
            service={service}
            setSingleService={setSingleService}
          ></CategoryCard>
        ))}
      </div>
      {/* The button to open modal */}

      {singleService && (
        <BookingModal
          singleService={singleService}
          setSingleService={setSingleService}
        ></BookingModal>
      )}
    </div>
  );
};

export default Service;
