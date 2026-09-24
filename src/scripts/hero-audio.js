// Intro audio for the hero video. Browsers block sound autoplay, so we try
// immediately and fall back to the first user gesture. The button toggles mute.
const audio = document.querySelector('[data-hero-audio]');
const btn = document.querySelector('[data-hero-sound]');

if (audio && btn) {
  const sync = () => {
    const on = !audio.paused && !audio.muted;
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Mute intro audio' : 'Play intro audio');
    btn.dataset.state = on ? 'on' : 'off';
  };
  audio.addEventListener('play', sync);
  audio.addEventListener('pause', sync);
  audio.addEventListener('ended', sync);

  let userStopped = false;
  const start = () => audio.play().then(() => true, () => false);
  const events = ['pointerdown', 'keydown', 'touchstart', 'wheel'];
  const onGesture = async () => {
    if (userStopped || (await start())) events.forEach((e) => window.removeEventListener(e, onGesture));
  };

  start().then((ok) => {
    if (!ok) events.forEach((e) => window.addEventListener(e, onGesture, { passive: true }));
    sync();
  });

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    userStopped = true;
    events.forEach((ev) => window.removeEventListener(ev, onGesture));
    if (audio.paused) start();
    else audio.pause();
  });
  sync();
}
