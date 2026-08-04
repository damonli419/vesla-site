// Generate a content manifest for AI crawler SSR fallback
import fs from "fs";

const productsSrc = fs.readFileSync("src/data/products.ts", "utf-8");
const contentSrc = fs.readFileSync("src/data/content.ts", "utf-8");
const siteCfgSrc = fs.readFileSync("src/config/site.ts", "utf-8");

// Extract company info
const email = "yitengglass3@gmail.com";
const phone = "+86 18165681131";
const address = "11th Floor, Building 5, Guangzhou, Guangdong, China";

// Parse product list
const productRegex = /\{\s*id: "([^"]+)"[\s\S]*?name: "([^"]+)"[\s\S]*?capacity: "([^"]+)"[\s\S]*?description: "([^"]+)"/g;
const products = [];
let pm;
while ((pm = productRegex.exec(productsSrc)) !== null) {
  products.push({ id: pm[1], name: pm[2], capacity: pm[3], desc: pm[4].substring(0, 200) });
}

// Parse blog list
const blogRegex = /slug: "([^"]+)"[\s\S]*?title: \{ en: "([^"]+)"[\s\S]*?excerpt: \{ en: "([^"]+)"[\s\S]*?body: \{ en: "([^"]+)"\}/g;
const blogs = [];
let bm;
while ((bm = blogRegex.exec(contentSrc)) !== null) {
  blogs.push({ slug: bm[1], title: bm[2], excerpt: bm[3], body: bm[4].substring(0, 600) });
}

// Parse FAQ
const faqRegex = /q: \{ en: "(How|Can|Do|Are|What|Why|Is|Where)[^"]*"[^}]*\},\s*a: \{ en: "([^"]*)"\}/g;
// Simpler approach: just use llms.txt content
const llmsContent = fs.readFileSync("public/llms.txt", "utf-8");

const manifest = {
  home: {
    title: "Vesla | Custom Cosmetic Glass Packaging Manufacturer for Indie Beauty Brands",
    description: email
      ? `Custom glass dropper bottles, cream jars, essential oil bottles & vials for indie beauty brands. Low MOQ 5,000 pcs, in-house decoration, free sample kit, DDP to EU & USA. ISO 9001 certified Guangzhou factory. Contact: ${email} / ${phone}. Address: ${address}.`
      : "",
    h1: "Custom Cosmetic Glass Packaging Manufacturer",
    body: "Vesla partners with indie and emerging beauty brands to design, decorate and deliver custom glass packaging — from a single sample to a million units. Dropper bottles, cream jars, glass vials and essential oil bottles. In-house decoration: frosting, spray coating, silk screen, hot stamping, electroplating, water transfer printing. ISO 9001 certified. Free sample kit. DDP to EU & USA.",
  },
  products: {
    title: "Products | Vesla Glass Packaging",
    description: `Browse ${products.length} cosmetic glass packaging products: dropper bottles, cream jars, essential oil bottles and glass vials. Low MOQ from 5,000 pcs. Custom decoration available. ${email}`,
    h1: "Cosmetic Glass Packaging Products",
    body: products.map((p) => `- ${p.name} (${p.capacity}): ${p.desc}`).join("\n"),
  },
  about: {
    title: "About Vesla | Cosmetic Glass Packaging Factory Guangzhou",
    description: "Vesla is a 280-person cosmetic glass packaging manufacturer in Guangzhou with 6 IS forming machines, ISO 9001 certified, serving beauty brands across 40+ countries.",
    h1: "About Vesla — Guangzhou Glass Packaging Factory",
    body: llmsContent.split("## Quick Reference")[0] + "\n\nContact: " + email + " | WhatsApp: " + phone,
  },
  blog: {
    title: "Blog | Vesla Glass Packaging Resources",
    description: `Packaging guides, material comparisons and industry insights — ${blogs.length} articles for indie beauty brand owners.`,
    h1: "Glass Packaging Blog",
    body: blogs.map((b) => `- ${b.title}: ${b.excerpt}`).join("\n"),
  },
  blogs_by_slug: {},
};

for (const b of blogs) {
  manifest.blogs_by_slug[b.slug] = { title: b.title, body: b.body };
}

fs.writeFileSync("public/content-manifest.json", JSON.stringify(manifest, null, 2), "utf-8");
console.log(`✅ Manifest: ${products.length} products, ${blogs.length} blogs`);
