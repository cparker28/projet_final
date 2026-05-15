import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: new URL("./index.html", import.meta.url).pathname,
        map: new URL("./map.html", import.meta.url).pathname,
        info: new URL("./info.html", import.meta.url).pathname,
      },
    },
  },
});