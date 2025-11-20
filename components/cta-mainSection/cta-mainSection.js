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

const swiperServicesLeft = document.querySelector(".swiper-services-left");

if (swiperServicesLeft) {
  const swiperServicesLeft = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
