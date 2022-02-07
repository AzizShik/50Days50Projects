window.addEventListener('load', () => {
  const inputEl = document.querySelector('.range__input');
  const spanEl = document.querySelector('.range__span');
  

  inputEl.addEventListener('input', () => {
    const value = inputEl.value;
    spanEl.style.left = value + '%';
    spanEl.textContent = value;
  });


});