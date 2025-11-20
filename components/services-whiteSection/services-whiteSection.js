const swiperServicesLeft = document.querySelector(".swiper-services-left");

if (swiperServicesLeft) {
  const swiperServicesLeft = new Swiper(".swiper-services-left", {
    // Optional parameters
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 26,

    speed: 10000,

    autoplay: {
      delay: 0,
    },
  });
}
