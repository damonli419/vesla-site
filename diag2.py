import ssl, urllib.request, time
ctx = ssl.create_default_context()
def fetch(path, ua):
    req = urllib.request.Request("https://www.veslapack.com"+path+"?cb="+str(int(time.time())), headers={"User-Agent":ua})
    r = urllib.request.urlopen(req, context=ctx, timeout=30)
    return r, r.read().decode("utf-8","replace")
CHROME = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36"
GPT = "GPTBot/1.0"
# Check several browser-UA SPA routes for hero-lcp contamination
for p in ["/", "/serum-bottles", "/cream-jars", "/blog", "/about", "/contact", "/products"]:
    r, s = fetch(p, CHROME)
    print(p, "-> hero-lcp:", "hero-lcp" in s, "| title-home:", "China Glass Packaging Manufacturer |" in s)
