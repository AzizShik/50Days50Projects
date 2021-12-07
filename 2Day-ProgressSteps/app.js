const nextBtn = document.querySelector('#btn-next');
const prevBtn = document.querySelector('#btn-prev');
const steps = document.querySelectorAll('.step');
const progressLine = document.querySelector('#progress__line');
const CIRCLE_ACTIVE = 'active--circle';

const btnToggle = (btn, toggle) => {
  if (toggle === 'disabled') {
    btn.disabel = 'true';
    btn.style.cursor = 'no-drop';
    btn.style.background = '#ccc';
  } else if (toggle === 'active') {
    btn.disabel = 'false';
    btn.style.cursor = 'pointer';
    btn.style.background = 'rgb(15, 136, 248)';
  }
};

let index = 1;

const currentStepIncrease = (i) => {
  if (index < steps.length) {
    progressLine.style.width = index * 25 + '%';
    steps[i].classList.add(CIRCLE_ACTIVE);
  }
};

const currentStepDecrease = (i) => {
  if (index >= 1) {
    steps[i].classList.remove(CIRCLE_ACTIVE);
    progressLine.style.width = index * 25 - 25 + '%';
  }
};

const nextStep = (i) => {
  btnToggle(prevBtn, 'active');

  if (index === steps.length - 1) {
    btnToggle(nextBtn, 'disabled');
  }

  if (index == steps.length) {
    index = steps.length;
    currentStepIncrease(index);
  } else {
    currentStepIncrease(index);
    index++;
  }
};

const prevStep = (i) => {
  if (index >= steps.length - 2) {
    btnToggle(nextBtn, 'active');
  }

  if (index === 1) {
    index = 1;
    btnToggle(prevBtn, 'disabled');
  } else {
    index--;
    currentStepDecrease(index);
  }

  console.log(index);


};


btnToggle(prevBtn, 'disabled');


nextBtn.addEventListener('click', nextStep);
prevBtn.addEventListener('click', prevStep);