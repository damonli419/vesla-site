// Minimal Worker for static site serving.
// Assets are served directly from ./dist via wrangler.json assets config.
export default {
  async fetch(request, env, ctx) {
    // Static assets are handled by the platform automatically
    // when `assets.directory` is configured in wrangler.json.
    // This fetcher is a fallback — normally unreachable.
    return new Response("Not Found", { status: 404 });
  },
};
