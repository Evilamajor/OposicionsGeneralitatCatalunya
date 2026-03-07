# Copilot / AI agent instructions for OposicionsGeneralitatCatalunya

Purpose
- Help AI agents become productive quickly when modifying the small Vite + React app in `oposicions/`.

Quick start (developer actions)
- Install dependencies: run `npm install` in the `oposicions` folder.
- Dev server: `npm run dev` (runs Vite with HMR). Use this to verify UI changes.
- Build: `npm run build` in `oposicions` then `npm run preview` to serve the production build locally.

Big-picture architecture
- Single-page React app built with Vite located in the `oposicions/` folder.
- Entrypoint: `oposicions/src/main.jsx` mounts `App` and wraps it with `BrowserRouter`.
- Routing & pages: `oposicions/src/App.jsx` defines routes. Key routes:
  - `/` → `WelcomePanel`
  - `/bloc/:blocId` → `BlocPage`
- Data source: `oposicions/src/data.js` contains the `blocks` array used by `Sidebar` and `BlocPage`.
- Static content: `oposicions/public/*.html` (e.g., `explicacio1.html`) are standalone HTML explanations linked from the app.

Project-specific conventions & patterns
- Components use functional React components and JSX files with `.jsx` extension (e.g., `Sidebar.jsx`, `BlocPage.jsx`).
- Routing: uses `react-router-dom@6` (`NavLink`, `Routes`, `Route`, `useParams`). Keep route paths consistent with `Bloc` ids in `data.js`.
- Linking to static files: `BlocPage` links topics with `<a href="/{filename}" target="_blank">` — the filename comes from `data.js` and must exist in `oposicions/public`.
- Styling: global CSS files `oposicions/src/index.css` and `oposicions/src/App.css` are used; no CSS modules or styled-components in this repo.

Integration points & important files
- Data: `oposicions/src/data.js` — modify this to add/remove blocs or topic references.
- Router/entry: `oposicions/src/main.jsx`, `oposicions/src/App.jsx` — change routes or layout here.
- Components: `oposicions/src/components/*` — find UI logic here (`Sidebar.jsx`, `BlocPage.jsx`, `WelcomePanel.jsx`, `BlocList.jsx`).
- Static pages: `oposicions/public/explicacio*.html` — update or add new HTML explanation files; their names must match `data.js` entries.

Common tasks and examples
- Add a new bloc with a topic:
  1. Add `{ id: 'blocX', title: 'Bloc X', topics: [{ id: 'expY', label: 'Explicació Y', filename: 'explicacioY.html' }] }` to `oposicions/src/data.js`.
  2. Add `oposicions/public/explicacioY.html` with the content to display.
  3. Start dev server and open `/` to verify the sidebar route and the topic link.
- Change layout or route: edit `oposicions/src/App.jsx` — the app layout is a simple two-column layout (`Sidebar` + `main`).

Gotchas / notes for agents
- Always run commands from the `oposicions` directory (scripts are defined there).
- When adding a new topic make sure the `filename` value is placed into `public/` (paths are root-relative when served by Vite).
- There are no unit tests or CI configuration in the repo — manual `npm run dev` verification is the primary dev feedback loop.
- Keep changes minimal and idiomatic to the existing code style (no new frameworks or build tools).

If you need more context
- Inspect these files for the fastest orientation: `oposicions/src/main.jsx`, `oposicions/src/App.jsx`, `oposicions/src/data.js`, `oposicions/src/components/Sidebar.jsx`, `oposicions/src/components/BlocPage.jsx`.

Feedback
- If any instruction here is unclear or you need more examples (for example, sample new-topic PRs), ask and I will iterate.
