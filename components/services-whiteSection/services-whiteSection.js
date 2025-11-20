const swiperServicesLeft = document.querySelector(".swiper-services-left");
if (swiperServicesLeft) {
  const swiperServicesLeft = new Swiper(".swiper-services-left", {
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 26,
    freeMode: true,
    speed: 1500,

    autoplay: {
      delay: 0,
    },
    breakpoints: {
      767: {
        slidesPerView: 2.4,
        direction: "vertical",
        loop: true,
        spaceBetween: 26,
        freeMode: true,
        speed: 1500,
        autoplay: {
          delay: 0,
        },
      },
    },
  });

  swiperServicesLeft.el.addEventListener("mouseenter", () => {
    swiperServicesLeft.autoplay.stop();
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
    speed: 1500,
    freeMode: true,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      767: {
        direction: "vertical",
        loop: true,
        slidesPerView: 2.4,
        spaceBetween: 26,
        speed: 1500,
        freeMode: true,
        autoplay: {
          delay: 0,
          reverseDirection: true,
        },
      },
    },
  });
  swiperServicesRight.el.addEventListener("mouseenter", () => {
    swiperServicesRight.autoplay.stop();
  });

  swiperServicesRight.el.addEventListener("mouseleave", () => {
    swiperServicesRight.autoplay.start();
  });
}
