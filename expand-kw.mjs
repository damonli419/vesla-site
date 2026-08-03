import fs from "fs";

const file = "src/data/products.ts";
let content = fs.readFileSync(file, "utf-8");

const newKeywords = {
  "heart-dropper-30ml": [
    "heart shaped glass dropper bottle",
    "valentine edition serum bottle wholesale",
    "unique cosmetic glass bottle shape",
    "limited edition skincare packaging",
    "gift ready glass dropper bottle",
    "heart silhouette perfume oil bottle",
    "custom shape glass dropper OEM",
    "Instagram worthy serum bottle design",
    "small batch unique glass bottle",
    "heart dropper bottle private label",
    "luxury gift packaging glass bottle",
    "beauty brand limited run packaging",
  ],
  "flat-square-dropper": [
    "flat square glass dropper bottle",
    "geometric shape serum bottle wholesale",
    "modern architectural glass packaging",
    "square glass bottle custom decoration",
    "matte finish square dropper OEM",
    "minimalist skincare bottle supplier",
    "flat side label area dropper bottle",
    "premium square glass serum container",
    "architectural beauty packaging bottle",
    "square dropper bottle low MOQ China",
    "custom Pantone color square glass",
  ],
  "square-serum-dropper": [
    "square glass serum bottle 100ml",
    "jumbo size dropper bottle wholesale",
    "body serum square glass packaging",
    "professional salon size serum bottle",
    "large capacity square dropper OEM",
    "clear square glass bottle bulk",
    "salon grade skincare glass packaging",
    "custom frosted square serum bottle",
    "square dropper with hot stamp logo",
    "gradient spray square glass bottle",
    "branded square serum bottle supplier",
  ],
  "frosted-blue-dropper-30ml": [
    "frosted blue glass dropper bottle OEM",
    "baked in color glass bottle factory",
    "permanent color frosting dropper bottle",
    "blue matte glass serum packaging",
    "scratch resistant colored glass bottle",
    "Instagram friendly blue serum bottle",
    "Gen Z skincare packaging glass",
    "vibrant colored glass dropper supplier",
    "custom color frosted glass manufacturer",
    "pantone matched blue glass bottle",
    "durable color glass dropper wholesale",
    "trending blue skincare bottle 2026",
  ],
  "flat-shoulder-dropper-30ml": [
    "flat shoulder dropper bottle clear glass",
    "classic clear dropper bottle wholesale",
    "label ready glass serum bottle",
    "entry level cosmetic glass packaging",
    "startup skincare brand dropper bottle",
    "clear glass dropper bottle stock mold",
    "minimal clean serum bottle design",
    "low cost glass dropper bottle OEM",
    "affordable custom glass serum packaging",
    "standard flat shoulder bottle bulk",
    "clear glass dropper gold collar option",
  ],
  "matte-black-serum-bottle": [
    "matte black spray coated glass bottle",
    "soft touch black glass serum packaging",
    "zero glare cosmetic photography bottle",
    "luxury black dropper bottle wholesale",
    "black glass vitamin C serum container",
    "premium dark glass skincare packaging",
    "elegant black matte bottle OEM China",
    "matte black dropper 5ml to 100ml",
    "custom silk screen black glass bottle",
    "upscale serum packaging glass black",
    "black bottle gold collar dropper set",
    "high end cosmetic glass manufacturer",
  ],
  "black-flat-shoulder-dropper": [
    "black flat shoulder round dropper OEM",
    "matte black dropper bottle 20ml 30ml",
    "flat shoulder dark glass serum bottle",
    "no reflection black glass packaging",
    "black dropper bottle gold collar set",
    "round shoulder matte black bottle factory",
    "custom logo black glass dropper",
    "professional skincare black bottle bulk",
    "clean label black flat shoulder bottle",
    "modern matte black serum glass supplier",
  ],
  "flat-shoulder-round-dropper-60ml": [
    "60ml clear glass dropper bottle wholesale",
    "body oil large dropper bottle OEM",
    "hair serum 60ml glass container",
    "jumbo clear flat shoulder dropper",
    "60ml cosmetic glass bottle factory",
    "large format serum packaging glass",
    "clear dropper bottle with gold collar",
    "bulk 60ml cosmetic glass dropper",
    "treatment oil bottle China supplier",
    "oversized clear glass serum dropper",
  ],
  "matte-black-brown-jar": [
    "matte black brown cream jar OEM",
    "soft touch matte glass jar wholesale",
    "velvet finish face cream container",
    "double wall glass cream jar factory",
    "fingerprint resistant cosmetic jar",
    "premium skincare jar matte coating",
    "custom color spray coated glass jar",
    "matte glass cream jar 30g 50g",
    "luxury face cream packaging glass jar",
    "thick wall matte finish jar supplier",
    "brown black matte cosmetic jar China",
    "private label matte glass cream jar",
  ],
  "frosted-round-jar-woodgrain": [
    "frosted round jar woodgrain lid OEM",
    "water transfer wood grain cream jar",
    "natural aesthetic cosmetic glass jar",
    "botanical skincare packaging supplier",
    "bamboo alternative lid glass jar",
    "eco friendly look cosmetic glass package",
    "warm natural cream jar bulk wholesale",
    "wood effect lid frosted glass jar",
    "green beauty packaging glass container",
    "natural skincare jar 5g to 100g",
    "rustic chic cosmetic glass packaging",
  ],
  "gradient-green-cosmetic-set": [
    "gradient green glass cosmetic set OEM",
    "color matched skincare packaging collection",
    "ombre green dropper jar set wholesale",
    "pantone matched green glass set",
    "bundled cosmetic glass packaging supplier",
    "regimen skincare set glass bottles",
    "gradient spray coat glass collection",
    "matching bottle jar set factory China",
    "full skincare line glass packaging",
    "4 piece cosmetic glass set OEM",
    "green gradient luxury skincare set",
  ],
  "gradient-green-pump-set": [
    "gradient green pump bottle set OEM",
    "lotion pump glass cosmetic set wholesale",
    "color coordinated pump jar skincare set",
    "modern dispensing glass bottle set",
    "matching pump jar cosmetic collection",
    "full regimen pump dispenser glass set",
    "skincare routine glass set packaging",
    "pump bottle jar gradient green factory",
    "coordinated cosmetic packaging China OEM",
    "pump dispenser green glass bottle set",
    "all in one skincare glass set supplier",
    "luxury pump jar cosmetic gift set",
  ],
};

let replaced = 0;
for (const [id, kw] of Object.entries(newKeywords)) {
  const regex = new RegExp(
    `(id: "${id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[\\s\\S]*?seoKeywords: )\\[[\\s\\S]*?\\]`,
    "m"
  );
  const replacement = `$1[${kw.map((k) => `"${k}"`).join(", ")}]`;
  const before = content;
  content = content.replace(regex, replacement);
  if (content !== before) {
    replaced++;
    console.log(`✅ ${id}: ${kw.length} keywords`);
  } else {
    console.log(`❌ ${id}: NOT FOUND`);
  }
}

fs.writeFileSync(file, content, "utf-8");
console.log(`\nTotal products updated: ${replaced}/12`);

// Verify no duplicates
const allKw = [];
for (const kw of Object.values(newKeywords)) {
  allKw.push(...kw);
}
const dupes = allKw.filter((k, i) => allKw.indexOf(k) !== i);
if (dupes.length > 0) {
  console.log(`⚠️ DUPLICATES: ${dupes.join(", ")}`);
} else {
  console.log("✅ ZERO keyword duplicates");
}
