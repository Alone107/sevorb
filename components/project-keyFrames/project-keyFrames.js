const swiperKeyFrames = document.querySelector(".swiper-keyFrames");

if (swiperKeyFrames) {
  const swiperKeyFrames = new Swiper(".swiper-keyFrames", {
    // Optional parameters

    spaceBetween: 24,
    slidesPerView: 2.5,
    freeMode: true,
    grabCursor: true,
  });
}

const listKeyrames = document.querySelectorAll(".project-keyFrames-wrapper");
if (listKeyrames) {
  listKeyrames.forEach((keyFrames) => {
    function isElementVisible(keyFrames) {
      const rect = keyFrames.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Проверяем, что весь блок виден на экране
      return (
        rect.top >= 0 && // верхняя часть блока видна
        rect.bottom <= windowHeight && // нижняя часть блока видна
        rect.width === keyFrames.offsetWidth // ширина не обрезана
      );
    }

    function handleScroll() {
      if (isElementVisible(keyFrames)) {
        keyFrames.classList.add("visible");
      }
    }

    // Добавляем обработчик события скролла
    window.addEventListener("scroll", handleScroll);

    // Проверяем при загрузке страницы
    document.addEventListener("DOMContentLoaded", () => {
      handleScroll();
    });
  });
}
