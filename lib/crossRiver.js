var lib = {};
exports.lib = lib;

lib.initial = function(){
	return {left: {child:3,ghost:3},right: {child:0,ghost:0}};
};

lib.instruction = function(){
	return ["Instruction to Play:",
			"Please Help the 3 child and 3 ghost to move to the other side of the lake.",
		  	"notice that: when there is on one side more ghost then child, the game is over.\n"].join('\n')
};

lib.moveToRight = function(move1,move2,initial){
	if(move2){
		initial.left[move1]--;
		initial.left[move2]--;
		initial.right[move1]++;
		initial.right[move2]++;
	}
	else{
		initial.left[move1]--;
		initial.right[move1]++;
	}
	return initial;
};

lib.moveToLeft = function(move1,move2,initial){
	if(move2){
		initial.left[move1]++;
		initial.left[move2]++;
		initial.right[move1]--;
		initial.right[move2]--;
	}
	else{
		initial.left[move1]++;
		initial.right[move1]--;
	}
	return initial;
};
var checkNoOfGhostAndChild=function(child,ghost){
	return (child<ghost) && child!=0;
}

lib.isGameOver=function(currentStatus){
	if((checkNoOfGhostAndChild(currentStatus.left.child,currentStatus.left.ghost)) || 
		checkNoOfGhostAndChild(currentStatus.right.child,currentStatus.right.ghost)){
			console.log('Game Over');
			return true;
		}
	return false;
};

lib.isPlayerWin=function(currentStatus){
	if((currentStatus.right.child + currentStatus.right.ghost == 6)){
			console.log('The player is win');
			return true;
		}
	return false;
};

lib.chooseSide=function(count){
	return (count == 1) ? 'moveToLeft' : 'moveToRight';
};

var isBothMoveAreSame=function(move1,move2,currentstatus,bank){
	return (move1==move2 && currentstatus[bank][move1]<=1)
};

var isCurrentValueEqualToZero=function(currentstatus,bank,move){
	return currentstatus[bank][move]==0;
};

lib.isCurrentMoveInvalid=function(move1,move2,currentstatus,bank){
	return ((!move1 && !move2) || isBothMoveAreSame(move1,move2,currentstatus,bank))||
				isCurrentValueEqualToZero(currentstatus,bank,move1) ||
					 isCurrentValueEqualToZero(currentstatus,bank,move2);
};
