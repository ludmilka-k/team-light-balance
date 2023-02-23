
const detailsSwiper = new Swiper(document.getElementById('detailsSwiper'), {
  // Optional parameters

  slidesPerView: 'auto',
  spaceBetween: 86,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  sliderPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: document.getElementById('swiper-button-next'),
    prevEl: document.getElementById('swiper-button-prev'),
  },
});

const mobileDetailsSwiper = new Swiper(
  document.getElementById('mobDetailsSwiper'),
  {
    // Optional parameters

    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 3500,
    },
    sliderPerView: 2,

    // Navigation arrows
    navigation: {
      nextEl: document.getElementById('mob-swiper-button-next'),
      prevEl: document.getElementById('mob-swiper-button-prev'),
    },
  }
);

const deskDetailsSwiper = new Swiper(
  document.getElementById('deskDetailsSwiper'),
  {
    // Optional parameters

    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    sliderPerView: 2,

    // Navigation arrows
    navigation: {
      nextEl: document.getElementById('swiper-button-next'),
      prevEl: document.getElementById('swiper-button-prev'),
    },
  }
);

const aboutSwiper = new Swiper(document.getElementById('aboutSwiper'), {
  // Optional parameters
  slidesPerView: 'auto',
  spaceBetween: 80,
  sliderPerView: 3,
  loop: true,
  autoplay: {
    delay: 4500,
  },
  // Navigation arrows
  navigation: {
    nextEl: document.getElementById('about-swiper-button-next'),
    prevEl: document.getElementById('about-swiper-button-prev'),
  },
});


const descriptionRestSwiper = new Swiper(
  document.getElementById('descriptionRestSwiper'),
  {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 80,
    sliderPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    // Navigation arrows
    navigation: {
      nextEl: document.getElementById('description-rest-swiper-button-next'),
      prevEl: document.getElementById('description-rest-swiper-button-prev'),
    },
  }
);
