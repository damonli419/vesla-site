import fs from "fs";
import sharp from "sharp";

// Cream Jar product images (currently hotlinked from Alibaba CDN, full-res, no compression)
// PageSpeed flagged /cream-jars: "serve images in next-gen formats" — save up to 184 KiB.
const jarImages = [
  { id: "matte-black-brown-jar", url: "https://sc02.alicdn.com/kf/H26ea55fdff4f4a46a7edd10aa62b12a53.jpg" },
  { id: "frosted-woodgrain-jar", url: "https://sc02.alicdn.com/kf/H0f609b9793e24fcc9f75241a12481e575.jpg" },
  { id: "brown-woodgrain-transfer-jar", url: "https://sc02.alicdn.com/kf/H480cdc7a2da44b40a0e35a93e7fc988cV.jpg" },
];

async function download(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status + " for " + url);
  return Buffer.from(await res.arrayBuffer());
}

fs.mkdirSync("public/images/products", { recursive: true });

let totalBefore = 0;
let totalAfter = 0;

for (const { id, url } of jarImages) {
  const buf = await download(url);
  totalBefore += buf.length;
  const outPath = `public/images/products/${id}.webp`;
  // Cards render at aspect-square, max ~500px on screen -> 800px covers 2x retina.
  await sharp(buf).resize(800, 800, { fit: "cover" }).webp({ quality: 78 }).toFile(outPath);
  const after = fs.statSync(outPath).size;
  totalAfter += after;
  console.log(`${id}: ${(buf.length / 1024).toFixed(1)}KB -> ${(after / 1024).toFixed(1)}KB (/images/products/${id}.webp)`);
}

console.log(`\nTotal: ${(totalBefore / 1024).toFixed(1)}KB -> ${(totalAfter / 1024).toFixed(1)}KB (saved ${((totalBefore - totalAfter) / 1024).toFixed(1)}KB)`);
