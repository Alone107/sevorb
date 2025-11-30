// Получаем все контейнеры аккордеонов
const accordionContainers = document.querySelectorAll(".services-accordeon");

// Функция инициализации аккордеонов
function initializeAccordions() {
  accordionContainers.forEach((container) => {
    // Получаем элементы для каждого аккордеона отдельно
    const leftTabs = container.querySelectorAll(".services-accordeon-left-tab");
    const rightBlocks = container.querySelectorAll(
      ".services-accordeon-right-block"
    );

    // Добавляем обработчики клика для вкладок текущего аккордеона
    leftTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => switchTab(container, index));
    });
  });
}

// Функция переключения вкладок с учётом контейнера
function switchTab(container, index) {
  // Получаем элементы только для текущего аккордеона
  const leftTabs = container.querySelectorAll(".services-accordeon-left-tab");
  const rightBlocks = container.querySelectorAll(
    ".services-accordeon-right-block"
  );

  // Убираем активный класс со всех вкладок текущего аккордеона
  leftTabs.forEach((tab) => tab.classList.remove("active"));
  // Добавляем активный класс к выбранной вкладке
  leftTabs[index].classList.add("active");

  // Скрываем все блоки контента текущего аккордеона
  rightBlocks.forEach((block) => block.classList.remove("active"));
  // Показываем выбранный блок контента
  rightBlocks[index].classList.add("active");
}

// Инициализируем все аккордеоны
initializeAccordions();
