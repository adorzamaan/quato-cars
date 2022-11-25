import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";
const AddProducts = () => {
  const { register, handleSubmit } = useForm();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_server_url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleAddProducts = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h3 className="font-bold py-6">Add Products</h3>
      <div className="addpro w-full  p-8 space-y-3 rounded-xl shadow-md bg-white">
        <form onSubmit={handleSubmit(handleAddProducts)} className="space-y-2">
          {/* <label htmlFor="name" className="block text-gray-600">
            Name
          </label> */}
          <input
            type="text"
            placeholder="name"
            {...register("name", { required: "name is required" })}
            className="w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white  text-gray-800 "
          />
          {/* <label htmlFor="name" className="block text-gray-600">
            Photo
          </label> */}
          <input
            type="file"
            placeholder="image"
            accept="image/*"
            {...register("image", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />

          {/* <label htmlFor="email" className="block text-gray-600">
            Email
          </label> */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white  text-gray-800 "
          />
          {/* <label htmlFor="name" className="block text-gray-600">
            Photo
          </label> */}
          <input
            type="text"
            placeholder="model"
            {...register("model", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="Registration"
            {...register("reg", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="Cc"
            {...register("cc", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="Color"
            {...register("color", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="ResellPrice"
            {...register("resellprice", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="OrginaPrice"
            {...register("orginalPrice", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="Location"
            {...register("location", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="Condition"
            {...register("condition", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="Description"
            {...register("description", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          {/* <label htmlFor="email" className="block text-gray-600">
            Specialty
          </label> */}
          <select
            {...register("category")}
            required
            className="select select-ghost w-full px-4 py-2 rounded-md bg-white border-gray-200 border  text-gray-800"
          >
            {categories.map((category) => (
              <option key={category._id} value={category?.category_id}>
                {category?.brand}
              </option>
            ))}
          </select>

          <input
            type="submit"
            value="Add"
            className="block w-full p-3  rounded-sm text-white bg-accent"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
