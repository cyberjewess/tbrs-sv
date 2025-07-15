#!/bin/bash
set -euo pipefail

FILE="src/routes/+layout.svelte"

echo "🔍 Checking current developerMode setting..."

current=$(grep -E 'const developerMode = (true|false);' "$FILE" | grep -oE '(true|false)')

if [[ "$current" == "true" ]]; then
  new="false"
else
  new="true"
fi

echo "🔁 Toggling developerMode: $current → $new"

# Use portable sed syntax (compatible with GNU and BSD)
# Create a temp file and move it over
sed "s/const developerMode = $current;/const developerMode = $new;/" "$FILE" > "$FILE.tmp"
mv "$FILE.tmp" "$FILE"

echo "✅ developerMode is now set to $new"

