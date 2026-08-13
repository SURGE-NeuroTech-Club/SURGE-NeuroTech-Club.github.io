# Neuro Hackathon Promotion — Design Spec

Date: 2026-08-13

## Summary

Promote the club's first hackathon ("Neuro Hackathon", Sep 18–20, 2026) on the
site: a prominent card on the homepage hero, a dedicated detail page at
`/hackathon`, and a navbar link. Full rules/schedule/judging content lives in
a separate GitHub repo the club will publish later — this feature only
surfaces the facts that are confirmed today.

## Confirmed facts

- **Name:** Neuro Hackathon
- **Dates:** September 18–20, 2026
- **Prizes:** $500+ total
- **Challenge streams:** Machine Learning, Applications, Hardware (names only
  — no descriptions yet)
- **Location:** Life Sciences Centre, Room O2660 (same room as club
  meetings)
- **Eligibility:** Open to everyone, free, no registration restriction by
  school
- **Registration:** External Eventbrite link —
  `https://www.eventbrite.ca/e/neuro-hackathon-tickets-1997153371496`

## Components

### 1. Homepage hero card (`src/pages/index.astro`)

Add a third card to the existing `.hero-cards` row (currently holding
`.notice-card` and `.meeting-card`). New markup block, order: notice-card →
hackathon-card → meeting-card (hackathon promo surfaces early, right after
the pause notice, before the routine meeting info).

Structure (mirrors `.meeting-card`'s internal layout):
- Top row: eyebrow "Neuro Hackathon" (with a dot, matching `.pulse-dot`
  pattern) + a badge reading "$500+ Prizes"
- Body: a date block (reusing `.meeting-date-block` structure) showing
  "SEP" / "18–20", next to stream pills for ML / Applications / Hardware
- Footer CTA: "Learn More" button linking to `/hackathon` (styled like
  `.meeting-add-btn`)

New CSS: `.hackathon-card` (and small supporting classes for the stream
pills), added to `src/styles/global.css` near the existing `.meeting-card`
rules. Reuses existing design tokens (`--gradient-aurora`,
`--color-accent-dim`, `--radius-lg`, etc.) but with a pink/violet tint
(drawing from the `f472b6`/`8b5cf6` stops already in `--gradient-aurora`) so
it's visually distinct from the blue meeting-card and orange notice-card.
No new color tokens.

### 2. Hackathon detail page (`src/pages/hackathon.astro`)

A standalone Astro page (not a content-collection entry — this is one-off
static content like the homepage itself, not a repeatable tutorial-style
document). Uses `BaseLayout` with a custom `title`/`description` for SEO.

Sections:
1. **Header** — eyebrow, "Neuro Hackathon" title, one-line tagline, a
   "Register on Eventbrite" primary button (external link, opens new tab,
   matches `.btn-primary` pattern used for "Join Mailing List").
2. **Key info** — four `.info-card` entries (reusing the exact component
   already used in the homepage About section): Dates, Location, Prizes,
   Eligibility.
3. **Challenge streams** — three cards (one each for Machine Learning,
   Applications, Hardware), name + icon only, no invented description
   text, laid out in a responsive grid.
4. **Coming soon note** — short callout stating that full schedule, rules,
   and judging criteria will be published closer to the event.
5. **Bottom CTA** — Register button repeated for users who scroll the full
   page.

### 3. Navbar (`src/components/Navbar.astro`)

Add a "Hackathon" `<li>` between the existing "Tutorials" and "GitHub"
links, using the same active-state check (`pathname.startsWith('/hackathon')
? 'active' : ''`) and a simple icon (e.g. a spark/lightning or trophy glyph
consistent with the existing stroke-icon style).

## Data flow / state

None — this is entirely static content, no client-side state, no content
collection, no API calls. The Eventbrite link and all facts are hardcoded
into the page/component markup, consistent with how `MEETING_LOCATION` and
similar constants are hardcoded in `index.astro` today.

## Error handling

Not applicable — no dynamic data fetching introduced. The only external
link (Eventbrite) opens in a new tab (`target="_blank" rel="noopener
noreferrer"`), matching existing external-link conventions on the site.

## Testing

- `npm run build` to confirm the new route compiles and the site builds
  cleanly.
- Manual check via `npm run dev`: homepage card renders correctly and links
  to `/hackathon`; detail page renders all sections; navbar link highights
  as active on `/hackathon`; responsive check at mobile width (card
  wrapping, grid collapsing to single column).

## Out of scope

- Full schedule, agenda, judging criteria, team-size rules, sponsor list —
  to be added later once the club publishes their GitHub repo content.
- Any registration/RSVP logic beyond linking out to Eventbrite.
- Content collection / CMS structure for hackathon data — a single static
  page is sufficient for one event.
