//! Other Useful Methods:

//? toUpperCase and toLowerCase

// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript


//? trim

// const str = "   Hello, World!   ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);


//? split

const str = "apple,orange,banana";

// console.log(str);

// let strArr = str.split(",")
// let strArr = str.split();

// let strArr = str.split("");
// let strArr = str.split(" ");

// let strArr = str.split(",").reverse();
let strArr = str.split(",").reverse().join();
console.log(strArr);
