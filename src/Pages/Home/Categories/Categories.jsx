import React, { useEffect, useState } from "react";
import ServiceCard from "../../Service/ServiceCard/ServiceCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_server_url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="container mx-auto mt-10 mb-20">
      <div className="pb-12 pt-4 text-center">
        <h3 className="font-bold pb-1 text-center lg:text-xl sm:text-sm text-sm">Let's Find your Dream Car</h3>
        <p className="">
          We recommended the very best and new cars toady and also friendly
          Price for you
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-12 gap-y-12">
        {categories?.map((category) => (
          <ServiceCard key={category._id} category={category}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
