const intro = document.getElementById('intro');
const site = document.getElementById('site');
const envelopeButton = document.getElementById('envelopeButton');
const menuButton = document.getElementById('menuButton');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const menuLinks = menuOverlay.querySelectorAll('a');

let opened = false;
document.body.style.overflow = 'hidden';

envelopeButton.addEventListener('click', () => {
  if (opened) return;
  opened = true;

  // 1) Il sigillo si stacca e la busta prende vita
  intro.classList.add('unsealing');

  // 2) La patta si solleva in modo più naturale
  setTimeout(() => {
    intro.classList.add('opening');
  }, 320);

  // 3) La camera entra lentamente nell'apertura della busta
  setTimeout(() => {
    intro.classList.add('entering');
  }, 1550);

  // 4) La homepage compare mentre si entra nella luce interna
  setTimeout(() => {
    site.classList.add('visible');
    site.setAttribute('aria-hidden', 'false');
  }, 2550);

  setTimeout(() => {
    intro.classList.add('hidden');
    document.body.style.overflow = '';
  }, 3200);
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
