(() => {
  const refs = {
    openModalBtn: document.querySelector('[book-room-modal-open]'),
    closeModalBtn: document.querySelector('[book-room-modal-close]'),
    bookRoomModal: document.querySelector('[book-room-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.bookRoomModal.classList.toggle('is-hidden');
  }
})();
