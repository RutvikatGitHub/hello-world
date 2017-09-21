var object1 = {
    //default function declaration is : function function_name(parameters)
    //here no need of function_name | direct declaration along with definition
    function1 : function () {
        console.log("I am in function 1");
        console.log(this == object1);
    }
}

object1.function1();

//The default calling context is global
function function2() {
    console.log("I am in function 2");
    console.log(this == object1);
    console.log(this == global);
}

function2();