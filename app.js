var express = require('express');

var expressApp = express(); //-> 'app' is the typically what's used here

expressApp.set('view engine', 'ejs'); //The 1st step in using ejs templating goodness we specify it as our expressApps view engine 



// Routes 

// Home
expressApp.get('/', function(req, res){ // If the user makes a browser request for the '/' (index) page the server responds with the following:
	res.render('home', {
		title : "Nolan Movies",
		movies: ["The First Movie", "The second movie", "The third movie"]
	});
});

//Below we learn how to pass 'variables' to the end of our url to request specific pages from our server and have the info returned changed dynamically. The colon on line 13 signifies a dynamic variable follows!
expressApp.get('/nolan_movie/:movie_number?', function(req, res){
	var movie_number = req.params.movie_number;
	res.send("This is the page for nolan movie " + movie_number);
});

// Below we create a not found page. We only plan on including 14 Nolan movies, so if our variable movie_number would have to return a 404 page if any number over 14 were entered into the url bar.
expressApp.get('*', function(req, res){
	res.send("This is not the page you are looking for")
})

expressApp.listen(3000, function(){
	console.log("The application is running on localhost3000");
});
