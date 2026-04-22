#!/bin/zsh
# HomeoPedia — Disease Push Script
# Usage: bash push.sh content/sciatica.txt

FILE="$1"

if [ -z "$FILE" ]; then
  echo ""
  echo "❌ File name dena padega!"
  echo "Example: bash push.sh content/sciatica.txt"
  echo ""
  exit 1
fi

cd "/Users/dr.shadabshomoeopathy/Documents/homeopedia"

export SANITY_API_TOKEN=sk76M0wHIt0PLUQFC5j8PicSSIuU78m9v6kzBPPSqBheUhp6S0aBYIknZY9chyMilFAfBCCpbhgDj7owWVyjqOxPuoxY1bJzSiZcEONe348HjyXPSw3DUgY2sqTxa1DGcvzoO2lUxCpFD2DNkSSUROlQaSrVlAVV8ijjMytGmyR9r44QEj99

node scripts/push-disease.mjs "$FILE"

echo ""
echo "Live at: https://homeopedia.vercel.app"
