var express = require('express');

var expressApp = express(); //-> 'app' is the typically what's used here

// Routes 

// Home
expressApp.get('/', function(req, res){ // If the user makes a browser request for the '/' (index) page the server responds with the following:
	res.send("This is a server response on the home page");
});

expressApp.get('/darkKnight', function(req, res){
	res.send("This is a server response on the DK page");
})

expressApp.listen(3000, function(){
	console.log("The application is running on localhost3000");
})
