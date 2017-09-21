//Use the variable name same as the module name to avoid confusions
var http = require('http');

//Actually two requests are made : normal request and favicon.ico
function serviceRequest(request, response) {
    console.log("The request made was " + request.url);
    response.writeHead(200, {"Context-Type" : "text/plain"});
    response.write("This is the response from server !");
    response.end();
}

//passing a callback function for the service
http.createServer(serviceRequest).listen(8888);
console.log("The server is running on port 8888 ...");