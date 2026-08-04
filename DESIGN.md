---
name: Shaheer Khan
description: Personal portfolio — a quiet dark terminal, one gradient signature, nothing else fighting for attention.
colors:
  bg: "#18181b"
  text: "#d4d4d8"
  text-dim: "#a1a1aa"
  rule: "rgba(244, 244, 245, 0.12)"
  accent: "#e879f9"
  gradient-from: "#8b5cf6"
  gradient-via: "#d946ef"
  gradient-to: "#b33951"
typography:
  body:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  wordmark:
    fontFamily: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "clamp(1.75rem, 1.4rem + 1.6vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
rounded:
  sm: "2px"
  md: "4px"
components:
  nav-link:
    textColor: "{colors.text-dim}"
  nav-link-active:
    textColor: "{colors.text}"
  icon-link:
    textColor: "{colors.text-dim}"
  icon-link-hover:
    textColor: "{colors.accent}"
  row-title:
    textColor: "{colors.text}"
  row-year:
    textColor: "{colors.text-dim}"
  filter:
    textColor: "{colors.text-dim}"
  filter-active:
    textColor: "{colors.text}"
---

# Design System: Shaheer Khan

## Overview

**Creative North Star: "The Terminal Signature"**

Rebuilt to match two specific references: [shrysjain.me](https://www.shrysjain.me/) for
the whole site's font, palette, and voice, and [harunkhan.org/projects](https://www.harunkhan.org/projects)
for the shape of the projects list specifically. Both are dark, quiet, and almost
entirely typographic — no photography, no illustration, no decorative panels. The
personality comes from restraint: a near-black page, one monospace family used
everywhere, and exactly one moment of color — an animated gradient on the name itself.
Everything else stays a disciplined grayscale.

This is a direct, deliberate departure from this project's earlier deep-teal identity
and slab/sans pairing. Nothing here is a generic-template reflex; both anchor
references are real, specific sites the strategy is copying on purpose.

**One deliberate divergence from shrysjain.me: the shell, not the content.**
shrysjain.me is a single centered column (`max-width: 48rem`, `margin-inline: auto`) —
everything huddled in the middle of the viewport with dead space on both sides. This
system is a persistent left-hand nav shell instead: a fixed-width sidebar carrying the
wordmark, navigation, and contact links, with a wide content area filling the rest of
the viewport. That solves two things at once — it reads as a more substantial, app-like
site rather than one scrolling page, and it gives navigation a permanent home so adding
a new section later (an "experience" tab, a "writing" tab) is additive, not a redesign.

**Key Characteristics:**
- Near-black page, off-white text, a single monospace family — no second typeface
- Exactly one gradient, on exactly one element: the wordmark. Nowhere else.
- A persistent sidebar shell, not a centered single column — content runs wide and
  left-anchored, not huddled in the middle of the viewport
- Navigation is data-driven: every tab is one entry in a list, so the site can grow
  past Home/Work without touching layout code
- Home is a short intro only — the work list lives on one page, not repeated on Home
- Flat, hairline-divided lists instead of cards, borders, or shadows
- Lowercase, conversational micro-copy where it doesn't compromise clarity
- Zero photographic or illustrative imagery — typography is the entire visual system

## Colors: The One-Gradient Rule

Everything on the page is grayscale except one signature: the name, rendered as an
animated purple-to-maroon gradient. That scarcity is what makes it read as a mark
instead of decoration. This is a deliberate departure from the reflex purple-to-blue
gradient (see PRODUCT.md's anti-references) — purple-to-maroon was chosen specifically
because it isn't the default anyone reaches for. Pulled deeper and more saturated on
both ends after the first pass read as too pale (lavender) and too bright (red) —
richer at both ends reads as more deliberate, less pastel.

### Primary — Grayscale
- **Bg** (`#18181b`): Page background. Near-black, zero warmth, zero hue — same value
  everywhere, no section bands, no surface tiers.
- **Text** (`#d4d4d8`): Headings, the wordmark's static fallback, link default color,
  active nav state. 12:1 against bg.
- **Text Dim** (`#a1a1aa`): Body paragraphs, project descriptions, inactive nav, footer
  copyright. 6.9:1 against bg — used for everything secondary, never below this value.
- **Rule** (`rgba(244, 244, 245, 0.12)`): Hairline dividers between project rows.
  Decorative only; never carries text.

### Accent — The Gradient
- **Gradient** (`#8b5cf6` → `#d946ef` → `#b33951`, left to right, animated): Purple
  into magenta into maroon. Applied only to the name/wordmark, via `background-clip: text`
  with a continuously repeating `background-position` sweep (200% background-size, 8s
  linear, infinite — one direction, looping, not a back-and-forth breathing motion).
- **Accent** (`#e879f9`): The one non-gradient color in the system. Used for every hover
  and focus state — nav links, social links, project row titles — so interaction
  feedback reads as "the gradient's family," not a fourth unrelated color. 7.2:1 against
  bg.

### Named Rules

**The One-Gradient Rule.** Gradient text is prohibited everywhere except the wordmark.
One instance is a signature; two is a pattern, and this system has no pattern of
gradients. This is a scoped, deliberate exception to the general gradient-text ban —
not a reopening of it.

**The No-Warmth Rule.** The background carries no hue at all — not warm, not cool.
Personality comes entirely from the gradient and the copy, not from tinting the page.

**The Two-Tier Text Rule.** Only two text colors exist: `text` and `text-dim`. No third,
dimmer gray tier — the reference site's own faint copyright gray falls to 2.3:1 against
this background, which fails contrast outright. This system doesn't repeat that; when
something needs to look quieter, it uses `text-dim` and smaller size, not a fainter
color.

## Typography

**Family:** IBM Plex Mono, everywhere — headings, body, nav, labels. No second family.

**Character:** A single monospace face reads as "this person writes code," which is
the point: the whole site behaves like a well-kept terminal profile, not a marketing
page. This is a direct, named exception to this project's general reflex-reject list;
it's copying a specific reference deliberately, not reaching for mono by default.

### Hierarchy
- **Wordmark** (700, `clamp(1.75rem, 1.4rem + 1.6vw, 3rem)`, line-height 1.1): The name,
  gradient-filled. Deliberately modest — this is a quiet signature, not a shouting hero.
- **Subpage heading** (500, `clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)`): "Projects,"
  and any future subpage title.
- **Row title** (500, ~1rem): Project names in the row list. Underline fades in on
  hover/focus; no underline at rest.
- **Body** (400, 0.9375rem, line-height 1.6): Paragraphs, project descriptions. Capped
  at 62–65ch.
- **Label** (500, ~0.875rem): Nav items and social link labels, lowercase (`home`,
  `projects`, `github`) matching the reference's casual register.

### Named Rules

**The Lowercase Voice Rule.** Nav items, social labels, and the footer line are set in
natural lowercase (not `text-transform`, actually typed lowercase) — matching the
reference's tone. Sentence-level prose still capitalizes normally; this rule is for
UI chrome and labels only, not for body copy.

**The Modest Scale Rule.** Nothing on this site exceeds ~3rem. The old display-heading
ceiling doesn't apply here; the personality is quiet-terminal, not big-editorial-slab.

## Elevation

Flat. No shadows anywhere, no elevation tiers, no card surfaces. Structure comes
entirely from a single hairline rule color (`rule`) — a top border opening the project
list, a bottom border under each row. This is the harunkhan.org technique verbatim:
one rule color, two placements, nothing else.

### Named Rules

**The Hairline-Only Rule.** The only border weight in this system is 1px, at the `rule`
color. No card outlines, no button borders except where an outline-style button
requires one, no shadows standing in for depth.

## Components

### App Shell
- **Structure:** CSS grid, two columns at desktop widths — a fixed-width sidebar
  (`clamp(220px, 22vw, 300px)`) and a flexible content column filling the remainder.
  The sidebar is `position: sticky; top: 0` so it stays in view while content scrolls.
  Below the sidebar's collapse breakpoint (~880px), it stops being sticky and stacks
  above the content as a compact top block instead.
- **Content column:** left-anchored, generous padding, no `margin-inline: auto`
  centering trick. Prose blocks (paragraphs, row descriptions) still cap at a readable
  measure (~62ch) — the fix for shrysjain's centered-column feel is in the shell's
  anchor point, not in making every line of text stretch edge-to-edge.

### Sidebar (wordmark + nav + contact)
- **Contents, top to bottom:** the gradient wordmark (links home), a one-line role
  (`computer science, vanderbilt university`), the nav list, then the icon-link rows,
  then a small copyright line pinned toward the bottom via `justify-content:
  space-between` on the sidebar's flex column.
- **Nav is data-driven.** Rendered from a single ordered list of `{ path, label }`
  entries. Adding a future tab — "writing," anything else — means adding one entry to
  that list and one route; the sidebar itself never changes. Experience didn't need a
  new tab: it's a category inside the Work page's filters instead (see below).
- **Nav style:** Lowercase text links (`home`, `work`), no background, no pill, no
  underline bar. Default color `text-dim`; active/current page and hover both step up
  to `text`. Color alone signals current page, paired with `aria-current="page"` for
  anyone who can't see the color.
- **Icon-link rows (social/contact):** Icon + lowercase label, stacked vertically.
  Default color `text-dim`; hover/focus shifts the whole row — icon and label together
  — to `accent`.

### Wordmark
- **Treatment:** `background: linear-gradient(to right, var(--gradient-from), var(--gradient-via), var(--gradient-to))`, `background-clip: text`, `color: transparent`, `background-size: 200% 100%`, animating `background-position` from `0%` to `200%` over 8s linear infinite (one direction, continuously repeating).
- **Reduced motion:** animation removed entirely; `background-position` fixed at `0%` so the gradient still shows, just static.

### Motion
Two purposeful motions exist beyond the wordmark and the ordinary hover/focus color
transitions already listed above. Same discipline as the One-Gradient Rule: a short,
named list, not a reflex applied everywhere.

- **Page transitions.** Every nav Link (sidebar wordmark, sidebar nav, and any inline
  prose link that navigates — the "work page" link in Home's second paragraph, the
  "back to the homepage" link on the 404 page) carries React Router's `viewTransition`
  prop, which wraps the navigation in the browser's native View Transitions API. The
  default cross-fade is retuned to this system's own timing (`--duration-page`, 240ms,
  `ease-out-quart`) via `::view-transition-old(root)` / `::view-transition-new(root)`.
  Browsers without support (older Firefox) just navigate instantly — no polyfill, no
  fallback branch to maintain.
- **Work-list entrance.** The `.rows` container is keyed by the active filter, so
  switching `all` / `projects` / `experience` remounts the visible rows rather than
  silently swapping them. Each `.row` fades and rises in (`row-enter`, `--duration-state`,
  `ease-out-quart`), staggered `calc(min(--i, 8) * 50ms)` per index — legitimate sibling
  stagger for list-items-appearing, not a section-wide scroll reveal. Delay is capped at
  8 items so a longer future list can't push total stagger time past ~600ms.

### Named Rules

**The Two-Motion Rule.** Beyond the wordmark's own animation and ordinary state-change
transitions (hover, focus, active), exactly two additional motions exist on this site:
the page-transition crossfade and the work-list entrance stagger. Both are named here.
Adding a third needs a real reason, not "the page felt static."

### Work row (Work page only — Home carries no project list)
- **Style:** No card, no border box. A single top rule opens the list; each row gets a
  bottom hairline. Row head is a flex row, `justify-content: space-between`: title on
  the left (link, underline fades in on hover/focus — or plain static text when the
  entry has no `href`, never a dead or decorative link), year on the right when one
  exists, `tabular-nums`, `text-dim`. No fabricated years or links — both are omitted
  per-entry rather than guessed.
- **Description:** One line beneath the title, `text-dim`, capped ~62ch.
- **Entrance:** See Motion above — rows fade/rise in, staggered by index, on mount and
  on every filter change.

### Filters (Work page)
- **Style:** A row of plain lowercase text buttons (`all`, `projects`, `experience`) —
  no background, no pill, no border. Inactive is `text-dim`; hover and the active
  filter both step up to `text`, same mechanism as nav. This is the harunkhan.org
  technique verbatim, brought back now that there's a real second category
  (`experience`) to filter against — the earlier seed version of this system
  deliberately withheld filters until that was true.
- **Behavior:** Client-side only, no route change. Filtering narrows the same `rows`
  list in place.

## Do's and Don'ts

### Do:
- **Do** keep the gradient to exactly one element: the wordmark.
- **Do** keep navigation data-driven — one list, one source of truth — so new tabs are
  additive.
- **Do** hold the two-tier text system (`text` / `text-dim`) — no fainter third gray.
- **Do** use hairline rules (1px, `rule` color) as the only structural border anywhere.
- **Do** write nav and label chrome in lowercase; keep sentence-level prose normal.
- **Do** ship the gradient animation with a static, reduced-motion fallback.
- **Do** omit the year or the link on a work-row entry when either is genuinely
  unknown — a missing field, not a guessed one.
- **Do** keep every navigating `Link`/`NavLink` on `viewTransition` so the crossfade
  stays consistent site-wide — don't add a new nav link without it.

### Don't:
- **Don't** add a second typeface. IBM Plex Mono carries the entire site.
- **Don't** add gradient text anywhere but the wordmark — not headings, not buttons,
  not row titles.
- **Don't** add shadows, card borders, or elevation tiers. Flat, hairline-only.
- **Don't** invent a year, a link, or a filter category for a work entry that isn't
  backed by real data.
- **Don't** reintroduce the deep-teal palette, the slab display font, or the
  full-bleed color-band sections from the previous version of this system — this is a
  full replacement, not a variant.
- **Don't** center the page in a single narrow column the way shrysjain.me does. The
  sidebar anchors left; content fills the rest of the width.
- **Don't** add a third motion pattern beyond the wordmark, the page-transition
  crossfade, and the work-list stagger without naming it here first — see the
  Two-Motion Rule.
