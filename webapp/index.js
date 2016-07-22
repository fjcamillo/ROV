var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var server = require('http').createServer(app);

app.use(express.static(__dirname + '/public'));

server.listen(port, function(){
	console.log('Server Listening at port %d', port);	
});
