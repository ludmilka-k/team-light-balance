(() => {
  const refs = {
    openModaltableBtn: document.querySelector('[book-table-modal-open]'),
    closeModaltableBtn: document.querySelector('[book-table-modal-close]'),
    bookTableModal: document.querySelector('[book-table-modal]'),
  };

  refs.openModaltableBtn.addEventListener('click', toggleModaltable);
  refs.closeModaltableBtn.addEventListener('click', toggleModaltable);

  function toggleModaltable() {
    refs.bookTableModal.classList.toggle('is-hidden');
  }
})();
