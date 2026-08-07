import os
from concurrent.futures import ThreadPoolExecutor
from gen import video, rp, asset
from shots import SHOTS, MOTION, NEG

os.makedirs(rp("clips"), exist_ok=True)
STYLE = ("Live-action cinematic footage, 35mm film look, natural light, muted desaturated palette, "
         "fine film grain. Real-time speed. ")

def run(s):
    sid = s[0]
    try:
        return video(STYLE + MOTION[sid], rp("clips", f"{sid}.mp4"),
                     first_frame=asset("key", sid), seconds=8, aspect="16:9", negative=NEG)
    except Exception as e:
        print("SELHALO", sid, type(e).__name__, str(e)[:140], flush=True)
        return False

with ThreadPoolExecutor(max_workers=2) as ex:
    list(ex.map(run, SHOTS))
print("HOTOVO", len(os.listdir(rp("clips"))), "klipů")
