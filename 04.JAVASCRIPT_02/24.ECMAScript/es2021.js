//!    ECMAScript Features (2021) / ES12:

//? List of new useful features added in ES8  👇
// String.prototype.replaceAll()
// Logical Assignment Operators (||=, &&=, ??=)
// Numeric Separators
// Promise.any()

//!  String.prototype.replaceAll():

//? Replacing all occurrences of a word:
// const originalString = "Hello, world! Hello again.";
// const newString = originalString.replaceAll("Hello", "Hi");
// console.log(newString);

//? Replacing multiple spaces with a single space:
// const text = "This   has   extra       spaces.";
// const normalizedText = text.replaceAll(/\s+/g, " ");
// console.log(normalizedText);

//!  Logical Assignment Operators (||=, &&=, ??=):

//? Logical OR-Assignment (||=): 

// let x = false;
// x ||= true; // equivalent to: x = x || true;
// console.log(x); // Output: true

// let y = 10;
// y ||= 20; // equivalent to: y = y || 20;
// console.log(y); // Output: 10 (unchanged)

//? Logical AND-Assignment (&&=):

// let x = true;
// x &&= false; // equivalent to: x = x && false;
// console.log(x); // Output: false

// let y = 0;
// y &&= 20; // equivalent to: y = y && 20;
// console.log(y); // Output: 20

//!  Numeric Separators:

// const bigNumber = 1_000_000;
// console.log(bigNumber);
// Output: 1000000;

//!  Promise.any():
