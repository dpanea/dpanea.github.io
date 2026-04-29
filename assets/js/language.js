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

    const rootUrl = () => {
        const url = new URL(window.location.href);
        const parts = url.pathname.split('/');
        const langIndex = parts.findIndex((part) => supported.includes(part));
        const sectionIndex = parts.findIndex((part) => part === 'blog');

        if (langIndex !== -1) {
            url.pathname = `${parts.slice(0, langIndex).join('/')}/`;
        } else if (sectionIndex !== -1) {
            url.pathname = `${parts.slice(0, sectionIndex).join('/')}/`;
        } else {
            url.pathname = '/';
        }

        url.search = '';
        url.hash = '';
        return url;
    };

    const languageUrl = (lang) => {
        const currentPath = window.location.pathname;
        const isCaseStudyPage = /(^|\/)(case-studies\.html)$/.test(currentPath);
        let suffix = window.location.protocol === 'file:' ? `${lang}/index.html` : `${lang}/`;

        if (isCaseStudyPage) {
            if (lang === 'en') {
                suffix = 'case-studies.html';
            } else {
                suffix = `${lang}/case-studies.html`;
            }
        }

        return new URL(suffix, rootUrl()).href;
    };

    document.querySelectorAll('[data-lang-switch]').forEach((link) => {
        const targetLang = link.getAttribute('data-lang-switch');
        link.classList.toggle('is-active', targetLang === currentLang);
        if (supported.includes(targetLang)) {
            link.href = languageUrl(targetLang);
        }

        link.addEventListener('click', (event) => {
            if (supported.includes(targetLang)) {
                localStorage.setItem(storageKey, targetLang);
                event.preventDefault();
                window.location.assign(languageUrl(targetLang));
            }
        });
    });

    const path = window.location.pathname;
    if (window.location.protocol === 'file:') return;

    const isRootHome = path === '/' || path.endsWith('/index.html');
    const isLanguageRoute = /^\/(en|de|es)(\/|\/index\.html)?$/.test(path);
    const hasManualChoice = Boolean(localStorage.getItem(storageKey));

    if (!isRootHome || isLanguageRoute || hasManualChoice) return;

    const browserLang = normalize((navigator.languages && navigator.languages[0]) || navigator.language);
    window.location.replace(languageUrl(browserLang));
})();
