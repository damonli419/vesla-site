import ssl, urllib.request, time, re
ctx = ssl.create_default_context()
def fetch(path, ua, extra=None):
    headers = {"User-Agent": ua}
    if extra: headers.update(extra)
    req = urllib.request.Request("https://www.veslapack.com"+path, headers=headers)
    r = urllib.request.urlopen(req, context=ctx, timeout=30)
    return r, r.read().decode("utf-8","replace")
CHROME = "Mozilla/5.0 Chrome/131.0"
# homepage via www apex vs trailing slash variant:
r1, s1 = fetch("/", CHROME)
print("/ len:", len(s1), "hero:", "hero-lcp" in s1, r1.headers.get("cf-cache-status"))
# What about /index.html directly?
r2, s2 = fetch("/index.html", CHROME)
print("/index.html len:", len(s2), "hero:", "hero-lcp" in s2, r2.headers.get("cf-cache-status"), r2.headers.get("cache-control"))
