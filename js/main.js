// ============================================
// ROBOLOBOS FENRIR 23944 — Shared JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Mobile Nav Toggle ----
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.textContent = '☰';
      });
    });
  }

  // ---- Accordion Toggle ----
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const btn = header.querySelector('.accordion-toggle');

      if (body.classList.contains('open')) {
        body.classList.remove('open');
        if (btn) btn.textContent = '[ + ]';
      } else {
        body.classList.add('open');
        if (btn) btn.textContent = '[ − ]';
      }
    });
  });

  // ---- Scroll Reveal (IntersectionObserver) ----
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show everything
    fadeEls.forEach(el => el.classList.add('visible'));
  }

});
