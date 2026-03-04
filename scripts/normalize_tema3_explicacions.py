from __future__ import annotations

import argparse
import re
from pathlib import Path


TARGET_DIR = Path("public/content/bloc-1/tema-3/esquemes/explicacions")


def strip_tags(value: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", value)).strip()


def semantic_text(value: str) -> str:
    return re.sub(r"\s+", " ", strip_tags(value))


def is_safe_rewrite(original: str, candidate: str) -> bool:
    original_text = semantic_text(original)
    candidate_text = semantic_text(candidate)

    original_len = len(original_text)
    candidate_len = len(candidate_text)

    if original_len == 0:
        return True

    ratio = candidate_len / original_len

    if ratio < 0.95:
        return False

    if "en construcció" in candidate_text.lower() and "en construcció" not in original_text.lower():
        return False

    return True


def normalize_title(point: int, text: str) -> str:
    clean = strip_tags(text)
    suffix = ""
    if "—" in clean:
        suffix = clean.split("—", 1)[1].strip()
    else:
        suffix = re.sub(r"^Punt\s*\d+\s*", "", clean, flags=re.IGNORECASE).strip(" -—")
    if not suffix:
        suffix = f"Punt {point}"
    return f"BLOC I · TEMA 3 · PUNT {point} — {suffix}"


def build_contents_block(source_html: str) -> str:
    headings = re.findall(r"<h[23][^>]*>(.*?)</h[23]>", source_html, re.IGNORECASE | re.DOTALL)
    items: list[str] = []
    for h in headings:
        title = strip_tags(h)
        if not title:
            continue
        upper = title.upper()
        if "CONTINGUTS" in upper:
            continue
        if title in items:
            continue
        items.append(title)

    if not items:
        return ""

    li = "\n".join([f"      <li>{item}</li>" for item in items])
    return (
        "<section class=\"card\" id=\"continguts-auto\">\n"
        "  <h2>CONTINGUTS</h2>\n"
        "  <ol>\n"
        f"{li}\n"
        "  </ol>\n"
        "</section>\n"
    )


def normalize_file(path: Path, apply_changes: bool) -> bool:
    original = path.read_text(encoding="utf-8")
    low = original.lower()
    point = int(path.stem.replace("punt-", ""))

    h1_match = re.search(r"<h1[^>]*>(.*?)</h1>", original, re.IGNORECASE | re.DOTALL)
    if h1_match:
        h1_raw = h1_match.group(1)
    else:
        h3_match = re.search(r"<h3[^>]*>(.*?)</h3>", original, re.IGNORECASE | re.DOTALL)
        h1_raw = h3_match.group(1) if h3_match else f"Punt {point}"
    normalized_h1 = normalize_title(point, h1_raw)

    changed = False

    is_fragment = "<!doctype html>" not in low or "<html" not in low or "<body" not in low
    has_wrap_shell = 'class="wrap"' in low
    has_contents = "continguts" in low

    if is_fragment or not has_wrap_shell:
        body_match = re.search(r"<body[^>]*>(.*)</body>", original, re.IGNORECASE | re.DOTALL)
        source_body = body_match.group(1).strip() if body_match else original.strip()

        intro_match = re.search(r"<p[^>]*class=\"[^\"]*(?:intro|subtitle)[^\"]*\"[^>]*>(.*?)</p>", original, re.IGNORECASE | re.DOTALL)
        intro = strip_tags(intro_match.group(1)) if intro_match else "Desenvolupament estructurat del punt per a preparació d’oposicions, amb marc normatiu i orientació d’examen."

        contents_block = "" if has_contents else build_contents_block(source_body)

        wrapped = f"""<!doctype html>
<html lang=\"ca\">
<head>
  <meta charset=\"utf-8\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
  <title>{normalized_h1}</title>
  <meta name=\"description\" content=\"Tema 3 · Punt {point}. Estructura d'estudi per oposicions amb marc normatiu i orientació d’examen.\" />
  <link rel=\"stylesheet\" href=\"/css/esquema-explicacio-theme.css\" />
</head>

<body>
  <div class=\"wrap\">
    <header>
      <div class=\"crumbs\">
        <a href=\"/\">Inici</a>
        <span class=\"muted\">/</span>
        <span>Bloc I</span>
        <span class=\"muted\">/</span>
        <span>Tema 3</span>
        <span class=\"muted\">/</span>
        <span>Punt {point}</span>
      </div>
      <a class=\"back\" href=\"javascript:history.back()\" aria-label=\"Tornar enrere\">
        <span class=\"arr\">←</span>
        Back
      </a>
      <h1>{normalized_h1}</h1>
      <p class=\"subtitle\">{intro}</p>
      <div class=\"pillrow\" aria-label=\"Conceptes clau\">
        <span class=\"pill\"><b>UE</b> referències normatives</span>
        <span class=\"pill\"><b>Jurisprudència</b> doctrina rellevant</span>
      </div>
    </header>

    <div class=\"layout\">
      <nav class=\"toc\" aria-label=\"Taula de continguts\">
        <h2>Continguts</h2>
        <div class=\"toc-links\"></div>
        <div class=\"small\">Navegació automàtica generada des dels títols h2 i h3.</div>
      </nav>

      <main>
        {contents_block}
        <div>
    {source_body}
        </div>
      </main>
    </div>
  </div>

  <script src=\"/js/esquema-explicacio-theme.js\"></script>
</body>
</html>
"""
        if not is_safe_rewrite(original, wrapped):
            print(f"SKIP (protecció contingut): {path}")
            return False

        if apply_changes:
            path.write_text(wrapped, encoding="utf-8")
        return True

    new_text = original

    title_match = re.search(r"<title[^>]*>(.*?)</title>", new_text, re.IGNORECASE | re.DOTALL)
    if title_match:
        current = strip_tags(title_match.group(1))
        if current != normalized_h1:
            new_text = re.sub(r"<title[^>]*>.*?</title>", f"<title>{normalized_h1}</title>", new_text, count=1, flags=re.IGNORECASE | re.DOTALL)
            changed = True

    if h1_match:
        current_h1 = strip_tags(h1_match.group(1))
        if current_h1 != normalized_h1:
            new_text = re.sub(r"<h1[^>]*>.*?</h1>", f"<h1>{normalized_h1}</h1>", new_text, count=1, flags=re.IGNORECASE | re.DOTALL)
            changed = True

    if not has_contents:
        contents_block = build_contents_block(new_text)
        if contents_block:
            insert_pos = new_text.lower().find("<main")
            if insert_pos != -1:
                main_open_end = new_text.find(">", insert_pos)
                if main_open_end != -1:
                    new_text = new_text[: main_open_end + 1] + "\n" + contents_block + new_text[main_open_end + 1 :]
                    changed = True

    if changed:
        if not is_safe_rewrite(original, new_text):
            print(f"SKIP (protecció contingut): {path}")
            return False
        if apply_changes:
            path.write_text(new_text, encoding="utf-8")

    return changed


def main() -> None:
    parser = argparse.ArgumentParser(description="Normalitza HTML de Tema 3 sense risc de pèrdua de contingut.")
    parser.add_argument("--apply", action="store_true", help="Escriu canvis al disc. Per defecte és dry-run.")
    args = parser.parse_args()

    changed = []
    for path in sorted(TARGET_DIR.glob("punt-*.html")):
        if normalize_file(path, apply_changes=args.apply):
            changed.append(path)

    mode = "APPLY" if args.apply else "DRY-RUN"
    print(f"Mode: {mode}")
    print(f"Fitxers normalitzables: {len(changed)}")
    for item in changed:
        print(item)


if __name__ == "__main__":
    main()
