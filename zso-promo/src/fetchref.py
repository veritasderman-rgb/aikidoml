import json, os, urllib.parse, urllib.request

API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "ZSO-promo-reference/1.0 (research; contact via github)"}

def api(params):
    params = dict(params, format="json")
    req = urllib.request.Request(API + "?" + urllib.parse.urlencode(params), headers=UA)
    return json.loads(urllib.request.urlopen(req, timeout=60).read())

def members(cat, limit=80):
    d = api({"action": "query", "list": "categorymembers", "cmtitle": f"Category:{cat}",
             "cmlimit": limit, "cmtype": "file"})
    return [m["title"] for m in d.get("query", {}).get("categormembers", d.get("query", {}).get("categorymembers", []))]

def search(term, limit=40):
    d = api({"action": "query", "list": "search", "srsearch": f"{term} filetype:bitmap",
             "srnamespace": 6, "srlimit": limit})
    return [m["title"] for m in d.get("query", {}).get("search", [])]

def info(titles):
    out = []
    for i in range(0, len(titles), 20):
        d = api({"action": "query", "titles": "|".join(titles[i:i+20]), "prop": "imageinfo",
                 "iiprop": "url|extmetadata|size", "iiurlwidth": 1800})
        for p in d.get("query", {}).get("pages", {}).values():
            ii = (p.get("imageinfo") or [{}])[0]
            if not ii: continue
            em = ii.get("extmetadata", {})
            out.append({
                "title": p["title"],
                "url": ii.get("thumburl") or ii.get("url"),
                "descurl": ii.get("descriptionurl"),
                "w": ii.get("width"), "h": ii.get("height"),
                "license": em.get("LicenseShortName", {}).get("value", "?"),
                "artist": em.get("Artist", {}).get("value", "?"),
            })
    return out

if __name__ == "__main__":
    titles = []
    for c in ["Zpívající fontána (Mariánské Lázně)"]:
        titles += members(c)
    for q in ["Mariánské Lázně kolonáda", "Marienbad Kolonnade", "Mariánské Lázně Singing Fountain",
              "Marienbad Casino Mariánské Lázně", "Mariánské Lázně colonnade interior"]:
        titles += search(q)
    titles = list(dict.fromkeys(titles))
    print(len(titles), "kandidátů")
    json.dump(info(titles), open("refs.json", "w"), ensure_ascii=False, indent=1)
    print("uloženo refs.json")
