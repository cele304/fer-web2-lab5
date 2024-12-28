// store/bookStore.js
import { defineStore } from 'pinia';

export const useBookStore = defineStore('bookStore', {          //10. Pinia store
  state: () => ({
    books: [
      { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
      { id: 2, title: '1984', author: 'George Orwell' },
    ],
  }),
  actions: {
    async addBook(book) {
      // 11. Mock asynchronous retrieval of data from the backend
      await new Promise((resolve) => setTimeout(resolve, 500));
      this.books.push({ id: Date.now(), ...book });
    },
  },
});