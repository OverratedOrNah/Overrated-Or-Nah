var express = require('express');


var app = express();
var http = require('http');
var server = http.createServer(app);

//Node
server.listen(process.env.PORT || 3000, function(){
  console.log('The server is listening on port', server.address().port);
});

//Express
app.use(express.static( __dirname));

var options = {
	root: __dirname,
	headers: {
		'x-timestamp': Date.now(),
		'x-sent': true
	}
};

//Index
app.get('/', function index(req, res){
	res.sendFile('index.html', options);
});