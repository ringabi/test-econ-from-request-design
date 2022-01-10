$(function(){
	$('#slider').slider({
		range: true,
		min: 3000,
		max: 35000,
		values: ['3000', '23000'],
		slide: function(event, ui) {
			$('#min').val(ui.values[0]);
			$('#max').val(ui.values[1]);
		}
	});
});

$(function(){
	$('#slider-mob').slider({
		range: true,
		min: 3000,
		max: 35000,
		values: ['3000', '23000'],
		slide: function(event, ui) {
			$('#min').val(ui.values[0]);
			$('#max').val(ui.values[1]);
		}
	});
});