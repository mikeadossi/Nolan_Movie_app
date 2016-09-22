var express = require('express');

var expressApp = express(); //-> 'app' is the typically what's used here

// Routes 

// Home
expressApp.get('/', function(req, res){ // If the user makes a browser request for the '/' (index) page the server responds with the following:
	res.send("This is a server response on the home page");
});

//Below we learn how to pass 'variables' to the end of our url to request specific pages from our server and have the info returned changed dynamically. The colon on line 13 signifies a dynamic variable follows!
expressApp.get('/nolan_movie/:movie_number?', function(req, res){
	var movie_number = req.params.movie_number;
	res.send("This is the page for nolan movie " + movie_number);
});

expressApp.listen(3000, function(){
	console.log("The application is running on localhost3000");
});
