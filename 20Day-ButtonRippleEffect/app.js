const button = document.querySelector('.btn');


button.addEventListener('click', (e) => {
	const x = e.clientX;
	const y = e.clientY;

	const buttonTop = e.target.offsetTop;
	const buttonLeft = e.target.offsetLeft;

	const xInside = x - buttonLeft;
	const yInside = y - buttonTop;

	console.log(xInside, yInside);
	
	const ripple = document.createElement('span');
	ripple.classList.add('ripple');
	ripple.style.top = yInside + 'px';
	ripple.style.left = xInside + 'px';


	if(xInside < 800) {
		button.append(ripple);
	}


	setTimeout(() => ripple.remove(), 500);
});