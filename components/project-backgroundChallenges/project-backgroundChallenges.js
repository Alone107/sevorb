const swiperBackgroundChallenges = document.querySelector(
  ".swiper-project-backgroundChallenges"
);

if (swiperBackgroundChallenges) {
  const swiperBackgroundChallenges = new Swiper(
    ".swiper-project-backgroundChallenges",
    {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 48,

      breakpoints: {
        992: {
          slidesPerView: 1.5,
          spaceBetween: 48,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-project-backgroundChallenges-next",
        prevEl: ".swiper-button-project-backgroundChallenges-prev",
      },
    }
  );
}
