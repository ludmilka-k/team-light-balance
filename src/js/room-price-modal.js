(() => {
  const refs = {
    // Find all the buttons 
    openModalButtons: document.querySelectorAll('[room-price-modal-open]'),
    closeModalButton: document.querySelector('[room-price-modal-close]'),
    modal: document.querySelector('[room-price-modal]'),
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
