//? Reduce method

//? syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

//! Write a JavaScript fuknction that calculates the total  price of items in a shopping cart. The function should take an array of item prices as input and return the total price.

const productPrice = [100, 200, 300, 400, 500];

const totalPrice = productPrice.reduce((accum, curElem) => {
  return accum + curElem;
}, 0);

console.log(totalPrice); // 1500