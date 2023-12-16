import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Collection from "../components/Collection";
import { useBookStore } from "../store/useBookStore";
import NavBar from "../components/NavBar";

const Admin = () => {
  const books = useBookStore((state) => state.books);

  const [searchString, setSearchString] = useState('');

  const handleSearchChange = (searchValue) => {
    setSearchString(searchValue);
  }

  return (
    <div className="p-4 md:w-[80%] md:m-auto">
      <NavBar />
      <h1 className="font-bold text-3xl my-8">
        <span className="text-green-600">Hello!</span> Welcome Back
      </h1>
      <div className="mt-5">
        
        <Link to={"/addBook"}>
          <button
            className="text-xs md:text-sm bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-600 hover:to-blue-600 
                 text-white font-semibold py-3 px-8 mb-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add New Book
          </button>
        </Link>
        <Search onSearchChange={handleSearchChange} />
      
        <Collection books={books} searchString={searchString} />
      </div>
    </div>
  );
};

export default Admin;
