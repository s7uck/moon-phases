const moon = document.getElementById('moon');
const timestamp = document.getElementById('timestamp');
const imgIndex = `https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874`;
let phases = [
	'phase_new.1026_print.jpg',
	'phase_waxing_crescent.0398_print.jpg',
	'phase_first_quarter.5440_print.jpg',
	'phase_waxing_gibbous.4801_print.jpg',
	'phase_full.3492_print.jpg',
	'phase_waning_gibbous.2172_print.jpg',
	'phase_third_quarter.2243_print.jpg',
	'phase_waning_crescent.0903_print.jpg'
];

phases.forEach(
	filename =>
	phases[phases.indexOf(filename)] = `${imgIndex}/${filename}`
);

class Moon {
	phase;

	async getMoonPhase() {
		let wttrMap = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
		let emoji = await fetch('https://wttr.in/moon?format=%m')
		.then( response => response.text() );
		return wttrMap.indexOf(emoji);
	}

	constructor(phase = undefined) {
		this.phase = phase ?? this.getMoonPhase();
	}
}

let currentMoon = new Moon();

(async function() {
	moon.src = phases[await currentMoon.phase];
})()

timestamp.innerText = new Date().toDateString()
