const counters = document.querySelectorAll('.counter__item-span');

counters.forEach(counter => {
  counter.innerHTML = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-count');
    const c = +counter.innerText;
    const increment = target / 100;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      // counter.innerText = target;
    }

  };

  updateCounter();

});