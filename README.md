# [SURGE-NeuroTech-Club.github.io](https://surge-neurotech-club.github.io/)

Website repository for SURGE/Dalhousie NeuroTech Club.

### How to contribute

This website is built using [Astro](https://astro.build). Feel free to create a branch and when you're ready, open a pull request!

```bash
npm install
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Build to dist/
npm run preview   # Preview the production build locally
```

<details>
<summary>Useful Tips for Contributing</summary>
<br>

Generally, the only files you'll need to edit are files in `src/`.

- `src/pages/` — file-based routing (`index.astro` = homepage, `tutorials/[...slug].astro` = dynamic tutorial pages)
- `src/content/tutorials/` — Markdown files for tutorial pages (Astro content collections)
- `src/layouts/` — `BaseLayout.astro` (HTML shell with nav/footer) and `TutorialLayout.astro` (adds TOC sidebar + prev/next nav)
- `src/components/` — `Navbar.astro`, `Footer.astro`, `CalendarEmbed.astro`
- `src/styles/global.css` — all styles via CSS custom properties; no framework
- `public/images/` — static images served at `/images/...`; tutorial images live in `public/images/tutorials/`

To add a new tutorial, create `src/content/tutorials/my-tutorial.md` with frontmatter (`title`, `description`, `order`, optional `image`/`draft`), and it will automatically appear in the listing at `/tutorials`.

</details>

##### Helpful Astro References
- https://docs.astro.build/en/getting-started/
- https://docs.astro.build/en/guides/content-collections/

### Workflows

`deploy.yml`: Builds the website (`npm run build`) on pushes to `main` and deploys it via GitHub Pages (`actions/deploy-pages`).

**Note:** In the GitHub repo settings, the Pages source must be set to **"GitHub Actions"** (not "Deploy from branch").
