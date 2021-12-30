const headerInner = document.querySelector('.header__inner'),
	header = document.querySelector('.header'),
	headerLinks = document.querySelectorAll('.header a');

function scrollHeader(e) {
	if(window.scrollY > 100) {
		header.classList.add('header--active');
	} else {
		header.classList.remove('header--active');
	}
}

window.addEventListener('scroll', scrollHeader);