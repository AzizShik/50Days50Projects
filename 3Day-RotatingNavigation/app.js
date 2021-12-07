const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
const headerLinks = document.querySelectorAll('.header__link');


const MenuToggle = () => {
  burger.classList.toggle('burger--active');
  header.classList.toggle('header--active');
  main.classList.toggle('main--active');
};

burger.addEventListener('click', MenuToggle);

headerLinks.forEach(item => {
  item.addEventListener('click', MenuToggle);
});
