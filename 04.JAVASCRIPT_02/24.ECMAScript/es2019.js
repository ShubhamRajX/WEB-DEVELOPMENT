//!    ECMAScript Features 2019 (ES10):

//? List of new useful features added in ES8  👇
// Array.prototype.{flat,flatMap}
// Object.fromEntries()
// String.prototype.{trimStart,trimEnd}
// Symbol.prototype.description
// Optional catch binding

//!  Array.flat & Array.flatMap:

//? flat():

// const nestedArray = [1, 2, [3, 4], 5];
// const nestedArray1 = [1, [2, [3, [4]]], 5];

// const flattenedArray = nestedArray.flat();
// const flattenedArray = nestedArray1.flat(2);
// const flattenedArray = nestedArray1.flat(3);
// console.log(flattenedArray);.

//? flatMap():

// const arr = ["My name", "is vinod", "thapa"];
// const newArr = arr.flatMap((curVal) => curVal.split(" "));
// console.log(newArr);

//!  Object.fromEntries():

// const person = { name: "vinod", age: 30 };
// const entries = Object.entries(person);
// // console.log(entries);

// const newPerson = Object.fromEntries(entries);
// console.log(newPerson);

// console.log(person == newPerson);

//! String.prototype.{trimStart,trimEnd}:

//? trimStart():

// console.log("Testing".trimStart());
// console.log("           Testing".trimStart());
// console.log("     Testing     ".trimStart());
// console.log("Testing    ".trimStart());

//? trimEnd():

// console.log("Testing".trimEnd());
// console.log("           Testing".trimEnd());
// console.log("     Testing     ".trimEnd());
// console.log("Testing    ".trimEnd());

//! Symbol.prototype.description:

// const mySymbol = Symbol("This is my symbol");
// console.log(typeof mySymbol);
// console.log(mySymbol.description);

//!  Optional catch binding:

// try {
//     //...
// } catch (e) {
//     //handle error
// }

try {
    10 + 5;
} catch {
  console.log("there is an error");
}