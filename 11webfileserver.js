var http = require('http');
var fs = require('fs');

//a response for webpage not available
function webpageNotAvailable(response) {
    response.writeHead(404, {"Content-Type" : "text/page"});
    response.write("Error 404! Webpage not available");
    response.end();
}

//a response given from the web server
function requestWebpage(request, response) {
    if(request.method == "GET" && request.url == "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./home.html").pipe(response);
    }
    else {
        webpageNotAvailable(response);
    }
}

//requestWebpage is a callback function
http.createServer(requestWebpage).listen(8000);
console.log("The server is listening at port 8000 ...");