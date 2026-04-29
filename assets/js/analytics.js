(() => {
    const token = window.CF_WEB_ANALYTICS_TOKEN || 'a91debbd288543ad9e4e947f3ba2bcb5';
    const hasToken = /^[a-f0-9]{32}$/i.test(token);

    if (hasToken) {
        const script = document.createElement('script');
        script.defer = true;
        script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
        script.dataset.cfBeacon = JSON.stringify({ token });
        document.head.appendChild(script);
    }

    document.addEventListener('click', (event) => {
        const target = event.target.closest('[data-analytics-event]');
        if (!target) return;

        window.dispatchEvent(new CustomEvent('dp:analytics-event', {
            detail: {
                event: target.getAttribute('data-analytics-event'),
                href: target.getAttribute('href') || '',
                language: document.documentElement.lang || 'en',
                path: window.location.pathname
            }
        }));
    });
})();
