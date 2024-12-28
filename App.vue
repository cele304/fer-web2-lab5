// App.vue
<template>
  <div id="app">
    <h1>Book Tracker</h1>
    <router-view></router-view> <!-- Routing: Display current route's component -->
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('App mounted!'); // 6. Lifecycle hook
  },
};
</script>

<style scoped> /* 5. Style scoped */ 
#app {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0 auto;
  padding: 20px;
  max-width: 800px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>