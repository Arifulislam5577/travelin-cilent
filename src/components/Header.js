import React, { useState } from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaPlaneDeparture,
  FaSignInAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextApi";
const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { user, logOutUser } = Context();

  return (
    <header className=" bg-white">
      <div className="bg-emerald-800 py-1">
        <div className="container flex items-center justify-between">
          <h1 className="text-sm text-white">Welcome to Travelin</h1>
          <div className="flex items-center gap-2">
            <FaFacebookF color="white" size="14" />
            <FiTwitter color="white" size="14" />
            <FaYoutube color="white" size="14" />
          </div>
        </div>
      </div>
      <div className="container py-4 flex items-center justify-between">
        <div className="logo">
          <Link
            to="/"
            className="flex text-xl font-bold items-center gap-1 text-emerald-800"
          >
            <FaPlaneDeparture />
            Travelin
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-5 text-sm text-gray-500 ">
          <li>
            <Link
              className="text-gray-600 hover:text-emerald-800 transition-all duration-100 hover:border-b-2 border-emerald-800 pb-2"
              to="/blogs"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 hover:text-emerald-800 transition-all duration-100 hover:border-b-2 border-emerald-800 pb-2"
              to="/services"
            >
              Services
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/dashboard">
                  <img
                    src={user?.userImg}
                    className="h-10 w-10 rounded-full p-1 bg-gray-100 shadow"
                    alt={user?.displayName}
                  />
                </Link>
              </li>
              <li>
                <button
                  className="py-2 px-6 bg-emerald-800 hover:bg-emerald-900 text-white text-sm rounded flex items-center gap-1"
                  onClick={logOutUser}
                >
                  <FaSignInAlt size="12" />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/login"
                className="py-2 px-6 bg-emerald-800 hover:bg-emerald-900 text-white text-sm rounded flex items-center gap-1"
              >
                <FaSignInAlt size="12" />
                Login
              </Link>
            </li>
          )}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setShowMobileNav(!showMobileNav)}>
            <FaBars color="#4b5563" size="24" />
          </button>

          <div
            className={`w-full sm:w-1/2 ${
              showMobileNav ? "translate-x-0" : "translate-x-full"
            } duration-300 transition-all  fixed top-0 right-0 bg-gray-200 h-full z-10`}
          >
            <div className="flex items-center justify-between px-8 py-10">
              <Link
                to="/"
                className="flex text-2xl font-bold items-center gap-1 text-emerald-800"
              >
                <FaPlaneDeparture />
                Travelin
              </Link>
              <button onClick={() => setShowMobileNav(!showMobileNav)}>
                <FaTimes color="#4b5563" size="24" />
              </button>
            </div>
            <ul className="flex flex-col md:hidden items-center justify-center h-2/3 gap-5 text-xl text-gray-500 ">
              <li>
                <Link
                  className="text-gray-600 hover:text-emerald-800 transition-all duration-100 hover:border-b-2 border-emerald-800 pb-2"
                  to="/blogs"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-emerald-800 transition-all duration-100 hover:border-b-2 border-emerald-800 pb-2"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              {user ? (
                <>
                  <Link to="/dashboard">
                    <img
                      src={user?.userImg}
                      className="h-10 w-10 rounded-full p-1 bg-gray-100 shadow"
                      alt={user?.userName}
                    />
                  </Link>
                  <li>
                    <button
                      className="py-2 px-6 bg-emerald-800 hover:bg-emerald-900 text-white text-sm rounded flex items-center gap-1"
                      onClick={logOutUser}
                    >
                      <FaSignInAlt size="12" />
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="py-2 px-6 bg-emerald-800 hover:bg-emerald-900 text-white text-sm rounded flex items-center gap-1"
                  >
                    <FaSignInAlt size="12" />
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
