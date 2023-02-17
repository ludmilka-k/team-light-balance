(() => {
  const refs = {
    openModalpriceBtn: document.querySelector('[data-modalprice-open]'),
    closeModalpriceBtn: document.querySelector('[data-modalprice-close]'),
    roomPriceModal: document.querySelector('[data-modalprice]'),
  };

  refs.openModalpriceBtn.addEventListener('click', toggleModalprice);
  refs.closeModalpriceBtn.addEventListener('click', toggleModalprice);

  function toggleModalprice() {
    refs.roomPriceModal.classList.toggle('is-hidden');
  }
})();
