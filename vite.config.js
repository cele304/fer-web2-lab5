import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: parseInt(process.env.PORT) || 5173, // Koristi port iz varijable okruženja ili fallback na 5173
    host: true, // Omogućuje aplikaciji da sluša na svim mrežnim sučeljima
  },
});
