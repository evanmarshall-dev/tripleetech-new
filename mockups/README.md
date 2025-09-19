# Client Mockups Package

This package contains low-fidelity wireframes and high-fidelity HTML/CSS mockups derived from your recent homepage screenshot. They’re mobile‑first, accessible-leaning, and easy to iterate.

## Structure

- `styles/tokens.css` — Shared design tokens (colors, type scale, spacing) and primitives.
- `wireframes/index.html` — Low‑fi wireframe (structure, IA, and content blocks).
- `high-fidelity/index.html` — High‑fi mockup (visual design, typography, imagery) using assets from `public/images`.

## How to preview

1. Open the HTML files directly in your browser, or
2. Serve the folder locally (recommended for consistent relative paths).

```sh
# From the project root
python3 -m http.server 8080  # or use any static server
# Then visit:
# http://localhost:8080/mockups/wireframes/
# http://localhost:8080/mockups/high-fidelity/
```

## Notes for client review

- Wireframes show layout and hierarchy sans brand visuals.
- High-fidelity is a concept pass; replace copy and imagery as needed.
- The high-fidelity mock now references images under `../../public/images` for the hero (banner-large.jpg), customer logos, and a team photo. Swap these assets with your own by replacing files in `public/images/` and keeping the same filenames, or update the `src` paths in the HTML.
- The wireframe includes a simple hero image placeholder and a logos row to indicate content intent without heavy styling.

## Next steps

- Provide your brand tokens (colors, fonts, logo) and we’ll tune `tokens.css`.
- Share target CTAs and product screenshots; we’ll replace the hero image and flesh out additional sections.
- If you want variants (A/B), we can add alternate hero layouts and feature arrangements.
