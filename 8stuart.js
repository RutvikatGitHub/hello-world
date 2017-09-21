var stuart = require('./8objectfactory');

var stuartMovie = stuart();
stuartMovie.favMovie = "Despicable Me";
console.log("Stuart's favorite movie is " + stuartMovie.favMovie);