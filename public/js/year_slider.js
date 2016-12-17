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
if (yearstart.getAttribute('value') == null) {
	yearstart.setAttribute('value', year_slider.noUiSlider.get()[0]);
	yearend.setAttribute('value', year_slider.noUiSlider.get()[1]);
} else {
	year_slider.noUiSlider.set([yearstart.getAttribute('value'), yearend.getAttribute('value')]);
}

// Update the label when the range values change
year_slider.noUiSlider.on('update', function (values, handle) {
	var year_range = year_slider.noUiSlider.get();
	yearstart.setAttribute('value', year_range[0]);
	yearend.setAttribute('value', year_range[1]);
	slider_label.innerHTML = 'Date: ' + year_range[0] + '-' + year_range[1];
})
