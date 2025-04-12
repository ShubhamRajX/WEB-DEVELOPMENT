//! Ex. le'ts say user wants to delete value 6.

// let value = 6;
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let updatedArray  = numbers.filter((curElem) => {
//     return curElem !== value;
// });
// console.log(updatedArray); // [1, 2, 3, 4, 5, 7, 8, 9]


//! Example 2: Filtering Products by Price 
//! Filter products with a price less than or equal to 500

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

// const filterProducts = products.filter((curElem) => {
//     // console.log(curElem.price); // 1200, 800, 300, 150
//     // console.log(curElem.name); // Laptop, Phone, Tablet, Smartwatch
//     // console.log(curElem.price <= 500); // false, false, true, true
    
//     return curElem.price <= 500;
// });
// console.log(filterProducts); // [ { name: 'Tablet', price: 300 }, { name: 'Smartwatch', price: 150 } ]


 //! Filter unique values from an array

 const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

//  let uniqueValues = numbers.filter((curElem, index, arr) => {
//   //   console.log(index);
//   //   console.log(arr.indexOf(curElem));
//   return arr.indexOf(curElem) === index;
// });
// console.log(uniqueValues);

// console.log(new Set(numbers)); // Set(9) { 1, 2, 3, 4, 6, 5, 7, 8, 9 }
// console.log([new Set (numbers)]); // [ Set(9) { 1, 2, 3, 4, 6, 5, 7, 8, 9 } ]
console.log([...new Set(numbers)]);
