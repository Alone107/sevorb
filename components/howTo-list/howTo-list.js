const howToBlocks = document.querySelectorAll(".howTo-list-block");

if (howToBlocks) {
  howToBlocks.forEach((block) => {
    const details = block.querySelector(".howTo-list-accordeon-details");
    const span = block.querySelector(".howTo-list-accordeon-summary span");

    if (!details || !span) return;

    const updateLabel = () => {
      span.textContent = details.open ? "Скрыть описание" : "Подробнее";
    };

    // Сначала установим правильный текст при загрузке
    updateLabel();

    // Затем обновляем текст при каждом переключении
    details.addEventListener("toggle", updateLabel);
  });
}
