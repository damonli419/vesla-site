// Minimal Worker for static site with sitemap.xml support
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Serve sitemap.xml directly
    if (url.pathname === "/sitemap.xml") {
      return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.veslapack.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.veslapack.com/products</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.veslapack.com/process</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.veslapack.com/about</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.veslapack.com/contact</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.veslapack.com/blog</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.veslapack.com/privacy</loc><changefreq>yearly</changefreq><priority>0.3</priority></url>
</urlset>`,
        { headers: { "Content-Type": "application/xml; charset=utf-8" } }
      );
    }

    // Serve robots.txt directly
    if (url.pathname === "/robots.txt") {
      return new Response(
        `User-agent: *\nAllow: /\nSitemap: https://www.veslapack.com/sitemap.xml\n`,
        { headers: { "Content-Type": "text/plain; charset=utf-8" } }
      );
    }

    // Serve llms.txt for AI discoverability
    if (url.pathname === "/llms.txt" || url.pathname === "/llms-full.txt") {
      return env.ASSETS.fetch(request);
    }

    // All other routes: let Cloudflare handle via assets
    return env.ASSETS.fetch(request);
  },
};
