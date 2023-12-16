import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ onSearchChange }) => {
  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearchChange(value);
  };

  return (
    <div className="flex justify-between">
      <div className="relative w-full md:w-[80%] lg:w-[50%] ">
        <input
          type="text"
          placeholder="Search for books"
          onChange={handleInputChange}
          className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-full"
        />
        <FaSearch className="absolute top-3 left-3 text-gray-500" />
      </div>
    </div>
  );
};

export default Search;
