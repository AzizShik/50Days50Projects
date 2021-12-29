const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function dragStart() {
	fill.classList.add('hold');
	fill.parentElement.classList.add('hold');
}

function dragEnd() {
	this.className = 'fill';
	this.parentNode.classList.remove('hovered');
}

function dragOver(e) {
	e.preventDefault();
	this.classList.add('hovered');
}

function dragEnter(e) {
	e.preventDefault();
	this.classList.remove('hovered');
}

function dragLeave() {
	console.log('Leave');
	this.classList.remove('hovered');
}

function dragDrop() {
	this.append(fill);
}