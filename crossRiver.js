var lib = {};
exports.lib = lib;

lib.initial = function(){
	return {left: {child:3,ghost:3},right: {child:0,ghost:0}};
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
	return (count & 1) ? 'moveToLeft' : 'moveToRight';
}