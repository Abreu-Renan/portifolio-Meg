import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";

const isGitHubPages = process.env["GITHUB_PAGES"] === "true";

export default defineConfig({
  base: isGitHubPages ? "./" : "/",
  build: {
    outDir: isGitHubPages ? "docs" : "dist",
    emptyOutDir: true,
  },
  plugins: [tailwindcss(), tanstackStart(), react()],
});
