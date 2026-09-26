// Show and Hide Sidebar
const showIcon = document.querySelector('.show');
const hideIcon = document.querySelector('.hide');
const sideBar = document.querySelector('.side-bar');

showIcon.addEventListener('click', () => {
  sideBar.classList.add('show');
})

hideIcon.addEventListener('click', () => {
  sideBar.classList.remove('show');
})

const swiper = new Swiper(".swiper", {
  // Change 'vertical' to 'horizontal' (or delete this line entirely)
  direction: "horizontal",

  // Other configuration settings...
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
