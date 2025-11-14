const multiDefault = () => {
  const elements = document.querySelectorAll(".multi-default");

  elements.forEach((el) => {
    const choicesOne = new Choices(el, {
      searchEnabled: false,
      itemSelectText: "",
    });
  });
};

multiDefault();
