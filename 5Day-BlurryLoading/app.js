const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

let load = 0;


const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  text.textContent = `${load}%`;
  text.style.opacity = `${scale(load, 0, 100, 1, 0)}`;
  bg.style.filter = `blur(${scale(load, 100, 0, 1, 0)}px)`;
};

let int = setInterval(blurring, 10);


window.addEventListener('DOMContentLoaded', () => {
  blurring();
});