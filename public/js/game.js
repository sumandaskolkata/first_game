var missionariesTemplate = Handlebars.compile('<img class="missionaries" src="./image/man.svg"></img>');
var cannibalsTemplate = Handlebars.compile('<img class="cannibals" src="./image/ghost.svg"></img>');

var toManHTML = function(man){
	return missionariesTemplate(man);
};

var generateMan = function(num){
	var data = [];
	for(var i=0;i<num;i++){
		data.push(i);
	}
	return data.map(toManHTML).join('\r\n');
}

var toGhostHTML = function(ghost){
	return cannibalsTemplate(ghost);
}

var generateGhost = function(num){
	var data = [];
	for(var i=0;i<num;i++){
		data.push(i);
	}
	return data.map(toGhostHTML).join('\r\n');
}

var updateStatus = function(data){
	$('.forRightMen').html(generateMan(data.manRight));
	$('.forRightGhost').html(generateGhost(data.ghostRight));
	$('.forLeftMen').html(generateMan(data.manLeft));
	$('.forLeftGhost').html(generateGhost(data.ghostLeft));

};

var getStatus = function(){
	$.getJSON('gameStatus',updateStatus);
}
var onPageReady = function () {
	setInterval(function(){
		getStatus();
	},1000);	
};

$(document).ready(onPageReady);