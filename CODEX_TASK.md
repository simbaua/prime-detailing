# Codex Task — PRIME Detailing Landing Page

You are improving an already working static landing page for PRIME Detailing.

## Goal
Turn the included baseline into a polished production-ready premium landing page that can be published immediately and used to generate bookings from Instagram traffic.

## Work plan
Use parallel sub-agents if your environment supports them:
1. **Design agent:** audit composition, typography, spacing, mobile presentation and premium automotive visual language.
2. **Copy/locale agent:** polish Dutch as the primary language and verify English translations.
3. **Conversion agent:** audit CTA placement, pricing clarity, WhatsApp flow and trust signals without inventing facts.
4. **QA/performance agent:** test responsive behavior, accessibility, broken links and lightweight performance.
5. **Integrator:** merge only improvements that fit the existing brand and business facts.

## Must keep
All factual business information in `AGENTS.md`.

## Priority improvements
- Make the hero feel more premium and less template-like.
- Improve mobile header/nav and sticky conversion behavior if useful.
- Refine pricing cards/table for fast mobile scanning.
- Add subtle scroll/reveal motion only if it stays smooth and lightweight.
- Improve section transitions and visual rhythm.
- Make the page feel like a premium automotive brand, not a generic cleaning company.
- Consider adding a small “send photos for a quote” micro-flow using a prefilled WhatsApp message, but do not add backend dependencies.
- Improve SEO metadata and local-business schema using only verified information.
- Optimize supplied image assets where useful.
- Keep NL default and EN secondary.

## Restrictions
- Do not invent reviews, ratings, years active, customer numbers, exact business address, KVK, VAT IDs or guarantees.
- Do not replace the real phone/email/social contacts.
- Do not alter verified prices unless explicitly instructed.
- Avoid stock imagery unless clearly placed as a replaceable placeholder and documented.
- Do not over-engineer with React/Next/etc. unless the existing static architecture truly blocks a requirement.

## Final QA
Test at 390px, 768px, 1024px and 1440px widths. Confirm language switching, anchors, WhatsApp, Instagram, tel and mailto links. Report changed files and any remaining assumptions.
