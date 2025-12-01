const swiperServiceGrids = document.querySelectorAll(".swiper-service-grid");

function initMobileSwiper() {
  const screenWidth = window.innerWidth;
  let swiperInstances = [];

  if (screenWidth < 767) {
    swiperServiceGrids.forEach((sliderElement) => {
      const instance = new Swiper(sliderElement, {
        // Navigation arrows
        slidesPerView: 1.2,
        spaceBetween: 12,
        enabled: true,
        breakpoints: {
          767: {
            slidesPerView: 2,
            spaceBetween: 0,
            enabled: false,
          },
        },
      });
      swiperInstances.push(instance);
    });
  }

  return swiperInstances;
}

// Инициализация при загрузке
let swiperInstances = initMobileSwiper();

// Обработка изменения размера окна
window.addEventListener("resize", () => {
  // Уничтожаем существующие экземпляры
  swiperInstances.forEach((instance) => instance.destroy());

  // Переинициализируем если ширина меньше 767px
  const screenWidth = window.innerWidth;
  if (screenWidth < 767) {
    swiperInstances = initMobileSwiper();
  } else {
    swiperInstances = [];
  }
});
