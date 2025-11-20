const swiperServicesLeft = document.querySelector(".swiper-services-left");

if (swiperServicesLeft) {
  const swiperServicesLeft = new Swiper(".swiper-services-left", {
    // Optional parameters
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 26,
    speed: 3000,
    freeMode: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // Добавляем этот параметр
      waitForTransition: false,
    },

    breakpoints: {
      767: {
        slidesPerView: 2.4,
        direction: "vertical",
        loop: true,
        spaceBetween: 26,
        freeMode: true,
        speed: 3000,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Добавляем этот параметр
          waitForTransition: false,
        },
      },
    },
  });
}

const swiperServicesRight = document.querySelector(".swiper-services-right");
if (swiperServicesRight) {
  const swiperServicesRight = new Swiper(".swiper-services-right", {
    // Optional parameters
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 26,
    speed: 3000,
    freeMode: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      pauseOnMouseEnter: true, // Добавляем этот параметр
      waitForTransition: false,
    },
    breakpoints: {
      767: {
        direction: "vertical",
        loop: true,
        slidesPerView: 2.4,
        spaceBetween: 26,
        speed: 3000,
        freeMode: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
          pauseOnMouseEnter: true, // Добавляем этот параметр
          waitForTransition: false,
        },
      },
    },
  });
}
