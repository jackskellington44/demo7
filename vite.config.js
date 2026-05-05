import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/demo7/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        main: resolve(__dirname, "main.html"),
      },
    },
  },
});