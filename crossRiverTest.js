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

