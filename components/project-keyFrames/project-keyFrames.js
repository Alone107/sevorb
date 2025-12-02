const swiperKeyFrames = document.querySelectorAll(".swiper-keyFrames");

if (swiperKeyFrames) {
  swiperKeyFrames.forEach((sliderElement) => {
    const sliderInstance = new Swiper(sliderElement, {
      spaceBetween: 24,
      slidesPerView: 2.5,
      freeMode: true,
      grabCursor: true,
    });
  });
}

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

        const mediaQuery = window.matchMedia("(min-width: 767px)");
        if (
          keyframe.classList.contains("project-keyFrames-5") &&
          mediaQuery.matches
        ) {
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
  });
}
