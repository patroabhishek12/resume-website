<!-- Copilot instructions for repository-specific guidance -->
# Copilot / AI agent instructions

Purpose: Help AI coding agents become productive quickly in this repository.

- Quick start commands:
  - Install: `npm install`
  - Run locally: `npm start` (runs `node server.js`)
  - Dev (auto-reload): `npm run dev` (uses `nodemon`)
  - Build: `npm run build` (no-op placeholder)
  - Deploy: `npm run deploy` (uses `gh-pages -d public` — pushes `public/` to `gh-pages`)

- Big picture / architecture:
  - This is a static, single-page resume site whose source is `public/`.
  - `server.js` is a minimal Express dev server that serves `public/` for local preview.
  - Production hosting is typically GitHub Pages; `package.json` handles deployment via `gh-pages`.
  - The repo intentionally keeps logic client-side: `public/index.html`, `public/styles.css`, `public/script.js`.

- Key files to reference for changes:
  - Edit page content and sections in `public/index.html` (sections are identified by `id` attributes used by the nav).
  - Theme/colors live in `public/styles.css` (`:root` contains CSS variables like `--primary-color`).
  - UI behavior (mobile menu, smooth scroll, active nav highlight, intersection observer animations) is in `public/script.js`.
  - Local server behavior: `server.js` (static file serving and basic 404 handler).
  - Deployment: `package.json` scripts and `public/CNAME` (if using a custom domain).

- Project-specific conventions and patterns:
  - Single-page navigation: nav links are anchors to `section` elements by `id` (e.g., `#experience`); when adding/removing sections, update the nav and ensure `script.js` selectors still match.
  - Style variables: change colors and global spacing in `:root` inside `public/styles.css` rather than scattering static values.
  - Animations and visibility are driven by the IntersectionObserver setup in `public/script.js`; prefer adding CSS transitions rather than imperative JS animations.
  - No build toolchain: the site is static — avoid introducing complex bundlers unless necessary; follow the repo's minimal approach.

- Integration points & external dependencies:
  - `express` is only for local dev (`server.js`).
  - `gh-pages` publishes `public/` to GitHub Pages via `npm run deploy`.
  - External assets are loaded from CDNs (Font Awesome) directly in `index.html`.

- Developer workflow notes / gotchas:
  - `npm run deploy` expects a Git remote and will publish the `public/` folder to the `gh-pages` branch — ensure commits are pushed or the repo is correctly set.
  - `package.json` sets `engines.node` to `>=14.0.0`; tests or features should be validated against Node 14+.
  - There are no automated tests in the repo — add unit tests only if you also add a test runner and CI config.
  - Keep `public/CNAME` intact if using a custom domain; deleting it will change the published domain.

- Examples of actionable edits:
  - Update displayed name and contact info: edit the hero in `public/index.html` (search for `hero-title` / `hero-subtitle`).
  - Change primary color: modify `--primary-color` in `public/styles.css`.
  - Add a new resume section: add a `<section id="new-section">` to `public/index.html`, add its nav link, and ensure smooth-scroll behavior remains (see `script.js` handlers).

- When modifying code, follow these rules:
  - Keep the site static-first; prefer client-side changes in `public/`.
  - If you change `server.js`, preserve static-serving behavior and 404 handling.
  - Update `README.md` when adding or changing developer-visible scripts or workflows.

If anything in this summary is unclear or you want specific examples (e.g., add a new section or swap the CSS theme), tell me which part to expand and I will iterate.
