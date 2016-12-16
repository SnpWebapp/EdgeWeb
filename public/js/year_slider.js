// Creates the year slider object using noUiSlider

var year_slider  = document.getElementById('year_slider');
var slider_label = document.getElementById('slider_label');
var yearstart    = document.getElementById('yearstart');
var yearend      = document.getElementById('yearend');

// Create the slider object
noUiSlider.create(year_slider, {
	start: [1990, 2017],
	connect: true,
	step: 1,
	range: {
		'min': 1990,
		'max': 2017
	},
	format: wNumb({
		decimals: 0
	})
});

// Initialise default values
updateYears();

// Update the label when the range values change
year_slider.noUiSlider.on('update', updateYears);

// Function that updates the label and input elements when the range changes
function updateYears(values, handle){

	var start = year_slider.noUiSlider.get()[0];
	var end   = year_slider.noUiSlider.get()[1];

	yearstart.setAttribute('value', start);
	yearend.setAttribute('value', end);

	slider_label.innerHTML = 'Date: ' + start + '-' + end;
}
