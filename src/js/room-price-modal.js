(() => {
  const refs = {
    openModalpriceBtn: document.querySelector('[room-price-modal-open]'),
    closeModalpriceBtn: document.querySelector('[room-price-modal-close]'),
    roomPriceModal: document.querySelector('[room-price-modal]'),
  };

  refs.openModalpriceBtn.addEventListener('click', toggleModalprice);
  refs.closeModalpriceBtn.addEventListener('click', toggleModalprice);

  function toggleModalprice() {
    refs.roomPriceModal.classList.toggle('is-hidden');
  }
})();
