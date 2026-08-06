import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyPublicFiles(): Plugin {
  return {
    name: "copy-public-files",
    writeBundle() {
      const publicDir = path.resolve(__dirname, "public");
      const distDir = path.resolve(__dirname, "dist");
      const files = ["sitemap.xml", "robots.txt", "_redirects", "_headers", "llms.txt", "llms-full.txt", "logo.png", "products.xml", "content-manifest.json"];
      for (const f of files) {
        const src = path.join(publicDir, f);
        const dest = path.join(distDir, f);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      }

      // Copy all files in public/images/ (logo, poster, category images) to dist/images/
      const imgDir = path.join(publicDir, "images");
      if (fs.existsSync(imgDir)) {
        const destImg = path.join(distDir, "images");
        if (!fs.existsSync(destImg)) fs.mkdirSync(destImg, { recursive: true });
        for (const f of fs.readdirSync(imgDir)) {
          fs.copyFileSync(path.join(imgDir, f), path.join(destImg, f));
        }
      }

      // Inline the built CSS into index.html to eliminate render-blocking CSS.
      const htmlPath = path.join(distDir, "index.html");
      const assetsDir = path.join(distDir, "assets");
      if (fs.existsSync(htmlPath) && fs.existsSync(assetsDir)) {
        let html = fs.readFileSync(htmlPath, "utf-8");
        const cssFiles = fs.readdirSync(assetsDir).filter((f) => f.endsWith(".css"));
        for (const cssFile of cssFiles) {
          const css = fs.readFileSync(path.join(assetsDir, cssFile), "utf-8");
          const linkTag = new RegExp(
            `<link[^>]*href="/assets/${cssFile.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*/?>`,
            "g"
          );
          if (linkTag.test(html)) {
            html = html.replace(linkTag, `<style>${css}</style>`);
            // Also handle relative href (assets/xxx.css)
            const relTag = new RegExp(
              `<link[^>]*href="assets/${cssFile.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*/?>`,
              "g"
            );
            html = html.replace(relTag, "");
            console.log(`[copy-public-files] Inlined ${cssFile} into index.html`);
          }
        }
        fs.writeFileSync(htmlPath, html, "utf-8");
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyPublicFiles()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
