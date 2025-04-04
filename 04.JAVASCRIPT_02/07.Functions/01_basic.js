//? Syntax
// function functionName(parameters){
//     // code to be executed
//     return result; // optional
// }


//! 3 students at a same time wants to find the sum of two numbers
//* lets make a reusable code.

// function sum(a, b){
//     return a+b;
// }
// console.log(sum(2 , 65));
// console.log(sum(8, 87));
// console.log(sum(2, 5));


//? Function Declaration:

// function greet() {
//   console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
// }

//? Function Invocation (Calling a Function):

// greet(); // Calling the function

//? Function Parameter:

//function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }

//? Function Argument:

// functionName(argument1, argument2, ...);

//? Function expressions:

// var result = function sum(a, b) {
//   console.log(a + b);
// };
// result(2, 5); // 7

//?  Anonymous Functions:

// var result = function (a, b) {
//   console.log(a + b);
// };

// result(10, 15); // 25

//?  Return Keyword:

// Syntax
// return expression;

//? IIFE - immediately invoked function expression

// (function () {
//   // code to be executed
// })();

// var result = (function (a, b) {
//   console.log(a + b);
//   return a + b;
// })(5, 10);

// console.log("the sum of two number is " + result);
// // 15

//? Arrow Function:
//? Syntax

// const functionName = (para1, para2, ...) => {
//     // function body
//     return result; // optional
// };

// const add = (a, b) => {
//     return a + b;
// }
// console.log(add(2, 5)); // 7


//? Template Strings:

// let firstName = "Shubham";
// let lastName = "Raj";

// // let fullName = firstName + lastName;
// let fullName = `${firstName} ${lastName}`; // Template String
// console.log(fullName); // ShubhamRaj


//? String interpolation:

// let age = 23;
// let message = ` i am ${age} years old.`;
// console.log(message);

//? Multiline String:

// let multiLine =`
//     Hello Guys,
//     Welcome to Thapa Technical JS Course
//     I am Shubham Raj
// `;
// console.log(multiLine);

//? Expression Evaluation:

// let num = 5;
// // let result =  `The square of ${num} is ${num * num}`;

// let result = ("5 * " + num + " = " + (5*num)) // 5 * 5 = 25
// // let result = `The square of ${num} is ${num * num}`;
// //  // Template String
// console.log(result); // The square of 5 is 25


//? Defalut Parameters:

// function sum (a, b = 9){
//     return a + b;
// }
// console.log(sum(2, 5)); // 7

// console.log(sum(2)); // 11

// function sum (a = 34, b = 32){
//     return a + b;
// }
// console.log(sum(2, 5)); // 7
// console.log(sum(2)); // 34
// console.log(sum()); // 66


//?Fat Arrow Function:
//? Syntax:

// const functionName = (para1,para2,...) => {
//     // function body
//     return result; // optional
// };

// const sum = (a , b) => {
//     console.log(a + b);
// }
// sum(2, 5); // 7

// const sum = (a, b) => a + b; // single line function
// console.log(sum(2, 5)); // 7

// const sum = (a, b) => console.log(a + b); // single line function
// sum(445,324); // 769


// const square = (a) => a * a; // single line function
// console.log(square(5)); // 25

// const square = a => a * a; // single line function
// console.log(square(5)); // 25

// const name = () => "Shubham Raj"; // single line function
// console.log(name()); // Shubham Raj