import fs from "fs";

const file = "src/data/products.ts";
let c = fs.readFileSync(file, "utf-8");

// Add seoSlug to interface
if (!c.includes("seoSlug")) {
  c = c.replace(
    'export interface Product {\n  id: string;',
    'export interface Product {\n  id: string;\n  seoSlug: string;'
  );
}

const slugs = {
  "heart-dropper-30ml": "heart-shaped-glass-dropper-bottle-manufacturer",
  "flat-square-dropper": "custom-flat-square-glass-dropper-bottle-supplier",
  "square-serum-dropper": "square-glass-serum-dropper-bottle-manufacturer-100ml",
  "frosted-blue-dropper-30ml": "frosted-blue-glass-dropper-bottle-manufacturer",
  "flat-shoulder-dropper-30ml": "flat-shoulder-glass-dropper-bottle-supplier",
  "matte-black-serum-bottle": "custom-matte-black-glass-serum-bottle-manufacturer",
  "black-flat-shoulder-dropper": "black-flat-shoulder-round-dropper-bottle-supplier",
  "flat-shoulder-round-dropper-60ml": "flat-shoulder-round-glass-dropper-bottle-manufacturer",
  "matte-black-brown-jar": "matte-black-brown-glass-cream-jar-manufacturer",
  "frosted-round-jar-woodgrain": "frosted-round-glass-cream-jar-woodgrain-lid-supplier",
  "brown-woodgrain-jar": "brown-woodgrain-water-transfer-cream-jar-manufacturer",
  "amber-serum-vial-dropper": "amber-glass-serum-vial-dropper-bottle-supplier",
  "gradient-green-cosmetic-set": "gradient-green-cosmetic-glass-set-manufacturer",
  "gradient-green-pump-set": "gradient-green-lotion-cream-glass-set-supplier",
};

let done = 0;
for (const [id, seoSlug] of Object.entries(slugs)) {
  // Insert seoSlug right after the id line
  const regex = new RegExp(`(id: "${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}",\\n)`, "m");
  if (regex.test(c)) {
    c = c.replace(regex, `$1    seoSlug: "${seoSlug}",\n`);
    done++;
  } else {
    console.log("NOT FOUND: " + id);
  }
}

fs.writeFileSync(file, c, "utf-8");
console.log(`✅ Added seoSlug to ${done}/14 products`);
