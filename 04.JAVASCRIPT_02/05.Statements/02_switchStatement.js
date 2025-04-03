//? Syntax:
// switch (expression) {
//   case value1:
//     //   Code to be executed if expression === value1
//     break;

//   case value2:
//     //   Code to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   //  Code to be executed if none of the cases match
// }

//todo let's see the example
//! Explain how the switch statement works and what will be the output when the variable day is set to different values.

// var day = 'monday`';
// switch(day){
//     case "monday":
//         console.log("Today is Monday.");
//         break;     
        
//     case "friday":
//         console.log("Today is Friday,lets go to the party.");
//         break;

//     case "sunday":
//         console.log("Today is Sunday,lets go to the church.");
//         break;

//     default:
//         console.log("NO CONDITION MATCHED.");
//         break;  
// }


//! Write a JavaScript switch statement that takes a variable areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: 'Rectangle,' 'Circle,' and 'Square.' For 'Rectangle,' use variables a and b as the sides; for 'Circle,' use a variable r as the radius; and for 'Square,' use variable a as the side length. If the provided shape is not recognized, log a message saying, 'Sorry the shape is not available.' Test your switch statement with areaOfShapes set to 'Square' and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

// var a = 5;
// var b = 10;
// // var areaOfShapes = 'Square';
// var areaOfShapes = 'Circle';
// var result;

// switch(areaOfShapes){
//     case "Rectangle":
//         console.log("Area of Rectangle is:" + (a*b));
//         break;
        
//     case "Circle":
//         console.log("Area of Circle is:" + (Math.PI * a * a));          // Math.PI = 3.14
//         break;

//     case "Square":
//         console.log("Area of Square is:" + (a*a));
//         break;

//     default:
//         console.log("Sorry the shape is not available.");
//         break;       
// }


//! Question: Explain the purpose of the code. What is it calculating based on the values of areaOfShapes, a, and b?
//? The code calculates and logs the area of different shapes (rectangle, circle, square) based on the value of the areaOfShapes variable.

//! Question: What will be the output if areaOfShapes is set to "Square" and why?
//? The output will be the square of the variable a (25) since the case matches "Square."

//! Question: Why is there a break statement after each case in the switch statement?
//? The break statement is used to exit the switch statement after the corresponding case is executed, preventing fall-through to subsequent cases.

//! Question: If areaOfShapes is set to "Circle," what will be logged to the console, and why is the variable r defined within the case block?
//? The output will be the area of a circle with radius r (28.26) since the case matches "Circle," and r is defined within the case block.

//! Question: What will happen if areaOfShapes is set to a shape that is not covered by any of the existing case statements?
//? The default case logs "Sorry, the shape is not available" if areaOfShapes is set to a shape not covered by any existing case.

//! Question: How does the switch statement handle the flow of control based on the value of areaOfShapes?
//? The switch statement evaluates the value of areaOfShapes and executes the code block corresponding to the matching case. The break statements ensure that only the relevant code block is executed.
