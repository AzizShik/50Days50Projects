window.addEventListener('load', () => {
  const imgItems = document.querySelectorAll('.carousel__item');
  const btnNext = document.querySelector('.carousel__tools-next');
  const btnPrev = document.querySelector('.carousel__tools-prev');

  let i = 0;

  function slideChange(i) {
    imgItems.forEach(item => item.classList.remove('active'));
    imgItems[i].classList.add('active');
  }

  function nextSlide() {
    if (i >= imgItems.length - 1) {
      i = 0;
      slideChange(i);
    } else {
      i++;
      slideChange(i);
    }
  }

  function prevSlide() {
    if (i === 0) {
      i = imgItems.length - 1;
      slideChange(i);
    } else {
      i--;
      slideChange(i);
    }
  }


  btnNext.addEventListener('click', () => {
    nextSlide();
    imgItems[i].animate([{
        transform: 'translateX(50%)',
        opacity: 0,
      },
      {
        transform: 'translateX(0%)',
        opacity: 1,
      }
    ], {
      duration: 500,
    });
  });
  btnPrev.addEventListener('click', () => {
    prevSlide();
    imgItems[i].animate([{
        transform: 'translateX(-50%)',
        opacity: 0,
      },
      {
        transform: 'translateX(0%)',
        opacity: 1,
      }
    ], {
      duration: 500,
    });
  });











});