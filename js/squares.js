var numBoxes = 16;

$(document).ready(function() {
  
	placeGrid();
	hoverEffect();
	reset();
	resize();
	toggleGrid();
});

function placeGrid() {
	
	//$('.grid_square').css({'background': 'white'});
  	for(var i = 0; i < Math.pow(numBoxes, 2); i++) {
  		$('#wrapper').append('<div class="grid_square"></div>');
  	}
  	setSize();
}

function setSize() {

 	var size = $('#wrapper').height();
  	var box_size = (size/numBoxes);
 
  	$('.grid_square').css({'height': box_size, 'width': box_size});
  	
}

function hoverEffect() {

	/**$('.grid_square').hover(function() {
		$(this).css({'background': "blue"});
	}, function() {
		$(this).css({'background': "red"});
	});**/

	$('.grid_square').hover(

		function() {
			var col = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
			$(this).css({'background': col});
			$(this).fadeTo('fast', 1.00);
		}, function() {
			$(this).fadeTo('fast', 0.10);
	}); 
}

function reset() {

	$('#reset').on("click", function() {
		$('.grid_square').css({"background": "white"});
	});
}

function resize() {
	
	$('#resize').click(function () {
		$('.grid_square').remove();
		numBoxes = prompt("How big should the box area be? That is, how many boxes in one row?", numBoxes);
		placeGrid();
		hoverEffect();
	});
}


