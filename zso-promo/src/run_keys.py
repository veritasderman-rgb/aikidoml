import os
from concurrent.futures import ThreadPoolExecutor
from gen import image, rp
from shots import SHOTS
os.makedirs(rp("key"), exist_ok=True)
def run(s):
    sid, prompt, refs = s
    try:
        return image(prompt, rp("key", f"{sid}.png"), refs=refs, aspect="16:9", size="2K")
    except Exception as e:
        print("SELHALO", sid, type(e).__name__, str(e)[:120], flush=True)
        return False
with ThreadPoolExecutor(max_workers=4) as ex:
    list(ex.map(run, SHOTS))
