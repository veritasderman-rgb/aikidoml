#!/usr/bin/env bash
# Sestaví reels z klipů (build/video/source), textových vrstev a koncové karty (build/*.png).
# Potřebuje ffmpeg. Vizuály musí být předtím vyrenderované: node render.mjs
#
#   bash build-reels.sh
#
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
B="$HERE/../build"
V="$B/video"
SRC="$V/source"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

FPS=24
VOPTS=(-c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p -r $FPS -profile:v high -level 4.1)
AOPTS=(-c:a aac -b:a 160k -ar 48000 -ac 2)

# Jeden klip + textová vrstva, která se plynule objeví a zase zmizí.
# Overlay musí jít dovnitř jako smyčka (-loop 1), jinak by z PNG vznikl jediný snímek
# a fade by ho nechal průhledný po celou dobu.
segment() { # $1=klip  $2=overlay.png  $3=výstup
  local dur out_st
  dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$1")
  out_st=$(python3 -c "print(round(max(1.6, $dur - 1.1), 2))")
  ffmpeg -y -v error -i "$1" -loop 1 -framerate $FPS -i "$2" -filter_complex \
    "[0:v]scale=1080:1920:flags=lanczos,setsar=1[v];\
     [1:v]format=rgba,fade=in:st=0.8:d=0.7:alpha=1,fade=out:st=$out_st:d=0.6:alpha=1,setsar=1[o];\
     [v][o]overlay=0:0:shortest=1:format=auto,format=yuv420p[vout]" \
    -map "[vout]" -map 0:a "${VOPTS[@]}" "${AOPTS[@]}" "$3"
}

# Statická koncová karta jako video s tichou stopou.
endcard() { # $1=délka  $2=výstup
  ffmpeg -y -v error -loop 1 -t "$1" -i "$B/endcard-9x16.png" \
    -f lavfi -t "$1" -i anullsrc=r=48000:cl=stereo \
    -filter_complex "[0:v]scale=1080:1920,setsar=1,fade=in:st=0:d=0.4,format=yuv420p[v]" \
    -map "[v]" -map 1:a "${VOPTS[@]}" "${AOPTS[@]}" "$2"
}

# Spojí segmenty a podloží je hudbou (ruch z klipů zůstává tišeji pod ní).
join_with_music() { # $1..$n-1 = segmenty, poslední = výstup
  local out="${*: -1}" list="$TMP/list.txt"
  : > "$list"
  for f in "${@:1:$#-1}"; do echo "file '$f'" >> "$list"; done
  ffmpeg -y -v error -f concat -safe 0 -i "$list" -c copy "$TMP/joined.mp4"
  local dur fadeout
  dur=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$TMP/joined.mp4")
  fadeout=$(python3 -c "print(max(0, $dur - 2.2))")
  ffmpeg -y -v error -i "$TMP/joined.mp4" -stream_loop -1 -i "$SRC/hudba.mp3" -filter_complex \
    "[0:a]volume=0.45[a0];\
     [1:a]volume=0.85,afade=t=in:st=0:d=1.5,afade=t=out:st=$fadeout:d=2.2[a1];\
     [a0][a1]amix=inputs=2:duration=first:normalize=0[a]" \
    -map 0:v -map "[a]" -c:v copy "${AOPTS[@]}" "$out"
  echo "→ $(basename "$out")  ${dur}s"
}

mkdir -p "$V"

# ---- Reel 1: hlavní, ~27 s – příběh začátečníka -> technika -> dódžó -> pozvánka
segment "$SRC/clip-1-zacatecnik.mp4" "$B/ov-4-zacatecnik.png" "$TMP/s1.mp4"
segment "$SRC/clip-2-technika.mp4"   "$B/ov-3-zdarma.png"     "$TMP/s2.mp4"
segment "$SRC/clip-3-dojo.mp4"       "$B/ov-2-kdy.png"        "$TMP/s3.mp4"
endcard 3 "$TMP/end3.mp4"
join_with_music "$TMP/s1.mp4" "$TMP/s2.mp4" "$TMP/s3.mp4" "$TMP/end3.mp4" "$V/reel-hlavni.mp4"

# ---- Reel 2: krátký, ~11 s – hook pro reklamu (začátečník)
segment "$SRC/clip-1-zacatecnik.mp4" "$B/ov-5-prijd.png" "$TMP/k1.mp4"
endcard 3 "$TMP/end3b.mp4"
join_with_music "$TMP/k1.mp4" "$TMP/end3b.mp4" "$V/reel-kratky-zacatecnik.mp4"

# ---- Reel 3: střední, ~19 s – technika a atmosféra dódžó
segment "$SRC/clip-2-technika.mp4" "$B/ov-1-hook.png" "$TMP/k2.mp4"
segment "$SRC/clip-3-dojo.mp4"     "$B/ov-2-kdy.png"  "$TMP/k3.mp4"
endcard 3 "$TMP/end3c.mp4"
join_with_music "$TMP/k2.mp4" "$TMP/k3.mp4" "$TMP/end3c.mp4" "$V/reel-kratky-technika.mp4"

echo "Hotovo → $V"
