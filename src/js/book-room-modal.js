(() => {
  const refs = {
    // Find all the buttons 
    openModalButtons: document.querySelectorAll('[book-room-modal-open]'),
    closeModalButton: document.querySelector('[book-room-modal-close]'),
    modal: document.querySelector('[book-room-modal]'),
  };
  
  // Add event listener to all buttons
  refs.openModalButtons.forEach(element => {
    element.addEventListener('click', toggleModal);
  });
  
  refs.closeModalButton.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
