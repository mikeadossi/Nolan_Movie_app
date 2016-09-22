// Home
exports.home = function(req, res){ // If the user makes a browser request for the '/' (index) page the server responds with the following:
	res.render('home', {
		title : "Nolan Movies",
		movies: ["The First Movie", "The second movie", "The third movie"]
	});
};

// movie_single
exports.movie_single = function(req, res){
	var movie_number = req.params.movie_number;
	res.send("This is the page for nolan movie " + movie_number);
};

// not_found
exports.not_found =  function(req, res){
	res.send("This is not the page you are looking for")
}