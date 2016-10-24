$(document).ready(function() {

var slider = $('#slider');
var next = $('#btn-next');
var prev = $('#btn-prev');

$('#slider section:last').insertBefore('#slider section:first');

slider.css('margin-left', '-'+100+'%');

function moveRight() {
	slider.animate({
		marginLeft:'-'+200+'%'
	}, 700, function() {
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left', '-'+100+'%');
		});
}

function moveLeft() {
	slider.animate({
		marginLeft:0
	}, 700, function() {
        $('#slider section:last').insertBefore('#slider section:first');
        slider.css('margin-left', '-'+100+'%');
		});
}

prev.on('click', function(){
	moveLeft();
	console.log('prev');
});


next.on('click', function(){
	console.log('next');
	moveRight();
});


});





