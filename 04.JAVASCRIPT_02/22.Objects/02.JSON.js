//* JSON (JavaScript Object Notation):

// let student = {
//   id: 1,
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: false,
//   greet: function () {
//     console.log(
//       `hey my id is ${student.identity} & my name is ${student.sName}`
//     );
//   },
// };

// let jsonData = JSON.stringify(student);
// console.log(jsonData);
// let parsedObject = JSON.parse(jsonData);
// console.log(parsedObject);

//! "this" Object:

// ("use strict");
// x = 5;
// console.log(x);


// function callme() {
//   console.log(this);
// }
// callme(); // try to run on browser console

//todo  Let's check the this keyword values in an object methods:

//? Regular Function Expression:
// const obj = {
//   name: "Kodyfier",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj.greet();

//? "Method Shorthand" syntax:
// const obj = {
//   name: "Kodyfier",
//   greet() {
//     console.log(this);
//   },
// };

// obj.greet();

//? Fat Arrow Function
// const obj = {
//   name: "thapa technical",
//   greet: () => {
//     console.log(this);
//   },
// };

// obj.greet();

//! Objects Useful Methods:

const product = {
  id: 1,
  name: "Laptop",
  category: "Computers",
  brand: "ExampleBrand",
  price: 999.99,
  stock: 50,
  description:
    "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
  image: "image link will be added during projects",
};

//? 1: Object.keys():

// let keys = Object.keys(product);
// console.log(keys);.

//? 2: Object.values():

// let values = Object.values(product);
// console.log(values);

//? 3: Object.entries():

// let entries = Object.entries(product);
// console.log(entries);

//? 4: Object.hasOwnProperty():

// console.log(product.hasOwnProperty("name")); // Output: true
// console.log(product.hasOwnProperty("isStudent")); // Output: false

//? 5: Object.assign():

// const target = { a: 1, b: 5 };
// const source = { b: 3, c: 4 };
// const mergedObject = Object.assign(target, source);
// console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

//? 6: Object.freeze():

// Object.freeze(product);
// product.id = "5656";
// console.log(product);