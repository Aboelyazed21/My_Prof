import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/My_Prof/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});