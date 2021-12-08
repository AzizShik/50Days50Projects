const boxes = document.querySelectorAll('.box');

const animationBox = () => {
  const triggerHeight = window.innerHeight - 200;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerHeight) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }

    console.log(triggerHeight, boxTop);

  });

  
};


window.addEventListener('scroll', animationBox);