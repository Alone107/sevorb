const swiperCase = document.querySelector(".swiper-case");

if (swiperCase) {
  const swiperCase = new Swiper(".swiper-case", {
    // Optional parameters
    // loop: true,
    slidesPerView: 1.4,
    spaceBetween: 24,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-case-next",
      prevEl: ".swiper-button-case-prev",
    },
  });
}
