const btns = document.querySelectorAll('.faq__toggle'),
  faqItems = document.querySelectorAll('.faq__item');

const ARROW_CLASS = 'fa-arrow-down',
  CLOSE_CLASS = 'fa-times-circle';

  const btnToggle = (btn) => {
    const btnIcon = btn.querySelector('i');
    if(btnIcon.classList.contains(ARROW_CLASS)) {
      btnIcon.classList.remove(ARROW_CLASS);
      btnIcon.classList.add(CLOSE_CLASS);
    } else if (btnIcon.classList.contains(CLOSE_CLASS)) {
      btnIcon.classList.add(ARROW_CLASS);
      btnIcon.classList.remove(CLOSE_CLASS);
    }
  };

  const faqToggle = (item) => {
    item.classList.toggle('faq-active');
  };

btns.forEach(btn => {

  btn.addEventListener('click', () => {
    btnToggle(btn);
    faqToggle(btn.closest('.faq__item'));
  });

});