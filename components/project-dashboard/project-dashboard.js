const swiperProjectDashboard = document.querySelector(
  ".swiper-project-dashboard"
);

if (swiperProjectDashboard) {
  const swiperProjectDashboard = new Swiper(".swiper-project-dashboard", {
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
  swiperProjectDashboard.on("slideChange", () => {
    const currentIndex = Math.floor(swiperProjectDashboard.realIndex);
    updateTags(currentIndex);
  });

  // Инициализация для первого слайда
  updateTags(Math.floor(swiperProjectDashboard.realIndex));
}
