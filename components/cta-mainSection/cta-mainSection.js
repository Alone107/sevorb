const multiDefault = () => {
  const elements = document.querySelectorAll(".multi-default");

  elements.forEach((el) => {
    const choicesOne = new Choices(el, {
      searchEnabled: false,
      itemSelectText: "",
    });
  });
};

multiDefault();

const swiperServicesLeft = document.querySelector(".swiper-services-left");

if (swiperServicesLeft) {
  const swiperServicesLeft = new Swiper(".swiper-services-left", {
    // Optional parameters
    loop: true,
    slidesPerView: 1.4,
    spaceBetween: 26,

    // Настройка скорости и плавности
    speed: 3000,

    // Автоматическая прокрутка
    autoplay: {
      delay: 100,
    },
  });
}
