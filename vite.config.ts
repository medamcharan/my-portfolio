import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`, // Adjust path as needed
      },
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
