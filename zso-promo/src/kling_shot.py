"""Udělá z jednoho obrázku klip přes Kling (image-to-video).

    export KLING_API_KEY='...'
    python3 zso-promo/src/kling_shot.py <obrázek|URL> <id-záběru> ["popis pohybu"] [délka]

Příklady:

    python3 zso-promo/src/kling_shot.py ~/orchestr.png 23-hraji-pod-kolonadou
    python3 zso-promo/src/kling_shot.py https://.../orchestr.png 23-hraji-pod-kolonadou "" 10

Výstup jde do zso-promo/clips/. Hotové soubory přeskakuje.
Kling omezuje počet souběžných úloh (kód 1303) — skript v tom případě čeká a zkouší znovu.
"""
import base64
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

KEY = os.environ.get("KLING_API_KEY") or sys.exit("Chybí KLING_API_KEY.")
HOST = os.environ.get("KLING_HOST", "https://api-singapore.klingai.com")
MODEL = os.environ.get("KLING_MODEL", "kling-v2-1")
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "clips"

# Výchozí pohyb pro záběr „orchestr hraje pod kolonádou“.
POHYB = ("The orchestra is playing: bows moving together, the conductor's hands marking the beat, "
         "sheet music pages lit by work lamps, condensation on the concrete. Everyone treats it as an "
         "ordinary shift — nobody performs for the camera. Slow steady dolly forward down the tunnel.")

NEG = ("text, captions, subtitles, watermark, logo, distorted faces, extra limbs, extra fingers, "
       "cartoon, anime, 3d render, video game, oversaturated colours, slow motion, speed ramp, "
       "stage lighting, concert hall, audience, applause, people looking at camera")


def api(path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    h = {"Authorization": f"Bearer {KEY}"}
    if data:
        h["Content-Type"] = "application/json"
    req = urllib.request.Request(HOST + path, data=data, headers=h,
                                 method="POST" if data else "GET")
    try:
        return json.loads(urllib.request.urlopen(req, timeout=180).read())
    except urllib.error.HTTPError as e:
        return {"_http": e.code, "_body": e.read().decode()[:400]}


def source(arg):
    """Vrátí hodnotu pro pole `image` — URL projde beze změny, soubor se zakóduje."""
    if arg.startswith(("http://", "https://")):
        return arg
    p = Path(arg).expanduser()
    if not p.exists():
        sys.exit(f"Soubor {p} neexistuje.")
    return base64.b64encode(p.read_bytes()).decode()


def run(image_arg, sid, prompt, seconds):
    dst = OUT / f"{sid}.mp4"
    if dst.exists():
        print("skip", dst.name)
        return
    OUT.mkdir(parents=True, exist_ok=True)
    body = {"model_name": MODEL, "image": source(image_arg), "prompt": prompt[:2400],
            "negative_prompt": NEG[:2400], "cfg_scale": 0.5, "mode": "pro",
            "duration": str(seconds)}
    task = None
    for attempt in range(20):
        r = api("/v1/videos/image2video", body)
        if r.get("code") == 0:
            task = r["data"]["task_id"]
            break
        blob = json.dumps(r)
        if "1303" in blob or "parallel task" in blob:
            print(f"  plno, čekám 60 s ({attempt + 1}/20)", flush=True)
            time.sleep(60)
            continue
        sys.exit(f"Kling odmítl: {blob[:300]}")
    if not task:
        sys.exit("Nepodařilo se úlohu zadat, sloty zůstaly plné.")

    t0 = time.time()
    while time.time() - t0 < 1800:
        d = (api(f"/v1/videos/image2video/{task}").get("data") or {})
        st = d.get("task_status")
        if st == "succeed":
            url = d["task_result"]["videos"][0]["url"]
            dst.write_bytes(urllib.request.urlopen(url, timeout=900).read())
            print(f"OK {dst}  {dst.stat().st_size // 1024} kB")
            return
        if st == "failed":
            sys.exit(f"Generování selhalo: {d.get('task_status_msg')}")
        time.sleep(15)
    sys.exit("Vypršel čas čekání.")


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    img, sid = sys.argv[1], sys.argv[2]
    prompt = (sys.argv[3] if len(sys.argv) > 3 and sys.argv[3] else POHYB)
    secs = int(sys.argv[4]) if len(sys.argv) > 4 else 5
    run(img, sid, prompt, secs)
