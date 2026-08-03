# Kreativy – jak vznikly a jak je změnit

```
creatives/
├── src/
│   ├── creatives.html    ← zdroj všech statických vizuálů (jeden blok .canvas = jeden soubor)
│   ├── render.mjs        ← vyrenderuje bloky do PNG (Playwright + Chromium)
│   └── build-reels.sh    ← sestaví reels z klipů, textových vrstev a hudby (ffmpeg)
└── build/
    ├── *.png             ← hotové reklamy, plakát, koncová karta, textové vrstvy
    ├── bg/               ← podkladové fotky (vygenerované)
    └── video/
        ├── *.mp4         ← hotové reels
        └── source/       ← surové klipy bez textu + hudební podkres
```

## Změna textu ve vizuálu

1. Otevřete `src/creatives.html` a upravte text v příslušném bloku `<div class="canvas" data-name="…">`.
   Soubor jde otevřít i normálně v prohlížeči – uvidíte všechny vizuály pod sebou.
2. Přegenerujte:

```bash
cd marketing/creatives/src
npm i playwright          # jednorázově
node render.mjs
```

Když má prostředí Chromium jinde než Playwright, předejte cestu:
`CHROME_PATH=/cesta/k/chrome node render.mjs`.

## Změna reelsů

```bash
cd marketing/creatives/src
bash build-reels.sh       # potřebuje ffmpeg a předtím vyrenderované PNG
```

Pořadí klipů, délku koncové karty i hlasitost hudby najdete přímo v `build-reels.sh`.
Textové vrstvy do videa jsou bloky `data-name="ov-*"` v `creatives.html` – renderují se
s průhledným pozadím a ve videu se plynule objeví a zmizí.

## Nový formát

Přidejte do `creatives.html` další blok:

```html
<div class="canvas c-1x1" data-name="nazev-souboru">…</div>
```

`render.mjs` si ho najde sám, rozměr si vezme z CSS třídy. Pro průhledné pozadí přidejte
`data-transparent="1"`.

## Čím to bylo vygenerováno

| Vrstva | Nástroj |
|---|---|
| Podkladové fotky (`build/bg/`) | Gemini `gemini-3-pro-image` (Nano Banana Pro), 2K |
| Videoklipy (`build/video/source/clip-*.mp4`) | Gemini `veo-3.1-fast-generate-preview`, 9:16, 8 s |
| Hudba (`build/video/source/hudba.mp3`) | Gemini `lyria-3-clip-preview` |
| Sazba, texty, kompozice | HTML + CSS v `src/creatives.html`, render přes Playwright |
| Střih, titulky, mix zvuku | ffmpeg (`src/build-reels.sh`) |

Veškerá typografie je sázená v HTML, ne generovaná modelem – české texty tak mají zaručeně správnou
diakritiku a dají se kdykoli přepsat bez regenerování obrázků.

Soubor `build/bg/poster_text_4x5.jpg` je navíc plakát vygenerovaný celý modelem včetně textu –
je tam jako alternativa, ale pro produkci používejte sázené vizuály.

**Klipy a fotky nejsou záběry z BUDO CLUBu.** Jde o generovanou atmosféru v duchu webu.
Kde to jde, dávejte přednost skutečným fotkám klubu.
