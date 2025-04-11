// todo Practice Time
//! write a program to Multiply each element with 2
const numbers = [1, 2, 3, 4, 5];

// for(let item of numbers){
//     // console.log(item * 2);
//     console.log(`${item} * 2 = ${item * 2}`);    
// }

//* forEach -  Performs an action on each element

// numbers.forEach((item) => {
//     console.log(item * 2);
// })

//* map -  Creates a new array with transformed elements

const doubleValue = numbers.map((item) => {
    return item * 2;
});
console.log(doubleValue);


