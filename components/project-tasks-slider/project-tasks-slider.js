const swiperProjectTasksSlider = document.querySelector(
  ".swiper-project-tasks-slider"
);

if (swiperProjectTasksSlider) {
  const swiperProjectTasksSlider = new Swiper(".swiper-project-tasks-slider", {
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

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-project-tasks-slider-next",
      prevEl: ".swiper-button-project-tasks-slider-prev",
    },
  });
}
