document.addEventListener('DOMContentLoaded', () => {

    // --- Configuration ---
    const KIT_FORM_ID = '8913239';
    const KIT_API_KEY = 'cvO5g-EviPgxF0n7wWRLmw';

    // --- Mobile Navigation ---
    const navToggle = document.querySelector('.nav__mobile-toggle');
    const mobileMenu = document.querySelector('.nav__mobile-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            // Animate hamburger to X (optional, CSS handled most but classes help)
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav__mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
    }

    // --- Header Scroll State ---
    const header = document.querySelector('.header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-trigger, .fade-in-up, .hero__text-content, .hero__scroll-indicator, .process__timeline').forEach(el => {
        if (!el.classList.contains('hero__text-content')) {
            el.classList.add('fade-in-up');
        }
        observer.observe(el);
    });

    // --- Video Lightbox ---
    const lightbox = document.getElementById('video-lightbox');
    const openBtn = document.getElementById('open-video-lightbox');
    const closeBtn = document.querySelector('.lightbox__close');
    const overlay = document.querySelector('.lightbox__overlay');
    const video = document.getElementById('keynote-video');

    if (lightbox && openBtn && closeBtn && overlay) {
        const videoSrc = "https://www.youtube.com/embed/gSTAB4mQfOQ?si=k5yDaM2SdcIgT_9I";

        const openLightbox = () => {
            lightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
            if (video) video.src = videoSrc + "&autoplay=1";
        };

        const closeLightbox = () => {
            lightbox.classList.remove('open');
            document.body.style.overflow = '';
            if (video) {
                video.src = videoSrc;
            }
        };

        openBtn.addEventListener('click', openLightbox);

        // Handle accessibility (Enter/Space on div)
        openBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox();
            }
        });

        closeBtn.addEventListener('click', closeLightbox);
        overlay.addEventListener('click', closeLightbox);

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('open')) {
                closeLightbox();
            }
        });
    }

    // --- Lead Magnet Form ---
    const form = document.getElementById('lead-form');
    const successMsg = document.getElementById('success-message');
    const errorMsg = document.getElementById('error-message');
    const submitBtn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const emailInput = document.getElementById('email');
            const email = emailInput.value;

            if (!email) return;

            // Reset state
            errorMsg.style.display = 'none';
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                const response = await fetch(`https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        api_key: KIT_API_KEY,
                        email: email,
                    }),
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.message || 'Subscription failed');
                }

                // Success
                form.style.display = 'none';
                successMsg.style.display = 'flex';

            } catch (err) {
                console.error('Submission error:', err);
                errorMsg.textContent = err.message || 'Failed to subscribe. Please try again.';
                errorMsg.style.display = 'block';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Download the PDF';
            }
        });
    }
});
