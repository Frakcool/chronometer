//HTML elements for display
const hoursHTML = document.getElementById('hours');
const minutesHTML = document.getElementById('minutes');
const secondsHTML = document.getElementById('seconds');
const hundredthsHTML = document.getElementById('hundredths');

//Get buttons
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

//Main variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let hundredths = 0;

let time = '';

//Our chronometer object
let chronometer = {
	//This method counts all the units of time
	count () {
		if(hundredths < 99) {
			hundredths++;
			hundredths = ((hundredths < 10) ? '0' : '') + hundredths;
			hundredthsHTML.innerHTML = hundredths;
		}

		if (hundredths == 99) {
			hundredths = -1;
		}

		if (hundredths == 0) {
			seconds++;
			seconds = ((seconds < 10) ? '0' : '') + seconds;
			secondsHTML.innerHTML = seconds;
		}

		if (seconds == 59) {
			seconds = -1;
		}

		if ((hundredths == 0) && (seconds == 0)) {
			minutes++;
			minutes = ((minutes < 10) ? '0' : '') + minutes;
			minutesHTML.innerHTML = minutes;
		}

		if (minutes == 59) {
			minutes = -1;
		}

		if ((hundredths == 0) && (seconds == 0) && (minutes == 0)) {
			horas ++;
			hours = ((hours < 10) ? '0' : '') + hours;
			hoursHTML.innerHTML = hours;
		}
	},
	init () {
		time = setInterval(this.count, 10);
	},
	stop () {
		const stop = clearInterval(time);
	},
	resume () {
		const reset = clearInterval(time);

		hours = 0;
		hoursHTML.innerHTML = '00';

		minutes = 0;
		minutesHTML.innerHTML = '00';

		seconds = 0;
		secondsHTML.innerHTML = '00';

		hundredths = 0;
		hundredthsHTML.innerHTML = '00';
	}
}

startButton.onclick = () => {
	chronometer.init();
}

stopButton.onclick = () => {
	chronometer.stop();
}

resetButton.onclick = () => {
	chronometer.resume();
}