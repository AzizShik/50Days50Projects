window.addEventListener('load', () => {

  const btnOpen = document.querySelector('.btn-open');
  const btnClose = document.querySelector('.nav__close');
  const navs = document.querySelectorAll('.nav');

  btnOpen.addEventListener('click', () => {
    toggleMenu('add');
  });

  btnClose.addEventListener('click', () => {
    toggleMenu('remove');
  });

  function toggleMenu(condition) {
    condition === 'add' ? navs.forEach(item => item.classList.add('nav--active')) : navs.forEach(item => item.classList.remove('nav--active'));
  }

});