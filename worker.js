// Worker — intercepts sitemap/robots + serves SSR content to AI crawlers
const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url><loc>https://www.veslapack.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
<url><loc>https://www.veslapack.com/products</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
<url><loc>https://www.veslapack.com/process</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
<url><loc>https://www.veslapack.com/about</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
<url><loc>https://www.veslapack.com/contact</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
<url><loc>https://www.veslapack.com/blog</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
<url><loc>https://www.veslapack.com/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>`;

const ROBOTS = `User-agent: *\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nSitemap: https://www.veslapack.com/sitemap.xml\n`;

function isAICrawler(ua) {
  if (!ua) return false;
  const bots = ["gptbot", "chatgpt-user", "claudebot", "google-extended", "anthropic-ai", "ccbot", "cohere-ai", "perplexitybot"];
  const lowered = ua.toLowerCase();
  return bots.some((b) => lowered.includes(b));
}

function serveSSR(page, manifest) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${page.title || "Vesla"}</title>
<meta name="description" content="${(page.description || "").replace(/"/g, "&quot;")}">
<link rel="canonical" href="${page.url || "https://www.veslapack.com/"}">
</head>
<body>
<h1>${page.h1 || page.title}</h1>
<pre style="white-space:pre-wrap;font-family:sans-serif;max-width:800px;margin:20px auto;line-height:1.6;font-size:16px">${page.body || ""}</pre>
<footer style="text-align:center;margin-top:40px;color:#888">
<p>Vesla Co., Ltd. — Custom Cosmetic Glass Packaging Manufacturer | Guangzhou, China</p>
<p>yitengglass3@gmail.com | +86 18165681131 | ISO 9001 Certified</p>
</footer>
</body>
</html>`;
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const ua = request.headers.get("user-agent") || "";

    // Canonical host: redirect non-www → www (avoid duplicate content)
    if (url.hostname === "veslapack.com") {
      const canonical = new URL(request.url);
      canonical.hostname = "www.veslapack.com";
      return Response.redirect(canonical.toString(), 301);
    }

    switch (path) {
      case "/sitemap.xml":
        return new Response(SITEMAP, { headers: { "Content-Type": "application/xml" } });
      case "/robots.txt":
        return new Response(ROBOTS, { headers: { "Content-Type": "text/plain" } });
    }

    // SSR for AI crawlers
    if (isAICrawler(ua)) {
      try {
        const manifest = await env.ASSETS.fetch(new Request(new URL("/content-manifest.json", url.origin))).then((r) => r.json());

        // Home
        if (path === "/" || path === "/index.html") return serveSSR({ ...manifest.home, url: url.toString() }, manifest);
        // About
        if (path === "/about") return serveSSR({ ...manifest.about, url: url.toString() }, manifest);
        // Products listing
        if (path === "/products") return serveSSR({ ...manifest.products, url: url.toString() }, manifest);
        // Blog listing
        if (path === "/blog") return serveSSR({ ...manifest.blog, url: url.toString() }, manifest);
        // Process
        if (path === "/process") {
          return serveSSR({
            title: "Custom Process | Vesla Glass Packaging",
            description: "From concept to container: consultation → sampling → production → delivery. Free sample kit, 5-7 day DHL Express.",
            h1: "Our Custom Packaging Process",
            body: "1. Consultation (1-3 days): Spec review, mold recommendation, transparent pricing.\n2. Sampling (5-10 days): Physical samples with decoration, DHL Express shipping.\n3. Production (20-35 days): Bulk manufacturing under ISO 9001, inline QC at every station.\n4. Delivery: EXW, FOB Shanghai/Qingdao, or DDP to EU/USA warehouses.\n\nContact: yitengglass3@gmail.com | WhatsApp: +86 18165681131",
            url: url.toString(),
          }, manifest);
        }
        // Contact page
        if (path === "/contact") {
          return serveSSR({
            title: "Contact Us | Vesla Glass Packaging",
            description: "Get a free quote and custom sample kit. Reply within 24 hours. WhatsApp +86 18165681131, yitengglass3@gmail.com.",
            h1: "Contact Vesla — Get a Free Quote",
            body: "Send your project details and we respond within 24 hours on business days with real answers from packaging engineers.\n\nEmail: yitengglass3@gmail.com\nWhatsApp: +86 18165681131\nPhone: +86 18165681131\nAddress: 11th Floor, Building 5, Baiyun Financial Holdings Intelligent Connected Vehicle Industrial Park, No. 66-4 Zhihong Road, Jianggao Town, Baiyun District, Guangzhou, Guangdong, China\n\nOffice Hours: Mon-Sat, 9:00-18:00 (GMT+8)",
            url: url.toString(),
          }, manifest);
        }
        // Blog post
        const blogMatch = path.match(/^\/blog\/([a-z0-9-]+)$/);
        if (blogMatch && manifest.blogs_by_slug) {
          const post = manifest.blogs_by_slug[blogMatch[1]];
          if (post) {
            return serveSSR({
              title: post.title + " | Vesla Blog",
              description: post.body.substring(0, 160),
              h1: post.title,
              body: post.body,
              url: url.toString(),
            }, manifest);
          }
        }
        // Product detail
        const prodMatch = path.match(/^\/products\/([a-z0-9-]+)$/);
        if (prodMatch) {
          const prod = (manifest.products?.body || "").split("\n").find((l) => l.includes(prodMatch[1]));
          if (prod) {
            return serveSSR({
              title: prod.split(":")[0].replace("- ", "") + " | Vesla Products",
              description: prod.substring(0, 160),
              h1: prod.split(":")[0].replace("- ", ""),
              body: prod,
              url: url.toString(),
            }, manifest);
          }
        }
      } catch (e) {
        // fall through to SPA
      }
    }

    // Default: serve SPA
    return env.ASSETS.fetch(request);
  },
};
