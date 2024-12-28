// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';        // 10. Pinia store

const app = createApp(App);
app.use(createPinia()); // Pinia store setup
app.use(router); // Routing setup
app.mount('#app');