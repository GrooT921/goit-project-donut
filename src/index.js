(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    closeMenuLinkAboutUs: document.querySelector("[data-menu-close-1]"),
    closeMenuLinkProgram: document.querySelector("[data-menu-close-2]"),
    closeMenuLinkReviews: document.querySelector("[data-menu-close-3]"),
    closeMenuLinkContact: document.querySelector("[data-menu-close-4]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuLinkAboutUs.addEventListener("click", toggleMenu);
  refs.closeMenuLinkProgram.addEventListener("click", toggleMenu);
  refs.closeMenuLinkReviews.addEventListener("click", toggleMenu);
  refs.closeMenuLinkContact.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
    document.body.classList.toggle("menu-open")
  }
})();