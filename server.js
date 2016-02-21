var http = require('http');
var controller = require('./lib/controller');
http.createServer(controller).listen(8000);
console.log('river crossing server is running at port 8000...');
