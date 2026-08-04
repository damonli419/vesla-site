import fs from "fs";

const productsSrc = fs.readFileSync("src/data/products.ts", "utf-8");
const contentSrc = fs.readFileSync("src/data/content.ts", "utf-8");
const llms = fs.readFileSync("public/llms.txt", "utf-8");

// Products: id + name + capacity
const prodRegex = /id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?capacity:\s*"([^"]+)"/g;
const products = [];
let pm;
while ((pm = prodRegex.exec(productsSrc))) {
  products.push({ id: pm[1], name: pm[2], capacity: pm[3] });
}

// Blogs: slug + title + excerpt
const blogRegex = /slug:\s*"([^"]+)"[\s\S]*?title:\s*\{\s*en:\s*"([^"]+)"/g;
const blogs = [];
let bm;
while ((bm = blogRegex.exec(contentSrc))) {
  blogs.push({ slug: bm[1], title: bm[2] });
}

const manifest = JSON.stringify({ products, blogs }, null, 2);
fs.writeFileSync("public/content-manifest.json", manifest, "utf-8");
console.log(products.length + " products, " + blogs.length + " blogs");
