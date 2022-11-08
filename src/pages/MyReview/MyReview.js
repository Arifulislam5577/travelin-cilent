import React from "react";
import useTitle from "../../hooks/useTitle";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
const MyReview = () => {
  useTitle("My Review");
  return (
    <section className="py-10 z-0">
      <div className="container">
        <h1 className="text-3xl font-bold text-emerald-800">
          No reviews were added
        </h1>
        <h1 className="text-3xl font-bold text-emerald-800">My Review</h1>
        <hr className="my-3" />

        <div className="overflow-x-auto relative">
          <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className=" text-white uppercase bg-emerald-800 ">
                <tr>
                  <th scope="col" className="py-5 px-6">
                    Service Name
                  </th>
                  <th scope="col" className="py-5 px-6">
                    Review
                  </th>
                  <th scope="col" className="py-5 px-6">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b-2 bg-emerald-100 border-gray-900">
                  <th
                    scope="row"
                    className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap "
                  >
                    Apple MacBook Pro 17"
                  </th>

                  <td className="py-4 px-6">
                    <p className="lg:max-w-md text-gray-700 lg:block hidden">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Asperiores reprehenderit cupiditate ipsum ut maxime eos
                      esse voluptatibus saepe voluptate ipsa.
                    </p>
                    <p className="block text-gray-700 lg:hidden">
                      Lorem ipsum dolor sit...
                    </p>
                  </td>
                  <td className="py-4 px-6 ">
                    <div className="flex items-center gap-3">
                      <Link
                        to="/updateReview/:id"
                        className=" text-emerald-800 block"
                      >
                        <FiEdit size="20" />
                      </Link>
                      <button className="text-red-600">
                        <FiTrash2 size="20" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyReview;
