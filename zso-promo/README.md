# Promo spot ZSO Mariánské Lázně

Jednotlivé záběry k promo spotu **„V Mariánkách tu hudbu prostě umíme"** pro Západočeský symfonický
orchestr Mariánské Lázně. Klipy jsou syrový materiál pro střih — nejsou sestříhané, nejsou barevně
sladěné do finálu a nemají finální zvuk.

> **Tenhle projekt nesouvisí se zbytkem repozitáře.** Leží tu jen proto, že potřeboval místo v gitu.

## Co tu je

```
zso-promo/
├── SCENAR.md      ← scénář, shot list, návrh střihové stopáže, co dodělat
├── ATRIBUCE.md    ← licence referenčních fotek z Wikimedia Commons
├── clips/         ← 22 klipů, 8 s, 1280×720, 16:9  ← tohle chcete
├── key/           ← výchozí snímek každého klipu (2752×1536)
├── char/          ← charakterové listy postav
├── ref/           ← referenční fotky kolonády, fontány a Casina
└── src/           ← skripty, kterými to vzniklo
```

## Jak se držela obrazová konzistence

Generovat 22 klipů nezávisle na sobě nefunguje — každý by měl jinou tvář, jinou kolonádu a jiný grade.
Proto to šlo ve třech krocích:

1. **Charakterové listy** (`char/`) — hudebník v civilu, tentýž ve fraku, ředitel Smutný, babička.
   Každá postava jednou, ve více pohledech, na neutrálním pozadí.
2. **Keyframy** (`key/`) — ke každému záběru jeden statický snímek, generovaný s referencemi:
   charakterový list pro postavu, skutečná fotka z Commons pro architekturu, a jeden pevný odstavec
   „look" (35mm, přirozené světlo, tlumená paleta, filmové zrno) použitý ve všech promptech.
3. **Video** (`clips/`) — každý klip startuje ze svého keyframu jako z prvního snímku, prompt popisuje
   už jen pohyb kamery a hereckou akci.

Díky kroku 3 klipy nedriftují: tvář, kostým, architektura i barevnost jsou dané snímkem, ne náhodou.

## Přegenerování

```bash
export GKEY='<váš Gemini API klíč>'
python3 zso-promo/src/chars.py       # charakterové listy (jen když měníte casting)
python3 zso-promo/src/run_keys.py    # keyframy — hotové soubory přeskočí
python3 zso-promo/src/run_clips.py   # klipy z keyframů
```

Skripty si cesty odvozují od kořene projektu, ne od adresáře, ze kterého je pustíte — je jedno,
odkud je voláte, reference i výstupy vždy sedí do `zso-promo/`.

Keyframy jsou v repu uložené jako `.jpg` (kvůli velikosti), čerstvě vygenerované jsou `.png`.
Skripty berou obojí, takže klipy jde generovat rovnou z čerstvého klonu bez přegenerovávání keyframů.

Když chcete přegenerovat jeden záběr, smažte jeho soubor a skript ho vyrobí znovu; ostatní nechá být.
Texty promptů jsou v `src/shots.py` — `SHOTS` drží popis obrazu pro keyframe, `MOTION` popis pohybu pro video.

Potřebné balíčky: `Pillow` (jen pro `chars.py`/zmenšování), jinak vystačí standardní knihovna.

## Čím to bylo vygenerováno

| Vrstva | Model |
|---|---|
| Charakterové listy a keyframy | Gemini `gemini-3-pro-image` (Nano Banana Pro), 2K |
| Video | Gemini Veo 3.1, 8 s, 720p, image-to-video |

`run_clips.py` používá ve výchozím stavu `veo-3.1-generate-preview` (standard). Přepnout jde
proměnnou `VEO_MODEL` — když na standardu dojde kvóta (`429 RESOURCE_EXHAUSTED`), zkuste
`veo-3.1-fast-generate-preview` a pak `veo-3.1-lite-generate-preview`:

```bash
VEO_MODEL=veo-3.1-fast-generate-preview python3 zso-promo/src/run_clips.py
```

Hotové klipy vznikly zčásti na fast (záběry 1–7) a zčásti na standardu (8–17), jak během
generování docházely kvóty. Rozdíl v obraze není znát — look drží keyframe, ze kterého video startuje.

## Co je potřeba vědět před použitím

**Klipy jsou generované, ne natočené.** Architektura vychází z reálných fotek Mariánských Lázní a je jim
velmi blízká, ale není to dokumentární záznam — detaily fasád, počty oken a rozmístění laviček nesedí
přesně. Pro promo spot to nevadí, pro cokoli, co se tváří jako dokument, ano.

**Lidé v záběrech jsou vygenerovaní.** Nikoho neportrétují a nikdo z nich neexistuje. Pokud spot půjde
ven, počítejte s tím, že by měl někde být uvedený původ obrazu — pravidla platforem i evropská regulace
označování AI obsahu se posouvají a je jednodušší to mít od začátku.

**Zvuk klipů je generovaný a nepoužitelný do finálu.** Počítá se s tím, že si ruch i hudbu poskládáte
znovu — viz `SCENAR.md`.

**Dialog v klipu 20 chybí.** Veo neumí spolehlivě česky. Repliky babičky a ředitele Smutného jsou
v `SCENAR.md` k nadabování.
