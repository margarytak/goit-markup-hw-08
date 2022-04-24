// (() => {
// const refs = {
//     openMenuBtn: document.querySelector("[mob-menu-open]"),
//     closeMenuBtn: document.querySelector("[mob-menu-close]"),
//     menu: document.querySelector("[mob-menu]"),
// };

// refs.openMenuBtn.addEventListener("click", toggleMenu);
// refs.closeMenuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//     refs.menu.classList.toggle("is-hidden");
//     refs.menu.classList.toggle("is-open")
// }
// })();

(() => {
    const mobileMenu = document.querySelector('[mob-menu]');
    const openMenuBtn = document.querySelector('[mob-menu-open]');
const closeMenuBtn = document.querySelector('[mob-menu-close]');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();