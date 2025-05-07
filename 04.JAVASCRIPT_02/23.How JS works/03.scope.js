//!  Scope in JavaScript:

// todo We have a Global Scope, Function Scope and Block Scope

//? Global Scope:

//  var globalVariable = "I am a global variable";

// function exampleFunction() {
//   console.log(globalVariable); // Accessible within the function
// }

// console.log(globalVariable); // Accessible globally

//? Function Scope:

// function exampleFunction() {
//     var functionScopedVar = "I am a function-scoped variable";
//     console.log(functionScopedVar); // Accessible within the function
// }
// exampleFunction();

// console.log(functionScopedVar); // Error: functionScopedVar is not defined

//!  Global Variable vs. Local Variable vs Block Scope:


const globalVariable = "I'm a global variable";

function myFunction() {
  // Function scope
  const functionVariable = "I'm a function variable";

  if (true) {
    // Block scope
    const blockVariable = "I'm a block variable";
    console.log(blockVariable);
    console.log(functionVariable);
    console.log(globalVariable);    
  }
//   console.log(blockVariable); // give error

  console.log(functionVariable);
}
// console.log(functionVariable);  // give error

myFunction();

// console.log(blockVariable);
// console.log(functionVariable);  //give error
// console.log(globalVariable);    //give error