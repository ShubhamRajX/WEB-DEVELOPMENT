// AND (&&)

var x = 5;
var y = 10;
// console.log(x > 0 && y > 0); // Output: true (both conditions are true)
// console.log(x > 0 && y < 0); // Output: false (one condition is false)


// OR (||)

var a = 5;
var b = 10;
// console.log(a > 0 || b > 0); // Output: true (at least one condition is true)
// console.log(a < 0 || b < 0); // Output: false (both conditions are false)


// NOT (!)

var c = true;
// console.log(!c); // Output: false (negation)
// console.log(!false); // Output: true (negation)


// Question
//? Combining logical operators allows you to create complex conditions:
//! Q: Write a program that determines if a person is eligible to drive based on their age being greater than or equal to 18 and having a valid driver's license❓

var age = 20;
var hasLicense = true;
// console.log(age >= 18 && hasLicense); // Output: true (eligible to drive)

//! How would the result change if hasDriverLicense was set to false❓

var age2 =54
var hasLicense = false;
// console.log(age2 >= 18 && hasLicense); // Output: false (not eligible to drive)