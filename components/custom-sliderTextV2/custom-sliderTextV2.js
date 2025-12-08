const swiperCustomSliderTextV2 = document.querySelectorAll(
  ".swiper-custom-sliderTextV2"
);

if (swiperCustomSliderTextV2) {
  swiperCustomSliderTextV2.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      // Optional parameters
      slidesPerView: 1.1,
      spaceBetween: 16,

      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 1.6,
          spaceBetween: 16,
        },

        992: {
          slidesPerView: 2.4,
          spaceBetween: 16,
        },
      },
      navigation: {
        nextEl: sliderElement.querySelector(".custom-sliderTextV2-next"),
        prevEl: sliderElement.querySelector(".custom-sliderTextV2-prev"),
      },
    });
  });
}
