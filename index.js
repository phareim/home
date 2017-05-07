var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send("<div style='margin-top: 3em; color:#888888; min-width: 200px; max-width:800px; margin-left: auto; margin-right:auto'><h1>Godt å se deg, kompis!</h1></div>");
});

app.listen(80, function(){
	console.log('homepage running on port 80');
});
