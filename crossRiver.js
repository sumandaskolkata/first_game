var lib = {};
exports.lib = lib;

lib.initial = function(){
	return {left: {child:3,ghost:3},right: {child:0,ghost:0}};
};

lib.moveToRight = function(move1,move2,initial){
	if(!move1 && !move2){
		return "select correct name to move";
	}
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
	if(!move1 && !move2){
		console.log("select correct name to move")
		return;
	}
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
