const swiperProjectChallenges = document.querySelectorAll(
  ".swiper-project-challenges"
);

if (swiperProjectChallenges) {
  swiperProjectChallenges.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      slidesPerView: 1,
      spaceBetween: 48,

      breakpoints: {
        992: {
          slidesPerView: 1.5,
          spaceBetween: 48,
        },
      },

      navigation: {
        nextEl: sliderElement.querySelector(
          ".swiper-button-project-challenges-next"
        ),
        prevEl: sliderElement.querySelector(
          ".swiper-button-project-challenges-prev"
        ),
      },
    });
  });
}
