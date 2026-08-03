import fs from "fs";

let c = fs.readFileSync("src/data/content.ts", "utf-8");

const slugs = [
  "frosted-vs-clear-glass",
  "moq-explained-indie-beauty",
  "shipping-glass-bottles-international",
  "k-beauty-packaging-trends-2026",
];

for (const s of slugs) {
  const start = c.indexOf(`slug: "${s}"`);
  if (start < 0) { console.log("NOT FOUND: " + s); continue; }
  // Find the opening { of this blog post
  let open = c.lastIndexOf("{", start);
  // Find matching closing },
  let depth = 0;
  let close = -1;
  for (let i = open; i < c.length; i++) {
    if (c[i] === "{") depth++;
    if (c[i] === "}") depth--;
    if (depth === 0) { close = i; break; }
  }
  if (close < 0) { console.log("NO CLOSE: " + s); continue; }
  // Extend to include trailing comma and newline
  while (close < c.length && (c[close] === "}" || c[close] === "," || c[close] === " " || c[close] === "\n" || c[close] === "\r")) close++;
  c = c.slice(0, open) + c.slice(close);
  console.log("DELETED: " + s);
}

fs.writeFileSync("src/data/content.ts", c, "utf-8");
console.log((c.match(/slug: "/g) || []).length + " blog posts remaining");
