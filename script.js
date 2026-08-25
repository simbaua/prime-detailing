document.documentElement.classList.add('js');

const languageOptions = {
  nl: { code: 'NL', htmlLang: 'nl', label: 'Nederlands', locale: 'nl_NL' },
  en: { code: 'EN', htmlLang: 'en', label: 'English', locale: 'en_GB' },
  ru: { code: 'RU', htmlLang: 'ru', label: 'Русский', locale: 'ru_RU' },
  uk: { code: 'UA', htmlLang: 'uk', label: 'Українська', locale: 'uk_UA' }
};

const DEFAULT_LANGUAGE = 'nl';
const LANGUAGE_STORAGE_KEY = 'prime-detailing-language';
const CONSENT_STORAGE_KEY = 'prime-detailing-cookie-consent';

const translations = {
  nl: {
    brandHome: 'PRIME Detailing home',
    mainNavLabel: 'Hoofdnavigatie',
    mobileNavLabel: 'Mobiele navigatie',
    languageSelectLabel: 'Taal kiezen',
    languageMenuLabel: 'Taal kiezen',
    factsLabel: 'PRIME Detailing kerninformatie',
    heroMediaLabel: 'PRIME Detailing premium interieur',
    heroImageAlt: 'Professioneel gereinigd zwart Audi-interieur door PRIME Detailing',
    tickerLabel: 'Diensten overzicht',
    pricingListLabel: 'PRIME Detailing prijzen',
    contactLineLabel: 'Contactgegevens',
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
    heroText: 'PRIME Detailing reinigt auto-interieurs op locatie in Zwolle en omgeving: van een snelle refresh tot dieptereiniging van stoelen, tapijt en kunststof.',
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
    servicesTitle: 'Auto-interieur reinigen met een pakket dat past.',
    servicesText: 'Heldere behandelingen voor mobiele interieur detailing, bekleding reinigen en dieptereiniging op locatie.',
    refreshDesc: 'Basis auto-interieur refresh: stofzuigen, matten, kunststof, dashboard, panelen en ramen.',
    interiorDesc: 'Alles uit PRIME Refresh, plus diepere reiniging van stoelen en tapijt met een extractor waar dat past.',
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
    step2Text: 'Je krijgt een passend pakket, prijsindicatie en voorstel voor een afspraak.',
    step3Title: 'Detailing op locatie',
    step3Text: 'PRIME reinigt het interieur op locatie en levert het netjes op.',
    pricingEyebrow: 'TRANSPARANTE PRIJZEN',
    pricingTitle: 'Prijzen voor auto-interieurreiniging.',
    pricingIntro: "Kies het pakket dat past bij je interieur. Bij twijfel adviseren we op basis van foto's, vervuiling en type voertuig.",
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
    ctaText: "Stuur interieurfoto's en je locatie. We reageren met een passend pakket en een prijsindicatie.",
    footerLine: 'Auto-interieurreiniging • Interieur detailing • Zwolle',
    cookieFooterLink: 'Cookie instellingen',
    cookieEyebrow: 'COOKIES',
    cookieTitle: 'Cookie voorkeuren',
    cookieText: 'We gebruiken analytics cookies om bezoeken te begrijpen en de website te verbeteren. Je kunt analytics accepteren of weigeren.',
    cookieAnalyticsTitle: 'Analytics cookies',
    cookieAnalyticsText: 'Helpt ons te zien hoe de website wordt gebruikt.',
    cookieSettings: 'Instellingen',
    cookieReject: 'Weigeren',
    cookieSave: 'Voorkeur opslaan',
    cookieAccept: 'Analytics accepteren'
  },
  en: {
    brandHome: 'PRIME Detailing home',
    mainNavLabel: 'Main navigation',
    mobileNavLabel: 'Mobile navigation',
    languageSelectLabel: 'Choose language',
    languageMenuLabel: 'Choose language',
    factsLabel: 'PRIME Detailing key information',
    heroMediaLabel: 'PRIME Detailing premium interior',
    heroImageAlt: 'Professionally cleaned black Audi interior by PRIME Detailing',
    tickerLabel: 'Service overview',
    pricingListLabel: 'PRIME Detailing prices',
    contactLineLabel: 'Contact details',
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
    heroText: 'PRIME Detailing cleans car interiors at your location in Zwolle and the surrounding area: from a quick refresh to deep cleaning of seats, carpet and plastics.',
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
    processTitle: 'Mobile detailing, made simple.',
    processText: 'Send a few clear photos of your car interior and your location in or around Zwolle. You will receive package advice, a price estimate and a suitable appointment time.',
    processLink: 'Send photos on WhatsApp',
    step1Title: 'Send photos',
    step1Text: 'Share interior photos and your location via WhatsApp or Instagram.',
    step2Title: 'Receive advice',
    step2Text: 'You receive a suitable package, price estimate and appointment proposal.',
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
    ctaText: 'Send interior photos and your location. We reply with the right package and a price estimate.',
    footerLine: 'Car interior cleaning • Interior detailing • Zwolle',
    cookieFooterLink: 'Cookie settings',
    cookieEyebrow: 'COOKIES',
    cookieTitle: 'Cookie preferences',
    cookieText: 'We use analytics cookies to understand visits and improve the website. You can accept or reject analytics.',
    cookieAnalyticsTitle: 'Analytics cookies',
    cookieAnalyticsText: 'Helps us see how the website is used.',
    cookieSettings: 'Settings',
    cookieReject: 'Reject',
    cookieSave: 'Save preference',
    cookieAccept: 'Accept analytics'
  },
  ru: {
    brandHome: 'PRIME Detailing главная',
    mainNavLabel: 'Основная навигация',
    mobileNavLabel: 'Мобильная навигация',
    languageSelectLabel: 'Выбрать язык',
    languageMenuLabel: 'Выбрать язык',
    factsLabel: 'Ключевая информация PRIME Detailing',
    heroMediaLabel: 'Премиальный интерьер от PRIME Detailing',
    heroImageAlt: 'Профессионально очищенный черный интерьер Audi от PRIME Detailing',
    tickerLabel: 'Обзор услуг',
    pricingListLabel: 'Цены PRIME Detailing',
    contactLineLabel: 'Контактные данные',
    navServices: 'Услуги',
    navProcess: 'Как это работает',
    navPricing: 'Цены',
    navFaq: 'FAQ',
    navArea: 'Зона выезда',
    navContact: 'Контакты',
    navBook: 'WhatsApp',
    menuOpen: 'Открыть меню',
    menuClose: 'Закрыть меню',
    heroEyebrow: 'ВЫЕЗДНОЙ ДЕТЕЙЛИНГ ИНТЕРЬЕРА • ZWOLLE И ОКРЕСТНОСТИ',
    heroSeoTitle: 'Профессиональная чистка салона автомобиля в Zwolle',
    heroTitle: 'Глубокая чистка.<br><span>Безупречный результат.</span>',
    heroText: 'PRIME Detailing чистит салоны с выездом по Zwolle и окрестностям: от легкого обновления до глубокой чистки сидений, ковров и пластика.',
    heroCta: 'Записаться в WhatsApp',
    heroPrices: 'Смотреть цены',
    factService: 'Сервис',
    factServiceValue: 'С выездом',
    factArea: 'Регион',
    factFrom: 'От',
    heroPriceLabel: 'Пакеты от',
    tickerDetailing: 'ДЕТЕЙЛИНГ ИНТЕРЬЕРА',
    tickerDeep: 'ГЛУБОКАЯ ЧИСТКА',
    tickerMobile: 'ВЫЕЗДНОЙ СЕРВИС',
    servicesEyebrow: 'УСЛУГИ',
    servicesTitle: 'Чистка салона под ваши задачи.',
    servicesText: 'Понятные пакеты для выездного детейлинга интерьера, чистки обивки и глубокой чистки салона.',
    refreshDesc: 'Базовое освежение салона: пылесос, коврики, пластик, панель, дверные карты и стекла.',
    interiorDesc: 'Все из PRIME Refresh, плюс более глубокая чистка сидений и коврового покрытия с экстрактором, где это уместно.',
    deepDesc: 'Полная глубокая чистка салона: сиденья, пол, коврики, багажник, пластик и труднодоступные зоны.',
    rescueDesc: 'Для сильно загрязненных салонов, стойких пятен и индивидуальных задач.',
    recommended: 'РЕКОМЕНДУЕМ',
    from199: 'от €199',
    processEyebrow: 'КАК ЭТО РАБОТАЕТ',
    processTitle: 'Выездной детейлинг без лишних сложностей.',
    processText: 'Отправьте несколько четких фото салона и вашу локацию в Zwolle или рядом. Мы подберем пакет, дадим ориентир по цене и предложим удобное время.',
    processLink: 'Отправить фото в WhatsApp',
    step1Title: 'Отправьте фото',
    step1Text: 'Поделитесь фото салона и локацией через WhatsApp или Instagram.',
    step2Title: 'Получите рекомендацию',
    step2Text: 'Мы предложим подходящий пакет, ориентир по цене и время записи.',
    step3Title: 'Детейлинг на месте',
    step3Text: 'PRIME очищает салон на вашей локации и передает автомобиль в аккуратном виде.',
    pricingEyebrow: 'ПРОЗРАЧНЫЕ ЦЕНЫ',
    pricingTitle: 'Цены на чистку салона автомобиля.',
    pricingIntro: 'Выберите пакет под состояние салона. Если сомневаетесь, мы подскажем по фото, степени загрязнения и типу автомобиля.',
    packageCta: 'Выбрать пакет',
    refreshShort: 'Базовое освежение салона',
    interiorShort: 'Refresh + глубокая чистка сидений и ковров',
    deepShort: 'Полная глубокая чистка салона',
    rescueShort: 'Сильное загрязнение / индивидуально',
    from199b: 'от €199',
    extraSuv: 'SUV / 7 мест',
    extraPet: 'Шерсть животных',
    extraDirt: 'Сильное загрязнение',
    customPrice: 'индивидуальная цена',
    pricingNote: 'Финальная цена может зависеть от типа автомобиля, степени загрязнения и необходимого времени чистки.',
    whyEyebrow: 'ПОЧЕМУ PRIME',
    whyTitle: 'Детейлинг, который видно и приятно ощущать.',
    why1Title: 'Внимание к деталям',
    why1Text: 'Швы, кромки и труднодоступные зоны также получают аккуратную обработку.',
    why2Title: 'Выездной сервис',
    why2Text: 'PRIME приезжает к вам в Zwolle и окрестностях. Меньше ожидания, больше удобства.',
    why3Title: 'Аккуратный финиш',
    why3Text: 'Свежий ухоженный салон, в котором снова приятно находиться.',
    areaEyebrow: 'ЗОНА ОБСЛУЖИВАНИЯ',
    areaTitle: 'Выездной детейлинг в Zwolle и окрестностях.',
    areaText: 'PRIME Detailing выполняет выездную чистку салона автомобиля в Zwolle и окрестностях. Живете немного за пределами Zwolle? Отправьте локацию в WhatsApp, и мы сообщим, можем ли приехать.',
    faqTitle: 'Частые вопросы.',
    faq1Q: 'Нужно ли предоставить воду или электричество?',
    faq1A: 'При записи сообщите, что доступно на вашей локации. Мы заранее согласуем, что потребуется для выбранной обработки.',
    faq2Q: 'Сколько времени занимает чистка салона?',
    faq2A: 'Это зависит от пакета, автомобиля и степени загрязнения. После фото мы дадим реалистичную оценку времени.',
    faq3Q: 'Можно ли заранее узнать цену?',
    faq3A: 'Да. Отправьте четкие фото салона в WhatsApp. При сильном загрязнении мы рассчитаем цену индивидуально.',
    faq4Q: 'Удаляете ли вы шерсть животных и стойкие пятна?',
    faq4A: 'Да. Шерсть животных и сильные загрязнения могут требовать доплаты в зависимости от объема работы.',
    ctaEyebrow: 'ГОТОВЫ К СВЕЖЕМУ САЛОНУ?',
    ctaTitle: 'Отправьте фото авто.<br><span>Мы подберем пакет.</span>',
    ctaText: 'Отправьте фото салона и вашу локацию. Мы ответим с подходящим пакетом и ориентиром по цене.',
    footerLine: 'Чистка салона автомобиля • Детейлинг интерьера • Zwolle',
    cookieFooterLink: 'Настройки cookies',
    cookieEyebrow: 'COOKIES',
    cookieTitle: 'Настройки cookies',
    cookieText: 'Мы используем аналитические cookies, чтобы понимать посещения и улучшать сайт. Вы можете принять или отклонить аналитику.',
    cookieAnalyticsTitle: 'Аналитические cookies',
    cookieAnalyticsText: 'Помогают видеть, как используется сайт.',
    cookieSettings: 'Настройки',
    cookieReject: 'Отклонить',
    cookieSave: 'Сохранить',
    cookieAccept: 'Принять аналитику'
  },
  uk: {
    brandHome: 'PRIME Detailing головна',
    mainNavLabel: 'Основна навігація',
    mobileNavLabel: 'Мобільна навігація',
    languageSelectLabel: 'Вибрати мову',
    languageMenuLabel: 'Вибрати мову',
    factsLabel: 'Ключова інформація PRIME Detailing',
    heroMediaLabel: 'Преміальний інтер’єр від PRIME Detailing',
    heroImageAlt: 'Професійно очищений чорний інтер’єр Audi від PRIME Detailing',
    tickerLabel: 'Огляд послуг',
    pricingListLabel: 'Ціни PRIME Detailing',
    contactLineLabel: 'Контактні дані',
    navServices: 'Послуги',
    navProcess: 'Як це працює',
    navPricing: 'Ціни',
    navFaq: 'FAQ',
    navArea: 'Зона виїзду',
    navContact: 'Контакти',
    navBook: 'WhatsApp',
    menuOpen: 'Відкрити меню',
    menuClose: 'Закрити меню',
    heroEyebrow: 'ВИЇЗНИЙ ДЕТЕЙЛІНГ САЛОНУ • ZWOLLE ТА ОКОЛИЦІ',
    heroSeoTitle: 'Професійне очищення салону автомобіля в Zwolle',
    heroTitle: 'Глибоке очищення.<br><span>Бездоганний результат.</span>',
    heroText: 'PRIME Detailing очищує салони з виїздом у Zwolle та околицях: від швидкого оновлення до глибокого очищення сидінь, килимів і пластику.',
    heroCta: 'Записатися в WhatsApp',
    heroPrices: 'Переглянути ціни',
    factService: 'Сервіс',
    factServiceValue: 'З виїздом',
    factArea: 'Регіон',
    factFrom: 'Від',
    heroPriceLabel: 'Пакети від',
    tickerDetailing: 'ДЕТЕЙЛІНГ САЛОНУ',
    tickerDeep: 'ГЛИБОКЕ ОЧИЩЕННЯ',
    tickerMobile: 'ВИЇЗНИЙ СЕРВІС',
    servicesEyebrow: 'ПОСЛУГИ',
    servicesTitle: 'Очищення салону під ваші потреби.',
    servicesText: 'Зрозумілі пакети для виїзного детейлінгу салону, очищення оббивки та глибокого очищення.',
    refreshDesc: 'Базове оновлення салону: пилосос, килимки, пластик, панель, дверні карти та скло.',
    interiorDesc: 'Усе з PRIME Refresh, плюс глибше очищення сидінь і килимового покриття екстрактором, де це доречно.',
    deepDesc: 'Повне глибоке очищення салону: сидіння, підлога, килимки, багажник, пластик і важкодоступні місця.',
    rescueDesc: 'Для сильно забруднених салонів, стійких плям та індивідуальних задач.',
    recommended: 'РЕКОМЕНДУЄМО',
    from199: 'від €199',
    processEyebrow: 'ЯК ЦЕ ПРАЦЮЄ',
    processTitle: 'Виїзний детейлінг без зайвих складнощів.',
    processText: 'Надішліть кілька чітких фото салону та вашу локацію в Zwolle або поблизу. Ми підберемо пакет, дамо орієнтовну ціну та запропонуємо зручний час.',
    processLink: 'Надіслати фото в WhatsApp',
    step1Title: 'Надішліть фото',
    step1Text: 'Поділіться фото салону та локацією через WhatsApp або Instagram.',
    step2Title: 'Отримайте рекомендацію',
    step2Text: 'Ми запропонуємо відповідний пакет, орієнтовну ціну та час запису.',
    step3Title: 'Детейлінг на місці',
    step3Text: 'PRIME очищує салон на вашій локації та передає авто в охайному вигляді.',
    pricingEyebrow: 'ПРОЗОРІ ЦІНИ',
    pricingTitle: 'Ціни на очищення салону автомобіля.',
    pricingIntro: 'Оберіть пакет під стан салону. Якщо сумніваєтеся, ми порадимо за фото, рівнем забруднення та типом автомобіля.',
    packageCta: 'Обрати пакет',
    refreshShort: 'Базове оновлення салону',
    interiorShort: 'Refresh + глибоке очищення сидінь і килимів',
    deepShort: 'Повне глибоке очищення салону',
    rescueShort: 'Сильне забруднення / індивідуально',
    from199b: 'від €199',
    extraSuv: 'SUV / 7 місць',
    extraPet: 'Шерсть тварин',
    extraDirt: 'Сильне забруднення',
    customPrice: 'індивідуальна ціна',
    pricingNote: 'Фінальна ціна може залежати від типу автомобіля, рівня забруднення та необхідного часу очищення.',
    whyEyebrow: 'ЧОМУ PRIME',
    whyTitle: 'Детейлінг, який видно і приємно відчувати.',
    why1Title: 'Увага до деталей',
    why1Text: 'Шви, краї та важкодоступні зони також отримують ретельний догляд.',
    why2Title: 'Виїзний сервіс',
    why2Text: 'PRIME приїжджає до вас у Zwolle та околицях. Менше очікування, більше зручності.',
    why3Title: 'Доглянутий фініш',
    why3Text: 'Свіжий охайний салон, у якому знову приємно перебувати.',
    areaEyebrow: 'ЗОНА ОБСЛУГОВУВАННЯ',
    areaTitle: 'Виїзний детейлінг у Zwolle та околицях.',
    areaText: 'PRIME Detailing виконує виїзне очищення салону автомобіля у Zwolle та околицях. Живете трохи за межами Zwolle? Надішліть локацію в WhatsApp, і ми повідомимо, чи можемо приїхати.',
    faqTitle: 'Поширені запитання.',
    faq1Q: 'Чи потрібно надати воду або електрику?',
    faq1A: 'Під час запису повідомте, що доступно на вашій локації. Ми заздалегідь узгодимо, що потрібно для обраної обробки.',
    faq2Q: 'Скільки часу займає очищення салону?',
    faq2A: 'Це залежить від пакета, автомобіля та рівня забруднення. Після фото ми дамо реалістичну оцінку часу.',
    faq3Q: 'Чи можна дізнатися ціну заздалегідь?',
    faq3A: 'Так. Надішліть чіткі фото салону в WhatsApp. Для сильного забруднення ми розрахуємо ціну індивідуально.',
    faq4Q: 'Чи видаляєте ви шерсть тварин і стійкі плями?',
    faq4A: 'Так. Шерсть тварин і сильні забруднення можуть потребувати доплати залежно від обсягу роботи.',
    ctaEyebrow: 'ГОТОВІ ДО СВІЖОГО САЛОНУ?',
    ctaTitle: 'Надішліть фото авто.<br><span>Ми підберемо пакет.</span>',
    ctaText: 'Надішліть фото салону та вашу локацію. Ми відповімо з відповідним пакетом і орієнтовною ціною.',
    footerLine: 'Очищення салону автомобіля • Детейлінг салону • Zwolle',
    cookieFooterLink: 'Налаштування cookies',
    cookieEyebrow: 'COOKIES',
    cookieTitle: 'Налаштування cookies',
    cookieText: 'Ми використовуємо аналітичні cookies, щоб розуміти відвідування та покращувати сайт. Ви можете прийняти або відхилити аналітику.',
    cookieAnalyticsTitle: 'Аналітичні cookies',
    cookieAnalyticsText: 'Допомагають бачити, як використовується сайт.',
    cookieSettings: 'Налаштування',
    cookieReject: 'Відхилити',
    cookieSave: 'Зберегти',
    cookieAccept: 'Прийняти аналітику'
  }
};

const whatsappMessages = {
  nl: {
    base: "Hoi PRIME, ik wil graag een prijsindicatie voor mijn auto-interieur. Ik kan foto's van de auto en mijn locatie sturen.",
    packageInterest: 'Ik denk aan'
  },
  en: {
    base: 'Hi PRIME, I would like a quote for my car interior. I can send photos of the car and my location.',
    packageInterest: 'I am interested in'
  },
  ru: {
    base: 'Здравствуйте! Хочу записаться на детейлинг салона. Могу отправить фото автомобиля и свою локацию.',
    packageInterest: 'Меня интересует пакет'
  },
  uk: {
    base: 'Вітаю! Хочу записатися на детейлінг салону. Можу надіслати фото автомобіля та свою локацію.',
    packageInterest: 'Мене цікавить пакет'
  }
};

const metadata = {
  nl: {
    title: 'Auto Interieur Reinigen Zwolle | PRIME Detailing',
    description: 'Professionele auto-interieurreiniging in Zwolle op locatie. Mobiele service van refresh tot dieptereiniging vanaf €69. Vraag prijs via WhatsApp.',
    socialDescription: 'Mobiele auto-interieurreiniging en interieur detailing in Zwolle. Pakketten vanaf €69. Vraag direct een prijs aan via WhatsApp.'
  },
  en: {
    title: 'Car Interior Cleaning Zwolle | PRIME Detailing',
    description: 'Professional mobile car interior cleaning in Zwolle. From quick refresh to deep cleaning. Packages from €69. Request a price on WhatsApp.',
    socialDescription: 'Mobile interior detailing and deep cleaning in Zwolle. Packages from €69. Request a price on WhatsApp.'
  },
  ru: {
    title: 'Чистка салона автомобиля Zwolle | PRIME Detailing',
    description: 'Профессиональная выездная чистка салона автомобиля в Zwolle. От быстрой уборки до глубокой чистки. Пакеты от €69. Запросите цену в WhatsApp.',
    socialDescription: 'Выездной детейлинг интерьера и глубокая чистка салона в Zwolle. Пакеты от €69. Запросите цену в WhatsApp.'
  },
  uk: {
    title: 'Очищення салону автомобіля Zwolle | PRIME Detailing',
    description: 'Професійне виїзне очищення салону автомобіля в Zwolle. Від швидкого оновлення до глибокого очищення. Пакети від €69. Запитайте ціну в WhatsApp.',
    socialDescription: 'Виїзний детейлінг салону та глибоке очищення в Zwolle. Пакети від €69. Запитайте ціну в WhatsApp.'
  }
};

const WA_BASE = 'https://wa.me/31625105116';
let language = DEFAULT_LANGUAGE;
const langSelector = document.getElementById('langSelector');
const langButton = document.getElementById('langButton');
const langButtonCode = document.getElementById('langButtonCode');
const langMenu = document.getElementById('langMenu');
const langOptions = Array.from(document.querySelectorAll('.lang-option'));
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
const cookieBanner = document.getElementById('cookieBanner');
const cookieSettingsFooter = document.getElementById('cookieSettingsFooter');
const cookieSettingsButton = document.getElementById('cookieSettingsButton');
const cookieAcceptButton = document.getElementById('cookieAcceptButton');
const cookieRejectButton = document.getElementById('cookieRejectButton');
const cookieSaveButton = document.getElementById('cookieSaveButton');
const cookiePreferences = document.getElementById('cookiePreferences');
const cookieAnalyticsToggle = document.getElementById('cookieAnalyticsToggle');
const metaDescription = document.querySelector('meta[name="description"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogLocale = document.querySelector('meta[property="og:locale"]');
const twitterTitle = document.querySelector('meta[name="twitter:title"]');
const twitterDescription = document.querySelector('meta[name="twitter:description"]');
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
let analyticsConsentChoice = null;
const gaDebugHistory = [];
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
const deniedGoogleConsent = {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied'
};

function updateMotionPreference() {
  document.documentElement.classList.toggle('reduce-motion', reduceMotionQuery.matches);
}

function isDebugMode() {
  const params = new URLSearchParams(window.location.search);
  return params.has('gtm_debug') || params.get('debug_ga') === '1';
}

function isConsentResetMode() {
  return new URLSearchParams(window.location.search).get('reset_consent') === '1';
}

function debugAnalytics(message, data) {
  if (!isDebugMode()) return;
  console.info(`[PRIME GA] ${message}`, data || '');
}

function recordAnalyticsDebug(entry) {
  if (!isDebugMode()) return;
  gaDebugHistory.push({
    at: new Date().toISOString(),
    ...entry
  });
  if (gaDebugHistory.length > 25) gaDebugHistory.shift();
}

function getStoredCookieConsent() {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === 'accepted' || stored === 'rejected' ? stored : null;
  } catch (error) {
    return null;
  }
}

function storeCookieConsent(choice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch (error) {
    // Storage can be unavailable in private or restricted browser contexts.
  }
}

function clearCookieConsent() {
  try {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
  } catch (error) {
    // Storage can be unavailable in private or restricted browser contexts.
  }
}

function getGoogleConsentState(choice) {
  return {
    ...deniedGoogleConsent,
    analytics_storage: choice === 'accepted' ? 'granted' : 'denied'
  };
}

function updateGoogleConsent(choice) {
  if (typeof window.gtag !== 'function') return;

  window.gtag('consent', 'update', getGoogleConsentState(choice));
  recordAnalyticsDebug({
    type: 'consent_update',
    choice,
    consent: getGoogleConsentState(choice)
  });
  debugAnalytics(`consent ${choice}`, getGoogleConsentState(choice));
}

function hasAnalyticsConsent() {
  return analyticsConsentChoice === 'accepted';
}

function getEventParams(params = {}) {
  return isDebugMode() ? { ...params, debug_mode: true } : params;
}

function sendPageView() {
  if (typeof window.gtag !== 'function' || !hasAnalyticsConsent()) {
    recordAnalyticsDebug({
      type: 'blocked',
      event: 'page_view',
      reason: typeof window.gtag !== 'function' ? 'gtag_unavailable' : 'consent_not_accepted'
    });
    return;
  }

  const params = getEventParams({
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });
  window.gtag('event', 'page_view', params);
  recordAnalyticsDebug({
    type: 'sent',
    event: 'page_view',
    params
  });
  debugAnalytics('page_view sent', params);
}

function applyStoredAnalyticsConsent() {
  if (isConsentResetMode()) clearCookieConsent();

  const storedConsent = getStoredCookieConsent();
  analyticsConsentChoice = storedConsent;

  if (storedConsent === 'accepted') {
    updateGoogleConsent('accepted');
    sendPageView();
    return;
  }

  if (storedConsent === 'rejected') updateGoogleConsent('rejected');
}

function trackEvent(name, params = {}) {
  if (typeof window.gtag !== 'function') {
    recordAnalyticsDebug({
      type: 'blocked',
      event: name,
      reason: 'gtag_unavailable',
      params
    });
    return;
  }
  if (!hasAnalyticsConsent()) {
    recordAnalyticsDebug({
      type: 'blocked',
      event: name,
      reason: 'consent_not_accepted',
      params
    });
    return;
  }

  const eventParams = getEventParams(params);
  window.gtag('event', name, eventParams);
  recordAnalyticsDebug({
    type: 'sent',
    event: name,
    params: eventParams
  });
  debugAnalytics(`event sent: ${name}`, eventParams);
}

function getPrimeGaDiagnostics() {
  return {
    gaId: 'G-OY96HZLQE2',
    gtagAvailable: typeof window.gtag === 'function',
    consentValue: analyticsConsentChoice,
    localStorageConsent: getStoredCookieConsent(),
    gaScriptCount: document.querySelectorAll('script[src*="googletagmanager.com/gtag/js?id=G-OY96HZLQE2"]').length,
    lastEvents: [...gaDebugHistory],
    page: {
      title: document.title,
      url: window.location.href,
      path: window.location.pathname
    }
  };
}

function setupPrimeGaDebug() {
  if (!isDebugMode()) return;

  window.__primeGaDebug = {
    getState: getPrimeGaDiagnostics,
    sendTestEvent() {
      if (!hasAnalyticsConsent()) {
        recordAnalyticsDebug({
          type: 'blocked',
          event: 'ga_debug_test',
          reason: 'consent_not_accepted'
        });
        return {
          sent: false,
          reason: 'consent_not_accepted',
          state: getPrimeGaDiagnostics()
        };
      }

      trackEvent('ga_debug_test', { source: 'manual_debug' });
      return {
        sent: true,
        state: getPrimeGaDiagnostics()
      };
    }
  };
  debugAnalytics('debug object ready', window.__primeGaDebug.getState());
}

function getTrackingPlacement(el) {
  if (el.dataset.trackPlacement) return el.dataset.trackPlacement;
  if (el.classList.contains('floating-whatsapp')) return 'floating';
  if (el.closest('#prijzen')) return 'pricing';
  if (el.closest('#contact')) return 'final_cta';
  if (el.closest('#werkwijze')) return 'process';
  if (el.closest('#diensten')) return 'services';
  if (el.closest('.mobile-nav')) return 'mobile_nav';
  if (el.closest('.site-header')) return 'header';
  if (el.closest('.hero')) return 'hero';
  return 'unknown';
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

function getStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return languageOptions[stored] ? stored : DEFAULT_LANGUAGE;
  } catch (error) {
    return DEFAULT_LANGUAGE;
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch (error) {
    // Storage can be unavailable in private or restricted browser contexts.
  }
}

function updateLanguageSelector() {
  if (!langButton || !langButtonCode) return;

  langButtonCode.textContent = languageOptions[language].code;
  langOptions.forEach((option) => {
    const isActive = option.dataset.lang === language;
    option.setAttribute('aria-selected', isActive ? 'true' : 'false');
    option.classList.toggle('is-active', isActive);
  });
}

function closeLanguageMenu({ restoreFocus = false } = {}) {
  if (!langButton || !langMenu) return;

  langMenu.hidden = true;
  langButton.setAttribute('aria-expanded', 'false');
  if (restoreFocus) langButton.focus();
}

function openLanguageMenu({ focusActive = false } = {}) {
  if (!langButton || !langMenu) return;

  langMenu.hidden = false;
  langButton.setAttribute('aria-expanded', 'true');

  if (focusActive) {
    const activeOption = langOptions.find((option) => option.dataset.lang === language) || langOptions[0];
    activeOption.focus();
  }
}

function toggleLanguageMenu() {
  if (!langButton || !langMenu) return;
  if (langMenu.hidden) openLanguageMenu();
  else closeLanguageMenu();
}

function applyLanguage(lang) {
  if (!languageOptions[lang]) lang = DEFAULT_LANGUAGE;

  const previousLanguage = language;
  const shouldTrackLanguageChange = document.documentElement.dataset.languageInitialized === 'true' && previousLanguage !== lang;
  language = lang;
  document.documentElement.lang = languageOptions[lang].htmlLang;
  document.documentElement.dataset.language = languageOptions[lang].code.toLowerCase();

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

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (translations[lang][key]) {
      el.setAttribute('alt', translations[lang][key]);
    }
  });

  document.querySelectorAll('.wa-link').forEach((link) => {
    const packageName = link.dataset.package;
    const whatsappCopy = whatsappMessages[lang];
    const message = packageName
      ? `${whatsappCopy.base} ${whatsappCopy.packageInterest} ${packageName}.`
      : whatsappCopy.base;
    link.href = `${WA_BASE}?text=${encodeURIComponent(message)}`;
  });

  const pageMeta = metadata[lang];

  document.title = pageMeta.title;

  if (metaDescription) {
    metaDescription.content = pageMeta.description;
  }
  if (ogTitle) ogTitle.content = pageMeta.title;
  if (ogDescription) ogDescription.content = pageMeta.socialDescription;
  if (ogLocale) ogLocale.content = languageOptions[lang].locale;
  if (twitterTitle) twitterTitle.content = pageMeta.title;
  if (twitterDescription) twitterDescription.content = pageMeta.socialDescription;

  prepareTextReveals();
  updateMobileMenuLabel();
  updateLanguageSelector();
  storeLanguage(lang);
  document.documentElement.dataset.languageInitialized = 'true';

  if (shouldTrackLanguageChange) {
    trackEvent('language_change', {
      from_language: languageOptions[previousLanguage].code,
      to_language: languageOptions[lang].code
    });
  }
}

function setupLanguageSelector() {
  if (!langSelector || !langButton || !langMenu || !langOptions.length) return;

  langButton.addEventListener('click', toggleLanguageMenu);
  langButton.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLanguageMenu({ focusActive: true });
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      langMenu.hidden = false;
      langButton.setAttribute('aria-expanded', 'true');
      langOptions[langOptions.length - 1].focus();
    }
  });

  langOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
      applyLanguage(option.dataset.lang);
      closeLanguageMenu({ restoreFocus: true });
    });

    option.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeLanguageMenu({ restoreFocus: true });
        return;
      }

      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const offset = event.key === 'ArrowDown' ? 1 : -1;
        const nextIndex = (index + offset + langOptions.length) % langOptions.length;
        langOptions[nextIndex].focus();
        return;
      }

      if (event.key === 'Home') {
        event.preventDefault();
        langOptions[0].focus();
        return;
      }

      if (event.key === 'End') {
        event.preventDefault();
        langOptions[langOptions.length - 1].focus();
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        applyLanguage(option.dataset.lang);
        closeLanguageMenu({ restoreFocus: true });
      }
    });
  });

  document.addEventListener('pointerdown', (event) => {
    if (!langSelector.contains(event.target)) closeLanguageMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLanguageMenu();
  });
}

function setCookiePreferencesOpen(isOpen) {
  if (!cookiePreferences || !cookieSettingsButton || !cookieSaveButton) return;

  cookiePreferences.hidden = !isOpen;
  cookieSettingsButton.hidden = isOpen;
  cookieSaveButton.hidden = !isOpen;
}

function openCookieBanner({ preferences = false } = {}) {
  if (!cookieBanner) return;

  const storedConsent = getStoredCookieConsent();
  if (cookieAnalyticsToggle) cookieAnalyticsToggle.checked = storedConsent === 'accepted';

  setCookiePreferencesOpen(preferences);
  cookieBanner.hidden = false;
  document.body.classList.add('cookie-banner-visible');
}

function closeCookieBanner() {
  if (!cookieBanner) return;

  cookieBanner.hidden = true;
  document.body.classList.remove('cookie-banner-visible');
}

function saveCookieChoice(choice) {
  const normalizedChoice = choice === 'accepted' ? 'accepted' : 'rejected';
  storeCookieConsent(normalizedChoice);
  analyticsConsentChoice = normalizedChoice;
  updateGoogleConsent(normalizedChoice);
  closeCookieBanner();

  if (normalizedChoice === 'accepted') {
    sendPageView();
    trackEvent('cookie_consent_accept', {
      consent_choice: 'accepted'
    });
  }
}

function setupCookieConsent() {
  if (!cookieBanner) return;

  if (!getStoredCookieConsent()) openCookieBanner();

  cookieAcceptButton?.addEventListener('click', () => saveCookieChoice('accepted'));
  cookieRejectButton?.addEventListener('click', () => saveCookieChoice('rejected'));
  cookieSettingsButton?.addEventListener('click', () => {
    if (cookieAnalyticsToggle) cookieAnalyticsToggle.checked = getStoredCookieConsent() === 'accepted';
    setCookiePreferencesOpen(true);
  });
  cookieSaveButton?.addEventListener('click', () => {
    saveCookieChoice(cookieAnalyticsToggle?.checked ? 'accepted' : 'rejected');
  });
  cookieSettingsFooter?.addEventListener('click', () => openCookieBanner({ preferences: true }));
}

document.getElementById('year').textContent = new Date().getFullYear();
updateMotionPreference();
setupLanguageSelector();
applyLanguage(getStoredLanguage());
applyStoredAnalyticsConsent();
setupPrimeGaDebug();
setupCookieConsent();

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

function setupTrackingEvents() {
  document.querySelectorAll('.wa-link').forEach((link) => {
    link.addEventListener('click', () => {
      const params = { placement: getTrackingPlacement(link) };
      if (link.dataset.package) params.package = link.dataset.package;

      trackEvent('whatsapp_click', params);
      if (link.dataset.package) trackEvent('package_select', params);
    });
  });

  document.querySelectorAll('a[href*="instagram.com"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('instagram_click', { placement: getTrackingPlacement(link) });
    });
  });

  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('phone_click', { placement: getTrackingPlacement(link) });
    });
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.addEventListener('click', () => {
      trackEvent('email_click', { placement: getTrackingPlacement(link) });
    });
  });

  document.querySelectorAll('.faq-list details').forEach((detail) => {
    detail.addEventListener('toggle', () => {
      if (!detail.open) return;
      trackEvent('faq_open', {
        question: detail.querySelector('summary')?.innerText.trim() || 'unknown'
      });
    });
  });

  const pricingSection = document.getElementById('prijzen');
  if (pricingSection && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        trackEvent('price_view', { section: 'pricing' });
        observer.disconnect();
      });
    }, { threshold: 0.35 });

    observer.observe(pricingSection);
  }
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
setupTrackingEvents();

requestAnimationFrame(() => {
  document.documentElement.classList.add('is-loaded');
});
