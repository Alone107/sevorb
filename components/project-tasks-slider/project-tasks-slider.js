const swiperProjectTasksSlider = document.querySelectorAll(
  ".swiper-project-tasks-slider"
);

if (swiperProjectTasksSlider) {
  swiperProjectTasksSlider.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      // Optional parameters
      slidesPerView: 1.2,
      spaceBetween: 16,

      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2.4,
          spaceBetween: 16,
        },

        992: {
          slidesPerView: 3.6,
          spaceBetween: 16,
        },
      },

      navigation: {
        nextEl: sliderElement.querySelector(
          ".swiper-button-project-tasks-slider-next"
        ),
        prevEl: sliderElement.querySelector(
          ".swiper-button-project-tasks-slider-prev"
        ),
      },
    });
  });
}
