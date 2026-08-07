# V MARIÁNKÁCH TU HUDBU PROSTĚ UMÍME

Promo spot ZSO Mariánské Lázně · mockumentary · stopáž 90–110 s · bez komentáře, jen ruch a hudba

---

## Stav generování

**Všech 22 klipů hotových.**

| Záběry | Model | Rozlišení | Délka |
|---|---|---|---|
| 1–7 | Veo 3.1 fast | 1280×720 | 8 s |
| 8–10, 12–17 | Veo 3.1 standard | 1280×720 | 8 s |
| 11, 18–22 | Kling v2.1 (image-to-video) | 1928×1076 | 5 s (20 má 10 s) |

Šest posledních vzniklo na Klingu, protože kvóta Gemini na video byla vyčerpaná.
Obraz drží pohromadě, protože všechny klipy startují ze stejných keyframů — mění se
jen kdo dopočítal pohyb.

**Ve střižně:** klipy z Klingu jsou větší a kratší než ty z Vea. Sekvenci nastavte na
1920×1080 a menší klipy se dotáhnou. Podle stopáže v shot listu z nich stejně použijete
4–5 s, takže kratší délka nevadí.

## Shot list

Každý řádek = jeden vygenerovaný klip 8 s, 16:9, 720p. Soubory v `clips/`, výchozí snímek v `key/`.
Sloupec „stopáž" je návrh, kolik z klipu použít ve střihu — proto je součet kratší než 22 × 8 s.

| # | Soubor | Scéna | Obsah | Stopáž |
|---|---|---|---|---|
| 1 | `01-zastavka-prijezd` | 1 | Prázdná zastávka za svítání, přijíždí autobus | 3 s |
| 2 | `02-zastavka-vystup` | 1 | Hudebník vystupuje, pára od úst, autobus odjíždí | 4 s |
| 3 | `03-zastavka-ticho` | 1 | Zastávka po odjezdu, displej 05:12, ticho | 2 s |
| 4 | `04-kopec-chuze` | 1 | Odchází do kopce, lampy ještě svítí | 3 s |
| 5 | `05-casino-fasada` | 2 | Casino v prvním růžovém světle, nikde ani noha | 3 s |
| 6 | `06-casino-vstup` | 2 | Mine hlavní vchod, odemyká služební, teplé světlo | 4 s |
| 7 | `07-satna-sako` | 3 | Ruka sundává frak z ramínka, prsty po klopě | 1,5 s |
| 8 | `08-satna-motylek` | 3 | Motýlek v zrcadle, jemné doladění | 1,5 s |
| 9 | `09-satna-kalafuna` | 3 | Smyčec přes kalafunu, prach ve světle | 1,5 s |
| 10 | `10-satna-zrcadlo` | 3 | Ve fraku v zrcadle, vzpřímí se. Termoska na lavici | 3 s |
| 11 | `11-chodba-sbihani` | 4 | Podzemní chodba, sbíhají se hudebníci s nástroji | 5 s |
| 12 | `12-cedule` | 4 | Cedule VSTUP JEN PRO POVĚŘENÉ OSOBY / A ORCHESTR | 2 s |
| 13 | `13-tunel-sestup` | 5 | Sestup do servisního tunelu pod fontánou | 4 s |
| 14 | `14-tunel-dvere` | 5 | Zavřou se těžké dveře. Cvak. Držet 2 s | 3 s |
| 15 | `15-fontana-den` | 6 | Fontána naplno, plný kruh lidí, slunce | 6 s |
| 16 | `16-kolonada-shora` | 6 | Široký záběr shora na kolonádu a fontánu | 4 s |
| 17 | `17-fontana-noc` | 8 | Noční finále, barevná světla, proudy klesají | 7 s |
| 18 | `18-hladina-kapka` | 9 | Nehybná hladina, odraz kolonády, jedna kapka | 5 s |
| 19 | `19-dvere-vychod-noc` | 10 | Hudebníci vycházejí do noci, unavení, ponožka | 5 s |
| 20 | `20-babicka-reditel` | 10 | Babička zastaví ředitele Smutného | 8 s |
| 21 | `21-babicka-otoceni` | 10 | Zůstane stát, otočí se zpátky k fontáně | 4 s |
| 22 | `22-hladina-final` | 11 | Hladina, tři tóny zezdola, sotva znatelné zavlnění | 5 s |

**Titulek (7)** a **závěrečný titulek (11)** nejsou generované — vysadíte je ve střihu:

```
KAŽDÉ 2 HODINY
        · Ano, i v neděli. Ano, i v tom vedru.
```
Velký titulek naskočí, drží — a teprve pak naskočí ta malá řádka. Ta pauza je celý fór.

```
ZÁPADOČESKÝ SYMFONICKÝ ORCHESTR MARIÁNSKÉ LÁZNĚ
Živě. Odjakživa.
```

---

## Co musíte dodělat vy

**Dialog.** Klip 20 je němý — Veo neumí spolehlivě česky a stejně by to znělo špatně. Repliky nadabujte:

> **BABIČKA:** Pane Smutný! To bylo hrozně krásný, moc. *(zaváhá, ztiší hlas)* Ale řekněte mi… jak děláte toho Gotta? Kdo vám ho zpívá?
>
> **ŘEDITEL SMUTNÝ:** To víte, paní… v Mariánkách tu hudbu prostě umíme.

Ředitel to říká jako věcnou informaci, ne jako pointu. Ani mrknutí do kamery.

**Zvuk.** Prvních zhruba 35 vteřin žádná hudba — autobus, kroky, kalafuna, drhnoucí kolečko vozíku. První hudba přijde až ve chvíli, kdy se zavřou dveře tunelu (klip 14). Kontrast je pointa. Klipy mají vlastní generovaný ruch, ale počítejte s tím, že si zvuk stejně poskládáte znovu.

**Mokré detaily** dávkovat opatrně — jedna ponožka, jeden deštník, jedny vlasy. Když jich bude víc, fór se rozpadne na gag.

---

## Návrh střihové stopáže

| Blok | Klipy | Délka | Tempo |
|---|---|---|---|
| Ráno | 1–14 | ~35 s | Rychle, střih na střih, bez hudby |
| Náraz | 15–16 + titulek | ~15 s | Fontána jako rána z děla |
| Nádech | 17–18 | ~20 s | Zpomalit, nechat dýchat |
| Dialog | 19–21 | ~25 s | Klid, herectví |
| Dozvuk | 22 + titulek | ~10 s | Ticho a tři tóny |

Celkem ~105 s.
