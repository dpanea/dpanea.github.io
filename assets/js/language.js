(() => {
    const supported = ['en', 'de', 'es'];
    const storageKey = 'dp_preferred_language';

    const normalize = (value) => {
        if (!value) return 'en';
        const lang = value.toLowerCase().split('-')[0];
        return supported.includes(lang) ? lang : 'en';
    };

    const currentLang = document.documentElement.lang || 'en';
    document.documentElement.dataset.lang = currentLang;

    const getCurrentSectionHash = () => {
        const sections = Array.from(document.querySelectorAll('main[id], main section[id], main article.case-card[id]'));
        const offset = 120;
        const current = sections
            .filter((section) => section.getBoundingClientRect().top <= offset)
            .pop();

        return current ? `#${current.id}` : (window.location.hash || '');
    };

    const getLanguagePath = (targetLang) => {
        const path = window.location.pathname;
        const hash = getCurrentSectionHash();
        const normalizedPath = path.endsWith('/index.html')
            ? path.replace(/index\.html$/, '')
            : path;

        const routes = [
            {
                match: /^(\/|\/en\/|\/de\/|\/es\/)$/,
                paths: { en: '/en/', de: '/de/', es: '/es/' }
            },
            {
                match: /^\/(?:de\/|es\/)?case-studies\.html$/,
                paths: { en: '/case-studies.html', de: '/de/case-studies.html', es: '/es/case-studies.html' }
            },
            {
                match: /^\/(?:de\/|es\/)?partners\.html$/,
                paths: { en: '/partners.html', de: '/de/partners.html', es: '/es/partners.html' }
            },
            {
                match: /^\/blog\/(?:.*)?$/,
                paths: { en: normalizedPath, de: '/de/', es: '/es/' }
            },
            {
                match: /^\/(?:impressum|privacy)\.html$/,
                paths: { en: normalizedPath, de: path.includes('privacy') ? '/de/datenschutz.html' : '/de/impressum.html', es: path.includes('privacy') ? '/es/privacidad.html' : '/es/aviso-legal.html' }
            },
            {
                match: /^\/de\/(?:impressum|datenschutz)\.html$/,
                paths: { en: normalizedPath.includes('datenschutz') ? '/privacy.html' : '/impressum.html', de: normalizedPath, es: normalizedPath.includes('datenschutz') ? '/es/privacidad.html' : '/es/aviso-legal.html' }
            },
            {
                match: /^\/es\/(?:aviso-legal|privacidad)\.html$/,
                paths: { en: normalizedPath.includes('privacidad') ? '/privacy.html' : '/impressum.html', de: normalizedPath.includes('privacidad') ? '/de/datenschutz.html' : '/de/impressum.html', es: normalizedPath }
            }
        ];

        const route = routes.find((entry) => entry.match.test(normalizedPath));
        if (!route) return `/${targetLang}/${hash}`;
        return `${route.paths[targetLang] || `/${targetLang}/`}${hash}`;
    };

    const updateLanguageLinks = () => {
        document.querySelectorAll('[data-lang-switch]').forEach((link) => {
            const targetLang = link.getAttribute('data-lang-switch');
            link.classList.toggle('is-active', targetLang === currentLang);
            if (supported.includes(targetLang)) {
                link.setAttribute('href', getLanguagePath(targetLang));
            }
        });
    };

    document.querySelectorAll('[data-lang-switch]').forEach((link) => {
        const targetLang = link.getAttribute('data-lang-switch');

        link.addEventListener('click', () => {
            if (supported.includes(targetLang)) {
                link.setAttribute('href', getLanguagePath(targetLang));
            }

            if (supported.includes(targetLang)) {
                localStorage.setItem(storageKey, targetLang);
            }
        });
    });

    updateLanguageLinks();
    window.addEventListener('hashchange', updateLanguageLinks);
    window.addEventListener('scroll', updateLanguageLinks, { passive: true });

    const path = window.location.pathname;
    if (window.location.protocol === 'file:') return;

    const isRootHome = path === '/' || path.endsWith('/index.html');
    const isLanguageRoute = /^\/(en|de|es)(\/|\/index\.html)?$/.test(path);
    const hasManualChoice = Boolean(localStorage.getItem(storageKey));

    if (!isRootHome || isLanguageRoute || hasManualChoice) return;

    const browserLang = normalize((navigator.languages && navigator.languages[0]) || navigator.language);
    window.location.replace(`/${browserLang}/`);
})();
