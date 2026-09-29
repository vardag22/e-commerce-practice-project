// Show and Hide Sidebar
const showIcon = document.querySelector('.show');
const hideIcon = document.querySelector('.hide');
const sideBar = document.querySelector('.side-bar');
const overlay = document.querySelector(".overlay");

showIcon.addEventListener('click', () => {
  sideBar.classList.add('show');
  overlay.classList.add('show')
})

hideIcon.addEventListener('click', () => {
  sideBar.classList.remove('show');
  overlay.classList.remove("show");
})

overlay.addEventListener('click', () => {
  if (sideBar.classList.contains('show'))
  {
    overlay.classList.remove('show');
    sideBar.classList.remove('show');
  }
})

const sliderWrapper = document.querySelector('.slider-wrapper');

sliderWrapper?.addEventListener('click', (event) => {
  const slideLink = event.target.closest('a[href^="#slide-"]');
  if (!slideLink) return;

  const targetSlide = document.querySelector(slideLink.getAttribute('href'));
  const slider = sliderWrapper.querySelector('.slider');
  if (!targetSlide || !slider) return;

  event.preventDefault();
  slider.scrollTo({
    left: slider.scrollLeft + targetSlide.getBoundingClientRect().left - slider.getBoundingClientRect().left,
    behavior: 'smooth'
  });
});

document.querySelectorAll('.arrows').forEach((navigation) => {
  const productSection = navigation.closest('.flash-sales-section');
  const products = productSection?.querySelector('.sales-products-container');
  if (!products) return;

  navigation.addEventListener('click', (event) => {
    const arrow = event.target.closest('a');
    if (!arrow) return;

    event.preventDefault();
    const direction = arrow === navigation.firstElementChild ? -1 : 1;
    products.scrollBy({
      left: direction * products.clientWidth,
      behavior: 'smooth'
    });
  });
});
