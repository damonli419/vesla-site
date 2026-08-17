import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = "C:/Users/OlddogLi/.accio/accounts/7087377344/agents/DID-D464A3-69D464A3U1778577-4042-C5CB5E/project/vesla-site";
const productsFile = path.join(ROOT, "src/data/products.ts");
const contentFile = path.join(ROOT, "src/data/content.ts");
const homeFile = path.join(ROOT, "src/pages/Home.tsx");
const publicDir = path.join(ROOT, "public/images/products");

// 1. Read the raw source URLs (revert to original to fetch them again correctly)
// I will extract them from an older commit or reconstruct them.
// Looking back at the history, I have a list of most URLs.

async function download(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return Buffer.from(await res.arrayBuffer());
  } catch (e) {
    return null;
  }
}

// Map of product ID to its original Alibaba URL
const originalUrls = {
  "heart-dropper-30ml": "https://sc02.alicdn.com/kf/H9480a26114b449b4948584468ac96fd4s.jpg",
  "flat-square-dropper": "https://sc02.alicdn.com/kf/Hea7f2dc0d06b4c9b98aa8f4ef32ceb1bK.jpg",
  "square-serum-dropper": "https://sc02.alicdn.com/kf/Hce1d7d3a3a524d28930433f17cc3f485d.jpg",
  "frosted-blue-dropper-30ml": "https://sc02.alicdn.com/kf/H11359603164444ee98ffc30910a22355w.jpg",
  "flat-shoulder-dropper-30ml": "https://sc02.alicdn.com/kf/Hf8141c781bab4805ad28c6ac4bc99918H.jpg",
  "matte-black-serum-bottle": "https://sc02.alicdn.com/kf/Hd73aba00aa2d412fb9d20f842529adc5d.jpg",
  "black-flat-shoulder-dropper": "https://sc02.alicdn.com/kf/H7831cce187174bfea5aab0d30287561e5.jpg",
  "flat-shoulder-round-dropper-60ml": "https://sc02.alicdn.com/kf/Hd61654b507dd4bb7b7d51edc1a830c1cy.jpg",
  "matte-black-brown-jar": "https://sc02.alicdn.com/kf/H26ea55fdff4f4a46a7edd10aa62b12a53.jpg",
  "frosted-round-jar-woodgrain": "https://sc02.alicdn.com/kf/H0f609b9793e24fcc9f75241a12481e575.jpg",
  "brown-woodgrain-jar": "https://sc02.alicdn.com/kf/H480cdc7a2da44b40a0e35a93e7fc988cV.jpg",
  "amber-serum-vial-dropper": "https://sc02.alicdn.com/kf/H231a0895f6c347b6a26f12d523d9ac76q.jpg",
  "gradient-green-cosmetic-set": "https://sc02.alicdn.com/kf/Hba8e5303cb1d4ac9afaf69ef5ec30362e.jpg",
  "gradient-green-pump-set": "https://sc02.alicdn.com/kf/H580bd8b39ed044d28b04d1cd8238eacfC.jpg",
  "gradient-red-cosmetic-set": "https://sc02.alicdn.com/kf/H81b7e5b0bfbb42989d73eaf28d9106cb7.jpg",
  "small-round-dropper-10ml-15ml": "https://sc02.alicdn.com/kf/H7992e5d9f9c64887aba3dc4b4db434fa4.jpg",
  "stone-texture-white-cosmetic-set": "https://sc02.alicdn.com/kf/H13a0c4c52f64454fa4da3904e0668a58A.jpg",
  "gold-pump-black-cosmetic-set": "https://sc02.alicdn.com/kf/He40bf9490b9242f19c8612d4cbac2026I.jpg",
  "waistline-textured-glass-set": "https://sc04.alicdn.com/kf/A70de88116f054a6f908cdd4b62f1ba6e0.jpg",
  "classic-glass-dropper-bottle": "https://sc04.alicdn.com/kf/A8c40c1bd70844b9892be32649ef7035bs.jpg",
};

console.log("Restructuring and fixing product images...");

for (const [id, url] of Object.entries(originalUrls)) {
  const prodSubdir = path.join(publicDir, id);
  if (!fs.existsSync(prodSubdir)) fs.mkdirSync(prodSubdir, { recursive: true });
  
  const dest = path.join(prodSubdir, "main.webp");
  
  const buf = await download(url);
  if (buf) {
    await sharp(buf).resize(800, 800, { fit: "cover" }).webp({ quality: 80 }).toFile(dest);
    console.log(`  ✓ Fixed ${id} -> /images/products/${id}/main.webp`);
  } else {
    console.error(`  ✗ Failed to download ${id}`);
  }
}

console.log("\nStructure fixed. Next: Double check src/data/products.ts links.");
