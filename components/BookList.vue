// components/BookList.vue


<template>
  <div>
    <h3>Book List</h3>
    <ul>
      <li v-for="book in books" :key="book.id">
        <router-link :to="`/book/${book.id}`">{{ book.title }}</router-link>
      </li>
    </ul>
    <form @submit.prevent="submitForm">
      <input v-model="title" placeholder="Book Title" /> <!--2. Two-way binding -->
      <input v-model="author" placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
    <button @click="loadLazyComponent">Load Lazy Component</button>
    <LazyComponent v-if="showLazyComponent" />
  </div>
</template>



<script>
import { defineAsyncComponent } from 'vue';

// 11. LazyComponent definition for asynchronous loading
const LazyComponent = defineAsyncComponent(() => import('./LazyComponent.vue'));

export default {
  name: 'BookList',
  props: ['books'],    // 8. Stateless component using properties
  emits: ['add-book'], // 9. Component that emits an event
  data() {             // 8. Component with state
    return {
      title: '',
      author: '',
      showLazyComponent: false, // LazyComponent display control
    };
  },
  methods: {                                //3. Methods
    submitForm() {
      if (this.title && this.author) {
        this.$emit('add-book', { title: this.title, author: this.author });  // 9. Component that emits an event
        this.title = '';
        this.author = '';
      }
    },
    loadLazyComponent() {
      this.showLazyComponent = true;
    },
  },
  components: {
    LazyComponent,
  },
};
</script>

<style scoped>              /*5. Style scoped*/
button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>

