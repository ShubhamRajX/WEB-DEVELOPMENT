//+++++++++++++++ Numbers +++++++++++++++++

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNumber = 23.89765423
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-US'));
// console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++ Maths +++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-3));

// console.log(Math.round(4.3));
// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2));                        // take maximum value
// console.log(Math.floor(4.8));                       // take minimum value

// console.log(Math.min(4,5,2,6,8));
// console.log(Math.max(4,5,2,6,8));
 
console.log(Math.random());
console.log((Math.random() * 10 ) + 1);
console.log(Math.floor(Math.random() * 10 ) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
