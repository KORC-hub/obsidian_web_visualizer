import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/obsidian_web_visualizer/",
  plugins: [tailwindcss(), preact()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react/jsx-runtime": "preact/compat/jsx-runtime",
      "react/jsx-dev-runtime": "preact/compat/jsx-dev-runtime",
      "react-dom": "preact/compat",
      "react-dom/client": "preact/compat/client",
    },
  },
});
