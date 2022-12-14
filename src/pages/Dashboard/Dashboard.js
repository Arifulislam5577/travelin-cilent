import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Context } from "../../context/ContextApi";

const Dashboard = () => {
  const { user, logOutUser } = Context();

  const dashboard = [
    { id: 2, title: "Add Service", path: "/dashboard" },
    { id: 3, title: "My Service", path: "/dashboard/myservice" },
    { id: 4, title: "My Review", path: "/dashboard/myreview" },
    { id: 1, title: "Booked Service", path: "/dashboard/bookedservice" },
  ];
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="lg:col-span-1 w-full">
            <div className="p-5 bg-emerald-50 shadow">
              <div className="mx-auto w-full">
                <img
                  src={user?.userImg}
                  alt={user?.userName}
                  className="rounded-full border-2 border-emerald-200 h-20 w-20 mx-auto"
                />
              </div>
              <div className="py-3">
                <h2 className="text-center font-bold text-emerald-800">
                  {user?.userName}
                </h2>

                <ul className="py-3 flex flex-col gap-2 px-5">
                  {dashboard.map((item) => (
                    <li
                      key={item.id}
                      className="text-sm hover:text-emerald-800 transition-all duration-500 hover:font-bold  hover:border-l-2 border-emerald-800 hover:pl-3 text-gray-600"
                    >
                      <Link to={item.path}>{item.title}</Link>
                    </li>
                  ))}

                  <li className="text-sm hover:text-emerald-800 transition-all duration-500 hover:font-bold  hover:border-l-2 border-emerald-800 hover:pl-3 text-gray-600">
                    <button onClick={logOutUser}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 w-full ">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
