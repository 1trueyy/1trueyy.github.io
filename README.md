# TRUEY — Official Music Website

Public-facing, no-login music site for Truey / 1096 Entertainment, hosted at https://1trueyy.github.io/.

## Design
A minimal, artwork-first artist music storefront with large cover tiles, black-and-ivory palette, bold typography, and a muted Fake Killas YouTube video behind the main homepage banner.

## Singles — $1.99 planned downloads
- **Fake Killas** — from **Mr. Rapper** (2023). The store uses that album's official Apple Music artwork, because Fake Killas is published on that album. If Truey has a separate intended cover for this digital sale, replace the image after receiving the exact cover from the artist.
- **Shit Crazy** — official 2022 single artwork from Apple Music.
- **Important:** Checkout and gated digital-file delivery are **not active**. Purchase presentation is explicitly labeled *coming soon*. Apple Music and Spotify links remain available.

## Public music catalog
`catalog.json` contains verified release and song listings sourced from Apple's public release metadata. `script.js` drives catalog search and filters.

## Editing
- `index.html` — homepage, singles, videos, outbound links
- `styles.css` — mobile-first layout and styling
- `script.js` — interactive catalog
- `catalog.json` — music metadata

## Hosting and licensing
GitHub Pages serves the public site for free. No login required for fans. YouTube videos are embedded; cover art is displayed from streaming-service artwork URLs. The website does not redistribute audio files. A separate checkout and protected delivery service are necessary before charging for downloads.
