var moviesJSON = require('../movies.json');

// Home
exports.home = function(req, res){ // If the user makes a browser request for the '/' (index) page the server responds with the following:

	var moviesJ = moviesJSON.movies;

	res.render('home', {
		title : "Nolan Movies",
		movies: moviesJ
	});
};

// movie_single
exports.movie_single = function(req, res){
	var episode_number = req.params.episode_number;
	var movie_number = moviesJSON.movies;
	res.render("movie_single", {
		movies : movies
	});
};

// not_found
exports.not_found =  function(req, res){
	res.send("This is not the page you are looking for")
}
