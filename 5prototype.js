//prototyping helps add methods and properties to objects in class
function Student() {
    this.name = "";
    this.credit = 1000;
    this.credits = function gaveCredits(user2) {
        user2.credit += 1;
        console.log(this.name + " just gave a credit to " + user2.name);
    }
}

var Rutvik = new Student();
var Sahil = new Student();

Rutvik.name = "Rutvik";
Sahil.name = "Sahil";

Rutvik.credits(Sahil);