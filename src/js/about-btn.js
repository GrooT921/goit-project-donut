(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-about-btn-open]'),
    closeModalBtn: document.querySelector('[data-about-btn-close]'),
    modal: document.querySelector('[data-about-btn]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.openModalBtn.classList.toggle('is-hidden');
  }
})();
