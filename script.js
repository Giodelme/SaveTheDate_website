const intro = document.getElementById('intro');
const site = document.getElementById('site');
const envelopeButton = document.getElementById('envelopeButton');
const menuButton = document.getElementById('menuButton');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const menuLinks = menuOverlay.querySelectorAll('a');

let opened = false;

envelopeButton.addEventListener('click', () => {
  if (opened) return;
  opened = true;

  intro.classList.add('opening');

  setTimeout(() => {
    intro.classList.add('entering');
  }, 1250);

  setTimeout(() => {
    site.classList.add('visible');
    site.setAttribute('aria-hidden', 'false');
    intro.classList.add('hidden');
    document.body.style.overflow = '';
  }, 2350);
});

function openMenu() {
  menuOverlay.classList.add('open');
  menuOverlay.setAttribute('aria-hidden', 'false');
  menuButton.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuOverlay.classList.remove('open');
  menuOverlay.setAttribute('aria-hidden', 'true');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

menuButton.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
menuLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuOverlay.classList.contains('open')) closeMenu();
});
