"""Vygeneruje zvukovou stopu k promo spotu přes ElevenLabs.

    export ELEVEN_API_KEY='sk_...'            # POZOR: klíč, ne ID klíče
    python3 zso-promo/src/audio.py --list-voices
    python3 zso-promo/src/audio.py            # vyrobí vše do zso-promo/audio/

Hotové soubory přeskakuje, takže opakované spuštění dodělá jen to, co chybí.
Hlasy se vybírají automaticky podle štítků; přebít je jde přes VOICE_BABICKA
a VOICE_REDITEL (ID hlasu).

Obsah a režijní poznámky jsou v ZVUK.md — hlavně ta o tom, že hudba je jen
dočasná stopa pro střih a ve finále patří nahrávka samotného orchestru.
"""
import json
import os
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

API = "https://api.elevenlabs.io/v1"
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "audio"


def key():
    k = os.environ.get("ELEVEN_API_KEY", "")
    if not k:
        sys.exit("Chybí ELEVEN_API_KEY.")
    if not k.startswith("sk_"):
        sys.exit(
            "ELEVEN_API_KEY nevypadá jako klíč. Skutečný klíč začíná 'sk_' a zobrazí se\n"
            "jen při vytvoření nebo rotaci — hodnota vypsaná v seznamu klíčů je jen jejich ID."
        )
    return k


def _req(path, body=None, method=None, accept="application/json"):
    url = f"{API}{path}"
    data = json.dumps(body).encode() if body is not None else None
    headers = {"xi-api-key": key(), "Accept": accept}
    if data:
        headers["Content-Type"] = "application/json"
    return urllib.request.Request(url, data=data, headers=headers,
                                  method=method or ("POST" if data else "GET"))


def _call(req, out=None, tries=4):
    """Vrátí bajty (když out=None) nebo je uloží. Retry na 429 a 5xx."""
    for t in range(tries):
        try:
            with urllib.request.urlopen(req, timeout=600) as r:
                payload = r.read()
            if out:
                Path(out).write_bytes(payload)
            return payload
        except urllib.error.HTTPError as e:
            body = e.read().decode()[:300]
            if e.code in (429, 500, 502, 503):
                wait = min(120, 10 * (2 ** t))
                print(f"  RATE {e.code}, čekám {wait}s", flush=True)
                time.sleep(wait)
                continue
            print(f"  HTTP {e.code}: {body}", flush=True)
            return None
        except Exception as e:
            print(f"  SÍŤ {type(e).__name__}: {str(e)[:120]}", flush=True)
            time.sleep(10 * (t + 1))
    return None


# Klíče se starter tierem typicky nemají oprávnění `voices_read`, takže seznam hlasů
# nenačítáme — používáme veřejné hlasy dostupné každému účtu. Přebít jde přes
# VOICE_BABICKA / VOICE_REDITEL (ID hlasu).
#
# Pozor: všechny tyhle hlasy jsou trénované na angličtině. Češtinu multilingual model
# zvládne, ale s lehkým přízvukem. Proto generujeme varianty od tří hlasů — vyberte
# nejmíň rušivou. Skutečná nahrávka dvou lidí u mikrofonu bude vždycky lepší.
# Hlasy vybrané ze seznamu na účtu. Účet nemá žádný ženský hlas označený jako starší,
# takže pro babičku generujeme varianty od čtyř hlasů a vybírá se poslechem:
#   katty   – jediný ženský hlas se standardní (nikoli anglickou) výslovností, ale mladý
#   matilda – teplý, zralý, americký přízvuk v češtině slyšet je
#   alice   – britský, klidný, věcný
#   lily    – herecký, nejvíc výrazu
# Ředitel má českého Karla, což je jasná volba; bill a george jsou záloha.
# Přebít výběr jde přes VOICE_BABICKA / VOICE_REDITEL.
HLASY_ZENA = [("katty",   "7JbZPqJGWUfXXBim0T8U"),
              ("matilda", "XrExE9yKIg1WjnnlVkGX"),
              ("alice",   "Xb7hH8MSUJpSbSDYk0k2"),
              ("lily",    "pFZP5JQG7iQjIQuC4Bku")]
HLASY_MUZ  = [("karel",   "pt8Kvp57SW3o4WuGqWZG"),
              ("bill",    "pqHfZKP75CvOlQylNhV4"),
              ("george",  "JBFqnCBsd6RMkjVDRZzb")]


def voices():
    """Jen pro --list-voices; vyžaduje oprávnění voices_read."""
    raw = _call(_req("/voices"))
    return json.loads(raw)["voices"] if raw else []


def tts(text, voice_id, out, model="eleven_multilingual_v2", stability=0.5, style=0.0):
    if Path(out).exists():
        print("skip", Path(out).name)
        return True
    body = {
        "text": text,
        "model_id": model,
        "voice_settings": {"stability": stability, "similarity_boost": 0.75,
                           "style": style, "use_speaker_boost": True},
    }
    req = _req(f"/text-to-speech/{voice_id}", body, accept="audio/mpeg")
    ok = _call(req, out)
    print(("OK   " if ok else "CHYBA ") + Path(out).name, flush=True)
    return bool(ok)


def sfx(prompt, out, seconds=8.0, influence=0.4):
    if Path(out).exists():
        print("skip", Path(out).name)
        return True
    body = {"text": prompt, "duration_seconds": seconds, "prompt_influence": influence}
    ok = _call(_req("/sound-generation", body, accept="audio/mpeg"), out)
    print(("OK   " if ok else "CHYBA ") + Path(out).name, flush=True)
    return bool(ok)


def music(prompt, out, ms=20000):
    if Path(out).exists():
        print("skip", Path(out).name)
        return True
    body = {"prompt": prompt, "music_length_ms": ms}
    ok = _call(_req("/music", body, accept="audio/mpeg"), out)
    print(("OK   " if ok else "CHYBA ") + Path(out).name, flush=True)
    return bool(ok)


# --- Repliky -----------------------------------------------------------------
# Generujeme po třech variantách, ať je z čeho vybírat. Viz režijní poznámky v ZVUK.md.
BABICKA = ("Pane Smutný! To bylo hrozně krásný, moc. "
           "Ale řekněte mi... jak děláte toho Gotta? Kdo vám ho zpívá?")
REDITEL = "To víte, paní... v Mariánkách tu hudbu prostě umíme."

# --- Ruchy, mapované na klipy ------------------------------------------------
SFX = [
    ("01-autobus-prijezd", "A city bus pulls up to an empty bus stop on a wet road at dawn, air brakes hissing, doors folding open. Distant, quiet town.", 8),
    ("02-vystup-odjezd", "Footsteps on wet asphalt, a latch clicking on a hard instrument case, bus doors folding shut, the bus pulling away into the distance.", 8),
    ("03-ulice-svitani", "Empty small-town street before sunrise: total stillness, one blackbird, a refuse truck two streets away, no traffic.", 12),
    ("04-kroky-do-kopce", "Lone footsteps climbing a cobbled street between tall buildings before dawn, faint echo, no traffic.", 10),
    ("06-klice-dvere", "Footsteps on stone steps, a key turning in an old lock, a heavy wooden door swinging open into a resonant interior.", 6),
    ("07-sako", "Cloth rustling as a formal jacket is lifted off a wooden hanger, the empty hanger chiming faintly against a metal rail.", 4),
    ("08-satna-ticho", "Quiet backstage dressing room tone, muffled footsteps behind a door, one faint metallic clink.", 4),
    ("09-kalafuna", "A violin bow drawn twice across a cake of rosin, dry granular friction, very close and intimate.", 4),
    ("11-chodba", "Several people walking down a bare underground service corridor, a squeaking trolley wheel, instrument cases knocking, low murmured voices, hard reverb.", 12),
    ("13-tunel", "Concrete service tunnel under a fountain: dripping condensation, hollow echoing footsteps, the muffled rush of water somewhere overhead.", 12),
    ("14-dvere-cvak", "A heavy steel door pulled shut and sealing with a solid clank, then complete silence.", 6),
    ("15-fontana-den", "A large ornamental fountain at full performance in summer: jets surging, water crashing onto the basin, a crowd of people, children, camera shutters.", 12),
    ("17-fontana-noc", "A large fountain's final performance ending at night: jets falling away one by one, water settling, the last splashes fading out.", 12),
    ("18-kapka", "Absolute silence, then one single water drop striking a perfectly still pool, with a long delicate ring.", 6),
    ("19-noc-rozchod", "Night by a fountain: applause fading, people getting up and dispersing, footsteps on stone, a door latch clicking.", 10),
    ("21-prazdne-prostranstvi", "An empty town square at night, distant footsteps walking away, the faint hush of water.", 8),
    ("22-tri-tony", "Three very deep, muffled orchestral tones heard from underneath water, almost below the threshold of hearing, then stillness.", 8),
]

# --- Hudba – POUZE dočasná stopa pro střih, viz ZVUK.md ----------------------
MUSIC = [
    ("M1-ladeni-prvni-akord",
     "An orchestra tuning up, heard faintly through concrete from below ground, resolving into one warm sustained string chord. Muffled, distant, mysterious.", 8000),
    ("M2-fontana-tutti",
     "Bright confident orchestral tutti in a romantic spa-town waltz idiom, strings and brass, sunlit and generous, no percussion excess.", 20000),
    ("M3-nocni-finale",
     "The same romantic orchestral theme, now slower and in a minor key, strings carrying it, gradually thinning out and fading to nothing. Elegiac.", 22000),
    ("M4-tri-tony",
     "Three isolated very deep orchestral tones, low strings and timpani, heard as if from far below water, with long silence between them.", 8000),
]


def main():
    if "--list-voices" in sys.argv:
        for v in voices():
            lab = v.get("labels") or {}
            print(f'{v["voice_id"]:<24} {v["name"][:22]:<22} '
                  f'{lab.get("gender","?"):<8} {lab.get("age","?"):<12} {lab.get("accent","")}')
        return

    OUT.mkdir(parents=True, exist_ok=True)

    zeny = [(n, os.environ.get("VOICE_BABICKA") or v) for n, v in HLASY_ZENA]
    muzi = [(n, os.environ.get("VOICE_REDITEL") or v) for n, v in HLASY_MUZ]

    print("— voiceover —")
    # Nižší stabilita = víc výrazu. Babička potřebuje teplo a mírné zaváhání,
    # ředitel naopak klid a věcnost, proto má stabilitu vyšší a styl skoro nulový.
    for name, vid in zeny:
        tts(BABICKA, vid, OUT / f"vo-babicka-{name}.mp3", stability=0.40, style=0.20)
    for name, vid in muzi:
        tts(REDITEL, vid, OUT / f"vo-reditel-{name}.mp3", stability=0.60, style=0.05)

    print("\n— ruchy —")
    for name, prompt, secs in SFX:
        sfx(prompt, OUT / f"sfx-{name}.mp3", seconds=secs)

    print("\n— hudba (dočasná stopa, ve finále nahradit nahrávkou ZSO) —")
    for name, prompt, ms in MUSIC:
        music(prompt, OUT / f"hudba-{name}.mp3", ms=ms)

    print(f"\nHotovo → {OUT}")


if __name__ == "__main__":
    main()
