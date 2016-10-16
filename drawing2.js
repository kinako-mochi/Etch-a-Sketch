
var randomColorFunction = 0;

function Colorful() {
	var x = Math.floor(100*Math.random())
	var y = Math.floor(100*Math.random())
	var z = Math.floor(100*Math.random())
	
	return 'rgb('+ x + ','+ y + ',' + z +')';
	
}

function ChangeColor() {
	randomColorFunction = 1;
	
}

function Grayscale() {
	randomColorFunction = 2;
	
}

function Normal() {
	randomColorFunction = 0;
	
}

function Erase() {
	randomColorFunction = 3;
}




$(document).ready(function() {
	
	var howBig = prompt('Hello! Welcome to Etch-a-Sketch! How big would you like your grid? (eg. If you enter 16, it will be 16 x 16)', 'Enter a number between 1 and 40 here');

	var squareSize = (700/(howBig));
	var current = 0;
	
	for (var x = 0; x < howBig; x=x+1) {
		for (var y = 0; y < howBig; y=y+1) {
			$("<div>").addClass("square").appendTo("#container")
	  	}
	
	}
	
	$('.square').css({'height': squareSize-2});
	$('.square').css({'width': squareSize-2});

	
	
	$('.square').mouseenter(function() {
		
		if (randomColorFunction == 0) {
			
			$(this).css('background-color', 'purple')
			$(this).css('opacity', 1)
		}
		if (randomColorFunction == 1) {
			$(this).css('background-color', Colorful())
			$(this).css('opacity', 0.9)
		}
		if (randomColorFunction == 2) {
			if ($(this).css('opacity') >= "0.9") {
				$(this).css('background-color', 'black')
				$(this).css('opacity', 0.2)
			} else {
				$(this).css('opacity', parseFloat($(this).css('opacity')) + parseFloat('0.20'))
				
			}
		}
		if (randomColorFunction == 3) {
				$(this).css('background-color', 'rgb(175, 255, 229)')
				$(this).css('opacity', 1)
			}
	})
	
});

function clearIt() {
	$('.square').each(function(){
			$(this).css('background-color', 'rgb(175, 255, 229)')
			$(this).css('opacity', 1)
})}

