var slider = document.getElementById('year_slider');

noUiSlider.create(slider, {
	start: [1990, 2017],
	connect: true,
	step: 1,
//	tooltips: [true, wNumb({ decimals: 0 })],
	tooltips: [true, true],
	range: {
		'min': 1990,
		'max': 2017
	},
	format: wNumb({
		decimals: 0
	})
});
