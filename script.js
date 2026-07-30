document.addEventListener('DOMContentLoaded', () => {
    // ---------- Theme toggle ----------
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
  ​
    const setToggleGlyph = () => {
      if (toggle) {
        toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '☀' : '☾';
      }
    };
    setToggleGlyph();
  ​
    if (toggle) {
      toggle.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        setToggleGlyph();
      });
    }
  ​
    // ---------- Accordion (Business Reports) ----------
    document.querySelectorAll('.accordion').forEach((accordion) => {
      const header = accordion.querySelector('.accordion-header');
      const icon = accordion.querySelector('.accordion-icon');
  ​
      header.addEventListener('click', () => {
        const isOpen = accordion.classList.contains('open');
  ​
        document.querySelectorAll('.accordion').forEach((other) => {
          other.classList.remove('open');
          const otherIcon = other.querySelector('.accordion-icon');
          if (otherIcon) otherIcon.textContent = '+';
        });
  ​
        if (!isOpen) {
          accordion.classList.add('open');
          if (icon) icon.textContent = '−';
        }
      });
    });
  ​
    // ---------- Scroll reveal (fade + rise) ----------
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  ​
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      const groups = [
        '.hero > *',
        '.section-title',
        '.rows > .row',
        '.entries > .entry',
        '.accordions > .accordion',
        '.skills > .skill',
        '#contact .intro',
        '#contact .links',
      ];
  ​
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  ​
      document.querySelectorAll(groups.join(',')).forEach((el) => {
        el.classList.add('reveal');
        // Gentle stagger within a shared parent
        const siblings = Array.from(el.parentElement.children).filter((c) =>
          c.classList.contains('reveal')
        );
        const index = siblings.indexOf(el);
        el.style.transitionDelay = Math.min(index, 6) * 60 + 'ms';
        observer.observe(el);
      });
    }
  ​
    // ---------- Smooth scroll for in-page links ----------
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          event.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });