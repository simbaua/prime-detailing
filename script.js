document.documentElement.classList.add('js');

const translations = {
  nl: {
    navServices: 'Diensten',
    navProcess: 'Werkwijze',
    navPricing: 'Prijzen',
    navFaq: 'FAQ',
    navArea: 'Werkgebied',
    navContact: 'Contact',
    navBook: 'WhatsApp',
    menuOpen: 'Menu openen',
    menuClose: 'Menu sluiten',
    heroEyebrow: 'MOBIELE AUTO-INTERIEURREINIGING • ZWOLLE & OMGEVING',
    heroSeoTitle: 'Professionele auto-interieurreiniging in Zwolle',
    heroTitle: 'Grondige reiniging.<br><span>Verzorgde afwerking.</span>',
    heroText: 'PRIME Detailing reinigt auto-interieurs op locatie in Zwolle en omgeving: van snelle refresh tot dieptereiniging van stoelen, tapijt en kunststof.',
    heroCta: 'Boek via WhatsApp',
    heroPrices: 'Bekijk prijzen',
    factService: 'Service',
    factServiceValue: 'Op locatie',
    factArea: 'Regio',
    factFrom: 'Vanaf',
    heroPriceLabel: 'Pakketten vanaf',
    tickerDetailing: 'INTERIEUR DETAILING',
    tickerDeep: 'DIEPTEREINIGING',
    tickerMobile: 'MOBIELE SERVICE',
    servicesEyebrow: 'DIENSTEN',
    servicesTitle: 'Auto-interieur reinigen met het pakket dat past.',
    servicesText: 'Heldere behandelingen voor mobiele interieur detailing, autobekleding reinigen en dieptereiniging op locatie.',
    refreshDesc: 'Basis auto-interieur refresh: stofzuigen, matten, kunststof, dashboard, panelen en ramen.',
    interiorDesc: 'Alles uit PRIME Refresh, plus diepere reiniging van stoelen en tapijt met een extractor waar passend.',
    deepDesc: 'Volledige auto-interieurreiniging: stoelen, vloer, matten, kofferbak, kunststof en moeilijk bereikbare plekken.',
    rescueDesc: 'Voor sterk vervuilde auto-interieurs, hardnekkige vlekken en maatwerk.',
    recommended: 'AANBEVOLEN',
    from199: 'vanaf €199',
    processEyebrow: 'ZO WERKT HET',
    processTitle: 'Mobiele detailing, simpel geregeld.',
    processText: "Stuur een paar duidelijke foto's van je auto-interieur en je locatie in of rond Zwolle. Daarna ontvang je pakketadvies, een prijsindicatie en een geschikt moment.",
    processLink: "Stuur foto's via WhatsApp",
    step1Title: "Foto's sturen",
    step1Text: "Deel interieurfoto's en je locatie via WhatsApp of Instagram.",
    step2Title: 'Advies ontvangen',
    step2Text: 'Je krijgt een passend pakket, prijsindicatie en afspraakvoorstel.',
    step3Title: 'Detailing op locatie',
    step3Text: 'PRIME reinigt het interieur op locatie en levert het netjes op.',
    pricingEyebrow: 'TRANSPARANTE PRIJZEN',
    pricingTitle: 'Prijzen voor auto-interieurreiniging.',
    pricingIntro: "Kies het pakket dat past bij je interieur. Bij twijfel geven we advies op basis van foto's, vervuiling en type voertuig.",
    packageCta: 'Kies pakket',
    refreshShort: 'Basis auto-interieur refresh',
    interiorShort: 'Refresh + dieptereiniging van stoelen en tapijt',
    deepShort: 'Volledige interieur dieptereiniging',
    rescueShort: 'Sterk vervuild / maatwerk',
    from199b: 'vanaf €199',
    extraSuv: 'SUV / 7 zitplaatsen',
    extraPet: 'Huisdierharen',
    extraDirt: 'Extreme vervuiling',
    customPrice: 'prijs op maat',
    pricingNote: 'Definitieve prijs kan afhangen van type voertuig, mate van vervuiling en benodigde reinigingstijd.',
    whyEyebrow: 'WAAROM PRIME',
    whyTitle: 'Interieur detailing die je ziet en voelt.',
    why1Title: 'Oog voor detail',
    why1Text: 'Ook naden, randen en moeilijk bereikbare zones krijgen aandacht.',
    why2Title: 'Mobiele service',
    why2Text: 'PRIME komt naar je toe in Zwolle en omgeving. Minder wachten, meer gemak.',
    why3Title: 'Verzorgde afwerking',
    why3Text: 'Een fris interieur dat weer prettig aanvoelt en representatief oogt.',
    areaEyebrow: 'SERVICEGEBIED',
    areaTitle: 'Mobiele detailing in Zwolle & omgeving.',
    areaText: 'PRIME Detailing verzorgt mobiele auto-interieurreiniging in Zwolle en omgeving. Woon je net buiten Zwolle? Stuur je locatie via WhatsApp, dan laten we weten of we naar je toe kunnen komen.',
    faqTitle: 'Veelgestelde vragen.',
    faq1Q: 'Moet ik water of stroom beschikbaar stellen?',
    faq1A: 'Meld bij het boeken wat er op locatie beschikbaar is. We stemmen vooraf af wat nodig is voor jouw behandeling.',
    faq2Q: 'Hoe lang duurt een interieurreiniging?',
    faq2A: "Dat hangt af van het pakket, de auto en de vervuiling. Na foto's kunnen we een realistische tijdsindicatie geven.",
    faq3Q: 'Kan ik vooraf een prijs krijgen?',
    faq3A: "Ja. Stuur duidelijke foto's van het interieur via WhatsApp. Bij extreme vervuiling geven we een prijs op maat.",
    faq4Q: 'Verwijderen jullie hondenhaar en hardnekkige vlekken?',
    faq4A: 'Ja. Huisdierharen en extreme vervuiling kunnen een toeslag hebben, afhankelijk van de benodigde tijd.',
    ctaEyebrow: 'KLAAR VOOR EEN FRIS INTERIEUR?',
    ctaTitle: "Stuur foto's van je auto.<br><span>Wij adviseren het juiste pakket.</span>",
    ctaText: "Stuur interieurfoto's en je locatie. We reageren met een passend pakket en prijsindicatie.",
    footerLine: 'Auto-interieurreiniging • Interieur detailing • Zwolle'
  },
  en: {
    navServices: 'Services',
    navProcess: 'How it works',
    navPricing: 'Prices',
    navFaq: 'FAQ',
    navArea: 'Service area',
    navContact: 'Contact',
    navBook: 'WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    heroEyebrow: 'MOBILE INTERIOR DETAILING • ZWOLLE & SURROUNDING AREA',
    heroSeoTitle: 'Professional mobile car interior cleaning in Zwolle',
    heroTitle: 'Deep cleaning.<br><span>Premium finish.</span>',
    heroText: 'PRIME Detailing cleans car interiors on location in Zwolle and the surrounding area: from a quick refresh to deep cleaning of seats, carpet and plastics.',
    heroCta: 'Book on WhatsApp',
    heroPrices: 'View prices',
    factService: 'Service',
    factServiceValue: 'At your location',
    factArea: 'Area',
    factFrom: 'From',
    heroPriceLabel: 'Packages from',
    tickerDetailing: 'INTERIOR DETAILING',
    tickerDeep: 'DEEP CLEANING',
    tickerMobile: 'MOBILE SERVICE',
    servicesEyebrow: 'SERVICES',
    servicesTitle: 'Car interior cleaning with the package that fits.',
    servicesText: 'Clear treatments for mobile interior detailing, upholstery cleaning and deep cleaning on location.',
    refreshDesc: 'Basic car interior refresh: vacuuming, mats, plastics, dashboard, panels and windows.',
    interiorDesc: 'Everything in PRIME Refresh, plus deeper cleaning of seats and carpet with an extractor where suitable.',
    deepDesc: 'Full car interior cleaning: seats, floor, mats, trunk, plastics and hard-to-reach areas.',
    rescueDesc: 'For heavily soiled car interiors, stubborn stains and custom work.',
    recommended: 'RECOMMENDED',
    from199: 'from €199',
    processEyebrow: 'HOW IT WORKS',
    processTitle: 'Mobile detailing, simply arranged.',
    processText: 'Send a few clear photos of your car interior and your location in or around Zwolle. Then you receive package advice, a price indication and a suitable time.',
    processLink: 'Send photos on WhatsApp',
    step1Title: 'Send photos',
    step1Text: 'Share interior photos and your location via WhatsApp or Instagram.',
    step2Title: 'Receive advice',
    step2Text: 'You get a suitable package, price indication and appointment proposal.',
    step3Title: 'Detailing on location',
    step3Text: 'PRIME cleans the interior on location and leaves it neatly finished.',
    pricingEyebrow: 'TRANSPARENT PRICING',
    pricingTitle: 'Prices for car interior cleaning.',
    pricingIntro: 'Choose the package that fits your interior. If you are unsure, we advise based on photos, level of dirt and vehicle type.',
    packageCta: 'Choose package',
    refreshShort: 'Basic car interior refresh',
    interiorShort: 'Refresh + deep cleaning of seats and carpet',
    deepShort: 'Full interior deep cleaning',
    rescueShort: 'Heavily soiled / custom',
    from199b: 'from €199',
    extraSuv: 'SUV / 7 seats',
    extraPet: 'Pet hair',
    extraDirt: 'Extreme dirt',
    customPrice: 'custom price',
    pricingNote: 'Final price can depend on vehicle type, level of dirt and required cleaning time.',
    whyEyebrow: 'WHY PRIME',
    whyTitle: 'Interior detailing you can see and feel.',
    why1Title: 'Attention to detail',
    why1Text: 'Seams, edges and hard-to-reach zones receive careful attention.',
    why2Title: 'Mobile service',
    why2Text: 'PRIME comes to you in Zwolle and the surrounding area. Less waiting, more convenience.',
    why3Title: 'Premium finish',
    why3Text: 'A fresh, cared-for interior that feels better and looks more presentable.',
    areaEyebrow: 'SERVICE AREA',
    areaTitle: 'Mobile detailing in Zwolle & surrounding area.',
    areaText: 'PRIME Detailing provides mobile car interior cleaning in Zwolle and the surrounding area. Live just outside Zwolle? Send your location on WhatsApp and we will let you know if we can come to you.',
    faqTitle: 'Frequently asked questions.',
    faq1Q: 'Do I need to provide water or electricity?',
    faq1A: 'Tell us what is available at your location when booking. We will confirm beforehand what is needed for your treatment.',
    faq2Q: 'How long does interior cleaning take?',
    faq2A: 'It depends on the package, vehicle and level of dirt. After seeing photos we can give a realistic time estimate.',
    faq3Q: 'Can I get a price beforehand?',
    faq3A: 'Yes. Send clear interior photos on WhatsApp. For extreme dirt we provide a custom quote.',
    faq4Q: 'Do you remove dog hair and stubborn stains?',
    faq4A: 'Yes. Pet hair and extreme dirt may have an extra charge depending on the time required.',
    ctaEyebrow: 'READY FOR A FRESH INTERIOR?',
    ctaTitle: 'Send photos of your car.<br><span>We advise the right package.</span>',
    ctaText: 'Send interior photos and your location. We reply with the right package and a price indication.',
    footerLine: 'Car interior cleaning • Interior detailing • Zwolle'
  }
};

const whatsappMessages = {
  nl: "Hoi PRIME, ik wil graag een prijsindicatie voor mijn auto-interieur. Ik stuur foto's en mijn locatie mee.",
  en: 'Hi PRIME, I would like a quote for my car interior. I can send photos and my location.'
};

const WA_BASE = 'https://wa.me/31625105116';
let language = 'nl';
const langToggle = document.getElementById('langToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
const metaDescription = document.querySelector('meta[name="description"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogLocale = document.querySelector('meta[property="og:locale"]');
const twitterTitle = document.querySelector('meta[name="twitter:title"]');
const twitterDescription = document.querySelector('meta[name="twitter:description"]');
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const splitTextKeys = new Set([
  'heroTitle',
  'servicesTitle',
  'processTitle',
  'pricingTitle',
  'whyTitle',
  'areaTitle',
  'faqTitle',
  'ctaTitle'
]);

function updateMotionPreference() {
  document.documentElement.classList.toggle('reduce-motion', reduceMotionQuery.matches);
}

function prepareTextReveals() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    if (!splitTextKeys.has(el.dataset.i18n)) return;

    const source = translations[language][el.dataset.i18n];
    if (!source) return;

    const segments = source.split(/<br\s*\/?>/i);
    el.classList.add('line-reveal');
    el.innerHTML = segments
      .map((segment, index) => `<span class="line-mask" style="--line-index: ${index};"><span>${segment}</span></span>`)
      .join('');
  });
}

function applyLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.dataset.i18nAria;
    if (translations[lang][key]) {
      el.setAttribute('aria-label', translations[lang][key]);
    }
  });

  document.querySelectorAll('.wa-link').forEach((link) => {
    const packageName = link.dataset.package;
    const message = packageName
      ? `${whatsappMessages[lang]} ${lang === 'nl' ? 'Ik denk aan' : 'I am interested in'} ${packageName}.`
      : whatsappMessages[lang];
    link.href = `${WA_BASE}?text=${encodeURIComponent(message)}`;
  });

  langToggle.textContent = lang === 'nl' ? 'EN' : 'NL';
  langToggle.setAttribute('aria-label', lang === 'nl' ? 'Switch language to English' : 'Wissel taal naar Nederlands');
  langToggle.setAttribute('aria-pressed', lang === 'en' ? 'true' : 'false');
  const pageTitle = lang === 'nl'
    ? 'Auto Interieur Reinigen Zwolle | PRIME Detailing'
    : 'Car Interior Cleaning Zwolle | PRIME Detailing';
  const pageDescription = lang === 'nl'
    ? 'Professionele auto-interieurreiniging in Zwolle op locatie. Van snelle refresh tot dieptereiniging. Pakketten vanaf €69. Vraag direct een prijs aan.'
    : 'Professional mobile car interior cleaning in Zwolle. From quick refresh to deep cleaning. Packages from €69. Request a price on WhatsApp.';
  const socialDescription = lang === 'nl'
    ? 'Mobiele interieur detailing en dieptereiniging in Zwolle. Pakketten vanaf €69. Vraag direct een prijs aan via WhatsApp.'
    : 'Mobile interior detailing and deep cleaning in Zwolle. Packages from €69. Request a price on WhatsApp.';

  document.title = pageTitle;

  if (metaDescription) {
    metaDescription.content = pageDescription;
  }
  if (ogTitle) ogTitle.content = pageTitle;
  if (ogDescription) ogDescription.content = socialDescription;
  if (ogLocale) ogLocale.content = lang === 'nl' ? 'nl_NL' : 'en_GB';
  if (twitterTitle) twitterTitle.content = pageTitle;
  if (twitterDescription) twitterDescription.content = socialDescription;

  prepareTextReveals();
  updateMobileMenuLabel();
}

langToggle.addEventListener('click', () => applyLanguage(language === 'nl' ? 'en' : 'nl'));

document.getElementById('year').textContent = new Date().getFullYear();
updateMotionPreference();
applyLanguage('nl');

if (reduceMotionQuery.addEventListener) {
  reduceMotionQuery.addEventListener('change', updateMotionPreference);
} else if (reduceMotionQuery.addListener) {
  reduceMotionQuery.addListener(updateMotionPreference);
}

function setRevealDelays() {
  const groups = [
    '.service-grid .reveal',
    '.steps .reveal',
    '.pricing-shell .price-row',
    '.extras-grid .reveal',
    '.why-grid .reveal'
  ];

  groups.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      el.style.setProperty('--reveal-delay', `${Math.min(index * 85, 340)}ms`);
    });
  });
}

function setupReveals() {
  const revealItems = document.querySelectorAll('.reveal, .line-reveal, .price-row');
  if (!('IntersectionObserver' in window) || reduceMotionQuery.matches) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  revealItems.forEach((el) => observer.observe(el));
}

function setupSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      closeMobileMenu();
      target.scrollIntoView({ behavior: reduceMotionQuery.matches ? 'auto' : 'smooth', block: 'start' });
      history.pushState(null, '', link.getAttribute('href'));
    });
  });
}

function setupHeaderState() {
  const header = document.querySelector('.site-header');
  const navLinks = Array.from(document.querySelectorAll('.desktop-nav a[href^="#"], .mobile-nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);
  let ticking = false;

  function update() {
    const scrollY = window.scrollY || window.pageYOffset;
    header.classList.toggle('is-scrolled', scrollY > 24);

    const active = sections.reduce((current, section) => {
      const top = section.getBoundingClientRect().top;
      return top < window.innerHeight * .42 ? section.id : current;
    }, '');

    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${active}`);
    });
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
}

function updateMobileMenuLabel() {
  if (!mobileMenuToggle) return;
  const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
  const key = isOpen ? 'menuClose' : 'menuOpen';
  mobileMenuToggle.setAttribute('aria-label', translations[language][key]);
}

function openMobileMenu() {
  if (!mobileMenuToggle || !mobileMenu || !mobileNavBackdrop) return;
  mobileMenu.hidden = false;
  mobileNavBackdrop.hidden = false;
  mobileMenuToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('nav-open');
  updateMobileMenuLabel();
}

function closeMobileMenu() {
  if (!mobileMenuToggle || !mobileMenu || !mobileNavBackdrop) return;
  mobileMenu.hidden = true;
  mobileNavBackdrop.hidden = true;
  mobileMenuToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('nav-open');
  updateMobileMenuLabel();
}

function setupMobileMenu() {
  if (!mobileMenuToggle || !mobileMenu || !mobileNavBackdrop) return;
  closeMobileMenu();

  mobileMenuToggle.addEventListener('click', () => {
    const isOpen = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMobileMenu();
    else openMobileMenu();
  });

  mobileNavBackdrop.addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
  });
}

function setupHeroParallax() {
  const heroImage = document.querySelector('.hero-media img');
  if (!heroImage) return;

  let ticking = false;
  function update() {
    if (reduceMotionQuery.matches || window.matchMedia('(max-width: 760px)').matches) {
      heroImage.style.setProperty('--hero-shift', '0px');
      heroImage.style.setProperty('--hero-scale', '1.02');
      ticking = false;
      return;
    }

    const progress = Math.min(Math.max(window.scrollY / Math.max(window.innerHeight, 1), 0), 1);
    heroImage.style.setProperty('--hero-shift', `${Math.round(progress * 18)}px`);
    heroImage.style.setProperty('--hero-scale', `${1.02 + progress * .018}`);
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
}

function setupProcessSteps() {
  const steps = Array.from(document.querySelectorAll('.step'));
  if (!steps.length) return;

  if (!('IntersectionObserver' in window)) {
    steps[0].classList.add('is-active');
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      steps.forEach((step) => step.classList.toggle('is-active', step === entry.target));
    });
  }, { rootMargin: '-34% 0px -42% 0px', threshold: 0.1 });

  steps.forEach((step) => observer.observe(step));
}

function setupFloatingWhatsapp() {
  const floating = document.querySelector('.floating-whatsapp');
  const targets = document.querySelectorAll('#prijzen, .final-cta');
  const footer = document.querySelector('footer');
  if (!floating || !('IntersectionObserver' in window)) return;
  let ticking = false;

  function updateVisibility() {
    const mobileThreshold = Math.min(window.innerHeight * .72, 520);
    const threshold = window.innerWidth <= 980 ? mobileThreshold : 180;
    floating.classList.toggle('is-visible', window.scrollY > threshold);
    ticking = false;
  }

  function requestVisibilityUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateVisibility);
  }

  updateVisibility();
  window.addEventListener('scroll', requestVisibilityUpdate, { passive: true });
  window.addEventListener('resize', requestVisibilityUpdate);

  if (targets.length && !reduceMotionQuery.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        floating.classList.remove('attention');
        void floating.offsetWidth;
        floating.classList.add('attention');
      });
    }, { threshold: 0.18 });

    targets.forEach((target) => observer.observe(target));
  }

  if (footer) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        floating.classList.toggle('is-over-footer', entry.isIntersecting);
      });
    }, { threshold: 0.1 });
    footerObserver.observe(footer);
  }
}

function setupMagneticDetails() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || reduceMotionQuery.matches) return;

  document.querySelectorAll('.button, .service-card, .package-link').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - .5) * 6;
      const y = ((event.clientY - rect.top) / rect.height - .5) * 6;
      el.style.setProperty('--mx', `${x.toFixed(1)}px`);
      el.style.setProperty('--my', `${y.toFixed(1)}px`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--mx', '0px');
      el.style.setProperty('--my', '0px');
    });
  });
}

setRevealDelays();
setupReveals();
setupMobileMenu();
setupSmoothAnchors();
setupHeaderState();
setupHeroParallax();
setupProcessSteps();
setupFloatingWhatsapp();
setupMagneticDetails();

requestAnimationFrame(() => {
  document.documentElement.classList.add('is-loaded');
});
