#!/bin/bash
# batch-compress-videos.sh
#
# Finds every .mp4/.mov file over 25 MiB in the current folder (and subfolders),
# compresses it to fit Cloudflare Workers' 25 MiB static asset limit, and backs
# up the original before overwriting it.
#
# USAGE:
#   1. cd into your project root (andrea-portfolio repo)
#   2. Make the script executable:  chmod +x batch-compress-videos.sh
#   3. Run it:                      ./batch-compress-videos.sh
#
# Requires ffmpeg. If you don't have it:  brew install ffmpeg

set -e

BACKUP_DIR="./_originals"
LIMIT_BYTES=$((25 * 1024 * 1024))  # 25 MiB in bytes

mkdir -p "$BACKUP_DIR"

echo "Scanning for video files over 25 MiB..."
echo ""

find . -type f \( -iname "*.mp4" -o -iname "*.mov" \) -size +25M ! -path "$BACKUP_DIR/*" | while read -r file; do
  original_size=$(du -h "$file" | cut -f1)
  echo "----------------------------------------"
  echo "Compressing: $file  (currently $original_size)"

  backup_path="$BACKUP_DIR/$(dirname "$file")"
  mkdir -p "$backup_path"
  cp "$file" "$backup_path/"

  temp_file="${file%.*}_tmp.mp4"

  ffmpeg -nostdin -i "$file" -an -vcodec libx264 -crf 28 -preset slow \
    -vf "scale=1920:-2" -movflags +faststart -y "$temp_file" -loglevel error

  mv "$temp_file" "$file"

  new_size_bytes=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file")
  new_size_human=$(du -h "$file" | cut -f1)

  if [ "$new_size_bytes" -gt "$LIMIT_BYTES" ]; then
    echo "⚠️  Still over 25 MiB after compression: $new_size_human"
    echo "    Try increasing -crf (e.g. to 32) or lowering the scale (e.g. 1280:-2) and re-run."
  else
    echo "✅ Compressed to $new_size_human — under the limit"
  fi
done

echo ""
echo "----------------------------------------"
echo "Done. Originals are backed up in $BACKUP_DIR/"
echo "Review the compressed videos, then commit and push to trigger a fresh deploy."
