var lib = require('./crossRiver.js').lib;
var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

var initial = lib.initial();
var side = process.argv[2];
var move1 = process.argv[3];
var move2 = process.argv[4];

var a = lib[side](move1,move2,initial)
console.log(a)