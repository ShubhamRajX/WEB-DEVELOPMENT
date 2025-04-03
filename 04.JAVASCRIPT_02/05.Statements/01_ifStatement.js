//? Syntax
// if (condition) {
//   // Code to be executed if the condition is true
// } else {
//   // Code to be executed if the condition is false
// }

//? Let check the temperature

// var temp = 30;
// if(temp >= 30){
//     console.log("It's hot outside.");  
// }
// else{
//     console.log("It's not hot outside.");      
// }


//? We can also use an else if clause to check additional conditions:

//  var temperature = 15;
// if (temperature >= 30) {
//   console.log("lets go to beach");
// } else if (temperature >= 20 && temperature < 30) {
//   console.log("tv dekhte hai yr");
// } else {
//   console.log("kambhal oodo so jawo");
// }


//! Questions:
//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//? Extended voting eligibility checker with additional conditions

// Assume the user's age, citizenship status, and registration status as inputs
let userAge = 15;
let isCitizen = true; // Assume true for citizen, false for non-citizen
let isRegistered = true; // Assume false for not registered, true for registered
// //! Check eligibility using if...else statements with multiple conditions

// if(userAge >= 18){
//     if(isCitizen){
//         if(isRegistered){
//             console.log("You are eligible to vote.");
//         }
//         else{
//             console.log("You are not eligible to vote due to registration status.");
//         }
//     }
//     else{
//         console.log("You are not eligible to vote due to citizenship status.");    }
// }
// else{
//     console.log("You are not eligible to vote.(You are under 18 years old.)");
// }


//! 1: Write a program to check if a number is even or odd.

// var num = 15;
// if(num % 2 === 0){
//     console.log(num + " is aneven number.");
// }
// else{
//     console.log(num + " is an odd number.");    
// }


//! 2: Write a program to check if a number is prime.
//todo Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all odd numbers are prime.

// var num = 13;
// var num = 15;
// var isPrime = true; // Assume the number is prime initially
// for(var i = 2; i<num;i++){
//     if(num % i ===2){
//           isPrime = false; // If divisible by any number other than 1 and itself, it's not prime
//             break; // Exit the loop as we found a divisor     
//     }
// }
// if(isPrime){
//     console.log(num + " is a prime number.");
// }
// else{
//     console.log(num + " is not a prime number.");
// }


//! 3: Write a program to check if a number is positive, negative, or zero.

// var num = 0;
var num = -5;
// var num = 5;

if(num > 0){
    console.log(num + " is a positive number.");    
}
else if(num < 0){
    console.log(num + " is a negative number.");    
}
else{
    console.log(num + " is zero.");
}