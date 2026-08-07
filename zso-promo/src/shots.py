# -*- coding: utf-8 -*-
from gen import LOOK, NOTEXT, asset, rp

M   = asset("char", "hudebnik")        # hudebník v civilu
MF  = asset("char", "hudebnik-frak")   # hudebník ve fraku
D   = asset("char", "reditel")
B   = asset("char", "babicka")
KOL  = rp("ref", "kolonada-fontana-celek.jpg")
KW  = rp("ref", "kolonada-wide-den.jpg")
KP  = rp("ref", "kolonada-perspektiva.jpg")
F1  = rp("ref", "fontana-den-1.jpg")
FM  = rp("ref", "fontana-mísa.jpg")
CAS  = rp("ref", "casino-fasada.jpg")

SAME_M  = ("The man is EXACTLY the same person as in the character reference image — identical face, "
           "identical grey-flecked hair, identical navy zip-up jacket and black violin case. ")
SAME_MF = ("The man is EXACTLY the same person as in the character reference image — identical face and hair, "
           "wearing the same black tailcoat and white bow tie. ")
LOC = ("The architecture must match the photographic reference exactly: the cast-iron neo-baroque colonnade of "
       "Mariánské Lázně, ochre-yellow painted ironwork, arched glazed bays, the domed pavilion, and the Singing "
       "Fountain — a low circular stone basin ringed with polished metal hemispheres. ")

DAWN  = "Pre-dawn, 05:10. Cold blue-grey light, sodium street lamps still burning orange, wet black asphalt, sky just paling above the forested hills. "
NIGHT = "Night. "

SHOTS = [
 ("01-zastavka-prijezd", DAWN + LOOK +
  "A deserted bus stop shelter on an empty road at the edge of a Czech spa town. A city bus swings in from the "
  "left, headlights sweeping the wet asphalt, destination display glowing. Nobody else anywhere. "
  "Wide static shot, camera at eye level across the road." + NOTEXT, ()),
 ("02-zastavka-vystup", DAWN + LOOK + SAME_M +
  "The violinist steps down out of the open bus door onto the wet pavement, black violin case over his shoulder, "
  "a steel thermos in his free hand, jacket zipped to the throat. His breath fogs in the cold air. "
  "Medium shot from the side, the lit bus interior behind him." + NOTEXT, (M,)),
 ("03-zastavka-ticho", DAWN + LOOK +
  "The empty bus stop after the bus has gone: red tail lights receding far down the wet road, the shelter's digital "
  "display glowing 05:12, a single crow on the timetable frame. Absolute stillness. Static wide shot." + NOTEXT, ()),
 ("04-kopec-chuze", DAWN + LOOK + SAME_M +
  "The violinist walks away from camera up a steep empty spa-town street lined with grand pale 19th-century "
  "buildings, violin case on his shoulder, thermos in hand. Street lamps still lit above him, the sky paling. "
  "Wide tracking shot from behind, he is small in the frame." + NOTEXT, (M,)),
 ("05-casino-fasada", DAWN + LOOK +
  "The grand neo-baroque Společenský dům Casino of Mariánské Lázně in the first pink light of sunrise — cream and "
  "pale-yellow stucco facade, green oxidised copper domes, statues along the roofline, exactly as in the photographic "
  "reference. Not a single person in the frame. Wide symmetrical static shot from across the empty street." + NOTEXT, (CAS,)),
 ("06-casino-vstup", DAWN + LOOK + SAME_M +
  "The violinist climbs the stone steps of the grand spa building, walks straight past the closed main entrance and "
  "turns to a plain side service door. He unlocks it; a wedge of warm yellow interior light spills out across the "
  "cold blue stone. Medium wide shot, camera static at the foot of the steps." + NOTEXT, (M, CAS)),
 ("07-satna-sako", LOOK +
  "Interior, cramped orchestra dressing room, warm tungsten light, a wall of lockers and a mirror behind. "
  "Extreme close-up of a man's weathered hands lifting a black tailcoat off a wooden hanger, fingers running once "
  "down the satin lapel. Shallow focus, background soft." + NOTEXT, ()),
 ("08-satna-motylek", LOOK + SAME_MF +
  "Interior dressing room, warm tungsten light. Close-up over the shoulder into a mirror: the violinist's two hands "
  "adjusting his white bow tie, a final tiny correction. His reflected face is calm and concentrated. "
  "Shallow focus on the hands and tie." + NOTEXT, (MF,)),
 ("09-satna-kalafuna", LOOK +
  "Interior dressing room, warm tungsten light. Extreme close-up of a violin bow being drawn across a cake of amber "
  "rosin in its wooden holder, fine white dust catching the light. Hands only, shallow focus." + NOTEXT, ()),
 ("10-satna-zrcadlo", LOOK + SAME_MF +
  "Interior dressing room. The violinist stands facing a tall mirror in full concert dress — black tailcoat, white "
  "waistcoat, white bow tie — and straightens his back. On the bench behind him sits the closed steel thermos and the "
  "navy jacket he arrived in. We see both him and his reflection. Medium wide, warm tungsten light." + NOTEXT, (MF,)),
 ("11-chodba-sbihani", LOOK + SAME_MF +
  "A narrow bare service corridor under a grand building: painted brick walls, exposed pipes along the ceiling, "
  "hard fluorescent light. The violinist walks toward camera and is not alone — other musicians in tailcoats and long "
  "black dresses converge from side doors carrying instruments: a double bass case handled like moving furniture, a "
  "timpani on a squeaking trolley, a harp under a grey dust cover, someone with sheet music under one arm and a bread "
  "roll in the other hand. Calm, routine, wordless. Wide shot down the corridor." + NOTEXT, (MF,)),
 ("12-cedule", LOOK +
  "Close-up of a heavy grey steel service door at the end of a bare utility corridor. On it an old enamelled Czech "
  "sign reads exactly 'VSTUP JEN PRO POVĚŘENÉ OSOBY'. Below it a smaller scrap of card, hand-written in ballpoint, "
  "reads exactly 'A ORCHESTR'. Render both Czech texts with perfect spelling and diacritics. Hard practical light, "
  "static shot." , ()),
 ("13-tunel-sestup", LOOK + SAME_MF +
  "A raw concrete service tunnel beneath a fountain: valves and gauges, cable looms taped along the wall, condensation "
  "dripping, caged utility bulbs. Musicians in full concert dress descend a short steel stair one behind another and "
  "walk away into the depth of the tunnel with their instruments — utterly incongruous, completely matter-of-fact. "
  "Wide shot down the tunnel." + NOTEXT, (MF,)),
 ("14-tunel-dvere", LOOK +
  "Inside the concrete service tunnel: the last musician pulls a heavy steel door shut behind him and it seals. "
  "Now only the closed door, the wet concrete and the caged bulb. Static locked-off shot, held." + NOTEXT, ()),
 ("15-fontana-den", LOOK + LOC +
  "Full daylight, brilliant summer sun. The Singing Fountain of Mariánské Lázně in full performance — tall jets, "
  "spray catching the light, the ochre-yellow cast-iron colonnade behind it. A full ring of people around the basin: "
  "children pressed to the railing, phones held up, older people on benches, a confused dog. Wide shot, "
  "exactly matching the architecture of the reference photographs." + NOTEXT, (F1, KOL)),
 ("16-kolonada-shora", LOOK + LOC +
  "High wide establishing shot looking down over the colonnade and the Singing Fountain in full daylight, the crowd "
  "small below, forested hills behind the town. Architecture identical to the reference photographs." + NOTEXT, (KOL, KW)),
 ("17-fontana-noc", NIGHT + LOOK + LOC +
  "The last performance of the day. The Singing Fountain lit from within in deep blue and violet, water thrown high, "
  "the illuminated colonnade glowing warm gold behind it, a crowd silhouetted around the basin. Wide shot, "
  "same architecture as the reference photographs, now at night." + NOTEXT, (F1, KOL)),
 ("18-hladina-kapka", NIGHT + LOOK +
  "Extreme close, low angle across a perfectly still black sheet of water in a stone basin. On it, a flawless mirror "
  "reflection of the illuminated golden colonnade. Nothing moves. One single drop has just struck the surface and "
  "concentric rings spread outward. Locked-off shot." + NOTEXT, (KOL,)),
 ("19-dvere-vychod-noc", NIGHT + LOOK + SAME_MF +
  "A plain service door in the paving beside the fountain opens and the musicians come out into the night — tired, "
  "carrying instruments, bow ties hung loose, tailcoats over their arms. One man quietly wrings out a sock and puts it "
  "straight back in his pocket. The illuminated colonnade glows behind them. Wide shot." + NOTEXT, (MF, KOL)),
 ("20-babicka-reditel", NIGHT + LOOK +
  "The orchestra director — the 60-year-old man from the first character reference, dark overcoat and charcoal scarf — "
  "is stopped on the night pavement by a small elderly woman in a headscarf and good wool coat, handbag on her forearm — "
  "exactly the woman from the second character reference. She stands squarely in front of him, looking up, asking "
  "something in complete earnest. He looks down at her, faintly amused, unhurried. Behind them the orchestra files past "
  "into the dark and the lit colonnade glows. Medium two-shot, shallow focus." + NOTEXT, (D, B, KOL)),
 ("21-babicka-otoceni", NIGHT + LOOK +
  "The small elderly woman in the headscarf — exactly the woman in the character reference — stands alone on the empty "
  "night pavement, everyone else gone, and turns back to look at the illuminated fountain. Seen from behind and slightly "
  "to the side, she is small against the glowing colonnade. Wide shot." + NOTEXT, (B, KOL)),
 ("22-hladina-final", NIGHT + LOOK +
  "The same still black water in the stone basin, the golden colonnade mirrored in it, everything motionless — and the "
  "surface just barely trembling, as if something enormous were sounding far below. Locked-off extreme close shot." + NOTEXT, (KOL,)),
]

MOTION = {
 "01-zastavka-prijezd": "The bus rolls in from the left and halts, air brakes hiss, doors fold open. Camera locked off. Slow, real-time, no cuts.",
 "02-zastavka-vystup": "He steps down, shifts the violin case higher on his shoulder, breath clouding. Behind him the doors fold shut and the bus pulls away out of frame. Camera locked off.",
 "03-zastavka-ticho": "Nothing moves except the bus tail lights shrinking far down the road and one crow shifting its feet. Camera locked off. Absolute stillness.",
 "04-kopec-chuze": "He walks steadily away up the hill, growing smaller. Slow dolly follow from behind at walking pace.",
 "05-casino-fasada": "Almost no movement — only the light warming very slightly across the facade. Extremely slow push in. Camera otherwise static.",
 "06-casino-vstup": "He climbs the steps, passes the main entrance, unlocks the side door; warm light spills out, he steps through, the door closes. Camera locked off.",
 "07-satna-sako": "Hands lift the tailcoat off the hanger and fingers run once down the lapel. Tight, slow, shallow focus. Camera static.",
 "08-satna-motylek": "Both hands make one small final adjustment to the bow tie, then drop away. Camera static on the mirror.",
 "09-satna-kalafuna": "The bow is drawn twice across the rosin, fine dust lifting. Camera static, macro.",
 "10-satna-zrcadlo": "He settles his shoulders and straightens his back, becoming a different man. Very slow push in. No other movement.",
 "11-chodba-sbihani": "The musicians converge and walk toward and past camera with their instruments, the timpani trolley wheel squeaking. Slow steady dolly backwards ahead of them.",
 "12-cedule": "Static locked-off shot of the sign. Only a faint flicker in the fluorescent light. No camera movement.",
 "13-tunel-sestup": "One by one the musicians descend the steel stair and walk away down the tunnel, growing small. Camera locked off at the top.",
 "14-tunel-dvere": "A hand pulls the heavy steel door shut; it seals with a clank. Then nothing at all. Camera locked off, hold on the closed door.",
 "15-fontana-den": "The fountain surges to full height, water and light everywhere, the crowd reacting, phones lifting. Energetic but steady wide shot, very slight push in.",
 "16-kolonada-shora": "Slow majestic drift forward and slightly down over the colonnade and fountain. Smooth aerial move.",
 "17-fontana-noc": "The finale: jets at full height, then the water falls away column by column, colours sinking from violet to deep blue. Slow, elegiac. Camera almost static.",
 "18-hladina-kapka": "Perfect stillness on the black water, then one single drop strikes and rings spread slowly outward to the edge of frame. Locked-off. Hold on the stillness.",
 "19-dvere-vychod-noc": "The door opens and the musicians come out one after another into the night, tired, dispersing past camera. Camera locked off.",
 "20-babicka-reditel": "She stops him and speaks; he pauses, looks down at her, then smiles slightly and draws his scarf closer. Gentle handheld two-shot, minimal movement. No exaggerated expressions.",
 "21-babicka-otoceni": "She stands still, then slowly turns her head and body back toward the fountain. Nothing else moves. Camera locked off.",
 "22-hladina-final": "The black water lies perfectly still, then trembles almost imperceptibly three times, as if from far below. Locked-off macro. Hold.",
}

NEG = ("text, captions, subtitles, watermark, logo, timestamp, distorted faces, extra fingers, extra limbs, "
       "warped architecture, cartoon, anime, 3d render, video game, oversaturated colours, lens flare, "
       "slow motion, speed ramp, crowd looking at camera")
