const swiperTechnologiesMerquee = document.querySelectorAll(".swiper-marquee");

if (swiperTechnologiesMerquee) {
  swiperTechnologiesMerquee.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      // Optional parameters
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 33,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      breakpoints: {
        350: {
          slidesPerView: 1.8,
        },

        576: {
          slidesPerView: 2.5,
          loop: true,
          spaceBetween: 33,

          speed: 10000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
        },

        767: {
          slidesPerView: 4.5,
          loop: true,
          spaceBetween: 33,

          speed: 10000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
        },

        922: {
          slidesPerView: 4.5,
          loop: true,
          spaceBetween: 33,

          speed: 10000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
        },

        1150: {
          slidesPerView: 5.5,
        },

        1320: {
          slidesPerView: 6.5,
          loop: true,
          spaceBetween: 33,

          speed: 10000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
        },
      },
    });
  });
}
