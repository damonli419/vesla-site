import ssl, urllib.request, time
ctx = ssl.create_default_context()
req = urllib.request.Request("https://www.veslapack.com/serum-bottles", headers={"User-Agent":"Mozilla/5.0 Chrome/131.0"})
r = urllib.request.urlopen(req, context=ctx, timeout=30)
for h in ["cf-cache-status","age","cache-control","vary","last-modified","etag","cf-ray"]:
    print(h+":", r.headers.get(h))
