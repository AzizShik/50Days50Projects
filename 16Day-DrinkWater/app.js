const smallCups = document.querySelectorAll('.cup__small');
const liters = document.querySelector('#liters');
const percentage = document.querySelector('.percentage');
const totalCups = smallCups.length;

const cupRemained = document.querySelector('.cup__remained');

updateCup();

function highlightCups(idx) {
  if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--;
  }
  smallCups.forEach((cup, idx2) => {
    if(idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  }); 

  updateCup();
}

smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});


function updateCup() {
  const fullCups = document.querySelectorAll('.cup__small.full').length;

  if(fullCups === 0) {
    percentage.style.visibility = 'hidden';
    liters.textContent = `${smallCups.length * 0.25}L`;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 400}px`;
    percentage.textContent = `${fullCups / totalCups * 100}%`;
    liters.textContent = `${2 - (fullCups * 0.25)}L`;
  }
  
  if(fullCups === smallCups.length) {
    cupRemained.style.display = 'none';
  } else {
    cupRemained.style.display = 'flex';
  }
  
}