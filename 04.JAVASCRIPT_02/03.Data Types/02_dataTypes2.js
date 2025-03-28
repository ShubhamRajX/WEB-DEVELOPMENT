var myName = "Shubham Raj";

console.log(myName); // Shubham Raj
console.log(typeof myName); // string
console.log(myName.length); // 12

/*
var inBox = null;       // null is an object in JS

console.log(inBox); // null
console.log(typeof inBox); // object
*/

/*
// String to number (add '+' before the string)

var str = "1234";

console.log(typeof str); // string
console.log(typeof +str); // number
console.log(typeof Number(str)); // number
console.log(typeof parseInt(str)); // number
*/

/*
// Number to string (add '' empty string after the number)

let str = 5;

console.log(typeof str); // number
console.log(typeof (str + "")); // string
console.log(typeof String(str)); // string
console.log(typeof str.toString()); // string
*/

/*
// Truthy & Falsy Values

// var input = -5; // falsy value
// var input = 0; // falsy value
// var input = ""; // falsy value
var input = 123; // truthy value
// var input = "Shubham"; // truthy value

if(input){
    console.log("This is a truthy value"); // This is a truthy value
}
else{
    console.log("This is a falsy value"); // This is a falsy value
}
*/