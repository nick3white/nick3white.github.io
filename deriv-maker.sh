for file in *.png; do
  base="${file%.*}"
  # Create thumbnail (150px wide)
  magick "$file" -resize 150x -quality 85 "${base}_thumb.webp"
  # Create small (400px wide)
  magick "$file" -resize 400x -quality 85 "${base}_small.webp"
  # Create medium (800px wide)
  magick "$file" -resize 800x -quality 85 "${base}_medium.webp"
  # Create large (1200px wide)
  magick "$file" -resize 1200x -quality 85 "${base}_large.webp"
done
