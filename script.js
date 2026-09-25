const swiper = new Swiper(".swiper", {
  // Change 'vertical' to 'horizontal' (or delete this line entirely)
  direction: "horizontal",

  // Your other configuration settings...
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
