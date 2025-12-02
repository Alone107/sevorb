const swiperProjectDashboard = document.querySelectorAll(
  ".swiper-project-dashboard"
);

if (swiperProjectDashboard) {
  swiperProjectDashboard.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      // Optional parameters

      // If we need pagination
      pagination: {
        el: ".swiper-pagination-project-dashboard",
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-project-dashboard-next",
        prevEl: ".swiper-button-project-dashboard-prev",
      },
    });

    const tagBlocks = document.querySelectorAll(".project-dashboard-tag-block");

    // Функция обновления тегов на основе текущего слайда
    function updateTags(slideIndex) {
      tagBlocks.forEach((block) => {
        const blockIndex = parseInt(block.dataset.dashboardBlock);
        if (blockIndex === slideIndex) {
          block.classList.add("active");
        } else {
          block.classList.remove("active");
        }
      });
    }

    // Обработчик изменения слайда
    sliderInstance.on("slideChange", () => {
      const currentIndex = Math.floor(sliderInstance.realIndex);
      updateTags(currentIndex);
    });

    // Инициализация для первого слайда
    updateTags(Math.floor(sliderInstance.realIndex));
  });
}
