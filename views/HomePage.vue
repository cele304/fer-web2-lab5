// views/HomePage.vue
<template>
  <div>
    <h2>Welcome to Book Tracker</h2>
    <BookList :books="books" @add-book="addBook" /> <!-- 9. Emits event to add book -->
  </div>
</template>

<script>
import { useBookStore } from '../store/bookStore';
import BookList from '../components/BookList.vue';

export default {
  name: 'HomePage',
  components: { BookList }, // 8. Component with state
  setup() {
    const bookStore = useBookStore();
    const books = bookStore.books;

    const addBook = (book) => {
      bookStore.addBook(book);
    };

    return { books, addBook };
  },
};
</script>