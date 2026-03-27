# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Build to dist/
npm run preview   # Preview the production build locally
```

## Architecture

This is an [Astro](https://astro.build) static site deployed to GitHub Pages at `surge-neurotech-club.github.io`.

### Key directories

- `src/content/tutorials/` — Markdown files for tutorial pages (Astro content collections)
- `src/pages/` — File-based routing. `index.astro` = homepage, `tutorials/[...slug].astro` = dynamic tutorial pages
- `src/layouts/` — `BaseLayout.astro` (HTML shell with nav/footer) and `TutorialLayout.astro` (adds TOC sidebar + prev/next nav)
- `src/components/` — `Navbar.astro`, `Footer.astro`, `CalendarEmbed.astro`
- `src/styles/global.css` — All styles via CSS custom properties; no framework
- `public/images/` — Static images served at `/images/...`; tutorial images are in `public/images/tutorials/`

### Content collection schema

Each tutorial file in `src/content/tutorials/` requires frontmatter:

```yaml
---
title: string
description: string
order: number        # Controls sort order in listing and prev/next navigation
image: string        # Optional, path like /images/tutorials/foo.webp
draft: boolean       # Optional, defaults to false — shows "coming soon" badge
---
```

### Adding a new tutorial

1. Create `src/content/tutorials/my-tutorial.md`
2. Add frontmatter with `title`, `description`, `order`, and optionally `image`
3. Place any images in `public/images/tutorials/` and reference them as `/images/tutorials/filename.ext`
4. The tutorial will automatically appear in the listing at `/tutorials` and be reachable at `/tutorials/my-tutorial`

### Google Calendar

The embed URL is in `src/components/CalendarEmbed.astro`. To update the calendar, go to Google Calendar → Settings → [your calendar] → Integrate calendar → copy the embed URL and replace the `calendarSrc` value.

### Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds with `npm run build` and deploys via `actions/deploy-pages`.

**Important:** In the GitHub repo settings, the Pages source must be set to **"GitHub Actions"** (not "Deploy from branch"). This is a one-time setting.
