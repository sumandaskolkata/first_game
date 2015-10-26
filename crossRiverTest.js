var lib = require('./crossRiver.js').lib;
var chai = require('chai');
var assert = chai.assert;

var test = {};
exports.test = test;

test["moveRight moves the selected items from left to right for two item selected"] = function(){
	var actual = lib.moveToRight('child','ghost');

	assert.deepEqual(2,actual.left.child);
	assert.deepEqual(2,actual.left.ghost)
	assert.deepEqual(1,actual.right.child)
	assert.deepEqual(1,actual.right.ghost)
};

test["moveRight moves the selected items from left to right for one item selected"] = function(){
	var actual = lib.moveToRight('child');

	assert.deepEqual(2,actual.left.child);
	assert.deepEqual(3,actual.left.ghost)
	assert.deepEqual(1,actual.right.child)
	assert.deepEqual(0,actual.right.ghost)

};

test['isGameOver check wheather currentStatus has more ghost than child in any side'] = function(){
	var currentStatus={left:{ghost:2,child:1},right:{ghost:1,child:2}};
	assert.ok(lib.isGameOver(currentStatus));
	var currentStatus={left:{ghost:1,child:2},right:{ghost:2,child:1}};
	assert.ok(lib.isGameOver(currentStatus));
<<<<<<< HEAD
}
=======
}
>>>>>>> 33387f29f1a19f2b5b0f694b0baed67681a2f267
