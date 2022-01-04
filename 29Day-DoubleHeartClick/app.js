const cardBtn = document.querySelector('.card__btn');
const spanTimes = document.querySelector('.card__descr-times');
let i = 0;
const createHeart = (e) => {
	const offsetX = e.offsetX;
	const offsetY = e.offsetY;

	console.log(offsetX, offsetY);
	

	const heart = document.createElement('div');
	heart.classList.add('heart');
	heart.style.left = offsetX + 'px';
	heart.style.top = offsetY + 'px';
	cardBtn.append(heart);
	heart.innerHTML = `<i class="fas fa-heart"></i>`;
	setTimeout(() => {
		heart.remove();
	}, 1000);

	spanTimes.textContent = ++i;
};

cardBtn.addEventListener('dblclick', createHeart);