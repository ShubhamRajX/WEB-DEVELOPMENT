//! EcmaScript 2015 (ES6):

//!  Part 2 of Modern JavaScript:

//!  Object Properties - Modern JavaScript:

// const name = "vinod";
// const age = 30;

//? traditional way
// const person = { name: name, age: age };

//? Using shorthand notation for object property
// const person = { name, age };
// console.log(person);

//!  Destructuring - Modern JavaScript:

//? 1: Extracting specific elements:
const numbers = [10, 20, 30];
// const first = numbers[0]; // Traditional way
// const [first, second, third] = numbers;
// console.log(second);

//? 2: Ignoring elements:
// const [, , third] = numbers;
// console.log(third);

//! Write a program to swap two variables without using 3rd variable?
let a = 10;
let b = 30;
// a=30, b=10
//? Mostly will do using 3rd var
// let c = b; //c=30
// b = a; // b=10
// a = c; //a=30

//? without using 3rd variable
// [a, b] = [b, a];
// console.log(a, b);

//! Destructuring Objects:

const user = { name: "Vinod", age: 30 };
// we will see the real life use of it in our main project of weather app

//? Extracting properties:
// const myName = user.name; // Traditional way
// const { age, name } = user;
// console.log(age, name);

//? Renaming properties:
// const { name: fullName, age } = user; // Rename "name" to "fullName"
// console.log(fullName);

//!  Spread Operator - Modern JavaScrip:

//? 1. Copying an array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// let newFruits = [...fruits];
// console.log(newFruits);

//? 2: Concatenating arrays / Combining arrays
// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [4, 5, 6];
// const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);

//? 3: Adding Elements to existing array
// let fruits = ["Apple", "Orange", "mango", "banana"];
// // fruits.push("guava", "grapes");
// fruits.push(...["guava", "grapes"]);
// console.log(fruits);

//? spread syntax (...):

//? Traditional way
// const country = "INDIA";
// console.log(country.split(""));

// ? New way of doing it
// const country1 = "INDIA";
// console.log([...country1]);

//!  Rest parameters  - Modern JavaScript

//? traditional way of doing it
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };

//? with rest parameters
const sum = (a, b, ...numbers) => {
    //   console.log(typeof numbers);
    return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
  };
  
console.log(sum(1, 2, 3, 4));

//TODO NOTE: A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.
// function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg2, arg3) {}
