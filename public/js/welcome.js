var redirectToGame = function(){
	window.location.assign("game.html");
};

var onPageReady = function () {
	$('.play').click(redirectToGame);
};

$(document).ready(onPageReady);