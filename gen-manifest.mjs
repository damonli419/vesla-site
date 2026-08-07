// Generates public/content-manifest.json from src/data/*.ts (single source of truth).
// Usage: node gen-manifest.mjs  (run from project root)
import esbuild from "esbuild";
import { writeFileSync, rmSync } from "node:fs";
import { createRequire } from "node:module";

const OUT = "node_modules/.cache-vesla";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
const ROOT = dirname(fileURLToPath(import.meta.url));

await esbuild.build({
  entryPoints: [join(ROOT, "src/data/products.ts"), join(ROOT, "src/data/content.ts")],
  bundle: true,
  format: "cjs",
  platform: "node",
  outdir: join(ROOT, OUT),
  write: true,
  logLevel: "error",
});

const require = createRequire(import.meta.url);
const { products } = require(join(ROOT, OUT, "products.js"));
const { blogPosts } = require(join(ROOT, OUT, "content.js"));

const manifest = {
  products: products.map((p) => ({
    id: p.id,
    seoSlug: p.seoSlug,
    name: p.name,
    capacity: p.capacity,
    description: p.description,
  })),
  blogs: blogPosts.map((b) => ({
    slug: b.slug,
    title: b.title.en,
    body: b.body.en,
  })),
};

writeFileSync(join(ROOT, "public/content-manifest.json"), JSON.stringify(manifest, null, 2));
rmSync(join(ROOT, OUT), { recursive: true, force: true });
console.log(`manifest written: ${manifest.products.length} products, ${manifest.blogs.length} blogs`);
