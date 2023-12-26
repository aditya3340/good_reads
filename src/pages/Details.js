import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useBookStore } from "../store/useBookStore";

const Details = () => {
  const { id } = useParams();

//   console.log(id);

  const book = useBookStore(
    useCallback((state) => state.books.find((b) => b.id === id), [id])
  );

   

  if(!book) {
    return (
        <div>No Book associated with Id: {id}</div>
    )
  }

  console.log(book);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto bg-sky-300">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
      <p className="text-gray-600 mb-2">{book.description}</p>
      <p className="text-gray-500 text-sm mb-2">Serial Number: {book.number}</p>
    </div>
  );
};

export default Details;
