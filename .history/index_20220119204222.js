function makeFunc() {
    var name = "Mozilla"; //local to makeFunc
    function displayName() {
    console.log(name);
    }
    return displayName;
   }
   var myFunc = makeFunc();
   myFunc(); 

console.log(">.....................>");

var x = 9;
function myFunction() {
    console.log('tying', x);
    if (true) {
        var x = 7
        console.log('trying', x);
    }
}

myFunction();



function bar() {
    var foo;
    console.log(foo);
    if (!foo) {
        foo = 10;
    }
console.log(foo);
    }
bar();

console.log("****************************");

function f() {
    var a = 1, b = 20, c;
    console.log(a + " " + b + " " + c); // 1 20 undefined
    // declares g (but doesn't call immediately!)
    function g() {
            b = 300, c = 4000;
            console.log(a + " " + b + " " + c); // 1 300 4000
            a = a + b + c;
            console.log(a + " " + b + " " + c); // 4301 300 4000
    }
    console.log(a + " " + b + " " + c); // 1 20 undefined
    g();
    console.log(a + " " + b + " " + c); // 4301 20 undefined
   } 
f();


var emp = (function () {
    var name = "";
    var age = 0;
    var salary = 0;

    var setName = function (newName) {
        name = newName;
    };

    var setSalary = function (newSalary) {
        salary = newSalary;
    };

    var getAge = function () {
        return age;
    };

    var getSlary = function () {
        return salary;
    };

    var getName = function () {
        return name;
    };

    var increaseSalary = function (percentage) {
        return getSlary() + (getSlary() * (percentage/100));
    };

    var increamentAge = function () {
        return getAge()++;
    }

    return {
        setAge: function (newAge) {
            age = newAge;
        },
        setName:
        
    };
})();
