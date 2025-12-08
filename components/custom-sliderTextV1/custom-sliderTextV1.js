const swiperCustomSliderTextV1 = document.querySelectorAll(
  ".swiper-custom-sliderTextV1"
);

if (swiperCustomSliderTextV1) {
  swiperCustomSliderTextV1.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      // Optional parameters
      slidesPerView: 1.1,
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
        nextEl: sliderElement.querySelector(".custom-sliderTextV1-next"),
        prevEl: sliderElement.querySelector(".custom-sliderTextV1-prev"),
      },
    });
  });
}
