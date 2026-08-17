import fs from "fs";
import path from "path";
import sharp from "sharp";

const CONFIG = {
  productsDir: "public/images/products",
  factoryDir: "public/images/factory",
  categoriesDir: "public/images/categories",
  quality: 80,
  productSize: 800,
  factorySize: 1200,
};

// Ensure dirs
[CONFIG.productsDir, CONFIG.factoryDir, CONFIG.categoriesDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

async function download(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return Buffer.from(await res.arrayBuffer());
  } catch (e) {
    console.error(`Failed to download ${url}: ${e.message}`);
    return null;
  }
}

async function processImage(url, outPath, size) {
  if (fs.existsSync(outPath)) return true; // Skip already optimized
  const buf = await download(url);
  if (!buf) return false;
  
  await sharp(buf)
    .resize(size, size, { fit: "cover", position: "center" })
    .webp({ quality: CONFIG.quality })
    .toFile(outPath);
  return true;
}

// 1. Process Factory Images from Home.tsx
const factoryImages = [
  { slug: "production-line", url: "https://sc02.alicdn.com/kf/H3ed4c7e33e7444e0b8776874383d6c0d2.jpg" },
  { slug: "glass-inspection", url: "https://sc02.alicdn.com/kf/A3fa0a4dee6c14803924e1a1558cc248c1.png" },
  { slug: "printing-workshop", url: "https://sc02.alicdn.com/kf/H9dabc8c4179c432e99d09e729e5b4e00a.jpg" },
  { slug: "coating-workshop", url: "https://sc02.alicdn.com/kf/Abc9e1f5ec8f84484a9665349e9ac77eca.png" },
  { slug: "packaging-process", url: "https://sc02.alicdn.com/kf/H95b280256ba04004af162257b20eb19au.jpg" },
];

console.log("Optimizing factory images...");
for (const img of factoryImages) {
  const ok = await processImage(img.url, path.join(CONFIG.factoryDir, `${img.slug}.webp`), CONFIG.factorySize);
  if (ok) console.log(`  ✓ ${img.slug}`);
}

// 2. Process All Products from products.ts
// I will read products.ts and find all image/gallery URLs
const productsContent = fs.readFileSync("src/data/products.ts", "utf8");
const productUrlMatches = Array.from(productsContent.matchAll(/id:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g));
const galleryUrlMatches = Array.from(productsContent.matchAll(/id:\s*"([^"]+)"[\s\S]*?gallery:\s*\[([\s\S]*?)\]/g));

const productMap = new Map();
productUrlMatches.forEach(m => productMap.set(m[1], { main: m[2], gallery: [] }));
galleryUrlMatches.forEach(m => {
  const p = productMap.get(m[1]);
  if (p) {
    const urls = Array.from(m[2].matchAll(/"(https:\/\/[^"]+)"/g)).map(u => u[1]);
    p.gallery = urls;
  }
});

console.log(`Optimizing ${productMap.size} product sets...`);
for (const [id, data] of productMap.entries()) {
  const prodSubdir = path.join(CONFIG.productsDir, id);
  if (!fs.existsSync(prodSubdir)) fs.mkdirSync(prodSubdir, { recursive: true });

  // Main image
  await processImage(data.main, path.join(prodSubdir, "main.webp"), CONFIG.productSize);
  
  // Gallery
  for (let i = 0; i < data.gallery.length; i++) {
    await processImage(data.gallery[i], path.join(prodSubdir, `gallery-${i}.webp`), CONFIG.productSize);
  }
  console.log(`  ✓ ${id} (${1 + data.gallery.length} images)`);
}

// 3. Final Step: Script to Update Codebase Links
console.log("\nImages optimized. Next: Manually update src/data/products.ts and src/pages/Home.tsx references.");
