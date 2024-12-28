<template>
    <div>
      <h2>Lazy Component</h2>
      <p>This component is loaded lazily, only when needed.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LazyComponent',
    data() {
      return {
        message: 'Welcome to the lazy loaded component!',
      };
    },
  };
  </script>
  
  <style scoped>
  div {
    text-align: center;
    margin: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    color: #4caf50;
  }
  
  p {
    font-size: 16px;
    color: #555;
  }
  </style>
  