window.addEventListener('load', () => {

  const overlay = document.querySelector('.overlay');
  const password = document.getElementById('password');

  password.addEventListener('input', overlayChange);

  function overlayChange() {
    const length = password.value.length;
    overlay.style.filter = `blur(${20 - length * 4}px)`;
  }


});