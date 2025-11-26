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

<<<<<<< HEAD
const listKeyframes = document.querySelectorAll(".project-keyFrames-wrapper");
if (listKeyframes) {
  listKeyframes.forEach((keyframe) => {
    function isElementPartiallyVisible(element, threshold) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Вычисляем видимую высоту элемента
      const visibleHeight =
        Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

      // Высота самого элемента
      const elementHeight = rect.bottom - rect.top;

      // Если элемент полностью вне видимой области
      if (rect.bottom < 0 || rect.top > windowHeight) {
        return false;
      }

      // Вычисляем процент видимой части
      const visiblePercentage = visibleHeight / elementHeight;

      return visiblePercentage >= threshold;
    }

    function handleScroll() {
      // Определяем порог видимости в зависимости от класса
      const threshold = keyframe.classList.contains("project-keyFrames-5")
        ? 0.1
        : 0.5;

      if (isElementPartiallyVisible(keyframe, threshold)) {
        keyframe.classList.add("visible");

        if (keyframe.classList.contains("project-keyFrames-5")) {
          const wrapper = document.querySelector(".wrapper");
          wrapper.classList.add("overflow-none");
        }
      } else {
        if (keyframe.classList.contains("project-keyFrames-5")) {
          const wrapper = document.querySelector(".wrapper");
          wrapper.classList.remove("overflow-none");
        }
      }
    }

    // Добавляем обработчик скролла с throttle для оптимизации производительности
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });

    // Проверяем видимость при загрузке страницы
    document.addEventListener("DOMContentLoaded", handleScroll);
=======
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
>>>>>>> 6fef2a44c2a836618c4ea591efd3f6b62aadc655
  });
}
