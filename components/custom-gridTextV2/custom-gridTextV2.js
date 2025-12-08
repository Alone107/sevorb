const customColumnListsWrapper2 = document.querySelectorAll(
  ".custom-gridTextV2-wrapper"
);

if (customColumnListsWrapper2.length > 0) {
  customColumnListsWrapper2.forEach((wrap) => {
    const customGridTextV2Blocks = wrap.querySelectorAll(
      ".custom-gridTextV2-block"
    );

    if (customGridTextV2Blocks.length > 0) {
      // Вычисляем индекс один раз
      const index = (customGridTextV2Blocks.length - 1) % 2;

      // Массив классов — чёткая связь индекса и имени
      const classNames = ["one", "two"];

      // Добавляем класс
      wrap.classList.add(classNames[index]);
    }
  });
}
