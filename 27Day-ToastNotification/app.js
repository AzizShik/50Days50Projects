const toastBtn = document.querySelector('.toast-btn');
const toastBlock = document.querySelector('.toast-block');

const showToast = () => {
	const toast = document.createElement('div');
	toast.classList.add('toast');
	toastBlock.insertAdjacentElement('afterbegin', toast);
	toast.textContent = `Message ${document.querySelectorAll('.toast').length}`;

	setInterval(() => {
		toast.remove();
	}, 2000);
};

toastBtn.addEventListener('click', showToast);