document.addEventListener('DOMContentLoaded', () => {

    // --- Configuration ---
    const KIT_FORM_ID = '8913239';
    const KIT_API_KEY = 'cvO5g-EviPgxF0n7wWRLmw';
    const VIDEO_SRC = 'https://www.youtube.com/embed/gSTAB4mQfOQ?si=k5yDaM2SdcIgT_9I';

    // --- Mobile Navigation ---
    const toggle = document.getElementById('nav-toggle');
    const mobile = document.getElementById('nav-mobile');

    if (toggle && mobile) {
        toggle.addEventListener('click', () => {
            const isOpen = mobile.classList.toggle('nav__mobile--open');
            toggle.classList.toggle('nav__toggle--open', isOpen);
        });

        document.querySelectorAll('.nav__mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobile.classList.remove('nav__mobile--open');
                toggle.classList.remove('nav__toggle--open');
            });
        });
    }

    // --- Header Scroll (backdrop blur) ---
    const header = document.getElementById('header');

    if (header) {
        const onScroll = () => {
            header.classList.toggle('header--scrolled', window.scrollY > 40);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // --- Scroll Reveal (professional: 20px, expo ease-out, fire once) ---
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'
        }
    );

    document.querySelectorAll('.reveal, .reveal-group').forEach((el) => {
        revealObserver.observe(el);
    });

    // --- Process Connector Animation ---
    const processEl = document.querySelector('.process');
    if (processEl) {
        revealObserver.observe(processEl);
    }

    // --- Scroll Indicator Fade ---
    const scrollIndicators = document.querySelectorAll('.scroll-indicator');

    if (scrollIndicators.length) {
        window.addEventListener('scroll', () => {
            const opacity = Math.max(0, 1 - window.scrollY / 200);
            scrollIndicators.forEach(el => {
                el.style.opacity = opacity;
                el.style.pointerEvents = opacity === 0 ? 'none' : 'auto';
            });
        }, { passive: true });
    }

    // --- Video Lightbox ---
    const lightbox = document.getElementById('video-lightbox');
    const openBtn = document.getElementById('open-video-lightbox');
    const closeBtn = document.getElementById('lightbox-close');
    const backdrop = document.getElementById('lightbox-backdrop');
    const video = document.getElementById('keynote-video');

    if (lightbox && openBtn) {
        const open = () => {
            lightbox.classList.add('lightbox--open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            if (video) video.src = VIDEO_SRC + '&autoplay=1';
        };

        const close = () => {
            lightbox.classList.remove('lightbox--open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (video) video.src = '';
        };

        openBtn.addEventListener('click', open);
        openBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });

        if (closeBtn) closeBtn.addEventListener('click', close);
        if (backdrop) backdrop.addEventListener('click', close);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('lightbox--open')) close();
        });
    }

    // --- Lead Magnet Form (with loading state) ---
    const form = document.getElementById('lead-form');
    const successMsg = document.getElementById('success-message');
    const errorMsg = document.getElementById('error-message');
    const submitBtn = document.getElementById('submit-btn');

    if (form && submitBtn) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const emailInput = document.getElementById('email');
            const email = emailInput.value.trim();
            if (!email) return;

            // Loading state
            errorMsg.style.display = 'none';
            submitBtn.disabled = true;
            submitBtn.classList.add('btn--loading');

            try {
                const response = await fetch(
                    `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ api_key: KIT_API_KEY, email }),
                    }
                );

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Subscription failed');
                }

                form.style.display = 'none';
                successMsg.style.display = 'block';
            } catch (err) {
                errorMsg.textContent = err.message || 'Something went wrong. Please try again.';
                errorMsg.style.display = 'block';
                submitBtn.disabled = false;
                submitBtn.classList.remove('btn--loading');
            }
        });
    }
});
