window.addEventListener('load', () => {
  const labels = document.querySelectorAll('.label');
  const container = document.querySelector('.container');
  const form = document.querySelector('.form');

  container.addEventListener('click', (e) => {
    const el = e.target;
    console.log(el);
    if (el.classList.contains('label')) {
      console.log(12314);
      labels.forEach(item => {
        item.classList.remove('active');
      })
      el.classList.add('active');
    }

    if (el.classList.contains('btn')) {
      const activeLabel = document.querySelector('.label.active');
      e.preventDefault();
      container.innerHTML = `
      <i class="fas fa-heart"></i>
      <h2 class="title">Thank You!</h2>
      <p class="descr">Feedback: ${activeLabel.textContent}</p>
      <p class="text">We'll use your feedback to improve our customer support</p>
      `;
    }


  });



});