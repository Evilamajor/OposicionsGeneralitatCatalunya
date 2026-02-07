# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Project dev notes (local additions)

- Quick dev commands (run inside `oposicions/`):

```bash
npm install
npm run dev    # starts Vite with HMR
npm run build  # production build
npm run preview  # preview build
```

- Where to add content:
	- App & routes: `oposicions/src/App.jsx`
	- Data (blocks & topics): `oposicions/src/data.js`
	- Static explanation pages (root-relative): `oposicions/public/explicacio*.html`

- Notes for contributors:
	- When adding a new topic, add its `{ id, label, filename }` entry to `oposicions/src/data.js` and place the corresponding HTML file into `oposicions/public/`.
	- Start the dev server and open `/` to verify the sidebar route and topic preview.
	- Keep UI changes minimal and prefer existing patterns (`.jsx` functional components and global CSS files).

---

## Private content

This is a **public repository**. Some study resources (personal ChatGPT
conversation links, restricted PDFs, private notes) are intentionally kept
out of version control.

- Public HTML files may contain placeholder text such as
  *"Encara no s'han afegit converses."* where private links would go.
- A local `private/` folder (git-ignored) is available for personal resources.
  See `private/README.md` for details.
- Environment files (`.env`) are also excluded. Use `.env.example` as a
  template if needed.

**Never commit passwords, tokens, private URLs, or account-restricted links.**
