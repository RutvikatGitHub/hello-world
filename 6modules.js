//The nodeJS declared module.exports by default, but with no entries in it.
//In this demo we ourselves are declaring the modules to export.

var printAvatar = function () {
    console.log("The Avatar movie was directed by James Cameron");
}

var printTransformers = function () {
    console.log("The Transformers series was directed by Machael Bay");
}

//Use the exports keyword to make properties and methods available outside the module file.
module.exports.movie = printAvatar;