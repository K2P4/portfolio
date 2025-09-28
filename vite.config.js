/** @format */

import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@pages": path.resolve(__dirname, "./src/Page"),
      "@components": path.resolve(__dirname, "./src/Components"),
      "@pages": path.resolve(__dirname, "./src/Page"),
      "@layout": path.resolve(__dirname, "./src/layout"),
    },
  },
  build: {
    minify: "esbuild",
    target: "esnext",
    cssCodeSplit: true,
    sourcemap: false,
  },
});
