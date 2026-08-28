# PRIME Detailing Ads and Conversion Tracking

## Current Setup

- Production domain: `https://prime-detail.nl`
- GA4 Measurement ID: `G-OY96HZLQE2`
- Primary conversion: `whatsapp_click`
- Secondary conversions: `phone_click`, `email_click`, `instagram_click`, `package_select`, `price_view`
- Google Consent Mode v2 is enabled with privacy-safe defaults.

## Consent Mode

Before consent, all Google consent states remain denied:

- `analytics_storage: "denied"`
- `ad_storage: "denied"`
- `ad_user_data: "denied"`
- `ad_personalization: "denied"`

After the user accepts analytics cookies, only analytics is granted:

- `analytics_storage: "granted"`
- `ad_storage: "denied"`
- `ad_user_data: "denied"`
- `ad_personalization: "denied"`

Advertising consent is not silently enabled. If Google Ads remarketing, personalized ads, or enhanced ad data are used later, update the cookie banner copy and preferences flow to ask for advertising consent explicitly before granting `ad_storage`, `ad_user_data`, or `ad_personalization`.

## Events Implemented

- `page_view`: sent manually after accepted analytics consent.
- `cookie_consent_accept`: sent after accepting analytics cookies.
- `whatsapp_click`: primary lead event for all WhatsApp CTAs.
- `phone_click`: secondary lead event for phone links.
- `email_click`: secondary lead event for email links.
- `instagram_click`: secondary outbound engagement event.
- `package_select`: package interest event when a package CTA is clicked.
- `price_view`: pricing section engagement event.
- `language_change`: language switch event.
- `faq_open`: FAQ engagement event.
- `ga_debug_test`: manual debug event available only through `window.__primeGaDebug.sendTestEvent()` when `debug_ga=1`.

Recommended GA4 key events:

- Mark `whatsapp_click` as the primary key event.
- Mark `phone_click` as a secondary key event.
- Mark `email_click` as a secondary key event.

Do not mark `page_view`, `price_view`, `language_change`, or `faq_open` as key events.

## UTM and Click ID Capture

The site captures these campaign parameters when present in the URL:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `gclid`
- `gbraid`
- `wbraid`

Attribution is stored in `localStorage` under:

```text
prime_ads_attribution
```

Stored fields:

- landing page path
- landing timestamp
- full landing URL
- referrer
- UTM values
- click IDs
- 30-day expiry timestamp

No personal data is collected or stored by this attribution helper.

GA4 events are enriched with safe attribution parameters where available:

- `landing_source`
- `landing_medium`
- `landing_campaign`
- `landing_content`
- `landing_term`
- `has_utm`
- `has_gclid`
- `has_gbraid`
- `has_wbraid`
- `landing_page`

Events also include page context:

- `page_path`
- `language`
- `service_page` on static service pages

## WhatsApp Conversion Tracking

Every `.wa-link` click sends `whatsapp_click` after analytics consent is accepted.

WhatsApp events include:

- `placement`
- `page_path`
- `language`
- `package` when applicable
- `service_page` when applicable
- `has_utm`
- `has_gclid`
- safe landing attribution fields when available

Package WhatsApp CTAs also send `package_select`.

Service pages use service-specific WhatsApp messages generated in `script.js` and encoded with `encodeURIComponent()`.

## Google Ads Placeholder Config

Google Ads conversion tracking is intentionally inactive until real IDs are added.

Future values go in `script.js`:

```js
const GOOGLE_ADS_CONFIG = {
  conversionId: "",
  whatsappConversionLabel: "",
  phoneConversionLabel: "",
  emailConversionLabel: "",
  enabled: false
};
```

To activate later:

1. Insert the real Google Ads conversion ID, for example `AW-XXXXXXXXX`.
2. Insert the real conversion labels for WhatsApp, phone, and email.
3. Set `enabled: true`.
4. Confirm the cookie banner and Consent Mode support any required advertising consent before enabling ad storage or ad personalization.
5. Test with Tag Assistant and Google Ads conversion diagnostics.

The helper `trackGoogleAdsConversion(type, params = {})` no-ops while this config is empty or disabled. It must not send fake conversion events.

## Recommended Landing URLs

```text
https://prime-detail.nl/?utm_source=google&utm_medium=cpc&utm_campaign=interior_cleaning_zwolle
https://prime-detail.nl/auto-interieur-reinigen-zwolle/?utm_source=google&utm_medium=cpc&utm_campaign=auto_interieur_reinigen
https://prime-detail.nl/hondenhaar-verwijderen-auto/?utm_source=google&utm_medium=cpc&utm_campaign=hondenhaar_auto
https://prime-detail.nl/autostoelen-reinigen-zwolle/?utm_source=google&utm_medium=cpc&utm_campaign=autostoelen_reinigen
https://prime-detail.nl/auto-bekleding-reinigen-zwolle/?utm_source=google&utm_medium=cpc&utm_campaign=auto_bekleding_reinigen
https://prime-detail.nl/mobiele-auto-detailing-zwolle/?utm_source=google&utm_medium=cpc&utm_campaign=mobiele_auto_detailing
```

## Recommended Google Ads Structure

Campaign 1: Search - Auto interieur reinigen Zwolle

Ad groups:

- auto interieur reinigen
- interieurreiniging auto
- auto detailing Zwolle
- mobiele auto detailing

Campaign 2: Search - Problem-based

Ad groups:

- hondenhaar verwijderen auto
- autostoelen reinigen
- autobekleding reinigen
- tapijt reinigen auto

Campaign 3: Brand

Ad groups:

- PRIME Detailing
- prime detail
- prime detailing zwolle

## Negative Keyword Ideas

- gratis
- zelf doen
- vacature
- opleiding
- cursus
- machine kopen
- tweedehands
- shampoo kopen
- product kopen
- diy

## Post-Launch Testing Checklist

Use this test URL locally and in production:

```text
/?debug_ga=1&reset_consent=1&utm_source=google&utm_medium=cpc&utm_campaign=test_campaign&utm_term=auto%20interieur%20reinigen&gclid=test123
```

After accepting analytics cookies:

- Confirm `prime_ads_attribution` is stored.
- Confirm `analytics_storage` updates to `granted`.
- Confirm `ad_storage`, `ad_user_data`, and `ad_personalization` remain `denied`.
- Confirm `page_view` returns `204` in the Network `collect` filter.
- Confirm `cookie_consent_accept` returns `204`.
- Confirm `whatsapp_click` returns `204` and includes attribution flags.
- Confirm `package_select` returns `204` for package WhatsApp CTAs.
- Confirm `price_view` returns `204` after pricing is viewed.
- Confirm `language_change` returns `204`.
- Confirm `phone_click` and `email_click` return `204`.
- Confirm no events fire before consent.
- Confirm Reject blocks analytics events.
- Confirm no duplicate GA4 script loads.
- Confirm no console errors.

Production checks:

- Use Tag Assistant with `debug_ga=1`.
- Open GA4 DebugView and verify the same event names.
- Mark only lead events as GA4 key events after events are visible in GA4.
- Do not enable Google Ads conversion tracking until real Ads IDs and labels are available.
