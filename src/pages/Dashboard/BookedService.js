import React, { useEffect, useState } from "react";
import { Context } from "../../context/ContextApi";

const BookedService = () => {
  const [URL, setURL] = useState("");
  const { user } = Context();
  const handleClick = async (tourId) => {
    const getClientSecret = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_DOMAIN_NAME}/api/v1/payment`,
        {
          method: "POST",
          body: JSON.stringify({
            tourId,
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

  useEffect(() => {
    if (URL) {
      window.location.assign(URL);
    }
  }, [URL]);
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
            <tr className="bg-gray-50 border-b-2 border-gray-200">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
              >
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">4.6</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">
                <button
                  onClick={handleClick}
                  className="bg-emerald-800 px-3 py-1  text-white text-sm capitalize"
                >
                  pay now
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default BookedService;
