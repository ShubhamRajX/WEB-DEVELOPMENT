//!  First-Class Function - it's just a concept

//? Function declaration
// function sayHello(name) {
//   return "Hello, " + name + "!";
// }
//? Assigning the function to a variable
// var greetFunction = sayHello;

//? Using the variable as a function
// console.log(greetFunction("Thapa"));

//!  Higher-Order Functions:
//!  Callback Functions:

//* Here is the example
//? Callback function
// function processUserInput(name, callBack) {
//   console.log("Received input: " + name);
//   callBack(name);
// }

// ? Function to be used as a callback
// function greetUser(name) {
//   console.log(`Hello! ${name}`);
// }

// processUserInput("Vinod", greetUser);

//!  Closure:

// function multiplier(factor) {
//   return function (number) {
//     console.log(number, factor);
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// console.log(double(5));

//* also one more example
// function outerFunction() {
//   var outerVariable = "I'm from outer";

//   function innerFunction() {
//     console.log(outerVariable);
//   }

//   return innerFunction;
// }

// var closureFunction = outerFunction();
// closureFunction(); // Outputs: "I'm from outer"

//! Write a program to perform mathematical operations using callback functions and two variables in JavaScript.
//? Instructions:
//? Define a higher-order function called mathOperation that takes three arguments: x, y, and operation.
//? Implement two callback functions:
//? add: Takes two numbers x and y and returns their sum.
//? sub: Takes two numbers x and y and returns the result of subtracting x from y.
//? Use the mathOperation function to perform addition and subtraction operations on two variables a and b.
//? Display the results of the operations.

const mathOperation = (x, y, operation) => {
    return operation(x, y,)
};
const sum = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return y - x;
};

console.log(mathOperation(5, 10, sum));
console.log(mathOperation(2, 10, sub));
