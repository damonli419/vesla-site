import fs from "fs";

// 1. Update Home.tsx factory images
let homeContent = fs.readFileSync("src/pages/Home.tsx", "utf8");
const factoryMap = {
  "https://sc02.alicdn.com/kf/H3ed4c7e33e7444e0b8776874383d6c0d2.jpg": "/images/factory/production-line.webp",
  "https://sc02.alicdn.com/kf/A3fa0a4dee6c14803924e1a1558cc248c1.png": "/images/factory/glass-inspection.webp",
  "https://sc02.alicdn.com/kf/H9dabc8c4179c432e99d09e729e5b4e00a.jpg": "/images/factory/printing-workshop.webp",
  "https://sc02.alicdn.com/kf/Abc9e1f5ec8f84484a9665349e9ac77eca.png": "/images/factory/coating-workshop.webp",
  "https://sc02.alicdn.com/kf/H95b280256ba04004af162257b20eb19au.jpg": "/images/factory/packaging-process.webp"
};

for (const [oldUrl, newUrl] of Object.entries(factoryMap)) {
  homeContent = homeContent.replaceAll(oldUrl, newUrl);
}
fs.writeFileSync("src/pages/Home.tsx", homeContent);
console.log("Updated Home.tsx factory links.");

// 2. Update products.ts (Main Image and Gallery)
let productsContent = fs.readFileSync("src/data/products.ts", "utf8");

// Use regex to find each product block and update its image/gallery
const productIds = Array.from(productsContent.matchAll(/id:\s*"([^"]+)"/g)).map(m => m[1]);

for (const id of productIds) {
  // Replace main image
  const mainImgRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?image:\\s*)"https:\\/\\/[^"]+"`, "g");
  productsContent = productsContent.replace(mainImgRegex, `$1"/images/products/${id}/main.webp"`);

  // Replace gallery URLs
  const galleryRegex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?gallery:\\s*\\[)([\\s\\S]*?)(\\])`, "g");
  productsContent = productsContent.replace(galleryRegex, (match, prefix, content, suffix) => {
    const urls = Array.from(content.matchAll(/"(https:\/\/[^"]+)"/g));
    const newUrlsContent = urls.map((u, i) => `"/images/products/${id}/gallery-${i}.webp"`).join(",\n      ");
    return `${prefix}\n      ${newUrlsContent}\n    ${suffix}`;
  });
}

fs.writeFileSync("src/data/products.ts", productsContent);
console.log("Updated products.ts image and gallery links.");
