import fs from "fs";

const file = "src/data/content.ts";
let c = fs.readFileSync(file, "utf-8");

// The two blog posts with broken body (real newlines inside string literals).
// Strategy: replace the whole broken body section between `body: { en: "` and `", kr: "本文"` 
// with a clean single-line escaped version.

const fixes = [
  {
    slug: "how-indie-perfumers-produce-glass-bottles",
    body:
      "A thread on r/fragrance titled 'How on earth do new brands produce bottles?' has hundreds of comments from aspiring perfumers stuck at the same wall: fragrance manufacturers quote 10,000-unit MOQs for custom glass molds, but a new brand needs 200-500 units to test the market. One Dubai-based manufacturer even commented on the thread offering 10K minimum for new molds — technically honest, practically useless for a startup.\\n\\nThe reality is that glass perfume bottles sit on a spectrum of options, and the best path depends on your launch stage. At the very start (0-500 units): use stock vials and roll-on bottles from packaging distributors. A 5ml roll-on amber vial costs $0.15-0.30 at 200 units. Your first customers care about the juice, not the bottle. This is how most successful indie perfumers actually launch.\\n\\nAt the next stage (500-5,000 units): you can order stock glass dropper bottles or euro-style perfume vials with custom labels. Our amber vial droppers start at 5,000 pcs for $0.35-0.55 per unit with silk-screen branding. You get a professional-looking product without paying for custom tooling. The label does the branding work; the glass provides the premium weight and UV protection that plastic can't match.\\n\\nCustom molds become viable at 10,000+ units: tooling runs $3,000-15,000 depending on complexity, plus a per-unit premium of 15-25% over stock molds. At this volume, brands typically have confirmed wholesale orders or a retailer distribution agreement. The best advice echoed by every veteran perfumer: don't commission a custom mold until a distributor has signed a purchase order.",
  },
  {
    slug: "glass-vs-plastic-sunscreen-packaging",
    body:
      "A thread on r/EuroSkincare titled 'Looking for sunscreen in non-plastic packaging' captures a growing consumer demand that most cosmetic brands are ignoring. The comments are full of people frustrated that every sunscreen comes in a plastic tube or bottle. But here's why glass sunscreen packaging is genuinely difficult — and why it's a real opportunity for brands who get it right.\\n\\nThe first problem is chemistry, not packaging. Chemical UV filters (avobenzone, octocrylene, oxybenzone) are notoriously sensitive to UV radiation themselves. Avobenzone degrades by up to 36% after just one hour of direct sunlight — even in an opaque container, because heat accelerates the degradation. Amber glass provides excellent UV protection (blocks ~98% of UV-A and UV-B), but sunscreen formulas stored in amber glass still need antioxidants and photostabilizers in the formulation itself. The glass can't do all the work.\\n\\nThe second problem is formulation compatibility. Many sunscreen actives are oil-soluble and slightly acidic. Type III soda-lime glass is generally compatible, but mineral sunscreens containing zinc oxide or titanium dioxide can settle and clump in a narrow-neck glass bottle, requiring constant shaking. This is why most mineral sunscreens use wide-mouth jars or airless pumps. If you want glass packaging for a mineral sunscreen, a wide-mouth glass jar with a spatula is the practical answer.\\n\\nThe third problem is real but solvable: glass is heavy. A 50ml glass sunscreen bottle weighs 90-120g versus 20g for plastic. Shipping costs rise 15-20% for a case of 12. For premium brands selling at $45+, the weight signals quality. For drugstore brands at $12, glass breaks the margin.\\n\\nWhere glass genuinely wins: UV protection, shelf perception, and refill potential. A mineral sunscreen in a 50g amber glass jar with a wooden lid photographs beautifully, reads as 'clean beauty,' and supports a refill pouch program. That's a positioning play, not a cost play — and in the premium sun-care niche, positioning is everything.",
  },
];

for (const fix of fixes) {
  // Find the blog block start
  const start = c.indexOf(`slug: "${fix.slug}"`);
  if (start < 0) { console.log("NOT FOUND: " + fix.slug); continue; }
  const bodyStart = c.indexOf("body: { en: ", start);
  if (bodyStart < 0) { console.log("NO BODY: " + fix.slug); continue; }
  // Find the end of the broken body: it's `", kr: "本文"` 
  const bodyEnd = c.indexOf(`", kr: "本文"`, bodyStart);
  if (bodyEnd < 0) { console.log("NO BODY END: " + fix.slug); continue; }
  const replacement = `body: { en: "${fix.body}"`;
  c = c.slice(0, bodyStart) + replacement + c.slice(bodyEnd);
  console.log("FIXED: " + fix.slug);
}

fs.writeFileSync(file, c, "utf-8");
console.log("Done");
