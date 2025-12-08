const customColumnListsWrapper = document.querySelectorAll(
  ".custom-gridTextV1-wrapper"
);

if (customColumnListsWrapper.length > 0) {
  customColumnListsWrapper.forEach((wrap) => {
    const customGridTextV1Blocks = wrap.querySelectorAll(
      ".custom-gridTextV1-block"
    );

    if (customGridTextV1Blocks.length > 0) {
      // Вычисляем индекс один раз
      const index = (customGridTextV1Blocks.length - 1) % 3;

      // Массив классов — чёткая связь индекса и имени
      const classNames = ["one", "two", "three"];

      // Добавляем класс
      wrap.classList.add(classNames[index]);
    }
  });
}
