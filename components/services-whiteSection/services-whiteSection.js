const swiperServicesLeft = document.querySelectorAll(".swiper-services-left");

if (swiperServicesLeft) {
  swiperServicesLeft.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
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
    sliderInstance.el.addEventListener("mouseenter", () => {
      sliderInstance.autoplay.stop();
      sliderInstance.setTranslate(sliderInstance.translate); // фиксируем позицию прямо сейчас
    });

    sliderInstance.el.addEventListener("mouseleave", () => {
      sliderInstance.autoplay.start();
    });
  });
}

const swiperServicesRight = document.querySelectorAll(".swiper-services-right");

if (swiperServicesRight) {
  swiperServicesRight.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
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
    sliderInstance.el.addEventListener("mouseenter", () => {
      sliderInstance.autoplay.stop();
      sliderInstance.setTranslate(sliderInstance.translate); // фиксируем позицию прямо сейчас
    });

    sliderInstance.el.addEventListener("mouseleave", () => {
      sliderInstance.autoplay.start();
    });
  });
}
