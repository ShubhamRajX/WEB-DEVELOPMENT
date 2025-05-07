// ! Creating Objects

// const product = {
//   id: 1,
//   pName: "laptop",
// };
// console.log(product);

// let person = {
//   name: "Vinod",
//   age: 30,
//   isStudent: false,
//   greet: function () {
//     console.log("Welcome to World Best CSS Course");
//   },
// };
// console.log(person);
// console.log(person.greet());
// person.greet()

let person = {
    name: "Vinod",
    age: 30,
    "is'Student": false,
    greet: function () {
      console.log("Welcome to World Best JavaScript Course");
    },
  };
//   console.log(person.age);
  
//! Accessing Properties:

// console.log(person.age);
// console.log(person.name);
// console.log(person["name"]);
// console.log(person[`is'Student`]);

//! Adding and Modifying Properties:

// person["job"] = "web dev";
// person.age = 18;
// person["age"] = 20;

// console.log(person);

//! Methods:

// person.greet();

//! Dynamic keys in an object:

// let idType = "studentId";
// let idType = "collegeId";

// let student = {
//   [idType]: "A123456", // Dynamic key based on idType
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
//     );
//   },
// };

// student.greet();

//! Data Modeling:

// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   start: function () {
//     console.log("Engine started!");
//   },
// };

//! Passing by value:

// let a = 10;
// const modifyValue = (x) => (x = 20);

// console.log(modifyValue(a));
// console.log(a);

//! Passing by reference:

// let obj = { id: 5, name: "kodyfier" };

// let obj1 = obj;
// obj1.name = "thapa technical";
// console.log(obj1);
// console.log("original", obj);

//! Object.assign():

// let obj = { id: 5, name: "kodyfier" };

// let obj1 = {};
// let newObj = Object.assign(obj1, obj);
// newObj.name = "thapa technical";
// console.log(newObj);
// console.log("original", obj);

//! Comparison by Reference:

// const obj1 = { name: "vinod" };
// const obj2 = { name: "vinod" };
// const obj3 = obj1;

// const isEqual = obj1 == obj2 ? true : false;
// const isEqual2 = obj1 == obj3 ? true : false;
// console.log(isEqual);
// console.log(isEqual2);