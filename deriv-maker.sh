for file in images/*.png; do
  base="${file%.*}"
  # magick "$file" -resize 150x -quality 85 "${base}_thumb.webp"
  # magick "$file" -resize 400x -quality 85 "${base}_small.webp"
  magick "$file" -resize 500x -quality 85 "${base}.webp"
  # magick "$file" -resize 1200x -quality 85 "${base}_large.webp"
done
