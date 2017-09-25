var Student = {
    first_name: "Rutvik",
    last_name: "Pensionwar",
    age: 24,
    address: "San Jose"
};
console.log(Student);

function addition(a, b) {
    return a + b;
}
console.log(addition(10, 20));

function worthless() {}
console.log(worthless());

//Using anonymous functions and timeOut
var sample = function() {
    console.log("I am anonymous");
};
sample();
setTimeout(sample, 5000);
