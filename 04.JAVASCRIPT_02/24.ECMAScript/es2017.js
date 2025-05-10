//!    ECMAScript Features 2017 (ES8) :

//? List of new useful features added in ES8  👇
// String padding
// Object.values()
// Object.entries()
// Trailing commas in function parameter lists and calls
// Async functions

//!  String padding:

//todo  Use Case: Makes formatting text easier and more predictable, especially for tables, alignments, and UI elements. No more messy, uneven lines disrupting your visual spells!

//? Using padStart() to pad from the beginning:
// const companyName = "Kodyfier";
// // const paddedName = companyName.padStart(5);
// const paddedName = companyName.padStart(15);
// console.log(paddedName);
// console.log(paddedName.length);

//? Using padEnd() to pad from the end:
// const paddedName = companyName.padEnd(15);
// const paddedName = companyName.padEnd(15, "$");
// console.log(paddedName);

//!  trailing commas:

// Function parameter list
function greet(name, age, boolean) {
    console.log(`Hello ${name}, you are ${age}years old.`);
  }
   
  // // Function call
  greet("John", 30, true);
   
  // // Array literal
  const colors = ["red", "green", "blue"];
   
  // // Object literal
  // const person = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 30,
  // };
  
  //!  Object.entries() & Object.values():
  
  //!  Async Await - Async Functions: