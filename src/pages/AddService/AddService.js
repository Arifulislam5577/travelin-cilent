import React from "react";
import useTitle from "../../hooks/useTitle";
const AddService = () => {
  useTitle("Add Service");
  return (
    <div className="login lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 mx-auto my-10 bg-white p-10 rounded-md">
      <h1 className="text-2xl uppercase font-semibold  text-emerald-800">
        Create a new Service
      </h1>

      <form className=" mt-5">
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-gray-500 text-sm">
            Service Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400 rounded"
            placeholder="service name"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="price" className="block mb-2 text-gray-500 text-sm">
            Service Price
          </label>
          <input
            type="number"
            id="price"
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400 rounded"
            placeholder="$499.99"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="img" className="block mb-2 text-gray-500 text-sm">
            Service Image
          </label>
          <input
            type="file"
            id="img"
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400 rounded"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Description"
            className="block mb-2 text-gray-500 text-sm"
          >
            Service Description
          </label>
          <textarea
            name=""
            id="Description"
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400 rounded"
            rows="2"
            placeholder="service description"
          ></textarea>
        </div>
        <button className="py-3 mb-5 w-full bg-emerald-800 text-white  hover:translate-y-1 hover:bg-emerald-900 transition-all duration-300">
          Create Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
