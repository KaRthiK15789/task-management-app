import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/task-management-app/", // Change this if deploying to GitHub Pages
  build: {
    outDir: "dist",
  },
});
