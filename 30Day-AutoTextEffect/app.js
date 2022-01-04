const text = 'We Love Programming!';
const speedInput = document.getElementById('speed-input');
let textSpeed = 400 / speedInput.value;
const title = document.querySelector('.title');
let idx = 1;

const writeText = () => {
	title.innerHTML = text.slice(0, idx);
	idx++;
	if(idx > text.length) {
		idx = 1;
	}
	setTimeout(writeText, textSpeed);
};

writeText();

speedInput.addEventListener('input', (e) => {
	textSpeed = 400 / e.target.value;
});