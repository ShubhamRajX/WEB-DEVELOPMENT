//? call, apply, and bind are methods available in JavaScript for managing the this value of a function.
//? all 3 methods are only used in function not in object

//! call:
//? Syntax: function.call(thisArg, arg1, arg2, ...)

// function greet(message) {
//   console.log(`${message}, ${this.name}!`);
// }

// const person = {
//   name: "John",
// };

// greet.call(person, "hello");

//! apply:
//? Syntax: function.apply(thisArg, [arg1, arg2])

// function greet(message) {
//   console.log(`${message}, ${this.name}!`);
// }

// const person = { name: "John" };

// greet.apply(person, ["hello"]);

//todo In modern JavaScript, with the introduction of the spread operator (...), the need for apply has diminished, and you can often achieve the same result with call and the spread operator.

// function greet(message, punctuation) {
//   console.log(`${message}, ${this.name}${punctuation}`);
// }

// const person = { name: "John" };
// const argsArray = ["Hello", "!"];

// // Using apply
// greet.apply(person, argsArray);
// // Output: Hello, John!

// // Using call and spread operator
// greet.call(person, ...argsArray);
// // Output: Hello, John!

//! bind:
//? Syntax: function.bind(thisArg, arg1, arg2, ...)

// const bioData = {
//     name: "Thapa Technical",
//     age: 30,
//     gender: "Male",
  
//     greet: function () {
//       console.log(
//         `Hi, I'm ${this.name}. I'm ${this.age} years old, and I identify as ${this.gender}.`
//       );
//     },
//   };
// // Example usage:
// // bioData.greet();
// bioData.greet.call(bioData);


// let student = { name: "vinod", age: "29", gender: "male" };

// bioData.greet.call(student);

// bioData.greet.apply(student);

// student = bioData.greet.bind(student);
// student();

//? more example
function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  const person = { name: "vinod" };
  
  greet.call(person, "Hello");
  greet.apply(person, ["Hey"]);
  
  const anotherWay = greet.bind(person, "hello");
  anotherWay();