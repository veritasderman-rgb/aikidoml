# Zvuk k promo spotu

Zvuk je u tohohle spotu půlka fóru, proto má vlastní dokument. Vygenerovat ho umí
`src/audio.py` přes ElevenLabs — potřebuje API klíč v `ELEVEN_API_KEY` (klíč začíná `sk_`,
**ne** ID klíče, které se zobrazuje v seznamu).

```bash
export ELEVEN_API_KEY='sk_...'
python3 zso-promo/src/audio.py --list-voices   # výpis hlasů, jednou na začátku
python3 zso-promo/src/audio.py                 # vyrobí všechno do audio/
```

**Hotovo — 28 souborů v `audio/`:** 7 voiceoverů (4 varianty babičky, 3 ředitele),
17 ruchů namapovaných na klipy a 4 hudební cue. Vybírá se poslechem, viz níže.

---

## 1. Hudba — přečtěte si to dřív, než něco vygenerujete

**Tohle je promo symfonického orchestru. Hudba v něm by měla být jejich.**

Vygenerovat orchestrální podkres umělou inteligencí pro spot tělesa, které samo hraje živě,
je věc, kterou nechcete vysvětlovat, až se na to někdo zeptá. Navíc Zpívající fontána má vlastní
repertoár a ZSO má nahrávky — použít je bude znít líp a bude to pravda.

`audio.py` proto hudbu generuje jen jako **dočasnou stopu pro střih** (temp track), abyste měli
podle čeho stříhat, než dostanete finální nahrávku. Ve finále ji nahraďte.

### Hudební osnova

Kontrast je pointa: **prvních zhruba 35 vteřin nehraje nic**. Jen ruch.

| Cue | Kdy | Co | Délka |
|---|---|---|---|
| — | 0:00–0:35 | **ticho**, jen ruch: autobus, kroky, kalafuna, drhnoucí kolečko | 35 s |
| M1 | 0:35 | Zavřou se dveře tunelu → zpod země prosákne ladění orchestru, pak první akord | 8 s |
| M2 | 0:43 | Fontána naplno — orchestrální tutti, jasné, sebevědomé | 20 s |
| M3 | 1:05 | Noční finále — totéž téma pomaleji, v mollu, doznívá s klesající vodou | 22 s |
| — | 1:27–1:50 | pod dialogem hudba mlčí, jen noční ruch a kroky | 23 s |
| M4 | 1:50 | Závěr — tři hluboké tóny zpod hladiny, pak ticho | 8 s |

M1 a M4 jsou dvě strany téhož vtipu: nejdřív zjistíme, že hudba jde zezdola, a nakonec že tam
pořád je. Měly by znít ze stejného nástroje a stejného prostoru.

---

## 2. Voiceover

Jediný mluvený moment ve spotu. Klip `20-babicka-reditel` je němý, repliky se přidávají ve střižně.

### Babička
> Pane Smutný! To bylo hrozně krásný, moc.
> *(zaváhá, ztiší hlas)*
> Ale řekněte mi… jak děláte toho Gotta? Kdo vám ho zpívá?

**Vedení:** Musí to být archetyp, ne karikatura. Laskavá, konkrétní, se sto procenty vážnosti
v hlase. Fór funguje jen tehdy, když se ona vůbec nesnaží být vtipná — ptá se doopravdy a fakt
ji ta odpověď zajímá. Zaváhání před „ale řekněte mi" je půl vteřiny, ne komická pauza.

### Ředitel Smutný
> To víte, paní… v Mariánkách tu hudbu prostě umíme.

**Vedení:** Říká to jako věcnou informaci, ne jako pointu. Klid člověka, který má za sebou
normální den v práci. Ani mrknutí do kamery, žádné pobavení v hlase.

> **Pozn.:** Syntéza tyhle dvě repliky utáhne, ale je to přesně ten typ textu, kde je rozdíl mezi
> „dobrým" a „skvělým" slyšet. Jestli seženete dva lidi k mikrofonu, bude to lepší. `audio.py`
> generuje po třech variantách od každé repliky, ať máte z čeho vybrat.

---

## 3. Ruchy

Mapované na jednotlivé klipy. Délky jsou orientační — dělejte je delší, ve střihu se ořeže.

| Klip | Ruch | Délka |
|---|---|---|
| 01 | Městský autobus přijíždí na prázdnou zastávku, vzduchové brzdy, sykot dveří | 8 s |
| 02 | Kroky na mokrém asfaltu, cvaknutí zámku pouzdra, dveře autobusu se zavřou, odjezd | 8 s |
| 03 | Prázdná ulice za svítání — vzdálené popelářské auto, jeden kos, naprostý klid | 12 s |
| 04 | Osamělé kroky do kopce po dlažbě, ozvěna mezi domy | 10 s |
| 06 | Kroky po kamenných schodech, klíč v zámku, těžké dveře se otevřou | 6 s |
| 07 | Šustění látky, sako z ramínka, ramínko zacinká o tyč | 4 s |
| 08 | Ticho šatny, tlumené kroky za dveřmi, jemné cinknutí | 4 s |
| 09 | Smyčec přejíždí po kalafuně, suché zrnité tření, dvakrát | 4 s |
| 11 | Podzemní chodba — kroky několika lidí, drhnoucí kolečko vozíku, cvakání pouzder, tlumené hlasy | 12 s |
| 13 | Betonový tunel — kapající kondenzát, dutá ozvěna kroků, vzdálený hukot vody nad hlavou | 12 s |
| 14 | **Těžké ocelové dveře se zavřou a zapadnou. Cvak. Pak úplné ticho.** | 6 s |
| 15 | Fontána naplno — tryskající voda, dopad na hladinu, dav, děti, cvakání mobilů | 12 s |
| 17 | Noční fontána — voda klesá, proudy postupně utichají, doznívá | 12 s |
| 18 | **Absolutní ticho. Jedna kapka dopadne na klidnou hladinu.** | 6 s |
| 19 | Noc u fontány — potlesk doznívá, lidé se rozcházejí, kroky, cvaknutí zámku dveří | 10 s |
| 21 | Prázdné noční prostranství, vzdálené kroky, tichý šum vody | 8 s |
| 22 | **Tři hluboké tóny zpod hladiny, sotva slyšitelné. Voda se zavlní.** | 8 s |

Tučně zvýrazněné jsou tři momenty, na kterých spot stojí: zavření dveří (odkud se hudba vezme),
kapka (ticho, které dá divákovi domyslet, co je pod hladinou) a tři tóny (že tam pořád jsou).
Těm věnujte ve střihu nejvíc času.

---

## 4. Mix

- **Ruch nese prvních 35 vteřin sám.** Nebojte se ticha, je to nejlevnější dramaturgický nástroj, co máte.
- **Fontána musí být hlasitá.** Střih ze zavřených dveří na plnou fontánu je rána z děla — když to
  ve zvuku neuděláte, obraz to sám neutáhne.
- **Pod dialogem hudba mlčí.** Babička s ředitelem stojí v nočním ruchu, ne v podkresu.
- **Poslední tři tóny nechte skoro pod prahem.** Divák si má nebýt jistý, jestli je slyšel.
