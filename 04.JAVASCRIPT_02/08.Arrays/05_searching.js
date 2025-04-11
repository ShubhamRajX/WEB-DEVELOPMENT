const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//! indexOf() method
//* syntax: array.indexOf(value, startIndex)
//*         array.indexOf(value)

// let num = numbers.indexOf(5); // 4
// num = numbers.indexOf(11); // -1
// console.log(num); // 4

// num = numbers.indexOf(5, 5); // -1  
// num = numbers.indexOf(5, 2); // 4
// console.log(num); // -1

// console.log(numbers.indexOf(7)); // 6
// console.log(numbers.indexOf(7, 7)); // -1
// console.log(numbers.indexOf(7, 6)); // 6


//! lastIndexOf() method
//* syntax: array.lastIndexOf(value, startIndex)
//          array.lastIndexOf(value)

// const result = numbers.lastIndexOf(4); // 3
// console.log(result); // 3

const num = [1,2,4,3,5,4,2,6,7,3,7,2,7]

// console.log(num.indexOf(7)); // 8
// const result = num.lastIndexOf(7); // 12
// console.log(result); // 12 

// const result = num.lastIndexOf(7, 8); // 8
// console.log(result); // 8


//! includes() method
//* syntax: array.includes(value, startIndex)   
//*         array.includes(value)
//* returns true or false

// const isValue = numbers.includes(5); // true
// const isValue = numbers.includes(84); // false
// console.log(isValue);

// const isTrue = numbers.includes(5, 5); // false
const isTrue = numbers.includes(5, 2); // true\
console.log(isTrue);