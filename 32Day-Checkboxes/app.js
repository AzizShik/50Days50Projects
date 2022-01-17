const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const cheap = document.getElementById('cheap');
const fast = document.getElementById('fast');



toggles.forEach(toggle => toggle.addEventListener('change', e => checkboxTric(e.target)));

function checkboxTric(target) {
	if (good.checked && fast.checked && cheap.checked) {

		if (good === target) {
			fast.checked = false;
		} else if (cheap === target) {
			good.checked = false;
		} else if (fast === target) {
			cheap.checked = false;
		}



	}
}