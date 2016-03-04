var assert = require('chai').assert;
var request = require('supertest');
var handler = require('../lib/controller');
var game = handler.game;

describe('controller',function(){
	describe('/',function(){
		it('should redirect to login',function(done){
			request(handler)
				.get('/')
				.expect(302)
				.expect('Location','welcome.html',done);
		})
	})
	describe('/welcome',function(){
		it('should redirect to game.html if start pressed',function(done){
			request(handler)
				.post('/welcome')
				.expect(302)
				.expect('Location','game.html',done);
		});
	});
	describe('/gameStatus',function(){
		it('should keep player in game.html',function(done){
			request(handler)
				.get('/gameStatus')
				.expect('Location','game.html')
				.expect(200)
				done();
		});
	});
});
