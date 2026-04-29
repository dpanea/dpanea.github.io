# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio and lead generation website for Daniel Panea, an AI Architect specializing in Sovereign AI Engineering. Static HTML/CSS/JS — no build tools, no frameworks, no package manager.

Deployed to GitHub Pages at `danielpanea.com` via the `CNAME` file. Pushing to `main` triggers an automatic deployment.

## Local Development

Serve the project root with any static HTTP server:

```bash
python -m http.server 8000
# or: npx serve .
```

No build step required. Open `http://localhost:8000` in a browser.

## Architecture

Three pages share the same navigation and footer structure — when updating either, apply changes to all three files:

- `index.html` — main landing page
- `privacy.html` — GDPR privacy policy (`noindex`)
- `impressum.html` — EU legal notice (`noindex`)

All styling lives in `assets/css/style.css` (~1400 lines), organized around CSS custom properties defined at the top (colors, typography, spacing, shadows, z-index, transitions). Prefer extending the existing variable system rather than introducing hardcoded values.

JavaScript is a single vanilla file `assets/js/main.js` (~250 lines) with no dependencies. It handles:
- Mobile nav toggle
- Header scroll blur effect
- Scroll-triggered fade-in animations via `IntersectionObserver`
- YouTube video lightbox modal
- ConvertKit lead capture form submission (Form ID: `8913239`)

Images are in `assets/images/`. SVG icons are inlined in HTML.

## Design System

Dark theme (background `#050505`) with blue/purple accent gradient (`#3b82f6` → `#8b5cf6`). Typography: Fraunces (headings), Inter (body), JetBrains Mono (UI accents). Glassmorphism cards use `backdrop-filter: blur()`. Animations are scroll-triggered via the `.fade-in` / `.fade-up` CSS classes toggled by JS.

## EU Compliance

The site targets the European market. `impressum.html` is a legal requirement for EU business operations. `privacy.html` covers GDPR compliance. Both pages must remain accessible from the footer on all three pages.

## Repository Guidelines

### Project Structure
- `index.html` — main landing page
- `privacy.html` — GDPR privacy policy (`noindex`)
- `impressum.html` — EU legal notice (`noindex`)
- `assets/css/style.css` — all styling (~1400 lines), CSS custom properties at the top
- `assets/js/main.js` — single vanilla JS file (~250 lines), no dependencies
- `assets/images/` — all image assets; SVG icons are inlined in HTML
- `CNAME` — GitHub Pages custom domain configuration

### Coding Style
- Pure HTML/CSS/JS — no build tools, no frameworks, no package manager.
- Prefer extending the existing CSS custom property system over hardcoded values.
- Navigation and footer are duplicated across all three HTML pages — keep them in sync.
- Keep JavaScript dependency-free; no npm packages.

### Deployment
- Push to `main` triggers automatic deployment to GitHub Pages at `danielpanea.com`.
- No build step required.
