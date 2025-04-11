let arr = [];
// console.log(typeof(arr)); // object

let arr1 = "";
// console.log(typeof(arr1)); // string

let arr2 = {};
// console.log(typeof(arr2)); // object

//! Creating an array
//? using array constructor

// let fruits = new Array("apple", "banana", "orange");
// console.log(fruits); // [ 'apple', 'banana', 'orange' ]
// console.log(typeof(fruits)); // object

//? using array literal

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits); // [ 'apple', 'banana', 'orange' ]
// console.log(typeof(fruits)); // object

//? using array literal with empty array
// let fruits = [];
// console.log(fruits); // []
// console.log(typeof(fruits)); // object
// console.log(fruits.length); // 0



let fruits = ["Apple", "Banana", "Orange","Mango", "Grapes"];

//? Accessing array elements

console.log(fruits[1]); // Banana
console.log(fruits[0]); // Apple

//? Modifying Array Elements

fruits[1] = "Pineapple"; // changing the value of index 1
console.log(fruits);


