import fs from "fs";
import sharp from "sharp";

const logoUrl = "https://sc02.alicdn.com/kf/Hcc089be0a0ae44d9baa468f72fe095cfI.jpg";
const posterUrl = "https://sc02.alicdn.com/kf/A65f39345c3d842e4a580477a679d11c1G.png";

async function download(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return Buffer.from(await res.arrayBuffer());
}

// 1) Logo → 200px wide PNG (displayed ~56px, 2x for retina)
const logoBuf = await download(logoUrl);
await sharp(logoBuf).resize(200, null, { fit: "inside" }).png({ quality: 90, compressionLevel: 9 }).toFile("public/images/logo-small.png");
const logoSize = fs.statSync("public/images/logo-small.png").size;
console.log("logo-small.png:", (logoSize / 1024).toFixed(1), "KB");

// 2) Hero poster → 1600w JPEG q70 (displayed full-width, up to ~1600px)
const posterBuf = await download(posterUrl);
await sharp(posterBuf).resize(1600, null, { fit: "inside" }).jpeg({ quality: 70, mozjpeg: true }).toFile("public/images/hero-poster.jpg");
const posterSize = fs.statSync("public/images/hero-poster.jpg").size;
console.log("hero-poster.jpg:", (posterSize / 1024).toFixed(1), "KB");
