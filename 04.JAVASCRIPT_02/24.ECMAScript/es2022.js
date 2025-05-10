//!    ECMAScript Features (2022) / ES13:

//? List of new useful features added in ES8  👇
// .at() function for indexing
// Object.hasOwn(obj, propKey)

//!  .at():

// const array = [1, 2, 4, 5, 6, 7];
// // console.log(array[array.length - 1]);
// console.log(array.at(-1));

//todo Note Datatypes supporting this function. 👇
// String
// Array
// All Typed Array classes: Uint8Array etc.

//!  Object.hasOwn(obj, propKey):

const book = {
    name: "World Best JS Course",
    author: "Thapa Technical",
  };
  
  // // Using Object.prototype.hasOwnProperty() method
  // console.log(book.hasOwnProperty("name")); //Output: true
  // console.log(book.hasOwnProperty("price")); //Output: false
  
  // // Using Object.hasOwn method
  // console.log(Object.hasOwn(book, "name"));
  
  //! Issues with hasOwnProperty
  //? Issue 01: Doesn't work for objects created using Object.create(null)
  
  const student = Object.create(null);
  console.log(typeof student);
  student.name = "vinod";
  // console.log(student.hasOwnProperty("name"));
  console.log(Object.hasOwn(student, "name"));
  