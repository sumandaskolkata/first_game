var lib = require('./crossRiver.js').lib;
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var initial = lib.initial();
var count=0;
console.log('********************************************************')
var main=function(){
	rl.question('Please give first move: ',function(move1){
		rl.question('Please give second move: ',function(move2){
			var side = (count & 1) ? 'moveToLeft' : 'moveToRight';
			currentstatus = lib[side](move1,move2,initial);
			console.log(currentstatus);
			if(lib.isGameOver(currentstatus) || lib.isPlayerWin(currentstatus)){
				console.log('Game Over');
				rl.close();
				return;
			}
			count++;
			rl.resume(main());
		})
	})
}
main();