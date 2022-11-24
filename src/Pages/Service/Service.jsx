import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CateGoryCard/CategoryCard';

const Service = () => {
    const services = useLoaderData()
    console.log(services);
    return (
        <div className='container mx-auto my-20'>
            <h3 className='font-bold py-6 text-lg text-center'>Our Products</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-12 gap-y-12">
        {services?.map((service) => (
          <CategoryCard key={service._id} service={service}></CategoryCard>
        ))}
      </div>
        </div>
    );
};

export default Service;