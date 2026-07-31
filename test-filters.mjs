import fs from "fs";

const raw = fs.readFileSync("src/data/products.ts", "utf-8");

// Extract individual product object strings
const productsMatch = raw.match(/export const products: Product\[\] = \[([\s\S]*?)\];/);
if (!productsMatch) { console.log("Could not find products array"); process.exit(1); }

const productsBlock = productsMatch[1];

// Parse each product manually
const products = [];
const regex = /\{\s*id: "([^"]+)",[\s\S]*?capacity: "([^"]+)",[\s\S]*?capacityGroup: "([^"]+)",/g;
let m;
while ((m = regex.exec(productsBlock)) !== null) {
  products.push({ id: m[1], capacity: m[2], capacityGroup: m[3] });
}

// Filter logic (same as Products.tsx)
function parseMl(cap) {
  const nums = [];
  const re = /(\d+(?:\.\d+)?)/g;
  let m;
  while ((m = re.exec(cap)) !== null) nums.push(parseFloat(m[1]));
  return nums;
}

function check(cap, capGrp, filter) {
  if (filter === "set") return capGrp === "set";
  const vals = parseMl(cap);
  return vals.some(v => {
    if (filter === "mini") return v <= 15;
    if (filter === "standard") return v >= 20 && v <= 60;
    if (filter === "large") return v >= 60;
    return false;
  });
}

// Test each product against each filter
console.log("=== CAPACITY FILTER TEST ===");
for (const p of products) {
  const matches = [];
  for (const f of ["mini", "standard", "large", "set"]) {
    if (check(p.capacity, p.capacityGroup, f)) matches.push(f);
  }
  const status = matches.join("/");
  const issues = [];
  
  // Check for issues
  const vals = parseMl(p.capacity);
  if (vals.some(v => v <= 15) && !matches.includes("mini")) issues.push("SHOULD match mini but doesn't");
  if (vals.some(v => v >= 20 && v <= 60) && !matches.includes("standard")) issues.push("SHOULD match standard but doesn't");
  if (vals.some(v => v >= 60) && !matches.includes("large")) issues.push("SHOULD match large but doesn't");
  if (p.capacityGroup === "set" && !matches.includes("set")) issues.push("SHOULD match set but doesn't");
  
  const flag = issues.length > 0 ? " ❌ " + issues.join("; ") : " ✅";
  console.log(`${p.id}: ${p.capacity} [group:${p.capacityGroup}] → ${status}${flag}`);
}
