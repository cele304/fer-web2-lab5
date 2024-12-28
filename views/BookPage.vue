// views/BookPage.vue
<template>
  <div>
    <h2>{{ book?.title || 'Loading...' }}</h2>  <!--1. Interpolation/one-way binding-->
    <p v-if="book">Author: {{ book.author }}</p>
  </div>
</template>

<script>
import { useBookStore } from '../store/bookStore';

export default {
  name: 'BookPage',
  props: ['id'], // 2. Two-way binding using properties
  computed: {    //4. Computed properties
    book() {
      const bookStore = useBookStore();
      return bookStore.books.find((b) => b.id === parseInt(this.id));
    },
  },
};
</script>