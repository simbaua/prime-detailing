# PRIME Detailing Production SEO Source Of Truth

## Production Domain

Primary production URL:
`https://prime-detail.nl/`

Canonical domain:
`https://prime-detail.nl`

The preferred canonical domain does not use `www`. `www.prime-detail.nl` should redirect permanently to `https://prime-detail.nl`.

## Canonical

Homepage canonical:
`https://prime-detail.nl/`

Only one canonical is present for the homepage. It must not point to localhost, a Netlify preview URL, or a `www` URL.

## Primary Market

Zwolle, Netherlands and surrounding area.

## Dutch Keyword Cluster

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
`Professionele auto-interieurreiniging in Zwolle op locatie. Mobiele service van refresh tot dieptereiniging vanaf €69. Vraag prijs via WhatsApp.`

H1:
`Professionele auto-interieurreiniging in Zwolle`

The visual hero headline remains:
`Grondige reiniging. Verzorgde afwerking.`

Dutch is the primary SEO language for the root URL.

## Open Graph And Twitter

Production Open Graph URL:
`https://prime-detail.nl/`

Production social image:
`https://prime-detail.nl/assets/prime-detailing-og-zwolle.webp`

The social image file exists at:
`assets/prime-detailing-og-zwolle.webp`

Implemented:

- `og:type = website`
- `og:title`
- `og:description`
- `og:url`
- `og:image`
- `og:image:width`
- `og:image:height`
- `og:image:alt`
- `og:locale = nl_NL`
- language alternate locales for EN, RU and UK
- `twitter:card = summary_large_image`
- Twitter title, description, image and image alt

## Structured Data

Implemented:

- `LocalBusiness` / `AutomotiveBusiness`
- Verified business name, URL, phone, email, Instagram, area served, price range, EUR currency
- Offer catalog for PRIME REFRESH, PRIME INTERIOR, PRIME DEEP CLEAN and PRIME RESCUE
- `FAQPage` based only on the visible Dutch FAQ content

Verified business data:

- Name: `PRIME Detailing`
- URL: `https://prime-detail.nl/`
- Phone: `+31 6 25 10 51 16`
- Email: `primedetailing.nl@gmail.com`
- Instagram: `https://www.instagram.com/prime.detail.nl/`
- Area served: `Zwolle`

Not included because it is not verified:

- Street address
- Opening hours
- KVK
- VAT
- Latitude / longitude
- Reviews or ratings
- Founding date

## FAQ Schema

The `FAQPage` JSON-LD mirrors the visible Dutch FAQ:

- Moet ik water of stroom beschikbaar stellen?
- Hoe lang duurt een interieurreiniging?
- Kan ik vooraf een prijs krijgen?
- Verwijderen jullie hondenhaar en hardnekkige vlekken?

Do not add hidden FAQ questions only for SEO.

## Robots

Production `robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://prime-detail.nl/sitemap.xml
```

CSS, JavaScript, images and the homepage are not blocked.

## Sitemap

Production sitemap:
`https://prime-detail.nl/sitemap.xml`

Current sitemap URLs:

- `https://prime-detail.nl/`
- `https://prime-detail.nl/auto-interieur-reinigen-zwolle/`
- `https://prime-detail.nl/mobiele-auto-detailing-zwolle/`
- `https://prime-detail.nl/autostoelen-reinigen-zwolle/`
- `https://prime-detail.nl/hondenhaar-verwijderen-auto/`
- `https://prime-detail.nl/auto-bekleding-reinigen-zwolle/`

Do not include localhost, Netlify preview URLs, fake language URLs, fragments, or section anchors.

## Dutch Service Pages

Dedicated Dutch service pages added for local SEO:

| URL | Primary intent | Canonical |
| --- | --- | --- |
| `/auto-interieur-reinigen-zwolle/` | Auto interieur reinigen in Zwolle | `https://prime-detail.nl/auto-interieur-reinigen-zwolle/` |
| `/mobiele-auto-detailing-zwolle/` | Mobiele auto detailing in Zwolle | `https://prime-detail.nl/mobiele-auto-detailing-zwolle/` |
| `/autostoelen-reinigen-zwolle/` | Autostoelen reinigen in Zwolle | `https://prime-detail.nl/autostoelen-reinigen-zwolle/` |
| `/hondenhaar-verwijderen-auto/` | Hondenhaar verwijderen uit auto | `https://prime-detail.nl/hondenhaar-verwijderen-auto/` |
| `/auto-bekleding-reinigen-zwolle/` | Auto bekleding reinigen in Zwolle | `https://prime-detail.nl/auto-bekleding-reinigen-zwolle/` |

Each service page is Dutch-only for now, uses a unique title, meta description, canonical URL, Open Graph/Twitter metadata, visible FAQ content and JSON-LD based on visible/verified business data. Future crawlable translations should use real routes such as `/en/`, `/ru/` and `/uk/` only after translated service pages exist.

## Language Architecture

Current architecture:

- Dutch default content at `/`
- English, Russian and Ukrainian content load on the same URL through JavaScript
- `<html lang="nl">` is correct on initial render and switches to `en`, `ru` or `uk` when the selector is used
- The selector uses `UA` as the visible Ukrainian code, but the HTML language code correctly remains `uk`

SEO limitation:

Same-URL JavaScript language variants are useful for users but weaker for independent search indexing. Dutch root content is the primary crawlable version for now.

Recommendation for stronger indexability:

- Dutch: `/`
- English: `/en/`
- Russian: `/ru/`
- Ukrainian: `/uk/`

When real crawlable language routes exist, add production `hreflang` tags. Do not add fake hreflang URLs while all languages share one URL.

## GA4 Architecture

GA4 is active with the verified production Measurement ID.

Configuration location:
`script.js`

Configuration value:
`GA_MEASUREMENT_ID`

Current value:
`G-4HHXRWYFRB`

If GA4 ever needs to be disabled temporarily, set the value back to an empty string.

Current implementation:

```js
const GA_MEASUREMENT_ID = "G-4HHXRWYFRB";
```

The site does not load Google Analytics while the ID is empty.

## Tracked Events

All events go through `trackEvent(name, params)` in `script.js`.

Implemented events:

- `whatsapp_click`
- `instagram_click`
- `phone_click`
- `email_click`
- `price_view`
- `language_change`
- `package_select`
- `faq_open`

Event notes:

- `whatsapp_click` includes `placement` and includes `package` for package-specific links.
- `language_change` includes `from_language` and `to_language`.
- `price_view` fires once per page session when the pricing section enters the viewport.
- No personal user-entered data is sent.

## Privacy And Consent Note

GA4 may require consent and privacy handling depending on the production implementation and the business's legal setup in the Netherlands/EU. This file is not legal advice. Confirm the consent approach before activating GA4 in production.

## Google Search Console Setup

Recommended verification method: DNS TXT via TransIP.

Steps:

1. Add a Domain property for `prime-detail.nl`.
2. Verify using the DNS TXT record in TransIP.
3. Submit sitemap: `https://prime-detail.nl/sitemap.xml`.
4. Inspect homepage URL: `https://prime-detail.nl/`.
5. Request indexing after verification.

Do not add a fake HTML verification meta tag.

## Google Business Profile Next Steps

When verified and available, add or align:

- Google Business Profile listing
- Service area details
- Opening hours if the business wants them public
- Photos and owner-approved work examples
- Review collection process
- Website URL: `https://prime-detail.nl/`

## Image SEO

Primary hero image:
`assets/prime-auto-interieur-reinigen-zwolle.webp`

Social sharing image:
`assets/prime-detailing-og-zwolle.webp` at 1200 x 630.

Logo files:

- `assets/prime-logo-full.svg`
- `assets/prime-logo-mark.svg`

Hero image has width and height attributes, eager loading and high fetch priority. Below-fold image additions should use lazy loading unless they are critical.

## Remaining Tasks

- Confirm cookie/consent handling for active GA4 in production.
- Verify Search Console with DNS TXT in TransIP.
- Submit `https://prime-detail.nl/sitemap.xml` in Search Console.
- Configure Netlify primary domain as `prime-detail.nl` and keep `www.prime-detail.nl` as an alias redirect.
- Consider crawlable `/en/`, `/ru/`, `/uk/` pages if non-Dutch SEO becomes a priority.
