import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: "/index.html",
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
