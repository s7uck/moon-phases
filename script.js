var moonImage = document.getElementById("moon");
var directory = "https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874";
var phases = [
	"phase_new.1026_print.jpg",
	"phase_waxing_crescent.0398_print.jpg",
	"phase_first_quarter.5440_print.jpg",
	"phase_waxing_gibbous.4801_print.jpg",
	"phase_full.3492_print.jpg",
	"phase_waning_gibbous.2172_print.jpg",
	"phase_third_quarter.2243_print.jpg",
	"phase_waning_crescent.0903_print.jpg"
];
phases = phases.map(function(filename){
	return directory + "/" + filename;
});

class Moon {
	getMoonPhase() {
		var emojis = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
		var emoji = emojis[0];
		var req = new XMLHttpRequest();
		req.open("GET", "https://wttr.in/?format=%m", false);
		req.send();

		var emoji = req.responseText;
		return emojis.indexOf(emoji);
	}

	constructor() {
		this.phase = this.getMoonPhase();
	}
}

var moon = new Moon();
moonImage.src = phases[moon.phase];

document.getElementById("date").value = new Date().toISOString().split("T")[0];
