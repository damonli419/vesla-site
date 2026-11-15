import ssl, urllib.request, time
ctx = ssl.create_default_context()
def fetch(path, ua):
    req = urllib.request.Request("https://www.veslapack.com"+path, headers={"User-Agent":ua})
    r = urllib.request.urlopen(req, context=ctx, timeout=30)
    return r, r.read().decode("utf-8","replace")
GPT = "GPTBot/1.0"
r, s = fetch("/", GPT)
print("len:", len(s), "| <pre>:", "<pre" in s, "| <main>:", "<main>" in s, "| cf-cache:", r.headers.get("cf-cache-status"))
r2, s2 = fetch("/serum-bottles", GPT)
print("sb len:", len(s2), "| <pre>:", "<pre" in s2, "| <main>:", "<main>" in s2, "| cf-cache:", r2.headers.get("cf-cache-status"))
