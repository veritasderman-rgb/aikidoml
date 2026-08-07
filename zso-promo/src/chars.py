from gen import image, LOOK, NOTEXT
from concurrent.futures import ThreadPoolExecutor
import os
os.makedirs("char", exist_ok=True)

JOBS = [
 ("char/hudebnik.png",
  LOOK + "Character reference sheet on a plain neutral grey backdrop, three views of THE SAME MAN side by side: "
  "full-body front, three-quarter, and close-up head. He is a Czech orchestral violinist, 55 years old: lean weathered face, "
  "dark hair flecked with grey combed straight back, deep nasolabial lines, tired kind grey-blue eyes, clean-shaven, "
  "slightly stooped shoulders of a man who has carried a case for thirty years. "
  "In the first two views he wears everyday clothes: a dark navy zip-up jacket buttoned to the throat, plain trousers, "
  "worn leather shoes, a black violin case strapped over one shoulder. Neutral even studio light, consistent identical face in all three views." + NOTEXT,
  ()),
 ("char/hudebnik-frak.png",
  LOOK + "Character reference sheet on a plain neutral grey backdrop, two views of THE SAME MAN: full-body front and three-quarter. "
  "Keep the face, hair and build of the man in the reference image EXACTLY identical — same 55-year-old Czech violinist. "
  "Now he is in full orchestral concert dress: black tailcoat, white pique waistcoat, white wing-collar shirt, white bow tie, "
  "black patent shoes. Immaculate, formal, upright posture. Neutral even studio light." + NOTEXT,
  ("char/hudebnik.png",)),
 ("char/reditel.png",
  LOOK + "Character reference sheet on a plain neutral grey backdrop, two views of THE SAME MAN: full-body front and close-up head. "
  "A Czech orchestra director, 60 years old: broad calm face, short silver hair, neatly trimmed grey stubble, "
  "heavy-lidded unhurried eyes, the settled bearing of a man who has run the same institution for decades. "
  "He wears a long dark wool overcoat over concert dress, a soft charcoal scarf wound once around his neck. "
  "Neutral even studio light, identical face in both views." + NOTEXT,
  ()),
 ("char/babicka.png",
  LOOK + "Character reference sheet on a plain neutral grey backdrop, two views of THE SAME WOMAN: full-body front and close-up head. "
  "A Czech woman in her late seventies, small and neat, no more than 155 cm: soft round face with deep laugh lines, "
  "warm alert brown eyes, white hair set in a careful perm under a patterned headscarf tied under the chin. "
  "She wears a good wool coat kept for occasions, a small handbag hooked over her forearm, sensible low-heeled court shoes. "
  "Dignified and completely sincere, never comic. Neutral even studio light, identical face in both views." + NOTEXT,
  ()),
]

def run(j):
    out, prompt, refs = j
    return image(prompt, out, refs=refs, aspect="16:9")

# hudebnik-frak závisí na hudebnik.png, proto první sériově
run(JOBS[0])
with ThreadPoolExecutor(max_workers=3) as ex:
    list(ex.map(run, JOBS[1:]))
