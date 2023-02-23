(() => {
  const refs = {
    // Find all the buttons 
    openModalButtons: document.querySelectorAll('[book-table-modal-open]'),
    closeModalButton: document.querySelector('[book-table-modal-close]'),
    modal: document.querySelector('[book-table-modal]'),
  };
  
  // Add event listener to all buttons
  refs.openModalButtons.forEach(element => {
    element.addEventListener('click', toggleModal);
  });
  
  refs.closeModalButton.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.classList.toggle('fade-in');
  }
})();
