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

x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
console.log(x);
console.log(a);
var f = function(a, b, c) {
b = a;
document.write(b);
b = c;
var x = 5;
}
f(a,b,c);
document.write(b);
var x = 10;
 }
c(8,9,10);
document.write(b);
document.write(x);
}