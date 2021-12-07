const nextBtn = document.querySelector('#btn-next');
const prevBtn = document.querySelector('#btn-prev');
const steps = document.querySelectorAll('.step');

const CIRCLE_ACTIVE = 'step--circle';
const LINE_ACTIVE = 'step--line';

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

let index = 0;

const currentStepIncrease = (i) => {

  steps[i].classList.add(LINE_ACTIVE);
  steps[i + 1].classList.add(CIRCLE_ACTIVE);

};

const currentStepDecrease = (i) => {

  steps[i - 1].classList.remove(LINE_ACTIVE);
  steps[i].classList.remove(CIRCLE_ACTIVE);

};

const nextStep = (i) => {
  btnToggle(prevBtn, 'active');

  if(index >= steps.length - 2) {
    btnToggle(nextBtn, 'disabled');
  }

  currentStepIncrease(index);
  index++;

  console.log(index);
  
};

const prevStep = (i) => {

  if(index <= steps.length - 2) {
    btnToggle(nextBtn, 'active');
  }

  currentStepDecrease(index);
  index--;

  console.log(index);
  
};


btnToggle(prevBtn, 'disabled');


nextBtn.addEventListener('click', nextStep);
prevBtn.addEventListener('click', prevStep);