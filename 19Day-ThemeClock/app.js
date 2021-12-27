const clockEl = document.querySelector('.clock'),
	clockHourEl = document.querySelector('.clock__hour'),
	clockMinutesEl = document.querySelector('.clock__minute'),
	clockSecondsEl = document.querySelector('.clock__second');

const dateWeekEl = document.querySelector('.date__week'),
	dateMonthEl = document.querySelector('.date__month'),
	dateDayEl = document.querySelector('.date__day');

const timeEl = document.querySelector('.time');

const toggleBtn = document.querySelector('.toggle');
const body = document.querySelector('body');

toggleBtn.addEventListener('click', () => {
	if (body.classList.contains('dark')) {
		body.classList.remove('dark');
		toggleBtn.textContent = 'Dark Mode';
	} else {
		body.classList.add('dark');
		toggleBtn.textContent = 'Light Mode';
	}
});


function scale(number, inMin, inMax, outMin, outMax) {
	return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getTime() {
	const time = new Date();
	const month = time.getMonth();
	const week = time.getDay();
	const day = time.getDate();
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const hoursForClock = hours % 12;

	dateMonthEl.textContent = `${months[month]}`;
	dateWeekEl.textContent = `${daysInWeek[week]},`;
	dateDayEl.textContent = `${day}`;
	timeEl.textContent = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}`: seconds}`;

	clockHourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
	clockMinutesEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
	clockSecondsEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
}


getTime();

window.addEventListener('DOMContentLoaded', () => {
	setInterval(getTime, 1000);
});