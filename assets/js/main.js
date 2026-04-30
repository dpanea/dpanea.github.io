document.addEventListener('DOMContentLoaded', () => {
    const KIT_FORM_ID = '8913239';
    const KIT_API_KEY = 'cvO5g-EviPgxF0n7wWRLmw';
    const VIDEO_SRC = 'https://www.youtube.com/embed/gSTAB4mQfOQ?si=k5yDaM2SdcIgT_9I';

    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    const backToTop = document.getElementById('back-to-top');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    const updateScrollUI = () => {
        const showReturn = window.scrollY > 520;
        if (backToTop) backToTop.classList.toggle('is-visible', showReturn);
        if (scrollIndicator) {
            const opacity = Math.max(0, 1 - window.scrollY / 220);
            scrollIndicator.style.opacity = String(opacity);
            scrollIndicator.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
        }
    };

    window.addEventListener('scroll', updateScrollUI, { passive: true });
    updateScrollUI();

    document.querySelectorAll('.protected-email').forEach((link) => {
        const user = link.getAttribute('data-email-user');
        const domain = link.getAttribute('data-email-domain');
        const subject = link.getAttribute('data-email-subject');
        if (!user || !domain) return;
        const href = `mailto:${user}@${domain}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
        link.setAttribute('href', href);
    });

    const revealTargets = document.querySelectorAll('.reveal, .reveal-group');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.12,
            rootMargin: '0px 0px -48px 0px'
        });

        revealTargets.forEach((target) => observer.observe(target));
    } else {
        revealTargets.forEach((target) => target.classList.add('visible'));
    }

    const track = document.getElementById('testimonial-track');
    const prev = document.getElementById('testimonial-prev');
    const next = document.getElementById('testimonial-next');

    if (track && prev && next) {
        const originals = Array.from(track.children);
        const total = originals.length;
        let index = total;

        const cloneCard = (card) => {
            const clone = card.cloneNode(true);
            clone.setAttribute('aria-hidden', 'true');
            return clone;
        };

        track.prepend(...originals.map(cloneCard));
        track.append(...originals.map(cloneCard));

        const setPosition = (animate = true) => {
            const cards = Array.from(track.children);
            if (!cards.length) return;
            track.style.transition = animate ? 'transform 260ms ease' : 'none';
            const cardWidth = cards[0].getBoundingClientRect().width;
            const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);
            track.style.transform = `translateX(-${index * (cardWidth + gap)}px)`;
        };

        const resetIfNeeded = () => {
            if (index >= total * 2) {
                index -= total;
                setPosition(false);
            }

            if (index < total) {
                index += total;
                setPosition(false);
            }
        };

        prev.addEventListener('click', () => {
            index -= 1;
            setPosition();
        });

        next.addEventListener('click', () => {
            index += 1;
            setPosition();
        });

        track.addEventListener('transitionend', resetIfNeeded);

        window.addEventListener('resize', () => {
            const active = ((index - total) % total + total) % total;
            index = total + active;
            setPosition(false);
        });

        setPosition(false);
    }

    const lightbox = document.getElementById('video-lightbox');
    const openVideo = document.getElementById('open-video-lightbox');
    const openVideoLinks = document.querySelectorAll('[data-open-video]');
    const closeVideo = document.getElementById('lightbox-close');
    const backdrop = document.getElementById('lightbox-backdrop');
    const iframe = document.getElementById('keynote-video');

    if (lightbox && iframe) {
        const open = () => {
            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
            iframe.src = `${VIDEO_SRC}&autoplay=1`;
        };

        const close = () => {
            lightbox.classList.remove('is-open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
            iframe.src = '';
        };

        if (openVideo) openVideo.addEventListener('click', open);
        openVideoLinks.forEach((button) => button.addEventListener('click', open));
        if (closeVideo) closeVideo.addEventListener('click', close);
        if (backdrop) backdrop.addEventListener('click', close);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close();
        });
    }

    const leadForm = document.getElementById('lead-form');
    const submitButton = document.getElementById('submit-btn');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    if (leadForm && submitButton) {
        leadForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('email');
            const email = emailInput ? emailInput.value.trim() : '';
            const scorecardUrl = leadForm.getAttribute('data-scorecard-url') || '';

            if (!email) return;

            submitButton.disabled = true;
            if (errorMessage) {
                errorMessage.hidden = true;
                errorMessage.textContent = '';
            }

            try {
                const response = await fetch(`https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ api_key: KIT_API_KEY, email })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Subscription failed');
                }

                leadForm.reset();
                if (successMessage) {
                    const downloadLink = successMessage.querySelector('a');
                    if (downloadLink && scorecardUrl) downloadLink.setAttribute('href', scorecardUrl);
                    successMessage.hidden = false;
                }
                window.dispatchEvent(new CustomEvent('dp:analytics-event', {
                    detail: {
                        event: 'scorecard_form_success',
                        language: document.documentElement.lang || 'en',
                        path: window.location.pathname,
                        scorecard_url: scorecardUrl
                    }
                }));
            } catch (error) {
                if (errorMessage) {
                    errorMessage.textContent = error.message || 'Something went wrong. Please try again.';
                    errorMessage.hidden = false;
                }
            } finally {
                submitButton.disabled = false;
            }
        });
    }
});
