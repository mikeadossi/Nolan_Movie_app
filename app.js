var express = require('express');

var expressApp = express(); //-> 'app' is the typically what's used here

expressApp.set('view engine', 'ejs'); //The 1st step in using ejs templating goodness we specify it as our expressApps view engine 



// Routes 

expressApp.listen(3000, function(){
	console.log("The application is running on localhost3000");
});
