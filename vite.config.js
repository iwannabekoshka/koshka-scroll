// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/scroll-animate.ts"),
      name: "KoshkaScroll",
      // the proper extensions will be added
      fileName: "koshka-scroll",
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "koshka-scroll.css";
          return assetInfo.name;
        },
      },
    },
  },
});
