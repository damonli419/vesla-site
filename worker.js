// Worker — Pages Functions entry.
// - AI crawler SSR: serves readable HTML to GPTBot/ClaudeBot/etc.
// - Real 404 for missing static assets (no HTML-fallback broken images).
// - non-www → www canonical redirect.
// robots.txt / sitemap.xml are served from public/ (static, complete).

function isAICrawler(ua) {
  if (!ua) return false;
  const bots = ["gptbot", "chatgpt-user", "claudebot", "google-extended", "anthropic-ai", "ccbot", "cohere-ai", "perplexitybot", "meta-externalagent"];
  const lowered = ua.toLowerCase();
  return bots.some((b) => lowered.includes(b));
}

function serveSSR({ title, description, h1, body, url }) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${title || "Vesla"}</title>
<meta name="description" content="${(description || "").replace(/"/g, "&quot;")}">
<link rel="canonical" href="${url || "https://www.veslapack.com/"}">
</head>
<body>
<h1>${h1 || title}</h1>
<pre style="white-space:pre-wrap;font-family:sans-serif;max-width:800px;margin:20px auto;line-height:1.6;font-size:16px">${body || ""}</pre>
<footer style="text-align:center;margin-top:40px;color:#888">
<p>Vesla Co., Ltd. — Custom Cosmetic Glass Packaging Manufacturer | Guangzhou, China</p>
<p>yitengglass3@gmail.com | +86 18165681131 | ISO 9001 Certified</p>
</footer>
</body>
</html>`;
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Vary": "User-Agent",
    },
  });
}

const STATIC_PAGES = {
  "/": {
    title: "Vesla | China Glass Packaging Manufacturer & Cosmetic Bottle Supplier",
    description: "Vesla is a custom cosmetic glass packaging manufacturer in Guangzhou, China — dropper bottles, cream jars, essential oil bottles, perfume vials. 13+ years, OEM/ODM, low MOQ, DDP to EU & USA.",
    h1: "Vesla — Premium Glass Packaging Manufacturer for Beauty & Wellness Brands",
    body: `Vesla Co., Ltd. is a cosmetic glass packaging manufacturer in Guangzhou, China with 13+ years of experience and 500+ global customers.

Products: dropper bottles (5-100ml), cream jars (15-120g), essential oil bottles, perfume bottles, roller bottles, sample vials, gradient cosmetic sets.
Capabilities: OEM/ODM, custom molds from 10,000 pcs, stock molds from 5,000 pcs, in-house decoration (frosting, spray coating, silk screen, hot stamping, electroplating, water transfer).
Production: 7-15 days on stock molds; 25-30 days custom molds. ISO 9001, FDA 21 CFR, EU 1935/2004, REACH & RoHS compliant.
Shipping: EXW, FOB or DDP to EU & USA. Free sample kit for new brands.

Key pages:
- Products: https://www.veslapack.com/products
- Dropper bottles: https://www.veslapack.com/dropper-bottles
- Factory: https://www.veslapack.com/about
- Process: https://www.veslapack.com/process
- Blog: https://www.veslapack.com/blog
- Contact: https://www.veslapack.com/contact

Contact: yitengglass3@gmail.com | WhatsApp: +86 18165681131`,
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

Contact: yitengglass3@gmail.com | +86 18165681131`,
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
Contact: yitengglass3@gmail.com | WhatsApp +86 18165681131`,
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
Contact: yitengglass3@gmail.com | WhatsApp +86 18165681131`,
  },
  "/products": {
    title: "Cosmetic Glass Bottles | Wholesale & Custom — Vesla",
    description: "Custom cosmetic glass bottles wholesale: dropper bottles, cream jars, essential oil bottles, perfume vials and gradient sets. Low MOQ 5,000 pcs, in-house decoration, DDP to EU & USA.",
    h1: "Cosmetic Glass Packaging Products",
    body: `Browse Vesla's stock and custom cosmetic glass packaging range. Every item is available with custom colors, decoration and closures. Private molds from 10,000 pcs.

Categories:
- Dropper Bottles (5-100ml): https://www.veslapack.com/products?category=dropper
- Cream Jars (15-120g): https://www.veslapack.com/products?category=jar
- Essential Oil Bottles: https://www.veslapack.com/products?category=oil
- Cosmetic Sets: https://www.veslapack.com/products?category=set
- Glass Vials: https://www.veslapack.com/products?category=vial

MOQ: 5,000 pcs (stock molds) | Production: 7-15 days | Samples: free kit, 5-7 days DHL

Contact: yitengglass3@gmail.com | WhatsApp: +86 18165681131`,
  },
  "/blog": {
    title: "Resources | Cosmetic Glass Packaging Guides — Vesla",
    description: "Buyer's guides, material comparisons and trend reports on cosmetic glass packaging, written for indie beauty brand owners.",
    h1: "Insights from the Glass Line",
    body: `Practical guides for sourcing managers, founders and packaging designers.

Recent articles:
- Glass vs. Plastic in Cosmetic Packaging: https://www.veslapack.com/blog/glass-vs-plastic-cosmetic-packaging
- How to Choose the Right Neck Finish: https://www.veslapack.com/blog/how-to-choose-neck-finish
- How Much Does Custom Glass Bottle Manufacturing Actually Cost?: https://www.veslapack.com/blog/custom-glass-bottle-cost-breakdown
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

Contact: yitengglass3@gmail.com | WhatsApp: +86 18165681131`,
  },
  "/contact": {
    title: "Contact Us | Vesla Glass Packaging",
    description: "Get a free quote and custom sample kit. Reply within 24 hours. WhatsApp +86 18165681131, yitengglass3@gmail.com.",
    h1: "Contact Vesla — Get a Free Quote",
    body: `Send your project details and we respond within 24 hours on business days with real answers from packaging engineers.

Email: yitengglass3@gmail.com
WhatsApp: +86 18165681131
Phone: +86 18165681131
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

// Known SPA routes — anything else gets a real 404 (kills soft-404s in GSC).
const KNOWN_PATHS = new Set([
  "/", "/products", "/serum-bottles", "/cream-jars", "/glass-vials", "/cosmetic-packaging-supplier-comparison-2026", "/quality-control", "/certifications", "/about", "/process", "/blog", "/contact", "/privacy",
  "/sitemap.xml", "/robots.txt", "/llms.txt", "/llms-full.txt", "/content-manifest.json",
  "/b4c8e9a2d1f3.txt",
]);
const REDIRECTS = {
  "/dropper-bottles": "/serum-bottles",
  "/essential-oil-bottles": "/serum-bottles",
};

function notFound() {
  return new Response("Not Found", { status: 404, headers: { "Content-Type": "text/plain" } });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const ua = request.headers.get("user-agent") || "";

    // 301 Redirects for merged categories
    if (REDIRECTS[path]) {
      const target = new URL(request.url);
      target.pathname = REDIRECTS[path];
      return Response.redirect(target.toString(), 301);
    }

    // Canonical host: non-www → www (avoid duplicate content)
    if (url.hostname === "veslapack.com") {
      const canonical = new URL(request.url);
      canonical.hostname = "www.veslapack.com";
      return Response.redirect(canonical.toString(), 301);
    }

    // SSR for AI crawlers
    if (isAICrawler(ua)) {
      try {
        const page = STATIC_PAGES[path];
        if (page) return serveSSR({ ...page, url: url.toString() });

        // Blog post
        const blogMatch = path.match(/^\/blog\/([a-z0-9-]+)$/);
        if (blogMatch) {
          const manifest = await env.ASSETS.fetch(new Request(new URL("/content-manifest.json", url.origin))).then((r) => r.json());
          const post = (manifest.blogs || []).find((b) => b.slug === blogMatch[1]);
          if (post) {
            return serveSSR({
              title: post.title + " | Vesla Blog",
              description: (post.body || "").substring(0, 160),
              h1: post.title,
              body: post.body,
              url: url.toString(),
            });
          }
        }

        // Product detail
        const prodMatch = path.match(/^\/products\/([a-z0-9-]+)$/);
        if (prodMatch) {
          const manifest = await env.ASSETS.fetch(new Request(new URL("/content-manifest.json", url.origin))).then((r) => r.json());
          const prod = (manifest.products || []).find((p) => p.seoSlug === prodMatch[1] || p.id === prodMatch[1]);
          if (prod) {
            return serveSSR({
              title: prod.name + " | Vesla Products",
              description: (prod.description || "").substring(0, 160),
              h1: prod.name,
              body: prod.name + " — " + prod.capacity + ". " + prod.description,
              url: url.toString(),
            });
          }
        }
      } catch (e) {
        // fall through to SPA
      }
    }

    // Real-404 guard: unknown paths return 404 instead of SPA-fallback HTML
    // (prevents Google soft-404 flags on invalid URLs like /products/:id).
    if (!KNOWN_PATHS.has(path) && !STATIC_FILE_RE.test(path) && !/^\/(products|blog)\//.test(path)) {
      return notFound();
    }
    if (/^\/(products|blog)\//.test(path)) {
      try {
        const manifest = await env.ASSETS.fetch(new Request(new URL("/content-manifest.json", url.origin))).then((r) => r.json());
        const slug = decodeURIComponent(path.split("/").pop() || "");
        const ok = path.startsWith("/products/")
          ? (manifest.products || []).some((p) => p.seoSlug === slug || p.id === slug)
          : (manifest.blogs || []).some((b) => b.slug === slug);
        if (!ok) return notFound();
      } catch (e) {
        // manifest unavailable — fall through and let the SPA handle it
      }
    }

    // Default: serve SPA
    const resp = await env.ASSETS.fetch(request);
    const ctype = resp.headers.get("content-type") || "";
    // Missing static assets must return a real 404, not the SPA fallback HTML —
    // otherwise browsers try to decode index.html as an image/font/script.
    if (STATIC_FILE_RE.test(path) && ctype.includes("text/html")) {
      return notFound();
    }
    // HTML responses: vary cache by User-Agent so AI crawlers get the SSR
    // version while browsers get the SPA (Cloudflare's cache key ignores UA).
    if (ctype.includes("text/html") || path === "/") {
      const headers = new Headers(resp.headers);
      headers.set("Vary", "User-Agent");
      return new Response(resp.body, { status: resp.status, statusText: resp.statusText, headers });
    }
    return resp;
  },
};
