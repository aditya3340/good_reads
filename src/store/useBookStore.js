import { create } from "zustand";

export const useBookStore = create((set) => ({
  books: [
    {
      id: 1,
      title: "Book 1",
      number: 1212,
      description: "Description of Book 1",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Book 2",
      number: 2352,
      description: "Description of Book 2",
      image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  addBook: (title, number, description, image) =>
    set((state) => ({
      books: [
        ...state.books,
        {
          id: Math.random() * 100 + '',
          title: title,
          number: number,
          description: description,
          image: image,
        },
      ],
    })),

  // addBook: (book) =>
  //   set((state) => ({
  //     books: [
  //       {
  //         id: Math.random() * 100 + "",
  //         title: book.title,
  //         number: book.number,
  //         description: book.description,
  //         image: book.image,
  //       },
  //       ...state.books,
  //     ],
  //   })),
}));
