import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/ContextApi";
import useRedirect from "../../hooks/useRedirect";
import useTitle from "../../hooks/useTitle";
import { HandleError } from "../../utils/handleError";
const Login = () => {
  useTitle("Login");
  const redirect = useRedirect();
  const navigate = useNavigate();
  const { loginUser, user } = Context();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    } else {
      setLoading(true);
      try {
        await loginUser(email, password);
        setLoading(false);
        setError("");
        setEmail("");
        setPassword("");
      } catch (error) {
        setLoading(false);
        setError(HandleError(error.message));
      }
    }
  };

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [redirect, user, navigate]);
  return (
    <div className="login lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 mx-auto my-10 bg-white p-10 rounded-md">
      <h1 className="text-2xl uppercase font-semibold  text-emerald-800">
        Login to your account
      </h1>
      {error && <p className="p-2 bg-red-200 text-gray-900 my-3 ">⚠️{error}</p>}
      <form className=" mt-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-gray-500 text-sm">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400 rounded"
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
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400 rounded"
            placeholder="******"
          />
        </div>
        <p className="text-sm text-gray-600 my-3">
          Create a new account{" "}
          <Link
            to={`/signin?redirect=${redirect}`}
            className="text-emerald-800 pb-1 border-b border-emerald-800"
          >
            SignIn
          </Link>
        </p>

        {loading ? (
          <button className="py-3 w-full text-gray-900 text-sm rounded px-5 bg-gray-300  capitalize">
            Loading...
          </button>
        ) : (
          <button className="py-3 rounded w-full  bg-emerald-800 text-white  hover:translate-y-1 hover:bg-emerald-900 transition-all duration-300">
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
