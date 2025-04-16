//! Extracting String Parts:

//? String.prototype.substr() it is deprecated  ❌

//!  Slice()

//* syntax
//* slice(start, end);

// Todo  JavaScript counts positions from zero.
//? First position is 0. Second position is 1.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.slice(6);
// let result = text.slice(6, 15);
// console.log(result);


//!  Substring()
//* substring()  not  subString()

//* syntax
//* substring(indexStart) // index starts with 0
//* substring(indexStart, indexEnd)

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.slice(6);
// let result = text.slice(-6);
// console.log(result);


//! Homework
// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.substring(0);
// let result = text.substring(1);
// let result = text.substring(-5);
// console.log(result);

//! Interview Question
let text = "Hello JavaScript, welcome to our world best JavaScript course";

// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);
//? Optional
// let result = text.replace("JavaScript", "Vinod");
let result = text.replaceAll("JavaScript", "Vinod");

console.log(result);

