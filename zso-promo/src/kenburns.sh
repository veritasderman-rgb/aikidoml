#!/usr/bin/env bash
# Z keyframu udělá 8s klip s pomalým pohybem kamery – placeholder pro střih,
# než doběhne Veo. Není to náhrada, je to rytmická výplň se správným obrazem.
set -euo pipefail
FPS=25; DUR=8; N=$((FPS*DUR))
kb() { # $1=keyframe  $2=výstup  $3=směr (in|out|left|right)  $4=síla
  local z_end="$4"
  case "$3" in
    in)    Z="min(zoom+$(python3 -c "print(($z_end-1)/$N)"),$z_end)"; X="iw/2-(iw/zoom/2)"; Y="ih/2-(ih/zoom/2)";;
    out)   Z="if(eq(on,0),$z_end,max(zoom-$(python3 -c "print(($z_end-1)/$N)"),1))"; X="iw/2-(iw/zoom/2)"; Y="ih/2-(ih/zoom/2)";;
    left)  Z="$z_end"; X="(iw-iw/zoom)*(1-on/$N)"; Y="ih/2-(ih/zoom/2)";;
    right) Z="$z_end"; X="(iw-iw/zoom)*(on/$N)";  Y="ih/2-(ih/zoom/2)";;
  esac
  ffmpeg -y -v error -loop 1 -i "$1" \
    -vf "scale=3840:-2,zoompan=z='$Z':d=$N:x='$X':y='$Y':s=1280x720:fps=$FPS,format=yuv420p" \
    -t $DUR -c:v libx264 -crf 21 -preset slow -r $FPS -an "$2"
  echo "OK $(basename "$2")"
}
kb key/11-chodba-sbihani.png    placeholders/11-chodba-sbihani.mp4    in   1.14
kb key/18-hladina-kapka.png     placeholders/18-hladina-kapka.mp4     in   1.06
kb key/19-dvere-vychod-noc.png  placeholders/19-dvere-vychod-noc.mp4  out  1.12
kb key/20-babicka-reditel.png   placeholders/20-babicka-reditel.mp4   in   1.09
kb key/21-babicka-otoceni.png   placeholders/21-babicka-otoceni.mp4   out  1.10
kb key/22-hladina-final.png     placeholders/22-hladina-final.mp4     in   1.05
