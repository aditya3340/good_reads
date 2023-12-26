import React from "react";
import { Link } from "react-router-dom";

function BookCard({ book }) {
  function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  }

  const truncatedDescription = truncateText(book.description, 150);

  return (
    <Link to={`/books/${book.id}`}>
      <div className="bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto bg-sky-300">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
        <p className="text-gray-600 mb-2">{truncatedDescription}</p>
        <p className="text-gray-500 text-sm mb-2">
          Serial Number: {book.number}
        </p>
      </div>
    </Link>
  );
}

export default BookCard;
