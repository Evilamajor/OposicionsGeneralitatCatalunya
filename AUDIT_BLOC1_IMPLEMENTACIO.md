# Auditoria tècnica · Implementació Bloc 1 (model base per Bloc 4)

Data d'auditoria: 2026-03-05

## 1) Estructura de carpetes del Bloc 1

### 1.1 Contingut públic (HTML/PNG)

Arrel:

```text
public/content/bloc-1/
├─ tema-1 ... tema-25/
├─ materials.html
├─ legislacio.html
├─ materials/
├─ legislacio/
├─ esquemes/
└─ powerpoints/
```

Patró **real i repetit** a cada tema (`tema-1` a `tema-25`):

```text
public/content/bloc-1/tema-N/
└─ esquemes/
   ├─ desenvolupament-base.html
   ├─ explicacions/
   │  ├─ punt-01.html
   │  ├─ punt-02.html
   │  └─ ... punt-24.html
   └─ diagrames/
      ├─ punt-01.png
      ├─ punt-02.png
      └─ ... punt-24.png
```

Comprovació quantitativa:
- 25 temes
- per tema: `1` fitxer base + `24` HTML d'explicació + `24` PNG de diagrama

### 1.2 Dades ASK (preguntes test)

Patró **real i repetit**:

```text
src/data/bloc1/
├─ tema1/
│  ├─ punt1Ask.js
│  ├─ punt2Ask.js
│  └─ ... punt24Ask.js
├─ tema2/
│  └─ ... punt24Ask.js
└─ ... tema25/
   └─ ... punt24Ask.js
```

Comprovació quantitativa:
- 25 carpetes (`tema1` ... `tema25`)
- 24 fitxers ASK per tema
- total Bloc 1: **600** fitxers `punt*Ask.js`

### 1.3 Carpeta legacy detectada (fallback històric)

Només a alguns temes (especialment 1-3) hi ha restes de model antic:

```text
public/content/bloc-1/tema-1/preguntes/
public/content/bloc-1/tema-2/preguntes/
public/content/bloc-1/tema-3/preguntes/
public/content/bloc-1/tema-1/diagrama/
public/content/bloc-1/tema-2/diagrama/
public/content/bloc-1/tema-3/diagrama/
```

S'utilitzen com a fallback, però el model principal és `esquemes/explicacions` + `esquemes/diagrames` + `src/data/bloc1/.../puntXAsk.js`.

---

## 2) Tipus de fitxers utilitzats

- Explicació de punt: `punt-XX.html`
- Esquema gràfic: `punt-XX.png`
- Preguntes ASK: `puntXAsk.js`
- Estructura base de tema: `desenvolupament-base.html`

Formats ASK admesos pel loader:
- `default export` array de preguntes
- objecte amb `questions` o `preguntes`
- export nominal tipus `puntXXAsk`

---

## 3) Flux de càrrega del contingut (Bloc → Tema → Punt → EXP/GRAF/ASK)

## 3.1 Bloc i tema

1. `Sidebar.jsx` genera enllaços a `/bloc/:blocId/:temaId/esquemes`.
2. `App.jsx` resol la ruta i renderitza `BlocPage`.
3. `BlocPage.jsx` carrega la secció activa; per `esquemes` injecta `EsquemesViewer` amb:
   - `schemaPath = /content/${blocId}/${temaId}/esquemes/desenvolupament-base.html`

## 3.2 Punt i accions EXP/GRAF/ASK

1. `EsquemesViewer.jsx` fa `fetch` del `desenvolupament-base.html`.
2. `PointActionsManager.jsx` processa el DOM carregat:
   - detecta punts per IDs `pN-explicacio`, `pN-diagrama`, `pN-preguntes`
   - extreu `pointId` via regex `^p(\d+)-`
   - substitueix títol per fila amb botons `GRAF` i `ASK`
   - deixa `EXP` com el desplegable principal del punt
3. En obrir un punt, `EsquemesViewer` carrega l'HTML d'explicació del punt des de:
   - `/content/${blocId}/${temaId}/esquemes/explicacions/punt-XX.html`

---

## 4) Components React implicats

- Navegació general de blocs/temes: `src/components/Sidebar.jsx`
- Rutes i muntatge de pantalles: `src/App.jsx`
- Pantalla de tema/seccions: `src/components/BlocPage.jsx`
- Render base d'esquemes i explicacions (EXP): `src/components/bloc/EsquemesViewer.jsx`
- Transformació DOM i accions punt (EXP/GRAF/ASK): `src/components/bloc/PointActionsManager.jsx`
- Viewer de diagrama (GRAF): `src/components/FullscreenDiagramViewer.jsx`
- Ruta de preguntes (ASK): `src/components/QuizRoutePage.jsx`
- Render test ASK i notes: `src/components/AskPageWrapper.jsx`, `src/components/AskTest.jsx`, `src/components/AskNotes.jsx`
- Registre i resolució ASK: `src/data/askRegistry.js`

---

## 5) Sistema d'enrutament

Definit a `src/App.jsx` (React Router):

- `/bloc/:blocId/:temaId/:seccio` → `BlocPage`
- `/bloc/:blocId/:temaId/ask/:punt` → `QuizRoutePage`
- `/bloc/:blocId/tema/:temaId/preguntes/:punt` → `QuizRoutePage` (compatibilitat)
- `/diagram-viewer/:blocId/:temaId/:punt` → `FullscreenDiagramViewer`

També existeixen amb prefix `/generalitat/...` (mateix mapatge de components).

Paràmetres (`blocId`, `temaId`, `punt`) es recuperen amb `useParams()` als components de destí.

---

## 6) Sistema de càrrega ASK (`puntXXAsk.js`)

Nucli a `src/data/askRegistry.js`:

1. Descobriment automàtic de fitxers:
   - `import.meta.glob('./**/punt*Ask.js', { eager: true })`
2. Parseig del path amb regex:
   - `./<bloc>/<tema>/punt0*<n>Ask.js`
3. Normalització d'IDs:
   - `bloc1`/`bloc-1` → `bloc-1`
   - `tema13`/`tema-13` → `tema-13`
   - `punt-01`/`1` → `1`
4. Construcció de clau:
   - `bloc-1|tema-13|1`
5. `getAskConfig({ blocId, temaId, punt })` retorna:
   - `title`, `questionsData`, `storageKey`
6. `QuizRoutePage` consumeix `getAskConfig`:
   - si existeix ASK registry → renderitza `AskPageWrapper`
   - si no, intenta fallback HTML/JSON a `public/content/.../preguntes`

Conclusió: el fitxer `puntXXAsk.js` **no s'importa manualment** component a component; es resol per registre dinàmic global.

---

## 7) Model reutilitzable 100% compatible per Bloc 4 (Contractació pública)

## 7.1 Estructura recomanada exacta

```text
public/content/bloc-4/
├─ tema-13/
│  └─ esquemes/
│     ├─ desenvolupament-base.html
│     ├─ explicacions/punt-01.html ... punt-24.html
│     └─ diagrames/punt-01.png ... punt-24.png
├─ tema-14/
│  └─ esquemes/
│     ├─ desenvolupament-base.html
│     ├─ explicacions/punt-01.html ... punt-24.html
│     └─ diagrames/punt-01.png ... punt-24.png
└─ tema-15/
   └─ esquemes/
      ├─ desenvolupament-base.html
      ├─ explicacions/punt-01.html ... punt-24.html
      └─ diagrames/punt-01.png ... punt-24.png

src/data/bloc4/
├─ tema13/
│  ├─ punt1Ask.js ... punt24Ask.js
├─ tema14/
│  ├─ punt1Ask.js ... punt24Ask.js
└─ tema15/
   ├─ punt1Ask.js ... punt24Ask.js
```

## 7.2 Requisits crítics de compatibilitat

1. `desenvolupament-base.html` ha de contenir, per cada punt, aquests IDs:
   - `pN-explicacio`
   - `pN-diagrama`
   - `pN-preguntes`
2. Noms de fitxer d'explicació i diagrama:
   - `punt-01.html`, `punt-01.png`, etc. (2 dígits)
3. Noms ASK:
   - `punt1Ask.js` ... `punt24Ask.js` (sense zero inicial obligatori)
4. Ubicació ASK:
   - `src/data/bloc4/tema13|tema14|tema15/`
5. Rutes ja compatibles:
   - en tenir `bloc-4` i `tema-13..15` a `src/data.js`, el routing existent funciona sense canvis estructurals.

## 7.3 Flux final esperat (sense canvis d'arquitectura)

- Sidebar → `/bloc/bloc-4/tema-13/esquemes`
- EXP: carrega `/content/bloc-4/tema-13/esquemes/explicacions/punt-XX.html`
- GRAF: obre `/diagram-viewer/bloc-4/tema-13/XX` i carrega PNG
- ASK: obre `/bloc/bloc-4/tema-13/ask/punt-XX` i resol `src/data/bloc4/tema13/puntXAsk.js` via `askRegistry`

Això replica el model del Bloc 1 amb compatibilitat funcional equivalent.
