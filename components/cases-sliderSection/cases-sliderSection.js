const swiperCase = document.querySelectorAll(".swiper-case");

if (swiperCase) {
  swiperCase.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      // loop: true,
      slidesPerView: 1,
      spaceBetween: 24,

      breakpoints: {
        767: {
          slidesPerView: 1.4,
          spaceBetween: 24,
        },
      },

      navigation: {
        nextEl: sliderElement.querySelector(".swiper-button-case-next"),
        prevEl: sliderElement.querySelector(".swiper-button-case-prev"),
      },
    });
  });
}
