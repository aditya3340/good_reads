import React, { useState } from "react";
import { useBookStore } from "../store/useBookStore";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import {FiPlus} from 'react-icons/fi'

const AddBooks = () => {
  const addBook = useBookStore((state) => state.addBook);

  const [formData, setFormData] = useState({
    title: "",
    s_number: "",
    description: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Convert the selected image to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleAddBook = () => {
    addBook(
      formData.title,
      formData.s_number,
      formData.description,
      selectedImage
    );
    setSelectedImage(null);
    alert("book added");
  };

  return (
    <div className="p-4 md:w-[80%] md:m-auto">
      <NavBar />
      <h1 className="text-4xl py-4 font-bold">Add Book</h1>

      <div className="lg:w-[40%]">
        <form>
        <div className="py-2 flex items-center">
          <h1 htmlFor="title" className="font-semibold text-lg mr-2">
            Title:
          </h1>
          <input
            id="title"
            name="title"
            className="w-full appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Title"
            onChange={handleChange}
            value={formData.title}
            required
          />
        </div>
        <div className="py-2 flex items-center">
          <h1 htmlFor="s_number" className="font-semibold text-lg mr-2">
            Serial Number:
          </h1>
          <input
            id="s_number"
            name="s_number"
            className="w-full appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="serial Number"
            onChange={handleChange}
            value={formData.s_number}
            required
          />
        </div>
        <div className="py-2 flex items-center">
          <h1 htmlFor="description" className="font-semibold text-lg mr-2">
            Description:
          </h1>
          <input
            id="description"
            name="description"
            className="w-full appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
            onChange={handleChange}
            value={formData.description}
            required
          />
        </div>
        <div className="pb-2 ">
          <div className="flex items-center">
            <h1 htmlFor="image" className="font-semibold text-lg mr-2">
              Add image:
            </h1>

            {/* Choosen file */}

            <span className="relative bg-white border border-gray-300 rounded-md px-4 py-2 inline-block">
              <span className="text-blue-500">Upload File</span>
              <input
                type="file"
                id="fileInput"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </span>
          </div>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[80%] max-h-[250px] rounded-xl my-2"
            />
          )}
        </div>
        <Link to={"/admin"}>
          <button
            onClick={handleAddBook}
            className="flex items-center bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold py-2 px-8 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add
            <FiPlus className="ml-1"/>
          </button>
        </Link>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
