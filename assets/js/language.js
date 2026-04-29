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

    document.querySelectorAll('[data-lang-switch]').forEach((link) => {
        const targetLang = link.getAttribute('data-lang-switch');
        link.classList.toggle('is-active', targetLang === currentLang);
        link.addEventListener('click', () => {
            if (supported.includes(targetLang)) {
                localStorage.setItem(storageKey, targetLang);
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
    const destination = browserLang === 'en' ? '/en/' : `/${browserLang}/`;
    window.location.replace(destination);
})();
