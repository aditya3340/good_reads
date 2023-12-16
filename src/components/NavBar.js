import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <div className=" border-b-2 border-gray-400 pt-4 pb-4  flex justify-between items-baseline">
      <h1 className="text-xl  text-gray-600">
        good<span className="font-bold">reads</span>
      </h1>

      {pathname === "/" ? (
        <Link to={"/admin"}>
          <button
            className="flex items-center bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 
                 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Admin <FiChevronRight className="ml-1" />
          </button>
        </Link>
      ): (
        <Link to={"/"}>
          <button
            className="flex items-center bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 
                 text-white font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <FiChevronLeft className="mr-1" />
            Home 
          </button>
        </Link>
      )}
    </div>
  );
};

export default NavBar;
