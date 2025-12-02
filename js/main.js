const languageArrow = document.querySelector(".language-arrow");
if (languageArrow) {
  const languageMenu = document.querySelector(".language-menu");
  const languageUse = document.querySelector(".language-use");

  // Существующий обработчик клика по стрелке
  languageUse.addEventListener("click", (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события
    languageMenu.classList.toggle("showw");
    languageArrow.classList.toggle("showw");
  });

  // Добавляем обработчик для закрытия при клике вне меню
  window.addEventListener("click", (event) => {
    if (
      !languageMenu.contains(event.target) &&
      !languageArrow.contains(event.target)
    ) {
      languageMenu.classList.remove("showw");
      languageArrow.classList.remove("showw");
    }
  });
}

const bigMenu = document.querySelector(".header-bigMenu");
if (bigMenu) {
  const burger = document.querySelector(".burger");
  const bgCircleWhite = document.querySelector(".bg-circle-bigMenu");

  const menuElements = [bigMenu, burger, bgCircleWhite];

  function toggleShow() {
    menuElements.forEach((element) => element.classList.toggle("show"));
  }

  function removeShowClass() {
    menuElements.forEach((element) => element.classList.remove("show"));
  }

  burger.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleShow();
  });

  function closeMenuOnOutsideClick(event) {
    if (!bigMenu.contains(event.target) && !burger.contains(event.target)) {
      removeShowClass();
    }
  }

  document.addEventListener("click", closeMenuOnOutsideClick);
  document.addEventListener("focusin", closeMenuOnOutsideClick);

  const menuItemHasChildren = bigMenu.querySelectorAll(
    ".menu-item-has-children"
  );

  menuItemHasChildren.forEach((menu) => {
    const menuChildrenLinks = menu.querySelector(".menu-item-children-link");
    const menuChildrenSub = menu.querySelector(".sub-menu");
    const menuChildrenArrow = menu.querySelector(".arrow-menu");

    // Добавляем обработчик клика на ссылку подменю
    menuChildrenLinks?.addEventListener("click", (event) => {
      event.stopPropagation(); // Предотвращаем всплытие

      // Закрываем все открытые подменю
      menuItemHasChildren.forEach((subMenu) => {
        if (subMenu !== menu) {
          // Исключаем текущее меню из закрытия
          subMenu.querySelector(".sub-menu")?.classList.remove("show");
          subMenu.querySelector(".arrow-menu")?.classList.remove("show");
        }
      });

      // Открываем текущее подменю
      menuChildrenSub?.classList.toggle("show");
      menuChildrenArrow?.classList.toggle("show");
    });

    // Добавляем обработчик клика на само подменю
    menuChildrenSub?.addEventListener("click", (event) => {
      event.stopPropagation(); // Предотвращаем всплытие
    });
  });
}

const scrollLockTimeouts = new Map();
let isScrollLocked = false;

function addScrollLock() {
  if (scrollLockTimeouts.has("scroll-lock")) {
    clearTimeout(scrollLockTimeouts.get("scroll-lock"));
  }

  const timeoutId = setTimeout(() => {
    document.body.classList.add("scroll-off");
    scrollLockTimeouts.delete("scroll-lock");
  }, 100);

  scrollLockTimeouts.set("scroll-lock", timeoutId);
}

function removeScrollLock() {
  if (scrollLockTimeouts.has("scroll-lock")) {
    clearTimeout(scrollLockTimeouts.get("scroll-lock"));
    scrollLockTimeouts.delete("scroll-lock");
  }
  document.body.classList.remove("scroll-off");
}

const bigMenuServices = document.querySelector(".header-bigMenu-services");
if (bigMenuServices) {
  const headerBigMenuLink = document.querySelector(".menu-item-submenu");
  const bgCircleWhite = document.querySelector(".bg-circle-bigMenu");
  const headerBigMenuLinkArrow =
    headerBigMenuLink.querySelector("a .arrow-menu");

  // Функция для обработки клика снаружи меню
  function handleCloseOutside(event) {
    if (!bigMenuServices.contains(event.target)) {
      bigMenuServices.classList.remove("show");
      headerBigMenuLinkArrow.classList.remove("show");
      bgCircleWhite.classList.remove("show");
      removeScrollLock();
    }
  }

  // Обработчик клика по ссылке
  headerBigMenuLink.addEventListener("click", (event) => {
    event.stopPropagation(); // Предотвращаем всплытие события

    // Переключение классов
    bigMenuServices.classList.toggle("show");
    headerBigMenuLinkArrow.classList.toggle("show");
    bgCircleWhite.classList.toggle("show");
    document.body.classList.toggle("scroll-off");
  });

  // Добавляем обработчики для клика и фокуса снаружи меню
  document.addEventListener("click", handleCloseOutside);
  document.addEventListener("focusin", handleCloseOutside);

  // Очистка слушателей при удалении элемента
  bigMenuServices.addEventListener("remove", () => {
    document.removeEventListener("click", handleCloseOutside);
    document.removeEventListener("focusin", handleCloseOutside);
  });
}

const popupForm = document.querySelector(".popup-form");

if (popupForm) {
  const popupClose = popupForm.querySelector(".popup-close");
  const popupShadow = popupForm.querySelector(".shadow");
  const buttonsForm = document.querySelectorAll(".btn-form");

  buttonsForm.forEach((button) => {
    button.addEventListener("click", () => {
      popupForm.classList.add("show");
    });
  });
  popupShadow.addEventListener("click", () => {
    popupForm.classList.remove("show");
  });
  popupClose.addEventListener("click", () => {
    popupForm.classList.remove("show");
  });
}

// Получаем элементы DOM
const headerSearch = document.querySelector(".header-search input");
const bigMenuSearch = document.querySelector(".header-bigMenu-search");
const SearchButton = document.querySelector(".header-search button");
const headerSearchRow = document.querySelector(".header-search");
const headerLogo = document.querySelector(".header-logo");
const headerBurger = document.querySelector(".burger");

// Проверяем существование всех необходимых элементов
if (headerSearch && bigMenuSearch && SearchButton) {
  // Создаем медиа-запрос
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  // Обработчик изменения медиа-запроса
  mediaQuery.addEventListener("change", (e) => {
    if (!e.matches) {
      // При большом экране сбрасываем стили
      headerSearchRow.classList.remove("show");
      headerLogo.classList.remove("none");
      headerBurger.classList.remove("none");
    }
  });

  // Обработка ввода в поисковое поле
  headerSearch.addEventListener("input", () => {
    if (headerSearch.value) {
      bigMenuSearch.classList.add("show");
    } else {
      bigMenuSearch.classList.remove("show");
    }
  });

  // Обработка клика по кнопке поиска
  SearchButton.addEventListener("click", (e) => {
    if (mediaQuery.matches) {
      e.preventDefault();
      headerSearchRow.classList.toggle("show");
      headerLogo.classList.toggle("none");
      headerBurger.classList.toggle("none");
    }
  });
}
