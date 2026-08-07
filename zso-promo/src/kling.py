"""Dogeneruje klipy promo spotu přes Kling (image-to-video z keyframu).

    export KLING_API_KEY='...'
    python3 zso-promo/src/kling.py                  # všechny chybějící
    python3 zso-promo/src/kling.py 20-babicka-reditel   # jen vybrané

Keyframe bere jako .jpg i .png, hotové klipy přeskakuje. Kling omezuje počet
souběžných úloh (kód 1303) – při plném slotu prostě chvíli počkejte a spusťte znovu.
"""
import base64, json, os, sys, time, urllib.error, urllib.request
from pathlib import Path

KEY = os.environ["KLING_API_KEY"]
HOST = os.environ.get("KLING_HOST", "https://api-singapore.klingai.com")
REPO = Path(__file__).resolve().parent.parent
OUT = REPO / "clips"
OUT.mkdir(exist_ok=True)

def api(path, body=None, method=None):
    data = json.dumps(body).encode() if body is not None else None
    h = {"Authorization": f"Bearer {KEY}"}
    if data: h["Content-Type"] = "application/json"
    req = urllib.request.Request(HOST + path, data=data, headers=h,
                                 method=method or ("POST" if data else "GET"))
    try:
        return json.loads(urllib.request.urlopen(req, timeout=180).read())
    except urllib.error.HTTPError as e:
        return {"_http": e.code, "_body": e.read().decode()[:400]}

def keyframe(sid):
    for ext in ("jpg", "png", "jpeg"):
        p = REPO / "key" / f"{sid}.{ext}"
        if p.exists(): return p
    raise SystemExit(f"keyframe {sid} nenalezen")

def submit(sid, prompt, negative, seconds, model):
    img = base64.b64encode(keyframe(sid).read_bytes()).decode()
    body = {"model_name": model, "image": img, "prompt": prompt[:2400],
            "negative_prompt": negative[:2400], "cfg_scale": 0.5,
            "mode": "pro", "duration": str(seconds)}
    r = api("/v1/videos/image2video", body)
    if r.get("code") == 0:
        return r["data"]["task_id"]
    print(f"  submit {sid}: {json.dumps(r)[:220]}", flush=True)
    return None

def poll(task_id, sid, timeout=1500):
    t0 = time.time()
    while time.time() - t0 < timeout:
        r = api(f"/v1/videos/image2video/{task_id}")
        d = r.get("data") or {}
        st = d.get("task_status")
        if st == "succeed":
            url = d["task_result"]["videos"][0]["url"]
            dst = OUT / f"{sid}.mp4"
            dst.write_bytes(urllib.request.urlopen(url, timeout=900).read())
            print(f"OK   {sid}.mp4  {dst.stat().st_size//1024} kB", flush=True)
            return True
        if st == "failed":
            print(f"FAIL {sid}: {d.get('task_status_msg')}", flush=True); return False
        time.sleep(15)
    print(f"TIMEOUT {sid}", flush=True); return False

if __name__ == "__main__":
    sys.path.insert(0, str(REPO / "src"))
    os.environ.setdefault("GKEY", "unused")
    from shots import MOTION, NEG
    JOBS = [(s, 10 if s == "20-babicka-reditel" else 5) for s in [
        "11-chodba-sbihani", "18-hladina-kapka", "19-dvere-vychod-noc",
        "20-babicka-reditel", "21-babicka-otoceni", "22-hladina-final"]]
    only = sys.argv[1:] or None
    model = os.environ.get("KLING_MODEL", "kling-v2-1")
    for sid, secs in JOBS:
        if only and sid not in only: continue
        if (OUT / f"{sid}.mp4").exists():
            print("skip", sid); continue
        tid = submit(sid, MOTION[sid], NEG, secs, model)
        if tid: poll(tid, sid)
