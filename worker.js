// Worker — Pages Functions entry.
// - AI crawler SSR: serves readable HTML to GPTBot/ClaudeBot/Googlebot/etc.
// - Real 404 for missing static assets (no HTML-fallback broken images).
// - non-www → www canonical redirect.
// robots.txt / sitemap.xml are served from public/ (static, complete).

function isAICrawler(ua) {
  if (!ua) return false;
  const bots = [
    "gptbot", "chatgpt-user", "claudebot", "google-extended", "anthropic-ai",
    "ccbot", "cohere-ai", "perplexitybot", "meta-externalagent", "googlebot",
    "facebookexternalhit", "facebot", "twitterbot", "linkedinbot", "slackbot",
    "whatsapp", "discordbot", "telegrambot", "pinterest"
  ];
  const lowered = ua.toLowerCase();
  return bots.some((b) => lowered.includes(b));
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function absoluteAsset(path) {
  if (!path) return undefined;
  return path.startsWith("http") ? path : `https://www.veslapack.com${path}`;
}

function productSeoHead(product) {
  const productUrl = `https://www.veslapack.com/products/${product.seoSlug}`;
  const title = product.seoTitle || `${product.specTitle || product.name} | Custom Cosmetic Glass Packaging — Vesla`;
  const description = (product.description || "").substring(0, 155);
  const image = absoluteAsset(product.image);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [image, ...(product.gallery || []).map(absoluteAsset)].filter(Boolean),
    description: product.description,
    brand: { "@type": "Brand", name: product.brandName || "Vesla" },
    manufacturer: { "@type": "Organization", name: "Vesla Co., Ltd." },
    mpn: product.mpn || `VSL-${product.id.toUpperCase()}`,
    sku: product.sku || `VSL-${product.id.toUpperCase()}-5K`,
    category: product.category,
    material: product.material,
    keywords: (product.seoKeywords || []).join(", "),
    additionalProperty: [
      { "@type": "PropertyValue", name: "Capacity", value: product.capacity },
      { "@type": "PropertyValue", name: "MOQ", value: product.moq },
      { "@type": "PropertyValue", name: "Lead time", value: product.leadTime },
      { "@type": "PropertyValue", name: "Customization", value: product.decoration },
    ],
    offers: {
      "@type": "Offer",
      url: productUrl,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "Vesla Co., Ltd." },
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.veslapack.com/" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://www.veslapack.com/products" },
      { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
    ],
  };
  const faqSchema = product.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: product.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;
  const schemas = [productSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];
  const jsonLd = schemas.map((schema) => `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`).join("\\n");
  const head = `
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${escapeHtml(productUrl)}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:type" content="product">
<meta property="og:url" content="${escapeHtml(productUrl)}">
<meta property="og:image" content="${escapeHtml(image || "")}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="${escapeHtml(image || "")}">
${jsonLd}`;
  return { title, description, productUrl, head };
}

function injectProductSeo(html, product) {
  const seo = productSeoHead(product);
  const cleanHead = html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, "")
    .replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
  return cleanHead.replace(/<\/head>/i, `${seo.head}\n</head>`);
}

function injectNoindex(html) {
  if (/<meta\s+name=["']robots["'][^>]*>/i.test(html)) return html;
  return html.replace(/<\/head>/i, '<meta name="robots" content="noindex,follow">\n</head>');
}

function injectParameterizedSeo(html, { title, description, canonical }) {
  const cleanHead = html
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/<meta\s+name=["']robots["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, "")
    .replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "");
  const head = `
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<meta name="robots" content="noindex,follow">
<link rel="canonical" href="${escapeHtml(canonical)}">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${escapeHtml(canonical)}">`;
  return cleanHead.replace(/<\/head>/i, `${head}\n</head>`);
}

function serveSSR({ title, description, h1, body, url, image, ogType = "website", noindex = false, jsonLd }) {
  const ldScript = jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`
    : "";
  const canonical = url || "https://www.veslapack.com/";
  const safeTitle = escapeHtml(title || "Vesla");
  const safeDescription = escapeHtml(description || "");
  const safeUrl = escapeHtml(canonical);
  const safeImage = image ? `<meta property="og:image" content="${escapeHtml(image)}">` : "";
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${safeTitle}</title>
<meta name="description" content="${safeDescription}">
${noindex ? '<meta name="robots" content="noindex,follow">' : ''}
<link rel="canonical" href="${safeUrl}">
<meta property="og:title" content="${safeTitle}">
<meta property="og:description" content="${safeDescription}">
<meta property="og:type" content="${escapeHtml(ogType)}">
<meta property="og:url" content="${safeUrl}">
${safeImage}
<meta name="twitter:card" content="summary_large_image">
${ldScript}
</head>
<body>
<h1>${escapeHtml(h1 || title)}</h1>
<pre style="white-space:pre-wrap;font-family:sans-serif;max-width:800px;margin:20px auto;line-height:1.6;font-size:16px">${escapeHtml(body || "")}</pre>
<footer style="text-align:center;margin-top:40px;color:#888">
<p>Vesla Co., Ltd. — Custom Cosmetic Glass Packaging Manufacturer | Guangzhou, China</p>
<p>sale@veslapack.com | +86 19926004078 | ISO 9001 Certified</p>
</footer>
</body>
</html>`;
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store, no-cache, must-revalidate",
      ...(noindex ? { "X-Robots-Tag": "noindex, follow" } : {}),
      "Vary": "User-Agent",
    },
  });
}

const STATIC_PAGES = {
  "/": {
    title: "Vesla — China Glass Packaging Manufacturer | Cosmetic Bottle Supplier",
    description: "Cosmetic glass packaging manufacturer for beauty brands: dropper bottles, cream jars, vials and sets. OEM/ODM, MOQ 5,000 pcs, in-house decoration, DDP to EU/USA.",
    h1: "Vesla — Premium Glass Packaging Manufacturer for Beauty & Wellness Brands",
    body: `Vesla Co., Ltd. is a cosmetic glass packaging manufacturer in Guangzhou, China with 13+ years of experience and 500+ global customers.

Products: serum bottles (5-100ml), cream jars (15-120g), essential oil bottles, perfume bottles, roller bottles, sample vials, gradient cosmetic sets.
Capabilities: OEM/ODM, custom molds from 10,000 pcs, stock molds from 5,000 pcs, in-house decoration (frosting, spray coating, silk screen, hot stamping, electroplating, water transfer).
Production: 7-15 days on stock molds; 25-30 days custom molds. ISO 9001, FDA 21 CFR, EU 1935/2004, REACH & RoHS compliant.
Shipping: EXW, FOB or DDP to EU & USA. Free sample kit for new brands.

Key pages:
- Products: https://www.veslapack.com/products
- Serum bottles: https://www.veslapack.com/serum-bottles
- Factory: https://www.veslapack.com/about
- Process: https://www.veslapack.com/process
- Blog: https://www.veslapack.com/blog
- Contact: https://www.veslapack.com/contact

Contact: sale@veslapack.com | WhatsApp: +86 19926004078`,
  },
  "/cosmetic-packaging-supplier-comparison-2026": {
    title: "2026 Cosmetic Glass Packaging Supplier Comparison Matrix | China Manufacturers",
    description: "Compare China glass packaging manufacturers on MOQ, DDP logistics, and decoration. Data for indie vs large beauty brands.",
    h1: "China Glass Bottle Manufacturers Comparison Matrix 2026",
    body: `Evaluating cosmetic glass bottle manufacturers in China. Key data points:

1. MOQ (Custom): Vesla (5,000 pcs) vs Tier 1 (30,000+ pcs).
2. Logistics: Vesla provides DDP (Door-to-Door, Customs Paid) within 20-26 days to USA.
3. Decoration: In-house printing, coating, and frosting eliminates inter-factory delays.
4. Compliance: ISO 9001:2015, FDA 21 CFR, EU 1935/2004.

Target Audience: Indie beauty brands, emerging skincare lines, and aromatherapy startups looking for agile glass packaging partners.`,
  },
  "/certifications": {
    title: "Quality Certifications & Compliance | ISO 9001, FDA, EU — Vesla",
    description: "Verify Vesla's quality certifications including ISO 9001:2015, FDA 21 CFR compliance, EU 1935/2004 standards, and SGS audited factory details.",
    h1: "Vesla Quality Certifications",
    body: `Vesla Co., Ltd. maintains rigorous quality standards for global cosmetic brands.
- ISO 9001:2015 Quality Management System
- FDA 21 CFR 175.300 compliant glass & coatings
- EU 1935/2004 standard for food/cosmetic contact
- SGS & Bureau Veritas factory audits
- AQL 1.5/2.5/4.0 inspection standards

We provide safety data sheets (SDS) and technical data sheets (TDS) with every bulk shipment.`,
  },
  "/quality-control": {
    title: "Quality Control & Manufacturing Standards | ISO 9001, FDA — Vesla",
    description: "Learn about Vesla's rigorous quality control process for cosmetic glass manufacturing. From IS forming precision to AQL 1.5 inspection and DDP drop tests.",
    h1: "Glass Manufacturing Quality Standards",
    body: `Vesla integrates strict QC at every manufacturing station.
1. IS Forming: dimensional laser scanning (+/- 0.5mm tolerance).
2. Annealing: internal stress elimination for thermal shock resistance.
3. AQL 1.5 Inspection: batch rejection threshold for critical defects.
4. Adhesion: cross-hatch and tape tests for color coatings.
5. Logistical: drop-test certified palletizing for sea freight.
Compliance: ISO 9001:2015, FDA 21 CFR, EU 1935/2004.`,
  },
  "/about": {
    title: "About Vesla | Glass Packaging Factory in Guangzhou, China",
    description: "Inside Vesla — 13+ years, 280 people, 60M annual capacity. ISO 9001, FDA & EU compliant. Factory tours welcome.",
    h1: "About Vesla — Cosmetic Glass Packaging Manufacturer",
    body: `Vesla Co., Ltd. operates a 32,000 m² glass packaging factory in Guangzhou, China.
- 280+ staff, 6 IS forming machines running 24/7
- Annual capacity: 60 million units, 1,200+ SKUs
- In-house decoration: frosting, spray coating (solid + gradient), silk screen, hot stamping, electroplating, water transfer printing
- ISO 9001:2015, SGS audited, AQL 1.5/2.5/4.0 inspection
- Materials: Type III soda-lime glass, FDA 21 CFR, EU 1935/2004, REACH & RoHS compliant
- 92% glass cullet recycling rate

Contact: sale@veslapack.com | +86 19926004078`,
  },
  "/cream-jars": {
    title: "Cream Jar Manufacturers & Suppliers | Custom Glass Cosmetic Jars — Vesla",
    description: "Custom glass cream jars from 15g to 120g with woodgrain, matte & metallic lids. Low MOQ 5,000 pcs, in-house decoration, DDP to EU & USA.",
    h1: "Cream Jar Manufacturers & Suppliers",
    body: `Vesla manufactures custom glass cream jars for moisturizer, face cream and body care brands.

Products: frosted round jars with woodgrain lids, matte black & brown cream jars, brown water-transfer jars — 5g to 120g.
Capabilities: woodgrain water-transfer printing, matte & metallic lids, silk screen, hot stamping, gradient coating. MOQ 5,000 pcs on stock molds; private molds from 10,000 pcs.
Compliance: ISO 9001, FDA 21 CFR, EU 1935/2004. Production 7-15 days on stock molds. DDP to EU & USA.

Browse jars: https://www.veslapack.com/products?category=jar
Contact: sale@veslapack.com | WhatsApp +86 19926004078`,
  },
  "/glass-vials": {
    title: "Glass Vial Manufacturers & Suppliers | Custom Sample Vials — Vesla",
    description: "Precision glass vial manufacturers & suppliers. 2ml-10ml vials for discovery sets, travel sizes & essential oils. Low MOQ 5,000 pcs, DDP shipping.",
    h1: "Glass Vial Manufacturers & Suppliers",
    body: `Vesla manufactures high-precision glass vials for skincare and fragrance brands.

Products: 2ml to 10ml sample vials, discovery set tubes, essential oil mini-vials. Clear and amber glass options.
Capabilities: in-house silk screen printing, custom gift box sourcing, insert tray design. MOQ 5,000 pcs.
Shipping: DDP shipping to USA and EU (20-26 days). ISO 9001 factory.

Browse vials: https://www.veslapack.com/products?category=vial
Contact: sale@veslapack.com | WhatsApp +86 19926004078`,
  },
  "/cosmetic-glass-packaging-manufacturer": {
    title: "Cosmetic Glass Packaging Manufacturer | Vesla",
    description: "Factory-direct cosmetic glass packaging: serum bottles, cream jars, vials and sets. Stock molds from 5,000 pcs and private molds from 10,000 pcs.",
    h1: "Cosmetic Glass Packaging Manufacturer",
    body: `Vesla supports skincare, fragrance and wellness brands with glass bottles, jars, vials and coordinated sets.

Stock-mold MOQ: 5,000 pcs with custom decoration. Private-mold projects: from 10,000 pcs.
Options: frosting, spray coating, silk screen, hot stamping and compatible closures.

Explore: https://www.veslapack.com/serum-bottles | https://www.veslapack.com/cream-jars
Contact: sale@veslapack.com | WhatsApp +86 19926004078`,
  },
  "/low-moq-cosmetic-packaging": {
    title: "Low MOQ Cosmetic Packaging | Vesla",
    description: "Low MOQ cosmetic glass packaging for indie beauty brands. Stock-mold bottles, jars, vials and sets from 5,000 pcs with custom decoration.",
    h1: "Low MOQ Cosmetic Packaging",
    body: `Vesla offers stock-mold cosmetic glass packaging from 5,000 pcs with custom color, frosting, print and closure options.

Best for: first launches, limited runs and SKU validation. Private molds start from 10,000 pcs.
Read the MOQ guide: https://www.veslapack.com/blog/indie-beauty-brand-budgeting-2026-moq-mold-guide
Contact: sale@veslapack.com | WhatsApp +86 19926004078`,
  },
  "/custom-cosmetic-packaging-manufacturer": {
    title: "Custom Cosmetic Packaging Manufacturer | Vesla",
    description: "Custom cosmetic packaging manufacturer for private-mold glass bottles, jars and matching skincare sets. Compare custom stock molds and private-mold development.",
    h1: "Custom Cosmetic Packaging Manufacturer",
    body: `Vesla helps brands evaluate customized stock-mold packaging and private-mold glass development.
Private-mold projects start from 10,000 pcs. Provide capacity, formula, closure, visual brief and expected quantity for a feasibility review.

Custom mold planning should cover the target capacity, formula, closure, decoration, reference drawing and expected quantity so stock-mold and private-mold routes can be compared before tooling.

Explore coordinated sets: https://www.veslapack.com/cosmetic-sets
Contact: sale@veslapack.com | WhatsApp +86 19926004078`,
  },
  "/serum-bottles": {
    title: "Serum & Essential Oil Bottle Manufacturers | Custom Glass Dropper Bottles — Vesla",
    description: "Premium serum & essential oil bottle manufacturers. Custom glass dropper bottles from 5ml to 100ml with UV protection and in-house decoration. Low MOQ 5,000 pcs, DDP shipping.",
    h1: "Serum & Essential Oil Bottle Manufacturers",
    body: `Vesla manufactures custom glass packaging for high-performance serums, facial oils, and aromatherapy blends.

Products: glass serum bottles (5ml-100ml), essential oil bottles, classic droppers, push-button sprayers.
Capabilities: UV-protective amber/violet glass, custom color spray, silk screen printing. MOQ 5,000 pcs.
Shipping: DDP to USA/EU in 20-26 days. ISO 9001 certified.

Browse collection: https://www.veslapack.com/serum-bottles
Contact: sale@veslapack.com | WhatsApp +86 19926004078`,
  },
  "/cosmetic-sets": {
    title: "Cosmetic Set Bottle Manufacturers | Custom Glass Skincare Sets — Vesla",
    description: "Custom cosmetic set bottle manufacturers. Coordinated glass skincare sets — droppers, pump lotion bottles & cream jars with gradient coating & electroplated caps. Low MOQ 5,000 pcs, DDP to EU & USA.",
    h1: "Cosmetic Set Bottle Manufacturers & Suppliers",
    body: `Vesla manufactures coordinated glass cosmetic sets for premium skincare and gift-box brands.

Products: gradient-color skincare sets, pump lotion + cream jar combos, straight-round & hourglass 'waistline' textured sets — droppers, pumps and jars matched as one family (40/100/120 ml + 30/50/100 g).
Capabilities: custom gradient coating (green, red, blue, amber), electroplated gold/silver caps & pump heads, stone-texture & diamond/prism molded glass, gold foil logo stamping. MOQ 5,000 pcs on stock molds; private molds from 10,000 pcs.
Compliance: ISO 9001, FDA 21 CFR, EU 1935/2004. Production 7-15 days on stock molds. DDP to EU & USA.

Browse sets: https://www.veslapack.com/products?category=set
Contact: sale@veslapack.com | WhatsApp +86 19926004078`,
  },
  "/products": {
    title: "Cosmetic Glass Bottles | Wholesale & Custom — Vesla",
    description: "Custom cosmetic glass bottles wholesale: serum bottles, cream jars, and gradient sets. Low MOQ 5,000 pcs, in-house decoration, DDP to EU & USA.",
    h1: "Cosmetic Glass Packaging Products",
    body: `Browse Vesla's stock and custom cosmetic glass packaging range. Every item is available with custom colors, decoration and closures. Private molds from 10,000 pcs.

Categories:
- Serum Bottles (5-100ml): https://www.veslapack.com/serum-bottles
- Cream Jars (15-120g): https://www.veslapack.com/cream-jars
- Glass Vials: https://www.veslapack.com/glass-vials
- Cosmetic Sets: https://www.veslapack.com/products?category=set

MOQ: 5,000 pcs (stock molds) | Production: 7-15 days | Samples: free kit, 5-7 days DHL

Contact: sale@veslapack.com | WhatsApp: +86 19926004078`,
  },
  "/blog": {
    title: "Resources | Cosmetic Glass Packaging Guides — Vesla",
    description: "Buyer's guides, material comparisons and trend reports on cosmetic glass packaging, written for indie beauty brand owners.",
    h1: "Insights from the Glass Line",
    body: `Practical guides for sourcing managers, founders and packaging designers.

Recent articles:
- Glass vs. Plastic in Cosmetic Packaging: https://www.veslapack.com/blog/glass-vs-plastic-cosmetic-packaging
- How to Choose the Right Neck Finish: https://www.veslapack.com/blog/how-to-choose-neck-finish
- Glass Bottle Production Cost Guide: https://www.veslapack.com/blog/custom-glass-bottle-cost-breakdown
- How to Avoid Getting Scammed When Sourcing Packaging from China: https://www.veslapack.com/blog/avoid-scam-sourcing-packaging-china
- Is Glass Packaging Actually Sustainable?: https://www.veslapack.com/blog/sustainable-cosmetic-glass-packaging
- Low MOQ Cosmetic Packaging for Indie Brand Launches: https://www.veslapack.com/blog/low-moq-packaging-indie-brand-launch

Full list: https://www.veslapack.com/blog`,
  },
  "/process": {
    title: "Custom Process | Vesla Glass Packaging",
    description: "From concept to container: send requirement → design & quote → sample approval → mass production → global shipping. Free sample kit, 5-7 day DHL Express.",
    h1: "Our Custom Packaging Process",
    body: `1. Send Requirement (1-2 days): Share bottle type, capacity, quantity and decoration needs. Free spec consultation, quote within 24h.
2. Design & Quote (24 hours): Pantone color matching, 3D model on request, itemized quote.
3. Sample Approval (5-10 days): Fully decorated samples shipped by express for approval.
4. Mass Production (7-15 days on stock molds; 25-30 days custom): ISO 9001, AQL sampling, weekly updates.
5. Global Shipping: EXW, FOB or DDP to EU/USA. Drop-test certified cartons, breakage guarantee.

Contact: sale@veslapack.com | WhatsApp: +86 19926004078`,
  },
  "/contact": {
    title: "Contact Us | Vesla Glass Packaging",
    description: "Get a free quote and custom sample kit. Reply within 24 hours. WhatsApp +86 19926004078, sale@veslapack.com.",
    h1: "Contact Vesla — Get a Free Quote",
    body: `Send your project details and we respond within 24 hours on business days with real answers from packaging engineers.

Email: sale@veslapack.com
WhatsApp: +86 19926004078
Phone: +86 19926004078
Address: 11th Floor, Building 5, Baiyun Financial Holdings Intelligent Connected Vehicle Industrial Park, No. 66-4 Zhihong Road, Jianggao Town, Baiyun District, Guangzhou, Guangdong, China

Office Hours: Mon-Sat, 9:00-18:00 (GMT+8)`,
  },
  "/privacy": {
    title: "Privacy Policy | Vesla",
    description: "Vesla privacy policy.",
    h1: "Privacy Policy",
    body: "Vesla Co., Ltd. privacy policy. We only use your contact information to respond to inquiries. We never sell personal data.",
  },
};

const REDIRECTS = {
  // Historical product IDs reported by GSC: resolve server-side in one hop.
  "/products/matte-black-brown-jar": "/products/matte-black-brown-glass-cream-jar-manufacturer",
  "/products/matte-black-serum-bottle": "/products/custom-matte-black-glass-serum-bottle-manufacturer",
  "/dropper-bottles": "/serum-bottles",
  "/essential-oil-bottles": "/serum-bottles",
  "/products/flat-square-dropper": "/products/custom-flat-square-glass-dropper-bottle-supplier",
  // Retire legacy article slugs with one-hop 301s to the current canonical pages.
  "/blog/frosted-vs-clear-glass": "/blog/frosted-vs-clear-glass-packaging",
  "/blog/shipping-glass-bottles-international": "/blog/ship-glass-bottles-china-usa",
  "/blog/cosmetic-set-packaging-guide": "/blog/matching-cosmetic-packaging-set-guide-2026",
  "/blog/how-to-estimate-packaging-budget": "/blog/custom-glass-bottle-cost-breakdown",
  "/blog/k-beauty-packaging-trends-2026": "/blog/2026-cosmetic-glass-packaging-trends-report",
};

const KNOWN_PATHS = new Set([
  "/", "/products", "/serum-bottles", "/cream-jars", "/glass-vials", "/cosmetic-sets",
  "/cosmetic-glass-packaging-manufacturer", "/low-moq-cosmetic-packaging", "/custom-cosmetic-packaging-manufacturer",
  "/cosmetic-packaging-supplier-comparison-2026", "/quality-control", 
  "/certifications", "/about", "/process", "/blog", "/contact", "/privacy",
  "/api/contact",
  "/sitemap.xml", "/robots.txt", "/llms.txt", "/llms-full.txt", "/content-manifest.json",
  "/b4c8e9a2d1f3.txt",
]);

const STATIC_FILE_RE = /\.(js|css|png|jpg|jpeg|webp|avif|svg|ico|woff2?|ttf|mp4|xml|txt|json)$/i;

function notFound() {
  return new Response("Not Found", { status: 404, headers: { "Content-Type": "text/plain" } });
}

function isPlaceholderDynamicPath(path) {
  let decodedPath = path;
  try {
    decodedPath = decodeURIComponent(path);
  } catch {
    // Keep the original path; malformed URLs will be handled by the normal guard.
  }
  return decodedPath === "/products/:id" || decodedPath === "/blog/:slug";
}

async function handleContact(request, env) {
  try {
    const body = await request.json();
    // Simple validation
    if (!body.name || !body.email || !body.message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400 });
    }
    // Honeypot check
    if (body.hp) return new Response(JSON.stringify({ ok: true, discarded: true }), { status: 200 });

    const to = env.CONTACT_TO || "sale@veslapack.com";
    const from = env.CONTACT_FROM || "no-reply@veslapack.com";
    const text = `Name: ${body.name}\nEmail: ${body.email}\nCompany: ${body.company || "N/A"}\nCountry: ${body.country || "N/A"}\nProduct: ${body.product || "N/A"}\nQuantity: ${body.quantity || "N/A"}\n\nMessage:\n${body.message}`;

    const requestId = crypto.randomUUID();
    const apiKey = env.MAILCHANNELS_API_KEY;
    if (!apiKey) {
      console.error("[contact] MailChannels API key is not configured", { requestId });
      return new Response(JSON.stringify({ error: "Email delivery is temporarily unavailable", requestId }), {
        status: 503,
        headers: { "content-type": "application/json", "access-control-allow-origin": "*" },
      });
    }

    const upstream = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": apiKey },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to, name: "Vesla Sales" }] }],
        from: { email: from, name: "Vesla Website" },
        reply_to: { email: body.email, name: body.name },
        subject: `New inquiry from ${body.name}`,
        content: [{ type: "text/plain", value: text }],
      }),
    });

    if (!upstream.ok) {
      const providerDetail = (await upstream.text()).slice(0, 500);
      console.error("[contact] MailChannels rejected delivery", { requestId, status: upstream.status, providerDetail });
      return new Response(JSON.stringify({ error: "Email delivery failed", requestId }), {
        status: 502,
        headers: { "content-type": "application/json", "access-control-allow-origin": "*" },
      });
    }

    console.log("[contact] MailChannels accepted delivery", { requestId, to, from });
    return new Response(JSON.stringify({ ok: true, requestId }), {
      status: 200,
      headers: { "content-type": "application/json", "access-control-allow-origin": "*" },
    });
  } catch (e) {
    const requestId = crypto.randomUUID();
    console.error("[contact] Unexpected delivery error", { requestId, error: e instanceof Error ? e.message : String(e) });
    return new Response(JSON.stringify({ error: "Email delivery is temporarily unavailable", requestId }), {
      status: 502,
      headers: { "content-type": "application/json", "access-control-allow-origin": "*" },
    });
  }
}

export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      const path = url.pathname;
      const ua = request.headers.get("user-agent") || "";

      // 0. API Handlers
      if (path === "/api/contact" && request.method === "POST") {
        return handleContact(request, env);
      }
      if (path === "/api/contact" && request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "access-control-allow-origin": "*",
            "access-control-allow-methods": "POST, OPTIONS",
            "access-control-allow-headers": "content-type",
          },
        });
      }

      // 1. 301 Redirects for legacy paths — resolve directly to the final
      // HTTPS + www canonical URL to avoid HTTP -> www -> path redirect chains.
      if (REDIRECTS[path]) {
        const target = new URL(`https://www.veslapack.com${REDIRECTS[path]}`);
        target.search = url.search;
        return Response.redirect(target.toString(), 301);
      }

      // 2. Host Canonicalization for all remaining paths.
      if (url.hostname === "veslapack.com") {
        const canonical = new URL(request.url);
        canonical.protocol = "https:";
        canonical.hostname = "www.veslapack.com";
        return Response.redirect(canonical.toString(), 301);
      }

      // 3. Dynamic Product/Blog Routing — validate slug/id against manifest for
      // BOTH crawlers and real browsers. Placeholder route tokens must never be
      // allowed to reach the SPA fallback, even when the manifest is unavailable.
      if (isPlaceholderDynamicPath(path)) return notFound();

      const isDynamic = /^\/(products|blog)\/[^/]+$/.test(path);
      let dynamicEntry = null;
      if (isDynamic) {
        let manifest;
        try {
          const manifestRequest = new Request(
            new URL("/content-manifest.json", url.origin).toString(),
            request,
          );
          const manifestResponse = await env.ASSETS.fetch(manifestRequest);
          if (!manifestResponse.ok) return notFound();
          manifest = await manifestResponse.json();
        } catch {
          // A missing or invalid manifest must fail closed for dynamic routes.
          return notFound();
        }

        let slug;
        try {
          slug = decodeURIComponent(path.split("/").pop() || "");
        } catch {
          return notFound();
        }

        if (path.startsWith("/products/")) {
          const productEntries = Array.isArray(manifest.product_entries)
            ? manifest.product_entries
            : Array.isArray(manifest.products)
              ? manifest.products
              : [];
          dynamicEntry = productEntries.find(p => p.seoSlug === slug || p.id === slug) || null;
        } else {
          const blogEntries = Array.isArray(manifest.blog_entries)
            ? manifest.blog_entries
            : Array.isArray(manifest.blogs)
              ? manifest.blogs
              : [];
          dynamicEntry = blogEntries.find(b => b.slug === slug) || null;
        }
        if (!dynamicEntry) return notFound();

        // Product IDs are internal identifiers, not public canonical slugs.
        // Redirect them to the published seoSlug so Google does not treat the
        // same product as two indexable documents.
        if (path.startsWith("/products/") && dynamicEntry.seoSlug && slug !== dynamicEntry.seoSlug) {
          const target = new URL(`https://www.veslapack.com/products/${dynamicEntry.seoSlug}`);
          target.search = url.search;
          return Response.redirect(target.toString(), 301);
        }
      }

      // 3b. AI Crawler SSR
      if (isAICrawler(ua)) {
        const page = STATIC_PAGES[path];
        if (page) {
          const pageUrl = `https://www.veslapack.com${path === "/" ? "/" : path}`;
          const organization = {
            "@type": "Organization",
            "@id": "https://www.veslapack.com/#organization",
            "name": "Vesla Co., Ltd.",
            "url": "https://www.veslapack.com/",
            "logo": "https://www.veslapack.com/images/logo-small.png",
            "email": "sale@veslapack.com",
            "telephone": "+86 19926004078",
            "sameAs": [
              "https://instagram.com/veslapack",
              "https://tiktok.com/@veslapack",
              "https://pinterest.com/veslapack",
              "https://linkedin.com/company/veslapack",
            ],
          };
          const jsonLd = path === "/"
            ? [
                { "@context": "https://schema.org", ...organization },
                {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Vesla",
                  "url": "https://www.veslapack.com/",
                  "publisher": { "@type": "Organization", "name": "Vesla Co., Ltd." },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "WholesaleStore",
                  "name": "Vesla",
                  "url": "https://www.veslapack.com/",
                  "image": "https://www.veslapack.com/images/hero-poster.webp",
                  "telephone": "+86 19926004078",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "11th Floor, Building 5, Baiyun Financial Holdings Intelligent Connected Vehicle Industrial Park, No. 66-4 Zhihong Road, Jianggao Town, Baiyun District",
                    "addressLocality": "Guangzhou",
                    "addressRegion": "Guangdong",
                    "addressCountry": "China",
                  },
                },
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Do you produce glass bottles in your own factory?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We operate 6 IS forming machines on our own production floor in Guangzhou. Glass melting, forming, annealing, and quality inspection all happen under our roof. The glass is 100% ours." },
                    },
                    {
                      "@type": "Question",
                      "name": "What is your minimum order quantity (MOQ)?",
                      "acceptedAnswer": { "@type": "Answer", "text": "5,000 pcs on stock molds, 10,000 pcs for private mold programs. We can also arrange mixed-container shipments combining SKUs." },
                    },
                    {
                      "@type": "Question",
                      "name": "Can I get a physical sample before placing a bulk order?",
                      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We ship a labeled sample kit with fully decorated items within 5–7 days via DHL/FedEx." },
                    },
                  ],
                },
              ]
            : { "@context": "https://schema.org", ...organization };
          return serveSSR({
            ...page,
            url: pageUrl,
            image: "https://www.veslapack.com/images/hero-poster.webp",
            noindex: Boolean(url.search),
            jsonLd,
          });
        }

        if (isDynamic && dynamicEntry) {
          if (path.startsWith("/products/")) {
            const product = dynamicEntry;
            const productUrl = `https://www.veslapack.com/products/${product.seoSlug}`;
            const productTitle = product.seoTitle || `${product.specTitle || product.name} | Custom Cosmetic Glass Packaging — Vesla`;
            const productDescription = (product.description || "").substring(0, 155);
            const mainImage = absoluteAsset(product.image);
            const galleryImages = (product.gallery || []).map(absoluteAsset).filter(Boolean);
            const productSchema = {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": product.name,
              "image": [mainImage, ...galleryImages].filter(Boolean),
              "description": product.description,
              "brand": { "@type": "Brand", "name": product.brandName || "Vesla" },
              "manufacturer": { "@type": "Organization", "name": "Vesla Co., Ltd." },
              "mpn": product.mpn || `VSL-${product.id.toUpperCase()}`,
              "sku": product.sku || `VSL-${product.id.toUpperCase()}-5K`,
              "category": product.category,
              "material": product.material,
              "keywords": (product.seoKeywords || []).join(", "),
              "additionalProperty": [
                { "@type": "PropertyValue", "name": "Capacity", "value": product.capacity },
                { "@type": "PropertyValue", "name": "MOQ", "value": product.moq },
                { "@type": "PropertyValue", "name": "Lead time", "value": product.leadTime },
                { "@type": "PropertyValue", "name": "Customization", "value": product.decoration },
              ],
              "offers": {
                "@type": "Offer",
                "url": productUrl,
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "seller": { "@type": "Organization", "name": "Vesla Co., Ltd." },
              },
            };
            const breadcrumbSchema = {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.veslapack.com/" },
                { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.veslapack.com/products" },
                { "@type": "ListItem", "position": 3, "name": product.name, "item": productUrl },
              ],
            };
            const faqSchema = product.faqs?.length
              ? {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "mainEntity": product.faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.a },
                  })),
                }
              : null;
            return serveSSR({
              title: productTitle,
              description: productDescription,
              h1: product.specTitle || product.name,
              body: `${product.specTitle || product.name} — ${product.capacity}. ${product.description}\n\nMOQ: ${product.moq}\nLead time: ${product.leadTime}\nMaterial: ${product.material}\nDecoration: ${product.decoration}`,
              url: productUrl,
              image: mainImage,
              ogType: "product",
              jsonLd: [productSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])],
            });
          } else {
            const post = dynamicEntry;
            const jsonLd = {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "description": (post.body || "").substring(0, 160),
              "url": url.toString(),
              "author": { "@type": "Organization", "name": "Vesla" }
            };
            return serveSSR({
              title: post.title + " | Vesla Blog",
              description: (post.body || "").substring(0, 160),
              h1: post.title,
              body: post.body,
              url: url.toString(),
              jsonLd
            });
          }
        }
      }

      // 4. SPA Validation Guard
      if (!KNOWN_PATHS.has(path) && !STATIC_FILE_RE.test(path) && !isDynamic) {
        return notFound();
      }

      // 5. Serve Static Asset
      let resp = await env.ASSETS.fetch(request);
      let ctype = resp.headers.get("content-type") || "";

      // 5b. SPA Fallback — Pages ASSETS does NOT auto-serve index.html for
      // client-side routes (e.g. /cosmetic-sets has no .html file). Some
      // deployed Assets responses return a redirect to `/` instead of a 404
      // for these extensionless routes; treat that as a missing route asset and
      // load the SPA shell so real browsers keep the requested pathname.
      const isSpaRoute = KNOWN_PATHS.has(path) && !STATIC_FILE_RE.test(path);
      const assetLocation = resp.headers.get("Location") || "";
      const isRootRedirect = /^\/$/.test(assetLocation);
      const needsSpaFallback = resp.status === 404 || (resp.status >= 300 && resp.status < 400 && isRootRedirect);
      if (needsSpaFallback && (isSpaRoute || isDynamic)) {
        const indexReq = new Request(new URL("/index.html", url.origin).toString(), request);
        resp = await env.ASSETS.fetch(indexReq);
        ctype = resp.headers.get("content-type") || "";
      }

       // 5c. Inject product-specific SEO into the SPA shell for every user agent.
       // The React app still hydrates normally, but social crawlers and no-JS
       // consumers no longer see the homepage title/canonical on product URLs.
       if (isDynamic && path.startsWith("/products/") && dynamicEntry && ctype.includes("text/html")) {
         const shellHtml = await resp.text();
         const productHtml = injectProductSeo(shellHtml, dynamicEntry);
         resp = new Response(productHtml, resp);
         ctype = resp.headers.get("content-type") || "text/html; charset=utf-8";
          resp.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
        }

        // Parameterized catalog/contact pages remain useful for users, but are
        // not standalone indexable documents. Keep links crawlable while
        // preventing duplicate URL variants from entering the index.
        const hasNoindexParams = (path === "/products" || path === "/contact") && url.search;
        if (hasNoindexParams && ctype.includes("text/html")) {
          const parameterizedHtml = injectParameterizedSeo(await resp.text(), {
            title: path === "/products"
              ? "Cosmetic Glass Bottles | Wholesale & Custom — Vesla"
              : "Contact Us | Vesla Glass Packaging",
            description: path === "/products"
              ? "Wholesale cosmetic glass bottles and custom OEM/ODM packaging from Vesla."
              : "Contact Vesla for cosmetic glass packaging quotes, samples and custom molds.",
            canonical: `https://www.veslapack.com${path}`,
          });
          resp = new Response(parameterizedHtml, resp);
          ctype = resp.headers.get("content-type") || "text/html; charset=utf-8";
          resp.headers.set("X-Robots-Tag", "noindex, follow");
          resp.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
        }
 
        // 6. Asset Existence Check
      if (STATIC_FILE_RE.test(path) && ctype.includes("text/html")) {
        return notFound();
      }

      // 7. Inject Vary Header for Crawler Segregation
      // Skip for No-Body responses (304, 204) to avoid constructor errors.
      const hasBody = resp.status !== 304 && resp.status !== 204 && resp.body;
      if (hasBody && (ctype.includes("text/html") || path === "/")) {
        const newResponse = new Response(resp.body, resp);
        newResponse.headers.set("Vary", "User-Agent");
        return newResponse;
      }

      return resp;
    } catch (e) {
      return new Response(`Vesla Worker Exception: ${e.message}\n${e.stack}`, { status: 500 });
    }
  },
};
