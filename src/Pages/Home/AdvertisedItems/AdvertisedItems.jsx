import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingSpinner from "../../../Shared/Spinner/LoadingSpinner/LoadingSpinner";
import AdviertiseCard from "./AdvertiseCard/AdviertiseCard";


const AdvertisedItems = () => {
 const {data:advirtiseData,isLoading,} = useQuery({
  queryKey:['advirtise'],
  queryFn:async()=>{
    const res = await fetch(`${process.env.REACT_APP_server_url}/products`)
    const data = await res.json()
    const advirtiseData = data.data.advirtisedresult
    return advirtiseData
  }
 })
 if(isLoading){
  return <LoadingSpinner></LoadingSpinner>
 }

  return (
   <>
   {
    advirtiseData.length === 0 ? "" : <div className="my-20 container mx-auto">
    <h3 className="font-bold pb-10 pt-6 text-md">Our Advirtised Product</h3>
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-x-12 gap-y-12">
     {
      advirtiseData.map(advirtise => <AdviertiseCard key={advirtise._id} advirtise={advirtise}></AdviertiseCard>)
     }
    </div>
  </div>
   }
   </>
  );
};

export default AdvertisedItems;
