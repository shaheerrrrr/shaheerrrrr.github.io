# Product

## Register

brand

## Users

Recruiters, hiring managers, and résumé reviewers who open this between two other
tabs and give it under a minute. Secondary: admissions readers and general visitors
arriving from a link. They want one thing — enough evidence to decide whether Shaheer
is worth a longer conversation. They are skimming, usually on a laptop in daylight,
and they leave the moment the page makes them work.

## Product Purpose

A personal portfolio for Shaheer Khan, a student whose record is a mix of academic
work, activities, and self-directed projects. It exists to convert a forty-second skim
into a contact, an interview, or a bookmark. Success is a reviewer who can say, without
scrolling twice, what Shaheer has actually built and how to reach him.

## Brand Personality

Warm first, direct underneath. First person, conversational, carrying specific human
detail — but no filler, no throat-clearing, no adjective doing a noun's job. Three
words: **candid, unhurried, exact.** The reader should finish feeling they met a
person, not that they parsed a profile. Confidence is shown through specificity, never
asserted.

## Anti-references

- **The generic dev-portfolio template.** Glowing cards, "Hi, I'm Shaheer 👋", typewriter
  effects, a grid of technology logos, hamburger nav on desktop. This includes the
  reflex purple-to-blue gradient specifically — the purple-to-maroon gradient on the
  wordmark is a deliberate, named exception (see DESIGN.md's One-Gradient Rule), not a
  reopening of "gradients are fine now." No other gradient use is permitted anywhere
  on the site.
- **The overdesigned agency site.** Custom cursors, scroll-hijacking, loading screens,
  WebGL for its own sake, page transitions that delay content.
- **The plain HTML résumé dump.** An unstyled wall of text with no hierarchy and no
  point of view.
- Also out: SaaS hero-metric templates, identical card grids, gradient text, and tiny
  uppercase tracked eyebrows above every section.

## Design Principles

1. **Evidence over adjectives.** Never claim a trait; show the artifact that proves it.
   "Built X, it does Y" beats "passionate about Z."
2. **Skimmable in thirty seconds, rewarding at five minutes.** The top of the page
   answers who, what, and how to reach him. Depth lives below, never in the way.
3. **A person, not a profile.** First-person voice and one or two specific human
   details. A portfolio that could belong to anyone belongs to no one.
4. **Nothing gated behind motion.** Content is visible on first paint. Animation
   enhances an already-readable page; it never decides whether the page can be read.
5. **Accurate scope.** Student work is described as student work. Overstatement is the
   fastest way to lose a reviewer who has read a thousand of these.

## Accessibility & Inclusion

Target WCAG 2.2 Level AA. Body text ≥4.5:1 against its background, large text ≥3:1, and
the same 4.5:1 bar for secondary and placeholder text — no light-gray-for-elegance. Full
keyboard operability with a visible focus indicator on every interactive element.
Semantic landmarks and a logical heading order. Every animation ships a
`prefers-reduced-motion: reduce` alternative. No meaning carried by color alone.
