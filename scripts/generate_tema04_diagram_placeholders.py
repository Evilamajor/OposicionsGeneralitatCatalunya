from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
DIAGRAM_DIR = ROOT / "public" / "content" / "bloc-2" / "tema-04" / "diagrama"

WIDTH = 1400
HEIGHT = 900


def load_font(size: int):
    for candidate in ("DejaVuSans.ttf", "Arial.ttf", "LiberationSans-Regular.ttf"):
        try:
            return ImageFont.truetype(candidate, size)
        except OSError:
            continue
    return ImageFont.load_default()


def draw_box(draw: ImageDraw.ImageDraw, box, text, font, fill="#f8fafc", outline="#94a3b8"):
    draw.rounded_rectangle(box, radius=16, fill=fill, outline=outline, width=3)
    left, top, right, bottom = box
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_w = text_bbox[2] - text_bbox[0]
    text_h = text_bbox[3] - text_bbox[1]
    x = left + ((right - left) - text_w) / 2
    y = top + ((bottom - top) - text_h) / 2
    draw.text((x, y), text, font=font, fill="#0f172a")


def draw_arrow(draw: ImageDraw.ImageDraw, start, end, color="#475569"):
    draw.line([start, end], fill=color, width=5)
    ex, ey = end
    draw.polygon(
        [
            (ex, ey),
            (ex - 20, ey - 12),
            (ex - 20, ey + 12),
        ],
        fill=color,
    )


def build_placeholder(point_number: int, output_path: Path):
    image = Image.new("RGB", (WIDTH, HEIGHT), "white")
    draw = ImageDraw.Draw(image)

    title_font = load_font(56)
    subtitle_font = load_font(34)
    box_font = load_font(28)

    draw.text((80, 60), f"Tema 04 — Diagrama Punt {point_number}", font=title_font, fill="#0f172a")
    draw.text((80, 140), "Placeholder (generat automàticament)", font=subtitle_font, fill="#334155")

    top_box = (140, 260, 620, 420)
    middle_box = (780, 260, 1260, 420)
    bottom_box = (460, 560, 940, 720)

    draw_box(draw, top_box, "Concepte clau", box_font)
    draw_box(draw, middle_box, "Relació normativa", box_font)
    draw_box(draw, bottom_box, "Aplicació pràctica", box_font)

    draw_arrow(draw, (620, 340), (780, 340))
    draw_arrow(draw, (700, 420), (700, 560))
    draw_arrow(draw, (1020, 420), (840, 560))

    image.save(output_path, format="PNG")


def main():
    DIAGRAM_DIR.mkdir(parents=True, exist_ok=True)

    created = []
    skipped = []

    for point_number in range(2, 25):
        output_path = DIAGRAM_DIR / f"{point_number}.png"
        if output_path.exists():
            skipped.append(output_path.name)
            continue
        build_placeholder(point_number, output_path)
        created.append(output_path.name)

    print(f"Created: {len(created)}")
    if created:
        print("  " + ", ".join(created))
    print(f"Skipped existing: {len(skipped)}")
    if skipped:
        print("  " + ", ".join(skipped))


if __name__ == "__main__":
    main()
