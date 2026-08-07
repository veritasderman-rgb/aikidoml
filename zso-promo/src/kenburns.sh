#!/usr/bin/env bash
# Z keyframu udělá 8s klip s pomalým pohybem kamery – placeholder pro střih,
# než doběhne Veo. Není to náhrada, je to rytmická výplň se správným obrazem.
#
#   bash zso-promo/src/kenburns.sh      (je jedno, odkud se spustí)
#
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(cd "$HERE/.." && pwd)"
OUT="$ROOT/placeholders"
mkdir -p "$OUT"

FPS=25
DUR=8
N=$((FPS * DUR))

# Keyframy jsou v repu jako .jpg (kvůli velikosti), čerstvě vygenerované jako .png.
keyframe() {
  local f
  for f in "$ROOT/key/$1.png" "$ROOT/key/$1.jpg" "$ROOT/key/$1.jpeg"; do
    [ -f "$f" ] && { printf '%s' "$f"; return 0; }
  done
  echo "Keyframe pro '$1' nenalezen v $ROOT/key/ (.png ani .jpg)" >&2
  return 1
}

kb() { # $1=id záběru  $2=směr (in|out|left|right)  $3=cílový zoom
  local src dst step
  src="$(keyframe "$1")"
  dst="$OUT/$1.mp4"
  step="$(python3 -c "print(($3 - 1) / $N)")"
  case "$2" in
    in)    Z="min(zoom+$step,$3)";                       X="iw/2-(iw/zoom/2)";        Y="ih/2-(ih/zoom/2)" ;;
    out)   Z="if(eq(on,0),$3,max(zoom-$step,1))";        X="iw/2-(iw/zoom/2)";        Y="ih/2-(ih/zoom/2)" ;;
    left)  Z="$3";                                       X="(iw-iw/zoom)*(1-on/$N)";  Y="ih/2-(ih/zoom/2)" ;;
    right) Z="$3";                                       X="(iw-iw/zoom)*(on/$N)";    Y="ih/2-(ih/zoom/2)" ;;
    *)     echo "Neznámý směr: $2" >&2; return 1 ;;
  esac
  ffmpeg -y -v error -loop 1 -i "$src" \
    -vf "scale=3840:-2,zoompan=z='$Z':d=$N:x='$X':y='$Y':s=1280x720:fps=$FPS,format=yuv420p" \
    -t "$DUR" -c:v libx264 -crf 21 -preset slow -r "$FPS" -an "$dst"
  echo "OK $(basename "$dst")  ($(basename "$src"))"
}

kb 11-chodba-sbihani   in   1.14
kb 18-hladina-kapka    in   1.06
kb 19-dvere-vychod-noc out  1.12
kb 20-babicka-reditel  in   1.09
kb 21-babicka-otoceni  out  1.10
kb 22-hladina-final    in   1.05

echo "Hotovo → $OUT"
