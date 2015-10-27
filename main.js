var lib = require('./crossRiver.js').lib;
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var initial = lib.initial();
var instruction = ["Instruction to Play:",
				  "Please Help the 3 child and 3 ghost to move to the other side of the lake.",
				  "notice that: when there is on one side more ghost then child, the game is over.\n"].join('\n')
console.log(instruction);
console.log('The initial status is : \n',initial);
var count=0;


var main=function(){
	rl.question('Please give first move: ',function(move1){
		rl.question('Please give second move: ',function(move2){
			if(!move1 && !move2)
				console.log('\tPlease give a valid input');
			else{
				var side = lib.chooseSide(count);
				currentstatus = lib[side](move1,move2,initial);
				console.log(currentstatus);
				if(lib.isGameOver(currentstatus) || lib.isPlayerWin(currentstatus)){
					rl.close();
					return;
				}
				count++;
			}
			rl.resume(main());
		})
	})
};
main();
