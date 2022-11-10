import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../hooks/useTitle";
import { Context } from "../../context/ContextApi";
import { HandleError } from "../../utils/handleError";
import useRedirect from "../../hooks/useRedirect";
import handleJsonWebToken from "../../utils/handleJwt";
const SignIn = () => {
  useTitle("Sign in");
  const redirect = useRedirect();
  const navigate = useNavigate();
  const { updateUser, createUser, user, googleLogin } = Context();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !password) {
      return;
    } else {
      setLoading(true);
      try {
        await createUser(email, password);
        await updateUser(name);
        setLoading(false);
        setError("");
        setEmail("");
        setName("");
        setPassword("");
      } catch (error) {
        setLoading(false);
        setError(HandleError(error.message));
      }
    }
  };

  useEffect(() => {
    if (user) {
      handleJsonWebToken(user);
      navigate(redirect);
    }
  }, [redirect, user, navigate]);
  return (
    <div className="login lg:w-2/6 md:w-3/6 sm:w-4/6 w-5/6 mx-auto my-10 bg-white p-10 rounded-md">
      <h1 className="text-2xl uppercase font-semibold  text-emerald-800">
        Create a new account
      </h1>

      {error && <p className="p-2 bg-red-200 text-gray-900 my-3 ">⚠️{error}</p>}

      <form className=" mt-5" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-gray-500 text-sm">
            Your Name
          </label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full bg-gray-100 px-5 py-3.5 focus:outline-none placeholder:text-sm placeholder:text-gray-400 rounded"
            placeholder="your name"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-gray-500 text-sm">
            Email Address
          </label>
          <input
            required
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
            required
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
          Already have an account?{" "}
          <Link
            to={`/login?redirect=${redirect}`}
            className="text-emerald-800 pb-1 border-b border-emerald-800"
          >
            Login
          </Link>
        </p>

        {loading ? (
          <button className="py-3 w-full text-gray-900 text-sm rounded px-5 bg-gray-300  capitalize">
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className="py-3 mb-5 w-full bg-emerald-800 text-white  hover:translate-y-1 hover:bg-emerald-900 transition-all duration-300 rounded"
          >
            SignIn
          </button>
        )}
      </form>

      <div className="flex items-center justify-center">
        <button
          className="flex items-center gap-2 text-sm text-gray-600 bg-gray-200 py-3 w-full rounded justify-center"
          onClick={googleLogin}
        >
          <FcGoogle /> SignIn with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
