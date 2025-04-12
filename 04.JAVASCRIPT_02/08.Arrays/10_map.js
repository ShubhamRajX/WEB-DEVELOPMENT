//? Map(), Filter(), Reduce(),

//! Using map to square each number and create a new array.

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((curElem) => curElem * curElem);
// console.log(result); // [1, 4, 9, 16, 25]


//! Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.

// const words = ["apple", "banana", "cherry", "date"];

// const result = words.map((CurElem) => {
//     return CurElem.toUpperCase();
// });
// console.log(result); // ["APPLE", "BANANA", "CHERRY", "DATE"]

//! lower case

// const word = ["APPLE", "BANANA", "CHERRY", "DATE"];

// const result1 = word.map((curElem) => {
//     return curElem.toLowerCase();
// });
// console.log(result1); // ["apple", "banana", "cherry", "date"]  


//! Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.map((curElem) =>  {
//     if(curElem % 2 === 0){
//         return curElem * curElem;
//     }
// })
// .filter((curElem) => curElem !== undefined );

// console.log(result); // [4, 16]

// const evenSquare = numbers
//   .map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined))
//   .filter((curElem) => curElem !== undefined);

// console.log(evenSquare); // [4, 16]


//! Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".

const names = ["ram", "vinod", "laxman"];
const prefixName = names.map((curName) => `Mr. ${curName}`);
console.log(prefixName); // ["Mr. ram", "Mr. vinod", "Mr. laxman"]