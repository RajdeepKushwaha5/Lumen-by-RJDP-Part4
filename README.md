# ∆ rajdeep — Minimal Portfolio (static)

This repository contains a lean, static HTML/CSS/JS portfolio site extracted from a Jekyll source. The goal is a minimal, self-contained personal homepage with accessible defaults, fluid typography, optimized SVG icons, and a tiny JavaScript enhancement (auto-year + lightweight hero particle animation).

## What you'll find

- `index.html` — the single-page site entry.
- `assets/css/style.css` — primary stylesheet (reset, variables, fluid type, responsive rules).
- `assets/js/main.js` — small scripts: year updater and hero canvas animation (respects `prefers-reduced-motion`).
- `assets/icons/` — individual icon files (SVG) and inlined icons in markup.
- `assets/og/spotify-card.svg` — generated Open Graph SVG used for sharing playlists.

## Goals / Design

- Zero build step required: drop the files on any static host.
- Fast, accessible, readable on small screens.
- Icons inline as SVG so colors follow CSS variables.
- Minimal JavaScript; animation disabled for users who prefer reduced motion.

## Preview locally

You can preview the site with a simple static server. Use whichever you prefer:

Using Python 3 (PowerShell):

```powershell
# from inside the clean-site folder
python -m http.server 8080
# then open http://localhost:8080 in your browser
```

Using Node (http-server):

```powershell
npm install -g http-server
http-server -p 8080
# open http://localhost:8080
```

## Export Open Graph (SVG → PNG)

Some social platforms prefer raster images for link previews. To produce a 1200×630 PNG from the included SVG, use one of these local tools:

ImageMagick (Windows PowerShell):

```powershell
magick convert assets/og/spotify-card.svg -background black -flatten -resize 1200x630 assets/og/spotify-card.png
```

rsvg-convert (librsvg):

```powershell
rsvg-convert -w 1200 -h 630 assets/og/spotify-card.svg -o assets/og/spotify-card.png
```

Or use Node + sharp (install dependencies first):

```powershell
# from repo root
npm init -y
npm install sharp
# then run a small Node script (create convert.js) to read svg and write png
```

If you'd like, I can add a small `scripts/convert-og.js` helper and a `package.json` script to automate this.

## Accessibility and performance notes

- Focus outlines are visible for keyboard users.
- The hero animation respects `prefers-reduced-motion`.
- Icons are inline SVGs and use `currentColor` for easy theming.

## Next improvements (suggested)

- Convert the hero `img` to a responsive `<picture>` with multiple sizes.
- Inline more metadata (Twitter card tags, locale-specific structured data).
- Add minification/build step for production (optional).
- Generate a PNG OG image automatically as part of a small npm script.

---

If you want, I can add the PNG conversion script, or generate responsive hero image sizes and update markup to use `<picture>` automatically.

## Repository

This project is available on GitHub: https://github.com/RajdeepKushwaha5/Lumen-by-RJDP-Part4