import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyPublicFiles(): Plugin {
  return {
    name: "copy-public-files",
    writeBundle() {
      const publicDir = path.resolve(__dirname, "public");
      const distDir = path.resolve(__dirname, "dist");
      const files = ["sitemap.xml", "robots.txt", "_redirects", "_headers", "llms.txt", "llms-full.txt", "logo.png", "products.xml"];
      for (const f of files) {
        const src = path.join(publicDir, f);
        const dest = path.join(distDir, f);
        if (fs.existsSync(src)) fs.copyFileSync(src, dest);
      }
      // Copy all images including WebP variants
      const imgDir = path.join(publicDir, "images");
      if (fs.existsSync(imgDir)) {
        const destImg = path.join(distDir, "images");
        if (!fs.existsSync(destImg)) fs.mkdirSync(destImg, { recursive: true });
        for (const f of fs.readdirSync(imgDir)) {
          fs.copyFileSync(path.join(imgDir, f), path.join(destImg, f));
        }
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile(), copyPublicFiles()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
