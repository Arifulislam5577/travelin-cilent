import React, { useEffect, useState } from "react";
import { Context } from "../../context/ContextApi";
import useFetch from "../../hooks/useFetch";
const BookedService = () => {
  const [URL, setURL] = useState("");
  const { user } = Context();

  const handleOrder = async (orderId) => {
    const getClientSecret = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_DOMAIN_NAME}/api/v1/payment`,
        {
          method: "POST",
          body: JSON.stringify({
            orderId,
            user: user,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      const result = await res.json();
      if (result) setURL(result.url);
    };
    getClientSecret();
  };

  // GET ALL THE ORDER BY THIS USER
  const { loading, error, data } = useFetch(
    `${process.env.REACT_APP_DOMAIN_NAME}/api/v1/order?userId=${user._id}`
  );

  useEffect(() => {
    if (URL) {
      window.location.assign(URL);
    }
  }, [URL]);

  if (loading) {
    return (
      <div className="flex flex-col gap-3">
        <div className="w-full h-10 rounded dark:bg-gray-400 animate-pulse"></div>
        <div className="w-full h-10 rounded dark:bg-gray-400 animate-pulse"></div>
        <div className="w-full h-10 rounded dark:bg-gray-400 animate-pulse"></div>
        <div className="w-full h-10 rounded dark:bg-gray-400 animate-pulse"></div>
        <div className="w-full h-10 rounded dark:bg-gray-400 animate-pulse"></div>
      </div>
    );
  } else if (error) {
    return (
      <div className="w-full">
        <p className="py-3 bg-red-200 text-center text-white text-sm">
          {error}
        </p>
      </div>
    );
  } else {
    return (
      <section className="">
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-900 ">
            <thead className="text-sm text-white uppercase  bg-emerald-800 ">
              <tr>
                <th scope="col" className="py-5 px-6">
                  Tour name
                </th>
                <th scope="col" className="py-5 px-6">
                  Rating
                </th>
                <th scope="col" className="py-5 px-6">
                  Price
                </th>
                <th scope="col" className="py-5 px-6">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {data?.length
                ? data?.map((order) => {
                    return (
                      <tr
                        key={order?._id}
                        className="bg-gray-50 border-b-2 border-gray-200"
                      >
                        <th
                          scope="row"
                          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                        >
                          {order?.tour?.name}
                        </th>
                        <td className="py-4 px-6">{order?.tour?.rating}</td>
                        <td className="py-4 px-6">${order?.amount}</td>
                        <td className="py-4 px-6">
                          {order?.paid ? (
                            <button className="bg-emerald-200 px-3 py-1  text-white text-sm capitalize">
                              Paid
                            </button>
                          ) : (
                            <button
                              onClick={() => handleOrder(order?._id)}
                              className="bg-emerald-800 px-3 py-1  text-white text-sm capitalize"
                            >
                              pay now
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
};

export default BookedService;
