import React from "react";

const Login = () => {
  return (
    <div className="login lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 mx-auto my-10 bg-white p-10 rounded-md">
      <h1 className="text-2xl uppercase font-semibold  text-emerald-800">
        Login to your account
      </h1>

      <form className=" mt-5">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-gray-500 text-sm">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400"
            placeholder="you@gmail.com"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-gray-500 text-sm"
          >
            Password
          </label>
          <input
            type="email"
            id="password"
            name="password"
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400"
            placeholder="******"
          />
        </div>
        <button className="py-3 px-8 bg-emerald-800 text-white rounded-full hover:translate-y-3 hover:bg-emerald-900 transition-all duration-300">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
