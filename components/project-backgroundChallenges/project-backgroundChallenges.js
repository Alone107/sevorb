const swiperBackgroundChallenges = document.querySelectorAll(
  ".swiper-project-backgroundChallenges"
);

if (swiperBackgroundChallenges) {
  swiperBackgroundChallenges.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      // Optional parameters
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
          ".swiper-button-project-backgroundChallenges-next"
        ),
        prevEl: sliderElement.querySelector(
          ".swiper-button-project-backgroundChallenges-prev"
        ),
      },
    });
  });
}
