import { create } from "zustand";

export const useBookStore = create((set) => ({
  books: [],
  addBook: (title, number, description, image) =>
    set((state) => ({
      books: [
        ...state.books,
        {
          title: title,
          number: number,
          description: description,
          image: image, 
        },
      ],
    })),
}));
