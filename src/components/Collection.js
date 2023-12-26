import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";

const Collection = ({ books, searchString }) => {
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    handleSearch(searchString);
  },[books,searchString] );

  const handleSearch = (searchString) => {
    if (!searchString) {
      setFilteredBooks(books);
      return;
    }

    const filtered = books.filter((book) => {
      const title = book.title && book.title.toLowerCase(); // Check if title exists
      return title && title.includes(searchString.toLowerCase());
    });
    setFilteredBooks(filtered);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {!filteredBooks.length ? (
        <p className="text-center text-gray-600 py-8">No Books Found</p>
      ) : (
        filteredBooks.map((book, index) => <BookCard key={index} book={book} />)
      )}
    </div>
  );
};

export default Collection;
