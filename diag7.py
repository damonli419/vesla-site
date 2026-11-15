import ssl, urllib.request, time
ctx = ssl.create_default_context()
def fetch(path, ua):
    req = urllib.request.Request("https://www.veslapack.com"+path, headers={"User-Agent":ua})
    r = urllib.request.urlopen(req, context=ctx, timeout=30)
    return r, r.read().decode("utf-8","replace")
CHROME = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36"
# low-moq money page: known unindexed, rarely visited
r, s = fetch("/low-moq-cosmetic-packaging", CHROME)
print("low-moq cf-cache:", r.headers.get("cf-cache-status"), "| hero-lcp:", "hero-lcp" in s)
# custom money page
r2, s2 = fetch("/custom-cosmetic-packaging-manufacturer", CHROME)
print("custom cf-cache:", r2.headers.get("cf-cache-status"), "| hero-lcp:", "hero-lcp" in s2)
