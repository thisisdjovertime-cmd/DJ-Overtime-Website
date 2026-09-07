// Profile photo carousel (#about). Progressive enhancement: without JS the track
// is still a native horizontal scroll-snap strip; this adds arrow/dot control,
// active-dot state, and a gentle autoplay that pauses on interaction.
const root = document.querySelector('[data-carousel]');
if (root) {
  const track = root.querySelector('[data-carousel-track]');
  const slides = [...track.children];
  const dots = [...root.querySelectorAll('[data-carousel-dot]')];
  const prev = root.querySelector('[data-carousel-prev]');
  const next = root.querySelector('[data-carousel-next]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let index = 0;
  let timer;

  const go = (i, smooth = true) => {
    index = (i + slides.length) % slides.length;
    track.scrollTo({ left: slides[index].offsetLeft - track.offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
    dots.forEach((d, di) => d.setAttribute('aria-current', di === index ? 'true' : 'false'));
  };

  const stopAuto = () => clearInterval(timer);
  const startAuto = () => {
    if (reduceMotion) return;
    stopAuto();
    timer = setInterval(() => go(index + 1), 5500);
  };

  const handler = (fn) => (e) => { e.preventDefault(); fn(); startAuto(); };
  prev?.addEventListener('click', handler(() => go(index - 1)));
  next?.addEventListener('click', handler(() => go(index + 1)));
  dots.forEach((d, di) => d.addEventListener('click', handler(() => go(di))));

  // Keep index in sync when the user scrolls/swipes the track directly.
  let scrollDebounce;
  track.addEventListener('scroll', () => {
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
      const nearest = slides.reduce((best, s, si) => {
        const d = Math.abs(s.offsetLeft - track.offsetLeft - track.scrollLeft);
        return d < best.d ? { d, si } : best;
      }, { d: Infinity, si: 0 }).si;
      index = nearest;
      dots.forEach((dd, di) => dd.setAttribute('aria-current', di === index ? 'true' : 'false'));
    }, 120);
  }, { passive: true });

  root.addEventListener('pointerenter', stopAuto);
  root.addEventListener('pointerleave', startAuto);
  root.addEventListener('focusin', stopAuto);
  root.addEventListener('focusout', startAuto);

  go(0, false);
  startAuto();
}
