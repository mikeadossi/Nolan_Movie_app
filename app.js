var express = require('express');

var expressApp = express(); //-> 'app' is the typically what's used here

expressApp.set('view engine', 'ejs'); //The 1st step in using ejs templating goodness we specify it as our expressApps view engine

var routes = require('./routes');

var path = require('path');
expressApp.use(express.static(path.join(__dirname, 'public'))); // the path automatically looks in the public directories for all static assets.



// Routes

// home
expressApp.get('/', routes.home);

// movie_single
expressApp.get('/nolan_movies/:movie_number?', routes.movie_single); // we link up our template file here, also see our route index.js file

// notFound
expressApp.get('*', routes.not_found);

expressApp.listen(process.env.PORT || 3000);
