const swiperProjectChallenges = document.querySelector(
  ".swiper-project-challenges"
);

if (swiperProjectChallenges) {
  const swiperProjectChallenges = new Swiper(".swiper-project-challenges", {
    // Optional parameters
    slidesPerView: 1.5,
    spaceBetween: 48,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-project-challenges-next",
      prevEl: ".swiper-button-project-challenges-prev",
    },
  });
}
