const cards = document.querySelectorAll('.cards__item');

cards.forEach(item => {
  item.addEventListener('click', () => {
    cards.forEach(item => {
      item.classList.remove('cards__item--active');
    });

    item.classList.add('cards__item--active');
  });
});