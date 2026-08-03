# Kampaň k zahájení sezóny · pátek 4. 9. 2026

Kompletní podklady pro kampaň, jejímž jediným cílem je **dostat co nejvíc lidí na trénink
v pátek 4. září 2026 v 17:30** v BUDO CLUBu v Tyršově ulici.

## Co kde najdete

| Soubor | Obsah |
|---|---|
| [`plan-kampane.md`](plan-kampane.md) | Strategie: publika, struktura kampaní na Facebooku, rozpočty, harmonogram den po dni, měření |
| [`texty/facebook-reklamy.md`](texty/facebook-reklamy.md) | Texty placených reklam – 3 varianty ke každé sadě, včetně nadpisů a tlačítek |
| [`texty/facebook-prispevky.md`](texty/facebook-prispevky.md) | 12 organických příspěvků s datem publikace a přiřazenou kreativou |
| [`texty/reels-scenare.md`](texty/reels-scenare.md) | Popisky k hotovým reelsům + scénáře pro vlastní natáčení na telefon |
| [`texty/dalsi-kanaly.md`](texty/dalsi-kanaly.md) | Popis FB události, odpovědi na časté dotazy, e-mail školám, SMS členům, kam vylepit plakát |
| [`creatives/`](creatives/) | Hotové vizuály a videa + zdrojové soubory, ze kterých se dají přegenerovat |

## Hotové kreativy

**Obrázky** (`creatives/build/`)

| Soubor | Rozměr | Použití |
|---|---|---|
| `ad-hlavni-4x5.png` | 1080×1350 | hlavní reklama do feedu |
| `ad-zacatecnik-4x5.png` | 1080×1350 | reklama na dospělé začátečníky |
| `ad-deti-4x5.png` | 1080×1350 | reklama na rodiče |
| `ad-hlavni-1x1.png` | 1080×1080 | čtvercový post |
| `ad-story-9x16.png` | 1080×1920 | Stories, Reels cover |
| `fb-event-cover.png` | 1920×1005 | cover facebookové události |
| `plakat-a4.png` | 1240×1754 | tisk A4 na nástěnky |
| `endcard-9x16.png` | 1080×1920 | koncová karta videí |
| `ov-*.png` | 1080×1920 | textové vrstvy do videa (průhledné) |

**Videa** (`creatives/build/video/`)

| Soubor | Délka | Použití |
|---|---|---|
| `reel-hlavni.mp4` | 27 s | hlavní reel, i do reklamy |
| `reel-kratky-zacatecnik.mp4` | 11 s | hook do reklamy a Stories |
| `reel-kratky-technika.mp4` | 19 s | organický reel |

## Popup na webu

Popup s pozvánkou je součástí webu (`src/components/CampaignPopup.tsx`). Vyskočí po 6 vteřinách
nebo po odscrollování třetiny stránky, funguje ve všech čtyřech jazykových verzích, jde zavřít
a zavřený se už stejnému člověku neukáže. **Po 4. 9. 2026 v 19:00 se vypne sám** – není potřeba
na nic pamatovat. Termín a texty se mění v `src/config/campaign.ts` a `src/i18n/dictionaries/*/popup.json`.

## Tři věci, které udělejte jako první

1. **Založte facebookovou událost** (text a cover jsou hotové) – dostane od Facebooku připomínku zdarma.
2. **Vytiskněte a vylepte plakát**, hlavně u plaveckého bazénu a zimního stadionu – jsou přes ulici od dódžó.
3. **Napište členům klubu**, ať každý osobně pozve dva lidi. To pořád funguje líp než reklama.

## Poznámka k původu vizuálů

Fotky a videa v `creatives/` jsou vygenerované (Gemini – Nano Banana Pro pro obrazy, Veo 3.1 pro video,
Lyria pro hudbu). **Nejsou to záběry z BUDO CLUBu** a žádný text to netvrdí. Slouží jako atmosférická
vizuální linka do placené reklamy; do organických příspěvků používejte přednostně skutečné fotky klubu
z `public/photos/` a od 5. 9. fotky z prvního tréninku.
