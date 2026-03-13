document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // === THEME TOGGLE ===
    function updateThemeIcon(isDark) {
        const icon = themeToggleBtn.querySelector('i');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        themeToggleBtn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }

    function toggleTheme() {
        body.classList.toggle('dark-theme');
        const isDark = body.classList.contains('dark-theme');
        updateThemeIcon(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Load saved theme (default: dark)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
        updateThemeIcon(false);
    } else {
        body.classList.add('dark-theme');
        updateThemeIcon(true);
    }

    themeToggleBtn.addEventListener('click', toggleTheme);

    // === MOBILE NAV ===
    hamburger.addEventListener('click', function () {
        const isOpen = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Close mobile menu
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');

            // Smooth scroll
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 72;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        });
    });

    // === NAVBAR SCROLL SHADOW ===
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 24px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }, { passive: true });

    // === SCROLL REVEAL ===
    const revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
    });

    const revealSelectors = [
        '.timeline-item',
        '.publication-item',
        '.skill-category',
        '.education-item',
        '.video-item',
    ];

    document.querySelectorAll(revealSelectors.join(', ')).forEach((el, _i, all) => {
        if (!prefersReducedMotion) {
            el.classList.add('reveal');
            // Stagger siblings within same parent
            const siblings = Array.from(el.parentElement.children).filter(
                c => c.classList.contains(el.classList[0])
            );
            const idx = siblings.indexOf(el);
            if (idx > 0) {
                el.style.transitionDelay = `${idx * 0.08}s`;
            }
        }
        revealObserver.observe(el);
    });

    // === COUNTER ANIMATION (hero stats) ===
    if (!prefersReducedMotion) {
        const counterObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.6 });

        document.querySelectorAll('.summary-number').forEach(el => {
            counterObserver.observe(el);
        });
    }

    function animateCounter(el) {
        const text = el.textContent.trim();
        const match = text.match(/^(\d+)(\D*)$/);
        if (!match) return;

        const target = parseInt(match[1], 10);
        const suffix = match[2] || '';
        const duration = 1000;
        const startVal = Math.max(0, Math.floor(target * 0.4));
        const startTime = performance.now();

        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(startVal + (target - startVal) * eased);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    }

    // === EXTERNAL LINK LOGGING (optional analytics hook) ===
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function () {
            console.log('External link:', this.href);
        });
    });
});
