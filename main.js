var lib = require('./crossRiver.js').lib;
var readline = require('readline');

var instruction = process.argv[2]
if(instruction){
	console.log(lib.instruction())
};

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var currentstatus = lib.initial();
console.log('The initial status is : \n',currentstatus);
var count=0;

var leftToRight1 = "Please give first move, from left To right: ";
var leftToRight2 = "Please give second move, from left To right (optional): ";
var rightToLeft1 = "Please give first move, from  right To left: ";
var rightToLeft2 = "Please give second move, from  right To left (optional): ";

var main=function(){
	rl.question(count ? rightToLeft1 : leftToRight1,function(move1){
		rl.question(count ? rightToLeft2 : leftToRight2,function(move2){
			move1=move1.trim().toLowerCase();
			move2=move2.trim().toLowerCase();

			var side = lib.chooseSide(count);
			var bank = (lib.chooseSide(1-count)).split('moveTo')[1].toLowerCase();
			if(lib.isCurrentMoveInvalid(move1,move2,currentstatus,bank))
				console.log('\tPlease give a valid input');
			else{
				currentstatus = lib[side](move1,move2,currentstatus);
				console.log(currentstatus);
				if(lib.isGameOver(currentstatus) || lib.isPlayerWin(currentstatus)){
					rl.close();
					return;
				}
				count = 1 - count;
			}
			rl.resume(main());
		})
	})
};
main();
