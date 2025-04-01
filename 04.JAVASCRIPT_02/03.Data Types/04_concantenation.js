const str1 = "Shubham ";
const str2 = "Raj";
const str3 = str1 + str2;                // Concatenation using + operator
const str4 = str1.concat(str2);          // Concatenation using concat() method

// console.log(str3);                      // Output: "Shubham Raj"
// console.log(str4);                      // Output: "Shubham Raj"
// console.log(str3 === str4);             // Output: true


let sum = "das" + 5;                // Concatenation of string and number
// console.log(sum);                      // Output: "das5"
// console.log(typeof sum);                // Output: string

let sum2 = "das" - 5;               // Subtraction of string and number
// console.log(sum2);                     // Output: NaN
// console.log(typeof sum2);               // Output: number

let sum3 = "5" - 5;               // Subtraction of string and number
// console.log(sum3);                     // Output: 0

let sum4 = "10" - 5;               // Subtraction of string and number
// console.log(sum4);                     // Output: 5

let sum5 = "10" + 5;               // Concatenation of string and number
// console.log(sum5);                     // Output: "105"


// Question

console.log("5" + 5);               // Output: "55"
console.log(9 - "5");             // Output: 4

console.log("Anisha" + "Shubham"); // Output: "AnishaShubham"
console.log("Anisha" - "Shubham"); // Output: NaN

console.log(" " + " ");         // Output: "  "
console.log(" " - " ");         // Output: 0

console.log(" " - 5);           // Output: -5
console.log(typeof(" " - 5));         // Output: number

console.log(" " + 5);           // Output: " 5"
console.log(typeof(" " + 5));         // Output: string

console.log(true + true);         // Output: 2
console.log(true + false);        // Output: 1
console.log(true - true);         // Output: 0
console.log(true - false);        // Output: 1
console.log(false + false);       // Output: 0
console.log(false - false);      // Output: 0
console.log(false - true);       // Output: -1
console.log(true + "5");         // Output: "true5"
console.log(true - "5");         // Output: NaN , but output is -4
