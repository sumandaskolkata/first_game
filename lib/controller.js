var express = require('express');

var app = express();

app.get('/',function(req, res){
	res.redirect('welcome.html');
});

app.post('/login')

app.use(express.static('./public'));

module.exports = app;
