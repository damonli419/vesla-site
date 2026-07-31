// Lightweight Worker — intercepts sitemap & robots, delegates rest to assets
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

export default {
  async fetch(request, env) {
    const path = new URL(request.url).pathname;
    switch (path) {
      case "/sitemap.xml":
        return new Response(SITEMAP, { headers: { "Content-Type": "application/xml" } });
      case "/robots.txt":
        return new Response(ROBOTS, { headers: { "Content-Type": "text/plain" } });
      default:
        return env.ASSETS.fetch(request);
    }
  },
};
