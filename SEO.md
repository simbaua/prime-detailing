# PRIME Detailing SEO Source Of Truth

## Primary Market

Zwolle, Netherlands and surrounding area.

## Primary Keyword Cluster

- auto interieur reinigen Zwolle
- auto interieurreiniging Zwolle
- interieur detailing Zwolle
- auto detailing Zwolle
- car detailing Zwolle
- mobiele auto detailing Zwolle
- mobiele interieurreiniging
- auto interieur schoonmaken Zwolle
- dieptereiniging auto interieur
- professionele auto interieur reiniging
- autostoelen reinigen Zwolle
- autobekleding reinigen Zwolle

The Dutch copy should use these terms naturally. Do not repeat exact-match phrases unnaturally.

## Default Metadata

Title:
`Auto Interieur Reinigen Zwolle | PRIME Detailing`

Meta description:
`Professionele auto-interieurreiniging in Zwolle op locatie. Van snelle refresh tot dieptereiniging. Pakketten vanaf €69. Vraag direct een prijs aan.`

H1:
`Professionele auto-interieurreiniging in Zwolle`

The visual hero headline remains:
`Grondige reiniging. Verzorgde afwerking.`

## Structured Data

Implemented:

- `LocalBusiness` / `AutomotiveBusiness`
- Verified business name, phone, email, Instagram, area served, price range, EUR currency
- Offer catalog for PRIME REFRESH, PRIME INTERIOR, PRIME DEEP CLEAN and PRIME RESCUE
- `FAQPage` based only on the visible FAQ content

Not included because it is not verified:

- Street address
- Opening hours
- KVK
- VAT
- Latitude / longitude
- Reviews or ratings
- Founding date

## Image Naming

Primary hero image:
`assets/prime-auto-interieur-reinigen-zwolle.webp`

Social sharing image:
`assets/prime-detailing-og-zwolle.webp` at 1200 x 630.

Logo files remain unchanged:

- `assets/prime-logo-full.svg`
- `assets/prime-logo-mark.svg`

## Language Architecture

Current architecture:

- Dutch default content at `/`
- English content is loaded on the same URL through JavaScript
- `<html lang="nl">` is correct on initial render and switches to `en` when the toggle is used

Recommendation:

For stronger indexability after launch, publish crawlable language URLs:

- Dutch: `/`
- English: `/en/`

Then add real `hreflang` tags using the production domain. Do not add fake hreflang URLs while both languages share one URL.

## Domain Placeholders

The production domain is not known yet.

Do not ship fake canonical, sitemap, or absolute social URLs. Replace `PRODUCTION_DOMAIN_REQUIRED` once the real domain is available.

When the final domain is known:

- Add `<link rel="canonical" href="https://REAL-DOMAIN/">`
- Convert Open Graph and Twitter image references to absolute URLs
- Replace `PRODUCTION_DOMAIN_REQUIRED` in `sitemap.template.xml`
- Rename or copy the template to `sitemap.xml`
- Uncomment and update the `Sitemap:` line in `robots.txt`
- Add crawlable `/en/` and hreflang tags if English SEO matters

## Robots Setup

`robots.txt` allows normal crawling and includes a commented sitemap placeholder.

## Sitemap Setup

`sitemap.template.xml` is prepared with the root URL placeholder only. It intentionally avoids localhost and fake domains.

## Local SEO Information To Add Later

When verified, local SEO would improve with:

- Google Business Profile URL
- Real opening hours
- Real service radius or verified surrounding towns
- Reviews or testimonials
- Business registration details if the owner wants them public
- Real before/after gallery with owner-approved photos
