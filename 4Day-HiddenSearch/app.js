const btn = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');

const INPUT_ACTIVE = 'search__input--active';
const BTN_ACTIVE = 'search__btn--active';

const toggleSearch = (el, active) => {
  el.classList.toggle(active);
};


btn.addEventListener('click', () => {
  toggleSearch(btn, BTN_ACTIVE);
  toggleSearch(input, INPUT_ACTIVE);
  input.focus();
});
