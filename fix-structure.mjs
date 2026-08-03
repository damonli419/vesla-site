import fs from "fs";

const file = "src/data/content.ts";
let content = fs.readFileSync(file, "utf-8");

// The problem: 3 blog posts were injected into the faqItems array.
// Fix: extract them and move to blogPosts, restore FAQ array.

// Find the blog posts inside FAQ array (they have 'slug:' instead of 'q:')
// Split into lines for easier manipulation
const lines = content.split("\n");

// Find where faqItems starts and where the blog posts begin
let faqStart = -1;
let blogInFaqStart = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes("export const faqItems = [")) faqStart = i;
  if (faqStart > 0 && lines[i].trim().startsWith("slug:")) {
    blogInFaqStart = i;
    break;
  }
}

if (blogInFaqStart > 0) {
  // Extract the 3 blog post blocks (from blogInFaqStart-1 to end of FAQ array)
  const faqArrayEnd = lines.findIndex((l, i) => i > blogInFaqStart && l.trim() === "];");
  
  // Extract blog post blocks
  const blogBlocks = lines.slice(blogInFaqStart - 1, faqArrayEnd).join("\n");
  
  // Restore FAQ array ending properly
  lines.splice(blogInFaqStart - 1, faqArrayEnd - blogInFaqStart + 2, "  },\n];");
  
  // Find blogPosts array end and insert blogs there
  const blogPostsEnd = lines.findIndex((l, i) => i > faqStart && l.trim() === "];" && lines[i-1].includes("keywords"));
  if (blogPostsEnd > 0) {
    lines.splice(blogPostsEnd, 0, blogBlocks);
  }
  
  content = lines.join("\n");
  fs.writeFileSync(file, content, "utf-8");
  
  const blogCount = (content.match(/slug: "/g) || []).length;
  const faqCount = (content.match(/q: \{/g) || []).length;
  console.log(`✅ Fixed structure`);
  console.log(`Blog posts: ${blogCount}`);
  console.log(`FAQ items: ${faqCount}`);
} else {
  console.log("No blog posts found in FAQ array — structure is clean");
  const blogCount = (content.match(/slug: "/g) || []).length;
  const faqCount = (content.match(/q: \{/g) || []).length;
  console.log(`Blog posts: ${blogCount}`);
  console.log(`FAQ items: ${faqCount}`);
}
