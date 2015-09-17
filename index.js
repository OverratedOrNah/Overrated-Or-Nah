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
	res.redirect('index.html');
});

app.get('/app.html', function index(req, res){
	res.redirect('app.html');
});

app.get('/rankings.html', function index(req, res){
	res.redirect('rankings.html');
});

app.get('/about.html', function index(req, res){
	res.redirect('about.html');
});

app.get('/partners.html', function index(req, res){
	res.redirect('partners.html');
});

app.get('/contact.html', function index(req, res){
	res.redirect('contact.html');
});
