from __future__ import annotations

import re
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
CONTENT_ROOT = ROOT / "public" / "content" / "bloc-1"
THEMES = ["tema-1", "tema-2", "tema-3"]
POINTS = range(1, 25)


def pad(point: int) -> str:
    return f"{point:02d}"


def extract_titles(theme_dir: Path) -> dict[int, str]:
    base_html = theme_dir / "esquemes" / "desenvolupament-base.html"
    if not base_html.exists():
        return {}

    text = base_html.read_text(encoding="utf-8", errors="ignore")
    raw_titles = re.findall(r"<h3[^>]*>(.*?)</h3>", text, flags=re.IGNORECASE | re.DOTALL)
    clean_titles = []
    for title in raw_titles:
        no_tags = re.sub(r"<[^>]+>", "", title)
        compact = re.sub(r"\s+", " ", no_tags).strip()
        if compact:
            clean_titles.append(compact)

    return {idx + 1: title for idx, title in enumerate(clean_titles[:24])}


def write_explanation_file(path: Path, point_number: int, point_title: str) -> None:
    content = f"""<section class=\"punt-explicacio-placeholder\">\n  <h3>Punt {pad(point_number)} — {point_title}</h3>\n  <p><em>En construcció…</em></p>\n  <ul>\n    <li><strong>Definició:</strong> …</li>\n    <li><strong>Idees clau d’examen:</strong> …</li>\n    <li><strong>Referències:</strong> …</li>\n    <li><strong>Exemple:</strong> …</li>\n  </ul>\n</section>\n"""
    path.write_text(content, encoding="utf-8")


def write_questions_file(path: Path, point_number: int, point_title: str) -> None:
    content = f"""<section class=\"preguntes-placeholder\">\n  <h3>ASK · Punt {pad(point_number)} — {point_title}</h3>\n  <p><em>En construcció…</em></p>\n  <p>🚧 Contingut en preparació — coming soon.</p>\n</section>\n"""
    path.write_text(content, encoding="utf-8")


def write_diagram_png(path: Path, theme_label: str, point_number: int) -> None:
    width, height = 1400, 900
    image = Image.new("RGB", (width, height), color=(246, 249, 255))
    draw = ImageDraw.Draw(image)

    accent = (47, 97, 186)
    text_color = (15, 23, 42)
    muted = (71, 85, 105)

    draw.rectangle([(40, 40), (width - 40, height - 40)], outline=(204, 215, 233), width=3)
    draw.rectangle([(40, 40), (width - 40, 170)], fill=(233, 241, 255))

    try:
        title_font = ImageFont.truetype("DejaVuSans-Bold.ttf", 48)
        body_font = ImageFont.truetype("DejaVuSans.ttf", 32)
        small_font = ImageFont.truetype("DejaVuSans.ttf", 24)
    except OSError:
        title_font = ImageFont.load_default()
        body_font = ImageFont.load_default()
        small_font = ImageFont.load_default()

    draw.text((80, 82), "Diagrama (placeholder)", fill=accent, font=title_font)
    draw.text((80, 250), f"Bloc 1 · {theme_label}", fill=text_color, font=body_font)
    draw.text((80, 320), f"Punt {pad(point_number)}", fill=text_color, font=body_font)
    draw.text((80, 430), "Espai reservat per al diagrama definitiu.", fill=muted, font=small_font)

    image.save(path, format="PNG")


def main() -> None:
    generated = 0
    for theme in THEMES:
        theme_dir = CONTENT_ROOT / theme
        titles = extract_titles(theme_dir)

        exp_dir = theme_dir / "esquemes" / "explicacions"
        ask_dir = theme_dir / "esquemes" / "preguntes"
        graf_dir = theme_dir / "esquemes" / "diagrames"

        exp_dir.mkdir(parents=True, exist_ok=True)
        ask_dir.mkdir(parents=True, exist_ok=True)
        graf_dir.mkdir(parents=True, exist_ok=True)

        theme_label = theme.replace("tema-", "Tema ")

        for point in POINTS:
            point_title = titles.get(point, f"Punt {pad(point)} – En construcció")

            exp_file = exp_dir / f"punt-{pad(point)}.html"
            ask_file = ask_dir / f"punt-{pad(point)}.html"
            graf_file = graf_dir / f"punt-{pad(point)}.png"

            write_explanation_file(exp_file, point, point_title)
            write_questions_file(ask_file, point, point_title)
            write_diagram_png(graf_file, theme_label, point)
            generated += 3

    print(f"Generated {generated} placeholder files for Bloc 1.")


if __name__ == "__main__":
    main()
