import React from "react";



function BookCard({ book }) {

    function turnCateText(text, maxLength) {
        if(text.length <= maxLength) return text;

        return text.substr(0,maxLength);
    }

    const truncatedDescription = turnCateText(book.description, 150);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs mx-auto">
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
  );
}

export default BookCard;
