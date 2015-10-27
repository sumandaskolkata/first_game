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

var initial = lib.initial();
console.log('The initial status is : \n',initial);
var count=0;



var leftToRight1 = "Please give first move, From left To Right: ";
var leftToRight2 = "Please give second move, From left To Right(optional): ";
var rightToLeft1 = "Please give first move, From  Right To left: ";
var rightToLeft2 = "Please give second move, From  Right To left(optional): ";



var main=function(){
	rl.question(count ? rightToLeft1 : leftToRight1,function(move1){
		rl.question(count ? rightToLeft2 : leftToRight2,function(move2){
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
				count = 1 - count;
			}
			rl.resume(main());
		})
	})
};
main();
