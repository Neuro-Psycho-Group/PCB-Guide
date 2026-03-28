/* =============================================
   PCB PRIMER — SHARED JAVASCRIPT
   Nav injection, animations, interactivity
   ============================================= */

// ---- SHARED NAV HTML ----
const NAV_HTML = `
<header class="site-header" id="site-header">
  <nav class="site-nav">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <svg class="logo-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="7" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/>
          <line x1="0" y1="10" x2="7" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="0" y1="13" x2="7" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="0" y1="16" x2="7" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="19" y1="10" x2="26" y2="10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="19" y1="13" x2="26" y2="13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="19" y1="16" x2="26" y2="16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="10" y1="0" x2="10" y2="7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="13" y1="0" x2="13" y2="7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="16" y1="0" x2="16" y2="7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span class="logo-text">PCB <span class="logo-accent">PRIMER</span></span>
      </a>

      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>

      <ul class="nav-links" id="nav-links">
        <li><a href="index.html" data-page="index.html">Home</a></li>

        <li class="nav-dropdown">
          <button class="nav-drop-btn" aria-expanded="false">
            Foundation <span class="drop-arrow">▾</span>
          </button>
          <ul class="nav-drop-menu">
            <li><a href="history.html" data-page="history.html"><span class="drop-num">01</span>History</a></li>
            <li><a href="anatomy.html" data-page="anatomy.html"><span class="drop-num">02</span>Anatomy &amp; Layers</a></li>
            <li><a href="components.html" data-page="components.html"><span class="drop-num">03</span>Components</a></li>
          </ul>
        </li>

        <li class="nav-dropdown">
          <button class="nav-drop-btn" aria-expanded="false">
            Design &amp; Make <span class="drop-arrow">▾</span>
          </button>
          <ul class="nav-drop-menu">
            <li><a href="workflow.html" data-page="workflow.html"><span class="drop-num">04</span>Design Workflow</a></li>
            <li><a href="fabrication.html" data-page="fabrication.html"><span class="drop-num">05</span>Fabrication</a></li>
            <li><a href="soldering.html" data-page="soldering.html"><span class="drop-num">06</span>Soldering</a></li>
            <li><a href="software.html" data-page="software.html"><span class="drop-num">07</span>EDA Software</a></li>
          </ul>
        </li>

        <li class="nav-dropdown">
          <button class="nav-drop-btn" aria-expanded="false">
            Projects <span class="drop-arrow">▾</span>
          </button>
          <ul class="nav-drop-menu">
            <li><a href="first-board.html" data-page="first-board.html"><span class="drop-num">08</span>Your First Board</a></li>
            <li><a href="debugging.html" data-page="debugging.html"><span class="drop-num">12</span>Debugging &amp; Testing</a></li>
          </ul>
        </li>

        <li class="nav-dropdown">
          <button class="nav-drop-btn" aria-expanded="false">
            Go Deeper <span class="drop-arrow">▾</span>
          </button>
          <ul class="nav-drop-menu">
            <li><a href="power-design.html" data-page="power-design.html"><span class="drop-num">13</span>Power Supply Design</a></li>
            <li><a href="advanced.html" data-page="advanced.html"><span class="drop-num">09</span>Signal Integrity &amp; EMC</a></li>
          </ul>
        </li>

        <li class="nav-dropdown">
          <button class="nav-drop-btn" aria-expanded="false">
            Reference <span class="drop-arrow">▾</span>
          </button>
          <ul class="nav-drop-menu">
            <li><a href="resources.html" data-page="resources.html"><span class="drop-num">10</span>Resources</a></li>
            <li><a href="glossary.html" data-page="glossary.html"><span class="drop-num">11</span>Glossary</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</header>
`;

// ---- SHARED FOOTER HTML ----
const FOOTER_HTML = `
<footer class="site-footer">
  <div class="container--wide">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>PCB Primer</h4>
        <p>A complete beginner's guide to printed circuit board design, fabrication, and assembly. From the history of PCBs to your first working board.</p>
      </div>
      <div class="footer-col">
        <h4>Learn</h4>
        <ul>
          <li><a href="history.html">History</a></li>
          <li><a href="anatomy.html">Anatomy &amp; Layers</a></li>
          <li><a href="components.html">Components</a></li>
          <li><a href="workflow.html">Design Workflow</a></li>
          <li><a href="first-board.html">Your First Board</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Make &amp; Debug</h4>
        <ul>
          <li><a href="fabrication.html">Fabrication</a></li>
          <li><a href="soldering.html">Soldering</a></li>
          <li><a href="debugging.html">Debugging &amp; Testing</a></li>
          <li><a href="software.html">Software Tools</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Go Deeper</h4>
        <ul>
          <li><a href="power-design.html">Power Supply Design</a></li>
          <li><a href="advanced.html">Signal Integrity &amp; EMC</a></li>
          <li><a href="resources.html">Resources</a></li>
          <li><a href="glossary.html">Glossary</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>External</h4>
        <ul>
          <li><a href="https://kicad.org" target="_blank" rel="noopener">KiCad ↗</a></li>
          <li><a href="https://jlcpcb.com" target="_blank" rel="noopener">JLCPCB ↗</a></li>
          <li><a href="https://easyeda.com" target="_blank" rel="noopener">EasyEDA ↗</a></li>
          <li><a href="https://lcsc.com" target="_blank" rel="noopener">LCSC Components ↗</a></li>
          <li><a href="https://www.youtube.com/@PhilsLab" target="_blank" rel="noopener">Phil's Lab ↗</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-logo">PCB PRIMER</span>
      <span>Open-source educational resource · Free to use and share</span>
    </div>
  </div>
</footer>
`;

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Inject footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Active nav item — works for both flat links and dropdown links
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === currentPage) {
      a.classList.add('active');
      // Also mark parent dropdown button as active
      const dropMenu = a.closest('.nav-drop-menu');
      if (dropMenu) {
        const btn = dropMenu.previousElementSibling;
        if (btn) btn.classList.add('active');
      }
    }
  });

  // Mobile menu toggle
  const toggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }

  // Dropdown menus
  // Desktop: handled entirely by CSS :hover — no JS needed, no race conditions.
  // Mobile: JS click-toggling only.
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const btn = dropdown.querySelector('.nav-drop-btn');
    const menu = dropdown.querySelector('.nav-drop-menu');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      // Only activate click behaviour on mobile
      if (window.innerWidth > 860) return;

      const isOpen = menu.classList.contains('open');
      // Close all other menus
      document.querySelectorAll('.nav-drop-menu').forEach(m => {
        m.classList.remove('open');
      });
      document.querySelectorAll('.nav-drop-btn').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        menu.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Close when a link inside is clicked
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        if (navLinks) navLinks.classList.remove('open');
      });
    });
  });

  // Close all dropdowns on outside click (mobile)
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-drop-menu').forEach(m => m.classList.remove('open'));
    }
  });

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // Staggered reveal for lists
  document.querySelectorAll('.stagger-children > *').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
    el.classList.add('reveal');
  });
  // re-observe new elements
  document.querySelectorAll('.stagger-children > .reveal').forEach(el => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.05 });
    obs.observe(el);
  });

  // Tabs
  document.querySelectorAll('.tabs').forEach(tabs => {
    const btns = tabs.querySelectorAll('.tab-btn');
    const panels = tabs.querySelectorAll('.tab-panel');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        panels[i].classList.add('active');
      });
    });
    if (btns.length) { btns[0].classList.add('active'); if (panels.length) panels[0].classList.add('active'); }
  });

  // Glossary search
  const searchInput = document.getElementById('glossary-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      document.querySelectorAll('.glossary-entry').forEach(entry => {
        const term = entry.querySelector('.glossary-term').textContent.toLowerCase();
        const def = entry.querySelector('.glossary-def').textContent.toLowerCase();
        entry.classList.toggle('hidden', q !== '' && !term.includes(q) && !def.includes(q));
      });
      document.querySelectorAll('.glossary-letter-section').forEach(sec => {
        const visible = sec.querySelectorAll('.glossary-entry:not(.hidden)').length > 0;
        sec.style.display = visible ? '' : 'none';
      });
    });
  }

  // Layer diagram interactivity (anatomy page)
  const layers = document.querySelectorAll('.layer-row');
  const layerInfo = document.getElementById('layer-info');
  if (layers.length && layerInfo) {
    layers.forEach(layer => {
      layer.addEventListener('click', () => {
        layers.forEach(l => l.classList.remove('active-layer'));
        layers.forEach(l => l.classList.add('dimmed'));
        layer.classList.add('active-layer');
        layer.classList.remove('dimmed');
        const info = layer.dataset.info;
        if (info && layerInfo) {
          layerInfo.innerHTML = info;
          layerInfo.style.display = 'block';
        }
      });
    });
    // Click away resets
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.layer-row') && !e.target.closest('#layer-info')) {
        layers.forEach(l => { l.classList.remove('active-layer', 'dimmed'); });
        if (layerInfo) layerInfo.style.display = 'none';
      }
    });
  }

  // Hero trace animation (index page)
  const heroSvg = document.getElementById('hero-traces-svg');
  if (heroSvg) {
    const paths = heroSvg.querySelectorAll('path, line, polyline');
    paths.forEach((p, i) => {
      const len = p.getTotalLength ? p.getTotalLength() : 200;
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.style.animation = `drawTrace 1.5s ${0.3 + i * 0.18}s ease forwards`;
    });
  }
});

// Smooth anchor scrolling
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (a) {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
