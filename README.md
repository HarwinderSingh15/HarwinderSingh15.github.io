# Harwinder Singh · Portfolio

Personal portfolio of Harwinder Singh, Full Stack Mobile Developer (React Native, Node.js, TypeScript).

**Live site:** https://harwindersingh15.github.io/

The site is built as a building: every app I shipped is a floor, and you take the lift up to see it. Each floor shows the app, what I built, a key number, and links to the live site and store listing.

## Stack

- [Vite](https://vite.dev/) for dev server and build
- Plain HTML, CSS and TypeScript (no framework)
- [GSAP](https://gsap.com/) for motion
- Self-hosted fonts via Fontsource
- Deployed to GitHub Pages with GitHub Actions

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
npm run dev       # start the dev server
npm run build     # build to dist/
npm run preview   # preview the production build
```

## Project structure

```
index.html          The site (markup, styles and page script)
demos/data.ts       Content: apps, email, GitHub and resume links
demos/a-d.html      Earlier design explorations (not part of the build)
poster.html, src/   Earlier poster-style design (not part of the build)
public/             Static files copied as-is to the site root
  Harwinder-Singh-Resume.pdf
  shots/            App screenshots (.webp)
  og.jpg            Social share image
.github/workflows/  GitHub Pages deploy
```

## Updating content

- **Apps:** edit the `APPS` array in `demos/data.ts`. Add screenshots to `public/shots/` and reference them as `/shots/<file>.webp`.
- **Resume:** replace `public/Harwinder-Singh-Resume.pdf`, keeping the exact file name so the download link keeps working.
- **Email / GitHub link:** edit the constants at the top of `demos/data.ts`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. The update is live about a minute after the workflow finishes. You can also run it manually from the **Actions** tab.
