//! Find Method

// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// const result = numbers.find((curElem) => {
//     return curElem > 5;
// });
// console.log(result); // 6


//! findIndex Method

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result1 = number.map(curElem => curElem * 5);
// console.log(result1); // [5, 10, 15, 20, 25, 30, 35, 40, 45]

// const result2 =  result1.findIndex((curElem) => {
//     return curElem > 20;
// });
// console.log(result2); // 4


//! Filter Method

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result3 = numbers.filter((curElem) => {
    return curElem > 5;
});
console.log(result3); // [6, 7, 8, 9]
