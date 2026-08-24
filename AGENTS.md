# AGENTS.md — PRIME Detailing Landing Page

## Mission
Build and refine a fast, premium, mobile-first bilingual landing page for PRIME Detailing, a new mobile interior car detailing business in Zwolle, Netherlands.

## Business facts that must stay consistent
- Brand: PRIME Detailing
- Instagram: @prime.detail.nl
- Instagram URL: https://www.instagram.com/prime.detail.nl/
- WhatsApp / phone: +31 6 25 10 51 16
- WhatsApp URL: https://wa.me/31625105116
- Email: primedetailing.nl@gmail.com
- Area: Zwolle & surrounding area / Zwolle & omgeving
- Main language: Dutch (NL)
- Secondary language: English (EN)
- Primary offer: mobile interior detailing / deep cleaning

## Current pricing
- PRIME REFRESH — €69
- PRIME INTERIOR — €119
- PRIME DEEP CLEAN — €159
- PRIME RESCUE — from €199
- SUV / 7 seats — +€20–30
- Pet hair — +€25–50
- Extreme dirt — custom price

## Brand direction
- Premium black / charcoal base
- Warm metallic gold accents
- Clean, modern, automotive feel
- Avoid cheap “car wash” aesthetics, neon gradients, blue SaaS styling, excessive glassmorphism
- Strong typography, generous spacing, subtle borders, precise details
- Visual references are in `/reference`
- Existing cropped logo is in `/assets/prime-logo.png`

## UX priorities
1. Mobile-first. Most traffic will likely come from Instagram and WhatsApp.
2. The first screen must communicate: mobile interior detailing + Zwolle + premium result + clear CTA.
3. WhatsApp is the primary conversion action.
4. Keep prices easy to scan.
5. Language toggle must be obvious and lightweight. Default is NL.
6. Avoid unnecessary forms. Prefer direct WhatsApp/Instagram contact.
7. Use semantic HTML, accessible contrast, keyboard-safe interactions and sensible focus states.

## Technical priorities
- Keep the project dependency-free unless there is a strong reason to introduce a framework.
- Maintain static-deploy compatibility (Netlify/GitHub Pages/simple hosting).
- Preserve fast load and low JS usage.
- Optimize images before adding new assets.
- Never remove working contact links.
- Do not fabricate reviews, years of experience, certifications, guarantees, addresses or customer counts.
- Do not invent a VAT/KVK number.

## Content rules
- Dutch should read naturally for a local Netherlands audience.
- English should be a faithful secondary version, not the source language.
- Tone: premium, clear, confident, not exaggerated.
- Avoid claims like “best in Zwolle” or “100% stain removal” unless verified.

## Definition of done for a Codex task
- Site works at desktop and mobile widths.
- NL is default; EN toggle works without reload.
- WhatsApp, phone, email and Instagram links are correct.
- Pricing is correct.
- No horizontal overflow on common mobile widths.
- Lighthouse-minded: no giant dependencies, no unnecessary blocking resources.
- No fake testimonials or business facts.
