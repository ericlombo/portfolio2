# Eric Lombo Mwakio — portfolio

A React + TypeScript portfolio presented as an interview-room interaction, with a complete 2D reading view and the original portfolio preserved at `/legacy`.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:5000`. Use `npm run check` for TypeScript and `npm run build` for the production build. The accessible 2D view is at `/classic`; the original site is still available at `/legacy`.

## Structure

- `client/src/pages/home.tsx` — interview-room interaction and overlays.
- `client/src/pages/classic.tsx` — semantic, scrollable 2D fallback with the same typed content.
- `client/src/pages/legacy.tsx` — preserved original portfolio page.
- `client/src/components/portfolio/` — scene, book, and phone interfaces.
- `client/src/content/` — typed About, Experience, Projects, and Extras content.
- `client/src/assets.config.ts` — central inventory for available photos and replaceable scene assets.
- `client/public/` — robots, social preview, and generated sitemap output.
- `client/src/assets.config.ts` — the central asset manifest; `CREDITS.md` and `NEEDS_FROM_ERIC.md` record attribution and missing inputs.

## Add or update a project

Edit `client/src/content/projects.ts` and add an item to `projects`. Provide a concise, factual summary, the role, only verified technologies, and links only when the exact destination is known. The book and 2D fallback render from that same list. Add a project screenshot only after supplying the image and confirming it may be published; update `assets.config.ts` and `CREDITS.md` at the same time.

## Swap scene assets

The current interview room is an intentionally labeled CSS placeholder scene; it does not claim to be a photoreal WebGL rendering. The provided photo is available through `client/src/assets.config.ts`. Candidate replacement GLB paths and readiness are recorded in the manifest. When licensed models are supplied, put optimized files under `client/public/assets/scene/`, update the manifest and credits, then wire the models into the scene renderer. Do not ship unlicensed models or leave a placeholder marked as a real asset. See `NEEDS_FROM_ERIC.md` for the model/export specifications and the missing project materials.

## Tests

```bash
npm run test:e2e
```

This runs Playwright smoke tests. On a fresh machine, install a browser once with `npx playwright install chromium` (install OS browser dependencies if Playwright reports they are missing).

## Build and deploy

The existing `netlify.toml` runs `npm run build:client` and publishes `dist/public`; the full app build is `npm run build`. Set `SITE_URL` in the deployment environment to the exact portfolio origin so the prebuild sitemap generator can write absolute `/` and `/classic` URLs. Without `SITE_URL`, the build continues and prints a warning rather than inventing a domain. Confirm the actual production domain and existing analytics configuration before changing deployment settings; no domain, CNAME, or analytics identifier is present in this repository.
