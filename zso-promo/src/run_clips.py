import os
from concurrent.futures import ThreadPoolExecutor
from gen import video, rp, asset
from shots import SHOTS, MOTION, NEG

os.makedirs(rp("clips"), exist_ok=True)
# Model jde přepnout přes proměnnou VEO_MODEL. Výchozí je standardní veo-3.1 –
# má nejlepší kvalitu pohybu, což se hodí hlavně u záběrů s víc postavami.
# Když na něm dojde kvóta (429 RESOURCE_EXHAUSTED), zkuste v tomhle pořadí:
#   veo-3.1-fast-generate-preview   – rychlejší, levnější, obrazově srovnatelný
#   veo-3.1-lite-generate-preview   – nejlevnější, znatelně slabší pohyb
MODEL = os.environ.get("VEO_MODEL", "veo-3.1-generate-preview")

STYLE = ("Live-action cinematic footage, 35mm film look, natural light, muted desaturated palette, "
         "fine film grain. Real-time speed. ")

def run(s):
    sid = s[0]
    try:
        return video(STYLE + MOTION[sid], rp("clips", f"{sid}.mp4"),
                     first_frame=asset("key", sid), seconds=8, aspect="16:9", negative=NEG, model=MODEL)
    except Exception as e:
        print("SELHALO", sid, type(e).__name__, str(e)[:140], flush=True)
        return False

if __name__ == "__main__":
    with ThreadPoolExecutor(max_workers=2) as ex:
        list(ex.map(run, SHOTS))
    print("HOTOVO", len(os.listdir(rp("clips"))), "klipů")
