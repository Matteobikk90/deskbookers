$(document).ready(function() {

// Variables

var slider = $('#slider');
var next = $('#btn-next');
var prev = $('#btn-prev');

$('#slider section:last').insertBefore('#slider section:first');

slider.css('margin-left', '-'+100+'%');

// Slide Right

function moveRight() {
	slider.animate({
		marginLeft:'-'+200+'%'
	}, 700, function() {
        $('#slider section:first').insertAfter('#slider section:last');
        slider.css('margin-left', '-'+100+'%');
		});
}

// Slide Left

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

// Autoplay

function autoplay() {
	interval = setInterval(function(){
		moveRight();
	}, 3000);
}

// autoplay();

// Get JSON

$.getJSON("../places.json", function(data) {
    console.log(data);
    });

$.ajax({
        url: "../places.json",
        dataType: "json",
        type: "get",
        cache: false,
        success: function(data) {
            console.log(data);
        $(data.places).each(function(index, value) {
        $("#results").append("<div id='place"+"' class='place'>"+

+"<span>"+value.name+"</span>"
+"<span>"+value.location_name+"</span>"
+"<img alt='"+value.location_name+"' title='"+value.location_name+"' src='"+value.imgage_urls+"'></img>"
+"<span>Day Price: "+value.day_price+"</span><br>"
+"<span>Review count: "+value.review_count+"</span>"
+"</div>");

        });
    }
})


});
