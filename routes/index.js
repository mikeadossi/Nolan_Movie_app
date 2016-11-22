var moviesJSON = require('../movies.json');

// Home
exports.home = function(req, res){ // If the user makes a browser request for the '/' (index) page the server responds with the following:

		var movies = moviesJSON.movies;

		res.render('home', {
			title: "Nolan Movies",
			movies : movies
		});
	};

	// movie_single
	exports.movie_single = function(req, res){
		var movie_number = req.params.movie_number; // this route is activated by movie_single code in our app.js file. Note: this route takes in more than one page.
		var movies = moviesJSON.movies;
	// only render the movie_single template for episodes that exist
	if (movie_number >= 1 && movie_number <= 14){
		var movie = movies[movie_number - 1];
		var title = movie.title;
		var starring_actors = movie.starring_actors;
		var year_of_release = movie.year_of_release;
		var hero_image = movie.hero_image;

		res.render('movie_single', {
			movie : movie,
			title : title,
			movies: movies,
			movie_number : movie_number,
			year_of_release : year_of_release,
			starring_actors : starring_actors,
			hero_image : hero_image
		});
	} else {
			res.render('notFound', {
					movies : movies,
					title : "Oops, this page doesn't exist"
			})
	}
};


// not_found
exports.not_found =  function(req, res){
	res.send("This is not the page you are looking for")
}
