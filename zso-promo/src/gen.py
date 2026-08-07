import base64, json, os, sys, time, urllib.error, urllib.request
from pathlib import Path

# Kořen projektu (zso-promo/), ne aktuální adresář – skripty tak fungují,
# ať je pustíte odkudkoli.
ROOT = Path(__file__).resolve().parent.parent


def rp(*parts):
    """Cesta relativní ke kořeni projektu."""
    return str(ROOT.joinpath(*parts))


def asset(subdir, stem):
    """Najde soubor bez ohledu na příponu – v repu jsou keyframy a postavy
    uložené jako .jpg, čerstvě vygenerované jsou .png."""
    for ext in ("png", "jpg", "jpeg"):
        cand = ROOT / subdir / f"{stem}.{ext}"
        if cand.exists():
            return str(cand)
    return str(ROOT / subdir / f"{stem}.png")

KEY = os.environ["GKEY"]
BASE = "https://generativelanguage.googleapis.com/v1beta"

LOOK = ("Cinematic 16:9 film still, shot on 35mm with a fast prime, shallow depth of field, "
        "natural available light only, muted desaturated palette — cool teal-blue shadows against warm amber "
        "practical lights, fine organic film grain, gentle halation, no colour banding. "
        "Grounded documentary realism, contemporary Czech spa town. Photoreal, not illustrated. ")

NOTEXT = " No captions, no subtitles, no watermark, no logos."

def _post(url, body, timeout=600):
    req = urllib.request.Request(url, data=json.dumps(body).encode(),
                                 headers={"Content-Type": "application/json"})
    return json.loads(urllib.request.urlopen(req, timeout=timeout).read())

def b64(path):
    return base64.b64encode(open(path, "rb").read()).decode()

def image(prompt, out, refs=(), aspect="16:9", size="2K", model="gemini-3-pro-image", tries=5):
    if os.path.exists(out):
        print("skip", out); return True
    parts = [{"text": prompt}]
    for r in refs:
        mime = "image/png" if r.endswith(".png") else "image/jpeg"
        parts.append({"inline_data": {"mime_type": mime, "data": b64(r)}})
    body = {"contents": [{"parts": parts}],
            "generationConfig": {"responseModalities": ["IMAGE"],
                                 "imageConfig": {"aspectRatio": aspect, "imageSize": size}}}
    for t in range(tries):
        try:
            resp = _post(f"{BASE}/models/{model}:generateContent?key={KEY}", body)
            for c in resp.get("candidates", []):
                for p in c.get("content", {}).get("parts", []):
                    d = p.get("inlineData") or p.get("inline_data")
                    if d:
                        open(out, "wb").write(base64.b64decode(d["data"]))
                        print("OK", out, os.path.getsize(out) // 1024, "kB", flush=True)
                        return True
            print("NO IMAGE", out, json.dumps(resp)[:300], flush=True)
        except urllib.error.HTTPError as e:
            print("HTTP", e.code, out, e.read().decode()[:250], flush=True)
        except Exception as e:
            # síťové výpadky (IncompleteRead, timeout, reset) nesmí shodit celý běh
            print("NET", out, type(e).__name__, str(e)[:120], flush=True)
        time.sleep(5 * (t + 1))
    return False

def video(prompt, out, first_frame=None, seconds=8, aspect="16:9",
          model="veo-3.1-fast-generate-preview", negative=None):
    if os.path.exists(out):
        print("skip", out); return True
    inst = {"prompt": prompt}
    if first_frame:
        mime = "image/png" if str(first_frame).lower().endswith(".png") else "image/jpeg"
        inst["image"] = {"bytesBase64Encoded": b64(first_frame), "mimeType": mime}
    params = {"aspectRatio": aspect, "durationSeconds": seconds, "resolution": "720p"}
    if negative:
        params["negativePrompt"] = negative
    op = None
    for t in range(8):
        try:
            op = _post(f"{BASE}/models/{model}:predictLongRunning?key={KEY}",
                       {"instances": [inst], "parameters": params})["name"]
            break
        except urllib.error.HTTPError as e:
            body = e.read().decode()[:200]
            if e.code in (429, 500, 503):
                wait = min(300, 20 * (2 ** t))
                print("RATE", e.code, out, "cekam", wait, flush=True)
                time.sleep(wait); continue
            print("START ERR", out, e.code, body, flush=True); return False
        except Exception as e:
            print("NET start", out, type(e).__name__, str(e)[:100], flush=True)
            time.sleep(20 * (t + 1))
    if not op:
        print("VZDANO", out, flush=True); return False
    t0 = time.time()
    while time.time() - t0 < 1200:
        try:
            o = json.loads(urllib.request.urlopen(f"{BASE}/{op}?key={KEY}", timeout=120).read())
        except Exception:
            time.sleep(10); continue
        if o.get("done"):
            if "error" in o:
                print("FAILED", out, json.dumps(o["error"])[:300], flush=True); return False
            r = o.get("response", {})
            s = (r.get("generateVideoResponse", {}).get("generatedSamples")
                 or r.get("generatedSamples") or r.get("videos") or [])
            if not s:
                print("NO SAMPLES", out, json.dumps(r)[:300], flush=True); return False
            uri = s[0].get("video", {}).get("uri") or s[0].get("uri")
            sep = "&" if "?" in uri else "?"
            open(out, "wb").write(urllib.request.urlopen(f"{uri}{sep}key={KEY}", timeout=900).read())
            print("OK", out, os.path.getsize(out) // 1024, "kB", flush=True)
            return True
        time.sleep(10)
    print("TIMEOUT", out, flush=True); return False
