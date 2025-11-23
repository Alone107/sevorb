const swiperServicesLeft = document.querySelector(".swiper-services-left");
if (swiperServicesLeft) {
  const swiperServicesLeft = new Swiper(".swiper-services-left", {
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 26,
    freeMode: true,
    speed: 800,
    waitTransition: false,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      767: {
        slidesPerView: 2.4,
        direction: "vertical",
        loop: true,
        spaceBetween: 26,
        freeMode: true,
        speed: 800,
        waitTransition: false,

        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      },
    },
  });

  swiperServicesLeft.el.addEventListener("mouseenter", () => {
    swiperServicesLeft.autoplay.stop();
    swiperServicesLeft.setTranslate(swiperServicesLeft.translate); // фиксируем позицию прямо сейчас
  });

  swiperServicesLeft.el.addEventListener("mouseleave", () => {
    swiperServicesLeft.autoplay.start();
  });
}

const swiperServicesRight = document.querySelector(".swiper-services-right");
if (swiperServicesRight) {
  const swiperServicesRight = new Swiper(".swiper-services-right", {
    // Optional parameters
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 26,
    speed: 800,
    freeMode: true,
    autoplay: {
      delay: 2000,
      waitTransition: false,
    },
    breakpoints: {
      767: {
        direction: "vertical",
        loop: true,
        slidesPerView: 2.4,
        spaceBetween: 26,
        freeMode: true,
        autoplay: {
          speed: 3000,
          delay: 0,
          reverseDirection: true,
          disableOnInteraction: false,
          waitTransition: false,
        },
      },
    },
  });
  swiperServicesRight.el.addEventListener("mouseenter", () => {
    swiperServicesRight.autoplay.stop();
    swiperServicesRight.setTranslate(swiperServicesRight.translate); // фиксируем позицию прямо сейчас
  });

  swiperServicesRight.el.addEventListener("mouseleave", () => {
    swiperServicesRight.autoplay.start();
  });
}
