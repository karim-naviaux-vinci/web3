import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/Components",
      assets: "/src/assets",
      hooks: "/src/hooks",
    },
  },
});