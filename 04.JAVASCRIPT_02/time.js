//!  Timing Based Events in JavaScript

//! 1. setTimeout:
//? Syntax

// // function delayedFunction() 
// function delayedFunction(x) {
// //   console.log("This function was delayed by 2000 milliseconds (2 seconds).");
//   console.log("This function was delayed by 2000 milliseconds (2 seconds).", x);
// }

// // setTimeout(delayedFunction, 2000);
// setTimeout(() => delayedFunction(5), 2000);

//! 2. setInterval:
//? Synatx

// function repeatedFunction() {
//   console.log(
//     "This function will be repeated every 1000 milliseconds (1 second)."
//   );
// }

// setInterval(repeatedFunction, 1000);

//! 3. Clearing Timeout with clearTimeout:
//? Synatx

// * clearTimeout(timeoutID);

// function delayedFunction() {
//   console.log("This function was delayed by 2000 milliseconds (2 seconds).");
// }
// const myWork = setTimeout(delayedFunction, 2000);
// clearTimeout(myWork);

//todo Cancel the timeout before it occurs

//! 4. Clearing Interval with clearInterval:
//? Syntax

// clearInterval(intervalID);

// function repeatedFunction() {
//   console.log("This function repeats every 1000 milliseconds (1 second).");
// }

// const intervalID = setInterval(repeatedFunction, 1000);

// clearInterval(intervalID);

//todo Cancel the interval


//! Write a JavaScript program that defines a function called repeatedFunction. This function should log the message "This function repeats every 1000 milliseconds (1 second)" to the console. Then, set up an interval using setInterval() to call repeatedFunction every 1000 milliseconds.  Additionally, after 5 seconds have elapsed, use setTimeout() to clear the interval previously set up. Make sure to log the message "Interval cleared after 5 seconds." when the interval is cleared.

// const repeatedFunction = () => {
//   console.log("This function repeats every 1000 milliseconds (1 second)");
// };

// repeatedFunction();

// const intervalID = setInterval(repeatedFunction, 1000);

// setTimeout(() => {
//   clearInterval(intervalID);
// }, 5000);


// let timeoutID = setTimeout(() => {
//     console.log("You won't see this");
//   }, 3000);
  
//   // Cancel the timeout before it runs
//   clearTimeout(timeoutID);
  
let count = 0;
let intervalID = setInterval(() => {
  count++;
  console.log("Count: " + count);

  if (count === 5) {
    clearInterval(intervalID);  // stops after 5 iterations
  }
}, 2000);