const burgerBtn = document.querySelector('.burger__btn'),
  burgerNav = document.querySelector('.burger__nav'),
  burger = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
});