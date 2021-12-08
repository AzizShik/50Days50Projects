const splitItemLeft = document.querySelector('.split__item.left');
const splitItemRight = document.querySelector('.split__item.right');
const splitContainer = document.querySelector('.split');

splitItemLeft.addEventListener('mouseenter', () => {
  splitContainer.classList.add('split-left--hover');
});

splitItemLeft.addEventListener('mouseleave', () => {
  splitContainer.classList.remove('split-left--hover');
});

splitItemRight.addEventListener('mouseenter', () => {
  splitContainer.classList.add('split-right--hover');
});

splitItemRight.addEventListener('mouseleave', () => {
  splitContainer.classList.remove('split-right--hover');
});
