//Custom modules use ./ whereas core module won't

//Including a filesystem code module
var fs = require("fs");
var path = require("path");

//Generating a text file in the local path
fs.writeFileSync("output.txt", "This is the output file generated through writeFileSync function");
//Printing the file contents on the console
console.log(fs.readFileSync("output.txt").toString());

var filePath = "E:\\1\\CMPE 273\\00-Introduction.pdf";
//Printing normalized form of path, directory name, base name, extension name, current directory and filename
console.log(path.normalize(filePath));
console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(__dirname);
console.log(__filename);

//setInterval executes continuously at the defined interval whereas setTimeOut executes only once
setInterval(
    function () {
    console.log("Set interval demo")
    }, 2000);