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

var updateStatus = function(data){
	console.log(data);
	if(data.manRight != 0 && data.ghostRight != 0){
		$('.leftPosition').html(generateMan(data.manRight));
	}
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