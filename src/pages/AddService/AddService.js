import React, { useState } from "react";
import useTitle from "../../hooks/useTitle";
import { toast } from "react-toastify";

const AddService = () => {
  useTitle("Add Service");
  const [loading, setLoading] = useState(false);
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [serviceImage, setServiceImage] = useState("");
  const [serviceDesc, setServiceDesc] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createService = async () => {
      try {
        setLoading(true);

        const tour = {
          name: serviceName,
          price: servicePrice * 1,
          description: serviceDesc,
          image: serviceImage,
        };
        const response = await fetch(
          "https://travelin-server.vercel.app/api/v1/tours",
          {
            method: "POST",
            body: JSON.stringify(tour),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setLoading(false);
        setError("");
        toast.success("Service created success");
        setServiceName("");
        setServicePrice("");
        setServiceImage("");
        setServiceDesc("");
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    createService();
  };

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setServiceImage(reader.result);
    };
  };

  const handleImg = (e) => {
    const selectedImg = e.target.files[0];
    previewImage(selectedImg);
  };

  return (
    <div className="lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 mx-auto my-10 bg-white p-10 rounded-md">
      <h1 className="text-2xl uppercase font-semibold  text-emerald-800">
        Create a new Service
      </h1>
      {error && <p className="p-2 bg-red-200 text-gray-900 my-3 ">⚠️{error}</p>}
      <form className=" mt-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-gray-500 text-sm">
            Service Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
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
            required
            value={servicePrice}
            onChange={(e) => setServicePrice(e.target.value)}
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
            className="block w-full  text-sm text-gray-400 border  rounded cursor-pointer bg-gray-100 dark:text-gray-400 focus:outline-none px-5 py-3.5"
            id="default_size"
            type="file"
            onChange={(e) => handleImg(e)}
            placeholder="service image"
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
            required
            value={serviceDesc}
            onChange={(e) => setServiceDesc(e.target.value)}
            id="Description"
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400 rounded"
            rows="2"
            placeholder="service description"
          ></textarea>
        </div>

        {loading ? (
          <button className="py-3 w-full text-gray-900 text-sm rounded px-5 bg-gray-300  capitalize">
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className="py-3 mb-5 w-full bg-emerald-800 text-white  hover:translate-y-1 hover:bg-emerald-900 transition-all duration-300 rounded"
          >
            Create Service
          </button>
        )}
      </form>
    </div>
  );
};

export default AddService;
