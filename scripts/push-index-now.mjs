#!/usr/bin/env node
/**
 * IndexNow batch submitter for veslapack.com
 *
 * Submits URLs to api.indexnow.org (covers Bing, Yandex, Naver, Seznam, Yep).
 * Google does NOT participate in IndexNow — use GSC for Google (after 2026-11-15).
 *
 * Usage:
 *   node scripts/push-index-now.mjs                # submits the default list below
 *   node scripts/push-index-now.mjs /blog/foo /products/bar   # submits specific paths
 *
 * Rules (see 独立站改版后GSC与Bing提交流程):
 *   - canonical URLs only, no query strings, no fragments
 *   - do NOT submit test/redirect/noindex pages
 *   - the key file must stay live: https://www.veslapack.com/b4c8e9a2d1f3.txt
 */

const HOST = "www.veslapack.com";
const KEY = "b4c8e9a2d1f3";
const ENDPOINT = "https://api.indexnow.org/indexnow";

// Default batch: pages with recent substantive changes (update as site evolves).
const DEFAULT_PATHS = [
  "/",
  "/blog/glass-vs-plastic-perfume-bottles",
  "/blog/amber-glass-uv-protection-testing-standards",
  "/blog/ship-glass-bottles-china-usa",
  "/products/heart-shaped-glass-dropper-bottle-manufacturer",
];

const paths = process.argv.slice(2);
const list = paths.length ? paths : DEFAULT_PATHS;

const bad = list.filter((p) => p.includes("?") || p.includes("#") || !p.startsWith("/"));
if (bad.length) {
  console.error("ERROR: paths must be canonical site paths without ? or # :", bad);
  process.exit(1);
}

const urlList = list.map((p) => `https://${HOST}${p}`);

// Preflight: key file must be reachable and match the key.
const keyRes = await fetch(`https://${HOST}/${KEY}.txt`);
const keyBody = (await keyRes.text()).trim();
if (!keyRes.ok || keyBody !== KEY) {
  console.error(`ERROR: key file check failed (${keyRes.status}), got "${keyBody}"`);
  process.exit(1);
}

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList,
};

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

console.log(`Submitted ${urlList.length} URL(s) to IndexNow: ${res.status} ${res.statusText || ""}`);
if (!res.ok) {
  console.error(await res.text().catch(() => ""));
  process.exit(1);
}
urlList.forEach((u) => console.log("  -", u));
console.log("\nNext step: GSC request indexing per URL (max ~10/day, not before 2026-11-15).");
