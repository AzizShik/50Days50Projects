window.addEventListener('load', () => {

  const container = document.querySelector('.container');
  const colors = ['red', 'green', 'blue', 'purple', 'black', 'white', 'yellow', 'brown'];
  const SQUARE = 1215;

  for (let i = 0; i < SQUARE; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseenter', () => setColor(square));
    square.addEventListener('mouseout', () => removeColor(square));

    container.insertAdjacentElement('afterbegin', square);
  }



  function setColor(el) {
    const color = getRandomColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(el) {
    el.style.background = '#444';
    el.style.boxShadow = `0 0 2px #000`;
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length - 1)];
  }



});