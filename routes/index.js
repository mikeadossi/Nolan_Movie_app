var moviesJSON = require('../movies.json');

// Home
exports.home = function(req, res){ // If the user makes a browser request for the '/' (index) page the server responds with the following:

	var movies = moviesJSON.movies;

	res.render('home', {
		title : "Nolan Movies",
		movies: movies
	});
};

// movie_single
exports.movie_single = function(req, res){
	var movie_number = req.params.movie_number; // this route is activated by movie_single code in our app.js file. Note: this route takes in more than one page.
	var movies = moviesJSON.movies;
	var movie = movies[movie_number - 1]; // Here we store in our variable a way for our users grab the exact movie they want. Arrays are zero based so we must account for that with the -1.
	var title = movie.title;
	res.render('movie_single', {
		movies : movies,
		title : title
	});
};

// not_found
exports.not_found =  function(req, res){
	res.send("This is not the page you are looking for")
}
