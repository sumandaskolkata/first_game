var express = require('express');
var Game = require('../lib/game');

var loadUser = function(req, res, next){
	req.game = new Game();
	next();
};

var getGameStatus = function(req, res){
	res.send(JSON.stringify(req.game.getStatus(req.game.name)));
};

var app = express();
app.use(loadUser);


app.get('/',function(req, res){
	res.redirect('welcome.html');
});

app.get('/game.html');
app.use('/gameStatus',getGameStatus);

app.use(express.static('./public'));

module.exports = app;
