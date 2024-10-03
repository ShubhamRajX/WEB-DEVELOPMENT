let score = "33"
// let score = "33abc"
// let score = null
// let score = undefined
// let score = true
// let score = "Shubham"

console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);                             // conversion of number to string

console.log(valueInNumber);                                    // output is (NaN) not a number


// conversion into number

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// Null => 0
// undefined => NaN



// let loggedIn = 1                                            // output is true
let loggedIn = 0                                               // output is false
// let loggedIn = ""                                           // output is false
// let loggedIn = "Shubham"                                    // output is true

let booleanIsLoggedIn = Boolean(loggedIn)
console.log(typeof booleanIsLoggedIn);

console.log(booleanIsLoggedIn);


// conversion into boolean
// 1 => true
// 0 => false
// "" => false
// "Raj" => true


let number = 33;
let valueInString = String(number)
console.log(typeof valueInString);                          // conversion of number to string

console.log(valueInString);                                 // output is same
