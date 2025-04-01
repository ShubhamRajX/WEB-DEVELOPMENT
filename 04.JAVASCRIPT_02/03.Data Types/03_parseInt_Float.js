// const myString = "42";
const myString = "42.5";                    // it also return 42

const myNumber = parseInt(myString);        // Convert string to integer
// console.log(myNumber);


const myString2 = "42.5"; 
const myNumber2 = parseFloat(myString2);      // Convert string to float
// console.log(myNumber2);


// console.log(parseInt("1546"));                // 1546

// console.log(parseInt("1546, 10"));            // 1546  

// console.log(parseInt("     1546"));           // 1546

// console.log(parseInt(" 001546"));            // 1546
// console.log(parseFloat(" 001546"));            // 1546

// console.log(parseInt(" 584.65945"));            // 584
// console.log(parseFloat(" 584.65945"));            // 584.65945

// console.log(parseInt(" 584.65945abc"));        // 584
// console.log(parseFloat(" 584.65945abc"));      // 584.65945



// error or not give output

// console.log(parseInt("abc584.65945"));        // NaN
// console.log(parseFloat("abc584.65945"));      // NaN

// console.log(parseInt("&122545"));        // NaN
// console.log(parseFloat("&122545"));      // NaN

// console.log(parseInt("-356.45"));        // -356
// console.log(parseFloat("-356.45"));      // -356.45

// console.log(parseInt("sndcnc"));        // NaN
// console.log(parseFloat("sndcnc"));      // NaN



// NaN

// console.log(isNaN("Shubham"));               // true
// console.log(isNaN("123"));                   // false

// NaN === NaN, why is it false?

// console.log(NaN === NaN);               // false
// console.log(NaN == NaN);                  // false



