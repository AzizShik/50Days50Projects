const items = document.querySelectorAll('.item');
const btnPrev = document.querySelector('.control-prev');
const btnNext = document.querySelector('.control-next');

const dots = document.querySelectorAll('.dot');

let i = 0;

const currentSlide = (idx) => {
  items.forEach(item => {
    item.classList.remove('item--active');
  });

  document.querySelector('body').style.backgroundImage = `url(${(items[idx].querySelector('img').src)})`;
  items[idx].classList.add('item--active');
};

const currentDot = (idx) => {
  dots.forEach(item => {
    item.classList.remove('dot--active');
  });
  
  dots[idx].classList.add('dot--active');
};

currentSlide(i);

const slideNext = () => {
  if (i >= items.length - 1) {
    i = 0;
    currentSlide(i);
    currentDot(i);
  } else {
    i++;
    currentSlide(i);
    currentDot(i);
  }
};

const slidePrev = () => {
  if (i === 0) {
    i = items.length - 1;
    currentSlide(i);
    currentDot(i);
  } else {
    i--;
    currentSlide(i);
    currentDot(i);
  }
};


btnPrev.addEventListener('click', slidePrev);
btnNext.addEventListener('click', slideNext);



dots.forEach((dot, idx)=> {
  dot.addEventListener('click', () => {
    i = idx;
    currentSlide(i);
    currentDot(i);
  });
});





