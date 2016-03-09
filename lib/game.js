var Game = function(){
	var self = this;
	var manRight = 2;
	var manLeft = 2;
	var ghostRight = 2;
	var ghostLeft = 2;

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