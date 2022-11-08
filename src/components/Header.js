import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaPlaneDeparture,
  FaSignInAlt,
} from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom";
const Header = () => {
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
          <Link to="/" className="flex  items-center gap-1 text-emerald-800">
            <FaPlaneDeparture />
            Travelin
          </Link>
        </div>
        <ul className="flex items-center gap-5 text-sm text-gray-500 ">
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
          <li>
            <Link
              className="text-gray-600 hover:text-emerald-800 transition-all duration-100 hover:border-b-2 border-emerald-800 pb-2"
              to="/blogs"
            >
              Add Service
            </Link>
          </li>
          <li>
            <Link
              className="text-gray-600 hover:text-emerald-800 transition-all duration-100 hover:border-b-2 border-emerald-800 pb-2"
              to="/blogs"
            >
              My Review
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="py-2 px-6 bg-emerald-800 hover:bg-emerald-900 text-white rounded flex items-center gap-1"
            >
              <FaSignInAlt size="12" />
              Login
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
