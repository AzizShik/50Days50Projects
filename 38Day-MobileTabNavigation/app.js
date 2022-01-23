window.addEventListener('load', () => {

  const navContainer = document.querySelector('.mobile__list');
  const mobileLinks = document.querySelectorAll('.mobile__link');
  const mobileItems = document.querySelectorAll('.mobile__screen-item');



  navContainer.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('mobile__link')) {
      e.preventDefault();
      const activeItem = document.querySelector(el.hash);
      mobileItems.forEach(item => item.classList.remove('mobile__screen-item--active'));
      activeItem.classList.add('mobile__screen-item--active');

      mobileLinks.forEach(item => item.classList.remove('mobile__link--active'));
      el.classList.add('mobile__link--active');
    }

  });










});