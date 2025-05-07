//! 1: What will be the output?

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const mergedObject = Object.assign({}, target, source);
// console.log(mergedObject);

//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 88,
//   },
// };

// const addSubjectGrade = (student, subject, marks) => {
//   if (!student.grades) {
//     student.grades = {};
//   }

//   return (student.grades[subject] = marks);
// };

// addSubjectGrade(student, "computer", 92);
// console.log(student);

//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// const areObjectsEqual = (obj1, obj2) => {
//   //   if (obj1.length != obj2.length) {
//   //     console.log("hi");
//   //     return false;
//   //   }
//   let o1 = Object.keys(obj1);
//   let o2 = Object.keys(obj2);

//   if (o1.length != o2.length) {
//     console.log("There keys are not same");
//     return false;
//   }

//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }

//   return true;
// };

// //? Example usage:
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false

//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.

let inputArray = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
const arrayToObj = (arr) => {
    //   console.log(arr[2].id);
    let obj = {};
    for (let key of arr) {
      console.log(key.id, key);
      obj[key.id] = key;
      // console.log(key);
    }
    return obj;
};
  
console.log(arrayToObj(inputArray));
