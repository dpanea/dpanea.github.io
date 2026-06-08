document.addEventListener('DOMContentLoaded', () => {
    const DEFAULT_KIT_FORM_ID = '8913239';
    const DEFAULT_CONTACT_FORM_ID = '9387998';
    const KIT_SUBMIT_TARGET = 'kit-submit-frame';
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

    document.querySelectorAll('.protected-nif').forEach((link) => {
        const parts = [
            link.getAttribute('data-nif-a'),
            link.getAttribute('data-nif-b'),
            link.getAttribute('data-nif-c')
        ];
        if (parts.some((part) => !part)) return;
        const nif = parts.join('');
        link.addEventListener('click', (event) => {
            event.preventDefault();
            link.textContent = nif;
            link.removeAttribute('href');
            link.setAttribute('aria-label', nif);
        });
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

        track.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                index -= 1;
                setPosition();
            }

            if (event.key === 'ArrowRight') {
                event.preventDefault();
                index += 1;
                setPosition();
            }
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

    const ensureKitFrame = () => {
        let frame = document.querySelector(`iframe[name="${KIT_SUBMIT_TARGET}"]`);
        if (!frame) {
            frame = document.createElement('iframe');
            frame.name = KIT_SUBMIT_TARGET;
            frame.title = 'Kit form submission';
            frame.hidden = true;
            document.body.appendChild(frame);
        }
        return frame;
    };

    const configureKitForm = (form, fallbackFormId) => {
        const kitFormId = form.getAttribute('data-kit-form-id') || fallbackFormId;
        form.setAttribute('method', 'post');
        form.setAttribute('action', `https://app.kit.com/forms/${kitFormId}/subscriptions`);
        form.setAttribute('target', KIT_SUBMIT_TARGET);
        return kitFormId;
    };

    if (leadForm && submitButton) {
        const kitFormId = configureKitForm(leadForm, DEFAULT_KIT_FORM_ID);
        const successEvent = leadForm.getAttribute('data-success-event') || 'scorecard_form_success';
        const monthlyNoteCheckbox = document.getElementById('des-monthly-note');
        const slidesSourceField = document.getElementById('des-slides-source');
        const updateSlidesSource = () => {
            if (!slidesSourceField) return;
            slidesSourceField.value = monthlyNoteCheckbox && monthlyNoteCheckbox.checked
                ? 'DES 2026 attendee - requested slides and monthly note'
                : 'DES 2026 attendee - requested slides';
        };

        if (monthlyNoteCheckbox) {
            monthlyNoteCheckbox.addEventListener('change', updateSlidesSource);
        }

        leadForm.addEventListener('submit', () => {
            updateSlidesSource();
            ensureKitFrame();

            submitButton.disabled = true;
            if (errorMessage) {
                errorMessage.hidden = true;
                errorMessage.textContent = '';
            }

            window.setTimeout(() => {
                leadForm.reset();
                if (successMessage) {
                    successMessage.hidden = false;
                }
                submitButton.disabled = false;
                window.dispatchEvent(new CustomEvent('dp:analytics-event', {
                    detail: {
                        event: successEvent,
                        language: document.documentElement.lang || 'en',
                        path: window.location.pathname,
                        kit_form_id: kitFormId,
                        monthly_note: Boolean(monthlyNoteCheckbox && monthlyNoteCheckbox.checked)
                    }
                }));
            }, 900);
        });
    }

    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        const kitFormId = configureKitForm(contactForm, DEFAULT_CONTACT_FORM_ID);

        contactForm.addEventListener('submit', (event) => {
            const spamField = contactForm.querySelector('[name="website"]');
            if (spamField && spamField.value) {
                event.preventDefault();
                return;
            }

            const language = document.documentElement.lang || 'en';
            const labels = {
                en: {
                    success: 'Thanks. I will get back to you shortly.',
                    error: 'Something went wrong. Please send me an email instead.'
                },
                de: {
                    success: 'Danke. Ich melde mich zeitnah bei Ihnen.',
                    error: 'Etwas ist schiefgelaufen. Bitte senden Sie mir stattdessen eine E-Mail.'
                },
                es: {
                    success: 'Gracias. Te responderé pronto.',
                    error: 'Algo ha fallado. Por favor, envíame un email.'
                }
            };
            const copy = labels[language] || labels.en;
            const note = document.getElementById('contact-form-note');
            const submit = contactForm.querySelector('[type="submit"]');

            ensureKitFrame();
            if (note) {
                note.hidden = true;
                note.classList.remove('form-note-error');
            }

            if (submit) submit.disabled = true;

            window.setTimeout(() => {
                contactForm.reset();
                if (note) {
                    note.textContent = copy.success;
                    note.hidden = false;
                }
                window.dispatchEvent(new CustomEvent('dp:analytics-event', {
                    detail: {
                        event: 'contact_form_success',
                        language,
                        path: window.location.pathname,
                        kit_form_id: kitFormId
                    }
                }));
                if (submit) submit.disabled = false;
            }, 900);
        });
    }
});
