//Connect is a server framework. All the functionality related to user request are reinforced into this framework
//Handling different requests depending upon the path. Using connect, we will inspect the request; what web page they wanna go to

var http = require('http');
var connect = require('connect');

var app = connect();

function firstFunction(request, response, next) {
    console.log("This is the first function");
    next();
}

function secondFunction(request, response, next) {
    console.log("This is the second function");
    next();
}
function thirdFunction(request, response, next) {
    console.log("This is the second function");
}

app.use(firstFunction);
app.use(secondFunction);
app.use('/third', thirdFunction);

http.createServer(app).listen(8000);
console.log("Listening to server at port 8000 ...");