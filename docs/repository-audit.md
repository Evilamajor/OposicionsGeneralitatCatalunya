# Repository Structure Audit

Date: 2026-03-14
Scope: `public/content/bloc-1` … `public/content/bloc-7`, all `tema-*` directories, and `explicacions/punt-01.html` … `punt-24.html`.

## Method

- Enumerated all `tema-*` directories under `bloc-1` … `bloc-7`.
- For each tema, counted `punt-XX.html` files found inside any `explicacions` directory under that tema.
- Flagged misplaced explanation locations (notably `esquemes/explicacions`).
- Scanned for empty folders under audited blocs.
- Detected duplicate files by SHA-256 hash.
- Flagged legacy explanation HTML files as those missing at least one new-template marker:
  - `esquema-explicacio-theme.css`
  - `esquema-explicacio-theme.js`
  - `class="wrap"`

---

## 1) Tema verification: exactly 24 explanation files

- Total tema directories audited: **48**
- Temes with exactly 24 `punt-XX.html` files: **36**
- Temes not matching exactly 24 files: **12**

### Non-compliant temas

| Bloc | Tema | Found `punt-XX.html` files | Issue |
|---|---:|---:|---|
| bloc-2 | tema-04 | 0 | Missing `explicacions/punt-01..24.html` |
| bloc-2 | tema-05 | 0 | Missing `explicacions/punt-01..24.html` |
| bloc-2 | tema-06 | 0 | Missing `explicacions/punt-01..24.html` |
| bloc-2 | tema-07 | 0 | Missing `explicacions/punt-01..24.html` |
| bloc-2 | tema-08 | 0 | Missing `explicacions/punt-01..24.html` |
| bloc-3 | tema-09 | 0 | Missing `explicacions/punt-01..24.html` |
| bloc-3 | tema-10 | 0 | Missing `explicacions/punt-01..24.html` |
| bloc-3 | tema-11 | 0 | Missing `explicacions/punt-01..24.html` |
| bloc-3 | tema-12 | 0 | Missing `explicacions/punt-01..24.html` |
| bloc-4 | tema-13 | 48 | Duplicate set in two locations (`explicacions` + `esquemes/explicacions`) |
| bloc-4 | tema-14 | 48 | Duplicate set in two locations (`explicacions` + `esquemes/explicacions`) |
| bloc-4 | tema-15 | 48 | Duplicate set in two locations (`explicacions` + `esquemes/explicacions`) |

---

## 2) Misplaced files/folders (`esquemes/explicacions`)

Detected **29** misplaced explanation folders:

- bloc-1: tema-1, tema-2, tema-3, tema-4, tema-5, tema-6, tema-7, tema-8, tema-9, tema-10, tema-11, tema-12, tema-13, tema-14, tema-15, tema-16, tema-17, tema-18, tema-19, tema-20, tema-21, tema-22, tema-23, tema-24, tema-25
- bloc-2: tema-2
- bloc-4: tema-13, tema-14, tema-15

(Each path follows: `<bloc>/<tema>/esquemes/explicacions`.)

---

## 3) Empty folders

- Empty folders found in audited scope: **0**

---

## 4) Duplicated files

### Duplicates within explanation files (`punt-XX.html`)

- Duplicate groups: **1**
- Duplicated files involved: **2**

Exact duplicate pair:

- `public/content/bloc-1/tema-3/esquemes/explicacions/punt-16.html`
- `public/content/bloc-1/tema-3/esquemes/explicacions/punt-17.html`

### Duplicates across all files in audited blocs

- Duplicate groups (all file types): **139**

Note: many appear to be repeated boilerplate/base files (e.g. `diagrama-base.html`, `pregunta-base.html`, shared materials/legislacio placeholders), which may be intentional.

---

## 5) Legacy HTML files not using the new template

Checked explanation HTML files: **1008**

- New-template compliant: **291**
- Legacy (missing one or more required template markers): **717**

Affected temas (legacy file counts):

- bloc-1/tema-2: 2
- bloc-1/tema-3: 24
- bloc-1/tema-4: 24
- bloc-1/tema-5: 24
- bloc-1/tema-6: 24
- bloc-1/tema-7: 24
- bloc-1/tema-8: 24
- bloc-1/tema-9: 24
- bloc-1/tema-10: 24
- bloc-1/tema-11: 24
- bloc-1/tema-12: 24
- bloc-1/tema-13: 24
- bloc-1/tema-14: 24
- bloc-1/tema-15: 24
- bloc-1/tema-16: 24
- bloc-1/tema-17: 24
- bloc-1/tema-18: 24
- bloc-1/tema-19: 24
- bloc-1/tema-20: 24
- bloc-1/tema-21: 24
- bloc-1/tema-22: 24
- bloc-1/tema-23: 24
- bloc-1/tema-24: 24
- bloc-1/tema-25: 24
- bloc-2/tema-2: 24
- bloc-4/tema-13: 43
- bloc-4/tema-14: 48
- bloc-4/tema-15: 48

---

## Summary

The audit found structural inconsistencies concentrated in three areas:

1. Missing explanation sets in `bloc-2/tema-04..08` and `bloc-3/tema-09..12`.
2. Misplaced explanation trees under `esquemes/explicacions` (29 tema paths), including duplicated full sets in `bloc-4/tema-13..15`.
3. A large legacy backlog (717 explanation HTML files) not yet migrated to the new template.

No repository files were modified beyond this audit report.
