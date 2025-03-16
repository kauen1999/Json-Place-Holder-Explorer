import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-full bg-gray-50">
      <div className="m-5">
        <Link to="/">
          <span className="text-3xl font-bold">
            &#123;JSON&#125;Placeholder
          </span>
        </Link>
      </div>
      <div>
        <Link to="/">
          <button
            className="text-gray-900 hover:text-blue-600 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
            type="button"
          >
            Home
          </button>
        </Link>
        <Link to="/profiles">
          <button
            className="text-gray-900 hover:text-blue-600 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
            type="button"
          >
            Profiles
          </button>
        </Link>
        <Link to="/posts">
          <button
            className="text-gray-900 hover:text-blue-600 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
            type="button"
          >
            Posts
          </button>
        </Link>
        <Link to="/galery">
          <button
            className="text-gray-900 hover:text-blue-600 border-gray-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
            type="button"
          >
            Galery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
