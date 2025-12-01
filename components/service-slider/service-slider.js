const swiperServiceSliders = document.querySelectorAll(
  ".swiper-service-slider"
);

if (swiperServiceSliders) {
  swiperServiceSliders.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      // Navigation arrows
      slidesPerView: 1,
      spaceBetween: 24,

      navigation: {
        nextEl: sliderElement.querySelector(".service-slider-button-next"),
        prevEl: sliderElement.querySelector(".service-slider-button-prev"),
      },
    });
  });
}
