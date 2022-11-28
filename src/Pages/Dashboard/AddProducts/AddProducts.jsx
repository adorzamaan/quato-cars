import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider";
import "./AddProduct.css";
const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(authContext);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_server_url}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  const navigate = useNavigate();
  const handleAddProducts = (data) => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString()

    const image = data.image[0];
    // console.log(name, image, user, email, password);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_HOST_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const products = {
            category_id: data.category_id,
            name: data.name,
            image: imageData.data.url,
            sellerProfile: user?.photoURL,
            sellername: user?.displayName,
            timing: date,
            posttime:time,
            email: user.email,
            model: data.model,
            Reg: data.Reg,
            Cc: data.Cc,
            color: data.color,
            resellprice: data.resellprice,
            orginalPrice: data.orginalPrice,
            location: data.location,
            condition: data.condition,
            yearuse: data.yearuse,
            description: [data.description],
          };
          fetch(`${process.env.REACT_APP_server_url}/products`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Successfully Addedd");
              navigate("/dashboard/myproducts");
            });
        }
      });
  };
  return (
    <div>
      <h3 className="font-bold py-6">Add Products</h3>
      <div className="addpro w-full  p-8 space-y-3 rounded-xl shadow-md bg-white">
        <span className="font-bold">Note : <small className="font-medium text-red-500">All Feild Required</small></span>
        <form onSubmit={handleSubmit(handleAddProducts)} className="space-y-2">
          {/* <label htmlFor="name" className="block text-gray-600">
            Name
          </label> */}
          <input
            type="text"
            placeholder="Brand name"
            {...register("name", { required: "name is required" })}
            className="w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white  text-gray-800 "
          />
          <select
            {...register("category_id")}
            required
            className="select select-ghost w-full px-4 py-2 rounded-md bg-white border-gray-200 border  text-gray-800"
          >
            {categories.map((category) => (
              <option key={category._id} value={category?.category_id}>
                {category?.brand}
              </option>
            ))}
          </select>
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
            {...register("Reg", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="number"
            placeholder="Cc"
            {...register("Cc", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="Color"
            {...register("color", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="number"
            placeholder="ResellPrice"
            {...register("resellprice", { required: "photo is required" })}
            className=" w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white text-gray-800 "
          />
          <input
            type="text"
            placeholder="number"
            {...register("orginalprice", { required: "photo is required" })}
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
            type="number"
            placeholder="Year of Use"
            {...register("yearuse", { required: "photo is required" })}
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
          <input
            type="email"
            defaultValue={user?.email}
            readOnly
            {...register("email", { required: "Email is required" })}
            className="w-full inputfeild px-4 py-2 rounded-md border-gray-200 border bg-white  text-gray-800 "
          />

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
