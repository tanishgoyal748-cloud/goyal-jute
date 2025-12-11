// Improved interactions and animations (robust + accessible)
document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('primary-navigation');
    const navLinks = document.querySelectorAll('#primary-navigation a');
    const cta = document.querySelector('[data-cta]');
    const contactForm = document.querySelector('.contact-form');
    const toast = createToast();

    // Safe guard
    function safe(el) { return !!el; }

    // Mobile menu toggle with aria
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.setAttribute('aria-expanded', String(!expanded));
            navMenu.classList.toggle('active');
        });
    }

    // Close menu on nav link and smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // CTA behavior
    if (cta) {
        cta.addEventListener('click', () => {
            const products = document.querySelector('#products');
            if (products) products.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Contact form: inline toast + faux-send animation
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('.submit-button');
            if (!submitBtn) return;
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.transform = 'translateY(-2px)';

            // simulate network
            await new Promise(r => setTimeout(r, 900));

            submitBtn.textContent = '✓ Sent';
            submitBtn.style.backgroundColor = '#27AE60';
            showToast(toast, 'Thanks — message sent. We will reply soon.');

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
                contactForm.reset();
            }, 1600);
        });
    }

    // Intersection observer for reveal and counters
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.classList.add('is-visible');
                // counters
                const counter = el.querySelectorAll('[data-count]');
                counter.forEach(node => {
                    const end = parseInt(node.textContent, 10) || 0;
                    animateValue(node, 0, end, 1400);
                });
                revealObserver.unobserve(el);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.product-card, .service-card, .info-item, .about, .products, .services, .contact').forEach(el => {
        el.classList.add('will-reveal');
        revealObserver.observe(el);
    });

    // Mouse follow / tilt on product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('pointermove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            const rx = (-y * 6).toFixed(2);
            const ry = (x * 8).toFixed(2);
            card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
            card.style.transition = 'transform 80ms linear';
        });
        card.addEventListener('pointerleave', () => {
            card.style.transform = '';
            card.style.transition = 'transform 300ms var(--ease)';
        });
    });

    // Navbar shadow on scroll (light-weight)
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => {
            if (window.scrollY > 30) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    console.log('✨ Goyal PP Wovens - Interactive enhancements loaded');

    // --- Helpers ---
    function animateValue(el, start, end, duration) {
        let startTime = null;
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            el.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function createToast() {
        const div = document.createElement('div');
        div.className = 'site-toast';
        div.style.position = 'fixed';
        div.style.bottom = '24px';
        div.style.left = '50%';
        div.style.transform = 'translateX(-50%)';
        div.style.padding = '12px 18px';
        div.style.borderRadius = '10px';
        div.style.background = 'rgba(34,34,34,0.92)';
        div.style.color = '#fff';
        div.style.boxShadow = '0 8px 30px rgba(0,0,0,0.25)';
        div.style.zIndex = 9999;
        div.style.opacity = 0;
        div.style.transition = 'opacity 240ms ease, transform 240ms ease';
        document.body.appendChild(div);
        return div;
    }

    function showToast(el, text, ms = 2400) {
        if (!el) return;
        el.textContent = text;
        el.style.opacity = 1;
        el.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => { el.style.opacity = 0; el.style.transform = 'translateX(-50%) translateY(10px)'; }, ms);
    }

    // --- Cinematic animations (GSAP) and particles ---
    if (window.gsap) {
        try {
            gsap.registerPlugin(ScrollTrigger);

            // Hero entrance
            gsap.from('#hero-heading', { y: 40, opacity: 0, duration: 1.1, ease: 'power3.out' });
            gsap.from('.hero-sub', { y: 26, opacity: 0, duration: 1, delay: 0.12, ease: 'power3.out' });
            gsap.from('.hero-cta', { y: 18, opacity: 0, duration: 0.9, delay: 0.24, ease: 'power3.out' });

            // Subtle continuous ken-burns on hero background rect
            gsap.to('.hero-svg rect', { scale: 1.06, duration: 28, ease: 'sine.inOut', repeat: -1, yoyo: true, transformOrigin: '50% 50%' });

            // Wave motion
            gsap.to('.waves', { xPercent: -35, duration: 28, ease: 'linear', repeat: -1 });

            // Stagger reveal products
            gsap.from('.product-card', {
                y: 40,
                opacity: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.products-grid', start: 'top 85%'
                }
            });

            // Services
            gsap.from('.service-card', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: { trigger: '.services-grid', start: 'top 85%' }
            });

            // Stats counter animation when visible
            ScrollTrigger.create({
                trigger: '.stats', start: 'top 85%', onEnter: () => {
                    document.querySelectorAll('[data-count]').forEach(node => {
                        const end = parseInt(node.textContent, 10) || 0;
                        animateValue(node, 0, end, 1200);
                    });
                }
            });

            // Parallax images in about
            gsap.to('.about-img', { y: -20, ease: 'none', scrollTrigger: { trigger: '.about', scrub: 0.6 } });

        } catch (err) { console.warn('GSAP init failed', err); }
    }

    // tsParticles cinematic layer
    if (window.tsParticles) {
        tsParticles.load('tsparticles', {
            fullScreen: { enable: false },
            detectRetina: true,
            fpsLimit: 60,
            particles: {
                number: { value: 30, density: { enable: true, area: 800 } },
                color: { value: ['#ffffff', '#d4a574'] },
                opacity: { value: 0.06 },
                size: { value: { min: 1, max: 3 } },
                move: { enable: true, speed: 0.6, direction: 'bottom', outModes: { default: 'out' } },
                shape: { type: 'circle' }
            },
            interactivity: { detectsOn: 'canvas', events: { onHover: { enable: false }, onClick: { enable: false } } }
        }).catch(e => console.warn('tsParticles failed', e));
    }
});

