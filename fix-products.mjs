import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.resolve(__dirname, "src/data/products.ts");
let content = fs.readFileSync(filePath, "utf-8");

// Fix: add missing comma after features ] before seoKeywords
content = content.replace(/\]\n\s+seoKeywords:/g, "],\n    seoKeywords:");

// Fix: remove double comma on seoTags lines
content = content.replace(/seoTags: \[([^\]]+)\],,/g, "seoTags: [$1],");

fs.writeFileSync(filePath, content, "utf-8");
console.log("✅ Fixed comma issues");
