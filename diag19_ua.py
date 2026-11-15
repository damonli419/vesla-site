import ssl, urllib.request
ctx = ssl.create_default_context()
class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None
opener = urllib.request.build_opener(NoRedirect)
for ua, p in [("GPTBot/1.0", "/serum-bottles"), ("GPTBot/1.0", "/blog"), ("Mozilla/5.0 (Linux; Android 10) Chrome/120.0", "/serum-bottles"), ("curl/8.0", "/serum-bottles")]:
    try:
        r = opener.open(urllib.request.Request("https://www.veslapack.com"+p, headers={"User-Agent": ua}), timeout=30)
        print(ua, p, "->", r.status)
    except urllib.error.HTTPError as e:
        print(ua, p, "->", e.code, "loc:", e.headers.get("Location"))
