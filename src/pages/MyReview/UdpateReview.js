import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useFetch from "../../hooks/useFetch";
const UdpateReview = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const { data } = useFetch(
    `https://travelin-server.vercel.app/api/v1/review/${id}`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createService = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://travelin-server.vercel.app/api/v1/review/${data._id}`,
          {
            method: "PATCH",
            body: JSON.stringify({
              reviewText: description,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              authorization: `Bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        );
        await response.json();
        setLoading(false);
        setError("");
        toast.success("Review updated successfully");
        setDescription("");
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    createService();
  };

  useEffect(() => {
    if (data) {
      setDescription(data.reviewText);
    }
  }, [data]);
  return (
    <div className="lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 mx-auto my-10 bg-white p-10 rounded-md">
      <h1 className="text-2xl uppercase font-semibold  text-emerald-800">
        Update Review
      </h1>
      {error && <p className="p-2 bg-red-200 text-gray-900 my-3 ">⚠️{error}</p>}
      <form onSubmit={handleSubmit}>
        <textarea
          className="border bg-gray-100 border-gray-100  p-3 text-sm text-gray-600 w-full my-4 focus:outline-none"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="flex items-center justify-end">
          {loading ? (
            <button className="py-3 text-gray-900 text-sm rounded px-5 bg-gray-300  capitalize">
              Loading...
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="py-3 text-white text-sm rounded px-5 bg-emerald-800 hover:bg-emerald-900 capitalize"
              >
                update
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default UdpateReview;
