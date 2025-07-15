#!/bin/bash
set -euo pipefail

FILE="src/routes/+layout.svelte"
TYPE="${1:-}"

if [[ -z "$TYPE" ]]; then
  echo "Usage: $0 {patch|minor|major}" >&2
  exit 1
fi

echo "🔍 Reading version from $FILE..."

# Extract and clean version number
version=$(sed -nE "s/.*version[[:space:]]*=[[:space:]]*['\"]([0-9]+\.[0-9]+\.[0-9]+)['\"].*/\1/p" "$FILE" | tr -d '[:space:]')

if [[ -z "$version" ]]; then
  echo "❌ Failed to find version in $FILE" >&2
  exit 1
fi

echo "🔢 Current version: $version"

IFS=. read -r major minor patch <<< "$version"

case "$TYPE" in
  patch) new_version="$major.$minor.$((patch + 1))" ;;
  minor) new_version="$major.$((minor + 1)).0" ;;
  major) new_version="$((major + 1)).0.0" ;;
  *)
    echo "❌ Unknown bump type: $TYPE" >&2
    exit 1
    ;;
esac

echo "🚀 Bumping $TYPE: $version → $new_version"

# Update the line in-place (macOS BSD sed)
# Match loosely on any spacing/quotes and replace with normalized single-quoted format
sed -i '' "s/version[[:space:]]*=[[:space:]]*['\"]$version['\"][[:space:]]*;/version = '$new_version';/" "$FILE"

echo "✅ Version updated in $FILE"

git add $FILE
git commit -m "Bumped to $new_version"

git tag "v$new_version"
git push  # push commit
git push origin "v$new_version" # push tag
