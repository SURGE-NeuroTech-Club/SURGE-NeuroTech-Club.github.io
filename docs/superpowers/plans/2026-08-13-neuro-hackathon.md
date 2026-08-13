# Neuro Hackathon Promotion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the club's Neuro Hackathon (Sep 18–20, 2026) with a homepage hero card, a dedicated `/hackathon` detail page, and a navbar link.

**Architecture:** Astro static site, no client-side framework, no content collections for this feature (single one-off page, same pattern as `index.astro`). All styling goes into the existing global stylesheet, following the site's established card/section conventions.

**Tech Stack:** Astro 7, plain CSS custom properties (no CSS framework), no test runner configured for this repo — verification is `npm run build` (compile check) plus manual browser check via `npm run dev`.

## Global Constraints

- Hackathon name: "Neuro Hackathon"
- Dates: September 18–20, 2026
- Prizes: $500+ total
- Challenge streams (exact names, no descriptions): Machine Learning, Applications, Hardware
- Location: Life Sciences Centre, Room O2660
- Eligibility: open to everyone, free
- Registration URL (external, opens new tab): `https://www.eventbrite.ca/e/neuro-hackathon-tickets-1997153371496`
- Reuse existing design tokens only — no new CSS custom properties
- Reuse existing generic classes (`.info-card`, `.card`, `.card-body`, `.card-title`, `.grid-3`, `.btn`, `.btn-primary`) wherever the visual need matches; only add new classes for genuinely new visual patterns (the hackathon hero card)
- No unit tests exist in this repo (no test framework installed) — do not add one; verification is build + manual check

---

### Task 1: Hackathon hero card CSS

**Files:**
- Modify: `src/styles/global.css:558-559` (insert new rules between the end of `.hero-actions` and the `/* Buttons */` section comment)

**Interfaces:**
- Produces: CSS classes `.hackathon-card`, `.hackathon-card-top`, `.hackathon-eyebrow`, `.hackathon-dot`, `.hackathon-prize-badge`, `.hackathon-card-body`, `.hackathon-date-block` (with nested `.month`/`.day`), `.hackathon-streams`, `.hackathon-stream-pill`, `.hackathon-cta` — consumed by Task 2's homepage markup.

- [ ] **Step 1: Insert the CSS rules**

In `src/styles/global.css`, find this block (around line 553-559):

```css
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ============================================================
   Buttons
   ============================================================ */
```

Insert the following new block immediately after the closing `}` of `.hero-actions` and before the `/* Buttons */` comment:

```css
.hackathon-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  text-align: left;
  max-width: 440px;
  width: 100%;
  padding: 1.1rem 1.35rem 1.25rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(244, 114, 182, 0.4);
  background:
    linear-gradient(135deg, rgba(244, 114, 182, 0.14), rgba(139, 92, 246, 0.1)),
    rgba(20, 24, 38, 0.55);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 24px 60px -20px rgba(244, 114, 182, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.hackathon-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-aurora);
}

.hackathon-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.hackathon-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #f9a8d4;
}

.hackathon-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #f472b6;
}

.hackathon-prize-badge {
  background: var(--gradient-aurora);
  color: #0b0d14;
  font-weight: 800;
  font-size: 0.72rem;
  padding: 0.25rem 0.65rem;
  border-radius: 100px;
  white-space: nowrap;
}

.hackathon-card-body {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.hackathon-date-block {
  flex-shrink: 0;
  background: rgba(244, 114, 182, 0.12);
  border: 1px solid rgba(244, 114, 182, 0.4);
  border-radius: var(--radius);
  padding: 0.4rem 0.85rem;
  text-align: center;
  min-width: 60px;
}

.hackathon-date-block .month {
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #f9a8d4;
}

.hackathon-date-block .day {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-heading);
  line-height: 1.05;
  font-variant-numeric: tabular-nums;
}

.hackathon-streams {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.hackathon-stream-pill {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--color-border);
  padding: 0.2rem 0.55rem;
  border-radius: 100px;
}

.hackathon-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 0 -1.35rem -1.25rem;
  padding: 0.7rem 1.35rem;
  border-top: 1px solid rgba(244, 114, 182, 0.22);
  border-radius: 0 0 calc(var(--radius-lg) - 1px) calc(var(--radius-lg) - 1px);
  background: rgba(244, 114, 182, 0.14);
  color: #f9a8d4;
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
  transition: all var(--transition);
}

.hackathon-cta:hover {
  background: rgba(244, 114, 182, 0.24);
  color: var(--color-heading);
}
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds with no errors (CSS-only change, no markup references these classes yet, so this just confirms no syntax errors broke the stylesheet).

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "Add hackathon hero card styles"
```

---

### Task 2: Homepage hackathon card + navbar link

**Files:**
- Modify: `src/pages/index.astro:34-69` (insert hackathon card markup inside `.hero-cards`)
- Modify: `src/components/Navbar.astro:29-30` (insert new nav `<li>`)

**Interfaces:**
- Consumes: CSS classes from Task 1 (`.hackathon-card`, `.hackathon-card-top`, `.hackathon-eyebrow`, `.hackathon-dot`, `.hackathon-prize-badge`, `.hackathon-card-body`, `.hackathon-date-block`, `.hackathon-streams`, `.hackathon-stream-pill`, `.hackathon-cta`)
- Produces: a link to `/hackathon` on the homepage and in the navbar — consumed by Task 3 (the page must exist at that route for the links to resolve).

- [ ] **Step 1: Insert the hackathon card into the homepage hero**

In `src/pages/index.astro`, find:

```astro
        <div class="notice-card">
          <span class="notice-eyebrow"><span class="notice-dot"></span>On Pause</span>
          <p>The club is on pause for the summer and will return in September with a new schedule.</p>
        </div>
        {nextMeeting ? (
```

Replace it with (adds the new card between `.notice-card` and the `{nextMeeting ? (` block):

```astro
        <div class="notice-card">
          <span class="notice-eyebrow"><span class="notice-dot"></span>On Pause</span>
          <p>The club is on pause for the summer and will return in September with a new schedule.</p>
        </div>
        <div class="hackathon-card">
          <div class="hackathon-card-top">
            <span class="hackathon-eyebrow"><span class="hackathon-dot"></span>Neuro Hackathon</span>
            <span class="hackathon-prize-badge">$500+ Prizes</span>
          </div>
          <div class="hackathon-card-body">
            <div class="hackathon-date-block">
              <div class="month">SEP</div>
              <div class="day">18&ndash;20</div>
            </div>
            <div class="hackathon-streams">
              <span class="hackathon-stream-pill">Machine Learning</span>
              <span class="hackathon-stream-pill">Applications</span>
              <span class="hackathon-stream-pill">Hardware</span>
            </div>
          </div>
          <a class="hackathon-cta" href="/hackathon">
            Learn More
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
        {nextMeeting ? (
```

- [ ] **Step 2: Add the navbar link**

In `src/components/Navbar.astro`, find:

```astro
      <li>
        <a href="/tutorials" class={pathname.startsWith('/tutorials') ? 'active' : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          Tutorials
        </a>
      </li>
      <li>
        <a href="https://github.com/SURGE-NeuroTech-Club" target="_blank" rel="noopener noreferrer">
```

Replace it with (adds a new `<li>` for Hackathon between Tutorials and GitHub):

```astro
      <li>
        <a href="/tutorials" class={pathname.startsWith('/tutorials') ? 'active' : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          Tutorials
        </a>
      </li>
      <li>
        <a href="/hackathon" class={pathname.startsWith('/hackathon') ? 'active' : ''}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
          Hackathon
        </a>
      </li>
      <li>
        <a href="https://github.com/SURGE-NeuroTech-Club" target="_blank" rel="noopener noreferrer">
```

- [ ] **Step 3: Verify the build compiles**

Run: `npm run build`
Expected: Build succeeds. The homepage will reference `/hackathon`, and the navbar link will 404 until Task 3 creates the page — this is expected at this point since `npm run build` does not validate internal links.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro src/components/Navbar.astro
git commit -m "Add hackathon card to homepage hero and navbar link"
```

---

### Task 3: Hackathon detail page

**Files:**
- Create: `src/pages/hackathon.astro`

**Interfaces:**
- Consumes: `BaseLayout` from `src/layouts/BaseLayout.astro` (props: `title`, `description`); existing global classes `.hero-eyebrow`, `.hero-sub`, `.btn`, `.btn-primary`, `.section`, `.section-sm`, `.container`, `.section-heading`, `.info-card`, `.info-card-label`, `.info-card-value`, `.grid-3`, `.card`, `.card-body`, `.card-title`.
- Produces: the `/hackathon` route, resolving the links added in Task 2.

- [ ] **Step 1: Create the page**

Create `src/pages/hackathon.astro`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';

const EVENTBRITE_URL = 'https://www.eventbrite.ca/e/neuro-hackathon-tickets-1997153371496';
---

<BaseLayout
  title="Neuro Hackathon — SURGE NeuroTech Club"
  description="Join the Neuro Hackathon, September 18-20, 2026 at Dalhousie's Life Sciences Centre. $500+ in prizes across Machine Learning, Applications, and Hardware challenge streams."
>
  <section class="hackathon-hero">
    <div class="container">
      <p class="hero-eyebrow">SURGE NeuroTech Club</p>
      <h1>Neuro Hackathon</h1>
      <p class="hero-sub">
        Three days of building, learning, and competing across machine learning,
        applications, and hardware &mdash; open to everyone, no experience required.
      </p>
      <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        Register on Eventbrite
      </a>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="hackathon-info-grid">
        <div class="info-card">
          <div class="info-card-label">Dates</div>
          <div class="info-card-value">September 18&ndash;20, 2026</div>
        </div>
        <div class="info-card">
          <div class="info-card-label">Location</div>
          <div class="info-card-value">Life Sciences Centre, Room O2660</div>
        </div>
        <div class="info-card">
          <div class="info-card-label">Prizes</div>
          <div class="info-card-value">$500+ across all streams</div>
        </div>
        <div class="info-card">
          <div class="info-card-label">Eligibility</div>
          <div class="info-card-value">Open to everyone, free to attend</div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" style="background: var(--color-bg-secondary);">
    <div class="container">
      <div class="section-heading">
        <h2>Challenge Streams</h2>
        <p>Pick a track and build something new</p>
      </div>
      <div class="grid-3">
        <div class="card">
          <div class="card-body" style="text-align: center;">
            <svg class="hackathon-stream-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            <h3 class="card-title">Machine Learning</h3>
          </div>
        </div>
        <div class="card">
          <div class="card-body" style="text-align: center;">
            <svg class="hackathon-stream-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
            <h3 class="card-title">Applications</h3>
          </div>
        </div>
        <div class="card">
          <div class="card-body" style="text-align: center;">
            <svg class="hackathon-stream-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M20 9h2M20 15h2M2 9h2M2 15h2"/></svg>
            <h3 class="card-title">Hardware</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section-sm">
    <div class="container">
      <div class="hackathon-coming-soon">
        <p class="coming-soon-label">More Coming Soon</p>
        <p>Full schedule, rules, and judging criteria will be published closer to the event.</p>
      </div>
    </div>
  </section>

  <section class="section-sm">
    <div class="container" style="text-align: center;">
      <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        Register on Eventbrite
      </a>
    </div>
  </section>
</BaseLayout>

<style>
  .hackathon-hero {
    padding: 5rem 0 3rem;
    text-align: center;
    background:
      radial-gradient(ellipse 700px 400px at 30% -5%, rgba(244, 114, 182, 0.1), transparent 70%),
      radial-gradient(ellipse 700px 400px at 70% -5%, rgba(56, 189, 248, 0.08), transparent 70%);
  }

  .hackathon-hero h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    margin-bottom: 1.25rem;
  }

  .hackathon-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
  }

  .hackathon-info-grid .info-card {
    margin-bottom: 0;
  }

  .hackathon-stream-icon {
    color: var(--color-accent);
    margin-bottom: 0.75rem;
  }

  .hackathon-coming-soon {
    max-width: 560px;
    margin: 0 auto;
    text-align: center;
    padding: 2rem;
    border: 1px dashed var(--color-border);
    border-radius: var(--radius-lg);
  }

  .hackathon-coming-soon .coming-soon-label {
    display: inline-block;
    background: var(--color-accent-dim);
    color: var(--color-accent);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3em 0.8em;
    border-radius: 999px;
    margin-bottom: 0.75rem;
  }
</style>
```

- [ ] **Step 2: Verify the build compiles and the route exists**

Run: `npm run build`
Expected: Build succeeds and output lists `dist/hackathon/index.html` (confirm with `ls dist/hackathon/`).

- [ ] **Step 3: Manual browser check**

Run: `npm run dev`, then visit `http://localhost:4321/` and `http://localhost:4321/hackathon`.
Expected:
- Homepage hero shows three cards (On Pause, Neuro Hackathon, Next Meeting/empty state) that wrap sensibly on mobile width.
- Clicking "Learn More" on the hackathon card navigates to `/hackathon`.
- `/hackathon` renders header, four info cards, three stream cards with icons, the coming-soon note, and both Eventbrite buttons open the correct URL in a new tab.
- Navbar shows "Hackathon" between "Tutorials" and "GitHub", and is highlighted active while on `/hackathon`.

- [ ] **Step 4: Commit**

```bash
git add src/pages/hackathon.astro
git commit -m "Add hackathon detail page"
```

---

## Self-Review Notes

- **Spec coverage:** Homepage card (Task 1+2), detail page with header/info-cards/streams/coming-soon/CTA (Task 3), navbar link (Task 2) — all spec sections covered. Eventbrite URL, dates, location, prizes, eligibility, and stream names all appear verbatim from the spec's Confirmed Facts section.
- **Placeholders:** None — all markup and CSS is complete, no TBD/TODO left.
- **Type/naming consistency:** `.hackathon-card` and related classes defined in Task 1 are used identically in Task 2. `EVENTBRITE_URL` constant is defined and used consistently within Task 3 (not shared across files, so no cross-task naming risk there).
