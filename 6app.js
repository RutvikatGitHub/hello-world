//Exporting '6modules' will help using only those functions which are deliberately permitted
//Exporting '6modulev2' helps in use of all functions defined within 'module.exports'
var printMovie = require('./6modules');
var printmovies = require('./6modulev2');

printMovie.movie();
printmovies.avatar();
printmovies.transformer();
console.log(printmovies.favMovie);