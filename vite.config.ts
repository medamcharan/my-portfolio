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
      overlay: false, // Disable error overlay during development
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Simplified path alias for `/src`
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Group node_modules into a vendor chunk
          }
        },
      },
    },
    sourcemap: true, // Generate source maps for production
    chunkSizeWarningLimit: 1000, // Increase limit to 1MB
  },
  define: {
    'process.env': {}, // Enable environment variables
  },
});
