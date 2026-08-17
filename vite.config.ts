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

      // Recursively copy all files in public/images/ (logo, poster, category, product images) to dist/images/
      function copyDirRecursive(src: string, dest: string) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
          const srcPath = path.join(src, entry.name);
          const destPath = path.join(dest, entry.name);
          if (entry.isDirectory()) {
            copyDirRecursive(srcPath, destPath);
          } else {
            fs.copyFileSync(srcPath, destPath);
          }
        }
      }
      const imgDir = path.join(publicDir, "images");
      if (fs.existsSync(imgDir)) {
        copyDirRecursive(imgDir, path.join(distDir, "images"));
      }

      // Inline the built CSS + preload the main JS to shorten the critical chain.
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
            const relTag = new RegExp(
              `<link[^>]*href="assets/${cssFile.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*/?>`,
              "g"
            );
            html = html.replace(relTag, "");
            console.log(`[copy-public-files] Inlined ${cssFile} into index.html`);
          }
        }
        // Preload the main entry JS with high fetchpriority (shortens critical chain)
        const jsFiles = fs
          .readdirSync(assetsDir)
          .filter((f) => /^index-[A-Za-z0-9_-]+\.js$/.test(f));
        for (const jsFile of jsFiles) {
          const preloadTag = `<link rel="preload" as="script" href="/assets/${jsFile}" fetchpriority="high" />`;
          if (!html.includes(preloadTag)) {
            html = html.replace("</head>", `    ${preloadTag}\n  </head>`);
            console.log(`[copy-public-files] Preloaded ${jsFile}`);
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
