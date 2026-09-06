// Sticky-nav background toggle + mobile menu. Bundled as an external module
// (imported from Nav.astro) so the site can ship a strict Content-Security-Policy
// without needing an inline-script hash.
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-nav-toggle]');
const menu = document.getElementById('mobile-menu');

const onScroll = () => {
  if (window.scrollY > 24) nav?.setAttribute('data-scrolled', '');
  else nav?.removeAttribute('data-scrolled');
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const closeMenu = () => {
  nav?.removeAttribute('data-open');
  toggle?.setAttribute('aria-expanded', 'false');
  if (menu) menu.hidden = true;
};

toggle?.addEventListener('click', () => {
  if (nav?.hasAttribute('data-open')) return closeMenu();
  nav?.setAttribute('data-open', '');
  toggle.setAttribute('aria-expanded', 'true');
  if (menu) menu.hidden = false;
});

document.querySelectorAll('[data-nav-close]').forEach((el) =>
  el.addEventListener('click', closeMenu)
);
