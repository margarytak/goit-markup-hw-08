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

// (() => {
//     const mobileButton = document.querySelector('[menu-button]');
//     const mobileMenu = document.querySelector('[mob-menu]');
//     const openMenuBtn = document.querySelector('[mob-menu-open]');
// const closeMenuBtn = document.querySelector('[mob-menu-close]');
  
//     const toggleMenu = () => {
//       const isMenuOpen =
//         openMenuBtn.getAttribute('area-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('area-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
//       mobileButton.classList.toggle('is-actve');

  
//       const scrollLockMethod = !isMenuOpen
//         ? 'disableBodyScroll'
//         : 'enableBodyScroll';
//       bodyScrollLock[scrollLockMethod](document.body);
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('area-expanded', false);
//       bodyScrollLock.enableBodyScroll(document.body);
//     });
// })();
  


(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const body = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;
    menuBtnRef.classList.toggle("is-active");
    menuBtnRef.setAttribute("aria-expanded", !expanded);
    mobileMenuRef.classList.toggle("is-open");
    body.classList.toggle("no-scroll");
  });
})();