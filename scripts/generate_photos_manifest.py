from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
PHOTOS_DIR = ROOT / "photos"
OUTPUT = ROOT / "photos.js"
IMAGE_EXTENSIONS = {".avif", ".gif", ".heic", ".jpeg", ".jpg", ".png", ".webp"}


def city_photos(city_dir):
    return sorted(
        path.name
        for path in city_dir.iterdir()
        if path.is_file()
        and not path.name.startswith(".")
        and path.suffix.lower() in IMAGE_EXTENSIONS
    )


def main():
    manifest = {
        city_dir.name: city_photos(city_dir)
        for city_dir in sorted(PHOTOS_DIR.iterdir())
        if city_dir.is_dir() and not city_dir.name.startswith(".")
    }

    lines = ["window.tripPhotos = {"]
    for city, photos in manifest.items():
        lines.append(f"  {json.dumps(city)}: {json.dumps(photos)},")
    lines.append("};")
    OUTPUT.write_text("\n".join(lines) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
