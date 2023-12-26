import {  useState } from "react";
import Collection from "../components/Collection";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import { useBookStore } from "../store/useBookStore";

function Home() {
  const books = useBookStore((state) => state.books);

  const [searchString, setSearchString] = useState("");

  const handleSearchChange = (searchValue) => {
    setSearchString(searchValue);
  };

  console.log(books);

  return (
    <div className=" p-4 md:w-[80%] md:m-auto">
      <NavBar />
      <div className="md:w-[60%] m-auto ">
        <h1 className="text-4xl font-bold text-center py-6 my-8 px-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent  md:text-4xl ">
          "Unlock your hero within every page. Welcome to our online book
          haven."
        </h1>
      </div>
      <Search onSearchChange={handleSearchChange} />

      <div>All collections will display here</div>

      <Collection books={books} searchString={searchString} />
    </div>
  );
}

export default Home;
