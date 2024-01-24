const swiper = new Swiper('.mission-wrapper .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        centeredSlides: true,
      },
    },
  });