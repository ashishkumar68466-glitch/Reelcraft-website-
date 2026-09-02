# Reelcraft — clipping agency website

A React + Tailwind CSS marketing site for a short-form video
clipping/repurposing agency.

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer installed.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Edit the content

Almost everything on the page — the agency name, hero copy, stats,
services, portfolio items, pricing, testimonials and FAQ — lives in
one file:

```
src/data/siteContent.js
```

Change the values there; you shouldn't need to touch the component
files for normal edits. Anything commented `DEMO` (stats, portfolio,
testimonials) is placeholder content the brief asked to be marked
clearly — swap it for your real numbers and client work before you
launch.

To swap portfolio thumbnails for real video previews, replace the
gradient `from`/`to` colors in `siteContent.js` with a background
image, or edit `src/components/Portfolio.jsx` to render a `<video>`
or embed instead of the placeholder frame.

## Build for production

```bash
npm run build
```

This outputs static files to `dist/`. Preview the production build
locally with:

```bash
npm run preview
```

## Deploy it

The site is a static build, so any static host works. Two easy options:

**Vercel**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: Vite. Leave build settings as detected
   (`npm run build`, output directory `dist`).
4. Deploy.

**Netlify**
1. Push this folder to a GitHub repo (or drag-and-drop the `dist/`
   folder after running `npm run build` into Netlify's dashboard).
2. If connecting a repo: build command `npm run build`, publish
   directory `dist`.
3. Deploy.

Both give you a free HTTPS URL, and you can attach a custom domain
from either dashboard afterward.
