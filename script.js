/**
 * Prince Agnihotri — Personal Portfolio Interactive Script
 * Pure Vanilla JavaScript (ES6+) — Zero external dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  /* 1. Theme Toggle (Dark / Light Mode) */
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const THEME_KEY = 'pa-portfolio-theme';

  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    htmlEl.setAttribute('data-theme', savedTheme);
  } else {
    htmlEl.setAttribute('data-theme', 'dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', nextTheme);
      localStorage.setItem(THEME_KEY, nextTheme);
    });
  }

  /* 2. Mobile Navigation Hamburger Toggle */
  const hamburgerBtn = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const closeMobileMenu = () => {
    if (!hamburgerBtn || !navMenu) return;
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  };

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('active', isOpen);
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  /* 3. Active Nav-Link Highlighting on Scroll */
  const sections = document.querySelectorAll('main section[id]');

  const updateActiveNavLink = () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  /* 4. Scroll-Reveal Animations (IntersectionObserver) */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  /* 5. Project Details Modal */
  const openModalBtn = document.getElementById('open-project-modal');
  const closeModalBtn = document.getElementById('close-project-modal');
  const projectModal = document.getElementById('project-modal');

  const openModal = () => {
    if (!projectModal) return;
    projectModal.hidden = false;
    document.body.style.overflow = 'hidden';
    if (closeModalBtn) closeModalBtn.focus();
  };

  const closeModal = () => {
    if (!projectModal) return;
    projectModal.hidden = true;
    document.body.style.overflow = '';
    if (openModalBtn) openModalBtn.focus();
  };

  if (openModalBtn && projectModal) {
    openModalBtn.addEventListener('click', openModal);
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (event) => {
      if (event.target === projectModal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !projectModal.hidden) {
        closeModal();
      }
    });
  }

  /* 6. Static-Friendly Contact Form (mailto: Fallback) */
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('message-subject').value.trim();
      const message = document.getElementById('message-body').value.trim();

      if (!name || !email || !subject || !message) {
        if (formStatus) {
          formStatus.textContent = 'Please fill in all fields before sending.';
        }
        return;
      }

      const recipient = 'princeagnihotri99266@gmail.com';
      const formattedBody = `Hello Prince,

${message}

---
Sender Name: ${name}
Sender Email: ${email}`;
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

      if (formStatus) {
        formStatus.textContent = 'Opening your default email client...';
      }

      window.location.href = mailtoUrl;
    });
  }

  /* 7. Dynamic Footer Year */
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
});
