var Game = function(){
	var self = this;
	var manRight = 3;
	var manLeft = 0;
	var ghostRight = 3;
	var ghostLeft = 0;

	this.name = new Date().getTime();
	this.getStatus = function(gameID){
		var result = {manRight:manRight,
					  manLeft:manLeft,
					  ghostRight:ghostRight,
					  ghostLeft:ghostLeft
					};
		return result;
	}
}

module.exports = Game;